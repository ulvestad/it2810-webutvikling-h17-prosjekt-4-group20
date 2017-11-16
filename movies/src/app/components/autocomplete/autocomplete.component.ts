import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  private options: Array<any>;
  @Input() show: boolean;
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();

  constructor(private searchService: SearchService) {
    // this.show = false;
    this.options = [];
  }

  /* Kan bli brukt til å fjerne autocorrect i guess */
  @HostListener('click') onClick() {
    console.log('yeahyae');
  }

  ngOnInit() {
    this.searchService.changeSuggestions.subscribe(movies => this.options = movies);
  }

  updateInputValue(value: any) {
    this.onSuggest.emit(value);
    this.options = [];
  }
}
