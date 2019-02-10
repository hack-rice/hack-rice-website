module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_about__ = __webpack_require__("./content/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/about.js";







var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
    name: "about",
    style: {
      overflowX: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    mx: 2,
    mt: 4,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
    width: 1,
    mx: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_4__content_about__["h" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
    width: [1],
    mx: 2,
    mb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_4__content_about__["e" /* p1 */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_4__content_about__["f" /* p2 */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_4__content_about__["g" /* p3 */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_4__content_about__["c" /* link1 */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_4__content_about__["a" /* button1 */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_4__content_about__["d" /* link2 */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1028647368", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_4__content_about__["b" /* button2 */]))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    justifyContent: "center",
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
    style: {
      maxWidth: "200%",
      height: "150px",
      bottom: "0px"
    },
    mt: 4,
    src: "../static/sallyport.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1028647368",
    css: "@import url(\"https://rsms.me/inter/inter-ui.css\");p.__jsx-style-dynamic-selector{font-weight:300;font-size:1em;line-height:1.6em;}p.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{font-weight:400 !important;}.title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], ";margin:unset;font-family:\"Overpass Mono\",monospace;}.sallyport.__jsx-style-dynamic-selector{height:80px !important;}button.__jsx-style-dynamic-selector{background:none;border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], ";color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;font-size:1em;margin-top:0.4em;margin-right:1em;padding:6px 10px;text-transform:uppercase;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}button.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUUwRCxBQUcvQixBQU1XLEFBSU4sQUFRRSxBQUlQLEFBYW9CLGdCQWxDdEIsQUFzQmdDLEtBWnJCLEVBUTNCLElBWkEsR0FMb0IsR0FrQ0gsYUF4Qm9CLEVBVHJDLEFBa0NBLGNBYnFDLG1CQVh0QixhQUMwQixHQVdBLG1DQVZ6QyxHQVdnQixjQUNHLGlCQUNBLGlCQUNBLGlCQUNRLHlCQUM2QyxrSkFDeEUiLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE4L2NvZGUvaGFja3JpY2UvaGFja3JpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIEltYWdlIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHtcbiAgdGl0bGUsXG4gIGluZm8sXG4gIHAxLFxuICBwMixcbiAgcDMsXG4gIGJ1dHRvbjEsXG4gIGJ1dHRvbjIsXG4gIGxpbmsxLFxuICBsaW5rMlxufSBmcm9tIFwiLi4vY29udGVudC9hYm91dFwiO1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8RWxlbWVudCBuYW1lPVwiYWJvdXRcIiBzdHlsZT17eyBvdmVyZmxvd1g6IFwiaGlkZGVuXCIgfX0+XG4gICAgPEZsZXggbXg9ezJ9IG10PXs0fSBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgIDxCb3ggd2lkdGg9ezF9IG14PXsyfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggd2lkdGg9e1sxXX0gbXg9ezJ9IG1iPXsxfT5cbiAgICAgICAgPHA+e3AxfTwvcD5cbiAgICAgICAgPHA+e3AyfTwvcD5cbiAgICAgICAgPHA+e3AzfTwvcD5cbiAgICAgICAgPGEgaHJlZj17bGluazF9PlxuICAgICAgICAgIDxidXR0b24+e2J1dHRvbjF9PC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj17bGluazJ9PlxuICAgICAgICAgIDxidXR0b24+e2J1dHRvbjJ9PC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvQm94PlxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiB3aWR0aD17WzFdfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjIwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxNTBweFwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjBweFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgICBtdD17NH1cbiAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvc2FsbHlwb3J0LnN2Z1wiXG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLXVpLmNzc1wiKTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yc1tcImdyYXlcIl1bMV19O1xuICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuc2FsbHlwb3J0IHtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yc1tcImdyYXlcIl1bMV19O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yc1tcImdyYXlcIl1bMV19O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRmxleD5cbiAgPC9FbGVtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXX0= */\n/*@ sourceURL=components/about.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1]]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ "./components/calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_calendar__ = __webpack_require__("./content/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/calendar.js";







var Calendar = function Calendar() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_scroll__["Element"], {
    name: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    bg: __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1],
    color: __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    mx: 4,
    px: 3,
    pt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["g" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"], {
    my: 1,
    pb: 4,
    mx: 4,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    px: 3,
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayName"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["a" /* dayOne */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayContent"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["d" /* friday */].map(function (_ref) {
    var key = _ref.key,
        title = _ref.title,
        time = _ref.time,
        detail = _ref.detail;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemTime"
    }, time), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemDetail"
    }, detail));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    px: 3,
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayName"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["c" /* dayTwo */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayContent"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["e" /* saturday */].map(function (_ref2) {
    var key = _ref2.key,
        title = _ref2.title,
        time = _ref2.time,
        detail = _ref2.detail;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemTime"
    }, time), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemDetail"
    }, detail));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    px: 3,
    width: [1, 1 / 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayName"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["b" /* dayThree */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayContent"
  }, __WEBPACK_IMPORTED_MODULE_4__content_calendar__["f" /* sunday */].map(function (_ref3) {
    var key = _ref3.key,
        title = _ref3.title,
        time = _ref3.time,
        detail = _ref3.detail;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "dayItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemTime"
    }, time), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2522240098", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "itemDetail"
    }, detail));
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2522240098",
    css: "h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",monospace;}.title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";background:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], ";padding:2px 10px;}.dayName.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], ";text-transform:uppercase;}.dayContent.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:48%;float:left;margin:0px;list-style-type:none;padding:0;width:100%;}.dayItem.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,0.1);background:rgba(255,255,255,0.2);color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], ";padding:8px 10px;-webkit-transition:border 0.3s ease-in-out,box-shadow 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition:border 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;transition:border 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;margin-bottom:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dayItem.__jsx-style-dynamic-selector:hover{border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], ";box-shadow:0px 3px 5px 2px rgba(97,100,178,0.05);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.dayContent.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.itemTime.__jsx-style-dynamic-selector{display:block;margin-top:2px;font-size:0.8em;font-family:\"Overpass Mono\";}.itemTitle.__jsx-style-dynamic-selector{margin-top:5px;display:inline-block;font-size:0.8em;font-weight:400;font-family:\"Overpass Mono\";background:rgba(97,100,178,0.15);padding:2px 5px;color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], ";}.itemDetail.__jsx-style-dynamic-selector{clear:both;display:block;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:0.8em;margin-top:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUlrRCxBQUlsQixBQVFMLEFBT0ssQUFXZSxBQWNVLEFBTWhCLEFBTWhCLEFBT0MsQUFXSixXQUNHLEdBbEJDLENBT00sQ0FuREwsS0FSUyxBQWVOLElBd0RMLElBbEJFLEdBNUNtQixDQWlCQyxHQWtDcEIsRUFoRWxCLEVBb0JZLEtBc0NrQixDQXJETyxBQXVDaUIsSUF2QnpDLEVBNENLLFNBM0NMLEtBU3dCLENBakJWLENBb0RHLElBM0NQLENBb0N2QixNQWlCa0IsRUF0RXdCLFdBUzFDLENBU1ksRUFxQlksQUFnQ0wsQ0FWbUIsS0FuQ25CLEVBUE4sU0FxRGIsRUFwREEsQ0F3QnFCLEdBaEJTLEdBM0JYLFFBNkRELFNBNURsQixPQTZEcUMsNEJBdkJyQyxPQXdCQSxJQW5CdUIsNEVBQ3ZCLDJKQWpCb0Isa0JBQ0wsMEVBQ00scUVBQ1csbUhBQ1gsNkZBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOC9jb2RlL2hhY2tyaWNlL2hhY2tyaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHtcbiAgdGl0bGUsXG4gIGZyaWRheSxcbiAgc2F0dXJkYXksXG4gIHN1bmRheSxcbiAgZGF5T25lLFxuICBkYXlUd28sXG4gIGRheVRocmVlXG59IGZyb20gXCIuLi9jb250ZW50L2NhbGVuZGFyXCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvY29sb3JzLmpzb25cIjtcblxuY29uc3QgQ2FsZW5kYXIgPSAoKSA9PiAoXG4gIDxFbGVtZW50IG5hbWU9XCJjYWxlbmRhclwiPlxuICAgIDxCb3ggYmc9e2NvbG9yc1tcImdyYXlcIl1bMV19IGNvbG9yPXtjb2xvcnNbXCJiYXNlXCJdfT5cbiAgICAgIDxCb3ggbXg9ezR9IHB4PXszfSBwdD17NH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgPC9Cb3g+XG4gICAgICA8RmxleCBteT17MX0gcGI9ezR9IG14PXs0fSBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgPEJveCBweD17M30gd2lkdGg9e1sxLCAxIC8gM119PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkYXlOYW1lXCI+e2RheU9uZX08L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkYXlDb250ZW50XCI+XG4gICAgICAgICAgICB7ZnJpZGF5Lm1hcCgoeyBrZXksIHRpdGxlLCB0aW1lLCBkZXRhaWwgfSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cImRheUl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtVGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1UaW1lXCI+e3RpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1EZXRhaWxcIj57ZGV0YWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHB4PXszfSB3aWR0aD17WzEsIDEgLyAzXX0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRheU5hbWVcIj57ZGF5VHdvfTwvaDI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRheUNvbnRlbnRcIj5cbiAgICAgICAgICAgIHtzYXR1cmRheS5tYXAoKHsga2V5LCB0aXRsZSwgdGltZSwgZGV0YWlsIH0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJkYXlJdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtVGltZVwiPnt0aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtRGV0YWlsXCI+e2RldGFpbH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBweD17M30gd2lkdGg9e1sxLCAxIC8gM119PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkYXlOYW1lXCI+e2RheVRocmVlfTwvaDI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRheUNvbnRlbnRcIj5cbiAgICAgICAgICAgIHtzdW5kYXkubWFwKCh7IGtleSwgdGl0bGUsIHRpbWUsIGRldGFpbCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZGF5SXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1UaXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVRpbWVcIj57dGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbURldGFpbFwiPntkZXRhaWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yc1tcIndoaXRlXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yc1tcImJhc2VcIl19O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRheU5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnNbXCJiYXNlXCJdfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRheUNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF5SXRlbSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnNbXCJiYXNlXCJdfTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXlJdGVtOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yc1tcImJhc2VcIl19O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDJweCByZ2JhKDk3LCAxMDAsIDE3OCwgMC4wNSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXlDb250ZW50IHVsIGxpIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbVRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtVGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCAxMDAsIDE3OCwgMC4xNSk7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnNbXCJiYXNlXCJdfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtRGV0YWlsIHtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Cb3g+XG4gIDwvRWxlbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyO1xuIl19 */\n/*@ sourceURL=components/calendar.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),

/***/ "./components/faq.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Questions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_collapse__ = __webpack_require__("rc-collapse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_collapse_assets_index_css__ = __webpack_require__("./node_modules/rc-collapse/assets/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_collapse_css__ = __webpack_require__("./styles/collapse.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_faq__ = __webpack_require__("./content/faq.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_scroll__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/faq.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var Questions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Questions, _React$Component);

  function Questions() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Questions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Questions.__proto__ || Object.getPrototypeOf(Questions)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        accordion: true,
        activeKey: null,
        questions: __WEBPACK_IMPORTED_MODULE_6__content_faq__["a" /* questions */]
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(activeKey) {
        _this.setState({
          activeKey: activeKey
        });
      }
    }), _temp));
  }

  _createClass(Questions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var state = this.state;
      var shift = __WEBPACK_IMPORTED_MODULE_6__content_faq__["a" /* questions */].length / 3;
      var cols = [];

      for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_6__content_faq__["a" /* questions */].length; i += shift) {
        cols.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rebass__["Flex"], {
          flexWrap: "wrap",
          flexDirection: "column",
          width: [1, 1 / 2, 1 / 3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, __WEBPACK_IMPORTED_MODULE_6__content_faq__["a" /* questions */].slice(i, i + shift).map(function (_ref2) {
          var key = _ref2.key,
              question = _ref2.question,
              answer = _ref2.answer;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_collapse___default.a, {
            key: key,
            accordion: false,
            onChange: _this2.onChange,
            activeKey: state.activeKey,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_collapse__["Panel"], {
            className: "faqCard",
            key: key,
            header: question,
            headerClass: "faqCardTitle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }, answer)));
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: __WEBPACK_IMPORTED_MODULE_3_rc_collapse_assets_index_css__["a" /* default */].__hash,
          css: __WEBPACK_IMPORTED_MODULE_3_rc_collapse_assets_index_css__["a" /* default */]
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: __WEBPACK_IMPORTED_MODULE_4__styles_collapse_css__["a" /* default */].__hash,
          css: __WEBPACK_IMPORTED_MODULE_4__styles_collapse_css__["a" /* default */]
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_scroll__["Element"], {
        name: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rebass__["Flex"], {
        mt: 4,
        justifyContent: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1472164806", [__WEBPACK_IMPORTED_MODULE_7__styles_colors_json___default.a["base"]]]]) + " " + "title"
      }, __WEBPACK_IMPORTED_MODULE_6__content_faq__["b" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rebass__["Flex"], {
        flexDirection: "row",
        flexWrap: "wrap",
        mt: 2,
        mb: 5,
        pt: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, cols), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1472164806",
        css: ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;background:".concat(__WEBPACK_IMPORTED_MODULE_7__styles_colors_json___default.a["base"], ";border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;border:1px solid rgba(255,255,255,0.2);font-family:\"Overpass Mono\",monospace;padding:5px 10px 2px 10px;box-sizing:content-box;margin-left:auto;margin-right:auto;height:40px;font-family:\"Overpass Mono\",monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FVyxBQUdvQyxxQkFDSSx5QkFDZSx3Q0FDZSxvREFDQyxxREFDZCx1Q0FDSCxzQ0FDYiwwQkFDSCx1QkFDTixpQkFDQyxrQkFDTixZQUMyQixzQ0FDekMiLCJmaWxlIjoiY29tcG9uZW50cy9mYXEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOC9jb2RlL2hhY2tyaWNlL2hhY2tyaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29sbGFwc2UsIHsgUGFuZWwgfSBmcm9tIFwicmMtY29sbGFwc2VcIjtcbmltcG9ydCBkZWZhdWx0Q3NzIGZyb20gXCJyYy1jb2xsYXBzZS9hc3NldHMvaW5kZXguY3NzXCI7XG5pbXBvcnQgY3VzdG9tQ3NzIGZyb20gXCIuLi9zdHlsZXMvY29sbGFwc2UuY3NzXCI7XG5pbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyB0aXRsZSwgcXVlc3Rpb25zIH0gZnJvbSBcIi4uL2NvbnRlbnQvZmFxXCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvY29sb3JzLmpzb25cIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjY29yZGlvbjogdHJ1ZSxcbiAgICBhY3RpdmVLZXk6IG51bGwsXG4gICAgcXVlc3Rpb25zOiBxdWVzdGlvbnNcbiAgfTtcblxuICBvbkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVLZXlcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgc2hpZnQgPSBxdWVzdGlvbnMubGVuZ3RoIC8gMztcblxuICAgIGxldCBjb2xzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkgKz0gc2hpZnQpIHtcbiAgICAgIGNvbHMucHVzaChcbiAgICAgICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHdpZHRoPXtbMSwgMSAvIDIsIDEgLyAzXX0+XG4gICAgICAgICAge3F1ZXN0aW9ucy5zbGljZShpLCBpICsgc2hpZnQpLm1hcCgoeyBrZXksIHF1ZXN0aW9uLCBhbnN3ZXIgfSkgPT4gKFxuICAgICAgICAgICAgPENvbGxhcHNlXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBhY2NvcmRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgYWN0aXZlS2V5PXtzdGF0ZS5hY3RpdmVLZXl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcUNhcmRcIlxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIGhlYWRlcj17cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgaGVhZGVyQ2xhc3M9XCJmYXFDYXJkVGl0bGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+e2Fuc3dlcn08L3A+XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2RlZmF1bHRDc3N9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgIHtjdXN0b21Dc3N9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVsZW1lbnQgbmFtZT1cImZhcVwiPlxuICAgICAgICA8RmxleCBtdD17NH0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwicm93XCIgZmxleFdyYXA9XCJ3cmFwXCIgbXQ9ezJ9IG1iPXs1fSBwdD17Mn0+XG4gICAgICAgICAge2NvbHN9XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yc1tcImJhc2VcIl19O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMnB4IDEwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0VsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/faq.js */"),
        dynamic: [__WEBPACK_IMPORTED_MODULE_7__styles_colors_json___default.a["base"]]
      }));
    }
  }]);

  return Questions;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/head.js";




var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }));
};

