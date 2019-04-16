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
var _jsxFileName = "/Users/hughoreilly/Desktop/GitHub/hack-rice-website/components/cardNav.js";




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
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
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
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "card"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2341866401", [__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1]]]])
    }, text))));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2341866401",
    css: "a{-webkit-text-decoration:none;text-decoration:none;}.card{border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], ";color:").concat(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,-webkit-transform 0.3s ease-in-out;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;}.cardTitle{text-transform:uppercase;}.card:hover{background:rgba(255,255,255,0.1);cursor:pointer;-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}.card h3{margin:0;font-size:18px;}.card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}.spacer{margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3VCLEFBSThCLEFBSXlCLEFBWXJCLEFBSVcsQUFNM0IsQUFLQSxBQU9RLFNBWEYsQUFLRSxRQU9uQixPQVhBLENBWEEsQ0FnQmlCLE9BWkEsUUFhQyxLQTdCbUIsRUFpQmIsRUFyQnhCLE9Ba0NBLHdCQTdCeUMsc0NBQzNCLE9BZ0JkLEtBZjhCLDRCQUNMLHVCQUNQLGdCQUNLLGtEQUM2RSx3VEFDcEciLCJmaWxlIjoiY29tcG9uZW50cy9jYXJkTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9odWdob3JlaWxseS9EZXNrdG9wL0dpdEh1Yi9oYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5sZXQgU2Nyb2xsaW5nTGluayA9IFNjcm9sbC5MaW5rO1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XG5cbmNvbnN0IENhcmROYXYgPSBwcm9wcyA9PiAoXG4gIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiIG14PXstMn0gcHQ9ezJ9PlxuICAgIHtwcm9wcy5jYXJkcy5tYXAoKHsga2V5LCBocmVmLCB0bywgdGl0bGUsIHRleHQsIGljb24gfSkgPT5cbiAgICAgIGhyZWYgIT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8Qm94IGtleT17a2V5fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gM119PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApIDogKFxuICAgICAgICA8Qm94IGtleT17a2V5fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gM119PlxuICAgICAgICAgIDxTY3JvbGxpbmdMaW5rIHRvPXt0b30gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkVGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1Njcm9sbGluZ0xpbms+XG4gICAgICAgIDwvQm94PlxuICAgICAgKVxuICAgICl9XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yc1tcImdyYXlcIl1bMV19O1xuICAgICAgICBjb2xvcjogJHtjb2xvcnNbXCJncmF5XCJdWzFdfTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkVGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc3BhY2VyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ZsZXg+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkTmF2O1xuIl19 */\n/*@ sourceURL=components/cardNav.js */"),
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
var _jsxFileName = "/Users/hughoreilly/Desktop/GitHub/hack-rice-website/components/head.js";




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

