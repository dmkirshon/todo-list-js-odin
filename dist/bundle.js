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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* General Style */\\nhtml {\\n    box-sizing: border-box;\\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\\n}\\n\\n*, \\n*:before,\\n*:after {\\n    box-sizing: inherit;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n.content {\\n    width: 100vw;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n/* Header Component Style */\\n\\n.header-project-selector {\\n\\n}\\n\\n.header-project-add-button {\\n    \\n}\\n\\n.header-project-name {\\n\\n}\\n\\n.header-settings-button {\\n\\n}\\n\\n/* Header Organization Style */\\n\\n.header {\\n    display: flex;\\n    justify-content: space-between;\\n    background-color: teal;\\n    flex: 0;\\n}\\n\\n.header-project-view-div {\\n    display: flex;\\n    padding: 1em;\\n    flex: 1;\\n}\\n\\n.header-project-name-div {\\n    display: flex;\\n    align-items: flex-end;\\n    justify-content: center;\\n    padding-bottom: .5em;\\n}\\n\\n.header-settings-div {\\n    display: flex;\\n    justify-content: flex-end;\\n    padding: 1em;\\n    flex: 1;\\n}\\n\\n/* Project Page Component Style */\\n\\n.project-add-task-button {\\n    margin: 1em;\\n}\\n\\n.project-task-list {\\n}\\n\\n.project-task-listing {\\n\\n}\\n\\n.project-task-checkbox {\\n    margin: 1em;\\n}\\n\\n.project-task-checkbox-text {\\n    border: none;\\n\\n}\\n\\n/* Project Page Organization Style */\\n\\n.project-page {\\n    display: flex;\\n    flex-direction: column;\\n    background-color: rgba(95, 158, 160, 0.436);\\n    flex: 1;\\n}\\n\\n.project-page-task-view-div {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: 0 auto;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-js-odin/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-js-odin/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-js-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Description: Project object that contains instantiated tasks.\n */\n const uniqueIdentifier = (() => {\n    let uniqueIdentifier = 0;\n\n    const nextValue = () => {\n        return ++uniqueIdentifier;\n    };\n\n    return {nextValue};\n})();\n\nconst project = (name) => {\n    const containedTasks = [];\n    const projectID = uniqueIdentifier.nextValue();\n\n    const getName = () => name;\n    const getTasks = () => containedTasks;\n    const getProjectID = () => projectID;\n\n    const renameName = (newName) => {name = newName};\n    const addTask = (newTask) => {\n        containedTasks.push(newTask);\n    };\n\n    return {getName, getTasks, renameName, addTask, getProjectID};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/components/project.js?");

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Description: Task object that will be core of todo list tracking.\n */\nconst uniqueIdentifier = (() => {\n    let uniqueIdentifier = 0;\n\n    const nextValue = () => {\n        return ++uniqueIdentifier;\n    };\n\n    return {nextValue};\n})();\n\nconst task = (title) => {\n    let description = '';\n    let dueDate;\n    let status = 'open';\n    let priority;\n    const taskID = uniqueIdentifier.nextValue();\n\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getStatus = () => status;\n    const getPriority = () => priority;\n    const getTaskID = () => taskID;\n\n    const renameTitle = (newTitle) => {title = newTitle};\n    const editDescription = (newDescription) => {description = newDescription};\n    const changeDueDate = (newDueDate) => {dueDate = newDueDate};\n    const changeStatus = (newStatus) => {status = newStatus};\n    const changePriority = (newPriority) => {priority = newPriority};\n\n    return {getTitle, getDescription, getDueDate, getStatus, getPriority, getTaskID,\n    renameTitle, editDescription, changeDueDate, changeStatus, changePriority,};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/components/task.js?");

/***/ }),

/***/ "./src/controllers/displayController.js":
/*!**********************************************!*\
  !*** ./src/controllers/displayController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/header */ \"./src/layouts/header.js\");\n/* harmony import */ var _layouts_projectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/projectPage */ \"./src/layouts/projectPage.js\");\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoController */ \"./src/controllers/todoController.js\");\n\n\n\n\n/**\n * Description: Display Controller object that can display out to the console.\n */\nconst displayController = (() => {\n    const newHeaderView = (0,_layouts_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const newProjectPage = (0,_layouts_projectPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    const displayTasks = (selectedProject) => {\n        console.log(_todoController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTasksFromProject(selectedProject));\n    };\n\n    const captureNewTask = (title) => {\n        _todoController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createNewTask(title);\n    };\n\n    const loadHeader = () => {\n        const headerDiv = document.createElement('div');\n        const projectViewDiv = document.createElement('div');\n        const projectNameDiv = document.createElement('div');\n        const settingsDiv = document.createElement('div');\n\n        const projectSelector = newHeaderView.createProjectSelector();\n        \n        projectSelector.onchange = updateProjectView;\n\n        projectViewDiv.appendChild(projectSelector);\n        projectViewDiv.appendChild(newHeaderView.createAddProjectButton());\n        projectNameDiv.appendChild(newHeaderView.displayCurrentProjectName());\n        settingsDiv.appendChild(newHeaderView.createSettingsButton());\n\n        headerDiv.className = 'header';\n        projectViewDiv.className = 'header-project-view-div';\n        projectNameDiv.className = 'header-project-name-div';\n        settingsDiv.className = 'header-settings-div';\n\n        headerDiv.appendChild(projectViewDiv);\n        headerDiv.appendChild(projectNameDiv);\n        headerDiv.appendChild(settingsDiv);\n\n        return headerDiv;\n    }\n\n\n    const updateProjectView = (e) => {\n        newHeaderView.updateCurrentProjectDisplayName(e.target);\n        changeProjectPage();\n    }\n\n    const loadProjectPage = () => {\n        const projectPageDiv = document.createElement('div');\n        projectPageDiv.className = 'project-page';\n        const taskViewDiv = document.createElement('div');\n        taskViewDiv.className = 'project-page-task-view-div';\n\n        taskViewDiv.appendChild(newProjectPage.displayProjectTaskList());\n        taskViewDiv.appendChild(newProjectPage.displayAddTask());\n\n        projectPageDiv.appendChild(taskViewDiv);\n\n        return projectPageDiv;\n    };\n\n    const changeProjectPage = () => {\n        const projectPage = document.querySelector('.project-page');\n        const taskViewDiv = document.createElement('div');\n\n        taskViewDiv.className = 'project-page-task-view-div';\n        \n        taskViewDiv.appendChild(newProjectPage.displayProjectTaskList());\n        taskViewDiv.appendChild(newProjectPage.displayAddTask());\n\n        projectPage.replaceChildren(taskViewDiv);\n    };\n\n    return {\n        displayTasks, captureNewTask, loadHeader, loadProjectPage,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/controllers/displayController.js?");

/***/ }),

