import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private results: any

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {}

  register(userid:string, email:string, password:string, confirm:string){
    this.dataService.post('/register', {userid, email, password, confirm}).subscribe(data => {
    	this.results = data
    	// TODO find another solution, not so pretty
    	if (data.msg.substring(0, 7) === 'success') this.router.navigate(['login']);
    })
  }

}
