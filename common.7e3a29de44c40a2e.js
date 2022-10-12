"use strict";(self.webpackChunkordering_app=self.webpackChunkordering_app||[]).push([[592],{6854:(h,m,o)=>{o.d(m,{p:()=>s});var l=o(7579),t=o(5e3);let s=(()=>{class d{constructor(){this.editMode=new l.x,this.selectedOrder=new l.x,this.isApprove=new l.x}updateEditMode(n){this.editMode.next(n)}}return d.\u0275fac=function(n){return new(n||d)},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},7331:(h,m,o)=>{o.d(m,{C:()=>g});var l=o(320),t=o(5e3),s=o(5620),d=o(263),c=o(6854),n=o(8279),u=o(9808),O=o(7423);function w(e,_){1&e&&(t.TgZ(0,"th",9),t._uU(1,"Item"),t.qZA())}function f(e,_){if(1&e&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&e){const r=_.$implicit;t.xp6(1),t.Oqu(r.item)}}function T(e,_){1&e&&(t.TgZ(0,"th",9),t._uU(1,"Status"),t.qZA())}function C(e,_){if(1&e&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&e){const r=_.$implicit;t.xp6(1),t.Oqu(r.status)}}function v(e,_){1&e&&(t.TgZ(0,"th",9),t._uU(1,"Action"),t.qZA())}function b(e,_){if(1&e){const r=t.EpF();t.TgZ(0,"div")(1,"button",12),t.NdJ("click",function(){t.CHM(r);const a=t.oxw().$implicit;return t.oxw().editOrder(a)}),t._uU(2," Edit "),t.qZA(),t.TgZ(3,"button",13),t.NdJ("click",function(){t.CHM(r);const a=t.oxw().$implicit;return t.oxw().deleteOrder(a)}),t._uU(4," Delete "),t.qZA()()}}function x(e,_){if(1&e){const r=t.EpF();t.TgZ(0,"div")(1,"button",14),t.NdJ("click",function(){t.CHM(r);const a=t.oxw().$implicit;return t.oxw().handleStatus(a,"approve")}),t._uU(2," Approve "),t.qZA(),t.TgZ(3,"button",13),t.NdJ("click",function(){t.CHM(r);const a=t.oxw().$implicit;return t.oxw().handleStatus(a,"reject")}),t._uU(4," Reject "),t.qZA()()}}function E(e,_){if(1&e&&(t.TgZ(0,"td",10),t.YNc(1,b,5,0,"div",11),t.YNc(2,x,5,0,"div",11),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngIf","user"==r.user.role),t.xp6(1),t.Q6J("ngIf","admin"==r.user.role)}}function M(e,_){1&e&&t._UZ(0,"tr",15)}function D(e,_){1&e&&t._UZ(0,"tr",16)}let g=(()=>{class e{constructor(r,i,a){this.store=r,this.authService=i,this.orderService=a,this.orders$=this.store.select("orders"),this.displayedColumns=["item","status","action"],this.dataSource=this.orders$}ngOnInit(){this.user=this.authService.getUser()}editOrder(r){this.orderService.updateEditMode(!0),this.orderService.selectedOrder.next(r)}deleteOrder(r){this.orders$.subscribe(a=>{this.orders=a});const i=this.orders.indexOf(r);this.store.dispatch((0,l.wH)(i))}handleStatus(r,i){const a=Object.assign({},r);a.status=i,console.log(a),this.store.dispatch((0,l.Cs)(a))}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(s.yh),t.Y36(d.e),t.Y36(c.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-table"]],decls:13,vars:3,consts:[[1,"wrapper","d-flex","justify-content-center","mt-5"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","item"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["mat-stroked-button","","color","warn",1,"mx-3",3,"click"],["mat-raised-button","","color","primary",1,"approve",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"table",1)(2,"div",2),t.YNc(3,w,2,0,"th",3),t.YNc(4,f,2,1,"td",4),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,T,2,0,"th",3),t.YNc(7,C,2,1,"td",4),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,v,2,0,"th",3),t.YNc(10,E,3,2,"td",4),t.qZA(),t.YNc(11,M,1,0,"tr",7),t.YNc(12,D,1,0,"tr",8),t.qZA()()),2&r&&(t.xp6(1),t.Q6J("dataSource",i.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns))},directives:[n.BZ,n.w1,n.fO,n.ge,n.Dz,n.ev,u.O5,O.lW,n.as,n.XQ,n.nj,n.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-column-item[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 30%!important;width:30%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-status[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 30%!important;width:30%!important;overflow-wrap:break-word;word-wrap:break-word;text-transform:capitalize;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-action[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 40%!important;width:40%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}"]}),e})()},4466:(h,m,o)=>{o.d(m,{m:()=>d});var l=o(2472),t=o(9808),s=o(5e3);let d=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[[t.ez,l.s]]}),c})()}}]);