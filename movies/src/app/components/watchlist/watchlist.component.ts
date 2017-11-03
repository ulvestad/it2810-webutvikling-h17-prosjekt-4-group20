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
    this.dataService.get('/user').subscribe(res => {
      this.movieslist = res.user.data.movielist;
    })
  }

  ngOnInit() {
  }

  remove(movie: any) {
    console.log('todo: remove me', movie)
  }

}
