(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Lduf:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){return function(){}}(),a=e("pMnS"),i=e("t68o"),o=e("NcP4"),d=e("zbXB"),r=e("row4"),c=e("ipwl"),m=e("Dzim"),p=e("EQwq"),s=e("9/BZ"),f=e("h6vn"),g=e("QJB5"),b=e("Ip0R"),h=e("FVSy"),x=e("Fzqc"),v=e("Wf4p"),w=e("ZYjt"),C=t["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function y(l){return t["\u0275vid"](2,[t["\u0275ncd"](null,0),t["\u0275ncd"](null,1)],null,null)}e("+MHp");var F=e("bY+h"),S=[{Date:"1/14/2019",Address:"7511 Columbia St. El Paso, TX 79930",Foreman:"Willie Gale",Signed:!0,Forms:["hazards"],View:"Job Briefing"},{Date:"2/14/2019",Address:"9395 Circle St. Tacoma, WA 98444",Foreman:"Christopher P. Harris",Signed:!0,Forms:["hazards"],View:"Job Briefing"}],A=[{Date:"3/15/2019",Address:"7348 North East Ave. Knoxville, TN 37918",Foreman:"Derek M. Westcott",Signed:!0,Forms:["hazards"],View:"Job Briefing"},{Date:"3/22/2019",Address:"7303 Winchester Drive Northbrook, IL 60062",Foreman:"Donald C. Archie",Signed:!0,Forms:["hazards"],View:"Job Briefing"}],I=[{guid:"1",Date:"6/24/2019",Address:"8187 Plumb Branch Drive Garden City, NY 11530",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"},{guid:"2",Date:"6/23/2019",Address:"23 Anywhere Street, Irvine CA 92604",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"},{guid:"3",Date:"6/23/2019",Address:"54 Uptown Rd, Irvine CA 92604",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"},{guid:"4",Date:"6/22/2019",Address:"8787 Culver Street, Irvine CA 92604",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"}],P=function(){function l(l,n){this.modals=l,this.router=n,this.panelOpenState=!0,this.dataSource=S,this.dataSource2=A,this.dataSource3=I,this.crewMembers=F.b}return l.prototype.modifyForm=function(l){l.stopPropagation(),this.modals.open("AddFormModalComponent",!1,"lg","Modify Form").afterClosed()},l.prototype.addForm=function(l){var n=this;l.stopPropagation(),this.modals.open("AddFormModalComponent",!1,"lg",!1).afterClosed().subscribe(function(l){console.log("Dialog sent: "+l),void 0!==l&&n.modals.open("AddCrewModalComponent",!1,"lg",60).afterClosed().subscribe(function(l){void 0!==l&&n.router.navigate(["/forms/job-briefing"])})})},l.prototype.signatureForm=function(l){l.stopPropagation(),this.modals.open("SignatureModalComponent",!1,"lg",60).afterClosed()},l.prototype.crewForm=function(l,n){var e=this;l.stopPropagation(),this.modals.open("AddCrewModalComponent",!1,"lg",60).afterClosed().subscribe(function(){e.router.navigate(["/forms/job-briefing",n])})},l.prototype.summaryForm=function(l){l.stopPropagation(),this.modals.open("SummaryViewerModalComponent",!1,"xl",60).afterClosed()},l.prototype.ngOnInit=function(){},l.prototype.ngOnDestroy=function(){},l}(),D=e("cGsH"),k=e("ZYCi"),M=t["\u0275crt"]({encapsulation:0,styles:[[".accordin-component[_ngcontent-%COMP%]{position:relative}.accordin-component[_ngcontent-%COMP%]   .my-float[_ngcontent-%COMP%]{margin-top:22px}.accordin-component[_ngcontent-%COMP%]   .float[_ngcontent-%COMP%]{cursor:pointer;position:fixed;width:60px;height:60px;bottom:40px;left:40px;background-color:#df363d;color:#fff;border-radius:50px;text-align:center;box-shadow:2px 2px 3px #999;z-index:10}.accordin-component[_ngcontent-%COMP%]   .float-text[_ngcontent-%COMP%]{position:absolute;left:47px;min-width:200px;padding:18px;color:#676363}.accordin-component[_ngcontent-%COMP%]   .float-text[_ngcontent-%COMP%]:after{position:absolute;left:0;top:24px;min-width:200px;border:1px solid #aaa;border-radius:10px;background-color:#ffc;padding:12px;color:#000;font-size:14px;z-index:1}"]],data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"a",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signatureForm(e)&&t),t},null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-remove red"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-pencil"]],null,null,null,null,null))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.name)})}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-check green"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.name)})}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["(Foreman)"]))],null,null)}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](2,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,z)),t["\u0275did"](4,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](6,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](7,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,2,0,!n.context.$implicit.signed),l(n,4,0,n.context.$implicit.signed),l(n,6,0,0===n.context.index)},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Job Brief "])),(l()(),t["\u0275eld"](7,0,null,null,2,"a",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.crewForm(e,l.context.$implicit.guid)&&t),t},null,null)),(l()(),t["\u0275eld"](8,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-gear"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Edit"])),(l()(),t["\u0275eld"](10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](12,278528,null,0,b.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,12,0,n.component.crewMembers)},function(l,n){l(n,2,0,n.context.$implicit.Date),l(n,4,0,n.context.$implicit.Address)})}function L(l){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{Accordion:0}),(l()(),t["\u0275eld"](1,0,null,null,20,"div",[["class","container-fluid accordin-component"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,15,"mat-card",[["class","mat-card"]],null,null,null,y,C)),t["\u0275did"](3,49152,null,0,h.a,[],null,null),(l()(),t["\u0275eld"](4,0,null,0,13,"table",[["class","table table-sm table-striped table-hover"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date"])),(l()(),t["\u0275eld"](9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Address"])),(l()(),t["\u0275eld"](11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Form Type"])),(l()(),t["\u0275eld"](13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Sign Status"])),(l()(),t["\u0275eld"](15,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](17,278528,null,0,b.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](18,0,null,null,3,"a",[["class","float"],["title","New Form"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addForm(e)&&t),t},null,null)),(l()(),t["\u0275eld"](19,0,null,null,0,"i",[["class","fa fa-plus my-float"]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,1,"span",[["class","float-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Create New Job/Form"]))],function(l,n){l(n,17,0,n.component.dataSource3)},null)}var V=e("wmQ5"),B=e("Lwpp"),j=e("vKJI"),J=e("bujt"),T=e("UodH"),E=e("lLAP"),$=e("wFw1"),q=e("gmng"),H=e("7YXg"),Y=(e("1Dn5"),function(){function l(l){this.uiState=l,this.toBeSigned=[{guid:"1",Date:"6/24/2019",Address:"8187 Plumb Branch Drive Garden City, NY 11530",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"},{guid:"2",Date:"6/23/2019",Address:"23 Anywhere Street, Irvine CA 92604",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"},{guid:"3",Date:"6/23/2019",Address:"54 Uptown Rd, Irvine CA 92604",Foreman:"Leslie A. Hazel",Signed:!1,Forms:["hazards"],View:"Job Briefing"}]}return l.prototype.ngOnInit=function(){},l}()),U=e("0St0"),G=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Job Briefing"])),(l()(),t["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Not Signed "])),(l()(),t["\u0275eld"](9,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,3,"button",[["class","btn btn-mowbray"],["matStepperNext",""]],[[8,"type",0]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,11)._handleClick()&&u),u},null,null)),t["\u0275did"](11,16384,null,0,V.h,[B.d],null,null),(l()(),t["\u0275eld"](12,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pencil"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Click to Sign"]))],null,function(l,n){l(n,2,0,n.context.$implicit.Date),l(n,4,0,n.context.$implicit.Address),l(n,10,0,t["\u0275nov"](n,11).type)})}function W(l){return t["\u0275vid"](2,[(l()(),t["\u0275eld"](0,0,null,null,62,"mat-horizontal-stepper",[["aria-orientation","horizontal"],["class","mat-stepper-horizontal"],["role","tablist"]],[[2,"mat-stepper-label-position-end",null],[2,"mat-stepper-label-position-bottom",null]],[[null,"selectedTabChange"]],function(l,n,e){var t=!0;return"selectedTabChange"===n&&(t=!1!==l.component.uiState.tabChange("crewList",e)&&t),t},j.c,j.a)),t["\u0275prd"](6144,null,B.d,null,[V.b]),t["\u0275did"](2,5423104,[["stepper",4]],2,V.b,[[2,x.b],t.ChangeDetectorRef,t.ElementRef,b.DOCUMENT],{selectedIndex:[0,"selectedIndex"]},null),t["\u0275qud"](603979776,1,{_steps:1}),t["\u0275qud"](603979776,2,{_icons:1}),t["\u0275pid"](131072,b.AsyncPipe,[t.ChangeDetectorRef]),t["\u0275prd"](2048,null,V.e,null,[V.b]),(l()(),t["\u0275eld"](7,0,null,null,19,"mat-step",[["label","Needs Signatures"]],null,null,null,j.d,j.b)),t["\u0275prd"](6144,null,v.d,null,[V.c]),t["\u0275did"](9,573440,[[1,4]],1,V.c,[V.e,[1,v.d],[2,B.h]],{label:[0,"label"]},null),t["\u0275qud"](603979776,3,{stepLabel:0}),(l()(),t["\u0275eld"](11,0,null,0,15,"table",[["class","table table-sm table-striped table-hover"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date"])),(l()(),t["\u0275eld"](16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Address"])),(l()(),t["\u0275eld"](18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Form Type"])),(l()(),t["\u0275eld"](20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Sign Status"])),(l()(),t["\u0275eld"](22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Action"])),(l()(),t["\u0275eld"](24,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,Z)),t["\u0275did"](26,278528,null,0,b.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](27,0,null,null,15,"mat-step",[["label","Review Form"]],null,null,null,j.d,j.b)),t["\u0275prd"](6144,null,v.d,null,[V.c]),t["\u0275did"](29,573440,[[1,4]],1,V.c,[V.e,[1,v.d],[2,B.h]],{label:[0,"label"]},null),t["\u0275qud"](603979776,4,{stepLabel:0}),(l()(),t["\u0275eld"](31,0,null,0,0,"img",[["alt",""],["src","assets/icons/DailyJobBriefingForm1.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](32,0,null,0,10,"div",[["class","d-flex w-100"]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,null,null,4,"button",[["class","btn-mowbray-alt w-50 mr-1"],["mat-button",""],["matStepperPrevious",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[8,"type",0]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,35)._handleClick()&&u),u},J.b,J.a)),t["\u0275did"](34,180224,null,0,T.b,[t.ElementRef,E.g,[2,$.a]],null,null),t["\u0275did"](35,16384,null,0,V.i,[B.d],null,null),(l()(),t["\u0275eld"](36,0,null,0,0,"i",[["aria-hidden","true"],["class","fa fa-long-arrow-left"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" Back "])),(l()(),t["\u0275eld"](38,0,null,null,4,"button",[["class","btn btn-mowbray w-50"],["mat-button",""],["matStepperNext",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[8,"type",0]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,40)._handleClick()&&u),u},J.b,J.a)),t["\u0275did"](39,180224,null,0,T.b,[t.ElementRef,E.g,[2,$.a]],null,null),t["\u0275did"](40,16384,null,0,V.h,[B.d],null,null),(l()(),t["\u0275ted"](-1,0,["Next "])),(l()(),t["\u0275eld"](42,0,null,0,0,"i",[["aria-hidden","true"],["class","fa fa-long-arrow-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](43,0,null,null,19,"mat-step",[["label","Sign"]],null,null,null,j.d,j.b)),t["\u0275prd"](6144,null,v.d,null,[V.c]),t["\u0275did"](45,573440,[[1,4]],1,V.c,[V.e,[1,v.d],[2,B.h]],{label:[0,"label"]},null),t["\u0275qud"](603979776,5,{stepLabel:0}),(l()(),t["\u0275eld"](47,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t["\u0275eld"](48,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pencil"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Please sign your name"])),(l()(),t["\u0275eld"](50,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t["\u0275eld"](51,0,null,null,1,"app-signature",[],null,null,null,q.b,q.a)),t["\u0275did"](52,4440064,null,0,H.a,[],null,null),(l()(),t["\u0275eld"](53,0,null,0,9,"div",[["class","d-flex w-100"]],null,null,null,null,null)),(l()(),t["\u0275eld"](54,0,null,null,4,"button",[["class","btn-mowbray-alt w-50 mr-1"],["mat-button",""],["matStepperPrevious",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[8,"type",0]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,56)._handleClick()&&u),u},J.b,J.a)),t["\u0275did"](55,180224,null,0,T.b,[t.ElementRef,E.g,[2,$.a]],null,null),t["\u0275did"](56,16384,null,0,V.i,[B.d],null,null),(l()(),t["\u0275eld"](57,0,null,0,0,"i",[["aria-hidden","true"],["class","fa fa-long-arrow-left"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" Back "])),(l()(),t["\u0275eld"](59,0,null,null,3,"button",[["class","btn btn-mowbray w-50"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).reset()&&u),u},J.b,J.a)),t["\u0275did"](60,180224,null,0,T.b,[t.ElementRef,E.g,[2,$.a]],null,null),(l()(),t["\u0275eld"](61,0,null,0,0,"i",[["aria-hidden","true"],["class","fa fa-save"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" Sign"]))],function(l,n){var e=n.component;l(n,2,0,t["\u0275unv"](n,2,0,t["\u0275nov"](n,5).transform(e.uiState.query.tabActive$("crewList")))),l(n,9,0,"Needs Signatures"),l(n,26,0,e.toBeSigned),l(n,29,0,"Review Form"),l(n,45,0,"Sign"),l(n,52,0)},function(l,n){l(n,0,0,"end"==t["\u0275nov"](n,2).labelPosition,"bottom"==t["\u0275nov"](n,2).labelPosition),l(n,33,0,t["\u0275nov"](n,34).disabled||null,"NoopAnimations"===t["\u0275nov"](n,34)._animationMode,t["\u0275nov"](n,35).type),l(n,38,0,t["\u0275nov"](n,39).disabled||null,"NoopAnimations"===t["\u0275nov"](n,39)._animationMode,t["\u0275nov"](n,40).type),l(n,54,0,t["\u0275nov"](n,55).disabled||null,"NoopAnimations"===t["\u0275nov"](n,55)._animationMode,t["\u0275nov"](n,56).type),l(n,59,0,t["\u0275nov"](n,60).disabled||null,"NoopAnimations"===t["\u0275nov"](n,60)._animationMode)})}e("fd+v");var K=function(){function l(l){this.settings=l,this.displayedColumns=["position","name","weight","symbol"],this.role$=this.settings.role$}return l.prototype.ngOnInit=function(){},l.prototype.ngOnDestroy=function(){},l}(),Q=e("MKYB"),X=t["\u0275crt"]({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:90%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:90%}"]],data:{}});function ll(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-accordin",[],null,null,null,L,M)),t["\u0275did"](1,245760,null,0,P,[D.a,k.l],null,null)],function(l,n){l(n,1,0)},null)}function nl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-crew",[],null,null,null,W,G)),t["\u0275did"](1,114688,null,0,Y,[U.a],null,null)],function(l,n){l(n,1,0)},null)}function el(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","home.component container"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,ll)),t["\u0275did"](2,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,nl)),t["\u0275did"](4,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,0===n.context.ngIf.role),l(n,4,0,1===n.context.ngIf.role)},null)}function tl(l){return t["\u0275vid"](2,[(l()(),t["\u0275and"](16777216,null,null,3,null,el)),t["\u0275did"](1,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,b.AsyncPipe,[t.ChangeDetectorRef]),t["\u0275pod"](3,{role:0})],function(l,n){var e=n.component,u=l(n,3,0,t["\u0275unv"](n,1,0,t["\u0275nov"](n,2).transform(e.role$)));l(n,1,0,u)},null)}function ul(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,tl,X)),t["\u0275did"](1,245760,null,0,K,[Q.a],null,null)],function(l,n){l(n,1,0)},null)}var al=t["\u0275ccf"]("app-root",K,ul,{},{},[]),il=e("gIcY"),ol=e("eDkP"),dl=e("mVsa"),rl=e("M2Lx"),cl=e("uGex"),ml=e("o3x0"),pl=e("4tE/"),sl=e("v9Dh"),fl=e("4epT"),gl=e("jQLj"),bl=e("dWZg"),hl=e("OkvK"),xl=e("mrSG"),vl=e("Cy9J"),wl=function(l){function n(){return l.call(this,{someProp:null})||this}return Object(xl.__extends)(n,l),Object(xl.__decorate)([Object(vl.e)({name:"home-UIState",resettable:!0})],n)}(vl.d),Cl=function(l){function n(n){var e=l.call(this,n)||this;return e.store=n,e.someProp$=e.select(function(l){return l.someProp}),e}return Object(xl.__extends)(n,l),n}(vl.b),yl=function(){function l(l,n){this.store=l,this.query=n,this.someProp$=this.query.select(function(l){return l.someProp})}return l.prototype.updateRouteUIState=function(l){this.store.update({someProp:l})},l.prototype.reset=function(){this.store.reset()},l}(),Fl=function(){return function(){}}(),Sl=e("SMsm"),Al=e("4c35"),Il=e("qAlS"),Pl=e("seP3"),Dl=e("/VYK"),kl=e("b716"),Ml=e("YhbO"),Rl=e("jlZm"),zl=e("La40"),Ol=e("de3e"),_l=e("u7R8"),Nl=e("giXg"),Ll=e("y4qS"),Vl=e("BHnd"),Bl=e("OPcz"),jl=e("CcuA"),Jl=e("t3Ft"),Tl=e("PCNd"),El=e("3Ve7"),$l=e("j1ZV"),ql=e("e/UQ"),Hl={title:"Root"};k.p.forChild([{path:"",component:K,data:Hl}]),e.d(n,"RecentModuleNgFactory",function(){return Yl});var Yl=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,i.a,o.a,d.b,d.a,r.a,c.a,m.a,p.a,s.a,f.a,g.a,al]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[t.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,il.x,il.x,[]),t["\u0275mpd"](4608,il.g,il.g,[]),t["\u0275mpd"](4608,ol.c,ol.c,[ol.i,ol.e,t.ComponentFactoryResolver,ol.h,ol.f,t.Injector,t.NgZone,b.DOCUMENT,x.b,[2,b.Location]]),t["\u0275mpd"](5120,ol.j,ol.k,[ol.c]),t["\u0275mpd"](5120,dl.c,dl.j,[ol.c]),t["\u0275mpd"](4608,rl.c,rl.c,[]),t["\u0275mpd"](4608,v.d,v.d,[]),t["\u0275mpd"](5120,cl.a,cl.b,[ol.c]),t["\u0275mpd"](5120,ml.c,ml.d,[ol.c]),t["\u0275mpd"](135680,ml.e,ml.e,[ol.c,t.Injector,[2,b.Location],[2,ml.b],ml.c,[3,ml.e],ol.e]),t["\u0275mpd"](5120,V.f,V.a,[[3,V.f]]),t["\u0275mpd"](5120,pl.b,pl.c,[ol.c]),t["\u0275mpd"](5120,sl.a,sl.b,[ol.c]),t["\u0275mpd"](4608,w.e,v.e,[[2,v.i],[2,v.n]]),t["\u0275mpd"](5120,fl.b,fl.a,[[3,fl.b]]),t["\u0275mpd"](4608,gl.i,gl.i,[]),t["\u0275mpd"](5120,gl.a,gl.b,[ol.c]),t["\u0275mpd"](4608,v.c,v.y,[[2,v.h],bl.a]),t["\u0275mpd"](5120,hl.d,hl.a,[[3,hl.d]]),t["\u0275mpd"](4608,b.DatePipe,b.DatePipe,[t.LOCALE_ID]),t["\u0275mpd"](4608,b.CurrencyPipe,b.CurrencyPipe,[t.LOCALE_ID]),t["\u0275mpd"](135680,wl,wl,[]),t["\u0275mpd"](4608,Cl,Cl,[wl]),t["\u0275mpd"](4608,yl,yl,[wl,Cl]),t["\u0275mpd"](4608,Fl,Fl,[]),t["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),t["\u0275mpd"](1073742336,k.p,k.p,[[2,k.v],[2,k.l]]),t["\u0275mpd"](1073742336,il.w,il.w,[]),t["\u0275mpd"](1073742336,il.l,il.l,[]),t["\u0275mpd"](1073742336,il.t,il.t,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,v.n,v.n,[[2,v.f],[2,w.f]]),t["\u0275mpd"](1073742336,Sl.c,Sl.c,[]),t["\u0275mpd"](1073742336,bl.b,bl.b,[]),t["\u0275mpd"](1073742336,v.x,v.x,[]),t["\u0275mpd"](1073742336,Al.g,Al.g,[]),t["\u0275mpd"](1073742336,Il.b,Il.b,[]),t["\u0275mpd"](1073742336,ol.g,ol.g,[]),t["\u0275mpd"](1073742336,dl.i,dl.i,[]),t["\u0275mpd"](1073742336,dl.f,dl.f,[]),t["\u0275mpd"](1073742336,rl.d,rl.d,[]),t["\u0275mpd"](1073742336,Pl.e,Pl.e,[]),t["\u0275mpd"](1073742336,Dl.c,Dl.c,[]),t["\u0275mpd"](1073742336,kl.c,kl.c,[]),t["\u0275mpd"](1073742336,v.v,v.v,[]),t["\u0275mpd"](1073742336,v.s,v.s,[]),t["\u0275mpd"](1073742336,cl.d,cl.d,[]),t["\u0275mpd"](1073742336,T.c,T.c,[]),t["\u0275mpd"](1073742336,ml.i,ml.i,[]),t["\u0275mpd"](1073742336,Ml.c,Ml.c,[]),t["\u0275mpd"](1073742336,Rl.d,Rl.d,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,zl.a,zl.a,[]),t["\u0275mpd"](1073742336,h.c,h.c,[]),t["\u0275mpd"](1073742336,B.e,B.e,[]),t["\u0275mpd"](1073742336,V.g,V.g,[]),t["\u0275mpd"](1073742336,pl.e,pl.e,[]),t["\u0275mpd"](1073742336,Ol.e,Ol.e,[]),t["\u0275mpd"](1073742336,Ol.c,Ol.c,[]),t["\u0275mpd"](1073742336,_l.a,_l.a,[]),t["\u0275mpd"](1073742336,sl.c,sl.c,[]),t["\u0275mpd"](1073742336,fl.c,fl.c,[]),t["\u0275mpd"](1073742336,gl.j,gl.j,[]),t["\u0275mpd"](1073742336,v.z,v.z,[]),t["\u0275mpd"](1073742336,v.p,v.p,[]),t["\u0275mpd"](1073742336,Nl.b,Nl.b,[]),t["\u0275mpd"](1073742336,Ll.p,Ll.p,[]),t["\u0275mpd"](1073742336,Vl.m,Vl.m,[]),t["\u0275mpd"](1073742336,Bl.SignaturePadModule,Bl.SignaturePadModule,[]),t["\u0275mpd"](1073742336,hl.e,hl.e,[]),t["\u0275mpd"](1073742336,jl.ImageViewerModule,jl.ImageViewerModule,[]),t["\u0275mpd"](1073742336,Jl.a,Jl.a,[]),t["\u0275mpd"](1073742336,Tl.a,Tl.a,[]),t["\u0275mpd"](1073742336,El.a,El.a,[]),t["\u0275mpd"](1073742336,$l.a,$l.a,[]),t["\u0275mpd"](1073742336,ql.a,ql.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](256,v.g,v.k,[]),t["\u0275mpd"](1024,k.j,function(){return[[{path:"",component:K,data:Hl}]]},[])])})}}]);