Head.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  url: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  ogImage: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
};
Head.defaultProps = {
  title: "",
  description: "",
  url: "",
  ogImage: ""
};
/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./components/intro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_intro__ = __webpack_require__("./content/intro.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_colors_json__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/intro.js";



var ScrollingLink = __WEBPACK_IMPORTED_MODULE_2_react_scroll__["Link"];





var Intro = function Intro() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Box"], {
    px: 3,
    pt: 3,
    pb: 4,
    bg: __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["base"],
    color: __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Box"], {
    width: "auto",
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "introText"
  }, __WEBPACK_IMPORTED_MODULE_5__content_intro__["c" /* intro */]), __WEBPACK_IMPORTED_MODULE_5__content_intro__["a" /* bullets */].map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        button = _ref.button,
        note = _ref.note,
        icon = _ref.icon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "introItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "icon"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "styledlink"
    }, button), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "note"
    }, note));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Flex"], {
    flexWrap: "wrap",
    mx: -2,
    pt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_5__content_intro__["b" /* cards */].map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        to = _ref2.to,
        title = _ref2.title,
        text = _ref2.text,
        icon = _ref2.icon;
    return href != undefined ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }, text)))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ScrollingLink, {
      to: to,
      smooth: true,
      duration: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["845038122", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }, text))));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "845038122",
    css: ".introText{font-family:\"Overpass Mono\";font-size:1.5em;font-weight:700;text-transform:uppercase;}.introItem{margin-bottom:10px;}a.styledlink{color:#fff;-webkit-text-decoration:none;text-decoration:none;background:rgba(255,255,255,0.1);-webkit-transition:background 0.3s ease-in-out,color 0.3s ease-in-out;transition:background 0.3s ease-in-out,color 0.3s ease-in-out;padding:3px 5px;margin:3px;text-transform:uppercase;font-size:0.85em;font-weight:500;}a.styledlink:hover{color:#6164b2;background:rgba(255,255,255,1);}.icon{padding-right:5px;}.note{text-transform:uppercase;font-size:0.8em;font-weight:300;font-family:\"Overpass Mono\";}.spacer{margin-right:5px;}.card{border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], ";color:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}.cardTitle{text-transform:uppercase;}.card:hover{background:rgba(255,255,255,0.1);cursor:pointer;}.card h3{margin:0;font-size:18px;}.card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}@media (max-width:575px){.note{display:block;margin-top:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0R1QixBQUdxQyxBQU9ULEFBSVIsQUFZRyxBQUtJLEFBSU8sQUFPUixBQUk2QixBQVlyQixBQUlXLEFBSzNCLEFBS0EsQUFRTyxTQVpELEFBS0UsRUExREksR0FZYSxBQXNEakIsR0F0Q25CLENBWEEsQ0FyQkEsS0EwREEsQ0FqQ2tCLEFBdUJsQixDQWVpQixFQXRFQyxDQThFaEIsSUFuQmUsUUExQkMsQUFzQ0EsR0F0RUEsQ0F1QmxCLENBbUJxQyxFQWlCckMsU0ExQjhCLEFBc0M5QixHQXRFMkIsQ0FVVyxvQkFnQ0csSUF6Q3pDLEFBZ0NBLFNBdEJpRSx5QkFnQ25ELFlBQ2dCLDRCQUNMLHVCQUNQLGdCQUNLLDRCQW5DTCxnQkFDTCxNQW1DMkQsS0FsQzdDLHlCQUNSLGlCQUNELGdCQUNsQixtRkFnQ0EiLCJmaWxlIjoiY29tcG9uZW50cy9pbnRyby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE4L2NvZGUvaGFja3JpY2UvaGFja3JpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNjcm9sbCBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5sZXQgU2Nyb2xsaW5nTGluayA9IFNjcm9sbC5MaW5rO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIENhcmQsIEZsZXgsIEltYWdlLCB0aGVtZSB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IGludHJvLCBidWxsZXRzLCBjYXJkcyB9IGZyb20gXCIuLi9jb250ZW50L2ludHJvXCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvY29sb3JzLmpzb25cIjtcblxuY29uc3QgSW50cm8gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEJveCBweD17M30gcHQ9ezN9IHBiPXs0fSBiZz17Y29sb3JzW1wiYmFzZVwiXX0gY29sb3I9e2NvbG9yc1tcImdyYXlcIl1bMV19PlxuICAgICAgPEJveCB3aWR0aD1cImF1dG9cIiBweD17Mn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbnRyb1RleHRcIj57aW50cm99PC9oMT5cbiAgICAgICAge2J1bGxldHMubWFwKCh7IGtleSwgaHJlZiwgYnV0dG9uLCBub3RlLCBpY29uIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJpbnRyb0l0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gLz5cbiAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT1cInN0eWxlZGxpbmtcIj5cbiAgICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RlXCI+e25vdGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCIgbXg9ey0yfSBwdD17Mn0+XG4gICAgICAgIHtjYXJkcy5tYXAoXG4gICAgICAgICAgKHsga2V5LCBocmVmLCB0bywgdGl0bGUsIHRleHQsIGljb24gfSkgPT5cbiAgICAgICAgICAgIGhyZWYgIT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICA8Qm94IGtleT17a2V5fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gM119PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Qm94IGtleT17a2V5fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gM119PlxuICAgICAgICAgICAgICAgIDxTY3JvbGxpbmdMaW5rIHRvPXt0b30gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkVGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbGluZ0xpbms+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICAuaW50cm9JdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgYS5zdHlsZWRsaW5rIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQsIGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgYS5zdHlsZWRsaW5rOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM2MTY0YjI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICAubm90ZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIjtcbiAgICAgIH1cblxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzW1wiZ3JheVwiXVsxXX07XG4gICAgICAgIGNvbG9yOiAke2NvbG9yc1tcImdyYXlcIl1bMV19O1xuICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuY2FyZFRpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAgIC5ub3RlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm87XG4iXX0= */\n/*@ sourceURL=components/intro.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Intro);

/***/ }),

