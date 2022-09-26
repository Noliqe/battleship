/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMJS.js":
/*!**********************!*\
  !*** ./src/DOMJS.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\nconst dom = () => {\n  const gridContainer = document.querySelector('.gridContainer');\n  const fleetContainer = document.createElement('div');\n  fleetContainer.classList.add('fleetContainer');\n  const h1Text = document.createElement('h1');\n  h1Text.textContent = 'Drag n\\' Drop';\n  fleetContainer.appendChild(h1Text);\n  const rotateButton = document.createElement('button');\n  rotateButton.classList.add('rotateButton');\n  rotateButton.textContent = 'Rotate';\n  fleetContainer.appendChild(rotateButton);\n  gridContainer.appendChild(fleetContainer);\n  const dragAble = document.createElement('div');\n  dragAble.classList.add('dragAbleFleets');\n  fleetContainer.appendChild(dragAble);\n  const carrierContainer = document.createElement('div');\n  dragAble.appendChild(carrierContainer);\n  carrierContainer.classList.add('ships');\n  carrierContainer.classList.add('carrier-container');\n  carrierContainer.setAttribute('id', 'carrier-container');\n  carrierContainer.setAttribute('draggable', true);\n  carrierContainer.setAttribute('data-ship', 'carrier');\n\n  for (let i = 0; i < 5; i++) {\n    const carrier = document.createElement('div');\n    carrierContainer.appendChild(carrier);\n    carrier.classList.add('carrier');\n    carrier.setAttribute('data-index', i);\n  }\n\n  const battleshipContainer = document.createElement('div');\n  dragAble.appendChild(battleshipContainer);\n  battleshipContainer.classList.add('ships');\n  battleshipContainer.classList.add('battleship-container');\n  battleshipContainer.setAttribute('id', 'battleship-container');\n  battleshipContainer.setAttribute('draggable', true);\n  battleshipContainer.setAttribute('data-ship', 'battleship');\n\n  for (let i = 0; i < 4; i++) {\n    const battleship = document.createElement('div');\n    battleshipContainer.appendChild(battleship);\n    battleship.classList.add('battleship');\n    battleship.setAttribute('data-index', i);\n  }\n\n  const submarineContainer = document.createElement('div');\n  dragAble.appendChild(submarineContainer);\n  submarineContainer.classList.add('ships');\n  submarineContainer.classList.add('submarine-container');\n  submarineContainer.setAttribute('id', 'submarine-container');\n  submarineContainer.setAttribute('draggable', true);\n  submarineContainer.setAttribute('data-ship', 'submarine');\n\n  for (let i = 0; i < 3; i++) {\n    const submarine = document.createElement('div');\n    submarineContainer.appendChild(submarine);\n    submarine.classList.add('submarine');\n    submarine.setAttribute('data-index', i);\n  }\n\n  const destroyerContainer = document.createElement('div');\n  dragAble.appendChild(destroyerContainer);\n  destroyerContainer.classList.add('ships');\n  destroyerContainer.classList.add('destroyer-container');\n  destroyerContainer.setAttribute('id', 'destroyer-container');\n  destroyerContainer.setAttribute('draggable', true);\n  destroyerContainer.setAttribute('data-ship', 'destroyer');\n\n  for (let i = 0; i < 3; i++) {\n    const destroyer = document.createElement('div');\n    destroyerContainer.appendChild(destroyer);\n    destroyer.classList.add('destroyer');\n    destroyer.setAttribute('data-index', i);\n  }\n\n  const patrolBoatContainer = document.createElement('div');\n  dragAble.appendChild(patrolBoatContainer);\n  patrolBoatContainer.classList.add('ships');\n  patrolBoatContainer.classList.add('patrolBoat-container');\n  patrolBoatContainer.setAttribute('id', 'patrolBoat-container');\n  patrolBoatContainer.setAttribute('draggable', true);\n  patrolBoatContainer.setAttribute('data-ship', 'patrol-Boat');\n\n  for (let i = 0; i < 2; i++) {\n    const patrolBoat = document.createElement('div');\n    patrolBoatContainer.appendChild(patrolBoat);\n    patrolBoat.classList.add('patrol-boat');\n    patrolBoat.setAttribute('data-index', i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://battleship/./src/DOMJS.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOMJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMJS */ \"./src/DOMJS.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable max-len */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-plusplus */\n\n\n\nconst drag = () => {\n  let horizontal = true; // make a board where user can place ships\n\n  const createBoard = () => {\n    const startGrid = document.querySelector('.startGrid');\n    let x = 0;\n    let y = 1;\n    let id = 0;\n\n    for (let i = 0; i < 109; i++) {\n      if (x < 10) {\n        x += 1;\n        id += 1;\n        const startTile = document.createElement('div');\n        startTile.classList.add('tile');\n        startGrid.appendChild(startTile);\n        startTile.setAttribute('id', `tile${id}`);\n        startTile.setAttribute('data-y', `${y}`);\n        startTile.setAttribute('data-x', `${x}`);\n        startTile.addEventListener('dragenter', dragEnter);\n        startTile.addEventListener('dragover', dragOver);\n        startTile.addEventListener('dragleave', dragLeave);\n        startTile.addEventListener('drop', drop);\n      } else {\n        x = 0;\n        y += 1;\n      }\n    }\n  }; // check if ship is in border\n\n\n  const valid = (dataY, dataX, length) => {\n    let trueOfFalse = '';\n\n    if (horizontal === true) {\n      // const tile = document.querySelector(`#${num}`);\n      if (length + Number(dataX) > 11) {\n        trueOfFalse = false;\n      } else {\n        trueOfFalse = true;\n      }\n    } else if (horizontal === false) {\n      if (length + Number(dataY) > 11) {\n        trueOfFalse = false;\n      } else {\n        trueOfFalse = true;\n      }\n    }\n\n    return trueOfFalse;\n  }; // no ship placement on another ship\n  // eslint-disable-next-line consistent-return\n\n\n  const checkId = id => {\n    const x = id.replace(/[^a-zA-Z]+/g, '');\n\n    if (x === 'tile') {\n      return true;\n    }\n  };\n\n  let shipLength = '';\n\n  function dragStart(e) {\n    shipLength = e.srcElement.children.length;\n    e.dataTransfer.setData('text/plain', e.target.id);\n    setTimeout(() => {\n      e.target.classList.add('hide');\n    }, 0);\n  }\n\n  function dragEnter(e) {\n    e.preventDefault();\n    e.target.classList.add('drag-over');\n  }\n\n  function dragOver(e) {\n    e.preventDefault();\n    e.target.classList.add('drag-over');\n  }\n\n  function dragLeave(e) {\n    e.target.classList.remove('drag-over');\n  }\n\n  function drop(e) {\n    e.target.classList.remove('drag-over');\n\n    if (valid(e.target.dataset.y, e.target.dataset.x, shipLength) === false || checkId(e.target.id) !== true) {\n      return;\n    } // get the draggable element\n\n\n    const id = e.dataTransfer.getData('text/plain');\n    const draggable = document.getElementById(id); // add it to the drop target\n\n    e.target.appendChild(draggable); // add childnodes to new parent\n\n    while (draggable.childNodes.length > 0) {\n      e.target.appendChild(draggable.childNodes[0]);\n    } // remove old parent\n\n\n    e.target.removeChild(draggable); // if horizontal put scatter childNodes to next tile\n\n    if (horizontal === true) {\n      let a = 0;\n\n      while (e.target.childNodes.length > 1) {\n        a += 1;\n        const x = e.target.id;\n        const y = Number(x.match(/\\d+/)[0]);\n        const tile = document.getElementById(`tile${y + a}`);\n        tile.appendChild(e.target.childNodes[0]);\n      }\n    } else if (horizontal === false) {\n      let a = 0;\n\n      while (e.target.childNodes.length > 1) {\n        a += 10;\n        const x = e.target.id;\n        const y = Number(x.match(/\\d+/)[0]);\n        const tile = document.getElementById(`tile${y + a}`);\n        tile.appendChild(e.target.childNodes[0]);\n      }\n    }\n\n    const x = e.target.id;\n    const y = Number(x.match(/\\d+/)[0]);\n    const tile = document.getElementById(`tile${y}`);\n    const dataY = Number(tile.dataset.y);\n    console.log(dataY);\n    const dataX = Number(tile.dataset.x);\n    console.log(dataX); // display the draggable element\n\n    draggable.classList.remove('hide');\n  }\n\n  const rotate = () => {\n    const rotateShip = document.querySelectorAll('.ships');\n\n    if (horizontal === true) {\n      for (let i = 0; i < rotateShip.length; i++) {\n        rotateShip[i].classList.add('vertical');\n      }\n\n      horizontal = false;\n    } else if (horizontal === false) {\n      for (let i = 0; i < rotateShip.length; i++) {\n        rotateShip[i].classList.remove('vertical');\n      }\n\n      horizontal = true;\n    }\n  };\n\n  const dragAbleShips = () => {\n    (0,_DOMJS__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // carrier\n\n    const carrierContainer = document.querySelector('.carrier-container');\n    carrierContainer.addEventListener('dragstart', dragStart); // battleship\n\n    const battleshipContainer = document.querySelector('.battleship-container');\n    battleshipContainer.addEventListener('dragstart', dragStart); // submarine\n\n    const submarineContainer = document.querySelector('.submarine-container');\n    submarineContainer.addEventListener('dragstart', dragStart); // destroyer\n\n    const destroyerContainer = document.querySelector('.destroyer-container');\n    destroyerContainer.addEventListener('dragstart', dragStart); // patrol boat\n\n    const patrolBoatContainer = document.querySelector('.patrolBoat-container');\n    patrolBoatContainer.addEventListener('dragstart', dragStart); // rotate button\n\n    const rotateButton = document.querySelector('.rotateButton');\n    rotateButton.addEventListener('click', rotate);\n  };\n\n  return {\n    createBoard,\n    dragAbleShips\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drag);\n\n//# sourceURL=webpack://battleship/./src/drag.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* eslint-disable no-restricted-globals */\n\n/* eslint-disable no-loop-func */\n\n/* eslint-disable no-lone-blocks */\n\n/* eslint-disable no-unused-expressions */\n\n/* eslint-disable no-plusplus */\n\n\n\n\nconst game = () => {\n  // const validColor = (num) => {\n  //   let color = 'lightblue';\n  //   if (horizontal === true) {\n  //     const tile = document.querySelector(`#tile${num}`);\n  //     if (length + Number(tile.dataset.x) > 11) {\n  //       color = 'red';\n  //     } else {\n  //       color = 'blue';\n  //     }\n  //   } else if (horizontal === false) {\n  //     const tile = document.querySelector(`#tile${num}`);\n  //     if (length + Number(tile.dataset.y) > 11) {\n  //       color = 'red';\n  //     } else {\n  //       color = 'blue';\n  //     }\n  //   }\n  //   return color;\n  // };\n  // const boundery = (num) => {\n  //   const tile = document.querySelector(`#tile${num}`);\n  //   if (horizontal === true) {\n  //     if (length + Number(tile.dataset.x) > 11) {\n  //       1;\n  //     } else {\n  //       return length;\n  //     }\n  //   } else if (horizontal === false) {\n  //     if (length + Number(tile.dataset.y) > 11) {\n  //       1;\n  //     } else {\n  //       return length;\n  //     }\n  //   }\n  // };\n  // };\n  //   const placeShipButton = document.createElement('button');\n  //   placeShipButton.classList.add('placeShipButton');\n  //   buttons.appendChild(placeShipButton);\n  //   placeShipButton.textContent = 'Place ship (carrier)';\n  return {\n    placementBoard,\n    placementShips\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* eslint-disable no-undef */\n\n/* eslint-disable consistent-return */\n// eslint-disable-next-line import/extensions, import/no-import-module-exports\n\n\nconst gameBoard = () => {\n  const gameArray = [];\n\n  const placeShips = (y, x) => {};\n\n  const receiveAttack = (name, coords) => {\n    if (coords === name) {\n      name.hit();\n    } else {\n      gameArray[coords].push('miss');\n    }\n  };\n\n  const allSunk = () => {\n    const a = placeShips.carrier.object.sunk;\n    const b = placeShips.battleship.object.sunk;\n    const c = placeShips.destroyer.object.sunk;\n    const d = placeShips.submarine.object.sunk;\n    const e = placeShips.patrolBoat.object.sunk;\n    let x = false;\n\n    if (a === true && b === true && c === true && d === true && e === true) {\n      // eslint-disable-next-line no-unused-vars\n      x = true;\n    }\n  };\n\n  return {\n    gameArray,\n    placeShips,\n    receiveAttack,\n    allSunk\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n/* eslint-disable import/no-import-module-exports */\n\n\n\n\n\n\nconst test = (0,_drag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\ntest.createBoard();\ntest.dragAbleShips();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\nconst player = () => {\n  const attack = (y, x, enemyboard) => {\n    enemyboard.receiveAttack(y, x);\n  };\n\n  const attackArray = [];\n\n  const computerAttack = enemyboard => {\n    let y = 0;\n    let x = 1; // loop 109 times, 9 times else\n\n    for (let i = 0; i < 109; i++) {\n      if (y < 10) {\n        y += 1;\n        attackArray.push(`${y}, ${x}`);\n      } else {\n        y = 1;\n        x += 1;\n      }\n    }\n\n    const z = [y, x];\n    attackArray.push(z); // enemyboard.receiveAttack(y, x);\n  };\n\n  return {\n    attack,\n    attackArray,\n    computerAttack\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ship = (shipName, shipLength, shipCoords) => {\n  const object = {\n    name: shipName,\n    length: shipLength,\n    coords: shipCoords,\n    sunk: false,\n    damage: []\n  };\n\n  const isSunk = () => {\n    if (object.length === object.damage.length) {\n      object.sunk = true;\n    }\n  };\n\n  const hit = num => {\n    object.damage.push(num);\n    isSunk();\n  };\n\n  return {\n    object,\n    isSunk,\n    hit\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nbody {\\n    width: 100vw;\\n    height: 100vh;\\n    padding: 0;\\n    margin: 0;\\n    background-color: lightblue;\\n}\\n\\n.header {\\n    width: 100vw;\\n    height: 100px;\\n    background-color: lightpink;\\n}\\n\\n.gridContainer {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.buttons {\\n    width: 100vw;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.buttons > * {\\n    height: 25px;\\n    width: 50px;\\n}\\n\\n\\n.startGrid {\\n    width: 500px;\\n    display: grid;\\n    grid-template-columns: repeat(10, 50px);\\n    grid-template-rows: repeat(10, 50px);\\n    border: 2px solid black;\\n}\\n\\n.startGrid > * {\\n    border: 1px solid gray;\\n}\\n\\n.shipGrid {\\n    width: 250px;\\n    border: 2px solid black;\\n    display: grid;\\n    grid-template-columns: repeat(5, 50px);\\n    grid-template-rows: repeat(5, 50px);\\n}\\n\\n.shipGrid > * {\\n    border: 1px solid lightgreen;\\n}\\n\\n.hide {\\n    display: none;\\n}\\n\\n.drag-over {\\n    border: dashed 3px black;\\n}\\n\\n.fleetContainer {\\n    width: 500px;\\n    border: 2px solid red;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.dragAbleFleets {\\n    width: 300px;\\n    height: 400px;\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    align-items: space-around;\\n    gap: 5px;\\n}\\n\\n.ships {\\n    display: flex;\\n    width: min-content;\\n    height: min-content;\\n    cursor: grab;\\n    transition: 0.5s ease;\\n}\\n\\n.ships:hover {\\n    transform: scale(1.1);\\n}\\n\\n.vertical {\\n    flex-direction: column;\\n}\\n\\n.carrier, .battleship, .submarine, .destroyer, .patrol-boat {\\n    height: 48px;\\n    width: 48px;\\n}\\n\\n.carrier {\\n    border: 1px solid rgb(74, 74, 250);\\n    background-color: blue;\\n}\\n\\n.battleship {\\n    border: 1px solid rgb(253, 74, 74);\\n    background-color: red;\\n}\\n\\n\\n.submarine {\\n    border: 1px solid rgb(1, 167, 1);\\n    background-color: green;\\n}\\n\\n\\n.destroyer {\\n    border: 1px solid rgb(255, 255, 225);\\n    background-color: yellow;\\n}\\n\\n.patrol-boat {\\n    border: 1px solid rgb(252, 188, 74);\\n    background-color: orange;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;