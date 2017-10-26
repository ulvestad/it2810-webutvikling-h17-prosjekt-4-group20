import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

interface SelectedMovie {
  title: string;
  genres: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<any>;
  selectedMovie: SelectedMovie;

  constructor(private _dataService: DataService) {
    this.selectedMovie = {title: '', genres: ''};
    this._dataService.getMovies()
      .subscribe(res => this.movies = res);
  }

  ngOnInit() {
  }

  setMovie(movie: any) {
    this.selectedMovie = {...movie, genres: movie.genres.replace(/\|/g, ' ')};
  }

}
