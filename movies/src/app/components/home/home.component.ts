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

  top_movies_big: Array<any>;
  top_movies_small1: Array<any>;
  top_movies_small2: Array<any>;
  IMAGE_URL: string;
  selectedMovie: SelectedMovie;
  isLoggedIn: boolean = false; //assume worst
  stockPosterPath: string = '../../assets/img/stockPoster.png'

  constructor(private eventService: EventService, private dataService: DataService, private searchService: SearchService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
    this.isLoggedIn = this.dataService.isLoggedIn();

    this.dataService.getPopular().subscribe(movies => this.update(movies));

    /* Listen to changes in search secrive */
    searchService.change.subscribe(movies => this.update(movies));


  }

  ngOnInit() {
  }

  /*Update movies according to selector*/
  selectorUpdate(option: string){
    switch(option){
      case 'Popular':
        this.dataService.getPopular().subscribe(movies => this.update(movies));
        break;
      case 'Upcoming':
        this.dataService.getLatest().subscribe(movies => this.update(movies));

        break;
      case 'Top_Rated':
        this.dataService.getTop_Rated().subscribe(movies => this.update(movies));
        break;
      default:
        this.dataService.getPopular().subscribe(movies => this.update(movies));
        break;
    }
  }

  /* Slices up the list into movies */
  update(movies: any) {
    this.top_movies_big = movies.slice(0,4);
    this.top_movies_small1 = movies.slice(4,12);
    this.top_movies_small2 = movies.slice(12,);
  }

  setMovie(movie: any) {
    console.log(movie)
    this.selectedMovie = {
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
    };
    this.eventService.publishSelectedMovie(this.selectedMovie) //publish selectedMovie to movie-modal
  }


}
