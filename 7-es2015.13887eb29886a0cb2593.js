(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{aaQ5:function(e,t,s){var r={"./en.json":["5+an",11],"./ru.json":["ECuT",12],"./ua.json":["GgiT",13]};function n(e){if(!s.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return s.e(t[1]).then((function(){return s.t(n,3)}))}n.keys=function(){return Object.keys(r)},n.id="aaQ5",e.exports=n},kqdH:function(e,t,s){"use strict";s.r(t),s.d(t,"GameTestModule",(function(){return I}));var r=s("sEIs"),n=s("b5yJ"),a=s("GoAz"),i=s("YtkY"),c=s("/oaF"),o=s("RtVY"),u=s("2zyY"),h=s("l3rL"),b=s("ZTXN"),l=s("8j5Y"),p=s("TLy2"),f=s("kuMc"),m=s("5U9e"),g=s("u5fr"),d=s("0hWG"),v=s("JPLv"),y=s("EM62"),w=s("vobO");let O=(()=>{class e{constructor(e,t){this.httpClient=e,this.configurationService=t,this.apiBaseUrl=`${this.configurationService.configuration.apiUrl}games/test`}joinGame(e){return this.httpClient.post(`${this.apiBaseUrl}/${e}/users`,null)}}return e.\u0275fac=function(t){return new(t||e)(y.Yb(w.b),y.Yb(v.a))},e.\u0275prov=y.Kb({token:e,factory:e.\u0275fac}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y.Ib({type:e,selectors:[["bg-test-players"]],decls:1,vars:0,template:function(e,t){1&e&&y.yc(0,"Players\n")},styles:[""],changeDetection:0}),e})();var x=s("qFEQ");let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y.Ib({type:e,selectors:[["bg-test-board"]],decls:1,vars:0,template:function(e,t){1&e&&y.yc(0,"Board\n")},styles:["[_nghost-%COMP%]{background-color:grey}"],changeDetection:0}),e})();var k=s("Et1r");const D=[{path:":gameId",component:(()=>{class e{constructor(e,t,s,r,n){this.route=e,this.socketService=t,this.gameTestService=s,this.chatService=r,this.userSettingsService=n,this.tearDown$=new b.a}ngOnInit(){this.route.params.pipe(Object(l.a)(e=>this.gameId=e.gameId),Object(p.a)(()=>this.gameTestService.joinGame(this.gameId)),Object(f.a)(this.tearDown$)).subscribe(),this.userSettingsService.userSettings$.pipe(Object(f.a)(this.tearDown$)).subscribe(e=>this.chatService.myName=e.name),this.socketService.listen(h.a).pipe(Object(f.a)(this.tearDown$)).subscribe(e=>this.chatService.sendMessage(e.payload.from,e.payload.text)),this.chatService.myMessages$.pipe(Object(f.a)(this.tearDown$)).subscribe(e=>{const t=new h.a({gameId:this.gameId,from:this.chatService.myName,text:e});this.socketService.emit(t)})}ngOnDestroy(){this.gameId&&this.socketService.emit(new h.h(this.gameId)),this.tearDown$.next(),this.tearDown$.complete()}}return e.\u0275fac=function(t){return new(t||e)(y.Ob(r.a),y.Ob(m.a),y.Ob(O),y.Ob(d.a),y.Ob(g.a))},e.\u0275cmp=y.Ib({type:e,selectors:[["bg-game-test"]],features:[y.Bb([d.a])],decls:4,vars:0,consts:[["fxFlex","250px"],["fxFlex","","fxLayout","column"],["fxFlex",""],["fxFlex","0 0 300px"]],template:function(e,t){1&e&&(y.Pb(0,"bg-test-players",0),y.Ub(1,"div",1),y.Pb(2,"bg-test-board",2),y.Pb(3,"bg-chat",3),y.Tb())},directives:[S,x.a,x.c,j,k.a],styles:["[_nghost-%COMP%]{height:calc(100vh - 64px)}"],changeDetection:0}),e})()}];s("xxSF");let I=(()=>{class e{}return e.\u0275mod=y.Mb({type:e}),e.\u0275inj=y.Lb({factory:function(t){return new(t||e)},providers:[O],imports:[[r.i.forChild(D),n.c.forChild([{provide:n.b,useFactory:()=>new c.a(e=>Object(a.a)(s("aaQ5")(`./${e}.json`)).pipe(Object(i.a)(e=>e.default)))}]),u.a,o.a]]}),e})()}}]);