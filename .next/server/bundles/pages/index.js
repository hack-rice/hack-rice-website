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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-regular/faCalendar");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-regular/faMap");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-regular/faHandSpock");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faTrophy");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faQuestion");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faDonate");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faMobileAlt");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(12);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/main.scss
var main = __webpack_require__(13);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(2);
var react_fontawesome__default = /*#__PURE__*/__webpack_require__.n(react_fontawesome_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-regular/faCalendar"
var faCalendar_ = __webpack_require__(3);
var faCalendar__default = /*#__PURE__*/__webpack_require__.n(faCalendar_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-regular/faMap"
var faMap_ = __webpack_require__(4);
var faMap__default = /*#__PURE__*/__webpack_require__.n(faMap_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-regular/faHandSpock"
var faHandSpock_ = __webpack_require__(5);
var faHandSpock__default = /*#__PURE__*/__webpack_require__.n(faHandSpock_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faTrophy"
var faTrophy_ = __webpack_require__(6);
var faTrophy__default = /*#__PURE__*/__webpack_require__.n(faTrophy_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faQuestion"
var faQuestion_ = __webpack_require__(7);
var faQuestion__default = /*#__PURE__*/__webpack_require__.n(faQuestion_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faDonate"
var faDonate_ = __webpack_require__(8);
var faDonate__default = /*#__PURE__*/__webpack_require__.n(faDonate_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faMobileAlt"
var faMobileAlt_ = __webpack_require__(9);
var faMobileAlt__default = /*#__PURE__*/__webpack_require__.n(faMobileAlt_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-regular/faEdit"
var faEdit_ = __webpack_require__(14);
var faEdit__default = /*#__PURE__*/__webpack_require__.n(faEdit_);

// CONCATENATED MODULE: ./components/Header.js

 // Icons











var Header_Header = function Header(props) {
  return external__react__default.a.createElement("header", {
    id: "header",
    style: props.timeout ? {
      display: 'none'
    } : {}
  }, external__react__default.a.createElement("div", {
    className: "logo"
  }, external__react__default.a.createElement("img", {
    src: "../static/images/logo.png",
    transform: "grow-18",
    className: "logo"
  })), external__react__default.a.createElement("div", {
    className: "content"
  }, external__react__default.a.createElement("div", {
    className: "inner"
  }, external__react__default.a.createElement("img", {
    className: "type",
    src: "../static/images/type.png"
  }), external__react__default.a.createElement("div", {
    className: "subtitle-bold"
  }, "OUT-OF-RICE APPS CLOSE WEDNESDAY, AUGUST 8"), external__react__default.a.createElement("span", {
    className: "subtitle"
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faCalendar__default.a
  }), " September 14-16, 2018"), external__react__default.a.createElement("span", {
    className: "subtitle"
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faMap__default.a
  }), " Rice Memorial Center"))), external__react__default.a.createElement("nav", null, external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('intro');
    }
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faHandSpock__default.a
  }), " Intro")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('judging');
    }
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faTrophy__default.a
  }), " Judging")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('faq');
    }
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faQuestion__default.a
  }), " FAQ")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('sponsors');
    }
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faDonate__default.a
  }), " Sponsors")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "javascript:;",
    onClick: function onClick() {
      props.onOpenArticle('contact');
    }
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faMobileAlt__default.a
  }), " Contact")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    className: "invert",
    href: "javascript:;",
    onClick: function onClick() {
      window.location = 'https://hackrice.typeform.com/to/QGbctn';
    }
  }, external__react__default.a.createElement(react_fontawesome__default.a, {
    icon: faEdit__default.a
  }), " Apply")))));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(15);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(16);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "react-accessible-accordion"
var external__react_accessible_accordion_ = __webpack_require__(17);
var external__react_accessible_accordion__default = /*#__PURE__*/__webpack_require__.n(external__react_accessible_accordion_);

