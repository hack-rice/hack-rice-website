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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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

module.exports = {"base":"#6164B2","light":"#b6baf9","black":"#3d3e4c","gray":["#f9f9fa","#eff0f9","#dfe0e6","#d1d2db","#c2c2cf","#b1b1c2","#9d9eb2","#8687a0","#696a82","#3d3e4c"],"gray2":["#ebf1f5","#d6e2eb","#bfd1e0","#a5bfd3","#86a9c4","#618eb2","#5780a0","#4c708c","#3f5c73","#2c4152"],"white":["#ffffff"]}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rebass__);




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
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
    src: "../static/hr8.svg",
    css: {
      height: "175px !important",
      paddingRight: "20px"
    },
    ml: 10
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-2311312394"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rebass__["Image"], {
    src: "../static/mlh.svg",
    css: {
      height: "105px !important",
      paddingRight: "20px"
    },
    ml: 10
  }), links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label,
        icon = _ref.icon;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: key,
      className: "jsx-2311312394"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: href
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      className: "jsx-2311312394"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: icon,
      className: "jsx-2311312394" + " " + "icon"
    }))));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2311312394",
    css: ["body{background-color:#6164b2;font-family:\"Open Sans\";}", "nav.jsx-2311312394{text-align:center;}", "ul.jsx-2311312394{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0px;}", "nav.jsx-2311312394>ul.jsx-2311312394{padding:6px;}", "li.jsx-2311312394{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:6px;}", ".icon.jsx-2311312394{padding:2px 5px;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./content/intro.js
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
// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./components/intro.js



var ScrollingLink = external__react_scroll_["Link"];





var intro_Intro = function Intro() {
  return external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    pt: 3,
    pb: 4,
    bg: colors_default.a["base"],
    color: colors_default.a["gray"][1]
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    width: "auto",
    px: 2
  }, external__react__default.a.createElement("h1", {
    className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "introText"
  }, intro), bullets.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        button = _ref.button,
        note = _ref.note,
        icon = _ref.icon;
    return external__react__default.a.createElement("div", {
      key: key,
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "introItem"
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "icon"
    }), external__react__default.a.createElement("a", {
      href: href,
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "styledlink"
    }, button), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "note"
    }, note));
  })), external__react__default.a.createElement(external__rebass_["Flex"], {
    flexWrap: "wrap",
    mx: -2,
    pt: 2
  }, cards.map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        to = _ref2.to,
        title = _ref2.title,
        text = _ref2.text,
        icon = _ref2.icon;
    return href != undefined ? external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3]
    }, external__react__default.a.createElement("a", {
      href: href,
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, text)))) : external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3]
    }, external__react__default.a.createElement(ScrollingLink, {
      to: to,
      smooth: true,
      duration: 500
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["845038122", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, text))));
  }))), external__react__default.a.createElement(style__default.a, {
    styleId: "845038122",
    css: [".introText{font-family:\"Overpass Mono\";font-size:1.5em;font-weight:700;text-transform:uppercase;}", ".introItem{margin-bottom:10px;}", "a.styledlink{color:#fff;-webkit-text-decoration:none;text-decoration:none;background:rgba(255,255,255,0.1);-webkit-transition:background 0.3s ease-in-out,color 0.3s ease-in-out;transition:background 0.3s ease-in-out,color 0.3s ease-in-out;padding:3px 5px;margin:3px;text-transform:uppercase;font-size:0.85em;font-weight:500;}", "a.styledlink:hover{color:#6164b2;background:rgba(255,255,255,1);}", ".icon{padding-right:5px;}", ".note{text-transform:uppercase;font-size:0.8em;font-weight:300;font-family:\"Overpass Mono\";}", ".spacer{margin-right:5px;}", ".card{border:1px solid ".concat(colors_default.a["gray"][1], ";color:").concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}"), ".cardTitle{text-transform:uppercase;}", ".card:hover{background:rgba(255,255,255,0.1);cursor:pointer;}", ".card h3{margin:0;font-size:18px;}", ".card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}", "@media (max-width:575px){.note{display:block;margin-top:1em;}}"],
    dynamic: [colors_default.a["gray"][1], colors_default.a["gray"][1]]
  }));
};

