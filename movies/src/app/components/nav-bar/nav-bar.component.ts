import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';

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

  showAutoComplete: boolean;

  constructor(private searchService: SearchService,
    private route: Router,
    private dataService: DataService,
    private cookieService: CookieService) {
  }

  ngOnInit() {
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
      // this.searchService.suggest(event);
      this.showAutoComplete = true;
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
    this.dataService.post('/user/add/history', {query: query}).subscribe(res => {
      if (res.success) {
        this.cookieService.set('token', res.token );
        console.log(query, 'added to hisotry');
      }
    });
  }
}
