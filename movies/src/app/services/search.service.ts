import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  results: Array<any>;
  changeSearch: Subject<any> = new Subject<any>();

  suggestions: Array<any>;
  changeSuggestions: Subject<any> = new Subject<any>();

  currentQuery: string;

  constructor(private dataService: DataService, private router: Router) {
  }

  suggest(query: string) {
    this.dataService.post('/suggestions', {query: query}).subscribe(res => {
      this.suggestions = res.result;
      this.changeSuggestions.next(this.suggestions);
    });
  }

  search(query: string, page: number) {
    this.currentQuery = query || this.currentQuery;
    this.dataService.post('/search', {query: this.currentQuery, page: page}).subscribe(res => {
      this.results = res.result;
      this.changeSearch.next(this.results);
    });
  }
}
