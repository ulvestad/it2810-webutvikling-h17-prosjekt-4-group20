import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private query: string;

  constructor(
    private searchService: SearchService, private route: Router, private dataService: DataService, private cookieService: CookieService
  ) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.dataService.isLoggedIn();
  }

  onSubmit(form: any) {
    this.query = form.query;
    this.searchService.search(form.query);
    this.route.navigateByUrl('/');
    this.addToHistory(form.query);
  }

  addToHistory(query: string) {
    this.dataService.post('/user/add/history', {query: query}).subscribe(res => {
      if (res.success) {
        this.cookieService.set('token', res.token);
        console.log(query, 'added to hisotry');
      }
    });
  }

}
