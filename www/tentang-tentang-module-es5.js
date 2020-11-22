function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tentang-tentang-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tentang/tentang.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tentang/tentang.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTentangTentangPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tentang</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tentang/tentang-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/tentang/tentang-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TentangPageRoutingModule */

  /***/
  function srcAppTentangTentangRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TentangPageRoutingModule", function () {
      return TentangPageRoutingModule;
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


    var _tentang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tentang.page */
    "./src/app/tentang/tentang.page.ts");

    var routes = [{
      path: '',
      component: _tentang_page__WEBPACK_IMPORTED_MODULE_3__["TentangPage"]
    }];

    var TentangPageRoutingModule = function TentangPageRoutingModule() {
      _classCallCheck(this, TentangPageRoutingModule);
    };

    TentangPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TentangPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tentang/tentang.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/tentang/tentang.module.ts ***!
    \*******************************************/

  /*! exports provided: TentangPageModule */

  /***/
  function srcAppTentangTentangModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TentangPageModule", function () {
      return TentangPageModule;
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


    var _tentang_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tentang-routing.module */
    "./src/app/tentang/tentang-routing.module.ts");
    /* harmony import */


    var _tentang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tentang.page */
    "./src/app/tentang/tentang.page.ts");

    var TentangPageModule = function TentangPageModule() {
      _classCallCheck(this, TentangPageModule);
    };

    TentangPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tentang_routing_module__WEBPACK_IMPORTED_MODULE_5__["TentangPageRoutingModule"]],
      declarations: [_tentang_page__WEBPACK_IMPORTED_MODULE_6__["TentangPage"]]
    })], TentangPageModule);
    /***/
  },

  /***/
  "./src/app/tentang/tentang.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/tentang/tentang.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTentangTentangPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhbmcvdGVudGFuZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tentang/tentang.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/tentang/tentang.page.ts ***!
    \*****************************************/

  /*! exports provided: TentangPage */

  /***/
  function srcAppTentangTentangPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TentangPage", function () {
      return TentangPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TentangPage = /*#__PURE__*/function () {
      function TentangPage() {
        _classCallCheck(this, TentangPage);
      }

      _createClass(TentangPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TentangPage;
    }();

    TentangPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tentang',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tentang.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tentang/tentang.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tentang.page.scss */
      "./src/app/tentang/tentang.page.scss"))["default"]]
    })], TentangPage);
    /***/
  }
}]);
//# sourceMappingURL=tentang-tentang-module-es5.js.map