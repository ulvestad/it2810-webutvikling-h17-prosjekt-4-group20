import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

interface User {
  userid: string,
  password: string
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

  constructor(private dataService: DataService, private router: Router) {
    //TODO: find a better way to change <body> background-color
    //body{ ... } in the css file does not work
    document.body.style.backgroundImage = "url('../../assets/img/poster3.png')";
    document.body.style.backgroundSize = "auto";
  }

  ngOnInit() {
    this.user = {
      userid: '',
      password: ''
    }
  }

  onSubmit(form: any): void {
    this.user = {...form};
    this.dataService.post('/login', this.user).subscribe(data => {
      console.log(data);
      if (data.success) { // success
        this.router.navigate(['']);
        this.form.reset();
      } else { // fail
        this.result = 'Invalid username or password'
      }
    })
  }
}