/* harmony default export */ var components_intro = __webpack_exports__["a"] = (intro_Intro);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./content/about.js

var title = "What is HackRice?";
var p1 = external__react__default.a.createElement(external__react__default.a.Fragment, null, "HackRice is a hackathon held bi-annually at Rice University. It brings together over", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "four hundred of the brightest minds"), " ", "to develop & showcase their", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "creative and entrepreneurial talents."));
var p2 = external__react__default.a.createElement(external__react__default.a.Fragment, null, "Participants join into", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "teams of up to 4"), " to work on a project \u2014 typically software, and sometimes hardware \u2014 in an environment", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "designed for collaboration."));
var p3 = external__react__default.a.createElement(external__react__default.a.Fragment, null, "Teams showcase projects after", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "36 hours"), " of hacking. This is an excellent opportunity for students to", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "build a network"), " of creators, receive ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "internship & job offers"), " ", "from world-class sponsors, and", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "learn modern tools & systems."));
var link1 = "https://hackrice.typeform.com/to/s2Mllk";
var link2 = "../static/sponsors.pdf";
var button1 = "I want to apply.";
var button2 = "I want to become a sponsor.";
// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./components/about.js







var about_About = function About() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "about",
    style: {
      overflowX: "hidden"
    }
  }, external__react__default.a.createElement(external__rebass_["Flex"], {
    mx: 2,
    mt: 4,
    flexWrap: "wrap"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    width: 1,
    mx: 2
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "title"
  }, title)), external__react__default.a.createElement(external__rebass_["Box"], {
    width: [1],
    mx: 2,
    mb: 1
  }, external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, p1), external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, p2), external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, p3), external__react__default.a.createElement("a", {
    href: link1,
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, external__react__default.a.createElement("button", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, button1)), external__react__default.a.createElement("a", {
    href: link2,
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, external__react__default.a.createElement("button", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, button2))), external__react__default.a.createElement(external__rebass_["Flex"], {
    justifyContent: "center",
    width: [1]
  }, external__react__default.a.createElement(external__rebass_["Image"], {
    style: {
      maxWidth: "200%",
      height: "150px",
      bottom: "0px"
    },
    mt: 4,
    src: "../static/sallyport.svg"
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "1028647368",
    css: ["@import url(\"https://rsms.me/inter/inter-ui.css\");", "p.__jsx-style-dynamic-selector{font-weight:300;font-size:1em;line-height:1.6em;}", "p.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{font-weight:400 !important;}", ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["gray"][1], ";margin:unset;font-family:\"Overpass Mono\",monospace;}"), ".sallyport.__jsx-style-dynamic-selector{height:80px !important;}", "button.__jsx-style-dynamic-selector{background:none;border:1px solid ".concat(colors_default.a["gray"][1], ";color:").concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;font-size:1em;margin-top:0.4em;margin-right:1em;padding:6px 10px;text-transform:uppercase;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}"), "button.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);cursor:pointer;}"],
    dynamic: [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]
  })));
};

/* harmony default export */ var about = __webpack_exports__["a"] = (about_About);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// CONCATENATED MODULE: ./content/calendar.js
var calendar_title = "Schedule";
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
// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./components/calendar.js







