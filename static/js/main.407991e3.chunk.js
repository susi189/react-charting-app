(this["webpackJsonpcharting-app"]=this["webpackJsonpcharting-app"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),i=(c(16),c(0)),s=c.n(i),o=c(7),r=c(3),l=c(2),d=c.n(l),b=c(1),u=function(e){return Object(b.jsx)("option",{value:e.value,children:e.description(e.value)},e.i)},j=function(e){var t=function(t){for(var c in e.description)if(c===t)return e.description[c]};return Object(b.jsxs)("div",{className:"new-observation__control",children:[Object(b.jsx)("label",{htmlFor:"observation",children:"Your observation:"}),Object(b.jsxs)("select",{className:"custom-select",id:"observation",name:"observation",value:e.value,onChange:function(t){e.onSelectObservation(t.target.value)},children:[Object(b.jsx)("option",{value:""}),e.records.map((function(e,c){return Object(b.jsx)(u,{value:e,description:t},c)}))]})]})},v=function(e){var t=function(t){for(var c in e.description)if(c===t)return e.description[c]};return Object(b.jsxs)("div",{className:"new-observation__control",style:e.style,children:[Object(b.jsx)("label",{htmlFor:"addObserv",children:"Record presence of mucus:"}),Object(b.jsxs)("select",{className:"custom-select",id:"addObserv",name:"addObserv",value:e.value,onChange:function(t){e.onSelectAdditionalObserv(t.target.value)},children:[Object(b.jsx)("option",{value:""}),e.records.map((function(e,c){return Object(b.jsx)(u,{value:e,description:t},c)}))]})]})},O=function(e){return Object(b.jsxs)("div",{className:"new-observation__control",style:e.style,children:[Object(b.jsx)("label",{htmlFor:"observationDescr",children:"Describe observed mucus"}),Object(b.jsxs)("select",{className:"custom-select",id:"observationDescr",name:"observationDescr",value:e.value,onChange:function(t){e.onSelectObservDescription(t.target.value)},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"C",children:"Cloudy(white)"}),Object(b.jsx)("option",{value:"C/K",children:"Cloudy/Clear"}),Object(b.jsx)("option",{value:"G",children:"Gummy(gluey)"}),Object(b.jsx)("option",{value:"K",children:"Clear"}),Object(b.jsx)("option",{value:"L",children:"Lubricative"}),Object(b.jsx)("option",{value:"P",children:"Pasty"}),Object(b.jsx)("option",{value:"Y",children:"Yellow"})]})]})},y=function(e){return Object(b.jsxs)("div",{className:"new-observation__control",style:e.style,children:[Object(b.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(b.jsxs)("select",{id:"quantity",name:"quantity",value:e.value,onChange:function(t){e.onSelectQuantity(t.target.value)},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"x1",children:"Seen only once"}),Object(b.jsx)("option",{value:"x2",children:"Seen twice a day"}),Object(b.jsx)("option",{value:"x3",children:"Seen three times a day"}),Object(b.jsx)("option",{value:"AD",children:"Seen all day"})]})]})},p=function(e){var t=Object(l.useState)(!0),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(l.useEffect)((function(){e.isValidEntry(a)}),[a,e]),Object(b.jsxs)("div",{className:"new-observation__control",children:[Object(b.jsx)("label",{htmlFor:"date",children:"Current Date: "}),Object(b.jsx)("input",{style:{color:a?"black":"red",outlineColor:a?"":"red"},type:"date",min:"2019-01-01",max:"2026-01-01",value:e.value,onChange:function(t){var c=e.lastDate;void 0!==c&&(c.date===t.target.value||c.date>t.target.value?n(!1):n(!0)),e.onSelectDate(t.target.value)}})]})},h=d.a.createContext({isSelected:!1,isSelectedDay:""}),f=(c(19),["H","M","L","VL","B","0","2","2W","4","6","8","10","10DL","10SL","10WL"]),m=["0","2","2W","4","6","8","10","10DL","10SL","10WL"],x={H:"Heavy flow",M:"Medium flow",L:"Light flow",VL:"Very light flow",B:"Brown (or black) bleeding",0:"Dry",2:"Damp without lubrication","2W":"Wet without lubrication",4:"Shiny without lubrication",6:"Sticky(1/4 in | 0.5cm)",8:"Tacky (1/2 - 3/4 inch | 1.0 - 2.0 cm)",10:"Strechy (1 inch | 2.5cm or more) ","10DL":"Damp with lubrication","10SL":"Shiny with lubrication","10WL":"Wet with lubrication"},D=function(e){var t=Object(l.useContext)(h),c=Object(l.useState)(!0),a=Object(r.a)(c,2),n=(a[0],a[1]),i=Object(l.useState)(!0),s=Object(r.a)(i,2),o=s[0],d=s[1],u=Object(l.useState)(1),D=Object(r.a)(u,2),S=D[0],w=D[1],N=Object(l.useState)(""),g=Object(r.a)(N,2),C=g[0],L=g[1],k=Object(l.useState)(""),I=Object(r.a)(k,2),q=I[0],E=I[1],F=Object(l.useState)(""),W=Object(r.a)(F,2),_=W[0],M=W[1],A=Object(l.useState)(""),V=Object(r.a)(A,2),Y=V[0],B=V[1],H=Object(l.useState)(""),J=Object(r.a)(H,2),z=J[0],Q=J[1],R=Object(l.useState)(""),T=Object(r.a)(R,2),G=T[0],P=T[1],U=Object(l.useState)({display:"none"}),K=Object(r.a)(U,2),X=K[0],Z=K[1],$=Object(l.useState)({display:"none"}),ee=Object(r.a)($,2),te=ee[0],ce=ee[1],ae=Object(l.useState)({display:"none"}),ne=Object(r.a)(ae,2),ie=ne[0],se=ne[1];return Object(l.useEffect)((function(){t.isSelected&&(L(t.isSelectedDay.observation),E(t.isSelectedDay.additionalObserv),M(t.isSelectedDay.observationDescrip),Q(t.isSelectedDay.quantity),P(t.isSelectedDay.date),w(t.isSelectedDay.cycleDay))}),[t]),Object(l.useEffect)((function(){return"L"===C||"VL"===C||"B"===C?(ce({display:"block"}),Z({display:"block"})):"0"===C||"2"===C||"2W"===C||"4"===C||"10DL"===C||"10SL"===C||"10WL"===C?Z({display:"block"}):"6"===C||"8"===C||"10"===C?(se({display:"block"}),Z({display:"block"})):(se({display:"none"}),ce({display:"none"}),Z({display:"none"}),E(""),M(""),Q("")),function(){ce({display:"none"}),se({display:"none"})}}),[C]),Object(l.useEffect)((function(){"H"===C||"M"===C||"L"===C||"VL"===C||"B"===C?B("#d72638"):"0"===C||"2"===C||"2W"===C||"4"===C?B("#436436"):"6"!==C&&"8"!==C&&"10"!==C&&"10DL"!==C&&"10SL"!==C&&"10WL"!==C||B("#FFFFFF")}),[C]),Object(l.useEffect)((function(){var t=new Date;if(void 0!==e.previousDay){var c=e.previousDay.date,a=parseInt(c.slice(0,4)),n=parseInt(c.slice(5,7))-1,i=parseInt(c.slice(-2));(t=new Date(a,n,i)).setUTCDate(t.getUTCDate()+1)}var s=t.getDate(),o=t.getMonth()+1;s<10&&(s="0"+s),o<10&&(o="0"+o);var r=t.getFullYear()+"-"+o+"-"+s;console.log(r),P(r)}),[e.previousDay]),Object(b.jsx)(l.Fragment,{children:Object(b.jsx)("form",{className:"form-handler",onSubmit:function(c){c.preventDefault();var a={};C&&o&&!t.isSelected?a={cycleDay:e.lastCycleDay+1,color:Y,observation:C,additionalObserv:q,observationDescrip:_,quantity:z,date:G}:C&&o&&t.isSelected&&(a={cycleDay:S,color:Y,observation:C,additionalObserv:q,observationDescrip:_,quantity:z,date:G});e.onSaveNewObserv(a),L(""),E(""),M(""),Q(""),P(""),w(S+1),n(!1)},children:Object(b.jsxs)("div",{className:"new-observation__controls",children:[Object(b.jsx)(j,{records:f,description:x,value:C,onSelectObservation:function(e){L(e)}}),Object(b.jsx)(v,{records:m,description:x,style:te,value:q,onSelectAdditionalObserv:function(e){E(e)}}),Object(b.jsx)(O,{style:ie,value:_,onSelectObservDescription:function(e){M(e)}}),Object(b.jsx)(y,{style:X,value:z,onSelectQuantity:function(e){Q(e)}}),Object(b.jsx)(p,{lastDate:e.previousDay,isValidEntry:function(e){d(e)},value:G,onSelectDate:function(e){P(e)}}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})})})},S=(c(20),function(e){var t=Object(l.useContext)(h);return Object(b.jsx)("div",{className:"new-observation",children:Object(b.jsx)(D,{previousDay:e.previousDay,lastCycleDay:e.lastCycleDayNum,onSaveNewObserv:function(c){console.log("record",c,t.isSelected),t.isSelected?e.onAddModifiedObserv(c):e.onAddNewObserv(c)}})})}),w=function(e){var t=Object(l.useState)(!1),c=Object(r.a)(t,2),a=c[0],n=c[1],i=e.myDay,s=(i.id,i.cycleDay),o=i.color,d=i.observation,u=i.additionalObserv,j=i.observationDescrip,v=i.quantity,O=i.date;return Object(b.jsxs)("div",{className:"single-day ".concat(a?"selected":""),onClick:function(t){a?n(!1):(e.getDay(e.myDay),n(!0))},children:[Object(b.jsx)("div",{className:"cycle-day",children:s}),Object(b.jsx)("div",{className:"color",style:{backgroundColor:o}}),Object(b.jsxs)("div",{className:"observation-collection",children:[Object(b.jsx)("div",{className:"observation-elem",children:d}),Object(b.jsx)("div",{className:"observation-elem",children:u}),Object(b.jsx)("div",{className:"observation-elem",children:j}),Object(b.jsx)("div",{className:"observation-elem",children:v})]}),Object(b.jsx)("div",{className:"date",children:O})]})},N=function(e){var t=e.day,c=t.cycleDay,a=t.color,n=t.observation,i=t.additionalObserv,s=t.observtionDescrip,o=t.quantity,r=t.date;return Object(b.jsxs)("div",{className:"single-day",children:[Object(b.jsx)("div",{className:"cycle-day",children:c}),Object(b.jsx)("div",{className:"color",children:a}),Object(b.jsxs)("div",{className:"observation-collection",children:[Object(b.jsx)("div",{className:"observation-elem",children:n}),Object(b.jsx)("div",{className:"observation-elem",children:i}),Object(b.jsx)("div",{className:"observation-elem",children:s}),Object(b.jsx)("div",{className:"observation-elem",children:o})]}),Object(b.jsx)("div",{className:"date",children:r})]})};var g=function(e){var t=function(e,t){for(var c=[],a=e+1;a<=t;a++){var n={cycleDay:a,color:"",observation:"",additionalObserv:"",observationDescrip:"",quantity:"",date:""};c.push(n)}return c}(e.lastCycleDay,35),c=function(t){e.getSelectedDay(t)};return Object(b.jsxs)("section",{className:"chart",children:[e.cycleDaysData.map((function(e){return Object(b.jsx)(w,{myDay:e,getDay:c},e.id)})),t.map((function(e){return Object(b.jsx)(N,{day:e},e.cycleDay)}))]})},C=(c(21),function(e){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{id:"wlc-message",children:"Hello \u2764"}),Object(b.jsx)("div",{id:"wlc-page-btn",onClick:function(){e.onClickRender()},children:"Start new cycle"}),Object(b.jsx)("div",{id:"wlc-page-btn",onClick:function(){e.onClickRender()},children:"Update current cycle"})]})}),L=c(11),k=Object(L.a)("https://akxnnsuiqwokzfskbwvo.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzYzODI3NiwiZXhwIjoxOTQ5MjE0Mjc2fQ.P41F8bt9NaEgIEOdEbxef1Dt8uA8rn_HdeMmjI1SGKE"),I=(c(25),{cycleDay:0,color:"",observation:"",additionalObserv:"",observationDescrip:"",quantity:"",date:""}),q=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(l.useState)(!1),i=Object(r.a)(n,2),d=i[0],u=i[1],j=Object(l.useState)(""),v=Object(r.a)(j,2),O=v[0],y=v[1],p=Object(l.useState)([]),f=Object(r.a)(p,2),m=f[0],x=f[1],D=Object(l.useState)(""),w=Object(r.a)(D,2),N=w[0],L=w[1],q=Object(l.useState)(I),E=Object(r.a)(q,2),F=E[0],W=E[1];function _(){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(s.a.mark((function e(){var t,c,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.from("observations").select("*").order("id");case 2:t=e.sent,c=t.data,void 0===(a=c[c.length-1])?(y(0),W(I)):(n=a.cycleDay,y(n)),W(a),x(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.from("observations").insert([{cycleDay:t.cycleDay,color:t.color,observation:t.observation,additionalObserv:t.additionalObserv,observationDescrip:t.observationDescrip,quantity:t.quantity,date:t.date}]).single();case 2:W(I),_();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.from("observations").update({cycleDay:t.cycleDay,color:t.color,observation:t.observation,additionalObserv:t.additionalObserv,observationDescrip:t.observationDescrip,quantity:t.quantity,date:t.date}).match({id:N.id});case 2:W(I),_();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){_()}),[]);return Object(b.jsxs)(h.Provider,{value:{isSelected:d,isSelectedDay:N},children:[!c&&Object(b.jsx)(C,{onClickRender:function(){a(!0)}}),c&&Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{lastCycleDayNum:O,previousDay:F,onAddNewObserv:function(e){return A.apply(this,arguments)},onAddModifiedObserv:function(e){return V.apply(this,arguments)}}),Object(b.jsx)(g,{getSelectedDay:function(e){L(e),u(!0),_()},cycleDaysData:m,lastCycleDay:O})]})]})};n.a.render(Object(b.jsx)(q,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.407991e3.chunk.js.map