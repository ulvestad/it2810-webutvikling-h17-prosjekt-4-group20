import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router';

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
  isLoggedIn: boolean = false; //assume worst

  constructor(private dataService: DataService, private router: Router) {
    this.isLoggedIn = this.dataService.isLoggedIn();
    if(!this.isLoggedIn) { //user is not logged in -> redirect to /login
      this.router.navigate(['/login']);
    }else{
      this.user = {username: '', email: '', favorites: 21, watchlists: 4};
      this.getUser();
    }
  }

  ngOnInit() {
  }

  getUser() {
    return this.dataService.get('/user').subscribe(data => {
      this.user = {username: data.user.data.username, email: data.user.data.email, favorites: 21, watchlists: 4};
    });
  }

}
