(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-test-game-test-module"],{

/***/ "./src/app/games/game-test/game-test.component.ts":
/*!********************************************************!*\
  !*** ./src/app/games/game-test/game-test.component.ts ***!
  \********************************************************/
/*! exports provided: GameTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTestComponent", function() { return GameTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @boa-ga/api-interfaces */ "../../libs/api-interfaces/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_user_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-settings.service */ "./src/app/services/user-settings.service.ts");
/* harmony import */ var _shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/chat/chat.service */ "./src/app/shared/chat/chat.service.ts");
/* harmony import */ var _game_test_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-test.service */ "./src/app/games/game-test/game-test.service.ts");
/* harmony import */ var _test_players_test_players_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-players/test-players.component */ "./src/app/games/game-test/test-players/test-players.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _test_board_test_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test-board/test-board.component */ "./src/app/games/game-test/test-board/test-board.component.ts");
/* harmony import */ var _shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/chat/chat.component */ "./src/app/shared/chat/chat.component.ts");



















class GameTestComponent {
    constructor(route, socketService, gameTestService, chatService, userSettingsService) {
        this.route = route;
        this.socketService = socketService;
        this.gameTestService = gameTestService;
        this.chatService = chatService;
        this.userSettingsService = userSettingsService;
        this.tearDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((params) => (this.gameId = params.gameId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.gameTestService.joinGame(this.gameId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$))
            .subscribe();
        this.userSettingsService.userSettings$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$))
            .subscribe((settings) => (this.chatService.myName = settings.name));
        this.socketService
            .listen(_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ChatSendMessageAction"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$))
            .subscribe((action) => this.chatService.sendMessage(action.payload.from, action.payload.text));
        this.chatService.myMessages$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$))
            .subscribe((text) => {
            const sendMessageAction = new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ChatSendMessageAction"]({
                gameId: this.gameId,
                from: this.chatService.myName,
                text,
            });
            this.socketService.emit(sendMessageAction);
        });
    }
    ngOnDestroy() {
        if (this.gameId) {
            this.socketService.emit(new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["LeaveGameAction"](this.gameId));
        }
        this.tearDown$.next();
        this.tearDown$.complete();
    }
}
GameTestComponent.ɵfac = function GameTestComponent_Factory(t) { return new (t || GameTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_test_service__WEBPACK_IMPORTED_MODULE_8__["GameTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_settings_service__WEBPACK_IMPORTED_MODULE_6__["UserSettingsService"])); };
GameTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameTestComponent, selectors: [["bg-game-test"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]])], decls: 4, vars: 0, consts: [["fxFlex", "250px"], ["fxFlex", "", "fxLayout", "column"], ["fxFlex", ""], ["fxFlex", "0 0 300px"]], template: function GameTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bg-test-players", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "bg-test-board", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "bg-chat", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_test_players_test_players_component__WEBPACK_IMPORTED_MODULE_9__["TestPlayersComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _test_board_test_board_component__WEBPACK_IMPORTED_MODULE_11__["TestBoardComponent"], _shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"]], styles: ["[_nghost-%COMP%] {\n  height: calc(100vh - 64px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLXRlc3QvZ2FtZS10ZXN0LmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLXRlc3QvZ2FtZS10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQUE7QUNERiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWUtdGVzdC9nYW1lLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSk7XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bg-game-test',
                templateUrl: './game-test.component.html',
                styleUrls: ['./game-test.component.scss'],
                providers: [_shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: _game_test_service__WEBPACK_IMPORTED_MODULE_8__["GameTestService"] }, { type: _shared_chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"] }, { type: _services_user_settings_service__WEBPACK_IMPORTED_MODULE_6__["UserSettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/games/game-test/game-test.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/games/game-test/game-test.module.ts ***!
  \*****************************************************/
/*! exports provided: GameTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTestModule", function() { return GameTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/chat/chat.module */ "./src/app/shared/chat/chat.module.ts");
/* harmony import */ var _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared-ui.module */ "./src/app/shared/shared-ui.module.ts");
/* harmony import */ var _game_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-test.component */ "./src/app/games/game-test/game-test.component.ts");
/* harmony import */ var _game_test_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-test.routes */ "./src/app/games/game-test/game-test.routes.ts");
/* harmony import */ var _game_test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-test.service */ "./src/app/games/game-test/game-test.service.ts");
/* harmony import */ var _test_board_test_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-board/test-board.component */ "./src/app/games/game-test/test-board/test-board.component.ts");
/* harmony import */ var _test_players_test_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-players/test-players.component */ "./src/app/games/game-test/test-players/test-players.component.ts");











