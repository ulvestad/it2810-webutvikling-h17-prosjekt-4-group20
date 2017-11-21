import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventService {

  private _selectedMovieSubject = new Subject<any>();
  public eventSelect = this._selectedMovieSubject.asObservable();

  private _watchlistSubject = new Subject<number>();
  public event = this._watchlistSubject.asObservable();

  private _autocompleteOptionsSubject = new Subject<any>();
  public  eventAutocomplete = this._autocompleteOptionsSubject.asObservable();

  public publish(data: number) {
    this._watchlistSubject.next(data);
  }

  public publishSelectedMovie(data: any) {
    this._selectedMovieSubject.next(data);
  }

  public autoCompleteTrigger(data: boolean) {
    this._autocompleteOptionsSubject.next(data);
  }
}
