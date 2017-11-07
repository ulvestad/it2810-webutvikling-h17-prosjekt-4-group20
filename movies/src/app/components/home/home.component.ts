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

  top_movies_big: Array<any>;
  top_movies_small1: Array<any>;
  top_movies_small2: Array<any>;
  IMAGE_URL: string;
  selectedMovie: SelectedMovie;
  genreList: Array<any>;
  isLoggedIn: boolean = false; //assume worst

  constructor(private dataService: DataService, private cookieService: CookieService, private searchService: SearchService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();

    this.dataService.getPopular().subscribe(movies => this.update(movies));

    /* Listen to changes in search secrive */
    searchService.change.subscribe(movies => this.update(movies));

    this.dataService.getGenreList().subscribe(res => this.genreList = res);

  }

  ngOnInit() {
  }

  /* Slices up the list into movies */
  update(movies: any) {
    this.top_movies_big = movies.slice(0,4);
    this.top_movies_small1 = movies.slice(4,12);
    this.top_movies_small2 = movies.slice(12,);
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
  }

  getGenre(genre_id: any){
    return this.genreList.find(e => e.id === genre_id).name
  }

  addToMovieList(movie: any){
    this.dataService.post('/user/add', {id: this.selectedMovie.id}).subscribe(res => {
      if (res.success) this.cookieService.set('token', res.token );
      console.log(this.selectedMovie.id, 'added', res);
    })
  }

  removeFromMovieList(movie: any){
    this.dataService.post('/user/remove', {id: movie.id}).subscribe(res => {
      if (res.success) this.cookieService.set('token', res.token)
      console.log('removed', res)
    })
  }

}