/***/ "./components/judging.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_judging__ = __webpack_require__("./content/judging.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/judging.js";







var Judging = function Judging() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_scroll__["Element"], {
    name: "judging",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"], {
    bg: __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1],
    color: __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"],
    flexWrap: "wrap",
    px: 5,
    py: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2259400939", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_4__content_judging__["b" /* title */]), __WEBPACK_IMPORTED_MODULE_4__content_judging__["a" /* criteria */].map(function (_ref) {
    var key = _ref.key,
        subtitle = _ref.subtitle,
        description = _ref.description,
        icon = _ref.icon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
      width: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2259400939", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "subtitle"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      height: 20,
      style: {
        marginRight: "0.5em"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2259400939", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]])
    }), subtitle), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2259400939", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]]]) + " " + "description"
    }, description));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2259400939",
    css: ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";background:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"], ";padding:2px 10px;margin:unset;margin-bottom:1em;font-family:\"Overpass Mono\",monospace;}.subtitle.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",monospace;text-transform:uppercase;margin-bottom:0px;}.description.__jsx-style-dynamic-selector{margin-top:0.5em;font-size:1em;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvanVkZ2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHa0MsQUFXa0IsQUFNdEIsaUJBQ0gsSUFqQlcsVUFrQlQsT0FQUyxRQVZVLENBa0JyQyxnQkFQb0Isa0JBVnNCLEFBVzFDLHdDQVZtQixpQkFDSixhQUNLLGtCQUNxQixzQ0FDekMiLCJmaWxlIjoiY29tcG9uZW50cy9qdWRnaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTgvY29kZS9oYWNrcmljZS9oYWNrcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcbmltcG9ydCB7IHRpdGxlLCBjcml0ZXJpYSB9IGZyb20gXCIuLi9jb250ZW50L2p1ZGdpbmdcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnMuanNvblwiO1xuXG5jb25zdCBKdWRnaW5nID0gKCkgPT4gKFxuICA8RWxlbWVudCBuYW1lPVwianVkZ2luZ1wiPlxuICAgIDxGbGV4XG4gICAgICBiZz17Y29sb3JzW1wiZ3JheVwiXVsxXX1cbiAgICAgIGNvbG9yPXtjb2xvcnNbXCJiYXNlXCJdfVxuICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgIHB4PXs1fVxuICAgICAgcHk9ezV9XG4gICAgPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICB7Y3JpdGVyaWEubWFwKCh7IGtleSwgc3VidGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uIH0pID0+IChcbiAgICAgICAgPEJveCB3aWR0aD17MX0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gaGVpZ2h0PXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41ZW1cIiB9fSAvPlxuICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yc1tcIndoaXRlXCJdfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzW1wiYmFzZVwiXX07XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvRmxleD5cbiAgPC9FbGVtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSnVkZ2luZztcbiJdfQ== */\n/*@ sourceURL=components/judging.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"]]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Judging);

/***/ }),

/***/ "./components/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/map.js";




var Map = function Map() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
    name: "maps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Flex"], {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: 1,
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Image"], {
    width: 1,
    px: 2,
    py: 2,
    src: "../static/map.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.rice.edu/maps/Rice-University-Color-Campus-Map.pdf",
    style: {
      margin: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Looking for a map of Rice University? Click here \u2192")));
};

/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),

/***/ "./components/nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rebass__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/nav.js";




var links = [{
  href: "https://facebook.com/hackrice",
  label: "Facebook",
  icon: "https://icon.now.sh/facebook/ffffff"
}, {
  href: "https://medium.com/@hackrice",
  label: "Medium",
  icon: "https://icon.now.sh/medium/ffffff"
}, {
  href: "https://twitter.com/hackingrice",
  label: "Twitter",
  icon: "https://icon.now.sh/twitter/ffffff"
}, {
  href: "mailto:officialhackrice@gmail.com",
  label: "Email",
  icon: "https://icon.now.sh/email/ffffff"
}, {
  href: "https://hackrice8.devpost.com/",
  label: "Devpost",
  icon: "https://icon.now.sh/build/ffffff"
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
    src: "../static/hr8.svg",
    css: {
      height: "175px !important",
      paddingRight: "20px"
    },
    ml: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
    src: "../static/mlh.svg",
    css: {
      height: "105px !important",
      paddingRight: "20px"
    },
    ml: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label,
        icon = _ref.icon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      className: "jsx-2311312394"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      className: "jsx-2311312394"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      className: "jsx-2311312394" + " " + "icon"
    }))));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2311312394",
    css: "body{background-color:#6164b2;font-family:\"Open Sans\";}nav.jsx-2311312394{text-align:center;}ul.jsx-2311312394{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0px;}nav.jsx-2311312394>ul.jsx-2311312394{padding:6px;}li.jsx-2311312394{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:6px;}.icon.jsx-2311312394{padding:2px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFHa0MsQUFLUCxBQUlMLEFBT0QsQUFJQyxBQU1HLFlBVGxCLElBVUEsRUFyQkEsT0FMMEIsd0JBQzFCLHlCQVFnQyxBQVd2QixpQ0FDSyxZQUNkLHNFQVpxQiw2RkFDRixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOC9jb2RlL2hhY2tyaWNlL2hhY2tyaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInJlYmFzc1wiO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb20vaGFja3JpY2VcIixcbiAgICBsYWJlbDogXCJGYWNlYm9va1wiLFxuICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC9mYWNlYm9vay9mZmZmZmZcIlxuICB9LFxuICB7XG4gICAgaHJlZjogXCJodHRwczovL21lZGl1bS5jb20vQGhhY2tyaWNlXCIsXG4gICAgbGFiZWw6IFwiTWVkaXVtXCIsXG4gICAgaWNvbjogXCJodHRwczovL2ljb24ubm93LnNoL21lZGl1bS9mZmZmZmZcIlxuICB9LFxuICB7XG4gICAgaHJlZjogXCJodHRwczovL3R3aXR0ZXIuY29tL2hhY2tpbmdyaWNlXCIsXG4gICAgbGFiZWw6IFwiVHdpdHRlclwiLFxuICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC90d2l0dGVyL2ZmZmZmZlwiXG4gIH0sXG4gIHtcbiAgICBocmVmOiBcIm1haWx0bzpvZmZpY2lhbGhhY2tyaWNlQGdtYWlsLmNvbVwiLFxuICAgIGxhYmVsOiBgRW1haWxgLFxuICAgIGljb246IFwiaHR0cHM6Ly9pY29uLm5vdy5zaC9lbWFpbC9mZmZmZmZcIlxuICB9LFxuICB7XG4gICAgaHJlZjogXCJodHRwczovL2hhY2tyaWNlOC5kZXZwb3N0LmNvbS9cIixcbiAgICBsYWJlbDogXCJEZXZwb3N0XCIsXG4gICAgaWNvbjogXCJodHRwczovL2ljb24ubm93LnNoL2J1aWxkL2ZmZmZmZlwiXG4gIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWA7XG4gIHJldHVybiBsaW5rO1xufSk7XG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8dWw+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9ocjguc3ZnXCJcbiAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTc1cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbWw9ezEwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHVsPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiLi4vc3RhdGljL21saC5zdmdcIlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwNXB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIG1sPXsxMH1cbiAgICAgICAgLz5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsLCBpY29uIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2NGIyO1xuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgIH1cblxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICB9XG5cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=components/nav.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./components/sponsors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_sponsors__ = __webpack_require__("./content/sponsors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_styled_components__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/sponsors.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  &::before {\n    white-space: normal;\n    width: 350px;\n    padding: 1.5em;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 400;\n    background-color: rgba(255, 255, 255, 1);\n    color: ", ";\n  }\n\n  &::after {\n    border-top-color: rgba(255, 255, 255, 1) !important;\n  }\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var CustomTooltip = __WEBPACK_IMPORTED_MODULE_6_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_rebass__["Tooltip"])(_templateObject, __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["base"]);

