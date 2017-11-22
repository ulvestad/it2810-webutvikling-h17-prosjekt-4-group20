import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';

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

  constructor(
    private eventService: EventService,
    private dataService: DataService,
    private searchService: SearchService,
    private router: Router) {

    this.page = 0;
    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();

    /* Listens for changes in eventHome */
    eventService.eventHome.subscribe(data => {
      this.page = data.page;
      this.current = data.current;
      this.router.navigate(['/']);
      this.dataService.getMovies('/' + this.current).subscribe(movies => this.update(movies));
    });

    /* Listens to changes in changeSearch, triggered after a search */
    this.searchService.changeSearch.subscribe(movies => {
      this.activeButton = 'popular';
      this.update(movies);
      this.current = 'search';
    });
  }

  ngOnInit() {
    this.filters = {'year': {name: 'Year', options: []}, 'genre': {name: 'Genre', options: []}};
    this.filterArray = [];

    this.dataService.getGenreList().subscribe(res => {
      this.idToGenre = new Map<number, String>(res.genres.map(el => [el.id, el.name]));
      if (this.eventService.current !== 'search') {
        this.eventService.publishHome(0, this.eventService.current || 'popular');
      }
     });
  }

  onScroll() {
    this.page = this.page + 1;
    this.dataService.post('/' + this.current, {page: this.page}).subscribe(res => {
      this.update([...this.movies, ...res.result]);
    });
  }

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

  filterYears(movies) {
    const year_options = this.filters['year']['options'];

    const years = year_options
      .filter(option => option.checked)
      .map(option => option.name);

    if (years.length) {
      const containsYear = new RegExp(years.join('|'));
      movies = movies.filter(movie => containsYear.test(movie.release_date));
    }

    return movies;
  }

  filterGenres(movies) {
    const genre_options = this.filters['genre']['options'];

    const genre_ids = genre_options
     .filter(option => option.checked)
     .map(option => option.id);

    if (genre_ids.length) {
     // filter movies where there is an intersection between genre_ids and move.genre_ids
     movies = movies.filter(movie => movie.genre_ids.filter(id => genre_ids.includes(id)).length);
    }

    return movies;
  }

  filterList(movies) {
    movies = this.filterYears(movies);
    movies = this.filterGenres(movies);
    return movies;
  }

  dateToYear(date: String): String {
    return date.split('-')[0];
  }

  yearsFromMovies(movies: any): Array<any> {
    const years = movies.map(movie => movie.release_date).map(this.dateToYear);

    const uniqueYears = Array.from(new Set(years));
    const sortedYears = uniqueYears.sort().reverse();

    return sortedYears;
  }

  idsFromMovies(movies: any): Array<any> {
    const genreIds = this.flatten(movies.map(movie => movie['genre_ids']));
    const uniqueIds = this.unique(genreIds);

    return uniqueIds;
  }

  flatten(list: Array<Array<any>>): Array<any> {
    const concat = [].concat.apply([], list);
    return concat;
  }

  unique(list: Array<any>): Array<any> {
    return Array.from(new Set(list));
  }

  update(movies: any) {
    this.movies = movies;

    // update year filters
    const years = this.yearsFromMovies(movies);
    const current_year_filters = this.filters.year.options;
    const currenet_years = current_year_filters.map(filter => filter.name);
    const new_years = years.filter(year => !currenet_years.includes(year));
    const new_year_filters = new_years.map(year => ({
      name: year,
      checked: false
    }));
    const year_filters = [...current_year_filters, ...new_year_filters];


    // update genre filters
    const genreIds = this.idsFromMovies(movies);
    const current_genre_filters = this.filters.genre.options;
    const current_genre_ids = current_genre_filters.map(filter => filter.id);
    const new_genres = genreIds.filter(id => !current_genre_ids.includes(id));

    const new_genre_filters = new_genres.map(genreId => ({
      name: this.idToGenre.get(genreId),
      id: genreId,
      checked: false
    }));

    const genre_filters = [...current_genre_filters, ...new_genre_filters.filter(f => f.name !== undefined)];

    this.filters = {
      year: {
        name: 'Year',
        options: year_filters
      }, genre: {
        name: 'Genre',
        options: genre_filters
      }
    };

    this.filterArray = [this.filters['genre'], this.filters['year']]
      .filter(el => el !== undefined)
      .filter(filter => filter.options.length > 1);

    this.filteredMovies = this.filterList(movies);
  }

  onFilterChange(event) {
    this.filteredMovies = this.filterList(this.movies);
  }

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

    this.eventService.publishSelectedMovie(this.selectedMovie); // publish selectedMovie to movie-modal

  }
}
