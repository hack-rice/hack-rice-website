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

/***/ "./components/cardNav.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\cardNav.js";




var ScrollingLink = __WEBPACK_IMPORTED_MODULE_3_react_scroll__["Link"];


var CardNav = function CardNav(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"], {
    flexWrap: "wrap",
    mx: -2,
    pt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.cards.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        to = _ref.to,
        title = _ref.title,
        text = _ref.text,
        icon = _ref.icon;
    return href != undefined ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, text)))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ScrollingLink, {
      to: to,
      smooth: true,
      duration: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2482026976", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, text))));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2482026976",
    css: "a{-webkit-text-decoration:none;text-decoration:none;}.card{border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], ";color:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,-webkit-transform 0.3s ease-in-out;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;}.cardTitle{text-transform:uppercase;}.card:hover{background:rgba(255,255,255,0.1);cursor:pointer;-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}.card h3{margin:0;font-size:18px;}.card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}.spacer{margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNhcmROYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N1QixBQUk4QixBQUl5QixBQVlyQixBQUlXLEFBTTNCLEFBS0EsQUFPUSxTQVhGLEFBS0UsUUFPbkIsT0FYQSxDQVhBLENBZ0JpQixPQVpBLFFBYUMsS0E3Qm1CLEVBaUJiLEVBckJ4QixPQWtDQSx3QkE3QnlDLHNDQUMzQixPQWdCZCxLQWY4Qiw0QkFDTCx1QkFDUCxnQkFDSyxrREFDNkUsd1RBQ3BHIiwiZmlsZSI6ImNvbXBvbmVudHNcXGNhcmROYXYuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxubWVpc1xcZ2l0aHViXFxoYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gXCJyZWJhc3NcIjtcclxuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxubGV0IFNjcm9sbGluZ0xpbmsgPSBTY3JvbGwuTGluaztcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XHJcblxyXG5jb25zdCBDYXJkTmF2ID0gcHJvcHMgPT4gKFxyXG4gIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiIG14PXstMn0gcHQ9ezJ9PlxyXG4gICAge3Byb3BzLmNhcmRzLm1hcCgoeyBrZXksIGhyZWYsIHRvLCB0aXRsZSwgdGV4dCwgaWNvbiB9KSA9PlxyXG4gICAgICBocmVmICE9IHVuZGVmaW5lZCA/IChcclxuICAgICAgICA8Qm94IGtleT17a2V5fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gM119PlxyXG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCb3gga2V5PXtrZXl9IHdpZHRoPXtbMSwgMSAvIDIsIDEgLyAzXX0+XHJcbiAgICAgICAgICA8U2Nyb2xsaW5nTGluayB0bz17dG99IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TY3JvbGxpbmdMaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApXHJcbiAgICApfVxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzW1wiZ3JheVwiXVsxXX07XHJcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzW1wiZ3JheVwiXVsxXX07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkVGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9GbGV4PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZE5hdjtcclxuIl19 */\n/*@ sourceURL=components\\cardNav.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (CardNav);

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
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\head.js";




var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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

/***/ "./components/newCalendar.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_newCalendar__ = __webpack_require__("./content/newCalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\newCalendar.js";







var Calendar = function Calendar() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_scroll__["Element"], {
    name: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    bg: "#e89e9ec7",
    color: "#9F5A58",
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    mx: 5,
    px: 3,
    pt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_4__content_newCalendar__["e" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"], {
    my: 1,
    pb: 4,
    mx: 5,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    px: 3,
    width: [1, 1 / 2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "dayName"
  }, __WEBPACK_IMPORTED_MODULE_4__content_newCalendar__["a" /* dayOne */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "dayContent"
  }, __WEBPACK_IMPORTED_MODULE_4__content_newCalendar__["c" /* friday */].map(function (_ref) {
    var key = _ref.key,
        title = _ref.title,
        time = _ref.time,
        detail = _ref.detail;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "dayItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "itemTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "itemTime"
    }, time), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "itemDetail"
    }, detail));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
    px: 3,
    width: [1, 1 / 2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "dayName"
  }, __WEBPACK_IMPORTED_MODULE_4__content_newCalendar__["b" /* dayTwo */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "dayContent"
  }, __WEBPACK_IMPORTED_MODULE_4__content_newCalendar__["d" /* saturday */].map(function (_ref2) {
    var key = _ref2.key,
        title = _ref2.title,
        time = _ref2.time,
        detail = _ref2.detail;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "dayItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "itemTitle"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "itemTime"
    }, time), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1243645028", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "itemDetail"
    }, detail));
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1243645028",
    css: "h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",monospace;}.title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";background:#9F5A58;padding:2px 10px;}.dayName.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;color:#9F5A58;text-transform:uppercase;}.dayContent.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:48%;float:left;margin:0px;list-style-type:none;padding:0;width:100%;}.dayItem.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,0.1);background:#f6b8b878;color:#9F5A58;padding:8px 10px;-webkit-transition:border 0.3s ease-in-out,background 0.3s ease-in-out,box-shadow 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition:border 0.3s ease-in-out,background 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;transition:border 0.3s ease-in-out,background 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;margin-bottom:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dayItem.__jsx-style-dynamic-selector:hover{background:#f6b8b8;border:1px solid #9F5A58;box-shadow:0px 3px 5px 2px rgba(97,100,178,0.05);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.dayContent.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.itemTime.__jsx-style-dynamic-selector{display:block;margin-top:2px;font-size:0.8em;font-family:\"Overpass Mono\";}.itemTitle.__jsx-style-dynamic-selector{margin-top:5px;display:inline-block;font-size:0.8em;font-weight:400;font-family:\"Overpass Mono\";background:rgba(255,255,255,0.3);padding:2px 5px;color:#9F5A58;}.itemDetail.__jsx-style-dynamic-selector{clear:both;display:block;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:0.8em;margin-top:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5ld0NhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFJa0QsQUFJbEIsQUFRTCxBQU9LLEFBV2UsQUFjakIsQUFPVyxBQU1oQixBQU9DLEFBV0osV0FDRyxHQWxCQyxDQU9NLENBcERMLEdBZ0NTLEVBeENBLEFBZU4sSUF5REwsSUFsQkUsR0E3Q0YsQ0FpQk8sR0FtQ0wsRUFqRWxCLEVBb0JZLElBeUIwQyxDQWN4QixDQXRETyxBQVNWLElBT2QsRUE2Q0ssRUFuQ0YsT0FUSCxPQVVNLEFBbUNXLEdBcEQ5QixDQVF1QixDQXFDdkIsTUFpQmtCLEVBdkVHLElBNEJTLFFBVmxCLEFBc0JZLEVBZ0NMLENBVm1CLElBN0RuQixHQWtCTixTQXNEYixFQXJEQSxDQXlCcUIsRUEzQ3JCLFlBNkRrQixnQkFDRixjQUNoQixZQXhCQSxhQUt1Qiw0RUFDdkIsOE1BbEJvQixrQkFDTCwwRUFDTSxxRUFDVyxtSEFDWCw2RkFDckIiLCJmaWxlIjoiY29tcG9uZW50c1xcbmV3Q2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxubWVpc1xcZ2l0aHViXFxoYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gXCJyZWJhc3NcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHtcclxuICB0aXRsZSxcclxuICBmcmlkYXksXHJcbiAgc2F0dXJkYXksXHJcbiAgZGF5T25lLFxyXG4gIGRheVR3b1xyXG59IGZyb20gXCIuLi9jb250ZW50L25ld0NhbGVuZGFyXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnMuanNvblwiO1xyXG5cclxuY29uc3QgQ2FsZW5kYXIgPSAoKSA9PiAoXHJcbiAgPEVsZW1lbnQgbmFtZT1cImNhbGVuZGFyXCI+XHJcbiAgICA8Qm94IGJnPVwiI2U4OWU5ZWM3XCIgY29sb3I9XCIjOUY1QTU4XCIgcHk9ezN9ID5cclxuICAgICAgPEJveCBteD17NX0gcHg9ezN9IHB0PXs0fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxGbGV4IG15PXsxfSBwYj17NH0gbXg9ezV9IGZsZXhXcmFwPVwid3JhcFwiPlxyXG4gICAgICAgIDxCb3ggcHg9ezN9IHdpZHRoPXtbMSwgMSAvIDJdfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkYXlOYW1lXCI+e2RheU9uZX08L2gyPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRheUNvbnRlbnRcIj5cclxuICAgICAgICAgICAge2ZyaWRheS5tYXAoKHsga2V5LCB0aXRsZSwgdGltZSwgZGV0YWlsIH0pID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cImRheUl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1UaXRsZVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtVGltZVwiPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1EZXRhaWxcIj57ZGV0YWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBweD17M30gd2lkdGg9e1sxLCAxIC8gMl19PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRheU5hbWVcIj57ZGF5VHdvfTwvaDI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGF5Q29udGVudFwiPlxyXG4gICAgICAgICAgICB7c2F0dXJkYXkubWFwKCh7IGtleSwgdGl0bGUsIHRpbWUsIGRldGFpbCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJkYXlJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtVGl0bGVcIj57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVRpbWVcIj57dGltZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtRGV0YWlsXCI+e2RldGFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoMSxcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzW1wid2hpdGVcIl19O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzlGNUE1ODtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRheU5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzlGNUE1ODtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF5Q29udGVudCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF5SXRlbSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZiOGI4Nzg7XHJcbiAgICAgICAgICBjb2xvcjogIzlGNUE1ODtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXlJdGVtOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmI4Yjg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOUY1QTU4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMnB4IHJnYmEoOTcsIDEwMCwgMTc4LCAwLjA1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF5Q29udGVudCB1bCBsaSB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW1UaW1lIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtVGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICM5RjVBNTg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbURldGFpbCB7XHJcbiAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0JveD5cclxuICA8L0VsZW1lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcclxuIl19 */\n/*@ sourceURL=components\\newCalendar.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),

