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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: The node API for `babel` has been moved to `babel-core`.\\n    at Object.<anonymous> (D:\\\\github\\\\react\\\\smallDemo\\\\node_modules\\\\babel\\\\index.js:1:69)\\n    at Module._compile (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack-cli\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (module.js:580:10)\\n    at Module.load (module.js:503:32)\\n    at tryModuleLoad (module.js:466:12)\\n    at Function.Module._load (module.js:458:3)\\n    at Module.require (module.js:513:17)\\n    at require (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack-cli\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at loadLoader (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:13:17)\\n    at iteratePitchingLoaders (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:169:2)\\n    at runLoaders (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:219:3)\\n    at NormalModule.build (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:337:15)\\n    at Compilation.buildModule (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:346:10)\\n    at moduleFactory.create (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:702:12)\\n    at factory (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:366:6)\\n    at hooks.afterResolve.callAsync (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:143:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook [as _callAsync] (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at resolver (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:126:29)\\n    at process.nextTick (C:\\\\Users\\\\huairen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:304:9)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });