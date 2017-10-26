import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  movies: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getMovies()
      .subscribe(res => this.movies = res);
  }

  title = 'app';
}
