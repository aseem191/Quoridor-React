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
    className: "jsx-1105799938"
  }, props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1105799938",
    css: "@import url('https://fonts.googleapis.com/css?family=Rubik');@fontface{font-family:'Rubik',cursive;src:url('https://fonts.googleapis.com/css?family=Rubik');}@import url('https://fonts.googleapis.com/css?family=Graduate');@fontface{font-family:'Graduate',cursive;src:url('https://fonts.googleapis.com/css?family=Graduate');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLcUIsQUFHaUUsQUFHN0IsQUFJZ0MsQUFHN0IsNEJBTG5DLEdBT0Esc0RBUEMsTUFPQSIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXFJlYWN0UXVvcmlkb3IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblxyXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpaycpO1xyXG5cclxuICAgIEBmb250ZmFjZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBjdXJzaXZlO1xyXG4gICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrJylcclxuICAgIH1cclxuXHJcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdyYWR1YXRlJyk7XHJcblxyXG4gICAgQGZvbnRmYWNlIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZScsIGN1cnNpdmU7XHJcbiAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R3JhZHVhdGUnKVxyXG4gICAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=components\\layout.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_js__ = __webpack_require__("./pages/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_actions_js__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_layout_js__ = __webpack_require__("./components/layout.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var theme = Object(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__["createMuiTheme"])({
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
          __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/destroy", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then(function (response) {
            return response.json();
          }).then(function (data) {});
        }

        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["c" /* updateName */])(this.state.name));
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["b" /* updateGameID */])(null));
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(null));
        console.log("done");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__["MuiThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-323867943"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        style: {
          fontFamily: "Graduate",
          fontWeight: "bold",
          fontSize: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-323867943"
      }, "Quoridor React"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        style: {
          fontFamily: "Rubik",
          fontWeight: "bold",
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-323867943"
      }, "Enter your name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-323867943"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField___default.a, {
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
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/game'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button___default.a, {
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
      }, "Start game!")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-323867943"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/learn'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button___default.a, {
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
      }, "How to play")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "323867943",
        css: "body{background:#c9f5ff;background-image:url(\"/static/bgleft.png\"),url(\"/static/bgright.png\");background-position:left center,right center;background-repeat:no-repeat,no-repeat;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R3NCLEFBR3lCLG1CQUNvRCxzRUFDekIsNkNBQ1Asc0NBQ3hDIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEFzZWVtXFxSZWFjdCBQcm9qZWN0c1xcUmVhY3RRdW9yaWRvciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHVybG5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy91cmxuYW1lLmpzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2UuanNcIlxyXG5pbXBvcnQgeyB1cGRhdGVHYW1lLCB1cGRhdGVOYW1lLCB1cGRhdGVHYW1lSUQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblx0cGFsZXR0ZToge1xyXG5cdFx0cHJpbWFyeToge1xyXG5cdFx0Ly8gbGlnaHQ6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG5cdFx0XHRtYWluOiAnIzdjZTdmZicsXHJcblx0XHQvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnByaW1hcnkubWFpbixcclxuXHRcdC8vIGNvbnRyYXN0VGV4dDogd2lsbCBiZSBjYWxjdWxhdGVkIHRvIGNvbnRhc3Qgd2l0aCBwYWxldHRlLnByaW1hcnkubWFpblxyXG5cdFx0fSxcclxuXHRcdHNlY29uZGFyeToge1xyXG5cdFx0XHRtYWluOiAnI2ZmZmZmZicsXHJcblx0XHQvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG5cdFx0fSxcclxuXHRcdHRlcnRpYXJ5OiB7XHJcblx0XHRcdG1haW46ICcjMzNmZmNjJyxcclxuXHRcdC8vIGRhcms6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcblx0XHR9LFxyXG5cdFx0Ly8gVXNlZCBieSBgZ2V0Q29udHJhc3RUZXh0KClgIHRvIG1heGltaXplIHRoZSBjb250cmFzdCBiZXR3ZWVuIHRoZSBiYWNrZ3JvdW5kIGFuZFxyXG5cdFx0Ly8gdGhlIHRleHQuXHJcblx0XHRjb250cmFzdFRocmVzaG9sZDogMyxcclxuXHRcdC8vIFVzZWQgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XHJcblx0XHQvLyB0d28gaW5kZXhlcyB3aXRoaW4gaXRzIHRvbmFsIHBhbGV0dGUuXHJcblx0XHQvLyBFLmcuLCBzaGlmdCBmcm9tIFJlZCA1MDAgdG8gUmVkIDMwMCBvciBSZWQgNzAwLlxyXG5cdFx0dG9uYWxPZmZzZXQ6IDAuMixcclxuXHR9LFxyXG5cclxuXHRwcm9wczoge1xyXG5cdFx0Ly8gTmFtZSBvZiB0aGUgY29tcG9uZW50IOKam++4j1xyXG5cdFx0TXVpQnV0dG9uQmFzZToge1xyXG5cdFx0Ly8gVGhlIHByb3BlcnRpZXMgdG8gYXBwbHlcclxuXHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSwgLy8gTm8gbW9yZSByaXBwbGUsIG9uIHRoZSB3aG9sZSBhcHBsaWNhdGlvbiDwn5KjIVxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bmFtZTogXCJcIlxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2hhbmdlTmFtZSA9IHRoaXMuY2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlTmFtZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmFtZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHN0YXJ0R2FtZShldmVudCl7XHJcblx0XHRpZih0aGlzLnN0YXRlLm5hbWUgPT0gXCJcIil7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lSUQpe1xyXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSURcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL2Rlc3Ryb3lcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVOYW1lKHRoaXMuc3RhdGUubmFtZSkpO1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShudWxsKSk7XHJcblxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXCJkb25lXCIpXHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHQ8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0PGJyLz48YnIvPlxyXG5cdFx0XHRcdDxoMSBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiR3JhZHVhdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnNDBweCcgfX0+UXVvcmlkb3IgUmVhY3Q8L2gxPjxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdDxoMyBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiUnViaWtcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMjBweCcgfX0+RW50ZXIgeW91ciBuYW1lPC9oMz5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO319PlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZCBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiUnViaWtcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMjBweCcgfX0gb25LZXlQcmVzcz17ZSA9PiB7aWYgKGUua2V5ID09PSAnRW50ZXInKSBlLnByZXZlbnREZWZhdWx0KCk7fX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlTmFtZX0gbWFyZ2luPVwibm9ybWFsXCIgLz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHQ8TGluayAgaHJlZj17eyBwYXRobmFtZTogJy9nYW1lJyB9fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7Zm9udEZhbWlseTogXCJHcmFkdWF0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICcxNnB4JyB9fSBvbkNsaWNrPXt0aGlzLnN0YXJ0R2FtZX0gY29sb3I9XCJzZWNvbmRhcnlcIj5TdGFydCBnYW1lITwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdDxMaW5rICBocmVmPXt7IHBhdGhuYW1lOiAnL2xlYXJuJyB9fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7Zm9udEZhbWlseTogXCJHcmFkdWF0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICcxNHB4JyB9fSBjb2xvcj1cInByaW1hcnlcIj5Ib3cgdG8gcGxheTwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTXVpVGhlbWVQcm92aWRlcj5cclxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0XHRib2R5IHsgXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjYzlmNWZmO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9iZ2xlZnQucG5nXCIpLCB1cmwoXCIvc3RhdGljL2JncmlnaHQucG5nXCIpO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXIsIHJpZ2h0IGNlbnRlcjtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIG5vLXJlcGVhdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoTG9naW5QYWdlKSkiXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6__page_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(function (state) {
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