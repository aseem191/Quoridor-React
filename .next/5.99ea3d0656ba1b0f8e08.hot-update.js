webpackHotUpdate(5,{

/***/ "./pages/game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_js__ = __webpack_require__("./pages/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_js__ = __webpack_require__("./redux/actions.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\ReactQuoridor\\pages\\game.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Game =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));
    _this.fetchGame = _this.fetchGame.bind(_assertThisInitialized(_this));
    _this.brickMouseOver = _this.brickMouseOver.bind(_assertThisInitialized(_this));
    _this.brickMouseLeave = _this.brickMouseLeave.bind(_assertThisInitialized(_this));
    _this.clickBrick = _this.clickBrick.bind(_assertThisInitialized(_this));
    _this.squareMouseOver = _this.squareMouseOver.bind(_assertThisInitialized(_this));
    _this.squareMouseLeave = _this.squareMouseLeave.bind(_assertThisInitialized(_this));
    _this.clickSquare = _this.clickSquare.bind(_assertThisInitialized(_this));

    _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["a" /* updateGame */])(null));

    var arr = [];

    for (var x = 0; x < 8; x++) {
      arr[x] = [];

      for (var y = 0; y < 8; y++) {
        arr[x][y] = "#4286f4";
      }
    }

    var arr2 = [];

    for (var x = 0; x < 8; x++) {
      arr2[x] = [];

      for (var y = 0; y < 8; y++) {
        arr2[x][y] = "#4286f4";
      }
    }

    var arr3 = [];

    for (var x = 0; x < 9; x++) {
      arr3[x] = [];

      for (var y = 0; y < 9; y++) {
        arr3[x][y] = 0;
      }
    }

    _this.state = {
      squareColor: "#555",
      brickDefaultColor: "#4286f4",
      brickExistsColor: "#eda034",
      brickHighlightedColor: "#000863",
      player1Color: "#d30606",
      player2Color: "#30b500",
      playerArray: arr3.slice(),
      verticalBricks: arr.slice(),
      horizontalBricks: arr2.slice()
    };
    var params = {
      uname: _this.props.name
    };

    if (!_this.props.gameID) {
      __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__components_urlname_js__["a" /* default */] + "/player", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log("player response is " + JSON.stringify(data));

        if (!data.error) {
          __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__components_urlname_js__["a" /* default */] + "/game/" + data.id).then(function (response) {
            return response.json();
          }).then(function (data) {
            _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["a" /* updateGame */])(data));

            _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["b" /* updateGameID */])(data._id));

            console.log("game is " + JSON.stringify(data));
          });
        }
      });
    }

    return _this;
  }

  _createClass(Game, [{
    key: "fetchGame",
    value: function fetchGame() {
      var _this2 = this;

      if (this.props.gameID) {
        __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__components_urlname_js__["a" /* default */] + "/game/" + this.props.gameID).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_js__["a" /* updateGame */])(data));
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.interval = setInterval(function () {
        return _this3.fetchGame();
      }, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "squareMouseOver",
    value: function squareMouseOver(event) {
      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {}
      }
    }
  }, {
    key: "squareMouseLeave",
    value: function squareMouseLeave(event) {
      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {}
      }
    }
  }, {
    key: "clickSquare",
    value: function clickSquare(event) {
      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {}
      }
    }
  }, {
    key: "clickBrick",
    value: function clickBrick(event) {
      var _this4 = this;

      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {
          var Vertical = true;

          if (event.currentTarget.getAttribute('orientation') == "vertical") {} else {
            Vertical = false;
          }

          var params = {
            vertical: Vertical,
            x: event.currentTarget.getAttribute('x'),
            y: event.currentTarget.getAttribute('y')
          };
          __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__components_urlname_js__["a" /* default */] + "/move", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log("move response is " + JSON.stringify(data));

            if (!data.error) {
              if (event.currentTarget.getAttribute('orientation') == "vertical") {
                var temparr = _this4.state.verticalBricks.slice();

                temparr[x][y] = _this4.state.brickHighlightedColor;

                _this4.setState({
                  verticalBricks: temparr
                });
              } else {
                var temparr = _this4.state.horizontalBricks.slice();

                temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = _this4.state.brickHighlightedColor;

                _this4.setState({
                  horizontalBricks: temparr
                });
              }
            }
          });
        }
      }
    }
  }, {
    key: "brickMouseOver",
    value: function brickMouseOver(event) {
      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {
          var x = event.currentTarget.getAttribute('x');
          var y = event.currentTarget.getAttribute('y');
          var orientation = event.currentTarget.getAttribute('orientation');

          if (orientation == "vertical") {
            var temparr = this.state.verticalBricks.slice();
            temparr[x][y] = this.state.brickHighlightedColor;
            this.setState({
              verticalBricks: temparr
            });
          } else if (orientation == "horizontal") {
            var temparr = this.state.horizontalBricks.slice();
            temparr[x][y] = this.state.brickHighlightedColor;
            this.setState({
              horizontalBricks: temparr
            });
          } else if (orientation == "middle") {
            var temparr = this.state.verticalBricks.slice();
            temparr[x][y] = this.state.brickHighlightedColor;
            this.setState({
              verticalBricks: temparr
            });
          }
        }
      }
    }
  }, {
    key: "brickMouseLeave",
    value: function brickMouseLeave(event) {
      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {
          var x = event.currentTarget.getAttribute('x');
          var y = event.currentTarget.getAttribute('y');
          var orientation = event.currentTarget.getAttribute('orientation');
          console.log("mouseover" + x + y + orientation);

          if (orientation == "vertical") {
            var temparr = this.state.verticalBricks.slice();
            temparr[x][y] = this.state.brickDefaultColor;
            this.setState({
              verticalBricks: temparr
            });
          } else if (orientation == "horizontal") {
            var temparr = this.state.horizontalBricks.slice();
            temparr[x][y] = this.state.brickDefaultColor;
            this.setState({
              horizontalBricks: temparr
            });
          } else if (orientation == "middle") {
            var temparr = this.state.verticalBricks.slice();
            temparr[x][y] = this.state.brickDefaultColor;
            this.setState({
              verticalBricks: temparr
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, this.props.game ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, this.props.game.Player2 ? this.props.game.PlayerTurn == 1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, "It's ", this.props.game.Player1, "'s turn! "), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, "It's ", this.props.game.Player2, "'s turn! "), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, " Waiting for player to play against... you could also open another tab, create another player, and play against yourself if you'd like \uD83D\uDE09 "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          backgroundColor: this.state.brickDefaultColor,
          width: "650px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][0] == 1 ? this.state.player1Color : this.state.playerArray[0][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][0] == 1 ? this.state.player1Color : this.state.playerArray[1][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][0] == 1 ? this.state.player1Color : this.state.playerArray[2][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][0] == 1 ? this.state.player1Color : this.state.playerArray[3][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][0] == 1 ? this.state.player1Color : this.state.playerArray[4][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][0] == 1 ? this.state.player1Color : this.state.playerArray[5][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][0] == 1 ? this.state.player1Color : this.state.playerArray[6][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][0] == 1 ? this.state.player1Color : this.state.playerArray[7][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        x: 8,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][0] == 1 ? this.state.player1Color : this.state.playerArray[8][0] == 2 ? this.state.player2Color : this.state.squareColor
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.verticalBricks[0][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.horizontalBricks[1][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.verticalBricks[1][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.horizontalBricks[2][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.verticalBricks[2][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.horizontalBricks[3][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.verticalBricks[3][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.horizontalBricks[4][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.verticalBricks[4][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.horizontalBricks[5][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.verticalBricks[5][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.horizontalBricks[6][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.verticalBricks[6][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.horizontalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][0] : this.state.verticalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      })))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "Loading game..."));
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__page_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(function (state) {
  return state;
})(Game)));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/game")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.99ea3d0656ba1b0f8e08.hot-update.js.map