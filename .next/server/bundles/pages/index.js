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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"base":"#6164B2","light":"#b6baf9","black":"#3d3e4c","gray":["#f9f9fa","#eff0f9","#dfe0e6","#d1d2db","#c2c2cf","#b1b1c2","#9d9eb2","#8687a0","#696a82","#3d3e4c"],"gray2":["#ebf1f5","#d6e2eb","#bfd1e0","#a5bfd3","#86a9c4","#618eb2","#5780a0","#4c708c","#3f5c73","#2c4152"],"white":["#ffffff"],"lightAccentColor":"#F6B8B8"}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);




var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700",
    rel: "stylesheet"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
    rel: "stylesheet"
  }));
};

Head.defaultProps = {
  title: "",
  description: "",
  url: "",
  ogImage: ""
};
/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = [".rc-collapse{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}", ".rc-collapse-anim-active{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}", ".rc-collapse>.rc-collapse-item{border-top:1px solid #d9d9d9;}", ".rc-collapse>.rc-collapse-item:first-child{border-top:none;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header .arrow{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header .rc-collapse-extra{margin:0 16px 0 auto;}", ".rc-collapse>.rc-collapse-item-disabled>.rc-collapse-header{cursor:not-allowed;color:#999;background-color:#f3f3f3;}", ".rc-collapse-content{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}", ".rc-collapse-content>.rc-collapse-content-box{margin-top:16px;margin-bottom:16px;}", ".rc-collapse-content-inactive{display:none;}", ".rc-collapse-item:last-child>.rc-collapse-content{border-radius:0 0 3px 3px;}", ".rc-collapse>.rc-collapse-item-active>.rc-collapse-header .arrow{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];
_defaultExport.__hash = "2694693201";
_defaultExport.__scoped = [".rc-collapse.jsx-4154084816{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}", ".rc-collapse-anim-active.jsx-4154084816{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816{border-top:1px solid #d9d9d9;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816:first-child{border-top:none;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .rc-collapse-extra.jsx-4154084816{margin:0 16px 0 auto;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item-disabled.jsx-4154084816>.rc-collapse-header.jsx-4154084816{cursor:not-allowed;color:#999;background-color:#f3f3f3;}", ".rc-collapse-content.jsx-4154084816{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}", ".rc-collapse-content.jsx-4154084816>.rc-collapse-content-box.jsx-4154084816{margin-top:16px;margin-bottom:16px;}", ".rc-collapse-content-inactive.jsx-4154084816{display:none;}", ".rc-collapse-item.jsx-4154084816:last-child>.rc-collapse-content.jsx-4154084816{border-radius:0 0 3px 3px;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item-active.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];
_defaultExport.__scopedHash = "4154084816";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = [".rc-collapse{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}", ".rc-collapse-header{text-indent:unset !important;}", ".rc-collapse-header:focus{border:none;box-shadow:unset;outline:none;}", ".rc-collapse>.rc-collapse-item:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}", ".faqCard{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}", ".faqCard:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".rc-collapse-item-active{height:auto !important;}", ".arrow{display:none;content:\"\";margin-right:0px !important;border:none !important;}", ".rc-collapse-header{color:#fff !important;height:auto !important;line-height:unset !important;}", ".rc-collapse-content{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}", ".rc-collapse-content-box{margin-bottom:15px !important;}", ".rc-collapse-content-box>p{margin:0px !important;padding:0px !important;}", "tr:nth-child(even){background-color:rgba(255,255,255,0.05);}"];
_defaultExport.__hash = "1381846463";
_defaultExport.__scoped = [".rc-collapse.jsx-488722942{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}", ".rc-collapse-header.jsx-488722942{text-indent:unset !important;}", ".rc-collapse-header.jsx-488722942:focus{border:none;box-shadow:unset;outline:none;}", ".rc-collapse.jsx-488722942>.rc-collapse-item.jsx-488722942:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}", ".faqCard.jsx-488722942{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}", ".faqCard.jsx-488722942:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".rc-collapse-item-active.jsx-488722942{height:auto !important;}", ".arrow.jsx-488722942{display:none;content:\"\";margin-right:0px !important;border:none !important;}", ".rc-collapse-header.jsx-488722942{color:#fff !important;height:auto !important;line-height:unset !important;}", ".rc-collapse-content.jsx-488722942{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}", ".rc-collapse-content-box.jsx-488722942{margin-bottom:15px !important;}", ".rc-collapse-content-box.jsx-488722942>p.jsx-488722942{margin:0px !important;padding:0px !important;}", "tr.jsx-488722942:nth-child(even){background-color:rgba(255,255,255,0.05);}"];
_defaultExport.__scopedHash = "488722942";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(5);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(7);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(6);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./components/cardNav.js




var ScrollingLink = external__react_scroll_["Link"];


var cardNav_CardNav = function CardNav(props) {
  return external__react__default.a.createElement(external__rebass_["Flex"], {
    flexWrap: "wrap",
    mx: -2,
    pt: 2
  }, props.cards.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        to = _ref.to,
        title = _ref.title,
        text = _ref.text,
        icon = _ref.icon;
    return href != undefined ? external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3]
    }, external__react__default.a.createElement("a", {
      href: href,
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, text)))) : external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3]
    }, external__react__default.a.createElement(ScrollingLink, {
      to: to,
      smooth: true,
      duration: 500
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["2482026976", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, text))));
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "2482026976",
    css: ["a{-webkit-text-decoration:none;text-decoration:none;}", ".card{border:1px solid ".concat(colors_default.a["gray"][1], ";color:").concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,-webkit-transform 0.3s ease-in-out;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;}"), ".cardTitle{text-transform:uppercase;}", ".card:hover{background:rgba(255,255,255,0.1);cursor:pointer;-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}", ".card h3{margin:0;font-size:18px;}", ".card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}", ".spacer{margin-right:5px;}"],
    dynamic: [colors_default.a["gray"][1], colors_default.a["gray"][1]]
  }));
};

