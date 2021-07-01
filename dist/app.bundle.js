/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("alert(__webpack_require__(/*! ./greeting */ \"./greeting.js\"));  \n//greeting 모듈을 로딩해 브라우저에서 경고 메시지가 나타나게 구현하는 app.js \n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./greeting.js":
/*!*********************!*\
  !*** ./greeting.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var greeting = __webpack_require__(/*! ./hello */ \"./hello.js\") + __webpack_require__(/*! ./world */ \"./world.js\");\n\nmodule.exports = greeting;  \n//두 모듈을 합쳐 'HelloWorld'를 만드는 모듈인 greeting.js\n\n//# sourceURL=webpack:///./greeting.js?");

/***/ }),

/***/ "./hello.js":
/*!******************!*\
  !*** ./hello.js ***!
  \******************/
/***/ ((module) => {

eval("module.exports = 'Hello';  \n\n//# sourceURL=webpack:///./hello.js?");

/***/ }),

/***/ "./world.js":
/*!******************!*\
  !*** ./world.js ***!
  \******************/
/***/ ((module) => {

eval("module.exports = 'World';  \n\n//# sourceURL=webpack:///./world.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;