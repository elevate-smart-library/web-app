webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar:before, .sidebar:after {\n\tdisplay: none;\n}\n\n.sidebar-wrapper {\n\tbackground-image: -webkit-gradient(linear, left top, right bottom, from(rgba(22, 130, 176, 1)), to(rgba(142, 204, 167, 1)));\n\tbackground-image: linear-gradient(to bottom right, rgba(22, 130, 176, 1), rgba(142, 204, 167, 1));\n}\n\n.navbar .navbar-nav .notification {\n\tbackground-color: #f76b1c;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\">\n        <app-sidebar></app-sidebar>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var navbar_module_1 = __webpack_require__("./src/app/shared/navbar/navbar.module.ts");
var footer_module_1 = __webpack_require__("./src/app/shared/footer/footer.module.ts");
var sidebar_module_1 = __webpack_require__("./src/app/sidebar/sidebar.module.ts");
var lbd_module_1 = __webpack_require__("./src/app/lbd/lbd.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var tables_component_1 = __webpack_require__("./src/app/tables/tables.component.ts");
var typography_component_1 = __webpack_require__("./src/app/typography/typography.component.ts");
var icons_component_1 = __webpack_require__("./src/app/icons/icons.component.ts");
var maps_component_1 = __webpack_require__("./src/app/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__("./src/app/notifications/notifications.component.ts");
var http_services_1 = __webpack_require__("./src/app/services/http-services.ts");
var websocket_services_1 = __webpack_require__("./src/app/services/websocket-services.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            user_component_1.UserComponent,
            tables_component_1.TablesComponent,
            typography_component_1.TypographyComponent,
            icons_component_1.IconsComponent,
            maps_component_1.MapsComponent,
            notifications_component_1.NotificationsComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_2.HttpClientModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            sidebar_module_1.SidebarModule,
            router_1.RouterModule,
            app_routing_1.AppRoutingModule,
            lbd_module_1.LbdModule
        ],
        providers: [http_services_1.ApiServices, websocket_services_1.WebsocketService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var tables_component_1 = __webpack_require__("./src/app/tables/tables.component.ts");
var typography_component_1 = __webpack_require__("./src/app/typography/typography.component.ts");
var icons_component_1 = __webpack_require__("./src/app/icons/icons.component.ts");
var maps_component_1 = __webpack_require__("./src/app/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__("./src/app/notifications/notifications.component.ts");
var routes = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: tables_component_1.TablesComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'books', component: icons_component_1.IconsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard/:library', component: home_component_1.HomeComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/app.routing.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <lbd-chart\n                  [title]=\"'Library Statistics'\"\n                  [subtitle]=\"'Current Inventory Status'\"\n                  [chartClass]=\"'ct-perfect-fourth'\"\n                  [chartType]=\"emailChartType\"\n                  [chartData]=\"emailChartData\"\n                  [legendItems]=\"emailChartLegendItems\"\n                  [withHr]=\"true\"\n                  [footerIconClass]=\"'fa fa-clock-o'\"\n                  [footerText]=\"'as of 2 days ago'\">\n                </lbd-chart>\n            </div>\n            <div class=\"col-md-5\">\n                <lbd-chart\n                  [title]=\"'User Behavior'\"\n                  [subtitle]=\"'24 Hours performance'\"\n                  [chartType]=\"hoursChartType\"\n                  [chartData]=\"hoursChartData\"\n                  [chartOptions]=\"hoursChartOptions\"\n                  [chartResponsive]=\"hoursChartResponsive\"\n                  [legendItems]=\"hoursChartLegendItems\"\n                  [withHr]=\"true\"\n                  [footerIconClass]=\"'fa fa-history'\"\n                  [footerText]=\"'Updated 1 hour ago'\">\n                </lbd-chart>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t\t\t<h4 class=\"title\">Searched Terms</h4>\n\t\t\t\t\t\t\t\t<p class=\"category\">Realtime Search Terms Of Users</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t<div class=\"table-full-width\">\n\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let search of liveSearch | slice:0:9; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{search.terms}}\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t<div class=\"stats\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-lock\"></i> Secure Websocket\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <lbd-chart\n                  [title]=\"'2018 Genre Popularity'\"\n                  [subtitle]=\"'All library usage by genre'\"\n                  [chartType]=\"activityChartType\"\n                  [chartData]=\"activityChartData\"\n                  [chartOptions]=\"activityChartOptions\"\n                  [chartResponsive]=\"activityChartResponsive\"\n                  [legendItems]=\"activityChartLegendItems\"\n                  [withHr]=\"true\"\n                  [footerIconClass]=\"'fa fa-check'\"\n                  [footerText]=\"'Data information certified'\">\n                </lbd-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Events</h4>\n                        <p class=\"category\">Citywide Library Events</p>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"table-full-width\">\n\t\t\t\t\t\t\t<div *ngIf=\"!(libEvents$ | async)\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<i class=\"pe-7s-refresh\"></i>\n\t\t\t\t\t\t\t</div>\n                            <table class=\"table\" *ngIf=\"libEvents$ | async\">\n                                <tbody>\n                                    <tr *ngFor=\"let event of (libEvents$ | async) | slice:0:9; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t{{event.title}} <br />\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"smaller\" href=\"{{event.link}}\" target=\"_blank\">{{event.library}}</a> \n\t\t\t\t\t\t\t\t\t\t\t<em>{{ i + 8 }} Participants</em>\n\t\t\t\t\t\t\t\t\t\t</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"footer\">\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var lbd_chart_component_1 = __webpack_require__("./src/app/lbd/lbd-chart/lbd-chart.component.ts");
var Chartist = __webpack_require__("./node_modules/chartist/dist/chartist.js");
var http_services_1 = __webpack_require__("./src/app/services/http-services.ts");
var websocket_services_1 = __webpack_require__("./src/app/services/websocket-services.ts");
var HomeComponent = (function () {
    function HomeComponent(apiService, webSocket) {
        var _this = this;
        this.apiService = apiService;
        this.webSocket = webSocket;
        this.liveSearch = [];
        this.libEvents$ = this.apiService.fetchEvents();
        this.liveSearches$ = this.webSocket
            .connect('ws://dashboard.tpllabs.ca:4571/rtsearches')
            .subscribe(function (response) {
            var data = JSON.parse(response.data);
            _this.liveSearch.unshift(data[0]);
            return {
                terms: data[0].terms,
                browser: data[0].browser
            };
        });
        this.emailChartType = lbd_chart_component_1.ChartType.Pie;
        this.emailChartData = {
            labels: ['45%', '49%', '6%'],
            series: [45, 49, 6]
        };
        this.emailChartLegendItems = [
            { title: 'Books Out', imageClass: 'fa fa-circle text-info' },
            { title: 'Books In', imageClass: 'fa fa-circle text-danger' },
            { title: 'Books Missing', imageClass: 'fa fa-circle text-warning' }
        ];
        this.hoursChartType = lbd_chart_component_1.ChartType.Line;
        this.hoursChartData = {
            labels: ['7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752],
                [67, 152, 143, 240, 287, 335, 435, 437, 530],
                [23, 22, 40, 43, 60, 40, 55, 40, 42]
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 800,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.hoursChartLegendItems = [
            { title: 'Check Out', imageClass: 'fa fa-circle text-info' },
            { title: 'Return', imageClass: 'fa fa-circle text-danger' },
            { title: 'Report Issue', imageClass: 'fa fa-circle text-warning' }
        ];
        this.activityChartType = lbd_chart_component_1.ChartType.Bar;
        this.activityChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
                [200, 230, 210, 220, 240, 230, 250, 200, 220, 178, 190, 195],
                [150, 176, 180, 160, 175, 150, 140, 190, 174, 160, 182, 150],
                [301, 350, 320, 310, 316, 320, 310, 300, 298, 300, 320, 330]
            ]
        };
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.activityChartLegendItems = [
            { title: 'Horror', imageClass: 'fa fa-circle text-info' },
            { title: 'Sci-Fi', imageClass: 'fa fa-circle text-danger' },
            { title: 'Youth', imageClass: 'fa fa-circle text-success' },
            { title: 'Romance', imageClass: 'fa fa-circle text-warning' },
            { title: 'Non-Fiction', imageClass: 'fa fa-circle text-secondary' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.liveSearches$.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")],
        providers: [http_services_1.ApiServices, websocket_services_1.WebsocketService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_services_1.ApiServices !== "undefined" && http_services_1.ApiServices) === "function" && _a || Object, typeof (_b = typeof websocket_services_1.WebsocketService !== "undefined" && websocket_services_1.WebsocketService) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/home.component.js.map

/***/ }),

/***/ "./src/app/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n\twidth: 100%;\n\theight: auto;\n\tmax-height: 500px;\n\tmax-width: 100%;\n}\n.font-icon-list {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n}\n.font-icon-detail {\n\ttext-align: left;\n\tpadding: 20px 10px;\n\tcursor: pointer;\n}\n.empty-book {\n\tmargin: 100px 0 25px;\n}"

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">New Book Suggestions</h4>\n                    </div>\n                    <div class=\"content all-icons\">\n                        <div class=\"row\" *ngIf=\"bookList$ | async\">\n                            <div class=\"font-icon-list col-sm-3 col-xs-6\" *ngFor=\"let book of (bookList$ | async)\">\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"book.pictureUrl\" class=\"img-fluid\" />\n\t\t\t\t\t\t\t\t</div>\n                                <div class=\"font-icon-detail\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<strong>{{book.title}}</strong> <br />\n\t\t\t\t\t\t\t\t\t\t<em class=\"small\">by: {{book.author}}</em>\n\t\t\t\t\t\t\t\t\t</p>\n                                </div>\n                            </div>\n\t\t\t\t\t\t\t<!-- <div class=\"font-icon-list col-sm-3 col-xs-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"text-center empty-book\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"pe-7s-plus\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"font-icon-detail\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Find New Books</strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_services_1 = __webpack_require__("./src/app/services/http-services.ts");
var IconsComponent = (function () {
    function IconsComponent(apiService) {
        this.apiService = apiService;
        this.bookList$ = this.apiService.fetchBooks();
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    core_1.Component({
        selector: 'app-icons',
        template: __webpack_require__("./src/app/icons/icons.component.html"),
        styles: [__webpack_require__("./src/app/icons/icons.component.css")],
        providers: [http_services_1.ApiServices]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_services_1.ApiServices !== "undefined" && http_services_1.ApiServices) === "function" && _a || Object])
], IconsComponent);
exports.IconsComponent = IconsComponent;
var _a;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/icons.component.js.map

/***/ }),

/***/ "./src/app/lbd/lbd-chart/lbd-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lbd/lbd-chart/lbd-chart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Chartist = __webpack_require__("./node_modules/chartist/dist/chartist.js");
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var LbdChartComponent = LbdChartComponent_1 = (function () {
    function LbdChartComponent() {
    }
    LbdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chart-" + LbdChartComponent_1.currentId++;
    };
    LbdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                this.chart = new Chartist.Pie("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                this.chart = new Chartist.Line("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                this.chart = new Chartist.Bar("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    LbdChartComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chartId = null;
            this.chart.detach();
        }
    };
    return LbdChartComponent;
}());
LbdChartComponent.currentId = 1;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "subtitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "chartClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LbdChartComponent.prototype, "chartType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LbdChartComponent.prototype, "chartData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LbdChartComponent.prototype, "chartOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LbdChartComponent.prototype, "chartResponsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "footerIconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "footerText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LbdChartComponent.prototype, "legendItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LbdChartComponent.prototype, "withHr", void 0);
LbdChartComponent = LbdChartComponent_1 = __decorate([
    core_1.Component({
        selector: 'lbd-chart',
        template: __webpack_require__("./src/app/lbd/lbd-chart/lbd-chart.component.html"),
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], LbdChartComponent);
exports.LbdChartComponent = LbdChartComponent;
var LbdChartComponent_1;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/lbd-chart.component.js.map

/***/ }),

/***/ "./src/app/lbd/lbd.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var lbd_chart_component_1 = __webpack_require__("./src/app/lbd/lbd-chart/lbd-chart.component.ts");
var LbdModule = (function () {
    function LbdModule() {
    }
    return LbdModule;
}());
LbdModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule
        ],
        declarations: [
            lbd_chart_component_1.LbdChartComponent
        ],
        exports: [
            lbd_chart_component_1.LbdChartComponent
        ]
    })
], LbdModule);
exports.LbdModule = LbdModule;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/lbd.module.js.map

