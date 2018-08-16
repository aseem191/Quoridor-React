webpackHotUpdate(6,{

/***/ "./pages/learn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_js__ = __webpack_require__("./pages/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_actions_js__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField__ = __webpack_require__("./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_layout_js__ = __webpack_require__("./components/layout.js");
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
        className: "jsx-1702393354"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-1702393354"
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
        className: "jsx-1702393354"
      }, "How to Play"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-1702393354"
      }, "The game is played by 2 players, with the first player on the top and second player on the bottom, and involves tiles and bricks. The game board looks like this: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "600px",
          width: "500px"
        },
        src: "/static/maingame.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-1702393354"
      }, "During their turn, a player can either move one spot up/down/left/right, or can place down up to 10 bricks to restrict the other player's movement, like so:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "600px",
          width: "500px"
        },
        src: "/static/placingbricks.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-1702393354"
      }, "The aim of the game is to get to the other side of the board. Player 1 has to reach the bottom most row, while player 2 has to reach the topmost row."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "600px",
          width: "500px"
        },
        src: "/static/winning.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-1702393354"
      }, "Also, try not to box the other player in, as that would be unfair."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "300px",
          width: "400px"
        },
        src: "/static/blocked.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-1702393354"
      }, "Occasionally, alerts will pop up, which indicate strategies that the other player may be trying to use!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "500px",
          width: "400px"
        },
        src: "/static/stratalert.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-1702393354"
      }, "Have fun building quoridors!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-1702393354"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
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
          lineNumber: 121
        }
      }, "Go back")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1702393354",
        css: "h3.jsx-1702393354{font-family:\"Rubik\",Times,serif;}h2.jsx-1702393354{font-family:\"Rubik\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsZWFybi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSGdCLEFBSXlDLEFBSUEsZ0NBSG5DLEFBSUEiLCJmaWxlIjoicGFnZXNcXGxlYXJuLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcQXNlZW1cXFJlYWN0IFByb2plY3RzXFxSZWFjdFF1b3JpZG9yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZS5qc1wiXHJcbmltcG9ydCB7IHVwZGF0ZUdhbWUsIHVwZGF0ZU5hbWUsIHVwZGF0ZUdhbWVJRCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuXHRwYWxldHRlOiB7XHJcblx0XHRwcmltYXJ5OiB7XHJcblx0XHQvLyBsaWdodDogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcblx0XHRcdG1haW46ICcjN2NlN2ZmJyxcclxuXHRcdC8vIGRhcms6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG5cdFx0Ly8gY29udHJhc3RUZXh0OiB3aWxsIGJlIGNhbGN1bGF0ZWQgdG8gY29udGFzdCB3aXRoIHBhbGV0dGUucHJpbWFyeS5tYWluXHJcblx0XHR9LFxyXG5cdFx0c2Vjb25kYXJ5OiB7XHJcblx0XHRcdG1haW46ICcjODBhMmZmJyxcclxuXHRcdC8vIGRhcms6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcblx0XHR9LFxyXG5cdFx0dGVydGlhcnk6IHtcclxuXHRcdFx0bWFpbjogJyMzM2ZmY2MnLFxyXG5cdFx0Ly8gZGFyazogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuXHRcdH0sXHJcblx0XHQvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW4gdGhlIGJhY2tncm91bmQgYW5kXHJcblx0XHQvLyB0aGUgdGV4dC5cclxuXHRcdGNvbnRyYXN0VGhyZXNob2xkOiAzLFxyXG5cdFx0Ly8gVXNlZCB0byBzaGlmdCBhIGNvbG9yJ3MgbHVtaW5hbmNlIGJ5IGFwcHJveGltYXRlbHlcclxuXHRcdC8vIHR3byBpbmRleGVzIHdpdGhpbiBpdHMgdG9uYWwgcGFsZXR0ZS5cclxuXHRcdC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXHJcblx0XHR0b25hbE9mZnNldDogMC4yLFxyXG5cdH0sXHJcblxyXG5cdHByb3BzOiB7XHJcblx0XHQvLyBOYW1lIG9mIHRoZSBjb21wb25lbnQg4pqb77iPXHJcblx0XHRNdWlCdXR0b25CYXNlOiB7XHJcblx0XHQvLyBUaGUgcHJvcGVydGllcyB0byBhcHBseVxyXG5cdFx0XHRkaXNhYmxlUmlwcGxlOiB0cnVlLCAvLyBObyBtb3JlIHJpcHBsZSwgb24gdGhlIHdob2xlIGFwcGxpY2F0aW9uIPCfkqMhXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRuYW1lOiBcIlwiXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jaGFuZ2VOYW1lID0gdGhpcy5jaGFuZ2VOYW1lLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VOYW1lKGV2ZW50KXtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRuYW1lOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0c3RhcnRHYW1lKGV2ZW50KXtcclxuXHRcdGlmKHRoaXMuc3RhdGUubmFtZSA9PSBcIlwiKXtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLmdhbWVJRCl7XHJcblx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZGVzdHJveVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblxyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZU5hbWUodGhpcy5zdGF0ZS5uYW1lKSk7XHJcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZUlEKG51bGwpKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKG51bGwpKTtcclxuXHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhcImRvbmVcIilcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblx0XHRcdDxkaXYgYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHQ8YnIvPjxici8+XHJcblx0XHRcdFx0PGgxIHN0eWxlPXt7Zm9udEZhbWlseTogXCJHcmFkdWF0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICc0MHB4JyB9fT5Ib3cgdG8gUGxheTwvaDE+PGJyLz48YnIvPlxyXG5cclxuXHRcdFx0XHQ8aDM+VGhlIGdhbWUgaXMgcGxheWVkIGJ5IDIgcGxheWVycywgd2l0aCB0aGUgZmlyc3QgcGxheWVyIG9uIHRoZSB0b3AgYW5kIHNlY29uZCBwbGF5ZXIgb24gdGhlIGJvdHRvbSwgYW5kIGludm9sdmVzIHRpbGVzIGFuZCBicmlja3MuIFRoZSBnYW1lIGJvYXJkIGxvb2tzIGxpa2UgdGhpczogPC9oMz5cclxuXHJcblx0XHRcdFx0PGltZyBzdHlsZT17e2hlaWdodDogXCI2MDBweFwiLCB3aWR0aDogXCI1MDBweFwifX0gc3JjPVwiL3N0YXRpYy9tYWluZ2FtZS5QTkdcIiAvPiBcclxuXHJcblx0XHRcdFx0PGgzPkR1cmluZyB0aGVpciB0dXJuLCBhIHBsYXllciBjYW4gZWl0aGVyIG1vdmUgb25lIHNwb3QgdXAvZG93bi9sZWZ0L3JpZ2h0LCBvciBjYW4gcGxhY2UgZG93biB1cCB0byAxMCBicmlja3MgdG8gcmVzdHJpY3QgdGhlIG90aGVyIHBsYXllcidzIG1vdmVtZW50LCBsaWtlIHNvOjwvaDM+XHJcblxyXG5cdFx0XHRcdDxpbWcgc3R5bGU9e3toZWlnaHQ6IFwiNjAwcHhcIiwgd2lkdGg6IFwiNTAwcHhcIn19IHNyYz1cIi9zdGF0aWMvcGxhY2luZ2JyaWNrcy5QTkdcIiAvPlxyXG5cclxuXHRcdFx0XHQ8aDM+VGhlIGFpbSBvZiB0aGUgZ2FtZSBpcyB0byBnZXQgdG8gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGJvYXJkLiBQbGF5ZXIgMSBoYXMgdG8gcmVhY2ggdGhlIGJvdHRvbSBtb3N0IHJvdywgd2hpbGUgcGxheWVyIDIgaGFzIHRvIHJlYWNoIHRoZSB0b3Btb3N0IHJvdy48L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjYwMHB4XCIsIHdpZHRoOiBcIjUwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL3dpbm5pbmcuUE5HXCIgLz5cclxuXHJcblx0XHRcdFx0PGgzPkFsc28sIHRyeSBub3QgdG8gYm94IHRoZSBvdGhlciBwbGF5ZXIgaW4sIGFzIHRoYXQgd291bGQgYmUgdW5mYWlyLjwvaDM+XHJcblxyXG5cdFx0XHRcdDxpbWcgc3R5bGU9e3toZWlnaHQ6IFwiMzAwcHhcIiwgd2lkdGg6IFwiNDAwcHhcIn19IHNyYz1cIi9zdGF0aWMvYmxvY2tlZC5QTkdcIiAvPlxyXG5cclxuXHRcdFx0XHQ8aDM+T2NjYXNpb25hbGx5LCBhbGVydHMgd2lsbCBwb3AgdXAsIHdoaWNoIGluZGljYXRlIHN0cmF0ZWdpZXMgdGhhdCB0aGUgb3RoZXIgcGxheWVyIG1heSBiZSB0cnlpbmcgdG8gdXNlITwvaDM+XHJcblxyXG5cdFx0XHRcdDxpbWcgc3R5bGU9e3toZWlnaHQ6IFwiNTAwcHhcIiwgd2lkdGg6IFwiNDAwcHhcIn19IHNyYz1cIi9zdGF0aWMvc3RyYXRhbGVydC5QTkdcIiAvPlxyXG5cclxuXHRcdFx0XHQ8aDI+SGF2ZSBmdW4gYnVpbGRpbmcgcXVvcmlkb3JzITwvaDI+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHQ8TGluayAgaHJlZj17eyBwYXRobmFtZTogJy8nIH19PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3tmb250RmFtaWx5OiBcIkdyYWR1YXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogJzE2cHgnIH19IGNvbG9yPVwicHJpbWFyeVwiPkdvIGJhY2s8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L011aVRoZW1lUHJvdmlkZXI+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoTG9naW5QYWdlKSkiXX0= */\n/*@ sourceURL=pages\\learn.js */"
      }))));
    }
  }]);

  return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6__page_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(function (state) {
  return state;
})(LoginPage)));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/learn")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.ceb38da5a596c037c924.hot-update.js.map