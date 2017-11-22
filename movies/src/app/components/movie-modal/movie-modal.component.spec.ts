import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerModule } from 'angular2-spinner';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { EventService } from '../../services/event.service';

import { AppComponent } from '../../app.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HistoryComponent } from '../history/history.component';
import { CookieService } from 'ngx-cookie-service';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { MovieModalComponent } from './movie-modal.component';

import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '' }
];
describe('MovieModalComponent', () => {
  let component: MovieModalComponent;
  let fixture: ComponentFixture<MovieModalComponent>;

  beforeEach(async(() => {
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
