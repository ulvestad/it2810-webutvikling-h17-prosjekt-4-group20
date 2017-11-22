import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  private options: Array<any>; // suggestion on search
  private inputHasChanged: boolean = false; // boolean to check is input has changed
  private arrowCounter: number = -1;  // counter for arrow functionality on search (default -1)
  private selectedSuggestion: Array<any>; // current selecte suggestion
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();
  @ViewChild('suggestion') li; // the suggestions

  constructor(private eventService: EventService, private searchService: SearchService) {
    eventService.eventAutocomplete.subscribe(data => { // subscribe to seach suggestions
      this.options = [];
    });
    eventService.eventArrow.subscribe((data) => { //Listens to changes in search field
      this.inputHasChanged = data; // true/false
      this.arrowCounter = -1; // reset counter
    });
    this.options = [];
  }

  ngOnInit() {
    this.searchService.changeSuggestions.subscribe(movies => this.options = movies); // listens to changes in suggestions
  }

  // Updates input value in search field
  updateInputValue(value: any) {
    this.onSuggest.emit(value);
    this.options = [];
  }

  // Keypress listener on window
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key === "ArrowDown" && this.inputHasChanged){ // handle arrowdown keypress
      if(this.arrowCounter<4){
        this.arrowCounter++; // increase counter
      }
      if(this.arrowCounter != 0){ //remove selection from previous except if it is the first (cannot remove style on child -1)
        this.li.nativeElement.children[this.arrowCounter-1].style.backgroundColor = "#fff";
      }
      this.li.nativeElement.children[this.arrowCounter].style.backgroundColor = "#eee"; // set background for selection effect
      this.selectedSuggestion =  this.li.nativeElement.children[this.arrowCounter].innerText; //update selectedSuggestion
    }
    if(event.key === "ArrowUp" && this.inputHasChanged){ // handle arrowup keypress
      if(this.arrowCounter>0){
        this.arrowCounter--; //decrease counter
      }
      if(this.arrowCounter != 4){ //remove selection from previous except if it is the last (cannot remove style on child last+1)
        this.li.nativeElement.children[this.arrowCounter+1].style.backgroundColor = "#fff";
      }
      this.li.nativeElement.children[this.arrowCounter].style.backgroundColor = "#eee"; // set background for selection effect
      this.selectedSuggestion = this.li.nativeElement.children[this.arrowCounter].innerText; //update selectedSuggestion
    }
    if(event.key === "Enter" && this.arrowCounter != -1){ // handle enter keypress
      this.eventService.publishSelectArrow(this.selectedSuggestion) // publish slelected suggestion
    }
  }
}