/***/ "./components/newFaqs.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_newFaqs_js__ = __webpack_require__("./content/newFaqs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_scroll__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\newFaqs.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        questions: __WEBPACK_IMPORTED_MODULE_6__content_newFaqs_js__["a" /* faqs */]
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
      var _this2 = this,
          _React$createElement;

      var state = this.state;
      var shift = __WEBPACK_IMPORTED_MODULE_6__content_newFaqs_js__["a" /* faqs */].length / 3;
      var cols = [];

      for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_6__content_newFaqs_js__["a" /* faqs */].length; i += shift) {
        cols.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rebass__["Flex"], {
          flexWrap: "wrap",
          flexDirection: "column",
          width: [1, 1 / 2, 1 / 3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, __WEBPACK_IMPORTED_MODULE_6__content_newFaqs_js__["a" /* faqs */].slice(i, i + shift).map(function (_ref2) {
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
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rebass__["Box"], (_React$createElement = {
        mx: "auto",
        pt: 3
      }, _defineProperty(_React$createElement, "mx", 3), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 61
      }), _React$createElement), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2375766004" + " " + "title"
      }, __WEBPACK_IMPORTED_MODULE_6__content_newFaqs_js__["b" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rebass__["Flex"], {
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
        styleId: "2375766004",
        css: ".title.jsx-2375766004{display:inline-block;font-family:Overpass Mono;text-transform:uppercase;color:#a95656;background:#ffffff;padding:2px 10px;margin-left:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5ld0ZhcXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVXLEFBR3NDLHFCQUNLLDBCQUNELHlCQUNYLGNBQ0ssbUJBQ0YsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHNcXG5ld0ZhcXMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxubWVpc1xcZ2l0aHViXFxoYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbGxhcHNlLCB7IFBhbmVsIH0gZnJvbSBcInJjLWNvbGxhcHNlXCI7XHJcbmltcG9ydCBkZWZhdWx0Q3NzIGZyb20gXCJyYy1jb2xsYXBzZS9hc3NldHMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBjdXN0b21Dc3MgZnJvbSBcIi4uL3N0eWxlcy9jb2xsYXBzZS5jc3NcIjtcclxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSBcInJlYmFzc1wiO1xyXG5pbXBvcnQgeyB0aXRsZSwgZmFxcyB9IGZyb20gXCIuLi9jb250ZW50L25ld0ZhcXMuanNcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWNjb3JkaW9uOiB0cnVlLFxyXG4gICAgYWN0aXZlS2V5OiBudWxsLFxyXG4gICAgcXVlc3Rpb25zOiBmYXFzXHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSBhY3RpdmVLZXkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFjdGl2ZUtleVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBzaGlmdCA9IGZhcXMubGVuZ3RoIC8gMztcclxuXHJcbiAgICBsZXQgY29scyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFxcy5sZW5ndGg7IGkgKz0gc2hpZnQpIHtcclxuICAgICAgY29scy5wdXNoKFxyXG4gICAgICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiB3aWR0aD17WzEsIDEgLyAyLCAxIC8gM119PlxyXG4gICAgICAgICAge2ZhcXMuc2xpY2UoaSwgaSArIHNoaWZ0KS5tYXAoKHsga2V5LCBxdWVzdGlvbiwgYW5zd2VyIH0pID0+IChcclxuICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgYWNjb3JkaW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICBhY3RpdmVLZXk9e3N0YXRlLmFjdGl2ZUtleX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQYW5lbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFxQ2FyZFwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgIGhlYWRlcj17cXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDbGFzcz1cImZhcUNhcmRUaXRsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+e2Fuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtkZWZhdWx0Q3NzfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7Y3VzdG9tQ3NzfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEVsZW1lbnQgbmFtZT1cImZhcVwiPlxyXG4gICAgICAgIDxCb3ggbXg9XCJhdXRvXCIgcHQ9ezN9IG14PXszfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBmbGV4V3JhcD1cIndyYXBcIiBtdD17Mn0gbWI9ezV9IHB0PXsyfT5cclxuICAgICAgICAgIHtjb2xzfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPdmVycGFzcyBNb25vO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTk1NjU2O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9FbGVtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\newFaqs.js */"
      }));
    }
  }]);

  return Questions;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/newTracks.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_newTracks__ = __webpack_require__("./content/newTracks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\newTracks.js";



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Tracks = function Tracks() {
  var _React$createElement;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_scroll__["Element"], {
    name: "tracks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], (_React$createElement = {
    mx: "auto",
    pt: 3
  }, _defineProperty(_React$createElement, "mx", 3), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 8
  }), _React$createElement), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]]) + " " + "title"
  }, "Tracks"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"], {
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_4__content_newTracks__["a" /* trackCards */].map(function (_ref) {
    var title = _ref.title,
        icon = _ref.icon,
        text = _ref.text,
        href = _ref.href,
        key = _ref.key;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
      width: [1, 1 / 2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Box"], {
      key: key,
      px: 2,
      py: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]]) + " " + "info"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]]) + " " + "label"
    }, " ", title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2872309253", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]]]) + " " + "trackInfo"
    }, text)))));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2872309253",
    css: ".title.__jsx-style-dynamic-selector{display:inline-block;font-family:Overpass Mono;text-transform:uppercase;color:#a95656;background:#ffffff;padding:2px 10px;margin-left:0.5em;}.label.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:bold;}.card.__jsx-style-dynamic-selector{height:210px !important;border:1.5px solid;border-color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"], ";-webkit-transition:-webkit-transform 0.3s ease-in-out,opacity 0.3s ease-in-out;-webkit-transition:transform 0.3s ease-in-out,opacity 0.3s ease-in-out;transition:transform 0.3s ease-in-out,opacity 0.3s ease-in-out;}.card.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}.info.__jsx-style-dynamic-selector{padding:1px;}a.__jsx-style-dynamic-selector{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.trackInfo.__jsx-style-dynamic-selector{font-family:\"Open Sans\";font-weight:normal;text-transform:none !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5ld1RyYWNrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBRzhCLEFBVUwsQUFLUSxBQU1ZLEFBSXhCLEFBR0UsQUFLWSxZQVA1QixFQUd1QixFQWxCSixLQVZTLEdBZVAsQUFrQkUsU0F0QnZCLEFBVXdCLFVBTG9CLEFBa0JULElBakNSLGlCQTRCM0IsUUEzQmdCLEVBaUNoQixXQWxCa0UsQ0FkN0MsbUJBQ0YsTUFrQm5CLFdBakJvQixrQkFDcEIsOEpBWUEiLCJmaWxlIjoiY29tcG9uZW50c1xcbmV3VHJhY2tzLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcbm1laXNcXGdpdGh1YlxcaGFjay1yaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tIFwicmViYXNzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7IHRyYWNrQ2FyZHMsIHRpdGxlIH0gZnJvbSBcIi4uL2NvbnRlbnQvbmV3VHJhY2tzXCI7XHJcbmltcG9ydCB7IGxpZ2h0QWNjZW50Q29sb3IgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XHJcblxyXG5jb25zdCBUcmFja3MgPSAoKSA9PiAoXHJcbiAgICA8RWxlbWVudCBuYW1lPVwidHJhY2tzXCI+XHJcbiAgICAgICAgPEJveCBteD1cImF1dG9cIiBwdD17M30gbXg9ezN9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5UcmFja3M8L2gyPlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge3RyYWNrQ2FyZHMubWFwKCh7IHRpdGxlLCBpY29uLCB0ZXh0LCBocmVmLCBrZXkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxIC8gMl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtrZXl9IHB4PXsyfSBweT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPiB7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tJbmZvXCI+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LWZhbWlseTogT3ZlcnBhc3MgTW9ubztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjYTk1NjU2O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR7bGlnaHRBY2NlbnRDb2xvcn07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgICAgIH1cclxuICAgICAgLmluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50cmFja0luZm8ge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9FbGVtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tzO1xyXG4iXX0= */\n/*@ sourceURL=components\\newTracks.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__["lightAccentColor"]]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Tracks);

