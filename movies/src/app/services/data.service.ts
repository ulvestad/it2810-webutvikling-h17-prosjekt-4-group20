import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DataService {
  private path: string;
  result: any;

  lastQuery: string;

  constructor(private http: Http, private cookieService: CookieService) {
    this.path = 'http://it2810-20.idi.ntnu.no:8084/api';
  }

  /* */
  get(url: string): Observable<any> {
    const headers = new Headers({ 'content-type': 'text/html', });
    headers.append('token', this.cookieService.get('token'));
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.path + url, options).map(res => res.json());
  }

  /* */
  post(url: string, data: any): Observable<any> {
    return this.http.post(this.path + url, {...data, token: this.cookieService.get('token')}).map(res => res.json());
  }

  getMovieDetails(movieId: number) {
    return this.get(`/movie?movieId=${movieId}`).map(res => res.data);
  }

  getGenreList() {
    return this.post('/genres', {}).map(data => this.result = data.result);
  }

  getMovies(current: string, page: number = 0, query: string = '') {
    this.lastQuery = query || this.lastQuery;
    // console.log(current, query);
    return this.post(current, {query: this.lastQuery || query, page: page}).map(data => {
      return data.result;
    });
  }

  isLoggedIn() {
    return (this.cookieService.get('token')) ? true : false;
  }

}
