import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface User {
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

  user: User;

  constructor(private dataService: DataService) {
    this.user = {username: '', email: '', favorites: 21, watchlists: 4};
    this.getUser();
  }

  ngOnInit() {
  }

  getUser() {
    return this.dataService.get('/user').subscribe(data => {
      this.user = {username: data.user.data.username, email: data.user.data.email, favorites: 21, watchlists: 4};
    });
  }

}