/***/ }),

/***/ "./components/newintro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardNav__ = __webpack_require__("./components/cardNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newCalendar__ = __webpack_require__("./components/newCalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newTracks__ = __webpack_require__("./components/newTracks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prizes_js__ = __webpack_require__("./components/prizes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newFaqs__ = __webpack_require__("./components/newFaqs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_links__ = __webpack_require__("./content/links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_newIntro__ = __webpack_require__("./content/newIntro.js");
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\newintro.js";













var NewIntro = function NewIntro() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_rebass__["Box"], {
    bg: __WEBPACK_IMPORTED_MODULE_9__styles_colors_json__["newbase"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_rebass__["Image"], {
    src: "../static/hr85.png",
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      marginBottom: "10%",
      width: "40%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2018038098" + " " + "cards"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__cardNav__["a" /* default */], {
    cards: __WEBPACK_IMPORTED_MODULE_11__content_newIntro__["a" /* cards */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-2018038098" + " " + "calendar"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__newCalendar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-2018038098" + " " + "tracks"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__newTracks__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2018038098" + " " + 'prizes'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__prizes_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-2018038098" + " " + "faqs"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__newFaqs__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-2018038098" + " " + "social"
  }, __WEBPACK_IMPORTED_MODULE_10__content_links__["a" /* links */].map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        icon = _ref.icon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: href,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      className: "jsx-2018038098"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      className: "jsx-2018038098" + " " + "icon"
    })));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2018038098",
    css: "a{display:inline !important;}a.img{margin-right:0px !important;}.icon{padding:4px 13px;}.social{text-align:center;margin-top:10em;}.calendar{margin-top:3em;}.tracks{margin-top:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5ld2ludHJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEdUIsQUFHbUMsQUFJRSxBQUlYLEFBSUMsQUFLSCxBQUlBLGVBSGpCLEFBSUEsRUFiQSxDQUlrQixRQVpsQixFQUlBLE1BU0EiLCJmaWxlIjoiY29tcG9uZW50c1xcbmV3aW50cm8uanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxubWVpc1xcZ2l0aHViXFxoYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhcmROYXYgZnJvbSBcIi4vY2FyZE5hdlwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vbmV3Q2FsZW5kYXJcIjtcclxuaW1wb3J0IFRyYWNrcyBmcm9tIFwiLi9uZXdUcmFja3NcIjtcclxuaW1wb3J0IFByaXplcyBmcm9tIFwiLi9wcml6ZXMuanNcIlxyXG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gXCIuL25ld0ZhcXNcIjtcclxuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gXCJyZWJhc3NcIjtcclxuXHJcbmltcG9ydCB7IG5ld2Jhc2UgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XHJcbmltcG9ydCB7IGxpbmtzIH0gZnJvbSBcIi4uL2NvbnRlbnQvbGlua3NcIjtcclxuaW1wb3J0IHsgY2FyZHMgfSBmcm9tIFwiLi4vY29udGVudC9uZXdJbnRyb1wiO1xyXG5cclxuY29uc3QgTmV3SW50cm8gPSAoKSA9PiAoXHJcbiAgPEJveCBiZz17bmV3YmFzZX0+XHJcbiAgICA8SW1hZ2VcclxuICAgICAgc3JjPVwiLi4vc3RhdGljL2hyODUucG5nXCJcclxuICAgICAgY3NzPXt7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMCVcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTAlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNDAlXCJcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgIDxDYXJkTmF2IGNhcmRzPXtjYXJkc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgIDxDYWxlbmRhciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrc1wiPlxyXG4gICAgICA8VHJhY2tzIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwcml6ZXMnPlxyXG4gICAgICA8UHJpemVzLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmYXFzXCI+XHJcbiAgICAgIDxRdWVzdGlvbnMvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgaWNvbiB9KSA9PiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYS5pbWcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYWxlbmRhciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHJhY2tzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L0JveD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0ludHJvOyJdfQ== */\n/*@ sourceURL=components\\newintro.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (NewIntro);

/***/ }),

/***/ "./components/prizes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_prizes__ = __webpack_require__("./content/prizes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_scroll__ = __webpack_require__("react-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\components\\prizes.js";







var Prizes = function Prizes() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_scroll__["Element"], {
    name: "prizes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
    bg: "#e89e9ec7",
    color: "#9F5A58",
    py: 4,
    my: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
    mx: 5,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_2__content_prizes__["b" /* title */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_2__content_prizes__["a" /* places */].map(function (_ref) {
    var place = _ref.place,
        prize = _ref.prize,
        key = _ref.key;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
      width: [1, 1 / 4],
      key: key,
      mx: 2,
      my: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + 'prize'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + 'itemTitle'
    }, place), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + 'item'
    }, prize)));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_2__content_prizes__["c" /* trackWinners */].map(function (_ref2) {
    var place = _ref2.place,
        prize = _ref2.prize,
        key = _ref2.key;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Box"], {
      width: [1, 9 / 24],
      key: key,
      mx: 2,
      my: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + 'prize'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + 'itemTitle'
    }, place), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639826769", [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]]]) + " " + 'item'
    }, prize)));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1639826769",
    css: ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"], ";background:#9F5A58;padding:2px 10px;}.prize.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,0.1);background:#f6b8b878;color:#9F5A58;padding:8px 10px;-webkit-transition:border 0.3s ease-in-out,-webkit-transform 0.3s ease-in-out,background 0.3s ease-in-out;-webkit-transition:border 0.3s ease-in-out,transform 0.3s ease-in-out,background 0.3s ease-in-out;transition:border 0.3s ease-in-out,transform 0.3s ease-in-out,background 0.3s ease-in-out;}.prize.__jsx-style-dynamic-selector:hover{background:#f6b8b8;-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);border:1px solid #9F5A58;}.itemTitle.__jsx-style-dynamic-selector{margin-top:5px;display:inline-block;font-size:1.2em;font-weight:400;font-family:\"Overpass Mono\";background:rgba(255,255,255,0.3);padding:4px 5px;color:#9F5A58;}.item.__jsx-style-dynamic-selector{margin-top:-2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHByaXplcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBR3NDLEFBUWUsQUFRZixBQU1OLEFBV0csZUFWRyxDQVd2QixHQWpCMEIsRUFoQkMsWUFRSixHQWVMLFVBdEJtQixNQXVCbkIsRUFmRixjQUNHLEFBZVcsYUF2QlQsSUFTeUUsV0FleEQsQ0FUVCxHQWRWLGlCQUNuQixLQWNBLE9BU2tCLGdCQUNGLGNBQ2hCLDROQWpCQSIsImZpbGUiOiJjb21wb25lbnRzXFxwcml6ZXMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxubWVpc1xcZ2l0aHViXFxoYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYWNlcywgdHJhY2tXaW5uZXJzLCB0aXRsZSB9IGZyb20gJy4uL2NvbnRlbnQvcHJpemVzJztcclxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnMuanNvblwiO1xyXG5cclxuY29uc3QgUHJpemVzID0gKCkgPT4gKFxyXG4gICAgPEVsZW1lbnQgbmFtZT0ncHJpemVzJz5cclxuICAgICAgICA8Qm94IGJnPVwiI2U4OWU5ZWM3XCIgY29sb3I9XCIjOUY1QTU4XCIgcHk9ezR9IG15PXs1MH0+XHJcbiAgICAgICAgICAgIDxCb3ggbXg9ezV9IHB4PXszfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlcy5tYXAoKHsgcGxhY2UsIHByaXplLCBrZXkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSAvIDRdfSBrZXk9e2tleX0gbXg9ezJ9IG15PXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcml6ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0naXRlbVRpdGxlJz57cGxhY2V9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2l0ZW0nPntwcml6ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCc+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tXaW5uZXJzLm1hcCgoeyBwbGFjZSwgcHJpemUsIGtleSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCA5LzI0XX0ga2V5PXtrZXl9IG14PXsyfSBteT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpemUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2l0ZW1UaXRsZSc+e3BsYWNlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpdGVtJz57cHJpemV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzW1wid2hpdGVcIl19O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzlGNUE1ODtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcml6ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZiOGI4Nzg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlGNUE1ODtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucHJpemU6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZiOGI4O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOUY1QTU4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLml0ZW1UaXRsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk92ZXJwYXNzIE1vbm9cIjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlGNUE1ODtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9FbGVtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpemVzOyJdfQ== */\n/*@ sourceURL=components\\prizes.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_colors_json___default.a["white"]]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Prizes);

