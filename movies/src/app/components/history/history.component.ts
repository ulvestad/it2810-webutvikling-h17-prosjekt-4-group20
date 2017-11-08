import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Array<any>;

  constructor(private dataService: DataService) {
    if(this.dataService.isLoggedIn()){ //user is logged in -> get data
      this.dataService.get('/user').subscribe(res => {
        this.history = res.user.data.history;
        console.log(this.history)
      })
    }
  }


  ngOnInit() {
  }



}
