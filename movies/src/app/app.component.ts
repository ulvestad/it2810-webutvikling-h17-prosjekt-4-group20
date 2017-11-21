import { Component, HostListener } from '@angular/core';

import { DataService } from './services/data.service';
import { EventService } from './services/event.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private eventService: EventService) {
  }

  @HostListener('click') onClick() {
    this.eventService.publishSelectedMovie(false);
  }
}
