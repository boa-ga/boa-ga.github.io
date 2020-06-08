function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~game-munchkin-game-munchkin-module~game-test-game-test-module"], {
  /***/
  "./src/app/shared/chat/chat.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/chat/chat.component.ts ***!
    \***********************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppSharedChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
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


    var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/shared/chat/chat.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["messagesList"];

    function ChatComponent_mat_list_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", message_r2.isSystem ? "icon-info" : "icon-user");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.text);
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(chatService) {
        _classCallCheck(this, ChatComponent);

        this.chatService = chatService;
        this.tearDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isScrollToLastRequired = false;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.chatService.messages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.tearDown$)).subscribe(function (messages) {
            _this.messages = messages;
            _this.isScrollToLastRequired = true;
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.isScrollToLastRequired) {
            this.scrollToBottom();
            this.isScrollToLastRequired = false;
          }
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return item.timestamp;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.chatService.sendMessageFromMe(this.currentMessage);
          this.currentMessage = '';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tearDown$.next();
          this.tearDown$.complete();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          var nativeEl = this.messagesList.nativeElement;
          nativeEl.scrollTop = nativeEl.scrollHeight;
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["bg-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messagesList = _t.first);
        }
      },
      decls: 11,
      vars: 10,
      consts: [["fxFlex", "", "fxLayout", "column"], ["fxFlex", "", 1, "chat__messages-container"], ["messagesList", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxFlex", "0 0 auto", 1, "chat__form", 3, "ngSubmit"], ["fxFlex", ""], ["matInput", "", "name", "message", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-button", "", "type", "submit", 3, "disabled"], ["mat-list-avatar", "", 1, "chat__message-icon", 3, "svgIcon"], ["mat-line", ""], [1, "chat__message-title"], [1, "chat__message-text"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_mat_list_item_3_Template, 7, 3, "mat-list-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.currentMessage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages)("ngForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "Message"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.currentMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "Send"), " ");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
      styles: [".chat__messages-container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.chat__message-icon[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n\n.chat__message-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.chat__message-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  white-space: pre-line;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JvYS1nYS9ib2EtZ2EvYXBwcy9ib2EtZ2Evc3JjL2FwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ib2EtZ2Evc3JjL2FwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsWUFSVTtFQVNWLFdBVFU7QUNPWjs7QURLQTtFQUNFLGVBWmtCO0VBYWxCLGlCQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBREtBO0VBQ0UsZUFsQmtCO0VBbUJsQixTQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0ZGIiwiZmlsZSI6ImFwcHMvYm9hLWdhL3NyYy9hcHAvc2hhcmVkL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uLXNpemU6IDI0cHg7XG4kbWVzc2FnZS1mb250LXNpemU6IDE0cHg7XG5cbi5jaGF0X19tZXNzYWdlcy1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNoYXRfX21lc3NhZ2UtaWNvbiB7XG4gIGhlaWdodDogJGljb24tc2l6ZTtcbiAgd2lkdGg6ICRpY29uLXNpemU7XG59XG5cbi5jaGF0X19tZXNzYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAkbWVzc2FnZS1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaGF0X19tZXNzYWdlLXRleHQge1xuICBmb250LXNpemU6ICRtZXNzYWdlLWZvbnQtc2l6ZTtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiIsIi5jaGF0X19tZXNzYWdlcy1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNoYXRfX21lc3NhZ2UtaWNvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi5jaGF0X19tZXNzYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2hhdF9fbWVzc2FnZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bg-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.scss']
        }]
      }], function () {
        return [{
          type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
        }];
      }, {
        messagesList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['messagesList', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/chat/chat.module.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/chat/chat.module.ts ***!
    \********************************************/

  /*! exports provided: ChatModule */

  /***/
  function srcAppSharedChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
      return ChatModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared-ui.module */
    "./src/app/shared/shared-ui.module.ts");
    /* harmony import */


    var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat.component */
    "./src/app/shared/chat/chat.component.ts");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/shared/chat/chat.service.ts");

    var ChatModule = function ChatModule() {
      _classCallCheck(this, ChatModule);
    };

    ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChatModule
    });
    ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChatModule_Factory(t) {
        return new (t || ChatModule)();
      },
      providers: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]],
      imports: [[_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, {
        declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]],
        imports: [_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]],
        exports: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_ui_module__WEBPACK_IMPORTED_MODULE_1__["SharedUIModule"]],
          declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]],
          providers: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]],
          exports: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/chat/chat.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/chat/chat.service.ts ***!
    \*********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppSharedChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var ChatService = /*#__PURE__*/function () {
      function ChatService() {
        _classCallCheck(this, ChatService);

        this.myName = 'Me';
        this.messages = [];
        this.messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.messages);
        this.myMessagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ChatService, [{
        key: "sendMessageFromMe",
        value: function sendMessageFromMe(text) {
          this.sendMessage(this.myName, text);
          this.myMessagesSubject.next(text);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(from, text) {
          this.messages.push({
            from: from,
            text: text,
            timestamp: new Date().toISOString()
          });
          this.messagesSubject.next(this.messages);
        }
      }, {
        key: "sendSystemMessage",
        value: function sendSystemMessage(text) {
          this.messages.push({
            text: text,
            isSystem: true,
            timestamp: new Date().toISOString()
          });
          this.messagesSubject.next(this.messages);
        }
      }, {
        key: "messages$",
        get: function get() {
          return this.messagesSubject.asObservable();
        }
      }, {
        key: "myMessages$",
        get: function get() {
          return this.myMessagesSubject.asObservable();
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)();
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~game-munchkin-game-munchkin-module~game-test-game-test-module-es5.js.map