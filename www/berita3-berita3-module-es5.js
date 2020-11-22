function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["berita3-berita3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/berita3/berita3.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/berita3/berita3.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBerita3Berita3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\">\n\n\t<ion-item lines=\"none\">\n\n\t\t<ion-avatar slot=\"start\">\n\t\t\t<img src=\"https://1.bp.blogspot.com/-DBedRBSay24/X7lTNtv2CsI/AAAAAAAABZw/8NQCv3HlUngzXUg8xZ0prXwzZXw41fOrACLcBGAsYHQ/w945-h600-p-k-no-nu/userImage.png\">\n    </ion-avatar>\n\t\t\t<ion-label>\n\t\t\t\t<p>Halo,</p>\n\t\t\t\t<h3>Ayo membaca berita!</h3>\n\t\t\t</ion-label>\n\n\t</ion-item>\n\n</ion-header>\n\n<ion-content>\n\n  <div class=\"slides ion-margin-bottom\">\n      <ion-slide>\n        \n      </ion-slide>\n  </div>\n\n  <div class=\"container\">\n\n    <h2>Ratu Denmark dan Pangeran Hendrik Sempatkan Berfoto di Candi Sewu</h2>\n    <p><i>Sumber : kompas.com</i></p>\n\n    <ion-item>\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col>\n            <ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t<h4>\n                <img src=\"https://asset.kompas.com/crops/5nmtOtEC916EBGLVpH1094mbuB4=/0x0:0x0/750x500/data/photo/2015/10/24/1930012ratudenmarkPrambananp.jpg\" alt=\"\">\n                YOGYAKARTA, KOMPAS.com - Ratu Denmark Margrethe II takjub dengan kemegahan dan keindahan bangunan Candi Prambanan. Dia bersama suaminya, Pangeran Hendrik, menyempatkan diri berfoto bersama, dengan latar belakang Candi Sewu. Ratu Denmark Margrethe II dan Pangeran Hendrik juga berkeliling Candi Prambanan dengan menggunakan mobil golf. Dia mengaku takjub dengan kemegahan dan keindahan candi Prambanan.\n                <br><br>\n                \"Luar biasa menakjubkan. Apa lagi saat berbelok dan melihat langsung, sangat menarik,\" kata Ratu Denmark Margrethe II saat jumpa pers di kompleks Candi Prambanan, Sabtu (24/10/2015). Selain Margrethe II dan Pangeran Hendrik, beberapa jurnalis luar negeri juga berfoto dengan latar belakang Candi Sewu. Rencananya, Minggu (24/10/2015) esok Ratu Denmark Margrethe II dan Pangeran Hendrik akan mengunjungi Candi Borobudur.\n          \n\n              </h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/berita3/berita3-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/berita3/berita3-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Berita3PageRoutingModule */

  /***/
  function srcAppBerita3Berita3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Berita3PageRoutingModule", function () {
      return Berita3PageRoutingModule;
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


    var _berita3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./berita3.page */
    "./src/app/berita3/berita3.page.ts");

    var routes = [{
      path: '',
      component: _berita3_page__WEBPACK_IMPORTED_MODULE_3__["Berita3Page"]
    }];

    var Berita3PageRoutingModule = function Berita3PageRoutingModule() {
      _classCallCheck(this, Berita3PageRoutingModule);
    };

    Berita3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Berita3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/berita3/berita3.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/berita3/berita3.module.ts ***!
    \*******************************************/

  /*! exports provided: Berita3PageModule */

  /***/
  function srcAppBerita3Berita3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Berita3PageModule", function () {
      return Berita3PageModule;
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


    var _berita3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./berita3-routing.module */
    "./src/app/berita3/berita3-routing.module.ts");
    /* harmony import */


    var _berita3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./berita3.page */
    "./src/app/berita3/berita3.page.ts");

    var Berita3PageModule = function Berita3PageModule() {
      _classCallCheck(this, Berita3PageModule);
    };

    Berita3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _berita3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Berita3PageRoutingModule"]],
      declarations: [_berita3_page__WEBPACK_IMPORTED_MODULE_6__["Berita3Page"]]
    })], Berita3PageModule);
    /***/
  },

  /***/
  "./src/app/berita3/berita3.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/berita3/berita3.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBerita3Berita3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: #316dd0;\n  color: #316dd0;\n  padding-bottom: 200px;\n  border-radius: 0 0 20% 20%;\n}\n\nion-header ion-toolbar, ion-header ion-item {\n  --background: #f1f5f8;\n  background: #f1f5f8;\n  padding: 0 10px;\n}\n\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\n\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\n\nion-content {\n  --background: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\n\nion-content .slides {\n  background: #f1f5f8;\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\n\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  padding: 14px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\nion-content ion-card .main {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content ion-card .main img {\n  width: 30px;\n}\n\nion-content ion-card .files {\n  padding-top: 14px;\n}\n\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\n\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\n\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n  text-align: left;\n}\n\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-content .container ion-item ion-label h6 {\n  color: rgba(255, 255, 255, 0.66);\n}\n\nion-content .container h2 {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhZ2ltYWwvRG9jdW1lbnRzL3Rlc3RpbmcvVUktQ2hhbGxlbmdlcy9pb25pYy1yZXN0cmFudC1hcHAvc3JjL2FwcC9iZXJpdGEzL2Jlcml0YTMucGFnZS5zY3NzIiwic3JjL2FwcC9iZXJpdGEzL2Jlcml0YTMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRElJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNETjs7QURLTTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUNIUjs7QURRTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFNNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUFI7O0FEVU07RUFDRSxvQkFBQTtBQ1JSOztBRGNFO0VBQ0UsMkdBQUE7QUNYSjs7QURhSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ1hOOztBRGNJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNaTjs7QURhTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNiUjs7QURlUTtFQUNFLFdBQUE7QUNiVjs7QURvQk07RUFDSSxpQkFBQTtBQ2xCVjs7QUR1Qkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNyQk47O0FEdUJNO0VBQ0Usa0NBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDckJSOztBRHVCUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ3JCVjs7QUR3QlU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUN0Qlo7O0FEeUJVO0VBQ0UsZ0NBQUE7QUN2Qlo7O0FENkJNO0VBQ0UsbUJBQUE7QUMzQlIiLCJmaWxlIjoic3JjL2FwcC9iZXJpdGEzL2Jlcml0YTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzMxNmRkMDtcbiAgICBjb2xvcjogIzMxNmRkMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwJSAyMCU7XG4gIH1cbiAgXG4gIGlvbi1oZWFkZXIge1xuICBcbiAgICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmNWY4O1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmODtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gIFxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC5ib3JkZXJlZCB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2QxZDFkMSwgLTVweCAtNXB4IDEwcHggI0ZGRkZGRjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlvbi1pdGVtIHtcbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICBcbiAgICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNDAlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcbiAgXG4gICAgLnNsaWRlcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xuICAgICAgcGFkZGluZzogNHB4IDEwcHggMjBweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcbiAgICB9XG4gIFxuICAgIGlvbi1jYXJkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG4gICAgICAubWFpbiB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJveC1zaGFkb3c6ICA3cHggN3B4IDIwcHggI2RiZGZlMiwgXG4gICAgICAgICAgICAgICAtN3B4IC03cHggMjBweCAjZmZmZmZmO1xuICAgICAgICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gIFxuICAgICAgICBcbiAgXG4gICAgICB9XG4gIFxuICAgICAgLmZpbGVzIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gIFxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDE0cHggMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgXG4gIFxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjY2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICB9XG4gIFxuICAgICAgaDIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgfVxuICBcbiAgICB9XG4gIFxuICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzMTZkZDA7XG4gIGNvbG9yOiAjMzE2ZGQwO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMCUgMjAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyLCBpb24taGVhZGVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmNWY4O1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5ib3JkZXJlZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2QxZDFkMSwgLTVweCAtNXB4IDEwcHggI0ZGRkZGRjtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gaDMge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIHAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcbn1cbmlvbi1jb250ZW50IC5zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xuICBwYWRkaW5nOiA0cHggMTBweCAyMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAubWFpbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDdweCA3cHggMjBweCAjZGJkZmUyLCAtN3B4IC03cHggMjBweCAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5tYWluIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmZpbGVzIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTRweCAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwge1xuICBwYWRkaW5nOiA2cHggMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwgaDYge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KTtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIgaDIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/berita3/berita3.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/berita3/berita3.page.ts ***!
    \*****************************************/

  /*! exports provided: Berita3Page */

  /***/
  function srcAppBerita3Berita3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Berita3Page", function () {
      return Berita3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Berita3Page = /*#__PURE__*/function () {
      function Berita3Page() {
        _classCallCheck(this, Berita3Page);
      }

      _createClass(Berita3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Berita3Page;
    }();

    Berita3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-berita3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./berita3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/berita3/berita3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./berita3.page.scss */
      "./src/app/berita3/berita3.page.scss"))["default"]]
    })], Berita3Page);
    /***/
  }
}]);
//# sourceMappingURL=berita3-berita3-module-es5.js.map