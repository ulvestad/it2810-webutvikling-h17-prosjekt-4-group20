import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface SelectedMovie {
  title: string;
  genres: string;
  description: string;
  rating: number;
  image: string;
}

const IMAGE_URL = 'https://image.tmdb.org/t/p/w320';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<any>;
  selectedMovie: SelectedMovie;

  constructor(private _dataService: DataService) {
    this.selectedMovie = {
      title: '',
      genres: '',
      description: '',
      rating: -1,
      image: '',
    };

    this._dataService.getMovies()
      .subscribe(res => this.movies = res);
  }

  ngOnInit() {
  }

  setMovie(movie: any) {
    this._dataService.getMovieDetails(movie['movieId']).subscribe(res => {
      this.selectedMovie = {
        title: movie.title,
        genres: res.genres,
        description: res.overview,
        rating: res.vote_average,
        image: IMAGE_URL + res.poster_path,
      };
    });
  }
}
