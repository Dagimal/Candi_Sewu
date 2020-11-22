(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bangunan-bangunan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bangunan/bangunan.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bangunan/bangunan.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"schedule\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Schedule</ion-label>\n      <ion-badge>6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"person-circle\"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/bangunan/bangunan-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bangunan/bangunan-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BangunanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangunanPageRoutingModule", function() { return BangunanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bangunan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bangunan.page */ "./src/app/bangunan/bangunan.page.ts");




const routes = [
    {
        path: '',
        component: _bangunan_page__WEBPACK_IMPORTED_MODULE_3__["BangunanPage"]
    }
];
let BangunanPageRoutingModule = class BangunanPageRoutingModule {
};
BangunanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BangunanPageRoutingModule);



/***/ }),

/***/ "./src/app/bangunan/bangunan.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bangunan/bangunan.module.ts ***!
  \*********************************************/
/*! exports provided: BangunanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangunanPageModule", function() { return BangunanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bangunan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bangunan-routing.module */ "./src/app/bangunan/bangunan-routing.module.ts");
/* harmony import */ var _bangunan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bangunan.page */ "./src/app/bangunan/bangunan.page.ts");







let BangunanPageModule = class BangunanPageModule {
};
BangunanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bangunan_routing_module__WEBPACK_IMPORTED_MODULE_5__["BangunanPageRoutingModule"]
        ],
        declarations: [_bangunan_page__WEBPACK_IMPORTED_MODULE_6__["BangunanPage"]]
    })
], BangunanPageModule);



/***/ }),

/***/ "./src/app/bangunan/bangunan.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bangunan/bangunan.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbmd1bmFuL2Jhbmd1bmFuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/bangunan/bangunan.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bangunan/bangunan.page.ts ***!
  \*******************************************/
/*! exports provided: BangunanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangunanPage", function() { return BangunanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BangunanPage = class BangunanPage {
    constructor() { }
    ngOnInit() {
    }
};
BangunanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bangunan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bangunan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bangunan/bangunan.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bangunan.page.scss */ "./src/app/bangunan/bangunan.page.scss")).default]
    })
], BangunanPage);



/***/ })

}]);
//# sourceMappingURL=bangunan-bangunan-module-es2015.js.map