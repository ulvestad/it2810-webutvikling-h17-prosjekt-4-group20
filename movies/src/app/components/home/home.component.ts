import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
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

  constructor(private dataService: DataService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320'

    this.dataService.getPopular()
      .subscribe((res) => {
        this.top_movies_big = res.slice(0,4);
        this.top_movies_small1 = res.slice(4,12);
        this.top_movies_small2 = res.slice(12,);
    });
  }

  ngOnInit() {
  }


}
