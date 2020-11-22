function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["galeri-galeri-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/galeri/galeri.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/galeri/galeri.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGaleriGaleriPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>galeri</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/galeri/galeri-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/galeri/galeri-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: GaleriPageRoutingModule */

  /***/
  function srcAppGaleriGaleriRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GaleriPageRoutingModule", function () {
      return GaleriPageRoutingModule;
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


    var _galeri_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./galeri.page */
    "./src/app/galeri/galeri.page.ts");

    var routes = [{
      path: '',
      component: _galeri_page__WEBPACK_IMPORTED_MODULE_3__["GaleriPage"]
    }];

    var GaleriPageRoutingModule = function GaleriPageRoutingModule() {
      _classCallCheck(this, GaleriPageRoutingModule);
    };

    GaleriPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GaleriPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/galeri/galeri.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/galeri/galeri.module.ts ***!
    \*****************************************/

  /*! exports provided: GaleriPageModule */

  /***/
  function srcAppGaleriGaleriModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GaleriPageModule", function () {
      return GaleriPageModule;
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


    var _galeri_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./galeri-routing.module */
    "./src/app/galeri/galeri-routing.module.ts");
    /* harmony import */


    var _galeri_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./galeri.page */
    "./src/app/galeri/galeri.page.ts");

    var GaleriPageModule = function GaleriPageModule() {
      _classCallCheck(this, GaleriPageModule);
    };

    GaleriPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _galeri_routing_module__WEBPACK_IMPORTED_MODULE_5__["GaleriPageRoutingModule"]],
      declarations: [_galeri_page__WEBPACK_IMPORTED_MODULE_6__["GaleriPage"]]
    })], GaleriPageModule);
    /***/
  },

  /***/
  "./src/app/galeri/galeri.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/galeri/galeri.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGaleriGaleriPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGVyaS9nYWxlcmkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/galeri/galeri.page.ts":
  /*!***************************************!*\
    !*** ./src/app/galeri/galeri.page.ts ***!
    \***************************************/

  /*! exports provided: GaleriPage */

  /***/
  function srcAppGaleriGaleriPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GaleriPage", function () {
      return GaleriPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GaleriPage = /*#__PURE__*/function () {
      function GaleriPage() {
        _classCallCheck(this, GaleriPage);
      }

      _createClass(GaleriPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GaleriPage;
    }();

    GaleriPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-galeri',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galeri.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/galeri/galeri.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./galeri.page.scss */
      "./src/app/galeri/galeri.page.scss"))["default"]]
    })], GaleriPage);
    /***/
  }
}]);
//# sourceMappingURL=galeri-galeri-module-es5.js.map