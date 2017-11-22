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
    private searchService: SearchService,
    private eventService: EventService,
    private route: Router,
    private dataService: DataService,
    private cookieService: CookieService) {

    eventService.eventSelectArrow.subscribe(data => {
      this.searchArrowSelect = data;
    });
  }

  ngOnInit() {
  }

  /*Update movies according to selector*/
  selectorUpdate(option: string) {
    this.eventService.publishHome(0, option);
    this.eventService.current = option;
    // this.route.navigateByUrl('/');
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
      this.eventService.publishArrow(true)
    }
  }

  /* Will get results based on */
  onSubmit(form: any) {
    setTimeout(() => {
      if(this.searchArrowSelect != ""){
        this.query = this.searchArrowSelect;
        this.route.navigateByUrl('/');
        this.eventService.current = 'search';
        this.searchService.search(this.searchArrowSelect, 0);
        this.addToHistory(this.searchArrowSelect);
        this.input.nativeElement.value = this.searchArrowSelect; //update searchtext
        this.searchArrowSelect = ""; //reset value
      }else{
        this.query = this.input.nativeElement.value;
        this.route.navigateByUrl('/');
        this.eventService.current = 'search';
        this.searchService.search(this.input.nativeElement.value, 0);
        this.addToHistory(this.input.nativeElement.value);
      }
    }, 400); //this should probably be change to promise or something
  }

  addToHistory(query: string) {
    this.dataService.post('/user/add/history', {searchQuery: query}).subscribe(res => {
      console.log(query, 'added to history');
    });
  }


}
