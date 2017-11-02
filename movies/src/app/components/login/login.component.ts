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
  @ViewChild('usr') input1: any; // the username
  @ViewChild('psw') input2: any; // the password
  cookieValue = 'UNKNOWN';
  new_user = 'false';

  constructor(private dataService: DataService, private router: Router, private cookieService: CookieService) {
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'url("../../assets/img/poster3.png")';
    document.body.style.backgroundSize = 'auto';
    if(this.cookieService.get('new_user')) this.new_user = this.cookieService.get('new_user');

  }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  ngAfterViewInit() {
    if(this.new_user === 'true'){
      this.dataService.get('/user').subscribe(data => {
        console.log( data.user.data.username)
        this.input1.nativeElement.value = data.user.data.username;
      });
    }
  }

  onSubmit(form: any): void {
    this.user = {...form};
    this.dataService.post('/login', this.user).subscribe(data => {
      console.log(data);
      if (data.success) { // success
        this.router.navigate(['']);
        this.form.reset();
        this.cookieService.set('token', data.token );
        this.cookieValue = this.cookieService.get(data.username);
      } else { // fail
        this.result = 'Invalid username or password';
      }
    });
  }
}
