import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerModule } from 'angular2-spinner';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';
import { SearchService } from './search.service';
import { EventService } from './event.service';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { HistoryComponent } from '../components/history/history.component';
import { CookieService } from 'ngx-cookie-service';
import { WatchlistComponent } from '../components/watchlist/watchlist.component';
import { MovieModalComponent } from '../components/movie-modal/movie-modal.component';
import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '' }
];


describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        UserComponent,
        NavBarComponent,
        HistoryComponent,
        WatchlistComponent,
        MovieModalComponent,
        AutocompleteComponent,
      ],
      imports: [
        HttpModule,
        SpinnerModule,
        FormsModule,
        ScrollToModule.forRoot(),
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- True for debugging
        )
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        DataService,
        SearchService,
        CookieService,
        EventService,
      ],
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