var Sponsors = function Sponsors() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    flexWrap: "wrap",
    width: 1,
    mb: 4,
    css: {
      background: "rgba(97, 100, 178, 0.2)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 1,
    mx: 5,
    my: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2533503331", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["white"]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_5__content_sponsors__["b" /* title */]), __WEBPACK_IMPORTED_MODULE_5__content_sponsors__["a" /* files */].map(function (_ref) {
    var name = _ref.name,
        height = _ref.height,
        link = _ref.link,
        blurb = _ref.blurb;
    return blurb === undefined ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2533503331", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["white"]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
      style: {
        margin: "2em 1em",
        height: "".concat(height)
      },
      src: "../static/sponsors/".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTooltip, {
      text: blurb,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2533503331", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["white"]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
      style: {
        margin: "2em 1em",
        height: "".concat(height)
      },
      src: "../static/sponsors/".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    })));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2533503331",
    css: ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["base"], ";background:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["white"], ";padding:2px 10px;margin:unset;height:40px;font-family:\"Overpass Mono\",monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3BvbnNvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRPLEFBR2dDLHFCQUNJLHlCQUNVLG1DQUNLLHdDQUN2QixpQkFDSixhQUNELFlBQzJCLHNDQUN6QyIsImZpbGUiOiJjb21wb25lbnRzL3Nwb25zb3JzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTgvY29kZS9oYWNrcmljZS9oYWNrcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSwgVG9vbHRpcCwgVGV4dCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnMuanNvblwiO1xuaW1wb3J0IHsgdGl0bGUsIGZpbGVzIH0gZnJvbSBcIi4uL2NvbnRlbnQvc3BvbnNvcnNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEN1c3RvbVRvb2x0aXAgPSBzdHlsZWQoVG9vbHRpcClgXG4gICY6OmJlZm9yZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGNvbG9yOiAke2NvbG9yc1tcImJhc2VcIl19O1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgU3BvbnNvcnMgPSAoKSA9PiAoXG4gIDxGbGV4XG4gICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICB3aWR0aD17MX1cbiAgICBtYj17NH1cbiAgICBjc3M9e3sgYmFja2dyb3VuZDogXCJyZ2JhKDk3LCAxMDAsIDE3OCwgMC4yKVwiIH19XG4gID5cbiAgICA8RmxleFxuICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICB3aWR0aD17MX1cbiAgICAgIG14PXs1fVxuICAgICAgbXk9ezN9XG4gICAgPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICB7ZmlsZXMubWFwKFxuICAgICAgICAoeyBuYW1lLCBoZWlnaHQsIGxpbmssIGJsdXJiIH0pID0+XG4gICAgICAgICAgYmx1cmIgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDFlbVwiLCBoZWlnaHQ6IGAke2hlaWdodH1gIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgLi4vc3RhdGljL3Nwb25zb3JzLyR7bmFtZX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q3VzdG9tVG9vbHRpcCB0ZXh0PXtibHVyYn0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAxZW1cIiwgaGVpZ2h0OiBgJHtoZWlnaHR9YCB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtgLi4vc3RhdGljL3Nwb25zb3JzLyR7bmFtZX1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ3VzdG9tVG9vbHRpcD5cbiAgICAgICAgICApXG4gICAgICApfVxuICAgIDwvRmxleD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnNbXCJiYXNlXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yc1tcIndoaXRlXCJdfTtcbiAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgICBtYXJnaW46IHVuc2V0O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0ZsZXg+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTcG9uc29ycztcbiJdfQ== */\n/*@ sourceURL=components/sponsors.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["base"], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["white"]]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Sponsors);

/***/ }),

/***/ "./components/tracks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_tracks__ = __webpack_require__("./content/tracks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_scroll__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/components/tracks.js";








var Tracks = function Tracks() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_scroll__["Element"], {
    name: "tracks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
    px: 3,
    pt: 4,
    pb: 4,
    bg: __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["base"],
    color: __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
    mx: 1,
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_4__content_tracks__["b" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    flexWrap: "wrap",
    mx: -2,
    pt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_4__content_tracks__["a" /* cards */].map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        title = _ref.title,
        type = _ref.type,
        text = _ref.text,
        icon = _ref.icon;
    return href !== undefined ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
      key: key,
      width: [1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "cardTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "detail"
    }, type)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }, text), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "link"
    }, "LEARN MORE \u2192")))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
      key: key,
      width: [1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "cardTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "detail"
    }, type)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4229634349", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]])
    }, text)));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4229634349",
    css: ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";border:1px solid rgba(255,255,255,0.2);padding:2px 10px;margin:unset;font-family:\"Overpass Mono\",monospace;box-sizing:content-box;}.card.__jsx-style-dynamic-selector{border:1px solid rgba(255,255,255,0.2);color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}.cardTitle.__jsx-style-dynamic-selector{text-transform:uppercase;}.card.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);border:1px solid white;cursor:pointer;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;font-size:18px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:12px 0 0;font-size:14px;font-family:\"Open Sans\",sans-serif;line-height:1.5em;font-weight:300;text-transform:none;}.card.__jsx-style-dynamic-selector p.link.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",sans-serif;line-height:1.5em;font-weight:300;text-transform:none;}.detail.__jsx-style-dynamic-selector{float:right;border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";padding:4px 5px 2px 5px;font-size:0.7em;box-sizing:content-box;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJhY2tzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHZ0MsQUFXcUIsQUFZakIsQUFJVyxBQU0zQixBQUtBLEFBVStCLEFBTzVCLFNBckJHLEFBS0UsR0FpQjZCLFNBdkRyQixHQWtDM0IsQ0FYQSxDQWdCaUIsT0FaUSxNQWhCWSxBQXFDakIsRUFSa0IsS0F2Q0QsVUEyQnBCLENBcUJDLENBT21CLGFBM0JyQyxFQXFCc0IsQ0F0Q21CLEVBNkJyQixLQXZDd0IsWUFpRDVDLEFBTTBCLENBZlIsZ0JBQ0ksRUE5QlIsS0E2Q0ksR0F2REMsSUFXVyxNQThCOUIsR0FleUIsSUF2RFYsYUFDMEIsRUFVaEIsSUE2Q0UsbUJBNUNULE1BNkNsQixPQXZEeUIsR0FXRixvQkFWdkIsOEJBV3dFLGtKQUN4RSIsImZpbGUiOiJjb21wb25lbnRzL3RyYWNrcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE4L2NvZGUvaGFja3JpY2UvaGFja3JpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBDYXJkLCBGbGV4IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgdGl0bGUsIGNhcmRzIH0gZnJvbSBcIi4uL2NvbnRlbnQvdHJhY2tzXCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvY29sb3JzLmpzb25cIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmNvbnN0IFRyYWNrcyA9ICgpID0+IChcbiAgPEVsZW1lbnQgbmFtZT1cInRyYWNrc1wiPlxuICAgIDxCb3ggcHg9ezN9IHB0PXs0fSBwYj17NH0gYmc9e2NvbG9yc1tcImJhc2VcIl19IGNvbG9yPXtjb2xvcnNbXCJncmF5XCJdWzFdfT5cbiAgICAgIDxCb3ggbXg9ezF9IG10PXs0fT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICA8L0JveD5cbiAgICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiIG14PXstMn0gcHQ9ezJ9PlxuICAgICAgICB7Y2FyZHMubWFwKFxuICAgICAgICAgICh7IGtleSwgaHJlZiwgdGl0bGUsIHR5cGUsIHRleHQsIGljb24gfSkgPT5cbiAgICAgICAgICAgIGhyZWYgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2tleX0gd2lkdGg9e1sxXX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZFRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXRhaWxcIj57dHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPkxFQVJOIE1PUkUg4oaSPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtrZXl9IHdpZHRoPXtbMV19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZFRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsXCI+e3R5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJsaW5rXCI+TEVBUk4gTU9SRSDihpI8L3A+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvRmxleD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yc1tcIndoaXRlXCJdfTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzW1wiZ3JheVwiXVsxXX07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDE4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkVGl0bGUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAubGluayB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzW1wid2hpdGVcIl19O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yc1tcIndoaXRlXCJdfTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggNXB4IDJweCA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Cb3g+XG4gIDwvRWxlbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrcztcbiJdfQ== */\n/*@ sourceURL=components/tracks.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Tracks);

/***/ }),

