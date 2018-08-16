webpackHotUpdate(4,{

/***/ "./pages/game.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layout_js__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redux_actions_js__ = __webpack_require__("./redux/actions.js");
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
        arr3[x][y] = "#555";
      }
    }

    var arr4 = [];

    for (var x = 0; x < 8; x++) {
      arr4[x] = [];

      for (var y = 0; y < 8; y++) {
        arr4[x][y] = "#4286f4";
      }
    }

    var arr5 = [];

    for (var x = 0; x < 8; x++) {
      arr5[x] = [];

      for (var y = 0; y < 8; y++) {
        arr5[x][y] = "#4286f4";
      }
    }

    _this.state = {
      squareColor: "#555",
      brickDefaultColor: "#4286f4",
      brickExistsColor: "#eda034",
      brickHighlightedColor: "#000863",
      squareHighlightedColor: "#000000",
      player1Color: "#d30606",
      player2Color: "#30b500",
      playerArray: arr3.slice(),
      verticalBricks: arr.slice(),
      horizontalBricks: arr2.slice(),
      verticalBricksStrat: arr4.slice(),
      horizontalBricksStrat: arr5.slice(),
      player1BricksLeft: 10,
      player2BricksLeft: 10,
      errorMsg: "",
      gameExists: true,
      stratAlert: false
    };
    var params = {
      uname: _this.props.name
    };

    if (!_this.props.gameID) {
      __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/player", {
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
          __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/game/" + data.id).then(function (response) {
            return response.json();
          }).then(function (data) {
            _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["a" /* updateGame */])(data));

            _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["b" /* updateGameID */])(data._id));

            console.log("game is " + JSON.stringify(data));
          });
        } else {
          _this.setState({
            gameExists: false,
            errorMsg: "Player already exists. Try again."
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
        __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/game/" + this.props.gameID).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log("fetching" + JSON.stringify(data));
          var x1 = _this2.props.game.Player1x;
          var y1 = _this2.props.game.Player1y;
          var x2 = _this2.props.game.Player2x;
          var y2 = _this2.props.game.Player2y;

          if (_this2.props.game.PlayerTurn != data.PlayerTurn) {
            if (data.PlayerTurn == 2 && _this2.props.name == _this2.props.game.Player2 || data.PlayerTurn == 1 && _this2.props.name == _this2.props.game.Player1) {
              var brickList = [];

              if (_this2.props.name == _this2.props.game.Player1) {
                brickList = data.Player2Bricks;
              } else {
                brickList = data.Player1Bricks;
              }

              var params = {
                bricks: brickList
              };
              console.log("changed");
              __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/strategy", {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
              }).then(function (response) {
                return response.json();
              }).then(function (data) {
                console.log("strategy response: " + JSON.stringify(data) + data.length);

                if (data.length == 0) {
                  _this2.setState({
                    stratAlert: false
                  });
                } else {
                  var vert2 = _this2.state.verticalBricksStrat.slice();

                  var horiz2 = _this2.state.horizontalBricksStrat.slice();

                  for (var x = 0; x < 8; x++) {
                    for (var y = 0; y < 8; y++) {
                      vert2[x][y] = _this2.state.brickDefaultColor;
                    }
                  }

                  for (var x = 0; x < 8; x++) {
                    for (var y = 0; y < 8; y++) {
                      horiz2[x][y] = _this2.state.brickDefaultColor;
                    }
                  }

                  for (var i = 0; i < data.length; i++) {
                    if (data[i].vertical) {
                      vert2[data[i].x][data[i].y] = _this2.state.brickExistsColor;
                    } else {
                      horiz2[data[i].x][data[i].y] = _this2.state.brickExistsColor;
                    }
                  }

                  console.log("updating strat");

                  _this2.setState({
                    stratAlert: true,
                    verticalBricksStrat: vert2,
                    horizontalBricksStrat: horiz2
                  });
                }
              });
            }
          }

          _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["a" /* updateGame */])(data));

          if (data.ToDestroy) {
            var tempID = _this2.props.gameID;

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["b" /* updateGameID */])(null));

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["a" /* updateGame */])(null));

            console.log("ending game" + _this2.props.gameID);

            _this2.setState({
              errorMsg: "Game has ended.",
              gameExists: false
            });

            var params = {
              winner: _this2.props.name
            };
            __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/gameNoStrat/" + tempID, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(params)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("ended game");
            });
          }

          if (data.Player1y == 8 || data.Player2y == 0) {
            var tempID = _this2.props.gameID;

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["b" /* updateGameID */])(null));

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["a" /* updateGame */])(null));

            console.log("ending game" + _this2.props.gameID);
            var winner = "";

            if (data.Player1y == 8) {
              winner = data.Player1;
            } else {
              winner = data.Player2;
            }

            _this2.setState({
              errorMsg: "Game has ended. Winner: " + winner,
              gameExists: false
            });

            if (_this2.props.name == winner) {
              var params = {
                winner: winner
              };
              __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/game/" + tempID, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
              }).then(function (response) {
                return response.json();
              }).then(function (data) {
                console.log("ended game");
              });
            }
          }

          for (var i = 0; i < data.Player1Bricks.length; i++) {
            if (data.Player1Bricks[i].vertical) {
              var temparr = _this2.state.verticalBricks.slice();

              temparr[data.Player1Bricks[i].x][data.Player1Bricks[i].y] = _this2.state.brickExistsColor;

              _this2.setState({
                verticalBricks: temparr
              });
            } else {
              var temparr = _this2.state.horizontalBricks.slice();

              temparr[data.Player1Bricks[i].x][data.Player1Bricks[i].y] = _this2.state.brickExistsColor;

              _this2.setState({
                horizontalBricks: temparr
              });
            }
          }

          for (var i = 0; i < data.Player2Bricks.length; i++) {
            if (data.Player2Bricks[i].vertical) {
              var temparr = _this2.state.verticalBricks.slice();

              temparr[data.Player2Bricks[i].x][data.Player2Bricks[i].y] = _this2.state.brickExistsColor;

              _this2.setState({
                verticalBricks: temparr
              });
            } else {
              var temparr = _this2.state.horizontalBricks.slice();

              temparr[data.Player2Bricks[i].x][data.Player2Bricks[i].y] = _this2.state.brickExistsColor;

              _this2.setState({
                horizontalBricks: temparr
              });
            }
          }

          var temparr = _this2.state.playerArray.slice();

          temparr[x1][y1] = _this2.state.squareColor;
          temparr[x2][y2] = _this2.state.squareColor;
          temparr[data.Player1x][data.Player1y] = _this2.state.player1Color;
          temparr[data.Player2x][data.Player2y] = _this2.state.player2Color;

          _this2.setState({
            player1BricksLeft: 10 - data.Player1Bricks.length,
            player2BricksLeft: 10 - data.Player2Bricks.length,
            playerArray: temparr
          });
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.interval = setInterval(this.fetchGame, 2000);
      window.addEventListener("beforeunload", function (ev) {
        //ev.preventDefault();
        ev.returnValue = "Game has ended.";

        if (_this3.props.game) {
          _this3.setState({
            errorMsg: "Game has ended.",
            gameExists: false
          });

          if (_this3.props.game.Player2) {
            var params = {
              id: _this3.props.gameID
            };

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["b" /* updateGameID */])(null));

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["a" /* updateGame */])(null));

            __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/destroy", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(params)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return "Game has ended.";
            });
          } else {
            var gameID = _this3.props.gameID;
            var params = {
              winner: _this3.props.name
            };

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["b" /* updateGameID */])(null));

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__redux_actions_js__["a" /* updateGame */])(null));

            __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/gameNoStrat/" + gameID, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(params)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("ended game");
              return "Game has ended.";
            });
          }
        }
      });
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
        if (playing == this.props.name) {
          if (playing == this.props.game.Player1) {
            if (!(event.currentTarget.getAttribute('x') == this.props.game.Player2x && event.currentTarget.getAttribute('y') == this.props.game.Player2y)) {
              if (Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1) {
                if (Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
                  this.setState({
                    playerArray: temparr
                  });
                  console.log(this.state.playerArray[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')]);
                }
              } else if (Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 1) {
                if (Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
                  this.setState({
                    playerArray: temparr
                  });
                }
              }
            }
          } else {
            if (!(event.currentTarget.getAttribute('x') == this.props.game.Player1x && event.currentTarget.getAttribute('y') == this.props.game.Player1y)) {
              if (Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1) {
                if (Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
                  this.setState({
                    playerArray: temparr
                  });
                }
              } else if (Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 1) {
                if (Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
                  this.setState({
                    playerArray: temparr
                  });
                }
              }
            }
          }
        }
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
        if (playing == this.props.name) {
          if (playing == this.props.game.Player1) {
            if (!(event.currentTarget.getAttribute('x') == this.props.game.Player2x && event.currentTarget.getAttribute('y') == this.props.game.Player2y)) {
              if (Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1) {
                if (Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
                  this.setState({
                    playerArray: temparr
                  });
                  console.log(this.state.playerArray[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')]);
                }
              } else if (Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 1) {
                if (Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
                  this.setState({
                    playerArray: temparr
                  });
                }
              }
            }
          } else {
            if (!(event.currentTarget.getAttribute('x') == this.props.game.Player1x && event.currentTarget.getAttribute('y') == this.props.game.Player1y)) {
              if (Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1) {
                if (Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
                  this.setState({
                    playerArray: temparr
                  });
                }
              } else if (Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 1) {
                if (Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 0) {
                  var temparr = this.state.playerArray.slice();
                  temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
                  this.setState({
                    playerArray: temparr
                  });
                }
              }
            }
          }
        }
      }
    }
  }, {
    key: "clickSquare",
    value: function clickSquare(event) {
      var _this4 = this;

      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {
          if (this.props.game.Player2) {
            if (playing == this.props.game.Player1) {
              if (!(event.currentTarget.getAttribute('x') == this.props.game.Player2x && event.currentTarget.getAttribute('y') == this.props.game.Player2y)) {
                if (Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1) {
                  if (Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0) {
                    var params = {
                      id: this.props.gameID,
                      player: playing,
                      isBrick: false,
                      x: event.currentTarget.getAttribute('x'),
                      y: event.currentTarget.getAttribute('y')
                    };
                    __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/move", {
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
                        _this4.setState({
                          errorMsg: ""
                        });

                        _this4.fetchGame();
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }
                    });
                  }
                } else if (Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 1) {
                  if (Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 0) {
                    var params = {
                      id: this.props.gameID,
                      player: playing,
                      isBrick: false,
                      x: event.currentTarget.getAttribute('x'),
                      y: event.currentTarget.getAttribute('y')
                    };
                    __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/move", {
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
                        _this4.setState({
                          errorMsg: ""
                        });

                        _this4.fetchGame();
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }
                    });
                  }
                }
              }
            } else {
              if (!(event.currentTarget.getAttribute('x') == this.props.game.Player1x && event.currentTarget.getAttribute('y') == this.props.game.Player1y)) {
                if (Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1) {
                  if (Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0) {
                    var params = {
                      id: this.props.gameID,
                      player: playing,
                      isBrick: false,
                      x: event.currentTarget.getAttribute('x'),
                      y: event.currentTarget.getAttribute('y')
                    };
                    __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/move", {
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
                        _this4.setState({
                          errorMsg: ""
                        });

                        _this4.fetchGame();
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }
                    });
                  }
                } else if (Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 1) {
                  if (Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 0) {
                    var params = {
                      id: this.props.gameID,
                      player: playing,
                      isBrick: false,
                      x: event.currentTarget.getAttribute('x'),
                      y: event.currentTarget.getAttribute('y')
                    };
                    __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/move", {
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
                        _this4.setState({
                          errorMsg: ""
                        });

                        _this4.fetchGame();
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
  }, {
    key: "clickBrick",
    value: function clickBrick(event) {
      var _this5 = this;

      var playing = "";

      if (this.props.game.PlayerTurn == 1) {
        playing = this.props.game.Player1;
      } else {
        playing = this.props.game.Player2;
      }

      if (this.props.game) {
        if (playing == this.props.name) {
          if (this.props.game.Player2) {
            var Vertical = false;

            if (event.currentTarget.getAttribute('orientation') == "horizontal") {} else {
              Vertical = true;
            }

            var params = {
              id: this.props.gameID,
              player: playing,
              isBrick: true,
              brick: {
                vertical: Vertical,
                x: event.currentTarget.getAttribute('x'),
                y: event.currentTarget.getAttribute('y')
              }
            };
            __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/move", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(params)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("brick response is " + JSON.stringify(data));

              if (!data.error) {
                _this5.setState({
                  errorMsg: ""
                });

                _this5.fetchGame();
              } else {
                _this5.setState({
                  errorMsg: data.response
                });
              }
            });
          }
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
            if (this.state.verticalBricks[x][y] == this.state.brickExistsColor) {
              return;
            }

            var temparr = this.state.verticalBricks.slice();
            temparr[x][y] = this.state.brickHighlightedColor;
            this.setState({
              verticalBricks: temparr
            });
          } else if (orientation == "horizontal") {
            if (this.state.horizontalBricks[x][y] == this.state.brickExistsColor) {
              return;
            }

            var temparr = this.state.horizontalBricks.slice();
            temparr[x][y] = this.state.brickHighlightedColor;
            this.setState({
              horizontalBricks: temparr
            });
          } else if (orientation == "middle") {
            if (this.state.verticalBricks[x][y] == this.state.brickExistsColor) {
              return;
            }

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

          if (orientation == "vertical") {
            if (this.state.verticalBricks[x][y] == this.state.brickExistsColor) {
              return;
            }

            var temparr = this.state.verticalBricks.slice();
            temparr[x][y] = this.state.brickDefaultColor;
            this.setState({
              verticalBricks: temparr
            });
          } else if (orientation == "horizontal") {
            if (this.state.horizontalBricks[x][y] == this.state.brickExistsColor) {
              return;
            }

            var temparr = this.state.horizontalBricks.slice();
            temparr[x][y] = this.state.brickDefaultColor;
            this.setState({
              horizontalBricks: temparr
            });
          } else if (orientation == "middle") {
            if (this.state.verticalBricks[x][y] == this.state.brickExistsColor) {
              return;
            }

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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        },
        className: "jsx-2536432612"
      }, this.state.gameExists ? this.props.game ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        className: "jsx-2536432612"
      }, this.state.errorMsg == "" ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        className: "jsx-2536432612"
      }, "Error: ", this.state.errorMsg), this.props.game.Player2 ? this.props.game.PlayerTurn == 1 ? this.props.game.Player1 == this.props.name ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762
        },
        className: "jsx-2536432612"
      }, "It's your turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763
        },
        className: "jsx-2536432612"
      }, "It's ", this.props.game.Player1, "'s turn! "), " ") : this.props.game.Player2 == this.props.name ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        className: "jsx-2536432612"
      }, "It's your turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        },
        className: "jsx-2536432612"
      }, "It's ", this.props.game.Player2, "'s turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        },
        className: "jsx-2536432612"
      }, " Waiting for player to play against online... you could also open another tab, create another player, and play against yourself if you'd like \uD83D\uDE09 "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        className: "jsx-2536432612"
      }, this.props.game.Player1, " has ", this.state.player1BricksLeft, " bricks left."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundColor: this.state.brickDefaultColor,
          width: "520px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.verticalBricks[0][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.horizontalBricks[1][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.verticalBricks[1][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.horizontalBricks[2][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.verticalBricks[2][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 803
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.horizontalBricks[3][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.verticalBricks[3][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.horizontalBricks[4][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.verticalBricks[4][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.horizontalBricks[5][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.verticalBricks[5][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.horizontalBricks[6][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.verticalBricks[6][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.horizontalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][0] : this.state.verticalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][0]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 814
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 817
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][0] != this.state.brickDefaultColor ? this.state.verticalBricks[0][0] : this.state.verticalBricks[0][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][0] != this.state.brickDefaultColor ? this.state.verticalBricks[1][0] : this.state.verticalBricks[1][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 825
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][0] != this.state.brickDefaultColor ? this.state.verticalBricks[2][0] : this.state.verticalBricks[2][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][0] != this.state.brickDefaultColor ? this.state.verticalBricks[3][0] : this.state.verticalBricks[3][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][0] != this.state.brickDefaultColor ? this.state.verticalBricks[4][0] : this.state.verticalBricks[4][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][0] != this.state.brickDefaultColor ? this.state.verticalBricks[5][0] : this.state.verticalBricks[5][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][0] != this.state.brickDefaultColor ? this.state.verticalBricks[6][0] : this.state.verticalBricks[6][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][0] != this.state.brickDefaultColor ? this.state.verticalBricks[7][0] : this.state.verticalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 842
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 843
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.verticalBricks[0][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.horizontalBricks[1][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 845
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.verticalBricks[1][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 846
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.horizontalBricks[2][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 847
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.verticalBricks[2][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 848
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.horizontalBricks[3][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 849
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.verticalBricks[3][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 850
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.horizontalBricks[4][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.verticalBricks[4][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 852
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.horizontalBricks[5][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.verticalBricks[5][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.horizontalBricks[6][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.verticalBricks[6][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.horizontalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][1] : this.state.verticalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 862
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][1] != this.state.brickDefaultColor ? this.state.verticalBricks[0][1] : this.state.verticalBricks[0][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][1] != this.state.brickDefaultColor ? this.state.verticalBricks[1][1] : this.state.verticalBricks[1][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 870
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][1] != this.state.brickDefaultColor ? this.state.verticalBricks[2][1] : this.state.verticalBricks[2][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][1] != this.state.brickDefaultColor ? this.state.verticalBricks[3][1] : this.state.verticalBricks[3][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][1] != this.state.brickDefaultColor ? this.state.verticalBricks[4][1] : this.state.verticalBricks[4][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 875
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 876
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][1] != this.state.brickDefaultColor ? this.state.verticalBricks[5][1] : this.state.verticalBricks[5][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 877
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 878
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][1] != this.state.brickDefaultColor ? this.state.verticalBricks[6][1] : this.state.verticalBricks[6][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][1] != this.state.brickDefaultColor ? this.state.verticalBricks[7][1] : this.state.verticalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 881
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 882
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 885
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 887
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.verticalBricks[0][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 889
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.horizontalBricks[1][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 890
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.verticalBricks[1][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 891
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.horizontalBricks[2][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 892
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.verticalBricks[2][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 893
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.horizontalBricks[3][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.verticalBricks[3][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 895
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.horizontalBricks[4][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 896
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.verticalBricks[4][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.horizontalBricks[5][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.verticalBricks[5][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 899
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.horizontalBricks[6][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 900
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.verticalBricks[6][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 901
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.horizontalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 902
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][2] : this.state.verticalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 903
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 904
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 906
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 907
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 910
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 911
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][2] != this.state.brickDefaultColor ? this.state.verticalBricks[0][2] : this.state.verticalBricks[0][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 912
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 913
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][2] != this.state.brickDefaultColor ? this.state.verticalBricks[1][2] : this.state.verticalBricks[1][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 914
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 915
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][2] != this.state.brickDefaultColor ? this.state.verticalBricks[2][2] : this.state.verticalBricks[2][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 916
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 917
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][2] != this.state.brickDefaultColor ? this.state.verticalBricks[3][2] : this.state.verticalBricks[3][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 918
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][2] != this.state.brickDefaultColor ? this.state.verticalBricks[4][2] : this.state.verticalBricks[4][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 921
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][2] != this.state.brickDefaultColor ? this.state.verticalBricks[5][2] : this.state.verticalBricks[5][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 922
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 923
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][2] != this.state.brickDefaultColor ? this.state.verticalBricks[6][2] : this.state.verticalBricks[6][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 924
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 925
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][2] != this.state.brickDefaultColor ? this.state.verticalBricks[7][2] : this.state.verticalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 926
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 927
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 929
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 930
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 933
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.verticalBricks[0][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 934
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.horizontalBricks[1][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 935
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.verticalBricks[1][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.horizontalBricks[2][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 937
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.verticalBricks[2][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 938
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.horizontalBricks[3][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 939
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.verticalBricks[3][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 940
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.horizontalBricks[4][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 941
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.verticalBricks[4][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.horizontalBricks[5][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.verticalBricks[5][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 944
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.horizontalBricks[6][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 945
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.verticalBricks[6][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 946
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.horizontalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 947
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][3] : this.state.verticalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 948
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 949
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 951
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 952
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 955
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 956
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][3] != this.state.brickDefaultColor ? this.state.verticalBricks[0][3] : this.state.verticalBricks[0][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 957
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][3] != this.state.brickDefaultColor ? this.state.verticalBricks[1][3] : this.state.verticalBricks[1][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 960
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][3] != this.state.brickDefaultColor ? this.state.verticalBricks[2][3] : this.state.verticalBricks[2][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 961
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 962
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][3] != this.state.brickDefaultColor ? this.state.verticalBricks[3][3] : this.state.verticalBricks[3][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 963
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][3] != this.state.brickDefaultColor ? this.state.verticalBricks[4][3] : this.state.verticalBricks[4][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 965
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 966
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][3] != this.state.brickDefaultColor ? this.state.verticalBricks[5][3] : this.state.verticalBricks[5][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 967
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 968
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][3] != this.state.brickDefaultColor ? this.state.verticalBricks[6][3] : this.state.verticalBricks[6][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 970
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][3] != this.state.brickDefaultColor ? this.state.verticalBricks[7][3] : this.state.verticalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 971
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 972
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 974
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 975
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 977
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 978
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.verticalBricks[0][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 979
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.horizontalBricks[1][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 980
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.verticalBricks[1][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 981
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.horizontalBricks[2][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 982
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.verticalBricks[2][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 983
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.horizontalBricks[3][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 984
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.verticalBricks[3][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 985
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.horizontalBricks[4][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 986
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.verticalBricks[4][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 987
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.horizontalBricks[5][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 988
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.verticalBricks[5][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 989
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.horizontalBricks[6][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 990
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.verticalBricks[6][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 991
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.horizontalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 992
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][4] : this.state.verticalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 993
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 994
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 996
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 997
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1000
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1001
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][4] != this.state.brickDefaultColor ? this.state.verticalBricks[0][4] : this.state.verticalBricks[0][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1002
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1003
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][4] != this.state.brickDefaultColor ? this.state.verticalBricks[1][4] : this.state.verticalBricks[1][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1004
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1005
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][4] != this.state.brickDefaultColor ? this.state.verticalBricks[2][4] : this.state.verticalBricks[2][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1006
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1007
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][4] != this.state.brickDefaultColor ? this.state.verticalBricks[3][4] : this.state.verticalBricks[3][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1008
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1009
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][4] != this.state.brickDefaultColor ? this.state.verticalBricks[4][4] : this.state.verticalBricks[4][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1010
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1011
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][4] != this.state.brickDefaultColor ? this.state.verticalBricks[5][4] : this.state.verticalBricks[5][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1012
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1013
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][4] != this.state.brickDefaultColor ? this.state.verticalBricks[6][4] : this.state.verticalBricks[6][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1014
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1015
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][4] != this.state.brickDefaultColor ? this.state.verticalBricks[7][4] : this.state.verticalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1016
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1017
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1019
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1020
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1022
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1023
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.verticalBricks[0][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1024
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.horizontalBricks[1][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1025
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.verticalBricks[1][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1026
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.horizontalBricks[2][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1027
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.verticalBricks[2][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1028
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.horizontalBricks[3][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1029
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.verticalBricks[3][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1030
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.horizontalBricks[4][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1031
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.verticalBricks[4][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1032
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.horizontalBricks[5][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1033
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.verticalBricks[5][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1034
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.horizontalBricks[6][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1035
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.verticalBricks[6][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1036
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.horizontalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1037
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][5] : this.state.verticalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1038
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1039
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1041
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1042
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1045
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1046
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][5] != this.state.brickDefaultColor ? this.state.verticalBricks[0][5] : this.state.verticalBricks[0][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1047
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1048
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][5] != this.state.brickDefaultColor ? this.state.verticalBricks[1][5] : this.state.verticalBricks[1][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1049
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1050
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][5] != this.state.brickDefaultColor ? this.state.verticalBricks[2][5] : this.state.verticalBricks[2][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1051
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1052
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][5] != this.state.brickDefaultColor ? this.state.verticalBricks[3][5] : this.state.verticalBricks[3][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1053
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1054
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][5] != this.state.brickDefaultColor ? this.state.verticalBricks[4][5] : this.state.verticalBricks[4][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1055
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1056
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][5] != this.state.brickDefaultColor ? this.state.verticalBricks[5][5] : this.state.verticalBricks[5][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1057
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1058
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][5] != this.state.brickDefaultColor ? this.state.verticalBricks[6][5] : this.state.verticalBricks[6][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1059
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1060
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][5] != this.state.brickDefaultColor ? this.state.verticalBricks[7][5] : this.state.verticalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1061
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1062
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1064
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1065
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1067
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1068
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.verticalBricks[0][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1069
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.horizontalBricks[1][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1070
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.verticalBricks[1][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1071
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.horizontalBricks[2][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1072
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.verticalBricks[2][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1073
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.horizontalBricks[3][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1074
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.verticalBricks[3][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1075
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.horizontalBricks[4][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1076
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.verticalBricks[4][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1077
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.horizontalBricks[5][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1078
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.verticalBricks[5][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1079
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.horizontalBricks[6][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1080
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.verticalBricks[6][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1081
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.horizontalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1082
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][6] : this.state.verticalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1083
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1084
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1086
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1087
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1090
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1091
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][6] != this.state.brickDefaultColor ? this.state.verticalBricks[0][6] : this.state.verticalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1092
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1093
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][6] != this.state.brickDefaultColor ? this.state.verticalBricks[1][6] : this.state.verticalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1094
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1095
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][6] != this.state.brickDefaultColor ? this.state.verticalBricks[2][6] : this.state.verticalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1096
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1097
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][6] != this.state.brickDefaultColor ? this.state.verticalBricks[3][6] : this.state.verticalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1098
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1099
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][6] != this.state.brickDefaultColor ? this.state.verticalBricks[4][6] : this.state.verticalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1100
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1101
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][6] != this.state.brickDefaultColor ? this.state.verticalBricks[5][6] : this.state.verticalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1102
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1103
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][6] != this.state.brickDefaultColor ? this.state.verticalBricks[6][6] : this.state.verticalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1104
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1105
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][6] != this.state.brickDefaultColor ? this.state.verticalBricks[7][6] : this.state.verticalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1106
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1107
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1109
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1110
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1112
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1113
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.verticalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1114
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.horizontalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1115
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.verticalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1116
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.horizontalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1117
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.verticalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1118
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.horizontalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1119
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.verticalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1120
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.horizontalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1121
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.verticalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1122
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.horizontalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1123
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.verticalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1124
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.horizontalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1125
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.verticalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1126
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.horizontalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1127
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricks[7][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][7] : this.state.verticalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1128
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1129
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1131
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1132
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1135
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1136
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1137
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1138
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1139
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1140
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1141
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1142
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1143
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1144
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1145
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1146
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1147
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1148
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1149
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1150
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1151
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1152
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1154
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1155
        },
        className: "jsx-2536432612"
      }))), this.props.game.Player2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1161
        },
        className: "jsx-2536432612"
      }, this.props.game.Player2, " has ", this.state.player2BricksLeft, " bricks left.") : null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1165
        },
        className: "jsx-2536432612"
      }), this.state.stratAlert ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1169
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1169
        },
        className: "jsx-2536432612"
      }, "Alert! ", this.props.game.Player1 == this.props.name ? this.props.game.Player2 : this.props.game.Player1, " might be looking to use this tactic!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1169
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundColor: this.state.brickDefaultColor,
          width: "520px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1170
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1171
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1172
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1173
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1174
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1175
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1176
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1177
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1178
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1179
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1180
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1181
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1182
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1183
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1184
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1185
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1186
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1187
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1188
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1190
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1191
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1193
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1194
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][0] : this.state.verticalBricksStrat[0][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1195
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][0] : this.state.horizontalBricksStrat[1][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1196
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][0] : this.state.verticalBricksStrat[1][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1197
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][0] : this.state.horizontalBricksStrat[2][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1198
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][0] : this.state.verticalBricksStrat[2][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1199
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][0] : this.state.horizontalBricksStrat[3][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1200
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][0] : this.state.verticalBricksStrat[3][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1201
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][0] : this.state.horizontalBricksStrat[4][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1202
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][0] : this.state.verticalBricksStrat[4][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1203
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][0] : this.state.horizontalBricksStrat[5][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1204
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][0] : this.state.verticalBricksStrat[5][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1205
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][0] : this.state.horizontalBricksStrat[6][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1206
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][0] : this.state.verticalBricksStrat[6][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1207
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][0] : this.state.horizontalBricksStrat[7][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1208
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][0] : this.state.verticalBricksStrat[7][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1209
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1210
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1212
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1213
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1216
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1217
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][0] : this.state.verticalBricksStrat[0][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1218
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1219
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][0] : this.state.verticalBricksStrat[1][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1220
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1221
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][0] : this.state.verticalBricksStrat[2][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1222
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1223
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][0] : this.state.verticalBricksStrat[3][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1224
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1225
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][0] : this.state.verticalBricksStrat[4][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1226
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1227
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][0] : this.state.verticalBricksStrat[5][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1228
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1229
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][0] : this.state.verticalBricksStrat[6][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1230
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1231
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][0] : this.state.verticalBricksStrat[7][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1232
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1233
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1235
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1236
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1238
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1239
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][1] : this.state.verticalBricksStrat[0][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1240
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][1] : this.state.horizontalBricksStrat[1][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1241
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][1] : this.state.verticalBricksStrat[1][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1242
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][1] : this.state.horizontalBricksStrat[2][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1243
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][1] : this.state.verticalBricksStrat[2][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1244
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][1] : this.state.horizontalBricksStrat[3][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1245
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][1] : this.state.verticalBricksStrat[3][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1246
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][1] : this.state.horizontalBricksStrat[4][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1247
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][1] : this.state.verticalBricksStrat[4][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1248
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][1] : this.state.horizontalBricksStrat[5][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1249
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][1] : this.state.verticalBricksStrat[5][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1250
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][1] : this.state.horizontalBricksStrat[6][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1251
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][1] : this.state.verticalBricksStrat[6][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1252
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][1] : this.state.horizontalBricksStrat[7][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1253
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][1] : this.state.verticalBricksStrat[7][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1254
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][1]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1255
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1257
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1258
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1261
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1262
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][1] : this.state.verticalBricksStrat[0][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1263
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1264
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][1] : this.state.verticalBricksStrat[1][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1265
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1266
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][1] : this.state.verticalBricksStrat[2][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1267
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1268
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][1] : this.state.verticalBricksStrat[3][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1269
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1270
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][1] : this.state.verticalBricksStrat[4][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1271
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1272
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][1] : this.state.verticalBricksStrat[5][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1273
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1274
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][1] : this.state.verticalBricksStrat[6][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1275
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1276
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][1] : this.state.verticalBricksStrat[7][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1277
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1278
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1280
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1281
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1283
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1284
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][2] : this.state.verticalBricksStrat[0][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1285
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][2] : this.state.horizontalBricksStrat[1][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1286
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][2] : this.state.verticalBricksStrat[1][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1287
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][2] : this.state.horizontalBricksStrat[2][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1288
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][2] : this.state.verticalBricksStrat[2][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1289
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][2] : this.state.horizontalBricksStrat[3][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1290
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][2] : this.state.verticalBricksStrat[3][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1291
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][2] : this.state.horizontalBricksStrat[4][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1292
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][2] : this.state.verticalBricksStrat[4][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1293
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][2] : this.state.horizontalBricksStrat[5][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1294
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][2] : this.state.verticalBricksStrat[5][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1295
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][2] : this.state.horizontalBricksStrat[6][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1296
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][2] : this.state.verticalBricksStrat[6][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1297
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][2] : this.state.horizontalBricksStrat[7][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1298
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][2] : this.state.verticalBricksStrat[7][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1299
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][2]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1300
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1302
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1303
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1306
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1307
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][2] : this.state.verticalBricksStrat[0][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1308
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1309
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][2] : this.state.verticalBricksStrat[1][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1310
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1311
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][2] : this.state.verticalBricksStrat[2][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1312
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1313
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][2] : this.state.verticalBricksStrat[3][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1314
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1315
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][2] : this.state.verticalBricksStrat[4][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1316
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1317
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][2] : this.state.verticalBricksStrat[5][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1318
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1319
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][2] : this.state.verticalBricksStrat[6][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1320
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1321
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][2] : this.state.verticalBricksStrat[7][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1322
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1323
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1325
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1326
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1328
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1329
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][3] : this.state.verticalBricksStrat[0][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1330
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][3] : this.state.horizontalBricksStrat[1][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1331
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][3] : this.state.verticalBricksStrat[1][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1332
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][3] : this.state.horizontalBricksStrat[2][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1333
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][3] : this.state.verticalBricksStrat[2][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1334
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][3] : this.state.horizontalBricksStrat[3][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1335
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][3] : this.state.verticalBricksStrat[3][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1336
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][3] : this.state.horizontalBricksStrat[4][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1337
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][3] : this.state.verticalBricksStrat[4][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1338
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][3] : this.state.horizontalBricksStrat[5][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1339
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][3] : this.state.verticalBricksStrat[5][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1340
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][3] : this.state.horizontalBricksStrat[6][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1341
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][3] : this.state.verticalBricksStrat[6][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1342
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][3] : this.state.horizontalBricksStrat[7][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1343
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][3] : this.state.verticalBricksStrat[7][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1344
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][3]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1345
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1347
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1348
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1351
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1352
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][3] : this.state.verticalBricksStrat[0][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1353
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1354
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][3] : this.state.verticalBricksStrat[1][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1355
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1356
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][3] : this.state.verticalBricksStrat[2][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1357
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1358
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][3] : this.state.verticalBricksStrat[3][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1359
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1360
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][3] : this.state.verticalBricksStrat[4][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1361
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1362
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][3] : this.state.verticalBricksStrat[5][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1363
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1364
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][3] : this.state.verticalBricksStrat[6][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1365
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1366
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][3] : this.state.verticalBricksStrat[7][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1367
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1368
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1370
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1371
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1373
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1374
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][4] : this.state.verticalBricksStrat[0][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1375
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][4] : this.state.horizontalBricksStrat[1][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1376
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][4] : this.state.verticalBricksStrat[1][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1377
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][4] : this.state.horizontalBricksStrat[2][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1378
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][4] : this.state.verticalBricksStrat[2][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1379
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][4] : this.state.horizontalBricksStrat[3][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1380
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][4] : this.state.verticalBricksStrat[3][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1381
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][4] : this.state.horizontalBricksStrat[4][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1382
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][4] : this.state.verticalBricksStrat[4][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1383
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][4] : this.state.horizontalBricksStrat[5][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1384
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][4] : this.state.verticalBricksStrat[5][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1385
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][4] : this.state.horizontalBricksStrat[6][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1386
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][4] : this.state.verticalBricksStrat[6][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1387
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][4] : this.state.horizontalBricksStrat[7][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1388
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][4] : this.state.verticalBricksStrat[7][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1389
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][4]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1390
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1392
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1393
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1396
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1397
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][4] : this.state.verticalBricksStrat[0][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1398
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1399
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][4] : this.state.verticalBricksStrat[1][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1400
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1401
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][4] : this.state.verticalBricksStrat[2][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1402
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1403
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][4] : this.state.verticalBricksStrat[3][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1404
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1405
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][4] : this.state.verticalBricksStrat[4][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1406
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1407
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][4] : this.state.verticalBricksStrat[5][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1408
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1409
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][4] : this.state.verticalBricksStrat[6][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1410
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1411
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][4] : this.state.verticalBricksStrat[7][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1412
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1413
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1415
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1416
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1418
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1419
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][5] : this.state.verticalBricksStrat[0][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1420
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][5] : this.state.horizontalBricksStrat[1][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1421
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][5] : this.state.verticalBricksStrat[1][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1422
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][5] : this.state.horizontalBricksStrat[2][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1423
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][5] : this.state.verticalBricksStrat[2][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1424
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][5] : this.state.horizontalBricksStrat[3][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1425
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][5] : this.state.verticalBricksStrat[3][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1426
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][5] : this.state.horizontalBricksStrat[4][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1427
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][5] : this.state.verticalBricksStrat[4][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1428
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][5] : this.state.horizontalBricksStrat[5][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1429
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][5] : this.state.verticalBricksStrat[5][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1430
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][5] : this.state.horizontalBricksStrat[6][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1431
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][5] : this.state.verticalBricksStrat[6][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1432
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][5] : this.state.horizontalBricksStrat[7][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1433
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][5] : this.state.verticalBricksStrat[7][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1434
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][5]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1435
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1437
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1438
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1441
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1442
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][5] : this.state.verticalBricksStrat[0][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1443
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1444
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][5] : this.state.verticalBricksStrat[1][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1445
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1446
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][5] : this.state.verticalBricksStrat[2][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1447
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1448
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][5] : this.state.verticalBricksStrat[3][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1449
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1450
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][5] : this.state.verticalBricksStrat[4][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1451
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1452
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][5] : this.state.verticalBricksStrat[5][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1453
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1454
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][5] : this.state.verticalBricksStrat[6][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1455
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1456
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][5] : this.state.verticalBricksStrat[7][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1457
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1458
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1460
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1461
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1463
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1464
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][6] : this.state.verticalBricksStrat[0][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1465
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][6] : this.state.horizontalBricksStrat[1][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1466
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][6] : this.state.verticalBricksStrat[1][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1467
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][6] : this.state.horizontalBricksStrat[2][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1468
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][6] : this.state.verticalBricksStrat[2][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1469
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][6] : this.state.horizontalBricksStrat[3][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1470
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][6] : this.state.verticalBricksStrat[3][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1471
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][6] : this.state.horizontalBricksStrat[4][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1472
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][6] : this.state.verticalBricksStrat[4][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1473
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][6] : this.state.horizontalBricksStrat[5][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1474
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][6] : this.state.verticalBricksStrat[5][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1475
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][6] : this.state.horizontalBricksStrat[6][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1476
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][6] : this.state.verticalBricksStrat[6][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1477
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][6] : this.state.horizontalBricksStrat[7][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1478
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][6] : this.state.verticalBricksStrat[7][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1479
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][6]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1480
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1482
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1483
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1486
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1487
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][6] : this.state.verticalBricksStrat[0][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1488
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1489
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][6] : this.state.verticalBricksStrat[1][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1490
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1491
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][6] : this.state.verticalBricksStrat[2][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1492
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1493
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][6] : this.state.verticalBricksStrat[3][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1494
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1495
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][6] : this.state.verticalBricksStrat[4][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1496
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1497
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][6] : this.state.verticalBricksStrat[5][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1498
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1499
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][6] : this.state.verticalBricksStrat[6][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1500
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1501
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][6] : this.state.verticalBricksStrat[7][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1502
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1503
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1505
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1506
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1508
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1509
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][7] : this.state.verticalBricksStrat[0][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1510
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][7] : this.state.horizontalBricksStrat[1][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1511
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][7] : this.state.verticalBricksStrat[1][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1512
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][7] : this.state.horizontalBricksStrat[2][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1513
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][7] : this.state.verticalBricksStrat[2][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1514
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][7] : this.state.horizontalBricksStrat[3][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1515
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][7] : this.state.verticalBricksStrat[3][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1516
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][7] : this.state.horizontalBricksStrat[4][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1517
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][7] : this.state.verticalBricksStrat[4][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1518
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][7] : this.state.horizontalBricksStrat[5][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1519
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][7] : this.state.verticalBricksStrat[5][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1520
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][7] : this.state.horizontalBricksStrat[6][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1521
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][7] : this.state.verticalBricksStrat[6][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1522
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][7] : this.state.horizontalBricksStrat[7][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1523
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "20px",
          backgroundColor: this.state.horizontalBricksStrat[7][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][7] : this.state.verticalBricksStrat[7][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1524
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "20px",
          width: "40px",
          backgroundColor: this.state.horizontalBricksStrat[7][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1525
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1527
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1528
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1531
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[0][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1532
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[0][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1533
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[1][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1534
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[1][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1535
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[2][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1536
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[2][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1537
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[3][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1538
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[3][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1539
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[4][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1540
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[4][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1541
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[5][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1542
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[5][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1543
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[6][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1544
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[6][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1545
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[7][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1546
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "20px",
          backgroundColor: this.state.verticalBricksStrat[7][7]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1547
        },
        className: "jsx-2536432612"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "40px",
          width: "40px",
          backgroundColor: this.state.playerArray[8][8]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1548
        },
        className: "jsx-2536432612"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1550
        },
        className: "jsx-2536432612"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1551
        },
        className: "jsx-2536432612"
      })))) : null) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1563
        },
        className: "jsx-2536432612"
      }, "Loading game...") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1565
        },
        className: "jsx-2536432612"
      }, this.state.errorMsg), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2536432612",
        css: "h3.jsx-2536432612{font-family:\"Rubik\",Times,serif;}h4.jsx-2536432612{font-family:\"Rubik\",Times,serif;}h2.jsx-2536432612{font-family:\"Graduate\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxnYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStoRGUsQUFLd0MsQUFJQSxBQUlHLGdDQVB0QyxBQUlBLEdBSUEiLCJmaWxlIjoicGFnZXNcXGdhbWUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXFJlYWN0UXVvcmlkb3IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCB1cmxuYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdXJsbmFtZS5qcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlLmpzXCJcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgdXBkYXRlR2FtZSwgdXBkYXRlTmFtZSwgdXBkYXRlR2FtZUlEIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMuanNcIjtcclxuXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuZmV0Y2hHYW1lID0gdGhpcy5mZXRjaEdhbWUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuYnJpY2tNb3VzZU92ZXIgPSB0aGlzLmJyaWNrTW91c2VPdmVyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmJyaWNrTW91c2VMZWF2ZSA9IHRoaXMuYnJpY2tNb3VzZUxlYXZlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmNsaWNrQnJpY2sgPSB0aGlzLmNsaWNrQnJpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc3F1YXJlTW91c2VPdmVyID0gdGhpcy5zcXVhcmVNb3VzZU92ZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc3F1YXJlTW91c2VMZWF2ZSA9IHRoaXMuc3F1YXJlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5jbGlja1NxdWFyZSA9IHRoaXMuY2xpY2tTcXVhcmUuYmluZCh0aGlzKTtcclxuXHJcblxyXG5cdFx0dmFyIGFyciA9IFtdO1xyXG5cdFx0Zm9yKHZhciB4ID0gMDsgeCA8IDg7IHgrKyl7XHJcblx0XHRcdGFyclt4XSA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIHkgPSAwOyB5IDwgODsgeSsrKXtcclxuXHRcdFx0XHRhcnJbeF1beV0gPSBcIiM0Mjg2ZjRcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGFycjIgPSBbXTtcclxuXHRcdGZvcih2YXIgeCA9IDA7IHggPCA4OyB4Kyspe1xyXG5cdFx0XHRhcnIyW3hdID0gW107XHJcblx0XHRcdGZvcih2YXIgeSA9IDA7IHkgPCA4OyB5Kyspe1xyXG5cdFx0XHRcdGFycjJbeF1beV0gPSBcIiM0Mjg2ZjRcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGFycjMgPSBbXTtcclxuXHRcdGZvcih2YXIgeCA9IDA7IHggPCA5OyB4Kyspe1xyXG5cdFx0XHRhcnIzW3hdID0gW107XHJcblx0XHRcdGZvcih2YXIgeSA9IDA7IHkgPCA5OyB5Kyspe1xyXG5cdFx0XHRcdGFycjNbeF1beV0gPSBcIiM1NTVcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGFycjQgPSBbXTtcclxuXHRcdGZvcih2YXIgeCA9IDA7IHggPCA4OyB4Kyspe1xyXG5cdFx0XHRhcnI0W3hdID0gW107XHJcblx0XHRcdGZvcih2YXIgeSA9IDA7IHkgPCA4OyB5Kyspe1xyXG5cdFx0XHRcdGFycjRbeF1beV0gPSBcIiM0Mjg2ZjRcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGFycjUgPSBbXTtcclxuXHRcdGZvcih2YXIgeCA9IDA7IHggPCA4OyB4Kyspe1xyXG5cdFx0XHRhcnI1W3hdID0gW107XHJcblx0XHRcdGZvcih2YXIgeSA9IDA7IHkgPCA4OyB5Kyspe1xyXG5cdFx0XHRcdGFycjVbeF1beV0gPSBcIiM0Mjg2ZjRcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNxdWFyZUNvbG9yOiBcIiM1NTVcIixcclxuXHRcdFx0YnJpY2tEZWZhdWx0Q29sb3I6IFwiIzQyODZmNFwiLFxyXG5cdFx0XHRicmlja0V4aXN0c0NvbG9yOiBcIiNlZGEwMzRcIixcclxuXHRcdFx0YnJpY2tIaWdobGlnaHRlZENvbG9yOiBcIiMwMDA4NjNcIixcclxuXHRcdFx0c3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjogXCIjMDAwMDAwXCIsXHJcblx0XHRcdHBsYXllcjFDb2xvcjogXCIjZDMwNjA2XCIsXHJcblx0XHRcdHBsYXllcjJDb2xvcjogXCIjMzBiNTAwXCIsXHJcblx0XHRcdHBsYXllckFycmF5OiBhcnIzLnNsaWNlKCksXHJcblx0XHRcdHZlcnRpY2FsQnJpY2tzOiBhcnIuc2xpY2UoKSxcclxuXHRcdFx0aG9yaXpvbnRhbEJyaWNrczogYXJyMi5zbGljZSgpLFxyXG5cdFx0XHR2ZXJ0aWNhbEJyaWNrc1N0cmF0OiBhcnI0LnNsaWNlKCksXHJcblx0XHRcdGhvcml6b250YWxCcmlja3NTdHJhdDogYXJyNS5zbGljZSgpLFxyXG5cdFx0XHRwbGF5ZXIxQnJpY2tzTGVmdDogMTAsXHJcblx0XHRcdHBsYXllcjJCcmlja3NMZWZ0OiAxMCxcclxuXHRcdFx0ZXJyb3JNc2c6IFwiXCIsXHJcblx0XHRcdGdhbWVFeGlzdHM6IHRydWUsXHJcblx0XHRcdHN0cmF0QWxlcnQ6IGZhbHNlXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBhcmFtcyA9IHt1bmFtZTogdGhpcy5wcm9wcy5uYW1lfVxyXG5cdFx0aWYoIXRoaXMucHJvcHMuZ2FtZUlEKXtcclxuXHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL3BsYXllclwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInBsYXllciByZXNwb25zZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9nYW1lL1wiICsgZGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShkYXRhKSk7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZUlEKGRhdGEuX2lkKSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRnYW1lRXhpc3RzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiUGxheWVyIGFscmVhZHkgZXhpc3RzLiBUcnkgYWdhaW4uXCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdGZldGNoR2FtZSgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lSUQpe1xyXG5cdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZS9cIiArIHRoaXMucHJvcHMuZ2FtZUlEKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImZldGNoaW5nXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHR2YXIgeDEgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXg7XHJcblx0XHRcdFx0dmFyIHkxID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5O1xyXG5cdFx0XHRcdHZhciB4MiA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeDtcclxuXHRcdFx0XHR2YXIgeTIgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnk7XHJcblxyXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuICE9IGRhdGEuUGxheWVyVHVybil7XHJcblx0XHRcdFx0XHRpZigoZGF0YS5QbGF5ZXJUdXJuID09IDIgJiYgdGhpcy5wcm9wcy5uYW1lID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyKSB8fCAoZGF0YS5QbGF5ZXJUdXJuID09IDEgJiYgdGhpcy5wcm9wcy5uYW1lID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxKSl7XHJcblx0XHRcdFx0XHRcdHZhciBicmlja0xpc3QgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKHRoaXMucHJvcHMubmFtZSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMSl7XHJcblx0XHRcdFx0XHRcdFx0YnJpY2tMaXN0ID0gZGF0YS5QbGF5ZXIyQnJpY2tzO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0YnJpY2tMaXN0ID0gZGF0YS5QbGF5ZXIxQnJpY2tzO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdGJyaWNrczogYnJpY2tMaXN0XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2hhbmdlZFwiKTtcclxuXHRcdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL3N0cmF0ZWd5XCIsIHttZXRob2Q6ICdQVVQnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwic3RyYXRlZ3kgcmVzcG9uc2U6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkgKyBkYXRhLmxlbmd0aClcclxuXHRcdFx0XHRcdFx0XHRpZihkYXRhLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJhdEFsZXJ0OiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdmVydDIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXQuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBob3JpejIgPSB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdC5zbGljZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCA4OyB4Kyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IodmFyIHkgPSAwOyB5IDwgODsgeSsrKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2ZXJ0Mlt4XVt5XSA9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCA4OyB4Kyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IodmFyIHkgPSAwOyB5IDwgODsgeSsrKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRob3JpejJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihkYXRhW2ldLnZlcnRpY2FsKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2ZXJ0MltkYXRhW2ldLnhdW2RhdGFbaV0ueV0gPSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRob3JpejJbZGF0YVtpXS54XVtkYXRhW2ldLnldID0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInVwZGF0aW5nIHN0cmF0XCIpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RyYXRBbGVydDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3NTdHJhdDogdmVydDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhvcml6b250YWxCcmlja3NTdHJhdDogaG9yaXoyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShkYXRhKSk7XHJcblx0XHRcdFx0aWYoZGF0YS5Ub0Rlc3Ryb3kpe1xyXG5cdFx0XHRcdFx0dmFyIHRlbXBJRCA9IHRoaXMucHJvcHMuZ2FtZUlEO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lSUQobnVsbCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKG51bGwpKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZW5kaW5nIGdhbWVcIiArIHRoaXMucHJvcHMuZ2FtZUlEKVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRlcnJvck1zZzogXCJHYW1lIGhhcyBlbmRlZC5cIixcclxuXHRcdFx0XHRcdFx0Z2FtZUV4aXN0czogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0d2lubmVyOiB0aGlzLnByb3BzLm5hbWVcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZU5vU3RyYXQvXCIgKyB0ZW1wSUQsIHttZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZW5kZWQgZ2FtZVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGRhdGEuUGxheWVyMXkgPT0gOCB8fCBkYXRhLlBsYXllcjJ5ID09IDApe1xyXG5cdFx0XHRcdFx0dmFyIHRlbXBJRCA9IHRoaXMucHJvcHMuZ2FtZUlEO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lSUQobnVsbCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKG51bGwpKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZW5kaW5nIGdhbWVcIiArIHRoaXMucHJvcHMuZ2FtZUlEKVxyXG5cdFx0XHRcdFx0dmFyIHdpbm5lciA9IFwiXCI7XHJcblx0XHRcdFx0XHRpZihkYXRhLlBsYXllcjF5ID09IDgpe1xyXG5cdFx0XHRcdFx0XHR3aW5uZXIgPSBkYXRhLlBsYXllcjE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR3aW5uZXIgPSBkYXRhLlBsYXllcjI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIkdhbWUgaGFzIGVuZGVkLiBXaW5uZXI6IFwiICsgd2lubmVyLFxyXG5cdFx0XHRcdFx0XHRnYW1lRXhpc3RzOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLm5hbWUgPT0gd2lubmVyKXtcclxuXHRcdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0XHR3aW5uZXI6IHdpbm5lclxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZS9cIiArIHRlbXBJRCwge21ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImVuZGVkIGdhbWVcIilcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEuUGxheWVyMUJyaWNrcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihkYXRhLlBsYXllcjFCcmlja3NbaV0udmVydGljYWwpe1xyXG5cdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dGVtcGFycltkYXRhLlBsYXllcjFCcmlja3NbaV0ueF1bZGF0YS5QbGF5ZXIxQnJpY2tzW2ldLnldID0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dGVtcGFycltkYXRhLlBsYXllcjFCcmlja3NbaV0ueF1bZGF0YS5QbGF5ZXIxQnJpY2tzW2ldLnldID0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRob3Jpem9udGFsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5QbGF5ZXIyQnJpY2tzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdGlmKGRhdGEuUGxheWVyMkJyaWNrc1tpXS52ZXJ0aWNhbCl7XHJcblx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR0ZW1wYXJyW2RhdGEuUGxheWVyMkJyaWNrc1tpXS54XVtkYXRhLlBsYXllcjJCcmlja3NbaV0ueV0gPSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3I7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR0ZW1wYXJyW2RhdGEuUGxheWVyMkJyaWNrc1tpXS54XVtkYXRhLlBsYXllcjJCcmlja3NbaV0ueV0gPSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3I7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdGhvcml6b250YWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0dGVtcGFyclt4MV1beTFdID0gdGhpcy5zdGF0ZS5zcXVhcmVDb2xvcjtcclxuXHRcdFx0XHR0ZW1wYXJyW3gyXVt5Ml0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdHRlbXBhcnJbZGF0YS5QbGF5ZXIxeF1bZGF0YS5QbGF5ZXIxeV0gPSB0aGlzLnN0YXRlLnBsYXllcjFDb2xvcjtcclxuXHRcdFx0XHR0ZW1wYXJyW2RhdGEuUGxheWVyMnhdW2RhdGEuUGxheWVyMnldID0gdGhpcy5zdGF0ZS5wbGF5ZXIyQ29sb3I7XHJcblxyXG5cclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRwbGF5ZXIxQnJpY2tzTGVmdDogMTAgLSBkYXRhLlBsYXllcjFCcmlja3MubGVuZ3RoLFxyXG5cdFx0XHRcdFx0cGxheWVyMkJyaWNrc0xlZnQ6IDEwIC0gZGF0YS5QbGF5ZXIyQnJpY2tzLmxlbmd0aCxcclxuXHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0fSlcclxuXHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaEdhbWUsIDIwMDApO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIChldikgPT4gXHJcblx0XHR7XHJcblx0XHRcdC8vZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZXYucmV0dXJuVmFsdWUgPSBcIkdhbWUgaGFzIGVuZGVkLlwiXHJcblxyXG5cdFx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0ZXJyb3JNc2c6IFwiR2FtZSBoYXMgZW5kZWQuXCIsXHJcblx0XHRcdFx0XHRnYW1lRXhpc3RzOiBmYWxzZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllcjIpe1xyXG5cdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuZ2FtZUlEXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lSUQobnVsbCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKG51bGwpKTtcclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9kZXN0cm95XCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiR2FtZSBoYXMgZW5kZWQuXCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHR2YXIgZ2FtZUlEID0gdGhpcy5wcm9wcy5nYW1lSUQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdHdpbm5lcjogdGhpcy5wcm9wcy5uYW1lXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lSUQobnVsbCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKG51bGwpKTtcclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9nYW1lTm9TdHJhdC9cIiArIGdhbWVJRCwge21ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbmRlZCBnYW1lXCIpXHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJHYW1lIGhhcyBlbmRlZC5cIlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHRzcXVhcmVNb3VzZU92ZXIoZXZlbnQpe1xyXG5cclxuXHRcdHZhciBwbGF5aW5nID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEpe1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjE7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLm5hbWUpe1xyXG5cdFx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjEpe1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGxheWVyQXJyYXlbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZW1wYXJyW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldID0gdGhpcy5zdGF0ZS5zcXVhcmVIaWdobGlnaHRlZENvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNxdWFyZU1vdXNlTGVhdmUoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMSl7XHJcblx0XHRcdFx0XHRpZighKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5KSl7XHJcblx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZW1wYXJyW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldID0gdGhpcy5zdGF0ZS5zcXVhcmVDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGxheWVyQXJyYXlbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xpY2tTcXVhcmUoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllcjIpe1xyXG5cdFx0XHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMSl7XHJcblx0XHRcdFx0XHRcdGlmKCEoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggJiYgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkpKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXI6IHBsYXlpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCcmljazogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvbW92ZVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm1vdmUgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZighZGF0YS5lcnJvcil7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mZXRjaEdhbWUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogZGF0YS5yZXNwb25zZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuZ2FtZUlELFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllcjogcGxheWluZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0JyaWNrOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JylcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9tb3ZlXCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibW92ZSByZXNwb25zZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogXCJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZldGNoR2FtZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBkYXRhLnJlc3BvbnNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRpZighKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5KSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSUQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyOiBwbGF5aW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnJpY2s6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL21vdmVcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtb3ZlIHJlc3BvbnNlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIWRhdGEuZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZmV0Y2hHYW1lKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IGRhdGEucmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXI6IHBsYXlpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCcmljazogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvbW92ZVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm1vdmUgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZighZGF0YS5lcnJvcil7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mZXRjaEdhbWUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogZGF0YS5yZXNwb25zZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbGlja0JyaWNrKGV2ZW50KXtcclxuXHRcdHZhciBwbGF5aW5nID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEpe1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjE7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLm5hbWUpe1xyXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyKXtcclxuXHRcdFx0XHRcdHZhciBWZXJ0aWNhbCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0aWYoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJykgPT0gXCJob3Jpem9udGFsXCIpe1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0VmVydGljYWwgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0cGxheWVyOiBwbGF5aW5nLFxyXG5cdFx0XHRcdFx0XHRpc0JyaWNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRicmljazoge1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsOiBWZXJ0aWNhbCxcclxuXHRcdFx0XHRcdFx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLFxyXG5cdFx0XHRcdFx0XHRcdHk6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9tb3ZlXCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImJyaWNrIHJlc3BvbnNlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mZXRjaEdhbWUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IGRhdGEucmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YnJpY2tNb3VzZU92ZXIoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0dmFyIHggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpO1xyXG5cdFx0XHRcdHZhciB5ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKTtcclxuXHJcblx0XHRcdFx0dmFyIG9yaWVudGF0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJyk7XHJcblx0XHRcdFx0aWYob3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0hpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYob3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzW3hdW3ldID09IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcil7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0hpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0aG9yaXpvbnRhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihvcmllbnRhdGlvbiA9PSBcIm1pZGRsZVwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0hpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRicmlja01vdXNlTGVhdmUoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0dmFyIHggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpO1xyXG5cdFx0XHRcdHZhciB5ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKTtcclxuXHRcdFx0XHR2YXIgb3JpZW50YXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcclxuXHRcdFx0XHRpZihvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdHRlbXBhcnJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdHZlcnRpY2FsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKG9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0dGVtcGFyclt4XVt5XSA9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0aG9yaXpvbnRhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihvcmllbnRhdGlvbiA9PSBcIm1pZGRsZVwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvcjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdHsgdGhpcy5zdGF0ZS5nYW1lRXhpc3RzID9cclxuXHRcdFx0XHQodGhpcy5wcm9wcy5nYW1lID9cclxuXHRcdFx0XHQoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cclxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmVycm9yTXNnID09IFwiXCIgP1xyXG5cdFx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0XHRcdDogPGgzPkVycm9yOiB7dGhpcy5zdGF0ZS5lcnJvck1zZ308L2gzPlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUuUGxheWVyMiA/XHJcblx0XHRcdFx0XHRcdCh0aGlzLnByb3BzLmdhbWUuUGxheWVyVHVybiA9PSAxID9cclxuXHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxID09IHRoaXMucHJvcHMubmFtZSA/IDxkaXY+PGgyPkl0J3MgeW91ciB0dXJuISA8L2gyPiA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0OiA8ZGl2PjxoMj5JdCdzIHt0aGlzLnByb3BzLmdhbWUuUGxheWVyMX0ncyB0dXJuISA8L2gyPiA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQ6ICh0aGlzLnByb3BzLmdhbWUuUGxheWVyMiA9PSB0aGlzLnByb3BzLm5hbWUgPyA8ZGl2PjxoMj5JdCdzIHlvdXIgdHVybiEgPC9oMj4gPC9kaXY+XHJcblx0XHRcdFx0XHRcdDogPGRpdj48aDI+SXQncyB7dGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ9J3MgdHVybiEgPC9oMj4gPC9kaXY+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQ6IDxoND4gV2FpdGluZyBmb3IgcGxheWVyIHRvIHBsYXkgYWdhaW5zdCBvbmxpbmUuLi4geW91IGNvdWxkIGFsc28gb3BlbiBhbm90aGVyIHRhYiwgY3JlYXRlIGFub3RoZXIgcGxheWVyLCBhbmQgcGxheSBhZ2FpbnN0IHlvdXJzZWxmIGlmIHlvdSdkIGxpa2Ug8J+YiSA8L2g0PlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdDxoMz57dGhpcy5wcm9wcy5nYW1lLlBsYXllcjF9IGhhcyB7dGhpcy5zdGF0ZS5wbGF5ZXIxQnJpY2tzTGVmdH0gYnJpY2tzIGxlZnQuPC9oMz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciwgd2lkdGg6IFwiNTIwcHhcIn19PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI0MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNDBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyMHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI0MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNDBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyMHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI0MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyID8gXHJcblx0XHRcdFx0XHRcdDxoMz57dGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ9IGhhcyB7dGhpcy5zdGF0ZS5wbGF5ZXIyQnJpY2tzTGVmdH0gYnJpY2tzIGxlZnQuPC9oMz5cclxuXHRcdFx0XHRcdFx0OiBudWxsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxici8+XHJcblxyXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuc3RyYXRBbGVydCA/IFxyXG5cclxuXHRcdFx0XHRcdCg8ZGl2PjxoMz5BbGVydCEge3RoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxID09IHRoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyIDogdGhpcy5wcm9wcy5nYW1lLlBsYXllcjF9IG1pZ2h0IGJlIGxvb2tpbmcgdG8gdXNlIHRoaXMgdGFjdGljITwvaDM+PGJyLz5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IsIHdpZHRoOiBcIjUyMHB4XCJ9fT5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVswXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bMF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVswXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVswXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bMF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVswXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVswXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bMF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzBdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVsxXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bMV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzFdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVsyXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bMl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzJdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVszXX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bM119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzNdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs0XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bNF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzRdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs1XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bNV19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzVdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs2XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bNl19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzZdfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFswXVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsxXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzFdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzJdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFszXVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs0XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzRdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzVdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs2XVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs3XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzddWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjQwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzBdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzBdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFswXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMF1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMV1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzFdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsxXVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFsyXVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFsyXVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbMl1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzJdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzNdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzNdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFszXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbM11bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNF1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzRdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs0XVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMjBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs1XVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NTdHJhdFs1XVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI0MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNV1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzVdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCIyMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzZdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1N0cmF0WzZdWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjQwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs2XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbNl1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs3XX19PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NTdHJhdFs3XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzU3RyYXRbN11bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1N0cmF0WzddWzddfX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMF1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMV1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbMl1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbM11bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNF1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNV1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbNl1bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzU3RyYXRbN11bN119fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiNDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bOF19fT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNDBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj4pXHJcblx0XHRcdFx0XHQ6IG51bGxcclxuXHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdDogPGgzPkxvYWRpbmcgZ2FtZS4uLjwvaDM+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHQ6IDxoMz57dGhpcy5zdGF0ZS5lcnJvck1zZ308L2gzPlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGg0IHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdyYWR1YXRlXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0xheW91dD5cclxuICAgICAgXHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlKGNvbm5lY3Qoc3RhdGU9PnN0YXRlKShHYW1lKSkiXX0= */\n/*@ sourceURL=pages\\game.js */"
      })));
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6__page_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(function (state) {
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
//# sourceMappingURL=4.99ce70840e9e2d53b80b.hot-update.js.map