/***/ }),

/***/ "./content/links.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return links; });
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

/***/ }),

/***/ "./content/newCalendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dayOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dayTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saturday; });
var title = "Schedule";
var dayOne = "Friday, 3/1";
var dayTwo = "Saturday, 3/2";
var friday = [{
  time: "5 - 7:00 PM",
  title: "Registration",
  detail: "Check into the hackathon with your team! If you have not signed up, now's the time to do it."
}, {
  time: "7-7:15 PM",
  title: "Opening Ceremonies",
  detail: "Hear the rules around the hackathon, and some other useful information."
}, {
  time: "7:15 PM",
  title: "Hacking Begins!",
  detail: "Start building your projects!"
}, {
  time: "8:30 PM",
  title: "GCP Workshop",
  detail: "Learn about Google Cloud Platform from your campus representatives."
}, {
  time: "11 PM",
  title: "Late Night Grub",
  detail: "Taco Bell will arrive around 11..."
}].map(function (item) {
  item.key = "item-".concat(item.title);
  return item;
});
var saturday = [{
  time: "8 AM",
  title: "Breakfast",
  detail: "To be announced."
}, {
  time: "12 PM",
  title: "Lunch",
  detail: "To be announced."
}, {
  time: "5 PM",
  title: "Dinner",
  detail: "To be announced."
}, {
  time: "5:30 PM",
  title: "Presentation Workshop",
  detail: "Not sure how to talk about your project to an impartial observer? Learn more here."
}, {
  time: "7:15 PM",
  title: "Hacking Ends",
  detail: "No more coding! No more designing! All final touches should be complete."
}, {
  time: "7:30 PM",
  title: "Judging Begins",
  detail: "Judges will be walking around to projects to evaluate their excellence."
}, {
  time: "8:30 PM",
  title: "Judging Ends",
  detail: "Judges will submit their evaluations of projects at this time."
}, {
  time: "8:30 PM",
  title: "Final Presentations",
  detail: "Watch the final teams present their projects, followed by winding down with our closing ceremonies."
}].map(function (item) {
  item.key = "item-".concat(item.detail);
  return item;
});

