"use strict";
(self["webpackChunkrezeptsammlungng"] = self["webpackChunkrezeptsammlungng"] || []).push([["main"],{

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6924);



class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["pm-app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "pm-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: ["h1[_ngcontent-%COMP%] {\n    color: blue;\n    font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _home_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/carousel.component */ 7508);
/* harmony import */ var _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe/recipe.module */ 128);
/* harmony import */ var _home_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/about.component */ 1275);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 6924);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1692);
/* harmony import */ var _shared_encodeUri_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/encodeUri.pipe */ 484);
/* harmony import */ var _home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/privacy/privacy.component */ 5124);
/* harmony import */ var _home_build_build_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/build/build.component */ 3021);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ 1884);
/* harmony import */ var _simple_recipe_list_simple_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simple-recipe-list/simple-recipe-list.component */ 3436);
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stats/stats.component */ 6340);
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favourites/favourites.component */ 892);
/* harmony import */ var _menuabout_menuabout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menuabout/menuabout.component */ 3676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4280);



















const appRoutes = [{
  path: 'homepage',
  component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__.HomepageComponent
}, {
  path: 'carousel',
  component: _home_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent
}, {
  path: 'about',
  component: _home_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent
}, {
  path: 'privacy',
  component: _home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__.PrivacyComponent
}, {
  path: 'build',
  component: _home_build_build_component__WEBPACK_IMPORTED_MODULE_7__.BuildComponent
}, {
  path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'homepage',
  pathMatch: 'full'
}];
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_2__.RecipeModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(appRoutes, {
      enableTracing: false
    }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _home_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _home_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _shared_encodeUri_pipe__WEBPACK_IMPORTED_MODULE_5__.EncodeURI, _home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__.PrivacyComponent, _home_build_build_component__WEBPACK_IMPORTED_MODULE_7__.BuildComponent, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__.HomepageComponent, _simple_recipe_list_simple_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__.SimpleRecipeListComponent, _stats_stats_component__WEBPACK_IMPORTED_MODULE_10__.StatsComponent, _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_11__.FavouritesComponent, _menuabout_menuabout_component__WEBPACK_IMPORTED_MODULE_12__.MenuaboutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_2__.RecipeModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
})();

/***/ }),

/***/ 892:
/*!****************************************************!*\
  !*** ./src/app/favourites/favourites.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavouritesComponent: () => (/* binding */ FavouritesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_favorites_service___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/favorites.service  */ 6680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);



function FavouritesComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", recipe_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.name);
  }
}
class FavouritesComponent {
  constructor(favoritesService) {
    this.favoritesService = favoritesService;
    this.recipes = [];
  }
  ngOnInit() {
    this.favoritesService.getFavoritesData().subscribe(data => {
      this.recipes.push(data);
    });
  }
  static #_ = this.ɵfac = function FavouritesComponent_Factory(t) {
    return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_favorites_service___WEBPACK_IMPORTED_MODULE_0__.FavoritesService, 4));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FavouritesComponent,
    selectors: [["pm-favourites"]],
    decls: 2,
    vars: 1,
    consts: [[3, "href", 4, "ngFor", "ngForOf"], [3, "href"]],
    template: function FavouritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavouritesComponent_a_1_Template, 3, 2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recipes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1275:
/*!*****************************************!*\
  !*** ./src/app/home/about.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["pm-about"]],
    decls: 111,
    vars: 0,
    consts: [[1, "container"], ["src", "https://richardeigenmann.github.io/Rezeptsammlung/RichardHerbert.jpg", 1, "img-responsive"], [2, "margin-bottom", "1cm"], [1, "list-group"], [1, "list-group-item"], [1, "lead"], [1, "label", "label-primary"], ["href", "http://web.archive.org/web/19991004125431/http://ourworld.compuserve.com/homepages/richard_eigenmann/Recipes.htm"], ["src", "http://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tomcat-logo.svg/200px-Tomcat-logo.svg.png", 2, "width", "26px", "height", "auto"], ["src", "http://eclipse.org/xtend/images/gwt-logo.png", "alt", "Google Web Toolkit", 2, "width", "24px", "height", "auto"], ["href", "http://richieigenmann.users.sourceforge.net/recipesandroid.htm"], ["width", "16", "alt", "Android robot", "src", "//upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/32px-Android_robot.svg.png"], ["src", "http://www.w3.org/html/logo/downloads/HTML5_Logo.svg", 2, "width", "23px", "height", "auto"], ["src", "https://angularjs.org/img/AngularJS-large.png", 2, "width", "90px", "height", "auto"], ["src", "https://angular.io/assets/images/logos/angular/angular.svg", 2, "width", "23px", "height", "auto"], ["href", "https://richardeigenmann.github.io/RezeptsammlungNg"], ["href", "https://github.com/richardeigenmann/RezeptsammlungNg"], ["href", "https://github.com/richardeigenmann/Rezeptsammlung"], ["href", "mailto:richard.eigenmann@gmail.com"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p")(3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Richard Eigenmann und Herbert Eigenmann, 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3)(7, "li", 4)(8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "40 Jahre Rezeptsammlung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1978");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Start des Sammelns von interessanten Rezepten in der K\u00FCchenschublade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4)(15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1990");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Erfassen der gesammelten Rezepte mit Lotus 123 auf Apple Macintosh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4)(19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1994");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Floppy Disk mit abgetippten Rezepten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 4)(23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1995");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Erste Rezepte auf dem Internet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4)(27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Historische Version der Rezeptsammlung auf der ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "WayBackMachine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 4)(33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2007");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Servlet basierte Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 4)(38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Google Web Toolkit (GWT) Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 4)(43, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Android Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 4)(50, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " HTML 5 Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 4)(55, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 4)(60, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Angular-2 Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 4)(65, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Angular-6 Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 4)(70, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Angular-7 Version der Rezeptsammlung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 4)(75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Angular-11 Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " der Rezeptsammlung. Source Code auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Rezepte: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u00DCber die Jahre sammelte meine Mutter Rezepte die ansatzweise Interessant klangen in der zweituntersten K\u00FCchenschublade.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Mein Vater leerte die Schublade Anfang der 1990er Jahre und tippte die Rezepte in seinen Apple Macintosh Computer. Er speicherte jeweils ein bis zwei Rezepte in eine Lotus 123 Datei benannt nach Anfangsbuchstaben des Rezepttitels. Er druckte die Rezepte aus und erstellte so ein Ringkochbuch das seither in seiner K\u00FCche in Oberrieden steht,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Zu Weihnachten 1994 schenkte er mir eine 3&frac12; Zoll Floppy Disk mit den gesammelten Werken.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Ich formatierte die ca. 200 Rezepte in eine Lotus AmiPro TextDatei um und konnte so ein Rezeptbuch gestalten. Ohne Bilder gab das wenig her, so scannte ich mit einem geborgten Scanner die verf\u00FCgbaren Bilder ein.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "1995 Schickte mich mein damaliger Arbeitgeber f\u00FCr 6 Monate nach Slough by London. Dort lernte ich privat via Compuserve das Internet kennen und konnte eine Homepage einrichten. Ich schrieb die Rezepte f\u00FCr das Internet um und lud sie alle auf die Homepage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Ich habe selber auch fleissig Rezepte gesammelt, so dass die Sammlung heute mit 518 Rezepten da steht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Seit 2003 besitze ich eine Digitalkamera mit der ich meine eigenen Rezeptbilder schiessen kann. Ich setzte mir zum Ziel alle Rezepte selber auszuprobieren, zu fotografieren und zu bewerten. Dies ist nun fast vollst\u00E4ndig erreicht. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Feedback: \u00DCber die Jahre haben mich immer wieder freundliche Mails mit Kommentaren zu einzelnen Rezepten erreicht. Ich habe immer grosse Freude an solchen Wortmeldungen und habe die Kommentare oft zu den Rezepten Hinzugef\u00FCgt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Ich hoffe Du hast genauso viel Freude an der Rezeptsammlung wie ich!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Richard Eigenmann, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "EMail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "richard.eigenmann@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3021:
/*!***********************************************!*\
  !*** ./src/app/home/build/build.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildComponent: () => (/* binding */ BuildComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 6716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_recipe_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe-site.service */ 2012);
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe.service */ 9444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);





function BuildComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", recipe_r1.filename.substr(recipe_r1.filename.lastIndexOf("/") + 1), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", recipe_r1.filename, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", recipe_r1.name, " ");
  }
}
class BuildComponent {
  constructor(_recipeSiteService, _recipeService) {
    this._recipeSiteService = _recipeSiteService;
    this._recipeService = _recipeService;
    this.recipes = [];
    this.errorMessage = '';
    this.buildTimeStamp = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.buildTimeStamp;
    this.recipeSite = _recipeSiteService.getRecipeSite();
    this.recipesUrl = _recipeSiteService.getRecipesUrl();
    this.windowLocationHref = window.location.href;
    this.fullRecipesUrl = _recipeSiteService.getRecipesUrl();
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    this.angularVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.angularVersion;
    this.bootstrapVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bootstrapVersion;
  }
  ngOnInit() {
    this._recipeService.getRecipes().subscribe({
      next: subscribedRecipes => {
        subscribedRecipes.forEach(element => {
          element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
          element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
        });
        this.recipes = subscribedRecipes;
      },
      error: error => this.errorMessage = error
    });
  }
  static #_ = this.ɵfac = function BuildComponent_Factory(t) {
    return new (t || BuildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_recipe_site_service__WEBPACK_IMPORTED_MODULE_1__.RecipeSiteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__.RecipeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BuildComponent,
    selectors: [["pm-build"]],
    decls: 23,
    vars: 10,
    consts: [[1, "container"], [3, "href"], [4, "ngFor", "ngForOf"]],
    template: function BuildComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Build Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Recipes source: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Recipes url: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, BuildComponent_span_22_Template, 5, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Build date: ", ctx.buildTimeStamp, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx.recipeSite, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.recipeSite);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx.fullRecipesUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.fullRecipesUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total Recipes: ", ctx.recipes.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("App version: ", ctx.appVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Angular version: ", ctx.angularVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Bootstrap version: ", ctx.bootstrapVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.recipes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7508:
/*!********************************************!*\
  !*** ./src/app/home/carousel.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselComponent: () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/recipe.service */ 9444);
/* harmony import */ var _services_recipe_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/recipe-site.service */ 2012);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);






