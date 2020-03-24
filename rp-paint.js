/*!
 * MIT License
 * 
 * Copyright (c) Yuri Sulyma
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive-player"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["ractive-player", "react"], factory);
	else if(typeof exports === 'object')
		exports["RPPaint"] = factory(require("ractive-player"), require("react"));
	else
		root["RPPaint"] = factory(root["RactivePlayer"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_ractive_player__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Paint.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Paint.tsx":
/*!***********************!*\
  !*** ./src/Paint.tsx ***!
  \***********************/
/*! exports provided: PaintContext, PaintCanvas, PaintReplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintContext", function() { return PaintContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintCanvas", function() { return PaintCanvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings */ "./src/Settings.tsx");
/* harmony import */ var _PaintReplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaintReplay */ "./src/PaintReplay.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaintReplay", function() { return _PaintReplay__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools */ "./src/tools/index.ts");
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process */ "./src/process.ts");



const { replay } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].animation, { dragHelperReact } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].interactivity, { between } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].misc;

const { floor, max, min } = Math;
const initialState = {
    tool: "draw",
    activeSheet: 0,
    strokeStyle: "#000",
    lineWidth: 2,
    complete: true
};
const PaintContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
function uiReducer(state, action) {
    switch (action.type) {
        case "set-stroke-style":
            return Object.assign({}, state);
        case "set-tool":
            return Object.assign(Object.assign({}, state), { tool: action.name });
    }
    return state;
}
let count = 0;
function PaintCanvas(props) {
    const drawLayer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const renderLayer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const index = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const sheets = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([[]]);
    const stack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([
        { type: "set-stroke-style", strokeStyle: "#000" }
    ]);
    window.stack = stack.current;
    const layers = {
        aid: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])()
    };
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initialState);
    const [uiState, uiDispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(uiReducer, {
        tool: "draw"
    });
    state.current.tool = uiState.tool;
    state.current.uiDispatch = uiDispatch;
    const $repaint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const record = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((action) => {
        var _a, _b, _c;
        (_c = (_b = (_a = props.recorder) === null || _a === void 0 ? void 0 : _a.instance) === null || _b === void 0 ? void 0 : _b.capture) === null || _c === void 0 ? void 0 : _c.call(_b, action);
        stack.current.push(action);
    }, [props.recorder]);
    state.current.record = record;
    const events = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        return Object.assign({ onMouseMove: (e) => {
                const tool = toolset[state.current.tool];
                tool.hover({
                    canvas: layers.aid.current,
                    hit: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
            } }, dragHelperReact((e, hit) => {
            const tool = toolset[state.current.tool];
            tool.move({
                canvas: drawLayer.current,
                e,
                hit,
                stack: stack.current,
                state: state.current,
                record
            });
            $repaint.current();
        }, (e, hit) => {
            const tool = toolset[state.current.tool];
            tool.down({
                canvas: drawLayer.current,
                e,
                hit,
                stack: stack.current,
                state: state.current,
                record
            });
            $repaint.current();
        }, (e) => {
            const tool = toolset[state.current.tool];
            tool.up({
                canvas: drawLayer.current,
                e,
                stack: stack.current,
                state: state.current,
                target: renderLayer.current,
                record
            });
            $repaint.current();
        }));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const stable = renderLayer.current, stabCtx = stable.getContext("2d");
        const temp = drawLayer.current, tempCtx = temp.getContext("2d");
        const data = stack.current;
        $repaint.current = repaint;
        function repaint(reset = false) {
            const { width, height } = stable;
            if (reset) {
                index.current = 0;
                stabCtx.clearRect(0, 0, stable.width, stable.height);
                tempCtx.clearRect(0, 0, temp.width, temp.height);
            }
            let i = index.current;
            function consume({ test }) {
                const vals = [];
                for (; i + 1 < data.length; ++i) {
                    const act = data[i + 1];
                    if (!test(act)) {
                        return [vals, true];
                        break;
                    }
                    vals.push(act);
                }
                return [vals, state.current.complete];
            }
            tempCtx.clearRect(0, 0, temp.width, temp.height);
            for (; i < data.length; ++i) {
                const action = data[i];
                const complete = Object(_process__WEBPACK_IMPORTED_MODULE_5__["default"])({
                    action,
                    consume,
                    stable,
                    state: state.current,
                    temp
                });
                if (complete) {
                    index.current = i + 1;
                }
                else {
                    break;
                }
            }
        }
        function resize() {
            const rect = renderLayer.current.getBoundingClientRect();
            for (const key in layers) {
                layers[key].current.height = rect.height;
                layers[key].current.width = rect.width;
            }
            drawLayer.current.height = renderLayer.current.height = rect.height;
            drawLayer.current.width = renderLayer.current.width = rect.width;
            repaint(true);
        }
        window.addEventListener("resize", resize);
        resize();
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [drawLayer.current, renderLayer.current]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PaintContext.Provider, { value: state.current },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas", { className: "rp-paint-layer noinput", ref: layers.aid }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas", Object.assign({ id: "temp", className: "rp-paint-layer" }, events, { ref: drawLayer })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas", { id: "stable", className: "rp-paint-layer noinput", ref: renderLayer }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Settings__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}



const toolset = {
    draw: _tools__WEBPACK_IMPORTED_MODULE_4__["DrawTool"],
    eraser: _tools__WEBPACK_IMPORTED_MODULE_4__["EraserTool"],
    move: _tools__WEBPACK_IMPORTED_MODULE_4__["MoveTool"]
};



/***/ }),

/***/ "./src/PaintReplay.tsx":
/*!*****************************!*\
  !*** ./src/PaintReplay.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaintReplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process */ "./src/process.ts");



