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
  public current: string;

  private _autocompleteOptionsSubject = new Subject<any>();
  public  eventAutocomplete = this._autocompleteOptionsSubject.asObservable();

  private _arrowSubject = new Subject<any>();
  public eventArrow = this._arrowSubject.asObservable();

  private _arrowSelectSubject = new Subject<any>();
  public eventSelectArrow = this._arrowSelectSubject.asObservable();

  public publish(data: number) {
    this._watchlistSubject.next(data);
  }

  public publishArrow(data: any) {
    this._arrowSubject.next(data);
  }

  public publishSelectArrow(data: any) {
    this._arrowSelectSubject.next(data);
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

}
