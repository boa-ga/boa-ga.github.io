(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dqiB:function(e,t,a){"use strict";a.r(t),a.d(t,"GameMunchkinModule",(function(){return $}));var c=a("sEIs"),s=a("RtVY"),i=a("2zyY"),n=a("l3rL"),r=a("ZTXN"),b=a("8j5Y"),o=a("TLy2"),h=a("jIqt"),m=a("kuMc"),l=a("5U9e"),p=a("u5fr"),d=a("0hWG"),u=a("JPLv"),g=a("EM62"),y=a("vobO");let f=(()=>{class e{constructor(e,t){this.httpClient=e,this.configurationService=t,this.apiBaseUrl=`${this.configurationService.configuration.apiUrl}games/munchkin`}joinGame(e){return this.httpClient.post(`${this.apiBaseUrl}/${e}/users`,null)}getGameById(e){return this.httpClient.get(`${this.apiBaseUrl}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(g.Yb(y.b),g.Yb(u.a))},e.\u0275prov=g.Kb({token:e,factory:e.\u0275fac}),e})();var v=a("2kYt"),I=a("Meci"),U=a("bFHC"),O=a("nKqi"),C=a("qFEQ"),k=a("0h2g");function w(e,t){1&e&&(g.Ub(0,"mat-card-subtitle"),g.yc(1),g.hc(2,"translate"),g.Tb()),2&e&&(g.Cb(1),g.Ac(" ",g.ic(2,1,"Me")," "))}function x(e,t){if(1&e&&(g.Ub(0,"mat-card",1),g.Ub(1,"mat-card-header"),g.Pb(2,"mat-icon",2),g.Ub(3,"mat-card-title",3),g.yc(4),g.Tb(),g.xc(5,w,3,3,"mat-card-subtitle",4),g.Tb(),g.Ub(6,"mat-card-content"),g.Ub(7,"mat-list"),g.Ub(8,"mat-list-item"),g.Ub(9,"span",5),g.yc(10),g.hc(11,"translate"),g.Tb(),g.Ub(12,"span",6),g.yc(13),g.Tb(),g.Tb(),g.Ub(14,"mat-list-item"),g.Ub(15,"span",5),g.yc(16),g.hc(17,"translate"),g.Tb(),g.Ub(18,"span",6),g.yc(19),g.Tb(),g.Tb(),g.Ub(20,"mat-list-item"),g.Ub(21,"span",5),g.yc(22),g.hc(23,"translate"),g.Tb(),g.Ub(24,"span",6),g.yc(25),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&e){const e=t.$implicit,a=g.gc();g.Fb("my-card",e.id===a.myUserId),g.Cb(4),g.Ac(" ",e.name," "),g.Cb(1),g.mc("ngIf",e.id===a.myUserId),g.Cb(5),g.Ac(" ",g.ic(11,10,"Level")," "),g.Cb(3),g.zc(e.level),g.Cb(3),g.Ac(" ",g.ic(17,12,"Cards in hands")," "),g.Cb(3),g.Ac(" ",e.cardIdsInHands.length," "),g.Cb(3),g.Ac(" ",g.ic(23,14,"Cards on table")," "),g.Cb(3),g.Ac(" ",e.cardIdsOnTable.length," ")}}let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Ib({type:e,selectors:[["bg-munchkin-players"]],inputs:{players:"players",myUserId:"myUserId"},decls:1,vars:1,consts:[["class","player-card",3,"my-card",4,"ngFor","ngForOf"],[1,"player-card"],["mat-card-avatar","","svgIcon","icon-user",1,"player-card__avatar"],[1,"player-card__title"],[4,"ngIf"],["fxFlex","",1,"player-card__property-name"],[1,"player-card__property-value"]],template:function(e,t){1&e&&g.xc(0,x,26,16,"mat-card",0),2&e&&g.mc("ngForOf",t.players)},directives:[v.j,I.a,I.d,U.a,I.b,I.g,v.k,I.c,O.a,O.c,C.a,I.f],pipes:[k.a],styles:["[_nghost-%COMP%]{background-color:#e5e5e5}.player-card[_ngcontent-%COMP%]{margin:10px}.player-card__property-name[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Ib({type:e,selectors:[["bg-munchkin-board"]],decls:1,vars:0,template:function(e,t){1&e&&g.yc(0,"Board\n")},styles:["[_nghost-%COMP%]{background-color:grey}"],changeDetection:0}),e})();var j=a("Et1r");const M=[{path:":gameId",component:(()=>{class e{constructor(e,t,a,c,s){this.route=e,this.socketService=t,this.gameMunchkinService=a,this.chatService=c,this.userSettingsService=s,this.tearDown$=new r.a}ngOnInit(){this.initGame(),this.initChat()}ngOnDestroy(){this.gameId&&this.socketService.emit(new n.h(this.gameId)),this.tearDown$.next(),this.tearDown$.complete()}initGame(){this.route.params.pipe(Object(b.a)(e=>this.gameId=e.gameId),Object(o.a)(()=>this.gameMunchkinService.joinGame(this.gameId)),Object(o.a)(()=>this.socketService.listenAnyOf(n.f,n.g,n.j).pipe(Object(h.a)(-1),Object(o.a)(()=>this.gameMunchkinService.getGameById(this.gameId)),Object(b.a)(e=>this.game=e))),Object(m.a)(this.tearDown$)).subscribe()}initChat(){this.userSettingsService.userSettings$.pipe(Object(m.a)(this.tearDown$)).subscribe(e=>{this.myUserId=e.id,this.chatService.myName=e.name}),this.socketService.listen(n.a).pipe(Object(m.a)(this.tearDown$)).subscribe(e=>this.chatService.sendMessage(e.payload.from,e.payload.text)),this.chatService.myMessages$.pipe(Object(m.a)(this.tearDown$)).subscribe(e=>{const t=new n.a({gameId:this.gameId,from:this.chatService.myName,text:e});this.socketService.emit(t)})}}return e.\u0275fac=function(t){return new(t||e)(g.Ob(c.a),g.Ob(l.a),g.Ob(f),g.Ob(d.a),g.Ob(p.a))},e.\u0275cmp=g.Ib({type:e,selectors:[["bg-game-munchkin"]],features:[g.Bb([d.a])],decls:7,vars:5,consts:[["fxFlex","250px",3,"players","myUserId"],["fxFlex","","fxLayout","column"],["fxFlex",""],["fxFlex","0 0 300px"]],template:function(e,t){1&e&&(g.Pb(0,"bg-munchkin-players",0),g.Ub(1,"div",1),g.Pb(2,"bg-munchkin-board",2),g.Ub(3,"div"),g.yc(4),g.hc(5,"translate"),g.Tb(),g.Pb(6,"bg-chat",3),g.Tb()),2&e&&(g.mc("players",t.game&&t.game.players)("myUserId",t.myUserId),g.Cb(4),g.Ac(" ",g.ic(5,3,"Games")," "))},directives:[S,C.a,C.c,T,j.a],pipes:[k.a],styles:["[_nghost-%COMP%]{height:calc(100vh - 64px)}"],changeDetection:0}),e})()}];let $=(()=>{class e{}return e.\u0275mod=g.Mb({type:e}),e.\u0275inj=g.Lb({factory:function(t){return new(t||e)},providers:[f],imports:[[c.i.forChild(M),i.a,s.a]]}),e})()}}]);