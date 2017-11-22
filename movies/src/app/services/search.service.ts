import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  changeSearch: Subject<any> = new Subject<any>();
  changeSuggestions: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService, private router: Router) {
  }

  suggest(query: string) {
    this.dataService.post('/suggestions', {query: query}).subscribe(res => {
      this.changeSuggestions.next(res.result);
    });
  }

  search(query: string, page: number) {
    this.dataService.getMovies('/search', page, query).subscribe(res => {
      this.changeSearch.next(res);
    });
  }
}

