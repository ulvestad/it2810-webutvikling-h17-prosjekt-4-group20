import { Component, OnInit, ViewChild, Input, HostListener } from '@angular/core';
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
  private searchArrowSelect: string = "";
  @ViewChild('searchText') input;

  constructor(
    // services and router
    private searchService: SearchService,
    private eventService: EventService,
    private route: Router,
    private dataService: DataService,
    private cookieService: CookieService) {

    eventService.eventSelectArrow.subscribe(data => { // subscribe event for listening to potential arrow selection in search
      this.searchArrowSelect = data;
    });
  }

  ngOnInit() {
  }

  // Update movies according to selector
  selectorUpdate(option: string) {
    this.eventService.publishHome(0, option);
    this.eventService.current = option;
    // this.route.navigateByUrl('/');
  }

  // Updates the autocomplete text input with options
  changeInputValue(movie: any) {
    this.searchString = movie.title;
  }

  // checks if user is logged in (true/false)
  isLoggedIn() {
    return this.dataService.isLoggedIn();
  }

  // Will trigger if there is any changes in the input of the navbar
  onChange(event: any) {
    if (event) {
      this.searchService.suggest(event);
      this.eventService.publishArrow(true)
    }
  }

  // Fetch search results based on text
  onSubmit(form: any) {
    setTimeout(() => {
      if(form.searchString == ""){ // search is empty -> redirects to popular page
        this.query = form.searchString;
        this.route.navigateByUrl('/');
        this.eventService.current = 'popular';
        this.eventService.publishHome(0, 'popular');
        this.addToHistory(form.searchString);
        this.input.nativeElement.value = ""; //update searchtext
      }
      else if(this.searchArrowSelect != ""){ // search is done using arrow keys -> search by arrows select value
        this.query = this.searchArrowSelect;
        this.route.navigateByUrl('/');
        this.eventService.current = 'search';
        this.searchService.search(this.searchArrowSelect, 0);
        this.addToHistory(this.searchArrowSelect);
        this.input.nativeElement.value = this.searchArrowSelect; //update searchtext
        this.searchArrowSelect = ""; //reset value
      }else{ // search is done by clicking on button as normal
        this.query = this.input.nativeElement.value;
        this.route.navigateByUrl('/');
        this.eventService.current = 'search';
        this.searchService.search(this.input.nativeElement.value, 0);
        this.addToHistory(this.input.nativeElement.value);
      }
    }, 400); //callback to check is arrow is used in search
  }

  // Add search to history
  addToHistory(query: string) {
    if(query != "" && this.dataService.isLoggedIn()){ // searchtext must not be empty an user is logged in
        this.dataService.post('/user/add/history', {searchQuery: query}).subscribe(res => { // add
      });
    }
  }


}
