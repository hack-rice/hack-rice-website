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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"base":"#6164B2","light":"#b6baf9","black":"#3d3e4c","gray":["#f9f9fa","#eff0f9","#dfe0e6","#d1d2db","#c2c2cf","#b1b1c2","#9d9eb2","#8687a0","#696a82","#3d3e4c"],"gray2":["#ebf1f5","#d6e2eb","#bfd1e0","#a5bfd3","#86a9c4","#618eb2","#5780a0","#4c708c","#3f5c73","#2c4152"],"white":["#ffffff"],"lightAccentColor":"#F6B8B8","base9":"#60b2b2"}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("rebass");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rc-collapse"
var external__rc_collapse_ = __webpack_require__(11);
var external__rc_collapse__default = /*#__PURE__*/__webpack_require__.n(external__rc_collapse_);

// CONCATENATED MODULE: ./node_modules/rc-collapse/assets/index.css
var _defaultExport = [".rc-collapse{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}", ".rc-collapse-anim-active{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}", ".rc-collapse>.rc-collapse-item{border-top:1px solid #d9d9d9;}", ".rc-collapse>.rc-collapse-item:first-child{border-top:none;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header .arrow{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}", ".rc-collapse>.rc-collapse-item>.rc-collapse-header .rc-collapse-extra{margin:0 16px 0 auto;}", ".rc-collapse>.rc-collapse-item-disabled>.rc-collapse-header{cursor:not-allowed;color:#999;background-color:#f3f3f3;}", ".rc-collapse-content{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}", ".rc-collapse-content>.rc-collapse-content-box{margin-top:16px;margin-bottom:16px;}", ".rc-collapse-content-inactive{display:none;}", ".rc-collapse-item:last-child>.rc-collapse-content{border-radius:0 0 3px 3px;}", ".rc-collapse>.rc-collapse-item-active>.rc-collapse-header .arrow{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];
_defaultExport.__hash = "2694693201";
_defaultExport.__scoped = [".rc-collapse.jsx-4154084816{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}", ".rc-collapse-anim-active.jsx-4154084816{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816{border-top:1px solid #d9d9d9;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816:first-child{border-top:none;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .rc-collapse-extra.jsx-4154084816{margin:0 16px 0 auto;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item-disabled.jsx-4154084816>.rc-collapse-header.jsx-4154084816{cursor:not-allowed;color:#999;background-color:#f3f3f3;}", ".rc-collapse-content.jsx-4154084816{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}", ".rc-collapse-content.jsx-4154084816>.rc-collapse-content-box.jsx-4154084816{margin-top:16px;margin-bottom:16px;}", ".rc-collapse-content-inactive.jsx-4154084816{display:none;}", ".rc-collapse-item.jsx-4154084816:last-child>.rc-collapse-content.jsx-4154084816{border-radius:0 0 3px 3px;}", ".rc-collapse.jsx-4154084816>.rc-collapse-item-active.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];
_defaultExport.__scopedHash = "4154084816";
/* harmony default export */ var assets = (_defaultExport);
// CONCATENATED MODULE: ./styles/collapse.css
var collapse__defaultExport = [".rc-collapse{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}", ".rc-collapse-header{text-indent:unset !important;}", ".rc-collapse-header:focus{border:none;box-shadow:unset;outline:none;}", ".rc-collapse>.rc-collapse-item:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}", ".faqCard{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:280px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}", ".faqCard:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".rc-collapse-item-active{height:auto !important;}", ".arrow{display:none;content:\"\";margin-right:0px !important;border:none !important;}", ".rc-collapse-header{color:#fff !important;height:auto !important;line-height:unset !important;}", ".rc-collapse-content{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}", ".rc-collapse-content-box{margin-bottom:15px !important;}", ".rc-collapse-content-box>p{margin:0px !important;padding:0px !important;font-size:0.9em;line-height:1.3em;font-weight:normal;}", "tr:nth-child(even){background-color:rgba(255,255,255,0.05);}"];
collapse__defaultExport.__hash = "2296635189";
collapse__defaultExport.__scoped = [".rc-collapse.jsx-2217165812{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}", ".rc-collapse-header.jsx-2217165812{text-indent:unset !important;}", ".rc-collapse-header.jsx-2217165812:focus{border:none;box-shadow:unset;outline:none;}", ".rc-collapse.jsx-2217165812>.rc-collapse-item.jsx-2217165812:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}", ".faqCard.jsx-2217165812{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:\"Overpass Mono\",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:280px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}", ".faqCard.jsx-2217165812:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".rc-collapse-item-active.jsx-2217165812{height:auto !important;}", ".arrow.jsx-2217165812{display:none;content:\"\";margin-right:0px !important;border:none !important;}", ".rc-collapse-header.jsx-2217165812{color:#fff !important;height:auto !important;line-height:unset !important;}", ".rc-collapse-content.jsx-2217165812{background-color:unset;color:#fff;padding:0px;font-family:\"Open Sans\",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}", ".rc-collapse-content-box.jsx-2217165812{margin-bottom:15px !important;}", ".rc-collapse-content-box.jsx-2217165812>p.jsx-2217165812{margin:0px !important;padding:0px !important;font-size:0.9em;line-height:1.3em;font-weight:normal;}", "tr.jsx-2217165812:nth-child(even){background-color:rgba(255,255,255,0.05);}"];
collapse__defaultExport.__scopedHash = "2217165812";
/* harmony default export */ var collapse = (collapse__defaultExport);
// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(3);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// CONCATENATED MODULE: ./content/faq9.js

var title = "QUESTIONS & ANSWERS";
var questions = [{
  question: "How long is HackRice?",
  answer: "The event is held from Friday, September 20th to Sunday, September 22th. Students hack for 36 hours. Stay tuned for more info."
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
  question: "Who is eligible to participate in HackRice?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the", " ", external__react__default.a.createElement("a", {
    className: "styledlink",
    href: "http://static.mlh.io/docs/mlh-code-of-conduct.pdf"
  }, "MLH Code of Conduct."))
}, {
  question: "Will my travel be reimbursed?",
  answer: external__react__default.a.createElement(external__react__default.a.Fragment, null, "Yes! Stay tuned for more information as we finalize the details for HackRice 9.")
}, {
  question: "Will there be food?",
  answer: "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."
}, {
  question: "What are the acceptance criteria?",
  answer: "Rice students, alumni, and University of Houston undergraduates are guaranteed acceptance. For Non-Rice students, we ask for some background information so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!"
}, {
  question: "What do I need to bring?",
  answer: "Please bring a student and legal ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, a sleeping bag, and a pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
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
var colors = __webpack_require__(1);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// CONCATENATED MODULE: ./components/faq9.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faq9_Questions; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var faq9_Questions =
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
        className: "jsx-546392901" + " " + "title"
      }, title)), external__react__default.a.createElement(external__rebass_["Flex"], {
        flexDirection: "row",
        flexWrap: "wrap",
        mt: 2,
        mb: 5,
        pt: 2
      }, cols), external__react__default.a.createElement(style__default.a, {
        styleId: "546392901",
        css: [".title.jsx-546392901{display:inline-block;text-transform:uppercase;background:#349898;border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;border:1px solid rgba(255,255,255,0.2);font-family:\"Overpass Mono\",monospace;padding:5px 10px 2px 10px;box-sizing:content-box;margin-left:auto;margin-right:auto;height:40px;font-family:\"Overpass Mono\",monospace;}"]
      }));
    }
  }]);

  return Questions;
}(external__react__default.a.Component);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "rebass"
var external__rebass_ = __webpack_require__(3);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: external "react-scroll"
var external__react_scroll_ = __webpack_require__(4);
var external__react_scroll__default = /*#__PURE__*/__webpack_require__.n(external__react_scroll_);

// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(1);
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
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, text)))) : external__react__default.a.createElement(external__rebass_["Box"], {
      key: key,
      width: [1, 1 / 2, 1 / 3]
    }, external__react__default.a.createElement(ScrollingLink, {
      to: to,
      smooth: true,
      duration: 500
    }, external__react__default.a.createElement("div", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "card"
    }, external__react__default.a.createElement("h3", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cardTitle"
    }, title)), external__react__default.a.createElement("p", {
      className: style__default.a.dynamic([["2341866401", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, text))));
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "2341866401",
    css: ["a{-webkit-text-decoration:none;text-decoration:none;}", ".card{border:1px solid ".concat(colors_default.a["gray"][1], ";color:").concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,-webkit-transform 0.3s ease-in-out;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out,transform 0.3s ease-in-out;}"), ".cardTitle{text-transform:uppercase;}", ".card:hover{background:rgba(255,255,255,0.1);cursor:pointer;-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}", ".card h3{margin:0;font-size:18px;}", ".card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}", ".spacer{margin-right:5px;}"],
    dynamic: [colors_default.a["gray"][1], colors_default.a["gray"][1]]
  }));
};

/* harmony default export */ var cardNav = (cardNav_CardNav);
// CONCATENATED MODULE: ./content/tempIntro.js
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
  href: "../static/sponsorships.pdf",
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
// CONCATENATED MODULE: ./content/about.js