const { replay } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].animation, { between } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].misc;
const { floor, max, min } = Math;
const initialState = {
    activeSheet: 0,
    strokeStyle: "#000",
    lineWidth: 2
};
function PaintReplay(props) {
    const { playback, script } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ractive_player__WEBPACK_IMPORTED_MODULE_1__["Player"].Context);
    const tempLayer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const renderLayer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const data = props.replay;
    const stableIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const stableSum = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initialState);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        var _a;
        const start = (_a = script.parseStart(props.start)) !== null && _a !== void 0 ? _a : 0;
        let lastTime = playback.currentTime;
        function repaint(currentTime, reset = false) {
            const stable = renderLayer.current, stabCtx = stable.getContext("2d");
            const temp = tempLayer.current, tempCtx = temp.getContext("2d");
            const { lineWidth, strokeStyle } = state.current;
            if ((currentTime < lastTime) || reset) {
                stableIndex.current = 0;
                stableSum.current = 0;
                stabCtx.clearRect(0, 0, stable.width, stable.height);
            }
            lastTime = currentTime;
            tempCtx.clearRect(0, 0, temp.width, temp.height);
            if (currentTime < start)
                return;
            let i = stableIndex.current;
            let sum = stableSum.current;
            function consume({ test }) {
                const vals = [];
                for (; i + 1 < data.length; ++i) {
                    const [s, act] = data[i + 1];
                    if (currentTime <= s + start + sum) {
                        return [vals, false];
                        break;
                    }
                    if (!test(act)) {
                        return [vals, true];
                        break;
                    }
                    sum += s;
                    vals.push(act);
                }
                return [vals, true];
            }
            tempCtx.clearRect(0, 0, temp.width, temp.height);
            for (; i < data.length; ++i) {
                const [t, action] = data[i];
                sum += t;
                if (currentTime <= start + sum)
                    break;
                const complete = Object(_process__WEBPACK_IMPORTED_MODULE_2__["default"])({
                    action,
                    consume,
                    stable,
                    state: state.current,
                    temp
                });
                if (complete) {
                    stableIndex.current = i + 1;
                    stableSum.current = sum;
                }
                else {
                    break;
                }
            }
        }
        function resize() {
            const rect = renderLayer.current.getBoundingClientRect();
            tempLayer.current.height = renderLayer.current.height = rect.height;
            tempLayer.current.width = renderLayer.current.width = rect.width;
            repaint(playback.currentTime, true);
        }
        window.addEventListener("resize", resize);
        playback.hub.on("seek", repaint);
        playback.hub.on("timeupdate", repaint);
        resize();
        return () => {
            window.removeEventListener("resize", resize);
            playback.hub.off("seek", repaint);
            playback.hub.off("timeupdate", repaint);
        };
    }, [renderLayer.current, tempLayer.current]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "rp-paint-view" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas", { className: "rp-paint-layer noinput", ref: tempLayer }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas", { className: "rp-paint-layer noinput", ref: renderLayer })));
}