/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_services_1 = __webpack_require__("./src/app/services/http-services.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var LibraryTypeEnum;
(function (LibraryTypeEnum) {
    LibraryTypeEnum[LibraryTypeEnum["PUBLIC"] = 0] = "PUBLIC";
    LibraryTypeEnum[LibraryTypeEnum["STATION"] = 1] = "STATION";
    LibraryTypeEnum[LibraryTypeEnum["HOME"] = 2] = "HOME";
})(LibraryTypeEnum || (LibraryTypeEnum = {}));
var MapsComponent = (function () {
    function MapsComponent(apiService, router) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.markerTemp = [];
        this.polys = [];
        this.isLoaded = false;
        this.styleJson = [
            {
                'featureType': 'administrative.land_parcel',
                'elementType': 'labels',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'labels.text',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'poi.business',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'poi.medical',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'labels',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'transit',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            }
        ];
        this.apiService.fetchLibraries().subscribe(function (lib) {
            lib.map(function (library) {
                var geo = library.location;
                var latLng = new google.maps.LatLng(geo.lat, geo.lng);
                var id = library.name;
                if (_this.map) {
                    _this.setMarker([latLng, id]);
                }
                else {
                    _this.markerTemp.push([latLng, id]);
                }
            });
        });
        this.apiService.fetchMapPolys().subscribe(function (polys) {
            for (var key in polys) {
                if (polys.hasOwnProperty(key)) {
                    if (_this.map) {
                        // this.setPolyGons(polys[key]);
                    }
                    else {
                        _this.polys.push(polys[key]);
                    }
                }
            }
        });
    }
    MapsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.isLoaded) {
            var myLatlng = new google.maps.LatLng(43.6690207, -79.3916043);
            var mapOptions = {
                zoom: 13,
                center: myLatlng,
                scrollwheel: false,
                styles: this.styleJson
            };
            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            this.markerTemp.map(function (marker) {
                _this.setMarker(marker);
            });
            // this.polys.map(poly => {
            // 	this.setPolyGons(poly)
            // });
            this.isLoaded = true;
        }
    };
    MapsComponent.prototype.setMarker = function (marker) {
        var _this = this;
        var Marker = new google.maps.Marker({
            position: marker[0],
            title: marker[1],
            icon: 'https://elevate-smart-library.appspot.com/img/pin.png'
        });
        Marker.setMap(this.map);
        google.maps.event.addListener(Marker, 'click', (function () { return _this.router.navigate(['/dashboard', marker[1]]); }));
    };
    MapsComponent.prototype.setPolyGons = function (poly) {
        var gCoords = [];
        poly.BoundaryCoords.map(function (tCoords) {
            gCoords.push(new google.maps.LatLng(tCoords[0], tCoords[1]));
        });
        var bermudaTriangle = new google.maps.Polygon({
            paths: gCoords,
            strokeColor: '#2394AE',
            strokeOpacity: 0.2,
            strokeWeight: 3,
            fillColor: '#6dc8d7',
            fillOpacity: 0.1
        });
        bermudaTriangle.setMap(this.map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    core_1.Component({
        selector: 'app-maps',
        template: __webpack_require__("./src/app/maps/maps.component.html"),
        styles: [__webpack_require__("./src/app/maps/maps.component.css")],
        providers: [http_services_1.ApiServices]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_services_1.ApiServices !== "undefined" && http_services_1.ApiServices) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], MapsComponent);
exports.MapsComponent = MapsComponent;
var _a, _b;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/maps.component.js.map

/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    core_1.Component({
        selector: 'app-notifications',
        template: __webpack_require__("./src/app/notifications/notifications.component.html"),
        styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/notifications.component.js.map

/***/ }),

/***/ "./src/app/services/http-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var ApiServices = (function () {
    function ApiServices(appHttp) {
        this.appHttp = appHttp;
        this.baseUrl = 'https://elevate-smart-library.appspot.com/api/v1/';
    }
    ApiServices.prototype.fetchLibraries = function () {
        var path = this.baseUrl + 'libraries';
        // return Observable.of(this.libraries);
        return this.appHttp.get(path);
    };
    ApiServices.prototype.fetchBooks = function () {
        var path = this.baseUrl + 'books';
        return this.appHttp.get(path);
    };
    ApiServices.prototype.fetchMapPolys = function () {
        var path = 'http://api.artifaktdev.ca/polys/';
        return this.appHttp.get(path);
    };
    ApiServices.prototype.fetchEvents = function () {
        var events = localStorage.getItem('events');
        var path = 'https://opendata.tpl.ca/resources/events';
        if (events) {
            return rxjs_1.Observable.of(JSON.parse(events));
        }
        else {
            return this.appHttp.get(path).pipe(operators_1.map(function (response) {
                if (response instanceof Array) {
                    var parsed = response.slice(0, 6);
                    var string = JSON.stringify(parsed);
                    console.log(string);
                    localStorage.setItem('events', string);
                    return response;
                }
            }));
        }
    };
    return ApiServices;
}());
ApiServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], ApiServices);
exports.ApiServices = ApiServices;
var _a;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/http-services.js.map