/***/ }),

/***/ "./content/newFaqs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faqs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\content\\newFaqs.js";

var title = "QUESTIONS & ANSWERS";
var faqs = [{
  question: "How do I submit my project? Is there a Devpost?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "You can submit your project on", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "https://hackrice8.devpost.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "this Devpost link"))
}, {
  question: "Who is eligible to participate in HackRice?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "http://static.mlh.io/docs/mlh-code-of-conduct.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "MLH Code of Conduct."))
}, {
  question: "Is there a HackRice Facebook page?",
  answer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, "Yes there is! Click", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "styledlink",
    href: "https://www.facebook.com/hackrice/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "here"), " ", "to access it!")
}, {
  question: "How long is HackRice?",
  answer: "The event is held from Friday, March 1st to Saturday, March 2nd. Students hack for 24 hours. View the schedule for more info."
}, {
  question: "How many hackers per team are permitted?",
  answer: "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
}, {
  question: "Will there be free food?",
  answer: "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."
}, {
  question: "What do I need to bring?",
  answer: "Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
}, {
  question: "What if I'm not very experienced?",
  answer: "We do our best to point people in the right direction and use tools and languages with a low barrier to entry. There will also be upperclassmen participating in the hackathon who can guide you in the right direction. We will also be having workshops the week before the hackathon!"
}, {
  question: "Can Rice alumni attend?",
  answer: "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes."
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

/***/ "./content/newIntro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cards; });
var cards = [{
  icon: "https://icon.now.sh/compose/ffffff",
  title: "Register",
  href: "https://docs.google.com/forms/d/e/1FAIpQLSfIFYOps4mVOVhfhgxmW4kzR3yxviEFc5zATsugW3ITEUrjfQ/viewform",
  text: "If you haven't registered, now is the time! →"
}, {
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
  icon: "https://icon.now.sh/question_answer/FFFFFF/",
  title: "FAQs",
  to: "faq",
  text: "First timer? Most of your inquiries are answered →"
}, {
  icon: "https://icon.now.sh/call_split/ffffff",
  title: "Tracks",
  to: "tracks",
  text: "Complete a track to win a prize →"
}, {
  icon: "https://icon.now.sh/phone/ffffff",
  title: "Contact",
  href: "mailto:achal@rice.edu",
  text: "Have a question? Reach out via email →"
}, {
  icon: "https://icon.now.sh/monetization_on/ffffff",
  title: "Prizes",
  to: "prizes",
  text: "What can you win at HackRice? Worth a look →"
}, {
  icon: "https://icon.now.sh/person_pin_circle/ffffff",
  title: "Find a Mentor",
  href: "https://hackrice-helpq.herokuapp.com/",
  text: "Looking for a mentor? Find one here! →"
}].map(function (card) {
  card.key = "card-".concat(card.title);
  return card;
});

/***/ }),

