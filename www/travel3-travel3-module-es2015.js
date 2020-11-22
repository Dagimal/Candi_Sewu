(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel3-travel3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel3/travel3.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel3/travel3.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>travel3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/travel3/travel3-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/travel3/travel3-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Travel3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel3PageRoutingModule", function() { return Travel3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _travel3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel3.page */ "./src/app/travel3/travel3.page.ts");




const routes = [
    {
        path: '',
        component: _travel3_page__WEBPACK_IMPORTED_MODULE_3__["Travel3Page"]
    }
];
let Travel3PageRoutingModule = class Travel3PageRoutingModule {
};
Travel3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Travel3PageRoutingModule);



/***/ }),

/***/ "./src/app/travel3/travel3.module.ts":
/*!*******************************************!*\
  !*** ./src/app/travel3/travel3.module.ts ***!
  \*******************************************/
/*! exports provided: Travel3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel3PageModule", function() { return Travel3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _travel3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel3-routing.module */ "./src/app/travel3/travel3-routing.module.ts");
/* harmony import */ var _travel3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel3.page */ "./src/app/travel3/travel3.page.ts");







let Travel3PageModule = class Travel3PageModule {
};
Travel3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travel3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Travel3PageRoutingModule"]
        ],
        declarations: [_travel3_page__WEBPACK_IMPORTED_MODULE_6__["Travel3Page"]]
    })
], Travel3PageModule);



/***/ }),

/***/ "./src/app/travel3/travel3.page.scss":
/*!*******************************************!*\
  !*** ./src/app/travel3/travel3.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbDMvdHJhdmVsMy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/travel3/travel3.page.ts":
/*!*****************************************!*\
  !*** ./src/app/travel3/travel3.page.ts ***!
  \*****************************************/
/*! exports provided: Travel3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel3Page", function() { return Travel3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Travel3Page = class Travel3Page {
    constructor() { }
    ngOnInit() {
    }
};
Travel3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./travel3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel3/travel3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./travel3.page.scss */ "./src/app/travel3/travel3.page.scss")).default]
    })
], Travel3Page);



/***/ })

}]);
//# sourceMappingURL=travel3-travel3-module-es2015.js.map