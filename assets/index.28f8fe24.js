import{C as M,D as w,E as D,_ as P,r as p,G as C,H as v,a as _,c as T,d as W,l as g,J as E,K as m}from"./index.dfb2e5d9.js";import{g as S}from"./getLayout.84456cf4.js";const d=M({latest:[]});w(d);async function R(){return d.latest=await D.getLatest(),d.latest}function I(n,t){let s=0;return(...e)=>{let i=new Date().getTime();i-s>t&&(n(e),s=i)}}const k={setup(){const n=S(),t=p("H"),s=p("");function e(a){s.value=t.value,t.value=a}const i=C(R,[]),f=p(!1);function u(a){f.value=a}const r=I(l,1100);function l(a){const o=a[0];o.wheelDelta?(o.wheelDelta>0&&(t.value==="H"?e("M"):t.value==="T"?e("H"):t.value==="M"&&e("T")),o.wheelDelta<0&&(t.value==="H"?e("T"):t.value==="T"?e("M"):t.value==="M"&&e("H"))):o.detail&&(o.detail<0&&(t.value==="H"?e("M"):t.value==="T"?e("H"):t.value==="M"&&e("T")),o.detail>0&&(t.value==="H"?e("T"):t.value==="T"?e("M"):t.value==="M"&&e("H")))}let h=0,c=0;function y(a){h=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY}function H(a){const o=E(h,c,a.changedTouches[0].clientX,a.changedTouches[0].clientY);o==="up"&&a.changedTouches[0].clientY-c<=50?t.value==="H"?e("T"):t.value==="T"?e("M"):t.value==="M"&&e("H"):o==="down"&&a.changedTouches[0].clientY-c>=50&&(t.value==="H"?e("M"):t.value==="T"?e("H"):t.value==="M"&&e("T"))}return{pageTypeRef:t,lastPageTypeRef:s,stopWheel:f,latestInfo:i,...n,switchTo:e,wheelTurning:r,handelStopWeel:u,touchHomeStart:y,touchHomeEnd:H}},components:{appContent:v(()=>m(()=>import("./index.c0601d71.js"),["assets/index.c0601d71.js","assets/index.ad47076b.css","assets/index.dfb2e5d9.js","assets/index.936cb685.css","assets/classMessage.6bfb6c18.js","assets/popUp.a790c50b.js","assets/index.5a687efa.js","assets/index.821f29d8.css","assets/classSearch.ecee8600.js"])),pcContent:v(()=>m(()=>import("./index.20f2d831.js"),["assets/index.20f2d831.js","assets/index.6a747d00.css","assets/index.dfb2e5d9.js","assets/index.936cb685.css","assets/classMessage.6bfb6c18.js","assets/popUp.a790c50b.js"]))}};function L(n,t,s,e,i,f){const u=_("pcContent"),r=_("appContent");return T(),W("div",{id:"home-container",onWheel:t[0]||(t[0]=l=>{n.isPc&&!e.stopWheel&&e.wheelTurning(l)}),onTouchstart:t[1]||(t[1]=l=>{n.isPc&&!e.stopWheel&&e.touchHomeStart(l)}),onTouchend:t[2]||(t[2]=l=>{n.isPc&&!e.stopWheel&&e.touchHomeEnd(l)})},[n.isPc?(T(),g(u,{key:0,layout:n.layoutRef,latestData:e.latestInfo,pageType:e.pageTypeRef,lastPageType:e.lastPageTypeRef,onHandelStopWeel:e.handelStopWeel,onSwitchTo:e.switchTo},null,8,["layout","latestData","pageType","lastPageType","onHandelStopWeel","onSwitchTo"])):(T(),g(r,{key:1,latestData:e.latestInfo},null,8,["latestData"]))],32)}const B=P(k,[["render",L],["__scopeId","data-v-f754a10a"]]);export{B as default};
