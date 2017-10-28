import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface User{
  username: string;
  email: string;
  favorites: number;
  watchlists: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  usr: Array<any>;

  constructor(private dataService: DataService) {
    this.user = {username: '', email: '', favorites: 21, watchlists: 4};
  }

  ngOnInit() {
    console.log(this.usr)
  }

  getUser(){
    return this.dataService.get('/user').subscribe(data => {
    	//TODO: fetch userdata
    })
  }

}
