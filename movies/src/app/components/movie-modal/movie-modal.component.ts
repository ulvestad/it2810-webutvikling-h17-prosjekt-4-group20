import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';

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
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent implements OnInit {

  selectedMovie: SelectedMovie;
  genreList: Array<any>;
  isLoggedIn: boolean = false; //assume worst

  constructor(private eventService: EventService, private dataService: DataService,  private cookieService: CookieService) {

    eventService.eventSelect.subscribe((data) => {
      this.selectedMovie = { //update selectedMovie
        id: data.id,
        title: data.title,
        genre_ids: data.genre_ids,
        overview: data.overview,
        vote_average: data.vote_average,
        release_date: data.release_date,
        poster_path: data.poster_path,
      };
    });

    this.dataService.getGenreList().subscribe(res => this.genreList = res);
    this.isLoggedIn = this.dataService.isLoggedIn();

  }

  ngOnInit() {
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

}