var calendar_Calendar = function Calendar() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "calendar"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    bg: colors_default.a["gray"][1],
    color: colors_default.a["base"]
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    mx: 4,
    px: 3,
    pt: 4
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "title"
  }, calendar_title)), external__react__default.a.createElement(external__rebass_["Flex"], {
    my: 1,
    pb: 4,
    mx: 4,
    flexWrap: "wrap"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    width: [1, 1 / 3]
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayName"
  }, dayOne), external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayContent"
  }, friday.map(function (_ref) {
    var key = _ref.key,
        title = _ref.title,
        time = _ref.time,
        detail = _ref.detail;
    return external__react__default.a.createElement("li", {
      key: key,
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayItem"
    }, external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemTime"
    }, time), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemDetail"
    }, detail));
  }))), external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    width: [1, 1 / 3]
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayName"
  }, dayTwo), external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayContent"
  }, saturday.map(function (_ref2) {
    var key = _ref2.key,
        title = _ref2.title,
        time = _ref2.time,
        detail = _ref2.detail;
    return external__react__default.a.createElement("li", {
      key: key,
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayItem"
    }, external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemTime"
    }, time), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemDetail"
    }, detail));
  }))), external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    width: [1, 1 / 3]
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayName"
  }, dayThree), external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayContent"
  }, sunday.map(function (_ref3) {
    var key = _ref3.key,
        title = _ref3.title,
        time = _ref3.time,
        detail = _ref3.detail;
    return external__react__default.a.createElement("li", {
      key: key,
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "dayItem"
    }, external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemTime"
    }, time), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2522240098", [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]]]) + " " + "itemDetail"
    }, detail));
  })))), external__react__default.a.createElement(style__default.a, {
    styleId: "2522240098",
    css: ["h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",monospace;}", ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["white"], ";background:").concat(colors_default.a["base"], ";padding:2px 10px;}"), ".dayName.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;color:".concat(colors_default.a["base"], ";text-transform:uppercase;}"), ".dayContent.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:48%;float:left;margin:0px;list-style-type:none;padding:0;width:100%;}", ".dayItem.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,0.1);background:rgba(255,255,255,0.2);color:".concat(colors_default.a["base"], ";padding:8px 10px;-webkit-transition:border 0.3s ease-in-out,box-shadow 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition:border 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;transition:border 0.3s ease-in-out,box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;margin-bottom:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"), ".dayItem.__jsx-style-dynamic-selector:hover{border:1px solid ".concat(colors_default.a["base"], ";box-shadow:0px 3px 5px 2px rgba(97,100,178,0.05);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}"), ".dayContent.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", ".itemTime.__jsx-style-dynamic-selector{display:block;margin-top:2px;font-size:0.8em;font-family:\"Overpass Mono\";}", ".itemTitle.__jsx-style-dynamic-selector{margin-top:5px;display:inline-block;font-size:0.8em;font-weight:400;font-family:\"Overpass Mono\";background:rgba(97,100,178,0.15);padding:2px 5px;color:".concat(colors_default.a["base"], ";}"), ".itemDetail.__jsx-style-dynamic-selector{clear:both;display:block;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:0.8em;margin-top:0.5em;}"],
    dynamic: [colors_default.a["white"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"], colors_default.a["base"]]
  })));
};

/* harmony default export */ var calendar = __webpack_exports__["a"] = (calendar_Calendar);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rc-collapse"
var external__rc_collapse_ = __webpack_require__(15);
var external__rc_collapse__default = /*#__PURE__*/__webpack_require__.n(external__rc_collapse_);