/* harmony default export */ var cardNav = (cardNav_CardNav);
// CONCATENATED MODULE: ./content/newCalendar.js
var newCalendar_title = "Schedule";
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
// CONCATENATED MODULE: ./components/newCalendar.js







var newCalendar_Calendar = function Calendar() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "calendar"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    bg: "#e89e9ec7",
    color: "#9F5A58",
    py: 3
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    mx: 5,
    px: 3,
    pt: 4
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "title"
  }, newCalendar_title)), external__react__default.a.createElement(external__rebass_["Flex"], {
    my: 1,
    pb: 4,
    mx: 5,
    flexWrap: "wrap"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    width: [1, 1 / 2]
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "dayName"
  }, dayOne), external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "dayContent"
  }, friday.map(function (_ref) {
    var key = _ref.key,
        title = _ref.title,
        time = _ref.time,
        detail = _ref.detail;
    return external__react__default.a.createElement("li", {
      key: key,
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "dayItem"
    }, external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "itemTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "itemTime"
    }, time), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "itemDetail"
    }, detail));
  }))), external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    width: [1, 1 / 2]
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "dayName"
  }, dayTwo), external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "dayContent"
  }, saturday.map(function (_ref2) {
    var key = _ref2.key,
        title = _ref2.title,
        time = _ref2.time,
        detail = _ref2.detail;
    return external__react__default.a.createElement("li", {
      key: key,
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "dayItem"
    }, external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "itemTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "itemTime"
    }, time), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["1243645028", [colors_default.a["white"]]]]) + " " + "itemDetail"
    }, detail));
  })))), external__react__default.a.createElement(style__default.a, {
    styleId: "1243645028",
    css: ["h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",monospace;}", ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["white"], ";background:#9F5A58;padding:2px 10px;}"), ".dayName.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;color:#9F5A58;text-transform:uppercase;}", ".dayContent.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:48%;float:left;margin:0px;list-style-type:none;padding:0;width:100%;}", ".dayItem.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,0.1);background:#f6b8b878;color:#9F5A58;padding:8px 10px;-webkit-transition:border 0.3s ease-in-out,background 0.3s ease-in-out,box-shadow 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition:border 0.3s ease-in-out,background 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;transition:border 0.3s ease-in-out,background 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;margin-bottom:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".dayItem.__jsx-style-dynamic-selector:hover{background:#f6b8b8;border:1px solid #9F5A58;box-shadow:0px 3px 5px 2px rgba(97,100,178,0.05);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".dayContent.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", ".itemTime.__jsx-style-dynamic-selector{display:block;margin-top:2px;font-size:0.8em;font-family:\"Overpass Mono\";}", ".itemTitle.__jsx-style-dynamic-selector{margin-top:5px;display:inline-block;font-size:0.8em;font-weight:400;font-family:\"Overpass Mono\";background:rgba(255,255,255,0.3);padding:2px 5px;color:#9F5A58;}", ".itemDetail.__jsx-style-dynamic-selector{clear:both;display:block;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:0.8em;margin-top:0.5em;}"],
    dynamic: [colors_default.a["white"]]
  })));
};

