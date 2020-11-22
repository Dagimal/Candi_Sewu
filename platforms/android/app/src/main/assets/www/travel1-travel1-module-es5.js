function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel1-travel1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/travel1/travel1.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel1/travel1.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTravel1Travel1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>travel1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/travel1/travel1-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/travel1/travel1-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Travel1PageRoutingModule */

  /***/
  function srcAppTravel1Travel1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Travel1PageRoutingModule", function () {
      return Travel1PageRoutingModule;
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


    var _travel1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./travel1.page */
    "./src/app/travel1/travel1.page.ts");

    var routes = [{
      path: '',
      component: _travel1_page__WEBPACK_IMPORTED_MODULE_3__["Travel1Page"]
    }];

    var Travel1PageRoutingModule = function Travel1PageRoutingModule() {
      _classCallCheck(this, Travel1PageRoutingModule);
    };

    Travel1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Travel1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/travel1/travel1.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/travel1/travel1.module.ts ***!
    \*******************************************/

  /*! exports provided: Travel1PageModule */

  /***/
  function srcAppTravel1Travel1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Travel1PageModule", function () {
      return Travel1PageModule;
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


    var _travel1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./travel1-routing.module */
    "./src/app/travel1/travel1-routing.module.ts");
    /* harmony import */


    var _travel1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./travel1.page */
    "./src/app/travel1/travel1.page.ts");

    var Travel1PageModule = function Travel1PageModule() {
      _classCallCheck(this, Travel1PageModule);
    };

    Travel1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _travel1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Travel1PageRoutingModule"]],
      declarations: [_travel1_page__WEBPACK_IMPORTED_MODULE_6__["Travel1Page"]]
    })], Travel1PageModule);
    /***/
  },

  /***/
  "./src/app/travel1/travel1.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/travel1/travel1.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTravel1Travel1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbDEvdHJhdmVsMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/travel1/travel1.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/travel1/travel1.page.ts ***!
    \*****************************************/

  /*! exports provided: Travel1Page */

  /***/
  function srcAppTravel1Travel1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Travel1Page", function () {
      return Travel1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Travel1Page = /*#__PURE__*/function () {
      function Travel1Page() {
        _classCallCheck(this, Travel1Page);
      }

      _createClass(Travel1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Travel1Page;
    }();

    Travel1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-travel1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./travel1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/travel1/travel1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./travel1.page.scss */
      "./src/app/travel1/travel1.page.scss"))["default"]]
    })], Travel1Page);
    /***/
  }
}]);
//# sourceMappingURL=travel1-travel1-module-es5.js.map