// CONCATENATED MODULE: ./node_modules/rc-collapse/assets/index.css
var _defaultExport = [".rc-collapse{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}", ".rc-collapse-anim-active{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}", ".rc-collapse>.rc-collapse-item{border-top:1px solid #d9d9d9;}", ".rc-collapse>.rc-collapse-item:first-child{border-top:none;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header{height:38px;line-height:38px;text-indent:16px;color:#666;cursor:pointer;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header .arrow{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}", ".rc-collapse>.rc-collapse-item-disabled>.rc-collapse-header{cursor:not-allowed;color:#999;background-color:#f3f3f3;}", ".rc-collapse-content{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}", ".rc-collapse-content>.rc-collapse-content-box{margin-top:16px;margin-bottom:16px;}", ".rc-collapse-content-inactive{display:none;}", ".rc-collapse-item:last-child>.rc-collapse-content{border-radius:0 0 3px 3px;}", ".rc-collapse>.rc-collapse-item-active>.rc-collapse-header .arrow{border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];
_defaultExport.__hash = "846235900";
_defaultExport.__scoped = [".rc-collapse.jsx-3908273469{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}", ".rc-collapse-anim-active.jsx-3908273469{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}", ".rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469{border-top:1px solid #d9d9d9;}", ".rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469:first-child{border-top:none;}", ".rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469>.rc-collapse-header.jsx-3908273469{height:38px;line-height:38px;text-indent:16px;color:#666;cursor:pointer;}", ".rc-collapse.jsx-3908273469>.rc-collapse-item.jsx-3908273469>.rc-collapse-header.jsx-3908273469 .arrow.jsx-3908273469{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}", ".rc-collapse.jsx-3908273469>.rc-collapse-item-disabled.jsx-3908273469>.rc-collapse-header.jsx-3908273469{cursor:not-allowed;color:#999;background-color:#f3f3f3;}", ".rc-collapse-content.jsx-3908273469{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}", ".rc-collapse-content.jsx-3908273469>.rc-collapse-content-box.jsx-3908273469{margin-top:16px;margin-bottom:16px;}", ".rc-collapse-content-inactive.jsx-3908273469{display:none;}", ".rc-collapse-item.jsx-3908273469:last-child>.rc-collapse-content.jsx-3908273469{border-radius:0 0 3px 3px;}", ".rc-collapse.jsx-3908273469>.rc-collapse-item-active.jsx-3908273469>.rc-collapse-header.jsx-3908273469 .arrow.jsx-3908273469{border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];
_defaultExport.__scopedHash = "3908273469";
/* harmony default export */ var assets = (_defaultExport);
// CONCATENATED MODULE: ./styles/collapse.css
var collapse__defaultExport = [".rc-collapse{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}", ".rc-collapse-header{text-indent:unset !important;}", ".rc-collapse-header:focus{border:none;box-shadow:unset;outline:none;}", ".rc-collapse>.rc-collapse-item:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}", ".faqCard{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}", ".faqCard:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".rc-collapse-item-active{height:auto !important;}", ".arrow{display:none;content:\"\";margin-right:0px !important;border:none !important;}", ".rc-collapse-header{color:#fff !important;height:auto !important;line-height:unset !important;}", ".rc-collapse-content{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}", ".rc-collapse-content-box{margin-bottom:15px !important;}", ".rc-collapse-content-box>p{margin:0px !important;padding:0px !important;}", "tr:nth-child(even){background-color:rgba(255,255,255,0.05);}"];
collapse__defaultExport.__hash = "1381846463";
collapse__defaultExport.__scoped = [".rc-collapse.jsx-488722942{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}", ".rc-collapse-header.jsx-488722942{text-indent:unset !important;}", ".rc-collapse-header.jsx-488722942:focus{border:none;box-shadow:unset;outline:none;}", ".rc-collapse.jsx-488722942>.rc-collapse-item.jsx-488722942:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}", ".faqCard.jsx-488722942{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:300px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}", ".faqCard.jsx-488722942:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".rc-collapse-item-active.jsx-488722942{height:auto !important;}", ".arrow.jsx-488722942{display:none;content:\"\";margin-right:0px !important;border:none !important;}", ".rc-collapse-header.jsx-488722942{color:#fff !important;height:auto !important;line-height:unset !important;}", ".rc-collapse-content.jsx-488722942{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}", ".rc-collapse-content-box.jsx-488722942{margin-bottom:15px !important;}", ".rc-collapse-content-box.jsx-488722942>p.jsx-488722942{margin:0px !important;padding:0px !important;}", "tr.jsx-488722942:nth-child(even){background-color:rgba(255,255,255,0.05);}"];
collapse__defaultExport.__scopedHash = "488722942";
/* harmony default export */ var collapse = (collapse__defaultExport);
// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./content/faq.js

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
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "Yes there is! Click", " ", external__react__default.a.createElement("a", {
    className: "styledlink",
    href: "https://www.facebook.com/hackrice/"
  }, "here"), " ", "to access it!")
}, {
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
  question: "Will my travel be reimbursed?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "Yes! Hackers who ride in team cars or take buses or trains to HackRice will receive reimbursement for their travel costs up to $100. ", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), " Hackers who fly in will recieve reimbursement on a first-come, first-served basis. Initially, up to $200 will be provided. As funds are exhausted, up to $100 reimbursement will be provided. ", external__react__default.a.createElement("br", null), " ", external__react__default.a.createElement("br", null), " ", "Tickets must be standard economy or lower.")
}, {
  question: "Will international travel be reimbursed?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "We cannot reimburse hackers flying internationally any more than is listed above, and international hackers should contact us at", " ", external__react__default.a.createElement("a", {
    className: "styledlink",
    href: "mailto:officialhackrice@gmail.com"
  }, "officialhackrice@gmail.com"))
}, {
  question: "How do I file for a reimbursement?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "To recieve your reimbursement, please fill out the reimbursement section of the admission form ", external__react__default.a.createElement("b", null, "within one week"), ". There will be a reimbursment booth at the event where you will be able to finalize your reimbursment details!")
}, {
  question: "What prizes can I win?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("table", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("th", null, "Achievement"), external__react__default.a.createElement("th", null, "Prize")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Grand Prize"), external__react__default.a.createElement("td", null, "Juiced Electric Skateboard")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Second Place"), external__react__default.a.createElement("td", null, "Nintendo Switch")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Third Place"), external__react__default.a.createElement("td", null, "Fancy Coffee Machine")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "New Hackers Track Winner"), external__react__default.a.createElement("td", null, "Sunrise Alarm Clock")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Data Science Track Winner"), external__react__default.a.createElement("td", null, "Amazon Echo Plus")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Design Track Winner"), external__react__default.a.createElement("td", null, "Polaroid Cube"))))
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
// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// CONCATENATED MODULE: ./components/faq.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faq_Questions; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var faq_Questions =
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
        questions: questions
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
      var shift = questions.length / 3;
      var cols = [];

      for (var i = 0; i < questions.length; i += shift) {
        cols.push(external__react__default.a.createElement(external__rebass_["Flex"], {
          flexWrap: "wrap",
          flexDirection: "column",
          width: [1, 1 / 2, 1 / 3]
        }, questions.slice(i, i + shift).map(function (_ref2) {
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
          styleId: assets.__hash,
          css: assets
        }), external__react__default.a.createElement(style__default.a, {
          styleId: collapse.__hash,
          css: collapse
        })));
      }

      return external__react__default.a.createElement(external__react_scroll_["Element"], {
        name: "faq"
      }, external__react__default.a.createElement(external__rebass_["Flex"], {
        mt: 4,
        justifyContent: "center"
      }, external__react__default.a.createElement("h2", {
        className: style__default.a.dynamic([["1472164806", [colors_default.a["base"]]]]) + " " + "title"
      }, title)), external__react__default.a.createElement(external__rebass_["Flex"], {
        flexDirection: "row",
        flexWrap: "wrap",
        mt: 2,
        mb: 5,
        pt: 2
      }, cols), external__react__default.a.createElement(style__default.a, {
        styleId: "1472164806",
        css: [".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;background:".concat(colors_default.a["base"], ";border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;border:1px solid rgba(255,255,255,0.2);font-family:\"Overpass Mono\",monospace;padding:5px 10px 2px 10px;box-sizing:content-box;margin-left:auto;margin-right:auto;height:40px;font-family:\"Overpass Mono\",monospace;}")],
        dynamic: [colors_default.a["base"]]
      }));
    }
  }]);

  return Questions;
}(external__react__default.a.Component);



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// CONCATENATED MODULE: ./content/judging.js
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
// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./components/judging.js







