(this.webpackJsonpexam01=this.webpackJsonpexam01||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n,c=t(0),s=t.n(c),r=t(4),l=t.n(r),u=(t(25),t(26),t(8)),i=function(e){return e.counter};!function(e){e.SET_COUNTER="Counter/SET_COUNTER",e.SET_START_VALUE="Counter/SET_START_VALUE",e.SET_MAX_VALUE="Counter/SET_MAX_VALUE",e.SET_ERROR="Counter/SET_ERROR",e.SET_VERSION_COUNTER="Counter/SET_VERSION_COUNTER"}(n||(n={}));var o=function(e){return{type:n.SET_COUNTER,payload:{counter:e}}},j=function(e){return{type:n.SET_START_VALUE,payload:{startValue:e}}},b=function(e){return{type:n.SET_MAX_VALUE,payload:{maxValue:e}}},d=function(e){return{type:n.SET_ERROR,payload:{error:e}}},O=function(e){return{type:n.SET_VERSION_COUNTER,payload:{versionCounter:e}}},m=t(5),x=t(19),S=t(1);function p(e){var a=e.name,t=e.callback,n=e.disabled,c=Object(x.a)(e,["name","callback","disabled"]);return Object(S.jsx)("button",Object(m.a)(Object(m.a)({className:"butt",disabled:n,onClick:t},c),{},{children:a}))}function v(e){var a=e.value,t=a===e.maxValue?"displayMax":"displayDefault";return Object(S.jsx)("div",{className:"display",children:Object(S.jsx)("div",{className:t,children:a})})}function E(e){var a=e.counter,t=e.maxValue,n=e.startValue,c=e.error,s=e.maxValueHandler,r=e.startValueHandler,l=e.onFocusHandler,u=e.saveSettingsHandler,i=e.inc,o=e.reset,j=t<n||t<0?"spanError":"spanDefault",b=t<n||t<0?"inputSetError":"inputSet";return Object(S.jsxs)("div",{className:"v1",children:[Object(S.jsxs)("div",{className:"wrapper",children:[Object(S.jsxs)("div",{className:"display",children:[Object(S.jsx)("span",{className:j,children:"Max Value"}),Object(S.jsx)("input",{onFocus:l,value:t,className:b,min:0,onChange:s}),Object(S.jsx)("br",{}),Object(S.jsx)("span",{className:j,children:"Start Value"}),Object(S.jsx)("input",{onFocus:l,value:n,className:b,min:0,onChange:r})]}),Object(S.jsx)("span",{className:"buttContainerSet",children:Object(S.jsx)(p,{disabled:n>=t||n<0,name:"SAVE",callback:u})})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"wrapper",children:[c?Object(S.jsx)("div",{className:"display",children:Object(S.jsx)("div",{className:"error",children:c})}):Object(S.jsx)(v,{value:a,maxValue:t}),Object(S.jsxs)("span",{className:"buttContainer",children:[Object(S.jsx)(p,{name:"INC",callback:i,disabled:!!c||a===t}),Object(S.jsx)(p,{name:"RESET",callback:o,disabled:!!c||a===n})]})]})})]})}var N=t(18);function h(e){var a=e.counter,t=e.maxValue,n=e.startValue,s=e.maxValueHandler,r=e.startValueHandler,l=e.saveSettings,u=e.inc,i=e.reset,o=Object(c.useState)(!0),j=Object(N.a)(o,2),b=j[0],d=j[1],O=t<n||t<0?"spanError":"spanDefault",m=t<n||t<0?"inputSetError":"inputSet";return b?Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"wrapper",children:[Object(S.jsx)(v,{value:a,maxValue:t}),Object(S.jsxs)("span",{className:"buttContainer",children:[Object(S.jsx)(p,{name:"INC",callback:u,disabled:a>=t}),Object(S.jsx)(p,{name:"RESET",callback:i,disabled:a===n}),Object(S.jsx)(p,{name:"SET",callback:function(){d(!b)}})]})]})}):Object(S.jsxs)("div",{className:"wrapper",children:[Object(S.jsxs)("div",{className:"display",children:[Object(S.jsx)("span",{className:O,children:"Max Value "}),Object(S.jsx)("input",{value:t,min:0,className:m,onChange:s}),Object(S.jsx)("br",{}),Object(S.jsx)("span",{className:O,children:"Start Value"}),Object(S.jsx)("input",{value:n,className:m,min:0,onChange:r})]}),Object(S.jsx)("span",{className:"buttContainerSet",children:Object(S.jsx)(p,{disabled:n>=t||n<0,name:"SAVE",callback:function(){d(!b),l()}})})]})}var V=t(50);function f(){var e=Object(u.c)(i),a=e.counter,t=e.startValue,n=e.maxValue,s=e.error,r=e.versionCounter,l=Object(u.b)(),m=function(){a<n&&l(o(a+1))},x=function(){l(o(t))},p=function(e){var a=e.currentTarget.value;Number.isInteger(+a)&&l(b(Number(e.currentTarget.value)))},v=function(e){var a=e.currentTarget.value;Number.isInteger(+a)&&(l(j(Number(a))),l(o(Number(a))))};Object(c.useEffect)((function(){T()}),[]),Object(c.useEffect)((function(){f(r)}),[r]);var N=function(){localStorage.setItem("MaxValue",JSON.stringify(n)),localStorage.setItem("StartValue",JSON.stringify(t))},f=function(e){localStorage.setItem("VersionCounter",JSON.stringify(e))},T=function(){var e=localStorage.getItem("MaxValue"),a=localStorage.getItem("StartValue"),t=localStorage.getItem("VersionCounter");l(O(t&&JSON.parse(t))),Number.isInteger(Number(e)&&Number(a))?(l(b(e&&JSON.parse(e))),l(j(a&&JSON.parse(a))),l(o(a&&JSON.parse(a)))):(l(o(0)),l(j(0)),l(b(0)))};return r?Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("div",{className:"switch",children:Object(S.jsxs)("span",{children:["v1",Object(S.jsx)(V.a,{checked:r,onChange:function(){l(O(!r)),f(r)}}),"v2"]})}),Object(S.jsx)(h,{startValue:t,counter:a,maxValue:n,maxValueHandler:p,inc:m,reset:x,startValueHandler:v,saveSettings:function(){N(),o(t)}})]}):Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("div",{className:"switch",children:Object(S.jsxs)("span",{children:["v1",Object(S.jsx)(V.a,{checked:r,onChange:function(){l(O(!r)),f(r)}}),"v2"]})}),Object(S.jsx)(E,{startValue:t,counter:a,maxValue:n,inc:m,reset:x,error:s,maxValueHandler:p,startValueHandler:v,onFocusHandler:function(){l(d('enter values and press "save"'))},saveSettingsHandler:function(){l(d("")),l(o(t)),N()}})]})}var T=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))},C=t(12),_={counter:0,startValue:0,maxValue:0,versionCounter:!1,error:""},R=Object(C.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.SET_COUNTER:case n.SET_START_VALUE:case n.SET_MAX_VALUE:case n.SET_ERROR:case n.SET_VERSION_COUNTER:return Object(m.a)(Object(m.a)({},e),a.payload);default:return e}}}),y=Object(C.b)(R);l.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(u.a,{store:y,children:Object(S.jsx)(T,{})})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.04b58006.chunk.js.map