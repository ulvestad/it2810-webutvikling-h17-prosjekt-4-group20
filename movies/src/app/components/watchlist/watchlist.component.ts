import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { EventService } from '../../services/event.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  moviesList: Array<any>;
  private IMAGE_URL:string = 'https://image.tmdb.org/t/p/w320/';

  constructor(private eventService: EventService, private dataService: DataService, private cookieService: CookieService) {
    if(this.dataService.isLoggedIn()){ //user is logged in -> get data
      this.dataService.get('/user').subscribe(res => {
        this.moviesList = res.user.data.movielist;
      })
    }
  }

  ngOnInit() {
  }

  remove(movie: any) {
    this.dataService.post('/user/remove', {id: movie.id}).subscribe(res => {
      if (res.success) this.cookieService.set('token', res.token );
      console.log(movie.title, 'removed', res);
      this.dataService.get('/user').subscribe(res => { //fetch updated movielsit
        this.moviesList = res.user.data.movielist;
        this.eventService.publish(res.user.data.movielist.length) //publish changes (movielist length)
      })
    })
  }



}
