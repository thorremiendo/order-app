"use strict";(self.webpackChunkordering_app=self.webpackChunkordering_app||[]).push([[876],{7876:(Z,u,o)=>{o.r(u),o.d(u,{UserDashboardModule:()=>A});var h=o(4466),p=o(2472),f=o(9808),e=o(5e3),l=o(263),n=o(5215);let v=(()=>{class r{constructor(t,s){this.authService=t,this.router=s}canActivate(t,s){if(this.authService.isUser())return!0;this.router.navigate(["/login"])}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(l.e),e.LFG(n.F0))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var a=o(320),d=o(3075),g=o(5620),U=o(6854),m=o(7322),M=o(7531),O=o(7423),C=o(7331);const F=[{path:"",component:(()=>{class r{constructor(t,s,c,S){this.fb=t,this.authService=s,this.store=c,this.orderService=S,this.orderForm=this.fb.group({item:new d.NI("",[d.kI.required])})}ngOnInit(){this.orderService.editMode.subscribe(t=>{this.editMode=t,1==this.editMode&&this.orderService.selectedOrder.subscribe(s=>{this.selectedOrder=s,this.orderForm.patchValue({item:s.item,status:"Pending"})})})}updateOrder(){const t=Object.assign({},this.selectedOrder);t.item=this.orderForm.value.item,console.log(t),this.store.dispatch((0,a.Cs)(t))}getOrders(){this.store.dispatch((0,a.AU)())}addNewOrder(){if(1==this.editMode)this.updateOrder(),this.selectedOrder=null,this.orderService.editMode.next(!1),this.orderService.selectedOrder.next(null),this.orderForm.reset();else{let t={item:this.orderForm.value.item,status:"Pending",id:Math.round(1e4*Math.random()).toString()};this.store.dispatch((0,a.b0)(t)),this.orderForm.reset()}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.qu),e.Y36(l.e),e.Y36(g.yh),e.Y36(U.p))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-home"]],decls:13,vars:2,consts:[[1,"wrapper"],[1,"wrapper__form",3,"formGroup"],[1,"d-flex","flex-column"],["appearance","fill"],["matInput","","formControlName","item"],["mat-raised-button","","color","primary",3,"click"],[1,"wrapper__table"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Create Order"),e.qZA(),e.TgZ(3,"form",1)(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),e._uU(7,"Item"),e.qZA(),e._UZ(8,"input",4),e.qZA(),e.TgZ(9,"button",5),e.NdJ("click",function(){return s.addNewOrder()}),e._uU(10),e.qZA()()(),e.TgZ(11,"div",6),e._UZ(12,"app-order-table"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("formGroup",s.orderForm),e.xp6(7),e.hij(" ",s.editMode?"Update Order":"Add Order"," "))},directives:[d._Y,d.JL,d.sg,m.KE,m.hX,M.Nt,d.Fj,d.JJ,d.u,O.lW,C.C],styles:[".wrapper[_ngcontent-%COMP%]{padding:20px;height:calc(100vh - 100px)}.wrapper__form[_ngcontent-%COMP%]{width:300px}"]}),r})(),canActivate:[v]}];let y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[n.Bz.forChild(F)],n.Bz]}),r})(),A=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,y,p.s,h.m]]}),r})()}}]);