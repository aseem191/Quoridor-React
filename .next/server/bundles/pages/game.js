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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/urlname.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("https://quoridorbackend.herokuapp.com");

/***/ }),

/***/ "./pages/game.js":
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
        className: "jsx-3958178348"
      }, this.state.gameExists ? this.props.game ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        className: "jsx-3958178348"
      }, this.state.errorMsg == "" ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        className: "jsx-3958178348"
      }, "Error: ", this.state.errorMsg), this.props.game.Player2 ? this.props.game.PlayerTurn == 1 ? this.props.game.Player1 == this.props.name ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        className: "jsx-3958178348"
      }, "It's your turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        className: "jsx-3958178348"
      }, "It's ", this.props.game.Player1, "'s turn! "), " ") : this.props.game.Player2 == this.props.name ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        className: "jsx-3958178348"
      }, "It's your turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        className: "jsx-3958178348"
      }, "It's ", this.props.game.Player2, "'s turn! "), " ") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686
        },
        className: "jsx-3958178348"
      }, " Waiting for player to play against... you could also open another tab, create another player, and play against yourself if you'd like \uD83D\uDE09 "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        },
        className: "jsx-3958178348"
      }, this.props.game.Player1, " has ", this.state.player1BricksLeft, " bricks left."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundColor: this.state.brickDefaultColor,
          width: "650px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 737
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 846
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 847
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 849
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 891
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 892
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 913
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 914
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 917
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 937
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 939
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 962
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 981
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 982
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 984
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1003
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1004
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1007
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1026
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1027
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1029
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1048
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1049
        },
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1052
        },
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
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
        className: "jsx-3958178348"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          lineHeight: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1071
        },
        className: "jsx-3958178348"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1072
        },
        className: "jsx-3958178348"
      }))), this.props.game.Player2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1078
        },
        className: "jsx-3958178348"
      }, this.props.game.Player2, " has ", this.state.player2BricksLeft, " bricks left.") : null) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1085
        },
        className: "jsx-3958178348"
      }, "Loading game...") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1087
        },
        className: "jsx-3958178348"
      }, this.state.errorMsg), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3958178348",
        css: "@import url('https://fonts.googleapis.com/css?family=Rubik');@fontface{font-family:'Rubik',cursive;src:url('https://fonts.googleapis.com/css?family=Rubik');}@import url('https://fonts.googleapis.com/css?family=Graduate');@fontface{font-family:'Graduate',cursive;src:url('https://fonts.googleapis.com/css?family=Graduate');}body{background:#c9f5ff;}h3{font-family:\"Rubik\",Times,serif;}h4{font-family:\"Rubik\",Times,serif;}h2{font-family:\"Graduate\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxnYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlrQ3NCLEFBR3lCLEFBR3dDLEFBRzlCLEFBSWlDLEFBRzlCLEFBS0UsQUFJQSxBQUlHLG1CQXpCdEMsU0FPRCxHQU9BLENBSUMsQUFJQSxHQUlBLGtEQW5CQSxNQU9BIiwiZmlsZSI6InBhZ2VzXFxnYW1lLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcQXNlZW1cXFJlYWN0IFByb2plY3RzXFxSZWFjdFF1b3JpZG9yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZS5qc1wiXHJcbmltcG9ydCB7IHVwZGF0ZUdhbWUsIHVwZGF0ZU5hbWUsIHVwZGF0ZUdhbWVJRCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zLmpzXCI7XHJcblxyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmZldGNoR2FtZSA9IHRoaXMuZmV0Y2hHYW1lLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmJyaWNrTW91c2VPdmVyID0gdGhpcy5icmlja01vdXNlT3Zlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5icmlja01vdXNlTGVhdmUgPSB0aGlzLmJyaWNrTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5jbGlja0JyaWNrID0gdGhpcy5jbGlja0JyaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnNxdWFyZU1vdXNlT3ZlciA9IHRoaXMuc3F1YXJlTW91c2VPdmVyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnNxdWFyZU1vdXNlTGVhdmUgPSB0aGlzLnNxdWFyZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuY2xpY2tTcXVhcmUgPSB0aGlzLmNsaWNrU3F1YXJlLmJpbmQodGhpcyk7XHJcblxyXG5cclxuXHRcdHZhciBhcnIgPSBbXTtcclxuXHRcdGZvcih2YXIgeCA9IDA7IHggPCA4OyB4Kyspe1xyXG5cdFx0XHRhcnJbeF0gPSBbXTtcclxuXHRcdFx0Zm9yKHZhciB5ID0gMDsgeSA8IDg7IHkrKyl7XHJcblx0XHRcdFx0YXJyW3hdW3ldID0gXCIjNDI4NmY0XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBhcnIyID0gW107XHJcblx0XHRmb3IodmFyIHggPSAwOyB4IDwgODsgeCsrKXtcclxuXHRcdFx0YXJyMlt4XSA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIHkgPSAwOyB5IDwgODsgeSsrKXtcclxuXHRcdFx0XHRhcnIyW3hdW3ldID0gXCIjNDI4NmY0XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBhcnIzID0gW107XHJcblx0XHRmb3IodmFyIHggPSAwOyB4IDwgOTsgeCsrKXtcclxuXHRcdFx0YXJyM1t4XSA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIHkgPSAwOyB5IDwgOTsgeSsrKXtcclxuXHRcdFx0XHRhcnIzW3hdW3ldID0gXCIjNTU1XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzcXVhcmVDb2xvcjogXCIjNTU1XCIsXHJcblx0XHRcdGJyaWNrRGVmYXVsdENvbG9yOiBcIiM0Mjg2ZjRcIixcclxuXHRcdFx0YnJpY2tFeGlzdHNDb2xvcjogXCIjZWRhMDM0XCIsXHJcblx0XHRcdGJyaWNrSGlnaGxpZ2h0ZWRDb2xvcjogXCIjMDAwODYzXCIsXHJcblx0XHRcdHNxdWFyZUhpZ2hsaWdodGVkQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG5cdFx0XHRwbGF5ZXIxQ29sb3I6IFwiI2QzMDYwNlwiLFxyXG5cdFx0XHRwbGF5ZXIyQ29sb3I6IFwiIzMwYjUwMFwiLFxyXG5cdFx0XHRwbGF5ZXJBcnJheTogYXJyMy5zbGljZSgpLFxyXG5cdFx0XHR2ZXJ0aWNhbEJyaWNrczogYXJyLnNsaWNlKCksXHJcblx0XHRcdGhvcml6b250YWxCcmlja3M6IGFycjIuc2xpY2UoKSxcclxuXHRcdFx0cGxheWVyMUJyaWNrc0xlZnQ6IDEwLFxyXG5cdFx0XHRwbGF5ZXIyQnJpY2tzTGVmdDogMTAsXHJcblx0XHRcdGVycm9yTXNnOiBcIlwiLFxyXG5cdFx0XHRnYW1lRXhpc3RzOiB0cnVlXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBhcmFtcyA9IHt1bmFtZTogdGhpcy5wcm9wcy5uYW1lfVxyXG5cdFx0aWYoIXRoaXMucHJvcHMuZ2FtZUlEKXtcclxuXHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL3BsYXllclwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInBsYXllciByZXNwb25zZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9nYW1lL1wiICsgZGF0YS5pZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShkYXRhKSk7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZUlEKGRhdGEuX2lkKSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0ZmV0Y2hHYW1lKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWVJRCl7XHJcblx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9nYW1lL1wiICsgdGhpcy5wcm9wcy5nYW1lSUQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZmV0Y2hpbmdcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdHZhciB4MSA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeDtcclxuXHRcdFx0XHR2YXIgeTEgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMXk7XHJcblx0XHRcdFx0dmFyIHgyID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4O1xyXG5cdFx0XHRcdHZhciB5MiA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeTtcclxuXHJcblx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVHYW1lKGRhdGEpKTtcclxuXHRcdFx0XHRpZihkYXRhLlRvRGVzdHJveSl7XHJcblx0XHRcdFx0XHR2YXIgdGVtcElEID0gdGhpcy5wcm9wcy5nYW1lSUQ7XHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWVJRChudWxsKSk7XHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUdhbWUobnVsbCkpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbmRpbmcgZ2FtZVwiICsgdGhpcy5wcm9wcy5nYW1lSUQpXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIkdhbWUgaGFzIGVuZGVkLlwiLFxyXG5cdFx0XHRcdFx0XHRnYW1lRXhpc3RzOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHR3aW5uZXI6IHRoaXMucHJvcHMubmFtZVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9nYW1lL1wiICsgdGVtcElELCB7bWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImVuZGVkIGdhbWVcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihkYXRhLlBsYXllcjF5ID09IDggfHwgZGF0YS5QbGF5ZXIyeSA9PSAwKXtcclxuXHRcdFx0XHRcdHZhciB0ZW1wSUQgPSB0aGlzLnByb3BzLmdhbWVJRDtcclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZUlEKG51bGwpKTtcclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShudWxsKSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImVuZGluZyBnYW1lXCIgKyB0aGlzLnByb3BzLmdhbWVJRClcclxuXHRcdFx0XHRcdHZhciB3aW5uZXIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0aWYoZGF0YS5QbGF5ZXIxeSA9PSA4KXtcclxuXHRcdFx0XHRcdFx0d2lubmVyID0gZGF0YS5QbGF5ZXIxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0d2lubmVyID0gZGF0YS5QbGF5ZXIyO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRlcnJvck1zZzogXCJHYW1lIGhhcyBlbmRlZC4gV2lubmVyOiBcIiArIHdpbm5lcixcclxuXHRcdFx0XHRcdFx0Z2FtZUV4aXN0czogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5uYW1lID09IHdpbm5lcil7XHJcblx0XHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdFx0d2lubmVyOiB3aW5uZXJcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL2dhbWUvXCIgKyB0ZW1wSUQsIHttZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbmRlZCBnYW1lXCIpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLlBsYXllcjFCcmlja3MubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoZGF0YS5QbGF5ZXIxQnJpY2tzW2ldLnZlcnRpY2FsKXtcclxuXHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHRlbXBhcnJbZGF0YS5QbGF5ZXIxQnJpY2tzW2ldLnhdW2RhdGEuUGxheWVyMUJyaWNrc1tpXS55XSA9IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHRlbXBhcnJbZGF0YS5QbGF5ZXIxQnJpY2tzW2ldLnhdW2RhdGEuUGxheWVyMUJyaWNrc1tpXS55XSA9IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0aG9yaXpvbnRhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEuUGxheWVyMkJyaWNrcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihkYXRhLlBsYXllcjJCcmlja3NbaV0udmVydGljYWwpe1xyXG5cdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dGVtcGFycltkYXRhLlBsYXllcjJCcmlja3NbaV0ueF1bZGF0YS5QbGF5ZXIyQnJpY2tzW2ldLnldID0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dGVtcGFycltkYXRhLlBsYXllcjJCcmlja3NbaV0ueF1bZGF0YS5QbGF5ZXIyQnJpY2tzW2ldLnldID0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRob3Jpem9udGFsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdHRlbXBhcnJbeDFdW3kxXSA9IHRoaXMuc3RhdGUuc3F1YXJlQ29sb3I7XHJcblx0XHRcdFx0dGVtcGFyclt4Ml1beTJdID0gdGhpcy5zdGF0ZS5zcXVhcmVDb2xvcjtcclxuXHRcdFx0XHR0ZW1wYXJyW2RhdGEuUGxheWVyMXhdW2RhdGEuUGxheWVyMXldID0gdGhpcy5zdGF0ZS5wbGF5ZXIxQ29sb3I7XHJcblx0XHRcdFx0dGVtcGFycltkYXRhLlBsYXllcjJ4XVtkYXRhLlBsYXllcjJ5XSA9IHRoaXMuc3RhdGUucGxheWVyMkNvbG9yO1xyXG5cclxuXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0cGxheWVyMUJyaWNrc0xlZnQ6IDEwIC0gZGF0YS5QbGF5ZXIxQnJpY2tzLmxlbmd0aCxcclxuXHRcdFx0XHRcdHBsYXllcjJCcmlja3NMZWZ0OiAxMCAtIGRhdGEuUGxheWVyMkJyaWNrcy5sZW5ndGgsXHJcblx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdH0pXHJcblxyXG5cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hHYW1lLCAyMDAwKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoZXYpID0+IFxyXG5cdFx0e1xyXG5cdFx0XHQvL2V2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGV2LnJldHVyblZhbHVlID0gXCJHYW1lIGhhcyBlbmRlZC5cIlxyXG5cclxuXHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdGVycm9yTXNnOiBcIkdhbWUgaGFzIGVuZGVkLlwiLFxyXG5cdFx0XHRcdFx0Z2FtZUV4aXN0czogZmFsc2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyKXtcclxuXHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRFxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZUlEKG51bGwpKTtcclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShudWxsKSk7XHJcblx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZGVzdHJveVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHJldHVybiBcIkdhbWUgaGFzIGVuZGVkLlwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dmFyIGdhbWVJRCA9IHRoaXMucHJvcHMuZ2FtZUlEO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHR3aW5uZXI6IHRoaXMucHJvcHMubmFtZVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZUlEKG51bGwpKTtcclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlR2FtZShudWxsKSk7XHJcblx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvZ2FtZS9cIiArIGdhbWVJRCwge21ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbmRlZCBnYW1lXCIpXHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJHYW1lIGhhcyBlbmRlZC5cIlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHRzcXVhcmVNb3VzZU92ZXIoZXZlbnQpe1xyXG5cclxuXHRcdHZhciBwbGF5aW5nID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEpe1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjE7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLm5hbWUpe1xyXG5cdFx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjEpe1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGxheWVyQXJyYXlbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZW1wYXJyW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldID0gdGhpcy5zdGF0ZS5zcXVhcmVIaWdobGlnaHRlZENvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNxdWFyZU1vdXNlTGVhdmUoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMSl7XHJcblx0XHRcdFx0XHRpZighKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykgPT0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5KSl7XHJcblx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLnBsYXllckFycmF5LnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZW1wYXJyW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyldW2V2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JyldID0gdGhpcy5zdGF0ZS5zcXVhcmVDb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJBcnJheTogdGVtcGFyclxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGxheWVyQXJyYXlbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSkpe1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheS5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGFycltldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpXVtldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXSA9IHRoaXMuc3RhdGUuc3F1YXJlQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyQXJyYXk6IHRlbXBhcnJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ4IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUucGxheWVyQXJyYXkuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBhcnJbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKV1bZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKV0gPSB0aGlzLnN0YXRlLnNxdWFyZUNvbG9yO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYXllckFycmF5OiB0ZW1wYXJyXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xpY2tTcXVhcmUoZXZlbnQpe1xyXG5cdFx0dmFyIHBsYXlpbmcgPSBcIlwiO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllclR1cm4gPT0gMSl7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBsYXlpbmcgPSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUpe1xyXG5cdFx0XHRpZihwbGF5aW5nID09IHRoaXMucHJvcHMubmFtZSl7XHJcblx0XHRcdFx0aWYodGhpcy5wcm9wcy5nYW1lLlBsYXllcjIpe1xyXG5cdFx0XHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMSl7XHJcblx0XHRcdFx0XHRcdGlmKCEoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnggJiYgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSA9PSB0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkpKXtcclxuXHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXI6IHBsYXlpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCcmljazogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvbW92ZVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm1vdmUgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZighZGF0YS5lcnJvcil7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IGRhdGEucmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaEdhbWUoKSwgMjAwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjF5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMXggLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogdGhpcy5wcm9wcy5nYW1lSUQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyOiBwbGF5aW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnJpY2s6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL21vdmVcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtb3ZlIHJlc3BvbnNlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoIWRhdGEuZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTXNnOiBkYXRhLnJlc3BvbnNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZmV0Y2hHYW1lKCksIDIwMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0aWYoIShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpID09IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxeSkpe1xyXG5cdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoTWF0aC5hYnModGhpcy5wcm9wcy5nYW1lLlBsYXllcjJ5IC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSkgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuZ2FtZUlELFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllcjogcGxheWluZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0JyaWNrOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JylcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZldGNoKHVybG5hbWUgKyBcIi9tb3ZlXCIsIHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKX0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibW92ZSByZXNwb25zZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKCFkYXRhLmVycm9yKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogXCJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogZGF0YS5yZXNwb25zZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZldGNoR2FtZSgpLCAyMDAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZihNYXRoLmFicyh0aGlzLnByb3BzLmdhbWUuUGxheWVyMnkgLSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSA9PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyeCAtIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXI6IHBsYXlpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCcmljazogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZXRjaCh1cmxuYW1lICsgXCIvbW92ZVwiLCB7bWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyl9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm1vdmUgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZighZGF0YS5lcnJvcil7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IGRhdGEucmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaEdhbWUoKSwgMjAwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbGlja0JyaWNrKGV2ZW50KXtcclxuXHRcdHZhciBwbGF5aW5nID0gXCJcIjtcclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEpe1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjE7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwbGF5aW5nID0gdGhpcy5wcm9wcy5nYW1lLlBsYXllcjI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5nYW1lKXtcclxuXHRcdFx0aWYocGxheWluZyA9PSB0aGlzLnByb3BzLm5hbWUpe1xyXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyKXtcclxuXHRcdFx0XHRcdHZhciBWZXJ0aWNhbCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0aWYoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJykgPT0gXCJob3Jpem9udGFsXCIpe1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0VmVydGljYWwgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdGlkOiB0aGlzLnByb3BzLmdhbWVJRCxcclxuXHRcdFx0XHRcdFx0cGxheWVyOiBwbGF5aW5nLFxyXG5cdFx0XHRcdFx0XHRpc0JyaWNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRicmljazoge1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsOiBWZXJ0aWNhbCxcclxuXHRcdFx0XHRcdFx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLFxyXG5cdFx0XHRcdFx0XHRcdHk6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5JylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRcdFx0ZmV0Y2godXJsbmFtZSArIFwiL21vdmVcIiwge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYnJpY2sgcmVzcG9uc2UgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHRcdFx0XHRcdFx0aWYoIWRhdGEuZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNc2c6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1zZzogZGF0YS5yZXNwb25zZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZldGNoR2FtZSgpLCAyMDAwKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRicmlja01vdXNlT3ZlcihldmVudCl7XHJcblx0XHR2YXIgcGxheWluZyA9IFwiXCI7XHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUuUGxheWVyVHVybiA9PSAxKXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZSl7XHJcblx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5uYW1lKXtcclxuXHRcdFx0XHR2YXIgeCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4Jyk7XHJcblx0XHRcdFx0dmFyIHkgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpO1xyXG5cclxuXHRcdFx0XHR2YXIgb3JpZW50YXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcclxuXHRcdFx0XHRpZihvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdHRlbXBhcnJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihvcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIil7XHJcblx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbeF1beV0gPT0gdGhpcy5zdGF0ZS5icmlja0V4aXN0c0NvbG9yKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHRlbXBhcnIgPSB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdHRlbXBhcnJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRob3Jpem9udGFsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKG9yaWVudGF0aW9uID09IFwibWlkZGxlXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdHRlbXBhcnJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrSGlnaGxpZ2h0ZWRDb2xvcjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbEJyaWNrczogdGVtcGFyclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGJyaWNrTW91c2VMZWF2ZShldmVudCl7XHJcblx0XHR2YXIgcGxheWluZyA9IFwiXCI7XHJcblx0XHRpZih0aGlzLnByb3BzLmdhbWUuUGxheWVyVHVybiA9PSAxKXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0cGxheWluZyA9IHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMucHJvcHMuZ2FtZSl7XHJcblx0XHRcdGlmKHBsYXlpbmcgPT0gdGhpcy5wcm9wcy5uYW1lKXtcclxuXHRcdFx0XHR2YXIgeCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4Jyk7XHJcblx0XHRcdFx0dmFyIHkgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpO1xyXG5cdFx0XHRcdHZhciBvcmllbnRhdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xyXG5cdFx0XHRcdGlmKG9yaWVudGF0aW9uID09IFwidmVydGljYWxcIil7XHJcblx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzW3hdW3ldID09IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcil7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrcy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0dGVtcGFyclt4XVt5XSA9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3I7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0dmVydGljYWxCcmlja3M6IHRlbXBhcnJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYob3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzW3hdW3ldID09IHRoaXMuc3RhdGUuYnJpY2tFeGlzdHNDb2xvcil7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciB0ZW1wYXJyID0gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzLnNsaWNlKCk7XHJcblx0XHRcdFx0XHR0ZW1wYXJyW3hdW3ldID0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvcjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRob3Jpem9udGFsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKG9yaWVudGF0aW9uID09IFwibWlkZGxlXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1t4XVt5XSA9PSB0aGlzLnN0YXRlLmJyaWNrRXhpc3RzQ29sb3Ipe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgdGVtcGFyciA9IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3Muc2xpY2UoKTtcclxuXHRcdFx0XHRcdHRlbXBhcnJbeF1beV0gPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdHZlcnRpY2FsQnJpY2tzOiB0ZW1wYXJyXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0eyB0aGlzLnN0YXRlLmdhbWVFeGlzdHMgP1xyXG5cdFx0XHRcdCh0aGlzLnByb3BzLmdhbWUgP1xyXG5cdFx0XHRcdChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblxyXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuZXJyb3JNc2cgPT0gXCJcIiA/XHJcblx0XHRcdFx0XHRcdG51bGxcclxuXHRcdFx0XHRcdFx0OiA8aDM+RXJyb3I6IHt0aGlzLnN0YXRlLmVycm9yTXNnfTwvaDM+XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyID9cclxuXHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXJUdXJuID09IDEgP1xyXG5cdFx0XHRcdFx0XHQodGhpcy5wcm9wcy5nYW1lLlBsYXllcjEgPT0gdGhpcy5wcm9wcy5uYW1lID8gPGRpdj48aDI+SXQncyB5b3VyIHR1cm4hIDwvaDI+IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ6IDxkaXY+PGgyPkl0J3Mge3RoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxfSdzIHR1cm4hIDwvaDI+IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdDogKHRoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyID09IHRoaXMucHJvcHMubmFtZSA/IDxkaXY+PGgyPkl0J3MgeW91ciB0dXJuISA8L2gyPiA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0OiA8ZGl2PjxoMj5JdCdzIHt0aGlzLnByb3BzLmdhbWUuUGxheWVyMn0ncyB0dXJuISA8L2gyPiA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdDogPGg0PiBXYWl0aW5nIGZvciBwbGF5ZXIgdG8gcGxheSBhZ2FpbnN0Li4uIHlvdSBjb3VsZCBhbHNvIG9wZW4gYW5vdGhlciB0YWIsIGNyZWF0ZSBhbm90aGVyIHBsYXllciwgYW5kIHBsYXkgYWdhaW5zdCB5b3Vyc2VsZiBpZiB5b3UnZCBsaWtlIPCfmIkgPC9oND5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQ8aDM+e3RoaXMucHJvcHMuZ2FtZS5QbGF5ZXIxfSBoYXMge3RoaXMuc3RhdGUucGxheWVyMUJyaWNrc0xlZnR9IGJyaWNrcyBsZWZ0LjwvaDM+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IsIHdpZHRoOiBcIjY1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzBdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezB9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzBdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVswXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17MH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXswfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVswXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyNXB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVswXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVswXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzBdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzBdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsxXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17MX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzFdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXsxfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsxXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezF9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzFdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjI1cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsxXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVsxXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzFdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzFdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bMV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjUwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVsyXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzJdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXsyfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVsyXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bMl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezJ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzJdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17Mn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bMl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjVweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzJdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzJdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bMl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzNdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsyXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVsyXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzNdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bM10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezN9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzNdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVszXSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17M30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bM119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXszfSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVszXX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyNXB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bM10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bM10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVszXSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVszXSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzNdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzNdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNF0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs0XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzRdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs0XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzRdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjI1cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezF9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsxXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsxfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Mn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzJdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezJ9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezR9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs0XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs0fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzVdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezV9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs0XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs0XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzRdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzRdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezd9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs3XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs3fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNF0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNF0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17OH0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzhdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjUwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezB9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXswfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezF9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezF9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Mn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Mn0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXszfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXszfSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezR9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezR9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs1XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NX0geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs2fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzVdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs2fSB5PXs1fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs1XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNV0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezd9IHk9ezV9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzVdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17NX0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNV19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjVweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezB9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVswXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXswfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsyfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Mn0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezN9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVszXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXszfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs1fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzVdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzVdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezZ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs2XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs2fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNV0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bNV0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzZdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs1XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs1XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs4fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbOF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiNTBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezB9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17MX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MX0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMV1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsyfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsyfSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1syXVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezN9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezN9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17NH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17NH0geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNF1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs1fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzZdIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs1fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s1XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezZ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bNl0gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezZ9IHk9ezZ9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzZdfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs2XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17N30geT17Nn0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbN11bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbN11bNl19fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs2fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs2XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCIyNXB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzBdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezB9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1swXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXsxfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MX0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzFdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzNdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezN9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1szXVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs0fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17NH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzRdWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNl0gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bNl0gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzZdWzddfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezZ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs2XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s2XVs2XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbN11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17N30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzZdICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzddWzZdIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXswfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMF1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMF1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXsxfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1swXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzBdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXsxfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1sxXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezJ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzFdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMV1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezJ9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzJdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzJdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbMl1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1syXVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbM11bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbM11bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs0fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1szXVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzNdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs0fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s0XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezV9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzRdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNF1bN10gOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cIm1pZGRsZVwiIHg9ezV9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzVdWzddICE9IHRoaXMuc3RhdGUuYnJpY2tEZWZhdWx0Q29sb3IgPyB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bN10gOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzVdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNV1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s1XVs3XSA6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwibWlkZGxlXCIgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCIyNXB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmhvcml6b250YWxCcmlja3NbNl1bN10gIT0gdGhpcy5zdGF0ZS5icmlja0RlZmF1bHRDb2xvciA/IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs3XSA6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s2XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzZdWzddIDogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJtaWRkbGVcIiB4PXs3fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaG9yaXpvbnRhbEJyaWNrc1s3XVs3XSAhPSB0aGlzLnN0YXRlLmJyaWNrRGVmYXVsdENvbG9yID8gdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzddIDogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiMjVweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5ob3Jpem9udGFsQnJpY2tzWzddWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjI1cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXswfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbMF1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17MH0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzBdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17MX0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzFdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezF9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1sxXVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezJ9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVsyXVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXsyfSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbMl1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXszfSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbM11bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17M30geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzNdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17NH0geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzRdWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezR9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s0XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezV9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs1XVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB4PXs1fSB5PXs3fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiMjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUudmVydGljYWxCcmlja3NbNV1bN119fSBvbkNsaWNrPXt0aGlzLmNsaWNrQnJpY2t9IG9uTW91c2VPdmVyPXt0aGlzLmJyaWNrTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuYnJpY2tNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB4PXs2fSB5PXs4fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgZGlzcGxheTogXCJpbmxpbmVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUucGxheWVyQXJyYXlbNl1bOF19fSBvbkNsaWNrPXt0aGlzLmNsaWNrU3F1YXJlfSBvbk1vdXNlT3Zlcj17dGhpcy5zcXVhcmVNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5zcXVhcmVNb3VzZUxlYXZlfT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgeD17Nn0geT17N30gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnZlcnRpY2FsQnJpY2tzWzZdWzddfX0gb25DbGljaz17dGhpcy5jbGlja0JyaWNrfSBvbk1vdXNlT3Zlcj17dGhpcy5icmlja01vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmJyaWNrTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgeD17N30geT17OH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIGRpc3BsYXk6IFwiaW5saW5lXCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLnBsYXllckFycmF5WzddWzhdfX0gb25DbGljaz17dGhpcy5jbGlja1NxdWFyZX0gb25Nb3VzZU92ZXI9e3RoaXMuc3F1YXJlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3F1YXJlTW91c2VMZWF2ZX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHg9ezd9IHk9ezd9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCIyNXB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS52ZXJ0aWNhbEJyaWNrc1s3XVs3XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tCcmlja30gb25Nb3VzZU92ZXI9e3RoaXMuYnJpY2tNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5icmlja01vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHg9ezh9IHk9ezh9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwiLCBkaXNwbGF5OiBcImlubGluZVwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5wbGF5ZXJBcnJheVs4XVs4XX19IG9uQ2xpY2s9e3RoaXMuY2xpY2tTcXVhcmV9IG9uTW91c2VPdmVyPXt0aGlzLnNxdWFyZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLnNxdWFyZU1vdXNlTGVhdmV9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bGluZUhlaWdodDogXCI1MHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUuUGxheWVyMiA/IFxyXG5cdFx0XHRcdFx0XHQ8aDM+e3RoaXMucHJvcHMuZ2FtZS5QbGF5ZXIyfSBoYXMge3RoaXMuc3RhdGUucGxheWVyMkJyaWNrc0xlZnR9IGJyaWNrcyBsZWZ0LjwvaDM+XHJcblx0XHRcdFx0XHRcdDogbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdDogPGgzPkxvYWRpbmcgZ2FtZS4uLjwvaDM+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHQ6IDxoMz57dGhpcy5zdGF0ZS5lcnJvck1zZ308L2gzPlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRcdGJvZHkgeyBcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjOWY1ZmY7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrJyk7XHJcblxyXG5cdFx0XHRcdEBmb250ZmFjZSB7XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogJ1J1YmlrJywgY3Vyc2l2ZTtcclxuXHRcdFx0XHRcdHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWsnKVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HcmFkdWF0ZScpO1xyXG5cclxuXHRcdFx0XHRAZm9udGZhY2Uge1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdHcmFkdWF0ZScsIGN1cnNpdmU7XHJcblx0XHRcdFx0XHRzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdyYWR1YXRlJylcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGg0IHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdyYWR1YXRlXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuICAgICAgXHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlKGNvbm5lY3Qoc3RhdGU9PnN0YXRlKShHYW1lKSkiXX0= */\n/*@ sourceURL=pages\\game.js */"
      }));
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6__page_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(function (state) {
  return state;
})(Game)));

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/game.js");


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
//# sourceMappingURL=game.js.map