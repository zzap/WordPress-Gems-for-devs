import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("ahsan/todo-list", {
  state: {
    get completedTodos() {
      const {
        todos
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return todos.length ? todos.filter(todo => todo.completed) : [];
    },
    get incompleteTodos() {
      const {
        todos
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return todos.length ? todos.filter(todo => !todo.completed) : [];
    },
    get itemsText() {
      const {
        todos
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return todos.length && todos.length > 1 ? "items left" : "item left";
    },
    get filterTodos() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const findSelectedFilter = context?.filters.find(filter => filter.selected);
      if (findSelectedFilter?.value === "active") {
        return state.incompleteTodos;
      } else if (findSelectedFilter?.value === "complete") {
        return state.completedTodos;
      } else {
        var _context$todos;
        return (_context$todos = context?.todos) !== null && _context$todos !== void 0 ? _context$todos : [];
      }
    }
  },
  actions: {
    addTodo: event => {
      const target = event.target;
      if (event.key === "Enter" && target.value !== "") {
        const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        context.todos.push({
          id: new Date().getMilliseconds().toString(),
          text: target.value,
          completed: false,
          isEditing: false
        });
        target.value = "";
      }
    },
    toggleTodo: () => {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const id = ref.dataset.id;
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.todos = context.todos.map(todo => todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo);
    },
    toggleAllTodo: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.todos = context.todos.map(todo => ({
        ...todo,
        completed: !todo.completed
      }));
    },
    editTodo: () => {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const id = ref.dataset.id;
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.todos = context.todos.map(todo => todo.id === id ? {
        ...todo,
        isEditing: true
      } : {
        ...todo,
        isEditing: false
      });
    },
    doneEdtingViaBlurEvent: event => {
      const target = event.target;
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const id = ref.dataset.id;
      const value = target.value;
      if (value !== "") {
        const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        context.todos = context.todos.map(todo => todo.id === id ? {
          ...todo,
          isEditing: false,
          text: value
        } : todo);
      }
    },
    doneEdtingViaEnterKey: event => {
      const target = event.target;
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const id = ref.dataset.id;
      const value = target.value;
      if (value !== "" && event.key === "Enter") {
        const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        context.todos = context.todos.map(todo => todo.id === id ? {
          ...todo,
          isEditing: false,
          text: value
        } : todo);
      }
    },
    selectFilter: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const filterId = ref.dataset.filterId;
      context.filters = context.filters.map(filter => filter.value === filterId ? {
        ...filter,
        selected: true
      } : {
        ...filter,
        selected: false
      });
    },
    clearCompleteTodo: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.todos = context.todos.filter(todo => !todo.completed);
    },
    removeTodo: () => {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const id = ref.dataset.id;
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.todos = context.todos.filter(todo => todo.id !== id);
    }
  }
});
})();


//# sourceMappingURL=view.js.map