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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/* harmony import */ var _blocks_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/alert */ "./src/blocks/alert/index.js");


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
  [_blocks_tutorial__WEBPACK_IMPORTED_MODULE_3__, _blocks_alert__WEBPACK_IMPORTED_MODULE_4__].forEach(registerBlock);
};
registerTutorialBlocks();

/***/ }),

/***/ "./src/blocks/alert/block.json":
/*!*************************************!*\
  !*** ./src/blocks/alert/block.json ***!
  \*************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tutorial/alert\",\"category\":\"tutorial\",\"attributes\":{\"title\":{\"type\":\"string\",\"selector\":\".wp-block-coblocks-alert__title\"},\"value\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\".wp-block-coblocks-alert__text\",\"default\":\"\"},\"backgroundColor\":{\"type\":\"string\",\"default\":\"#d6efee\"},\"customBackgroundColor\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\",\"default\":\"#094264\"},\"customTextColor\":{\"type\":\"string\"},\"titleColor\":{\"type\":\"string\"},\"customTitleColor\":{\"type\":\"string\"},\"borderColor\":{\"type\":\"string\"},\"customBorderColor\":{\"type\":\"string\"},\"textAlign\":{\"type\":\"string\"}}}");

/***/ }),

/***/ "./src/blocks/alert/deprecated.js":
/*!****************************************!*\
  !*** ./src/blocks/alert/deprecated.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/alert/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/alert/block.json", 1);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var deprecated = [{
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_2__["attributes"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var textAlign = attributes.textAlign,
        title = attributes.title,
        value = attributes.value,
        backgroundColor = attributes.backgroundColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        backgroundColor: backgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: "p",
      className: "wp-block-coblocks-alert__text",
      value: value
    }));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/alert/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/alert/edit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/alert/inspector.js");


/**
 * WordPress dependencies
 */




/**
 * Block edit function
 */

var edit = function edit(props) {
  var attributes = props.attributes,
      className = props.className,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes,
      textColor = props.textColor;
  var textAlign = attributes.textAlign,
      title = attributes.title,
      value = attributes.value,
      backgroundColor = attributes.backgroundColor;
  console.log(backgroundColor, props.attributes.backgroundColor);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className + ' my-custom-class',
    style: {
      backgroundColor: backgroundColor + ' !important'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"]
  /* translators: placeholder text for input box */
  , {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Write text…', 'tutorial'),
    value: value,
    className: "wp-block-tutorial-alert__text",
    onChange: function onChange(value) {
      return setAttributes({
        value: value
      });
    },
    keepPlaceholderOnFocus: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/blocks/alert/icon.js":
/*!**********************************!*\
  !*** ./src/blocks/alert/icon.js ***!
  \**********************************/
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
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["G"], {
  transform: "translate(3.75 1.62321)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "m6.42583333 18.3425c0 1.0083333.81583334 1.8241667 1.82416667 1.8241667s1.8241667-.8158334 1.8241667-1.8241667z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "m8.25 4.58333333c2.53 0 4.5833333 2.05333334 4.5833333 4.58333334v6.41666663h-9.16666663v-6.41666663c0-2.53 2.05333333-4.58333334 4.58333333-4.58333334zm0-4.125c-.76083333 0-1.375.61416667-1.375 1.375v1.0725c-2.87833333.62333334-5.04166667 3.19-5.04166667 6.26083334v5.50000003l-1.83333333 1.8333333v.9166667h16.5v-.9166667l-1.8333333-1.8333333v-5.50000003c0-3.07083334-2.1633334-5.6375-5.0416667-6.26083334v-1.0725c0-.76083333-.61416667-1.375-1.375-1.375z"
}))));

/***/ }),

/***/ "./src/blocks/alert/index.js":
/*!***********************************!*\
  !*** ./src/blocks/alert/index.js ***!
  \***********************************/
/*! exports provided: name, category, metadata, settings, attributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/alert/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/alert/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/alert/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/alert/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/alert/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/alert/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms */ "./src/blocks/alert/transforms.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Styles.
 */

/**
 * Internal dependencies
 */






/**
 * WordPress dependencies
 */


/**
 * Block constants
 */

var name = _block_json__WEBPACK_IMPORTED_MODULE_3__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_3__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_3__.attributes;
var settings = {
  /* translators: block name */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Alert', 'coblocks'),

  /* translators: block description */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Provide contextual feedback messages or notices.', 'coblocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  keywords: ['coblocks',
  /* translators: block keyword */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('notice', 'coblocks'),
  /* translators: block keyword */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('message', 'coblocks')],
  styles: [{
    name: 'info',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Info', 'coblocks'),
    isDefault: true
  }, {
    name: 'success',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Success', 'coblocks')
  }, {
    name: 'warning',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Warning', 'coblocks')
  }, {
    name: 'error',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Error', 'coblocks')
  }],
  supports: {
    align: true,
    alignWide: false,
    alignFull: false
  },
  example: {
    attributes: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('This is gutenberg block an alert', 'tutorial'),
      value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 'tutorial')
    }
  },
  attributes: attributes,
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_0__["default"]
};


/***/ }),

/***/ "./src/blocks/alert/inspector.js":
/*!***************************************!*\
  !*** ./src/blocks/alert/inspector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);







/**
 * WordPress dependencies
 */



/**
 * Inspector controls
 */

var Inspector =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Inspector, _Component);

  function Inspector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Inspector).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var textAlign = attributes.textAlign,
          title = attributes.title,
          value = attributes.value,
          backgroundColor = attributes.backgroundColor;

      var changeBackground = function changeBackground(color) {
        setAttributes({
          backgroundColor: color
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color Settings', 'coblocks'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor,
          onChange: changeBackground,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Background Color', 'coblocks')
        }]
      })));
    }
  }]);

  return Inspector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/alert/save.js":