/* harmony default export */ var newCalendar = (newCalendar_Calendar);
// CONCATENATED MODULE: ./content/newTracks.js
var newTracks_title = "Tracks & Challenges";
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
// CONCATENATED MODULE: ./components/newTracks.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var newTracks_Tracks = function Tracks() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "tracks"
  }, external__react__default.a.createElement(external__rebass_["Box"], _defineProperty({
    mx: "auto",
    pt: 3
  }, "mx", 3), external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]]) + " " + "title"
  }, "Tracks"), external__react__default.a.createElement(external__rebass_["Flex"], {
    justifyContent: "center"
  }, trackCards.map(function (_ref) {
    var title = _ref.title,
        icon = _ref.icon,
        text = _ref.text,
        href = _ref.href,
        key = _ref.key;
    return external__react__default.a.createElement(external__rebass_["Box"], {
      width: [1, 1 / 2]
    }, external__react__default.a.createElement("a", {
      href: href,
      className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]])
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]]) + " " + "card"
    }, external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      px: 2,
      py: 2
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]]) + " " + "info"
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]]) + " " + "label"
    }, " ", title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["2872309253", [colors["lightAccentColor"]]]]) + " " + "trackInfo"
    }, text)))));
  }))), external__react__default.a.createElement(style__default.a, {
    styleId: "2872309253",
    css: [".title.__jsx-style-dynamic-selector{display:inline-block;font-family:Overpass Mono;text-transform:uppercase;color:#a95656;background:#ffffff;padding:2px 10px;margin-left:0.5em;}", ".label.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:bold;}", ".card.__jsx-style-dynamic-selector{height:210px !important;border:1.5px solid;border-color:".concat(colors["lightAccentColor"], ";-webkit-transition:-webkit-transform 0.3s ease-in-out,opacity 0.3s ease-in-out;-webkit-transition:transform 0.3s ease-in-out,opacity 0.3s ease-in-out;transition:transform 0.3s ease-in-out,opacity 0.3s ease-in-out;}"), ".card.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}", ".info.__jsx-style-dynamic-selector{padding:1px;}", "a.__jsx-style-dynamic-selector{color:inherit;-webkit-text-decoration:none;text-decoration:none;}", ".trackInfo.__jsx-style-dynamic-selector{font-family:\"Open Sans\";font-weight:normal;text-transform:none !important;}"],
    dynamic: [colors["lightAccentColor"]]
  }));
};

/* harmony default export */ var newTracks = (newTracks_Tracks);
// CONCATENATED MODULE: ./content/prizes.js
var prizes_title = 'Prizes';
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
// CONCATENATED MODULE: ./components/prizes.js







