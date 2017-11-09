import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class EventService {

  public _selectedMovieSubject = new Subject<any>();
  public eventSelect = this._selectedMovieSubject.asObservable();

  public _watchlistSubject = new Subject<number>();
  public event = this._watchlistSubject.asObservable();

  constructor() { }

  public publish(data: number) {
    this._watchlistSubject.next(data);
  }

  public publishSelectedMovie(data: any) {
    this._selectedMovieSubject.next(data);
  }

}
