import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';
import { flatten, unique, dateToYear, sortOnProp} from '../../utils/utils';

interface SelectedMovie {
  id: number;
  title: string;
  genre_ids: any;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  page: number;
  current: string;
  movies: Array<any>;
  filteredMovies: Array<any>;
  IMAGE_URL: string;
  selectedMovie: SelectedMovie;
  idToGenre: Map<number, String>;
  filters: any;
  filterArray: Array<any>;
  isLoggedIn = false; // assume worst
  activeButton: string;
  moreMoviesLeft: boolean;

  constructor(
    private eventService: EventService,
    private dataService: DataService,
    private searchService: SearchService,
    private router: Router) {

    this.page = 0;
    this.moreMoviesLeft = true;

    // Overrides the background from login/register
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();

    /* Listens for changes in eventHome */
    eventService.eventHome.subscribe(data => {
      this.moreMoviesLeft = true;
      this.page = data.page;
      this.current = data.current;
      this.router.navigate(['/']);
      this.dataService.getMovies('/' + this.current).subscribe(movies => this.update(movies));
    });

    /* Listens to changes in changeSearch, triggered after a search */
    this.searchService.changeSearch.subscribe(movies => {
      this.filters = this.resetFilters;
      this.activeButton = 'popular';

      // moreMoviesLeft is used to determine wether the load spinner is to be displayed or not,
      // and wether scroll events should trigger a load request.
      this.moreMoviesLeft = true;
      if (movies) {
        // If the new movieList has less than 20 elements, it is the last result from our database
        // The load spinner should not be visible, and scrolling should not trigger a new load.
        this.moreMoviesLeft = movies.length < 20 ? false : true;
      }

      this.update(movies);
      this.current = 'search';
    });
  }

  resetFilters = {'year': {name: 'Year', options: []}, 'genre': {name: 'Genre', options: []}};

  ngOnInit() {
    this.filters = this.resetFilters;
    this.filterArray = [];

    // Obtain the list of genres from the server
    this.dataService.getGenreList().subscribe(res => {
      // Movies contains a list of genre_ids, but we want to display the genre names
      // The idToGenre variable is a map from a genre_id to the corresponding name
      this.idToGenre = new Map<number, String>(res.genres.map(el => [el.id, el.name]));

      // Default to desplay the most popular movies
      if (this.eventService.current !== 'search') {
        this.eventService.publishHome(0, this.eventService.current || 'popular');
      }
    });
  }

  /*Function for infinite scroll*/
  onScroll() {
    if (!this.moreMoviesLeft) {
      return;
    }
    this.page = this.page + 1;
    this.dataService.getMovies('/' + this.current, this.page).subscribe(res => {
      if (res.length === 0) {
        return this.moreMoviesLeft = false;
      }
      this.update([...this.movies, ...res]);
    });
  }

  /*Function for sorting movies shown*/
  sort(option: string) {
    this.activeButton = option;
    if (option === 'popular') {
      this.movies.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    } else if (option === 'top') {
      this.movies.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
    }
  }

  /* Given a list of movie, filter the list to contain the elements corresponding to the selected year filters */
  filterYears(movies) {
    const year_options = this.filters['year']['options'];

    // Get values of checked year filters
    const years = year_options
      .filter(option => option.checked)
      .map(option => option.name);

    // If there are any checked year filters... 
    if (years.length) {
      // Make regex that matces if string contains any of the years
      const containsYear = new RegExp(years.join('|'));

      // Drop the movies that does not contain a filtered year  
      movies = movies.filter(movie => containsYear.test(movie.release_date));
    }

    return movies;
  }

    /* Given a list of movie, filter the list to contain the elements corresponding to the selected genre filters */
  filterGenres(movies) {
    const genre_options = this.filters['genre']['options'];

    // Get values of checked genre filters
    const genre_ids = genre_options
     .filter(option => option.checked)
     .map(option => option.id);

    // If there are any checked genre filters... 
    if (genre_ids.length) {

     // filter movies where there is an intersection between genre_ids and move.genre_ids
     movies = movies.filter(movie => movie.genre_ids.filter(id => genre_ids.includes(id)).length);
    }

    return movies;
  }