var prizes_Prizes = function Prizes() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "prizes"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    bg: "#e89e9ec7",
    color: "#9F5A58",
    py: 4,
    my: 50
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    mx: 5,
    px: 3
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + "title"
  }, prizes_title)), external__react__default.a.createElement(external__rebass_["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap"
  }, places.map(function (_ref) {
    var place = _ref.place,
        prize = _ref.prize,
        key = _ref.key;
    return external__react__default.a.createElement(external__rebass_["Box"], {
      width: [1, 1 / 4],
      key: key,
      mx: 2,
      my: 2
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + 'prize'
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + 'itemTitle'
    }, place), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + 'item'
    }, prize)));
  })), external__react__default.a.createElement(external__rebass_["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap"
  }, trackWinners.map(function (_ref2) {
    var place = _ref2.place,
        prize = _ref2.prize,
        key = _ref2.key;
    return external__react__default.a.createElement(external__rebass_["Box"], {
      width: [1, 9 / 24],
      key: key,
      mx: 2,
      my: 2
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + 'prize'
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + 'itemTitle'
    }, place), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["1639826769", [colors_default.a["white"]]]]) + " " + 'item'
    }, prize)));
  }))), external__react__default.a.createElement(style__default.a, {
    styleId: "1639826769",
    css: [".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["white"], ";background:#9F5A58;padding:2px 10px;}"), ".prize.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,0.1);background:#f6b8b878;color:#9F5A58;padding:8px 10px;-webkit-transition:border 0.3s ease-in-out,-webkit-transform 0.3s ease-in-out,background 0.3s ease-in-out;-webkit-transition:border 0.3s ease-in-out,transform 0.3s ease-in-out,background 0.3s ease-in-out;transition:border 0.3s ease-in-out,transform 0.3s ease-in-out,background 0.3s ease-in-out;}", ".prize.__jsx-style-dynamic-selector:hover{background:#f6b8b8;-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);border:1px solid #9F5A58;}", ".itemTitle.__jsx-style-dynamic-selector{margin-top:5px;display:inline-block;font-size:1.2em;font-weight:400;font-family:\"Overpass Mono\";background:rgba(255,255,255,0.3);padding:4px 5px;color:#9F5A58;}", ".item.__jsx-style-dynamic-selector{margin-top:-2px;}"],
    dynamic: [colors_default.a["white"]]
  }));
};

/* harmony default export */ var prizes = (prizes_Prizes);
// EXTERNAL MODULE: external "rc-collapse"
var external__rc_collapse_ = __webpack_require__(10);
var external__rc_collapse__default = /*#__PURE__*/__webpack_require__.n(external__rc_collapse_);

// EXTERNAL MODULE: ./node_modules/rc-collapse/assets/index.css
var assets = __webpack_require__(11);

// EXTERNAL MODULE: ./styles/collapse.css
var collapse = __webpack_require__(12);

// CONCATENATED MODULE: ./content/newFaqs.js

var newFaqs_title = "QUESTIONS & ANSWERS";
var faqs = [{
  question: "How do I submit my project? Is there a Devpost?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "You can submit your project on", " ", external__react__default.a.createElement("a", {
    className: "styledlink",
    href: "https://hackrice8.devpost.com/"
  }, "this Devpost link"))
}, {
  question: "Who is eligible to participate in HackRice?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the", " ", external__react__default.a.createElement("a", {
    className: "styledlink",
    href: "http://static.mlh.io/docs/mlh-code-of-conduct.pdf"
  }, "MLH Code of Conduct."))
}, {
  question: "Is there a HackRice Facebook page?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "Yes there is! Click", " ", external__react__default.a.createElement("a", {
    className: "styledlink",
    href: "https://www.facebook.com/hackrice/"
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
// CONCATENATED MODULE: ./components/newFaqs.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function newFaqs__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var newFaqs_Questions =
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
        questions: faqs
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
      var shift = faqs.length / 3;
      var cols = [];

      for (var i = 0; i < faqs.length; i += shift) {
        cols.push(external__react__default.a.createElement(external__rebass_["Flex"], {
          flexWrap: "wrap",
          flexDirection: "column",
          width: [1, 1 / 2, 1 / 3]
        }, faqs.slice(i, i + shift).map(function (_ref2) {
          var key = _ref2.key,
              question = _ref2.question,
              answer = _ref2.answer;
          return external__react__default.a.createElement(external__rc_collapse__default.a, {
            key: key,
            accordion: false,
            onChange: _this2.onChange,
            activeKey: state.activeKey
          }, external__react__default.a.createElement(external__rc_collapse_["Panel"], {
            className: "faqCard",
            key: key,
            header: question,
            headerClass: "faqCardTitle"
          }, external__react__default.a.createElement("p", null, answer)));
        }), external__react__default.a.createElement(style__default.a, {
          styleId: assets["a" /* default */].__hash,
          css: assets["a" /* default */]
        }), external__react__default.a.createElement(style__default.a, {
          styleId: collapse["a" /* default */].__hash,
          css: collapse["a" /* default */]
        })));
      }

      return external__react__default.a.createElement(external__react_scroll_["Element"], {
        name: "faq"
      }, external__react__default.a.createElement(external__rebass_["Box"], newFaqs__defineProperty({
        mx: "auto",
        pt: 3
      }, "mx", 3), external__react__default.a.createElement("h2", {
        className: "jsx-2375766004" + " " + "title"
      }, newFaqs_title)), external__react__default.a.createElement(external__rebass_["Flex"], {
        flexDirection: "row",
        flexWrap: "wrap",
        mt: 2,
        mb: 5,
        pt: 2
      }, cols), external__react__default.a.createElement(style__default.a, {
        styleId: "2375766004",
        css: [".title.jsx-2375766004{display:inline-block;font-family:Overpass Mono;text-transform:uppercase;color:#a95656;background:#ffffff;padding:2px 10px;margin-left:0.5em;}"]
      }));
    }
  }]);

  return Questions;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./content/links.js
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
// CONCATENATED MODULE: ./content/newIntro.js
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
// CONCATENATED MODULE: ./components/newintro.js













