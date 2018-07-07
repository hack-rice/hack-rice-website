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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular_faMap__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-regular/faMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular_faMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular_faMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular_faHandSpock__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-regular/faHandSpock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular_faHandSpock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular_faHandSpock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faTrophy__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/faTrophy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faTrophy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faTrophy__);
var _jsxFileName = "/Users/achal/Dropbox/code/hackrice/hackrice-website/components/Header.js";

 // Icons







var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    id: "header",
    style: props.timeout ? {
      display: 'none'
    } : {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/images/logo.png",
    transform: "grow-18",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "type",
    src: "../static/images/type.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_regular_faCalendar___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), " September 14-16, 2018"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular_faMap___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), " Rice Memorial Center"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('intro');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular_faHandSpock___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), " Intro")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('criteria');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faTrophy___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), " Criteria")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('faq');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "FAQ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('sponsors');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "Sponsors")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('contact');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, "Contact")))));
};

Header.propTypes = {
  onOpenArticle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  timeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faTrophy.js":
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'trophy', icon: [576, 512, [], "f091", "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTrophy.js":
false

})
//# sourceMappingURL=4.6ac73960ed31bbf8c4d7.hot-update.js.map