var judging_Judging = function Judging() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "judging"
  }, external__react__default.a.createElement(external__rebass_["Flex"], {
    bg: colors_default.a["gray"][1],
    color: colors_default.a["base"],
    flexWrap: "wrap",
    px: 5,
    py: 5
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2259400939", [colors_default.a["white"], colors_default.a["base"]]]]) + " " + "title"
  }, title), criteria.map(function (_ref) {
    var key = _ref.key,
        subtitle = _ref.subtitle,
        description = _ref.description,
        icon = _ref.icon;
    return external__react__default.a.createElement(external__rebass_["Box"], {
      width: 1
    }, external__react__default.a.createElement("h2", {
      className: style__default.a.dynamic([["2259400939", [colors_default.a["white"], colors_default.a["base"]]]]) + " " + "subtitle"
    }, external__react__default.a.createElement("img", {
      src: icon,
      height: 20,
      style: {
        marginRight: "0.5em"
      },
      className: style__default.a.dynamic([["2259400939", [colors_default.a["white"], colors_default.a["base"]]]])
    }), subtitle), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["2259400939", [colors_default.a["white"], colors_default.a["base"]]]]) + " " + "description"
    }, description));
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "2259400939",
    css: [".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["white"], ";background:").concat(colors_default.a["base"], ";padding:2px 10px;margin:unset;margin-bottom:1em;font-family:\"Overpass Mono\",monospace;}"), ".subtitle.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",monospace;text-transform:uppercase;margin-bottom:0px;}", ".description.__jsx-style-dynamic-selector{margin-top:0.5em;font-size:1em;font-weight:400;}"],
    dynamic: [colors_default.a["white"], colors_default.a["base"]]
  })));
};

