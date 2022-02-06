(this["webpackJsonpcharting-app"]=this["webpackJsonpcharting-app"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),i=(c(16),c(0)),s=c.n(i),o=c(6),r=c(3),l=c(2),u=c.n(l),d=c(1),b=function(e){return Object(d.jsx)("option",{value:e.value,children:e.description(e.value)},e.i)},j=function(e){var t=function(t){for(var c in e.description)if(c===t)return e.description[c]};return Object(d.jsxs)("div",{className:"new-observation__control",children:[Object(d.jsx)("label",{htmlFor:"observation",children:"Your observation:"}),Object(d.jsxs)("select",{className:"custom-select",id:"observation",name:"observation",value:e.value,onChange:function(t){e.onSelectObservation(t.target.value)},children:[Object(d.jsx)("option",{value:""}),e.records.map((function(e,c){return Object(d.jsx)(b,{value:e,description:t},c)}))]})]})},v=function(e){var t=function(t){for(var c in e.description)if(c===t)return e.description[c]};return Object(d.jsxs)("div",{className:"new-observation__control",style:e.style,children:[Object(d.jsx)("label",{htmlFor:"addObserv",children:"Record presence of mucus:"}),Object(d.jsxs)("select",{className:"custom-select",id:"addObserv",name:"addObserv",value:e.value,onChange:function(t){e.onSelectAdditionalObserv(t.target.value)},children:[Object(d.jsx)("option",{value:""}),e.records.map((function(e,c){return Object(d.jsx)(b,{value:e,description:t},c)}))]})]})},y=function(e){return Object(d.jsxs)("div",{className:"new-observation__control",style:e.style,children:[Object(d.jsx)("label",{htmlFor:"observationDescr",children:"Describe observed mucus"}),Object(d.jsxs)("select",{className:"custom-select",id:"observationDescr",name:"observationDescr",value:e.value,onChange:function(t){e.onSelectObservDescription(t.target.value)},children:[Object(d.jsx)("option",{value:""}),Object(d.jsx)("option",{value:"C",children:"Cloudy(white)"}),Object(d.jsx)("option",{value:"C/K",children:"Cloudy/Clear"}),Object(d.jsx)("option",{value:"G",children:"Gummy(gluey)"}),Object(d.jsx)("option",{value:"K",children:"Clear"}),Object(d.jsx)("option",{value:"L",children:"Lubricative"}),Object(d.jsx)("option",{value:"P",children:"Pasty"}),Object(d.jsx)("option",{value:"Y",children:"Yellow"})]})]})},O=function(e){return Object(d.jsxs)("div",{className:"new-observation__control",style:e.style,children:[Object(d.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(d.jsxs)("select",{id:"quantity",name:"quantity",value:e.value,onChange:function(t){e.onSelectQuantity(t.target.value)},children:[Object(d.jsx)("option",{value:""}),Object(d.jsx)("option",{value:"x1",children:"Seen only once"}),Object(d.jsx)("option",{value:"x2",children:"Seen twice a day"}),Object(d.jsx)("option",{value:"x3",children:"Seen three times a day"}),Object(d.jsx)("option",{value:"AD",children:"Seen all day"})]})]})},p=function(e){var t=Object(l.useState)(!0),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(l.useEffect)((function(){e.isValidEntry(n)}),[n,e]),Object(d.jsxs)("div",{className:"new-observation__control",children:[Object(d.jsx)("label",{htmlFor:"date",children:"Current Date: "}),Object(d.jsx)("input",{style:{color:n?"black":"red",outlineColor:n?"":"red"},type:"date",min:"2019-01-01",max:"2026-01-01",value:e.value,onChange:function(t){var c=e.lastDate;void 0!==c&&(c.date===t.target.value||c.date>t.target.value?a(!1):a(!0)),e.onSelectDate(t.target.value)}})]})},h=u.a.createContext({isSelected:!1,isSelectedDay:""}),f=(c(19),["H","M","L","VL","B","0","2","2W","4","6","8","10","10DL","10SL","10WL"]),m=["0","2","2W","4","6","8","10","10DL","10SL","10WL"],x={H:"Heavy flow",M:"Medium flow",L:"Light flow",VL:"Very light flow",B:"Brown (or black) bleeding",0:"Dry",2:"Damp without lubrication","2W":"Wet without lubrication",4:"Shiny without lubrication",6:"Sticky(1/4 in | 0.5cm)",8:"Tacky (1/2 - 3/4 inch | 1.0 - 2.0 cm)",10:"Strechy (1 inch | 2.5cm or more) ","10DL":"Damp with lubrication","10SL":"Shiny with lubrication","10WL":"Wet with lubrication"},D=function(e){var t=Object(l.useContext)(h),c=Object(l.useState)(!0),n=Object(r.a)(c,2),a=(n[0],n[1]),i=Object(l.useState)(!0),s=Object(r.a)(i,2),o=s[0],u=s[1],b=Object(l.useState)(1),D=Object(r.a)(b,2),S=D[0],N=D[1],w=Object(l.useState)(""),g=Object(r.a)(w,2),C=g[0],k=g[1],L=Object(l.useState)(""),I=Object(r.a)(L,2),q=I[0],E=I[1],F=Object(l.useState)(""),W=Object(r.a)(F,2),_=W[0],M=W[1],A=Object(l.useState)(""),V=Object(r.a)(A,2),Y=V[0],B=V[1],H=Object(l.useState)(""),J=Object(r.a)(H,2),U=J[0],z=J[1],Q=Object(l.useState)(""),R=Object(r.a)(Q,2),T=R[0],G=R[1],P=Object(l.useState)({display:"none"}),K=Object(r.a)(P,2),X=K[0],Z=K[1],$=Object(l.useState)({display:"none"}),ee=Object(r.a)($,2),te=ee[0],ce=ee[1],ne=Object(l.useState)({display:"none"}),ae=Object(r.a)(ne,2),ie=ae[0],se=ae[1];return Object(l.useEffect)((function(){t.isSelected&&(k(t.isSelectedDay.observation),E(t.isSelectedDay.additionalObserv),M(t.isSelectedDay.observationDescrip),z(t.isSelectedDay.quantity),G(t.isSelectedDay.date),N(t.isSelectedDay.cycleDay))}),[t]),Object(l.useEffect)((function(){return"L"===C||"VL"===C||"B"===C?(ce({display:"block"}),Z({display:"block"})):"0"===C||"2"===C||"2W"===C||"4"===C||"10DL"===C||"10SL"===C||"10WL"===C?Z({display:"block"}):"6"===C||"8"===C||"10"===C?(se({display:"block"}),Z({display:"block"})):(se({display:"none"}),ce({display:"none"}),Z({display:"none"}),E(""),M(""),z("")),function(){ce({display:"none"}),se({display:"none"})}}),[C]),Object(l.useEffect)((function(){"H"===C||"M"===C||"L"===C||"VL"===C||"B"===C?B("#d72638"):"0"===C||"2"===C||"2W"===C||"4"===C?B("#436436"):"6"!==C&&"8"!==C&&"10"!==C&&"10DL"!==C&&"10SL"!==C&&"10WL"!==C||B("#FFFFFF")}),[C]),Object(l.useEffect)((function(){var t=new Date;if(void 0!==e.previousDay){var c=e.previousDay.date,n=parseInt(c.slice(0,4)),a=parseInt(c.slice(5,7))-1,i=parseInt(c.slice(-2));(t=new Date(n,a,i)).setUTCDate(t.getUTCDate()+1)}var s=t.getDate(),o=t.getMonth()+1;s<10&&(s="0"+s),o<10&&(o="0"+o);var r=t.getFullYear()+"-"+o+"-"+s;console.log(r),G(r)}),[e.previousDay]),Object(d.jsx)(l.Fragment,{children:Object(d.jsx)("form",{className:"form-handler",onSubmit:function(c){c.preventDefault();var n={};C&&o&&!t.isSelected?n={cycleDay:e.lastCycleDay+1,color:Y,observation:C,additionalObserv:q,observationDescrip:_,quantity:U,date:T,cycleNum:e.currentCycleDay}:C&&o&&t.isSelected&&(n={cycleDay:S,color:Y,observation:C,additionalObserv:q,observationDescrip:_,quantity:U,date:T,cycleNum:null});e.onSaveNewObserv(n),k(""),E(""),M(""),z(""),G(""),N(S+1),a(!1)},children:Object(d.jsxs)("div",{className:"new-observation__controls",children:[Object(d.jsx)(j,{records:f,description:x,value:C,onSelectObservation:function(e){k(e)}}),Object(d.jsx)(v,{records:m,description:x,style:te,value:q,onSelectAdditionalObserv:function(e){E(e)}}),Object(d.jsx)(y,{style:ie,value:_,onSelectObservDescription:function(e){M(e)}}),Object(d.jsx)(O,{style:X,value:U,onSelectQuantity:function(e){z(e)}}),Object(d.jsx)(p,{lastDate:e.previousDay,isValidEntry:function(e){u(e)},value:T,onSelectDate:function(e){G(e)}}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})})})},S=(c(20),function(e){var t=Object(l.useContext)(h);return Object(d.jsx)("div",{className:"new-observation",children:Object(d.jsx)(D,{previousDay:e.previousDay,lastCycleDay:e.lastCycleDayNum,onSaveNewObserv:function(c){console.log("record",c,t.isSelected),t.isSelected?e.onAddModifiedObserv(c):e.onAddNewObserv(c)}})})}),N=function(e){var t=Object(l.useState)(!1),c=Object(r.a)(t,2),n=c[0],a=c[1],i=e.myDay,s=(i.id,i.cycleDay),o=i.color,u=i.observation,b=i.additionalObserv,j=i.observationDescrip,v=i.quantity,y=i.date;return Object(d.jsxs)("div",{className:"single-day ".concat(n?"selected":""),onClick:function(t){n?a(!1):(e.getDay(e.myDay),a(!0))},children:[Object(d.jsx)("div",{className:"cycle-day",children:s}),Object(d.jsx)("div",{className:"color",style:{backgroundColor:o}}),Object(d.jsxs)("div",{className:"observation-collection",children:[Object(d.jsx)("div",{className:"observation-elem",children:u}),Object(d.jsx)("div",{className:"observation-elem",children:b}),Object(d.jsx)("div",{className:"observation-elem",children:j}),Object(d.jsx)("div",{className:"observation-elem",children:v})]}),Object(d.jsx)("div",{className:"date",children:y})]})},w=function(e){var t=e.day,c=t.cycleDay,n=t.color,a=t.observation,i=t.additionalObserv,s=t.observtionDescrip,o=t.quantity,r=t.date;return Object(d.jsxs)("div",{className:"single-day",children:[Object(d.jsx)("div",{className:"cycle-day",children:c}),Object(d.jsx)("div",{className:"color",children:n}),Object(d.jsxs)("div",{className:"observation-collection",children:[Object(d.jsx)("div",{className:"observation-elem",children:a}),Object(d.jsx)("div",{className:"observation-elem",children:i}),Object(d.jsx)("div",{className:"observation-elem",children:s}),Object(d.jsx)("div",{className:"observation-elem",children:o})]}),Object(d.jsx)("div",{className:"date",children:r})]})};var g=function(e){var t=function(e,t){for(var c=[],n=e+1;n<=t;n++){var a={cycleDay:n,color:"",observation:"",additionalObserv:"",observationDescrip:"",quantity:"",date:""};c.push(a)}return c}(e.lastCycleDay,35),c=function(t){e.getSelectedDay(t)};return Object(d.jsxs)("section",{className:"chart",children:[e.cycleDaysData.map((function(e){return Object(d.jsx)(N,{myDay:e,getDay:c},e.id)})),t.map((function(e){return Object(d.jsx)(w,{day:e},e.cycleDay)}))]})},C=(c(21),function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{id:"wlc-message",children:"Hello \u2764"}),Object(d.jsx)("div",{id:"wlc-page-btn",onClick:function(){e.handleNewCycle(),e.onClickRender()},children:"Start new cycle"}),Object(d.jsx)("div",{id:"wlc-page-btn",onClick:function(){e.handleCycleUpdate(),e.onClickRender()},children:"Update current cycle"})]})}),k=c(11),L=Object(k.a)("https://akxnnsuiqwokzfskbwvo.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzYzODI3NiwiZXhwIjoxOTQ5MjE0Mjc2fQ.P41F8bt9NaEgIEOdEbxef1Dt8uA8rn_HdeMmjI1SGKE"),I=(c(25),{cycleDay:0,color:"",observation:"",additionalObserv:"",observationDescrip:"",quantity:"",date:""}),q=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),i=Object(r.a)(a,2),u=i[0],b=i[1],j=Object(l.useState)(""),v=Object(r.a)(j,2),y=v[0],O=v[1],p=Object(l.useState)([]),f=Object(r.a)(p,2),m=f[0],x=f[1],D=Object(l.useState)(""),N=Object(r.a)(D,2),w=N[0],k=N[1],q=Object(l.useState)(I),E=Object(r.a)(q,2),F=E[0],W=E[1],_=Object(l.useState)(0),M=Object(r.a)(_,2),A=M[0],V=M[1];function Y(){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(s.a.mark((function e(){var t,c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.from("observations").select("cycleNum").order("cycleNum",{ascending:!1});case 2:t=e.sent,c=t.data,n=c[0].cycleNum,V(n),console.log(A,"1 fetch");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return J.apply(this,arguments)}function J(){return(J=Object(o.a)(s.a.mark((function e(){var t,c,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.from("observations").select("*").eq("cycleNum",A.toString()).order("id");case 2:t=e.sent,c=t.data,void 0===(n=c[c.length-1])?(O(0),W(I)):(a=n.cycleDay,O(a),V(n.cycleNum)),W(n),x(c),console.log(A,"2 fetch");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.from("observations").insert([{cycleDay:t.cycleDay,color:t.color,observation:t.observation,additionalObserv:t.additionalObserv,observationDescrip:t.observationDescrip,quantity:t.quantity,date:t.date,cycleNum:A}]).single();case 2:W(I),H();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.from("observations").update({cycleDay:t.cycleDay,color:t.color,observation:t.observation,additionalObserv:t.additionalObserv,observationDescrip:t.observationDescrip,quantity:t.quantity,date:t.date}).match({id:w.id});case 2:W(I),H();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){Y(),H()}),[]),Object(d.jsxs)(h.Provider,{value:{isSelected:u,isSelectedDay:w},children:[!c&&Object(d.jsx)(C,{onClickRender:function(){n(!0)},handleNewCycle:function(){V(A+1),O(0),x([])},handleCycleUpdate:function(){Y(),H()}}),c&&Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{lastCycleDayNum:y,previousDay:F,onAddNewObserv:function(e){return U.apply(this,arguments)},onAddModifiedObserv:function(e){return z.apply(this,arguments)}}),Object(d.jsx)(g,{getSelectedDay:function(e){k(e),b(!0),H()},cycleDaysData:m,lastCycleDay:y})]})]})};a.a.render(Object(d.jsx)(q,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f64bbca8.chunk.js.map