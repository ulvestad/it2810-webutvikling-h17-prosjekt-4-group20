import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from '../../services/event.service';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private query: string;
  private options: Array<any>;
  private searchString: string;

  constructor(
    private searchService: SearchService,
    private eventService: EventService,
    private route: Router,
    private dataService: DataService,
    private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  /*Update movies according to selector*/
  selectorUpdate(option: string) {
    this.eventService.publishHome(0, option);
  }

  /* Updates the autocomplete text input with options */
  changeInputValue(movie: any) {
    this.searchString = movie.title;
  }

  isLoggedIn() {
    return this.dataService.isLoggedIn();
  }

  /* Will trigger if there is any changes in the input of the navbar */
  onChange(event: any) {
    if (event) {
      this.searchService.suggest(event);
    }
  }

  /* Will get results based on */
  onSubmit(form: any) {
    this.query = form.searchString;
    this.searchService.search(form.searchString);
    this.route.navigateByUrl('/');
    this.addToHistory(form.searchString);
  }

  addToHistory(query: string) {
    this.dataService.post('/user/add/history', {searchQuery: query}).subscribe(res => {
      console.log(query, 'added to history');
    });
  }
}
