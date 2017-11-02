import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject }    from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  results: Array<any>;
  change: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService, private router: Router) {

  }

  /* Returns the results for search string query */
  // Limit number of requests per second?
  search(query: string) {
    if (query.length >= 3) {
      this.dataService.post('/search', {query: query}).subscribe(res => {
        //this.router.navigateByUrl('/movie-list');
        this.results = res.result;
        this.change.next(this.results)
      })
    }
  }
}