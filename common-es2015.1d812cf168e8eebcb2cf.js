(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0hWG":function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s("2Vo4"),a=s("XNiG"),i=s("fXoL");let c=(()=>{class e{constructor(){this.myName="Me",this.messages=[],this.messagesSubject=new n.a(this.messages),this.myMessagesSubject=new a.a}get messages$(){return this.messagesSubject.asObservable()}get myMessages$(){return this.myMessagesSubject.asObservable()}sendMessageFromMe(e){this.sendMessage(this.myName,e),this.myMessagesSubject.next(e)}sendMessage(e,t){this.messages.push({from:e,text:t,timestamp:(new Date).toISOString()}),this.messagesSubject.next(this.messages)}sendSystemMessage(e){this.messages.push({text:e,isSystem:!0,timestamp:(new Date).toISOString()}),this.messagesSubject.next(this.messages)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})()},Et1r:function(e,t,s){"use strict";s.d(t,"a",(function(){return M}));var n=s("fXoL"),a=s("XNiG"),i=s("1G5W"),c=s("0hWG"),r=s("XiUz"),o=s("MutI"),m=s("ofXK"),g=s("3Pt+"),u=s("kmnG"),h=s("qFsG"),b=s("bTqV"),l=s("NFeN"),f=s("FKr1"),p=s("sYmb");const d=["messagesList"];function y(e,t){if(1&e&&(n.Ub(0,"mat-list-item"),n.Pb(1,"mat-icon",8),n.Ub(2,"div",9),n.Ub(3,"p",10),n.yc(4),n.Tb(),n.Ub(5,"p",11),n.yc(6),n.Tb(),n.Tb(),n.Tb()),2&e){const e=t.$implicit;n.Cb(1),n.mc("svgIcon",e.isSystem?"icon-info":"icon-user"),n.Cb(3),n.zc(e.from),n.Cb(2),n.zc(e.text)}}let M=(()=>{class e{constructor(e){this.chatService=e,this.tearDown$=new a.a,this.isScrollToLastRequired=!1}ngOnInit(){this.chatService.messages$.pipe(Object(i.a)(this.tearDown$)).subscribe(e=>{this.messages=e,this.isScrollToLastRequired=!0})}ngAfterViewChecked(){this.isScrollToLastRequired&&(this.scrollToBottom(),this.isScrollToLastRequired=!1)}trackByFn(e,t){return t.timestamp}onSubmit(){this.chatService.sendMessageFromMe(this.currentMessage),this.currentMessage=""}ngOnDestroy(){this.tearDown$.next(),this.tearDown$.complete()}scrollToBottom(){const e=this.messagesList.nativeElement;e.scrollTop=e.scrollHeight}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(c.a))},e.\u0275cmp=n.Ib({type:e,selectors:[["bg-chat"]],viewQuery:function(e,t){var s;1&e&&n.Cc(d,!0,n.l),2&e&&n.pc(s=n.dc())&&(t.messagesList=s.first)},decls:11,vars:10,consts:[["fxFlex","","fxLayout","column"],["fxFlex","",1,"chat__messages-container"],["messagesList",""],[4,"ngFor","ngForOf","ngForTrackBy"],["fxFlex","0 0 auto",1,"chat__form",3,"ngSubmit"],["fxFlex",""],["matInput","","name","message","autocomplete","off",3,"placeholder","ngModel","ngModelChange"],["mat-button","","type","submit",3,"disabled"],["mat-list-avatar","",1,"chat__message-icon",3,"svgIcon"],["mat-line",""],[1,"chat__message-title"],[1,"chat__message-text"]],template:function(e,t){1&e&&(n.Ub(0,"div",0),n.Ub(1,"mat-list",1,2),n.xc(3,y,7,3,"mat-list-item",3),n.Tb(),n.Ub(4,"form",4),n.cc("ngSubmit",(function(){return t.onSubmit()})),n.Ub(5,"mat-form-field",5),n.Ub(6,"input",6),n.cc("ngModelChange",(function(e){return t.currentMessage=e})),n.hc(7,"translate"),n.Tb(),n.Tb(),n.Ub(8,"button",7),n.yc(9),n.hc(10,"translate"),n.Tb(),n.Tb(),n.Tb()),2&e&&(n.Cb(3),n.mc("ngForOf",t.messages)("ngForTrackBy",t.trackByFn),n.Cb(3),n.nc("placeholder",n.ic(7,6,"Message")),n.mc("ngModel",t.currentMessage),n.Cb(2),n.mc("disabled",!t.currentMessage),n.Cb(1),n.Ac(" ",n.ic(10,8,"Send")," "))},directives:[r.a,r.c,o.a,m.j,g.k,g.g,g.h,u.b,h.a,g.a,g.f,g.i,b.b,o.c,l.a,o.b,f.g],pipes:[p.c],styles:[".chat__messages-container[_ngcontent-%COMP%]{overflow:auto}.chat__message-icon[_ngcontent-%COMP%]{height:24px;width:24px}.chat__message-title[_ngcontent-%COMP%]{font-size:14px;font-weight:700;margin:0}.chat__message-text[_ngcontent-%COMP%]{font-size:14px;margin:0;white-space:pre-line;word-break:break-all}"]}),e})()},RtVY:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s("2zyY"),a=s("0hWG"),i=s("fXoL");let c=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},providers:[a.a],imports:[[n.a]]}),e})()},rQPq:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));class n{constructor(e){this.payload=e,this.type="[Chat] Send message"}}}}]);