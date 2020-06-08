function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../libs/api-interfaces/src/index.ts":
  /*!************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/index.ts ***!
    \************************************************************************/

  /*! exports provided: ChatSendMessagePayload, ChatSendMessageAction, ErrorResponseAction, LeaveGameAction, UserGameRelationPayload, GameUserJoinedAction, GameUserLeftAction, GameCreatedAction, GameRemovedAction, GameType, SlotType, EffectType, MunchkinCardId, MunchkinCards, MunchkinCardsDeck, UserRequestConnectionPayload, UserRequestConnectionAction, UserConnectionApprovedAction, UserConnectionDeniedAction, UserDataChangedPayload, UserDataChangedAction */

  /***/
  function libsApiInterfacesSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/chat */
    "../../libs/api-interfaces/src/lib/chat/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChatSendMessagePayload", function () {
      return _lib_chat__WEBPACK_IMPORTED_MODULE_0__["ChatSendMessagePayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChatSendMessageAction", function () {
      return _lib_chat__WEBPACK_IMPORTED_MODULE_0__["ChatSendMessageAction"];
    });
    /* harmony import */


    var _lib_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/error */
    "../../libs/api-interfaces/src/lib/error/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorResponseAction", function () {
      return _lib_error__WEBPACK_IMPORTED_MODULE_1__["ErrorResponseAction"];
    });
    /* harmony import */


    var _lib_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/game */
    "../../libs/api-interfaces/src/lib/game/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LeaveGameAction", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["LeaveGameAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserGameRelationPayload", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["UserGameRelationPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameUserJoinedAction", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["GameUserJoinedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameUserLeftAction", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["GameUserLeftAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameCreatedAction", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["GameCreatedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameRemovedAction", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["GameRemovedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameType", function () {
      return _lib_game__WEBPACK_IMPORTED_MODULE_2__["GameType"];
    });
    /* harmony import */


    var _lib_game_munchkin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/game-munchkin */
    "../../libs/api-interfaces/src/lib/game-munchkin/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlotType", function () {
      return _lib_game_munchkin__WEBPACK_IMPORTED_MODULE_3__["SlotType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EffectType", function () {
      return _lib_game_munchkin__WEBPACK_IMPORTED_MODULE_3__["EffectType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCardId", function () {
      return _lib_game_munchkin__WEBPACK_IMPORTED_MODULE_3__["MunchkinCardId"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCards", function () {
      return _lib_game_munchkin__WEBPACK_IMPORTED_MODULE_3__["MunchkinCards"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCardsDeck", function () {
      return _lib_game_munchkin__WEBPACK_IMPORTED_MODULE_3__["MunchkinCardsDeck"];
    });
    /* harmony import */


    var _lib_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/user */
    "../../libs/api-interfaces/src/lib/user/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRequestConnectionPayload", function () {
      return _lib_user__WEBPACK_IMPORTED_MODULE_4__["UserRequestConnectionPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRequestConnectionAction", function () {
      return _lib_user__WEBPACK_IMPORTED_MODULE_4__["UserRequestConnectionAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserConnectionApprovedAction", function () {
      return _lib_user__WEBPACK_IMPORTED_MODULE_4__["UserConnectionApprovedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserConnectionDeniedAction", function () {
      return _lib_user__WEBPACK_IMPORTED_MODULE_4__["UserConnectionDeniedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserDataChangedPayload", function () {
      return _lib_user__WEBPACK_IMPORTED_MODULE_4__["UserDataChangedPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserDataChangedAction", function () {
      return _lib_user__WEBPACK_IMPORTED_MODULE_4__["UserDataChangedAction"];
    });
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/chat/chat-actions.ts":
  /*!****************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/chat/chat-actions.ts ***!
    \****************************************************************************************/

  /*! exports provided: ChatSendMessagePayload, ChatSendMessageAction */

  /***/
  function libsApiInterfacesSrcLibChatChatActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSendMessagePayload", function () {
      return ChatSendMessagePayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSendMessageAction", function () {
      return ChatSendMessageAction;
    });

    var ChatSendMessagePayload = function ChatSendMessagePayload() {
      _classCallCheck(this, ChatSendMessagePayload);
    };

    var ChatSendMessageAction = function ChatSendMessageAction(payload) {
      _classCallCheck(this, ChatSendMessageAction);

      this.payload = payload;
      this.type = '[Chat] Send message';
    };
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/chat/index.ts":
  /*!*********************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/chat/index.ts ***!
    \*********************************************************************************/

  /*! exports provided: ChatSendMessagePayload, ChatSendMessageAction */

  /***/
  function libsApiInterfacesSrcLibChatIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _chat_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chat-actions */
    "../../libs/api-interfaces/src/lib/chat/chat-actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChatSendMessagePayload", function () {
      return _chat_actions__WEBPACK_IMPORTED_MODULE_0__["ChatSendMessagePayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChatSendMessageAction", function () {
      return _chat_actions__WEBPACK_IMPORTED_MODULE_0__["ChatSendMessageAction"];
    });
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/error/error-actions.ts":
  /*!******************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/error/error-actions.ts ***!
    \******************************************************************************************/

  /*! exports provided: ErrorResponseAction */

  /***/
  function libsApiInterfacesSrcLibErrorErrorActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorResponseAction", function () {
      return ErrorResponseAction;
    });

    var ErrorResponseAction = function ErrorResponseAction(payload) {
      _classCallCheck(this, ErrorResponseAction);

      this.payload = payload;
      this.type = '[Error] Error response';
    };
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/error/index.ts":
  /*!**********************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/error/index.ts ***!
    \**********************************************************************************/

  /*! exports provided: ErrorResponseAction */

  /***/
  function libsApiInterfacesSrcLibErrorIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _error_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./error-actions */
    "../../libs/api-interfaces/src/lib/error/error-actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorResponseAction", function () {
      return _error_actions__WEBPACK_IMPORTED_MODULE_0__["ErrorResponseAction"];
    });
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/game-munchkin/card.ts":
  /*!*****************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game-munchkin/card.ts ***!
    \*****************************************************************************************/

  /*! exports provided: SlotType, EffectType */

  /***/
  function libsApiInterfacesSrcLibGameMunchkinCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlotType", function () {
      return SlotType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EffectType", function () {
      return EffectType;
    });

    var SlotType;

    (function (SlotType) {
      SlotType[SlotType["None"] = 0] = "None";
      SlotType[SlotType["Head"] = 1] = "Head";
      SlotType[SlotType["Body"] = 2] = "Body";
      SlotType[SlotType["OneArm"] = 3] = "OneArm";
      SlotType[SlotType["Arms"] = 4] = "Arms";
      SlotType[SlotType["Legs"] = 5] = "Legs";
    })(SlotType || (SlotType = {}));

    var EffectType;

    (function (EffectType) {
      EffectType[EffectType["None"] = 0] = "None";
      EffectType[EffectType["Curse"] = 1] = "Curse";
      EffectType[EffectType["Race"] = 2] = "Race";
      EffectType[EffectType["Class"] = 3] = "Class";
    })(EffectType || (EffectType = {}));
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-card-id.ts":
  /*!***********************************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-card-id.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: MunchkinCardId */

  /***/
  function libsApiInterfacesSrcLibGameMunchkinCardsMunchkinCardIdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCardId", function () {
      return MunchkinCardId;
    });

    var MunchkinCardId;

    (function (MunchkinCardId) {
      MunchkinCardId["HelmOfCourage"] = "HelmOfCourage";
    })(MunchkinCardId || (MunchkinCardId = {}));
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-cards-deck.ts":
  /*!**************************************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-cards-deck.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: MunchkinCardsDeck */

  /***/
  function libsApiInterfacesSrcLibGameMunchkinCardsMunchkinCardsDeckTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCardsDeck", function () {
      return MunchkinCardsDeck;
    });
    /* harmony import */


    var _munchkin_card_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./munchkin-card-id */
    "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-card-id.ts");

    var MunchkinCardsDeck = [_munchkin_card_id__WEBPACK_IMPORTED_MODULE_0__["MunchkinCardId"].HelmOfCourage];
    /***/
  },

  /***/
  "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-cards.ts":
  /*!*********************************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-cards.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: MunchkinCards */

  /***/
  function libsApiInterfacesSrcLibGameMunchkinCardsMunchkinCardsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCards", function () {
      return MunchkinCards;
    });
    /* harmony import */


    var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../card */
    "../../libs/api-interfaces/src/lib/game-munchkin/card.ts");
    /* harmony import */


    var _munchkin_card_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./munchkin-card-id */
    "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-card-id.ts");

    var MunchkinCards = [{
      id: _munchkin_card_id__WEBPACK_IMPORTED_MODULE_1__["MunchkinCardId"].HelmOfCourage,
      name: 'Helm of courage',
      description: 'Simple but good helmet',
      price: 200,
      slotType: _card__WEBPACK_IMPORTED_MODULE_0__["SlotType"].Head,
      canBeUsed: function canBeUsed(player) {
        return true;
      },
      use: function use(player) {// player.attackStrength += 1;
      }
    }];
    /***/
  },

  /***/
  "../../libs/api-interfaces/src/lib/game-munchkin/index.ts":
  /*!******************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game-munchkin/index.ts ***!
    \******************************************************************************************/

  /*! exports provided: SlotType, EffectType, MunchkinCardId, MunchkinCards, MunchkinCardsDeck */

  /***/
  function libsApiInterfacesSrcLibGameMunchkinIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./card */
    "../../libs/api-interfaces/src/lib/game-munchkin/card.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlotType", function () {
      return _card__WEBPACK_IMPORTED_MODULE_0__["SlotType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EffectType", function () {
      return _card__WEBPACK_IMPORTED_MODULE_0__["EffectType"];
    });
    /* harmony import */


    var _cards_munchkin_card_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cards/munchkin-card-id */
    "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-card-id.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCardId", function () {
      return _cards_munchkin_card_id__WEBPACK_IMPORTED_MODULE_1__["MunchkinCardId"];
    });
    /* harmony import */


    var _cards_munchkin_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cards/munchkin-cards */
    "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-cards.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCards", function () {
      return _cards_munchkin_cards__WEBPACK_IMPORTED_MODULE_2__["MunchkinCards"];
    });
    /* harmony import */


    var _cards_munchkin_cards_deck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cards/munchkin-cards-deck */
    "../../libs/api-interfaces/src/lib/game-munchkin/cards/munchkin-cards-deck.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MunchkinCardsDeck", function () {
      return _cards_munchkin_cards_deck__WEBPACK_IMPORTED_MODULE_3__["MunchkinCardsDeck"];
    });
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/game/game-actions.ts":
  /*!****************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game/game-actions.ts ***!
    \****************************************************************************************/

  /*! exports provided: LeaveGameAction, UserGameRelationPayload, GameUserJoinedAction, GameUserLeftAction, GameCreatedAction, GameRemovedAction */

  /***/
  function libsApiInterfacesSrcLibGameGameActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveGameAction", function () {
      return LeaveGameAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGameRelationPayload", function () {
      return UserGameRelationPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameUserJoinedAction", function () {
      return GameUserJoinedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameUserLeftAction", function () {
      return GameUserLeftAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameCreatedAction", function () {
      return GameCreatedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameRemovedAction", function () {
      return GameRemovedAction;
    });

    var LeaveGameAction = function LeaveGameAction(payload) {
      _classCallCheck(this, LeaveGameAction);

      this.payload = payload;
      this.type = '[Game] Leave game';
    };

    var UserGameRelationPayload = function UserGameRelationPayload() {
      _classCallCheck(this, UserGameRelationPayload);
    };

    var GameUserJoinedAction = function GameUserJoinedAction(payload) {
      _classCallCheck(this, GameUserJoinedAction);

      this.payload = payload;
      this.type = '[Game] User joined the game';
    };

    var GameUserLeftAction = function GameUserLeftAction(payload) {
      _classCallCheck(this, GameUserLeftAction);

      this.payload = payload;
      this.type = '[Game] User left the game';
    };

    var GameCreatedAction = function GameCreatedAction(payload) {
      _classCallCheck(this, GameCreatedAction);

      this.payload = payload;
      this.type = '[Game] New game created';
    };

    var GameRemovedAction = function GameRemovedAction(payload) {
      _classCallCheck(this, GameRemovedAction);

      this.payload = payload;
      this.type = '[Game] Game removed';
    };
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/game/game-type.enum.ts":
  /*!******************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game/game-type.enum.ts ***!
    \******************************************************************************************/

  /*! exports provided: GameType */

  /***/
  function libsApiInterfacesSrcLibGameGameTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameType", function () {
      return GameType;
    });

    var GameType;

    (function (GameType) {
      GameType[GameType["Test"] = 0] = "Test";
      GameType[GameType["Munchkin"] = 1] = "Munchkin";
    })(GameType || (GameType = {}));
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/game/index.ts":
  /*!*********************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/game/index.ts ***!
    \*********************************************************************************/

  /*! exports provided: LeaveGameAction, UserGameRelationPayload, GameUserJoinedAction, GameUserLeftAction, GameCreatedAction, GameRemovedAction, GameType */

  /***/
  function libsApiInterfacesSrcLibGameIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _game_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./game-actions */
    "../../libs/api-interfaces/src/lib/game/game-actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LeaveGameAction", function () {
      return _game_actions__WEBPACK_IMPORTED_MODULE_0__["LeaveGameAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserGameRelationPayload", function () {
      return _game_actions__WEBPACK_IMPORTED_MODULE_0__["UserGameRelationPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameUserJoinedAction", function () {
      return _game_actions__WEBPACK_IMPORTED_MODULE_0__["GameUserJoinedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameUserLeftAction", function () {
      return _game_actions__WEBPACK_IMPORTED_MODULE_0__["GameUserLeftAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameCreatedAction", function () {
      return _game_actions__WEBPACK_IMPORTED_MODULE_0__["GameCreatedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameRemovedAction", function () {
      return _game_actions__WEBPACK_IMPORTED_MODULE_0__["GameRemovedAction"];
    });
    /* harmony import */


    var _game_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./game-type.enum */
    "../../libs/api-interfaces/src/lib/game/game-type.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameType", function () {
      return _game_type_enum__WEBPACK_IMPORTED_MODULE_1__["GameType"];
    });
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/user/index.ts":
  /*!*********************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/user/index.ts ***!
    \*********************************************************************************/

  /*! exports provided: UserRequestConnectionPayload, UserRequestConnectionAction, UserConnectionApprovedAction, UserConnectionDeniedAction, UserDataChangedPayload, UserDataChangedAction */

  /***/
  function libsApiInterfacesSrcLibUserIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-actions */
    "../../libs/api-interfaces/src/lib/user/user-actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRequestConnectionPayload", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserRequestConnectionPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRequestConnectionAction", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserRequestConnectionAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserConnectionApprovedAction", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserConnectionApprovedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserConnectionDeniedAction", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserConnectionDeniedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserDataChangedPayload", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserDataChangedPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserDataChangedAction", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserDataChangedAction"];
    });
    /***/

  },

  /***/
  "../../libs/api-interfaces/src/lib/user/user-actions.ts":
  /*!****************************************************************************************!*\
    !*** /home/runner/work/boa-ga/boa-ga/libs/api-interfaces/src/lib/user/user-actions.ts ***!
    \****************************************************************************************/

  /*! exports provided: UserRequestConnectionPayload, UserRequestConnectionAction, UserConnectionApprovedAction, UserConnectionDeniedAction, UserDataChangedPayload, UserDataChangedAction */

  /***/
  function libsApiInterfacesSrcLibUserUserActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRequestConnectionPayload", function () {
      return UserRequestConnectionPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRequestConnectionAction", function () {
      return UserRequestConnectionAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserConnectionApprovedAction", function () {
      return UserConnectionApprovedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserConnectionDeniedAction", function () {
      return UserConnectionDeniedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataChangedPayload", function () {
      return UserDataChangedPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataChangedAction", function () {
      return UserDataChangedAction;
    });

    var UserRequestConnectionPayload = function UserRequestConnectionPayload() {
      _classCallCheck(this, UserRequestConnectionPayload);
    };

    var UserRequestConnectionAction = function UserRequestConnectionAction(payload) {
      _classCallCheck(this, UserRequestConnectionAction);

      this.payload = payload;
      this.type = '[User] Connection request';
    };

    var UserConnectionApprovedAction = function UserConnectionApprovedAction(payload) {
      _classCallCheck(this, UserConnectionApprovedAction);

      this.payload = payload;
      this.type = '[User] Connection granted';
    };

    var UserConnectionDeniedAction = function UserConnectionDeniedAction(payload) {
      _classCallCheck(this, UserConnectionDeniedAction);

      this.payload = payload;
      this.type = '[User] Connection denied';
    };

    var UserDataChangedPayload = function UserDataChangedPayload() {
      _classCallCheck(this, UserDataChangedPayload);
    };

    var UserDataChangedAction = function UserDataChangedAction(payload) {
      _classCallCheck(this, UserDataChangedAction);

      this.payload = payload;
      this.type = '[User] User data changed';
    };
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angulartics2_gtm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angulartics2/gtm */
    "../../node_modules/angulartics2/__ivy_ngcc__/gtm/fesm2015/angulartics2-gtm.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_analytics_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/analytics-loader.service */
    "./src/app/services/analytics-loader.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/configuration.service */
    "./src/app/services/configuration.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_user_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/user-settings.service */
    "./src/app/services/user-settings.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(matIconRegistry, domSanitizer, translate, angulartics, userSettingsService, socketService, authService, notificationService, configurationService, analyticsLoaderService) {
        _classCallCheck(this, AppComponent);

        this.tearDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"](); // analytics

        analyticsLoaderService.loadAll();
        angulartics.startTracking();
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/svg/sprite.svg'));
        socketService.init();
        socketService.error$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.tearDown$)).subscribe(function (error) {
          return notificationService.showMessage(error);
        });
        authService.init().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.tearDown$)).subscribe();
        userSettingsService.init();
        translate.setDefaultLang(configurationService.configuration.supportedLanguages[0]);
        userSettingsService.userSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.tearDown$)).subscribe(function (userSettings) {
          translate.addLangs(userSettings.availableLanguages);
          socketService.emit(new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["UserRequestConnectionAction"]({
            user: {
              id: userSettings.id,
              name: userSettings.name,
              language: userSettings.language
            },
            password: userSettings.password
          }));
        });
        userSettingsService.userSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (s) {
          return s.language;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.tearDown$)).subscribe(function (selectedLanguage) {
          return translate.use(selectedLanguage);
        });
        socketService.listen(_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["ErrorResponseAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.tearDown$)).subscribe(function (action) {
          return notificationService.showMessage(action.payload);
        });
        socketService.listenAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.tearDown$)).subscribe(function (action) {
          return console.log("".concat(action.type, " ").concat(JSON.stringify(action.payload)));
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tearDown$.next();
          this.tearDown$.complete();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angulartics2_gtm__WEBPACK_IMPORTED_MODULE_5__["Angulartics2GoogleTagManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_settings_service__WEBPACK_IMPORTED_MODULE_13__["UserSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_12__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_analytics_loader_service__WEBPACK_IMPORTED_MODULE_8__["AnalyticsLoaderService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["bg-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bg-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: angulartics2_gtm__WEBPACK_IMPORTED_MODULE_5__["Angulartics2GoogleTagManager"]
        }, {
          type: _services_user_settings_service__WEBPACK_IMPORTED_MODULE_13__["UserSettingsService"]
        }, {
          type: _services_socket_service__WEBPACK_IMPORTED_MODULE_12__["SocketService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"]
        }, {
          type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationService"]
        }, {
          type: _services_analytics_loader_service__WEBPACK_IMPORTED_MODULE_8__["AnalyticsLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angulartics2 */
    "../../node_modules/angulartics2/__ivy_ngcc__/fesm2015/angulartics2.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _games_games_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./games/games.module */
    "./src/app/games/games.module.ts");
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.module */
    "./src/app/header/header.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _services_custom_error_handler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/custom-error-handler */
    "./src/app/services/custom-error-handler.ts");
    /* harmony import */


    var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/error.interceptor */
    "./src/app/services/error.interceptor.ts");
    /* harmony import */


    var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/token.interceptor */
    "./src/app/services/token.interceptor.ts");
    /* harmony import */


    var _services_translate_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/translate-loader.service */
    "./src/app/services/translate-loader.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
        useClass: _services_custom_error_handler__WEBPACK_IMPORTED_MODULE_13__["CustomErrorHandler"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["appRoutes"]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useClass: _services_translate_loader_service__WEBPACK_IMPORTED_MODULE_16__["TranslateLoaderService"]
        }
      }), angulartics2__WEBPACK_IMPORTED_MODULE_7__["Angulartics2Module"].forRoot(), _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _games_games_module__WEBPACK_IMPORTED_MODULE_10__["GamesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], angulartics2__WEBPACK_IMPORTED_MODULE_7__["Angulartics2Module"], _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _games_games_module__WEBPACK_IMPORTED_MODULE_10__["GamesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["appRoutes"]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
              useClass: _services_translate_loader_service__WEBPACK_IMPORTED_MODULE_16__["TranslateLoaderService"]
            }
          }), angulartics2__WEBPACK_IMPORTED_MODULE_7__["Angulartics2Module"].forRoot(), _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _games_games_module__WEBPACK_IMPORTED_MODULE_10__["GamesModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
            multi: true
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: _services_custom_error_handler__WEBPACK_IMPORTED_MODULE_13__["CustomErrorHandler"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var _games_games_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./games/games.routes */
    "./src/app/games/games.routes.ts");
    /* harmony import */


    var _home_home_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.routes */
    "./src/app/home/home.routes.ts");

    var appRoutes = [].concat(_toConsumableArray(_home_home_routes__WEBPACK_IMPORTED_MODULE_1__["homeRoutes"]), _toConsumableArray(_games_games_routes__WEBPACK_IMPORTED_MODULE_0__["gamesRoutes"]), [{
      path: '**',
      redirectTo: 'home'
    }]);
    /***/
  },

  /***/
  "./src/app/games/game-type-names.ts":
  /*!******************************************!*\
    !*** ./src/app/games/game-type-names.ts ***!
    \******************************************/

  /*! exports provided: GameTypeNames */

  /***/
  function srcAppGamesGameTypeNamesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _GameTypeNames;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameTypeNames", function () {
      return GameTypeNames;
    });
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var _utils_mark_for_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/mark-for-translation */
    "./src/app/utils/mark-for-translation.ts");

    var GameTypeNames = (_GameTypeNames = {}, _defineProperty(_GameTypeNames, _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["GameType"].Test, Object(_utils_mark_for_translation__WEBPACK_IMPORTED_MODULE_1__["markForTranslation"])('Test game')), _defineProperty(_GameTypeNames, _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["GameType"].Munchkin, Object(_utils_mark_for_translation__WEBPACK_IMPORTED_MODULE_1__["markForTranslation"])('Munchkin')), _GameTypeNames);
    /***/
  },

  /***/
  "./src/app/games/games-list/games-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/games/games-list/games-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: GamesListComponent */

  /***/
  function srcAppGamesGamesListGamesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesListComponent", function () {
      return GamesListComponent;
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


    var _game_type_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../game-type-names */
    "./src/app/games/game-type-names.ts");
    /* harmony import */


    var _games_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../games.service */
    "./src/app/games/games.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function GamesListComponent_table_0_tr_15_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var game_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", game_r4.maxPlayersNumber, " ");
      }
    }

    function GamesListComponent_table_0_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GamesListComponent_table_0_tr_15_ng_container_8_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesListComponent_table_0_tr_15_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var game_r4 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.joinGame(game_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r3.gameTypeName[game_r4.type]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx_r3.gameTypeIcons[game_r4.type]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r4.players.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r4.maxPlayersNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, game_r4.createdDate, "short"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "Join"), " ");
      }
    }

    function GamesListComponent_table_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function GamesListComponent_table_0_Template_table_matSortChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.sortData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GamesListComponent_table_0_tr_15_Template, 16, 14, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Column game type"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "Column game name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "Column game players"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "Column game created at"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.games);
      }
    }

    function GamesListComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 12);
      }
    }

    function GamesListComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "No running games"), "\n");
      }
    }

    var GamesListComponent = /*#__PURE__*/function () {
      function GamesListComponent(gamesService, socketService, router) {
        var _this$gameTypeIcons;

        _classCallCheck(this, GamesListComponent);

        this.gamesService = gamesService;
        this.socketService = socketService;
        this.router = router;
        this.gameTypeName = _game_type_names__WEBPACK_IMPORTED_MODULE_6__["GameTypeNames"];
        this.isLoading = true;
        this.games = [];
        this.gameTypeIcons = (_this$gameTypeIcons = {}, _defineProperty(_this$gameTypeIcons, _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameType"].Munchkin, 'icon-enter'), _defineProperty(_this$gameTypeIcons, _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameType"].Test, 'icon-bug'), _this$gameTypeIcons);
        this.tearDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(GamesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.socketService.listenAnyOf(_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameCreatedAction"], _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameRemovedAction"], _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameUserJoinedAction"], _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameUserLeftAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(-1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.gamesService.getAllRunningGames();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            return _this.isLoading = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$)).subscribe(function (games) {
            _this.isLoading = false;
            _this.games = games;
          }, function () {
            _this.isLoading = false;
          });
        }
      }, {
        key: "joinGame",
        value: function joinGame(game) {
          this.router.navigate(['games', _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameType"][game.type].toLowerCase(), game.id]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tearDown$.next();
          this.tearDown$.complete();
        }
      }, {
        key: "sortData",
        value: function sortData(sort) {
          var data = this.games.slice();

          if (!sort.active || sort.direction === '') {
            this.games = data;
            return;
          }

          this.games = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';

            switch (sort.active) {
              case 'type':
                return compare(a.type, b.type, isAsc);

              case 'name':
                return compare(a.name, b.name, isAsc);

              case 'players':
                return compare(a.players.length, b.players.length, isAsc);

              case 'created':
                return compare(a.createdDate.getDate(), b.createdDate.getDate(), isAsc);

              default:
                return 0;
            }
          });
        }
      }]);

      return GamesListComponent;
    }();

    GamesListComponent.ɵfac = function GamesListComponent_Factory(t) {
      return new (t || GamesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    GamesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GamesListComponent,
      selectors: [["bg-games-list"]],
      decls: 3,
      vars: 3,
      consts: [["matSort", "", "fxFlex", "0 0 100%", 3, "matSortChange", 4, "ngIf"], ["class", "list__spinner", 4, "ngIf"], ["fxFlex", "", 4, "ngIf"], ["matSort", "", "fxFlex", "0 0 100%", 3, "matSortChange"], ["mat-sort-header", "type"], ["mat-sort-header", "name"], ["mat-sort-header", "players"], ["mat-sort-header", "created"], [4, "ngFor", "ngForOf"], [3, "svgIcon", "title"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "list__spinner"], ["fxFlex", ""]],
      template: function GamesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GamesListComponent_table_0_Template, 16, 13, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamesListComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GamesListComponent_span_2_Template, 3, 3, "span", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.games.length && ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.games.length && !ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
      styles: [".list__spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWVzLWxpc3QvZ2FtZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2dhbWVzL2dhbWVzLWxpc3QvZ2FtZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0X19zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIiwiLmxpc3RfX3NwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-games-list',
          templateUrl: './games-list.component.html',
          styleUrls: ['./games-list.component.scss']
        }]
      }], function () {
        return [{
          type: _games_service__WEBPACK_IMPORTED_MODULE_7__["GamesService"]
        }, {
          type: _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    /***/

  },

  /***/
  "./src/app/games/games.component.ts":
  /*!******************************************!*\
    !*** ./src/app/games/games.component.ts ***!
    \******************************************/

  /*! exports provided: GamesComponent */

  /***/
  function srcAppGamesGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
      return GamesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./new-game/new-game.component */
    "./src/app/games/new-game/new-game.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./games-list/games-list.component */
    "./src/app/games/games-list/games-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var GamesComponent = /*#__PURE__*/function () {
      function GamesComponent(dialog) {
        _classCallCheck(this, GamesComponent);

        this.dialog = dialog;
      }

      _createClass(GamesComponent, [{
        key: "openStartNewGameDialog",
        value: function openStartNewGameDialog() {
          this.dialog.open(_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__["NewGameComponent"], {
            width: '300px'
          });
        }
      }]);

      return GamesComponent;
    }();

    GamesComponent.ɵfac = function GamesComponent_Factory(t) {
      return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GamesComponent,
      selectors: [["bg-games"]],
      decls: 8,
      vars: 6,
      consts: [[1, "games__container"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "games__list"]],
      template: function GamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_button_click_4_listener() {
            return ctx.openStartNewGameDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "bg-games-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "Running games list"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "Start new game"), " ");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_4__["GamesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".games__container[_ngcontent-%COMP%] {\n  width: 1012px;\n  margin: auto;\n}\n\n.games__list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2Nzcy9fbWl4aW5zLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9ib2EtZ2EvYm9hLWdhL2FwcHMvYm9hLWdhL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzIiwiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQ0RFLGFDRmU7RURHZixZQUFBO0FFREY7O0FIS0E7RUFDRSxnQkFQc0I7QUdLeEIiLCJmaWxlIjoiYXBwcy9ib2EtZ2Evc3JjL2FwcC9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy9taXhpbnMnO1xuXG4kZ2FtZXMtbGlzdC1tYXJnaW4tdG9wOiAyMHB4O1xuXG4uZ2FtZXNfX2NvbnRhaW5lciB7XG4gIEBpbmNsdWRlIHNldEZpeGVkV2lkdGg7XG59XG5cbi5nYW1lc19fbGlzdCB7XG4gIG1hcmdpbi10b3A6ICRnYW1lcy1saXN0LW1hcmdpbi10b3A7XG59XG4iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBzZXRGaXhlZFdpZHRoIHtcbiAgd2lkdGg6ICRkb2N1bWVudC13aWR0aDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIiwiJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kZG9jdW1lbnQtd2lkdGg6IDEwMTJweDtcbiIsIi5nYW1lc19fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZ2FtZXNfX2xpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-games',
          templateUrl: './games.component.html',
          styleUrls: ['./games.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/games.module.ts":
  /*!***************************************!*\
    !*** ./src/app/games/games.module.ts ***!
    \***************************************/

  /*! exports provided: GamesModule */

  /***/
  function srcAppGamesGamesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesModule", function () {
      return GamesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/shared-ui.module */
    "./src/app/shared/shared-ui.module.ts");
    /* harmony import */


    var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./games-list/games-list.component */
    "./src/app/games/games-list/games-list.component.ts");
    /* harmony import */


    var _games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./games.component */
    "./src/app/games/games.component.ts");
    /* harmony import */


    var _games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./games.service */
    "./src/app/games/games.service.ts");
    /* harmony import */


    var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-game/new-game.component */
    "./src/app/games/new-game/new-game.component.ts");

    var GamesModule = function GamesModule() {
      _classCallCheck(this, GamesModule);
    };

    GamesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GamesModule
    });
    GamesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GamesModule_Factory(t) {
        return new (t || GamesModule)();
      },
      providers: [_games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"]],
      imports: [[_shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamesModule, {
        declarations: [_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"], _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__["NewGameComponent"], _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__["GamesListComponent"]],
        imports: [_shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]],
        exports: [_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]],
          declarations: [_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"], _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__["NewGameComponent"], _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__["GamesListComponent"]],
          providers: [_games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"]],
          exports: [_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/games.routes.ts":
  /*!***************************************!*\
    !*** ./src/app/games/games.routes.ts ***!
    \***************************************/

  /*! exports provided: gamesRoutes */

  /***/
  function srcAppGamesGamesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gamesRoutes", function () {
      return gamesRoutes;
    });
    /* harmony import */


    var _games_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./games.component */
    "./src/app/games/games.component.ts");

    var gamesRoutes = [{
      path: 'games',
      children: [{
        path: '',
        component: _games_component__WEBPACK_IMPORTED_MODULE_0__["GamesComponent"]
      }, {
        path: 'munchkin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | game-munchkin-game-munchkin-module */
          [__webpack_require__.e("default~game-munchkin-game-munchkin-module~game-test-game-test-module"), __webpack_require__.e("game-munchkin-game-munchkin-module")]).then(__webpack_require__.bind(null,
          /*! ./game-munchkin/game-munchkin.module */
          "./src/app/games/game-munchkin/game-munchkin.module.ts")).then(function (m) {
            return m.GameMunchkinModule;
          });
        }
      }, {
        path: 'test',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | game-test-game-test-module */
          [__webpack_require__.e("default~game-munchkin-game-munchkin-module~game-test-game-test-module"), __webpack_require__.e("game-test-game-test-module")]).then(__webpack_require__.bind(null,
          /*! ./game-test/game-test.module */
          "./src/app/games/game-test/game-test.module.ts")).then(function (m) {
            return m.GameTestModule;
          });
        }
      }]
    }];
    /***/
  },

  /***/
  "./src/app/games/games.service.ts":
  /*!****************************************!*\
    !*** ./src/app/games/games.service.ts ***!
    \****************************************/

  /*! exports provided: GamesService */

  /***/
  function srcAppGamesGamesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesService", function () {
      return GamesService;
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
    /*! ../services/configuration.service */
    "./src/app/services/configuration.service.ts");

    var GamesService = /*#__PURE__*/function () {
      function GamesService(httpClient, configurationService) {
        _classCallCheck(this, GamesService);

        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.apiBaseUrl = "".concat(this.configurationService.configuration.apiUrl, "games");
      }

      _createClass(GamesService, [{
        key: "getAllRunningGames",
        value: function getAllRunningGames() {
          return this.httpClient.get("".concat(this.apiBaseUrl));
        }
      }, {
        key: "startNewTestGame",
        value: function startNewTestGame(createTestGameDto) {
          return this.httpClient.post("".concat(this.apiBaseUrl, "/test"), createTestGameDto, {
            responseType: 'text'
          });
        }
      }, {
        key: "startNewMunchkinGame",
        value: function startNewMunchkinGame(createMunchkinGameDto) {
          return this.httpClient.post("".concat(this.apiBaseUrl, "/munchkin"), createMunchkinGameDto, {
            responseType: 'text'
          });
        }
      }]);

      return GamesService;
    }();

    GamesService.ɵfac = function GamesService_Factory(t) {
      return new (t || GamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]));
    };

    GamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GamesService,
      factory: GamesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GamesService, [{
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
  "./src/app/games/new-game/new-game.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/games/new-game/new-game.component.ts ***!
    \******************************************************/

  /*! exports provided: NewGameComponent */

  /***/
  function srcAppGamesNewGameNewGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGameComponent", function () {
      return NewGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var _game_type_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../game-type-names */
    "./src/app/games/game-type-names.ts");
    /* harmony import */


    var _games_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../games.service */
    "./src/app/games/games.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function NewGameComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gameType_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gameType_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.gameTypeNames[gameType_r1]), " ");
      }
    }

    var NewGameComponent = /*#__PURE__*/function () {
      function NewGameComponent(dialogRef, router, gamesService) {
        _classCallCheck(this, NewGameComponent);

        this.dialogRef = dialogRef;
        this.router = router;
        this.gamesService = gamesService;
        this.gameTypeNames = _game_type_names__WEBPACK_IMPORTED_MODULE_4__["GameTypeNames"];
        this.gameTypes = [_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["GameType"].Munchkin, _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["GameType"].Test];
        this.selectedGameType = this.gameTypes[0];
      }

      _createClass(NewGameComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var startNewGame$;

          switch (this.selectedGameType) {
            case _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["GameType"].Munchkin:
              {
                var createGameDto = {
                  name: this.gameName
                };
                startNewGame$ = this.gamesService.startNewMunchkinGame(createGameDto);
                break;
              }

            case _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["GameType"].Test:
              {
                var _createGameDto = {
                  name: this.gameName
                };
                startNewGame$ = this.gamesService.startNewTestGame(_createGameDto);
                break;
              }
          }

          startNewGame$.subscribe(function (newGameId) {
            _this2.dialogRef.close();

            _this2.router.navigate(['games', _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["GameType"][_this2.selectedGameType].toLowerCase(), newGameId]);
          });
        }
      }]);

      return NewGameComponent;
    }();

    NewGameComponent.ɵfac = function NewGameComponent_Factory(t) {
      return new (t || NewGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"]));
    };

    NewGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewGameComponent,
      selectors: [["bg-new-game"]],
      decls: 19,
      vars: 18,
      consts: [[3, "ngSubmit"], ["mat-dialog-title", ""], ["fxFill", ""], ["matInput", "", "required", "", "name", "name", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["required", "", "name", "type", 3, "placeholder", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "end"], ["type", "button", "mat-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-button", "", "color", "primary"], [3, "value"]],
      template: function NewGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewGameComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewGameComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.gameName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewGameComponent_Template_mat_select_ngModelChange_9_listener($event) {
            return ctx.selectedGameType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewGameComponent_mat_option_11_Template, 3, 4, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "Start new game"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "Name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "Game type"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedGameType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 16, "Start"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexFillDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-new-game',
          templateUrl: './new-game.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _games_service__WEBPACK_IMPORTED_MODULE_5__["GamesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/about/about.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/header/about/about.component.ts ***!
    \*************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppHeaderAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutComponent = function AboutComponent() {
      _classCallCheck(this, AboutComponent);
    };

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["bg-about"]],
      decls: 27,
      vars: 12,
      consts: [["mat-dialog-title", ""], [1, "about__list"], [1, "about__list-item"], ["svgIcon", "icon-github", 1, "about__list-item-icon"], ["href", "https://github.com/pbazurin/board-games", "target", "_blank", 1, "about__list-item-name"], ["svgIcon", "icon-skype", 1, "about__list-item-icon"], [1, "about__list-item-name"], ["svgIcon", "icon-mail", 1, "about__list-item-icon"], ["href", "mailto:petr.bazurin@gmail.com", 1, "about__list-item-name"], ["fxLayoutAlign", "end"], ["type", "button", "mat-button", "", "mat-dialog-close", ""]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "https://github.com/pbazurin/board-games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "boltik-61");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "petr.bazurin@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "About us"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "This is onesource"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "Feel free to contact us"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, "Close"), " ");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".about__list[_ngcontent-%COMP%] {\n  list-style: none;\n  line-height: 40px;\n}\n\n.about__list-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.about__list-item-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: -30px;\n}\n\n.about__list-item-name[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9oZWFkZXIvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJhcHBzL2JvYS1nYS9zcmMvYXBwL2hlYWRlci9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBTitCO0FDR2pDOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsUUFkNEI7RUFlNUIsV0FkNkI7QUNXL0I7O0FETUE7RUFDRSxxQkFBQTtBQ0hGIiwiZmlsZSI6ImFwcHMvYm9hLWdhL3NyYy9hcHAvaGVhZGVyL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFib3V0LWNvbnRhY3QtaXRlbS1saW5lLWhlaWdodDogNDBweDtcbiRhYm91dC1jb250YWN0LWl0ZW0taWNvbi10b3A6IDVweDtcbiRhYm91dC1jb250YWN0LWl0ZW0taWNvbi1sZWZ0OiAtMzBweDtcblxuLmFib3V0X19saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6ICRhYm91dC1jb250YWN0LWl0ZW0tbGluZS1oZWlnaHQ7XG59XG5cbi5hYm91dF9fbGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJvdXRfX2xpc3QtaXRlbS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICRhYm91dC1jb250YWN0LWl0ZW0taWNvbi10b3A7XG4gIGxlZnQ6ICRhYm91dC1jb250YWN0LWl0ZW0taWNvbi1sZWZ0O1xufVxuXG4uYWJvdXRfX2xpc3QtaXRlbS1uYW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLmFib3V0X19saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5hYm91dF9fbGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJvdXRfX2xpc3QtaXRlbS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogLTMwcHg7XG59XG5cbi5hYm91dF9fbGlzdC1pdGVtLW5hbWUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/header/about/about.component.ts");
    /* harmony import */


    var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-settings/user-settings.component */
    "./src/app/header/user-settings/user-settings.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function HeaderComponent_mat_progress_bar_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 12);
      }
    }

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, dialog) {
        var _this3 = this;

        _classCallCheck(this, HeaderComponent);

        this.dialog = dialog;
        this.isRouterLoading = false;
        this.tearDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.tearDown$)).subscribe(function (event) {
          switch (true) {
            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]:
              {
                _this3.isRouterLoading = true;
                break;
              }

            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]:
              {
                _this3.isRouterLoading = false;
                break;
              }
          }
        });
      }

      _createClass(HeaderComponent, [{
        key: "openUserSettingsDialog",
        value: function openUserSettingsDialog() {
          this.dialog.open(_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__["UserSettingsComponent"], {
            width: '400px'
          });
        }
      }, {
        key: "openAboutDialog",
        value: function openAboutDialog() {
          this.dialog.open(_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], {
            width: '500px'
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tearDown$.next();
          this.tearDown$.complete();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["bg-header"]],
      decls: 18,
      vars: 9,
      consts: [["color", "primary", 1, "header__container"], [1, "header__wrapper"], ["mat-button", "", "routerLink", "/", 1, "header__brand-link"], ["svgIcon", "icon-dice", 1, "header__brand-logo"], [1, "header__brand-name"], ["mat-button", "", "routerLink", "/home", "routerLinkActive", "header__navigation-link--active", 1, "header__navigation-link"], ["mat-button", "", "routerLink", "/games", "routerLinkActive", "header__navigation-link--active", 1, "header__navigation-link", 3, "routerLinkActiveOptions"], ["fxFlex", ""], ["mat-icon-button", "", 3, "click"], ["svgIcon", "icon-info", 1, "header__user-icon"], ["svgIcon", "icon-user", 1, "header__user-icon"], ["mode", "indeterminate", "class", "header__loading", 4, "ngIf"], ["mode", "indeterminate", 1, "header__loading"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Board Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
            return ctx.openAboutDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() {
            return ctx.openUserSettingsDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_mat_progress_bar_17_Template, 1, 0, "mat-progress-bar", 11);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "Home"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "Games"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRouterLoading);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
      styles: [".header__container[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.header__wrapper[_ngcontent-%COMP%] {\n  width: 1012px;\n  margin: auto;\n}\n\n.header__brand-link[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n.header__brand-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  left: 0px;\n}\n\n.header__brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 15px;\n}\n\n.header__navigation-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 2px;\n}\n\n.header__navigation-link--active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.header__user-name[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.header__loading[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ib2EtZ2Evc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYm9hLWdhL2JvYS1nYS9hcHBzL2JvYS1nYS9zcmMvY3NzL19taXhpbnMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBTGU7QUNOakI7O0FEY0E7RUVmRSxhQ0ZlO0VER2YsWUFBQTtBREtGOztBRGFBO0VBQ0Usa0JBckJ3QjtBQ1cxQjs7QURhQTtFQUNFLGtCQUFBO0VBQ0EsUUF2QmU7RUF3QmYsU0F2QmdCO0FDYWxCOztBRGFBO0VBQ0UsZUE3QnFCO0VBOEJyQixpQkEvQnVCO0FDcUJ6Qjs7QURhQTtFQUNFLGVBL0IwQjtFQWdDMUIsZ0JBL0I0QjtBQ3FCOUI7O0FEYUE7RUFDRSwwQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBdENzQjtBQzRCeEI7O0FEYUE7RUFDRSxrQkFBQTtBQ1ZGIiwiZmlsZSI6ImFwcHMvYm9hLWdhL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy9taXhpbnMnO1xuXG4kYnJhbmQtbGluay1tYXJnaW4tcmlnaHQ6IDMwcHg7XG4kYnJhbmQtbmFtZS1tYXJnaW4tbGVmdDogMTVweDtcbiRicmFuZC1uYW1lLWZvbnQtc2l6ZTogMjBweDtcbiRicmFuZC1sb2dvLXRvcDogN3B4O1xuJGJyYW5kLWxvZ28tbGVmdDogMHB4O1xuJG5hdmlnYXRpb24tbGluay1mb250LXNpemU6IDE2cHg7XG4kbmF2aWdhdGlvbi1saW5rLXBhZGRpbmctdG9wOiAycHg7XG4kdXNlci1uYW1lLW1hcmdpbi1sZWZ0OiA1cHg7XG4kaGVhZGVyLXotaW5kZXg6IDEwMDA7XG5cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogJGhlYWRlci16LWluZGV4O1xufVxuXG4uaGVhZGVyX193cmFwcGVyIHtcbiAgQGluY2x1ZGUgc2V0Rml4ZWRXaWR0aDtcbn1cblxuLmhlYWRlcl9fYnJhbmQtbGluayB7XG4gIG1hcmdpbi1yaWdodDogJGJyYW5kLWxpbmstbWFyZ2luLXJpZ2h0O1xufVxuXG4uaGVhZGVyX19icmFuZC1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICRicmFuZC1sb2dvLXRvcDtcbiAgbGVmdDogJGJyYW5kLWxvZ28tbGVmdDtcbn1cblxuLmhlYWRlcl9fYnJhbmQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogJGJyYW5kLW5hbWUtZm9udC1zaXplO1xuICBtYXJnaW4tbGVmdDogJGJyYW5kLW5hbWUtbWFyZ2luLWxlZnQ7XG59XG5cbi5oZWFkZXJfX25hdmlnYXRpb24tbGluayB7XG4gIGZvbnQtc2l6ZTogJG5hdmlnYXRpb24tbGluay1mb250LXNpemU7XG4gIHBhZGRpbmctdG9wOiAkbmF2aWdhdGlvbi1saW5rLXBhZGRpbmctdG9wO1xufVxuXG4uaGVhZGVyX19uYXZpZ2F0aW9uLWxpbmstLWFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVyX191c2VyLW5hbWUge1xuICBtYXJnaW4tbGVmdDogJHVzZXItbmFtZS1tYXJnaW4tbGVmdDtcbn1cblxuLmhlYWRlcl9fbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsIi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmhlYWRlcl9fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDEycHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhlYWRlcl9fYnJhbmQtbGluayB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLmhlYWRlcl9fYnJhbmQtbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmhlYWRlcl9fYnJhbmQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5oZWFkZXJfX25hdmlnYXRpb24tbGluayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmhlYWRlcl9fbmF2aWdhdGlvbi1saW5rLS1hY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmhlYWRlcl9fdXNlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmhlYWRlcl9fbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBzZXRGaXhlZFdpZHRoIHtcbiAgd2lkdGg6ICRkb2N1bWVudC13aWR0aDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIiwiJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kZG9jdW1lbnQtd2lkdGg6IDEwMTJweDtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/header/header.module.ts ***!
    \*****************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared-ui.module */
    "./src/app/shared/shared-ui.module.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/header/about/about.component.ts");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-settings/user-settings.component */
    "./src/app/header/user-settings/user-settings.component.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeaderModule
    });
    HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, {
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__["UserSettingsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"]],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_3__["SharedUIModule"]],
          declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__["UserSettingsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
          exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/user-settings/user-settings.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/header/user-settings/user-settings.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserSettingsComponent */

  /***/
  function srcAppHeaderUserSettingsUserSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function () {
      return UserSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_user_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/user-settings.service */
    "./src/app/services/user-settings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function UserSettingsComponent_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.languageNames[language_r1], " ");
      }
    }

    var UserSettingsComponent = /*#__PURE__*/function () {
      function UserSettingsComponent(dialogRef, userSettingsService, socketService) {
        _classCallCheck(this, UserSettingsComponent);

        this.dialogRef = dialogRef;
        this.userSettingsService = userSettingsService;
        this.socketService = socketService;
        this.languageNames = {
          en: 'English',
          ru: 'Русский',
          ua: 'Українська'
        };
      }

      _createClass(UserSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userSettingsService.userSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (settings) {
            _this4.oldSettings = Object.assign({}, settings);
            _this4.currentSettings = Object.assign({}, settings);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var updatedSettings = this.userSettingsService.update(this.currentSettings);
          var payload = {
            oldValue: {
              id: this.oldSettings.id,
              name: this.oldSettings.name,
              language: this.oldSettings.language
            },
            newValue: {
              id: updatedSettings.id,
              name: updatedSettings.name,
              language: updatedSettings.language
            },
            password: updatedSettings.password
          };
          this.socketService.emit(new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["UserDataChangedAction"](payload));
          this.dialogRef.close();
        }
      }]);

      return UserSettingsComponent;
    }();

    UserSettingsComponent.ɵfac = function UserSettingsComponent_Factory(t) {
      return new (t || UserSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_settings_service__WEBPACK_IMPORTED_MODULE_5__["UserSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]));
    };

    UserSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserSettingsComponent,
      selectors: [["bg-user-settings"]],
      decls: 22,
      vars: 22,
      consts: [[3, "ngSubmit"], ["mat-dialog-title", ""], ["fxFill", ""], ["required", "", "matInput", "", "name", "name", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["required", "", "matInput", "", "name", "password", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["required", "", "name", "language", 3, "placeholder", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "end"], ["type", "button", "mat-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-button", "", "color", "primary"], [3, "value"]],
      template: function UserSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserSettingsComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.currentSettings.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.currentSettings.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_select_ngModelChange_12_listener($event) {
            return ctx.currentSettings.language = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserSettingsComponent_mat_option_14_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-dialog-actions", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, "Settings"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "Name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentSettings.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, "Password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentSettings.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, "Language"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentSettings.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentSettings.availableLanguages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 18, "Cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, "Save"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexFillDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-user-settings',
          templateUrl: 'user-settings.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _services_user_settings_service__WEBPACK_IMPORTED_MODULE_5__["UserSettingsService"]
        }, {
          type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["bg-home"]],
      decls: 21,
      vars: 18,
      consts: [[1, "home__container"], ["src", "assets/images/board-games.jpg", "alt", "Board games"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "Welcome to Board Games"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "Board games introduction"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "How to start"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "Update your player name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, "Find a game or create a new one"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "Invite your friends to play with you or fight against the AI"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".home__container[_ngcontent-%COMP%] {\n  width: 1012px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9ib2EtZ2EvYm9hLWdhL2FwcHMvYm9hLWdhL3NyYy9jc3MvX21peGlucy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYm9hLWdhL2JvYS1nYS9hcHBzL2JvYS1nYS9zcmMvY3NzL192YXJpYWJsZXMuc2NzcyIsImFwcHMvYm9hLWdhL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDQ0UsYUNGZTtFREdmLFlBQUE7QUVERiIsImZpbGUiOiJhcHBzL2JvYS1nYS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy9taXhpbnMnO1xuXG4uaG9tZV9fY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgc2V0Rml4ZWRXaWR0aDtcbn1cbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIHNldEZpeGVkV2lkdGgge1xuICB3aWR0aDogJGRvY3VtZW50LXdpZHRoO1xuICBtYXJnaW46IGF1dG87XG59XG4iLCIkaGVhZGVyLWhlaWdodDogNjRweDtcbiRkb2N1bWVudC13aWR0aDogMTAxMnB4O1xuIiwiLmhvbWVfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDEycHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/shared-ui.module */
    "./src/app/shared/shared-ui.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]],
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.routes.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.routes.ts ***!
    \*************************************/

  /*! exports provided: homeRoutes */

  /***/
  function srcAppHomeHomeRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "homeRoutes", function () {
      return homeRoutes;
    });
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var homeRoutes = [{
      path: 'home',
      component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/i18n lazy recursive ^\\.\\/.*\\.json$":
  /*!***********************************************************!*\
    !*** ./src/app/i18n lazy ^\.\/.*\.json$ namespace object ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function srcAppI18nLazyRecursiveJson$(module, exports, __webpack_require__) {
    var map = {
      "./en.json": ["./src/app/i18n/en.json", "en-json"],
      "./ru.json": ["./src/app/i18n/ru.json", "ru-json"],
      "./ua.json": ["./src/app/i18n/ua.json", "ua-json"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__.t(id, 3);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/app/i18n lazy recursive ^\\.\\/.*\\.json$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/services/analytics-loader.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/analytics-loader.service.ts ***!
    \******************************************************/

  /*! exports provided: AnalyticsLoaderService */

  /***/
  function srcAppServicesAnalyticsLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsLoaderService", function () {
      return AnalyticsLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./configuration.service */
    "./src/app/services/configuration.service.ts");

    var AnalyticsLoaderService = /*#__PURE__*/function () {
      function AnalyticsLoaderService(configurationService) {
        _classCallCheck(this, AnalyticsLoaderService);

        this.configurationService = configurationService;
        this.isGtmLoaded = false;
      }

      _createClass(AnalyticsLoaderService, [{
        key: "loadAll",
        value: function loadAll() {
          this.loadGtm();
        }
      }, {
        key: "loadGtm",
        value: function loadGtm() {
          var configuration = this.configurationService.configuration;

          if (!configuration.gtmId || this.isGtmLoaded) {
            return;
          } // tslint:disable


          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', "".concat(configuration.gtmId)); // tslint:enable


          this.isGtmLoaded = true;
        }
      }]);

      return AnalyticsLoaderService;
    }();

    AnalyticsLoaderService.ɵfac = function AnalyticsLoaderService_Factory(t) {
      return new (t || AnalyticsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"]));
    };

    AnalyticsLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnalyticsLoaderService,
      factory: AnalyticsLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/services/socket.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(socketService) {
        _classCallCheck(this, AuthService);

        this.socketService = socketService;
        this.connectionIdSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
      }

      _createClass(AuthService, [{
        key: "init",
        value: function init() {
          var _this5 = this;

          return this.socketService.listen(_boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["UserConnectionApprovedAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            return _this5.connectionIdSubject$.next(action.payload);
          }));
        }
      }, {
        key: "connectionId$",
        get: function get() {
          return this.connectionIdSubject$.asObservable();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/configuration.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/configuration.service.ts ***!
    \***************************************************/

  /*! exports provided: ConfigurationService */

  /***/
  function srcAppServicesConfigurationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationService", function () {
      return ConfigurationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ConfigurationService = /*#__PURE__*/function () {
      function ConfigurationService() {
        _classCallCheck(this, ConfigurationService);
      }

      _createClass(ConfigurationService, [{
        key: "configuration",
        get: function get() {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        }
      }]);

      return ConfigurationService;
    }();

    ConfigurationService.ɵfac = function ConfigurationService_Factory(t) {
      return new (t || ConfigurationService)();
    };

    ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigurationService,
      factory: ConfigurationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/custom-error-handler.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/custom-error-handler.ts ***!
    \**************************************************/

  /*! exports provided: CustomErrorHandler */

  /***/
  function srcAppServicesCustomErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomErrorHandler", function () {
      return CustomErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./logger.service */
    "./src/app/services/logger.service.ts");

    var CustomErrorHandler = /*#__PURE__*/function (_angular_core__WEBPAC) {
      _inherits(CustomErrorHandler, _angular_core__WEBPAC);

      var _super = _createSuper(CustomErrorHandler);

      function CustomErrorHandler(loggerService) {
        var _this6;

        _classCallCheck(this, CustomErrorHandler);

        _this6 = _super.call(this);
        _this6.loggerService = loggerService;
        return _this6;
      }

      _createClass(CustomErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          this.loggerService.error(error);

          _get(_getPrototypeOf(CustomErrorHandler.prototype), "handleError", this).call(this, error);
        }
      }]);

      return CustomErrorHandler;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]);

    CustomErrorHandler.ɵfac = function CustomErrorHandler_Factory(t) {
      return new (t || CustomErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]));
    };

    CustomErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomErrorHandler,
      factory: CustomErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppServicesErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logger.service */
    "./src/app/services/logger.service.ts");
    /* harmony import */


    var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notification.service */
    "./src/app/services/notification.service.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(notificationService, loggerService) {
        _classCallCheck(this, ErrorInterceptor);

        this.notificationService = notificationService;
        this.loggerService = loggerService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this7 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (response) {
            var serverError = response.error;
            var errorMessage = serverError.errorMessage || response.message;

            _this7.loggerService.error(errorMessage);

            _this7.notificationService.showMessage(errorMessage);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }, {
          type: _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/logger.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/logger.service.ts ***!
    \********************************************/

  /*! exports provided: LoggerService */

  /***/
  function srcAppServicesLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
      return LoggerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bugsnag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @bugsnag/js */
    "../../node_modules/@bugsnag/js/browser/notifier.js");
    /* harmony import */


    var _bugsnag_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bugsnag_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration.service */
    "./src/app/services/configuration.service.ts");

    var LOGGER_CONTEXT = 'ui';

    var LoggerService = /*#__PURE__*/function () {
      function LoggerService(configurationService) {
        _classCallCheck(this, LoggerService);

        this.configurationService = configurationService;
        this.initBugsnag();
      }

      _createClass(LoggerService, [{
        key: "error",
        value: function error(_error, trace, additionalMetadata) {
          console.error(_error, trace);

          if (!this.configurationService.configuration.bugsnagApiKey) {
            return;
          }

          _bugsnag_js__WEBPACK_IMPORTED_MODULE_1___default.a.notify(_error, function (errorToNotify) {
            errorToNotify.severity = 'error';
            errorToNotify.context = LOGGER_CONTEXT;
            errorToNotify.addMetadata('trace', {
              trace: trace
            });

            if (additionalMetadata) {
              errorToNotify.addMetadata('additional', additionalMetadata);
            }
          });
        }
      }, {
        key: "warn",
        value: function warn(message, additionalMetadata) {
          console.warn(message);

          if (!this.configurationService.configuration.bugsnagApiKey) {
            return;
          }

          _bugsnag_js__WEBPACK_IMPORTED_MODULE_1___default.a.notify(message, function (error) {
            error.severity = 'warning';
            error.context = LOGGER_CONTEXT;

            if (additionalMetadata) {
              error.addMetadata('additional', additionalMetadata);
            }
          });
        }
      }, {
        key: "initBugsnag",
        value: function initBugsnag() {
          var configuration = this.configurationService.configuration;

          if (!configuration.bugsnagApiKey) {
            return;
          }

          _bugsnag_js__WEBPACK_IMPORTED_MODULE_1___default.a.start({
            apiKey: configuration.bugsnagApiKey,
            appType: configuration.appName
          });
        }
      }]);

      return LoggerService;
    }();

    LoggerService.ɵfac = function LoggerService_Factory(t) {
      return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]));
    };

    LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggerService,
      factory: LoggerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(translateService, snackBar) {
        _classCallCheck(this, NotificationService);

        this.translateService = translateService;
        this.snackBar = snackBar;
      }

      _createClass(NotificationService, [{
        key: "showMessage",
        value: function showMessage(error) {
          var _this8 = this;

          this.translateService.get('Close').subscribe(function (closeTranslated) {
            var snackRef = _this8.snackBar.open(error, closeTranslated); // TODO: refactor
            // tslint:disable-next-line: rxjs-no-nested-subscribe


            snackRef.onAction().subscribe(function () {
              return snackRef.dismiss();
            });
          });
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @boa-ga/api-interfaces */
    "../../libs/api-interfaces/src/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "../../node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./configuration.service */
    "./src/app/services/configuration.service.ts");

    var SocketService = /*#__PURE__*/function () {
      function SocketService(configurationService) {
        _classCallCheck(this, SocketService);

        this.configurationService = configurationService;
        this.anyEventSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.errorSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isConnectedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(SocketService, [{
        key: "init",
        value: function init() {
          var _this9 = this;

          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.configurationService.configuration.socketUrl);
          this.socket.on('connect', function () {
            return _this9.isConnectedSubject$.next(true);
          });
          this.socket.on('disconnect', function () {
            return _this9.isConnectedSubject$.next(false);
          });
          this.socket.on('error', function (error) {
            return _this9.errorSubject$.next(error);
          });
          this.patchWildcardEvent();
        }
      }, {
        key: "emit",
        value: function emit() {
          var _this10 = this;

          for (var _len = arguments.length, actions = new Array(_len), _key = 0; _key < _len; _key++) {
            actions[_key] = arguments[_key];
          }

          actions.forEach(function (action) {
            _this10.socket.emit(action.type, action);
          });
        }
      }, {
        key: "listen",
        value: function listen(A) {
          var _this11 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var action = new A();

            _this11.socket.on(action.type, function (a) {
              observer.next(a);
            });

            return function () {
              return _this11.socket.off(action.type);
            };
          });
        }
      }, {
        key: "listenAnyOf",
        value: function listenAnyOf() {
          var _this12 = this;

          for (var _len2 = arguments.length, actionClasses = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            actionClasses[_key2] = arguments[_key2];
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var actionTypes = [];
            actionClasses.forEach(function (ActionClass) {
              var action = new ActionClass();

              _this12.socket.on(action.type, function (data) {
                observer.next(data);
              });

              actionTypes.push(action.type);
            });
            return function () {
              return actionTypes.forEach(function (actionType) {
                return _this12.socket.off(actionType);
              });
            };
          });
        }
      }, {
        key: "listenAll",
        value: function listenAll() {
          return this.anyEventSubject$.asObservable();
        }
      }, {
        key: "patchWildcardEvent",
        value: function patchWildcardEvent() {
          // tslint:disable-next-line: no-string-literal
          var oldOnEvent = this.socket['onevent'];
          var that = this; // tslint:disable-next-line: only-arrow-functions disable-next-line: no-string-literal disable-next-line: space-before-function-paren

          this.socket['onevent'] = function () {
            var event = arguments[0].data;

            if (event[0] === 'exception') {
              var errorAction = new _boa_ga_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["ErrorResponseAction"](event[1].message);
              that.anyEventSubject$.next(errorAction);
            } else {
              that.anyEventSubject$.next(event[1]);
            }

            oldOnEvent.apply(that.socket, arguments);
          };
        }
      }, {
        key: "isConnected$",
        get: function get() {
          return this.isConnectedSubject$.asObservable();
        }
      }, {
        key: "error$",
        get: function get() {
          return this.errorSubject$.asObservable();
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]));
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/token.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppServicesTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(authService) {
        _classCallCheck(this, TokenInterceptor);

        this.authService = authService;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (!request.url.includes("/api/")) {
            return next.handle(request);
          }

          return this.authService.connectionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (connectionId) {
            request = request.clone({
              setHeaders: {
                Authorization: "Custom ".concat(connectionId)
              }
            });
            return next.handle(request);
          }));
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/translate-loader.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/translate-loader.service.ts ***!
    \******************************************************/

  /*! exports provided: TranslateLoaderService */

  /***/
  function srcAppServicesTranslateLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateLoaderService", function () {
      return TranslateLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var TranslateLoaderService = /*#__PURE__*/function () {
      function TranslateLoaderService() {
        _classCallCheck(this, TranslateLoaderService);
      }

      _createClass(TranslateLoaderService, [{
        key: "getTranslation",
        value: function getTranslation(lang) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(__webpack_require__("./src/app/i18n lazy recursive ^\\.\\/.*\\.json$")("./".concat(lang, ".json")));
        }
      }]);

      return TranslateLoaderService;
    }();

    TranslateLoaderService.ɵfac = function TranslateLoaderService_Factory(t) {
      return new (t || TranslateLoaderService)();
    };

    TranslateLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TranslateLoaderService,
      factory: TranslateLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user-settings.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/user-settings.service.ts ***!
    \***************************************************/

  /*! exports provided: UserSettingsService */

  /***/
  function srcAppServicesUserSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsService", function () {
      return UserSettingsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! js-sha256 */
    "../../node_modules/js-sha256/src/sha256.js");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! uuid */
    "../../node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _shared_unique_names_generator_unique_names_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/unique-names-generator/unique-names-generator */
    "./src/app/shared/unique-names-generator/unique-names-generator.ts");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configuration.service */
    "./src/app/services/configuration.service.ts");

    var UserSettingsService = /*#__PURE__*/function () {
      function UserSettingsService(configurationService) {
        _classCallCheck(this, UserSettingsService);

        this.configurationService = configurationService;
        this.USER_SETTINGS_STORAGE_NAME = 'userSettings';
        this.userSettingsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
      }

      _createClass(UserSettingsService, [{
        key: "init",
        value: function init() {
          var userSettings = this.loadFromStorage();

          if (!userSettings) {
            userSettings = this.generateNew();
            this.saveToStorage(userSettings);
          }

          this.userSettingsSubject$.next(userSettings);
        }
      }, {
        key: "update",
        value: function update(newUserSettings) {
          var userSettings = Object.assign(Object.assign({}, newUserSettings), {
            id: Object(js_sha256__WEBPACK_IMPORTED_MODULE_1__["sha256"])(newUserSettings.password)
          });
          this.saveToStorage(userSettings);
          this.userSettingsSubject$.next(userSettings);
          return userSettings;
        }
      }, {
        key: "loadFromStorage",
        value: function loadFromStorage() {
          var userSettingsString = localStorage.getItem(this.USER_SETTINGS_STORAGE_NAME);

          if (!userSettingsString || !userSettingsString.length) {
            return null;
          }

          var userSettings;

          try {
            userSettings = JSON.parse(userSettingsString) || {};
          } catch (_a) {
            return null;
          }

          if (!userSettings.name || !userSettings.password || !userSettings.id || !userSettings.language) {
            return null;
          }

          userSettings.availableLanguages = this.configurationService.configuration.supportedLanguages;
          return userSettings;
        }
      }, {
        key: "generateNew",
        value: function generateNew() {
          var supportedLanguages = this.configurationService.configuration.supportedLanguages;
          var userSettings = {
            name: _utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].capitalizeString(Object(_shared_unique_names_generator_unique_names_generator__WEBPACK_IMPORTED_MODULE_4__["generateRandomName"])(' ')),
            password: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])().replace(/-/g, ''),
            availableLanguages: supportedLanguages,
            language: supportedLanguages[0]
          };
          userSettings.id = Object(js_sha256__WEBPACK_IMPORTED_MODULE_1__["sha256"])(userSettings.password);
          return userSettings;
        }
      }, {
        key: "saveToStorage",
        value: function saveToStorage(userSettings) {
          localStorage.setItem(this.USER_SETTINGS_STORAGE_NAME, JSON.stringify(userSettings));
        }
      }, {
        key: "userSettings$",
        get: function get() {
          return this.userSettingsSubject$.asObservable();
        }
      }]);

      return UserSettingsService;
    }();

    UserSettingsService.ɵfac = function UserSettingsService_Factory(t) {
      return new (t || UserSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]));
    };

    UserSettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserSettingsService,
      factory: UserSettingsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared-ui.module.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/shared-ui.module.ts ***!
    \********************************************/

  /*! exports provided: SharedUIModule */

  /***/
  function srcAppSharedSharedUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedUIModule", function () {
      return SharedUIModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SharedUIModule = function SharedUIModule() {
      _classCallCheck(this, SharedUIModule);
    };

    SharedUIModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedUIModule
    });
    SharedUIModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedUIModule_Factory(t) {
        return new (t || SharedUIModule)();
      },
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedUIModule, {
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedUIModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/unique-names-generator/dictionaries/adjectives.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/unique-names-generator/dictionaries/adjectives.ts ***!
    \**************************************************************************/

  /*! exports provided: adjectives */

  /***/
  function srcAppSharedUniqueNamesGeneratorDictionariesAdjectivesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adjectives", function () {
      return adjectives;
    });

    var adjectives = ['average', 'big', 'colossal', 'fat', 'giant', 'gigantic', 'great', 'huge', 'immense', 'large', 'little', 'long', 'mammoth', 'massive', 'miniature', 'petite', 'puny', 'short', 'small', 'tall', 'tiny', 'boiling', 'breezy', 'broken', 'bumpy', 'chilly', 'cold', 'cool', 'creepy', 'crooked', 'cuddly', 'curly', 'damaged', 'damp', 'dirty', 'dry', 'dusty', 'filthy', 'flaky', 'fluffy', 'wet', 'broad', 'chubby', 'crooked', 'curved', 'deep', 'flat', 'high', 'hollow', 'low', 'narrow', 'round', 'shallow', 'skinny', 'square', 'steep', 'straight', 'wide', 'ancient', 'brief', 'early', 'fast', 'late', 'long', 'modern', 'old', 'quick', 'rapid', 'short', 'slow', 'swift', 'young', 'abundant', 'empty', 'few', 'heavy', 'light', 'many', 'numerous', 'Sound', 'cooing', 'deafening', 'faint', 'harsh', 'hissing', 'hushed', 'husky', 'loud', 'melodic', 'moaning', 'mute', 'noisy', 'purring', 'quiet', 'raspy', 'resonant', 'screeching', 'shrill', 'silent', 'soft', 'squealing', 'thundering', 'voiceless', 'whispering ', 'bitter', 'delicious', 'fresh', 'juicy', 'ripe', 'rotten', 'salty', 'sour', 'spicy', 'stale', 'sticky', 'strong', 'sweet', 'tasteless', 'tasty', 'thirsty', 'fluttering', 'fuzzy', 'greasy', 'grubby', 'hard', 'hot', 'icy', 'loose', 'melted', 'plastic', 'prickly', 'rainy', 'rough', 'scattered', 'shaggy', 'shaky', 'sharp', 'shivering', 'silky', 'slimy', 'slippery', 'smooth', 'soft', 'solid', 'steady', 'sticky', 'tender', 'tight', 'uneven', 'weak', 'wet', 'wooden', 'afraid', 'angry', 'annoyed', 'anxious', 'arrogant', 'ashamed', 'awful', 'bad', 'bewildered', 'bored', 'combative', 'condemned', 'confused', 'creepy', 'cruel', 'dangerous', 'defeated', 'defiant', 'depressed', 'disgusted', 'disturbed', 'eerie', 'embarrassed', 'envious', 'evil', 'fierce', 'foolish', 'frantic', 'frightened', 'grieving', 'helpless', 'homeless', 'hungry', 'hurt', 'ill', 'jealous', 'lonely', 'mysterious', 'naughty', 'nervous', 'obnoxious', 'outrageous', 'panicky', 'repulsive', 'scary', 'scornful', 'selfish', 'sore', 'tense', 'terrible', 'thoughtless', 'tired', 'troubled', 'upset', 'uptight', 'weary', 'wicked', 'worried', 'agreeable', 'amused', 'brave', 'calm', 'charming', 'cheerful', 'comfortable', 'cooperative', 'courageous', 'delightful', 'determined', 'eager', 'elated', 'enchanting', 'encouraging', 'energetic', 'enthusiastic', 'excited', 'exuberant', 'fair', 'faithful', 'fantastic', 'fine', 'friendly', 'funny', 'gentle', 'glorious', 'good', 'happy', 'healthy', 'helpful', 'hilarious', 'jolly', 'joyous', 'kind', 'lively', 'lovely', 'lucky', 'obedient', 'perfect', 'pleasant', 'proud', 'relieved', 'silly', 'smiling', 'splendid', 'successful', 'thoughtful', 'victorious', 'vivacious', 'witty', 'wonderful', 'zealous', 'zany', 'other', 'good', 'new', 'old', 'great', 'high', 'small', 'different', 'large', 'local', 'social', 'important', 'long', 'young', 'national', 'british', 'right', 'early', 'possible', 'big', 'little', 'political', 'able', 'late', 'general', 'full', 'far', 'low', 'public', 'available', 'bad', 'main', 'sure', 'clear', 'major', 'economic', 'only', 'likely', 'real', 'black', 'particular', 'international', 'special', 'difficult', 'certain', 'open', 'whole', 'white', 'free', 'short', 'easy', 'strong', 'european', 'central', 'similar', 'human', 'common', 'necessary', 'single', 'personal', 'hard', 'private', 'poor', 'financial', 'wide', 'foreign', 'simple', 'recent', 'concerned', 'american', 'various', 'close', 'fine', 'english', 'wrong', 'present', 'royal', 'natural', 'individual', 'nice', 'french', 'following', 'current', 'modern', 'labour', 'legal', 'happy', 'final', 'red', 'normal', 'serious', 'previous', 'total', 'prime', 'significant', 'industrial', 'sorry', 'dead', 'specific', 'appropriate', 'top', 'soviet', 'basic', 'military', 'original', 'successful', 'aware', 'hon', 'popular', 'heavy', 'professional', 'direct', 'dark', 'cold', 'ready', 'green', 'useful', 'effective', 'western', 'traditional', 'scottish', 'german', 'independent', 'deep', 'interesting', 'considerable', 'involved', 'physical', 'left', 'hot', 'existing', 'responsible', 'complete', 'medical', 'blue', 'extra', 'past', 'male', 'interested', 'fair', 'essential', 'beautiful', 'civil', 'primary', 'obvious', 'future', 'environmental', 'positive', 'senior', 'nuclear', 'annual', 'relevant', 'huge', 'rich', 'commercial', 'safe', 'regional', 'practical', 'official', 'separate', 'key', 'chief', 'regular', 'due', 'additional', 'active', 'powerful', 'complex', 'standard', 'impossible', 'light', 'warm', 'middle', 'fresh', 'sexual', 'front', 'domestic', 'actual', 'united', 'technical', 'ordinary', 'cheap', 'strange', 'internal', 'excellent', 'quiet', 'soft', 'potential', 'northern', 'religious', 'quick', 'very', 'famous', 'cultural', 'proper', 'broad', 'joint', 'formal', 'limited', 'conservative', 'lovely', 'usual', 'ltd', 'unable', 'rural', 'initial', 'substantial', 'christian', 'bright', 'average', 'leading', 'reasonable', 'immediate', 'suitable', 'equal', 'detailed', 'working', 'overall', 'female', 'afraid', 'democratic', 'growing', 'sufficient', 'scientific', 'eastern', 'correct', 'inc', 'irish', 'expensive', 'educational', 'mental', 'dangerous', 'critical', 'increased', 'familiar', 'unlikely', 'double', 'perfect', 'slow', 'tiny', 'dry', 'historical', 'thin', 'daily', 'southern', 'increasing', 'wild', 'alone', 'urban', 'empty', 'married', 'narrow', 'liberal', 'supposed', 'upper', 'apparent', 'tall', 'busy', 'bloody', 'prepared', 'russian', 'moral', 'careful', 'clean', 'attractive', 'japanese', 'vital', 'thick', 'alternative', 'fast', 'ancient', 'elderly', 'rare', 'external', 'capable', 'brief', 'wonderful', 'grand', 'typical', 'entire', 'grey', 'constant', 'vast', 'surprised', 'ideal', 'terrible', 'academic', 'funny', 'minor', 'pleased', 'severe', 'ill', 'corporate', 'negative', 'permanent', 'weak', 'brown', 'fundamental', 'odd', 'crucial', 'inner', 'used', 'criminal', 'contemporary', 'sharp', 'sick', 'near', 'roman', 'massive', 'unique', 'secondary', 'parliamentary', 'african', 'unknown', 'subsequent', 'angry', 'alive', 'guilty', 'lucky', 'enormous', 'well', 'communist', 'yellow', 'unusual', 'net', 'tough', 'dear', 'extensive', 'glad', 'remaining', 'agricultural', 'alright', 'healthy', 'italian', 'principal', 'tired', 'efficient', 'comfortable', 'chinese', 'relative', 'friendly', 'conventional', 'willing', 'sudden', 'proposed', 'voluntary', 'slight', 'valuable', 'dramatic', 'golden', 'temporary', 'federal', 'keen', 'flat', 'silent', 'indian', 'worried', 'pale', 'statutory', 'welsh', 'dependent', 'firm', 'wet', 'competitive', 'armed', 'radical', 'outside', 'acceptable', 'sensitive', 'living', 'pure', 'global', 'emotional', 'sad', 'secret', 'rapid', 'adequate', 'fixed', 'sweet', 'administrative', 'wooden', 'remarkable', 'comprehensive', 'surprising', 'solid', 'rough', 'mere', 'mass', 'brilliant', 'maximum', 'absolute', 'tory', 'electronic', 'visual', 'electric', 'cool', 'spanish', 'literary', 'continuing', 'supreme', 'chemical', 'genuine', 'exciting', 'written', 'stupid', 'advanced', 'extreme', 'classical', 'fit', 'favourite', 'socialist', 'widespread', 'confident', 'straight', 'catholic', 'proud', 'numerous', 'opposite', 'distinct', 'mad', 'helpful', 'given', 'disabled', 'consistent', 'anxious', 'nervous', 'awful', 'stable', 'constitutional', 'satisfied', 'conscious', 'developing', 'strategic', 'holy', 'smooth', 'dominant', 'remote', 'theoretical', 'outstanding', 'pink', 'pretty', 'clinical', 'minimum', 'honest', 'impressive', 'related', 'residential', 'extraordinary', 'plain', 'visible', 'accurate', 'distant', 'still', 'greek', 'complicated', 'musical', 'precise', 'gentle', 'broken', 'live', 'silly', 'fat', 'tight', 'monetary', 'round', 'psychological', 'violent', 'unemployed', 'inevitable', 'junior', 'sensible', 'grateful', 'pleasant', 'dirty', 'structural', 'welcome', 'deaf', 'above', 'continuous', 'blind', 'overseas', 'mean', 'entitled', 'delighted', 'loose', 'occasional', 'evident', 'desperate', 'fellow', 'universal', 'square', 'steady', 'classic', 'equivalent', 'intellectual', 'victorian', 'level', 'ultimate', 'creative', 'lost', 'medieval', 'clever', 'linguistic', 'convinced', 'judicial', 'raw', 'sophisticated', 'asleep', 'vulnerable', 'illegal', 'outer', 'revolutionary', 'bitter', 'changing', 'australian', 'native', 'imperial', 'strict', 'wise', 'informal', 'flexible', 'collective', 'frequent', 'experimental', 'spiritual', 'intense', 'rational', 'ethnic', 'generous', 'inadequate', 'prominent', 'logical', 'bare', 'historic', 'modest', 'dutch', 'acute', 'electrical', 'valid', 'weekly', 'gross', 'automatic', 'loud', 'reliable', 'mutual', 'liable', 'multiple', 'ruling', 'curious', 'arab', 'sole', 'jewish', 'managing', 'pregnant', 'latin', 'nearby', 'exact', 'underlying', 'identical', 'satisfactory', 'marginal', 'distinctive', 'electoral', 'urgent', 'presidential', 'controversial', 'oral', 'everyday', 'encouraging', 'organic', 'continued', 'expected', 'statistical', 'desirable', 'innocent', 'improved', 'exclusive', 'marked', 'experienced', 'unexpected', 'superb', 'sheer', 'disappointed', 'frightened', 'gastric', 'capitalist', 'romantic', 'naked', 'reluctant', 'magnificent', 'convenient', 'established', 'closed', 'uncertain', 'artificial', 'diplomatic', 'tremendous', 'marine', 'mechanical', 'retail', 'institutional', 'mixed', 'required', 'biological', 'known', 'functional', 'straightforward', 'superior', 'digital', 'spectacular', 'unhappy', 'confused', 'unfair', 'aggressive', 'spare', 'painful', 'abstract', 'asian', 'associated', 'legislative', 'monthly', 'intelligent', 'hungry', 'explicit', 'nasty', 'just', 'faint', 'coloured', 'ridiculous', 'amazing', 'comparable', 'successive', 'realistic', 'back', 'decent', 'unnecessary', 'flying', 'fucking', 'random', 'influential', 'dull', 'genetic', 'neat', 'marvellous', 'crazy', 'damp', 'giant', 'secure', 'bottom', 'skilled', 'subtle', 'elegant', 'brave', 'lesser', 'parallel', 'steep', 'intensive', 'casual', 'tropical', 'lonely', 'partial', 'preliminary', 'concrete', 'alleged', 'assistant', 'vertical', 'upset', 'delicate', 'mild', 'occupational', 'excessive', 'progressive', 'iraqi', 'exceptional', 'integrated', 'striking', 'continental', 'okay', 'harsh', 'combined', 'fierce', 'handsome', 'characteristic', 'chronic', 'compulsory', 'interim', 'objective', 'splendid', 'magic', 'systematic', 'obliged', 'payable', 'fun', 'horrible', 'primitive', 'fascinating', 'ideological', 'metropolitan', 'surrounding', 'estimated', 'peaceful', 'premier', 'operational', 'technological', 'kind', 'advisory', 'hostile', 'precious', 'gay', 'accessible', 'determined', 'excited', 'impressed', 'provincial', 'smart', 'endless', 'isolated', 'drunk', 'geographical', 'like', 'dynamic', 'boring', 'forthcoming', 'unfortunate', 'definite', 'super', 'notable', 'indirect', 'stiff', 'wealthy', 'awkward', 'lively', 'neutral', 'artistic', 'content', 'mature', 'colonial', 'ambitious', 'evil', 'magnetic', 'verbal', 'legitimate', 'sympathetic', 'empirical', 'head', 'shallow', 'vague', 'naval', 'depressed', 'shared', 'added', 'shocked', 'mid', 'worthwhile', 'qualified', 'missing', 'blank', 'absent', 'favourable', 'polish', 'israeli', 'developed', 'profound', 'representative', 'enthusiastic', 'dreadful', 'rigid', 'reduced', 'cruel', 'coastal', 'peculiar', 'racial', 'ugly', 'swiss', 'crude', 'extended', 'selected', 'eager', 'feminist', 'canadian', 'bold', 'relaxed', 'corresponding', 'running', 'planned', 'applicable', 'immense', 'allied', 'comparative', 'uncomfortable', 'conservation', 'productive', 'beneficial', 'bored', 'charming', 'minimal', 'mobile', 'turkish', 'orange', 'rear', 'passive', 'suspicious', 'overwhelming', 'fatal', 'resulting', 'symbolic', 'registered', 'neighbouring', 'calm', 'irrelevant', 'patient', 'compact', 'profitable', 'rival', 'loyal', 'moderate', 'distinguished', 'interior', 'noble', 'insufficient', 'eligible', 'mysterious', 'varying', 'managerial', 'molecular', 'olympic', 'linear', 'prospective', 'printed', 'parental', 'diverse', 'elaborate', 'furious', 'fiscal', 'burning', 'useless', 'semantic', 'embarrassed', 'inherent', 'philosophical', 'deliberate', 'awake', 'variable', 'promising', 'unpleasant', 'varied', 'sacred', 'selective', 'inclined', 'tender', 'hidden', 'worthy', 'intermediate', 'sound', 'protective', 'fortunate', 'slim', 'islamic', 'defensive', 'divine', 'stuck', 'driving', 'invisible', 'misleading', 'circular', 'mathematical', 'inappropriate', 'liquid', 'persistent', 'solar', 'doubtful', 'manual', 'architectural', 'intact', 'incredible', 'devoted', 'prior', 'tragic', 'respectable', 'optimistic', 'convincing', 'unacceptable', 'decisive', 'competent', 'spatial', 'respective', 'binding', 'relieved', 'nursing', 'toxic', 'select', 'redundant', 'integral', 'then', 'probable', 'amateur', 'fond', 'passing', 'specified', 'territorial', 'horizontal', 'inland', 'cognitive', 'regulatory', 'miserable', 'resident', 'polite', 'scared', 'marxist', 'gothic', 'civilian', 'instant', 'lengthy', 'adverse', 'korean', 'unconscious', 'anonymous', 'aesthetic', 'orthodox', 'static', 'unaware', 'costly', 'fantastic', 'foolish', 'fashionable', 'causal', 'compatible', 'wee', 'implicit', 'dual', 'ok', 'cheerful', 'subjective', 'forward', 'surviving', 'exotic', 'purple', 'cautious', 'visiting', 'aggregate', 'ethical', 'protestant', 'teenage', 'dying', 'disastrous', 'delicious', 'confidential', 'underground', 'thorough', 'grim', 'autonomous', 'atomic', 'frozen', 'colourful', 'injured', 'uniform', 'ashamed', 'glorious', 'wicked', 'coherent', 'rising', 'shy', 'novel', 'balanced', 'delightful', 'arbitrary', 'adjacent', 'psychiatric', 'worrying', 'weird', 'unchanged', 'rolling', 'evolutionary', 'intimate', 'sporting', 'disciplinary', 'formidable', 'lexical', 'noisy', 'gradual', 'accused', 'homeless', 'supporting', 'coming', 'renewed', 'excess', 'retired', 'rubber', 'chosen', 'outdoor', 'embarrassing', 'preferred', 'bizarre', 'appalling', 'agreed', 'imaginative', 'governing', 'accepted', 'vocational', 'palestinian', 'mighty', 'puzzled', 'worldwide', 'handicapped', 'organisational', 'sunny', 'eldest', 'eventual', 'spontaneous', 'vivid', 'rude', 'faithful', 'ministerial', 'innovative', 'controlled', 'conceptual', 'unwilling', 'civic', 'meaningful', 'disturbing', 'alive', 'brainy', 'breakable', 'busy', 'careful', 'cautious', 'clever', 'concerned', 'crazy', 'curious', 'dead', 'different', 'difficult', 'doubtful', 'easy', 'famous', 'fragile', 'helpful', 'helpless', 'important', 'impossible', 'innocent', 'inquisitive', 'modern', 'open', 'outstanding', 'poor', 'powerful', 'puzzled', 'real', 'rich', 'shy', 'sleepy', 'stupid', 'super', 'tame', 'uninterested', 'wandering', 'wild', 'wrong', 'adorable', 'alert', 'average', 'beautiful', 'blonde', 'bloody', 'blushing', 'bright', 'clean', 'clear', 'cloudy', 'colorful', 'crowded', 'cute', 'dark', 'drab', 'distinct', 'dull', 'elegant', 'fancy', 'filthy', 'glamorous', 'gleaming', 'graceful', 'grotesque', 'homely', 'light', 'misty', 'motionless', 'muddy', 'plain', 'poised', 'quaint', 'shiny', 'smoggy', 'sparkling', 'spotless', 'stormy', 'strange', 'ugly', 'unsightly', 'unusual', 'bad', 'better', 'beautiful', 'big', 'black', 'blue', 'bright', 'clumsy', 'crazy', 'dizzy', 'dull', 'fat', 'frail', 'friendly', 'funny', 'great', 'green', 'gigantic', 'gorgeous', 'grumpy', 'handsome', 'happy', 'horrible', 'itchy', 'jittery', 'jolly', 'kind', 'long', 'lazy', 'magnificent', 'magenta', 'many', 'mighty', 'mushy', 'nasty', 'new', 'nice', 'nosy', 'nutty', 'nutritious', 'odd', 'orange', 'ordinary', 'pretty', 'precious', 'prickly', 'purple', 'quaint', 'quiet', 'quick', 'quickest', 'rainy', 'rare', 'ratty', 'red', 'roasted', 'robust', 'round', 'sad', 'scary', 'scrawny', 'short', 'silly', 'stingy', 'strange', 'striped', 'spotty', 'tart', 'tall', 'tame', 'tan', 'tender', 'testy', 'tricky', 'tough', 'ugly', 'ugliest', 'vast', 'watery', 'wasteful', 'wonderful', 'yellow', 'yummy', 'zany'];
    /***/
  },

  /***/
  "./src/app/shared/unique-names-generator/dictionaries/animals.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/unique-names-generator/dictionaries/animals.ts ***!
    \***********************************************************************/

  /*! exports provided: animals */

  /***/
  function srcAppSharedUniqueNamesGeneratorDictionariesAnimalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animals", function () {
      return animals;
    });

    var animals = ['canidae', 'felidae', 'cat', 'cattle', 'dog', 'donkey', 'goat', 'horse', 'pig', 'rabbit', 'aardvark', 'aardwolf', 'albatross', 'alligator', 'alpaca', 'amphibian', 'anaconda', 'angelfish', 'anglerfish', 'ant', 'anteater', 'antelope', 'antlion', 'ape', 'aphid', 'armadillo', 'asp', 'baboon', 'badger', 'bandicoot', 'barnacle', 'barracuda', 'basilisk', 'bass', 'bat', 'bear', 'beaver', 'bedbug', 'bee', 'beetle', 'bird', 'bison', 'blackbird', 'boa', 'boar', 'bobcat', 'bobolink', 'bonobo', 'booby', 'bovid', 'bug', 'butterfly', 'buzzard', 'camel', 'canid', 'capybara', 'cardinal', 'caribou', 'carp', 'cat', 'catshark', 'caterpillar', 'catfish', 'cattle', 'centipede', 'cephalopod', 'chameleon', 'cheetah', 'chickadee', 'chicken', 'chimpanzee', 'chinchilla', 'chipmunk', 'clam', 'clownfish', 'cobra', 'cockroach', 'cod', 'condor', 'constrictor', 'coral', 'cougar', 'cow', 'coyote', 'crab', 'crane', 'crawdad', 'crayfish', 'cricket', 'crocodile', 'crow', 'cuckoo', 'cicada', 'damselfly', 'deer', 'dingo', 'dinosaur', 'dog', 'dolphin', 'donkey', 'dormouse', 'dove', 'dragonfly', 'dragon', 'duck', 'eagle', 'earthworm', 'earwig', 'echidna', 'eel', 'egret', 'elephant', 'elk', 'emu', 'ermine', 'falcon', 'ferret', 'finch', 'firefly', 'fish', 'flamingo', 'flea', 'fly', 'flyingfish', 'fowl', 'fox', 'frog', 'gamefowl', 'galliform', 'gazelle', 'gecko', 'gerbil', 'gibbon', 'giraffe', 'goat', 'goldfish', 'goose', 'gopher', 'gorilla', 'grasshopper', 'grouse', 'guan', 'guanaco', 'guineafowl', 'gull', 'guppy', 'haddock', 'halibut', 'hamster', 'hare', 'harrier', 'hawk', 'hedgehog', 'heron', 'herring', 'hippopotamus', 'hookworm', 'hornet', 'horse', 'hoverfly', 'hummingbird', 'hyena', 'iguana', 'impala', 'jackal', 'jaguar', 'jay', 'jellyfish', 'junglefowl', 'kangaroo', 'kingfisher', 'kite', 'kiwi', 'koala', 'koi', 'krill', 'ladybug', 'lamprey', 'landfowl', 'lark', 'leech', 'lemming', 'lemur', 'leopard', 'leopon', 'limpet', 'lion', 'lizard', 'llama', 'lobster', 'locust', 'loon', 'louse', 'lungfish', 'lynx', 'macaw', 'mackerel', 'magpie', 'mammal', 'manatee', 'mandrill', 'marlin', 'marmoset', 'marmot', 'marsupial', 'marten', 'mastodon', 'meadowlark', 'meerkat', 'mink', 'minnow', 'mite', 'mockingbird', 'mole', 'mollusk', 'mongoose', 'monkey', 'moose', 'mosquito', 'moth', 'mouse', 'mule', 'muskox', 'narwhal', 'newt', 'nightingale', 'ocelot', 'octopus', 'opossum', 'orangutan', 'orca', 'ostrich', 'otter', 'owl', 'ox', 'panda', 'panther', 'parakeet', 'parrot', 'parrotfish', 'partridge', 'peacock', 'peafowl', 'pelican', 'penguin', 'perch', 'pheasant', 'pig', 'pigeon', 'pike', 'pinniped', 'piranha', 'planarian', 'platypus', 'pony', 'porcupine', 'porpoise', 'possum', 'prawn', 'primate', 'ptarmigan', 'puffin', 'puma', 'python', 'quail', 'quelea', 'quokka', 'rabbit', 'raccoon', 'rat', 'rattlesnake', 'raven', 'reindeer', 'reptile', 'rhinoceros', 'roadrunner', 'rodent', 'rook', 'rooster', 'roundworm', 'sailfish', 'salamander', 'salmon', 'sawfish', 'scallop', 'scorpion', 'seahorse', 'shark', 'sheep', 'shrew', 'shrimp', 'silkworm', 'silverfish', 'skink', 'skunk', 'sloth', 'slug', 'smelt', 'snail', 'snake', 'snipe', 'sole', 'sparrow', 'spider', 'spoonbill', 'squid', 'squirrel', 'starfish', 'stingray', 'stoat', 'stork', 'sturgeon', 'swallow', 'swan', 'swift', 'swordfish', 'swordtail', 'tahr', 'takin', 'tapir', 'tarantula', 'tarsier', 'termite', 'tern', 'thrush', 'tick', 'tiger', 'tiglon', 'toad', 'tortoise', 'toucan', 'trout', 'tuna', 'turkey', 'turtle', 'tyrannosaurus', 'urial', 'vicuna', 'viper', 'vole', 'vulture', 'wallaby', 'walrus', 'wasp', 'warbler', 'weasel', 'whale', 'whippet', 'whitefish', 'wildcat', 'wildebeest', 'wildfowl', 'wolf', 'wolverine', 'wombat', 'woodpecker', 'worm', 'wren', 'xerinae', 'yak', 'zebra', 'alpaca', 'cat', 'cattle', 'chicken', 'dog', 'donkey', 'ferret', 'gayal', 'goldfish', 'guppy', 'horse', 'koi', 'llama', 'sheep', 'yak'];
    /***/
  },

  /***/
  "./src/app/shared/unique-names-generator/unique-names-generator.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/unique-names-generator/unique-names-generator.ts ***!
    \*************************************************************************/

  /*! exports provided: generateRandomName */

  /***/
  function srcAppSharedUniqueNamesGeneratorUniqueNamesGeneratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateRandomName", function () {
      return generateRandomName;
    });
    /* harmony import */


    var _dictionaries_adjectives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dictionaries/adjectives */
    "./src/app/shared/unique-names-generator/dictionaries/adjectives.ts");
    /* harmony import */


    var _dictionaries_animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dictionaries/animals */
    "./src/app/shared/unique-names-generator/dictionaries/animals.ts");

    var UniqueNamesGenerator = /*#__PURE__*/function () {
      function UniqueNamesGenerator(adjectives, animals) {
        _classCallCheck(this, UniqueNamesGenerator);

        this.adjectives = adjectives;
        this.animals = animals;
      }

      _createClass(UniqueNamesGenerator, [{
        key: "generate",
        value: function generate() {
          var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';

          if (!this.adjectives || !this.animals) {
            return null;
          }

          var adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
          var animal = this.animals[Math.floor(Math.random() * this.animals.length)];
          return "".concat(adjective).concat(separator).concat(animal);
        }
      }]);

      return UniqueNamesGenerator;
    }();

    var generateRandomName = function generateRandomName() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '_';
      var uniqueNamesGenerator = new UniqueNamesGenerator(_dictionaries_adjectives__WEBPACK_IMPORTED_MODULE_0__["adjectives"], _dictionaries_animals__WEBPACK_IMPORTED_MODULE_1__["animals"]);
      return uniqueNamesGenerator.generate(separator);
    };
    /***/

  },

  /***/
  "./src/app/utils/mark-for-translation.ts":
  /*!***********************************************!*\
    !*** ./src/app/utils/mark-for-translation.ts ***!
    \***********************************************/

  /*! exports provided: markForTranslation */

  /***/
  function srcAppUtilsMarkForTranslationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "markForTranslation", function () {
      return markForTranslation;
    });

    function markForTranslation(str) {
      return str;
    }
    /***/

  },

  /***/
  "./src/app/utils/utils.ts":
  /*!********************************!*\
    !*** ./src/app/utils/utils.ts ***!
    \********************************/

  /*! exports provided: Utils */

  /***/
  function srcAppUtilsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });

    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "capitalizeString",
        value: function capitalizeString(value) {
          var result = value.split(' ').map(function (l) {
            return l[0].toUpperCase() + l.substr(1);
          }).join(' ');
          return result;
        }
      }]);

      return Utils;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      appName: 'boa-ga-client',
      production: false,
      supportedLanguages: ['en', 'ru', 'ua'],
      apiUrl: 'http://localhost:3000/api/',
      socketUrl: 'ws://localhost:3000',
      bugsnagApiKey: '3132a4044e49d9ba9d68bb745f6f6a70'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/boa-ga/boa-ga/apps/boa-ga/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map