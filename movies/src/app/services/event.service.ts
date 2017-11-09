import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class EventService {
  //default subject & event
  /*public _subject = new Subject<object>();
  public event = this._subject.asObservable(); */

  public _watchlistSubject = new Subject<number>();
  public event = this._watchlistSubject.asObservable();

  constructor() { }

  public publish(data: number) {
    this._watchlistSubject.next(data);
  }
}
