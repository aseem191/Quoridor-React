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

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\components\\layout.js";



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1755214282"
  }, props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1755214282",
    css: "@import url('https://fonts.googleapis.com/css?family=Rubik');@fontface{font-family:'Rubik',cursive;src:url('https://fonts.googleapis.com/css?family=Rubik');}@import url('https://fonts.googleapis.com/css?family=Graduate');@fontface{font-family:'Graduate',cursive;src:url('https://fonts.googleapis.com/css?family=Graduate');}body{background:#c9f5ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLcUIsQUFHMEIsQUFHdUMsQUFHN0IsQUFJZ0MsQUFHN0IsbUJBWmxDLFNBT0QsR0FPQSxzREFQQyxNQU9BIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEFzZWVtXFxSZWFjdCBQcm9qZWN0c1xcUmVhY3RRdW9yaWRvciIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgIGJvZHkgeyBcclxuICAgICAgYmFja2dyb3VuZDogI2M5ZjVmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrJyk7XHJcblxyXG4gICAgQGZvbnRmYWNlIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIGN1cnNpdmU7XHJcbiAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWsnKVxyXG4gICAgfVxyXG5cclxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R3JhZHVhdGUnKTtcclxuXHJcbiAgICBAZm9udGZhY2Uge1xyXG4gICAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJywgY3Vyc2l2ZTtcclxuICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HcmFkdWF0ZScpXHJcbiAgICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=components\\layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/urlname.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("https://quoridorbackend.herokuapp.com");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_js__ = __webpack_require__("./pages/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_js__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_TextField__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_layout_js__ = __webpack_require__("./components/layout.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var theme = Object(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#7ce7ff' // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main

    },
    secondary: {
      main: '#ffffff' // dark: will be calculated from palette.secondary.main,

    },
    tertiary: {
      main: '#33ffcc' // dark: will be calculated from palette.secondary.main,

    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!

    }
  }
});

var LoginPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage(props) {
    var _this;

    _classCallCheck(this, LoginPage);

    _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
    _this.state = {
      name: ""
    };
    _this.changeName = _this.changeName.bind(_assertThisInitialized(_this));
    _this.startGame = _this.startGame.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginPage, [{
    key: "changeName",
    value: function changeName(event) {
      this.setState({
        name: event.currentTarget.value
      });
    }
  }, {
    key: "startGame",
    value: function startGame(event) {
      if (this.state.name == "") {} else {
        if (this.props.gameID) {
          var params = {
            id: this.props.gameID
          };
          __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__components_urlname_js__["a" /* default */] + "/destroy", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then(function (response) {
            return response.json();
          }).then(function (data) {});
        }

        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["c" /* updateName */])(this.state.name));
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["b" /* updateGameID */])(null));
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["a" /* updateGame */])(null));
        console.log("done");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__["MuiThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        style: {
          fontFamily: "Graduate",
          fontWeight: "bold",
          fontSize: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Quoridor React"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        style: {
          fontFamily: "Rubik",
          fontWeight: "bold",
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Enter your name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_TextField___default.a, {
        style: {
          fontFamily: "Rubik",
          fontWeight: "bold",
          fontSize: '20px'
        },
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') e.preventDefault();
        },
        onChange: this.changeName,
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: {
          pathname: '/game'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default.a, {
        variant: "contained",
        style: {
          fontFamily: "Graduate",
          fontWeight: "bold",
          fontSize: '16px'
        },
        onClick: this.startGame,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Start game!")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: {
          pathname: '/learn'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default.a, {
        variant: "contained",
        style: {
          fontFamily: "Graduate",
          fontWeight: "bold",
          fontSize: '14px'
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "How to play")))));
    }
  }]);

  return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__page_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
  return state;
})(LoginPage)));

/***/ }),

/***/ "./pages/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_store_js__ = __webpack_require__("./redux/store.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\pages\\page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var page = function page(Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(PageWrapper, _React$Component);

      function PageWrapper() {
        _classCallCheck(this, PageWrapper);

        return _possibleConstructorReturn(this, (PageWrapper.__proto__ || Object.getPrototypeOf(PageWrapper)).apply(this, arguments));
      }

      _createClass(PageWrapper, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], {
            store: __WEBPACK_IMPORTED_MODULE_2__redux_store_js__["a" /* default */],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Page, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }));
        }
      }]);

      return PageWrapper;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (page);

/***/ }),

/***/ "./redux/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateGameID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateName; });
var updateGame = function updateGame(game) {
  return {
    type: "UPDATEGAME",
    payload: game
  };
};
var updateGameID = function updateGameID(gameID) {
  return {
    type: "UPDATEGAMEID",
    payload: gameID
  };
};
var updateName = function updateName(name) {
  return {
    type: "UPDATENAME",
    payload: name
  };
};

/***/ }),

/***/ "./redux/rootReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  game: null,
  name: null,
  gameID: null
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "UPDATEGAME":
      return _objectSpread({}, state, {
        game: action.payload
      });

    case "UPDATEGAMEID":
      return _objectSpread({}, state, {
        gameID: action.payload
      });

    case "UPDATENAME":
      return _objectSpread({}, state, {
        name: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./redux/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rootReducer_js__ = __webpack_require__("./redux/rootReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);


var store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_0__rootReducer_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/TextField":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map