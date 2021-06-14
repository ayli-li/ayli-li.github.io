(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{51:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s,u,l,j,b,d=n(0),p=n(21),f=n.n(p),O=(n(51),n(6)),h=n(46),x=n(11),g=n(3),m=n(12),v=n(17),w=n.n(v),y=n(24),k="GET_TOKEN",S=n(41),E=n.n(S).a.create({baseURL:"http://emphasoft-test-assignment.herokuapp.com"}),I=function(e){return E.defaults.headers.Authorization="Token ".concat(e),{type:k,token:e}},_=n(8),C=n(9),L=C.a.div(r||(r=Object(_.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),U=C.a.form(a||(a=Object(_.a)(["\n  display: flex;\n  flex-flow: column nowrap;  \n  position: relative;\n"]))),B=C.a.label(c||(c=Object(_.a)(["\n  margin-bottom: 18px;\n  margin-top: 5px;\n  text-align: center;\n"]))),D=C.a.button(o||(o=Object(_.a)(["\n  width: 90px;\n  background-color: #26EE6C;\n  padding: 5px;\n  border: 1px solid #ACB898;\n  border-radius: 3px;\n  transition: 0.5s;\n  cursor: pointer;  \n  color: white;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\n  &:hover {        \n    background-color: #1BF1E8;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  margin-left: ",";\n  margin: ",";\n  \n"])),(function(e){return e.logout?"auto":"0"}),(function(e){return e.sortById||e.signIn?"0 auto":""})),T=C.a.input(i||(i=Object(_.a)(["\n  max-width: 176px;\n  width: 100%;\n  margin-right: 20px;\n  padding: 5px;\n\n  margin-bottom: ",";\n"])),(function(e){return e.password?"8px":"0"})),A=C.a.div(s||(s=Object(_.a)(["\n  position: absolute;\n  font-size: 13px;\n  top: ",";\n"])),(function(e){return e.login?"25px":"100px"})),F=n(1),R=function(){var e=Object(d.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(d.useState)(""),c=Object(m.a)(a,2),o=c[0],i=c[1],s=Object(d.useState)(!1),u=Object(m.a)(s,2),l=u[0],j=u[1],b=Object(d.useState)(!1),p=Object(m.a)(b,2),f=p[0],O=p[1],h=Object(d.useState)("Login can't be empty"),v=Object(m.a)(h,2),k=v[0],S=v[1],_=Object(d.useState)("Password can't be empty"),C=Object(m.a)(_,2),R=C[0],z=C[1],P=Object(d.useState)(!1),G=Object(m.a)(P,2),J=G[0],N=G[1],Y=Object(x.b)(),K=Object(g.g)();Object(d.useEffect)((function(){N(!k&&!R)}),[k,R]);var M=function(e){"login"===e.target.name&&j(!0),"password"===e.target.name&&O(!0)};return Object(F.jsx)(L,{children:Object(F.jsxs)(U,{children:[Object(F.jsx)(B,{htmlFor:"login_input",children:"Login"}),l&&k&&Object(F.jsx)(A,{login:!0,style:{color:"red"},children:k}),Object(F.jsx)(T,{onChange:function(e){return function(e){r(e.target.value),!/^[\w.@+-]+$/.test(String(e.target.value).toLowerCase())||e.target.value.length>150?S("Incorrect login"):S("")}(e)},value:n,onBlur:function(e){return M(e)},name:"login",type:"text",placeholder:"Login",id:"login_input"}),Object(F.jsx)(B,{htmlFor:"password_input",children:"Password"}),f&&R&&Object(F.jsx)(A,{style:{color:"red"},children:R}),Object(F.jsx)(T,{password:!0,onChange:function(e){return function(e){i(e.target.value),e.target.value?z(""):z("Password can't be empty")}(e)},value:o,onBlur:function(e){return M(e)},name:"password",type:"password",placeholder:"Password",id:"password_input"}),Object(F.jsx)(D,{signIn:!0,onClick:function(e){e.preventDefault(),J&&(Y(function(e,t){return function(){var n=Object(y.a)(w.a.mark((function n(r){var a,c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.post("/api-token-auth/",{username:e,password:t});case 3:a=n.sent,console.log(a),c=a.data.token,localStorage.setItem("auth-token",c),r(I(c)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("err",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(n,o)),K.push("/users"))},disabled:!J,type:"submit",children:"Log In"})]})})},z="SET_USERS_DATA",P="FILTER_USERS_BY_NAME",G="SORT_USERS_BY_ID",J=function(e){return{type:z,users:e}},N=function(e){return{type:P,value:e}},Y=function(){return{type:G}},K=C.a.div(u||(u=Object(_.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  margin: 0 auto;\n  padding: 10px;  \n  max-width: 768px;\n  width: 100%;\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    max-width: 320px;\n  }\n"]))),M=C.a.form(l||(l=Object(_.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n"]))),V=C.a.ul(j||(j=Object(_.a)(["\n  list-style: none;\n  margin: 0 auto;\n  max-width: 320px;\n  width: 100%;\n  padding: 0;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;  \n"]))),$=C.a.li(b||(b=Object(_.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),q=function(){var e=Object(x.c)((function(e){return e.usersData.users})),t=Object(x.c)((function(e){return e.usersData.filteredUsers})),n=Object(d.useState)(""),r=Object(m.a)(n,2),a=r[0],c=r[1],o=Object(d.useState)(!1),i=Object(m.a)(o,2),s=i[0],u=i[1],l=Object(x.b)();Object(d.useEffect)((function(){l(function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/api/v1/users/");case 3:n=e.sent,r=n.data,t(J(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}));return Object(F.jsxs)(K,{children:[Object(F.jsx)(D,{logout:!0,onClick:function(){l((function(e){e(I("")),localStorage.removeItem("auth-token"),delete E.defaults.headers.Authorization}))},children:"Logout"}),Object(F.jsxs)(M,{children:[Object(F.jsx)(T,{type:"text",placeholder:"Find name",onChange:function(e){return function(e){e.preventDefault(),c(e.target.value)}(e)}}),Object(F.jsx)(D,{onClick:function(e){return function(e){if(e.preventDefault(),u(!0),!a)return l(N(""));l(N(a))}(e)},children:"Find user"})]}),Object(F.jsx)(D,{sortById:!0,onClick:function(e){return function(e){e.preventDefault(),0===t.length?(l(N("")),l(Y())):l(Y())}(e)},children:"Sort by Id"}),Object(F.jsx)(V,{children:t.length||s?t.map((function(e){return Object(F.jsxs)($,{children:[Object(F.jsx)("div",{children:e.id}),Object(F.jsx)("div",{children:e.username})]},e.id)})):e.map((function(e){return Object(F.jsxs)($,{children:[Object(F.jsx)("div",{children:e.id}),Object(F.jsx)("div",{children:e.username})]},e.id)}))})]})},H=function(e){var t=e.component,n=e.token,r=Object(h.a)(e,["component","token"]);return Object(F.jsx)(g.b,Object(O.a)(Object(O.a)({},r),{},{render:function(e){return n?Object(F.jsx)(t,Object(O.a)({},e)):Object(F.jsx)(g.a,{to:"/"})}}))},Q=function(){var e=Object(g.g)(),t=Object(x.b)(),n=Object(x.c)((function(e){return e.auth.token})),r=localStorage.getItem("auth-token");return Object(d.useEffect)((function(){r&&(t(I(r)),e.push("/users"))}),[]),Object(d.useEffect)((function(){n&&e.push("/users")}),[n]),Object(F.jsxs)(g.d,{children:[Object(F.jsx)(g.b,{exact:!0,path:"/",component:R}),Object(F.jsx)(H,{token:n,path:"/users",component:q})]})},W=n(18),X=n(13);var Z,ee,te=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return void 0!==e[r.type]?e[r.type](n,r):n}},ne=te(Object(X.a)({},k,(function(e,t){var n=t.token;return Object(O.a)(Object(O.a)({},e),{},{token:n})})),{token:""}),re=n(30),ae=te((Z={},Object(X.a)(Z,z,(function(e,t){var n=t.users;return Object(O.a)(Object(O.a)({},e),{},{users:n})})),Object(X.a)(Z,P,(function(e,t){var n=t.value;return Object(O.a)(Object(O.a)({},e),{},{filteredUsers:Object(re.a)(e.users.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())})))})})),Object(X.a)(Z,G,(function(e){return Object(O.a)(Object(O.a)({},e),{},{filteredUsers:Object(re.a)(e.filteredUsers.sort((function(e,t){return e.id-t.id})))})})),Z),{users:[],filteredUsers:[]}),ce=Object(W.b)({auth:ne,usersData:ae}),oe=n(45),ie=W.c,se=(ee={},Object(W.d)(ce,ee,ie(Object(W.a)(oe.a)))),ue=n(22);f.a.render(Object(F.jsx)(ue.a,{children:Object(F.jsx)(x.a,{store:se,children:Object(F.jsx)(Q,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e35ca0e8.chunk.js.map