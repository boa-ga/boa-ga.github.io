function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dqiB:function(e,t,a){"use strict";a.r(t),a.d(t,"GameMunchkinModule",(function(){return B}));var n,c=a("tyNb"),r=a("RtVY"),i=a("2zyY"),s=a("XNiG"),o=a("1G5W"),l=a("vkgz"),b=a("eIep"),u=a("JX91"),m=a("rQPq"),p=a("GI87"),h=a("nGYV"),d=a("0hWG"),f=a("fXoL"),y=a("Ea0c"),g=a("AytR"),v=a("tk/3"),C=((n=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.apiBaseUrl="".concat(g.a.apiUrl,"games/munchkin")}return _createClass(e,[{key:"joinGame",value:function(e){return this.httpClient.post("".concat(this.apiBaseUrl,"/").concat(e,"/users"),null)}},{key:"getGameById",value:function(e){return this.httpClient.get("".concat(this.apiBaseUrl,"/").concat(e))}}]),e}()).\u0275fac=function(e){return new(e||n)(f.Yb(v.b))},n.\u0275prov=f.Kb({token:n,factory:n.\u0275fac}),n),k=a("kH6v"),I=a("ofXK"),U=a("Wp6s"),O=a("NFeN"),_=a("MutI"),w=a("XiUz"),x=a("sYmb");function S(e,t){1&e&&(f.Ub(0,"mat-card-subtitle"),f.yc(1),f.hc(2,"translate"),f.Tb()),2&e&&(f.Cb(1),f.Ac(" ",f.ic(2,1,"Me")," "))}function T(e,t){if(1&e&&(f.Ub(0,"mat-card",1),f.Ub(1,"mat-card-header"),f.Pb(2,"mat-icon",2),f.Ub(3,"mat-card-title",3),f.yc(4),f.Tb(),f.xc(5,S,3,3,"mat-card-subtitle",4),f.Tb(),f.Ub(6,"mat-card-content"),f.Ub(7,"mat-list"),f.Ub(8,"mat-list-item"),f.Ub(9,"span",5),f.yc(10),f.hc(11,"translate"),f.Tb(),f.Ub(12,"span",6),f.yc(13),f.Tb(),f.Tb(),f.Ub(14,"mat-list-item"),f.Ub(15,"span",5),f.yc(16),f.hc(17,"translate"),f.Tb(),f.Ub(18,"span",6),f.yc(19),f.Tb(),f.Tb(),f.Ub(20,"mat-list-item"),f.Ub(21,"span",5),f.yc(22),f.hc(23,"translate"),f.Tb(),f.Ub(24,"span",6),f.yc(25),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb()),2&e){var a=t.$implicit,n=f.gc();f.Fb("my-card",a.id===n.myUserId),f.Cb(4),f.Ac(" ",a.name," "),f.Cb(1),f.mc("ngIf",a.id===n.myUserId),f.Cb(5),f.Ac(" ",f.ic(11,10,"Level")," "),f.Cb(3),f.zc(a.level),f.Cb(3),f.Ac(" ",f.ic(17,12,"Cards in hands")," "),f.Cb(3),f.Ac(" ",a.cardIdsInHands.length," "),f.Cb(3),f.Ac(" ",f.ic(23,14,"Cards on table")," "),f.Cb(3),f.Ac(" ",a.cardIdsOnTable.length," ")}}var j,M,P,G,$=((M=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=f.Ib({type:M,selectors:[["bg-munchkin-players"]],inputs:{players:"players",myUserId:"myUserId"},decls:1,vars:1,consts:[["class","player-card",3,"my-card",4,"ngFor","ngForOf"],[1,"player-card"],["mat-card-avatar","","svgIcon","icon-user",1,"player-card__avatar"],[1,"player-card__title"],[4,"ngIf"],["fxFlex","",1,"player-card__property-name"],[1,"player-card__property-value"]],template:function(e,t){1&e&&f.xc(0,T,26,16,"mat-card",0),2&e&&f.mc("ngForOf",t.players)},directives:[I.j,U.a,U.d,O.a,U.b,U.g,I.k,U.c,_.a,_.c,w.a,U.f],pipes:[x.c],styles:["[_nghost-%COMP%]{background-color:#e5e5e5}.player-card[_ngcontent-%COMP%]{margin:10px}.player-card__property-name[_ngcontent-%COMP%]{font-weight:700}"]}),M),F=((j=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=f.Ib({type:j,selectors:[["bg-munchkin-board"]],decls:1,vars:0,template:function(e,t){1&e&&f.yc(0,"Board\n")},styles:["[_nghost-%COMP%]{background-color:grey}"]}),j),A=a("Et1r"),D=[{path:":gameId",component:(P=function(){function e(t,a,n,c,r){_classCallCheck(this,e),this.route=t,this.socketService=a,this.gameMunchkinService=n,this.chatService=c,this.userSettingsService=r,this.tearDown$=new s.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.initGame(),this.initChat()}},{key:"ngOnDestroy",value:function(){this.gameId&&this.socketService.emit(new p.e(this.gameId)),this.tearDown$.next(),this.tearDown$.complete()}},{key:"initGame",value:function(){var e=this;this.route.params.pipe(Object(o.a)(this.tearDown$),Object(l.a)((function(t){return e.gameId=t.gameId})),Object(b.a)((function(){return e.gameMunchkinService.joinGame(e.gameId)})),Object(b.a)((function(){return e.socketService.listenAnyOf(p.c,p.d,h.b).pipe(Object(u.a)(-1),Object(o.a)(e.tearDown$),Object(b.a)((function(){return e.gameMunchkinService.getGameById(e.gameId)})),Object(l.a)((function(t){return e.game=t})))}))).subscribe()}},{key:"initChat",value:function(){var e=this;this.userSettingsService.userSettings$.pipe(Object(o.a)(this.tearDown$)).subscribe((function(t){e.myUserId=t.id,e.chatService.myName=t.name})),this.socketService.listen(m.a).pipe(Object(o.a)(this.tearDown$)).subscribe((function(t){return e.chatService.sendMessage(t.payload.from,t.payload.text)})),this.chatService.myMessages$.pipe(Object(o.a)(this.tearDown$)).subscribe((function(t){var a=new m.a({gameId:e.gameId,from:e.chatService.myName,text:t});e.socketService.emit(a)}))}}]),e}(),P.\u0275fac=function(e){return new(e||P)(f.Ob(c.a),f.Ob(y.a),f.Ob(C),f.Ob(d.a),f.Ob(k.a))},P.\u0275cmp=f.Ib({type:P,selectors:[["bg-game-munchkin"]],features:[f.Bb([d.a])],decls:4,vars:2,consts:[["fxFlex","250px",3,"players","myUserId"],["fxFlex","","fxLayout","column"],["fxFlex",""],["fxFlex","0 0 300px"]],template:function(e,t){1&e&&(f.Pb(0,"bg-munchkin-players",0),f.Ub(1,"div",1),f.Pb(2,"bg-munchkin-board",2),f.Pb(3,"bg-chat",3),f.Tb()),2&e&&f.mc("players",t.game&&t.game.players)("myUserId",t.myUserId)},directives:[$,w.a,w.c,F,A.a],styles:["[_nghost-%COMP%]{height:calc(100vh - 64px)}"]}),P)}],B=((G=function e(){_classCallCheck(this,e)}).\u0275mod=f.Mb({type:G}),G.\u0275inj=f.Lb({factory:function(e){return new(e||G)},providers:[C],imports:[[c.i.forChild(D),i.a,r.a]]}),G)}}]);