  /* Given a list of movies, apply filters on genre and year and return the filtred list*/
  filterList(movies) {
    movies = this.filterYears(movies);
    movies = this.filterGenres(movies);

    return movies;
  }


  /* Get list of all unique years from the list of movies */
  yearsFromMovies(movies: any): Array<any> {
    // Extract the release_date field from the list of movies
    const years = movies.map(movie => movie.release_date).map(dateToYear);

    // Remove any duplicate values
    const uniqueYears = Array.from(new Set(years));

    // Sort the list in desending order
    const sortedYears = uniqueYears.sort().reverse();

    return sortedYears;
  }

  /* Get list of all unique genre IDs from the list of movies */
  genreIDsFromMovies(movies: any): Array<any> {
    // Extract the field containing a list of genre_ids for each movie
    // Flatten the result to get all ids in one list
    const genreIds = flatten(movies.map(movie => movie['genre_ids']));

    // Drop any duplicate values
    const uniqueIds = unique(genreIds);

    return uniqueIds;
  }

  /* Update the filter values for genres when new movies are loaded */
  updateGenreFilters(movies) {
    // Get all genres relevant to this movie list
    const genreIds = this.genreIDsFromMovies(movies);

    // Get the genre filters that are already visible, extract their genre_ids
    const current_genre_filters = this.filters.genre.options;
    const current_genre_ids = current_genre_filters.map(filter => filter.id);

    // Drop any genre_ids that already have filters
    const new_genres = genreIds.filter(id => !current_genre_ids.includes(id));

    // Generate a new filters for every new genre
    const new_genre_filters = new_genres.map(genreId => ({
      name: this.idToGenre.get(genreId),
      id: genreId,
      checked: false
    })).filter(genre => genre.name !== undefined); // Remove the undefined genre

    // Merge the old filters with the newly generated ones
    return [...current_genre_filters, ...new_genre_filters];
  }

  /* Update the filter values for years when new movies are loaded */
  updateYearFilters(movies) {
    // Get all years relevant to this movie list
    const years = this.yearsFromMovies(movies);

    // Get the year filters that are already visible, extract their genre_ids
    const current_year_filters = this.filters.year.options;
    const currenet_years = current_year_filters.map(filter => filter.name);

    // Drop any years that already have filters
    const new_years = years.filter(year => !currenet_years.includes(year));

    // Generate a new filters for every new year
    const new_year_filters = new_years.map(year => ({
      name: year,
      checked: false
    }));

    // Merge the old filters with the newly generated ones
    return [...current_year_filters, ...new_year_filters];
  }

  /* When the list of movies updates, update the filter lists to display any new relevant fields */
  updateFilters(movies: any) {
    const year_filters = this.updateYearFilters(movies);
    const genre_filters = this.updateGenreFilters(movies);

    // Update the global filter object
    this.filters = {
      year: {
        name: 'Year',
        options: year_filters
      }, genre: {
        name: 'Genre',
        // Sort the genre filters on the name property
        options: sortOnProp('name', genre_filters)
      }
    };

    // Export an array of the genre and year filters to be used by the view template
    this.filterArray = [this.filters['genre'], this.filters['year']]
      .filter(el => el !== undefined)
      .filter(filter => filter.options.length > 1);

    // Update the filteredMovies list with the newly loaded filters
    this.filteredMovies = this.filterList(movies);
  }

  /* Update the component's movie list, and the filters that depend on it */
  update(movies: any) {
    this.movies = movies;

    this.updateFilters(movies);
  }

  /* EventListener reacting on any change on filters*/
  onFilterChange(event) {
    this.filteredMovies = this.filterList(this.movies);
    this.moreMoviesLeft = true;
    this.onScroll();
  }

  /* Set the selected movie to be used by the movie-modal component */
  setMovie(movie: any) {
    this.selectedMovie = {
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
    };

    // publish selectedMovie to movie-modal
    this.eventService.publishSelectedMovie(this.selectedMovie);
  }
}
