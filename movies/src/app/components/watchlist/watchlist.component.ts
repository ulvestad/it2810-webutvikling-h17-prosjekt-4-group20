import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movieslist: Array<any>;
  private IMAGE_URL:string = 'https://image.tmdb.org/t/p/w320/';

  constructor(private dataService: DataService) {
    if(this.dataService.isLoggedIn()){ //user is logged in -> get data
      this.dataService.get('/user').subscribe(res => {
        this.movieslist = res.user.data.movielist;
      })
    }
    console.log(this.movieslist)
  }

  ngOnInit() {
  }

  remove(movie: any) {
    console.log('todo: remove me', movie)
  }

}
