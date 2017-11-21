import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  private options: Array<any>;
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();

  constructor(private eventService: EventService, private searchService: SearchService) {
    eventService.eventSelect.subscribe(data => {
      this.options = [];
    });
    this.options = [];
  }

  ngOnInit() {
    this.searchService.changeSuggestions.subscribe(movies => this.options = movies);
  }

  updateInputValue(value: any) {
    this.onSuggest.emit(value);
    this.options = [];
  }
}
