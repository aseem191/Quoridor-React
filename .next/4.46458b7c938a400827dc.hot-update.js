webpackHotUpdate(4,{

/***/ "./pages/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles__ = __webpack_require__("./node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Button__ = __webpack_require__("./node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Button__);
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var theme = Object(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["createMuiTheme"])({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00cc44' // dark: will be calculated from palette.primary.main,
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles__["MuiThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2565997646"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2565997646"
      }, "Quoridor React"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2565997646"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-2565997646"
      }, "Enter your name:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2565997646"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        onChange: this.changeName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-2565997646"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/game'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Button___default.a, {
        onClick: this.startGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Start game!")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2565997646",
        css: "@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');@fontface{font-family:'Gentium Book Basic',cursive;src:url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');}body{background:#ccebff;}h3{font-family:\"Gentium Book Basic\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR3VCLEFBRzBCLEFBRXFELEFBR3hCLEFBS0ksbUJBVHJELHNCQU1JLElBSUEsa0VBSkMiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcQXNlZW1cXFJlYWN0IFByb2plY3RzXFxSZWFjdFF1b3JpZG9yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZS5qc1wiXHJcbmltcG9ydCB7IHVwZGF0ZUdhbWUsIHVwZGF0ZU5hbWUsIHVwZGF0ZUdhbWVJRCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9CdXR0b24nO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICAvLyBsaWdodDogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIG1haW46ICcjMDBjYzQ0JyxcclxuICAgICAgLy8gZGFyazogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIC8vIGNvbnRyYXN0VGV4dDogd2lsbCBiZSBjYWxjdWxhdGVkIHRvIGNvbnRhc3Qgd2l0aCBwYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAnIzgwYTJmZicsXHJcbiAgICAgIC8vIGRhcms6IHdpbGwgYmUgY2FsY3VsYXRlZCBmcm9tIHBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgdGVydGlhcnk6IHtcclxuICAgICAgbWFpbjogJyMzM2ZmY2MnLFxyXG4gICAgICAvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgfSxcclxuICAgIC8vIFVzZWQgYnkgYGdldENvbnRyYXN0VGV4dCgpYCB0byBtYXhpbWl6ZSB0aGUgY29udHJhc3QgYmV0d2VlbiB0aGUgYmFja2dyb3VuZCBhbmRcclxuICAgIC8vIHRoZSB0ZXh0LlxyXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IDMsXHJcbiAgICAvLyBVc2VkIHRvIHNoaWZ0IGEgY29sb3IncyBsdW1pbmFuY2UgYnkgYXBwcm94aW1hdGVseVxyXG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxyXG4gICAgLy8gRS5nLiwgc2hpZnQgZnJvbSBSZWQgNTAwIHRvIFJlZCAzMDAgb3IgUmVkIDcwMC5cclxuICAgIHRvbmFsT2Zmc2V0OiAwLjIsXHJcbiAgfSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudCDimpvvuI9cclxuICAgIE11aUJ1dHRvbkJhc2U6IHtcclxuICAgICAgLy8gVGhlIHByb3BlcnRpZXMgdG8gYXBwbHlcclxuICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSwgLy8gTm8gbW9yZSByaXBwbGUsIG9uIHRoZSB3aG9sZSBhcHBsaWNhdGlvbiDwn5KjIVxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bmFtZTogXCJcIlxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2hhbmdlTmFtZSA9IHRoaXMuY2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlTmFtZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmFtZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHN0YXJ0R2FtZShldmVudCl7XHJcblx0XHRpZih0aGlzLnN0YXRlLm5hbWUgPT0gXCJcIil7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lSUQpe1xyXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSURcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL2Rlc3Ryb3lcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVOYW1lKHRoaXMuc3RhdGUubmFtZSkpO1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShudWxsKSk7XHJcblxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXCJkb25lXCIpXHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHQ8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0PGgxPlF1b3JpZG9yIFJlYWN0PC9oMT48YnIvPlxyXG5cdFx0XHRcdDxoMz5FbnRlciB5b3VyIG5hbWU6PC9oMz5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO319PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU5hbWV9Lz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0PExpbmsgIGhyZWY9e3sgcGF0aG5hbWU6ICcvZ2FtZScgfX0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3RhcnRHYW1lfT5TdGFydCBnYW1lITwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRcdFx0Ym9keSB7IFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjY2NlYmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HZW50aXVtK0Jvb2srQmFzaWMnKTtcclxuXHJcbiAgICAgICAgICBAZm9udGZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dlbnRpdW0gQm9vayBCYXNpYycsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R2VudGl1bStCb29rK0Jhc2ljJylcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMyB7XHJcblx0ICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlbnRpdW0gQm9vayBCYXNpY1wiLCBUaW1lcywgc2VyaWY7XHJcblx0ICAgICAgICB9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9NdWlUaGVtZVByb3ZpZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoTG9naW5QYWdlKSkiXX0= */\n/*@ sourceURL=pages\\index.js */"
      })));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.46458b7c938a400827dc.hot-update.js.map