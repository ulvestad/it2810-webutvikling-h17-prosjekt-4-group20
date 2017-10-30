import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  private andy: string = 'http://localhost:3000/'
	private path: string = 'http://localhost:3000/api'
  result:any;

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get('http://localhost:3000/api/movies')
      .map(result => this.result = result.json().data)
  }

  getMovieDetails(movieId:number) {
    return this.get(`/movie?movieId=${movieId}`).map(res => res.data);
  }

  get(url:string):Observable<any> {
    return this.http.get(this.path + url).map(res => res.json())
  }

  post(url:string, data:any):Observable<any> {
    return this.http.post(this.path + url, data).map(res => res.json())
  }

}
