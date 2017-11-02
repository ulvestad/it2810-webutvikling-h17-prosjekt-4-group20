import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

   isLoggedIn: boolean = false; //assume worst

  constructor(private dataService: DataService) {
    this.isLoggedIn = this.dataService.isLoggedIn()
  }

  ngOnInit() {
  }


}
