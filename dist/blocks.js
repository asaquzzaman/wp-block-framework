/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! exports provided: registerTutorialBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerTutorialBlocks", function() { return registerTutorialBlocks; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_block_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/block-category */ "./src/utils/block-category.js");
/* harmony import */ var _blocks_tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/tutorial */ "./src/blocks/tutorial/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

 // Register Blocks


/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

var registerBlock = function registerBlock(block) {
  if (!block) {
    return;
  }

  var name = block.name,
      category = block.category,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])(name, _objectSpread({
    category: category
  }, settings));
};
/**
 * Function to register blocks provided by CoBlocks.
 */


var registerTutorialBlocks = function registerTutorialBlocks() {
  [_blocks_tutorial__WEBPACK_IMPORTED_MODULE_3__].forEach(registerBlock);
};
registerTutorialBlocks();

/***/ }),

/***/ "./src/blocks/tutorial/block.json":
/*!****************************************!*\
  !*** ./src/blocks/tutorial/block.json ***!
  \****************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tutorial/tutorial\",\"category\":\"tutorial\",\"attributes\":{\"id\":{\"type\":\"number\"},\"columns\":{\"type\":\"number\"},\"layout\":{\"type\":\"string\"},\"gutter\":{\"type\":\"string\",\"default\":\"medium\"},\"textColor\":{\"type\":\"string\"}}}");

/***/ }),

/***/ "./src/blocks/tutorial/deprecated.js":
/*!*******************************************!*\
  !*** ./src/blocks/tutorial/deprecated.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/tutorial/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/tutorial/block.json", 1);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */


var deprecated = [];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/tutorial/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/tutorial/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/src/blocks/tutorial/edit.js: Unexpected token (15:15)\n\n\u001b[0m \u001b[90m 13 | \u001b[39m\u001b[90m * Block edit function\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 | \u001b[39m\u001b[36mconst\u001b[39m editor \u001b[33m=\u001b[39m \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m\t\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m\trender() {\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m\u001b[0m\n    at Object.raise (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.unexpected (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Object.parseExprAtom (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:9627:20)\n    at Object.parseExprAtom (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseVar (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:11307:26)\n    at Object.parseVarStatement (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Object.parseStatementContent (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:10723:21)\n    at Object.parseStatement (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseTopLevel (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:10587:10)\n    at Object.parse (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:12097:10)\n    at parse (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/parser/lib/index.js:12148:38)\n    at parser (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/wedevs/Computer/htdocs/hrm/wp-content/plugins/tutorial/node_modules/@babel/core/lib/transform.js:34:34)\n    at processTicksAndRejections (internal/process/task_queues.js:79:9)");

/***/ }),

/***/ "./src/blocks/tutorial/icon.js":
/*!*************************************!*\
  !*** ./src/blocks/tutorial/icon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "m16 0h-14c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6h-14v-4h14zm0 4h-14c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6h-14v-4h14z",
  transform: "translate(3 3)"
})));

/***/ }),

/***/ "./src/blocks/tutorial/index.js":
/*!**************************************!*\
  !*** ./src/blocks/tutorial/index.js ***!
  \**************************************/
/*! exports provided: name, category, metadata, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/tutorial/edit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/tutorial/deprecated.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/tutorial/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/tutorial/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/tutorial/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/tutorial/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./src/blocks/tutorial/transforms.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */






/**
 * WordPress dependencies
 */


/**
 * Block constants
 */

var name = _block_json__WEBPACK_IMPORTED_MODULE_4__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_4__.category;

var attributes = _objectSpread({}, _block_json__WEBPACK_IMPORTED_MODULE_4__.attributes);

var settings = {
  /* translators: block name */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tutorial', 'tutorial'),

  /* translators: block description */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Add a structured wrapper for column blocks, then add content blocks you’d like to the columns.', 'coblocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  keywords: ['tutorial',
  /* translators: block keyword */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('tutorial', 'tutorial'),
  /* translators: block keyword */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('learning', 'tutorial'),
  /* translators: block keyword */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('knowledge', 'tutorial')],
  attributes: attributes,
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"]
};


/***/ }),

/***/ "./src/blocks/tutorial/save.js":
/*!*************************************!*\
  !*** ./src/blocks/tutorial/save.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


function Save(_ref) {
  var attributes = _ref.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null);
}

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/blocks/tutorial/transforms.js":
/*!*******************************************!*\
  !*** ./src/blocks/tutorial/transforms.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var transforms = {
  from: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/heading', {
        content: content
      });
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/utils/block-category.js":
/*!*************************************!*\
  !*** ./src/utils/block-category.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brand_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand-assets */ "./src/utils/brand-assets.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["setCategories"])([{
  slug: 'tutorial',
  title: 'Tutorial',
  icon: _brand_assets__WEBPACK_IMPORTED_MODULE_2__["default"].categoryIcon
}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["getCategories"])().filter(function (_ref) {
  var slug = _ref.slug;
  return slug !== 'coblocks-galleries';
}))));

/***/ }),

/***/ "./src/utils/brand-assets.js":
/*!***********************************!*\
  !*** ./src/utils/brand-assets.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/**
 * Custom icons
 */

var icons = {};
icons.categoryIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  height: "20",
  viewBox: "0 0 20 20",
  width: "20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "m5.64061786.98596548 8.60095684-.00146814c1.6268055-.00027769 2.2175432.16938914 2.8138163.48807555.5962732.3186864 1.0652814.78641505 1.3862243 1.38244235.3209428.59602729.4931785 1.18725228.5010418 2.81773904l.0415737 8.62042012c.0078633 1.6304868-.1586695 2.2217696-.4738629 2.8179055-.3151934.5961358-.7796894 1.0640238-1.3728878 1.3829133-.5931983.3188894-1.1822985.4887576-2.809104.4890353l-8.60095683.0014682c-1.62680543.0002776-2.21754313-.1693892-2.81381629-.4880756-.59627317-.3186864-1.06528137-.786415-1.38622424-1.3824423-.32094288-.5960273-.49317854-1.1872523-.50104188-2.8177391l-.04157365-8.6204201c-.00786334-1.63048677.15866944-2.22176958.47386289-2.81790546.31519344-.59613588.77968944-1.06402387 1.37288777-1.38291331.59319834-.31888944 1.18229856-.48875766 2.80910399-.48903535zm-.65612086 2.99853152c-.55228475 0-1 .44771525-1 1v10c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-10c0-.55228475-.44771525-1-1-1zm7 7c-.5522847 0-1 .4477153-1 1v3c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-3c0-.5522847-.4477153-1-1-1zm0-7c-.5522847 0-1 .44771525-1 1v3c0 .55228475.4477153 1 1 1h3c.5522847 0 1-.44771525 1-1v-3c0-.55228475-.4477153-1-1-1z",
  fillRule: "evenodd"
}));
icons.sidebarMoreMenuIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "m5.88996491 1.48588643 8.13794159-.00138911c1.5392296-.00026274 2.0981661.16027042 2.6623401.46180098s1.0079341.74407997 1.3115996 1.30802133c.3036656.56394136.4666293 1.12333893.4740693 2.66605169l.0393356 8.15635708c.0074401 1.5427127-.1501278 2.102165-.4483534 2.6662091s-.7377164 1.0067443-1.2989811 1.308467c-.5612647.3017226-1.1186519.4624463-2.6578815.4627091l-8.13794156.0013891c-1.53922962.0002627-2.09816613-.1602704-2.66234013-.461801-.56417399-.3015306-1.00793407-.74408-1.31159963-1.3080213-.30366556-.5639414-.46662926-1.123339-.47406929-2.6660517l-.03933561-8.15635707c-.00744003-1.54271277.15012779-2.10216506.44835342-2.66620915.29822564-.5640441.73771642-1.00674428 1.29898111-1.30846695.56126469-.30172266 1.11865188-.46244637 2.6578815-.4627091zm-.62079991 2.83711157c-.5225536 0-.946167.4236134-.946167.946167v9.46167c0 .5225536.4236134.946167.946167.946167h2.838501c.5225536 0 .946167-.4236134.946167-.946167v-9.46167c0-.5225536-.4236134-.946167-.946167-.946167zm6.623169 6.623169c-.5225536 0-.946167.4236134-.946167.946167v2.838501c0 .5225536.4236134.946167.946167.946167h2.838501c.5225536 0 .946167-.4236134.946167-.946167v-2.838501c0-.5225536-.4236134-.946167-.946167-.946167zm0-6.623169c-.5225536 0-.946167.4236134-.946167.946167v2.838501c0 .5225536.4236134.946167.946167.946167h2.838501c.5225536 0 .946167-.4236134.946167-.946167v-2.838501c0-.5225536-.4236134-.946167-.946167-.946167z",
  fillRule: "evenodd"
}));
icons.modalIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  height: "25",
  viewBox: "0 0 25 25",
  width: "25",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "m6.46683453.00203955 11.94577347-.00203908c2.2594519-.00038567 3.079921.2352627 3.9080781.67788271.8281572.44262 1.4795575 1.09224312 1.9253115 1.92005881s.6849702 1.64896151.6958915 3.91352645l.0577412 11.97280576c.0109213 2.2645649-.2203743 3.085791-.6581429 3.9137575-.4377687.8279666-1.082902 1.477811-1.9067886 1.920713s-1.6420813.6788301-3.9015333.6792157l-11.94577345.0020391c-2.25945199.0003857-3.07992102-.2352627-3.90807819-.6778827-.82815718-.44262-1.47955745-1.0922431-1.92531145-1.9200588s-.68497019-1.6489615-.6958915-3.9135264l-.05774118-11.97280577c-.0109213-2.26456495.22037424-3.08579108.6581429-3.91375758.43776867-.8279665 1.08290201-1.47781093 1.90678858-1.92071294.82388658-.442902 1.64208133-.67883008 3.90153332-.67921576zm-1.07794564 3.98245745c-.76706215 0-1.38888889.62182674-1.38888889 1.38888889v14.23772521c0 .7670622.62182674 1.3888889 1.38888889 1.3888889h4.33333333c.76706218 0 1.38888888-.6218267 1.38888888-1.3888889v-14.23772521c0-.76706215-.6218267-1.38888889-1.38888888-1.38888889zm10.00000001 9.9043919c-.7670622 0-1.3888889.6218267-1.3888889 1.3888889v4.3333333c0 .7670622.6218267 1.3888889 1.3888889 1.3888889h4.2222222c.7670622 0 1.3888889-.6218267 1.3888889-1.3888889v-4.3333333c0-.7670622-.6218267-1.3888889-1.3888889-1.3888889zm0-9.9043919c-.7670622 0-1.3888889.62182674-1.3888889 1.38888889v4.34883633c0 .76706218.6218267 1.38888888 1.3888889 1.38888888h4.2222222c.7670622 0 1.3888889-.6218267 1.3888889-1.38888888v-4.34883633c0-.76706215-.6218267-1.38888889-1.3888889-1.38888889z",
  fillRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=blocks.js.map