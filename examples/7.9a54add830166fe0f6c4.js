(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{A2kZ:function(n,l,u){"use strict";u.r(l);var a=u("LoAr"),e=function(){},t=u("C9Ky"),o=u("O/wF"),r=u("8dL6"),i=u("zTsK"),c=u("WT9V"),d={BOX:"NESTED_SOURCES_BOX"},s=function(){function n(n){this.dnd=n,this.source=this.dnd.dragSource(d.BOX,{beginDrag:function(){return{}}}),this.opacity=this.source.listen(function(n){return n.isDragging()?.4:1})}return n.prototype.ngOnDestroy=function(){this.source.unsubscribe()},n}(),p=a.Ka({encapsulation:0,styles:["div[_ngcontent-%COMP%] {\n      border: 1px dashed #777;\n      background: #fff;\n      padding: 0.5rem 1rem;\n      margin-bottom: .5rem;\n      background-color: white;\n      width: 8rem;;\n    }\n    .handle[_ngcontent-%COMP%] {\n      cursor: move;\n      width: 14px;\n      height: 14px;\n      background: darkgreen;\n      display: inline-block;\n    }\n    div[_ngcontent-%COMP%], p[_ngcontent-%COMP%] { display: inline-block;, padding: 3px; margin: 0; }"],data:{}});function f(n){return a.fb(0,[(n()(),a.Ma(0,0,null,null,6,"div",[],[[4,"opacity",null]],null,null,null,null)),a.La(1,671744,null,0,i.c,[a.k,a.x],{dragPreview:[0,"dragPreview"]},null),a.Ya(131072,c.b,[a.h]),(n()(),a.Ma(3,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),a.Ma(4,0,null,null,1,"span",[["class","handle"]],null,null,null,null,null)),a.La(5,671744,null,0,i.d,[a.k,a.x],{dragSource:[0,"dragSource"]},null),(n()(),a.db(-1,null,[" Drag this by the handle "]))],function(n,l){var u=l.component;n(l,1,0,u.source),n(l,5,0,u.source)},function(n,l){var u=l.component;n(l,0,0,a.eb(l,0,0,a.Wa(l,2).transform(u.opacity)))})}var D=function(){function n(n){this.dnd=n,this.source=this.dnd.dragSource(d.BOX,{beginDrag:function(){return{}}}),this.opacity$=this.source.listen(function(n){return n.isDragging()?.4:1})}return n.prototype.ngOnInit=function(){var n=this,l=new Image;l.onload=function(){console.log("connecting image"),n.source.connectDragPreview(l)},l.src="data:image/png;base64,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"},n.prototype.ngOnDestroy=function(){this.source.unsubscribe()},n}(),m=a.Ka({encapsulation:0,styles:["div[_ngcontent-%COMP%] {\n      border: 1px dashed #777;\n      background: #fff;\n      padding: 0.5rem 1rem;\n      margin-bottom: .5rem;\n      background-color: white;\n      width: 8rem;;\n      cursor: move;\n    }\n    div[_ngcontent-%COMP%], p[_ngcontent-%COMP%] { display: inline-block;, padding: 3px; margin: 0; }"],data:{}});function g(n){return a.fb(0,[(n()(),a.Ma(0,0,null,null,4,"div",[],[[4,"opacity",null]],null,null,null,null)),a.La(1,671744,null,0,i.d,[a.k,a.x],{dragSource:[0,"dragSource"]},null),a.Ya(131072,c.b,[a.h]),(n()(),a.Ma(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.db(-1,null,["Drag this for image preview"]))],function(n,l){n(l,1,0,l.component.source)},function(n,l){var u=l.component;n(l,0,0,a.eb(l,0,0,a.Wa(l,2).transform(u.opacity$)))})}var A=function(){},b=a.Ka({encapsulation:0,styles:[".nested-targets-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .nested-targets-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n      margin: 20px;\n    }"],data:{}});function h(n){return a.fb(0,[(n()(),a.Ma(0,0,null,null,12,"div",[],null,null,null,null,null)),(n()(),a.Ma(1,0,null,null,1,"app-example-link",[["path","html5/handles-previews"]],null,null,null,o.b,o.a)),a.La(2,49152,null,0,r.a,[],{path:[0,"path"]},null),(n()(),a.Ma(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.db(-1,null,[" angular-skyhook lets you specify which element will be draggable, and which one will actually be the preview that follows your mouse. "])),(n()(),a.Ma(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.db(-1,null,[" If you combine both by marking an outer element as the preview and one inside it as the source, you get a handle. "])),(n()(),a.Ma(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.db(-1,null,[" You can also connect an Image node as the preview, once it has loaded. "])),(n()(),a.Ma(9,0,null,null,1,"handle",[],null,null,null,f,p)),a.La(10,180224,null,0,s,[i.g],null,null),(n()(),a.Ma(11,0,null,null,1,"custom-preview",[],null,null,null,g,m)),a.La(12,245760,null,0,D,[i.g],null,null)],function(n,l){n(l,2,0,"html5/handles-previews"),n(l,12,0)},null)}var v=a.Ia("app-nested-targets",A,function(n){return a.fb(0,[(n()(),a.Ma(0,0,null,null,1,"app-nested-targets",[],null,null,null,h,b)),a.La(1,49152,null,0,A,[],null,null)],null,null)},{},{},[]),z=u("981U"),P=u("JqZp");u.d(l,"HandlesPreviewsModuleNgFactory",function(){return O});var O=a.Ja(e,[],function(n){return a.Ta([a.Ua(512,a.j,a.X,[[8,[t.a,v]],[3,a.j],a.v]),a.Ua(4608,c.m,c.l,[a.s,[2,c.v]]),a.Ua(1073742336,c.c,c.c,[]),a.Ua(1073742336,i.f,i.f,[]),a.Ua(1073742336,z.n,z.n,[[2,z.t],[2,z.k]]),a.Ua(1073742336,P.a,P.a,[]),a.Ua(1073742336,e,e,[]),a.Ua(1024,z.i,function(){return[[{path:"",component:A}]]},[])])})},"O/wF":function(n,l,u){"use strict";u.d(l,"a",function(){return e}),u.d(l,"b",function(){return t});var a=u("LoAr"),e=(u("8dL6"),a.Ka({encapsulation:0,styles:[".fab[_ngcontent-%COMP%] { color: black; }\n        p[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        a[_ngcontent-%COMP%] {\n            padding: 8px;\n            display: inline-block;\n            background: rgba(68, 72, 224, 0.14);\n            background: #e5e2fa;\n            background: #e2ecfa;\n            text-decoration: none;\n        }"],data:{}}));function t(n){return a.fb(0,[(n()(),a.Ma(0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),a.Ma(1,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),a.Ma(2,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(n()(),a.db(-1,null,[" View the source on GitHub "]))],null,function(n,l){n(l,1,0,l.component.link)})}}}]);