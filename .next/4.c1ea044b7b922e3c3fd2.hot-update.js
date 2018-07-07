webpackHotUpdate(4,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_regular_faCalendar__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-regular/faCalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_regular_faCalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_regular_faCalendar__);
var _jsxFileName = "/Users/achal/Dropbox/code/hackrice/hackrice-website/components/Header.js";





var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    id: "header",
    style: props.timeout ? {
      display: 'none'
    } : {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/images/logo.png",
    transform: "grow-18",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "type",
    src: "../static/images/type.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_regular_faCalendar___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), "September 14-16, 2018"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Rice Memorial Center"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('intro');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Intro")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('criteria');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Criteria")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('faq');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "FAQ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('sponsors');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Sponsors")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('contact');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "Contact")))));
};

Header.propTypes = {
  onOpenArticle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  timeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-regular/faCalendar.js":
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'calendar', icon: [448, 512, [], "f133", "M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"] };

/***/ })

})
//# sourceMappingURL=4.c1ea044b7b922e3c3fd2.hot-update.js.map