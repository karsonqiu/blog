import{r,q as L,B as I}from"./index.dfb2e5d9.js";function D(m,n){const l=r(""),h=L(()=>l.value.trim()),o=r(!1),s=r(null),t=r(JSON.parse(localStorage.getItem("historyList"))||[]),u=r(!1);function d(){confirm("\u662F\u5426\u6E05\u7A7A")&&(localStorage.removeItem("historyList"),t.value.length=0)}function g(e){const a=t.value.findIndex(i=>i.value===e);t.value.splice(a,1),localStorage.setItem("historyList",JSON.stringify(t.value))}function c(e){e.stopPropagation(),!e.composedPath().find(i=>i.className==="search-container")&&(o.value=!1,n.emit("handleActive","blur"),window.removeEventListener("click",c,!1),u.value=!1)}function S(e){e==="focus"?(o.value=!0,window.addEventListener("click",c),n.emit("handleActive",e)):e==="clean"&&(l.value="",s.value.focus(),f(""))}const f=I(e=>{n.emit("handleSearch",e)},600);function v(e){if(e){n.emit("handleSubmit",e);const a=t.value.find(i=>i.value===e);a?(a.time=new Date().getTime(),t.value.sort((i,y)=>y.time-i.time)):(t.value.unshift({value:e,time:new Date().getTime()}),t.value.length>=7&&t.value.pop()),localStorage.setItem("historyList",JSON.stringify(t.value))}else{console.log("\u65E0\u641C\u7D22\u5185\u5BB9");return}o.value=!1,n.emit("handleActive","blur"),l.value=""}function p(e){l.value=e,v(l.value)}function w(e){const a=new RegExp(l.value,"g");return e.replace(a,l.value.fontcolor("#DD644D"))}return{valueRef:l,handleActive:S,handleSubmit:v,handleTag:p,handleSearch:f,formatHTML:w,delHistories:d,delHistory:g,listShowRrf:o,search:s,historyList:t,data:h,litterShowRef:u,...m}}export{D as n};