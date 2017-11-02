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
    this.dataService.get('/user').subscribe(res => {
      this.moviesList = res.user.data.movielist;
      console.log(this.moviesList)
    })
  }

  ngOnInit() {
  }

}