/***/ "./content/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return p1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return p2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return p3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return link1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return link2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return button1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return button2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/content/about.js";

var title = "What is HackRice?";
var p1 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "HackRice is a hackathon held bi-annually at Rice University. It brings together over", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, "four hundred of the brightest minds"), " ", "to develop & showcase their", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
}, "creative and entrepreneurial talents."));
var p2 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Participants join into", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
}, "teams of up to 4"), " to work on a project \u2014 typically software, and sometimes hardware \u2014 in an environment", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}, "designed for collaboration."));
var p3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Teams showcase projects after", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
}, "36 hours"), " of hacking. This is an excellent opportunity for students to", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  }
}, "build a network"), " of creators, receive ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  }
}, "internship & job offers"), " ", "from world-class sponsors, and", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  style: {
    fontWeight: "600"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  }
}, "learn modern tools & systems."));
var link1 = "https://hackrice.typeform.com/to/s2Mllk";
var link2 = "../static/sponsors.pdf";
var button1 = "I want to apply.";
var button2 = "I want to become a sponsor.";

/***/ }),

/***/ "./content/calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dayOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dayTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dayThree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sunday; });
var title = "Schedule";
var dayOne = "Friday, 9/14";
var dayTwo = "Saturday, 9/15";
var dayThree = "Sunday, 9/16";
var friday = [{
  time: "4:30 PM",
  title: "Early Registration",
  detail: "Registration begins for Rice students."
}, {
  time: "5–6:30 PM",
  title: "Main Registration",
  detail: "Come to the Grand Hall to check into the event."
}, {
  time: "5–7:00 PM",
  title: "Sponsor Setup",
  detail: "Sponsors will arrive, register & set up their tables."
}, {
  time: "7 PM",
  title: "Opening Ceremonies",
  detail: "The event will formally begin with a bit about rules & guidelines, and a word from sponsors."
}, {
  time: "7:30 PM",
  title: "Dinner & Form Teams",
  detail: "Enjoy food from Thai Cottage and meet other hackers to form teams (if you haven't already)."
}, {
  time: "8 PM",
  title: "Hacking Begins!",
  detail: "Start building your project!."
}, {
  time: "8:30 PM",
  title: "First-Timers Track Workshop",
  detail: "Come to Miner Lounge to walk through the first workshop for the First-Timers track."
}, {
  time: "9-10 PM",
  title: "DELFI",
  detail: "DELFI is the newest cloud-based software platform from Schlumberger which will stretch the boundaries of the oil & gas industry."
}, {
  time: "9-10 PM",
  title: "Intelligent Oilfields",
  detail: "Schlumberger’s next-gen advisory system that enables intelligent production operations by transforming the way we work. Held at Farnsworth Pavilion."
}, {
  time: "10-11 PM",
  title: "Extrahop Workshop",
  detail: "Web App Development, led by Matt Schurr. Held at Farnsworth Pavilion."
}, {
  time: "11 PM",
  title: "Late Night...",
  detail: "Tiff's Treats cookies..."
}, {
  time: "11-12 AM",
  title: "JP Morgan Workshop",
  detail: "Details coming soon... Held at Farnsworth Pavilion."
}].map(function (item) {
  item.key = "item-".concat(item.title);
  return item;
});
var saturday = [{
  time: "9 AM",
  title: "Breakfast",
  detail: "Bagels from Einstein Bros!"
}, {
  time: "10 AM",
  title: "Oil Rig VR Demo",
  detail: "Schlumberger will host a workshop using Virtual Reality headsets. Held at Farnsworth Pavilion."
}, {
  time: "12 PM",
  title: "Lunch",
  detail: "Potbelly Sandwiches for lunch."
}, {
  time: "1-2 PM",
  title: "Capital One Workshop",
  detail: "Build a Straw Poll using the Angular CLI and Firebase! Held at Farnsworth Pavilion."
}, {
  time: "4 PM",
  title: "MLH Cupstacking Mini-Event",
  detail: "Take a break in Farnsworth Pavilion from hacking with our Cup Stacking Mini-Event!"
}, {
  time: "6 PM",
  title: "Dinner",
  detail: "Tacos-a-Go-Go for our happy hackers!"
}].map(function (item) {
  item.key = "item-".concat(item.detail);
  return item;
});
var sunday = [{
  time: "8:30 AM",
  title: "Judges Arrive",
  detail: "Judges will have arrived, prepared to evaluate hackers & projects."
}, {
  time: "8:30 AM",
  title: "Hacking Ends!",
  detail: "Submissions close on DevPost."
}, {
  time: "9:30 AM",
  title: "Judging Begins",
  detail: "Judging commences at the tables in the Grand Hall."
}, {
  time: "11 AM",
  title: "Brunch",
  detail: "Kolaches from Kolache Factory..."
}, {
  time: "1 PM",
  title: "Closing Ceremony",
  detail: "Winners will be announced and prizes awarded"
}, {
  time: "2 PM",
  title: "Finale!",
  detail: "Hope you had a wonderful event, and we look forward to HackRice 9 :)"
}].map(function (item) {
  item.key = "item-".concat(item.detail);
  return item;
});

/***/ }),

/***/ "./content/faq.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/content/faq.js";

var title = "QUESTIONS & ANSWERS";
var questions = [{
  question: "How long is HackRice?",
  answer: "The event is held from Friday, September 14th to Sunday, September 16th. Students hack for 36 hours. View the schedule for more info."
}, {
  question: "How many hackers attend HackRice? Where are they from?",
  answer: "We expect around 400 hackers from schools around the country, including (but not limited to) UT Austin, Berkeley, USC, University of Waterloo, Georgia Tech, University of Washington, and many more."
}, {
  question: "How many hackers per team are permitted?",
  answer: "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
}, {
  question: "Is there a HackRice Facebook page?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Yes there is! Click", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "https://www.facebook.com/hackrice/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "here"), " ", "to access it!")
}, {
  question: "How do I submit my project? Is there a Devpost?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "You can submit your project on", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "https://hackrice8.devpost.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "this Devpost link"))
}, {
  question: "Who is eligible to participate in HackRice?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "http://static.mlh.io/docs/mlh-code-of-conduct.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "MLH Code of Conduct."))
}, {
  question: "Will my travel be reimbursed?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Yes! Hackers who ride in team cars or take buses or trains to HackRice will receive reimbursement for their travel costs up to $100. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), " Hackers who fly in will recieve reimbursement on a first-come, first-served basis. Initially, up to $200 will be provided. As funds are exhausted, up to $100 reimbursement will be provided. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), " ", "Tickets must be standard economy or lower.")
}, {
  question: "Will international travel be reimbursed?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "We cannot reimburse hackers flying internationally any more than is listed above, and international hackers should contact us at", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "mailto:officialhackrice@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "officialhackrice@gmail.com"))
}, {
  question: "How do I file for a reimbursement?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "To recieve your reimbursement, please fill out the reimbursement section of the admission form ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, "within one week"), ". There will be a reimbursment booth at the event where you will be able to finalize your reimbursment details!")
}, {
  question: "What prizes can I win?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "Achievement"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "Prize")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, "Grand Prize"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, "Juiced Electric Skateboard")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, "Second Place"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, "Nintendo Switch")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, "Third Place"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, "Fancy Coffee Machine")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, "New Hackers Track Winner"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, "Sunrise Alarm Clock")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, "Data Science Track Winner"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, "Amazon Echo Plus")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, "Design Track Winner"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, "Polaroid Cube"))))
}, {
  question: "Will there be free food?",
  answer: "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."
}, {
  question: "What are the acceptance criteria?",
  answer: "Rice students and alumni are guaranteed acceptance. For Non-Rice students, we ask for their previous hackathon and coding experiences, so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!"
}, {
  question: "What do I need to bring?",
  answer: "Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
}, {
  question: "What if I'm not very experienced?",
  answer: "We do our best to point people in the right direction and use tools and languages with a low barrier to entry. There will also be upperclassmen participating in the hackathon who can guide you in the right direction. We will also be having workshops the week before the hackathon!"
}, {
  question: "Can Rice alumni attend?",
  answer: "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel."
}, {
  question: "What if I don't have a team before the event?",
  answer: "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."
}, {
  question: "Do I need to stay the whole time?",
  answer: "Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might need fresh air or to tend to other commitments. You may leave and go as you deem necessary, though we prefer you to stay!"
}].map(function (item) {
  item.key = "faq-".concat(item.question);
  return item;
});

/***/ }),

