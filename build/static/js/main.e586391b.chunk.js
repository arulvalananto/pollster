(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),s=n.n(a),i=(n(73),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))}),l=n(22),o=(n(79),n(37)),d=n(6),j=n(33),u=n.n(j),h=n(40),b=n(41),p=n.n(b),x={FETCH_USER:"FETCH_USER"},O=(n(99),n(58)),f=n.n(O),g=n(2),v=function(){var e=Object(l.b)();return Object(g.jsx)(f.a,{name:"Pollster",description:"\u20b9350 for 25 email credits",amount:35e3,token:function(t){return e(function(e){return function(){var t=Object(h.a)(u.a.mark((function t(n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,p.a.post("/api/stripe",{token:e});case 3:c=t.sent,n({type:x.FETCH_USER,payload:c.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},currency:"INR",stripeKey:"pk_test_51Ho1KODp1q75VMGVIej6B8V6ymRCQx5yqbEVkeIYG1zJPXNiIGnqf8v62lU8LqhAbarqvPMFJ7itUUzBctH86wHU005rxhG6Ll",children:Object(g.jsx)("button",{className:"btn",style:{background:"#F44988",fontSize:"14px",fontWeight:500,textTransform:"capitalize"},children:"Add Credits"})})},_=n(125),m=n(127),y=n(128),N=n(64),k=n.n(N),E=n(63),F=n.n(E),w=function(){var e=Object(l.c)((function(e){return e.auth}));return Object(g.jsxs)("div",{className:"header ".concat(e&&"header__features"),children:[Object(g.jsx)("div",{className:"header__left",children:Object(g.jsx)(o.b,{to:e?"/surveys":"/",children:Object(g.jsx)("p",{children:"_Pollster"})})}),Object(g.jsx)("div",{children:function(){switch(e){case void 0:return Object(g.jsx)(_.a,{size:"20px",style:{color:"black",fontSize:"10px"}});case!1:return Object(g.jsx)("a",{href:"/auth/google",className:"header__link",children:"Login With Google"});default:return Object(g.jsxs)("div",{className:"header__right",children:[Object(g.jsx)(v,{}),Object(g.jsx)(m.a,{title:"Credit",arrow:!0,children:Object(g.jsxs)("div",{className:"header__credit",children:[Object(g.jsx)("p",{children:null===e||void 0===e?void 0:e.credits}),Object(g.jsx)(F.a,{})]})}),Object(g.jsx)("a",{href:"/api/logout",className:"header__rightLink",children:Object(g.jsx)(m.a,{title:"Logout",arrow:!0,children:Object(g.jsx)(y.a,{children:Object(g.jsx)(k.a,{className:"header__navigator"})})})})]})}}()})]})},C=(n(105),n.p+"static/media/flame-remote-working.9d6aa5e6.png"),S=function(){return Object(g.jsxs)("div",{className:"landing",children:[Object(g.jsxs)("div",{className:"landing__left",children:[Object(g.jsxs)("h1",{className:"landing__heading",children:[Object(g.jsxs)("span",{style:{color:"#F04E23",display:"block"},children:["Collect"," "]})," ",Object(g.jsx)("span",{style:{color:"#FFB400"},children:"feedback "}),Object(g.jsx)("span",{style:{color:"#192B4A"},children:"from "}),Object(g.jsx)("span",{style:{color:"#00AEE0",display:"block"},children:"your users"})]}),Object(g.jsx)("a",{href:"/auth/google",children:Object(g.jsxs)("button",{className:"landing__button",children:["Start Now ",Object(g.jsx)("span",{children:"\u2192"})]})})]}),Object(g.jsx)("div",{className:"landing__right",children:Object(g.jsx)("img",{src:C,alt:"landing page logo",className:"landing__logo"})})]})},U=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth}));return Object(c.useEffect)((function(){e(function(){var e=Object(h.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/current-user");case 2:n=e.sent,t({type:x.FETCH_USER,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(w,{}),!t&&Object(g.jsx)(d.a,{exact:!0,path:"/",component:S}),t&&Object(g.jsx)(d.a,{path:"/surveys",children:Object(g.jsx)("p",{children:"Dashboard"})})]})},H=n(32),T=n(65),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.FETCH_USER:return t.payload||!1;default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type,e},z=Object(H.b)({auth:L,survey:R}),B=Object(H.c)(z,{},Object(H.a)(T.a));n(106);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(l.a,{store:B,children:Object(g.jsx)(U,{})})}),document.getElementById("root")),i()},73:function(e,t,n){},79:function(e,t,n){},99:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.e586391b.chunk.js.map