/* harmony default export */ var judging = __webpack_exports__["a"] = (judging_Judging);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./content/sponsors.js
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
// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(6);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// CONCATENATED MODULE: ./components/sponsors.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  &::before {\n    white-space: normal;\n    width: 350px;\n    padding: 1.5em;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 400;\n    background-color: rgba(255, 255, 255, 1);\n    color: ", ";\n  }\n\n  &::after {\n    border-top-color: rgba(255, 255, 255, 1) !important;\n  }\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var CustomTooltip = external__styled_components__default()(external__rebass_["Tooltip"])(_templateObject, colors_default.a["base"]);

var sponsors_Sponsors = function Sponsors() {
  return external__react__default.a.createElement(external__rebass_["Flex"], {
    flexWrap: "wrap",
    width: 1,
    mb: 4,
    css: {
      background: "rgba(97, 100, 178, 0.2)"
    }
  }, external__react__default.a.createElement(external__rebass_["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 1,
    mx: 5,
    my: 3
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["2533503331", [colors_default.a["base"], colors_default.a["white"]]]]) + " " + "title"
  }, title), files.map(function (_ref) {
    var name = _ref.name,
        height = _ref.height,
        link = _ref.link,
        blurb = _ref.blurb;
    return blurb === undefined ? external__react__default.a.createElement("a", {
      href: link,
      className: style__default.a.dynamic([["2533503331", [colors_default.a["base"], colors_default.a["white"]]]])
    }, external__react__default.a.createElement(external__rebass_["Image"], {
      style: {
        margin: "2em 1em",
        height: "".concat(height)
      },
      src: "../static/sponsors/".concat(name)
    })) : external__react__default.a.createElement(CustomTooltip, {
      text: blurb
    }, external__react__default.a.createElement("a", {
      href: link,
      className: style__default.a.dynamic([["2533503331", [colors_default.a["base"], colors_default.a["white"]]]])
    }, external__react__default.a.createElement(external__rebass_["Image"], {
      style: {
        margin: "2em 1em",
        height: "".concat(height)
      },
      src: "../static/sponsors/".concat(name)
    })));
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "2533503331",
    css: [".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["base"], ";background:").concat(colors_default.a["white"], ";padding:2px 10px;margin:unset;height:40px;font-family:\"Overpass Mono\",monospace;}")],
    dynamic: [colors_default.a["base"], colors_default.a["white"]]
  }));
};

