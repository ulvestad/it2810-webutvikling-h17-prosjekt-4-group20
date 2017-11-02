import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	private query: string;

  constructor(private searchService: SearchService) { 
  }

  ngOnInit() {
  }

  onChange(query: string) {
  	this.query = query;
    this.searchService.search(query);
  }

}
