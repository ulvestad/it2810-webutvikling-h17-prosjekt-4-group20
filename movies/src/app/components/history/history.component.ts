import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Array<any>; // array of searches (history)

  constructor(private dataService: DataService) {
    if (this.dataService.isLoggedIn()) { // user is logged in -> get data
      this.dataService.get('/user').subscribe(data => { // fetch user history
        this.history = data.result.history;  //set result to history
      });
    }
  }

  ngOnInit() {
  }

}