/***/ "./components/tempIntro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardNav__ = __webpack_require__("./components/cardNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rebass__ = __webpack_require__("rebass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_tempIntro__ = __webpack_require__("./content/tempIntro.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_links__ = __webpack_require__("./content/links.js");
var _jsxFileName = "/Users/hughoreilly/Desktop/GitHub/hack-rice-website/components/tempIntro.js";










var TempIntro = function TempIntro() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Box"], {
    bg: __WEBPACK_IMPORTED_MODULE_6__styles_colors_json__["base9"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Image"], {
    src: "../static/blueH.png",
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      marginBottom: "10%",
      width: "25%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rebass__["Box"], {
    width: "auto",
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "introText"
  }, __WEBPACK_IMPORTED_MODULE_5__content_tempIntro__["c" /* intro */]), __WEBPACK_IMPORTED_MODULE_5__content_tempIntro__["a" /* bullets */].map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        button = _ref.button,
        note = _ref.note,
        icon = _ref.icon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "introItem"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "icon"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "styledlink"
    }, button), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "spacer"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "note"
    }, note));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "cards"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__cardNav__["a" /* default */], {
    cards: __WEBPACK_IMPORTED_MODULE_5__content_tempIntro__["b" /* cards */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "social"
  }, __WEBPACK_IMPORTED_MODULE_7__content_links__["a" /* links */].map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        icon = _ref2.icon;
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
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["986405310", [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]]]) + " " + "icon"
    })));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "986405310",
    css: ".introText{font-family:\"Overpass Mono\";font-size:1.5em;font-weight:700;text-transform:uppercase;}.introItem{margin-bottom:10px;}a.styledlink{color:#fff;-webkit-text-decoration:none;text-decoration:none;background:rgba(255,255,255,0.1);-webkit-transition:background 0.3s ease-in-out,color 0.3s ease-in-out;transition:background 0.3s ease-in-out,color 0.3s ease-in-out;padding:3px 5px;margin:3px;text-transform:uppercase;font-size:0.85em;font-weight:500;}a.styledlink:hover{color:#60b2b2;background:rgba(255,255,255,1);}.icon{padding:4px 13px;}.social{text-align:center;margin-top:10em;}.note{text-transform:uppercase;font-size:0.8em;font-weight:300;font-family:\"Overpass Mono\";}.spacer{margin-right:5px;}.card{border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], ";color:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}.cardTitle{text-transform:uppercase;}.card:hover{background:rgba(255,255,255,0.1);cursor:pointer;}.card h3{margin:0;font-size:18px;}.card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}@media (max-width:575px){.note{display:block;margin-top:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVtcEludHJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEdUIsQUFHcUMsQUFPVCxBQUlSLEFBWUcsQUFLRyxBQUlDLEFBS08sQUFPUixBQUk2QixBQVlyQixBQUlXLEFBSzNCLEFBS0EsQUFRTyxTQVpELEFBS0UsRUEvREksR0FZYSxBQTJEakIsR0F0RG5CLEFBZ0JBLENBWmtCLENBekJsQixLQStEQSxDQWpDa0IsQUF1QmxCLENBZWlCLEVBM0VDLENBbUZoQixJQW5CZSxDQS9CakIsT0FLa0IsQUFzQ0EsR0EzRUEsQ0F1QmxCLENBd0JxQyxFQWlCckMsU0ExQjhCLEFBc0M5QixHQTNFMkIsQ0FVVyxvQkFxQ0csSUE5Q3pDLEFBcUNBLFNBM0JpRSx5QkFxQ25ELFlBQ2dCLDRCQUNMLHVCQUNQLGdCQUNLLDRCQXhDTCxnQkFDTCxNQXdDMkQsS0F2QzdDLHlCQUNSLGlCQUNELGdCQUNsQixtRkFxQ0EiLCJmaWxlIjoiY29tcG9uZW50cy90ZW1wSW50cm8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2h1Z2hvcmVpbGx5L0Rlc2t0b3AvR2l0SHViL2hhY2stcmljZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENhcmROYXYgZnJvbSBcIi4vY2FyZE5hdlwiO1xuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IGludHJvLCBidWxsZXRzLCBjYXJkcyB9IGZyb20gXCIuLi9jb250ZW50L3RlbXBJbnRyb1wiO1xuaW1wb3J0IHsgYmFzZTkgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9ycy5qc29uXCI7XG5pbXBvcnQgeyBsaW5rcyB9IGZyb20gXCIuLi9jb250ZW50L2xpbmtzXCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvY29sb3JzLmpzb25cIjtcblxuY29uc3QgVGVtcEludHJvID0gKCkgPT4gKFxuICA8Qm94IGJnPXtiYXNlOX0+XG4gICAgPEltYWdlXG4gICAgICBzcmM9XCIuLi9zdGF0aWMvYmx1ZUgucG5nXCJcbiAgICAgIGNzcz17e1xuICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTAlXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMCVcIixcbiAgICAgICAgd2lkdGg6IFwiMjUlXCJcbiAgICAgIH19XG4gICAgLz5cblxuICAgPEJveCB3aWR0aD1cImF1dG9cIiBweD17Mn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiaW50cm9UZXh0XCI+e2ludHJvfTwvaDE+XG4gICAgICB7YnVsbGV0cy5tYXAoKHsga2V5LCBocmVmLCBidXR0b24sIG5vdGUsIGljb24gfSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJpbnRyb0l0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e2ljb259IC8+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwic3R5bGVkbGlua1wiPlxuICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RlXCI+e25vdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgPENhcmROYXYgY2FyZHM9e2NhcmRzfSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cbiAgICAgIHtsaW5rcy5tYXAoKHsga2V5LCBocmVmLCBpY29uIH0pID0+IChcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtrZXl9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgIC5pbnRyb0l0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBhLnN0eWxlZGxpbmsge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dCwgY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICBhLnN0eWxlZGxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzYwYjJiMjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTNweDtcbiAgICAgIH1cblxuICAgICAgLnNvY2lhbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBlbTtcbiAgICAgIH1cblxuICAgICAgLm5vdGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LWZhbWlseTogXCJPdmVycGFzcyBNb25vXCI7XG4gICAgICB9XG5cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yc1tcImdyYXlcIl1bMV19O1xuICAgICAgICBjb2xvcjogJHtjb2xvcnNbXCJncmF5XCJdWzFdfTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3ZlcnBhc3MgTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmNhcmRUaXRsZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICAubm90ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBJbnRybztcbiJdfQ== */\n/*@ sourceURL=components/tempIntro.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1], __WEBPACK_IMPORTED_MODULE_6__styles_colors_json___default.a["gray"][1]]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (TempIntro);

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
  href: "mailto:hack@rice.edu",
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

/***/ "./content/tempIntro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bullets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cards; });
var intro = "HackRice 9: Coming Soon...";
var bullets = [{
  icon: "https://icon.now.sh/calendar/ffffff",
  button: "September 20–22, 2019",
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
  icon: "https://icon.now.sh/compose/ffffff",
  title: "Registration...",
  href: "#",
  text: "Hasn't opened yet! Please check in later."
}, {
  icon: "https://icon.now.sh/send/ffffff",
  title: "Sponsors",
  href: "../static/sponsorPacket.pdf",
  text: "Thanks for your interest! Check out our sponsorship packet →"
}, {
  icon: "https://icon.now.sh/phone/ffffff",
  title: "Contact",
  href: "mailto:hack@rice.edu",
  text: "Have a question? Reach out via email →"
}].map(function (card) {
  card.key = "card-".concat(card.title);
  return card;
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_colors_json__ = __webpack_require__("./styles/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_colors_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_colors_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head__ = __webpack_require__("./components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tempIntro__ = __webpack_require__("./components/tempIntro.js");
var _jsxFileName = "/Users/hughoreilly/Desktop/GitHub/hack-rice-website/pages/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // Set global body styling.

Object(__WEBPACK_IMPORTED_MODULE_3_styled_components__["injectGlobal"])(_templateObject); // Variables for <head>

var title = "HackRice 9";
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
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_head__["a" /* default */], {
    title: title,
    description: description,
    url: url,
    ogImage: ogImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_tempIntro__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1287042519",
    css: "html{background:#60b2b2 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCdUIsQUFHdUMsOEJBQ2hDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9odWdob3JlaWxseS9EZXNrdG9wL0dpdEh1Yi9oYWNrLXJpY2Utd2Vic2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgaW5qZWN0R2xvYmFsIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBiYXNlOSB9IGZyb20gXCIuLi9zdHlsZXMvY29sb3JzLmpzb25cIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZFwiO1xuaW1wb3J0IFRlbXBJbnRybyBmcm9tIFwiLi4vY29tcG9uZW50cy90ZW1wSW50cm9cIjtcblxuLy8gU2V0IGdsb2JhbCBib2R5IHN0eWxpbmcuXG5pbmplY3RHbG9iYWxgXG4gICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIGJvZHkgeyBtYXgtd2lkdGg6IDkwMHB4OyBtYXJnaW46IDIlIGF1dG87IGNvbG9yOiAjZmZmO31cbmA7XG5cbi8vIFZhcmlhYmxlcyBmb3IgPGhlYWQ+XG5sZXQgdGl0bGUgPSBcIkhhY2tSaWNlIDlcIjtcbmxldCB1cmwgPSBcImh0dHBzOi8vaGFjay5yaWNlLmVkdVwiO1xubGV0IG9nSW1hZ2UgPSBcIi4uL3N0YXRpYy9vZy5wbmdcIjtcbmxldCBkZXNjcmlwdGlvbiA9IFwiVGhlIHByZW1pZXIgaGFja2F0aG9uIG9mIHRoZSBzb3V0aC5cIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPFByb3ZpZGVyXG4gICAgdGhlbWU9e3tcbiAgICAgIGZvbnRzOiB7XG4gICAgICAgIHNhbnM6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgbW9ubzogXCInT3ZlcnBhc3MgTW9ubycsIG1vbm9zcGFjZVwiXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxIZWFkIHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSB1cmw9e3VybH0gb2dJbWFnZT17b2dJbWFnZX0gLz5cbiAgICA8VGVtcEludHJvIC8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNjBiMmIyICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/colors.json":
/***/ (function(module, exports) {

module.exports = {"base":"#6164B2","light":"#b6baf9","black":"#3d3e4c","gray":["#f9f9fa","#eff0f9","#dfe0e6","#d1d2db","#c2c2cf","#b1b1c2","#9d9eb2","#8687a0","#696a82","#3d3e4c"],"gray2":["#ebf1f5","#d6e2eb","#bfd1e0","#a5bfd3","#86a9c4","#618eb2","#5780a0","#4c708c","#3f5c73","#2c4152"],"white":["#ffffff"],"lightAccentColor":"#F6B8B8","base9":"#60b2b2"}

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