import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  moviesList: Array<any>;

  constructor(private dataService: DataService) {
    if(this.dataService.isLoggedIn()){ //user is logged in -> get data
      this.dataService.get('/user').subscribe(res => {
        this.moviesList = res.user.data.movielist;
      })
    }
  }

  ngOnInit() {
  }

}