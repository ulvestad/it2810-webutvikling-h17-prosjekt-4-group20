import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { SearchService } from '../../services/search.service';

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
  next: number;
  movies: Array<any>;
  IMAGE_URL: string;
  selectedMovie: SelectedMovie;
  genreList: Array<any>;
  isLoggedIn: boolean;

  constructor(private dataService: DataService, private cookieService: CookieService, private searchService: SearchService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();
    this.next = 0;

    this.dataService.getPopular().subscribe(movie => this.movies = movie);

    /* Listen to changes in search secrive */
    searchService.change.subscribe(movie => this.movies = movie);

    this.dataService.getGenreList().subscribe(res => this.genreList = res);

  }

  ngOnInit() {
  }

  /*Update movies according to selector*/
  selectorUpdate(option: string) {
    switch (option) {
      case 'Popular':
        this.next = 0;
        this.dataService.getPopular().subscribe(movie => this.movies = movie);
        break;
      case 'Upcoming':
        this.next = 0;
        this.dataService.getLatest().subscribe(movie => this.movies = movie);
        break;
      case 'Top_Rated':
        this.next = 0;
        this.dataService.getTop_Rated().subscribe(movie => this.movies = movie);
        break;
      default:
        this.dataService.getPopular().subscribe(movie => this.movies = movie);
        break;
    }
  }

  onScroll() {
    this.next = this.next + 1;
    this.dataService.post('/lazyMovies', {nextNumber: this.next}).subscribe(res => {
      this.movies = [...this.movies, ...res.data];
    });
  }

  setMovie(movie: any) {
    console.log(movie);
    this.selectedMovie = {
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
    };
  }

  getGenre(genre_id: any) {
    return this.genreList.find(e => e.id === genre_id).name;
  }

  addToMovieList(movie: any) {
    this.dataService.post('/user/add', {id: this.selectedMovie.id}).subscribe(res => {
      if (res.success) {
        this.cookieService.set('token', res.token);
      }
      console.log(this.selectedMovie.id, 'added', res);
    });
  }

  removeFromMovieList(movie: any) {
    this.dataService.post('/user/remove', {id: movie.id}).subscribe(res => {
      if (res.success) {
        this.cookieService.set('token', res.token);
      }
      console.log('removed', res);
    });
  }

}