function CarouselComponent_ngb_carousel_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Richi's Rezeptsammlung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CarouselComponent_ngb_carousel_0_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_ngb_carousel_0_2_ng_template_0_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const rcp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.recipeClick(rcp_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_ngb_carousel_0_2_ng_template_0_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const rcp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.recipeClick(rcp_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rcp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", rcp_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.getRecipeImageUrl(rcp_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](rcp_r3.name);
  }
}
function CarouselComponent_ngb_carousel_0_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_0_2_ng_template_0_Template, 5, 3, "ng-template", 1);
  }
}
function CarouselComponent_ngb_carousel_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_0_ng_template_1_Template, 5, 0, "ng-template", 1)(2, CarouselComponent_ngb_carousel_0_2_Template, 1, 0, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.recipes);
  }
}
class CarouselComponent {
  constructor(_recipeService, _recipeSiteService, config) {
    this._recipeService = _recipeService;
    this._recipeSiteService = _recipeSiteService;
    this.recipes = new Array();
    this.errorMessage = '';
    // customize default values of carousels used by this component tree
    config.interval = 2500;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnFocus = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
  ngOnInit() {
    this._recipeService.getRecipes().subscribe({
      next: subscribedRecipes => {
        subscribedRecipes.forEach(function (recipe) {
          this.recipes.push(recipe);
          this.shuffleArray(this.recipes);
        });
      },
      error: error => this.errorMessage = error
    });
  }
  getRecipeImageUrl(recipe) {
    return this._recipeSiteService.getRecipeSite() + '/' + recipe.imageFilename;
  }
  recipeClick(recipe) {
    const recipeUrl = this._recipeSiteService.getRecipeSite() + '/' + recipe.filename;
    window.open(recipeUrl);
  }
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
  }
  static #_ = this.ɵfac = function CarouselComponent_Factory(t) {
    return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_recipe_site_service__WEBPACK_IMPORTED_MODULE_1__.RecipeSiteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarouselConfig));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CarouselComponent,
    selectors: [["pm-carousel"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarouselConfig])],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["ngbSlide", ""], [4, "ngFor", "ngForOf"], [1, "picsum-img-wrapper"], ["src", "https://richardeigenmann.github.io/Rezeptsammlung/RcpTemplate.jpg", "alt", "Richi's Rezeptsammlung"], [1, "carousel-caption"], [3, "src", "alt", "click"], [1, "carousel-caption", 3, "click"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_0_Template, 3, 1, "ngb-carousel", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbSlide],
    styles: ["[_nghost-%COMP%]     .carousel-item {\n    text-align:  center;\n}\n\nh3[_ngcontent-%COMP%] {\n    color:rgb(192, 207, 250);\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    height: 450px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogIGNlbnRlcjtcbn1cblxuaDMge1xuICAgIGNvbG9yOnJnYigxOTIsIDIwNywgMjUwKTtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDQ1MHB4XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5124:
/*!***************************************************!*\
  !*** ./src/app/home/privacy/privacy.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyComponent: () => (/* binding */ PrivacyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class PrivacyComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PrivacyComponent_Factory(t) {
    return new (t || PrivacyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PrivacyComponent,
    selectors: [["pm-privacy"]],
    decls: 15,
    vars: 0,
    consts: [[1, "container"], ["href", "https://www.google.com/analytics/terms/us.html"], ["href", "mailto:richard.eigenmann@gmail.com"]],
    template: function PrivacyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Diese Rezeptsammlung verwendet Google Analytics um das Nutzungsverhalten der Besucher dieser Webseite statistisch zu erfassen. Zu diesem Zweck verwendet Google Analytics \"Cookies\" und andere Technologien. In aggregierter Form werden der vermutete Standort der Besucher und die aufgerufenen Seiten visualisiert. Die Details zu Google Analytics sind hier festgehalten: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "https://www.google.com/analytics/terms/us.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kommentare zu den Rezepten, die mir per E-Mail zugesandt werden, poste ich bei Relevanz zu den Rezepten. Wer das nicht will darf mich darauf aufmerksam machen und ich werde den Kommentar nat\u00FCrlich wieder entfernen. Wer pers\u00F6nlich identifiziert wird (weil er oder sie zum Beispiel ein Rezept beigesteuert hat) kann selbstverst\u00E4ndlich auch entfernt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Richard Eigenmann, Z\u00FCrich, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "E-Mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "richard.eigenmann@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1884:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _simple_recipe_list_simple_recipe_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../simple-recipe-list/simple-recipe-list.component */ 3436);
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats/stats.component */ 6340);
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favourites/favourites.component */ 892);




class HomepageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HomepageComponent_Factory(t) {
    return new (t || HomepageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomepageComponent,
    selectors: [["pm-homepage"]],
    decls: 10,
    vars: 0,
    consts: [[1, "row"], [1, "col"]],
    template: function HomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Index:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "pm-simple-recipe-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Lieblingsrezepte:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "pm-favourites")(9, "pm-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_simple_recipe_list_simple_recipe_list_component__WEBPACK_IMPORTED_MODULE_0__.SimpleRecipeListComponent, _stats_stats_component__WEBPACK_IMPORTED_MODULE_1__.StatsComponent, _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_2__.FavouritesComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3676:
/*!**************************************************!*\
  !*** ./src/app/menuabout/menuabout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuaboutComponent: () => (/* binding */ MenuaboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class MenuaboutComponent {
  static #_ = this.ɵfac = function MenuaboutComponent_Factory(t) {
    return new (t || MenuaboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuaboutComponent,
    selectors: [["pm-menuabout"]],
    decls: 7,
    vars: 3,
    consts: [["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"]],
    template: function MenuaboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Build Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/build");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6924:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/categories.service */ 3000);
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/filter.service */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _menuabout_menuabout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menuabout/menuabout.component */ 3676);
/* harmony import */ var _shared_encodeUri_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/encodeUri.pipe */ 484);







function NavbarComponent_div_12_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "encodeURI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "encodeURI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const val_r3 = ctx.$implicit;
    const categoryType_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("href", "category/", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, categoryType_r1), "/", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, val_r3), "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", val_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.categoriesPivot.get(categoryType_r1).get(val_r3));
  }
}
function NavbarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NavbarComponent_div_12_a_5_Template, 6, 8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const categoryType_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", "#", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", categoryType_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getCategoryTypeValues(categoryType_r1));
  }
}
const _c0 = () => ["/homepage"];
class NavbarComponent {
  constructor(_categoriesService, _filterService, router) {
    this._categoriesService = _categoriesService;
    this._filterService = _filterService;
    this.router = router;
    this.categoriesPivot = new Map();
  }
  ngOnInit() {
    this._categoriesService.getCategories().subscribe(categories => {
      this.categoriesPivot = categories;
      this.bindedCategoriesPivotKeys = Array.from(this.categoriesPivot.keys());
    });
  }
  getCategoryTypeValues(categoryType) {
    //console.log("getCategoryTypeValues");
    //console.log(Array.from(this.categoriesPivot.get(categoryType).keys()).sort());
    return Array.from(this.categoriesPivot.get(categoryType).keys()).sort();
  }
  onSearchClick() {
    this.router.navigate(['/recipes']);
  }
  search(event) {
    const character = event.target.value;
    this._filterService.announceSearch(character);
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["pm-navbar"]],
    decls: 18,
    vars: 4,
    consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsibleNavbar", "aria-controls", "collapsibleNavbar", "aria-expanded", "false", "aria-label", "Expand Navbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["action", "/recipes", 1, "form-inline", "my-2", "my-lg-0", 3, "keydown.enter"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "keyup", "click"], ["class", "nav-item dropdown", 4, "ngFor", "ngForOf"], [1, "nav-item", "dropdown"], ["data-bs-toggle", "dropdown", "id", "navbarDropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "href"], [1, "caret"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "href", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "href"], [1, "badge", "rounded-pill", "text-bg-primary"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Richi's Rezeptsammlung");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function NavbarComponent_Template_form_keydown_enter_8_listener($event) {
          return $event.preventDefault();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function NavbarComponent_Template_input_keyup_9_listener($event) {
          return ctx.search($event);
        })("click", function NavbarComponent_Template_input_click_9_listener() {
          return ctx.onSearchClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NavbarComponent_div_12_Template, 6, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "pm-menuabout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.bindedCategoriesPivotKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", "#", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _menuabout_menuabout_component__WEBPACK_IMPORTED_MODULE_2__.MenuaboutComponent, _shared_encodeUri_pipe__WEBPACK_IMPORTED_MODULE_3__.EncodeURI],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1968:
/*!*************************************************!*\
  !*** ./src/app/recipe/recipe-list.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecipeListComponent: () => (/* binding */ RecipeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/recipe.service */ 9444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _services_recipe_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/recipe-site.service */ 2012);
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/filter.service */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _tdrecipe_tdrecipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tdrecipe/tdrecipe.component */ 6940);







