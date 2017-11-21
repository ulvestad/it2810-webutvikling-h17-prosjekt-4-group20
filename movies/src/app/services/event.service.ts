import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventService {

  private _selectedMovieSubject = new Subject<any>();
  public eventSelect = this._selectedMovieSubject.asObservable();

  private _watchlistSubject = new Subject<number>();
  public event = this._watchlistSubject.asObservable();

  public _pageNumberAndCurrentPage = new Subject<any>();
  public eventHome = this._pageNumberAndCurrentPage.asObservable();

  private _autocompleteOptionsSubject = new Subject<any>();
  public  eventAutocomplete = this._autocompleteOptionsSubject.asObservable();

  public publish(data: number) {
    this._watchlistSubject.next(data);
  }

  public publishSelectedMovie(data: any) {
    this._selectedMovieSubject.next(data);
  }

  public publishHome(page: number, current: string) {
    const obj = {page, current};
    this._pageNumberAndCurrentPage.next(obj);
  }

  public autoCompleteTrigger(data: boolean) {
    this._autocompleteOptionsSubject.next(data);
}
