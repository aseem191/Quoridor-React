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

/***/ "./components/urlname.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("https://quoridorbackend.herokuapp.com");

/***/ }),

/***/ "./pages/learn.js":
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
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\pages\\learn.js";



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
      main: '#80a2ff' // dark: will be calculated from palette.secondary.main,

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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__["MuiThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-3827358286"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        style: {
          fontFamily: "Graduate",
          fontWeight: "bold",
          fontSize: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-3827358286"
      }, "How to Play"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-3827358286"
      }, "The game is played by 2 players, with the first player on the top and second player on the bottom, and involves tiles and bricks. The game board looks like this: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "600px",
          width: "500px"
        },
        src: "/static/maingame.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-3827358286"
      }, "During their turn, a player can either move one spot up/down/left/right, or can place down up to 10 bricks, like so:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "600px",
          width: "500px"
        },
        src: "/static/placingbricks.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-3827358286"
      }, "The aim of the game is to get to the other side of the board. Player 1 has to reach the bottom most row, while player 2 has to reach the topmost row."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "600px",
          width: "500px"
        },
        src: "/static/winning.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-3827358286"
      }, "Also, try not to box the other player in, as that would be unfair."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "300px",
          width: "400px"
        },
        src: "/static/blocked.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-3827358286"
      }, "Have fun building quoridors!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-3827358286"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button___default.a, {
        variant: "contained",
        style: {
          fontFamily: "Graduate",
          fontWeight: "bold",
          fontSize: '16px'
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Go back")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3827358286",
        css: "@import url('https://fonts.googleapis.com/css?family=Rubik');@fontface{font-family:'Rubik',cursive;src:url('https://fonts.googleapis.com/css?family=Rubik');}@import url('https://fonts.googleapis.com/css?family=Graduate');@fontface{font-family:'Graduate',cursive;src:url('https://fonts.googleapis.com/css?family=Graduate');}body{background:#c9f5ff;}h3{font-family:\"Rubik\",Times,serif;}h2{font-family:\"Rubik\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsZWFybi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSHVCLEFBRzBCLEFBR3dDLEFBRzlCLEFBSWlDLEFBRzlCLEFBS0UsQUFJQSxtQkFyQm5DLFNBT0QsR0FPQSxDQUlDLEFBSUEscURBZkEsTUFPQSIsImZpbGUiOiJwYWdlc1xcbGVhcm4uanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXFJlYWN0UXVvcmlkb3IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCB1cmxuYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdXJsbmFtZS5qcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlLmpzXCJcclxuaW1wb3J0IHsgdXBkYXRlR2FtZSwgdXBkYXRlTmFtZSwgdXBkYXRlR2FtZUlEIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMuanNcIjtcclxuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cdHBhbGV0dGU6IHtcclxuXHRcdHByaW1hcnk6IHtcclxuXHRcdC8vIGxpZ2h0OiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnByaW1hcnkubWFpbixcclxuXHRcdFx0bWFpbjogJyM3Y2U3ZmYnLFxyXG5cdFx0Ly8gZGFyazogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcblx0XHQvLyBjb250cmFzdFRleHQ6IHdpbGwgYmUgY2FsY3VsYXRlZCB0byBjb250YXN0IHdpdGggcGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuXHRcdH0sXHJcblx0XHRzZWNvbmRhcnk6IHtcclxuXHRcdFx0bWFpbjogJyM4MGEyZmYnLFxyXG5cdFx0Ly8gZGFyazogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuXHRcdH0sXHJcblx0XHR0ZXJ0aWFyeToge1xyXG5cdFx0XHRtYWluOiAnIzMzZmZjYycsXHJcblx0XHQvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG5cdFx0fSxcclxuXHRcdC8vIFVzZWQgYnkgYGdldENvbnRyYXN0VGV4dCgpYCB0byBtYXhpbWl6ZSB0aGUgY29udHJhc3QgYmV0d2VlbiB0aGUgYmFja2dyb3VuZCBhbmRcclxuXHRcdC8vIHRoZSB0ZXh0LlxyXG5cdFx0Y29udHJhc3RUaHJlc2hvbGQ6IDMsXHJcblx0XHQvLyBVc2VkIHRvIHNoaWZ0IGEgY29sb3IncyBsdW1pbmFuY2UgYnkgYXBwcm94aW1hdGVseVxyXG5cdFx0Ly8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxyXG5cdFx0Ly8gRS5nLiwgc2hpZnQgZnJvbSBSZWQgNTAwIHRvIFJlZCAzMDAgb3IgUmVkIDcwMC5cclxuXHRcdHRvbmFsT2Zmc2V0OiAwLjIsXHJcblx0fSxcclxuXHJcblx0cHJvcHM6IHtcclxuXHRcdC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudCDimpvvuI9cclxuXHRcdE11aUJ1dHRvbkJhc2U6IHtcclxuXHRcdC8vIFRoZSBwcm9wZXJ0aWVzIHRvIGFwcGx5XHJcblx0XHRcdGRpc2FibGVSaXBwbGU6IHRydWUsIC8vIE5vIG1vcmUgcmlwcGxlLCBvbiB0aGUgd2hvbGUgYXBwbGljYXRpb24g8J+SoyFcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5jbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdG5hbWU6IFwiXCJcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNoYW5nZU5hbWUgPSB0aGlzLmNoYW5nZU5hbWUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZU5hbWUoZXZlbnQpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdG5hbWU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzdGFydEdhbWUoZXZlbnQpe1xyXG5cdFx0aWYodGhpcy5zdGF0ZS5uYW1lID09IFwiXCIpe1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZUlEKXtcclxuXHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuZ2FtZUlEXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9kZXN0cm95XCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHJcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlTmFtZSh0aGlzLnN0YXRlLm5hbWUpKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lSUQobnVsbCkpO1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWUobnVsbCkpO1xyXG5cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZG9uZVwiKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0PGRpdiBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdDxici8+PGJyLz5cclxuXHRcdFx0XHQ8aDEgc3R5bGU9e3tmb250RmFtaWx5OiBcIkdyYWR1YXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogJzQwcHgnIH19PkhvdyB0byBQbGF5PC9oMT48YnIvPjxici8+XHJcblxyXG5cdFx0XHRcdDxoMz5UaGUgZ2FtZSBpcyBwbGF5ZWQgYnkgMiBwbGF5ZXJzLCB3aXRoIHRoZSBmaXJzdCBwbGF5ZXIgb24gdGhlIHRvcCBhbmQgc2Vjb25kIHBsYXllciBvbiB0aGUgYm90dG9tLCBhbmQgaW52b2x2ZXMgdGlsZXMgYW5kIGJyaWNrcy4gVGhlIGdhbWUgYm9hcmQgbG9va3MgbGlrZSB0aGlzOiA8L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjYwMHB4XCIsIHdpZHRoOiBcIjUwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL21haW5nYW1lLlBOR1wiIC8+IFxyXG5cclxuXHRcdFx0XHQ8aDM+RHVyaW5nIHRoZWlyIHR1cm4sIGEgcGxheWVyIGNhbiBlaXRoZXIgbW92ZSBvbmUgc3BvdCB1cC9kb3duL2xlZnQvcmlnaHQsIG9yIGNhbiBwbGFjZSBkb3duIHVwIHRvIDEwIGJyaWNrcywgbGlrZSBzbzo8L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjYwMHB4XCIsIHdpZHRoOiBcIjUwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL3BsYWNpbmdicmlja3MuUE5HXCIgLz5cclxuXHJcblx0XHRcdFx0PGgzPlRoZSBhaW0gb2YgdGhlIGdhbWUgaXMgdG8gZ2V0IHRvIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBib2FyZC4gUGxheWVyIDEgaGFzIHRvIHJlYWNoIHRoZSBib3R0b20gbW9zdCByb3csIHdoaWxlIHBsYXllciAyIGhhcyB0byByZWFjaCB0aGUgdG9wbW9zdCByb3cuPC9oMz5cclxuXHJcblx0XHRcdFx0PGltZyBzdHlsZT17e2hlaWdodDogXCI2MDBweFwiLCB3aWR0aDogXCI1MDBweFwifX0gc3JjPVwiL3N0YXRpYy93aW5uaW5nLlBOR1wiIC8+XHJcblxyXG5cdFx0XHRcdDxoMz5BbHNvLCB0cnkgbm90IHRvIGJveCB0aGUgb3RoZXIgcGxheWVyIGluLCBhcyB0aGF0IHdvdWxkIGJlIHVuZmFpci48L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjMwMHB4XCIsIHdpZHRoOiBcIjQwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL2Jsb2NrZWQuUE5HXCIgLz5cclxuXHJcblx0XHRcdFx0PGgyPkhhdmUgZnVuIGJ1aWxkaW5nIHF1b3JpZG9ycyE8L2gyPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxici8+XHJcblx0XHRcdFx0PExpbmsgIGhyZWY9e3sgcGF0aG5hbWU6ICcvJyB9fT5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7Zm9udEZhbWlseTogXCJHcmFkdWF0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICcxNnB4JyB9fSBjb2xvcj1cInByaW1hcnlcIj5HbyBiYWNrPC9CdXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdFx0XHRib2R5IHsgXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjOWY1ZmY7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpaycpO1xyXG5cclxuXHRcdFx0XHRcdEBmb250ZmFjZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUnViaWsnLCBjdXJzaXZlO1xyXG5cdFx0XHRcdFx0XHRzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrJylcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdyYWR1YXRlJyk7XHJcblxyXG5cdFx0XHRcdFx0QGZvbnRmYWNlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdHcmFkdWF0ZScsIGN1cnNpdmU7XHJcblx0XHRcdFx0XHRcdHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R3JhZHVhdGUnKVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUnViaWtcIiwgVGltZXMsIHNlcmlmO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUnViaWtcIiwgVGltZXMsIHNlcmlmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTXVpVGhlbWVQcm92aWRlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2UoY29ubmVjdChzdGF0ZT0+c3RhdGUpKExvZ2luUGFnZSkpIl19 */\n/*@ sourceURL=pages\\learn.js */"
      })));
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

module.exports = __webpack_require__("./pages/learn.js");


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
//# sourceMappingURL=learn.js.map