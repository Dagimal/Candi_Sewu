function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"end\">\n      <img src=\"https://1.bp.blogspot.com/-DBedRBSay24/X7lTNtv2CsI/AAAAAAAABZw/8NQCv3HlUngzXUg8xZ0prXwzZXw41fOrACLcBGAsYHQ/w945-h600-p-k-no-nu/userImage.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Selamat Datang Di Aplikasi</h2>\n      <h3>Candi Sewu</h3>\n      <p>Aplikasi Ensiklopedia Candi Sewu</p>\n    </ion-label>\n  </ion-item>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  \n  <div class=\"ion-padding wrapper\">\n  <ion-button color=\"tertiary\" size=\"small\" (click)=\"presentAlert()\">TENTANG</ion-button>\n    \n\n\n\n  <div class=\"ion-padding-horizontal wrapper\">\n  \n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-baseline\">\n        <ion-col size=\"6\">\n          <h4 class=\"title\">\n            Explore Menu\n          </h4>\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n  \n    </div>\n  \n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-slides [options]=\"categories\">\n  \n            <ion-slide>\n              <ion-card class=\"category\" color=\"danger\" routerLink=\"/sejarah\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/clock.svg\"></ion-icon>\n                  <ion-card-title style=\"font-size: large; font-weight: bold;\">Sejarah</ion-card-title>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n\n            <ion-slide>\n              <ion-card class=\"category\" color=\"primary\" routerLink=\"/legenda\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/legenda.svg\"></ion-icon>\n                  <ion-card-title style=\"font-size: large; font-weight: bold;\">Legenda</ion-card-title>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n\n            <ion-slide>\n              <ion-card class=\"category\" color=\"warning\" routerLink=\"/fasilitas\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/fasilitas.svg\"></ion-icon>\n                  <ion-card-title style=\"font-size: large; font-weight: bold;\">Fasilitas</ion-card-title>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n\n            <ion-slide>\n              <ion-card class=\"category\" color=\"success\" routerLink=\"/bangunan\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/bangunan.svg\"></ion-icon>\n                  <ion-card-title style=\"font-size: large; font-weight: bold;\">Bangunan</ion-card-title>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n\n            <ion-slide>\n              <ion-card class=\"category\" color=\"tertiary\" routerLink=\"/galeri\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/gallery.svg\"></ion-icon>\n                  <ion-card-title style=\"font-size: large; font-weight: bold;\">Galeri</ion-card-title>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n\n            <ion-slide>\n              <ion-card class=\"category\" color=\"danger\" routerLink=\"/peta\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/map.svg\"></ion-icon>\n                  <ion-card-title style=\"font-size: large; font-weight: bold;\">Peta</ion-card-title>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n  \n          </ion-slides>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-baseline\">\n        <ion-col size=\"6\">\n          <h4 class=\"title\">\n            Berita Candi Sewu\n          </h4>\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n  \n    </div>\n  \n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-slides [options]=\"options\">\n  \n            <ion-slide>\n              <ion-card class=\"card\" routerLink=\"/berita1\">\n                <ion-card-content class=\"ion-text-left\">\n  \n                  <div class=\"img-wrapper\">\n                    <ion-img src=\"https://akcdn.detik.net.id/community/media/visual/2020/03/06/bf7c5598-f103-4d26-bcb7-433cb34fd8c6_169.jpeg?w=700&q=90\"></ion-img>\n                  </div>\n                  \n                  <ion-card-title class=\"title\">Puluhan Batuan Candi di Perkampungan Klaten Dievakuasi ke Candi Sewu </ion-card-title>\n                  <ion-card-subtitle>\n                    Puluhan blok komponen batu candi yang terserak di perkampungan penduduk ...</ion-card-subtitle>\n                  \n                </ion-card-content>\n              </ion-card>\n            </ion-slide>\n  \n            <ion-slide>\n              <ion-card class=\"card\" routerLink=\"/berita2\">\n                <ion-card-content class=\"ion-text-left\">\n  \n                  <div class=\"img-wrapper\">\n                    <ion-img src=\"https://akcdn.detik.net.id/customthumb/2018/11/21/1026/img_20181121094636_5bf4c70c6cd4b.JPG?w=600&q=90\"></ion-img>\n                  </div>\n                  \n                  <ion-card-title class=\"title\">Candi Terbesar Kedua Indonesia Setelah Borobudur, Sewu</ion-card-title>\n                  <ion-card-subtitle> Candi Sewu adalah salah satu candi Budha yang ada di dalam kompleks Taman Wisata Candi Prambanan ...</ion-card-subtitle>\n                  \n                </ion-card-content>\n              </ion-card>\n            </ion-slide>\n  \n            <ion-slide>\n              <ion-card class=\"card\" routerLink=\"/berita3\">\n                <ion-card-content class=\"ion-text-left\">\n  \n                  <div class=\"img-wrapper\">\n                    <ion-img src=\"https://asset.kompas.com/crops/5nmtOtEC916EBGLVpH1094mbuB4=/0x0:0x0/750x500/data/photo/2015/10/24/1930012ratudenmarkPrambananp.jpg\"></ion-img>\n                  </div>\n                  \n                  <ion-card-title class=\"title\">Ratu Denmark dan Pangeran Hendrik Sempatkan Berfoto di Candi Sewu ...</ion-card-title>\n                  <ion-card-subtitle>Ratu Denmark Margrethe II takjub dengan kemegahan dan keindahan ...</ion-card-subtitle>\n                  \n                </ion-card-content>\n              </ion-card>\n            </ion-slide>\n  \n          </ion-slides>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    \n      <div class=\"ion-padding\">\n        <ion-row>\n          <ion-col size=\"6\">\n            \n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-end\">\n           \n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-footer>\n        <ion-col>\n          <div></div>\n        </ion-col>\n      </ion-footer>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <div>\n        <center>\n          <img src=\"assets/jateng.svg\" width=\"40px\">\n        </center>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div>\n        <center>\n          <img src=\"assets/klaten.png\" width=\"40px\" style=\"padding: 7px;\">\n        </center>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 16px;\n}\n.card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\nion-col > div {\n  padding: 5px;\n}\nion-footer {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhZ2ltYWwvRG9jdW1lbnRzL3Rlc3RpbmcvVUktQ2hhbGxlbmdlcy9pb25pYy1yZXN0cmFudC1hcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElBO0VBQ0UscUJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0FDREY7QURJQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7QURLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRkY7QURPRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDTEo7QURRRTtFQUNFLGdCQUFBO0FDTko7QURZRTtFQUNFLGVBQUE7QUNUSjtBRFlFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDVko7QURjQTtFQUNFLGlCQUFBO0FDWEY7QURjQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7QUNYRjtBRGNBO0VBQ0UsdUJBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjUwLCAuOTYpO1xuXG4gIGgyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgfVxuXG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOGZhO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5tb3JlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZCNEU0RTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogODAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5cbi5jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAuaW1nLXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogI2YyOTk0YTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cblxuICBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctdG9wOjZweDtcbiAgfVxuXG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tY29sID4gZGl2IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1MCwgLjk2KTtcbn1cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm1vcmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkI0RTRFO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IC5pbWctd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge1xuICBjb2xvcjogI2YyOTk0YTtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG59XG5pb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNvbCA+IGRpdiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(alertCtrl) {
        _classCallCheck(this, HomePage);

        this.alertCtrl = alertCtrl;
        this.options = {
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: -60
        };
        this.categories = {
          slidesPerView: 2.5
        };
      }

      _createClass(HomePage, [{
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Tentang',
                      subHeader: 'Aplikasi Candi Sewu',
                      message: 'Aplikasi Ini membutuhkan akses internet untuk dapat digunakan secara optimal. <br><br><b>Developer :</b><br> Daffa Gifari Akmal, <br>Thoriq Daffa Fakhrurozi<br><br><b>Terimakasih : </b><br>Allah SWT <br><br> https://github.com/habibalmawali/UI-Challenges/tree/master/ionic-restrant-app <br><br> Icon by https://www.flaticon.com/',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map