/***/ }),

/***/ "./src/Settings.tsx":
/*!**************************!*\
  !*** ./src/Settings.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaintSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _settings_Draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/Draw */ "./src/settings/Draw.tsx");
/* harmony import */ var _settings_Eraser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/Eraser */ "./src/settings/Eraser.tsx");
/* harmony import */ var _settings_Format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/Format */ "./src/settings/Format.tsx");
/* harmony import */ var _settings_Sheets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/Sheets */ "./src/settings/Sheets.tsx");



const { replay } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].animation, { dragHelperReact } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].interactivity, { between } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].misc, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].mobile;





function PaintSettings() {
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const dragEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        let lastX, lastY;
        return dragHelperReact((e, hit) => {
            const offset = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["offsetParent"])(ref.current);
            const x = offset.left + hit.x - lastX, y = offset.top + hit.y - lastY, left = x / offset.width * 100, top = y / offset.height * 100;
            lastX = hit.x;
            lastY = hit.y;
            Object.assign(ref.current.style, {
                left: `${left}%`,
                top: `${top}%`
            });
        }, (e, hit) => {
            lastX = hit.x;
            lastY = hit.y;
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", { className: "rp-paint-settings", ref: ref },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ className: "rp-paint-drag-handle" }, dragEvents)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_settings_Draw__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_settings_Eraser__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_settings_Format__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_settings_Sheets__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}


/***/ }),

/***/ "./src/images.tsx":
/*!************************!*\
  !*** ./src/images.tsx ***!
  \************************/
