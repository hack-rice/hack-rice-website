webpackHotUpdate(4,{

/***/ "./components/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/home/will/Documents/Clubs/HackRice/new_website/components/Main.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Main =
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

      var close = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "close",
        onClick: function onClick() {
          _this.props.onCloseArticle();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main",
        style: this.props.timeout ? {
          display: 'flex'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: "about",
        className: "".concat(this.props.article === 'about' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "HackRice is Rice University's annual hackathon event."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Participants trade their sleep for a weekend and join a team to create a project - typically software - in an environment optimized for creativity. At the end of the event, the participants demonstrate their projects to fellow hackers, visitors, and a panel of judges."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Hosted by the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "http://csclub.rice.edu/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Rice Computer Science Club"), "."), close), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: "criteria",
        className: "".concat(this.props.article === 'criteria' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Judging Criteria"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Technical Difficulty"), " We are looking for ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "technically advanced solutions to technically challenging problems"), " that make use of ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "hardware and APIs"), ". That being said, if you can solve a technically challenging problem with a simple solution, we will be very impressed! Additionally, we would like to emphasize that ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "APIs should only be used when necessary.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Creativity"), " We are looking for ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "original ideas"), " or ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "new angles on existing ideas"), ". For example, using an API in a unique way. We know APIs work - we want to see if you can do something new and awesome with them!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Design & Polish"), " We are looking for ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "aesthetically pleasing"), " projects with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "smooth and clear user experience.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Practicality & Usefulness"), " We are looking for ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "socially good projects"), " that ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "people would use"), ". Additionally, we would like to emphasize that we will extensively check to make sure that your project is one that people can use in the real world and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "doesn't only work on the cases you demo."))), close), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: "info",
        className: "".concat(this.props.article === 'info' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Essential Information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Logistics"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "36"), " Hours", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "400"), " Hackers", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "5"), " Hackers Per Team"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Facebook"), " Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.facebook.com/hackrice/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "here"), " for the HackRice Facebook event page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Devpost"), " Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://hackrice8.devpost.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "here"), " for the HackRice Devpost page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Location"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Rice Memorial Center (RMC)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), "Houston, Texas 77005", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), " Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.google.com/maps/place/Rice+Memorial+Center+-+Grand+Hall/@29.7179144,-95.403988,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c07ba073db39:0x33c8974bfe985837!8m2!3d29.7179098!4d-95.4017993?hl=en-US",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "here"), " to see the RMC on Google Maps")), close), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: "faq",
        className: "".concat(this.props.article === 'faq' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "FAQ"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "How long is HackRice?"), "36 hours"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "How many hackers will there be?"), "Around 400"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "How many hackers per team are permitted?"), "Team are limited to 5 hackers. That being said, you don't have to have 5 hackers to win a prize!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Is there a HackRice Facebook page?"), "Yes there is! Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.facebook.com/hackrice/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "here"), " to access it"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "How do I submit my project?"), "You can submit your project on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://hackrice8.devpost.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "this Devpost link")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Where is HackRice?"), "Rice Memorial Center (RMC)", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), "Houston, Texas 77005", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), " Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.google.com/maps/place/Rice+Memorial+Center+-+Grand+Hall/@29.7179144,-95.403988,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c07ba073db39:0x33c8974bfe985837!8m2!3d29.7179098!4d-95.4017993?hl=en-US",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "here"), " to see the RMC on Google Maps"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Who is eligible for HackRice?"), "Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "http://static.mlh.io/docs/mlh-code-of-conduct.pdf",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "MLH Code of Conduct.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Will my travel be reimbursed?"), "Yes! We'll be providing travel reimbursements for all visiting hackers. More details coming soon!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Will there be prizes?"), "We will have prizes for 1st, 2nd, 3rd place, several track prizes, and many other company sponsored prizes."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Will there be free food?"), "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "What are the acceptance criteria?"), "Rice students and alumni are guaranteed acceptance. For Non-Rice students, we ask for their previous hackathon and coding experiences, so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "What do I need to bring?"), "Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "What if I'm not very experienced?"), "We will try our best to point people in the right direction and use tools and languages that allow rapid development with the least amount of frustration. There will also be upperclassmen participating in the hackathon who can help you out. Furthermore, you can look up tutorials and sample code online. We will also be having workshops the week before the hackathon!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Can Rice alumni attend?"), "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "What if I don't have a team before the event?"), "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Do I need to stay the whole time?"), "Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might have other commitments during that time. Feel free to stay and leave as you choose. However, we would prefer that people stay to promote the environment."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), close), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: "contact",
        className: "".concat(this.props.article === 'contact' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Contact Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Email"), "Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:officialhackrice@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "here"), " to email us at officialhackrice@gmail.com"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Messenger"), "Click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://m.me/hackrice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "here"), " to message us on Facebook messenger"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), close), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: "sponsors",
        className: "".concat(this.props.article === 'sponsors' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "Sponsors"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/sponsors/Chevron.png",
        style: {
          width: "30%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/sponsors/twosigma.png",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/sponsors/indeed.png",
        style: {
          width: "40%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/sponsors/microsoft.png",
        style: {
          width: "40%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/sponsors/mlh.png",
        style: {
          width: "40%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "static/images/sponsors/schlumberger.png",
        style: {
          width: "40%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      })))), close));
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Main.propTypes = {
  route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  article: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  articleTimeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onCloseArticle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  timeout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ })

})
//# sourceMappingURL=4.6c1e548ebb25037b5242.hot-update.js.map