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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(2),
    test = _require.test,
    assert = _require.assert;

var WIN = global.window;
var mir = WIN.mir;
test('global access', function () {
  assert.equal(mir, global.mir);
  assert.equal(mir, WIN.mir);
  assert.equal(_typeof(mir), 'function');
});
test('returns image element', function () {
  var res = mir();
  assert.ok(res instanceof WIN.HTMLElement);
  assert.equal(res.tagName.toUpperCase(), 'IMG');
});
test('returns canvas element', function () {
  var res = mir({
    render: 'canvas'
  });
  assert.ok(res instanceof WIN.HTMLElement);
  assert.equal(res.tagName.toUpperCase(), 'CANVAS');
});
test.cli();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*! scar v1.7.0 - https://larsjung.de/scar/ */
!function(t,n){ true?module.exports=n():undefined}("undefined"!=typeof self?self:this,function(){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}([function(t,n,e){var r=e(1);t.exports={Scar:r,test:(new r).static(),assert:e(11),insp:e(12),spy:e(13),uniq:e(14)}},function(s,t,f){(function(e){function r(t,n,e){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o}).apply(null,arguments)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=f(3),n=f(5),c=f(6),a=f(10),t=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.tests=[]}return function(t,n,e){n&&o(t.prototype,n),e&&o(t,e)}(t,[{key:"test",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.tests.push(r(u,n))}},{key:"skip",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.test.apply(this,n.concat([{skip:!0}]))}},{key:"sync",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.test.apply(this,n.concat([{sync:!0}]))}},{key:"run",value:function(t){return t=function(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){var n,e,r;n=o,r=i[e=t],e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r})}return o}({reporter:(new c).callback},t),new n(this.tests,t).run()}},{key:"cli",value:function(t){var n=this;return e.window?new Promise(function(t){e.window.addEventListener("load",function(){return t()})}).then(function(){return(new a).run(n,t)}):(new a).run(this,t)}},{key:"static",value:function(){return Object.assign(this.test.bind(this),{scar:this,skip:this.skip.bind(this),sync:this.sync.bind(this),run:this.run.bind(this),cli:this.cli.bind(this)})}}]),t}();s.exports=t}).call(this,f(2))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=e(4),u=r.is_str,c=r.is_num,a=r.is_fn,s=r.as_fn,f=function(){function r(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];Object.assign.apply(Object,[this,{desc:"[No Description]",fn:null,skip:!1,sync:!1,timeout:null}].concat(o(n.map(function(t){return u(t)?{desc:t}:a(t)?{fn:t}:t})),[{status:r.WAITING,err:null,starttime:null,duration:null,promise:null}]))}return function(t,n,e){n&&i(t.prototype,n),e&&i(t,e)}(r,[{key:"__TRACE_MARKER__",value:function(){return s(this.fn)()}},{key:"run_fn",value:function(){var t=this,n=Promise.resolve().then(function(){return t.__TRACE_MARKER__()});return c(this.timeout)&&0<this.timeout?Promise.race([n,function(e){return new Promise(function(t,n){setTimeout(function(){return n(new Error("Timeout (".concat(e,"ms)")))},e)})}(this.timeout)]):n}},{key:"run",value:function(){var n=this;return this.promise=this.promise||Promise.resolve().then(function(){return n.starttime=Date.now(),n.status=r.PENDING,n.skip?null:n.run_fn()}).then(function(){n.status=n.skip?r.SKIPPED:r.PASSED}).catch(function(t){n.status=r.FAILED,n.err=t}).then(function(){n.duration=Date.now()-n.starttime}),this.promise}}]),r}();f.WAITING="WAITING",f.PENDING="PENDING",f.PASSED="PASSED",f.FAILED="FAILED",f.SKIPPED="SKIPPED",t.exports=f},function(t,n){function e(t){return"number"==typeof t}function r(t){return"function"==typeof t}function o(t){return t.reduce(function(t,n){return t.then(n)},Promise.resolve())}t.exports={is_bool:function(t){return"boolean"==typeof t},is_num:e,is_str:function(t){return"string"==typeof t},is_arr:function(t){return Array.isArray(t)},is_fn:r,is_plain_obj:function(t){return"[object Object]"===Reflect.apply(Object.prototype.toString,t,[])},as_fn:function(t){return r(t)?t:function(){return t}},run_seq:o,run_conc:function(a,s){return!e(s)||s<2?o(a):new Promise(function(r){var o=a.length,i=0,u=0,c=0;!function t(){for(;c<o&&u<s;){var n=a[c];c+=1,u+=1,(e=n,Promise.resolve().then(e).catch(function(){return null}).then(function(){u-=1,i+=1})).then(t)}var e;i===o&&r()}()})}}},function(t,n,e){function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=e(4),i=o.as_fn,c=o.run_seq,a=o.run_conc,s=e(3),u=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length?arguments[1]:void 0;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{sync:!1,reporter:null,filter:null,max_conc:100},n,{tests:t,status:s.WAITING,starttime:null,duration:null,promise:null})}return function(t,n,e){n&&r(t.prototype,n),e&&r(t,e)}(e,[{key:"run_test",value:function(t){var n=this;return Promise.resolve().then(function(){return i(n.reporter)("beforeTest",n,t)}).then(function(){n.runCount+=1,t.runIdx=n.runCount}).then(function(){return t.run()}).then(function(){n.settledCount+=1,t.settledIdx=n.settledCount,t.status===s.PASSED?(n.passedCount+=1,t.passedIdx=n.passedCount):t.status===s.SKIPPED?(n.skippedCount+=1,t.skippedIdx=n.skippedCount):(n.failedCount+=1,t.failedIdx=n.failedCount)}).then(function(){return i(n.reporter)("after_test",n,t)})}},{key:"run",value:function(){var u=this;return this.promise=this.promise||Promise.resolve().then(function(){u.tests.forEach(function(t,n){t.defIdx=n+1}),u.total=u.tests.length,u.filteredTests=u.tests.filter(i(u.filter||!0)),u.filteredTotal=u.filteredTests.length,u.runCount=0,u.settledCount=0,u.passedCount=0,u.failedCount=0,u.skippedCount=0}).then(function(){return i(u.reporter)("before_all",u)}).then(function(){u.starttime=Date.now(),u.status=s.PENDING;function t(t){return function(){return u.run_test(t)}}var n=u.filteredTests,e=u.sync?n:n.filter(function(t){return!!t.sync}),r=u.sync?[]:n.filter(function(t){return!t.sync}),o=e.map(t),i=r.map(t);return c(o).then(function(){return a(i,u.max_conc)})}).then(function(){u.status=u.failedCount?s.FAILED:s.PASSED,u.duration=Date.now()-u.starttime}).then(function(){return i(u.reporter)("after_all",u)}).then(function(){return u}),this.promise}}]),e}();t.exports=u},function(t,n,e){t.exports=e(7)},function(t,n,e){function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=e(8),i=e(9),u=i.set_title,c=i.set_fav_icon,a=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.log=console.log.bind(console),this.callback=this.handle.bind(this)}return function(t,n,e){n&&r(t.prototype,n),e&&r(t,e)}(t,[{key:"handle",value:function(t){if(["before_all","after_test","after_all"].includes(t)){for(var n=arguments.length,e=new Array(1<n?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return this[t].apply(this,e)}return null}},{key:"before_all",value:function(t){var n="running ";return t.filteredTotal!==t.total&&(n+="".concat(t.filteredTotal," of ")),n+="".concat(t.total," tests\n "),this.log(n),u("running ".concat(t.filteredTotal," tests...")),c("GREY"),new Promise(function(t){return setTimeout(function(){return t()},100)})}},{key:"after_test",value:function(t,n){var e="PASSED"===n.status?" ok ":"SKIPPED"===n.status?"skip":"FAIL";this.log(" ".concat(e," ").concat(n.desc))}},{key:"after_all",value:function(t){var e=this;t.tests.filter(function(t){return"FAILED"===t.status}).forEach(function(t){var n=new o(t.err);e.log("\n[".concat(t.failedIdx,"] ").concat(t.desc,"\n").concat(n.format()))});var n="\n";t.failedCount&&(n+="".concat(t.failedCount," failed, ")),t.skippedCount&&(n+="".concat(t.skippedCount," skipped, ")),n+="".concat(t.passedCount," passed (").concat(t.duration,"ms)"),this.log(n),u(n),c(t.failedCount?"RED":"GREEN")}}]),t}();t.exports=a},function(t,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return o(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function o(t,n,e){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){return t.split("\n").map(function(t){return function(t){for(var n=0,e=h;n<e.length;n++){var r=e[n],o=r.re.exec(t);if(o)return{method:o[r.method]||"",url:o[r.url],basename:o[r.url].replace(/^.*\//,""),line:parseInt(o[r.line],10),column:parseInt(o[r.column],10)}}return null}(t)}).filter(function(t){return t})}function p(t,n){return n+t.replace(/\n/g,"\n"+n)}var h=[{re:/^\s*at\s+(.*?)\s+\((.*?)(?::(\d+))?(?::(\d+))?\)\s*$/,method:1,url:2,line:3,column:4},{re:/^\s*at\s+(.*?)(?::(\d+))?(?::(\d+))?\s*$/,method:null,url:1,line:2,column:3},{re:/^(.*?)@(.*?)(?::(\d+))?(?::(\d+))?\s*$/,method:1,url:2,line:3,column:4}],y=/__TRACE_MARKER__$|^process\._tickCallback$/,e=function(t){function o(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),t=function(t,n){return!n||"object"!==i(n)&&"function"!=typeof n?c(t):n}(this,f(o).call(this));for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return Object.assign.apply(Object,[c(t),{name:"Err",message:"[no message]",drop:0}].concat(u(e.map(function(t){if("string"==typeof t)return{message:t};if("number"==typeof t)return{drop:t};if(t){for(var n={error:t},e=0,r=["name","message","stack","drop"].concat(u(Object.keys(t)));e<r.length;e++){var o=r[e];void 0!==t[o]&&(n[o]=t[o])}return n}return null})))),t.frames=l(t.stack),t.filteredFrames=function(t,n){t=t.slice(Number(n)||0);var e=!1;return t.filter(function(t){return!(e=e||y.test(t.method))})}(t.frames,t.drop),t}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(o,a(Error)),function(t,n,e){n&&r(t.prototype,n),e&&r(t,e)}(o,[{key:"format",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],e="".concat(this.name,": ").concat(this.message,"\n");return e+=p(function(t,n){return t.map(function(t){return function(t,n){var e=[n?t.basename:t.url,t.line,t.column].filter(function(t){return t}).join(":");return t.method?"".concat(t.method," - ").concat(e):e}(t,n)}).join("\n")}(this.filteredFrames,n),"  at "),p(e,t)}},{key:"toString",value:function(){return this.format()}}]),o}();t.exports=e},function(s,t,n){(function(t){function n(){return null}var r,o,e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wsZER*AAAAAElFTkSuQmCC",i={RED:e.replace("*","Y0VbWlewAAAB1JREFUOMtj/OJs9p+BAsDEQCEYNWDUgFEDBosBABZOAow9yV0y"),GREEN:e.replace("*","kM+i8BKgAAAB1JREFUOMtj9Fkf8J+BAsDEQCEYNWDUgFEDBosBAIuhAmqCXURi"),GREY:e.replace("*","kjUf48cwAAAB1JREFUOMtjDA0N/c9AAWBioBCMGjBqwKgBg8UAAFduAh79mcom")},u=t.window&&t.window.document,c=u?function(t){u.title=t}:n,a=u?(r=u.querySelector("head"),o="shortcut icon",function(t){var n=u.querySelector('link[rel="'.concat(o,'"]'));n&&r.removeChild(n);var e=u.createElement("link");e.rel=o,e.href=i.hasOwnProperty(t)?i[t]:t,r.appendChild(e)}):n;s.exports={set_title:c,set_fav_icon:a}}).call(this,n(2))},function(n,t,e){(function(o){function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=e(8),t=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.log=console.log.bind(console)}return function(t,n,e){n&&r(t.prototype,n),e&&r(t,e)}(t,[{key:"get_args",value:function(){return o.process?o.process.argv.slice(2):o.window?o.window.location.href.split(/[\?&]+/).slice(1):[]}},{key:"parse_args",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.get_args();return{showHelp:t.includes("-h"),showStats:t.includes("-s"),filters:t.filter(function(t){return 0<t.length&&"-"!==t[0]})}}},{key:"run",value:function(n,e){var r=this;return Promise.resolve().then(function(){var t=r.parse_args();if(t.showHelp)r.log("\n  scar - a test runner for node and the browser\n\n  Usage:\n    node tests.js [opt...] [arg...]\n    tests.html?opt&...&arg&...\n\n  Options:\n    -h: show this help message\n    -s: show test stats\n\n  Arguments:\n    all arguments are used as test filters\n\n");else{if(!t.showStats)return e=function(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){var n,e,r;n=o,r=i[e=t],e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r})}return o}({},e,{filter:function(t){return t&&t.length?function(n){return t.every(function(t){return n.desc.includes(t)})}:null}(t.filters)}),n.run(e).then(function(t){o.process&&t.failedCount&&o.process.exit(1)}).catch(function(t){r.log("\n".concat(new i(t).format("  "),"\n")),o.process&&o.process.exit(2)});r.log("\n  ".concat(n.tests.length," tests defined\n \n"))}return null})}}]),t}();n.exports=t}).call(this,e(2))},function(t,n,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return Object.prototype.toString.call(t)}function u(e,r){if(e===r||Number.isNaN(e)&&Number.isNaN(r))return!0;var t=o(e);if("object"!==t&&t===o(r))return e===r;if((t=i(e))!==i(r))return!1;if("[object Array]"===t)return e.length===r.length&&e.every(function(t,n){return u(e[n],r[n])});if("[object Object]"!==t)return!1;var n=Object.keys(e);return u(n.sort(),Object.keys(r).sort())&&n.every(function(t){return u(e[t],r[t])})}function c(t,n,e,r){return t?void 0===e?null:e instanceof RegExp?(n=String(n),e.test(n)?null:{act:n,exp:e,msg:r||"expected error ".concat(s(n)," to be matched by ").concat(s(e))}):"function"==typeof e?(e(n),null):n===e?null:{act:n,exp:e,msg:r||"expected error ".concat(s(n)," to be ").concat(s(e))}:{act:n,exp:e,msg:r||"expected error but returned ".concat(n)}}function a(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3;if(t&&!t.expr)throw new f(t.msg,t,n)}function r(t,n){a({expr:t,msg:n})}var s=e(12),f=e(8);r.fail=function(t){a({msg:t})},r.ok=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"expected ".concat(s(t)," to be truthy");a({expr:!!t,act:t,msg:n})},r.notOk=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"expected ".concat(s(t)," to be falsy");a({expr:!t,act:t,msg:n})},r.equal=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"expected ".concat(s(t)," to equal ").concat(s(n));a({expr:t===n,act:t,exp:n,msg:e})},r.notEqual=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"expected ".concat(s(t)," not to equal ").concat(s(n));a({expr:t!==n,act:t,ref:n,msg:e})},r.deepEqual=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"expected ".concat(s(t)," to deeply equal ").concat(s(n));a({expr:u(t,n),act:t,exp:n,msg:e})},r.notDeepEqual=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"expected ".concat(s(t)," not to deeply equal ").concat(s(n));a({expr:!u(t,n),act:t,ref:n,msg:e})},r.throws=function(t,n,e){a({expr:"function"==typeof t,msg:"assert.throws(): first arg must be a function"});var r={},o=r;try{o=t()}catch(t){a(c(!0,t,n,e))}o!==r&&a(c(!1,o,n,e))},r.rejects=function(t,n,e){return a({expr:t&&"function"==typeof t.then,msg:"assert.rejects(): first arg must be a thenable"}),Promise.resolve(t).then(function(t){return a(c(!1,t,n,e),2)},function(t){return a(c(!0,t,n,e),2)})},t.exports=r},function(t,n,e){var r=e(4),o=r.is_str,i=r.is_fn,u=r.is_arr,c=r.is_plain_obj;t.exports=function n(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return r.includes(e)?"[circular]":(r.push(e),o(e)?"'".concat(e,"'"):i(e)?String(e).split(")")[0]+")":u(e)?"["+Array.from(e,function(t){return n(t,r)}).join(", ")+"]":c(e)?"{"+Object.keys(e).map(function(t){return"".concat(t,": ").concat(n(e[t],r))}).join(", ")+"}":String(e))}},function(t,n,e){var r=e(4).as_fn;t.exports=function(n){var e=[];function t(){"use strict";var t={idx:e.length,time:Date.now(),ctx:this,args:Array.from(arguments)};return e.push(t),t.ret=r(n)(t,e),t.done=Date.now(),t.ret}return t.calls=e,t}},function(t,n){function e(){return"UNIQ-"+("0000"+(o+=1)).substr(-4)+"-ID"}var r=new RegExp("^".concat("UNIQ-","\\d{").concat(4,"}").concat("-ID","$")),o=0;t.exports={id:e,isId:function(t){return r.test(t)},obj:function(){return{_uniq_id:e()}},path:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return"_uniq_path/"+e()+t}}}])});

/***/ })
/******/ ]);