/***/ "./src/controllers/todoController.js":
/*!*******************************************!*\
  !*** ./src/controllers/todoController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/task */ \"./src/components/task.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project */ \"./src/components/project.js\");\n\n\n\n/**\n * \n */\nconst todoController = (() => {\n    const home = (0,_components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Home');\n    const projects = [home];\n    let currentProject = home;\n\n    const getProjects = () => projects;\n    const getCurrentProject = () => currentProject;\n    const getTasksFromProject = (selectedProject) => selectedProject.getTasks();\n    const getProjectByID = (projectID) => {\n        return projects.filter((project) => {\n            return projectID == project.getProjectID()\n    }\n    )[0];};\n\n    const createNewProject = (name) => {\n        const newProject = (0,_components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name);\n        projects.push(newProject);\n    };\n\n    const createNewTask = (title) => {\n        const newTask = (0,_components_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title);\n        currentProject.addTask(newTask);\n    }\n\n    const setCurrentProject = (nextProject) => {\n        currentProject = nextProject;\n    };\n\n    return {getProjects, getCurrentProject, getTasksFromProject, createNewProject, \n        createNewTask, setCurrentProject, getProjectByID};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoController);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/controllers/todoController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/displayController */ \"./src/controllers/displayController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst content = document.createElement('div');\ncontent.className = 'content';\n\ndocument.body.appendChild(content);\ncontent.appendChild(_controllers_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHeader());\ncontent.appendChild(_controllers_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjectPage());\n\n//# sourceURL=webpack://todo-list-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/layouts/header.js":