/***/ "./content/intro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bullets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cards; });
var intro = "HackRice 8: the premier hackathon of the south.";
var bullets = [{
  icon: "https://icon.now.sh/compose/ffffff",
  button: "view opening slideshow",
  href: "../static/files/openingceremony.pdf",
  note: "view the slides from the opening ceremony!"
}, {
  icon: "https://icon.now.sh/calendar/ffffff",
  button: "september 14–16, 2018",
  href: "https://calendar.google.com/event?action=TEMPLATE&tmeid=MnN1MjB1bWdiMGt2cWFtbWl1dXE1aWt0Z3AgYXZzN0ByaWNlLmVkdQ&tmsrc=achal%40rice.edu",
  note: "36 hours of non-stop building"
}, {
  icon: "https://icon.now.sh/wb_sunny/ffffff",
  button: "held @ rice memorial center",
  href: "https://goo.gl/maps/mnRG8hDRQj52",
  note: "on our majestic campus in houston"
}].map(function (bullet) {
  bullet.key = "bullet-".concat(bullet.button);
  return bullet;
});
var cards = [{
  icon: "https://icon.now.sh/send/ffffff",
  title: "Submissions",
  href: "https://hackrice8.devpost.com/",
  text: "Submit your project through the HackRice Devpost →"
}, {
  icon: "https://icon.now.sh/calendar/ffffff",
  title: "Schedule",
  to: "calendar",
  text: "Find out when hacking begins and ends, and more →"
}, {
  icon: "https://icon.now.sh/question_answer/ffffff",
  title: "FAQs",
  to: "faq",
  text: "First timer? Most of your inquiries are answered →"
}, {
  icon: "https://icon.now.sh/bitcoin/ffffff",
  title: "Sponsors",
  href: "../static/sponsors.pdf",
  text: "Want to recruit & mentor our hackers? View tiers →"
}, {
  icon: "https://icon.now.sh/format_shapes/ffffff",
  title: "Judging",
  to: "judging",
  text: "How will your project be evaluated? Read on →"
}, {
  icon: "https://icon.now.sh/done_all/ffffff",
  title: "Tracks & Challenges",
  to: "tracks",
  text: "Complete a track or compete to win a sponsor challenge →"
}, {
  icon: "https://icon.now.sh/phone/ffffff",
  title: "Contact",
  href: "mailto:achal@rice.edu",
  text: "Have a question? Reach out via email →"
}, {
  icon: "https://icon.now.sh/casino/ffffff",
  title: "Prizes",
  to: "faq",
  text: "What can you win at HackRice? Worth a look →"
}, {
  icon: "https://icon.now.sh/map/ffffff",
  title: "Maps",
  to: "maps",
  text: "Need help finding your way around Rice? →"
}, {
  icon: "https://icon.now.sh/slack/ffffff",
  title: "Slack",
  href: "https://hackrice8.slack.com",
  text: "Join our Slack to chat with hackers & receive updates →"
}, {
  icon: "https://icon.now.sh/accessibility/ffffff",
  title: "Find a Team",
  href: "https://crowdforge.io/hackathons/hackrice",
  text: "Looking for a team to hack with? Click here →"
}, {
  icon: "https://icon.now.sh/help_outline/ffffff",
  title: "Need help?",
  href: "https://m.me/hackrice",
  text: "If you're having an urgent problem, message us! →"
}].map(function (card) {
  card.key = "card-".concat(card.title);
  return card;
});

/***/ }),

/***/ "./content/judging.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return criteria; });
var title = "Judging Criteria";
var criteria = [{
  icon: "https://icon.now.sh/settings/6164B2",
  subtitle: "Technical Difficulty",
  description: "Solutions should address technically challenging problems while falling anywhere between being beautifully simple to implementing complex, cutting-edge technologies."
}, {
  icon: "https://icon.now.sh/calendar/6164B2",
  subtitle: "Creativity",
  description: "Solutions should be original and either (1) define a new method for solving an unaddressed problem, or (2) present a new approach to a proven solution for a known problem. Solutions should demonstrate that intentional and appropriate design decisions have been made."
}, {
  icon: "https://icon.now.sh/format_paint/6164B2",
  subtitle: "Design & Polish",
  description: "We are looking for aesthetically and functionally pleasing projects with an intuitive and polished user experience."
}, {
  icon: "https://icon.now.sh/tag_faces/6164B2",
  subtitle: "Practicality & Usefulness",
  description: "Projects will be evaluated based on their utility and applicability to a set of problems experienced by people in the real world. Emphasis is placed on ensuring solutions can be extrapolated meaningfully outside of the demonstrated use case."
}].map(function (item) {
  item.key = "item-".concat(item.subtitle);
  return item;
});

/***/ }),

/***/ "./content/sponsors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return files; });
var title = "Sponsored by";
var files = [{
  name: "schlumberger.svg",
  height: "30px",
  link: "https://www.slb.com/",
  blurb: "Schlumberger is the world's leading provider of technology for reservoir \n characterization, drilling, production, and processing to the oil and gas industry. Working in more than 85 countries and employing approximately 100,000 people who represent over 140 nationalities, Schlumberger supplies the industry's most comprehensive range of products and services, from exploration through production and integrated pore-to-pipeline solutions for hydrocarbon recovery that optimize reservoir performance."
}, {
  name: "jpmorgan.svg",
  height: "20px",
  link: "https://www.jpmorgan.com/country/US/en/jpmorgan",
  blurb: "J.P. Morgan is a leader in financial services, offering solutions to clients in more than 100 countries with one of the most comprehensive global product platforms available. We have been helping our clients to do business and manage their wealth for more than 200 years. Our business has been built upon our core principle of putting our clients’ interests first. J.P. Morgan is a leader in asset management, investment banking, private banking, treasury and securities services, and commercial banking. Our broad global platform and strength enable us to create long-lasting value for clients."
}, {
  name: "facebook.svg",
  height: "30px",
  link: "https://www.facebook.com/",
  blurb: "People are at the heart of every connection we build. We design products and deliver services that bring the world closer together — one connection at a time."
}, {
  name: "bp.svg",
  height: "40px",
  link: "https://www.bp.com/",
  blurb: "Heat. Light. Power. Meeting society’s growing demand for energy is an immense responsibility. And at BP, it’s a responsibility we all share. We find, develop and produce energy resources every day – energy that’s behind the products we all rely on. Doing all of that sustainably, securely and at a reasonable cost is our challenge. It’s one we rise to as a team. A team made of diverse people with different perspectives who work together to make change happen. Scientific breakthroughs, engineering firsts, process improvements – everything we achieve is down to the drive, ambition and collaboration of our people. And you could be one of them."
}, {
  name: "twosigma.svg",
  height: "30px",
  link: "https://www.twosigma.com/"
}, {
  name: "palantir.svg",
  height: "30px",
  link: "https://palantir.com"
}, {
  name: "capital.svg",
  height: "35px",
  link: "https://www.capitalone.com/"
}, {
  name: "chevron.svg",
  height: "40px",
  link: "https://www.chevron.com/"
}, {
  name: "extrahop.svg",
  height: "30px",
  link: "https://www.extrahop.com/"
}, {
  name: "hbk.svg",
  height: "30px",
  link: "https://www.hbk.com"
}, {
  name: "hcss.svg",
  height: "30px",
  link: "https://www.hcss.com/"
}, {
  name: "indeed.svg",
  height: "30px",
  link: "https://www.indeed.com/"
}, {
  name: "ricecs.svg",
  height: "30px",
  link: "https://csweb.rice.edu/"
}, {
  name: "lilie.png",
  height: "50px",
  link: "https://entrepreneurship.rice.edu/lab/"
}, {
  name: "tech.svg",
  height: "30px",
  link: "https://get.tech/"
}, {
  name: "tiffs.svg",
  height: "40px",
  link: "https://www.cookiedelivery.com/"
}, {
  name: "mlh.svg",
  height: "40px",
  link: "https://mlh.io/"
}].map(function (item) {
  item.key = "image-".concat(item.name);
  return item;
});

/***/ }),

/***/ "./content/tracks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/content/tracks.js";