var about_title = "What is HackRice?";
var p1 = external__react__default.a.createElement(external__react__default.a.Fragment, null, "HackRice is Rice University's annual hackathon. It brings together over", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "four hundred of the brightest minds in the country"), " ", "to develop & showcase their", " ", external__react__default.a.createElement("span", {
  style: {
    fontWeight: "600"
  }
}, "creative and entrepreneurial talents."));
var p2 = external__react__default.a.createElement(external__react__default.a.Fragment, null, "Participants form ", " ", external__react__default.a.createElement("span", {
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
  }, about_title)), external__react__default.a.createElement(external__rebass_["Box"], {
    width: [1],
    mx: 2,
    mb: 1
  }, external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, p1), external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, p2), external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["1028647368", [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
  }, p3)), external__react__default.a.createElement(external__rebass_["Flex"], {
    justifyContent: "center",
    width: [1]
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "1028647368",
    css: ["@import url(\"https://rsms.me/inter/inter-ui.css\");", "p.__jsx-style-dynamic-selector{font-weight:300;font-size:1em;line-height:1.6em;}", "p.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{font-weight:400 !important;}", ".title.__jsx-style-dynamic-selector{display:inline-block;text-transform:uppercase;color:".concat(colors_default.a["gray"][1], ";margin:unset;font-family:\"Overpass Mono\",monospace;}"), ".sallyport.__jsx-style-dynamic-selector{height:80px !important;}", "button.__jsx-style-dynamic-selector{background:none;border:1px solid ".concat(colors_default.a["gray"][1], ";color:").concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;font-size:1em;margin-top:0.4em;margin-right:1em;padding:6px 10px;text-transform:uppercase;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}"), "button.__jsx-style-dynamic-selector:hover{background:rgba(255,255,255,0.1);cursor:pointer;}"],
    dynamic: [colors_default.a["gray"][1], colors_default.a["gray"][1], colors_default.a["gray"][1]]
  })));
};

/* harmony default export */ var about = (about_About);
// EXTERNAL MODULE: ./components/faq9.js + 3 modules
var faq9 = __webpack_require__(6);

// CONCATENATED MODULE: ./components/tempIntro.js