/*!**********************************!*\
  !*** ./src/blocks/alert/save.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var save = function save(_ref) {
  var attributes = _ref.attributes;
  var textAlign = attributes.textAlign,
      title = attributes.title,
      value = attributes.value;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "p",
    className: "wp-block-coblocks-alert__text",
    value: value
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/blocks/alert/transforms.js":
/*!****************************************!*\
  !*** ./src/blocks/alert/transforms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/alert/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/alert/block.json", 1);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */


var transforms = {
  from: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
        value: content
      });
    }
  }, {
    type: 'raw',
    selector: 'div.wp-block-coblocks-alert',
    schema: {
      div: {
        classes: ['wp-block-coblocks-alert']
      }
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref2) {
      var value = _ref2.value,
          title = _ref2.title;

      if (title) {
        value = title + '<br />' + value;
      }

      if (!value || !value.length) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])('core/paragraph');
      } // transforming an alert element with content


      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])('core/paragraph', {
        content: value
      });
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/blocks/tutorial/block.json":
/*!****************************************!*\
  !*** ./src/blocks/tutorial/block.json ***!
  \****************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tutorial/tutorial\",\"category\":\"tutorial\",\"attributes\":{\"id\":{\"type\":\"number\"},\"columns\":{\"type\":\"number\"},\"layout\":{\"type\":\"string\"},\"gutter\":{\"type\":\"string\",\"default\":\"medium\"},\"textColor\":{\"type\":\"string\"},\"align\":{\"type\":\"string\"}}}");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






/**
 * Block edit function
 */

var editor = function editor(attrs) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "This is my first WP block");
};

/* harmony default export */ __webpack_exports__["default"] = (editor);

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

//title, styles, description, icon, keywords, attributes, transforms, edit, save, deprecated, supports, Example

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
  styles: [{
    name: 'info',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Info', 'coblocks'),
    isDefault: true
  }, {
    name: 'success',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Success', 'coblocks')
  }, {
    name: 'warning',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Warning', 'coblocks')
  }, {
    name: 'error',

    /* translators: block style */
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Error', 'coblocks')
  }],

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


var save = function save(_ref) {
  var attributes = _ref.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "This is my first WP block");
};

/* harmony default export */ __webpack_exports__["default"] = (save);

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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/tutorial/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/tutorial/block.json", 1);
/**
 * WordPress dependencies
 */


var transforms = {
  from: [// {
  //     type: 'block',
  //     blocks: [ 'core/paragraph' ],
  //     transform: ( { content } ) => {
  //         console.log('from', content);
  //         return createBlock( metadata.name, { value: content } );
  //     },
  // },
  // {
  //     type: 'block',
  //     blocks: [ 'core/heading' ],
  //     transform: ( { content } ) => {
  //         return createBlock( metadata.name, { value: content } );
  //     },
  // },
  // {
  //     type: 'prefix',
  //     prefix: 'tutorial',
  //     transform: function( content ) {
  //         return createBlock( 'tutorial/tutorial', {
  //             content,
  //         } );
  //     },
  // },
  {
    type: 'shortcode',
    // Shortcode tag can also be an array of shortcode aliases
    tag: 'tutorial',
    attributes: {
      // An attribute can be source from a tag attribute in the shortcode content
      id: {
        type: 'number',
        default: 10
      },
      heading: {
        type: 'string',
        default: 'h3'
      },
      // An attribute can be source from the shortcode attributes
      align: {
        type: 'string',
        shortcode: function shortcode(attributes) {
          //console.log(attributes);
          var align = attributes.named.heading ? attributes.named.heading : 'h3';
          return align.replace('heading', '');
        }
      }
    }
  }, {
    type: 'shortcode',
    // Shortcode tag can also be an array of shortcode aliases
    tag: 'caption',
    attributes: {
      // An attribute can be source from a tag attribute in the shortcode content
      url: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img'
      },
      // An attribute can be source from the shortcode attributes
      align: {
        type: 'string',
        shortcode: function shortcode(_ref) {
          var _ref$named$align = _ref.named.align,
              align = _ref$named$align === void 0 ? 'alignnone' : _ref$named$align;
          console.log('alskdjfhasdkj');
          return align.replace('align', '');
        }
      }
    }
  }],
  to: [// {
    //     type: 'block',
    //     blocks: [ 'core/heading' ],
    //     transform: ( { value, title } ) => {
    //         title = 'askhfalkjshdaksj';
    //         value = 'slerhgakljzsd';
    //         if ( title ) {
    //             value = title + '<br />' + value;
    //         }
    //         if ( ! value || ! value.length ) {
    //             return createBlock( 'core/heading' );
    //         }
    //         // transforming an alert element with content
    //         return createBlock( 'core/heading', {
    //             content: value,
    //         } );
    //     },
    // },
    // {
    //     type: 'block',
    //     blocks: [ 'core/paragraph' ],
    //     transform: ( { value, title } ) => {
    //         console.log('to', value, title);
    //         if ( title ) {
    //             value = title + '<br />' + value;
    //         }
    //         if ( ! value || ! value.length ) {
    //             return createBlock( 'core/paragraph' );
    //         }
    //         // transforming an alert element with content
    //         return createBlock( 'core/paragraph', {
    //             content: value,
    //         } );
    //     },
    // }
  ]
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

/***/ "@wordpress/blob":
/*!***************************************!*\
  !*** external {"this":["wp","blob"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blob"]; }());

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

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

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