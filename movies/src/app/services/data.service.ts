import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DataService {
  private path: string;
  result: any;

  constructor(private http: Http, private cookieService: CookieService) {
    this.path = 'http://localhost:3000/api';
  }

  /* */
  get(url: string): Observable<any> {
    let headers = new Headers({ "content-type": "text/html", });
    headers.append('token', this.cookieService.get('token'));
    let options = new RequestOptions({ headers: headers });
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

  getPopular() {
    return this.post('/popular', {}).map(data => this.result = data.result);
  }

  getLatest() {
    return this.post('/latest', {}).map(data => this.result = data.result);
  }

  getTopRated() {
    return this.post('/top', {}).map(data => this.result = data.result);
  }

  getUpcoming() {
    return this.post('/upcoming', {}).map(data => this.result = data.result);
  }

  isLoggedIn() {
    if(this.cookieService.get('token')) return true;
    return false;
  }

}