class GameTestModule {
}
GameTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GameTestModule });
GameTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GameTestModule_Factory(t) { return new (t || GameTestModule)(); }, providers: [_game_test_service__WEBPACK_IMPORTED_MODULE_6__["GameTestService"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_game_test_routes__WEBPACK_IMPORTED_MODULE_5__["gameTestRoutes"]), _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"], _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GameTestModule, { declarations: [_game_test_component__WEBPACK_IMPORTED_MODULE_4__["GameTestComponent"], _test_players_test_players_component__WEBPACK_IMPORTED_MODULE_8__["TestPlayersComponent"], _test_board_test_board_component__WEBPACK_IMPORTED_MODULE_7__["TestBoardComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"], _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]], exports: [_game_test_component__WEBPACK_IMPORTED_MODULE_4__["GameTestComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_game_test_routes__WEBPACK_IMPORTED_MODULE_5__["gameTestRoutes"]), _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"], _shared_chat_chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]],
                declarations: [_game_test_component__WEBPACK_IMPORTED_MODULE_4__["GameTestComponent"], _test_players_test_players_component__WEBPACK_IMPORTED_MODULE_8__["TestPlayersComponent"], _test_board_test_board_component__WEBPACK_IMPORTED_MODULE_7__["TestBoardComponent"]],
                providers: [_game_test_service__WEBPACK_IMPORTED_MODULE_6__["GameTestService"]],
                exports: [_game_test_component__WEBPACK_IMPORTED_MODULE_4__["GameTestComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/games/game-test/game-test.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/games/game-test/game-test.routes.ts ***!
  \*****************************************************/
/*! exports provided: gameTestRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameTestRoutes", function() { return gameTestRoutes; });
/* harmony import */ var _game_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-test.component */ "./src/app/games/game-test/game-test.component.ts");

const gameTestRoutes = [
    {
        path: ':gameId',
        component: _game_test_component__WEBPACK_IMPORTED_MODULE_0__["GameTestComponent"],
    },
];


/***/ }),

/***/ "./src/app/games/game-test/game-test.service.ts":
/*!******************************************************!*\
  !*** ./src/app/games/game-test/game-test.service.ts ***!
  \******************************************************/
/*! exports provided: GameTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTestService", function() { return GameTestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configuration.service */ "./src/app/services/configuration.service.ts");






class GameTestService {
    constructor(httpClient, configurationService) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.apiBaseUrl = `${this.configurationService.configuration.apiUrl}games/test`;
    }
    joinGame(gameId) {
        return this.httpClient.post(`${this.apiBaseUrl}/${gameId}/users`, null);
    }
}
GameTestService.ɵfac = function GameTestService_Factory(t) { return new (t || GameTestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"])); };
GameTestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameTestService, factory: GameTestService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameTestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/games/game-test/test-board/test-board.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/games/game-test/test-board/test-board.component.ts ***!
  \********************************************************************/
/*! exports provided: TestBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBoardComponent", function() { return TestBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestBoardComponent {
}
TestBoardComponent.ɵfac = function TestBoardComponent_Factory(t) { return new (t || TestBoardComponent)(); };
TestBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestBoardComponent, selectors: [["bg-test-board"]], decls: 1, vars: 0, template: function TestBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Board\n");
    } }, styles: ["[_nghost-%COMP%] {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLXRlc3QvdGVzdC1ib2FyZC90ZXN0LWJvYXJkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lLXRlc3QvdGVzdC1ib2FyZC90ZXN0LWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWUtdGVzdC90ZXN0LWJvYXJkL3Rlc3QtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bg-test-board',
                templateUrl: './test-board.component.html',
                styleUrls: ['./test-board.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/games/game-test/test-players/test-players.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/games/game-test/test-players/test-players.component.ts ***!
  \************************************************************************/
/*! exports provided: TestPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPlayersComponent", function() { return TestPlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestPlayersComponent {
}
TestPlayersComponent.ɵfac = function TestPlayersComponent_Factory(t) { return new (t || TestPlayersComponent)(); };
TestPlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestPlayersComponent, selectors: [["bg-test-players"]], decls: 1, vars: 0, template: function TestPlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Players\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWUtdGVzdC90ZXN0LXBsYXllcnMvdGVzdC1wbGF5ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bg-test-players',
                templateUrl: './test-players.component.html',
                styleUrls: ['./test-players.component.scss'],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=game-test-game-test-module-es2015.js.map