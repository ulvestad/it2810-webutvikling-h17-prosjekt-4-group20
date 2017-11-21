import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from '../../services/event.service';

interface User {
  username: string;
  email: string;
  searches: number;
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

  constructor(private eventService: EventService, private dataService: DataService, private router: Router, private cookieService: CookieService) {
    this.isLoggedIn = this.dataService.isLoggedIn();
    if(!this.isLoggedIn) { //user is not logged in -> redirect to /login
      this.router.navigate(['/login']);
    }else{
      this.user = {username: '', email: '', searches: 0, watchlists: 0};
      this.getUser();
    }
    eventService.event.subscribe((data) => {
      this.user.watchlists = data;  //update movielist length
    });
  }

  ngOnInit() {
  }

  getUser() {
    return this.dataService.get('/user').subscribe(data => {
      if (data.success) {
        this.user = {...data.result, searches: data.result.history.length, watchlists: data.result.movielist.length};
      }
    });
  }

  signOut(){
    this.cookieService.delete('token');
    this.router.navigate(['/']);
  }

}
