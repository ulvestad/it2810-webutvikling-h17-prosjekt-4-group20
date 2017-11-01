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

  getMovies() {
    return this.http.get('http://localhost:3000/api/movies').map(result => this.result = result.json().data);
  }

  getMovieDetails(movieId: number) {
    return this.get(`/movie?movieId=${movieId}`).map(res => res.data);
  }

  get(url: string): Observable<any> {
    let headers = new Headers({ "content-type": "text/html", });
    headers.append('token', this.cookieService.get('token'));
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.path + url, options).map(res => res.json());
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.path + url, data).map(res => res.json());
  }

}
