import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject }    from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  results: Array<any>;
  changeSearch: Subject<any> = new Subject<any>();

  suggestions: Array<any>;
  changeSuggestions: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService, private router: Router) {
  }

  suggest(query: string) {
    //if ((+ new Date() - this.lastUpdate > 1000)) {
    // this.lastUpdate = + new Date();
    this.dataService.post('/suggestions', {query: query}).subscribe(res => {
      this.suggestions = res.result;
      this.changeSuggestions.next(this.suggestions)
    })
  }

  search(query: string) {
    this.dataService.post('/search', {query: query}).subscribe(res => {
      this.results = res.result;
      console.log(this.results)
      this.changeSearch.next(this.results);
    })
  }
}
