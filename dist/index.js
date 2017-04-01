(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("quasar-framework"), require("lodash.isempty"));
	else if(typeof define === 'function' && define.amd)
		define(["quasar-framework", "lodash.isempty"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("quasar-framework"), require("lodash.isempty")) : factory(root["quasar-framework"], root["lodash.isempty"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dialogs__["a" /* default */])(Vue)
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loading__["a" /* default */])(Vue)
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toast__["a" /* default */])(Vue)
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (function (Vue) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugins__["a" /* default */])(Vue)
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar_framework__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quasar_framework__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return prompt; });


/**
 * @name makeButton
 *
 * @param {String} label
 * @param {Function} handler
 * @param {Object} extra
 *
 * @returns Object
 */
var makeButton = function (label, handler, extra) {
  if ( extra === void 0 ) extra = {};

  return (Object.assign({}, {label: label,
  handler: handler},
  extra));
}

var createDialog = function (args, onDismiss) { return __WEBPACK_IMPORTED_MODULE_0_quasar_framework__["Dialog"].create(Object.assign({}, {onDismiss: onDismiss,
  noEscDismiss: true,
  noBackdropDismiss: true},
  args)); }

/**
 * @name confirm
 *
 * @param {String} title
 * @param {String} message
 *
 * @returns Promise<void>
 */
var confirm = function (title, message) { return new Promise(function (resolve, reject) {
  var buttons = [makeButton('No', reject), makeButton('Yes', resolve)]
  return createDialog({ title: title, message: message, buttons: buttons }, reject)
}); }

var info = function (title, message) { return new Promise(function (resolve, reject) {
  var buttons = [makeButton('ok', resolve)]
  return createDialog({ title: title, message: message, buttons: buttons }, reject)
}); }

/**
 * [prompt description]
 *
 * @method prompt
 *
 * @param  {[string]} title            [description]
 * @param  {[string]} message          [description]
 * @param  {[string]} [type='textbox'] [description]
 * @param  {[string]} label            [description]
 * @param  {[string]} [model=''        }]            [description]
 *
 * @return {[type]}                  [description]
 */
var prompt = function (title, message, ref) {
    var type = ref.type; if ( type === void 0 ) type = 'textbox';
    var label = ref.label;
    var model = ref.model; if ( model === void 0 ) model = '';

    return new Promise(function (resolve, reject) {
    var buttons = [makeButton('No', reject), makeButton('Yes', resolve)]
    var input = { type: type, label: label, model: model }
    return createDialog({ title: title, message: message, buttons: buttons, form: { input: input } }, reject)
  });
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Object.defineProperty(Vue.prototype, '$dialogs', {
    get: function () { return __WEBPACK_IMPORTED_MODULE_0__actions__; }
  })
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar_framework__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quasar_framework__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });


var show = function (message, args) {
  if ( args === void 0 ) args = {};

  return __WEBPACK_IMPORTED_MODULE_0_quasar_framework__["Loading"].show(Object.assign({}, {spinner: 'dots',
    delay: 0,
    message: message},
    args))
}

var hide = function () { return __WEBPACK_IMPORTED_MODULE_0_quasar_framework__["Loading"].hide(); }


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Object.defineProperty(Vue.prototype, '$loading', {
    get: function () { return __WEBPACK_IMPORTED_MODULE_0__actions__; }
  })
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar_framework__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quasar_framework__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isempty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isempty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isempty__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });



/**
 * @name getHtml
 *
 * @param {String} title
 * @param {String} message
 *
 * @returns String
 */
var getHtml = function (title, message) {
  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isempty___default()(message)) {
    return title
  }

  return ("<big>" + title + "</big><p>" + message + "</p>")
}

/**
 * @name getArgs
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 *
 * @returns Object
 */
var getArgs = function (title, message, args) {
  if ( message === void 0 ) message = '';
  if ( args === void 0 ) args = {};

  return (Object.assign({}, {html: getHtml(title, message),
  timeout: 5000},
  args));
}

var makeCall = function (type, defaults) {
    if ( defaults === void 0 ) defaults = {};

    return function (title, message, args) {
    if ( message === void 0 ) message = '';
    if ( args === void 0 ) args = {};

    return __WEBPACK_IMPORTED_MODULE_0_quasar_framework__["Toast"].create[type](getArgs(title, message, Object.assign({}, defaults, args)));
;
}    }

/**
 * @name error
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
var error = makeCall('negative')

/**
 * @name success
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
var success = makeCall('positive')

/**
 * @name warning
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
var warning = makeCall('warning')

/**
 * @name info
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
var info = makeCall('info')

/**
 * @name alert
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
var alert = warning


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Object.defineProperty(Vue.prototype, '$toast', {
    get: function () { return __WEBPACK_IMPORTED_MODULE_0__actions__; }
  })
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});