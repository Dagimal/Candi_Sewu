function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peta-peta-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/peta/peta.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/peta/peta.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPetaPetaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>peta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/peta/peta-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/peta/peta-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: PetaPageRoutingModule */

  /***/
  function srcAppPetaPetaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetaPageRoutingModule", function () {
      return PetaPageRoutingModule;
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


    var _peta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./peta.page */
    "./src/app/peta/peta.page.ts");

    var routes = [{
      path: '',
      component: _peta_page__WEBPACK_IMPORTED_MODULE_3__["PetaPage"]
    }];

    var PetaPageRoutingModule = function PetaPageRoutingModule() {
      _classCallCheck(this, PetaPageRoutingModule);
    };

    PetaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PetaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/peta/peta.module.ts":
  /*!*************************************!*\
    !*** ./src/app/peta/peta.module.ts ***!
    \*************************************/

  /*! exports provided: PetaPageModule */

  /***/
  function srcAppPetaPetaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetaPageModule", function () {
      return PetaPageModule;
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


    var _peta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./peta-routing.module */
    "./src/app/peta/peta-routing.module.ts");
    /* harmony import */


    var _peta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./peta.page */
    "./src/app/peta/peta.page.ts");

    var PetaPageModule = function PetaPageModule() {
      _classCallCheck(this, PetaPageModule);
    };

    PetaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _peta_routing_module__WEBPACK_IMPORTED_MODULE_5__["PetaPageRoutingModule"]],
      declarations: [_peta_page__WEBPACK_IMPORTED_MODULE_6__["PetaPage"]]
    })], PetaPageModule);
    /***/
  },

  /***/
  "./src/app/peta/peta.page.scss":
  /*!*************************************!*\
    !*** ./src/app/peta/peta.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppPetaPetaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldGEvcGV0YS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/peta/peta.page.ts":
  /*!***********************************!*\
    !*** ./src/app/peta/peta.page.ts ***!
    \***********************************/

  /*! exports provided: PetaPage */

  /***/
  function srcAppPetaPetaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetaPage", function () {
      return PetaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PetaPage = /*#__PURE__*/function () {
      function PetaPage() {
        _classCallCheck(this, PetaPage);
      }

      _createClass(PetaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PetaPage;
    }();

    PetaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-peta',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./peta.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/peta/peta.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./peta.page.scss */
      "./src/app/peta/peta.page.scss"))["default"]]
    })], PetaPage);
    /***/
  }
}]);
//# sourceMappingURL=peta-peta-module-es5.js.map