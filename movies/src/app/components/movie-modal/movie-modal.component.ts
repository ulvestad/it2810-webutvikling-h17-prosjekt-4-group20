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
  isLoggedIn: boolean;

  constructor(private eventService: EventService, private dataService: DataService,  private cookieService: CookieService) {
    eventService.eventSelect.subscribe(data => this.selectedMovie = {...data});
    this.dataService.getGenreList().subscribe(data => this.genreList = data.genres);
    this.isLoggedIn = this.dataService.isLoggedIn();
  }

  ngOnInit() {
  }

  getGenre(genre_id: any) {
    return this.genreList.find(e => e.id === genre_id).name;
  }

  addToMovieList(movie: any) {
    this.dataService.post('/user/add', {id: this.selectedMovie.id}).subscribe(res => {
      console.log(this.selectedMovie.id, 'added', res);

      // snackbar
      var x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
  }

}
