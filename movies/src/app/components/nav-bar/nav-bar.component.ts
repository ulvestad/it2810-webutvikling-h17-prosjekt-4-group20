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

  constructor(private searchService: SearchService, private route: Router) { 
  }

  ngOnInit() {
  }

  onChange(query: string) {
  	this.query = query;
    this.searchService.search(query);
    this.route.navigateByUrl('/');
  }

}
