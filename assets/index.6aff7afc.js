import{_ as y,I as g,a as p,c as n,d as a,e as o,x as k,m as i,y as S,v as l,z as u,g as d,j as T,F as c,f as v,i as w,p as C,k as L}from"./index.dfb2e5d9.js";import{T as R}from"./index.5a687efa.js";import{n as H}from"./classSearch.ecee8600.js";const I={setup(e,s){return{...H(e,s)}},props:{height:{required:!0,type:Number},searchList:{type:Array}},components:{Icon:g,Tag:R}},b=e=>(C("data-v-674cf2ad"),e=e(),L(),e),B={class:"search-container"},_={class:"history"},$={class:"head"},M=b(()=>o("p",null,"\u6700\u8FD1\u641C\u7D22",-1)),N={key:0,class:"litter"},V={class:"litterButton"},F=w("|"),j={key:0,class:"noData"},A={key:1,class:"tagBox"},z=["onClick"],D={class:"searchList"},O=["innerHTML","onClick"];function q(e,s,r,E,U,G){const h=p("Icon"),f=p("Tag");return n(),a("div",B,[o("div",{class:"searchBox",style:u({borderRadius:r.height/2+"rem"})},[o("form",{class:"searchFrom",onSubmit:s[4]||(s[4]=k(t=>e.handleSubmit(e.data),["prevent"]))},[i(o("input",{ref:"search",onInput:s[0]||(s[0]=t=>e.handleSearch(e.data)),onFocus:s[1]||(s[1]=t=>e.handleActive("focus")),type:"text",placeholder:"\u641C\u7D22\u6587\u7AE0","onUpdate:modelValue":s[2]||(s[2]=t=>e.valueRef=t)},null,544),[[S,e.valueRef]]),i(o("span",{onClick:s[3]||(s[3]=t=>e.handleActive("clean")),class:"clean",style:u({lineHeight:r.height+"rem"})},[d(h,{type:"close"})],4),[[l,e.valueRef]]),o("button",null,[d(h,{type:"search"})])],32)],4),i(o("div",{style:u({top:r.height+.4+"rem"}),class:"listBox"},[i(o("div",_,[o("div",$,[M,e.historyList.length!==0?(n(),a("span",N,[i(o("div",V,[o("span",{onClick:s[5]||(s[5]=(...t)=>e.delHistories&&e.delHistories(...t))},"\u6E05\u7A7A"),F,o("span",{onClick:s[6]||(s[6]=()=>{e.litterShowRef=!1})},"\u5B8C\u6210")],512),[[l,e.litterShowRef]]),i(o("div",{onClick:s[7]||(s[7]=()=>{e.litterShowRef=!0})},[d(h,{type:"litter"})],512),[[l,!e.litterShowRef]])])):T("",!0)]),e.historyList.length===0?(n(),a("div",j,"\u6682\u65E0\u641C\u7D20\u8BB0\u5F55")):(n(),a("div",A,[(n(!0),a(c,null,v(e.historyList,t=>(n(),a("span",{class:"tag",key:t.time},[d(f,{onHandleTag:e.handleTag,title:t.value},null,8,["onHandleTag","title"]),i(o("div",{onClick:m=>e.delHistory(t.value),class:"del"},[d(h,{type:"error"})],8,z),[[l,e.litterShowRef]])]))),128))]))],512),[[l,e.data===""]]),i(o("ul",D,[(n(!0),a(c,null,v(r.searchList,t=>(n(),a("li",{key:t,innerHTML:e.formatHTML(t),onClick:m=>e.handleSubmit(t)},null,8,O))),128))],512),[[l,e.data!==""]])],4),[[l,e.listShowRrf]])])}const Q=y(I,[["render",q],["__scopeId","data-v-674cf2ad"]]);export{Q as default};
