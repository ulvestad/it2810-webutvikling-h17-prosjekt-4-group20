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
    const headers = new Headers({ 'content-type': 'text/html', });
    headers.append('token', this.cookieService.get('token'));
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.path + url, options).map(res => res.json());
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.path + url, {...data, token: this.cookieService.get('token')}, ).map(res => res.json());
  }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US&page=1').map(
      result => this.result = result.json().results
    );
  }

  getLatest() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US').map(
      result => this.result = result.json().results
    );
  }

  getTop_Rated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US&page=1').map(
      result => this.result = result.json().results
    );
  }

  getGenreList() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US').map(
      result => this.result = result.json().genres
    );
  }

  isLoggedIn() {
    if (this.cookieService.get('token')) {
      return true;
    }
    return false;
  }

}