/***/ "./content/newTracks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export title */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trackCards; });
var title = "Tracks & Challenges";
var trackCards = [{
  title: "First Timers",
  icon: "https://icon.now.sh/laptop_mac/ffffff/20",
  text: "We live in a society where everything is customized, from your phone case to your coffee order. So why shouldn't your browser be too? Chrome extensions allow you to craft and tailor your ideal browsing experience in a few short lines of code. In this track, you'll build a Chrome extension from scratch using HTML/CSS and JavaScript.",
  href: "https://github.com/hack-rice/HR8.5-First-Timers-Track"
}, {
  title: "FinTech",
  icon: "https://icon.now.sh/trending_up/ffffff/20",
  text: "From big banks to the everyday consumer, technology is changing the way we approach finance. Create a project that exemplifies an aspect of financial technology. Whether its data science related or a web/mobile application, the possibilities are endless!",
  href: "https://github.com/hack-rice/HR8.5-FinTech-Track"
}].map(function (card) {
  card.key = "link-".concat(card.title);
  return card;
});

/***/ }),

/***/ "./content/prizes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return places; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return trackWinners; });
var title = 'Prizes';
var places = [{
  place: "1st Place",
  prize: "Nintendo Switch"
}, {
  place: "2nd Place",
  prize: "Bose Earbuds"
}, {
  place: "3rd Place",
  prize: "Fitbit Charges"
}].map(function (prize) {
  prize.key = "item-".concat(prize.place);
  return prize;
});
var trackWinners = [{
  place: "First Timers Track Winner",
  prize: "Google Home Minis"
}, {
  place: "FinTech Track Winner",
  prize: "Amazon Echo Plus"
}].map(function (prize) {
  prize.key = "item-".concat(prize.place);
  return prize;
});

/***/ }),

