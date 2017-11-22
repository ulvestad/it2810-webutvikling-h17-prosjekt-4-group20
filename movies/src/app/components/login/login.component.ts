import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private result: any; // result from server
  private user: User; // input data
  @ViewChild('f') form: any; // the form
  private cookieValue: string; // cookie

  constructor(private dataService: DataService, private router: Router, private cookieService: CookieService) {
    document.body.style.backgroundImage = 'url("../../assets/img/poster3.png")'; // custom background image on login page
    document.body.style.backgroundSize = 'auto';
  }

  // Initilizes default values to user interface
  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  // Signs in the user with data from the form
  onSubmit(form: any): void { // submit log in
    this.user = {...form};
    this.dataService.post('/login', this.user).subscribe(data => {
      console.log(data);
      if (data.success) { // success
        this.router.navigate(['']);
        this.form.reset();
        this.cookieService.set('token', data.result);
        this.cookieValue = this.cookieService.get('token');
      } else { // fail
        this.result = 'Invalid username or password';
      }
    });
  }
}
