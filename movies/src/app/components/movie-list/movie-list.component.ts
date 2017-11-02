import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

interface SelectedMovie {
  title: string;
  genres: string;
  description: string;
  rating: number;
  image: string;
}

const IMAGE_URL = 'https://image.tmdb.org/t/p/w320';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  query: string;
  next: number;
  movies: Array<any>;
  selectedMovie: SelectedMovie;

  constructor(private dataService: DataService, private cookieService: CookieService) {
    this.query = ''
    this.selectedMovie = {
      title: '',
      genres: '',
      description: '',
      rating: -1,
      image: '',
    };

    this.next = 0;
    //this.dataService.getMovies().subscribe(res => this.movies = res);
  }

  ngOnInit() {
  }

  onChange(query: string) {
    // TODO set limit somehow
    if (query.length >= 2) {
      this.query = query;
      this.search(query);
    }
  }

  /* Returns the results for search string query */
  search(query: string) {
    this.dataService.post('/search', {query: query}).subscribe(res => this.movies = res.result)
  }

  /* TODO må sammarbeide med search. */

  // sette limit på search? for så å hente mer her
  // Lage ny route med /lazySearch?
  onScroll() {
    this.next = this.next + 1;
    this.dataService.post('/lazyMovies', {nextNumber: this.next}).subscribe(res => {
      this.movies = [...this.movies, ...res.data];
    });
  }

  setMovie(movie: any) {
    this.dataService.getMovieDetails(movie['movieId']).subscribe(res => {
      this.selectedMovie = {
        title: movie.title,
        genres: res.genres,
        description: res.overview,
        rating: res.vote_average,
        image: IMAGE_URL + res.poster_path,
      };
    });
  }

  addToMovieList(){
    this.dataService.post('/user/add', {title: this.selectedMovie.title}).subscribe(res => {
      this.cookieService.set('token', res.token );
      console.log(res)
    })
  }
}
