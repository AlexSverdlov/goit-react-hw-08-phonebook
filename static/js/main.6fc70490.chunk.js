(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{101:function(t,e,n){},103:function(t,e,n){"use strict";n.r(e);var c,r,a,u,i,o=n(0),s=n.n(o),b=n(22),l=n.n(b),j=n(14),O=n(43),f=n(44),d=n(47),h=n(46),g=n(10),p=n(18),C=n(26),v=function(t){return t.auth.isAutheticated},x=function(t){return t.auth.user.email},m=n(1),k={link:{textDecoration:"none",color:"black",padding:10},activelink:{color:"white"}},S=Object(j.b)((function(t){return{isAuthentificated:v(t)}}))((function(t){var e=t.isAuthentificated;return Object(m.jsxs)(C.a,{defaultActiveKey:"/home",as:"ul",children:[Object(m.jsx)(C.a.Item,{as:"li",children:Object(m.jsx)(p.b,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink-active",style:k.link,activeStyle:k.activelink,children:"Home"})}),e&&Object(m.jsx)(C.a.Item,{as:"li",children:Object(m.jsx)(p.b,{exact:!0,to:"/contacts",className:"NavLink",activeClassName:"NavLink-active",style:k.link,activeStyle:k.activelink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})})),A={link:{textDecoration:"none",color:"black",padding:10},activelink:{color:"white"}},E=function(){return Object(m.jsxs)(C.a,{children:[Object(m.jsx)(C.a.Item,{children:Object(m.jsx)(p.b,{exact:!0,to:"/register",className:"NavLink",activeClassName:"NavLink-active",style:A.link,activeStyle:A.activelink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(C.a.Item,{children:Object(m.jsx)(p.b,{exact:!0,to:"/login",className:"NavLink",activeClassName:"NavLink-active",style:A.link,activeStyle:A.activelink,children:"\u0412\u043e\u0439\u0442\u0438"})})]})},y=n(45),N=n(30),T={span:{padding:10,color:"white"}},R={onLogout:N.a.logout},U=Object(j.b)((function(t){return{email:x(t)}}),R)((function(t){var e=t.email,n=t.onLogout;return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{style:T.span,children:e}),Object(m.jsx)(y.a,{variant:"outline-light",type:"button",size:"sm",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})})),P=n(62),_=Object(j.b)((function(t){return{isAutentificated:v(t)}}))((function(t){var e=t.isAutentificated;return Object(m.jsx)("header",{children:Object(m.jsxs)(P.a,{bg:"primary",variant:"dark",className:"justify-content-between",children:[Object(m.jsx)(S,{}),e?Object(m.jsx)(U,{}):Object(m.jsx)(E,{})]})})})),L=function(t){var e=t.children;return Object(m.jsxs)("section",{children:[e,Object(m.jsx)("hr",{})]})},q=n(19),D=n(35),w=Object(j.b)((function(t){return{isAuthentificated:v(t)}}))((function(t){var e=t.component,n=t.isAuthentificated,c=Object(D.a)(t,["component","isAuthentificated"]);return Object(m.jsx)(g.b,Object(q.a)(Object(q.a)({},c),{},{render:function(t){return n?Object(m.jsx)(e,Object(q.a)({},t)):Object(m.jsx)(g.a,{to:"/login"})}}))})),z=Object(j.b)((function(t){return{isAuthentificated:v(t)}}))((function(t){var e=t.component,n=t.isAuthentificated,c=Object(D.a)(t,["component","isAuthentificated"]);return Object(m.jsx)(g.b,Object(q.a)(Object(q.a)({},c),{},{render:function(t){return n&&c.restricted?Object(m.jsx)(g.a,{to:"/contacts"}):Object(m.jsx)(e,Object(q.a)({},t))}}))})),I=(n(98),Object(o.lazy)((function(){return n.e(7).then(n.bind(null,112))}))),F=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,108))})),H=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,109))})),Q=Object(o.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,110))})),B=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(m.jsxs)(L,{children:[Object(m.jsx)(_,{}),Object(m.jsx)(o.Suspense,{fallback:Object(m.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(m.jsxs)(g.d,{children:[Object(m.jsx)(g.b,{exact:!0,path:"/",component:I}),Object(m.jsx)(z,{path:"/login",restricted:!0,component:F}),Object(m.jsx)(z,{path:"/register",restricted:!0,component:H}),Object(m.jsx)(w,{path:"/contacts",component:Q})]})})]})}}]),n}(s.a.Component),G={onGetCurrentUser:N.a.getCurrentUser},J=Object(j.b)(null,G)(B),M=n(36),K=n(3),V=n(21),W=n(60),X=n.n(W),Y=n(7),Z=n(12),$=n(28),tt=Object(K.c)([],(c={},Object(Y.a)(c,$.i,(function(t,e){return e.payload})),Object(Y.a)(c,$.c,(function(t,e){return[e.payload].concat(Object(M.a)(t))})),Object(Y.a)(c,$.f,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),et=Object(K.c)("",Object(Y.a)({},$.j,(function(t,e){return e.payload}))),nt=Object(Z.b)({items:tt,filter:et}),ct=n(5),rt={name:null,email:null},at=Object(K.c)(rt,(r={},Object(Y.a)(r,ct.a.registerSuccess,(function(t,e){return e.payload.user})),Object(Y.a)(r,ct.a.loginSuccess,(function(t,e){return e.payload.user})),Object(Y.a)(r,ct.a.logoutSuccess,(function(){return rt})),Object(Y.a)(r,ct.a.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),ut=Object(K.c)(null,(a={},Object(Y.a)(a,ct.a.registerSuccess,(function(t,e){return e.payload.token})),Object(Y.a)(a,ct.a.loginSuccess,(function(t,e){return e.payload.token})),Object(Y.a)(a,ct.a.logoutSuccess,(function(){return null})),a)),it=Object(K.c)(null,(u={},Object(Y.a)(u,ct.a.registerError,(function(t,e){return e.payload})),Object(Y.a)(u,ct.a.loginError,(function(t,e){return e.payload})),Object(Y.a)(u,ct.a.logoutError,(function(t,e){return e.payload})),Object(Y.a)(u,ct.a.getCurrentUserError,(function(t,e){return e.payload})),u)),ot=Object(K.c)(!1,(i={},Object(Y.a)(i,ct.a.registerSuccess,(function(){return!0})),Object(Y.a)(i,ct.a.loginSuccess,(function(){return!0})),Object(Y.a)(i,ct.a.getCurrentUserSuccess,(function(){return!0})),Object(Y.a)(i,ct.a.loginError,(function(){return!1})),Object(Y.a)(i,ct.a.logoutError,(function(){return!1})),Object(Y.a)(i,ct.a.getCurrentUserError,(function(){return!1})),Object(Y.a)(i,ct.a.logoutSuccess,(function(){return!1})),i)),st=Object(Z.b)({user:at,isAutheticated:ot,token:ut,error:it}),bt=[].concat(Object(M.a)(Object(K.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[function(t){return function(t){return function(e){t(e)}}}]),lt={key:"auth",storage:X.a,whitelist:["token"]},jt=Object(K.a)({reducer:{auth:Object(V.g)(lt,st),contacts:nt},middleware:bt}),Ot={store:jt,persistor:Object(V.h)(jt)},ft=n(61);n(101),n(102);l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(j.a,{store:Ot.store,children:Object(m.jsx)(ft.a,{loading:null,persistor:Ot.persistor,children:Object(m.jsx)(p.a,{children:Object(m.jsx)(J,{})})})})}),document.getElementById("root"))},28:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return j})),n.d(e,"j",(function(){return O}));var c=n(3),r=Object(c.b)("APP/FETCH_CONTACT_REQUEST"),a=Object(c.b)("APP/FETCH_CONTACT_SUCCESS"),u=Object(c.b)("APP/FETCH_CONTACT_ERROR"),i=Object(c.b)("APP/ADD_CONTACT_REQUEST"),o=Object(c.b)("APP/ADD_CONTACT_SUCCESS"),s=Object(c.b)("APP/ADD_CONTACT_ERROR"),b=Object(c.b)("APP/DEL_CONTACT_REQUEST"),l=Object(c.b)("APP/DEL_CONTACT_SUCCESS"),j=Object(c.b)("APP/DEL_CONTACT_ERROR"),O=Object(c.b)("APP/FILTER_CONTACT")},30:function(t,e,n){"use strict";var c=n(25),r=n.n(c),a=n(5);r.a.defaults.baseURL="https://connections-api.herokuapp.com";var u=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},i=function(){r.a.defaults.headers.common.Authorization=""};e.a={register:function(t){return function(e){e(a.a.registerRequest()),r.a.post("/users/signup",t).then((function(t){var n=t.data;u(n.token),e(a.a.registerSuccess(n))})).catch((function(t){return e(a.a.registerError(t.message))}))}},login:function(t){return function(e){e(a.a.loginRequest()),r.a.post("/users/login",t).then((function(t){var n=t.data;u(n.token),e(a.a.loginSuccess(n))})).catch((function(t){return e(a.a.loginError(t.message))}))}},logout:function(){return function(t){t(a.a.logoutRequest()),r.a.post("/users/logout").then((function(){i(),t(a.a.logoutSuccess())})).catch((function(e){return t(a.a.logoutError(e.message))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(u(n),t(a.a.getCurrentUserRequest()),r.a.get("/users/current").then((function(e){var n=e.data;t(a.a.getCurrentUserSuccess(n))})).catch((function(e){return t(a.a.getCurrentUserError(e.message))})))}}}},5:function(t,e,n){"use strict";var c=n(3),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),i=Object(c.b)("auth/loginRequest"),o=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),l=Object(c.b)("auth/logoutSuccess"),j=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),f=Object(c.b)("auth/getCurrentUserSuccess"),d=Object(c.b)("auth/getCurrentUserError");e.a={registerRequest:r,registerSuccess:a,registerError:u,loginRequest:i,loginSuccess:o,loginError:s,logoutRequest:b,logoutSuccess:l,logoutError:j,getCurrentUserRequest:O,getCurrentUserSuccess:f,getCurrentUserError:d}},98:function(t,e,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.6fc70490.chunk.js.map