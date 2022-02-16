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

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/todoController.js\");\n\n\n/**\n * Description: Display Controller object that can display out to the console.\n */\nconst displayController = (() => {\n\n    const displayTasks = (selectedProject) => {\n        console.log(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasksFromProject(selectedProject));\n    };\n    const displayProjectsSelectOptions = () => {\n        const projectElementsList = [];\n\n        _todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach(project => {\n            const listOption = document.createElement('option');\n            listOption.value = project.getName();\n            listOption.textContent = project.getName();\n            projectElementsList.push(listOption);\n        });\n\n        return projectElementsList;\n    };\n\n    const captureNewTask = (title) => {\n        _todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewTask(title);\n    };\n\n    const captureNewProject = (name) => {\n        _todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewProject(name);\n    };\n\n\n\n    return {\n        displayTasks, displayProjectsSelectOptions, captureNewProject, captureNewTask,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n\nconst content = document.createElement('div');\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    \n    function createProjectsListDiv() {\n        const projectsDiv = document.createElement('div');\n        const projectsListLabel = document.createElement('label');\n        const projectsListDropDown = document.createElement('select');\n        const addProjectButton = document.createElement('button');\n        const projectOptions = _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayProjectsSelectOptions();\n        \n        projectsListLabel.setAttribute('for', 'projects');\n        projectsListDropDown.setAttribute('id', 'projects');\n        projectsListDropDown.setAttribute('name', 'projectsList');\n\n        projectsListDropDown.replaceChildren(...projectOptions);\n        \n        addProjectButton.textContent = '+';\n\n        addProjectButton.onclick = () => {\n            const newProjectName = prompt('What is the name of your new project?');\n            _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].captureNewProject(newProjectName);\n            \n            projectsListDropDown.replaceChildren(...projectOptions);\n        }\n        \n        projectsDiv.appendChild(projectsListDropDown);\n        projectsDiv.appendChild(addProjectButton);\n\n        return projectsDiv;\n    }\n\n    function createSettingsButtonDiv() {\n        const settingsDiv = document.createElement('div');\n        const settingsButton = document.createElement('button');\n\n        settingsButton.textContent = '\\u2699';\n\n        settingsDiv.appendChild(settingsButton);\n        \n        return settingsDiv;\n    }\n\n    header.appendChild(createProjectsListDiv());\n    header.appendChild(createSettingsButtonDiv());\n\n    return header;\n};\n\ndocument.body.appendChild(content);\ncontent.appendChild(createHeader());\n\n//# sourceURL=webpack://todo-list-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Description: Project object that contains instantiated tasks.\n */\nconst project = (name) => {\n    const containedTasks = [];\n\n    const getName = () => name;\n    const getTasks = () => containedTasks;\n\n    const renameName = (newName) => {name = newName};\n    const addTask = (newTask) => {\n        containedTasks.push(newTask);\n    };\n\n    return {getName, getTasks, renameName}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Description: Task object that will be core of todo list tracking.\n */\n\nconst task = (title) => {\n    let description = '';\n    let dueDate;\n    let status = 'open';\n    let priority;\n\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getStatus = () => status;\n    const getPriority = () => priority;\n\n    const renameTitle = (newTitle) => {title = newTitle};\n    const editDescription = (newDescription) => {description = newDescription};\n    const changeDueDate = (newDueDate) => {dueDate = newDueDate};\n    const changeStatus = (newStatus) => {status = newStatus};\n    const changePriority = (newPriority) => {priority = newPriority};\n\n    return {getTitle, getDescription, getDueDate, getStatus, getPriority,\n    renameTitle, editDescription, changeDueDate, changeStatus, changePriority};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/task.js?");

/***/ }),

/***/ "./src/todoController.js":
/*!*******************************!*\
  !*** ./src/todoController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n/**\n * \n */\nconst todoController = (() => {\n    const home = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Home');\n    const projects = [home];\n    let currentProject = home;\n\n    const getProjects = () => projects;\n    const getTasksFromProject = (selectedProject) => selectedProject.getTasks();\n\n    const createNewProject = (name) => {\n        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name);\n        projects.push(newProject);\n    };\n\n    const createNewTask = (title) => {\n        const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title);\n        currentProject.addTask(newTask);\n    }\n\n    return {getProjects, getTasksFromProject, createNewProject, createNewTask};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoController);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/todoController.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;