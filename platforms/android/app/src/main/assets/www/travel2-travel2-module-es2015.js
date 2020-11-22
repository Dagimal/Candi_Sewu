(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel2-travel2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel2/travel2.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel2/travel2.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>travel2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/travel2/travel2-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/travel2/travel2-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Travel2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel2PageRoutingModule", function() { return Travel2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _travel2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel2.page */ "./src/app/travel2/travel2.page.ts");




const routes = [
    {
        path: '',
        component: _travel2_page__WEBPACK_IMPORTED_MODULE_3__["Travel2Page"]
    }
];
let Travel2PageRoutingModule = class Travel2PageRoutingModule {
};
Travel2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Travel2PageRoutingModule);



/***/ }),

/***/ "./src/app/travel2/travel2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/travel2/travel2.module.ts ***!
  \*******************************************/
/*! exports provided: Travel2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel2PageModule", function() { return Travel2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _travel2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel2-routing.module */ "./src/app/travel2/travel2-routing.module.ts");
/* harmony import */ var _travel2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel2.page */ "./src/app/travel2/travel2.page.ts");







let Travel2PageModule = class Travel2PageModule {
};
Travel2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travel2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Travel2PageRoutingModule"]
        ],
        declarations: [_travel2_page__WEBPACK_IMPORTED_MODULE_6__["Travel2Page"]]
    })
], Travel2PageModule);



/***/ }),

/***/ "./src/app/travel2/travel2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/travel2/travel2.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbDIvdHJhdmVsMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/travel2/travel2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/travel2/travel2.page.ts ***!
  \*****************************************/
/*! exports provided: Travel2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel2Page", function() { return Travel2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Travel2Page = class Travel2Page {
    constructor() { }
    ngOnInit() {
    }
};
Travel2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./travel2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel2/travel2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./travel2.page.scss */ "./src/app/travel2/travel2.page.scss")).default]
    })
], Travel2Page);



/***/ })

}]);
//# sourceMappingURL=travel2-travel2-module-es2015.js.map