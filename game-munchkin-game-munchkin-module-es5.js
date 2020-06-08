function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-munchkin-game-munchkin-module"], {
  /***/
  "./src/app/games/game-munchkin/game-munchkin.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/games/game-munchkin/game-munchkin.component.ts ***!
    \****************************************************************/

  /*! exports provided: GameMunchkinComponent */

  /***/
  function srcAppGamesGameMunchkinGameMunchkinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameMunchkinComponent", function () {
      return GameMunchkinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_user_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/user-settings.service */
    "./src/app/services/user-settings.service.ts");
    /* harmony import */


    var _shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/chat/chat.service */
    "./src/app/shared/chat/chat.service.ts");
    /* harmony import */


    var _game_munchkin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./game-munchkin.service */
    "./src/app/games/game-munchkin/game-munchkin.service.ts");
    /* harmony import */


    var _munchkin_players_munchkin_players_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./munchkin-players/munchkin-players.component */
    "./src/app/games/game-munchkin/munchkin-players/munchkin-players.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _munchkin_board_munchkin_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./munchkin-board/munchkin-board.component */
    "./src/app/games/game-munchkin/munchkin-board/munchkin-board.component.ts");
    /* harmony import */


    var _shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/chat/chat.component */
    "./src/app/shared/chat/chat.component.ts");

    var GameMunchkinComponent = /*#__PURE__*/function () {
      function GameMunchkinComponent(route, socketService, gameMunchkinService, chatService, userSettingsService) {
        _classCallCheck(this, GameMunchkinComponent);

        this.route = route;
        this.socketService = socketService;
        this.gameMunchkinService = gameMunchkinService;
        this.chatService = chatService;
        this.userSettingsService = userSettingsService;
        this.tearDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(GameMunchkinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initGame();
          this.initChat();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.gameId) {
            this.socketService.emit(new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["LeaveGameAction"](this.gameId));
          }

          this.tearDown$.next();
          this.tearDown$.complete();
        }
      }, {
        key: "initGame",
        value: function initGame() {
          var _this = this;

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            return _this.gameId = params.gameId;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.gameMunchkinService.joinGame(_this.gameId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.socketService.listenAnyOf(_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameUserJoinedAction"], _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameUserLeftAction"], _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["UserDataChangedAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(-1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
              return _this.gameMunchkinService.getGameById(_this.gameId);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (game) {
              return _this.game = game;
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$)).subscribe();
        }
      }, {
        key: "initChat",
        value: function initChat() {
          var _this2 = this;

          this.userSettingsService.userSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$)).subscribe(function (settings) {
            _this2.myUserId = settings.id;
            _this2.chatService.myName = settings.name;
          });
          this.socketService.listen(_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ChatSendMessageAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$)).subscribe(function (action) {
            return _this2.chatService.sendMessage(action.payload.from, action.payload.text);
          });
          this.chatService.myMessages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$)).subscribe(function (text) {
            var sendMessageAction = new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ChatSendMessageAction"]({
              gameId: _this2.gameId,
              from: _this2.chatService.myName,
              text: text
            });

            _this2.socketService.emit(sendMessageAction);
          });
        }
      }]);

      return GameMunchkinComponent;
    }();

    GameMunchkinComponent.ɵfac = function GameMunchkinComponent_Factory(t) {
      return new (t || GameMunchkinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_munchkin_service__WEBPACK_IMPORTED_MODULE_8__["GameMunchkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_settings_service__WEBPACK_IMPORTED_MODULE_6__["UserSettingsService"]));
    };

    GameMunchkinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameMunchkinComponent,
      selectors: [["bg-game-munchkin"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]])],
      decls: 4,
      vars: 2,
      consts: [["fxFlex", "250px", 3, "players", "myUserId"], ["fxFlex", "", "fxLayout", "column"], ["fxFlex", ""], ["fxFlex", "0 0 300px"]],
      template: function GameMunchkinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bg-munchkin-players", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "bg-munchkin-board", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "bg-chat", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("players", ctx.game && ctx.game.players)("myUserId", ctx.myUserId);
        }
      },
      directives: [_munchkin_players_munchkin_players_component__WEBPACK_IMPORTED_MODULE_9__["MunchkinPlayersComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _munchkin_board_munchkin_board_component__WEBPACK_IMPORTED_MODULE_11__["MunchkinBoardComponent"], _shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"]],
      styles: ["[_nghost-%COMP%] {\n  height: calc(100vh - 64px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLW11bmNoa2luL2dhbWUtbXVuY2hraW4uY29tcG9uZW50LnNjc3MiLCJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWUtbXVuY2hraW4vZ2FtZS1tdW5jaGtpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDBCQUFBO0FDREYiLCJmaWxlIjoiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLW11bmNoa2luL2dhbWUtbXVuY2hraW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSk7XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMunchkinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-game-munchkin',
          templateUrl: './game-munchkin.component.html',
          styleUrls: ['./game-munchkin.component.scss'],
          providers: [_shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
        }, {
          type: _game_munchkin_service__WEBPACK_IMPORTED_MODULE_8__["GameMunchkinService"]
        }, {
          type: _shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]
        }, {
          type: _services_user_settings_service__WEBPACK_IMPORTED_MODULE_6__["UserSettingsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/game-munchkin/game-munchkin.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/games/game-munchkin/game-munchkin.module.ts ***!
    \*************************************************************/

  /*! exports provided: GameMunchkinModule */

  /***/
  function srcAppGamesGameMunchkinGameMunchkinModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameMunchkinModule", function () {
      return GameMunchkinModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/chat/chat.module */
    "./src/app/shared/chat/chat.module.ts");
    /* harmony import */


    var _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared-ui.module */
    "./src/app/shared/shared-ui.module.ts");
    /* harmony import */


    var _game_munchkin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game-munchkin.component */
    "./src/app/games/game-munchkin/game-munchkin.component.ts");
    /* harmony import */


    var _game_munchkin_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./game-munchkin.routes */
    "./src/app/games/game-munchkin/game-munchkin.routes.ts");
    /* harmony import */


    var _game_munchkin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game-munchkin.service */
    "./src/app/games/game-munchkin/game-munchkin.service.ts");
    /* harmony import */


    var _munchkin_board_munchkin_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./munchkin-board/munchkin-board.component */
    "./src/app/games/game-munchkin/munchkin-board/munchkin-board.component.ts");
    /* harmony import */


    var _munchkin_players_munchkin_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./munchkin-players/munchkin-players.component */
    "./src/app/games/game-munchkin/munchkin-players/munchkin-players.component.ts");

    var GameMunchkinModule = function GameMunchkinModule() {
      _classCallCheck(this, GameMunchkinModule);
    };

    GameMunchkinModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GameMunchkinModule
    });
    GameMunchkinModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GameMunchkinModule_Factory(t) {
        return new (t || GameMunchkinModule)();
      },
      providers: [_game_munchkin_service__WEBPACK_IMPORTED_MODULE_6__["GameMunchkinService"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_game_munchkin_routes__WEBPACK_IMPORTED_MODULE_5__["gameMunchkinRoutes"]), _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"], _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GameMunchkinModule, {
        declarations: [_game_munchkin_component__WEBPACK_IMPORTED_MODULE_4__["GameMunchkinComponent"], _munchkin_board_munchkin_board_component__WEBPACK_IMPORTED_MODULE_7__["MunchkinBoardComponent"], _munchkin_players_munchkin_players_component__WEBPACK_IMPORTED_MODULE_8__["MunchkinPlayersComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"], _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]],
        exports: [_game_munchkin_component__WEBPACK_IMPORTED_MODULE_4__["GameMunchkinComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMunchkinModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_game_munchkin_routes__WEBPACK_IMPORTED_MODULE_5__["gameMunchkinRoutes"]), _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"], _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]],
          declarations: [_game_munchkin_component__WEBPACK_IMPORTED_MODULE_4__["GameMunchkinComponent"], _munchkin_board_munchkin_board_component__WEBPACK_IMPORTED_MODULE_7__["MunchkinBoardComponent"], _munchkin_players_munchkin_players_component__WEBPACK_IMPORTED_MODULE_8__["MunchkinPlayersComponent"]],
          providers: [_game_munchkin_service__WEBPACK_IMPORTED_MODULE_6__["GameMunchkinService"]],
          exports: [_game_munchkin_component__WEBPACK_IMPORTED_MODULE_4__["GameMunchkinComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/game-munchkin/game-munchkin.routes.ts":
  /*!*************************************************************!*\
    !*** ./src/app/games/game-munchkin/game-munchkin.routes.ts ***!
    \*************************************************************/

  /*! exports provided: gameMunchkinRoutes */

  /***/
  function srcAppGamesGameMunchkinGameMunchkinRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gameMunchkinRoutes", function () {
      return gameMunchkinRoutes;
    });
    /* harmony import */


    var _game_munchkin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./game-munchkin.component */
    "./src/app/games/game-munchkin/game-munchkin.component.ts");

    var gameMunchkinRoutes = [{
      path: ':gameId',
      component: _game_munchkin_component__WEBPACK_IMPORTED_MODULE_0__["GameMunchkinComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/games/game-munchkin/game-munchkin.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/games/game-munchkin/game-munchkin.service.ts ***!
    \**************************************************************/

  /*! exports provided: GameMunchkinService */

  /***/
  function srcAppGamesGameMunchkinGameMunchkinServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameMunchkinService", function () {
      return GameMunchkinService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/configuration.service */
    "./src/app/services/configuration.service.ts");

    var GameMunchkinService = /*#__PURE__*/function () {
      function GameMunchkinService(httpClient, configurationService) {
        _classCallCheck(this, GameMunchkinService);

        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.apiBaseUrl = "".concat(this.configurationService.configuration.apiUrl, "games/munchkin");
      }

      _createClass(GameMunchkinService, [{
        key: "joinGame",
        value: function joinGame(gameId) {
          return this.httpClient.post("".concat(this.apiBaseUrl, "/").concat(gameId, "/users"), null);
        }
      }, {
        key: "getGameById",
        value: function getGameById(gameId) {
          return this.httpClient.get("".concat(this.apiBaseUrl, "/").concat(gameId));
        }
      }]);

      return GameMunchkinService;
    }();

    GameMunchkinService.ɵfac = function GameMunchkinService_Factory(t) {
      return new (t || GameMunchkinService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]));
    };

    GameMunchkinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GameMunchkinService,
      factory: GameMunchkinService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameMunchkinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/game-munchkin/munchkin-board/munchkin-board.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/games/game-munchkin/munchkin-board/munchkin-board.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MunchkinBoardComponent */

  /***/
  function srcAppGamesGameMunchkinMunchkinBoardMunchkinBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunchkinBoardComponent", function () {
      return MunchkinBoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MunchkinBoardComponent = function MunchkinBoardComponent() {
      _classCallCheck(this, MunchkinBoardComponent);
    };

    MunchkinBoardComponent.ɵfac = function MunchkinBoardComponent_Factory(t) {
      return new (t || MunchkinBoardComponent)();
    };

    MunchkinBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MunchkinBoardComponent,
      selectors: [["bg-munchkin-board"]],
      decls: 1,
      vars: 0,
      template: function MunchkinBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Board\n");
        }
      },
      styles: ["[_nghost-%COMP%] {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLW11bmNoa2luL211bmNoa2luLWJvYXJkL211bmNoa2luLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLW11bmNoa2luL211bmNoa2luLWJvYXJkL211bmNoa2luLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWUtbXVuY2hraW4vbXVuY2hraW4tYm9hcmQvbXVuY2hraW4tYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MunchkinBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-munchkin-board',
          templateUrl: './munchkin-board.component.html',
          styleUrls: ['./munchkin-board.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/game-munchkin/munchkin-players/munchkin-players.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/games/game-munchkin/munchkin-players/munchkin-players.component.ts ***!
    \************************************************************************************/

  /*! exports provided: MunchkinPlayersComponent */

  /***/
  function srcAppGamesGameMunchkinMunchkinPlayersMunchkinPlayersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunchkinPlayersComponent", function () {
      return MunchkinPlayersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function MunchkinPlayersComponent_mat_card_0_mat_card_subtitle_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Me"), " ");
      }
    }

    function MunchkinPlayersComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MunchkinPlayersComponent_mat_card_0_mat_card_subtitle_5_Template, 3, 3, "mat-card-subtitle", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("my-card", player_r1.id === ctx_r0.myUserId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r1.id === ctx_r0.myUserId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "Level"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1.level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, "Cards in hands"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r1.cardIdsInHands.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 14, "Cards on table"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r1.cardIdsOnTable.length, " ");
      }
    }

    var MunchkinPlayersComponent = function MunchkinPlayersComponent() {
      _classCallCheck(this, MunchkinPlayersComponent);
    };

    MunchkinPlayersComponent.ɵfac = function MunchkinPlayersComponent_Factory(t) {
      return new (t || MunchkinPlayersComponent)();
    };

    MunchkinPlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MunchkinPlayersComponent,
      selectors: [["bg-munchkin-players"]],
      inputs: {
        players: "players",
        myUserId: "myUserId"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "player-card", 3, "my-card", 4, "ngFor", "ngForOf"], [1, "player-card"], ["mat-card-avatar", "", "svgIcon", "icon-user", 1, "player-card__avatar"], [1, "player-card__title"], [4, "ngIf"], ["fxFlex", "", 1, "player-card__property-name"], [1, "player-card__property-value"]],
      template: function MunchkinPlayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MunchkinPlayersComponent_mat_card_0_Template, 26, 16, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["[_nghost-%COMP%] {\n  background-color: #e5e5e5;\n}\n\n.player-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.player-card__property-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLW11bmNoa2luL211bmNoa2luLXBsYXllcnMvbXVuY2hraW4tcGxheWVycy5jb21wb25lbnQuc2NzcyIsImFwcHMvYm9hLWdhL3NyYy9hcHAvZ2FtZXMvZ2FtZS1tdW5jaGtpbi9tdW5jaGtpbi1wbGF5ZXJzL211bmNoa2luLXBsYXllcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFIaUI7QUNDbkI7O0FES0E7RUFDRSxZQVJtQjtBQ01yQjs7QURLQTtFQUNFLGlCQUFBO0FDRkYiLCJmaWxlIjoiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLW11bmNoa2luL211bmNoa2luLXBsYXllcnMvbXVuY2hraW4tcGxheWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwbGF5ZXItY2FyZC1tYXJnaW46IDEwcHg7XG4kYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLnBsYXllci1jYXJkIHtcbiAgbWFyZ2luOiAkcGxheWVyLWNhcmQtbWFyZ2luO1xufVxuXG4ucGxheWVyLWNhcmRfX3Byb3BlcnR5LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBsYXllci1jYXJkX19wcm9wZXJ0eS12YWx1ZSB7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG5cbi5wbGF5ZXItY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnBsYXllci1jYXJkX19wcm9wZXJ0eS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MunchkinPlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-munchkin-players',
          templateUrl: './munchkin-players.component.html',
          styleUrls: ['./munchkin-players.component.scss']
        }]
      }], null, {
        players: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        myUserId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=game-munchkin-game-munchkin-module-es5.js.map