/*! exports provided: Brush, Eraser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brush", function() { return Brush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eraser", function() { return Eraser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Brush(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({ viewBox: "0 0 1500 2048" }, props),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { strokeWidth: "0", fill: "#FFF", d: "M414.28716,2012.55227C413.57034,2012.50797 413.03097,2012.53328 412.30928,2012.48687C405.32489,2012.03654 398.09223,2011.46808 390.78334,2010.77271C383.47445,2010.07734 376.09051,2009.25633 368.697,2008.26739C361.30349,2007.27845 353.91484,2006.13719 346.6766,2004.80605C339.43835,2003.47501 332.32342,2001.94587 325.48031,2000.22401C318.6372,1998.50214 312.07442,1996.58333 305.86632,1994.42222C302.76227,1993.34172 299.73432,1992.19339 296.834,1990.9939C293.93368,1989.7944 291.16054,1988.5274 288.49393,1987.20301C285.82733,1985.87852 283.282,1984.50497 280.87909,1983.04936C278.47618,1981.59385 276.19759,1980.05996 274.08837,1978.46732C271.97914,1976.87467 270.03918,1975.22549 268.25362,1973.4897C266.46806,1971.75381 264.83971,1969.93564 263.40781,1968.05048L259.6828,1962.14985C258.63454,1960.10931 257.77916,1957.98955 257.14452,1955.78762C256.50988,1953.58568 256.0829,1951.30041 255.89186,1948.93096C255.70083,1946.56151 255.74116,1944.12287 256.02372,1941.57989C256.30628,1939.03681 256.42466,1936.52896 256.35337,1934.09686C256.28206,1931.66475 256.03101,1929.29984 255.62815,1926.97648C255.22528,1924.65313 254.65913,1922.40236 253.94695,1920.18576C253.23476,1917.96916 252.37495,1915.80351 251.3757,1913.69167C250.37646,1911.57992 249.24438,1909.50341 247.98034,1907.49431C246.7163,1905.48531 245.33338,1903.53496 243.82679,1901.6267C242.3202,1899.71833 240.67489,1897.86524 238.94802,1896.05561C237.22114,1894.24598 235.40079,1892.46125 233.47588,1890.74825C231.55097,1889.03535 229.54401,1887.38901 227.44334,1885.77063C225.34268,1884.15225 223.13755,1882.58239 220.88337,1881.05674C219.94745,1880.42318 218.87622,1879.89438 217.91655,1879.27654C183.90718,1954.84731 129.6903,2001.65314 18.24947,2022.40929C-0.00129,2025.8085 6.02224,2048.05581 18.24947,2048.05571C149.82919,2048.05571 301.19607,2047.43755 414.28716,2012.5528L414.28716,2012.55227z" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { strokeWidth: "0", fill: "#FFF", d: "M 411.1884781423197 1662.6651406877138 C 328.0029639823267 1662.6651406877138 258.82126849058716 1722.6570635683574 244.58497761372928 1801.743079382712 C 236.91342637587138 1830.3737228286748 228.32967647029943 1856.1375465935191 217.9165502437986 1879.2760103766268 C 218.8762180529376 1879.8938476240164 219.947448893123 1880.4226538594892 220.8833715828515 1881.0562086670395 C 223.13755452474027 1882.581866872434 225.34267547179195 1884.1517241228441 227.44334321031283 1885.7701053844885 C 229.5440109488336 1887.388486646133 231.55097460218178 1889.0348219577277 233.47587993305353 1890.7477195542979 C 235.4007852639254 1892.4607226378491 237.22114244798342 1894.2454568684425 238.94801706952887 1896.0550860265384 C 240.67489169107432 1897.8647151846346 242.32020377895367 1899.7178049788795 243.82678993819354 1901.6261699511394 C 245.33337609743342 1903.5344294364181 246.71629986891242 1905.4847782270936 247.98033981286756 1907.4937777791738 C 249.2443797568227 1909.5028828182353 250.37645548761657 1911.57939403812 251.37570201200583 1913.6911379096398 C 252.37494853639498 1915.802987268141 253.23476236937222 1917.9686349869232 253.94694717251832 1920.1852329175017 C 254.6591319756643 1922.4018308480802 255.2252806023913 1924.6526065604844 255.62814593131486 1926.9759573157783 C 256.03101126023853 1929.2993080710721 256.28208082358356 1931.664220696858 256.35336892530563 1934.0963285295052 C 256.42467812442374 1936.5284363621522 256.3063217318046 1939.0362838471174 256.02372210985527 1941.579363983718 C 255.74116468269835 1944.1223386333372 255.70082646118533 1946.560986658803 255.89186338367517 1948.9304352247693 C 256.0829003061649 1951.2998837907357 256.5098799589324 1953.5851537459089 257.14452128238634 1955.787088986136 C 257.7791626058404 1957.989024226363 258.6345354369199 1960.1087851084349 259.68280176135386 1962.1493252678176 C 260.7310680857877 1964.1897599402193 261.9759093992109 1966.1647926844357 263.4078107759424 1968.0499505208877 C 264.8397121526739 1969.93510835734 266.46806193401744 1971.7532819608923 268.2536189630621 1973.4891757193086 C 270.0391759921067 1975.2249639907436 271.9791448638573 1976.8741474508238 274.08836759653263 1978.4667898891178 C 276.1975903292081 1980.059432327412 278.47618295848736 1981.59331851732 280.8790919948092 1983.0488278803866 C 283.28200103113113 1984.5044427304344 285.8273280404255 1985.8779887093074 288.4939334317115 1987.2024832420418 C 291.1605388229975 1988.526872287795 293.9336755163389 1989.7938764159146 296.83399786260463 1990.9933688762299 C 299.73432020887026 1992.192861336545 302.7622712533803 1993.3411926111028 305.8663206059433 1994.421695756913 C 312.0744193110694 1996.582807535515 318.63719689222376 1998.5016157188882 325.4803061252371 2000.2234797088388 C 332.3234153582506 2001.9453436987892 339.4383539924587 2003.474482974555 346.67659635869256 2004.8055177001077 C 353.9148387249264 2006.1366579126413 361.30349497728844 2007.2779215594755 368.6970036307738 2008.2668620058264 C 376.09051228425915 2009.2558024521775 383.4744532685729 2010.0768076248653 390.78334026594507 2010.772177803249 C 398.0922272633171 2011.4675479816324 405.32488936825894 2012.0360173219403 412.30927731485076 2012.4863412435905 C 413.0309664949799 2012.532755515206 413.57034252594326 2012.5084935095888 414.2871582075527 2012.5517431717758 C 479.521963368986 1992.4290466868792 532.0664315540894 1960.9664997504915 560.6174323294392 1911.515046979744 C 573.2656378055797 1887.7999913587958 580.4291531945125 1860.6919469957807 580.4291531945125 1831.9382002430566 C 580.4291531945125 1738.449519485499 504.67733822774494 1662.664613252809 411.1884781423197 1662.664613252809 L 411.1884781423197 1662.6651406877138 z" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fill: "#FFF", d: "M 1484.51851 0.058460000000000005 C 1480.98216 0.13593000000000002 1476.95425 1.7448700000000001 1473.31052 6.5525 C 1468.13849 13.7632 794.64578 948.84301 641.31497 1224.99301 C 644.97105 1226.18512 648.71446 1227.40476 652.48995 1228.75109 C 676.15321 1237.18815 702.30807 1248.71756 730.22067 1264.41877 C 763.41742 1283.09271 799.12044 1307.66738 836.16915 1339.87498 C 1004.53291 1066.81401 1491.8777 28.28664 1495.66057 20.26581 C 1499.15799 11.2839 1495.71121 4.82736 1492.1333 2.33303 C 1491.90956 2.17716 1491.66768 2.0238 1491.40818 1.87152 C 1489.7052 0.8718600000000001 1487.26898 -0.0017900000000000006 1484.51851 0.058460000000000005 z" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fill: "#FFF", d: "M 1473.31052 6.5525 z M 622.78872 1260.39718 C 620.19363 1265.80772 617.99001 1270.74324 616.19578 1275.13234 C 559.21488 1414.52769 473.79303 1581.87699 450.15273 1645.68838 C 495.46337 1652.69536 534.82734 1677.66307 560.74929 1713.1011 C 604.88589 1661.54508 709.15175 1506.12172 802.67704 1389.35502 C 806.24176 1384.90431 810.21187 1379.53165 814.5113 1373.33408 C 780.89081 1343.60626 748.63015 1320.77424 718.71605 1303.28418 C 689.77021 1286.36027 663.01533 1274.41313 639.23815 1265.93525 C 633.55503 1263.90885 628.09366 1262.04637 622.78872 1260.39718 z" }))));
}
function Eraser() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { viewBox: "0 0 75 75" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: "translate(0, 45) rotate(-40) translate(-31.543342,-132.63477)" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fill: "#CCC", stroke: "#000", strokeLinejoin: "round", strokeMiterlimit: "4", d: "m 36.072339,133.16377 h 31.680484 v 32.87415 H 36.072339 c -2.215998,0 -3.999997,-1.784 -3.999997,-4 v -24.87415 c 0,-2.216 1.783999,-4 3.999997,-4 z" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fill: "#D34A4A", stroke: "#000", strokeLinejoin: "round", strokeMiterlimit: "4", d: "m 67.752823,133.16377 h 31.680483 c 2.216004,0 3.999994,1.784 3.999994,4 v 24.87415 c 0,2.216 -1.78399,4 -3.999994,4 H 67.752823 Z" }))));
}


/***/ }),

