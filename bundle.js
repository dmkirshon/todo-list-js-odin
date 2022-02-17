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

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Description: Project object that contains instantiated tasks.\n */\nconst project = (name) => {\n    const containedTasks = [];\n\n    const getName = () => name;\n    const getTasks = () => containedTasks;\n\n    const renameName = (newName) => {name = newName};\n    const addTask = (newTask) => {\n        containedTasks.push(newTask);\n    };\n\n    return {getName, getTasks, renameName}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/components/project.js?");

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Description: Task object that will be core of todo list tracking.\n */\n\nconst task = (title) => {\n    let description = '';\n    let dueDate;\n    let status = 'open';\n    let priority;\n\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getStatus = () => status;\n    const getPriority = () => priority;\n\n    const renameTitle = (newTitle) => {title = newTitle};\n    const editDescription = (newDescription) => {description = newDescription};\n    const changeDueDate = (newDueDate) => {dueDate = newDueDate};\n    const changeStatus = (newStatus) => {status = newStatus};\n    const changePriority = (newPriority) => {priority = newPriority};\n\n    return {getTitle, getDescription, getDueDate, getStatus, getPriority,\n    renameTitle, editDescription, changeDueDate, changeStatus, changePriority};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/components/task.js?");

/***/ }),

/***/ "./src/controllers/displayController.js":
/*!**********************************************!*\
  !*** ./src/controllers/displayController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/controllers/todoController.js\");\n/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/header */ \"./src/layouts/header.js\");\n\n\n\n/**\n * Description: Display Controller object that can display out to the console.\n */\nconst displayController = (() => {\n\n    const displayTasks = (selectedProject) => {\n        console.log(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasksFromProject(selectedProject));\n    };\n\n    const captureNewTask = (title) => {\n        _todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewTask(title);\n    };\n\n    const loadHeader = () => {\n        const headerDiv = document.createElement('div');\n        const projectViewDiv = document.createElement('div');\n        const settingsDiv = document.createElement('div');\n\n        const newHeaderView = (0,_layouts_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n        projectViewDiv.appendChild(newHeaderView.createProjectSelector());\n        projectViewDiv.appendChild(newHeaderView.createAddProjectButton());\n        settingsDiv.appendChild(newHeaderView.createSettingsButton());\n\n        headerDiv.appendChild(projectViewDiv);\n        headerDiv.appendChild(settingsDiv);\n\n        return headerDiv;\n    }\n\n    return {\n        displayTasks, captureNewTask, loadHeader,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/controllers/displayController.js?");

/***/ }),

/***/ "./src/controllers/todoController.js":
/*!*******************************************!*\
  !*** ./src/controllers/todoController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/task */ \"./src/components/task.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project */ \"./src/components/project.js\");\n\n\n\n/**\n * \n */\nconst todoController = (() => {\n    const home = (0,_components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Home');\n    const projects = [home];\n    let currentProject = home;\n\n    const getProjects = () => projects;\n    const getTasksFromProject = (selectedProject) => selectedProject.getTasks();\n\n    const createNewProject = (name) => {\n        const newProject = (0,_components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name);\n        projects.push(newProject);\n    };\n\n    const createNewTask = (title) => {\n        const newTask = (0,_components_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title);\n        currentProject.addTask(newTask);\n    }\n\n    return {getProjects, getTasksFromProject, createNewProject, createNewTask};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoController);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/controllers/todoController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/displayController */ \"./src/controllers/displayController.js\");\n\n\nconst content = document.createElement('div');\n\ndocument.body.appendChild(content);\ncontent.appendChild(_controllers_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHeader());\n\n//# sourceURL=webpack://todo-list-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/layouts/header.js":
/*!*******************************!*\
  !*** ./src/layouts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/todoController */ \"./src/controllers/todoController.js\");\n\n\n/**\n * \n * @returns header components\n */\nconst header = () => {\n    const captureNewProject = (name) => {\n        _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewProject(name);\n    };\n\n    // Header Components\n    const createProjectsSelectOptions = () => {\n        const projectElementsList = [];\n\n        _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach(project => {\n            const listOption = document.createElement('option');\n            listOption.value = project.getName();\n            listOption.textContent = project.getName();\n            projectElementsList.push(listOption);\n        });\n\n        return projectElementsList;\n    };\n\n    const createProjectSelector = () => {\n        const projectsDiv = document.createElement('div');\n        const projectsListLabel = document.createElement('label');\n        const projectsListDropDown = document.createElement('select');\n\n        projectsListLabel.setAttribute('for', 'projects');\n        projectsListDropDown.setAttribute('id', 'projects');\n        projectsListDropDown.setAttribute('name', 'projectsList');\n\n        projectsListDropDown.replaceChildren(...createProjectsSelectOptions());\n\n        projectsDiv.appendChild(projectsListLabel);\n        projectsDiv.appendChild(projectsListDropDown);\n\n        return projectsDiv;\n    };\n\n    const createAddProjectButton = () => {\n        const addProjectButton = document.createElement('button');\n                \n        addProjectButton.textContent = '+';\n\n        addProjectButton.onclick = (e) => {\n            const projectsListDropDown = e.target.parentElement.querySelector('select');\n            const newProjectName = prompt('What is the name of your new project?');\n            captureNewProject(newProjectName);\n            \n            projectsListDropDown.replaceChildren(...createProjectsSelectOptions());\n        }\n\n        return addProjectButton;\n    };\n\n    const createSettingsButton = () => {\n        const settingsButton = document.createElement('button');\n\n        settingsButton.textContent = '\\u2699';\n        \n        return settingsButton;\n    };\n\n    return {createProjectSelector, createAddProjectButton, createSettingsButton};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://todo-list-js-odin/./src/layouts/header.js?");

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