function RecipeListComponent_table_3_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 6);
  }
  if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("myRecipe", recipe_r2);
  }
}
function RecipeListComponent_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 4)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RecipeListComponent_table_3_tr_10_Template, 1, 1, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.filtereRecipes);
  }
}
class RecipeListComponent {
  constructor(_recipeService, _route, _router, _recipeSiteService, _filterService) {
    this._recipeService = _recipeService;
    this._route = _route;
    this._router = _router;
    this._recipeSiteService = _recipeSiteService;
    this._filterService = _filterService;
    this.errorMessage = '';
    this.recipes = [];
    console.log(this._route.snapshot.paramMap.get('categorytype'));
    console.log(this._route.snapshot.paramMap.get('categoryvalue'));
    _filterService.announcedSearch$.subscribe(searchTerm => {
      this.filtereRecipes = searchTerm ? this.performFilter(searchTerm) : this.recipes;
    });
  }
  filterFn(element, index, array) {
    return true;
  }
  ngOnInit() {
    this._recipeService.getRecipes().subscribe({
      next: subscribedRecipes => {
        subscribedRecipes.forEach(element => {
          element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
          element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
        });
        this.recipes = subscribedRecipes;
        const categoryType = this._route.snapshot.paramMap.get('categorytype');
        const categoryValue = this._route.snapshot.paramMap.get('categoryvalue');
        this.filtereRecipes = this.recipes.filter(recipe => recipe.categories[categoryType] && recipe.categories[categoryType].includes(categoryValue));
      },
      error: error => this.errorMessage = error
    });
  }
  performFilter(filterBy) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter(recipe => recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message) {
    console.log('Product List: ' + message);
  }
  static #_ = this.ɵfac = function RecipeListComponent_Factory(t) {
    return new (t || RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_recipe_site_service__WEBPACK_IMPORTED_MODULE_1__.RecipeSiteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_2__.FilterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: RecipeListComponent,
    selectors: [["ng-component"]],
    decls: 4,
    vars: 1,
    consts: [[1, "panel", "panel-primary"], [1, "panel-body"], [1, "table-responsive"], ["class", "table", 4, "ngIf"], [1, "table"], ["pm-tdrecipe", "", 3, "myRecipe", 4, "ngFor", "ngForOf"], ["pm-tdrecipe", "", 3, "myRecipe"]],
    template: function RecipeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RecipeListComponent_table_3_Template, 11, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recipes && ctx.recipes.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _tdrecipe_tdrecipe_component__WEBPACK_IMPORTED_MODULE_3__.TdrecipeComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 128:
/*!*****************************************!*\
  !*** ./src/app/recipe/recipe.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecipeModule: () => (/* binding */ RecipeModule)
/* harmony export */ });
/* harmony import */ var _recipe_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-list.component */ 1968);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 9280);
/* harmony import */ var _tdrecipe_tdrecipe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tdrecipe/tdrecipe.component */ 6940);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);







