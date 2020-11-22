function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sejarah-sejarah-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sejarah/sejarah.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sejarah/sejarah.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSejarahSejarahPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\">\n\n\t<ion-item lines=\"none\">\n\n\t\t<ion-avatar slot=\"start\">\n\t\t\t<img src=\"https://1.bp.blogspot.com/-DBedRBSay24/X7lTNtv2CsI/AAAAAAAABZw/8NQCv3HlUngzXUg8xZ0prXwzZXw41fOrACLcBGAsYHQ/w945-h600-p-k-no-nu/userImage.png\">\n    </ion-avatar>\n\t\t\t<ion-label>\n\t\t\t\t<p>Halo,</p>\n\t\t\t\t<h3>Ayo belajar sejarah Candi Sewu</h3>\n\t\t\t</ion-label>\n\n\t</ion-item>\n\n</ion-header>\n\n<ion-content>\n\n  <div class=\"slides ion-margin-bottom\">\n      <ion-slide>\n        \n      </ion-slide>\n  </div>\n\n  <div class=\"container\">\n\n    <h2>Sejarah Candi Sewu</h2>\n\n    <ion-item>\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col>\n            <ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t<h4>\n                Candi Sewu diperkirakan didirikan pada abad ke-8 pada masa dinasti Syailendra, dimana pembangunan Candi Sewu hampir bersamaan dengan pembangunan Candi Borobudur. Hal ini didasarkan dalam penemuan prasasti pada tahun 1960-an dimana pada Prasasti Kelurak tercantum tahun 782 Masehi dan Prasasti Manjusringrha yang bertuliskan 792 Masehi.<br><br>\n                <img src=\"https://1.bp.blogspot.com/-pp48J-WZLZk/X7n8RCu-L0I/AAAAAAAABaM/4IQvRXSPqyUxrswC4-GWRI4zL6CCVDp2QCLcBGAsYHQ/s320/2.png\" alt=\"\"><br><br>\n                Candi Sewu dibangun pada masa kepemimpinan kerajaan mataram kuno di bawah pemerintahan Rakai Panangkaran (Raja terpopuler Dinasti Syailendra pada 746 M - 784 M).<br><br>\n                <img src=\"https://1.bp.blogspot.com/-hm_M8FwA-WQ/X7n8RR3u3DI/AAAAAAAABaQ/086h08HXZC0_MGj00vD8CcG69znHnwFkgCLcBGAsYHQ/s320/3.png\" alt=\"\"><br><br>\n                28 Oktober 2006, terjadi gempa besar yang mengguncang Yogyakarta dan sekitarnya yang merusak beberapa bangunan Candi Sewu. Bagian yang paling parah terdampak adalah bagian utama candi, dimana beberapa batu dari bangunan jatuh ke tanah dan terlihat beberapa retakan di candi. Hingga pada akhirnya dipasang kerangka besi untuk membuat candi ini tegak lagi dan menahan agar candi utama di Candi Sewu bisa tetap berdiri kokoh.\n              </h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/sejarah/sejarah-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sejarah/sejarah-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SejarahPageRoutingModule */

  /***/
  function srcAppSejarahSejarahRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SejarahPageRoutingModule", function () {
      return SejarahPageRoutingModule;
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


    var _sejarah_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sejarah.page */
    "./src/app/sejarah/sejarah.page.ts");

    var routes = [{
      path: '',
      component: _sejarah_page__WEBPACK_IMPORTED_MODULE_3__["SejarahPage"]
    }];

    var SejarahPageRoutingModule = function SejarahPageRoutingModule() {
      _classCallCheck(this, SejarahPageRoutingModule);
    };

    SejarahPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SejarahPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sejarah/sejarah.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sejarah/sejarah.module.ts ***!
    \*******************************************/

  /*! exports provided: SejarahPageModule */

  /***/
  function srcAppSejarahSejarahModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SejarahPageModule", function () {
      return SejarahPageModule;
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


    var _sejarah_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sejarah-routing.module */
    "./src/app/sejarah/sejarah-routing.module.ts");
    /* harmony import */


    var _sejarah_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sejarah.page */
    "./src/app/sejarah/sejarah.page.ts");

    var SejarahPageModule = function SejarahPageModule() {
      _classCallCheck(this, SejarahPageModule);
    };

    SejarahPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sejarah_routing_module__WEBPACK_IMPORTED_MODULE_5__["SejarahPageRoutingModule"]],
      declarations: [_sejarah_page__WEBPACK_IMPORTED_MODULE_6__["SejarahPage"]]
    })], SejarahPageModule);
    /***/
  },

  /***/
  "./src/app/sejarah/sejarah.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sejarah/sejarah.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSejarahSejarahPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: #316dd0;\n  color: #316dd0;\n  padding-bottom: 200px;\n  border-radius: 0 0 20% 20%;\n}\n\nion-header ion-toolbar, ion-header ion-item {\n  --background: #f1f5f8;\n  background: #f1f5f8;\n  padding: 0 10px;\n}\n\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\n\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\n\nion-content {\n  --background: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\n\nion-content .slides {\n  background: #f1f5f8;\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\n\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  padding: 14px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\nion-content ion-card .main {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content ion-card .main img {\n  width: 30px;\n}\n\nion-content ion-card .files {\n  padding-top: 14px;\n}\n\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\n\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\n\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n  text-align: left;\n}\n\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-content .container ion-item ion-label h6 {\n  color: rgba(255, 255, 255, 0.66);\n}\n\nion-content .container h2 {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhZ2ltYWwvRG9jdW1lbnRzL3Rlc3RpbmcvVUktQ2hhbGxlbmdlcy9pb25pYy1yZXN0cmFudC1hcHAvc3JjL2FwcC9zZWphcmFoL3NlamFyYWgucGFnZS5zY3NzIiwic3JjL2FwcC9zZWphcmFoL3NlamFyYWgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRElFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNESjs7QURLSTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUNITjs7QURRSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ05OOztBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUE47O0FEVUk7RUFDRSxvQkFBQTtBQ1JOOztBRGNBO0VBQ0UsMkdBQUE7QUNYRjs7QURhRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ1hKOztBRGNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNaSjs7QURhSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNiTjs7QURlTTtFQUNFLFdBQUE7QUNiUjs7QURvQkk7RUFDSSxpQkFBQTtBQ2xCUjs7QUR1QkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNyQko7O0FEdUJJO0VBQ0Usa0NBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDckJOOztBRHVCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ3JCUjs7QUR3QlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUN0QlY7O0FEeUJRO0VBQ0UsZ0NBQUE7QUN2QlY7O0FENkJJO0VBQ0UsbUJBQUE7QUMzQk4iLCJmaWxlIjoic3JjL2FwcC9zZWphcmFoL3NlamFyYWgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzMTZkZDA7XG4gIGNvbG9yOiAjMzE2ZGQwO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMCUgMjAlO1xufVxuXG5pb24taGVhZGVyIHtcblxuICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjVmODtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAuYm9yZGVyZWQge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2QxZDFkMSwgLTVweCAtNXB4IDEwcHggI0ZGRkZGRjtcbiAgICB9XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgaDMge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcbiAgICB9XG4gIH1cblxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xuXG4gIC5zbGlkZXMge1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjg7XG4gICAgcGFkZGluZzogNHB4IDEwcHggMjBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG4gICAgLm1haW4ge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGJveC1zaGFkb3c6ICA3cHggN3B4IDIwcHggI2RiZGZlMiwgXG4gICAgICAgICAgICAgLTdweCAtN3B4IDIwcHggI2ZmZmZmZjtcbiAgICAgICAgICAgIFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIFxuXG4gICAgfVxuXG4gICAgLmZpbGVzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgfVxuXG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAxNHB4IDA7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjYpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICB9XG5cbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzMxNmRkMDtcbiAgY29sb3I6ICMzMTZkZDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwJSAyMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmMWY1Zjg7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLmJvcmRlcmVkIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xufVxuaW9uLWhlYWRlciBpb24taXRlbSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogNDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlcyB7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjg7XG4gIHBhZGRpbmc6IDRweCAxMHB4IDIwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5tYWluIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogN3B4IDdweCAyMHB4ICNkYmRmZTIsIC03cHggLTdweCAyMHB4ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLm1haW4gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuZmlsZXMge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIge1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxNHB4IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDZweCAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwgaDQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIGlvbi1pdGVtIGlvbi1sYWJlbCBoNiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sejarah/sejarah.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sejarah/sejarah.page.ts ***!
    \*****************************************/

  /*! exports provided: SejarahPage */

  /***/
  function srcAppSejarahSejarahPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SejarahPage", function () {
      return SejarahPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SejarahPage = /*#__PURE__*/function () {
      function SejarahPage() {
        _classCallCheck(this, SejarahPage);
      }

      _createClass(SejarahPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SejarahPage;
    }();

    SejarahPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sejarah',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sejarah.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sejarah/sejarah.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sejarah.page.scss */
      "./src/app/sejarah/sejarah.page.scss"))["default"]]
    })], SejarahPage);
    /***/
  }
}]);
//# sourceMappingURL=sejarah-sejarah-module-es5.js.map