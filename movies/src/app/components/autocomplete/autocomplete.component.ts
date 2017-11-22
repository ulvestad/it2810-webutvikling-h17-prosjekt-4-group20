import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  private options: Array<any>;
  private inputHasChanged: boolean = false;
  private arrowCounter: number = -1;
  private selectedSuggestion: Array<any>;
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();
  @ViewChild('suggestion') li;

  constructor(private eventService: EventService, private searchService: SearchService) {
    eventService.eventAutocomplete.subscribe(data => {
      this.options = [];
    });
    eventService.eventArrow.subscribe((data) => {
      this.inputHasChanged = data;
      this.arrowCounter = -1;
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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key === "ArrowDown" && this.inputHasChanged){
      if(this.arrowCounter<4){
        this.arrowCounter++;
      }
      //console.log(this.li.nativeElement.children[this.arrowCounter].innerText)
      if(this.arrowCounter != 0){ //remove selection from previous except if it is the first (cannot remove style on child -1)
        this.li.nativeElement.children[this.arrowCounter-1].style.backgroundColor = "#fff";
      }
      this.li.nativeElement.children[this.arrowCounter].style.backgroundColor = "#eee";
      this.selectedSuggestion =  this.li.nativeElement.children[this.arrowCounter].innerText;
    }
    if(event.key === "ArrowUp" && this.inputHasChanged){
      if(this.arrowCounter>0){
        this.arrowCounter--;
      }
      //console.log(this.li.nativeElement.children[this.arrowCounter].innerText)
      if(this.arrowCounter != 4){ //remove selection from previous except if it is the last (cannot remove style on child last+1)
        this.li.nativeElement.children[this.arrowCounter+1].style.backgroundColor = "#fff";
      }
      this.li.nativeElement.children[this.arrowCounter].style.backgroundColor = "#eee";
      this.selectedSuggestion = this.li.nativeElement.children[this.arrowCounter].innerText;
    }
    if(event.key === "Enter" && this.arrowCounter != -1){
      //console.log(this.selectedSuggestion)
      this.eventService.publishSelectArrow(this.selectedSuggestion)
    }
  }
}
