(this.webpackJsonpexam01=this.webpackJsonpexam01||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),s=t(4),l=t.n(s),u=(t(25),t(26),t(8)),i=function(e){return e.counter};!function(e){e.SET_COUNTER="Counter/SET_COUNTER",e.SET_START_VALUE="Counter/SET_START_VALUE",e.SET_MAX_VALUE="Counter/SET_MAX_VALUE",e.SET_ERROR="Counter/SET_ERROR",e.SET_VERSION_COUNTER="Counter/SET_VERSION_COUNTER",e.SET_AFTER_SAVE_VALUES="Counter/SET_AFTER_SAVE_VALUES"}(n||(n={}));var o=function(e){return{type:n.SET_COUNTER,payload:{counter:e}}},j=function(e){return{type:n.SET_START_VALUE,payload:{startValue:e}}},b=function(e){return{type:n.SET_MAX_VALUE,payload:{maxValue:e}}},d=function(e){return{type:n.SET_ERROR,payload:{error:e}}},S=function(e){return{type:n.SET_VERSION_COUNTER,payload:{versionCounter:e}}},O=function(e,a){return{type:n.SET_AFTER_SAVE_VALUES,payload:{afterSaveMaxValue:e,afterSaveStartValue:a}}},m=t(5),x=t(19),E=t(1);function v(e){var a=e.name,t=e.callback,n=e.disabled,r=Object(x.a)(e,["name","callback","disabled"]);return Object(E.jsx)("button",Object(m.a)(Object(m.a)({className:"butt",disabled:n,onClick:t},r),{},{children:a}))}var V=c.a.memo((function(e){var a=e.value,t=a===e.maxValue?"displayMax":"displayDefault";return Object(E.jsx)("div",{className:"display",children:Object(E.jsx)("div",{className:t,children:a})})})),p=c.a.memo((function(e){var a=e.counter,t=e.maxValue,n=e.startValue,r=e.afterSaveMaxValue,c=e.afterSaveStartValue,s=e.error,l=e.maxValueHandler,u=e.startValueHandler,i=e.onFocusHandler,o=e.saveSettingsHandler,j=e.inc,b=e.reset,d=t<n||t<0?"spanError":"spanDefault",S=t<n||t<0?"inputSetError":"inputSet";return Object(E.jsxs)("div",{className:"v1",children:[Object(E.jsxs)("div",{className:"wrapper",children:[Object(E.jsxs)("div",{className:"display",children:[Object(E.jsx)("span",{className:d,children:"Max Value"}),Object(E.jsx)("input",{onFocus:i,value:t,className:S,min:0,onChange:l}),Object(E.jsx)("br",{}),Object(E.jsx)("span",{className:d,children:"Start Value"}),Object(E.jsx)("input",{onFocus:i,value:n,className:S,min:0,onChange:u})]}),Object(E.jsx)("span",{className:"buttContainerSet",children:Object(E.jsx)(v,{disabled:n>=t||n<0||r===t&&c===n,name:"SAVE",callback:o})})]}),Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:"wrapper",children:[s?Object(E.jsx)("div",{className:"display",children:Object(E.jsx)("div",{className:"error",children:s})}):Object(E.jsx)(V,{value:a,maxValue:t}),Object(E.jsxs)("span",{className:"buttContainer",children:[Object(E.jsx)(v,{name:"INC",callback:j,disabled:!!s||a===t}),Object(E.jsx)(v,{name:"RESET",callback:b,disabled:!!s||a===n})]})]})})]})})),f=t(18),N=c.a.memo((function(e){var a=e.counter,t=e.maxValue,n=e.startValue,c=e.maxValueHandler,s=e.startValueHandler,l=e.saveSettings,u=e.inc,i=e.reset,o=Object(r.useState)(!0),j=Object(f.a)(o,2),b=j[0],d=j[1],S=t<n||t<0?"spanError":"spanDefault",O=t<n||t<0?"inputSetError":"inputSet";return b?Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:"wrapper",children:[Object(E.jsx)(V,{value:a,maxValue:t}),Object(E.jsxs)("span",{className:"buttContainer",children:[Object(E.jsx)(v,{name:"INC",callback:u,disabled:a>=t}),Object(E.jsx)(v,{name:"RESET",callback:i,disabled:a===n}),Object(E.jsx)(v,{name:"SET",callback:function(){d(!b)}})]})]})}):Object(E.jsxs)("div",{className:"wrapper",children:[Object(E.jsxs)("div",{className:"display",children:[Object(E.jsx)("span",{className:S,children:"Max Value "}),Object(E.jsx)("input",{value:t,min:0,className:O,onChange:c}),Object(E.jsx)("br",{}),Object(E.jsx)("span",{className:S,children:"Start Value"}),Object(E.jsx)("input",{value:n,className:O,min:0,onChange:s})]}),Object(E.jsx)("span",{className:"buttContainerSet",children:Object(E.jsx)(v,{disabled:n>=t||n<0,name:"SAVE",callback:function(){d(!b),l()}})})]})})),T=t(50),h=c.a.memo((function(){var e=Object(u.c)(i),a=e.counter,t=e.startValue,n=e.maxValue,c=e.error,s=e.versionCounter,l=e.afterSaveMaxValue,m=e.afterSaveStartValue,x=Object(u.b)(),v=Object(r.useCallback)((function(){a<n&&x(o(a+1))}),[x,n,a]),V=Object(r.useCallback)((function(){x(o(t))}),[x,t]),f=function(e){var a=e.currentTarget.value;Number.isInteger(+a)&&x(b(Number(e.currentTarget.value)))},h=function(e){var a=e.currentTarget.value;Number.isInteger(+a)&&(x(j(Number(a))),x(o(Number(a))))},_=function(){localStorage.setItem("MaxValue",JSON.stringify(n)),localStorage.setItem("StartValue",JSON.stringify(t)),localStorage.setItem("afterSaveStartValue",JSON.stringify(t)),localStorage.setItem("afterSaveMaxValue",JSON.stringify(n))},g=function(e){localStorage.setItem("VersionCounter",JSON.stringify(e))};return Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("MaxValue"),a=localStorage.getItem("StartValue"),t=localStorage.getItem("VersionCounter");x(S(t&&JSON.parse(t))),null===e||null===a?(x(b(0)),x(j(0)),x(o(0)),x(O(0,0))):Number.isInteger(Number(e)&&Number(a))?(x(b(e&&JSON.parse(e))),x(j(a&&JSON.parse(a))),x(o(a&&JSON.parse(a))),x(O(e&&JSON.parse(e),a&&JSON.parse(a)))):(x(o(0)),x(j(0)),x(b(0)))}()}),[]),Object(r.useEffect)((function(){g(s)}),[s]),console.log("div"),s?Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("div",{className:"switch",children:Object(E.jsxs)("span",{children:["v1",Object(E.jsx)(T.a,{checked:s,onChange:function(){x(S(!s)),g(s)}}),"v2"]})}),Object(E.jsx)(N,{startValue:t,counter:a,maxValue:n,maxValueHandler:f,inc:v,reset:V,startValueHandler:h,saveSettings:function(){_(),x(o(t)),x(O(n,t))}})]}):Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("div",{className:"switch",children:Object(E.jsxs)("span",{children:["v1",Object(E.jsx)(T.a,{checked:s,onChange:function(){x(S(!s)),g(s)}}),"v2"]})}),Object(E.jsx)(p,{afterSaveMaxValue:l,afterSaveStartValue:m,startValue:t,counter:a,maxValue:n,inc:v,reset:V,error:c,maxValueHandler:f,startValueHandler:h,onFocusHandler:function(){x(O(0,0)),x(d('enter values and press "save"'))},saveSettingsHandler:function(){_(),x(d("")),x(o(t)),x(O(n,t))}})]})}));var _=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(h,{})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)}))},C=t(12),R={counter:0,startValue:0,maxValue:0,afterSaveMaxValue:0,afterSaveStartValue:0,versionCounter:!1,error:""},A=Object(C.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.SET_COUNTER:case n.SET_START_VALUE:case n.SET_MAX_VALUE:case n.SET_ERROR:case n.SET_VERSION_COUNTER:case n.SET_AFTER_SAVE_VALUES:return Object(m.a)(Object(m.a)({},e),a.payload);default:return e}}}),y=Object(C.b)(A);window.store=y,l.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(u.a,{store:y,children:Object(E.jsx)(_,{})})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.38ba7b6e.chunk.js.map