var tempIntro_TempIntro = function TempIntro() {
  return external__react__default.a.createElement(external__rebass_["Box"], {
    bg: colors["base9"]
  }, external__react__default.a.createElement(external__rebass_["Image"], {
    src: "../static/blueH.png",
    css: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      marginBottom: "10%",
      width: "25%"
    }
  }), external__react__default.a.createElement(external__rebass_["Box"], {
    width: "auto",
    px: 2
  }, external__react__default.a.createElement("h1", {
    className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "introText"
  }, intro), bullets.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        button = _ref.button,
        note = _ref.note,
        icon = _ref.icon;
    return external__react__default.a.createElement("div", {
      key: key,
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "introItem"
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "icon"
    }), external__react__default.a.createElement("a", {
      href: href,
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "styledlink"
    }, button), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "spacer"
    }), external__react__default.a.createElement("span", {
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "note"
    }, note));
  })), external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "cards"
  }, external__react__default.a.createElement(cardNav, {
    cards: cards
  })), external__react__default.a.createElement(about, null), external__react__default.a.createElement(faq9["a" /* default */], null), external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "social"
  }, links.map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        icon = _ref2.icon;
    return external__react__default.a.createElement(link__default.a, {
      href: href,
      key: key
    }, external__react__default.a.createElement("a", {
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]])
    }, external__react__default.a.createElement("img", {
      src: icon,
      className: style__default.a.dynamic([["986405310", [colors_default.a["gray"][1], colors_default.a["gray"][1]]]]) + " " + "icon"
    })));
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "986405310",
    css: [".introText{font-family:\"Overpass Mono\";font-size:1.5em;font-weight:700;text-transform:uppercase;}", ".introItem{margin-bottom:10px;}", "a.styledlink{color:#fff;-webkit-text-decoration:none;text-decoration:none;background:rgba(255,255,255,0.1);-webkit-transition:background 0.3s ease-in-out,color 0.3s ease-in-out;transition:background 0.3s ease-in-out,color 0.3s ease-in-out;padding:3px 5px;margin:3px;text-transform:uppercase;font-size:0.85em;font-weight:500;}", "a.styledlink:hover{color:#60b2b2;background:rgba(255,255,255,1);}", ".icon{padding:4px 13px;}", ".social{text-align:center;margin-top:10em;}", ".note{text-transform:uppercase;font-size:0.8em;font-weight:300;font-family:\"Overpass Mono\";}", ".spacer{margin-right:5px;}", ".card{border:1px solid ".concat(colors_default.a["gray"][1], ";color:").concat(colors_default.a["gray"][1], ";font-family:\"Overpass Mono\",monospace;margin:10px;min-height:110px !important;padding:18px 18px 18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;}"), ".cardTitle{text-transform:uppercase;}", ".card:hover{background:rgba(255,255,255,0.1);cursor:pointer;}", ".card h3{margin:0;font-size:18px;}", ".card p{margin:0;padding:12px 0 0;font-size:13px;font-weight:300;}", "@media (max-width:575px){.note{display:block;margin-top:1em;}}"],
    dynamic: [colors_default.a["gray"][1], colors_default.a["gray"][1]]
  }));
};

/* harmony default export */ var tempIntro = __webpack_exports__["a"] = (tempIntro_TempIntro);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
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
var external__rebass_ = __webpack_require__(3);
var external__rebass__default = /*#__PURE__*/__webpack_require__.n(external__rebass_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(5);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./styles/colors.json
var colors = __webpack_require__(1);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(8);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js




var head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external__react__default.a.createElement("title", null, props.title), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external__react__default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), external__react__default.a.createElement("meta", {
    property: "og:url",
    content: props.url
  }), external__react__default.a.createElement("meta", {
    property: "og:title",
    content: props.title
  }), external__react__default.a.createElement("meta", {
    property: "og:description",
    content: props.description
  }), external__react__default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url
  }), external__react__default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external__react__default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external__react__default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700",
    rel: "stylesheet"
  }), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
    rel: "stylesheet"
  }));
};

head_Head.defaultProps = {
  title: "",
  description: "",
  url: "",
  ogImage: ""
};
/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: ./components/tempIntro.js + 5 modules
var tempIntro = __webpack_require__(9);

// EXTERNAL MODULE: ./components/faq9.js + 3 modules
var faq9 = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 // Set global body styling.

Object(external__styled_components_["injectGlobal"])(_templateObject); // Variables for <head>

var title = "HackRice 9";
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
  }, external__react__default.a.createElement(head, {
    title: title,
    description: description,
    url: url,
    ogImage: ogImage
  }), external__react__default.a.createElement(tempIntro["a" /* default */], null), external__react__default.a.createElement(style__default.a, {
    styleId: "1287042519",
    css: ["html{background:#60b2b2 !important;}"]
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);