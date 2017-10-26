import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getMovies() {
    return this._http.get('/api/movies')
      .map(result => this.result = result.json().data)
  }

  getMovieDetails(movieId) {
    return this._http.get(`/api/movies?movieId=${movieId}`)
      .map(result => this.result = result.json().data);
  }

}
