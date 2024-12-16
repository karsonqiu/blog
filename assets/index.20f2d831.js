import{_ as P,q as R,W as j,c as u,d as w,e,t as l,r as _,n as m,O as z,w as H,H as M,K as B,a as b,g as h,h as C,m as y,v as I,T as D,z as S,j as x,i as T,x as U,y as V,l as q,E as W,p as K,k as Q}from"./index.dfb2e5d9.js";import{n as F}from"./classMessage.6bfb6c18.js";import{p as E}from"./popUp.a790c50b.js";const G={setup(){return{icp:R(()=>j().state.setting.icp)}}},J={class:"icp-container"},X={href:"#"};function Y(a,n,s,t,o,p){return u(),w("div",J,[e("a",X,l(t.icp),1)])}const Z=P(G,[["render",Y],["__scopeId","data-v-9990618d"]]);function $(a){const n=_(!1),s=_([]),t=_(""),o=_("");function p(f,c="",v=""){f&&(s.value=f,t.value=c,o.value=v,n.value=!0,a.emit("handelStopWeel",!0))}function g(){n.value=!1,a.emit("handelStopWeel",!1)}return{showAlbum:n,photosRef:s,titleRef:t,textRef:o,handleAlbum:p,closeAlbum:g}}const ee={props:{pageType:{required:!0,type:String},lastPageType:{required:!0,type:String}}},te={class:"runLine-container"};function ae(a,n,s,t,o,p){return u(),w("div",te,[e("span",{class:m(["transverse",["t"+s.lastPageType+s.pageType]])},null,2),e("span",{class:m(["transverse",["b"+s.lastPageType+s.pageType]])},null,2),e("span",{class:m(["vertical",["l"+s.lastPageType+s.pageType]])},null,2),e("span",{class:m(["vertical",{["r"+s.lastPageType+s.pageType]:!0,r:s.pageType!=="M"}])},null,2)])}const se=P(ee,[["render",ae],["__scopeId","data-v-ec43a97d"]]);const ne={setup(a,n){const s=R(()=>a.pageType),t=_(!1);let o=null;z(()=>{a.pageType&&(clearTimeout(o),o=null,o=setTimeout(()=>{t.value=!0},1500))}),H(s,()=>{t.value=!1,s.value==="M"&&(d.addressRef.value="",d.wordsRef.value="",c.value="open"),clearTimeout(o),o=null,o=setTimeout(()=>{t.value=!0},1e3)});function p(k){n.emit("switchTo",k)}const g=R(()=>a.latestData.data.value),f=$(n),c=_("open"),v=R(()=>d.messageData.value.address?d.messageData.value.address:"Karson."),i=R(()=>d.messageData.value.words?d.messageData.value.words:"\u672C\u4EBA\u76EE\u524D\u4ECE\u4E8B\u524D\u7AEF\u5F00\u53D1\uFF0C\u5177\u5907\u8BBE\u8BA1\u53CA\u5168\u6808\u5F00\u53D1\u80FD\u529B\uFF0C\u7231\u597D\u5E7F\u6CDB\uFF0C\u5982\u6709\u95EE\u9898\u6B22\u8FCE\u7559\u8A00\u4E00\u8D77\u63A2\u8BA8\u3002"),A=_(null),d=F(L,N);async function L(k){c.value="close";const O=await W.postMessage(k);E({content:O.msg,container:A.value,callBack:()=>{d.addressRef.value="",d.wordsRef.value="",c.value="open"}})}function N(){E({type:"error",content:"\u4FE1\u606F\u672A\u586B\u5199\u5B8C\u6574",container:A.value})}return{showRef:t,latestRef:g,letterSpanRef:v,letterPRef:i,messageTypeRef:c,mDom:A,...f,...d,switchTo:p}},props:{layout:{type:String,required:!0},pageType:{type:String,required:!0},lastPageType:{type:String,required:!0},latestData:{type:Object,required:!0}},components:{Icp:Z,RunLine:se,Turning:M(()=>B(()=>import("./turning.cf8b969b.js"),["assets/turning.cf8b969b.js","assets/turning.dadce8b8.css","assets/index.dfb2e5d9.js","assets/index.936cb685.css"])),Album:M(()=>B(()=>import("./index.3246085b.js"),["assets/index.3246085b.js","assets/index.20cc5dff.css","assets/getLayout.84456cf4.js","assets/index.dfb2e5d9.js","assets/index.936cb685.css","assets/moveSide.4719a2b2.js"]))}},r=a=>(K("data-v-8c8cc639"),a=a(),Q(),a),le={id:"pcContent-container"},oe={class:"hContent"},ie=r(()=>e("div",{class:"slogan"},[e("span",{class:"main"},[T(" \u6D6E\u4E8E"),e("br"),e("i",null,"\u6280\u5DE7"),T("\u4E4B\u4E0A "),e("span",{class:"eng"},[T(" Art is both creation"),e("br"),T("and recreation ")])])],-1)),de=r(()=>e("div",{class:"montage"},[e("div",{class:"top"}),e("div",{class:"bottom"}),e("div",{class:"right"}),e("div",{class:"left"}),e("div",{class:"map"})],-1)),ce=[ie,de],re={key:0,class:"tContent"},ue={class:"rowBox"},_e=r(()=>e("span",null,null,-1)),me=[_e],pe={class:"short text l"},fe=r(()=>e("span",null,null,-1)),ge=[fe],ve={class:"rowBox"},he={class:"short text b"},ye=r(()=>e("div",{class:"long middle-img"},null,-1)),Re={class:"short text t"},Te={class:"rowBox"},we=r(()=>e("span",null,null,-1)),be=[we],Se={class:"short text r"},xe=r(()=>e("span",null,null,-1)),Ae=[xe],ke={key:0,ref:"mDom",class:"mContent"},Ce={class:"envelope"},Ie={class:"address"},De={class:"tip"},Pe={class:"words"},Me={class:"tip"},Be=r(()=>e("button",null,"\u63D0\u4EA4",-1));function Ve(a,n,s,t,o,p){const g=b("RunLine"),f=b("Album"),c=b("Turning"),v=b("Icp");return u(),w("div",le,[h(g,{pageType:s.pageType,lastPageType:s.lastPageType},null,8,["pageType","lastPageType"]),h(D,{name:"content",appear:"",mode:"out-in"},{default:C(()=>[y(e("div",oe,ce,512),[[I,s.pageType==="H"&&t.showRef]])]),_:1}),h(D,{name:"content",appear:"",mode:"out-in"},{default:C(()=>[s.pageType==="T"&&t.showRef&&t.latestRef.data?(u(),w("div",re,[e("div",ue,[e("div",{onClick:n[0]||(n[0]=i=>a.handleAlbum(t.latestRef.data[0].imgs,t.latestRef.data[0].title,t.latestRef.data[0].text)),class:"long img"},[e("div",{style:S({backgroundImage:`url('${t.latestRef.data[0].imgs[0]}')`})},me,4)]),e("div",pe,[e("h4",null,l(t.latestRef.data[0].title),1),e("p",null,l(t.latestRef.data[0].text),1)]),e("div",{class:"short img",onClick:n[1]||(n[1]=i=>a.handleAlbum(t.latestRef.data[1].imgs,t.latestRef.data[1].title,t.latestRef.data[1].text))},[e("div",{style:S({backgroundImage:`url('${t.latestRef.data[1].imgs[0]}')`})},ge,4)])]),e("div",ve,[e("div",he,[e("h4",null,l(t.latestRef.data[2].title),1),e("p",null,l(t.latestRef.data[2].text),1)]),ye,e("div",Re,[e("h4",null,l(t.latestRef.data[1].title),1),e("p",null,l(t.latestRef.data[1].text),1)])]),e("div",Te,[e("div",{class:"short img",onClick:n[2]||(n[2]=i=>a.handleAlbum(t.latestRef.data[2].imgs,t.latestRef.data[2].title,t.latestRef.data[2].text))},[e("div",{style:S({backgroundImage:`url('${t.latestRef.data[2].imgs[0]}')`})},be,4)]),e("div",Se,[e("h4",null,l(t.latestRef.data[3].title),1),e("p",null,l(t.latestRef.data[3].text),1)]),e("div",{class:"long img",onClick:n[3]||(n[3]=i=>a.handleAlbum(t.latestRef.data[3].imgs,t.latestRef.data[3].title,t.latestRef.data[3].text))},[e("div",{style:S({backgroundImage:`url('${t.latestRef.data[3].imgs[0]}')`})},Ae,4)])])])):x("",!0)]),_:1}),h(D,{name:"content",appear:"",mode:"out-in"},{default:C(()=>[s.pageType==="M"&&t.showRef?(u(),w("div",ke,[e("div",{class:m(["seal",{open:t.messageTypeRef==="open",close:t.messageTypeRef==="close"}])},null,2),e("div",{class:m(["letter",{fetch:t.messageTypeRef==="open",back:t.messageTypeRef==="close"}])},[e("span",null,[T(l(t.letterSpanRef),1),y(e("i",null,"Qiu",512),[[I,!a.messageData.address]])]),e("p",null,l(t.letterPRef),1)],2),e("div",Ce,[e("form",{onSubmit:n[6]||(n[6]=U(i=>a.wordsSubmit(a.messageData),["prevent"])),class:m({fromShow:t.messageTypeRef==="open",fromHide:t.messageTypeRef==="close"})},[e("div",Ie,[y(e("input",{placeholder:"\u540D\u79F0/\u8054\u7CFB\u65B9\u5F0F",maxlength:"30","onUpdate:modelValue":n[4]||(n[4]=i=>a.addressRef=i),class:"text",type:"text"},null,512),[[V,a.addressRef]]),e("span",De,l(a.addressNubRef),1)]),e("div",Pe,[y(e("textarea",{placeholder:"\u8BF7\u7559\u8A00...",maxlength:"100","onUpdate:modelValue":n[5]||(n[5]=i=>a.wordsRef=i),class:"text"},null,512),[[V,a.wordsRef]]),e("span",Me,l(a.wordsNubRef),1)]),Be],34)])],512)):x("",!0)]),_:1}),a.showAlbum?(u(),q(f,{key:0,title:a.titleRef,text:a.textRef,photos:a.photosRef,onCloseAlbum:a.closeAlbum},null,8,["title","text","photos","onCloseAlbum"])):x("",!0),s.layout==="lg"?(u(),q(c,{key:1,pageType:s.pageType,onSwitchTo:t.switchTo},null,8,["pageType","onSwitchTo"])):x("",!0),y(h(v,null,null,512),[[I,t.showRef]])])}const Ne=P(ne,[["render",Ve],["__scopeId","data-v-8c8cc639"]]);export{Ne as default};