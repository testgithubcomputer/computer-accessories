(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\angular10\new-project\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_util_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/util/items.service */ "yweA");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class AppComponent {
    constructor(router, itemsService, dom, platformId) {
        this.router = router;
        this.itemsService = itemsService;
        this.dom = dom;
        this.platformId = platformId;
        this.isHome = true;
        this.showNavFooter = true;
        this.getTitle();
    }
    ngOnInit() {
        this.year = new Date().getFullYear();
        console.log('app ng oninit ' + this.router.url);
    }
    getTitle() {
        let responseObs = this.itemsService.loadTitleFile();
        responseObs.subscribe(response => {
            console.log('items file content = ' + JSON.stringify(response));
            this.titleName = response.title;
        }, error => {
            console.log('file not found' + JSON.stringify(error));
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_util_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 1, consts: [[1, ""], [1, "headerSectionAf"], [1, "row", 2, "background-color", "white"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light", "lg", "headerSectionBf"], [1, "container-fluid", 2, "justify-content", "center"], [1, "hderPrt"], ["routerLink", "/", 1, "t"], [2, "margin-top", "7rem"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titleName, " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n}\r\n\r\n.card-horizontal[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    \r\n    margin-left: 128px;\r\n    margin-top: -12px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    color: gray;\r\n    margin-left: 128px;\r\n    line-height: 15px;\r\n    font-weight: 600;\r\n    margin-top: 6px;\r\n}\r\n\r\n\r\n\r\n.column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 329px;\r\n    padding: 0 10px;\r\n}\r\n\r\n.nnn[_ngcontent-%COMP%] {\r\n    margin-left: 33px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    \r\n    padding: 20px;\r\n    height: 150px;\r\n    width: 100%;\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .navbar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   h2[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    color: white !important;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    height: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    padding-left: 12px;\r\n    position: absolute;\r\n}\r\n\r\n.b[_ngcontent-%COMP%] {\r\n    margin-top: -72px;\r\n    margin-left: -6px;\r\n    height: 122px;\r\n    width: 117px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    width: 507px;\r\n    margin-right: 928px;\r\n    margin-top: -10px;\r\n    height: 42px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: darkblue;\r\n    text-decoration: none !important;\r\n}\r\n\r\n.b1[_ngcontent-%COMP%] {\r\n    margin-top: -72px;\r\n    margin-left: -6px;\r\n    height: 122px;\r\n    width: 117px;\r\n}\r\n\r\n.t[_ngcontent-%COMP%] {\r\n    \r\n    font-weight: bolder;\r\n    color: #FFFFFF;\r\n    margin-top: -45px;\r\n    margin-left: 7px;\r\n    font-size: 25px;\r\n}\r\n\r\n.t1[_ngcontent-%COMP%] {\r\n    margin-left: 7px;\r\n    margin-top: 0px;\r\n    \r\n    color: gray;\r\n    display: block;\r\n    font-size: 23px;\r\n}\r\n\r\n.hderPrt[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\n.t2[_ngcontent-%COMP%] {\r\n    \r\n    margin-left: 30px;\r\n    margin-top: -10px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    \r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 110px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: white;\r\n    font-weight: 600;\r\n    background: white;\r\n}\r\n\r\n\r\n\r\nbutton.activeMenu[_ngcontent-%COMP%] {\r\n    \r\n    margin: 13px;\r\n    \r\n    margin-left: 30px;\r\n    margin-top: 28px;\r\n    margin-bottom: 21px;\r\n    background: transparent;\r\n    box-shadow: none;\r\n    border: none !important;\r\n}\r\n\r\nbutton.normalMenu[_ngcontent-%COMP%] {\r\n    color: rgb(216, 32, 124);\r\n    margin: 13px;\r\n    border: rgb(216, 32, 124);\r\n    border-radius: 19px;\r\n    background-color: white;\r\n    margin-left: 30px;\r\n    \r\n    margin-top: 28px;\r\n    margin-bottom: 21px;\r\n}\r\n\r\n.lg[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    background: linear-gradient(to right, #cb2b5f 0%, #793986 77%);\r\n    height: 90px;\r\n}\r\n\r\n.headerSectionBf[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.headerSectionAf[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    margin-top: 0px;\r\n    top: 0;\r\n    z-index: 99999999;\r\n    width: 100%;\r\n}\r\n\r\n.ot[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 13px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.r1[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    background: linear-gradient(to right, #f6f6d0 0%, #d8f6e8 78%);\r\n    border-radius: 15px;\r\n    width: 97%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.h[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n    \r\n    \r\n    \r\n    padding: 10px 12px 10px 17px;\r\n}\r\n\r\n.h1[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    line-height: 21px;\r\n    \r\n    \r\n    font-weight: 600;\r\n    \r\n    align-self: flex-end;\r\n}\r\n\r\n\r\n\r\n.b1[_ngcontent-%COMP%] {\r\n    margin-top: -96px;\r\n}\r\n\r\n.rr[_ngcontent-%COMP%] {\r\n    \r\n    margin-bottom: 29px;\r\n}\r\n\r\n.tt[_ngcontent-%COMP%] {\r\n    margin-left: 126px;\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n    margin-top: -12px;\r\n}\r\n\r\n.r2[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    background-image: linear-gradient(to right, rgb(255, 173, 170), rgb(231, 229, 91));\r\n    margin-top: 70px;\r\n    border-radius: 15px;\r\n    width: 97%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.h2[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    line-height: 21px;\r\n    margin-left: 309px;\r\n    margin-top: -27px;\r\n    font-weight: 600;\r\n    width: 80%;\r\n}\r\n\r\n.r3[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    background: linear-gradient(to right, #fdd7dc 14%, #edf6fd 86%);\r\n    margin-top: 70px;\r\n    border-radius: 15px;\r\n    width: 97%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.h3[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    line-height: 21px;\r\n    margin-left: 214px;\r\n    margin-top: -27px;\r\n    font-weight: 600;\r\n    width: 80%;\r\n}\r\n\r\n.r4[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    background: linear-gradient(to right, #ffeeed 6%, #deefbc 67%);\r\n    margin-top: 70px;\r\n    border-radius: 15px;\r\n    width: 97%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.h4[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    line-height: 21px;\r\n    margin-left: 220px;\r\n    margin-top: -27px;\r\n    font-weight: 600;\r\n    width: 80%;\r\n}\r\n\r\n.r5[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    background: linear-gradient(to right, #dcffeb 33%, #fcffed 93%);\r\n    margin-top: 70px;\r\n    border-radius: 15px;\r\n    margin-bottom: 50px;\r\n    width: 97%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.h5[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    line-height: 21px;\r\n    margin-left: 125px;\r\n    margin-top: -27px;\r\n    font-weight: 600;\r\n    width: 80%;\r\n}\r\n\r\n.p[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBR0Esb0NBQW9DOztBQUVwQztJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSxtRUFBbUU7O0FBR25FLG1DQUFtQzs7QUFHbkMsNEJBQTRCOztBQUU1QjtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFHQTs7R0FFRzs7QUFFSDs7SUFFSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztHQUVHOztBQUlIO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4REFBOEQ7SUFDOUQsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLE1BQU07SUFDTixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDhEQUE4RDtJQUM5RCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBR0E7OztFQUdFOztBQUVGO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrRkFBa0Y7SUFDbEYsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtEQUErRDtJQUMvRCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsOERBQThEO0lBQzlELGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwrREFBK0Q7SUFDL0QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMTI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcblxyXG4vKiBGbG9hdCBmb3VyIGNvbHVtbnMgc2lkZSBieSBzaWRlICovXHJcblxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMyOXB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4ubm5uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzM3B4O1xyXG59XHJcblxyXG5cclxuLyogUmVtb3ZlIGV4dHJhIGxlZnQgYW5kIHJpZ2h0IG1hcmdpbnMsIGR1ZSB0byBwYWRkaW5nIGluIGNvbHVtbnMgKi9cclxuXHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuXHJcblxyXG4vKiBTdHlsZSB0aGUgY291bnRlciBjYXJkcyAqL1xyXG5cclxuLmNhcmQge1xyXG4gICAgLyogdGhpcyBhZGRzIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5cclxuLyogLm5hdmJhci1uYXYgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDUyLCA0OSwgNDksIDAuNzUpO1xyXG59ICovXHJcblxyXG4ubmF2YmFyLW5hdiBidXR0b246Zm9jdXMsXHJcbi5uYXZiYXItbmF2IGJ1dHRvbjpmb2N1cyBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmIge1xyXG4gICAgbWFyZ2luLXRvcDogLTcycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICAgIGhlaWdodDogMTIycHg7XHJcbiAgICB3aWR0aDogMTE3cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDUwN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5MjhweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucmlnaHQgLnRpdGxlIGEge1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgaGVpZ2h0OiAxMjJweDtcclxuICAgIHdpZHRoOiAxMTdweDtcclxufVxyXG5cclxuLnQge1xyXG4gICAgLyogZm9udC1zaXplOiB4eC1sYXJnZTsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnQxIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAvKiBmb250LXNpemU6IHgtbGFyZ2U7ICovXHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4uaGRlclBydCB7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtMTFweDsgKi9cclxufVxyXG5cclxuLnQyIHtcclxuICAgIC8qIGhlaWdodDogNjhweDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSAqL1xyXG5cclxuXHJcblxyXG5idXR0b24uYWN0aXZlTWVudSB7XHJcbiAgICAvKiBjb2xvcjogcmdiKDIxNiwgMzIsIDEyNCk7ICovXHJcbiAgICBtYXJnaW46IDEzcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxOXB4OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjFweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ubm9ybWFsTWVudSB7XHJcbiAgICBjb2xvcjogcmdiKDIxNiwgMzIsIDEyNCk7XHJcbiAgICBtYXJnaW46IDEzcHg7XHJcbiAgICBib3JkZXI6IHJnYigyMTYsIDMyLCAxMjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAvKiB3aWR0aDogMTI5cHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjFweDtcclxufVxyXG5cclxuLmxnIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2IyYjVmIDAlLCAjNzkzOTg2IDc3JSk7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJTZWN0aW9uQmYge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJTZWN0aW9uQWYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm90IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucjEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNmY2ZDAgMCUsICNkOGY2ZTggNzglKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMzhweDsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDIycHg7ICovXHJcbiAgICAvKiB3aWR0aDogOTUlOyAqL1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMTdweDtcclxufVxyXG5cclxuLmgxIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjkxcHg7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtMjdweDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAvKiB3aWR0aDogODAlOyAqL1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcblxyXG4vKiAuciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xyXG59XHJcbiAqL1xyXG5cclxuLmIxIHtcclxuICAgIG1hcmdpbi10b3A6IC05NnB4O1xyXG59XHJcblxyXG4ucnIge1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTlweDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XHJcbn1cclxuXHJcbi50dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI2cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG59XHJcblxyXG4ucjIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDE3MywgMTcwKSwgcmdiKDIzMSwgMjI5LCA5MSkpO1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oMiB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnIzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRkN2RjIDE0JSwgI2VkZjZmZCA4NiUpO1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oMyB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnI0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlZWVkIDYlLCAjZGVlZmJjIDY3JSk7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmg0IHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ucjUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkY2ZmZWIgMzMlLCAjZmNmZmVkIDkzJSk7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oNSB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _modules_util_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _modules_util_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/util/items.service */ "yweA");











class AppModule {
    constructor(platformId) {
        this.platformId = platformId;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); }, providers: [_modules_util_items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            //	NgUniversalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        //	NgUniversalModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                    //	NgUniversalModule
                ],
                providers: [_modules_util_items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(mod => mod.HomeModule) },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(mod => mod.HomeModule) },
    // { path : '404',loadChildren: () => import('./modules/common/404/not-found.module').then(mod => mod.NotFoundModule)},
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                onSameUrlNavigation: 'reload',
                scrollPositionRestoration: 'top',
                scrollOffset: [0, 0],
                // Enable scrolling to anchors
                anchorScrolling: "enabled"
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled',
                        onSameUrlNavigation: 'reload',
                        scrollPositionRestoration: 'top',
                        scrollOffset: [0, 0],
                        // Enable scrolling to anchors
                        anchorScrolling: "enabled"
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "yweA":
/*!***********************************************!*\
  !*** ./src/app/modules/util/items.service.ts ***!
  \***********************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ItemsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    loadItemsFile() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
        //.set("Authorization", token);
        var url = 'assets/data/Items.json';
        return this.httpClient.get(url, { headers: headers });
    }
    saveItemsFileContent(items) {
        this.computerItems = items;
    }
    getItemsFileContent() {
        return this.computerItems;
    }
    loadTitleFile() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
        //.set("Authorization", token);
        var url = 'assets/data/title.json';
        return this.httpClient.get(url, { headers: headers });
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map