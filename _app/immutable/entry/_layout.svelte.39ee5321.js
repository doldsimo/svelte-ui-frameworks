var yt=Object.defineProperty;var bt=(e,n,t)=>n in e?yt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var z=(e,n,t)=>(bt(e,typeof n!="symbol"?n+"":n,t),t);import{S as Ve,i as ze,s as $e,k as v,a as M,l as S,m as C,h as y,c as N,C as Ue,p as E,n as I,D as we,b as O,E as k,F as L,G as re,H as _e,I as wt,J as Ge,K as _t,q as It,r as vt,L as Ie,u as St,M as Ct,y as kt,z as xt,A as At,N as Et,O as Ot,P as Pt,g as ve,d as Se,B as jt}from"../chunks/index.3b6e3d34.js";import{p as Tt}from"../chunks/stores.ace8838f.js";function Ce(e,n,t){const s=e.slice();return s[4]=n[t],s}function ke(e){let n,t,s,o=e[4].title+"",r,i,l,c,a;return{c(){n=v("ul"),t=v("li"),s=v("a"),r=It(o),l=M(),this.h()},l(u){n=S(u,"UL",{class:!0});var d=C(n);t=S(d,"LI",{class:!0});var h=C(t);s=S(h,"A",{href:!0,class:!0});var f=C(s);r=vt(f,o),f.forEach(y),h.forEach(y),l=N(d),d.forEach(y),this.h()},h(){I(s,"href",i=e[4].path),I(s,"class","svelte-fbsd5s"),Ie(s,"active",e[3].url.pathname===e[4].path),I(t,"class","svelte-fbsd5s"),I(n,"class","svelte-fbsd5s")},m(u,d){O(u,n,d),k(n,t),k(t,s),k(s,r),k(n,l),c||(a=L(s,"click",function(){re(e[1])&&e[1].apply(this,arguments)}),c=!0)},p(u,d){e=u,d&4&&o!==(o=e[4].title+"")&&St(r,o),d&4&&i!==(i=e[4].path)&&I(s,"href",i),d&12&&Ie(s,"active",e[3].url.pathname===e[4].path)},d(u){u&&y(n),c=!1,a()}}}function Mt(e){let n,t,s,o,r,i,l,c,a=e[2],u=[];for(let d=0;d<a.length;d+=1)u[d]=ke(Ce(e,a,d));return{c(){n=v("div"),t=v("div"),s=v("iconify-icon"),o=M(),r=v("nav");for(let d=0;d<u.length;d+=1)u[d].c();this.h()},l(d){n=S(d,"DIV",{class:!0});var h=C(n);t=S(h,"DIV",{style:!0});var f=C(t);s=S(f,"ICONIFY-ICON",{icon:!0,style:!0}),C(s).forEach(y),o=N(f),r=S(f,"NAV",{});var p=C(r);for(let m=0;m<u.length;m+=1)u[m].l(p);p.forEach(y),f.forEach(y),h.forEach(y),this.h()},h(){Ue(s,"icon","mdi:close"),E(s,"cursor","pointer"),E(s,"font-size","1.7em"),E(t,"display","flex"),E(t,"flex-direction","column"),E(t,"align-items","flex-end"),I(n,"class",i=we(e[0]?"side-drawer show":"side-drawer hide")+" svelte-fbsd5s")},m(d,h){O(d,n,h),k(n,t),k(t,s),k(t,o),k(t,r);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(r,null);l||(c=[L(s,"click",function(){re(e[1])&&e[1].apply(this,arguments)}),L(s,"keydown",function(){re(e[1])&&e[1].apply(this,arguments)})],l=!0)},p(d,[h]){if(e=d,h&14){a=e[2];let f;for(f=0;f<a.length;f+=1){const p=Ce(e,a,f);u[f]?u[f].p(p,h):(u[f]=ke(p),u[f].c(),u[f].m(r,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=a.length}h&1&&i!==(i=we(e[0]?"side-drawer show":"side-drawer hide")+" svelte-fbsd5s")&&I(n,"class",i)},i:_e,o:_e,d(d){d&&y(n),wt(u,d),l=!1,Ge(c)}}}function Nt(e,n,t){let s;_t(e,Tt,l=>t(3,s=l));let{showSidebar:o}=n,{showHideMenue:r}=n,{nav:i}=n;return e.$$set=l=>{"showSidebar"in l&&t(0,o=l.showSidebar),"showHideMenue"in l&&t(1,r=l.showHideMenue),"nav"in l&&t(2,i=l.nav)},[o,r,i,s]}class Ft extends Ve{constructor(n){super(),ze(this,n,Nt,Mt,$e,{showSidebar:0,showHideMenue:1,nav:2})}}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.7
*/const Je=Object.freeze({left:0,top:0,width:16,height:16}),J=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Q=Object.freeze({...Je,...J}),ie=Object.freeze({...Q,body:"",hidden:!1}),Lt=Object.freeze({width:null,height:null}),Ke=Object.freeze({...Lt,...J});function Rt(e,n=0){const t=e.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(t===""){const o=parseInt(e);return isNaN(o)?0:s(o)}else if(t!==e){let o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-t.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return n}const Dt=/[\s,]+/;function Ht(e,n){n.split(Dt).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const We={...Ke,preserveAspectRatio:""};function xe(e){const n={...We},t=(s,o)=>e.getAttribute(s)||o;return n.width=t("width",null),n.height=t("height",null),n.rotate=Rt(t("rotate","")),Ht(n,t("flip","")),n.preserveAspectRatio=t("preserveAspectRatio",t("preserveaspectratio","")),n}function Qt(e,n){for(const t in We)if(e[t]!==n[t])return!0;return!1}const F=/^[a-z0-9]+(-[a-z0-9]+)*$/,q=(e,n,t,s="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),c=o.pop(),a={provider:o.length>0?o[0]:s,prefix:c,name:l};return n&&!U(a)?null:a}const r=o[0],i=r.split("-");if(i.length>1){const l={provider:s,prefix:i.shift(),name:i.join("-")};return n&&!U(l)?null:l}if(t&&s===""){const l={provider:s,prefix:"",name:r};return n&&!U(l,t)?null:l}return null},U=(e,n)=>e?!!((e.provider===""||e.provider.match(F))&&(n&&e.prefix===""||e.prefix.match(F))&&e.name.match(F)):!1;function qt(e,n){const t={};!e.hFlip!=!n.hFlip&&(t.hFlip=!0),!e.vFlip!=!n.vFlip&&(t.vFlip=!0);const s=((e.rotate||0)+(n.rotate||0))%4;return s&&(t.rotate=s),t}function Ae(e,n){const t=qt(e,n);for(const s in ie)s in J?s in e&&!(s in t)&&(t[s]=J[s]):s in n?t[s]=n[s]:s in e&&(t[s]=e[s]);return t}function Bt(e,n){const t=e.icons,s=e.aliases||Object.create(null),o=Object.create(null);function r(i){if(t[i])return o[i]=[];if(!(i in o)){o[i]=null;const l=s[i]&&s[i].parent,c=l&&r(l);c&&(o[i]=[l].concat(c))}return o[i]}return(n||Object.keys(t).concat(Object.keys(s))).forEach(r),o}function Vt(e,n,t){const s=e.icons,o=e.aliases||Object.create(null);let r={};function i(l){r=Ae(s[l]||o[l],r)}return i(n),t.forEach(i),Ae(e,r)}function Ye(e,n){const t=[];if(typeof e!="object"||typeof e.icons!="object")return t;e.not_found instanceof Array&&e.not_found.forEach(o=>{n(o,null),t.push(o)});const s=Bt(e);for(const o in s){const r=s[o];r&&(n(o,Vt(e,o,r)),t.push(o))}return t}const zt={provider:"",aliases:{},not_found:{},...Je};function te(e,n){for(const t in n)if(t in e&&typeof e[t]!=typeof n[t])return!1;return!0}function Xe(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!te(e,zt))return null;const t=n.icons;for(const o in t){const r=t[o];if(!o.match(F)||typeof r.body!="string"||!te(r,ie))return null}const s=n.aliases||Object.create(null);for(const o in s){const r=s[o],i=r.parent;if(!o.match(F)||typeof i!="string"||!t[i]&&!s[i]||!te(r,ie))return null}return n}const K=Object.create(null);function $t(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function x(e,n){const t=K[e]||(K[e]=Object.create(null));return t[n]||(t[n]=$t(e,n))}function pe(e,n){return Xe(n)?Ye(n,(t,s)=>{s?e.icons[t]=s:e.missing.add(t)}):[]}function Ut(e,n,t){try{if(typeof t.body=="string")return e.icons[n]={...t},!0}catch{}return!1}function Gt(e,n){let t=[];return(typeof e=="string"?[e]:Object.keys(K)).forEach(o=>{(typeof o=="string"&&typeof n=="string"?[n]:Object.keys(K[o]||{})).forEach(i=>{const l=x(o,i);t=t.concat(Object.keys(l.icons).map(c=>(o!==""?"@"+o+":":"")+i+":"+c))})}),t}let R=!1;function Ze(e){return typeof e=="boolean"&&(R=e),R}function D(e){const n=typeof e=="string"?q(e,!0,R):e;if(n){const t=x(n.provider,n.prefix),s=n.name;return t.icons[s]||(t.missing.has(s)?null:void 0)}}function et(e,n){const t=q(e,!0,R);if(!t)return!1;const s=x(t.provider,t.prefix);return Ut(s,t.name,n)}function Ee(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),R&&!n&&!e.prefix){let o=!1;return Xe(e)&&(e.prefix="",Ye(e,(r,i)=>{i&&et(r,i)&&(o=!0)})),o}const t=e.prefix;if(!U({provider:n,prefix:t,name:"a"}))return!1;const s=x(n,t);return!!pe(s,e)}function Jt(e){return!!D(e)}function Kt(e){const n=D(e);return n?{...Q,...n}:null}function Wt(e){const n={loaded:[],missing:[],pending:[]},t=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return e.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,i=o.prefix,l=o.name,c=t[r]||(t[r]=Object.create(null)),a=c[i]||(c[i]=x(r,i));let u;l in a.icons?u=n.loaded:i===""||a.missing.has(l)?u=n.missing:u=n.pending;const d={provider:r,prefix:i,name:l};u.push(d)}),n}function tt(e,n){e.forEach(t=>{const s=t.loaderCallbacks;s&&(t.loaderCallbacks=s.filter(o=>o.id!==n))})}function Yt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let t=!1;const s=e.provider,o=e.prefix;n.forEach(r=>{const i=r.icons,l=i.pending.length;i.pending=i.pending.filter(c=>{if(c.prefix!==o)return!0;const a=c.name;if(e.icons[a])i.loaded.push({provider:s,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:s,prefix:o,name:a});else return t=!0,!0;return!1}),i.pending.length!==l&&(t||tt([e],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let Xt=0;function Zt(e,n,t){const s=Xt++,o=tt.bind(null,t,s);if(!n.pending.length)return o;const r={id:s,icons:n,callback:e,abort:o};return t.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),o}const ce=Object.create(null);function Oe(e,n){ce[e]=n}function le(e){return ce[e]||ce[""]}function en(e,n=!0,t=!1){const s=[];return e.forEach(o=>{const r=typeof o=="string"?q(o,n,t):o;r&&s.push(r)}),s}var tn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function nn(e,n,t,s){const o=e.resources.length,r=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const _=Math.floor(Math.random()*g.length);i.push(g[_]),g=g.slice(0,_).concat(g.slice(_+1))}i=i.concat(g)}else i=e.resources.slice(r).concat(e.resources.slice(0,r));const l=Date.now();let c="pending",a=0,u,d=null,h=[],f=[];typeof s=="function"&&f.push(s);function p(){d&&(clearTimeout(d),d=null)}function m(){c==="pending"&&(c="aborted"),p(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function Z(g,_){_&&(f=[]),typeof g=="function"&&f.push(g)}function B(){return{startTime:l,payload:n,status:c,queriesSent:a,queriesPending:h.length,subscribe:Z,abort:m}}function b(){c="failed",f.forEach(g=>{g(void 0,u)})}function w(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function mt(g,_,j){const V=_!=="success";switch(h=h.filter(A=>A!==g),c){case"pending":break;case"failed":if(V||!e.dataAfterTimeout)return;break;default:return}if(_==="abort"){u=j,b();return}if(V){u=j,h.length||(i.length?ee():b());return}if(p(),w(),!e.random){const A=e.resources.indexOf(g.resource);A!==-1&&A!==e.index&&(e.index=A)}c="completed",f.forEach(A=>{A(j)})}function ee(){if(c!=="pending")return;p();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{p(),c==="pending"&&(w(),b())},e.timeout);return}b();return}const _={status:"pending",resource:g,callback:(j,V)=>{mt(_,j,V)}};h.push(_),a++,d=setTimeout(ee,e.rotate),t(g,n,_.callback)}return setTimeout(ee),B}function nt(e){const n={...tn,...e};let t=[];function s(){t=t.filter(l=>l().status==="pending")}function o(l,c,a){const u=nn(n,l,c,(d,h)=>{s(),a&&a(d,h)});return t.push(u),u}function r(l){return t.find(c=>l(c))||null}return{query:o,find:r,setIndex:l=>{n.index=l},getIndex:()=>n.index,cleanup:s}}function ge(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Y=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],G=[];for(;T.length>0;)T.length===1||Math.random()>.5?G.push(T.shift()):G.push(T.pop());Y[""]=ge({resources:["https://api.iconify.design"].concat(G)});function Pe(e,n){const t=ge(n);return t===null?!1:(Y[e]=t,!0)}function X(e){return Y[e]}function on(){return Object.keys(Y)}function je(){}const ne=Object.create(null);function sn(e){if(!ne[e]){const n=X(e);if(!n)return;const t=nt(n),s={config:n,redundancy:t};ne[e]=s}return ne[e]}function ot(e,n,t){let s,o;if(typeof e=="string"){const r=le(e);if(!r)return t(void 0,424),je;o=r.send;const i=sn(e);i&&(s=i.redundancy)}else{const r=ge(e);if(r){s=nt(r);const i=e.resources?e.resources[0]:"",l=le(i);l&&(o=l.send)}}return!s||!o?(t(void 0,424),je):s.query(n,o,t)().abort}const Te="iconify2",H="iconify",st=H+"-count",Me=H+"-version",rt=36e5,rn=168;function ae(e,n){try{return e.getItem(n)}catch{}}function me(e,n,t){try{return e.setItem(n,t),!0}catch{}}function Ne(e,n){try{e.removeItem(n)}catch{}}function ue(e,n){return me(e,st,n.toString())}function fe(e){return parseInt(ae(e,st))||0}const P={local:!0,session:!0},it={local:new Set,session:new Set};let ye=!1;function cn(e){ye=e}let $=typeof window>"u"?{}:window;function ct(e){const n=e+"Storage";try{if($&&$[n]&&typeof $[n].length=="number")return $[n]}catch{}P[e]=!1}function lt(e,n){const t=ct(e);if(!t)return;const s=ae(t,Me);if(s!==Te){if(s){const l=fe(t);for(let c=0;c<l;c++)Ne(t,H+c.toString())}me(t,Me,Te),ue(t,0);return}const o=Math.floor(Date.now()/rt)-rn,r=l=>{const c=H+l.toString(),a=ae(t,c);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&n(u,l))return!0}catch{}Ne(t,c)}};let i=fe(t);for(let l=i-1;l>=0;l--)r(l)||(l===i-1?(i--,ue(t,i)):it[e].add(l))}function at(){if(!ye){cn(!0);for(const e in P)lt(e,n=>{const t=n.data,s=n.provider,o=t.prefix,r=x(s,o);if(!pe(r,t).length)return!1;const i=t.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function ln(e,n){const t=e.lastModifiedCached;if(t&&t>=n)return t===n;if(e.lastModifiedCached=n,t)for(const s in P)lt(s,o=>{const r=o.data;return o.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===n});return!0}function an(e,n){ye||at();function t(s){let o;if(!P[s]||!(o=ct(s)))return;const r=it[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=fe(o),!ue(o,i+1))return;const l={cached:Math.floor(Date.now()/rt),provider:e.provider,data:n};return me(o,H+i.toString(),JSON.stringify(l))}n.lastModified&&!ln(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),t("local")||t("session"))}function Fe(){}function un(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Yt(e)}))}function fn(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:s}=e,o=e.iconsToLoad;delete e.iconsToLoad;let r;if(!o||!(r=le(t)))return;r.prepare(t,s,o).forEach(l=>{ot(t,l,c=>{if(typeof c!="object")l.icons.forEach(a=>{e.missing.add(a)});else try{const a=pe(e,c);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),an(e,c)}catch(a){console.error(a)}un(e)})})}))}const be=(e,n)=>{const t=en(e,!0,Ze()),s=Wt(t);if(!s.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(s.loaded,s.missing,s.pending,Fe)}),()=>{c=!1}}const o=Object.create(null),r=[];let i,l;return s.pending.forEach(c=>{const{provider:a,prefix:u}=c;if(u===l&&a===i)return;i=a,l=u,r.push(x(a,u));const d=o[a]||(o[a]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(c=>{const{provider:a,prefix:u,name:d}=c,h=x(a,u),f=h.pendingIcons||(h.pendingIcons=new Set);f.has(d)||(f.add(d),o[a][u].push(d))}),r.forEach(c=>{const{provider:a,prefix:u}=c;o[a][u].length&&fn(c,o[a][u])}),n?Zt(n,s,r):Fe},dn=e=>new Promise((n,t)=>{const s=typeof e=="string"?q(e,!0):e;if(!s){t(e);return}be([s||e],o=>{if(o.length&&s){const r=D(s);if(r){n({...Q,...r});return}}t(e)})});function hn(e){try{const n=typeof e=="string"?JSON.parse(e):e;if(typeof n.body=="string")return{...n}}catch{}}function pn(e,n){const t=typeof e=="string"?q(e,!0,!0):null;if(!t){const r=hn(e);return{value:e,data:r}}const s=D(t);if(s!==void 0||!t.prefix)return{value:e,name:t,data:s};const o=be([t],()=>n(e,t,D(t)));return{value:e,name:t,loading:o}}function oe(e){return e.hasAttribute("inline")}let ut=!1;try{ut=navigator.vendor.indexOf("Apple")===0}catch{}function gn(e,n){switch(n){case"svg":case"bg":case"mask":return n}return n!=="style"&&(ut||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const mn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function de(e,n,t){if(n===1)return e;if(t=t||100,typeof e=="number")return Math.ceil(e*n*t)/t;if(typeof e!="string")return e;const s=e.split(mn);if(s===null||!s.length)return e;const o=[];let r=s.shift(),i=yn.test(r);for(;;){if(i){const l=parseFloat(r);isNaN(l)?o.push(r):o.push(Math.ceil(l*n*t)/t)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");i=!i}}const bn=e=>e==="unset"||e==="undefined"||e==="none";function ft(e,n){const t={...Q,...e},s={...Ke,...n},o={left:t.left,top:t.top,width:t.width,height:t.height};let r=t.body;[t,s].forEach(p=>{const m=[],Z=p.hFlip,B=p.vFlip;let b=p.rotate;Z?B?b+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):B&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let w;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:w=o.height/2+o.top,m.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,m.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}b%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),m.length&&(r='<g transform="'+m.join(" ")+'">'+r+"</g>")});const i=s.width,l=s.height,c=o.width,a=o.height;let u,d;i===null?(d=l===null?"1em":l==="auto"?a:l,u=de(d,c/a)):(u=i==="auto"?c:i,d=l===null?de(u,a/c):l==="auto"?a:l);const h={},f=(p,m)=>{bn(m)||(h[p]=m.toString())};return f("width",u),f("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+a.toString(),{attributes:h,body:r}}const wn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let W=wn();function _n(e){W=e}function In(){return W}function vn(e,n){const t=X(e);if(!t)return 0;let s;if(!t.maxURL)s=0;else{let o=0;t.resources.forEach(i=>{o=Math.max(o,i.length)});const r=n+".json?icons=";s=t.maxURL-o-t.path.length-r.length}return s}function Sn(e){return e===404}const Cn=(e,n,t)=>{const s=[],o=vn(e,n),r="icons";let i={type:r,provider:e,prefix:n,icons:[]},l=0;return t.forEach((c,a)=>{l+=c.length+1,l>=o&&a>0&&(s.push(i),i={type:r,provider:e,prefix:n,icons:[]},l=c.length),i.icons.push(c)}),s.push(i),s};function kn(e){if(typeof e=="string"){const n=X(e);if(n)return n.path}return"/"}const xn=(e,n,t)=>{if(!W){t("abort",424);return}let s=kn(n.provider);switch(n.type){case"icons":{const r=n.prefix,l=n.icons.join(","),c=new URLSearchParams({icons:l});s+=r+".json?"+c.toString();break}case"custom":{const r=n.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:t("abort",400);return}let o=503;W(e+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{t(Sn(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?t("abort",r):t("next",o)});return}setTimeout(()=>{t("success",r)})}).catch(()=>{t("next",o)})},An={prepare:Cn,send:xn};function Le(e,n){switch(e){case"local":case"session":P[e]=n;break;case"all":for(const t in P)P[t]=n;break}}const se="data-style";let dt="";function En(e){dt=e}function Re(e,n){let t=Array.from(e.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(se));t||(t=document.createElement("style"),t.setAttribute(se,se),e.appendChild(t)),t.textContent=":host{display:inline-block;vertical-align:"+(n?"-0.125em":"0")+"}span,svg{display:block}"+dt}function ht(){Oe("",An),Ze(!0);let e;try{e=window}catch{}if(e){if(at(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Ee(o))&&console.error(s)}catch{console.error(s)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const s in t){const o="IconifyProviders["+s+"] is invalid.";try{const r=t[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Pe(s,r)||console.error(o)}catch{console.error(o)}}}}return{enableCache:t=>Le(t,!0),disableCache:t=>Le(t,!1),iconExists:Jt,getIcon:Kt,listIcons:Gt,addIcon:et,addCollection:Ee,calculateSize:de,buildIcon:ft,loadIcons:be,loadIcon:dn,addAPIProvider:Pe,appendCustomStyle:En,_api:{getAPIConfig:X,setAPIModule:Oe,sendAPIQuery:ot,setFetch:_n,getFetch:In,listAPIProviders:on}}}function pt(e,n){let t=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in n)t+=" "+s+'="'+n[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}function On(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Pn(e){return'url("data:image/svg+xml,'+On(e)+'")'}const he={"background-color":"currentColor"},gt={"background-color":"transparent"},De={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},He={"-webkit-mask":he,mask:he,background:gt};for(const e in He){const n=He[e];for(const t in De)n[e+"-"+t]=De[t]}function Qe(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function jn(e,n,t){const s=document.createElement("span");let o=e.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const r=e.attributes,i=pt(o,{...r,width:n.width+"",height:n.height+""}),l=Pn(i),c=s.style,a={"--svg":l,width:Qe(r.width),height:Qe(r.height),...t?he:gt};for(const u in a)c.setProperty(u,a[u]);return s}function Tn(e){const n=document.createElement("span"),t=e.attributes;let s="";return t.width||(s="width: inherit;"),t.height||(s+="height: inherit;"),s&&(t.style=s),n.innerHTML=pt(e.body,t),n.firstChild}function qe(e,n){const t=n.icon.data,s=n.customisations,o=ft(t,s);s.preserveAspectRatio&&(o.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=n.renderedMode;let i;switch(r){case"svg":i=Tn(o);break;default:i=jn(o,{...Q,...t},r==="mask")}const l=Array.from(e.childNodes).find(c=>{const a=c.tagName&&c.tagName.toUpperCase();return a==="SPAN"||a==="SVG"});l?i.tagName==="SPAN"&&l.tagName===i.tagName?l.setAttribute("style",i.getAttribute("style")):e.replaceChild(i,l):e.appendChild(i)}function Be(e,n,t){const s=t&&(t.rendered?t:t.lastRender);return{rendered:!1,inline:n,icon:e,lastRender:s}}function Mn(e="iconify-icon"){let n,t;try{n=window.customElements,t=window.HTMLElement}catch{return}if(!n||!t)return;const s=n.get(e);if(s)return s;const o=["icon","mode","inline","width","height","rotate","flip"],r=class extends t{constructor(){super();z(this,"_shadowRoot");z(this,"_state");z(this,"_checkQueued",!1);const c=this._shadowRoot=this.attachShadow({mode:"open"}),a=oe(this);Re(c,a),this._state=Be({value:""},a),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(c){if(c==="inline"){const a=oe(this),u=this._state;a!==u.inline&&(u.inline=a,Re(this._shadowRoot,a))}else this._queueCheck()}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return oe(this)}set inline(c){c?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const c=this._state;if(c.rendered){const a=this._shadowRoot;if(c.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}qe(a,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,a=this.getAttribute("icon");if(a!==c.icon.value){this._iconChanged(a);return}if(!c.rendered)return;const u=this.getAttribute("mode"),d=xe(this);(c.attrMode!==u||Qt(c.customisations,d))&&this._renderIcon(c.icon,d,u)}_iconChanged(c){const a=pn(c,(u,d,h)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==u)return;const p={value:u,name:d,data:h};p.data?this._gotIconData(p):f.icon=p});a.data?this._gotIconData(a):this._state=Be(a,this._state.inline,this._state)}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,xe(this),this.getAttribute("mode"))}_renderIcon(c,a,u){const d=gn(c.data.body,u),h=this._state.inline;qe(this._shadowRoot,this._state={rendered:!0,icon:c,inline:h,customisations:a,attrMode:u,renderedMode:d})}};o.forEach(l=>{l in r.prototype||Object.defineProperty(r.prototype,l,{get:function(){return this.getAttribute(l)},set:function(c){c!==null?this.setAttribute(l,c):this.removeAttribute(l)}})});const i=ht();for(const l in i)r[l]=r.prototype[l]=i[l];return n.define(e,r),r}Mn()||ht();function Nn(e){let n,t,s,o,r,i,l,c,a,u;i=new Ft({props:{showSidebar:e[0],showHideMenue:e[2],nav:e[1]}});const d=e[4].default,h=Ct(d,e,e[3],null);return{c(){n=v("link"),t=M(),s=v("iconify-icon"),o=M(),r=v("main"),kt(i.$$.fragment),l=M(),h&&h.c(),this.h()},l(f){n=S(f,"LINK",{rel:!0,href:!0}),t=N(f),s=S(f,"ICONIFY-ICON",{icon:!0,style:!0}),C(s).forEach(y),o=N(f),r=S(f,"MAIN",{class:!0});var p=C(r);xt(i.$$.fragment,p),l=N(p),h&&h.l(p),p.forEach(y),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"),Ue(s,"icon","mdi:menu"),E(s,"cursor","pointer"),E(s,"font-size","1.7em"),I(r,"class","main-content")},m(f,p){O(f,n,p),O(f,t,p),O(f,s,p),O(f,o,p),O(f,r,p),At(i,r,null),k(r,l),h&&h.m(r,null),c=!0,a||(u=[L(s,"click",e[2]),L(s,"keydown",e[2])],a=!0)},p(f,[p]){const m={};p&1&&(m.showSidebar=f[0]),i.$set(m),h&&h.p&&(!c||p&8)&&Et(h,d,f,f[3],c?Pt(d,f[3],p,null):Ot(f[3]),null)},i(f){c||(ve(i.$$.fragment,f),ve(h,f),c=!0)},o(f){Se(i.$$.fragment,f),Se(h,f),c=!1},d(f){f&&y(n),f&&y(t),f&&y(s),f&&y(o),f&&y(r),jt(i),h&&h.d(f),a=!1,Ge(u)}}}function Fn(e,n,t){let{$$slots:s={},$$scope:o}=n,r=!1;const i=[{title:"Home",path:"//svelte-ui-frameworks/home"},{title:"Component comparison",path:"/svelte-ui-frameworks/component-comparison"},{title:"About",path:"/svelte-ui-frameworks/about"}];function l(){t(0,r=!r),console.log(r)}return e.$$set=c=>{"$$scope"in c&&t(3,o=c.$$scope)},[r,i,l,o,s]}class Hn extends Ve{constructor(n){super(),ze(this,n,Fn,Nn,$e,{})}}export{Hn as default};