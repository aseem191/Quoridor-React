webpackHotUpdate(5,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_actions_js__ = __webpack_require__("./redux/actions.js");
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
      player1BricksLeft: 10,
      player2BricksLeft: 10,
      errorMsg: "",
      gameExists: true
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
            _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(data));

            _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["b" /* updateGameID */])(data._id));

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
        __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/game/" + this.props.gameID).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log("fetching" + JSON.stringify(data));
          var x1 = _this2.props.game.Player1x;
          var y1 = _this2.props.game.Player1y;
          var x2 = _this2.props.game.Player2x;
          var y2 = _this2.props.game.Player2y;

          _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(data));

          if (data.ToDestroy) {
            var tempID = _this2.props.gameID;

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["b" /* updateGameID */])(null));

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(null));

            console.log("ending game" + _this2.props.gameID);

            _this2.setState({
              errorMsg: "Game has ended.",
              gameExists: false
            });

            var params = {
              winner: _this2.props.name
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

          if (data.Player1y == 8 || data.Player2y == 0) {
            var tempID = _this2.props.gameID;

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["b" /* updateGameID */])(null));

            _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(null));

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

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["b" /* updateGameID */])(null));

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(null));

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

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["b" /* updateGameID */])(null));

            _this3.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_js__["a" /* updateGame */])(null));

            __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__components_urlname_js__["a" /* default */] + "/game/" + gameID, {
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
                    clearInterval(this.interval);
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
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }

                      _this4.interval = setInterval(function () {
                        return _this4.fetchGame();
                      }, 2000);
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
                    clearInterval(this.interval);
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
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }

                      _this4.interval = setInterval(function () {
                        return _this4.fetchGame();
                      }, 2000);
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
                    clearInterval(this.interval);
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
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }

                      _this4.interval = setInterval(function () {
                        return _this4.fetchGame();
                      }, 2000);
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
                    clearInterval(this.interval);
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
                      } else {
                        _this4.setState({
                          errorMsg: data.response
                        });
                      }

                      _this4.interval = setInterval(function () {
                        return _this4.fetchGame();
                      }, 2000);
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
            clearInterval(this.interval);
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
              } else {
                _this5.setState({
                  errorMsg: data.response
                });
              }

              _this5.interval = setInterval(function () {
                return _this5.fetchGame();
              }, 2000);
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        className: "jsx-3343820513"
      }, this.state.gameExists ? this.props.game ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        className: "jsx-3343820513"
      }, this.state.errorMsg == "" ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        className: "jsx-3343820513"
      }, "Error: ", this.state.errorMsg), this.props.game.Player2 ? this.props.game.PlayerTurn == 1 ? this.props.game.Player1 == this.props.name ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        className: "jsx-3343820513"
      }, "It's your turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        className: "jsx-3343820513"
      }, "It's ", this.props.game.Player1, "'s turn! "), " ") : this.props.game.Player2 == this.props.name ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        className: "jsx-3343820513"
      }, "It's your turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        className: "jsx-3343820513"
      }, "It's ", this.props.game.Player2, "'s turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686
        },
        className: "jsx-3343820513"
      }, " Waiting for player to play against... you could also open another tab, create another player, and play against yourself if you'd like \uD83D\uDE09 "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        },
        className: "jsx-3343820513"
      }, this.props.game.Player1, " has ", this.state.player1BricksLeft, " bricks left."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundColor: this.state.brickDefaultColor,
          width: "650px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 694
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 695
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 696
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 698
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 700
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 702
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 704
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 706
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 708
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 0,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][0]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 715
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 716
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 717
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 718
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 719
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 720
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 721
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 722
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 723
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 724
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 725
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 726
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 727
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 728
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 729
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 730
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
          lineNumber: 731
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 737
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][0] != this.state.brickDefaultColor ? this.state.verticalBricks[0][0] : this.state.verticalBricks[0][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][0] != this.state.brickDefaultColor ? this.state.verticalBricks[1][0] : this.state.verticalBricks[1][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][0] != this.state.brickDefaultColor ? this.state.verticalBricks[2][0] : this.state.verticalBricks[2][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][0] != this.state.brickDefaultColor ? this.state.verticalBricks[3][0] : this.state.verticalBricks[3][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][0] != this.state.brickDefaultColor ? this.state.verticalBricks[4][0] : this.state.verticalBricks[4][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][0] != this.state.brickDefaultColor ? this.state.verticalBricks[5][0] : this.state.verticalBricks[5][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][0] != this.state.brickDefaultColor ? this.state.verticalBricks[6][0] : this.state.verticalBricks[6][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][0] != this.state.brickDefaultColor ? this.state.verticalBricks[7][0] : this.state.verticalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][1]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.verticalBricks[0][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.horizontalBricks[1][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.verticalBricks[1][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.horizontalBricks[2][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.verticalBricks[2][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.horizontalBricks[3][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.verticalBricks[3][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.horizontalBricks[4][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.verticalBricks[4][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.horizontalBricks[5][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.verticalBricks[5][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.horizontalBricks[6][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.verticalBricks[6][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.horizontalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][1] : this.state.verticalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 1,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][1]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][1] != this.state.brickDefaultColor ? this.state.verticalBricks[0][1] : this.state.verticalBricks[0][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][1] != this.state.brickDefaultColor ? this.state.verticalBricks[1][1] : this.state.verticalBricks[1][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][1] != this.state.brickDefaultColor ? this.state.verticalBricks[2][1] : this.state.verticalBricks[2][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][1] != this.state.brickDefaultColor ? this.state.verticalBricks[3][1] : this.state.verticalBricks[3][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][1] != this.state.brickDefaultColor ? this.state.verticalBricks[4][1] : this.state.verticalBricks[4][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][1] != this.state.brickDefaultColor ? this.state.verticalBricks[5][1] : this.state.verticalBricks[5][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][1] != this.state.brickDefaultColor ? this.state.verticalBricks[6][1] : this.state.verticalBricks[6][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 796
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][1] != this.state.brickDefaultColor ? this.state.verticalBricks[7][1] : this.state.verticalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][2]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.verticalBricks[0][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.horizontalBricks[1][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.verticalBricks[1][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.horizontalBricks[2][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.verticalBricks[2][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.horizontalBricks[3][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.verticalBricks[3][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.horizontalBricks[4][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.verticalBricks[4][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 814
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.horizontalBricks[5][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 815
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.verticalBricks[5][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.horizontalBricks[6][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 817
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.verticalBricks[6][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 818
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.horizontalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][2] : this.state.verticalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 2,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][2]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][2] != this.state.brickDefaultColor ? this.state.verticalBricks[0][2] : this.state.verticalBricks[0][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][2] != this.state.brickDefaultColor ? this.state.verticalBricks[1][2] : this.state.verticalBricks[1][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][2] != this.state.brickDefaultColor ? this.state.verticalBricks[2][2] : this.state.verticalBricks[2][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][2] != this.state.brickDefaultColor ? this.state.verticalBricks[3][2] : this.state.verticalBricks[3][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][2] != this.state.brickDefaultColor ? this.state.verticalBricks[4][2] : this.state.verticalBricks[4][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][2] != this.state.brickDefaultColor ? this.state.verticalBricks[5][2] : this.state.verticalBricks[5][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][2] != this.state.brickDefaultColor ? this.state.verticalBricks[6][2] : this.state.verticalBricks[6][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 842
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][2] != this.state.brickDefaultColor ? this.state.verticalBricks[7][2] : this.state.verticalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 843
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][3]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 846
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 847
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 849
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 850
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.verticalBricks[0][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.horizontalBricks[1][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 852
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.verticalBricks[1][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.horizontalBricks[2][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.verticalBricks[2][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.horizontalBricks[3][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.verticalBricks[3][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.horizontalBricks[4][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.verticalBricks[4][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.horizontalBricks[5][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.verticalBricks[5][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.horizontalBricks[6][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 862
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.verticalBricks[6][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.horizontalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][3] : this.state.verticalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 3,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][3]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][3] != this.state.brickDefaultColor ? this.state.verticalBricks[0][3] : this.state.verticalBricks[0][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 875
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][3] != this.state.brickDefaultColor ? this.state.verticalBricks[1][3] : this.state.verticalBricks[1][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 876
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 877
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][3] != this.state.brickDefaultColor ? this.state.verticalBricks[2][3] : this.state.verticalBricks[2][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 878
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][3] != this.state.brickDefaultColor ? this.state.verticalBricks[3][3] : this.state.verticalBricks[3][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 881
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][3] != this.state.brickDefaultColor ? this.state.verticalBricks[4][3] : this.state.verticalBricks[4][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 882
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 883
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][3] != this.state.brickDefaultColor ? this.state.verticalBricks[5][3] : this.state.verticalBricks[5][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 885
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][3] != this.state.brickDefaultColor ? this.state.verticalBricks[6][3] : this.state.verticalBricks[6][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 886
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 887
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][3] != this.state.brickDefaultColor ? this.state.verticalBricks[7][3] : this.state.verticalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][4]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 889
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 891
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 892
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 895
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.verticalBricks[0][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 896
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.horizontalBricks[1][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.verticalBricks[1][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.horizontalBricks[2][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 899
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.verticalBricks[2][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 900
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.horizontalBricks[3][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 901
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.verticalBricks[3][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 902
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.horizontalBricks[4][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 903
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.verticalBricks[4][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 904
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.horizontalBricks[5][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 905
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.verticalBricks[5][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 906
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.horizontalBricks[6][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 907
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.verticalBricks[6][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 908
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.horizontalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 909
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][4] : this.state.verticalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 910
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 4,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][4]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 911
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 913
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 914
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 917
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 918
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][4] != this.state.brickDefaultColor ? this.state.verticalBricks[0][4] : this.state.verticalBricks[0][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][4] != this.state.brickDefaultColor ? this.state.verticalBricks[1][4] : this.state.verticalBricks[1][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 921
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 922
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][4] != this.state.brickDefaultColor ? this.state.verticalBricks[2][4] : this.state.verticalBricks[2][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 923
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 924
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][4] != this.state.brickDefaultColor ? this.state.verticalBricks[3][4] : this.state.verticalBricks[3][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 925
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 926
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][4] != this.state.brickDefaultColor ? this.state.verticalBricks[4][4] : this.state.verticalBricks[4][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 927
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 928
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][4] != this.state.brickDefaultColor ? this.state.verticalBricks[5][4] : this.state.verticalBricks[5][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 929
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 930
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][4] != this.state.brickDefaultColor ? this.state.verticalBricks[6][4] : this.state.verticalBricks[6][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][4] != this.state.brickDefaultColor ? this.state.verticalBricks[7][4] : this.state.verticalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 933
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][5]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 934
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 937
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 939
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 940
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.verticalBricks[0][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 941
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.horizontalBricks[1][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.verticalBricks[1][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.horizontalBricks[2][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 944
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.verticalBricks[2][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 945
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.horizontalBricks[3][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 946
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.verticalBricks[3][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 947
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.horizontalBricks[4][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 948
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.verticalBricks[4][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 949
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.horizontalBricks[5][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 950
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.verticalBricks[5][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 951
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.horizontalBricks[6][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 952
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.verticalBricks[6][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 953
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.horizontalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 954
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][5] : this.state.verticalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 955
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 5,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][5]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 956
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 962
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 963
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][5] != this.state.brickDefaultColor ? this.state.verticalBricks[0][5] : this.state.verticalBricks[0][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 965
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][5] != this.state.brickDefaultColor ? this.state.verticalBricks[1][5] : this.state.verticalBricks[1][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 966
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 967
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][5] != this.state.brickDefaultColor ? this.state.verticalBricks[2][5] : this.state.verticalBricks[2][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 968
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][5] != this.state.brickDefaultColor ? this.state.verticalBricks[3][5] : this.state.verticalBricks[3][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 970
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 971
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][5] != this.state.brickDefaultColor ? this.state.verticalBricks[4][5] : this.state.verticalBricks[4][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 972
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 973
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][5] != this.state.brickDefaultColor ? this.state.verticalBricks[5][5] : this.state.verticalBricks[5][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 974
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 975
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][5] != this.state.brickDefaultColor ? this.state.verticalBricks[6][5] : this.state.verticalBricks[6][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 976
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 977
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][5] != this.state.brickDefaultColor ? this.state.verticalBricks[7][5] : this.state.verticalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 978
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][6]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 979
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 981
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 982
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 984
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 985
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.verticalBricks[0][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 986
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.horizontalBricks[1][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 987
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.verticalBricks[1][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 988
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.horizontalBricks[2][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 989
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.verticalBricks[2][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 990
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.horizontalBricks[3][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 991
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.verticalBricks[3][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 992
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.horizontalBricks[4][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 993
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.verticalBricks[4][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 994
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.horizontalBricks[5][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 995
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.verticalBricks[5][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 996
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.horizontalBricks[6][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 997
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.verticalBricks[6][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 998
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.horizontalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 999
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][6] : this.state.verticalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1000
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 6,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][6]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1001
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1003
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1004
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1007
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1008
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][6] != this.state.brickDefaultColor ? this.state.verticalBricks[0][6] : this.state.verticalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1009
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1010
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][6] != this.state.brickDefaultColor ? this.state.verticalBricks[1][6] : this.state.verticalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1011
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1012
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][6] != this.state.brickDefaultColor ? this.state.verticalBricks[2][6] : this.state.verticalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1013
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1014
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][6] != this.state.brickDefaultColor ? this.state.verticalBricks[3][6] : this.state.verticalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1015
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1016
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][6] != this.state.brickDefaultColor ? this.state.verticalBricks[4][6] : this.state.verticalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1017
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1018
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][6] != this.state.brickDefaultColor ? this.state.verticalBricks[5][6] : this.state.verticalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1019
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1020
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][6] != this.state.brickDefaultColor ? this.state.verticalBricks[6][6] : this.state.verticalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1021
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1022
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][6] != this.state.brickDefaultColor ? this.state.verticalBricks[7][6] : this.state.verticalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1023
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][7]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1024
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1026
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1027
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1029
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1030
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.verticalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1031
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.horizontalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1032
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.verticalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1033
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.horizontalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1034
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.verticalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1035
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.horizontalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1036
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.verticalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1037
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.horizontalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1038
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.verticalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1039
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.horizontalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1040
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.verticalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1041
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.horizontalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1042
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.verticalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1043
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.horizontalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1044
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "middle",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "25px",
          backgroundColor: this.state.horizontalBricks[7][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][7] : this.state.verticalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1045
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "horizontal",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "25px",
          width: "50px",
          backgroundColor: this.state.horizontalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1046
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1048
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1049
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1052
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 0,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[0][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1053
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 0,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[0][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1054
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 1,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[1][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1055
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 1,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[1][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1056
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 2,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[2][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1057
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 2,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[2][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1058
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 3,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[3][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1059
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 3,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[3][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1060
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 4,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[4][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1061
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 4,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[4][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1062
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 5,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[5][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1063
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 5,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[5][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1064
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 6,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[6][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1065
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 6,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[6][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1066
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 7,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[7][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1067
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        orientation: "vertical",
        x: 7,
        y: 7,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "25px",
          backgroundColor: this.state.verticalBricks[7][7]
        },
        onClick: this.clickBrick,
        onMouseOver: this.brickMouseOver,
        onMouseLeave: this.brickMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1068
        },
        className: "jsx-3343820513"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        x: 8,
        y: 8,
        style: {
          float: "left",
          display: "inline",
          height: "50px",
          width: "50px",
          backgroundColor: this.state.playerArray[8][8]
        },
        onClick: this.clickSquare,
        onMouseOver: this.squareMouseOver,
        onMouseLeave: this.squareMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1069
        },
        className: "jsx-3343820513"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1071
        },
        className: "jsx-3343820513"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1072
        },
        className: "jsx-3343820513"
      }))), this.props.game.Player2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1078
        },
        className: "jsx-3343820513"
      }, this.props.game.Player2, " has ", this.state.player2BricksLeft, " bricks left.") : null) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1085
        },
        className: "jsx-3343820513"
      }, "Loading game...") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1087
        },
        className: "jsx-3343820513"
      }, this.state.errorMsg), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3343820513",
        css: "body{background:#ccebff;}h2{font-family:\"Gentium Book Basic\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxnYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlrQ3NCLEFBR3lCLEFBSWtDLG1CQUh0RCwwQkFJSyIsImZpbGUiOiJwYWdlc1xcZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEFzZWVtXFxSZWFjdCBQcm9qZWN0c1xcUmVhY3RRdW9yaWRvciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHVybG5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy91cmxuYW1lLmpzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2UuanNcIlxyXG5pbXBvcnQgeyB1cGRhdGVHYW1lLCB1cGRhdGVOYW1lLCB1cGRhdGVHYW1lSUQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy5qc1wiO1xyXG5cclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5mZXRjaEdhbWUgPSB0aGlzLmZldGNoR2FtZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5icmlja01vdXNlT3ZlciA9IHRoaXMuYnJpY2tNb3VzZU92ZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuYnJpY2tNb3VzZUxlYXZlID0gdGhpcy5icmlja01vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuY2xpY2tCcmljayA9IHRoaXMuY2xpY2tCcmljay5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zcXVhcmVNb3VzZU92ZXIgPSB0aGlzLnNxdWFyZU1vdXNlT3Zlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zcXVhcmVNb3VzZUxlYXZlID0gdGhpcy5zcXVhcmVNb3VzZUxlYXZlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmNsaWNrU3F1YXJlID0gdGhpcy5jbGlja1NxdWFyZS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcblx0XHR2YXIgYXJyID0gW107XHJcblx0XHRmb3IodmFyIHggPSAwOyB4IDwgODsgeCsrKXtcclxuXHRcdFx0YXJyW3hdID0gW107XHJcblx0XHRcdGZvcih2YXIgeSA9IDA7IHkgPCA4OyB5Kyspe1xyXG5cdFx0XHRcdGFyclt4XVt5XSA9IFwiIzQyODZmNFwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgYXJyMiA9IFtdO1xyXG5cdFx0Zm9yKHZhciB4ID0gMDsgeCA8IDg7IHgrKyl7XHJcblx0XHRcdGFycjJbeF0gPSBbXTtcclxuXHRcdFx0Zm9yKHZhciB5ID0gMDsgeSA8IDg7IHkrKyl7XHJcblx0XHRcdFx0YXJyMlt4XVt5XSA9IFwiIzQyODZmNFwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgYXJyMyA9IFtdO1xyXG5cdFx0Zm9yKHZhciB4ID0gMDsgeCA8IDk7IHgrKyl7XHJcblx0XHRcdGFycjNbeF0gPSBbXTtcclxuXHRcdFx0Zm9yKHZhciB5ID0gMDsgeSA8IDk7IHkrKyl7XHJcblx0XHRcdFx0YXJyM1t4XVt5XSA9IFwiIzU1NVwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c3F1YXJlQ29sb3I6IFwiIzU1NVwiLFxyXG5cdFx0XHRicmlja0RlZmF1bHRDb2xvcjogXCIjNDI4NmY0XCIsXHJcblx0XHRcdGJyaWNrRXhpc3RzQ29sb3I6IFwiI2VkYTAzNFwiLFxyXG5cdFx0XHRicmlja0hpZ2hsaWdodGVkQ29sb3I6IFwiIzAwMDg2M1wiLFxyXG5cdFx0XHRzcXVhcmVIaWdobGlnaHRlZENvbG9yOiBcIiMwMDAwMDBcIixcclxuXHRcdFx0cGxheWVyMUNvbG9yOiBcIiNkMzA2MDZcIixcclxuXHRcdFx0cGxheWVyMkNvbG9yOiBcIiMzMGI1MDBcIixcclxuXHRcdFx0cGxheWVyQXJyYXk6IGFycjMuc2xpY2UoKSxcclxuXHRcdFx0dmVydGljYWxCcmlja3M6IGFyci5zbGljZSgpLFxyXG5cdFx0XHRob3Jpem9udGFsQnJpY2tzOiBhcnIyLnNsaWNlKCksXHJcblx0XHRcdHBsYXllcjFCcmlja3NMZWZ0OiAxMCxcclxuXHRcdFx0cGxheWVyMkJyaWNrc0xlZnQ6IDEwLFxyXG5cdFx0XHRlcnJvck1zZzogXCJcIixcclxuXHRcdFx0Z2FtZUV4aXN0czogdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwYXJhbXMgPSB7dW5hbWU6IHRoaXMucHJvcHMubmFtZX1cclxuXHRcdGlmKCF0aGlzLnByb3BzLmdhbWVJRCl7XHJcblx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9wbGF5ZXJcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwbGF5ZXIgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRpZighZGF0YS5lcnJvcil7XHJcblx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZS9cIiArIGRhdGEuaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWUoZGF0YSkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChkYXRhLl9pZCkpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImdhbWUgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdGZldGNoR2FtZSgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lSUQpe1xyXG5cdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZS9cIiArIHRoaXMucHJvcHMuZ2FtZUlEKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImZldGNoaW5nXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHR2YXIgeDEgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXg7XHJcblx0XHRcdFx0dmFyIHkxID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5O1xyXG5cdFx0XHRcdHZhciB4MiA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeDtcclxuXHRcdFx0XHR2YXIgeTIgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnk7XHJcblxyXG5cdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShkYXRhKSk7XHJcblx0XHRcdFx0aWYoZGF0YS5Ub0Rlc3Ryb3kpe1xyXG5cdFx0XHRcdFx0dmFyIHRlbXBJRCA9IHRoaXMucHJvcHMuZ2FtZUlEO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lSUQobnVsbCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKG51bGwpKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZW5kaW5nIGdhbWVcIiArIHRoaXMucHJvcHMuZ2FtZUlEKVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRlcnJvck1zZzogXCJHYW1lIGhhcyBlbmRlZC5cIixcclxuXHRcdFx0XHRcdFx0Z2FtZUV4aXN0czogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0d2lubmVyOiB0aGlzLnByb3BzLm5hbWVcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZS9cIiArIHRlbXBJRCwge21ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbmRlZCBnYW1lXCIpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoZGF0YS5QbGF5ZXIxeSA9PSA4IHx8IGRhdGEuUGxheWVyMnkgPT0gMCl7XHJcblx0XHRcdFx0XHR2YXIgdGVtcElEID0gdGhpcy5wcm9wcy5nYW1lSUQ7XHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWUobnVsbCkpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbmRpbmcgZ2FtZVwiICsgdGhpcy5wcm9wcy5nYW1lSUQpXHJcblx0XHRcdFx0XHR2YXIgd2lubmVyID0gXCJcIjtcclxuXHRcdFx0XHRcdGlmKGRhdGEuUGxheWVyMXkgPT0gOCl7XHJcblx0XHRcdFx0XHRcdHdpbm5lciA9IGRhdGEuUGxheWVyMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdHdpbm5lciA9IGRhdGEuUGxheWVyMjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiR2FtZSBoYXMgZW5kZWQuIFdpbm5lcjogXCIgKyB3aW5uZXIsXHJcblx0XHRcdFx0XHRcdGdhbWVFeGlzdHM6IGZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRcdGlmKHRoaXMucHJvcHMubmFtZSA9PSB3aW5uZXIpe1xyXG5cdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdHdpbm5lcjogd2lubmVyXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9nYW1lL1wiICsgdGVtcElELCB7bWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZW5kZWQgZ2FtZVwiKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5QbGF5ZXIxQnJpY2tzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdGlmKGRhdGEuUGxheWVyMUJyaWNrc1tpXS52ZXJ0aWNhbCl7XHJcblx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR0ZW1wYXJyW2RhdGEuUGxheWVyMUJyaWNrc1tpXS54XVtkYXRhLlBsYXllcjFCcmlja3NbaV0ueV0gPSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3I7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR0ZW1wYXJyW2RhdGEuUGxheWVyMUJyaWNrc1tpXS54XVtkYXRhLlBsYXllcjFCcmlja3NbaV0ueV0gPSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3I7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdGhvcml6b250YWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLlBsYXllcjJCcmlja3MubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoZGF0YS5QbGF5ZXIyQnJpY2tzW2ldLnZlcnRpY2FsKXtcclxuXHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHRlbXBhcnJbZGF0YS5QbGF5ZXIyQnJpY2tzW2ldLnhdW2RhdGEuUGxheWVyMkJyaWNrc1tpXS55XSA9IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHRlbXBhcnJbZGF0YS5QbGF5ZXIyQnJpY2tzW2ldLnhdW2RhdGEuUGxheWVyMkJyaWNrc1tpXS55XSA9IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0aG9yaXpvbnRhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHR0ZW1wYXJyW3gxXVt5MV0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdHRlbXBhcnJbeDJdW3kyXSA9IHRoaXMuc3RhdGUuc3F1YXJlQ29sb3I7XHJcblx0XHRcdFx0dGVtcGFycltkYXRhLlBsYXllcjF4XVtkYXRhLlBsYXllcjF5XSA9IHRoaXMuc3RhdGUucGxheWVyMUNvbG9yO1xyXG5cdFx0XHRcdHRlbXBhcnJbZGF0YS5QbGF5ZXIyeF1bZGF0YS5QbGF5ZXIyeV0gPSB0aGlzLnN0YXRlLnBsYXllcjJDb2xvcjtcclxuXHJcblxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdHBsYXllcjFCcmlja3NMZWZ0OiAxMCAtIGRhdGEuUGxheWVyMUJyaWNrcy5sZW5ndGgsXHJcblx0XHRcdFx0XHRwbGF5ZXIyQnJpY2tzTGVmdDogMTAgLSBkYXRhLlBsYXllcjJCcmlja3MubGVuZ3RoLFxyXG5cdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHR9KVxyXG5cclxuXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmZldGNoR2FtZSwgMjAwMCk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2KSA9PiBcclxuXHRcdHtcclxuXHRcdFx0Ly9ldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRldi5yZXR1cm5WYWx1ZSA9IFwiR2FtZSBoYXMgZW5kZWQuXCJcclxuXHJcblx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZSl7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRlcnJvck1zZzogXCJHYW1lIGhhcyBlbmRlZC5cIixcclxuXHRcdFx0XHRcdGdhbWVFeGlzdHM6IGZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZih0aGlzLnByb3BzLmdhbWUuUGxheWVyMil7XHJcblx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSURcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWUobnVsbCkpO1xyXG5cdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL2Rlc3Ryb3lcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJHYW1lIGhhcyBlbmRlZC5cIlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHZhciBnYW1lSUQgPSB0aGlzLnByb3BzLmdhbWVJRDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0d2lubmVyOiB0aGlzLnByb3BzLm5hbWVcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWUobnVsbCkpO1xyXG5cdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL2dhbWUvXCIgKyBnYW1lSUQsIHttZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZW5kZWQgZ2FtZVwiKVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiR2FtZSBoYXMgZW5kZWQuXCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0fVxyXG5cclxuXHJcblx0c3F1YXJlTW91c2VPdmVyKGV2ZW50KXtcclxuXHJcblx0XHR2YXIgcGxheWluZyA9IFwiXCI7XHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUuUGxheWVyVHVybiA9PSAxKXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZSl7XHJcblx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5uYW1lKXtcclxuXHRcdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxKXtcclxuXHRcdFx0XHRcdGlmKCEoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggJiYgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkpKXtcclxuXHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUhpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBsYXllckFycmF5W2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdGlmKCEoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggJiYgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkpKXtcclxuXHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUhpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUhpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzcXVhcmVNb3VzZUxlYXZlKGV2ZW50KXtcclxuXHRcdHZhciBwbGF5aW5nID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEpe1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjE7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLm5hbWUpe1xyXG5cdFx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjEpe1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBsYXllckFycmF5W2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZW1wYXJyW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldID0gdGhpcy5zdGF0ZS5zcXVhcmVDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdGlmKCEoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggJiYgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkpKXtcclxuXHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZW1wYXJyW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldID0gdGhpcy5zdGF0ZS5zcXVhcmVDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsaWNrU3F1YXJlKGV2ZW50KXtcclxuXHRcdHZhciBwbGF5aW5nID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEpe1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjE7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLm5hbWUpe1xyXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyKXtcclxuXHRcdFx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjEpe1xyXG5cdFx0XHRcdFx0XHRpZighKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5KSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSUQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyOiBwbGF5aW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnJpY2s6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL21vdmVcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtb3ZlIHJlc3BvbnNlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIWRhdGEuZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBkYXRhLnJlc3BvbnNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZmV0Y2hHYW1lKCksIDIwMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuZ2FtZUlELFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllcjogcGxheWluZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0JyaWNrOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JylcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9tb3ZlXCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibW92ZSByZXNwb25zZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogXCJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogZGF0YS5yZXNwb25zZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZldGNoR2FtZSgpLCAyMDAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdGlmKCEoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggJiYgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkpKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXI6IHBsYXlpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCcmljazogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvbW92ZVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm1vdmUgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZighZGF0YS5lcnJvcil7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IGRhdGEucmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaEdhbWUoKSwgMjAwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSUQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyOiBwbGF5aW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnJpY2s6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL21vdmVcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtb3ZlIHJlc3BvbnNlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIWRhdGEuZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBkYXRhLnJlc3BvbnNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZmV0Y2hHYW1lKCksIDIwMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xpY2tCcmljayhldmVudCl7XHJcblx0XHR2YXIgcGxheWluZyA9IFwiXCI7XHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUuUGxheWVyVHVybiA9PSAxKXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZSl7XHJcblx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5uYW1lKXtcclxuXHRcdFx0XHRpZih0aGlzLnByb3BzLmdhbWUuUGxheWVyMil7XHJcblx0XHRcdFx0XHR2YXIgVmVydGljYWwgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpID09IFwiaG9yaXpvbnRhbFwiKXtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFZlcnRpY2FsID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSUQsXHJcblx0XHRcdFx0XHRcdHBsYXllcjogcGxheWluZyxcclxuXHRcdFx0XHRcdFx0aXNCcmljazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YnJpY2s6IHtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbDogVmVydGljYWwsXHJcblx0XHRcdFx0XHRcdFx0eDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSxcclxuXHRcdFx0XHRcdFx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9tb3ZlXCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImJyaWNrIHJlc3BvbnNlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IGRhdGEucmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaEdhbWUoKSwgMjAwMCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YnJpY2tNb3VzZU92ZXIoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0dmFyIHggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpO1xyXG5cdFx0XHRcdHZhciB5ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKTtcclxuXHJcblx0XHRcdFx0dmFyIG9yaWVudGF0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJyk7XHJcblx0XHRcdFx0aWYob3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0hpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYob3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzW3hdW3ldID09IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcil7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0hpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0aG9yaXpvbnRhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihvcmllbnRhdGlvbiA9PSBcIm1pZGRsZVwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0hpZ2hsaWdodGVkQ29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRicmlja01vdXNlTGVhdmUoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0dmFyIHggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpO1xyXG5cdFx0XHRcdHZhciB5ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKTtcclxuXHRcdFx0XHR2YXIgb3JpZW50YXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcclxuXHRcdFx0XHRpZihvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdHRlbXBhcnJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdHZlcnRpY2FsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKG9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0dGVtcGFyclt4XVt5XSA9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0aG9yaXpvbnRhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihvcmllbnRhdGlvbiA9PSBcIm1pZGRsZVwiKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvcjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdHsgdGhpcy5zdGF0ZS5nYW1lRXhpc3RzID9cclxuXHRcdFx0XHQodGhpcy5wcm9wcy5nYW1lID9cclxuXHRcdFx0XHQoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cclxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmVycm9yTXNnID09IFwiXCIgP1xyXG5cdFx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0XHRcdDogPGg0PkVycm9yOiB7dGhpcy5zdGF0ZS5lcnJvck1zZ308L2g0PlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUuUGxheWVyMiA/XHJcblx0XHRcdFx0XHRcdCh0aGlzLnByb3BzLmdhbWUuUGxheWVyVHVybiA9PSAxID9cclxuXHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxID09IHRoaXMucHJvcHMubmFtZSA/IDxkaXY+PGgyPkl0J3MgeW91ciB0dXJuISA8L2gyPiA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0OiA8ZGl2PjxoMj5JdCdzIHt0aGlzLnByb3BzLmdhbWUuUGxheWVyMX0ncyB0dXJuISA8L2gyPiA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQ6ICh0aGlzLnByb3BzLmdhbWUuUGxheWVyMiA9PSB0aGlzLnByb3BzLm5hbWUgPyA8ZGl2PjxoMj5JdCdzIHlvdXIgdHVybiEgPC9oMj4gPC9kaXY+XHJcblx0XHRcdFx0XHRcdDogPGRpdj48aDI+SXQncyB7dGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ9J3MgdHVybiEgPC9oMj4gPC9kaXY+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQ6IDxoND4gV2FpdGluZyBmb3IgcGxheWVyIHRvIHBsYXkgYWdhaW5zdC4uLiB5b3UgY291bGQgYWxzbyBvcGVuIGFub3RoZXIgdGFiLCBjcmVhdGUgYW5vdGhlciBwbGF5ZXIsIGFuZCBwbGF5IGFnYWluc3QgeW91cnNlbGYgaWYgeW91J2QgbGlrZSDwn5iJIDwvaDQ+XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmdhbWUuUGxheWVyMX0gaGFzIHt0aGlzLnN0YXRlLnBsYXllcjFCcmlja3NMZWZ0fSBicmlja3MgbGVmdC48L2gzPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yLCB3aWR0aDogXCI2NTBweFwifX0+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjUwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjVweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyNXB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjI1cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjUwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjVweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyNXB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjI1cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjUwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjVweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyNXB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLlBsYXllcjIgPyBcclxuXHRcdFx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmdhbWUuUGxheWVyMn0gaGFzIHt0aGlzLnN0YXRlLnBsYXllcjJCcmlja3NMZWZ0fSBicmlja3MgbGVmdC48L2gzPlxyXG5cdFx0XHRcdFx0XHQ6IG51bGxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQ6IDxoMz5Mb2FkaW5nIGdhbWUuLi48L2gzPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0OiA8aDM+e3RoaXMuc3RhdGUuZXJyb3JNc2d9PC9oMz5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0XHRib2R5IHsgXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjY2NlYmZmO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDIge1xyXG5cdCAgICAgICAgICBmb250LWZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgVGltZXMsIHNlcmlmO1xyXG5cdCAgICAgICAgfVxyXG5cdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcbiAgICAgIFxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoR2FtZSkpIl19 */\n/*@ sourceURL=pages\\game.js */"
      }));
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
//# sourceMappingURL=5.6a5374c921288fc47dd2.hot-update.js.map