import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject }    from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  results: Array<any>;
  change: Subject<any> = new Subject<any>();
  private lastUpdate: number;

  constructor(private dataService: DataService, private router: Router) {
    this.lastUpdate = + new Date();
  }

  /* Returns the results for search string query */
  // maybe handle this another way??

  // bug - if you write the whole query in under a second fast it wont fetch.
  search(query: string) {
    // string minlength 3, second between each request
    if (query.length >= 3 && (+ new Date() - this.lastUpdate > 1000)) {
      this.lastUpdate = + new Date();
      this.dataService.post('/search', {query: query}).subscribe(res => {
        //this.router.navigateByUrl('/movie-list');
        this.results = res.result;
        this.change.next(this.results)
      })
    }
  }
}