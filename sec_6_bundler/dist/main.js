/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ \"./src/message.js\");\n/* require() -> CommonJS | The simplified version of dist/main.js\r\n\r\n  var webpack_modules = {\r\n    './src/message.js': module => {\r\n      module.exports = 'control is an illusion';\r\n    }\r\n  };\r\n\r\n  function webpack_require(moduleId) {\r\n    var moduleFn = webpack_modules[moduleId];\r\n\r\n    var module = { exports: {} };\r\n\r\n    moduleFn(module);\r\n\r\n    return module.exports;\r\n  }\r\n\r\n  const message = webpack_require('./src/message.js');\r\n  console.log(message);\r\n*/\r\n// const message = require('./message');\r\n\r\n/* import/export -> ES2015 Modules | The simplified version of dist/main.js\r\n\r\n  var webpack_modules = {\r\n    './src/index.js': (\r\n      unused_webpack_module,\r\n      webpack_exports,\r\n      webpack_require\r\n    ) => {\r\n      var importedModule = webpack_require('./src/message.js');\r\n      console.log(importedModule.default);\r\n    },\r\n    './src/message.js': (\r\n      unused_webpack_module,\r\n      webpack_exports,\r\n      webpack_require\r\n    ) => {\r\n      webpack_require.d(\r\n        webpack_exports,\r\n        {default: () => WEBPACK_DEFAULT_EXPORT}\r\n      );\r\n\r\n      const WEBPACK_DEFAULT_EXPORT = 'Our democracy has been hacked';\r\n    }\r\n  };\r\n\r\n  // the module cache\r\n  var webpack_module_cache = {};\r\n\r\n  // the require function\r\n  function webpack_require(moduleId) {\r\n    // check if module is in cache\r\n    if(webpack_module_cache[moduleId]) {\r\n      return webpack_module_cache[moduleId].exports;\r\n    }\r\n\r\n    // create a new module & put it into the cache\r\n    var module = (\r\n      webpack_module_cache[moduleId] = { exports: {} }\r\n    );\r\n\r\n    // execute the module function\r\n    webpack_module_cache[moduleId](\r\n      module, \r\n      module.exports, \r\n      webpack_require\r\n    );\r\n\r\n    // return the exports of the module\r\n    return module.exports;\r\n  }\r\n\r\n  (() => {\r\n    // define getter functions for harmony exports\r\n    webpack_require.d = (exports, definition) => {\r\n      for(var key in definition) {\r\n        if(\r\n          webpack_require.o(definition, key) && \r\n          !webpack_require.o(exports, key)\r\n        ) {\r\n          Object.defineProperty(\r\n            exports, \r\n            key, \r\n            {enumerable: true, get: definition[key]}\r\n          );\r\n        }\r\n      }\r\n    };\r\n  })();\r\n\r\n  // webpack/runtime/hasOwnProperty shorthand\r\n  (() => {\r\n    webpack_require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);\r\n  })();\r\n\r\n  // webpack/runtime/make namespace object\r\n  (() => {\r\n    // define esModule on exports\r\n    webpack_require.r = exports => {\r\n      if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n        Object.defineProperty(\r\n          exports, \r\n          Symbol.toStringTag, \r\n          { value: 'Module' }\r\n        );\r\n      }\r\n\r\n      Object.defineProperty(\r\n        exports, \r\n        'esModule', \r\n        { value: true }\r\n      );\r\n    };\r\n  })();\r\n\r\n  // startup, load entry module, this entry module used 'exports' so it can't be inlined\r\n  webpack_require('./src/index.js');\r\n*/\r\n\r\n\r\nconsole.log(_message__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://sec_6_bundler/./src/index.js?");

/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// module system: CommonJS\r\n// module.exports = 'control is an illusion';\r\n\r\n// module system: ES2015 Modules\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('Our democracy has been hacked');\n\n//# sourceURL=webpack://sec_6_bundler/./src/message.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;