// EXTERNAL MODULE: ./node_modules/react-accessible-accordion/dist/fancy-example.css
var fancy_example = __webpack_require__(18);
var fancy_example_default = /*#__PURE__*/__webpack_require__.n(fancy_example);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faFacebook"
var faFacebook_ = __webpack_require__(19);
var faFacebook__default = /*#__PURE__*/__webpack_require__.n(faFacebook_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faFacebookMessenger"
var faFacebookMessenger_ = __webpack_require__(20);
var faFacebookMessenger__default = /*#__PURE__*/__webpack_require__.n(faFacebookMessenger_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-regular/faEnvelope"
var faEnvelope_ = __webpack_require__(21);
var faEnvelope__default = /*#__PURE__*/__webpack_require__.n(faEnvelope_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faCogs"
var faCogs_ = __webpack_require__(22);
var faCogs__default = /*#__PURE__*/__webpack_require__.n(faCogs_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUsers"
var faUsers_ = __webpack_require__(23);
var faUsers__default = /*#__PURE__*/__webpack_require__.n(faUsers_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faPaintBrush"
var faPaintBrush_ = __webpack_require__(24);
var faPaintBrush__default = /*#__PURE__*/__webpack_require__.n(faPaintBrush_);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons/faGrinStars"
var faGrinStars_ = __webpack_require__(25);
var faGrinStars__default = /*#__PURE__*/__webpack_require__.n(faGrinStars_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUserPlus"
var faUserPlus_ = __webpack_require__(26);
var faUserPlus__default = /*#__PURE__*/__webpack_require__.n(faUserPlus_);

// EXTERNAL MODULE: external "react-grid-gallery"
var external__react_grid_gallery_ = __webpack_require__(27);
var external__react_grid_gallery__default = /*#__PURE__*/__webpack_require__.n(external__react_grid_gallery_);

// CONCATENATED MODULE: ./components/Main.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // Accordion



 // Demo styles, see 'Styles' section below for some notes on use.

 // Icons
















 // Gallery



var Main_Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this = this;

      var close = external__react__default.a.createElement("div", {
        className: "close",
        onClick: function onClick() {
          _this.props.onCloseArticle();
        }
      });
      var IMAGES = [{
        src: "../static/sponsors/twosigma.png",
        thumbnail: "../static/images/sponsors/twosigma.png",
        thumbnailHeight: 200
      }, {
        src: "../static/sponsors/schlumberger.png",
        thumbnail: "../static/images/sponsors/schlumberger.png",
        thumbnailHeight: 200
      }, {
        src: "../static/sponsors/indeed.png",
        thumbnail: "../static/images/sponsors/indeed.png",
        thumbnailHeight: 200
      }, {
        src: "../static/sponsors/mlh.png",
        thumbnail: "../static/images/sponsors/mlh.png",
        thumbnailHeight: 200
      }, {
        src: "../static/sponsors/ricecs.png",
        thumbnail: "../static/images/sponsors/ricecs.png",
        thumbnailHeight: 200
      }, {
        src: "../static/sponsors/chevron.png",
        thumbnail: "../static/images/sponsors/chevron.png",
        thumbnailHeight: 200
      }, {
        src: "../static/sponsors/microsoft.png",
        thumbnail: "../static/images/sponsors/microsoft.png",
        thumbnailHeight: 200
      }];
      return external__react__default.a.createElement("div", {
        id: "main",
        style: this.props.timeout ? {
          display: 'flex'
        } : {
          display: 'none'
        }
      }, external__react__default.a.createElement("article", {
        id: "intro",
        className: "".concat(this.props.article === 'intro' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        }
      }, external__react__default.a.createElement("h2", {
        className: "introTitle"
      }, "LEARN. CREATE. DESIGN. CODE. WIN."), external__react__default.a.createElement("span", {
        className: "introText"
      }, external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faCogs__default.a,
        color: "#CCD4FF"
      }), " HackRice is Rice University's ", external__react__default.a.createElement("strong", null, "annual hackathon"), ". We bring tinkerers together to collaborate on beautiful products."), external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faPaintBrush__default.a,
        color: "#CCD4FF"
      }), " It brings together ", external__react__default.a.createElement("strong", null, "four hundred "), " of the brightest minds to ", external__react__default.a.createElement("strong", null, "develop & showcase"), " their creative and entrepreneurial talents."), external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faUsers__default.a,
        color: "#CCD4FF"
      }), " Attendees join a team (max of 5) to work on a project \u2013 typically some ", external__react__default.a.createElement("strong", null, "hardware or software"), " \u2013 in an environment designed for creativity."), external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faTrophy__default.a,
        color: "#CCD4FF"
      }), " Teams showcase their projects after ", external__react__default.a.createElement("strong", null, "36 hours"), " of hacking, with the opportunity to ", external__react__default.a.createElement("strong", null, "build their networks"), ", win incredible ", external__react__default.a.createElement("strong", null, "prizes"), " from world-class sponsors, and learn ", external__react__default.a.createElement("strong", null, "modern tools and systems"), ".")), close), external__react__default.a.createElement("article", {
        id: "judging",
        className: "".concat(this.props.article === 'judging' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        }
      }, external__react__default.a.createElement("h2", {
        className: "introTitle"
      }, "HOW ARE YOU EVALUATED?"), external__react__default.a.createElement("span", {
        className: "introText"
      }, external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement("h3", null, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faCogs__default.a,
        color: "#CCD4FF"
      }), " Technical Difficulty"), " We are looking for ", external__react__default.a.createElement("b", null, "technically advanced solutions to technically challenging problems"), " that make use of ", external__react__default.a.createElement("b", null, "hardware and APIs"), ". That being said, if you can solve a technically challenging problem with a simple solution, we will be very impressed!"), external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement("h3", null, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faPaintBrush__default.a,
        color: "#CCD4FF"
      }), " Creativity"), " We are looking for ", external__react__default.a.createElement("b", null, "original ideas"), " or ", external__react__default.a.createElement("b", null, "new angles on existing ideas"), ". For example, using an API in a unique way. We know APIs work - we want to see if you can do something new and awesome with them!"), external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement("h3", null, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faGrinStars_["faGrinStars"],
        color: "#CCD4FF"
      }), " Design & Polish"), " We are looking for ", external__react__default.a.createElement("b", null, "aesthetically pleasing"), " projects with ", external__react__default.a.createElement("b", null, "smooth and clear user experience.")), external__react__default.a.createElement("span", {
        className: "bullet"
      }, external__react__default.a.createElement("h3", null, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faUserPlus__default.a,
        color: "#CCD4FF"
      }), " Practicality & Usefulness"), " We are looking for ", external__react__default.a.createElement("b", null, "socially good projects"), " that ", external__react__default.a.createElement("b", null, "people would use"), ". Additionally, we would like to emphasize that we will extensively check to make sure that your project is one that people can use in the real world and ", external__react__default.a.createElement("b", null, "doesn't only work on the cases you demo."))), close), external__react__default.a.createElement("article", {
        id: "faq",
        className: "".concat(this.props.article === 'faq' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        }
      }, external__react__default.a.createElement("h2", {
        className: "introTitle"
      }, "FAQ"), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "How long is HackRice?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "36 hours")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "How many hackers will there be?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Around 400")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "How many hackers per team are permitted?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Team are limited to 5 hackers. That being said, you don't have to have 5 hackers to win a prize!")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Is there a HackRice Facebook page?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Yes there is! Click ", external__react__default.a.createElement("a", {
        href: "https://www.facebook.com/hackrice/"
      }, "here"), " to access it!")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "How do I submit my project? Is there a Devpost?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "You can submit your project on ", external__react__default.a.createElement("a", {
        href: "https://hackrice8.devpost.com/"
      }, "this Devpost link"))))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Who is eligible for HackRice?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the ", external__react__default.a.createElement("a", {
        href: "http://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      }, "MLH Code of Conduct."))))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Will my travel be reimbursed?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Yes! We'll be providing travel reimbursements for all visiting hackers. ", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), "Hackers who ride in team cars or take buses or trains to HackRice will receive full reimbursement for their travel costs (up to $100). ", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), " Hackers who fly to Hackrice will recieve reimbursement on a first-come, first-served basis. Initially, reimbursement up to $200 will be provided. As funds are exhausted, reimbursement up to $100 will be provided. Tickets must be standard economy or lower. We cannot reimburse hackers flying internationally any more than is listed above, and international hackers should contact us at ", external__react__default.a.createElement("a", {
        href: "mailto:officialhackrice@gmail.com"
      }, "officialhackrice@gmail.com"), ".", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), "To recieve your reimbursement, please fill out the reimbursement section of the admission form ", external__react__default.a.createElement("b", null, "within one week"), ". There will be a reimbursment booth at the event where you will be able to finalize your reimbursment details!")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Will there be prizes?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "We will have prizes for 1st, 2nd, 3rd place, several track prizes, and many other company sponsored prizes.")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Will there be free food?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going.")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "What are the acceptance criteria?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Rice students and alumni are guaranteed acceptance. For Non-Rice students, we ask for their previous hackathon and coding experiences, so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "What do I need to bring?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other.")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "What if I'm not very experienced?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "We will try our best to point people in the right direction and use tools and languages that allow rapid development with the least amount of frustration. There will also be upperclassmen participating in the hackathon who can help you out. Furthermore, you can look up tutorials and sample code online. We will also be having workshops the week before the hackathon!")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Can Rice alumni attend?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel.>")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "What if I don't have a team before the event?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to.")))), external__react__default.a.createElement(external__react_accessible_accordion_["Accordion"], {
        className: "demo-container",
        accordion: "true",
        expanded: "false"
      }, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItem"], null, external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemTitle"], null, external__react__default.a.createElement("h3", null, "Do I need to stay the whole time?")), external__react__default.a.createElement(external__react_accessible_accordion_["AccordionItemBody"], null, external__react__default.a.createElement("p", null, "Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might have other commitments during that time. Feel free to stay and leave as you choose. However, we would prefer that people stay to promote the environment.")))), close), external__react__default.a.createElement("article", {
        id: "contact",
        className: "".concat(this.props.article === 'contact' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        }
      }, external__react__default.a.createElement("div", {
        className: "contact"
      }, external__react__default.a.createElement("div", {
        className: "method"
      }, external__react__default.a.createElement("a", {
        href: "https://facebook.com/hackrice"
      }, " ", external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faFacebookMessenger__default.a,
        color: "#CCD4FF"
      }))), external__react__default.a.createElement("div", {
        className: "method"
      }, external__react__default.a.createElement("a", {
        href: "https://facebook.com/hackrice"
      }, " ", external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: faEnvelope__default.a,
        color: "#CCD4FF"
      })))), close), external__react__default.a.createElement("article", {
        id: "sponsors",
        className: "".concat(this.props.article === 'sponsors' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        }
      }, close, external__react__default.a.createElement("div", {
        style: {
          display: "block",
          height: "100%",
          width: "100%",
          overflow: "auto"
        }
      }, external__react__default.a.createElement(external__react_grid_gallery__default.a, {
        images: IMAGES,
        enableLightbox: false,
        enableImageSelection: false
      }))));
    }
  }]);

  return Main;
}(external__react__default.a.Component);

/* harmony default export */ var components_Main = (Main_Main);
// CONCATENATED MODULE: ./components/Footer.js



var Footer_Footer = function Footer(props) {
  return external__react__default.a.createElement("footer", {
    id: "footer",
    style: props.timeout ? {
      display: 'none'
    } : {}
  });
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/MLH.js



var MLH_MLH = function MLH(props) {
  return external__react__default.a.createElement("div", {
    id: "mlh"
  }, external__react__default.a.createElement("a", {
    href: "https://mlh.io/seasons/na-2019/events"
  }, external__react__default.a.createElement("img", {
    src: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-gray.svg"
  })));
};

/* harmony default export */ var components_MLH = (MLH_MLH);
// CONCATENATED MODULE: ./components/Owl.js



var Owl_Owl = function Owl(props) {
  return external__react__default.a.createElement("div", {
    id: "owl-cage"
  }, external__react__default.a.createElement("img", {
    id: "owl",
    src: "../static/images/owl.svg"
  }));
};

/* harmony default export */ var components_Owl = (Owl_Owl);
// CONCATENATED MODULE: ./components/Rice.js



var Rice_Rice = function Rice(props) {
  return external__react__default.a.createElement("div", {
    id: "sallyport"
  }, external__react__default.a.createElement("img", {
    id: "building",
    src: "../static/images/sallyport.svg"
  }));
};

/* harmony default export */ var components_Rice = (Rice_Rice);
// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var pages_IndexPage =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    pages__classCallCheck(this, IndexPage);

    _this = pages__possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));
    _this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    };
    _this.handleOpenArticle = _this.handleOpenArticle.bind(pages__assertThisInitialized(_this));
    _this.handleCloseArticle = _this.handleCloseArticle.bind(pages__assertThisInitialized(_this));
    return _this;
  }

  pages__createClass(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.setState({
          loading: ''
        });
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "handleOpenArticle",
    value: function handleOpenArticle(article) {
      var _this3 = this;

      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: article
      });
      setTimeout(function () {
        _this3.setState({
          timeout: !_this3.state.timeout
        });
      }, 100);
      setTimeout(function () {
        _this3.setState({
          articleTimeout: !_this3.state.articleTimeout
        });
      }, 100);
    }
  }, {
    key: "handleCloseArticle",
    value: function handleCloseArticle() {
      var _this4 = this;

      this.setState({
        articleTimeout: !this.state.articleTimeout
      });
      setTimeout(function () {
        _this4.setState({
          timeout: !_this4.state.timeout
        });
      }, 100);
      setTimeout(function () {
        _this4.setState({
          isArticleVisible: !_this4.state.isArticleVisible,
          article: ''
        });
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "body ".concat(this.state.loading, " ").concat(this.state.isArticleVisible ? 'is-article-visible' : '')
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "HackRice 8"), external__react__default.a.createElement("div", {
        className: "subtitle"
      }, "APPS CLOSE WEDNESDAY, AUGUST 8"), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,500,600,700",
        rel: "stylesheet"
      }), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600",
        rel: "stylesheet"
      }), external__react__default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/static/images/favicon.png"
      })), external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: main_default.a
        }
      }), external__react__default.a.createElement("div", {
        id: "wrapper"
      }, external__react__default.a.createElement(components_MLH, {
        timeout: this.state.timeout
      }), external__react__default.a.createElement(components_Header, {
        onOpenArticle: this.handleOpenArticle,
        timeout: this.state.timeout
      }), external__react__default.a.createElement(components_Owl, {
        timeout: this.state.timeout
      }), external__react__default.a.createElement(components_Main, {
        isArticleVisible: this.state.isArticleVisible,
        timeout: this.state.timeout,
        articleTimeout: this.state.articleTimeout,
        article: this.state.article,
        onCloseArticle: this.handleCloseArticle
      }), external__react__default.a.createElement(components_Rice, {
        timeout: this.state.timeout
      }), external__react__default.a.createElement(components_Footer, {
        timeout: this.state.timeout
      })), external__react__default.a.createElement("div", {
        id: "bg"
      })));
    }
  }]);

  return IndexPage;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}@-ms-viewport{width:device-width}@media screen and (max-width: 480px){html,body{min-width:320px}}body{background:#1b1f22}body.is-loading *,body.is-loading *:before,body.is-loading *:after,body .body.is-loading *,body .body.is-loading *:before,body .body.is-loading *:after,body.is-switching *,body.is-switching *:before,body.is-switching *:after{-webkit-animation:none !important;animation:none !important;-webkit-transition:none !important;transition:none !important;-webkit-transition-delay:none !important;transition-delay:none !important}html{font-size:16pt}@media screen and (max-width: 1680px){html{font-size:12pt}}@media screen and (max-width: 736px){html{font-size:11pt}}@media screen and (max-width: 360px){html{font-size:10pt}}body,input,select,textarea{color:#fff;font-family:\"IBM Plex Mono\",sans-serif;font-weight:300;font-size:1rem;line-height:1.65}a{-webkit-transition:color .3s ease-in-out,background-color .3s ease-in-out,border-bottom-color .3s ease-in-out;transition:color .3s ease-in-out,background-color .3s ease-in-out,border-bottom-color .3s ease-in-out;border-bottom:dotted 1px rgba(255,255,255,0.5);text-decoration:none;color:inherit}a:hover{border-bottom-color:transparent}strong,b{color:#fff;font-weight:600}em,i{font-style:italic}p{margin:0 0 2rem 0}h1,h2,h3,h4,h5,h6{color:#fff;font-weight:600;line-height:1.5;margin:0 0 1rem 0;text-transform:uppercase;letter-spacing:.2rem}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:inherit;text-decoration:none}h1.major,h2.major,h3.major,h4.major,h5.major,h6.major{border-bottom:solid 1px #fff;width:-moz-max-content;width:-webkit-max-content;width:-ms-max-content;width:max-content;padding-bottom:0.5rem;margin:0 0 2rem 0}h1{font-size:2.25rem;line-height:1.3;letter-spacing:.5rem}h2{font-size:1.5rem;line-height:1.4;letter-spacing:.5rem}h3{font-size:1rem}h4{font-size:0.8rem}h5{font-size:0.7rem}h6{font-size:0.6rem}@media screen and (max-width: 736px){h1{font-size:1.75rem;line-height:1.4}h2{font-size:1.25em;line-height:1.5}}sub{font-size:0.8rem;position:relative;top:0.5rem}sup{font-size:0.8rem;position:relative;top:-0.5rem}blockquote{border-left:solid 4px #fff;font-style:italic;margin:0 0 2rem 0;padding:.5rem 0 .5rem 2rem}code{background:rgba(255,255,255,0.075);border-radius:0px;font-family:\"IBM Plex Mono\",monospace;font-size:0.9rem;margin:0 0.25rem;padding:0.25rem 0.65rem}pre{-webkit-overflow-scrolling:touch;font-family:\"IBM Plex Mono\",monospace;font-size:0.9rem;margin:0 0 2rem 0}pre code{display:block;line-height:1.75;padding:1rem 1.5rem;overflow-x:auto}hr{border:0;border-bottom:solid 1px #fff;margin:2.75rem 0}.align-left{text-align:left}.align-center{text-align:center}.align-right{text-align:right}form{margin:0 0 2.5rem 0}form .field{margin:0 0 1.5rem 0}form .field.half{width:50%;float:left;padding:0 0 0 .75rem}form .field.half.first{padding:0 .75rem 0 0}form>.actions{margin:1.875rem 0 0 0 !important}@media screen and (max-width: 736px){form .field{margin:0 0 1.125rem 0}form .field.half{padding:0 0 0 .5625rem}form .field.half.first{padding:0 .5625rem 0 0}form>.actions{margin:1.5rem 0 0 0 !important}}@media screen and (max-width: 480px){form .field.half{width:100%;float:none;padding:0}form .field.half.first{padding:0}}label{color:#fff;display:block;font-size:0.8rem;font-weight:300;letter-spacing:.2rem;line-height:1.5;margin:0 0 1rem 0;text-transform:uppercase}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"tel\"],select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;-webkit-transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;-webkit-transition:border-color .3s ease-in-out,background-color .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;transition:border-color .3s ease-in-out,background-color .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;background:transparent;border-radius:0px;border:solid 1px #fff;color:inherit;display:block;outline:0;padding:0 1rem;text-decoration:none;width:100%}input[type=\"text\"]:invalid,input[type=\"password\"]:invalid,input[type=\"email\"]:invalid,input[type=\"tel\"]:invalid,select:invalid,textarea:invalid{-webkit-box-shadow:none;box-shadow:none}input[type=\"text\"]:focus,input[type=\"password\"]:focus,input[type=\"email\"]:focus,input[type=\"tel\"]:focus,select:focus,textarea:focus{background:rgba(255,255,255,0.075);border-color:#fff;-webkit-box-shadow:0 0 0 1px #fff;box-shadow:0 0 0 1px #fff}select option{background:#1b1f22;color:#fff}.select-wrapper{text-decoration:none;display:block;position:relative}.select-wrapper:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:normal;text-transform:none !important}.select-wrapper:before{color:#fff;content:'\\f107';display:block;height:2.75rem;line-height:calc(2.75rem + 0em);pointer-events:none;position:absolute;right:0;text-align:center;top:0;width:2.75rem}.select-wrapper select::-ms-expand{display:none}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],select{height:2.75rem}textarea{padding:0.75rem 1rem}input[type=\"checkbox\"],input[type=\"radio\"]{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;display:block;float:left;margin-right:-2rem;opacity:0;width:1rem;z-index:-1}input[type=\"checkbox\"]+label,input[type=\"radio\"]+label{text-decoration:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;color:#fff;cursor:pointer;display:inline-block;font-size:0.8rem;font-weight:300;margin:0 0 .5rem 0;padding-left:2.65rem;padding-right:0.75rem;position:relative}input[type=\"checkbox\"]+label:before,input[type=\"radio\"]+label:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:normal;text-transform:none !important}input[type=\"checkbox\"]+label:before,input[type=\"radio\"]+label:before{-webkit-transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;-webkit-transition:border-color .3s ease-in-out,background-color .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;transition:border-color .3s ease-in-out,background-color .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;border-radius:0px;border:solid 1px #fff;content:'';display:inline-block;height:1.65rem;left:0;line-height:calc(1.58125rem + 0em);position:absolute;text-align:center;top:-0.125rem;width:1.65rem}input[type=\"checkbox\"]:checked+label:before,input[type=\"radio\"]:checked+label:before{background:#fff !important;border-color:#fff !important;color:#1b1f22;content:'\\f00c'}input[type=\"checkbox\"]:focus+label:before,input[type=\"radio\"]:focus+label:before{background:rgba(255,255,255,0.075);border-color:#fff;-webkit-box-shadow:0 0 0 1px #fff;box-shadow:0 0 0 1px #fff}input[type=\"checkbox\"]+label:before{border-radius:0px}input[type=\"radio\"]+label:before{border-radius:100%}::-webkit-input-placeholder{color:rgba(255,255,255,0.5) !important;opacity:1.0}:-moz-placeholder{color:rgba(255,255,255,0.5) !important;opacity:1.0}::-moz-placeholder{color:rgba(255,255,255,0.5) !important;opacity:1.0}:-ms-input-placeholder{color:rgba(255,255,255,0.5) !important;opacity:1.0}.formerize-placeholder{color:rgba(255,255,255,0.5) !important;opacity:1.0}.box{border-radius:0px;border:solid 1px #fff;margin-bottom:2rem;padding:1.5em}.box>:last-child,.box>:last-child>:last-child,.box>:last-child>:last-child>:last-child{margin-bottom:0}.box.alt{border:0;border-radius:0;padding:0}.icon{text-decoration:none;border-bottom:none;position:relative}.icon:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:normal;text-transform:none !important}.icon>.label{display:none}.image{border-radius:0px;border:0;display:inline-block;position:relative}.image:before{-moz-pointer-events:none;-webkit-pointer-events:none;-ms-pointer-events:none;pointer-events:none;background-image:url(\"/static/images/overlay.png\");background-color:rgba(19,21,25,0.5);border-radius:0px;content:'';display:block;height:100%;left:0;opacity:0.5;position:absolute;top:0;width:100%}.image img{border-radius:0px;display:block}.image.left,.image.right{max-width:40%}.image.left img,.image.right img{width:100%}.image.left{float:left;padding:0 1.5em 1em 0;top:0.25em}.image.right{float:right;padding:0 0 1em 1.5em;top:0.25em}.image.fit{display:block;margin:0 0 2rem 0;width:100%}.image.fit img{width:100%}.image.main{display:block;margin:2.5rem 0;width:100%}.image.main img{width:100%}@media screen and (max-width: 736px){.image.main{margin:2rem 0}}@media screen and (max-width: 480px){.image.main{margin:1.5rem 0}}ol{list-style:decimal;margin:0 0 2rem 0;padding-left:1.25em}ol li{padding-left:0.25em}ul{list-style:disc;margin:0 0 2rem 0;padding-left:1em}ul li{padding-left:0.5em}ul.alt{list-style:none;padding-left:0}ul.alt li{border-top:solid 1px #fff;padding:0.5em 0}ul.alt li:first-child{border-top:0;padding-top:0}ul.icons{cursor:default;list-style:none;padding-left:0}ul.icons li{display:inline-block;padding:0 0.75em 0 0}ul.icons li:last-child{padding-right:0}ul.icons li a{border-radius:100%;-webkit-box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff;display:inline-block;height:2.25rem;line-height:2.25rem;text-align:center;width:2.25rem}ul.icons li a:hover{background-color:rgba(255,255,255,0.075)}ul.icons li a:active{background-color:rgba(255,255,255,0.175)}ul.actions{cursor:default;list-style:none;padding-left:0}ul.actions li{display:inline-block;padding:0 1rem 0 0;vertical-align:middle}ul.actions li:last-child{padding-right:0}ul.actions.small li{padding:0 .5rem 0 0}ul.actions.vertical li{display:block;padding:1rem 0 0 0}ul.actions.vertical li:first-child{padding-top:0}ul.actions.vertical li>*{margin-bottom:0}ul.actions.vertical.small li{padding:.5rem 0 0 0}ul.actions.vertical.small li:first-child{padding-top:0}ul.actions.fit{display:table;margin-left:-1rem;padding:0;table-layout:fixed;width:calc(100% + 1rem)}ul.actions.fit li{display:table-cell;padding:0 0 0 1rem}ul.actions.fit li>*{margin-bottom:0}ul.actions.fit.small{margin-left:-.5rem;width:calc(100% + .5rem)}ul.actions.fit.small li{padding:0 0 0 .5rem}@media screen and (max-width: 480px){ul.actions{margin:0 0 2rem 0}ul.actions li{padding:1rem 0 0 0;display:block;text-align:center;width:100%}ul.actions li:first-child{padding-top:0}ul.actions li>*{width:100%;margin:0 !important}ul.actions li>*.icon:before{margin-left:-2em}ul.actions.small li{padding:.5rem 0 0 0}ul.actions.small li:first-child{padding-top:0}}dl{margin:0 0 2rem 0}dl dt{display:block;font-weight:600;margin:0 0 1rem 0}dl dd{margin-left:2rem}.table-wrapper{-webkit-overflow-scrolling:touch;overflow-x:auto}table{margin:0 0 2rem 0;width:100%}table tbody tr{border:solid 1px #fff;border-left:0;border-right:0}table tbody tr:nth-child(2n+1){background-color:rgba(255,255,255,0.075)}table td{padding:0.75em 0.75em}table th{color:#fff;font-size:0.9em;font-weight:600;padding:0 0.75em 0.75em 0.75em;text-align:left}table thead{border-bottom:solid 2px #fff}table tfoot{border-top:solid 2px #fff}table.alt{border-collapse:separate}table.alt tbody tr td{border:solid 1px #fff;border-left-width:0;border-top-width:0}table.alt tbody tr td:first-child{border-left-width:1px}table.alt tbody tr:first-child td{border-top-width:1px}table.alt thead{border-bottom:0}table.alt tfoot{border-top:0}input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],button,.button{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;-webkit-transition:background-color .3s ease-in-out, color .3s ease-in-out;transition:background-color .3s ease-in-out, color .3s ease-in-out;background-color:transparent;border-radius:0px;border:0;-webkit-box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff;color:#fff !important;cursor:pointer;display:inline-block;font-size:0.8rem;font-weight:300;height:2.75rem;letter-spacing:.2rem;line-height:2.75rem;outline:0;padding:0 1.25rem 0 1.35rem;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,input[type=\"button\"]:hover,button:hover,.button:hover{background-color:rgba(255,255,255,0.075)}input[type=\"submit\"]:active,input[type=\"reset\"]:active,input[type=\"button\"]:active,button:active,.button:active{background-color:rgba(255,255,255,0.175)}input[type=\"submit\"].icon:before,input[type=\"reset\"].icon:before,input[type=\"button\"].icon:before,button.icon:before,.button.icon:before{margin-right:0.5em}input[type=\"submit\"].fit,input[type=\"reset\"].fit,input[type=\"button\"].fit,button.fit,.button.fit{display:block;margin:0 0 1rem 0;width:100%}input[type=\"submit\"].special,input[type=\"reset\"].special,input[type=\"button\"].special,button.special,.button.special{background-color:#fff;color:#1b1f22 !important;font-weight:600}input[type=\"submit\"].disabled,input[type=\"submit\"]:disabled,input[type=\"reset\"].disabled,input[type=\"reset\"]:disabled,input[type=\"button\"].disabled,input[type=\"button\"]:disabled,button.disabled,button:disabled,.button.disabled,.button:disabled{-moz-pointer-events:none;-webkit-pointer-events:none;-ms-pointer-events:none;pointer-events:none;cursor:default;opacity:0.25}input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],button{line-height:calc(2.75rem - 2px)}body{overflow:hidden;width:100%;height:100vw}#bg{-webkit-backface-visibility:hidden;position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1;background-color:#6164b2}#bg:before,#bg:after{content:'';display:block;position:absolute;bottom:0;left:0;width:105%;height:105%}#bg:before{-webkit-transition:background-color .5s ease-in-out;transition:background-color .5s ease-in-out;-webkit-transition-delay:1s;transition-delay:1s;background-size:auto,\r 256px 256px;background-position:center,\r center;background-repeat:no-repeat,\r repeat;z-index:2}#bg:after{-webkit-transition:-webkit-transform .4s ease-in-out;transition:-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out, -webkit-transform .4s ease-in-out;background-position:center;background-color:#6164B2;background-size:cover;background-repeat:no-repeat;z-index:1}.body.is-article-visible #bg:after{-webkit-transform:translateY(50px);transform:translateY(50px)}.body.is-loading #bg:before{background-color:#000}#wrapper{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-moz-justify-content:space-between;-ms-justify-content:space-between;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative;min-height:100vh;width:100%;padding:4rem 2rem;z-index:3}#wrapper:before{content:'';display:block}@media screen and (max-width: 1680px){#wrapper{padding:3rem 2rem}}@media screen and (max-width: 736px){#wrapper{padding:2rem 1rem}}@media screen and (max-width: 480px){#wrapper{padding:1rem}}#wrapper.page{-moz-justify-content:-moz-flex-start;-ms-justify-content:-ms-flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}#header{margin-top:6% !important;display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:-webkit-transform .4s ease-in-out,-webkit-filter .4s ease-in-out,opacity .4s ease-in-out;-webkit-transition:opacity .4s ease-in-out,-webkit-transform .4s ease-in-out,-webkit-filter .4s ease-in-out;transition:opacity .4s ease-in-out,-webkit-transform .4s ease-in-out,-webkit-filter .4s ease-in-out;transition:transform .4s ease-in-out,filter .4s ease-in-out,opacity .4s ease-in-out;transition:transform .4s ease-in-out,filter .4s ease-in-out,opacity .4s ease-in-out,-webkit-transform .4s ease-in-out,-webkit-filter .4s ease-in-out;max-width:100%;text-align:center}#header>*{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;position:relative}#header>:first-child{margin-top:0}#header>:first-child:before{display:none}#header .logo{height:5rem;line-height:0rem}#header .logo .icon:before{font-size:2rem}#header .type{height:2.8rem;width:auto;margin-bottom:2em}#header .content .inner{-webkit-transition:max-height 1s ease,padding 1s ease,opacity .4s ease-in-out;transition:max-height 1s ease,padding 1s ease,opacity .4s ease-in-out;-webkit-transition-delay:0.25s;transition-delay:0.25s;padding:2rem 0rem;max-height:40rem;overflow:hidden}#header .content .inner .subtitle{display:block;font-size:1em;text-transform:uppercase}#header .content .inner .subtitle-bold{font-weight:bold;margin-bottom:1em;background:#fff;color:#6164b2}#header .content .inner>:last-child{margin-bottom:0}#header .content p{text-transform:uppercase;letter-spacing:.2rem;font-size:0.8rem;line-height:0}#header nav ul{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:0;list-style:none;padding-left:0;border:solid 1px #fff;border-radius:0px}#header nav ul li{padding-left:0;border-left:solid 1px #fff}#header nav ul li:first-child{border-left:0}#header nav ul li a{display:block;min-width:7.5rem;height:2.75rem;line-height:2.75rem;padding:0 1.25rem 0 1.45rem;text-transform:uppercase;letter-spacing:.2rem;font-size:1.1rem;border-bottom:0}#header nav ul li a .invert{background:white;color:#6164B2}#header nav ul li a:hover{background-color:rgba(255,255,255,0.075)}#header nav ul li a:active{background-color:rgba(255,255,255,0.175)}#header nav.use-middle:after{content:'';display:block;position:absolute;top:0;left:calc(50% - 1px);width:1px;height:100%;background:#fff}#header nav.use-middle ul li.is-middle{border-left:0}.body.is-article-visible #header{-webkit-transform:scale(0.95);transform:scale(0.95);-moz-filter:blur(0.1rem);-webkit-filter:blur(0.1rem);-ms-filter:blur(0.1rem);filter:blur(0.1rem);opacity:0}.body.is-loading #header{-moz-filter:blur(0.125rem);-webkit-filter:blur(0.125rem);-ms-filter:blur(0.125rem);filter:blur(0.125rem)}.body.is-loading #header>*{opacity:0}.body.is-loading #header .content .inner{max-height:0;padding-top:0;padding-bottom:0;opacity:0}@media screen and (max-width: 980px){#header nav ul{-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:10rem;max-width:100%}#header nav ul li{border-left:0;border-top:solid 1px #fff}#header nav ul li:first-child{border-top:0}#header nav ul li a{height:3rem;line-height:3rem;min-width:0;width:100%}}@media screen and (max-width: 736px){#header>*:before{top:calc(-2rem - 1px);height:calc(2rem + 1px)}#header .content .inner{padding:2.5rem 1rem}#header .content p{line-height:1.875}}@media screen and (max-width: 480px){#header{padding:1.5rem 0}#header .content .inner{padding:2.5rem 0}#header nav ul{-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:10rem;max-width:100%}#header nav ul li{border-left:0;border-top:solid 1px #fff}#header nav ul li:first-child{border-top:0}#header nav ul li a{height:3rem;line-height:3rem;min-width:0;width:100%}#header nav.use-middle:after{display:none}}#header .register{color:black;font-weight:bold;border-bottom:0px;font-size:180%}#main{-moz-flex-grow:1;-ms-flex-grow:1;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-moz-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:relative;max-width:100%;z-index:3;display:none;overflow:none}#main article{-webkit-transform:translateY(0.25rem);transform:translateY(0.25rem);-webkit-transition:opacity .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:opacity .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:opacity .4s ease-in-out,transform .4s ease-in-out;transition:opacity .4s ease-in-out,transform .4s ease-in-out,-webkit-transform .4s ease-in-out;padding:3.5rem 2.5rem 1.5rem 2.5rem ;position:relative;width:60rem;max-width:100%;background-color:rgba(0,0,0,0.3);border-radius:0px;opacity:0;overflow-y:auto;height:70vh}#main article .contact{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#main article .contact .method{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#main article .contact .method a{-webkit-transition:none;transition:none;border-bottom:none;margin-left:37.5%;margin-right:37.5%}#main article .contact .method svg{margin-left:auto;margin-right:auto;height:100px;width:100px}#main article h3{font-family:'IBM Plex Sans';font-weight:600;color:#CCD4FF;font-size:1.2em}#main article li{font-family:'IBM Plex Sans'}#main article li>.invert{background-color:#FFF}#main article li>.invert a{color:#6164B2}#main article .introTitle{font-weight:600;font-size:2em;letter-spacing:-0.3px}#main article .introText{font-family:\"IBM Plex Sans\";font-weight:300;font-size:1.4em;line-height:1.7em}#main article .introText svg{margin-right:0.3em}#main article .introText .bullet{margin-top:1.25em !important;display:block}#main article .faqList .faqItem{font-family:'IBM Plex Sans';font-size:1em;margin-bottom:0.5em}#main article .faqList .faqItem h3{font-size:1.2em;margin-bottom:0.5em;margin-top:1em;display:block;letter-spacing:-0.1px}#main article th{text-align:center}#main article.timeout{display:none}#main article.active.timeout{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}#main article.active{display:block !important}#main article .close{display:block;position:absolute;top:0;right:0;width:4rem;height:4rem;cursor:pointer;text-indent:4rem;overflow:hidden;white-space:nowrap}#main article .close:before{-webkit-transition:background-color .3s ease-in-out;transition:background-color .3s ease-in-out;content:'';display:block;position:absolute;top:0.75rem;left:0.75rem;width:2.5rem;height:2.5rem;border-radius:100%;background-position:center;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23fff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E\");background-size:20px 20px;background-repeat:no-repeat}#main article .close:hover:before{background-color:rgba(255,255,255,0.075)}#main article .close:active:before{background-color:rgba(255,255,255,0.175)}@media screen and (max-width: 736px){#main article{padding:3.5rem 2rem .5rem 2rem }#main article .close:before{top:0.875rem;left:0.875rem;width:2.25rem;height:2.25rem;background-size:14px 14px}}@media screen and (max-width: 480px){#main article{padding:3rem 1.5rem .5rem 1.5rem }}#main table a{border-bottom:0px}#mlh{-webkit-transition:-webkit-transform .4s ease-in-out,translateY .4s ease-in-out;-webkit-transition:translateY .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:translateY .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out,translateY .4s ease-in-out;transition:transform .4s ease-in-out,translateY .4s ease-in-out,-webkit-transform .4s ease-in-out;width:8%;max-width:100px;min-width:80px;position:absolute;right:10%;top:0vh;border-bottom:0}#mlh a{text-decoration:none;border-bottom:0px}.body.is-article-visible #mlh{-webkit-transform:translateY(-125px);transform:translateY(-125px)}.body.is-loading #mlh{-webkit-transform:translateY(-200px);transform:translateY(-200px)}#owl-cage #owl{position:absolute;left:0%;top:15%;width:20%;z-index:2;-webkit-transition:-webkit-transform .4s ease-in-out,translateX .4s ease-in-out;-webkit-transition:translateX .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:translateX .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out,translateX .4s ease-in-out;transition:transform .4s ease-in-out,translateX .4s ease-in-out,-webkit-transform .4s ease-in-out}.body.is-article-visible #owl-cage #owl{-webkit-transform:translateX(-70%) translateY(-10%);transform:translateX(-70%) translateY(-10%)}.body.is-loading #owl-cage #owl{-webkit-transform:translateX(-500px);transform:translateX(-500px)}@media screen and (max-width: 736px){#owl-cage #owl{bottom:0%;top:80%;width:30% !important;-webkit-transition:-webkit-transform .4s ease-in-out,translateX .4s ease-in-out;-webkit-transition:translateX .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:translateX .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out,translateX .4s ease-in-out;transition:transform .4s ease-in-out,translateX .4s ease-in-out,-webkit-transform .4s ease-in-out}}#sallyport #building{margin-top:2em;position:absolute;left:25%;right:25%;bottom:0%;z-index:2;width:50%;-webkit-transition:-webkit-transform .4s ease-in-out,translateX .4s ease-in-out;-webkit-transition:translateX .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:translateX .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out,translateX .4s ease-in-out;transition:transform .4s ease-in-out,translateX .4s ease-in-out,-webkit-transform .4s ease-in-out}.body.is-article-visible #sallyport #building{-webkit-transform:translateY(30%);transform:translateY(30%)}.body.is-loading #sallyport #building{-webkit-transform:translateY(500px);transform:translateY(500px)}@media screen and (max-width: 736px){#sallyport #building{width:90% !important;left:5% !important;right:5% !important;margin-top:none}}@media screen and (max-width: 980px){#sallyport #building{width:60%;left:20%;right:20%}}.u-position-absolute{position:absolute}.u-position-relative{position:relative}.accordion{border:1px solid rgba(0,0,0,0.1);border-radius:2px}.accordion__item+.accordion__item{border-top:1px solid rgba(0,0,0,0.1)}.accordion__item--has-icon{position:relative}.accordion__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:left;-ms-flex-align:left;align-items:left;vertical-align:middle;-ms-flex-wrap:wrap;flex-wrap:wrap}.accordion__title{cursor:pointer;padding:5px;width:100%;text-align:left;border:none;border-left:1px solid #CCD4FF;padding-left:1em}.accordion__title>h3{margin-bottom:0px !important;letter-spacing:-0.2px;display:inline-block}.accordion__body{padding:20px;display:block;-webkit-animation:fadein 0.35s ease-in;animation:fadein 0.35s ease-in;border-left:1px solid #CCD4FF}.accordion__body--hidden{display:none !important;opacity:0;-webkit-animation:fadein 0.35s ease-in;animation:fadein 0.35s ease-in}.accordion__title>*:last-child,.accordion__body>*:last-child{margin-bottom:0}.accordion__title>.accordion__arrow{border:solid white;border-width:0 3px 3px 0;display:inline-block;padding:3px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);margin-right:1em}.accordion__arrow::after,.accordion__arrow::before{width:10px;height:2px;content:'';color:#fff}.accordion__arrow::before{left:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[aria-expanded='true'] .accordion__arrow::before,[aria-selected='true'] .accordion__arrow::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.accordion__arrow::after{right:4px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}[aria-expanded='true'] .accordion__arrow::after,[aria-selected='true'] .accordion__arrow::after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.accordion__arrow::before,.accordion__arrow::after{transition:transform 0.25s ease, -webkit-transform 0.25s ease}@-webkit-keyframes fadein{0%{opacity:0}100%{opacity:1}}@keyframes fadein{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes move-down{0%{-webkit-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(0);transform:translateY(0)}20%{-webkit-transform:translateY(5px);transform:translateY(5px)}30%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes move-down{0%{-webkit-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(0);transform:translateY(0)}20%{-webkit-transform:translateY(5px);transform:translateY(5px)}30%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes move-up{0%{-webkit-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(0);transform:translateY(0)}20%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}30%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes move-up{0%{-webkit-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(0);transform:translateY(0)}20%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}30%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.accordion__title--animated:hover .accordion__arrow{-webkit-animation-name:move-down;animation-name:move-down;-webkit-animation-duration:1.5s;animation-duration:1.5s}.accordion__title--animated[aria-expanded='true']:hover .accordion__arrow{-webkit-animation-name:move-up;animation-name:move-up;-webkit-animation-duration:1.5s;animation-duration:1.5s}\n";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-regular/faEdit");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "/**\n* ----------------------------------------------\n* Demo styles\n* ----------------------------------------------\n**/\n.u-position-absolute {\n    position: absolute;\n}\n.u-position-relative {\n    position: relative;\n}\n.accordion {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n}\n.accordion__item + .accordion__item {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.accordion__item--has-icon {\n    position: relative;\n}\n.accordion__item {\n  display: flex;\n  align-items: left;\n  vertical-align: middle;\n  flex-wrap: wrap;\n}\n.accordion__title {\n    cursor: pointer;\n    padding: 5px;\n    width: 100%;\n    text-align: left;\n    border: none;\n    border-left: 1px solid #CCD4FF;\n    padding-left: 1em;\n}\n.accordion__title > h3 {\n  margin-bottom: 0px !important;\n  letter-spacing: -0.2px;\n  display: inline-block;\n}\n.accordion__title:hover {\n}\n.accordion__body {\n    padding: 20px;\n    display: block;\n    animation: fadein 0.35s ease-in;\n    border-left: 1px solid #CCD4FF;\n}\n.accordion__body--hidden {\n    display: none !important;\n    opacity: 0;\n    animation: fadein 0.35s ease-in;\n}\n.accordion__title > *:last-child,\n.accordion__body > *:last-child {\n    margin-bottom: 0;\n}\n.accordion__title > .accordion__arrow {\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(-45deg);\n  margin-right: 1em;\n}\n.accordion__arrow::after,\n.accordion__arrow::before {\n    width: 10px;\n    height: 2px;\n    content: '';\n    color: #fff;\n}\n.accordion__arrow::before {\n    left: 4px;\n    transform: rotate(45deg);\n}\n[aria-expanded='true'] .accordion__arrow::before, [aria-selected='true'] .accordion__arrow::before {\n    transform: rotate(45deg);\n}\n.accordion__arrow::after {\n    right: 4px;\n    transform: rotate(-45deg);\n}\n[aria-expanded='true'] .accordion__arrow::after, [aria-selected='true'] .accordion__arrow::after {\n    transform: rotate(45deg);\n}\n.accordion__arrow::before,\n.accordion__arrow::after {\n    transition: transform 0.25s ease;\n}\n/* -------------------------------------------------- */\n/* ---------------- Animation part ------------------ */\n/* -------------------------------------------------- */\n@keyframes fadein {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes move-down {\n    0% {\n        transform: translateY(0);\n    }\n    10% {\n        transform: translateY(0);\n    }\n    20% {\n        transform: translateY(5px);\n    }\n    30% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n@keyframes move-up {\n    0% {\n        transform: translateY(0);\n    }\n    10% {\n        transform: translateY(0);\n    }\n    20% {\n        transform: translateY(-5px);\n    }\n    30% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n.accordion__title--animated:hover .accordion__arrow {\n    animation-name: move-down;\n    animation-duration: 1.5s;\n}\n.accordion__title--animated[aria-expanded='true']:hover .accordion__arrow {\n    animation-name: move-up;\n    animation-duration: 1.5s;\n}\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faFacebook");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faFacebookMessenger");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-regular/faEnvelope");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faCogs");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUsers");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faPaintBrush");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons/faGrinStars");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUserPlus");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ })
/******/ ]);