/* harmony default export */ var sponsors = __webpack_exports__["a"] = (sponsors_Sponsors);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(1);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./content/tracks.js

var tracks_title = "Tracks & Challenges";
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
  text: external__react__default.a.createElement("p", null, "The winner of this challenge will best use Microsoft Azure in a way that empowers individuals or groups to achieve more. Find free trials and credits ", external__react__default.a.createElement("a", {
    href: "https://azure.microsoft.com/en-us/free/"
  }, "here"), ".")
}, {
  icon: "https://icon.now.sh/facebook/ffffff",
  type: "challenge",
  title: "Facebook",
  text: external__react__default.a.createElement("p", null, "Facebook will award a prize to the team that makes the best game using the Facebook Instant Games SDK. The game is expected to run on Messenger. Judges will be looking for engagement, quality, and completeness in the hack. The winning team will be invited to participate in Facebook's Global Hackathon in Menlo Park, CA. For details, see", " ", external__react__default.a.createElement("a", {
    href: "https://developers.facebook.com/docs/games/instant-games/"
  }, "Instant Games Documentation"), ". Only the", " ", external__react__default.a.createElement("a", {
    href: "https://fb.gg/igengines"
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
// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// CONCATENATED MODULE: ./components/tracks.js








var tracks_Tracks = function Tracks() {
  return external__react__default.a.createElement(external__react_scroll_["Element"], {
    name: "tracks"
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    px: 3,
    pt: 4,
    pb: 4,
    bg: colors_default.a["base"],
    color: colors_default.a["gray"][1]
  }, external__react__default.a.createElement(external__rebass_["Box"], {
    mx: 1,
    mt: 4
  }, external__react__default.a.createElement("h2", {
    className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "title"
  }, tracks_title)), external__react__default.a.createElement(external__rebass_["Flex"], {
    flexWrap: "wrap",
    mx: -2,
    pt: 2
  }, cards.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        title = _ref.title,
        type = _ref.type,
        text = _ref.text,
        icon = _ref.icon;
    return href !== undefined ? external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1]
    }, external__react__default.a.createElement("a", {
      href: href,
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "cardTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "detail"
    }, type)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }, text), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "link"
    }, "LEARN MORE \u2192")))) : external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1]
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "cardTitle"
    }, title), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]]) + " " + "detail"
    }, type)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["4229634349", [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]]])
    }, text)));
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "4229634349",
    css: [".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["white"], ";border:1px solid rgba(255,255,255,0.2);padding:2px 10px;margin:unset;font-family:\"Overpass Mono\",monospace;box-sizing:content-box;}"), ".card.__jsx-style-dynamic-selector{border:1px solid rgba(255,255,255,0.2);color:".concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}"), ".cardTitle.__jsx-style-dynamic-selector{text-transform:uppercase;}", ".card.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);border:1px solid white;cursor:pointer;}", ".card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;font-size:18px;}", ".card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:12px 0 0;font-size:14px;font-family:\"Open Sans\",sans-serif;line-height:1.5em;font-weight:300;text-transform:none;}", ".card.__jsx-style-dynamic-selector p.link.__jsx-style-dynamic-selector{font-family:\"Overpass Mono\",sans-serif;line-height:1.5em;font-weight:300;text-transform:none;}", ".detail.__jsx-style-dynamic-selector{float:right;border:1px solid ".concat(colors_default.a["white"], ";color:").concat(colors_default.a["white"], ";padding:4px 5px 2px 5px;font-size:0.7em;box-sizing:content-box;text-transform:uppercase;}")],
    dynamic: [colors_default.a["white"], colors_default.a["gray"][1], colors_default.a["white"], colors_default.a["white"]]
  })));
};

