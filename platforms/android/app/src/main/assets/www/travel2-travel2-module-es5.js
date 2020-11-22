function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel2-travel2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/travel2/travel2.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel2/travel2.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTravel2Travel2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>travel2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/travel2/travel2-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/travel2/travel2-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Travel2PageRoutingModule */

  /***/
  function srcAppTravel2Travel2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Travel2PageRoutingModule", function () {
      return Travel2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _travel2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./travel2.page */
    "./src/app/travel2/travel2.page.ts");

    var routes = [{
      path: '',
      component: _travel2_page__WEBPACK_IMPORTED_MODULE_3__["Travel2Page"]
    }];

    var Travel2PageRoutingModule = function Travel2PageRoutingModule() {
      _classCallCheck(this, Travel2PageRoutingModule);
    };

    Travel2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Travel2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/travel2/travel2.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/travel2/travel2.module.ts ***!
    \*******************************************/

  /*! exports provided: Travel2PageModule */

  /***/
  function srcAppTravel2Travel2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Travel2PageModule", function () {
      return Travel2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _travel2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./travel2-routing.module */
    "./src/app/travel2/travel2-routing.module.ts");
    /* harmony import */


    var _travel2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./travel2.page */
    "./src/app/travel2/travel2.page.ts");

    var Travel2PageModule = function Travel2PageModule() {
      _classCallCheck(this, Travel2PageModule);
    };

    Travel2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _travel2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Travel2PageRoutingModule"]],
      declarations: [_travel2_page__WEBPACK_IMPORTED_MODULE_6__["Travel2Page"]]
    })], Travel2PageModule);
    /***/
  },

  /***/
  "./src/app/travel2/travel2.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/travel2/travel2.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTravel2Travel2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbDIvdHJhdmVsMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/travel2/travel2.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/travel2/travel2.page.ts ***!
    \*****************************************/

  /*! exports provided: Travel2Page */

  /***/
  function srcAppTravel2Travel2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Travel2Page", function () {
      return Travel2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Travel2Page = /*#__PURE__*/function () {
      function Travel2Page() {
        _classCallCheck(this, Travel2Page);
      }

      _createClass(Travel2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Travel2Page;
    }();

    Travel2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-travel2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./travel2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/travel2/travel2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./travel2.page.scss */
      "./src/app/travel2/travel2.page.scss"))["default"]]
    })], Travel2Page);
    /***/
  }
}]);
//# sourceMappingURL=travel2-travel2-module-es5.js.map