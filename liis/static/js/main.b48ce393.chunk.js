(this.webpackJsonpliis=this.webpackJsonpliis||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ny1.43b4b93f.jpg"},106:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ny2.fef67527.jpg"},107:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ny3.6bd6b6ab.jpg"},108:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(22),i=a.n(r),s=(a(55),a(6)),o=a(34),l=a(7),u=a(109),j=a(14),d="IS_FORM_VALID",f="LOG_OUT",b=(a(59),a(2)),h=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],u=Object(c.useState)(""),f=Object(j.a)(u,2),h=f[0],m=f[1],O=Object(c.useState)(""),_=Object(j.a)(O,2),v=_[0],g=_[1],p=Object(c.useState)(!1),x=Object(j.a)(p,2),N=x[0],y=x[1],S=Object(l.b)();Object(c.useEffect)((function(){y(!h&&!v)}),[h,v]);return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"auth",children:[Object(b.jsx)("div",{className:"auth__heading",children:"Simple Flight Check"}),Object(b.jsxs)("form",{className:"auth__form",children:[Object(b.jsxs)("div",{className:"auth__form-item",children:[Object(b.jsx)("label",{className:"auth__form-label",htmlFor:"email_input",children:"\u041b\u043e\u0433\u0438\u043d:"}),Object(b.jsx)("input",{className:"auth__form-input",type:"email",name:"email",id:"email_input",onChange:function(e){return function(e){n(e.target.value),/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e.target.value))?(m(""),e.target.classList.remove("auth__form-error"),e.target.parentNode.classList.remove("auth__form-error")):(e.target.classList.add("auth__form-error"),e.target.parentNode.classList.add("auth__form-error"),m("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"))}(e)},value:a}),h&&Object(b.jsx)("div",{className:"auth__form-error-message auth__form-error-message_email",children:h})]}),Object(b.jsxs)("div",{className:"auth__form-item",children:[Object(b.jsx)("label",{className:"auth__form-label",htmlFor:"password_input",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(b.jsx)("input",{className:"auth__form-input",type:"password",name:"password",id:"password_input",onChange:function(e){return function(e){o(e.target.value),!/^(?:(?![\u0430-\u044F\u0451])[\s\S])+$/i.test(String(e.target.value).toLowerCase())||e.target.value.length<8?(g("\u0412 \u043f\u0430\u0440\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0431\u0435\u0437 \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u044b"),e.target.classList.add("auth__form-error"),e.target.parentNode.classList.add("auth__form-error")):(g(""),e.target.classList.remove("auth__form-error"),e.target.parentNode.classList.remove("auth__form-error"))}(e)},value:s}),v&&Object(b.jsx)("div",{className:"auth__form-error-message auth__form-error-message_password",children:v})]}),Object(b.jsx)("button",{className:"auth__form-button",type:"submit",disabled:!N,onClick:function(e){e.preventDefault(),N&&S({type:d})},children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},m=(a(61),a(62),function(e){var t=e.onClick;return Object(b.jsxs)("div",{className:"flights__logout",onClick:t,children:[Object(b.jsx)("div",{children:"\u0412\u044b\u0439\u0442\u0438"}),Object(b.jsx)("div",{className:"flights__logout_logo"})]})}),O="FETCH_FLIGHTS",_="FETCH_FLIGHTS_SUCCESS",v="GET_CAROUSEL_IMAGES",g="SET_FAVORITES_COUNT",p=function(e){return{type:O,currentDay:e}},x=(a(63),(new Date).toISOString().substring(0,10)),N=function(e){var t=e.localeDate,a=e.currentDay,c=e.onChange;return Object(b.jsxs)("div",{className:"flights__card-header",children:[Object(b.jsxs)("div",{className:"flights__card-heading",children:[Object(b.jsx)("span",{className:"flights__card-heading-name",children:"\u0412\u044b\u043b\u0435\u0442\u044b"}),Object(b.jsx)("div",{className:"flights__card-heading-arrow"}),Object(b.jsx)("span",{className:"flights__card-heading-way",children:"SVO - JFK"})]}),Object(b.jsxs)("div",{className:"flights__card-date",children:[Object(b.jsx)("span",{children:t}),Object(b.jsx)("div",{className:"flights__calendar"}),Object(b.jsx)("form",{className:"flights__form",children:Object(b.jsx)("input",{type:"date",name:"calendar",value:a,min:x,onChange:function(e){return c(e)}})})]})]})},y=a(44),S=a.n(y),w=(a(79),a(80),a(81),{className:"center",infinite:!1,slidesToShow:3.5,speed:500,arrows:!1}),C=function(){var e=Object(l.c)((function(e){return e.flights.images})),t=n.a.useRef(null);return Object(b.jsxs)("div",{className:"flights__pics",children:[Object(b.jsx)(S.a,Object(s.a)(Object(s.a)({ref:t},w),{},{children:e.map((function(e){return Object(b.jsx)("img",{src:e.default,alt:"img"})}))})),Object(b.jsx)("button",{className:"flights__pics_prev-arrow",onClick:function(){var e;return null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.slickPrev()}}),Object(b.jsx)("button",{className:"flights__pics_next-arrow",onClick:function(){var e;return null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.slickNext()}})]})},k=(a(82),function(){var e,t=Object(l.b)(),a=Object(l.c)((function(e){return e.flights.flightsData})),c=a.filter((function(e){return e.isFavorite})).length,n=function(e){t(function(e){return{type:g,id:e}}(e))};return Object(b.jsxs)("div",{className:"flights__info",children:[Object(b.jsxs)("div",{className:"flights__info-favorites",children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",Object(b.jsx)("span",{className:"flights__info-favorites-count",children:c})," \u0440\u0435\u0439\u0441\u043e\u0432"]}),Object(b.jsx)("div",{className:"flights__info-items",children:(null===(e=a[0])||void 0===e?void 0:e.price)?a.map((function(e){return Object(b.jsxs)("div",{className:"flights__info-item",children:[Object(b.jsx)("div",{className:"flights__info-item-plane"}),Object(b.jsxs)("div",{className:"flights__info-item-data",children:[Object(b.jsxs)("div",{className:"flights__info-item-destination",children:[Object(b.jsx)("span",{children:e.from}),Object(b.jsx)("div",{className:"flights__info-item-small-arrow"}),Object(b.jsx)("span",{children:e.to})]}),Object(b.jsxs)("div",{className:"flights__info-item-date",children:[Object(b.jsx)("div",{children:e.date}),Object(b.jsx)("div",{className:"flights__info-item-date-dash"}),Object(b.jsx)("div",{children:"20:20"})]}),Object(b.jsx)("div",{children:e.airport})]}),Object(b.jsxs)("div",{className:"flights__info-item-price",children:[Object(b.jsx)("div",{className:"flights__info-item-price-heart ".concat(e.isFavorite?"flights__info-item-price-heart_active":"flights__info-item-price-heart_disable"),onClick:function(){return n(e.id)}}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"flights__info-item-price-name",children:"Price: "}),Object(b.jsx)("span",{className:"flights__info-item-price-number",children:"".concat(e.price," ").concat(e.currency)})]})]})]})})):Object(b.jsx)("div",{className:"flights__info-error",children:"\u0412 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0412\u0430\u043c\u0438 \u0434\u0435\u043d\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0440\u0435\u0439\u0441\u0430\u0445 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430."})})]})}),F=(a(83),{year:"numeric",month:"long",day:"numeric"}),D=function(){var e=Object(c.useState)((new Date).toISOString().substring(0,10)),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],u=Object(l.b)();Object(c.useEffect)((function(){var e=new Date(a).toLocaleDateString("ru-RU",F);o(e.substring(0,e.length-3)),u(p(a))}),[]);return Object(b.jsxs)("div",{className:"flights__card",children:[Object(b.jsx)(N,{localeDate:s,currentDay:a,onChange:function(e){n(e.target.value);var t=new Date(e.target.value).toLocaleDateString("ru-RU",F);o(t.substring(0,t.length-3)),u(p(e.target.value))}}),Object(b.jsx)(C,{}),Object(b.jsx)(k,{})]})},L=function(){var e=Object(l.b)();return Object(b.jsxs)("div",{className:"flights__container",children:[Object(b.jsx)(m,{onClick:function(){return e((localStorage.removeItem("auth-verification"),{type:f}))}}),Object(b.jsx)(D,{})]})},I=(a(84),["component"]),E=["component","restricted"],T=function(e){var t=e.component,a=Object(o.a)(e,I),c=Object(l.c)((function(e){return e.auth.isFormValid}));return Object(b.jsx)(u.b,Object(s.a)(Object(s.a)({},a),{},{component:function(e){return c?Object(b.jsx)(t,Object(s.a)({},e)):Object(b.jsx)(u.a,{to:"/"})}}))},R=function(e){var t=e.component,a=(e.restricted,Object(o.a)(e,E)),c=Object(l.c)((function(e){return e.auth.isFormValid}));return Object(b.jsx)(u.b,Object(s.a)(Object(s.a)({},a),{},{component:function(e){return c?Object(b.jsx)(u.a,{to:"flights"}):Object(b.jsx)(t,Object(s.a)({},e))}}))},V=function(){return Object(b.jsxs)(u.d,{children:[Object(b.jsx)(T,{path:"/flights",component:L}),Object(b.jsx)(R,{exact:!0,path:"/",component:h})]})},z=a(15),U=a(45),P=a(48),G=a(13),A=a.n(G),H=a(33),J=a(16),M=a(46),B=Object(M.a)({}),$=A.a.mark(K);function K(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.setItem("auth-verification",!0);case 3:return e.next=5,B.push("/flights");case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),$,null,[[0,7]])}var Q=[Object(J.d)(d,K)],W=a(47),q=a.n(W),X=a(49),Y=A.a.mark(ee),Z=function(e,t){for(var a=[],c=0;c<t;c++)a.push(e);return a};function ee(e){var t,a,c,n,r,i,o,l,u,j,d,f;return A.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return t=function(){return q()({method:"GET",url:"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/en-EN/SVO-sky/JFK-sky/".concat(e.currentDay),params:{inboundpartialdate:"anytime"},headers:{"x-rapidapi-key":"9e7c53efa2mshde99a7dd7531a43p152bbcjsn3c792405c63d","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}})},b.prev=1,b.next=4,Object(J.b)(t);case 4:return u=b.sent,j=u.data,d={price:null===(a=j.Quotes[0])||void 0===a?void 0:a.MinPrice,currency:null===(c=j.Currencies[0])||void 0===c?void 0:c.Symbol,from:"".concat(null===(n=j.Places[1])||void 0===n?void 0:n.CityName," (").concat(null===(r=j.Places[1])||void 0===r?void 0:r.IataCode,")"),to:"".concat(null===(i=j.Places[0])||void 0===i?void 0:i.CityName," (").concat(null===(o=j.Places[0])||void 0===o?void 0:o.IataCode,")"),date:e.currentDay,airport:null===(l=j.Carriers[0])||void 0===l?void 0:l.Name},f=Z(d,28).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{isFavorite:!1,id:Object(X.a)()})})),b.next=10,Object(J.c)({type:_,listFlights:f});case 10:b.next=15;break;case 12:b.prev=12,b.t0=b.catch(1),console.log(b.t0);case 15:case"end":return b.stop()}}),Y,null,[[1,12]])}var te=[Object(J.d)(O,ee)],ae=A.a.mark(ce);function ce(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([].concat(Object(H.a)(Q),Object(H.a)(te)));case 2:case"end":return e.stop()}}),ae)}var ne=a(12);var re,ie,se=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,c=arguments.length>1?arguments[1]:void 0;return void 0!==e[c.type]?e[c.type](a,c):a}},oe={isFormValid:Boolean(localStorage.getItem("auth-verification"))||!1},le=se((re={},Object(ne.a)(re,d,(function(e){return Object(s.a)(Object(s.a)({},e),{},{isFormValid:!0})})),Object(ne.a)(re,f,(function(e){return Object(s.a)(Object(s.a)({},e),{},{isFormValid:!1})})),re),oe),ue=a(105),je=a(106),de=a(107),fe={flightsData:[],images:[ue,je,de,ue,je,de]},be=se((ie={},Object(ne.a)(ie,_,(function(e,t){return Object(s.a)(Object(s.a)({},e),{},{flightsData:t.listFlights})})),Object(ne.a)(ie,v,(function(e){return Object(s.a)(Object(s.a)({},e),{},{images:e.images})})),Object(ne.a)(ie,g,(function(e,t){var a=t.id;return Object(s.a)(Object(s.a)({},e),{},{flightsData:e.flightsData.map((function(e){return e.id===a?Object(s.a)(Object(s.a)({},e),{},{isFavorite:!e.isFavorite}):Object(s.a)({},e)}))})})),ie),fe),he=Object(z.combineReducers)({auth:le,flights:be}),me=Object(P.a)(),Oe=Object(s.a)({},Object(z.createStore)(he,Object(U.composeWithDevTools)(Object(z.applyMiddleware)(me))));me.run(ce);var _e=Oe;i.a.render(Object(b.jsx)(u.c,{history:B,children:Object(b.jsx)(l.a,{store:_e,children:Object(b.jsx)(V,{})})}),document.getElementById("root"))},55:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.b48ce393.chunk.js.map