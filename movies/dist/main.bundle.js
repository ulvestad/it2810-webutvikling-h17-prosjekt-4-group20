webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(eventService) {
        this.eventService = eventService;
        this.title = 'Movies';
    }
    AppComponent.prototype.onClick = function () {
        this.eventService.autoCompleteTrigger(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onClick", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_scroll_to_el__ = __webpack_require__("../../../../ng2-scroll-to-el/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_spinner__ = __webpack_require__("../../../../angular2-spinner/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_history_history_component__ = __webpack_require__("../../../../../src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_watchlist_watchlist_component__ = __webpack_require__("../../../../../src/app/components/watchlist/watchlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_movie_modal_movie_modal_component__ = __webpack_require__("../../../../../src/app/components/movie-modal/movie-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/components/autocomplete/autocomplete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__["a" /* UserComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_watchlist_watchlist_component__["a" /* WatchlistComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_movie_modal_movie_modal_component__["a" /* MovieModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_autocomplete_autocomplete_component__["a" /* AutocompleteComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_spinner__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- True for debugging
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_9__services_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_10__services_event_service__["a" /* EventService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/autocomplete/autocomplete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#autocomplete {\n\tposition: absolute;\n\tz-index: 99;\n\tpadding: 10px;\n\tbackground-color: white;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\tlist-style: none;\n}\n\n#autocomplete li {\n\tpadding: 10px;\n}\n\n#autocomplete li:hover {\n\tbackground-color: #eee;\n\tcursor: pointer;\n}\n\n.autocomplete-selected {\n\tbackground: #f0f0f0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/autocomplete/autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options.length\" id=\"autocomplete\" #suggestion>\n\t<li class=\"searchOptions\" *ngFor=\"let option of options; let i = index\" [id]= \"i\" (click)=\"updateInputValue(option)\">\n    {{option.title}}\n  </li>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/autocomplete/autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompleteComponent = (function () {
    function AutocompleteComponent(eventService, searchService) {
        var _this = this;
        this.eventService = eventService;
        this.searchService = searchService;
        this.inputHasChanged = false; // boolean to check is input has changed
        this.arrowCounter = -1; // counter for arrow functionality on search (default -1)
        this.onSuggest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        eventService.eventAutocomplete.subscribe(function (data) {
            _this.options = [];
        });
        eventService.eventArrow.subscribe(function (data) {
            _this.inputHasChanged = data; // true/false
            _this.arrowCounter = -1; // reset counter
        });
        this.options = [];
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.changeSuggestions.subscribe(function (movies) { return _this.options = movies; }); // listens to changes in suggestions
    };
    // Updates input value in search field
    AutocompleteComponent.prototype.updateInputValue = function (value) {
        this.onSuggest.emit(value);
        this.options = [];
    };
    // Keypress listener on window
    AutocompleteComponent.prototype.keyEvent = function (event) {
        if (event.key === 'ArrowDown' && this.inputHasChanged) {
            if (this.arrowCounter < 4) {
                this.arrowCounter++; // increase counter
            }
            if (this.arrowCounter !== 0) {
                this.li.nativeElement.children[this.arrowCounter - 1].style.backgroundColor = '#fff';
            }
            this.li.nativeElement.children[this.arrowCounter].style.backgroundColor = '#eee'; // set background for selection effect
            this.selectedSuggestion = this.li.nativeElement.children[this.arrowCounter].innerText; // update selectedSuggestion
        }
        if (event.key === 'ArrowUp' && this.inputHasChanged) {
            if (this.arrowCounter > 0) {
                this.arrowCounter--; // decrease counter
            }
            if (this.arrowCounter !== 4) {
                this.li.nativeElement.children[this.arrowCounter + 1].style.backgroundColor = '#fff';
            }
            this.li.nativeElement.children[this.arrowCounter].style.backgroundColor = '#eee'; // set background for selection effect
            this.selectedSuggestion = this.li.nativeElement.children[this.arrowCounter].innerText; // update selectedSuggestion
        }
        if (event.key === 'Enter' && this.arrowCounter !== -1) {
            this.eventService.publishSelectArrow(this.selectedSuggestion); // publish slelected suggestion
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AutocompleteComponent.prototype, "onSuggest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('suggestion'),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "li", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AutocompleteComponent.prototype, "keyEvent", null);
    AutocompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__("../../../../../src/app/components/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/autocomplete/autocomplete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first{\n  font-weight: bold;\n  color: #5cb85c;\n  background-color: #292b2c;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item justify-content-between first\">\n    <span>Timestamp</span>\n    <span>Search text</span>\n  </li>\n  <li class=\"list-group-item justify-content-between\" *ngFor=\"let search of history\">\n    <kbd>{{search.timestamp | date:'medium'}}</kbd> <!-- https://angular.io/api/common/DatePipe-->\n    <span>{{search.search_text}}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = (function () {
    function HistoryComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        if (this.dataService.isLoggedIn()) {
            this.dataService.get('/user').subscribe(function (data) {
                _this.history = data.result.history; //set result to history
            });
        }
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/components/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-outline-success{\n  width: 158px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\na:hover{\n  text-decoration: none;\n}\n#sidebar h3 {\n  margin-top: 1em;\n}\n.container {\n  margin-top: 20px;\n}\n.sortBox {\n  position: fixed;\n}\n@media screen and (max-width: 770px) {\n  #sidebar {\n    display: -webkit-flex; /* Safari */ /* Safari 6.1+ */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: auto;\n  }\n  .sortBox {\n    position: static;\n    margin-left: 50px;\n  }\n}\n.buttons {\n  margin-bottom: 10px;\n}\n.buttons:hover {\n  cursor: pointer;\n}\n.small-img {\n  width: 190px;\n  height: 260px;\n  margin: auto;\n  margin-top: 20px;\n  margin-right: 25px;\n  margin-left: 5px;\n}\n.wrap-small {\n  display: -webkit-flex; /* Safari */\n  -webkit-justify-content: center; /* Safari 6.1+ */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n/*image grow effect*/\n.small-img {\n  transition: all .2s ease-in-out;\n}\n.small-img:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); cursor: pointer;\n}\n\n/*spinner*/\n.spinner {\n  display: -webkit-flex; /* Safari */\n  -webkit-justify-content: center; /* Safari 6.1+ */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n\n/*snackbar*/\n#snackbar {\n    visibility: hidden; /* Hidden by default. Visible on click */\n    min-width: 250px; /* Set a default minimum width */\n    margin-left: -125px; /* Divide value of min-width by 2 */\n    background-color: #333; /* Black background color */\n    color: #fff; /* White text color */\n    text-align: center; /* Centered text */\n    border-radius: 2px; /* Rounded borders */\n    padding: 16px; /* Padding */\n    position: fixed; /* Sit on top of the screen */\n    z-index: 1; /* Add a z-index if needed */\n    left: 50%; /* Center the snackbar */\n    bottom: 30px; /* 30px from the bottom */\n}\n#snackbar.show {\n    visibility: visible; /* Show the snackbar */\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n.fa-check{\n    color: #5cb85c;\n}\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n@-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"this.current === 'search'\" class=\"row\">\n    <div class=\"col-md-2 col-sm-12\" id=\"sidebar\">\n      <div>\n        <h3>Filters </h3>\n        <div id=\"filters\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div *ngFor=\"let filter of this.filterArray\">\n            <a id=\"{{ filter.name }}\" role=\"tab\" data-toggle=\"collapse\" data-parent=\"#filters\" href=\"{{ '#collapse_' + filter.name }}\">\n              <button class=\"btn btn-outline-success buttons\">\n                {{ filter.name }}\n                <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i>\n              </button>\n            </a>\n            <div id=\"{{'collapse_' + filter.name }}\" class=\"collapse\" role=\"tabpanel\">\n              <div class=\"form-check\" *ngFor=\"let option of filter.options\">\n                <label class=\"form-check-label\">\n                  <input type=\"checkbox\"\n                    class=\"form-check-input\"\n                    value=\"{{option.name}}\"\n                    [(ngModel)]=\"option.checked\"\n                    (ngModelChange)=\"onFilterChange($event)\"\n                  >\n                  {{ option.name }}\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"sortBox\">\n        <h3>Sort</h3>\n        <div>\n          <button\n            type=\"button\"\n            [ngClass]=\"{'active': (activeButton === 'popular')}\"\n            class=\"btn btn-outline-success buttons\"\n            (click)=\"sort($event.target.value)\"\n            value=\"popular\"\n            [scrollTo]=\"'#content'\"\n          >\n            Most popular\n          </button>\n          <button\n            type=\"button\"\n            [ngClass]=\"{'active': (activeButton === 'top')}\"\n            class=\"btn btn-outline-success buttons\"\n            (click)=\"sort($event.target.value)\"\n            value=\"top\"\n            [scrollTo]=\"'#content'\"\n          >\n            Top rated\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-10\" id=\"content\">\n      <div class=\"wrap-small\" infiniteScroll (scrolled)=\"onScroll()\">\n        <img *ngFor=\"let movie of filteredMovies\" class=\"small-img\" src=\"{{IMAGE_URL + movie.poster_path}}\"\n        (click)=\"setMovie(movie)\"\n        data-toggle=\"modal\"\n        data-target=\"#exampleModal\"\n        href=\"\"/>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"this.current !== 'search'\" class=\"row\">\n    <div class=\"col-md-12\" id=\"content\">\n      <div class=\"wrap-small\" infiniteScroll (scrolled)=\"onScroll()\">\n        <img *ngFor=\"let movie of filteredMovies\" class=\"small-img\" src=\"{{IMAGE_URL + movie.poster_path}}\"\n        (click)=\"setMovie(movie)\"\n        data-toggle=\"modal\"\n        data-target=\"#exampleModal\"\n        href=\"\"/>\n      </div>\n    </div>\n  </div>\n  <div class=\"spinner\">\n    <spinner *ngIf=\"this.moreMoviesLeft\" [tickness]=\"2\" [size]=\"50\" [color]=\"'#5cb85c'\"></spinner>\n  </div>\n</div>\n\n<!-- MODAL -->\n<app-movie-modal></app-movie-modal>\n\n  <!-- SNACKBAR -->\n  <div id=\"snackbar\"> <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Movie added to watchlist</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__("../../../../../src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(eventService, dataService, searchService, router) {
        var _this = this;
        this.eventService = eventService;
        this.dataService = dataService;
        this.searchService = searchService;
        this.router = router;
        this.isLoggedIn = false; // assume worst
        this.resetFilters = { 'year': { name: 'Year', options: [] }, 'genre': { name: 'Genre', options: [] } };
        this.page = 0;
        this.moreMoviesLeft = true;
        // Overrides the background from login/register
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = '#fff';
        this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320';
        this.isLoggedIn = this.dataService.isLoggedIn();
        /* Listens for changes in eventHome */
        eventService.eventHome.subscribe(function (data) {
            _this.moreMoviesLeft = true;
            _this.page = data.page;
            _this.current = data.current;
            _this.router.navigate(['/']);
            _this.dataService.getMovies('/' + _this.current).subscribe(function (movies) { return _this.update(movies); });
        });
        /* Listens to changes in changeSearch, triggered after a search */
        this.searchService.changeSearch.subscribe(function (movies) {
            _this.filters = _this.resetFilters;
            _this.activeButton = 'popular';
            _this.moreMoviesLeft = true;
            if (movies) {
                _this.moreMoviesLeft = movies.length < 20 ? false : true;
            }
            _this.update(movies);
            _this.current = 'search';
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filters = this.resetFilters;
        this.filterArray = [];
        this.dataService.getGenreList().subscribe(function (res) {
            _this.idToGenre = new Map(res.genres.map(function (el) { return [el.id, el.name]; }));
            if (_this.eventService.current !== 'search') {
                _this.eventService.publishHome(0, _this.eventService.current || 'popular');
            }
        });
    };
    /*Function for infinite scroll*/
    HomeComponent.prototype.onScroll = function () {
        var _this = this;
        if (!this.moreMoviesLeft) {
            return;
        }
        this.page = this.page + 1;
        this.dataService.getMovies('/' + this.current, this.page).subscribe(function (res) {
            if (res.length === 0) {
                return _this.moreMoviesLeft = false;
            }
            _this.update(_this.movies.concat(res));
        });
    };
    /*Function for sorting movies shown*/
    HomeComponent.prototype.sort = function (option) {
        this.activeButton = option;
        if (option === 'popular') {
            this.movies.sort(function (a, b) {
                return b.popularity - a.popularity;
            });
        }
        else if (option === 'top') {
            this.movies.sort(function (a, b) {
                return b.vote_average - a.vote_average;
            });
        }
    };
    HomeComponent.prototype.filterYears = function (movies) {
        var year_options = this.filters['year']['options'];
        var years = year_options
            .filter(function (option) { return option.checked; })
            .map(function (option) { return option.name; });
        if (years.length) {
            var containsYear_1 = new RegExp(years.join('|'));
            movies = movies.filter(function (movie) { return containsYear_1.test(movie.release_date); });
        }
        return movies;
    };
    HomeComponent.prototype.filterGenres = function (movies) {
        var genre_options = this.filters['genre']['options'];
        var genre_ids = genre_options
            .filter(function (option) { return option.checked; })
            .map(function (option) { return option.id; });
        if (genre_ids.length) {
            // filter movies where there is an intersection between genre_ids and move.genre_ids
            movies = movies.filter(function (movie) { return movie.genre_ids.filter(function (id) { return genre_ids.includes(id); }).length; });
        }
        return movies;
    };
    HomeComponent.prototype.filterList = function (movies) {
        movies = this.filterYears(movies);
        movies = this.filterGenres(movies);
        return movies;
    };
    /* Get list of all unique years from the list of movies */
    HomeComponent.prototype.yearsFromMovies = function (movies) {
        var years = movies.map(function (movie) { return movie.release_date; }).map(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["a" /* dateToYear */]);
        var uniqueYears = Array.from(new Set(years));
        var sortedYears = uniqueYears.sort().reverse();
        return sortedYears;
    };
    /* Get list of all unique genre IDs from the list of movies */
    HomeComponent.prototype.genreIDsFromMovies = function (movies) {
        var genreIds = Object(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["b" /* flatten */])(movies.map(function (movie) { return movie['genre_ids']; }));
        var uniqueIds = Object(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["d" /* unique */])(genreIds);
        return uniqueIds;
    };
    /* Update the filter values for genres when new movies are loaded */
    HomeComponent.prototype.updateGenreFilters = function (movies) {
        var _this = this;
        var genreIds = this.genreIDsFromMovies(movies);
        var current_genre_filters = this.filters.genre.options;
        var current_genre_ids = current_genre_filters.map(function (filter) { return filter.id; });
        var new_genres = genreIds.filter(function (id) { return !current_genre_ids.includes(id); });
        var new_genre_filters = new_genres.map(function (genreId) { return ({
            name: _this.idToGenre.get(genreId),
            id: genreId,
            checked: false
        }); }).filter(function (genre) { return genre.name !== undefined; });
        return current_genre_filters.concat(new_genre_filters);
    };
    /* Update the filter values for years when new movies are loaded */
    HomeComponent.prototype.updateYearFilters = function (movies) {
        var years = this.yearsFromMovies(movies);
        var current_year_filters = this.filters.year.options;
        var currenet_years = current_year_filters.map(function (filter) { return filter.name; });
        var new_years = years.filter(function (year) { return !currenet_years.includes(year); });
        var new_year_filters = new_years.map(function (year) { return ({
            name: year,
            checked: false
        }); });
        return current_year_filters.concat(new_year_filters);
    };
    HomeComponent.prototype.updateFilters = function (movies) {
        var year_filters = this.updateYearFilters(movies);
        var genre_filters = this.updateGenreFilters(movies);
        this.filters = {
            year: {
                name: 'Year',
                options: year_filters
            }, genre: {
                name: 'Genre',
                options: Object(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["c" /* sortOnProp */])('name', genre_filters)
            }
        };
        this.filterArray = [this.filters['genre'], this.filters['year']]
            .filter(function (el) { return el !== undefined; })
            .filter(function (filter) { return filter.options.length > 1; });
        this.filteredMovies = this.filterList(movies);
    };
    /* Update the component's movie list, and the filters that depend on it */
    HomeComponent.prototype.update = function (movies) {
        this.movies = movies;
        this.updateFilters(movies);
    };
    HomeComponent.prototype.onFilterChange = function (event) {
        this.filteredMovies = this.filterList(this.movies);
        this.moreMoviesLeft = true;
        this.onScroll();
    };
    /* Set the selected movie to be used by the movie-modal component */
    HomeComponent.prototype.setMovie = function (movie) {
        this.selectedMovie = {
            id: movie.id,
            title: movie.title,
            genre_ids: movie.genre_ids,
            overview: movie.overview,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
        };
        // publish selectedMovie to movie-modal
        this.eventService.publishSelectedMovie(this.selectedMovie);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".required{\n  font-size: 13px;\n  color: #d9534f;\n}\n.form-control-feedback{\n  font-size: 13px;\n  color: #d9534f;\n}\n.text-danger{\n  text-align: center;\n  color: #d9534f;\n  font-size: 15px;\n}\n.form-signin {\n  max-width: 350px;\n  padding: 15px;\n  margin: auto;\n  margin-top: 150px;\n  background-color: #292b2c;\n}\n.form-signin .form-signin-heading {\n  margin-bottom: 15px;\n  color: #5cb85c;\n  text-align: center;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 13px;\n  background-color: #292b2c;\n  border:0px;\n  border-bottom: 1px solid #eee;\n  color: #fff;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n  border-bottom: 1px solid #eee;\n  color: #fff;\n}\n.form-signin input[type=\"text\"] {\n  margin-bottom: 0px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-outline-success{\n  margin-top: 40px;\n  font-size: 13px;\n}\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  color: #d3d3d3;\n}\ninput:-moz-placeholder, textarea:-moz-placeholder {\n  color: #d3d3d3;\n}\n.no-account{\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n}\n.register{\n  color: #5cb85c !important;\n  font-weight: bold;\n}\n.register:hover{\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form novalidate=\"novalidate\"\n  \t#f=\"ngForm\"\n  \t(ngSubmit)=\"onSubmit(f.value)\"\n  \tclass=\"form-signin\">\n    <p class=\"form-signin-heading\">Please sign in<p>\n\n    <!-- username -->\n    <input required autofocus\n      [(ngModel)]=\"user.username\"\n      #username=\"ngModel\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Username\">\n    <div class=\"form-control-feedback\"\n      *ngIf=\"username.errors && (username.dirty || username.touched)\">\n      <p *ngIf=\"username.errors.required\"> Username is required</p>\n    </div>\n\n    <!-- password -->\n    <input required\n      [(ngModel)]=\"user.password\"\n      #password=\"ngModel\"\n      validateEqual=\"confirm\"\n      reverse=\"true\"\n      name=\"password\"\n      type=\"password\"\n      class=\"form-control\"\n      placeholder=\"Password\">\n    <div class=\"form-control-feedback\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\n      <p *ngIf=\"password.errors.required\" class=\"required\"> Password is required </p>\n    </div>\n\n    <div>\n      <button\n        class=\"btn btn-lg btn-outline-success btn-block\"\n        type=\"submit\"\n        [disabled]=\"!form.valid\">\n        Login\n      </button>\n    </div>\n   \t<div>\n    </div>\n    <div class=\"\">\n      <p class=\"text-danger\"> {{ result | json }}</p>\n    </div>\n    <p class=\"no-account\">Don't have an accout? <a class=\"register\" routerLink=\"/register\" >Register</a></p>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(dataService, router, cookieService) {
        this.dataService = dataService;
        this.router = router;
        this.cookieService = cookieService;
        document.body.style.backgroundImage = 'url("../../assets/img/poster3.png")'; // custom background image on login page
        document.body.style.backgroundSize = 'auto';
    }
    // Initilizes default values to user interface
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            password: ''
        };
    };
    // Signs in the user with data from the form
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.user = __assign({}, form);
        this.dataService.post('/login', this.user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['']);
                _this.form.reset();
                _this.cookieService.set('token', data.result);
                _this.cookieValue = _this.cookieService.get('token');
            }
            else {
                _this.result = 'Invalid username or password';
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movie-modal/movie-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-footer{\n  background-color: #fff;\n}\n.modal-header{\n  background-color: #292b2c;\n  color: #5cb85c;\n}\n.modalBody{\n  padding-left: 20px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.modalImg {\n  width: 200px;\n}\n@media screen and (max-width: 720px) {\n  .modalImg {\n    width: 100px;\n  }\n}\n.genres{\n  margin-left: -40px;\n}\n.genre{\n  margin-right: 10px;\n}\nul > li {\n  display: inline-block;\n}\n\n/*Change cursour when hover over button*/\n.addBtn, .closeBtn{\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie-modal/movie-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedMovie\" class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{selectedMovie.title}} ({{selectedMovie.release_date.substring(0,4)}})</h5>\n      </div>\n      <div class=\"d-flex justify-content-between modal-body\">\n        <div class=\"modalBody\">\n          <img class=\"modalImg\" [src]=\"'https://image.tmdb.org/t/p/w320'+selectedMovie.poster_path\"/>\n        </div>\n        <div class=\"modalBody\">\n          <p><b>Genres: </b>\n            <ul class=\"genres\">\n              <li class=\"genre\"*ngFor=\"let genre of selectedMovie.genre_ids \">&bull; {{getGenre(genre)}}</li>\n            </ul>\n          <p><b>Rating: </b>{{selectedMovie.vote_average}}</p>\n          <p><b>Description: </b>{{selectedMovie.overview}}</p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary closeBtn\" data-dismiss=\"modal\">Close</button>\n        <div *ngIf=\"isLoggedIn;else login\">\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-outline-success mr-2 addBtn\" (click)=\"addToMovieList()\">Add to watchlist</button>\n        </div>\n        <ng-template #login></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie-modal/movie-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieModalComponent = (function () {
    function MovieModalComponent(eventService, dataService, cookieService) {
        var _this = this;
        this.eventService = eventService;
        this.dataService = dataService;
        this.cookieService = cookieService;
        // listens to the current selected movie and set values to SelectedMovie interface
        eventService.eventSelect.subscribe(function (data) { return _this.selectedMovie = __assign({}, data); });
        this.dataService.getGenreList().subscribe(function (data) { return _this.genreList = data.genres; }); // fetches list with all genres
        this.isLoggedIn = this.dataService.isLoggedIn(); // is user logged in
    }
    MovieModalComponent.prototype.ngOnInit = function () {
    };
    // Fethes genre by id
    MovieModalComponent.prototype.getGenre = function (genre_id) {
        return this.genreList.find(function (e) { return e.id === genre_id; }).name; // get the corresponding genre by id
    };
    // Add movie to watchlist
    MovieModalComponent.prototype.addToMovieList = function (movie) {
        this.dataService.post('/user/add', { id: this.selectedMovie.id }).subscribe(function (res) {
            // snackbar notification, confirming addition
            var x = document.getElementById('snackbar');
            x.className = 'show';
            setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000);
        });
    };
    MovieModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-movie-modal',
            template: __webpack_require__("../../../../../src/app/components/movie-modal/movie-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movie-modal/movie-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], MovieModalComponent);
    return MovieModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Spacing between columns when collapsed*/\n.element {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/*Default size for search-input*/\n.form-control{\n  max-width: 195px;\n}\n\n/*Small screen BUG fix in boostrap4 navbar*/\n@media (max-width: 575px) {\n    .container {\n      margin-left: 0;\n      margin-right: 0;\n    }\n    .searchBtn {\n      margin-top: 12px;\n    }\n}\n\n/*adjustments*/\n.navbar-toggler{\n  margin-top: 7px;\n  cursor: pointer;\n}\n\n/*Change cursour when hover over button*/\n.searchBtn {\n  cursor: pointer;\n}\n\n\n/*dropbown menu*/\n.dropbtn {\n  min-width: 160px;\n  color: #5cb85c;\n  border: 1px solid #5cb85c !important;\n  border-radius: 5px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n  font-size: 15px;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #292b2c !important;\n  border: 1px solid #5cb85c;\n  border-top: 0;\n  border-radius: 5px;\n  min-width: 160px;\n  z-index: 1;\n}\n.dropdown-content a {\n  color: #5cb85c;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content a:hover {\n  background-color: #3e8e41;\n  color: white;\n  cursor: pointer;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.dropbtn:hover {\n  color: white;\n  background-color: #292b2c !important;\n}\n.fa-chevron-circle-down{\n  margin-left: 57px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar collapses when small screen (@575px) -->\n<nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-sm\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleContainer\" aria-controls=\"navbarsExampleContainer\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-brand element dropdown\">\n      <div class=\"dropbtn\"> Movies <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i></div>\n      <div class=\"dropdown-content\">\n        <a href=\"#\" (click)=\"selectorUpdate('popular')\"> Popular </a>\n        <a href=\"#\" (click)=\"selectorUpdate('upcoming')\"> Upcoming </a>\n        <a href=\"#\" (click)=\"selectorUpdate('top')\"> Top Rated </a>\n      </div>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleContainer\">\n      <div class=\"form-inline mx-auto flex-nowrap element\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n          <input class=\"form-control mr-2\" type=\"text\" placeholder=\"Search...\" name=\"searchString\"\n          [(ngModel)]=\"searchString\" autocomplete=off (ngModelChange)=\"onChange($event)\" #searchText>\n          <button routerLink=\"/\" class=\"btn btn-outline-success mr-2 searchBtn\" type=\"submit\">Search</button>\n          <app-autocomplete (onSuggest)='changeInputValue($event)'></app-autocomplete>\n        </form>\n      </div>\n      <a class=\"navbar-brand element\" [routerLink]=\" isLoggedIn() ? '/user': '/login'\">\n        <i data-target=\"#navbarsExampleContainer\" class=\"fa fa-user-circle fa-lg\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavBarComponent = (function () {
    function NavBarComponent(searchService, eventService, route, dataService, cookieService) {
        var _this = this;
        this.searchService = searchService;
        this.eventService = eventService;
        this.route = route;
        this.dataService = dataService;
        this.cookieService = cookieService;
        this.searchArrowSelect = '';
        eventService.eventSelectArrow.subscribe(function (data) {
            _this.searchArrowSelect = data;
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    // Update movies according to selector
    NavBarComponent.prototype.selectorUpdate = function (option) {
        this.eventService.publishHome(0, option);
        this.eventService.current = option;
        // this.route.navigateByUrl('/');
    };
    // Updates the autocomplete text input with options
    NavBarComponent.prototype.changeInputValue = function (movie) {
        this.searchString = movie.title;
    };
    // checks if user is logged in (true/false)
    NavBarComponent.prototype.isLoggedIn = function () {
        return this.dataService.isLoggedIn();
    };
    // Will trigger if there is any changes in the input of the navbar
    NavBarComponent.prototype.onChange = function (event) {
        if (event) {
            this.searchService.suggest(event);
            this.eventService.publishArrow(true);
        }
    };
    /* Fetch search results based on text */
    NavBarComponent.prototype.onSubmit = function (form) {
        var _this = this;
        setTimeout(function () {
            if (form.searchString === '') {
                _this.query = form.searchString;
                _this.route.navigateByUrl('/');
                _this.eventService.current = 'popular';
                _this.eventService.publishHome(0, 'popular');
                _this.addToHistory(form.searchString);
                _this.input.nativeElement.value = ''; // update searchtext
            }
            else if (_this.searchArrowSelect !== '') {
                _this.query = _this.searchArrowSelect;
                _this.route.navigateByUrl('/');
                _this.eventService.current = 'search';
                _this.searchService.search(_this.searchArrowSelect, 0);
                _this.addToHistory(_this.searchArrowSelect);
                _this.input.nativeElement.value = _this.searchArrowSelect; // update searchtext
                _this.searchArrowSelect = ''; // reset value
            }
            else {
                _this.query = _this.input.nativeElement.value;
                _this.route.navigateByUrl('/');
                _this.eventService.current = 'search';
                _this.searchService.search(_this.input.nativeElement.value, 0);
                _this.addToHistory(_this.input.nativeElement.value);
            }
        }, 400); // callback to check is arrow is used in search
    };
    // Add search to history
    NavBarComponent.prototype.addToHistory = function (query) {
        if (query !== '' && this.dataService.isLoggedIn()) {
            this.dataService.post('/user/add/history', { searchQuery: query }).subscribe(function (res) {
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchText'),
        __metadata("design:type", Object)
    ], NavBarComponent.prototype, "input", void 0);
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control-feedback{\n  font-size: 13px;\n  color: #d9534f;\n}\n.text-danger{\n  font-size: 13px;\n  color: #d9534f;\n  text-align: center;\n}\n.form-register {\n  max-width: 350px;\n  padding: 15px;\n  margin: auto;\n  margin-top: 150px;\n  background-color: #292b2c;\n}\n.form-register .form-signin-heading {\n  margin-bottom: 15px;\n  color: #5cb85c;\n  text-align: center;\n}\n.form-register .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 13px;\n  background-color: #292b2c;\n  border:0px;\n  border-bottom: 1px solid #eee;\n  color: #fff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.form-register .form-control:focus {\n  z-index: 2;\n  border-bottom: 1px solid #eee;\n  color: #fff;\n}\n\n.form-register input[type=\"text\"] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-register input[type=\"email\"] {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n#firstPassword {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n#lastPassword {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  color: #d3d3d3;\n}\ninput:-moz-placeholder, textarea:-moz-placeholder {\n  color: #d3d3d3;\n}\n.already-account{\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n}\n.btn-outline-success{\n  margin-top: 40px;\n  font-size: 13px;\n}\n.btn-outline-success:hover{\n  cursor: pointer;\n}\n.already-account{\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 15px;\n}\n.login{\n  margin-top: 15px;\n  color: #5cb85c !important;\n  font-weight: bold;\n}\n.login:hover{\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form novalidate=\"novalidate\"\n    #f=\"ngForm\"\n    (ngSubmit)=\"onSubmit(f.value)\"\n    class=\"form-register\">\n    <p class=\"form-signin-heading\"> Please register</p>\n\n    <!-- username -->\n    <div class=\"\" [ngClass]=\"{\n      'has-danger': username.invalid && (username.dirty || username.touched),\n      'has-success': username.valid && (username.dirty || username.touched)}\">\n      <input required autofocus\n        [(ngModel)]=\"user.username\"\n        #username=\"ngModel\"\n        name=\"username\"\n        type=\"text\"\n        class=\"form-control\"\n        pattern=\"[a-zA-Z0-9-]*\"\n        placeholder=\"Username\">\n      <div class=\"form-control-feedback\"\n        *ngIf=\"username.errors && (username.dirty || username.touched)\">\n        <p *ngIf=\"username.errors.required\"> Username is required</p>\n        <p *ngIf=\"username.errors.pattern\"> Not a valid username </p>\n      </div>\n    </div>\n\n    <!-- email -->\n    <div class=\"\" [ngClass]=\"{\n      'has-danger': email.invalid && (email.dirty || email.touched),\n      'has-success': email.valid && (email.dirty || email.touched)}\">\n      <input required\n        [(ngModel)]=\"user.email\"\n        #email=\"ngModel\"\n        pattern=\"[^ @]*@[^ @]*\"\n        name=\"email\"\n        class=\"form-control\"\n        placeholder=\"Email Address\">\n      <div class=\"form-control-feedback\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n        <p *ngIf=\"email.errors.required\"> Email is required </p>\n        <p *ngIf=\"email.errors.pattern\"> Not a valid email </p>\n      </div>\n    </div>\n\n    <!-- password -->\n    <div class=\"\" [ngClass]=\"{\n      'has-danger': password.invalid && (password.dirty || password.touched),\n      'has-success': password.valid && (password.dirty || password.touched)}\">\n      <input required\n        [(ngModel)]=\"user.password\"\n        #password=\"ngModel\"\n        validateEqual=\"confirm\"\n        reverse=\"true\"\n        name=\"password\"\n        type=\"password\"\n        minlength=\"8\"\n        class=\"form-control\"\n        placeholder=\"Password\">\n      <div class=\"form-control-feedback\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\n        <p *ngIf=\"password.errors.required\"> Password is required </p>\n        <p *ngIf=\"password.errors.minlength\"> Too short password </p>\n      </div>\n    </div>\n\n    <!-- confirm -->\n    <div class=\"\" [ngClass]=\"{\n      'has-danger': (confirm.value !== password.value) && (confirm.dirty || confirm.touched),\n      'has-success': (confirm.value === password.value) && (confirm.dirty || confirm.touched)}\">\n      <input required\n        [(ngModel)]=\"user.confirm\"\n        #confirm=\"ngModel\"\n        validateEqual=\"password\"\n        reverse=\"false\"\n        name=\"confirm\"\n        type=\"password\"\n        minlength=\"8\"\n        class=\"form-control\"\n        placeholder=\"Confirm Password\">\n      <div class=\"form-control-feedback\" *ngIf=\"(confirm.value !== password.value) && (email.dirty || email.touched) && (confirm.dirty || confirm.touched)\">\n        <p> Passwords don't match!</p>\n      </div>\n    </div>\n    <div>\n      <button\n        class=\"btn btn-lg btn-outline-success btn-block\"\n        type=\"submit\"\n        [disabled]=\"!form.valid\">\n        Register\n      </button>\n    </div>\n    <div class=\"\">\n      <p class=\"text-danger\"> {{ result | json }}</p>\n    </div>\n    <p class=\"already-account\">Aready have an accout? <a class=\"login\" routerLink=\"/login\" >Login</a></p>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        document.body.style.backgroundImage = 'url("../../assets/img/poster3.png")';
        document.body.style.backgroundSize = 'auto';
    }
    // Initilizes default values to user interface
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            email: '',
            password: '',
            confirm: ''
        };
    };
    // Registers a new user with data from the form
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.user = __assign({}, form);
        this.dataService.post('/register', this.user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['login']);
                _this.form.reset();
            }
            else {
                _this.result = 'Username or email taken';
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-container{\n  margin-top: 100px;\n}\n\n/*Banner*/\n.banner{\n  width: 100%;\n  min-height: 165px;\n  background-color: #292b2c;\n  color: #fff;\n}\n.banner-content{\n  padding-top: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.user-icon{\n  float: left;\n}\n.fa-user-circle{\n  margin-right: 20px;\n  display: inline-block;\n}\n.user{\n  display: inline-block;\n  padding-top: 10px;\n  margin-right: 30px;\n  padding-bottom: 20px;\n}\n.signOut{\n  margin-top: 20px;\n  margin-right: 10px;\n}\n.btn-outline-secondary:hover{\n  cursor: pointer;\n}\n.btn-outline-secondary{\n  margin-bottom: 20px;\n}\n\n/*Tabpanel*/\n.tab-panel{\n  margin-top: 10px;\n}\n.nav-item{\n  margin:auto;\n}\n.nav-tabs {\n   border-color: #eee;\n}\n.nav-tabs > li > a.active {\n  color: #5cb85c;\n  border-color: transparent;\n  border-bottom-color: #5cb85c;\n}\n.nav-tabs > li > a {\n  color: #575757;\n}\n\n/*Tab-content*/\n.tab-content{\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\n.tab-pane{\n  overflow: auto;\n  max-height: 545px;\n}\n\n/*Circular widget*/\n.ui-widget {\n  position:relative;\n  display:inline-block;\n  width:90px;\n  height:90px;\n  border:7px solid #5cb85c;\n  border-radius:100px;\n  text-align:center;\n  box-sizing:border-box;\n  border-bottom-color:#292b2c;\n  margin-right: 35px;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n.ui-widget .ui-value {\n  position:absolute;\n  left:0;\n  right:0;\n  top:20px;\n  font-size:30px;\n}\n.ui-widget .ui-label {\n  position:absolute;\n  left:0;\n  bottom:-15px;\n  width:100%;\n  font-size: 12px;\n}\n\n\n\n/*snackbar*/\n#snackbar {\n    visibility: hidden; /* Hidden by default. Visible on click */\n    min-width: 250px; /* Set a default minimum width */\n    margin-left: -125px; /* Divide value of min-width by 2 */\n    background-color: #333; /* Black background color */\n    color: #fff; /* White text color */\n    text-align: center; /* Centered text */\n    border-radius: 2px; /* Rounded borders */\n    padding: 16px; /* Padding */\n    position: fixed; /* Sit on top of the screen */\n    z-index: 1; /* Add a z-index if needed */\n    left: 50%; /* Center the snackbar */\n    bottom: 30px; /* 30px from the bottom */\n}\n#snackbar.show {\n    visibility: visible; /* Show the snackbar */\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n.fa-times{\n    color: red;\n}\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n@-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div class=\"container banner-content\">\n    <div class=\"user-container\">\n      <div class=\"user-icon\">\n        <i class=\"fa fa-user-circle fa-5x\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"user\">\n        <h4>{{user.username}}</h4>\n        <p>Email: {{user.email}}</p>\n      </div>\n    </div>\n    <div class=\"stats\">\n      <div class=\"ui-widget\">\n        <h1 class=\"ui-value\">{{user.searches}}</h1>\n        <span class=\"ui-label\">Searches</span>\n      </div>\n      <div class=\"ui-widget\">\n        <h1 class=\"ui-value\">{{user.watchlists}}</h1>\n        <span class=\"ui-label\">Movies in list</span>\n      </div>\n    </div>\n    <div class=\"signOut\">\n      <button class=\"btn btn-outline-secondary\" (click)=\"signOut()\">Sign out &nbsp; <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\n    </div>\n  </div>\n</div>\n<div class=\"container tab-panel\" >\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#list\" role=\"tab\"><h6>Movielist</h6></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#history\" role=\"tab\"><h6>Search history</h6></a>\n    </li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"list\" role=\"tabpanel\" (change)=\"getUser()\"><app-watchlist></app-watchlist></div>\n    <div class=\"tab-pane\" id=\"history\" role=\"tabpanel\"><app-history></app-history></div>\n  </div>\n</div>\n\n<!-- SNACKBAR -->\n<div id=\"snackbar\"> <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Movie removed from watchlist</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(eventService, dataService, router, cookieService) {
        var _this = this;
        this.eventService = eventService;
        this.dataService = dataService;
        this.router = router;
        this.cookieService = cookieService;
        this.isLoggedIn = this.dataService.isLoggedIn(); // is user logged in
        if (!this.isLoggedIn) {
            this.router.navigate(['/login']);
        }
        else {
            this.user = { username: '', email: '', searches: 0, watchlists: 0 }; // set default values for user
            this.getUser();
        }
        eventService.event.subscribe(function (data) {
            _this.user.watchlists = data; // update movielist length
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    // Fetches user which is logged in
    UserComponent.prototype.getUser = function () {
        var _this = this;
        return this.dataService.get('/user').subscribe(function (data) {
            if (data.success) {
                _this.user = __assign({}, data.result, { searches: data.result.history.length, watchlists: data.result.movielist.length });
            }
        });
    };
    // Signs out user
    UserComponent.prototype.signOut = function () {
        this.cookieService.delete('token');
        this.router.navigate(['/']); // redicret to homepage
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/watchlist/watchlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first{\n  font-weight: bold;\n  color: #5cb85c;\n  background-color: #292b2c;\n}\ni:hover{\n  cursor: pointer;\n  color: #5cb85c;\n}\n.title{\n  margin-left: 30px;\n}\n.trash{\n  margin-left: 96%;\n  margin-top: -115px;\n}\n.small-img{\n  width: 75px;\n  height: 110px;\n  margin: auto;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.wrap-small{\n  display: -webkit-flex; /* Safari */\n  -webkit-justify-content: space-between; /* Safari 6.1+ */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  /*overflow-y: hidden;\n  max-height: 210px;*/\n}\n/*image grow effect\n.small-img { transition: all .2s ease-in-out; }\n.small-img:hover { transform: scale(1.2); cursor: pointer;}\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/watchlist/watchlist.component.html":
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let movie of moviesList\" class=\" list-group-item\">\n  <span><img src=\"{{IMAGE_URL}}{{movie.poster_path}}\" class=\"small-img\"></span>\n  <span class=\"title\"><h6>{{movie.title}}</h6></span>\n  <i class=\"fa fa-trash-o fa-lg trash\" (click)=\"remove(movie)\"></i>\n</li>\n"

/***/ }),

/***/ "../../../../../src/app/components/watchlist/watchlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WatchlistComponent = (function () {
    function WatchlistComponent(eventService, dataService, cookieService) {
        var _this = this;
        this.eventService = eventService;
        this.dataService = dataService;
        this.cookieService = cookieService;
        this.IMAGE_URL = 'https://image.tmdb.org/t/p/w320/';
        if (this.dataService.isLoggedIn()) {
            this.dataService.get('/user').subscribe(function (data) {
                _this.moviesList = data.result.movielist;
            });
        }
    }
    WatchlistComponent.prototype.ngOnInit = function () {
    };
    // Remove movie form watchlist and gives feedback
    WatchlistComponent.prototype.remove = function (movie) {
        var _this = this;
        this.dataService.post('/user/remove', { id: movie.id }).subscribe(function (data) {
            _this.moviesList = data.result;
            _this.dataService.get('/user').subscribe(function (res) {
                _this.moviesList = res.result.movielist;
                _this.eventService.publish(res.result.movielist.length); // publish changes (movielist length)
            });
            // snackbar notification, confirming removal
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        });
    };
    WatchlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-watchlist',
            template: __webpack_require__("../../../../../src/app/components/watchlist/watchlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/watchlist/watchlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.path = 'http://it2810-20.idi.ntnu.no:8084/api';
    }
    /* */
    DataService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'text/html', });
        headers.append('token', this.cookieService.get('token'));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.path + url, options).map(function (res) { return res.json(); });
    };
    /* */
    DataService.prototype.post = function (url, data) {
        return this.http.post(this.path + url, __assign({}, data, { token: this.cookieService.get('token') })).map(function (res) { return res.json(); });
    };
    DataService.prototype.getMovieDetails = function (movieId) {
        return this.get("/movie?movieId=" + movieId).map(function (res) { return res.data; });
    };
    DataService.prototype.getGenreList = function () {
        var _this = this;
        return this.post('/genres', {}).map(function (data) { return _this.result = data.result; });
    };
    DataService.prototype.getMovies = function (current, page, query) {
        if (page === void 0) { page = 0; }
        if (query === void 0) { query = ''; }
        this.lastQuery = query || this.lastQuery;
        // console.log(current, query);
        return this.post(current, { query: this.lastQuery || query, page: page }).map(function (data) {
            return data.result;
        });
    };
    DataService.prototype.isLoggedIn = function () {
        return (this.cookieService.get('token')) ? true : false;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventService = (function () {
    function EventService() {
        this._selectedMovieSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.eventSelect = this._selectedMovieSubject.asObservable();
        this._watchlistSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.event = this._watchlistSubject.asObservable();
        this._pageNumberAndCurrentPage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.eventHome = this._pageNumberAndCurrentPage.asObservable();
        this._autocompleteOptionsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.eventAutocomplete = this._autocompleteOptionsSubject.asObservable();
        this._arrowSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.eventArrow = this._arrowSubject.asObservable();
        this._arrowSelectSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.eventSelectArrow = this._arrowSelectSubject.asObservable();
    }
    EventService.prototype.publish = function (data) {
        this._watchlistSubject.next(data);
    };
    EventService.prototype.publishArrow = function (data) {
        this._arrowSubject.next(data);
    };
    EventService.prototype.publishSelectArrow = function (data) {
        this._arrowSelectSubject.next(data);
    };
    EventService.prototype.publishSelectedMovie = function (data) {
        this._selectedMovieSubject.next(data);
    };
    EventService.prototype.publishHome = function (page, current) {
        var obj = { page: page, current: current };
        this._pageNumberAndCurrentPage.next(obj);
    };
    EventService.prototype.autoCompleteTrigger = function (data) {
        this._autocompleteOptionsSubject.next(data);
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.changeSearch = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.changeSuggestions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    SearchService.prototype.suggest = function (query) {
        var _this = this;
        this.dataService.post('/suggestions', { query: query }).subscribe(function (res) {
            _this.changeSuggestions.next(res.result);
        });
    };
    SearchService.prototype.search = function (query, page) {
        var _this = this;
        this.dataService.getMovies('/search', page, query).subscribe(function (res) {
            _this.changeSearch.next(res);
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateToYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sortOnProp; });
var flatten = function (list) {
    return [].concat.apply([], list);
};
var unique = function (list) {
    return Array.from(new Set(list));
};
var dateToYear = function (date) {
    return date ? date.split('-')[0] : '';
};
var sortOnProp = function (prop, list) {
    return list.sort(function (a, b) { return (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0); });
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map