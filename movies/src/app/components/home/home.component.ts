import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
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
  selectedMovie: Array<any>;
  genreList: Array<any>;

  constructor(private dataService: DataService, private cookieService: CookieService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320'

    this.dataService.getPopular()
      .subscribe((res) => {
        this.top_movies_big = res.slice(0,4);
        this.top_movies_small1 = res.slice(4,12);
        this.top_movies_small2 = res.slice(12,);
    });

    this.dataService.getGenreList()
      .subscribe((res) => {
        this.genreList = res;
        console.log(res);
    });
  }

  ngOnInit() {
  }

  setMovie(movie: any) {
    this.selectedMovie = movie;
  }

  getGenre(genre_id: any){
    return this.genreList.find(e => e.id === genre_id).name
  }

  addToMovieList(movie: any){
    console.log(movie.title)
    this.dataService.post('/user/add', {title: movie.title}).subscribe(res => {
      this.cookieService.set('token', res.token );
      console.log(res)
    })
  }

}