/***/ "./node_modules/rc-collapse/assets/index.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".rc-collapse{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}.rc-collapse-anim-active{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}.rc-collapse>.rc-collapse-item{border-top:1px solid #d9d9d9;}.rc-collapse>.rc-collapse-item:first-child{border-top:none;}.rc-collapse>.rc-collapse-item>.rc-collapse-header{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}.rc-collapse>.rc-collapse-item>.rc-collapse-header .arrow{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}.rc-collapse>.rc-collapse-item>.rc-collapse-header .rc-collapse-extra{margin:0 16px 0 auto;}.rc-collapse>.rc-collapse-item-disabled>.rc-collapse-header{cursor:not-allowed;color:#999;background-color:#f3f3f3;}.rc-collapse-content{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}.rc-collapse-content>.rc-collapse-content-box{margin-top:16px;margin-bottom:16px;}.rc-collapse-content-inactive{display:none;}.rc-collapse-item:last-child>.rc-collapse-content{border-radius:0 0 3px 3px;}.rc-collapse>.rc-collapse-item-active>.rc-collapse-header .arrow{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xccmMtY29sbGFwc2VcXGFzc2V0c1xcaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0QixBQUtPLEFBR0gsQUFHYixBQUdJLEFBVUMsQUFhQSxBQUdGLEFBS0gsQUFNQSxBQUlILEFBR2EsQUFHUixhQUxwQixHQTVDQSxBQWtDYSxBQU1RLEVBVVgsQ0FyQkcsQ0ExQkUsQ0FVQyxBQWFoQixJQXJDb0IsQ0EwRHBCLEFBSW9DLENBaEJuQixFQXRDakIsQ0FpQzJCLEtBaEJqQixBQTJCVixPQUx3QixDQTlDRyxBQXlCaEIsU0FDRyxHQWVkLEtBcUJxQyxJQW5DckIsQUFvQmhCLElBOUNBLElBR0EsTUF3Qm1DLGdCQWRYLENBaURJLGdCQWxDVSxLQWRiLEtBaUROLGlCQUNuQixTQW5DNkIsMkJBQ0wsc0JBQ0wsYUFoQkEsSUFpQm5CLGFBaEJvQixrQkFDUCxXQUNJLGVBQ2pCIiwiZmlsZSI6Im5vZGVfbW9kdWxlc1xccmMtY29sbGFwc2VcXGFzc2V0c1xcaW5kZXguY3NzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcbm1laXNcXGdpdGh1YlxcaGFjay1yaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5yYy1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbn1cbi5yYy1jb2xsYXBzZS1hbmltLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xufVxuLnJjLWNvbGxhcHNlID4gLnJjLWNvbGxhcHNlLWl0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciAuYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICdcXFxcMjAnO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciAucmMtY29sbGFwc2UtZXh0cmEge1xuICBtYXJnaW46IDAgMTZweCAwIGF1dG87XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbS1kaXNhYmxlZCA+IC5yYy1jb2xsYXBzZS1oZWFkZXIge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbi5yYy1jb2xsYXBzZS1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICM2NjY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5yYy1jb2xsYXBzZS1jb250ZW50ID4gLnJjLWNvbGxhcHNlLWNvbnRlbnQtYm94IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5yYy1jb2xsYXBzZS1jb250ZW50LWluYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yYy1jb2xsYXBzZS1pdGVtOmxhc3QtY2hpbGQgPiAucmMtY29sbGFwc2UtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xufVxuLnJjLWNvbGxhcHNlID4gLnJjLWNvbGxhcHNlLWl0ZW0tYWN0aXZlID4gLnJjLWNvbGxhcHNlLWhlYWRlciAuYXJyb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM2NjY7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuYCJdfQ== */\n/*@ sourceURL=node_modules\\rc-collapse\\assets\\index.css */");

_defaultExport.__hash = "2694693201";
_defaultExport.__scoped = ".rc-collapse.jsx-4154084816{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}.rc-collapse-anim-active.jsx-4154084816{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}.rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816{border-top:1px solid #d9d9d9;}.rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816:first-child{border-top:none;}.rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}.rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}.rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .rc-collapse-extra.jsx-4154084816{margin:0 16px 0 auto;}.rc-collapse.jsx-4154084816>.rc-collapse-item-disabled.jsx-4154084816>.rc-collapse-header.jsx-4154084816{cursor:not-allowed;color:#999;background-color:#f3f3f3;}.rc-collapse-content.jsx-4154084816{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}.rc-collapse-content.jsx-4154084816>.rc-collapse-content-box.jsx-4154084816{margin-top:16px;margin-bottom:16px;}.rc-collapse-content-inactive.jsx-4154084816{display:none;}.rc-collapse-item.jsx-4154084816:last-child>.rc-collapse-content.jsx-4154084816{border-radius:0 0 3px 3px;}.rc-collapse.jsx-4154084816>.rc-collapse-item-active.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xccmMtY29sbGFwc2VcXGFzc2V0c1xcaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0QixBQUtPLEFBR0gsQUFHYixBQUdJLEFBVUMsQUFhQSxBQUdGLEFBS0gsQUFNQSxBQUlILEFBR2EsQUFHUixhQUxwQixHQTVDQSxBQWtDYSxBQU1RLEVBVVgsQ0FyQkcsQ0ExQkUsQ0FVQyxBQWFoQixJQXJDb0IsQ0EwRHBCLEFBSW9DLENBaEJuQixFQXRDakIsQ0FpQzJCLEtBaEJqQixBQTJCVixPQUx3QixDQTlDRyxBQXlCaEIsU0FDRyxHQWVkLEtBcUJxQyxJQW5DckIsQUFvQmhCLElBOUNBLElBR0EsTUF3Qm1DLGdCQWRYLENBaURJLGdCQWxDVSxLQWRiLEtBaUROLGlCQUNuQixTQW5DNkIsMkJBQ0wsc0JBQ0wsYUFoQkEsSUFpQm5CLGFBaEJvQixrQkFDUCxXQUNJLGVBQ2pCIiwiZmlsZSI6Im5vZGVfbW9kdWxlc1xccmMtY29sbGFwc2VcXGFzc2V0c1xcaW5kZXguY3NzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcbm1laXNcXGdpdGh1YlxcaGFjay1yaWNlLXdlYnNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5yYy1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbn1cbi5yYy1jb2xsYXBzZS1hbmltLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xufVxuLnJjLWNvbGxhcHNlID4gLnJjLWNvbGxhcHNlLWl0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciAuYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICdcXFxcMjAnO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5yYy1jb2xsYXBzZSA+IC5yYy1jb2xsYXBzZS1pdGVtID4gLnJjLWNvbGxhcHNlLWhlYWRlciAucmMtY29sbGFwc2UtZXh0cmEge1xuICBtYXJnaW46IDAgMTZweCAwIGF1dG87XG59XG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbS1kaXNhYmxlZCA+IC5yYy1jb2xsYXBzZS1oZWFkZXIge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbi5yYy1jb2xsYXBzZS1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICM2NjY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5yYy1jb2xsYXBzZS1jb250ZW50ID4gLnJjLWNvbGxhcHNlLWNvbnRlbnQtYm94IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5yYy1jb2xsYXBzZS1jb250ZW50LWluYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yYy1jb2xsYXBzZS1pdGVtOmxhc3QtY2hpbGQgPiAucmMtY29sbGFwc2UtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xufVxuLnJjLWNvbGxhcHNlID4gLnJjLWNvbGxhcHNlLWl0ZW0tYWN0aXZlID4gLnJjLWNvbGxhcHNlLWhlYWRlciAuYXJyb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM2NjY7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuYCJdfQ== */\n/*@ sourceURL=node_modules\\rc-collapse\\assets\\index.css */";
_defaultExport.__scopedHash = "4154084816";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head__ = __webpack_require__("./components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_newintro__ = __webpack_require__("./components/newintro.js");
var _jsxFileName = "C:\\Users\\nmeis\\github\\hack-rice-website\\pages\\index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // Set global body styling.

Object(__WEBPACK_IMPORTED_MODULE_3_styled_components__["injectGlobal"])(_templateObject); // Variables for <head>

var title = "HackRice 8.5";
var url = "https://hack.rice.edu";
var ogImage = "../static/og.png";
var description = "The premier hackathon of the south.";

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Provider"], {
    theme: {
      fonts: {
        sans: "'Open Sans', sans-serif",
        mono: "'Overpass Mono', monospace"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_head__["a" /* default */], {
    title: title,
    description: description,
    url: url,
    ogImage: ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_newintro__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1602988616",
    css: "html{background:#a95656 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnVCLEFBR3VDLDhCQUNoQyIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxubWVpc1xcZ2l0aHViXFxoYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyLCBIZWFkaW5nIH0gZnJvbSBcInJlYmFzc1wiO1xyXG5pbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRcIjtcclxuaW1wb3J0IE5ld0ludHJvIGZyb20gXCIuLi9jb21wb25lbnRzL25ld2ludHJvXCI7XHJcblxyXG4vLyBTZXQgZ2xvYmFsIGJvZHkgc3R5bGluZy5cclxuaW5qZWN0R2xvYmFsYFxyXG4gICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgYm9keSB7IG1heC13aWR0aDogOTAwcHg7IG1hcmdpbjogMiUgYXV0bzsgY29sb3I6ICNmZmY7fVxyXG5gO1xyXG5cclxuLy8gVmFyaWFibGVzIGZvciA8aGVhZD5cclxubGV0IHRpdGxlID0gXCJIYWNrUmljZSA4LjVcIjtcclxubGV0IHVybCA9IFwiaHR0cHM6Ly9oYWNrLnJpY2UuZWR1XCI7XHJcbmxldCBvZ0ltYWdlID0gXCIuLi9zdGF0aWMvb2cucG5nXCI7XHJcbmxldCBkZXNjcmlwdGlvbiA9IFwiVGhlIHByZW1pZXIgaGFja2F0aG9uIG9mIHRoZSBzb3V0aC5cIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPFByb3ZpZGVyXHJcbiAgICB0aGVtZT17e1xyXG4gICAgICBmb250czoge1xyXG4gICAgICAgIHNhbnM6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICBtb25vOiBcIidPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlXCJcclxuICAgICAgfVxyXG4gICAgfX1cclxuICA+XHJcbiAgICA8SGVhZCB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gdXJsPXt1cmx9IG9nSW1hZ2U9e29nSW1hZ2V9IC8+XHJcbiAgICA8TmV3SW50cm8gLz5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhOTU2NTYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvUHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/collapse.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".rc-collapse{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}.rc-collapse-header{text-indent:unset !important;}.rc-collapse-header:focus{border:none;box-shadow:unset;outline:none;}.rc-collapse>.rc-collapse-item:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}.faqCard{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}.faqCard:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.rc-collapse-item-active{height:auto !important;}.arrow{display:none;content:\"\";margin-right:0px !important;border:none !important;}.rc-collapse-header{color:#fff !important;height:auto !important;line-height:unset !important;}.rc-collapse-content{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}.rc-collapse-content-box{margin-bottom:15px !important;}.rc-collapse-content-box>p{margin:0px !important;padding:0px !important;}tr:nth-child(even){background-color:rgba(255,255,255,0.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcY29sbGFwc2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUUwQixBQVNNLEFBSWpCLEFBTTJDLEFBS2IsQUFjcEIsQUFJQyxBQUlWLEFBT1MsQUFNQyxBQVNPLEFBSVIsQUFLcUIsWUEvRDFCLENBaUNOLFNBT1ksQUFtQkEsQ0F4RVosQUEwQ2IsQUFpQmEsQ0FaaUIsS0F0QzlCLEFBS2UsQ0FzRGYsSUFuRWUsQUEyREQsS0FwQ0UsQ0FxRGhCLEVBOURBLEdBdUMrQixBQW1CL0IsQ0FaaUQsQ0EzRGxDLEtBaUIyQyxBQTZCakMsQ0F2QmdCLHFCQThCekMsQ0FOQSxHQVhBLGFBWmtCLENBb0NBLGFBMUNsQixFQU9lLENBb0NnQixZQW5DYixDQXpCYSxlQTBCUixDQW1DdkIsaURBbEN3RSwwREExQnhELGNBQ2hCLDBFQTBCYyxZQUNBLFlBQzJCLDZJQUN6QyIsImZpbGUiOiJzdHlsZXNcXGNvbGxhcHNlLmNzcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXG5tZWlzXFxnaXRodWJcXGhhY2stcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AucmMtY29sbGFwc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG5cclxuLnJjLWNvbGxhcHNlLWhlYWRlciB7XHJcbiAgdGV4dC1pbmRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1oZWFkZXI6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiB1bnNldDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcUNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBjb2xvcjogI2VjZWRmMDtcclxuICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZhcUNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1pdGVtLWFjdGl2ZSB7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmMtY29sbGFwc2UtY29udGVudC1ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJjLWNvbGxhcHNlLWNvbnRlbnQtYm94ID4gcCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG59XHJcbmAiXX0= */\n/*@ sourceURL=styles\\collapse.css */");

_defaultExport.__hash = "1381846463";
_defaultExport.__scoped = ".rc-collapse.jsx-488722942{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}.rc-collapse-header.jsx-488722942{text-indent:unset !important;}.rc-collapse-header.jsx-488722942:focus{border:none;box-shadow:unset;outline:none;}.rc-collapse.jsx-488722942>.rc-collapse-item.jsx-488722942:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}.faqCard.jsx-488722942{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}.faqCard.jsx-488722942:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.rc-collapse-item-active.jsx-488722942{height:auto !important;}.arrow.jsx-488722942{display:none;content:\"\";margin-right:0px !important;border:none !important;}.rc-collapse-header.jsx-488722942{color:#fff !important;height:auto !important;line-height:unset !important;}.rc-collapse-content.jsx-488722942{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}.rc-collapse-content-box.jsx-488722942{margin-bottom:15px !important;}.rc-collapse-content-box.jsx-488722942>p.jsx-488722942{margin:0px !important;padding:0px !important;}tr.jsx-488722942:nth-child(even){background-color:rgba(255,255,255,0.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcY29sbGFwc2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUUwQixBQVNNLEFBSWpCLEFBTTJDLEFBS2IsQUFjcEIsQUFJQyxBQUlWLEFBT1MsQUFNQyxBQVNPLEFBSVIsQUFLcUIsWUEvRDFCLENBaUNOLFNBT1ksQUFtQkEsQ0F4RVosQUEwQ2IsQUFpQmEsQ0FaaUIsS0F0QzlCLEFBS2UsQ0FzRGYsSUFuRWUsQUEyREQsS0FwQ0UsQ0FxRGhCLEVBOURBLEdBdUMrQixBQW1CL0IsQ0FaaUQsQ0EzRGxDLEtBaUIyQyxBQTZCakMsQ0F2QmdCLHFCQThCekMsQ0FOQSxHQVhBLGFBWmtCLENBb0NBLGFBMUNsQixFQU9lLENBb0NnQixZQW5DYixDQXpCYSxlQTBCUixDQW1DdkIsaURBbEN3RSwwREExQnhELGNBQ2hCLDBFQTBCYyxZQUNBLFlBQzJCLDZJQUN6QyIsImZpbGUiOiJzdHlsZXNcXGNvbGxhcHNlLmNzcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXG5tZWlzXFxnaXRodWJcXGhhY2stcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AucmMtY29sbGFwc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG5cclxuLnJjLWNvbGxhcHNlLWhlYWRlciB7XHJcbiAgdGV4dC1pbmRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1oZWFkZXI6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiB1bnNldDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucmMtY29sbGFwc2UgPiAucmMtY29sbGFwc2UtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcUNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBjb2xvcjogI2VjZWRmMDtcclxuICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCIsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZhcUNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1pdGVtLWFjdGl2ZSB7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYy1jb2xsYXBzZS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmMtY29sbGFwc2UtY29udGVudC1ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJjLWNvbGxhcHNlLWNvbnRlbnQtYm94ID4gcCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG59XHJcbmAiXX0= */\n/*@ sourceURL=styles\\collapse.css */";
_defaultExport.__scopedHash = "488722942";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./styles/colors.json":
/***/ (function(module, exports) {

module.exports = {"base":"#6164B2","light":"#b6baf9","black":"#3d3e4c","gray":["#f9f9fa","#eff0f9","#dfe0e6","#d1d2db","#c2c2cf","#b1b1c2","#9d9eb2","#8687a0","#696a82","#3d3e4c"],"gray2":["#ebf1f5","#d6e2eb","#bfd1e0","#a5bfd3","#86a9c4","#618eb2","#5780a0","#4c708c","#3f5c73","#2c4152"],"white":["#ffffff"],"lightAccentColor":"#F6B8B8"}

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