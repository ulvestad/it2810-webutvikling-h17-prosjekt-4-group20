import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

/*class User {
  constructor(
    public userid: string = '',
    public email: string = '',
    public password: string = '',
    public confirm: string = '') {
  }
}*/
interface User {
  userid: string,
  email: string,
  password: string,
  confirm: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private result: any; // result from server
  private user: User;// input data
  @ViewChild('f') form: any; // the form

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() { 
    this.user = {
      userid: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  onSubmit(form: any): void {
    this.user = {...form};
    this.dataService.post('/register', this.user).subscribe(data => {
      if (data.success) { // success
        this.router.navigate(['login']); // success
        this.form.reset();
      } else { // fail
        this.result = data.msg;
        if (data.msg === 'err, user exists') { // TODO change error msg
          this.user.userid = '';
        } else if (data.msg === 'Email taken') { // TODO fix this on server
          this.user.email = '';
        }
      }
    })
  }
}
