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
    if (this.dataService.isLoggedIn()) { // user is logged in -> get data
      this.dataService.get('/user').subscribe(data => {
        this.moviesList = data.result.movielist;
      });
    }
  }

  ngOnInit() {
  }

  // Remove movie form watchlist and gives feedback
  remove(movie: any) { // remove movie from watchlist
    this.dataService.post('/user/remove', {id: movie.id}).subscribe(data => {
      this.moviesList = data.result;
      this.dataService.get('/user').subscribe(res => { // fetch updated movielsit
       this.moviesList = res.result.movielist;
       this.eventService.publish(res.result.movielist.length) // publish changes (movielist length)
      })
      // snackbar notification, confirming removal
      var x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    })
  }



}
