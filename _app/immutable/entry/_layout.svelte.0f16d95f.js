var ye=Object.defineProperty;var be=(t,n,e)=>n in t?ye(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var z=(t,n,e)=>(be(t,typeof n!="symbol"?n+"":n,e),e);import{S as Vt,i as zt,s as $t,k as v,a as M,l as S,m as C,h as y,c as N,C as Ut,p as E,n as I,D as wt,b as O,E as k,F as L,G as rt,H as _t,I as we,J as Gt,K as _e,q as Ie,r as ve,L as It,u as Se,M as Ce,y as ke,z as xe,A as Ae,N as Ee,O as Oe,P as Pe,g as vt,d as St,B as je}from"../chunks/index.f493264f.js";import{p as Te}from"../chunks/stores.80852591.js";function Ct(t,n,e){const s=t.slice();return s[4]=n[e],s}function kt(t){let n,e,s,o=t[4].title+"",r,i,l,c,a;return{c(){n=v("ul"),e=v("li"),s=v("a"),r=Ie(o),l=M(),this.h()},l(u){n=S(u,"UL",{class:!0});var d=C(n);e=S(d,"LI",{class:!0});var h=C(e);s=S(h,"A",{href:!0,class:!0});var f=C(s);r=ve(f,o),f.forEach(y),h.forEach(y),l=N(d),d.forEach(y),this.h()},h(){I(s,"href",i=t[4].path),I(s,"class","svelte-fbsd5s"),It(s,"active",t[3].url.pathname===t[4].path),I(e,"class","svelte-fbsd5s"),I(n,"class","svelte-fbsd5s")},m(u,d){O(u,n,d),k(n,e),k(e,s),k(s,r),k(n,l),c||(a=L(s,"click",function(){rt(t[1])&&t[1].apply(this,arguments)}),c=!0)},p(u,d){t=u,d&4&&o!==(o=t[4].title+"")&&Se(r,o),d&4&&i!==(i=t[4].path)&&I(s,"href",i),d&12&&It(s,"active",t[3].url.pathname===t[4].path)},d(u){u&&y(n),c=!1,a()}}}function Me(t){let n,e,s,o,r,i,l,c,a=t[2],u=[];for(let d=0;d<a.length;d+=1)u[d]=kt(Ct(t,a,d));return{c(){n=v("div"),e=v("div"),s=v("iconify-icon"),o=M(),r=v("nav");for(let d=0;d<u.length;d+=1)u[d].c();this.h()},l(d){n=S(d,"DIV",{class:!0});var h=C(n);e=S(h,"DIV",{style:!0});var f=C(e);s=S(f,"ICONIFY-ICON",{icon:!0,style:!0}),C(s).forEach(y),o=N(f),r=S(f,"NAV",{});var p=C(r);for(let m=0;m<u.length;m+=1)u[m].l(p);p.forEach(y),f.forEach(y),h.forEach(y),this.h()},h(){Ut(s,"icon","mdi:close"),E(s,"cursor","pointer"),E(s,"font-size","1.7em"),E(e,"display","flex"),E(e,"flex-direction","column"),E(e,"align-items","flex-end"),I(n,"class",i=wt(t[0]?"side-drawer show":"side-drawer hide")+" svelte-fbsd5s")},m(d,h){O(d,n,h),k(n,e),k(e,s),k(e,o),k(e,r);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(r,null);l||(c=[L(s,"click",function(){rt(t[1])&&t[1].apply(this,arguments)}),L(s,"keydown",function(){rt(t[1])&&t[1].apply(this,arguments)})],l=!0)},p(d,[h]){if(t=d,h&14){a=t[2];let f;for(f=0;f<a.length;f+=1){const p=Ct(t,a,f);u[f]?u[f].p(p,h):(u[f]=kt(p),u[f].c(),u[f].m(r,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=a.length}h&1&&i!==(i=wt(t[0]?"side-drawer show":"side-drawer hide")+" svelte-fbsd5s")&&I(n,"class",i)},i:_t,o:_t,d(d){d&&y(n),we(u,d),l=!1,Gt(c)}}}function Ne(t,n,e){let s;_e(t,Te,l=>e(3,s=l));let{showSidebar:o}=n,{showHideMenue:r}=n,{nav:i}=n;return t.$$set=l=>{"showSidebar"in l&&e(0,o=l.showSidebar),"showHideMenue"in l&&e(1,r=l.showHideMenue),"nav"in l&&e(2,i=l.nav)},[o,r,i,s]}class Fe extends Vt{constructor(n){super(),zt(this,n,Ne,Me,$t,{showSidebar:0,showHideMenue:1,nav:2})}}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.7
*/const Jt=Object.freeze({left:0,top:0,width:16,height:16}),J=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Q=Object.freeze({...Jt,...J}),it=Object.freeze({...Q,body:"",hidden:!1}),Le=Object.freeze({width:null,height:null}),Kt=Object.freeze({...Le,...J});function Re(t,n=0){const e=t.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(e===""){const o=parseInt(t);return isNaN(o)?0:s(o)}else if(e!==t){let o=0;switch(e){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-e.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return n}const De=/[\s,]+/;function He(t,n){n.split(De).forEach(e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const Wt={...Kt,preserveAspectRatio:""};function xt(t){const n={...Wt},e=(s,o)=>t.getAttribute(s)||o;return n.width=e("width",null),n.height=e("height",null),n.rotate=Re(e("rotate","")),He(n,e("flip","")),n.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),n}function Qe(t,n){for(const e in Wt)if(t[e]!==n[e])return!0;return!1}const F=/^[a-z0-9]+(-[a-z0-9]+)*$/,q=(t,n,e,s="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),c=o.pop(),a={provider:o.length>0?o[0]:s,prefix:c,name:l};return n&&!U(a)?null:a}const r=o[0],i=r.split("-");if(i.length>1){const l={provider:s,prefix:i.shift(),name:i.join("-")};return n&&!U(l)?null:l}if(e&&s===""){const l={provider:s,prefix:"",name:r};return n&&!U(l,e)?null:l}return null},U=(t,n)=>t?!!((t.provider===""||t.provider.match(F))&&(n&&t.prefix===""||t.prefix.match(F))&&t.name.match(F)):!1;function qe(t,n){const e={};!t.hFlip!=!n.hFlip&&(e.hFlip=!0),!t.vFlip!=!n.vFlip&&(e.vFlip=!0);const s=((t.rotate||0)+(n.rotate||0))%4;return s&&(e.rotate=s),e}function At(t,n){const e=qe(t,n);for(const s in it)s in J?s in t&&!(s in e)&&(e[s]=J[s]):s in n?e[s]=n[s]:s in t&&(e[s]=t[s]);return e}function Be(t,n){const e=t.icons,s=t.aliases||Object.create(null),o=Object.create(null);function r(i){if(e[i])return o[i]=[];if(!(i in o)){o[i]=null;const l=s[i]&&s[i].parent,c=l&&r(l);c&&(o[i]=[l].concat(c))}return o[i]}return(n||Object.keys(e).concat(Object.keys(s))).forEach(r),o}function Ve(t,n,e){const s=t.icons,o=t.aliases||Object.create(null);let r={};function i(l){r=At(s[l]||o[l],r)}return i(n),e.forEach(i),At(t,r)}function Yt(t,n){const e=[];if(typeof t!="object"||typeof t.icons!="object")return e;t.not_found instanceof Array&&t.not_found.forEach(o=>{n(o,null),e.push(o)});const s=Be(t);for(const o in s){const r=s[o];r&&(n(o,Ve(t,o,r)),e.push(o))}return e}const ze={provider:"",aliases:{},not_found:{},...Jt};function et(t,n){for(const e in n)if(e in t&&typeof t[e]!=typeof n[e])return!1;return!0}function Xt(t){if(typeof t!="object"||t===null)return null;const n=t;if(typeof n.prefix!="string"||!t.icons||typeof t.icons!="object"||!et(t,ze))return null;const e=n.icons;for(const o in e){const r=e[o];if(!o.match(F)||typeof r.body!="string"||!et(r,it))return null}const s=n.aliases||Object.create(null);for(const o in s){const r=s[o],i=r.parent;if(!o.match(F)||typeof i!="string"||!e[i]&&!s[i]||!et(r,it))return null}return n}const K=Object.create(null);function $e(t,n){return{provider:t,prefix:n,icons:Object.create(null),missing:new Set}}function x(t,n){const e=K[t]||(K[t]=Object.create(null));return e[n]||(e[n]=$e(t,n))}function pt(t,n){return Xt(n)?Yt(n,(e,s)=>{s?t.icons[e]=s:t.missing.add(e)}):[]}function Ue(t,n,e){try{if(typeof e.body=="string")return t.icons[n]={...e},!0}catch{}return!1}function Ge(t,n){let e=[];return(typeof t=="string"?[t]:Object.keys(K)).forEach(o=>{(typeof o=="string"&&typeof n=="string"?[n]:Object.keys(K[o]||{})).forEach(i=>{const l=x(o,i);e=e.concat(Object.keys(l.icons).map(c=>(o!==""?"@"+o+":":"")+i+":"+c))})}),e}let R=!1;function Zt(t){return typeof t=="boolean"&&(R=t),R}function D(t){const n=typeof t=="string"?q(t,!0,R):t;if(n){const e=x(n.provider,n.prefix),s=n.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function te(t,n){const e=q(t,!0,R);if(!e)return!1;const s=x(e.provider,e.prefix);return Ue(s,e.name,n)}function Et(t,n){if(typeof t!="object")return!1;if(typeof n!="string"&&(n=t.provider||""),R&&!n&&!t.prefix){let o=!1;return Xt(t)&&(t.prefix="",Yt(t,(r,i)=>{i&&te(r,i)&&(o=!0)})),o}const e=t.prefix;if(!U({provider:n,prefix:e,name:"a"}))return!1;const s=x(n,e);return!!pt(s,t)}function Je(t){return!!D(t)}function Ke(t){const n=D(t);return n?{...Q,...n}:null}function We(t){const n={loaded:[],missing:[],pending:[]},e=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return t.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,i=o.prefix,l=o.name,c=e[r]||(e[r]=Object.create(null)),a=c[i]||(c[i]=x(r,i));let u;l in a.icons?u=n.loaded:i===""||a.missing.has(l)?u=n.missing:u=n.pending;const d={provider:r,prefix:i,name:l};u.push(d)}),n}function ee(t,n){t.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(o=>o.id!==n))})}function Ye(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const n=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!n.length)return;let e=!1;const s=t.provider,o=t.prefix;n.forEach(r=>{const i=r.icons,l=i.pending.length;i.pending=i.pending.filter(c=>{if(c.prefix!==o)return!0;const a=c.name;if(t.icons[a])i.loaded.push({provider:s,prefix:o,name:a});else if(t.missing.has(a))i.missing.push({provider:s,prefix:o,name:a});else return e=!0,!0;return!1}),i.pending.length!==l&&(e||ee([t],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let Xe=0;function Ze(t,n,e){const s=Xe++,o=ee.bind(null,e,s);if(!n.pending.length)return o;const r={id:s,icons:n,callback:t,abort:o};return e.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),o}const ct=Object.create(null);function Ot(t,n){ct[t]=n}function lt(t){return ct[t]||ct[""]}function tn(t,n=!0,e=!1){const s=[];return t.forEach(o=>{const r=typeof o=="string"?q(o,n,e):o;r&&s.push(r)}),s}var en={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function nn(t,n,e,s){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let g=t.resources.slice(0);for(i=[];g.length>1;){const _=Math.floor(Math.random()*g.length);i.push(g[_]),g=g.slice(0,_).concat(g.slice(_+1))}i=i.concat(g)}else i=t.resources.slice(r).concat(t.resources.slice(0,r));const l=Date.now();let c="pending",a=0,u,d=null,h=[],f=[];typeof s=="function"&&f.push(s);function p(){d&&(clearTimeout(d),d=null)}function m(){c==="pending"&&(c="aborted"),p(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function Z(g,_){_&&(f=[]),typeof g=="function"&&f.push(g)}function B(){return{startTime:l,payload:n,status:c,queriesSent:a,queriesPending:h.length,subscribe:Z,abort:m}}function b(){c="failed",f.forEach(g=>{g(void 0,u)})}function w(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function me(g,_,j){const V=_!=="success";switch(h=h.filter(A=>A!==g),c){case"pending":break;case"failed":if(V||!t.dataAfterTimeout)return;break;default:return}if(_==="abort"){u=j,b();return}if(V){u=j,h.length||(i.length?tt():b());return}if(p(),w(),!t.random){const A=t.resources.indexOf(g.resource);A!==-1&&A!==t.index&&(t.index=A)}c="completed",f.forEach(A=>{A(j)})}function tt(){if(c!=="pending")return;p();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{p(),c==="pending"&&(w(),b())},t.timeout);return}b();return}const _={status:"pending",resource:g,callback:(j,V)=>{me(_,j,V)}};h.push(_),a++,d=setTimeout(tt,t.rotate),e(g,n,_.callback)}return setTimeout(tt),B}function ne(t){const n={...en,...t};let e=[];function s(){e=e.filter(l=>l().status==="pending")}function o(l,c,a){const u=nn(n,l,c,(d,h)=>{s(),a&&a(d,h)});return e.push(u),u}function r(l){return e.find(c=>l(c))||null}return{query:o,find:r,setIndex:l=>{n.index=l},getIndex:()=>n.index,cleanup:s}}function gt(t){let n;if(typeof t.resources=="string")n=[t.resources];else if(n=t.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Y=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],G=[];for(;T.length>0;)T.length===1||Math.random()>.5?G.push(T.shift()):G.push(T.pop());Y[""]=gt({resources:["https://api.iconify.design"].concat(G)});function Pt(t,n){const e=gt(n);return e===null?!1:(Y[t]=e,!0)}function X(t){return Y[t]}function on(){return Object.keys(Y)}function jt(){}const nt=Object.create(null);function sn(t){if(!nt[t]){const n=X(t);if(!n)return;const e=ne(n),s={config:n,redundancy:e};nt[t]=s}return nt[t]}function oe(t,n,e){let s,o;if(typeof t=="string"){const r=lt(t);if(!r)return e(void 0,424),jt;o=r.send;const i=sn(t);i&&(s=i.redundancy)}else{const r=gt(t);if(r){s=ne(r);const i=t.resources?t.resources[0]:"",l=lt(i);l&&(o=l.send)}}return!s||!o?(e(void 0,424),jt):s.query(n,o,e)().abort}const Tt="iconify2",H="iconify",se=H+"-count",Mt=H+"-version",re=36e5,rn=168;function at(t,n){try{return t.getItem(n)}catch{}}function mt(t,n,e){try{return t.setItem(n,e),!0}catch{}}function Nt(t,n){try{t.removeItem(n)}catch{}}function ut(t,n){return mt(t,se,n.toString())}function ft(t){return parseInt(at(t,se))||0}const P={local:!0,session:!0},ie={local:new Set,session:new Set};let yt=!1;function cn(t){yt=t}let $=typeof window>"u"?{}:window;function ce(t){const n=t+"Storage";try{if($&&$[n]&&typeof $[n].length=="number")return $[n]}catch{}P[t]=!1}function le(t,n){const e=ce(t);if(!e)return;const s=at(e,Mt);if(s!==Tt){if(s){const l=ft(e);for(let c=0;c<l;c++)Nt(e,H+c.toString())}mt(e,Mt,Tt),ut(e,0);return}const o=Math.floor(Date.now()/re)-rn,r=l=>{const c=H+l.toString(),a=at(e,c);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&n(u,l))return!0}catch{}Nt(e,c)}};let i=ft(e);for(let l=i-1;l>=0;l--)r(l)||(l===i-1?(i--,ut(e,i)):ie[t].add(l))}function ae(){if(!yt){cn(!0);for(const t in P)le(t,n=>{const e=n.data,s=n.provider,o=e.prefix,r=x(s,o);if(!pt(r,e).length)return!1;const i=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function ln(t,n){const e=t.lastModifiedCached;if(e&&e>=n)return e===n;if(t.lastModifiedCached=n,e)for(const s in P)le(s,o=>{const r=o.data;return o.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===n});return!0}function an(t,n){yt||ae();function e(s){let o;if(!P[s]||!(o=ce(s)))return;const r=ie[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=ft(o),!ut(o,i+1))return;const l={cached:Math.floor(Date.now()/re),provider:t.provider,data:n};return mt(o,H+i.toString(),JSON.stringify(l))}n.lastModified&&!ln(t,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),e("local")||e("session"))}function Ft(){}function un(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Ye(t)}))}function fn(t,n){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(n).sort():t.iconsToLoad=n,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:s}=t,o=t.iconsToLoad;delete t.iconsToLoad;let r;if(!o||!(r=lt(e)))return;r.prepare(e,s,o).forEach(l=>{oe(e,l,c=>{if(typeof c!="object")l.icons.forEach(a=>{t.missing.add(a)});else try{const a=pt(t,c);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),an(t,c)}catch(a){console.error(a)}un(t)})})}))}const bt=(t,n)=>{const e=tn(t,!0,Zt()),s=We(e);if(!s.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(s.loaded,s.missing,s.pending,Ft)}),()=>{c=!1}}const o=Object.create(null),r=[];let i,l;return s.pending.forEach(c=>{const{provider:a,prefix:u}=c;if(u===l&&a===i)return;i=a,l=u,r.push(x(a,u));const d=o[a]||(o[a]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(c=>{const{provider:a,prefix:u,name:d}=c,h=x(a,u),f=h.pendingIcons||(h.pendingIcons=new Set);f.has(d)||(f.add(d),o[a][u].push(d))}),r.forEach(c=>{const{provider:a,prefix:u}=c;o[a][u].length&&fn(c,o[a][u])}),n?Ze(n,s,r):Ft},dn=t=>new Promise((n,e)=>{const s=typeof t=="string"?q(t,!0):t;if(!s){e(t);return}bt([s||t],o=>{if(o.length&&s){const r=D(s);if(r){n({...Q,...r});return}}e(t)})});function hn(t){try{const n=typeof t=="string"?JSON.parse(t):t;if(typeof n.body=="string")return{...n}}catch{}}function pn(t,n){const e=typeof t=="string"?q(t,!0,!0):null;if(!e){const r=hn(t);return{value:t,data:r}}const s=D(e);if(s!==void 0||!e.prefix)return{value:t,name:e,data:s};const o=bt([e],()=>n(t,e,D(e)));return{value:t,name:e,loading:o}}function ot(t){return t.hasAttribute("inline")}let ue=!1;try{ue=navigator.vendor.indexOf("Apple")===0}catch{}function gn(t,n){switch(n){case"svg":case"bg":case"mask":return n}return n!=="style"&&(ue||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const mn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function dt(t,n,e){if(n===1)return t;if(e=e||100,typeof t=="number")return Math.ceil(t*n*e)/e;if(typeof t!="string")return t;const s=t.split(mn);if(s===null||!s.length)return t;const o=[];let r=s.shift(),i=yn.test(r);for(;;){if(i){const l=parseFloat(r);isNaN(l)?o.push(r):o.push(Math.ceil(l*n*e)/e)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");i=!i}}const bn=t=>t==="unset"||t==="undefined"||t==="none";function fe(t,n){const e={...Q,...t},s={...Kt,...n},o={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(p=>{const m=[],Z=p.hFlip,B=p.vFlip;let b=p.rotate;Z?B?b+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):B&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let w;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:w=o.height/2+o.top,m.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,m.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}b%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),m.length&&(r='<g transform="'+m.join(" ")+'">'+r+"</g>")});const i=s.width,l=s.height,c=o.width,a=o.height;let u,d;i===null?(d=l===null?"1em":l==="auto"?a:l,u=dt(d,c/a)):(u=i==="auto"?c:i,d=l===null?dt(u,a/c):l==="auto"?a:l);const h={},f=(p,m)=>{bn(m)||(h[p]=m.toString())};return f("width",u),f("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+a.toString(),{attributes:h,body:r}}const wn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let W=wn();function _n(t){W=t}function In(){return W}function vn(t,n){const e=X(t);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let o=0;e.resources.forEach(i=>{o=Math.max(o,i.length)});const r=n+".json?icons=";s=e.maxURL-o-e.path.length-r.length}return s}function Sn(t){return t===404}const Cn=(t,n,e)=>{const s=[],o=vn(t,n),r="icons";let i={type:r,provider:t,prefix:n,icons:[]},l=0;return e.forEach((c,a)=>{l+=c.length+1,l>=o&&a>0&&(s.push(i),i={type:r,provider:t,prefix:n,icons:[]},l=c.length),i.icons.push(c)}),s.push(i),s};function kn(t){if(typeof t=="string"){const n=X(t);if(n)return n.path}return"/"}const xn=(t,n,e)=>{if(!W){e("abort",424);return}let s=kn(n.provider);switch(n.type){case"icons":{const r=n.prefix,l=n.icons.join(","),c=new URLSearchParams({icons:l});s+=r+".json?"+c.toString();break}case"custom":{const r=n.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let o=503;W(t+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{e(Sn(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",o)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",o)})},An={prepare:Cn,send:xn};function Lt(t,n){switch(t){case"local":case"session":P[t]=n;break;case"all":for(const e in P)P[e]=n;break}}const st="data-style";let de="";function En(t){de=t}function Rt(t,n){let e=Array.from(t.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(st));e||(e=document.createElement("style"),e.setAttribute(st,st),t.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(n?"-0.125em":"0")+"}span,svg{display:block}"+de}function he(){Ot("",An),Zt(!0);let t;try{t=window}catch{}if(t){if(ae(),t.IconifyPreload!==void 0){const e=t.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Et(o))&&console.error(s)}catch{console.error(s)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const o="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Pt(s,r)||console.error(o)}catch{console.error(o)}}}}return{enableCache:e=>Lt(e,!0),disableCache:e=>Lt(e,!1),iconExists:Je,getIcon:Ke,listIcons:Ge,addIcon:te,addCollection:Et,calculateSize:dt,buildIcon:fe,loadIcons:bt,loadIcon:dn,addAPIProvider:Pt,appendCustomStyle:En,_api:{getAPIConfig:X,setAPIModule:Ot,sendAPIQuery:oe,setFetch:_n,getFetch:In,listAPIProviders:on}}}function pe(t,n){let e=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in n)e+=" "+s+'="'+n[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+t+"</svg>"}function On(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Pn(t){return'url("data:image/svg+xml,'+On(t)+'")'}const ht={"background-color":"currentColor"},ge={"background-color":"transparent"},Dt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ht={"-webkit-mask":ht,mask:ht,background:ge};for(const t in Ht){const n=Ht[t];for(const e in Dt)n[t+"-"+e]=Dt[e]}function Qt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function jn(t,n,e){const s=document.createElement("span");let o=t.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const r=t.attributes,i=pe(o,{...r,width:n.width+"",height:n.height+""}),l=Pn(i),c=s.style,a={"--svg":l,width:Qt(r.width),height:Qt(r.height),...e?ht:ge};for(const u in a)c.setProperty(u,a[u]);return s}function Tn(t){const n=document.createElement("span"),e=t.attributes;let s="";return e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s),n.innerHTML=pe(t.body,e),n.firstChild}function qt(t,n){const e=n.icon.data,s=n.customisations,o=fe(e,s);s.preserveAspectRatio&&(o.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=n.renderedMode;let i;switch(r){case"svg":i=Tn(o);break;default:i=jn(o,{...Q,...e},r==="mask")}const l=Array.from(t.childNodes).find(c=>{const a=c.tagName&&c.tagName.toUpperCase();return a==="SPAN"||a==="SVG"});l?i.tagName==="SPAN"&&l.tagName===i.tagName?l.setAttribute("style",i.getAttribute("style")):t.replaceChild(i,l):t.appendChild(i)}function Bt(t,n,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:n,icon:t,lastRender:s}}function Mn(t="iconify-icon"){let n,e;try{n=window.customElements,e=window.HTMLElement}catch{return}if(!n||!e)return;const s=n.get(t);if(s)return s;const o=["icon","mode","inline","width","height","rotate","flip"],r=class extends e{constructor(){super();z(this,"_shadowRoot");z(this,"_state");z(this,"_checkQueued",!1);const c=this._shadowRoot=this.attachShadow({mode:"open"}),a=ot(this);Rt(c,a),this._state=Bt({value:""},a),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(c){if(c==="inline"){const a=ot(this),u=this._state;a!==u.inline&&(u.inline=a,Rt(this._shadowRoot,a))}else this._queueCheck()}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return ot(this)}set inline(c){c?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const c=this._state;if(c.rendered){const a=this._shadowRoot;if(c.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}qt(a,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,a=this.getAttribute("icon");if(a!==c.icon.value){this._iconChanged(a);return}if(!c.rendered)return;const u=this.getAttribute("mode"),d=xt(this);(c.attrMode!==u||Qe(c.customisations,d))&&this._renderIcon(c.icon,d,u)}_iconChanged(c){const a=pn(c,(u,d,h)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==u)return;const p={value:u,name:d,data:h};p.data?this._gotIconData(p):f.icon=p});a.data?this._gotIconData(a):this._state=Bt(a,this._state.inline,this._state)}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,xt(this),this.getAttribute("mode"))}_renderIcon(c,a,u){const d=gn(c.data.body,u),h=this._state.inline;qt(this._shadowRoot,this._state={rendered:!0,icon:c,inline:h,customisations:a,attrMode:u,renderedMode:d})}};o.forEach(l=>{l in r.prototype||Object.defineProperty(r.prototype,l,{get:function(){return this.getAttribute(l)},set:function(c){c!==null?this.setAttribute(l,c):this.removeAttribute(l)}})});const i=he();for(const l in i)r[l]=r.prototype[l]=i[l];return n.define(t,r),r}Mn()||he();function Nn(t){let n,e,s,o,r,i,l,c,a,u;i=new Fe({props:{showSidebar:t[0],showHideMenue:t[2],nav:t[1]}});const d=t[4].default,h=Ce(d,t,t[3],null);return{c(){n=v("link"),e=M(),s=v("iconify-icon"),o=M(),r=v("main"),ke(i.$$.fragment),l=M(),h&&h.c(),this.h()},l(f){n=S(f,"LINK",{rel:!0,href:!0}),e=N(f),s=S(f,"ICONIFY-ICON",{icon:!0,style:!0}),C(s).forEach(y),o=N(f),r=S(f,"MAIN",{class:!0});var p=C(r);xe(i.$$.fragment,p),l=N(p),h&&h.l(p),p.forEach(y),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"),Ut(s,"icon","mdi:menu"),E(s,"cursor","pointer"),E(s,"font-size","1.7em"),I(r,"class","main-content")},m(f,p){O(f,n,p),O(f,e,p),O(f,s,p),O(f,o,p),O(f,r,p),Ae(i,r,null),k(r,l),h&&h.m(r,null),c=!0,a||(u=[L(s,"click",t[2]),L(s,"keydown",t[2])],a=!0)},p(f,[p]){const m={};p&1&&(m.showSidebar=f[0]),i.$set(m),h&&h.p&&(!c||p&8)&&Ee(h,d,f,f[3],c?Pe(d,f[3],p,null):Oe(f[3]),null)},i(f){c||(vt(i.$$.fragment,f),vt(h,f),c=!0)},o(f){St(i.$$.fragment,f),St(h,f),c=!1},d(f){f&&y(n),f&&y(e),f&&y(s),f&&y(o),f&&y(r),je(i),h&&h.d(f),a=!1,Gt(u)}}}function Fn(t,n,e){let{$$slots:s={},$$scope:o}=n,r=!1;const i=[{title:"Home",path:"/"},{title:"Component comparison",path:"/component-comparison"},{title:"About",path:"/about"}];function l(){e(0,r=!r),console.log(r)}return t.$$set=c=>{"$$scope"in c&&e(3,o=c.$$scope)},[r,i,l,o,s]}class Hn extends Vt{constructor(n){super(),zt(this,n,Fn,Nn,$t,{})}}export{Hn as default};
