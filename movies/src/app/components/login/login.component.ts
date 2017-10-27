import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private results: any

  constructor(private dataService: DataService, private router: Router) {
    //TODO: find a better way to change <body> background-color
    //body{ ... } in the css file does not work
    document.body.style.backgroundImage = "url('../../assets/img/poster3.png')";
    document.body.style.backgroundSize = "auto";
  }

  ngOnInit() {}

  login(userid:string, password:string){
    this.dataService.post('/login', {userid, password}).subscribe(data => {
    	this.results = data
    	// TODO find another solution, make pretty
    	if (data.msg.substring(0, 7) === 'success') this.router.navigate(['']);
    })
  }
}