class RecipeModule {
  static #_ = this.ɵfac = function RecipeModule_Factory(t) {
    return new (t || RecipeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RecipeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: 'category/:categorytype/:categoryvalue',
      component: _recipe_list_component__WEBPACK_IMPORTED_MODULE_0__.RecipeListComponent
    }, {
      path: 'recipes',
      component: _recipe_list_component__WEBPACK_IMPORTED_MODULE_0__.RecipeListComponent
    }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbRatingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RecipeModule, {
    declarations: [_recipe_list_component__WEBPACK_IMPORTED_MODULE_0__.RecipeListComponent, _tdrecipe_tdrecipe_component__WEBPACK_IMPORTED_MODULE_2__.TdrecipeComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbRatingModule]
  });
})();

/***/ }),

/***/ 6940:
/*!*******************************************************!*\
  !*** ./src/app/recipe/tdrecipe/tdrecipe.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TdrecipeComponent: () => (/* binding */ TdrecipeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1692);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);



const _c0 = ["pm-tdrecipe", ""];
class TdrecipeComponent {
  constructor() {
    this.imageWidth = 50;
    this.imageMargin = 2;
  }
  getStars() {
    return Number(this.myRecipe.stars);
  }
  static #_ = this.ɵfac = function TdrecipeComponent_Factory(t) {
    return new (t || TdrecipeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TdrecipeComponent,
    selectors: [["", "pm-tdrecipe", ""]],
    inputs: {
      myRecipe: "myRecipe"
    },
    attrs: _c0,
    decls: 9,
    vars: 12,
    consts: [["width", "150px", "height", "120px", 1, "RecipeBox"], [1, "RecipeThumbnail", 3, "src", "title", "alt"], [3, "href"], [3, "rate", "readonly", "max"]],
    template: function TdrecipeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td")(5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-rating", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", ctx.imageMargin, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.myRecipe.imageFilename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx.myRecipe.name))("alt", ctx.myRecipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.myRecipe.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.myRecipe.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.getStars())("readonly", true)("max", 4);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbRating, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe],
    styles: [".RecipeBox[_ngcontent-%COMP%] {\n    align-items:center;\n    width: 200px;\n    height: 130px;\n}\n\n.RecipeThumbnail[_ngcontent-%COMP%] {\n    min-width:100%;\n    max-width:100%;\n    min-height:100%;\n    max-height:100%;\n    object-fit: cover;\n}\n\nthead[_ngcontent-%COMP%] {color: #337AB7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVjaXBlL3RkcmVjaXBlL3RkcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBLE9BQU8sY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLlJlY2lwZUJveCB7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4uUmVjaXBlVGh1bWJuYWlsIHtcbiAgICBtaW4td2lkdGg6MTAwJTtcbiAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICBtaW4taGVpZ2h0OjEwMCU7XG4gICAgbWF4LWhlaWdodDoxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG50aGVhZCB7Y29sb3I6ICMzMzdBQjc7fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3000:
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesService: () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.service */ 9444);



class CategoriesService {
  constructor(_recipeService) {
    this._recipeService = _recipeService;
    /**
     * Map of a Map.
     * outer map is keyed by category type (Speise-Kategorie, Zutat, Bewertung, ...)
     * inner map is keyed by category (Vegetarish, Zitronen, 4 Sterne)
     * the number is the amount of recipes for the type and category
     */
    this.categoriesPivot = new Map();
    this.errorMessage = '';
    // read https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
    this._categoriesPivot = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(new Map());
    this.categoriesPivotRO = this._categoriesPivot.asObservable();
    this._recipeService.getRecipes().subscribe({
      next: recipes => {
        recipes.forEach(recipe => {
          this.addRecipe(recipe);
        });
        this._categoriesPivot.next(this.categoriesPivot);
      },
      error: error => this.errorMessage = error
    });
  }
  /**
   * This function checks if the supplied category exists, creates it
   * if necessary and returns the new category.
   * @param s The category type
   */
  getCategoryType(s) {
    if (!this.categoriesPivot.has(s)) {
      this.categoriesPivot.set(s, new Map());
    }
    return this.categoriesPivot.get(s);
  }
  addRecipe(element) {
    for (const k in element.categories) {
      if (element.categories.hasOwnProperty(k)) {
        const categoryType = this.getCategoryType(k);
        for (const i of element.categories[k]) {
          if (!categoryType.has(i)) {
            categoryType.set(i, 0);
          }
          const count = categoryType.get(i);
          categoryType.set(i, count + 1);
        }
      }
    }
  }
  getCategories() {
    return this.categoriesPivotRO;
  }
  getTitle() {
    return 'Richi\'s Rezeptsammlung';
  }
  static #_ = this.ɵfac = function CategoriesService_Factory(t) {
    return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CategoriesService,
    factory: CategoriesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6680:
/*!************************************************!*\
  !*** ./src/app/services/favorites.service .ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesService: () => (/* binding */ FavoritesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


class FavoritesService {
  constructor() {
    this.favoriteRecipes = [{
      id: 1,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp014.htm',
      name: 'Kartoffelsalat'
    }, {
      id: 2,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp396.htm',
      name: 'Teigwaren-Poulet-Salat mit Pesto Vinaigrette'
    }, {
      id: 3,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp341.htm',
      name: 'Kalbsvoressen Salvia'
    }, {
      id: 4,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp137.htm',
      name: 'Lasagne'
    }, {
      id: 5,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp376.htm',
      name: 'Kartoffelgratin'
    }, {
      id: 6,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp281.htm',
      name: 'Tirolercake'
    }, {
      id: 7,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp223.htm',
      name: 'Aargauer Rüeblitorte'
    }];
  }
  getFavoritesData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.favoriteRecipes);
  }
  static #_ = this.ɵfac = function FavoritesService_Factory(t) {
    return new (t || FavoritesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FavoritesService,
    factory: FavoritesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2316:
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterService: () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


class FilterService {
  constructor() {
    // Observable string sources
    this.announcedSearch = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Observable string streams
    this.announcedSearch$ = this.announcedSearch.asObservable();
  }
  // Service message commands
  announceSearch(search) {
    this.announcedSearch.next(search);
  }
  static #_ = this.ɵfac = function FilterService_Factory(t) {
    return new (t || FilterService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FilterService,
    factory: FilterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2012:
/*!*************************************************!*\
  !*** ./src/app/services/recipe-site.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecipeSiteService: () => (/* binding */ RecipeSiteService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class RecipeSiteService {
  getRecipeSite() {
    return 'https://richardeigenmann.github.io/Rezeptsammlung';
  }
  getRecipesUrl() {
    return 'https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json';
  }
  static #_ = this.ɵfac = function RecipeSiteService_Factory(t) {
    return new (t || RecipeSiteService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RecipeSiteService,
    factory: RecipeSiteService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9444:
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecipeService: () => (/* binding */ RecipeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var _recipe_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-site.service */ 2012);



class RecipeService {
  constructor(_http, _recipeSiteService) {
    this._http = _http;
    this._recipeSiteService = _recipeSiteService;
    this.recipesUrl = _recipeSiteService.getRecipesUrl();
  }
  getRecipes() {
    return this._http.get(this.recipesUrl);
  }
  static #_ = this.ɵfac = function RecipeService_Factory(t) {
    return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_recipe_site_service__WEBPACK_IMPORTED_MODULE_0__.RecipeSiteService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RecipeService,
    factory: RecipeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5691:
/*!*******************************************!*\
  !*** ./src/app/services/stats.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsService: () => (/* binding */ StatsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


class StatsService {
  constructor() {
    this.statsDate = '16.2.2021';
    this.stats = [{
      recipeName: 'Gedämpfte Kefen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp161.htm',
      views: 98,
      percent: 17.01
    }, {
      recipeName: "Reis aus dem Dampkochtopf",
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp362.htm',
      views: 60,
      percent: 10.42
    }, {
      recipeName: 'Kalbsvoressen Salvia',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp341.htm',
      views: 56,
      percent: 9.72
    }, {
      recipeName: 'Ueberbackene Lauch Schinkenrollen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp358.htm',
      views: 44,
      percent: 7.64
    }, {
      recipeName: 'Müscheli-Topf (Pasta)',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp336.htm',
      views: 27,
      percent: 4.69
    }, {
      recipeName: 'Gerollte Felchenfilets à la Provençale',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp375.htm',
      views: 26,
      percent: 4.51
    }, {
      recipeName: 'Poulet mit Cashew-Nüssen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp337.htm',
      views: 20,
      percent: 3.47
    }, {
      recipeName: 'Schwarzwäldertorte mit Himbeeren',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp511.htm',
      views: 20,
      percent: 3.47
    }, {
      recipeName: 'Glasierte Kastanien nach Betty Bossi',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp379.htm',
      views: 14,
      percent: 2.43
    }, {
      recipeName: 'Französischer Orangencake',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp154.htm',
      views: 11,
      percent: 1.915
    }];
  }
  getStatsDate() {
    return this.statsDate;
  }
  getStatsData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.stats);
  }
  static #_ = this.ɵfac = function StatsService_Factory(t) {
    return new (t || StatsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StatsService,
    factory: StatsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 484:
/*!******************************************!*\
  !*** ./src/app/shared/encodeUri.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncodeURI: () => (/* binding */ EncodeURI)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class EncodeURI {
  transform(value) {
    return encodeURI(value);
  }
  static #_ = this.ɵfac = function EncodeURI_Factory(t) {
    return new (t || EncodeURI)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "encodeURI",
    type: EncodeURI,
    pure: true
  });
}

/***/ }),

/***/ 9280:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star.component */ 6152);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);




class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_star_component__WEBPACK_IMPORTED_MODULE_0__.StarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_star_component__WEBPACK_IMPORTED_MODULE_0__.StarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
  });
})();