/***/ "./src/process.ts":
/*!************************!*\
  !*** ./src/process.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return process; });
const { ceil, floor, max, min } = Math;
function process({ action, consume, stable, state, temp }) {
    const { lineWidth, strokeStyle } = state;
    const stabCtx = stable.getContext("2d");
    const tempCtx = temp.getContext("2d");
    switch (action.type) {
        case "set-stroke-style": {
            stabCtx.strokeStyle
                = state.strokeStyle
                    = tempCtx.strokeStyle
                        = action.strokeStyle;
            return true;
        }
        case "erase": {
            const ctx = stable.getContext("2d");
            ctx.save();
            ctx.beginPath();
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(floor(action.x * stable.width), floor(action.y * stable.height), floor(action.r * stable.width), 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
            return true;
        }
        case "move-to":
            const [lineTos, complete] = consume({
                test: act => act.type === "line-to"
            });
            const points = [[action.x, action.y], ...lineTos.map(_ => [_.x, _.y])];
            const canvas = complete ? stable : temp;
            const ctx = canvas.getContext("2d");
            const { height, width } = canvas;
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.strokeStyle = state.strokeStyle;
            ctx.lineWidth = state.lineWidth;
            if (points.length === 1) {
                ctx.fillStyle = strokeStyle;
                ctx.fillRect(floor(width * points[0][0] - lineWidth / 2), floor(height * points[0][1] - lineWidth / 2), lineWidth, lineWidth);
            }
            else {
                ctx.beginPath();
                ctx.moveTo(floor(points[0][0] * width), floor(points[0][1] * height));
                for (let i = 0, len = points.length; i < len - 1; i++) {
                    const p1 = points[i], p2 = points[i + 1];
                    const midX = p1[0] + (p2[0] - p1[0]) / 2, midY = p1[1] + (p2[1] - p1[1]) / 2;
                    ctx.quadraticCurveTo(floor(width * p1[0]), floor(height * p1[1]), floor(width * midX), floor(height * midY));
                }
                ctx.stroke();
            }
            return complete;
    }
}


/***/ }),

