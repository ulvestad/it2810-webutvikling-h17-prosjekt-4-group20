import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  next: number;
  movies: Array<any>;
  IMAGE_URL: string;
  selectedMovie: SelectedMovie;
  isLoggedIn: boolean; // assume worst

  constructor(private eventService: EventService, private dataService: DataService, private searchService: SearchService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();
    this.next = 0;

    this.dataService.getPopular().subscribe(movie => this.movies = movie);

    this.searchService.changeSearch.subscribe(movies => this.update(movies));
  }

  ngOnInit() {
  }

  /*Update movies according to selector*/
  selectorUpdate(option: string) {
    switch (option) {
      case 'Popular':
        this.next = 0;
        this.dataService.getPopular().subscribe(movie => this.movies = movie);
        break;
      case 'Upcoming':
        this.next = 0;
        this.dataService.getLatest().subscribe(movie => this.movies = movie);
        break;
      case 'Top_Rated':
        this.next = 0;
        this.dataService.getTop_Rated().subscribe(movie => this.movies = movie);
        break;
      default:
        this.dataService.getPopular().subscribe(movie => this.movies = movie);
        break;
    }
  }

  onScroll() {
    this.next = this.next + 1;
    this.dataService.post('/lazyMovies', {nextNumber: this.next}).subscribe(res => {
      this.movies = [...this.movies, ...res.data];
    });
  }

  setMovie(movie: any) {
    console.log(movie);
    this.selectedMovie = {
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
    };
    this.eventService.publishSelectedMovie(this.selectedMovie); // publish selectedMovie to movie-modal
  }


}