var title = "Tracks & Challenges";
var cards = [{
  icon: "https://icon.now.sh/bubble_chart/ffffff",
  type: "track",
  title: "Build a bot!",
  href: "https://github.com/jpa99/HR8-First-Timers-Track",
  text: "Hackers will create a bot integrated with an existing platform (e.g. Facebook Messenger, Slack, Alexa, Twitter, Reddit, etc.). First-time hackers can follow the provided walkthrough to set up a basic bot, and then extend it to provide additional functionality. Examples include connecting to a DB and storing user information, integrating ML/NLP for contextual rather than rules-based conversation, creating a specific service (e.g. pizza delivery), allowing users to play a game, etc. Judges will evaluate the project on its technical difficulty, effectiveness, creativity, and quality of user experience."
}, {
  icon: "https://icon.now.sh/timeline/ffffff",
  type: "track",
  title: "Make sense of data!",
  href: "https://github.com/abhmul/DataScienceTrack",
  text: "Have you shopped online and found advertisements on Facebook and Google for the same item? Or, say you’re chatting with your best friend and the keyboard suggests to you the exact words that you want to use in your sentence? How does YouTube recommend such great videos?\nData science & machine learning have changed the usability of technology. This track will give you a brief introduction into some basic applications of machine learning and data science along with example prompts to compete in this track."
}, {
  icon: "https://icon.now.sh/border_color/ffffff",
  type: "track",
  title: "(re)Design a beautiful app!",
  href: "https://github.com/jpa99/HR8-Design-Track",
  text: "Accessibility and visual appeal are vital attributes of any app or website’s user interface. While still remaining functional on the back end, many apps and websites on many different platforms have deplorable user interfaces that needs lots of work.  This year’s HackRice “reDesign” track hopes to improve those interfaces.  Using your knowledge of design and graphics, you will be tasked with redesigning the user interface of an app or website used by the public today that you believe needs overhaul"
}, {
  icon: "https://icon.now.sh/chevron/ffffff",
  type: "challenge",
  title: "Chevron",
  href: "../static/files/chevron.xlsx",
  text: "Optimize the work order process in Chevrons complex process facilities (refineries and liquified natural gas production facilities).  The idea is to optimize work order completions by having a system that tracks (1) the orders that are submitted and (2) the workers that are completing them (including any necessary certifications / qualifications) to optimize how they are assigned and completed."
}, {
  icon: "https://icon.now.sh/local_gas_station/ffffff",
  type: "challenge",
  title: "Schlumberger",
  href: "https://github.com/Schlumberger/hackathon/",
  text: "Ask an engineer how to improve an application, and they will likely say, 'give me a way to see more data'. Surveillance engineers may analyze output from a dozen or more sensors in the same visualization.​ Line charts are the default choice for this workflow, but they are cumbersome, especially if the data streams have different scaling and units. And as IIoT becomes pervasive at the wellsite, this problem will only grow.​ Show us how to do it better! Deliver a web application to display/query/analyze time-series data from downhole equipment in innovative ways.​​"
}, {
  icon: "https://icon.now.sh/poll/ffffff",
  type: "challenge",
  title: "HBK",
  text: "The winner of this project will demonstrate the best use of technology for a financially driven problem."
}, {
  icon: "https://icon.now.sh/microsoft/ffffff",
  type: "challenge",
  title: "Microsoft",
  text: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "The winner of this challenge will best use Microsoft Azure in a way that empowers individuals or groups to achieve more. Find free trials and credits ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://azure.microsoft.com/en-us/free/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "here"), ".")
}, {
  icon: "https://icon.now.sh/facebook/ffffff",
  type: "challenge",
  title: "Facebook",
  text: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "Facebook will award a prize to the team that makes the best game using the Facebook Instant Games SDK. The game is expected to run on Messenger. Judges will be looking for engagement, quality, and completeness in the hack. The winning team will be invited to participate in Facebook's Global Hackathon in Menlo Park, CA. For details, see", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://developers.facebook.com/docs/games/instant-games/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Instant Games Documentation"), ". Only the", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://fb.gg/igengines",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "Game Engines listed on this page"), " ", "are compatible with Instant Games.")
}, {
  icon: "https://icon.now.sh/web/ffffff",
  type: "challenge",
  href: "https://docs.google.com/document/d/1yKpxWSMUDDJjBQIiDxlCc3Fta7OwZ9GbHRpQ0fC1y_U/edit?usp=sharing",
  title: ".TECH",
  text: "Feature your cool hackathon project on your free .tech domain name. Make sure to make your full .tech domain your official team name and mention the URL while submitting your project! Click through for more details."
}, {
  icon: "https://icon.now.sh/domain/ffffff",
  type: "challenge",
  href: "http://api.reimaginebanking.com/",
  title: "Capital One",
  text: "The winner of this challenge will best answer the following question: how will you reimagine banking? Each member of the winning team will receive a $250 gift card."
}, {
  icon: "https://icon.now.sh/merge_type/ffffff",
  type: "challenge",
  title: "Indeed",
  text: "We would like to see innovative projects and solutions that tackle societal problems. This could be anything from connecting unemployed jobseekers to jobs to linking hurricane victims to disaster relief resources."
}, {
  icon: "https://icon.now.sh/report_problem/ffffff",
  type: "challenge",
  title: "JP Morgan Chase",
  href: "../static/files/jpmorgan.pdf",
  text: "We challenge you to create a web or mobile application that would either promote financial literacy for individuals (college students, unbanked adults, small businesses, etc) on or provide financial advisory/education on derivatives, futures trading, or how to invest to companies. In addition to providing gamified, guided learning, the application should present users with interactive scenarios. Click through for more details about this challenge."
}, {
  icon: "https://icon.now.sh/report_problem/ffffff",
  type: "challenge",
  title: "LILIE Center Challenge",
  text: "The winner of this challenge will best answer the following question: how might we end homelessness in Houston, Texas?"
}].map(function (card) {
  card.key = "card-".concat(card.title);
  return card;
});

/***/ }),