/***/ "./src/settings/Draw.tsx":
/*!*******************************!*\
  !*** ./src/settings/Draw.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draw; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images */ "./src/images.tsx");
/* harmony import */ var _Paint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Paint */ "./src/Paint.tsx");



const { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].mobile;


function Draw() {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Paint__WEBPACK_IMPORTED_MODULE_3__["PaintContext"]);
    const classNames = ["rp-paint-tool"];
    if (state.tool === "draw")
        classNames.push("selected");
    const events = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => onClick(() => {
        state.uiDispatch({
            type: "set-tool",
            name: "draw"
        });
    }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", Object.assign({ className: classNames.join(" ") }, events),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_images__WEBPACK_IMPORTED_MODULE_2__["Brush"], null)));
}


/***/ }),

/***/ "./src/settings/Eraser.tsx":
/*!*********************************!*\
  !*** ./src/settings/Eraser.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Eraser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images */ "./src/images.tsx");
/* harmony import */ var _Paint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Paint */ "./src/Paint.tsx");



const { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].mobile;


function Eraser() {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Paint__WEBPACK_IMPORTED_MODULE_3__["PaintContext"]);
    const classNames = ["rp-paint-tool"];
    if (state.tool === "eraser") {
        classNames.push("selected");
    }
    const events = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => onClick(() => {
        state.uiDispatch({
            type: "set-tool",
            name: "eraser"
        });
    }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", Object.assign({ className: classNames.join(" ") }, events),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_images__WEBPACK_IMPORTED_MODULE_2__["Eraser"], null)));
}


/***/ }),

/***/ "./src/settings/Format.tsx":
/*!*********************************!*\
  !*** ./src/settings/Format.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Format; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Paint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Paint */ "./src/Paint.tsx");



const { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__["Utils"].mobile;

function Format() {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Paint__WEBPACK_IMPORTED_MODULE_2__["PaintContext"]);
    const classNames = ["rp-paint-tool"];
    if (state.tool === "eraser") {
        classNames.push("selected");
    }
    const events = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => onClick(() => {
        console.log("set stroke style");
        const action = {
            type: "set-stroke-style",
            strokeStyle: "#F00"
        };
        state.record(action);
    }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", Object.assign({ className: "rp-paint-tool rp-paint-format" }, events)));
}


/***/ }),

/***/ "./src/settings/Sheets.tsx":
/*!*********************************!*\
  !*** ./src/settings/Sheets.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sheets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Sheets() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "rp-paint-tool" }, "Sheets"));
}


/***/ }),

/***/ "./src/tools/draw.ts":
/*!***************************!*\
  !*** ./src/tools/draw.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "draw",
    hover({ canvas }) {
    },
    down({ canvas, hit, record, state }) {
        const rect = canvas.getBoundingClientRect();
        const action = {
            type: "move-to",
            x: (hit.x - rect.left) / rect.width,
            y: (hit.y - rect.top) / rect.height
        };
        record(action);
        state.complete = false;
    },
    move({ canvas, hit, record }) {
        const rect = canvas.getBoundingClientRect(), { width, height } = rect;
        const action = {
            type: "line-to",
            x: (hit.x - rect.left) / width,
            y: (hit.y - rect.top) / height
        };
        record(action);
    },
    up({ state }) {
        state.complete = true;
    }
});


/***/ }),

/***/ "./src/tools/eraser.ts":
/*!*****************************!*\
  !*** ./src/tools/eraser.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const eraserSize = 2;
const { floor } = Math;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "eraser",
    hover({ canvas, hit }) {
        const rect = canvas.getBoundingClientRect();
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000";
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.arc(floor(hit.x - rect.left), floor(hit.y - rect.y), floor(eraserSize / 100 * rect.width), 0, 2 * Math.PI);
        ctx.stroke();
    },
    down({ canvas, hit, record, state }) {
        const rect = canvas.getBoundingClientRect();
        const action = {
            type: "erase",
            x: (hit.x - rect.left) / rect.width,
            y: (hit.y - rect.top) / rect.height,
            r: 0.02
        };
        record(action);
    },
    move({ canvas, hit, record }) {
        const rect = canvas.getBoundingClientRect();
        const action = {
            type: "erase",
            x: (hit.x - rect.left) / rect.width,
            y: (hit.y - rect.top) / rect.height,
            r: 0.02
        };
        record(action);
    },
    up({ canvas, record, state, target }) {
    }
});


/***/ }),

/***/ "./src/tools/index.ts":
/*!****************************!*\
  !*** ./src/tools/index.ts ***!
  \****************************/
/*! exports provided: DrawTool, EraserTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/tools/draw.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawTool", function() { return _draw__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _eraser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eraser */ "./src/tools/eraser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EraserTool", function() { return _eraser__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: offsetParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetParent", function() { return offsetParent; });
function offsetParent(node) {
    if (typeof node.offsetLeft !== "undefined" && typeof node.offsetTop !== "undefined") {
        return {
            left: node.offsetLeft,
            top: node.offsetTop,
            width: node.offsetParent.getBoundingClientRect().width,
            height: node.offsetParent.getBoundingClientRect().height
        };
    }
    const rect = node.getBoundingClientRect();
    let parent = node;
    while (parent = parent.parentNode) {
        if (!["absolute", "relative"].includes(getComputedStyle(parent).position))
            continue;
        const prect = parent.getBoundingClientRect();
        return { left: rect.left - prect.left, top: rect.top - prect.top, width: prect.width, height: prect.height };
    }
    return { left: rect.left, top: rect.top, width: innerWidth, height: innerHeight };
}


/***/ }),

/***/ "ractive-player":
/*!*************************************************************************************************************************!*\
  !*** external {"commonjs":"ractive-player","commonjs2":"ractive-player","amd":"ractive-player","root":"RactivePlayer"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ractive_player__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});