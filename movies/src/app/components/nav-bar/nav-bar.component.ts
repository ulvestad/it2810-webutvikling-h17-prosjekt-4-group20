import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
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
  stateCtrl: FormControl;

  constructor(private searchService: SearchService, private route: Router, private dataService: DataService, private cookieService: CookieService) {
    this.stateCtrl = new FormControl();
  }

  ngOnInit() {
  }

  isLoggedIn(){
    return this.dataService.isLoggedIn()
  }

  onChange(form: any) {
    console.log(form.query)
    this.dataService.post('/suggestions', {query: form.query}).subscribe(res => {
      console.log('****')
      res.result.forEach(e => console.log(e.title))
      this.options = res;
    })
  }

  onSubmit(form: any) {
  	this.query = form.query + '';
    this.searchService.search(form.query);
    this.route.navigateByUrl('/');
    this.addToHistory(form.query);
  }

  addToHistory(query: string){
    this.dataService.post('/user/add/history', {query: query}).subscribe(res => {
      if (res.success) this.cookieService.set('token', res.token );
        console.log(query, 'added to hisotry');
    })
  }

}
