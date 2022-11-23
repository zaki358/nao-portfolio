/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "switchByWidth": () => (/* binding */ switchByWidth)
/* harmony export */ });
const menu = (open,close,list) => {
  open.addEventListener('click', function(){
    list.classList.add("js-open");
    open.classList.add("js-open");
    console.log(list);
  });
  close.addEventListener('click', function(){
    list.classList.remove("js-open");
    open.classList.remove("js-open");
  });
}

const switchByWidth = (list,btn) => {
      list.classList.remove("js-open");
      btn.classList.remove("js-open");
  }

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageScroll": () => (/* binding */ pageScroll)
/* harmony export */ });
const pageScroll = btn => {
  btn.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll.js */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger.js */ "./src/js/modules/hamburger.js");




const pageTopBtn = document.querySelector(".p-footer__btn");
const openListBtn = document.querySelector(".p-header__open--btn");
const closeListBtn = document.querySelector(".p-header__close--btn");
const menuList = document.querySelector(".p-header__nav");
const mediaQueryList = window.matchMedia('(min-width: 1050px)');

(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_1__.pageScroll)(pageTopBtn);

(0,_modules_hamburger_js__WEBPACK_IMPORTED_MODULE_2__.menu)(openListBtn,closeListBtn,menuList);

const breakPointFunction = (breakPoint) => {
  if(breakPoint.matches) {
    console.log("変わったよ！");
    if(menuList.classList.contains("js-open") == true) {
      (0,_modules_hamburger_js__WEBPACK_IMPORTED_MODULE_2__.switchByWidth)(menuList,openListBtn);
    }
  }
};
mediaQueryList.addEventListener("change",breakPointFunction);
//初期化
breakPointFunction(mediaQueryList);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map