/* harmony default export */ var tracks = __webpack_exports__["a"] = (tracks_Tracks);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll__);




var Map = function Map() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
    name: "maps"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Flex"], {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: 1,
    mb: 4
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rebass__["Image"], {
    width: 1,
    px: 2,
    py: 2,
    src: "../static/map.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.rice.edu/maps/Rice-University-Color-Campus-Map.pdf",
    style: {
      margin: "20px"
    }
  }, "Looking for a map of Rice University? Click here \u2192")));
};

/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
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
var external__styled_components_ = __webpack_require__(6);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(7);

// EXTERNAL MODULE: ./components/nav.js
var nav = __webpack_require__(10);

// EXTERNAL MODULE: ./components/intro.js + 1 modules
var intro = __webpack_require__(11);

// EXTERNAL MODULE: ./components/about.js + 1 modules
var about = __webpack_require__(12);

// EXTERNAL MODULE: ./components/calendar.js + 1 modules
var calendar = __webpack_require__(13);

// EXTERNAL MODULE: ./components/faq.js + 3 modules
var faq = __webpack_require__(14);

// EXTERNAL MODULE: ./components/judging.js + 1 modules
var judging = __webpack_require__(16);

// EXTERNAL MODULE: ./components/sponsors.js + 1 modules
var sponsors = __webpack_require__(17);

// EXTERNAL MODULE: ./components/tracks.js + 1 modules
var tracks = __webpack_require__(18);

// EXTERNAL MODULE: ./components/map.js
var map = __webpack_require__(19);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "path"
var external__path_ = __webpack_require__(28);
var external__path__default = /*#__PURE__*/__webpack_require__.n(external__path_);

// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./components/newintro.js






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

var newintro_NewIntro = function NewIntro() {
  return external__react__default.a.createElement(external__rebass_["Box"], {
    bg: colors["newbase"],
    className: "contain"
  }, external__react__default.a.createElement(external__rebass_["Image"], {
    src: "../static/hr85.png",
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      width: "50%"
    }
  }), external__react__default.a.createElement("div", {
    className: "jsx-1311308411" + " " + "buttons"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/8"
  }, external__react__default.a.createElement(external__rebass_["Image"], {
    className: "special2",
    src: "../static/btn2.svg"
  })), external__react__default.a.createElement("a", {
    href: "https://goo.gl/forms/0p6Jf974trcf1Qc92",
    className: "jsx-1311308411"
  }, external__react__default.a.createElement(external__rebass_["Image"], {
    className: "special",
    src: "../static/btn.svg"
  }))), external__react__default.a.createElement("div", {
    className: "jsx-1311308411" + " " + "social"
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label,
        icon = _ref.icon;
    return external__react__default.a.createElement(link__default.a, {
      href: href,
      key: key
    }, external__react__default.a.createElement("a", {
      className: "jsx-1311308411"
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: "jsx-1311308411" + " " + "icon"
    })));
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "1311308411",
    css: ["a.img{margin-right:0px !important;}", "a{display:inline !important;}", ".buttons{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:3em;}", "img.special{cursor:pointer;display:inline;padding-top:2em;height:100px;}", "img.special2{cursor:pointer;display:inline;padding-top:2em;height:50px !important;}", ".icon{padding:4px 13px;}", ".social{text-align:center;margin-top:10em;}"]
  }));
};

/* harmony default export */ var newintro = (newintro_NewIntro);
// CONCATENATED MODULE: ./pages/index.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














 // Ensure `grid-styled` Box and Flex components work properly.

Object(external__styled_components_["injectGlobal"])(_templateObject); // Variables for <head>

var title = "HackRice 8.5";
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
    title: title,
    description: description,
    url: url,
    ogImage: ogImage
  }), external__react__default.a.createElement(newintro, null), external__react__default.a.createElement(style__default.a, {
    styleId: "2675799407",
    css: ["html{background:#A95656 !important;}"]
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);