import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

interface User {
  username: string; // chars or numbers - "[a-zA-Z0-9-]*"
  email: string; // email - "[^ @]*@[^ @]*"
  password: string; // minlength=8
  confirm: string; // minlenght=8
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private result: any; // result from server
  private user: User; // input data
  @ViewChild('f') form: any; // the form

  constructor(private dataService: DataService, private router: Router) {
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'url("../../assets/img/poster3.png")';
    document.body.style.backgroundSize = 'auto';
  }

  // Initilizes default values to user interface
  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirm: ''
    };
  }

  // Registers a new user with data from the form
  onSubmit(form: any): void {
    this.user = {...form};
    this.dataService.post('/register', this.user).subscribe(data => {
      if (data.success) { // success
        this.router.navigate(['login']); // success
        this.form.reset();
      } else { // fail
        this.result = data.msg;
        if (data.msg === 'err, user exists') {
          this.user.username = '';
        } else if (data.msg === 'Email taken') {
          this.user.email = '';
        }
      }
    });
  }
}
