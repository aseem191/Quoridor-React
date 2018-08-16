webpackHotUpdate(5,{

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
        className: "jsx-4052830158"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-4052830158"
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
        className: "jsx-4052830158"
      }, "How to Play"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-4052830158"
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
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-4052830158"
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
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-4052830158"
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
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-4052830158"
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
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-4052830158"
      }, "Occasionally, alerts will pop up, which indicate strategies that the other player may be trying to use!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        style: {
          height: "450px",
          width: "400px"
        },
        src: "/static/stratalert.PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-4052830158"
      }, "Have fun building quoridors!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
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
          lineNumber: 122
        }
      }, "Go back")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-4052830158"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4052830158",
        css: "body{background:#c9f5ff;}h3{font-family:\"Rubik\",Times,serif;}h2{font-family:\"Rubik\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsZWFybi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SHVCLEFBRzBCLEFBSWUsQUFJQSxtQkFQbkMsYUFJQSxBQUlBIiwiZmlsZSI6InBhZ2VzXFxsZWFybi5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEFzZWVtXFxSZWFjdCBQcm9qZWN0c1xcUmVhY3RRdW9yaWRvciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHVybG5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy91cmxuYW1lLmpzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2UuanNcIlxyXG5pbXBvcnQgeyB1cGRhdGVHYW1lLCB1cGRhdGVOYW1lLCB1cGRhdGVHYW1lSUQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblx0cGFsZXR0ZToge1xyXG5cdFx0cHJpbWFyeToge1xyXG5cdFx0Ly8gbGlnaHQ6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG5cdFx0XHRtYWluOiAnIzdjZTdmZicsXHJcblx0XHQvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnByaW1hcnkubWFpbixcclxuXHRcdC8vIGNvbnRyYXN0VGV4dDogd2lsbCBiZSBjYWxjdWxhdGVkIHRvIGNvbnRhc3Qgd2l0aCBwYWxldHRlLnByaW1hcnkubWFpblxyXG5cdFx0fSxcclxuXHRcdHNlY29uZGFyeToge1xyXG5cdFx0XHRtYWluOiAnIzgwYTJmZicsXHJcblx0XHQvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG5cdFx0fSxcclxuXHRcdHRlcnRpYXJ5OiB7XHJcblx0XHRcdG1haW46ICcjMzNmZmNjJyxcclxuXHRcdC8vIGRhcms6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcblx0XHR9LFxyXG5cdFx0Ly8gVXNlZCBieSBgZ2V0Q29udHJhc3RUZXh0KClgIHRvIG1heGltaXplIHRoZSBjb250cmFzdCBiZXR3ZWVuIHRoZSBiYWNrZ3JvdW5kIGFuZFxyXG5cdFx0Ly8gdGhlIHRleHQuXHJcblx0XHRjb250cmFzdFRocmVzaG9sZDogMyxcclxuXHRcdC8vIFVzZWQgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XHJcblx0XHQvLyB0d28gaW5kZXhlcyB3aXRoaW4gaXRzIHRvbmFsIHBhbGV0dGUuXHJcblx0XHQvLyBFLmcuLCBzaGlmdCBmcm9tIFJlZCA1MDAgdG8gUmVkIDMwMCBvciBSZWQgNzAwLlxyXG5cdFx0dG9uYWxPZmZzZXQ6IDAuMixcclxuXHR9LFxyXG5cclxuXHRwcm9wczoge1xyXG5cdFx0Ly8gTmFtZSBvZiB0aGUgY29tcG9uZW50IOKam++4j1xyXG5cdFx0TXVpQnV0dG9uQmFzZToge1xyXG5cdFx0Ly8gVGhlIHByb3BlcnRpZXMgdG8gYXBwbHlcclxuXHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSwgLy8gTm8gbW9yZSByaXBwbGUsIG9uIHRoZSB3aG9sZSBhcHBsaWNhdGlvbiDwn5KjIVxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bmFtZTogXCJcIlxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2hhbmdlTmFtZSA9IHRoaXMuY2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlTmFtZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmFtZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHN0YXJ0R2FtZShldmVudCl7XHJcblx0XHRpZih0aGlzLnN0YXRlLm5hbWUgPT0gXCJcIil7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lSUQpe1xyXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSURcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL2Rlc3Ryb3lcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVOYW1lKHRoaXMuc3RhdGUubmFtZSkpO1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShudWxsKSk7XHJcblxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXCJkb25lXCIpXHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHQ8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0PGJyLz48YnIvPlxyXG5cdFx0XHRcdDxoMSBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiR3JhZHVhdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnNDBweCcgfX0+SG93IHRvIFBsYXk8L2gxPjxici8+PGJyLz5cclxuXHJcblx0XHRcdFx0PGgzPlRoZSBnYW1lIGlzIHBsYXllZCBieSAyIHBsYXllcnMsIHdpdGggdGhlIGZpcnN0IHBsYXllciBvbiB0aGUgdG9wIGFuZCBzZWNvbmQgcGxheWVyIG9uIHRoZSBib3R0b20sIGFuZCBpbnZvbHZlcyB0aWxlcyBhbmQgYnJpY2tzLiBUaGUgZ2FtZSBib2FyZCBsb29rcyBsaWtlIHRoaXM6IDwvaDM+XHJcblxyXG5cdFx0XHRcdDxpbWcgc3R5bGU9e3toZWlnaHQ6IFwiNjAwcHhcIiwgd2lkdGg6IFwiNTAwcHhcIn19IHNyYz1cIi9zdGF0aWMvbWFpbmdhbWUuUE5HXCIgLz4gXHJcblxyXG5cdFx0XHRcdDxoMz5EdXJpbmcgdGhlaXIgdHVybiwgYSBwbGF5ZXIgY2FuIGVpdGhlciBtb3ZlIG9uZSBzcG90IHVwL2Rvd24vbGVmdC9yaWdodCwgb3IgY2FuIHBsYWNlIGRvd24gdXAgdG8gMTAgYnJpY2tzIHRvIHJlc3RyaWN0IHRoZSBvdGhlciBwbGF5ZXIncyBtb3ZlbWVudCwgbGlrZSBzbzo8L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjYwMHB4XCIsIHdpZHRoOiBcIjUwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL3BsYWNpbmdicmlja3MuUE5HXCIgLz5cclxuXHJcblx0XHRcdFx0PGgzPlRoZSBhaW0gb2YgdGhlIGdhbWUgaXMgdG8gZ2V0IHRvIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBib2FyZC4gUGxheWVyIDEgaGFzIHRvIHJlYWNoIHRoZSBib3R0b20gbW9zdCByb3csIHdoaWxlIHBsYXllciAyIGhhcyB0byByZWFjaCB0aGUgdG9wbW9zdCByb3cuPC9oMz5cclxuXHJcblx0XHRcdFx0PGltZyBzdHlsZT17e2hlaWdodDogXCI2MDBweFwiLCB3aWR0aDogXCI1MDBweFwifX0gc3JjPVwiL3N0YXRpYy93aW5uaW5nLlBOR1wiIC8+XHJcblxyXG5cdFx0XHRcdDxoMz5BbHNvLCB0cnkgbm90IHRvIGJveCB0aGUgb3RoZXIgcGxheWVyIGluLCBhcyB0aGF0IHdvdWxkIGJlIHVuZmFpci48L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjMwMHB4XCIsIHdpZHRoOiBcIjQwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL2Jsb2NrZWQuUE5HXCIgLz5cclxuXHJcblx0XHRcdFx0PGgzPk9jY2FzaW9uYWxseSwgYWxlcnRzIHdpbGwgcG9wIHVwLCB3aGljaCBpbmRpY2F0ZSBzdHJhdGVnaWVzIHRoYXQgdGhlIG90aGVyIHBsYXllciBtYXkgYmUgdHJ5aW5nIHRvIHVzZSE8L2gzPlxyXG5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7aGVpZ2h0OiBcIjQ1MHB4XCIsIHdpZHRoOiBcIjQwMHB4XCJ9fSBzcmM9XCIvc3RhdGljL3N0cmF0YWxlcnQuUE5HXCIgLz5cclxuXHJcblx0XHRcdFx0PGJyLz48YnIvPlxyXG5cdFx0XHRcdDxoMj5IYXZlIGZ1biBidWlsZGluZyBxdW9yaWRvcnMhPC9oMj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdDxMaW5rICBocmVmPXt7IHBhdGhuYW1lOiAnLycgfX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiR3JhZHVhdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMTZweCcgfX0gY29sb3I9XCJwcmltYXJ5XCI+R28gYmFjazwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8YnIvPjxici8+PGJyLz5cclxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRcdFx0Ym9keSB7IFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjYzlmNWZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L011aVRoZW1lUHJvdmlkZXI+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoTG9naW5QYWdlKSkiXX0= */\n/*@ sourceURL=pages\\learn.js */"
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
//# sourceMappingURL=5.f6254c9fe9ee02979b9e.hot-update.js.map