/*!*******************************!*\
  !*** ./src/layouts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/todoController */ \"./src/controllers/todoController.js\");\n\n\n/**\n * \n * @returns header components\n */\nconst header = () => {\n\n    const createProjectsSelectOptions = () => {\n        const projectElementsList = [];\n\n        _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach(project => {\n            const listOption = document.createElement('option');\n            listOption.value = project.getName();\n            listOption.textContent = project.getName();\n            listOption.setAttribute('data-project-id', project.getProjectID());\n            projectElementsList.push(listOption);\n        });\n\n        return projectElementsList;\n    };\n\n    const createProjectSelector = () => {\n        const projectsListDropDown = document.createElement('select');\n\n        projectsListDropDown.setAttribute('id', 'projects');\n        projectsListDropDown.setAttribute('name', 'projectsList');\n        projectsListDropDown.className = 'header-project-selector';\n\n        projectsListDropDown.replaceChildren(...createProjectsSelectOptions());\n\n        return projectsListDropDown;\n    };\n\n    const createAddProjectButton = () => {\n        const addProjectButton = document.createElement('button');\n                \n        addProjectButton.textContent = '+';\n        addProjectButton.className = 'header-project-add-button';\n\n        addProjectButton.onclick = (e) => {\n            const projectsListDropDown = e.target.parentElement.querySelector('select');\n            const newProjectName = prompt('What is the name of your new project?');\n            \n            if(newProjectName  && !(/^\\s/.test(newProjectName))) {\n                _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewProject(newProjectName);\n                projectsListDropDown.replaceChildren(...createProjectsSelectOptions());\n            } else {\n                alert('Enter valid project name!');\n            }\n        }\n\n        return addProjectButton;\n    };\n\n    const displayCurrentProjectName = () => {\n        const currentProjectName = document.createElement('input');\n        const currentProject = _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject();\n        \n        currentProjectName.setAttribute('type', 'text');\n        currentProjectName.className = 'header-project-name';\n        currentProjectName.value = currentProject.getName();\n        currentProjectName.setAttribute('data-project-id', currentProject.getProjectID());\n        currentProjectName.onchange = (e) => {\n            const newName = e.target.value;\n            const projectsListDropDown = document.getElementById('projects');\n            const projectID = e.target.getAttribute('data-project-id');\n            const optionName = projectsListDropDown.querySelector(`[data-project-id=\"${projectID}\"]`);\n\n            if (newName && !(/^\\s/.test(newName))) {\n                _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject().renameName(newName);\n                optionName.textContent = newName;\n                optionName.value = newName;\n            } else {\n                e.target.value = _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject().getName();\n            }\n        };\n\n        return currentProjectName;\n    };\n\n    const updateCurrentProjectDisplayName = (selectElement) => {\n        const projectNameDisplay = document.querySelector('.header-project-name');\n        const projectID = selectElement.selectedOptions[0].getAttribute('data-project-id')\n        \n        _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCurrentProject(\n            _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectByID(\n           projectID));\n\n        projectNameDisplay.setAttribute('data-project-id', projectID);\n        projectNameDisplay.value = selectElement.value;\n    }\n\n    const createSettingsButton = () => {\n        const settingsButton = document.createElement('button');\n\n        settingsButton.textContent = '\\u2699';\n        settingsButton.className = 'header-settings-button';\n        \n        return settingsButton;\n    };\n\n    return {createProjectSelector, createAddProjectButton, createSettingsButton,\n    displayCurrentProjectName, updateCurrentProjectDisplayName};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/layouts/header.js?");

/***/ }),

/***/ "./src/layouts/projectPage.js":
/*!************************************!*\
  !*** ./src/layouts/projectPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/todoController */ \"./src/controllers/todoController.js\");\n\n\nconst projectPage = () => {\n\n    const createCheckbox = (task) => {\n        const taskTitle = task.getTitle();\n        const taskID = task.getTaskID();\n\n        const taskCheckBoxDiv = document.createElement('div');\n        const taskCheckbox = document.createElement('input');\n        const taskCheckboxText = document.createElement('input');\n\n        taskCheckbox.setAttribute('type', `checkbox`);\n        taskCheckbox.setAttribute('id', `checkbox${taskID}`);\n        taskCheckbox.setAttribute('name', `checkbox${taskID}`);\n        taskCheckbox.className = 'project-task-checkbox';\n\n        taskCheckboxText.setAttribute('type', `text`);\n        taskCheckboxText.setAttribute('max', `text`);\n        taskCheckboxText.value = taskTitle;\n        taskCheckboxText.className = 'project-task-checkbox-text';\n\n        taskCheckboxText.onchange = (e) => {\n            const newTitle = e.target.value;\n            if (newTitle && !(/^\\s/.test(newTitle))) {\n                task.renameTitle(newTitle);\n            } else {\n                e.target.value = task.getTitle();\n            }\n            \n        };\n\n        taskCheckBoxDiv.appendChild(taskCheckbox);\n        taskCheckBoxDiv.appendChild(taskCheckboxText);\n\n        return taskCheckBoxDiv;\n    };\n\n    const createProjectTaskItems = () => {\n        const projectTaskItems = [];\n        const currentProject = _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject()\n        const taskList = _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasksFromProject(currentProject);\n\n        taskList.forEach(task => {\n            const taskListing = createCheckbox(task);\n            taskListing.className = 'project-task-listing';\n            projectTaskItems.push(taskListing);\n        });\n\n        return projectTaskItems;\n    };\n\n    const displayProjectTaskList = () => {\n        const projectTaskList = document.createElement('div');\n\n        projectTaskList.className = 'project-task-list';\n        projectTaskList.replaceChildren(...createProjectTaskItems());\n\n        return projectTaskList;\n    };\n\n    const displayProjectCompletedTaskList = () => {\n\n    };\n\n    const displayAddTask = () => {\n        const addTaskButton = document.createElement('button');\n        \n        addTaskButton.textContent = '\\u002B new task';\n        addTaskButton.className = 'project-add-task-button';\n\n        addTaskButton.onclick = (e) => {\n            const projectTaskList = e.target.parentElement.querySelector('div');\n            const newTaskTitle = prompt('What is the name of your new task?');\n            if(newTaskTitle && !(/^\\s/.test(newTaskTitle))) {\n                _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewTask(newTaskTitle);\n            \n                projectTaskList.replaceChildren(...createProjectTaskItems());\n            } else {\n                alert('Enter valid task title!');\n            }\n        };\n\n        return addTaskButton;\n    }\n\n    return {displayAddTask, displayProjectTaskList ,displayProjectCompletedTaskList};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPage);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/layouts/projectPage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;