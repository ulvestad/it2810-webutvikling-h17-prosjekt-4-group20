import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	private query: string;
  isLoggedIn: boolean = false; //assume worst
  
  constructor(private searchService: SearchService, private route: Router) { 
    this.isLoggedIn = this.dataService.isLoggedIn()
  }

  ngOnInit() {
  }
  
  onChange(query: string) {
  	this.query = query;
    this.searchService.search(query);
    this.route.navigateByUrl('/');
  }
}