/***/ }),

/***/ "./src/app/services/websocket-services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log('Successfully connected: ' + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = Rx.Observable.create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return Rx.Subject.create(observer, observable);
    };
    return WebsocketService;
}());
WebsocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], WebsocketService);
exports.WebsocketService = WebsocketService;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/websocket-services.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer-cmp',
        template: __webpack_require__("./src/app/shared/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/footer.component.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var footer_component_1 = __webpack_require__("./src/app/shared/footer/footer.component.ts");
var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [footer_component_1.FooterComponent],
        exports: [footer_component_1.FooterComponent]
    })
], FooterModule);
exports.FooterModule = FooterModule;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/footer.module.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"navbar-brand\">\n\t\t\t\t\t{{getTitle()}}{{id}}\n\t\t\t</span>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-dashboard\"></i>\n                        <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-globe\"></i>\n                        <b class=\"caret\"></b>\n                        <span class=\"notification hidden-sm hidden-xs\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            5 Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">*** Library ID *** Out of Stock!</a></li>\n                        <li><a href=\"#\">*** Library ID *** Donation Recieved</a></li>\n                        <li><a href=\"#\">*** Library ID *** Servicing Required</a></li>\n                        <li><a href=\"#\">*** Library ID *** Full Stock!</a></li>\n                        <li><a href=\"#\">*** Library ID *** Out of Stock!</a></li>\n                    </ul>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var NavbarComponent = (function () {
    function NavbarComponent(location, element, route) {
        this.element = element;
        this.route = route;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var _this = this;
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/').pop();
        this.sub = this.route.firstChild ? this.route.firstChild.params.subscribe(function (params) {
            _this.id = params['library'] ? ' - ' + params['library'] : null;
        }) : null;
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'navbar-cmp',
        template: __webpack_require__("./src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a, _b, _c;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var navbar_component_1 = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [navbar_component_1.NavbarComponent],
        exports: [navbar_component_1.NavbarComponent]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/navbar.module.js.map

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <span class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\n            </div>\n            Smart Library\n        </span>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
exports.ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    // { path: 'user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    // { path: 'table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: 'maps', title: 'Library Map', icon: 'pe-7s-map-marker', class: '' },
    { path: 'books', title: 'Suggested Books', icon: 'pe-7s-bookmarks', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/sidebar/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/sidebar.component.js.map

/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [sidebar_component_1.SidebarComponent],
        exports: [sidebar_component_1.SidebarComponent]
    })
], SidebarModule);
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/sidebar.module.js.map

