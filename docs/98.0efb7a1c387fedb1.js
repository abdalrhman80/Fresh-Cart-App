"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[98],{3098:(Fe,h,m)=>{m.r(h),m.d(h,{SettingsModule:()=>be});var g=m(6663),f=m(6814),_=m(7163),e=m(4769),w=m(6402);function v(t,s){1&t&&e._UZ(0,"app-loader")}const Z=function(){return["/settings/updateData"]},P=function(){return["/settings/updatePassword"]};let U=(()=>{class t{constructor(n){this._AuthenticationService=n,this.userName="",this.userEmail="",this.userRole="",this.isLoading=!0}ngOnInit(){document.body.scrollTo({top:0,behavior:"smooth"}),this.getUserInfo(),this.isLoadingLayer()}getUserInfo(){this._AuthenticationService.decodeUserToken(),this.userEmail=localStorage.getItem("userEmail")||"",this.userName=this._AuthenticationService.userData.getValue().name,this.userRole=this._AuthenticationService.userData.getValue().role}isLoadingLayer(){document.body.style.overflow="hidden",setTimeout(()=>{document.body.style.overflow="auto",this.isLoading=!1},1e3)}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.$))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-account-settings"]],decls:33,vars:8,consts:[[4,"ngIf"],[1,"accountSettings","my-5","w-75","mx-auto"],[1,"shadow","p-4","rounded"],[1,"row","pt-4","g-5"],[1,"col-md-6","d-flex"],[1,"me-3","pb-4"],[1,"fa-solid","fa-user","p-3","bg-body-tertiary","rounded-circle"],[1,"fw-bolder"],[1,"fw-bolder","my-2"],[1,"text-body-tertiary","fs-6"],[1,"update"],[1,"p-3","rounded","my-4","bg-body-tertiary"],[1,"fs-5",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","me-2"],[1,"fa-solid","fa-wrench","me-2"]],template:function(r,o){1&r&&(e.YNc(0,v,1,0,"app-loader",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"i",6),e.qZA(),e.TgZ(7,"div")(8,"h4",7),e._uU(9,"Your Info"),e.qZA(),e.TgZ(10,"p",8)(11,"span",9),e._uU(12,"Name:"),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"p",8)(15,"span",9),e._uU(16,"Email:"),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"p",8)(19,"span",9),e._uU(20,"yourRole:"),e.qZA(),e._uU(21),e.qZA()()()(),e.TgZ(22,"div",10)(23,"div",11)(24,"a",12),e._UZ(25,"i",13),e.TgZ(26,"span"),e._uU(27,"Update Your Data"),e.qZA()()(),e.TgZ(28,"div",11)(29,"a",12),e._UZ(30,"i",14),e.TgZ(31,"span"),e._uU(32,"Update Your Password"),e.qZA()()()()()()),2&r&&(e.Q6J("ngIf",o.isLoading),e.xp6(13),e.hij(" ",o.userName," "),e.xp6(4),e.hij(" ",o.userEmail," "),e.xp6(4),e.hij(" ",o.userRole," "),e.xp6(3),e.Q6J("routerLink",e.DdM(6,Z)),e.xp6(5),e.Q6J("routerLink",e.DdM(7,P)))},dependencies:[f.O5,_.rH,g.R],styles:["@media screen and (max-width: 992px){.accountSettings[_ngcontent-%COMP%]{width:100%!important}}"]})}return t})();var a=m(95);function T(t,s){1&t&&e._UZ(0,"app-loader")}function y(t,s){if(1&t&&(e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.apiError," ")}}function I(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Input is required"),e.qZA())}function C(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Email must be valid one "),e.qZA())}function x(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,I,2,0,"p",14),e.YNc(2,C,2,0,"p",14),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.forgetPasswordForm.get("email"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.forgetPasswordForm.get("email"))||null==o.errors?null:o.errors.email)}}function b(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1,"Send "),e.qZA())}function F(t,s){1&t&&e._UZ(0,"i",16)}let A=(()=>{class t{constructor(n,r){this._AuthenticationService=n,this._Router=r,this.isLoadingLayer=!1,this.isLoading=!1,this.apiError="",this.forgetPasswordForm=new a.cw({email:new a.NI(null,[a.kI.required,a.kI.email])})}ngOnInit(){document.body.scrollTo({top:0,behavior:"smooth"}),this.isLoadingMethod()}isLoadingMethod(){document.body.style.overflow="hidden",setTimeout(()=>{document.body.style.overflow="auto",this.isLoadingLayer=!0},1e3)}forgetPassword(n){this.isLoading=!0,this._AuthenticationService.forgetPassword(n.value).subscribe({next:r=>{this.isLoading=!1,this._Router.navigate(["/settings/verifyCode"])},error:r=>{this.isLoading=!1,this.apiError=r.error.message,console.log(r)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.$),e.Y36(_.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-forget-password"]],decls:15,vars:9,consts:[[4,"ngIf"],[1,"row","px-3","py-3"],[1,"forgetPassword","shadow","py-3","px-3","rounded","my-4","w-75","mx-auto"],[1,"my-4"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"mb-2"],["for","forgetPasswordInput",1,"form-label"],["formControlName","email","type","text","id","forgetPasswordInput"],["class","alert alert-danger my-2 rounded p-2",4,"ngIf"],[1,"btn","bg-main","text-white","mt-3","d-block","ms-auto","w-25",3,"disabled"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-danger","my-2","rounded","p-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(e.YNc(0,T,1,0,"app-loader",0),e.TgZ(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Enter Your Email :"),e.qZA(),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return o.forgetPassword(o.forgetPasswordForm)}),e.YNc(6,y,2,1,"div",5),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"Email:"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,x,3,2,"div",9),e.TgZ(12,"button",10),e.YNc(13,b,2,0,"span",0),e.YNc(14,F,1,0,"i",11),e.qZA()()()()()),2&r){let i,l;e.Q6J("ngIf",!o.isLoadingLayer),e.xp6(5),e.Q6J("formGroup",o.forgetPasswordForm),e.xp6(1),e.Q6J("ngIf",o.apiError.length>1),e.xp6(4),e.Tol(null==(null==(i=o.forgetPasswordForm.get("email"))?null:i.errors)?"form-control is-valid":null!=(i=o.forgetPasswordForm.get("email"))&&null!=i.errors&&i.errors.email?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(l=o.forgetPasswordForm.get("email"))?null:l.errors)&&(null==(l=o.forgetPasswordForm.get("email"))?null:l.touched)),e.xp6(1),e.Q6J("disabled",o.forgetPasswordForm.invalid),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading)}},dependencies:[f.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.R],styles:["@media screen and (max-width: 992px){.forgetPassword[_ngcontent-%COMP%]{width:100%!important;padding:15px!important}}.form-control.is-valid[_ngcontent-%COMP%]{border-color:var(--main-color)}.form-control.is-valid[_ngcontent-%COMP%]:focus{border-color:var(--main-color);box-shadow:0 0 0 .25rem #0aad0a66}"]})}return t})();function q(t,s){1&t&&e._UZ(0,"app-loader")}function L(t,s){if(1&t&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.apiError," ")}}function J(t,s){1&t&&(e.TgZ(0,"p",17),e._uU(1,"Input is required "),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"p",17),e._uU(1,"Enter Valid Email "),e.qZA())}function Y(t,s){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,J,2,0,"p",16),e.YNc(2,N,2,0,"p",16),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.resetPasswordForm.get("email"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.resetPasswordForm.get("email"))||null==o.errors?null:o.errors.email)}}function Q(t,s){1&t&&(e.TgZ(0,"p",17),e._uU(1,"Input is required "),e.qZA())}function D(t,s){1&t&&(e.TgZ(0,"p",17),e._uU(1,"Password must start with capital letter and min length is 6, max length 20 "),e.qZA())}function M(t,s){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,Q,2,0,"p",16),e.YNc(2,D,2,0,"p",16),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.resetPasswordForm.get("newPassword"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.resetPasswordForm.get("newPassword"))||null==o.errors?null:o.errors.pattern)}}function S(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1,"Update Password "),e.qZA())}function R(t,s){1&t&&e._UZ(0,"i",18)}let E=(()=>{class t{constructor(n,r){this._AuthenticationService=n,this._Router=r,this.isLoadingLayer=!1,this.isLoading=!1,this.apiError="",this.resetPasswordForm=new a.cw({email:new a.NI(null,[a.kI.required,a.kI.email]),newPassword:new a.NI(null,[a.kI.required,a.kI.pattern(/^[A-Z][a-z0-9]{6,20}$/)])})}ngOnInit(){document.body.scrollTo({top:0,behavior:"smooth"}),this.isLoadingMethod()}isLoadingMethod(){document.body.style.overflow="hidden",setTimeout(()=>{document.body.style.overflow="auto",this.isLoadingLayer=!0},1e3)}resetPassword(n){this.isLoading=!0,this._AuthenticationService.resetPassword(n.value).subscribe({next:r=>{this.isLoading=!1,this._Router.navigate(["/login"])},error:r=>{this.isLoading=!1,this.apiError=r.error.message,console.log(r)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.$),e.Y36(_.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-reset-password"]],decls:20,vars:12,consts:[[4,"ngIf"],[1,"row","px-3","py-3"],[1,"resetPassword","shadow","py-3","px-3","rounded","my-4","w-75","mx-auto"],[1,"my-4"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"mb-2"],["for","emailInput",1,"form-label"],["formControlName","email","type","text","id","emailInput"],["class","alert alert-danger my-2 rounded p-2",4,"ngIf"],["for","newPasswordInput",1,"form-label"],["formControlName","newPassword","type","password","id","newPasswordInput"],[1,"btn","bg-main","text-white","mt-3","d-block","ms-auto","w-25",3,"disabled"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-danger","my-2","rounded","p-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(e.YNc(0,q,1,0,"app-loader",0),e.TgZ(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Reset Your Password :"),e.qZA(),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return o.resetPassword(o.resetPasswordForm)}),e.YNc(6,L,2,1,"div",5),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"Email:"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,Y,3,2,"div",9),e.TgZ(12,"div",6)(13,"label",10),e._uU(14,"New Password:"),e.qZA(),e._UZ(15,"input",11),e.YNc(16,M,3,2,"div",9),e.qZA()(),e.TgZ(17,"button",12),e.YNc(18,S,2,0,"span",0),e.YNc(19,R,1,0,"i",13),e.qZA()()()()),2&r){let i,l,d,p;e.Q6J("ngIf",!o.isLoadingLayer),e.xp6(5),e.Q6J("formGroup",o.resetPasswordForm),e.xp6(1),e.Q6J("ngIf",o.apiError.length>1),e.xp6(4),e.Tol(null==(null==(i=o.resetPasswordForm.get("email"))?null:i.errors)?"form-control is-valid":null!=(i=o.resetPasswordForm.get("email"))&&null!=i.errors&&i.errors.email?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(l=o.resetPasswordForm.get("email"))?null:l.errors)&&(null==(l=o.resetPasswordForm.get("email"))?null:l.touched)),e.xp6(4),e.Tol(null==(null==(d=o.resetPasswordForm.get("newPassword"))?null:d.errors)?"form-control is-valid":null!=(d=o.resetPasswordForm.get("newPassword"))&&null!=d.errors&&d.errors.newPassword?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(p=o.resetPasswordForm.get("newPassword"))?null:p.errors)&&(null==(p=o.resetPasswordForm.get("newPassword"))?null:p.touched)),e.xp6(1),e.Q6J("disabled",o.resetPasswordForm.invalid),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading)}},dependencies:[f.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.R],styles:["@media screen and (max-width: 992px){.resetPassword[_ngcontent-%COMP%]{width:100%!important;padding:15px!important}}.form-control.is-valid[_ngcontent-%COMP%]{border-color:var(--main-color)}.form-control.is-valid[_ngcontent-%COMP%]:focus{border-color:var(--main-color);box-shadow:0 0 0 .25rem #0aad0a66}"]})}return t})();function O(t,s){1&t&&e._UZ(0,"app-loader")}function k(t,s){if(1&t&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.apiMessage," ")}}function j(t,s){1&t&&(e.TgZ(0,"p",19),e._uU(1," Input is required"),e.qZA())}function V(t,s){1&t&&(e.TgZ(0,"p",19),e._uU(1," Password must start with capital letter and min length is 6, max length 20"),e.qZA())}function $(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,j,2,0,"p",18),e.YNc(2,V,2,0,"p",18),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.updateUserPasswordForm.get("currentPassword"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.updateUserPasswordForm.get("currentPassword"))||null==o.errors?null:o.errors.pattern)}}function G(t,s){1&t&&(e.TgZ(0,"p",19),e._uU(1,"Input is required "),e.qZA())}function X(t,s){1&t&&(e.TgZ(0,"p",19),e._uU(1," Password must start with capital letter and min length is 6, max length 20"),e.qZA())}function z(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,G,2,0,"p",18),e.YNc(2,X,2,0,"p",18),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.updateUserPasswordForm.get("password"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.updateUserPasswordForm.get("password"))||null==o.errors?null:o.errors.pattern)}}function B(t,s){1&t&&(e.TgZ(0,"p",19),e._uU(1,"Input is required"),e.qZA())}function H(t,s){1&t&&(e.TgZ(0,"p",19),e._uU(1," rePassword does not match password"),e.qZA())}function K(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,B,2,0,"p",18),e.YNc(2,H,2,0,"p",18),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.updateUserPasswordForm.get("rePassword"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.updateUserPasswordForm.get("rePassword"))||null==o.errors?null:o.errors.rePasswordMatch)}}function W(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1," Update"),e.qZA())}function ee(t,s){1&t&&e._UZ(0,"i",20)}let te=(()=>{class t{constructor(n){this._AuthenticationService=n,this.isLoadingLayer=!1,this.isLoading=!1,this.apiMessage="",this.rePasswordError={rePasswordMatch:"rePassword does not match password"},this.updateUserPasswordForm=new a.cw({currentPassword:new a.NI(null,[a.kI.required,a.kI.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),password:new a.NI(null,[a.kI.required,a.kI.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),rePassword:new a.NI(null,[a.kI.required])},{validators:this.checkRePassword})}ngOnInit(){document.body.scrollTo({top:0,behavior:"smooth"}),this.isLoadingLayerMethod()}checkRePassword(n){return n.get("password")?.value===n.get("rePassword")?.value?null:(n.get("rePassword")?.setErrors({rePasswordMatch:"rePassword does not match password"}),{rePasswordMatch:"rePassword does not match password"})}isLoadingLayerMethod(){document.body.style.overflow="hidden",setTimeout(()=>{document.body.style.overflow="auto",this.isLoadingLayer=!0},1e3)}updatePassword(n){this.isLoading=!0,this._AuthenticationService.updateLoggedUserPasswords(n.value).subscribe({next:r=>{this.isLoading=!1,this._AuthenticationService.logout(),console.log(r)},error:r=>{this.isLoading=!1,this.apiMessage=r.error.errors.msg,console.log(r)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.$))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-update-password"]],decls:25,vars:15,consts:[[4,"ngIf"],[1,"row","px-3","py-3"],[1,"updatePassword","shadow","py-3","px-3","rounded","my-4","w-75","mx-auto"],[1,"my-4"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"mb-2"],["for","currentPasswordInput",1,"form-label"],["formControlName","currentPassword","type","password","id","currentPasswordInput"],["class","alert alert-danger my-2 rounded p-2",4,"ngIf"],["for","passwordInput",1,"form-label"],["formControlName","password","type","password","id","passwordInput"],["for","repasswordInput",1,"form-label"],["formControlName","rePassword","type","password","id","repasswordInput"],[1,"btn","bg-main","text-white","mt-3","d-block","ms-auto",3,"disabled"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-danger","my-2","rounded","p-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(e.YNc(0,O,1,0,"app-loader",0),e.TgZ(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Update Your Data :"),e.qZA(),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return o.updatePassword(o.updateUserPasswordForm)}),e.YNc(6,k,2,1,"div",5),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"Current Password:"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,$,3,2,"div",9),e.qZA(),e.TgZ(12,"div",6)(13,"label",10),e._uU(14,"New Password:"),e.qZA(),e._UZ(15,"input",11),e.YNc(16,z,3,2,"div",9),e.qZA(),e.TgZ(17,"div",6)(18,"label",12),e._uU(19,"rePassword:"),e.qZA(),e._UZ(20,"input",13),e.YNc(21,K,3,2,"div",9),e.qZA(),e.TgZ(22,"button",14),e.YNc(23,W,2,0,"span",0),e.YNc(24,ee,1,0,"i",15),e.qZA()()()()),2&r){let i,l,d,p,u,c;e.Q6J("ngIf",!o.isLoadingLayer),e.xp6(5),e.Q6J("formGroup",o.updateUserPasswordForm),e.xp6(1),e.Q6J("ngIf",o.apiMessage),e.xp6(4),e.Tol(null==(null==(i=o.updateUserPasswordForm.get("currentPassword"))?null:i.errors)?"form-control is-valid":null!=(i=o.updateUserPasswordForm.get("currentPassword"))&&null!=i.errors&&i.errors.pattern?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(l=o.updateUserPasswordForm.get("currentPassword"))?null:l.touched)&&(null==(l=o.updateUserPasswordForm.get("currentPassword"))?null:l.errors)),e.xp6(4),e.Tol(null==(null==(d=o.updateUserPasswordForm.get("password"))?null:d.errors)?"form-control is-valid":null!=(d=o.updateUserPasswordForm.get("password"))&&null!=d.errors&&d.errors.pattern?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(p=o.updateUserPasswordForm.get("password"))?null:p.touched)&&(null==(p=o.updateUserPasswordForm.get("password"))?null:p.errors)),e.xp6(4),e.Tol(null==(null==(u=o.updateUserPasswordForm.get("rePassword"))?null:u.errors)?"form-control is-valid":null!=(u=o.updateUserPasswordForm.get("rePassword"))&&null!=u.errors&&u.errors.rePasswordMatch?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(c=o.updateUserPasswordForm.get("rePassword"))?null:c.touched)&&(null==(c=o.updateUserPasswordForm.get("rePassword"))?null:c.errors)),e.xp6(1),e.Q6J("disabled",o.updateUserPasswordForm.invalid),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading)}},dependencies:[f.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.R],styles:["@media screen and (max-width: 992px){.updatePassword[_ngcontent-%COMP%]{width:100%!important;padding:15px!important}}.form-control.is-valid[_ngcontent-%COMP%]{border-color:var(--main-color)}.form-control.is-valid[_ngcontent-%COMP%]:focus{border-color:var(--main-color);box-shadow:0 0 0 .25rem #0aad0a66}"]})}return t})();function oe(t,s){1&t&&e._UZ(0,"app-loader")}function re(t,s){if(1&t&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.apiMessage," ")}}function ne(t,s){if(1&t&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.apiMessage," ")}}function ae(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Input is required"),e.qZA())}function se(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Min length is 4 "),e.qZA())}function ie(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Min length is 20"),e.qZA())}function le(t,s){if(1&t&&(e.TgZ(0,"div",19),e.YNc(1,ae,2,0,"p",20),e.YNc(2,se,2,0,"p",20),e.YNc(3,ie,2,0,"p",20),e.qZA()),2&t){const n=e.oxw();let r,o,i;e.xp6(1),e.Q6J("ngIf",null==(r=n.updateUserDataForm.get("name"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.updateUserDataForm.get("name"))||null==o.errors?null:o.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(i=n.updateUserDataForm.get("name"))||null==i.errors?null:i.errors.maxlength)}}function de(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Input is required"),e.qZA())}function pe(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Email must be valid one "),e.qZA())}function ue(t,s){if(1&t&&(e.TgZ(0,"div",19),e.YNc(1,de,2,0,"p",20),e.YNc(2,pe,2,0,"p",20),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.updateUserDataForm.get("email"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.updateUserDataForm.get("email"))||null==o.errors?null:o.errors.email)}}function me(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Input is required"),e.qZA())}function ce(t,s){1&t&&(e.TgZ(0,"p",21),e._uU(1," Enter valid egyptian phone number"),e.qZA())}function ge(t,s){if(1&t&&(e.TgZ(0,"div",19),e.YNc(1,me,2,0,"p",20),e.YNc(2,ce,2,0,"p",20),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.updateUserDataForm.get("phone"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.updateUserDataForm.get("phone"))||null==o.errors?null:o.errors.pattern)}}function fe(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1," Update"),e.qZA())}function _e(t,s){1&t&&e._UZ(0,"i",22)}let we=(()=>{class t{constructor(n){this._AuthenticationService=n,this.isLoadingLayer=!1,this.isLoading=!1,this.apiMessage="",this.isError=!1,this.updateUserDataForm=new a.cw({name:new a.NI(null,[a.kI.required,a.kI.minLength(4),a.kI.maxLength(20)]),email:new a.NI(null,[a.kI.required,a.kI.email]),phone:new a.NI(null,[a.kI.required,a.kI.pattern(/^01[0125][0-9]{8}$/)])})}ngOnInit(){document.body.scrollTo({top:0,behavior:"smooth"}),this.isLoadingLayerMethod()}isLoadingLayerMethod(){document.body.style.overflow="hidden",setTimeout(()=>{document.body.style.overflow="auto",this.isLoadingLayer=!0},1e3)}updateUserData(n){this.isLoading=!0,this._AuthenticationService.updateLoggedUserData(n.value).subscribe({next:r=>{this.isLoading=!1,this.apiMessage=r.message,this.isError=!1,console.log(r)},error:r=>{this.isLoading=!1,this.isError=!0,this.apiMessage=r.error.errors.msg,console.log(r)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.$))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-update-data"]],decls:26,vars:16,consts:[[4,"ngIf"],[1,"row","px-3","py-3"],[1,"updateData","shadow","py-3","px-3","rounded","my-4","w-75","mx-auto"],[1,"my-4"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],[1,"mb-2"],["for","nameInput",1,"form-label"],["formControlName","name","type","text","id","nameInput"],["class","alert alert-danger my-2 rounded p-2",4,"ngIf"],["for","emailInput",1,"form-label"],["formControlName","email","type","text","id","emailInput"],["for","phoneInput",1,"form-label"],["formControlName","phone","type","tel","id","phoneInput"],[1,"btn","bg-main","text-white","mt-3","d-block","ms-auto",3,"disabled"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"alert","alert-danger","my-2","rounded","p-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(e.YNc(0,oe,1,0,"app-loader",0),e.TgZ(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Update Your Data :"),e.qZA(),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return o.updateUserData(o.updateUserDataForm)}),e.YNc(6,re,2,1,"div",5),e.YNc(7,ne,2,1,"div",6),e.TgZ(8,"div",7)(9,"label",8),e._uU(10,"Name:"),e.qZA(),e._UZ(11,"input",9),e.YNc(12,le,4,3,"div",10),e.qZA(),e.TgZ(13,"div",7)(14,"label",11),e._uU(15,"Email:"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,ue,3,2,"div",10),e.qZA(),e.TgZ(18,"div",7)(19,"label",13),e._uU(20,"Phone:"),e.qZA(),e._UZ(21,"input",14),e.YNc(22,ge,3,2,"div",10),e.qZA(),e.TgZ(23,"button",15),e.YNc(24,fe,2,0,"span",0),e.YNc(25,_e,1,0,"i",16),e.qZA()()()()),2&r){let i,l,d,p,u,c;e.Q6J("ngIf",!o.isLoadingLayer),e.xp6(5),e.Q6J("formGroup",o.updateUserDataForm),e.xp6(1),e.Q6J("ngIf",o.apiMessage.length>1&&o.isError),e.xp6(1),e.Q6J("ngIf",o.apiMessage.length>1&&!o.isError),e.xp6(4),e.Tol(null==(null==(i=o.updateUserDataForm.get("name"))?null:i.errors)?"form-control is-valid":null!=(i=o.updateUserDataForm.get("name"))&&null!=i.errors&&i.errors.minlength||null!=(i=o.updateUserDataForm.get("name"))&&null!=i.errors&&i.errors.maxlength?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(l=o.updateUserDataForm.get("name"))?null:l.errors)&&(null==(l=o.updateUserDataForm.get("name"))?null:l.touched)),e.xp6(4),e.Tol(null==(null==(d=o.updateUserDataForm.get("email"))?null:d.errors)?"form-control is-valid":null!=(d=o.updateUserDataForm.get("email"))&&null!=d.errors&&d.errors.email?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(p=o.updateUserDataForm.get("email"))?null:p.errors)&&(null==(p=o.updateUserDataForm.get("email"))?null:p.touched)),e.xp6(4),e.Tol(null==(null==(u=o.updateUserDataForm.get("phone"))?null:u.errors)?"form-control is-valid":null!=(u=o.updateUserDataForm.get("phone"))&&null!=u.errors&&u.errors.pattern?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(c=o.updateUserDataForm.get("phone"))?null:c.touched)&&(null==(c=o.updateUserDataForm.get("phone"))?null:c.errors)),e.xp6(1),e.Q6J("disabled",o.updateUserDataForm.invalid),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading)}},dependencies:[f.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.R],styles:["@media screen and (max-width: 992px){.updateData[_ngcontent-%COMP%]{width:100%!important;padding:15px!important}}.form-control.is-valid[_ngcontent-%COMP%]{border-color:var(--main-color)}.form-control.is-valid[_ngcontent-%COMP%]:focus{border-color:var(--main-color);box-shadow:0 0 0 .25rem #0aad0a66}"]})}return t})();var he=m(6218);function ve(t,s){1&t&&e._UZ(0,"app-loader")}function Ze(t,s){if(1&t&&(e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.apiError," ")}}function Pe(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Input is required"),e.qZA())}function Ue(t,s){1&t&&(e.TgZ(0,"p",15),e._uU(1,"Enter Valid Code "),e.qZA())}function Te(t,s){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,Pe,2,0,"p",14),e.YNc(2,Ue,2,0,"p",14),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.verifyCodeForm.get("resetCode"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.verifyCodeForm.get("resetCode"))||null==o.errors?null:o.errors.pattern)}}function ye(t,s){1&t&&(e.TgZ(0,"span"),e._uU(1,"Send "),e.qZA())}function Ie(t,s){1&t&&e._UZ(0,"i",16)}const Ce=[{path:"",redirectTo:"account-settings",pathMatch:"full"},{path:"accountSettings",component:U,title:"Account Settings"},{path:"forgetPassword",component:A,title:"Forget Password"},{path:"verifyCode",component:(()=>{class t{constructor(n,r){this._AuthenticationService=n,this._Router=r,this.isLoadingLayer=!1,this.isLoading=!1,this.apiError="",this.verifyCodeForm=new a.cw({resetCode:new a.NI(null,[a.kI.required,a.kI.pattern(/^[0-9]{6,10}$/)])})}ngOnInit(){document.body.scrollTo({top:0,behavior:"smooth"}),this.isLoadingMethod()}isLoadingMethod(){document.body.style.overflow="hidden",setTimeout(()=>{document.body.style.overflow="auto",this.isLoadingLayer=!0},1e3)}verifyCode(n){this.isLoading=!0,this._AuthenticationService.verifyCode(n.value).subscribe({next:r=>{this.isLoading=!1,this._Router.navigate(["/settings/resetPassword"])},error:r=>{this.isLoading=!1,this.apiError=r.error.message,console.log(r)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.$),e.Y36(_.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-verify-code"]],decls:15,vars:9,consts:[[4,"ngIf"],[1,"row","px-3","py-3"],[1,"verifyCode","shadow","py-3","px-3","rounded","my-4","w-75","mx-auto"],[1,"my-4"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"mb-2"],["for","verifyCodeInput",1,"form-label"],["formControlName","resetCode","type","text","id","verifyCodeInput"],["class","alert alert-danger my-2 rounded p-2",4,"ngIf"],[1,"btn","bg-main","text-white","mt-3","d-block","ms-auto","w-25",3,"disabled"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-danger","my-2","rounded","p-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(e.YNc(0,ve,1,0,"app-loader",0),e.TgZ(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Enter Reset Code :"),e.qZA(),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return o.verifyCode(o.verifyCodeForm)}),e.YNc(6,Ze,2,1,"div",5),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"Reset Code:"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,Te,3,2,"div",9),e.qZA(),e.TgZ(12,"button",10),e.YNc(13,ye,2,0,"span",0),e.YNc(14,Ie,1,0,"i",11),e.qZA()()()()),2&r){let i,l;e.Q6J("ngIf",!o.isLoadingLayer),e.xp6(5),e.Q6J("formGroup",o.verifyCodeForm),e.xp6(1),e.Q6J("ngIf",o.apiError.length>1),e.xp6(4),e.Tol(null==(null==(i=o.verifyCodeForm.get("resetCode"))?null:i.errors)?"form-control is-valid":null!=(i=o.verifyCodeForm.get("resetCode"))&&null!=i.errors&&i.errors.resetCode?"form-control is-invalid":"form-control"),e.xp6(1),e.Q6J("ngIf",(null==(l=o.verifyCodeForm.get("resetCode"))?null:l.errors)&&(null==(l=o.verifyCodeForm.get("resetCode"))?null:l.touched)),e.xp6(1),e.Q6J("disabled",o.verifyCodeForm.invalid),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading)}},dependencies:[f.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.R],styles:["@media screen and (max-width: 992px){.verifyCode[_ngcontent-%COMP%]{width:100%!important;padding:15px!important}}.form-control.is-valid[_ngcontent-%COMP%]{border-color:var(--main-color)}.form-control.is-valid[_ngcontent-%COMP%]:focus{border-color:var(--main-color);box-shadow:0 0 0 .25rem #0aad0a66}"]})}return t})(),title:"verifyCode"},{path:"resetPassword",component:E,title:"Reset Password"},{path:"updatePassword",component:te,title:"Update Password"},{path:"updateData",component:we,title:"Update Data"},{path:"**",component:he.w,title:"Not-Found"}];let xe=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[_.Bz.forChild(Ce),_.Bz]})}return t})(),be=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[f.ez,xe,a.UX,g.R]})}return t})()}}]);