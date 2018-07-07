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
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/images/logo.png",
    transform: "grow-18",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "type",
    src: "../static/images/type.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_regular_faCalendar___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), " September 14-16, 2018"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular_faMap___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), " Rice Memorial Center"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('intro');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["a" /* default */], {
    icon: __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_regular_faHandSpock___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), " Intro")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('criteria');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Criteria")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('faq');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "FAQ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('sponsors');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "Sponsors")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('contact');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Contact")))));
};

Header.propTypes = {
  onOpenArticle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  timeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-regular/faHandSpock.js":
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'hand-spock', icon: [512, 512, [], "f259", "M21.096 381.79l129.092 121.513a32 32 0 0 0 21.932 8.698h237.6c14.17 0 26.653-9.319 30.68-22.904l31.815-107.313A115.955 115.955 0 0 0 477 348.811v-36.839c0-4.051.476-8.104 1.414-12.045l31.73-133.41c10.099-42.412-22.316-82.738-65.544-82.525-4.144-24.856-22.543-47.165-49.85-53.992-35.803-8.952-72.227 12.655-81.25 48.75L296.599 184 274.924 52.01c-8.286-36.07-44.303-58.572-80.304-50.296-29.616 6.804-50.138 32.389-51.882 61.295-42.637.831-73.455 40.563-64.071 81.844l31.04 136.508c-27.194-22.515-67.284-19.992-91.482 5.722-25.376 26.961-24.098 69.325 2.871 94.707zm32.068-61.811l.002-.001c7.219-7.672 19.241-7.98 26.856-.813l53.012 49.894C143.225 378.649 160 371.4 160 357.406v-69.479c0-1.193-.134-2.383-.397-3.546l-34.13-150.172c-5.596-24.617 31.502-32.86 37.054-8.421l30.399 133.757a16 16 0 0 0 15.603 12.454h8.604c10.276 0 17.894-9.567 15.594-19.583l-41.62-181.153c-5.623-24.469 31.39-33.076 37.035-8.508l45.22 196.828A16 16 0 0 0 288.956 272h13.217a16 16 0 0 0 15.522-12.119l42.372-169.49c6.104-24.422 42.962-15.159 36.865 9.217L358.805 252.12c-2.521 10.088 5.115 19.88 15.522 19.88h9.694a16 16 0 0 0 15.565-12.295L426.509 146.6c5.821-24.448 42.797-15.687 36.966 8.802L431.72 288.81a100.094 100.094 0 0 0-2.72 23.162v36.839c0 6.548-.943 13.051-2.805 19.328L397.775 464h-219.31L53.978 346.836c-7.629-7.18-7.994-19.229-.814-26.857z"] };

/***/ })

})
//# sourceMappingURL=4.099ff3ce3df0bbd23394.hot-update.js.map