var newintro_NewIntro = function NewIntro() {
  return external__react__default.a.createElement(external__rebass_["Box"], {
    bg: colors["newbase"]
  }, external__react__default.a.createElement(external__rebass_["Image"], {
    src: "../static/hr85.png",
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      marginBottom: "10%",
      width: "40%"
    }
  }), external__react__default.a.createElement("div", {
    className: "jsx-2018038098" + " " + "cards"
  }, external__react__default.a.createElement(cardNav, {
    cards: cards
  })), external__react__default.a.createElement("div", {
    className: "jsx-2018038098" + " " + "calendar"
  }, external__react__default.a.createElement(newCalendar, null)), external__react__default.a.createElement("div", {
    className: "jsx-2018038098" + " " + "tracks"
  }, external__react__default.a.createElement(newTracks, null)), external__react__default.a.createElement("div", {
    className: "jsx-2018038098" + " " + 'prizes'
  }, external__react__default.a.createElement(prizes, null)), external__react__default.a.createElement("div", {
    className: "jsx-2018038098" + " " + "faqs"
  }, external__react__default.a.createElement(newFaqs_Questions, null)), external__react__default.a.createElement("div", {
    className: "jsx-2018038098" + " " + "social"
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        icon = _ref.icon;
    return external__react__default.a.createElement(link__default.a, {
      href: href,
      key: key
    }, external__react__default.a.createElement("a", {
      className: "jsx-2018038098"
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: "jsx-2018038098" + " " + "icon"
    })));
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "2018038098",
    css: ["a{display:inline !important;}", "a.img{margin-right:0px !important;}", ".icon{padding:4px 13px;}", ".social{text-align:center;margin-top:10em;}", ".calendar{margin-top:3em;}", ".tracks{margin-top:2em;}"]
  }));
};

/* harmony default export */ var newintro = (newintro_NewIntro);
// CONCATENATED MODULE: ./pages/index.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // Set global body styling.

Object(external__styled_components_["injectGlobal"])(_templateObject); // Variables for <head>

var pages_title = "HackRice 8.5";
var url = "https://hack.rice.edu";
var ogImage = "../static/og.png";
var description = "The premier hackathon of the south.";

var pages_Home = function Home() {
  return external__react__default.a.createElement(external__rebass_["Provider"], {
    theme: {
      fonts: {
        sans: "'Open Sans', sans-serif",
        mono: "'Overpass Mono', monospace"
      }
    }
  }, external__react__default.a.createElement(head["a" /* default */], {
    title: pages_title,
    description: description,
    url: url,
    ogImage: ogImage
  }), external__react__default.a.createElement(newintro, null), external__react__default.a.createElement(style__default.a, {
    styleId: "1602988616",
    css: ["html{background:#a95656 !important;}"]
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);