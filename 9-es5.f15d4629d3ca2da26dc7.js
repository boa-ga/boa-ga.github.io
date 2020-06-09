function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dqiB:function(e,t,a){"use strict";a.r(t),a.d(t,"GameMunchkinModule",(function(){return A}));var n,c=a("sEIs"),i=a("RtVY"),r=a("2zyY"),s=a("l3rL"),o=a("ZTXN"),l=a("8j5Y"),b=a("TLy2"),u=a("jIqt"),h=a("kuMc"),m=a("5U9e"),p=a("u5fr"),d=a("0hWG"),f=a("JPLv"),y=a("EM62"),g=a("vobO"),v=((n=function(){function e(t,a){_classCallCheck(this,e),this.httpClient=t,this.configurationService=a,this.apiBaseUrl="".concat(this.configurationService.configuration.apiUrl,"games/munchkin")}return _createClass(e,[{key:"joinGame",value:function(e){return this.httpClient.post("".concat(this.apiBaseUrl,"/").concat(e,"/users"),null)}},{key:"getGameById",value:function(e){return this.httpClient.get("".concat(this.apiBaseUrl,"/").concat(e))}}]),e}()).\u0275fac=function(e){return new(e||n)(y.Yb(g.b),y.Yb(f.a))},n.\u0275prov=y.Kb({token:n,factory:n.\u0275fac}),n),C=a("2kYt"),k=a("Meci"),I=a("bFHC"),U=a("nKqi"),O=a("qFEQ"),_=a("0h2g");function w(e,t){1&e&&(y.Ub(0,"mat-card-subtitle"),y.yc(1),y.hc(2,"translate"),y.Tb()),2&e&&(y.Cb(1),y.Ac(" ",y.ic(2,1,"Me")," "))}function T(e,t){if(1&e&&(y.Ub(0,"mat-card",1),y.Ub(1,"mat-card-header"),y.Pb(2,"mat-icon",2),y.Ub(3,"mat-card-title",3),y.yc(4),y.Tb(),y.xc(5,w,3,3,"mat-card-subtitle",4),y.Tb(),y.Ub(6,"mat-card-content"),y.Ub(7,"mat-list"),y.Ub(8,"mat-list-item"),y.Ub(9,"span",5),y.yc(10),y.hc(11,"translate"),y.Tb(),y.Ub(12,"span",6),y.yc(13),y.Tb(),y.Tb(),y.Ub(14,"mat-list-item"),y.Ub(15,"span",5),y.yc(16),y.hc(17,"translate"),y.Tb(),y.Ub(18,"span",6),y.yc(19),y.Tb(),y.Tb(),y.Ub(20,"mat-list-item"),y.Ub(21,"span",5),y.yc(22),y.hc(23,"translate"),y.Tb(),y.Ub(24,"span",6),y.yc(25),y.Tb(),y.Tb(),y.Tb(),y.Tb(),y.Tb()),2&e){var a=t.$implicit,n=y.gc();y.Fb("my-card",a.id===n.myUserId),y.Cb(4),y.Ac(" ",a.name," "),y.Cb(1),y.mc("ngIf",a.id===n.myUserId),y.Cb(5),y.Ac(" ",y.ic(11,10,"Level")," "),y.Cb(3),y.zc(a.level),y.Cb(3),y.Ac(" ",y.ic(17,12,"Cards in hands")," "),y.Cb(3),y.Ac(" ",a.cardIdsInHands.length," "),y.Cb(3),y.Ac(" ",y.ic(23,14,"Cards on table")," "),y.Cb(3),y.Ac(" ",a.cardIdsOnTable.length," ")}}var x,S,j,M,P=((S=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=y.Ib({type:S,selectors:[["bg-munchkin-players"]],inputs:{players:"players",myUserId:"myUserId"},decls:1,vars:1,consts:[["class","player-card",3,"my-card",4,"ngFor","ngForOf"],[1,"player-card"],["mat-card-avatar","","svgIcon","icon-user",1,"player-card__avatar"],[1,"player-card__title"],[4,"ngIf"],["fxFlex","",1,"player-card__property-name"],[1,"player-card__property-value"]],template:function(e,t){1&e&&y.xc(0,T,26,16,"mat-card",0),2&e&&y.mc("ngForOf",t.players)},directives:[C.j,k.a,k.d,I.a,k.b,k.g,C.k,k.c,U.a,U.c,O.a,k.f],pipes:[_.a],styles:["[_nghost-%COMP%]{background-color:#e5e5e5}.player-card[_ngcontent-%COMP%]{margin:10px}.player-card__property-name[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:0}),S),D=((x=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=y.Ib({type:x,selectors:[["bg-munchkin-board"]],decls:1,vars:0,template:function(e,t){1&e&&y.yc(0,"Board\n")},styles:["[_nghost-%COMP%]{background-color:grey}"],changeDetection:0}),x),F=a("Et1r"),$=[{path:":gameId",component:(j=function(){function e(t,a,n,c,i){_classCallCheck(this,e),this.route=t,this.socketService=a,this.gameMunchkinService=n,this.chatService=c,this.userSettingsService=i,this.tearDown$=new o.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.initGame(),this.initChat()}},{key:"ngOnDestroy",value:function(){this.gameId&&this.socketService.emit(new s.h(this.gameId)),this.tearDown$.next(),this.tearDown$.complete()}},{key:"initGame",value:function(){var e=this;this.route.params.pipe(Object(l.a)((function(t){return e.gameId=t.gameId})),Object(b.a)((function(){return e.gameMunchkinService.joinGame(e.gameId)})),Object(b.a)((function(){return e.socketService.listenAnyOf(s.f,s.g,s.j).pipe(Object(u.a)(-1),Object(b.a)((function(){return e.gameMunchkinService.getGameById(e.gameId)})),Object(l.a)((function(t){return e.game=t})))})),Object(h.a)(this.tearDown$)).subscribe()}},{key:"initChat",value:function(){var e=this;this.userSettingsService.userSettings$.pipe(Object(h.a)(this.tearDown$)).subscribe((function(t){e.myUserId=t.id,e.chatService.myName=t.name})),this.socketService.listen(s.a).pipe(Object(h.a)(this.tearDown$)).subscribe((function(t){return e.chatService.sendMessage(t.payload.from,t.payload.text)})),this.chatService.myMessages$.pipe(Object(h.a)(this.tearDown$)).subscribe((function(t){var a=new s.a({gameId:e.gameId,from:e.chatService.myName,text:t});e.socketService.emit(a)}))}}]),e}(),j.\u0275fac=function(e){return new(e||j)(y.Ob(c.a),y.Ob(m.a),y.Ob(v),y.Ob(d.a),y.Ob(p.a))},j.\u0275cmp=y.Ib({type:j,selectors:[["bg-game-munchkin"]],features:[y.Bb([d.a])],decls:7,vars:5,consts:[["fxFlex","250px",3,"players","myUserId"],["fxFlex","","fxLayout","column"],["fxFlex",""],["fxFlex","0 0 300px"]],template:function(e,t){1&e&&(y.Pb(0,"bg-munchkin-players",0),y.Ub(1,"div",1),y.Pb(2,"bg-munchkin-board",2),y.Ub(3,"div"),y.yc(4),y.hc(5,"translate"),y.Tb(),y.Pb(6,"bg-chat",3),y.Tb()),2&e&&(y.mc("players",t.game&&t.game.players)("myUserId",t.myUserId),y.Cb(4),y.Ac(" ",y.ic(5,3,"Games")," "))},directives:[P,O.a,O.c,D,F.a],pipes:[_.a],styles:["[_nghost-%COMP%]{height:calc(100vh - 64px)}"],changeDetection:0}),j)}],A=((M=function e(){_classCallCheck(this,e)}).\u0275mod=y.Mb({type:M}),M.\u0275inj=y.Lb({factory:function(e){return new(e||M)},providers:[v],imports:[[c.i.forChild($),r.a,i.a]]}),M)}}]);