/***/ }),

/***/ "./src/app/tables/tables.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Striped Table with Hover</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData2.dataRows\">\n                                    <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TablesComponent = (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    core_1.Component({
        selector: 'app-tables',
        template: __webpack_require__("./src/app/tables/tables.component.html"),
        styles: [__webpack_require__("./src/app/tables/tables.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TablesComponent);
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/tables.component.js.map

/***/ }),

/***/ "./src/app/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Light Bootstrap Table Heading</h4>\n                        <p class=\"category\">Created using Roboto Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Light Bootstrap Table Heading </h1>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Light Bootstrap Table Heading</h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Light Bootstrap Table Heading</h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Light Bootstrap Table Heading</h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Light Bootstrap Table Heading</h5>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Light Bootstrap Table Heading</h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                                </p>\n                                <small>\n                                    Steve Jobs, CEO Apple\n                                </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <!--\n                            there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\n                            -->\n                            <p class=\"category\">Coloured Text\n                            </p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    core_1.Component({
        selector: 'app-typography',
        template: __webpack_require__("./src/app/typography/typography.component.html"),
        styles: [__webpack_require__("./src/app/typography/typography.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/typography.component.js.map

/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Edit Profile</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Company (disabled)</label>\n                                        <input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Username</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Email address</label>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>First Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>Address</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>City</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Country</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Postal Code</label>\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/face-3.jpg\" alt=\"...\"/>\n\n                                <h4 class=\"title\">Mike Andrew<br />\n                                    <small>michael24</small>\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Lamborghini Mercy <br>\n                            Your chick she so thirsty <br>\n                            I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        template: __webpack_require__("./src/app/user/user.component.html"),
        styles: [__webpack_require__("./src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/user.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/Users/adam/Downloads/lbd-angular-cli-free-v1.4.0/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map