/***/ }),

/***/ 6152:
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarComponent: () => (/* binding */ StarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);


class StarComponent {
  constructor() {
    this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnChanges() {
    this.starWidth = this.rating * 86 / 5;
  }
  onClick() {
    console.log(`The rating ${this.rating} was clicked!`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
  static #_ = this.ɵfac = function StarComponent_Factory(t) {
    return new (t || StarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StarComponent,
    selectors: [["pm-star"]],
    inputs: {
      rating: "rating"
    },
    outputs: {
      ratingClicked: "ratingClicked"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 3,
    consts: [[1, "crop", 3, "title", "click"], [2, "width", "87px"], [1, "glyphicon", "glyphicon-star"]],
    template: function StarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarComponent_Template_div_click_0_listener() {
          return ctx.onClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2)(3, "span", 2)(4, "span", 2)(5, "span", 2)(6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.starWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.rating);
      }
    },
    styles: [".crop[_ngcontent-%COMP%] {\n    overflow: hidden;\n}\ndiv[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZGl2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3436:
/*!********************************************************************!*\
  !*** ./src/app/simple-recipe-list/simple-recipe-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRecipeListComponent: () => (/* binding */ SimpleRecipeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_recipe_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/recipe-site.service */ 2012);
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/recipe.service */ 9444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);




function SimpleRecipeListComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", recipe_r1.filename, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](recipe_r1.name);
  }
}
class SimpleRecipeListComponent {
  constructor(_recipeSiteService, _recipeService) {
    this._recipeSiteService = _recipeSiteService;
    this._recipeService = _recipeService;
    this.recipes = [];
    this.errorMessage = '';
  }
  ngOnInit() {
    this._recipeService.getRecipes().subscribe({
      next: subscribedRecipes => {
        subscribedRecipes.forEach(element => {
          element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
          element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
        });
        this.recipes = subscribedRecipes;
      },
      error: error => this.errorMessage = error
    });
  }
  static #_ = this.ɵfac = function SimpleRecipeListComponent_Factory(t) {
    return new (t || SimpleRecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_recipe_site_service__WEBPACK_IMPORTED_MODULE_0__.RecipeSiteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SimpleRecipeListComponent,
    selectors: [["pm-simple-recipe-list"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [3, "href"]],
    template: function SimpleRecipeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SimpleRecipeListComponent_span_0_Template, 4, 2, "span", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6340:
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsComponent: () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_stats_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stats.service */ 5691);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);



function StatsComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr")(2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    const pos_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pos_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", recipe_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.recipeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.views);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, recipe_r1.views / ctx_r0.totalViews));
  }
}
class StatsComponent {
  constructor(statsService) {
    this.statsService = statsService;
    this.statsDate = '16.2.2021';
    this.totalViews = 0;
    this.stats = [];
  }
  ngOnInit() {
    this.statsDate = this.statsService.getStatsDate();
    this.statsService.getStatsData().subscribe(data => {
      this.stats.push(data);
      this.totalViews += data.views;
    });
  }
  static #_ = this.ɵfac = function StatsComponent_Factory(t) {
    return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stats_service__WEBPACK_IMPORTED_MODULE_0__.StatsService, 4));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StatsComponent,
    selectors: [["pm-stats"]],
    decls: 15,
    vars: 2,
    consts: [[1, "table-reactive"], [4, "ngFor", "ngForOf"], [3, "href"]],
    template: function StatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Statistik:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 0)(5, "tbody")(6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Rezept");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Klicks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, StatsComponent_ng_container_14_Template, 12, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Statistik von Google Analytics vom ", ctx.statsDate, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stats);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.PercentPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  buildTimeStamp: 'Sunday, 10 March 2024 00:44:03 CET',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: (__webpack_require__(/*! ../../package.json */ 6604).version),
  angularVersion: (__webpack_require__(/*! ../../package.json */ 6604).dependencies["@angular/core"]),
  bootstrapVersion: (__webpack_require__(/*! ../../package.json */ 6604).dependencies.bootstrap)
};

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6604:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"rezeptsammlungng","version":"1.0.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve -o","build":"ng build","testorig":"ng test","test":"npm test --sourcemaps=false","lint":"ng lint --type-check","e2e":"ng e2e","updateBuildTimeStamp":"node ./updateBuildTimeStamp.js"},"private":true,"dependencies":{"@angular/animations":"17.2.4","@angular/common":"17.2.4","@angular/compiler":"17.2.4","@angular/core":"17.2.4","@angular/forms":"17.2.4","@angular/platform-browser":"17.2.4","@angular/platform-browser-dynamic":"17.2.4","@angular/router":"17.2.4","@ng-bootstrap/ng-bootstrap":"^16.0.0","@popperjs/core":"^2.11.8","ajv":"^6.12.6","bootstrap":"5.3.2","core-js":"^3.15.2","jquery":"^3.6.0","rxjs":"^7.4.0","tether":"^1.4.7","tslib":"^2.3.0","zone.js":"^0.14.2"},"devDependencies":{"@angular-devkit/build-angular":"^17.2.3","@angular/cli":"^17.2.3","@angular/compiler-cli":"^17.2.4","@angular/language-service":"17.2.4","@types/jasmine":"^3.7.8","@types/jasminewd2":"^2.0.10","@types/node":"^13.13.52","angular-cli-ghpages":"^0.6.2","codelyzer":"^6.0.2","jasmine-core":"~3.8.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.4","karma-chrome-launcher":"~3.1.0","karma-cli":"~2.0.0","karma-coverage":"^2.2.1","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.7.0","moment-timezone":"^0.5.39","protractor":"~7.0.0","replace-in-file":"6.0.0","ts-node":"^8.10.2","tslint":"^6.1.3","typescript":"5.2.2"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.9be470aaa3f46df9.js.map