import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
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

  movies: Array<any>;
  filteredMovies: Array<any>;
  IMAGE_URL: string;
  selectedMovie: SelectedMovie;
  genreList: Array<any>;
  filters: Array<any>;
  isLoggedIn: boolean = false; //assume worst

  constructor(private eventService: EventService, private dataService: DataService, private searchService: SearchService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();
      
    // TODO: get years from the result set
    this.filters = [
      {
        name: 'Year',
        options: [
          { name: '2017', checked: false },
          { name: '2016', checked: false },
          { name: '2015', checked: false },
        ]
      }, 
    ]

    this.dataService.getPopular().subscribe(movies => this.update(movies));

    /* Listen to changes in search secrive */
    searchService.change.subscribe(movies => this.update(movies));

    this.dataService.getGenreList().subscribe(res => {
      this.genreList = res

      // TODO: Filter the genre_list on the result set
      this.filters = [{
        name: 'Genres',
        options: this.genreList.map(v => {
          return {
            checked: false,
            ...v
          }
        }),
      }, ...this.filters];
    });
  }

  ngOnInit() {
  }


  /*Update movies according to selector*/
  selectorUpdate(option: string){
    switch(option){
      case 'Popular':
        this.dataService.getPopular().subscribe(movies => this.update(movies));
        break;
      case 'Upcoming':
        this.dataService.getLatest().subscribe(movies => this.update(movies));

        break;
      case 'Top_Rated':
        this.dataService.getTop_Rated().subscribe(movies => this.update(movies));
        break;
      default:
        this.dataService.getPopular().subscribe(movies => this.update(movies));
        break;
    }
  }

  filterYears(movies) {
    const year_options = this.filters
      .filter(filter => filter.name === 'Year')[0]['options'];

    const years = year_options
      .filter(option => option.checked)
      .map(option => option.name);

    if (years.length) {
      const containsYear = new RegExp(years.join("|"));  
      movies = movies.filter(movie => containsYear.test(movie.release_date));
    }

    return movies;
  }

  filterGenres(movies) {
    const genre_options = this.filters
      .filter(filter => filter.name === 'Genres')[0]['options'];

    const genre_ids = genre_options
      .filter(option => option.checked)
      .map(option => option.id);

    if (genre_ids.length) {
      // filter movies where there is an intersection between genre_ids and move.genre_ids
      movies = movies.filter(movie => movie.genre_ids.filter(id => genre_ids.includes(id)).length )
    }

    return movies;
  }

  filterList(movies) {
    movies = this.filterYears(movies);
    movies = this.filterGenres(movies);
    return movies;
  }

  update(movies: any) {
    this.movies = movies;
    this.filteredMovies = this.filterList(movies);
  }

  onFilterChange(event) {
    console.log('filtering!');
    this.filteredMovies = this.filterList(this.movies);
  }

  setMovie(movie: any) {
    console.log(movie)
    this.selectedMovie = {
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
    };

    this.eventService.publishSelectedMovie(this.selectedMovie) //publish selectedMovie to movie-modal
  }
}
