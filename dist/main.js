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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("/* eslint-disable no-plusplus */\n// import './style.css';\nconst ship = (shipName, shipLength, damage, shipSunk) => {\n  const shipArray = [];\n\n  for (let i = 0; i < shipLength; i++) {\n    shipArray.push(i);\n  }\n\n  const object = {\n    name: shipName,\n    length: shipLength,\n    damaged: damage,\n    sunk: shipSunk,\n    array: shipArray\n  };\n\n  const isSunk = () => {\n    if (object.array.length === 0) {\n      object.sunk = true;\n    }\n  };\n\n  const hit = num => {\n    // add damaged part to object.damaged\n    object.damaged += num; // remove damaged part from array\n\n    const index = object.array.indexOf(num);\n    object.array.splice(index, 1);\n    isSunk();\n  };\n\n  return {\n    object,\n    hit,\n    isSunk\n  };\n};\n\nmodule.exports = {\n  ship\n};\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;