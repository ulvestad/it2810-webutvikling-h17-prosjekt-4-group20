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
  private cookieValue: string;

  constructor(private dataService: DataService, private router: Router, private cookieService: CookieService) {
    
    document.body.style.backgroundImage = 'url("../../assets/img/poster3.png")';
    document.body.style.backgroundSize = 'auto';
  }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  onSubmit(form: any): void {
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