/***/ "./node_modules/rc-collapse/assets/index.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".rc-collapse{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}.rc-collapse-anim-active{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}.rc-collapse>.rc-collapse-item{border-top:1px solid #d9d9d9;}.rc-collapse>.rc-collapse-item:first-child{border-top:none;}.rc-collapse>.rc-collapse-item>.rc-collapse-header{height:38px;line-height:38px;text-indent:16px;color:#666;cursor:pointer;}.rc-collapse>.rc-collapse-item>.rc-collapse-header .arrow{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}.rc-collapse>.rc-collapse-item-disabled>.rc-collapse-header{cursor:not-allowed;color:#999;background-color:#f3f3f3;}.rc-collapse-content{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}.rc-collapse-content>.rc-collapse-content-box{margin-top:16px;margin-bottom:16px;}.rc-collapse-content-inactive{display:none;}.rc-collapse-item:last-child>.rc-collapse-content{border-radius:0 0 3px 3px;}.rc-collapse>.rc-collapse-item-active>.rc-collapse-header .arrow{border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yYy1jb2xsYXBzZS9hc3NldHMvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0QixBQUtPLEFBR0gsQUFHYixBQUdKLEFBT1MsQUFhRixBQUtILEFBTUEsQUFJSCxBQUdhLEFBR1EsWUF4Q2pCLENBbUNuQixHQXRDQSxBQTRCYSxBQU1RLEdBWFIsRUFiRyxJQXJCSSxDQW9EcEIsQ0FaaUIsRUFoQ2pCLEFBT21CLENBb0JRLElBb0JVLENBakMzQixBQXdCVixPQUx3QixDQXhDRyxBQXNCaEIsR0FQRSxNQVFDLEdBWWQsRUFuQmlCLE9BUUQsQUFpQmhCLElBeENBLENBc0Q0QixHQW5ENUIsQUFhQSxNQVFtQyxpQkErQmhCLGdCQTlCbUIsQ0ErQnRDLG1DQTlCNkIsMkJBQ0wsc0JBQ0wsaUJBQ25CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9yYy1jb2xsYXBzZS9hc3NldHMvaW5kZXguY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTgvY29kZS9oYWNrcmljZS9oYWNrcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AucmMtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG59XG4ucmMtY29sbGFwc2UtYW5pbS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbSA+IC5yYy1jb2xsYXBzZS1oZWFkZXIge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWluZGVudDogMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciAuYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICdcXFxcMjAnO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtLWRpc2FibGVkID4gLnJjLWNvbGxhcHNlLWhlYWRlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLnJjLWNvbGxhcHNlLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzY2NjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnJjLWNvbGxhcHNlLWNvbnRlbnQgPiAucmMtY29sbGFwc2UtY29udGVudC1ib3gge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnJjLWNvbGxhcHNlLWNvbnRlbnQtaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJjLWNvbGxhcHNlLWl0ZW06bGFzdC1jaGlsZCA+IC5yYy1jb2xsYXBzZS1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbS1hY3RpdmUgPiAucmMtY29sbGFwc2UtaGVhZGVyIC5hcnJvdyB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzY2NjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5gIl19 */\n/*@ sourceURL=node_modules/rc-collapse/assets/index.css */");

_defaultExport.__hash = "846235900";
_defaultExport.__scoped = ".rc-collapse.jsx-3908273469{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}.rc-collapse-anim-active.jsx-3908273469{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}.rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469{border-top:1px solid #d9d9d9;}.rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469:first-child{border-top:none;}.rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469>.rc-collapse-header.jsx-3908273469{height:38px;line-height:38px;text-indent:16px;color:#666;cursor:pointer;}.rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469>.rc-collapse-header.jsx-3908273469 .arrow.jsx-3908273469{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}.rc-collapse.jsx-3908273469>.rc-collapse-item-disabled.jsx-3908273469>.rc-collapse-header.jsx-3908273469{cursor:not-allowed;color:#999;background-color:#f3f3f3;}.rc-collapse-content.jsx-3908273469{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}.rc-collapse-content.jsx-3908273469>.rc-collapse-content-box.jsx-3908273469{margin-top:16px;margin-bottom:16px;}.rc-collapse-content-inactive.jsx-3908273469{display:none;}.rc-collapse-item.jsx-3908273469:last-child>.rc-collapse-content.jsx-3908273469{border-radius:0 0 3px 3px;}.rc-collapse.jsx-3908273469>.rc-collapse-item-active.jsx-3908273469>.rc-collapse-header.jsx-3908273469 .arrow.jsx-3908273469{border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yYy1jb2xsYXBzZS9hc3NldHMvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0QixBQUtPLEFBR0gsQUFHYixBQUdKLEFBT1MsQUFhRixBQUtILEFBTUEsQUFJSCxBQUdhLEFBR1EsWUF4Q2pCLENBbUNuQixHQXRDQSxBQTRCYSxBQU1RLEdBWFIsRUFiRyxJQXJCSSxDQW9EcEIsQ0FaaUIsRUFoQ2pCLEFBT21CLENBb0JRLElBb0JVLENBakMzQixBQXdCVixPQUx3QixDQXhDRyxBQXNCaEIsR0FQRSxNQVFDLEdBWWQsRUFuQmlCLE9BUUQsQUFpQmhCLElBeENBLENBc0Q0QixHQW5ENUIsQUFhQSxNQVFtQyxpQkErQmhCLGdCQTlCbUIsQ0ErQnRDLG1DQTlCNkIsMkJBQ0wsc0JBQ0wsaUJBQ25CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9yYy1jb2xsYXBzZS9hc3NldHMvaW5kZXguY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTgvY29kZS9oYWNrcmljZS9oYWNrcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AucmMtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG59XG4ucmMtY29sbGFwc2UtYW5pbS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbSA+IC5yYy1jb2xsYXBzZS1oZWFkZXIge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWluZGVudDogMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciAuYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICdcXFxcMjAnO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtLWRpc2FibGVkID4gLnJjLWNvbGxhcHNlLWhlYWRlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLnJjLWNvbGxhcHNlLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzY2NjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnJjLWNvbGxhcHNlLWNvbnRlbnQgPiAucmMtY29sbGFwc2UtY29udGVudC1ib3gge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnJjLWNvbGxhcHNlLWNvbnRlbnQtaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJjLWNvbGxhcHNlLWl0ZW06bGFzdC1jaGlsZCA+IC5yYy1jb2xsYXBzZS1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbS1hY3RpdmUgPiAucmMtY29sbGFwc2UtaGVhZGVyIC5hcnJvdyB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzY2NjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5gIl19 */\n/*@ sourceURL=node_modules/rc-collapse/assets/index.css */";
_defaultExport.__scopedHash = "3908273469";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head__ = __webpack_require__("./components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nav__ = __webpack_require__("./components/nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_intro__ = __webpack_require__("./components/intro.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about__ = __webpack_require__("./components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_calendar__ = __webpack_require__("./components/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_faq__ = __webpack_require__("./components/faq.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_judging__ = __webpack_require__("./components/judging.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sponsors__ = __webpack_require__("./components/sponsors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tracks__ = __webpack_require__("./components/tracks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_map__ = __webpack_require__("./components/map.js");
var _jsxFileName = "/Users/achal/Dropbox/2018/code/hackrice/hackrice-website/pages/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n  a {\n      color: #fff;\n      font-family: 'Overpass Mono';\n      font-size: 0.9em !important;\n      font-weight: 300;\n      text-decoration: none;\n      text-transform: uppercase;\n    }\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












 // Ensure `grid-styled` Box and Flex components work properly.

Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject); // Variables for <head>

var title = "HackRice 8";
var url = "https://hack.rice.edu";
var ogImage = "../static/og.png";
var description = "The premier hackathon of the south.";

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Provider"], {
    theme: {
      fonts: {
        sans: "'Open Sans', sans-serif",
        mono: "'Overpass Mono', monospace"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_head__["a" /* default */], {
    title: title,
    description: description,
    url: url,
    ogImage: ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_intro__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_about__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_calendar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_faq__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_judging__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_tracks__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_map__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_sponsors__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/collapse.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".rc-collapse{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}.rc-collapse-header{text-indent:unset !important;}.rc-collapse-header:focus{border:none;box-shadow:unset;outline:none;}.rc-collapse>.rc-collapse-item:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}.faqCard{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}.faqCard:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.rc-collapse-item-active{height:auto !important;}.arrow{display:none;content:\"\";margin-right:0px !important;border:none !important;}.rc-collapse-header{color:#fff !important;height:auto !important;line-height:unset !important;}.rc-collapse-content{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}.rc-collapse-content-box{margin-bottom:15px !important;}.rc-collapse-content-box>p{margin:0px !important;padding:0px !important;}tr:nth-child(even){background-color:rgba(255,255,255,0.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9jb2xsYXBzZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRTBCLEFBU00sQUFJakIsQUFNMkMsQUFLYixBQWNwQixBQUlDLEFBSVYsQUFPUyxBQU1DLEFBU08sQUFJUixBQUtxQixZQS9EMUIsQ0FpQ04sU0FPWSxBQW1CQSxDQXhFWixBQTBDYixBQWlCYSxDQVppQixLQXRDOUIsQUFLZSxDQXNEZixJQW5FZSxBQTJERCxLQXBDRSxDQXFEaEIsRUE5REEsR0F1QytCLEFBbUIvQixDQVppRCxDQTNEbEMsS0FpQjJDLEFBNkJqQyxDQXZCZ0IscUJBOEJ6QyxDQU5BLEdBWEEsYUFaa0IsQ0FvQ0EsYUExQ2xCLEVBT2UsQ0FvQ2dCLFlBbkNiLENBekJhLGVBMEJSLENBbUN2QixpREFsQ3dFLDBEQTFCeEQsY0FDaEIsMEVBMEJjLFlBQ0EsWUFDMkIsNklBQ3pDIiwiZmlsZSI6InN0eWxlcy9jb2xsYXBzZS5jc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOC9jb2RlL2hhY2tyaWNlL2hhY2tyaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5yYy1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiB1bnNldDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4ucmMtY29sbGFwc2UtaGVhZGVyIHtcbiAgdGV4dC1pbmRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5yYy1jb2xsYXBzZS1oZWFkZXI6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAhaW1wb3J0YW50O1xufVxuXG4uZmFxQ2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgY29sb3I6ICNlY2VkZjA7XG4gIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYXFDYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnJjLWNvbGxhcHNlLWl0ZW0tYWN0aXZlIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmMtY29sbGFwc2UtaGVhZGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ucmMtY29sbGFwc2UtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsaW5lLWhlaWdodDogMS41ZW0gIWltcG9ydGFudDtcbn1cblxuLnJjLWNvbGxhcHNlLWNvbnRlbnQtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucmMtY29sbGFwc2UtY29udGVudC1ib3ggPiBwIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5gIl19 */\n/*@ sourceURL=styles/collapse.css */");

_defaultExport.__hash = "1381846463";
_defaultExport.__scoped = ".rc-collapse.jsx-488722942{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}.rc-collapse-header.jsx-488722942{text-indent:unset !important;}.rc-collapse-header.jsx-488722942:focus{border:none;box-shadow:unset;outline:none;}.rc-collapse.jsx-488722942>.rc-collapse-item.jsx-488722942:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}.faqCard.jsx-488722942{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}.faqCard.jsx-488722942:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.rc-collapse-item-active.jsx-488722942{height:auto !important;}.arrow.jsx-488722942{display:none;content:\"\";margin-right:0px !important;border:none !important;}.rc-collapse-header.jsx-488722942{color:#fff !important;height:auto !important;line-height:unset !important;}.rc-collapse-content.jsx-488722942{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}.rc-collapse-content-box.jsx-488722942{margin-bottom:15px !important;}.rc-collapse-content-box.jsx-488722942>p.jsx-488722942{margin:0px !important;padding:0px !important;}tr.jsx-488722942:nth-child(even){background-color:rgba(255,255,255,0.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9jb2xsYXBzZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRTBCLEFBU00sQUFJakIsQUFNMkMsQUFLYixBQWNwQixBQUlDLEFBSVYsQUFPUyxBQU1DLEFBU08sQUFJUixBQUtxQixZQS9EMUIsQ0FpQ04sU0FPWSxBQW1CQSxDQXhFWixBQTBDYixBQWlCYSxDQVppQixLQXRDOUIsQUFLZSxDQXNEZixJQW5FZSxBQTJERCxLQXBDRSxDQXFEaEIsRUE5REEsR0F1QytCLEFBbUIvQixDQVppRCxDQTNEbEMsS0FpQjJDLEFBNkJqQyxDQXZCZ0IscUJBOEJ6QyxDQU5BLEdBWEEsYUFaa0IsQ0FvQ0EsYUExQ2xCLEVBT2UsQ0FvQ2dCLFlBbkNiLENBekJhLGVBMEJSLENBbUN2QixpREFsQ3dFLDBEQTFCeEQsY0FDaEIsMEVBMEJjLFlBQ0EsWUFDMkIsNklBQ3pDIiwiZmlsZSI6InN0eWxlcy9jb2xsYXBzZS5jc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOC9jb2RlL2hhY2tyaWNlL2hhY2tyaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5yYy1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiB1bnNldDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4ucmMtY29sbGFwc2UtaGVhZGVyIHtcbiAgdGV4dC1pbmRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5yYy1jb2xsYXBzZS1oZWFkZXI6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAhaW1wb3J0YW50O1xufVxuXG4uZmFxQ2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgY29sb3I6ICNlY2VkZjA7XG4gIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYXFDYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnJjLWNvbGxhcHNlLWl0ZW0tYWN0aXZlIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmMtY29sbGFwc2UtaGVhZGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ucmMtY29sbGFwc2UtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsaW5lLWhlaWdodDogMS41ZW0gIWltcG9ydGFudDtcbn1cblxuLnJjLWNvbGxhcHNlLWNvbnRlbnQtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucmMtY29sbGFwc2UtY29udGVudC1ib3ggPiBwIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5gIl19 */\n/*@ sourceURL=styles/collapse.css */";
_defaultExport.__scopedHash = "488722942";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./styles/colors.json":
/***/ (function(module, exports) {

module.exports = {"base":"#6164B2","light":"#b6baf9","black":"#3d3e4c","gray":["#f9f9fa","#eff0f9","#dfe0e6","#d1d2db","#c2c2cf","#b1b1c2","#9d9eb2","#8687a0","#696a82","#3d3e4c"],"gray2":["#ebf1f5","#d6e2eb","#bfd1e0","#a5bfd3","#86a9c4","#618eb2","#5780a0","#4c708c","#3f5c73","#2c4152"],"white":["#ffffff"]}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rc-collapse":
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "rebass":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map