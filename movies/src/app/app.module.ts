import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';
import { EventService } from './services/event.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HistoryComponent } from './components/history/history.component';
import { CookieService } from 'ngx-cookie-service';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    NavBarComponent,
    MovieListComponent,
    HistoryComponent,
    WatchlistComponent,
    MovieModalComponent,
    AutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InfiniteScrollModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- True for debugging
    )
  ],
  providers: [
    DataService,
    SearchService,
    CookieService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
