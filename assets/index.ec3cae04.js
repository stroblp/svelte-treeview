import{S as A,i as B,s as M,e as S,a as y,b as m,c as N,l as J,d as b,f as U,t as V,g as E,h as W,u as X,j as Y,k as Z,m as k,n as v,o as F,p as x,q as C,w as q,r as z,v as P,x as D,y as ee,z as L,A as T,B as j,C as te,D as ne}from"./vendor.a7d06b05.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};oe();const le=i=>({controlChecked:i&8,props:i&1}),H=i=>({controlChecked:i[3],props:i[0]});function I(i){let e,o,n,t,s,l,a;return{c(){e=S("input"),n=y(),t=S("label"),m(e,"type","checkbox"),m(e,"class","expansion-control svelte-1k7g251"),m(e,"id",o="expansion-controls-"+i[0].id),m(t,"for",s="expansion-controls-"+i[0].id),m(t,"class","l1 fas  svelte-1k7g251")},m(c,r){N(c,e,r),e.checked=i[4],N(c,n,r),N(c,t,r),l||(a=J(e,"change",i[8]),l=!0)},p(c,r){r&1&&o!==(o="expansion-controls-"+c[0].id)&&m(e,"id",o),r&16&&(e.checked=c[4]),r&1&&s!==(s="expansion-controls-"+c[0].id)&&m(t,"for",s)},d(c){c&&b(e),c&&b(n),c&&b(t),l=!1,a()}}}function re(i){let e,o,n,t,s,l,a=i[0].label+"",c,r,u,d,p,g,_=i[2]&&I(i);const O=i[7].default,h=U(O,i,i[6],H);return{c(){e=S("span"),_&&_.c(),o=y(),n=S("input"),s=y(),l=S("label"),c=V(a),u=y(),h&&h.c(),m(n,"type","checkbox"),m(n,"id",t=i[0].id),m(l,"for",r=i[0].id),m(l,"class","svelte-1k7g251"),m(e,"class","main svelte-1k7g251")},m(f,$){N(f,e,$),_&&_.m(e,null),E(e,o),E(e,n),n.checked=i[3],E(e,s),E(e,l),E(l,c),E(e,u),h&&h.m(e,null),d=!0,p||(g=J(n,"change",i[9]),p=!0)},p(f,[$]){f[2]?_?_.p(f,$):(_=I(f),_.c(),_.m(e,o)):_&&(_.d(1),_=null),(!d||$&1&&t!==(t=f[0].id))&&m(n,"id",t),$&8&&(n.checked=f[3]),(!d||$&1)&&a!==(a=f[0].label+"")&&W(c,a),(!d||$&1&&r!==(r=f[0].id))&&m(l,"for",r),h&&h.p&&(!d||$&73)&&X(h,O,f,f[6],d?Z(O,f[6],$,le):Y(f[6]),H)},i(f){d||(k(h,f),d=!0)},o(f){v(h,f),d=!1},d(f){f&&b(e),_&&_.d(),h&&h.d(f),p=!1,g()}}}function se(i,e,o){let n,t=C,s=()=>(t(),t=F(g,f=>o(3,n=f)),g),l,a=C,c=()=>(a(),a=F(_,f=>o(4,l=f)),_);i.$$.on_destroy.push(()=>t()),i.$$.on_destroy.push(()=>a());let{$$slots:r={},$$scope:u}=e,{props:d}=e,{parentNodeState:p}=e,{currentNodeState:g=q(!1)}=e;s();let{nodeExpanded:_=void 0}=e;c(),p.subscribe(f=>{x(g,n=f,n)});function O(){l=this.checked,_.set(l)}function h(){n=this.checked,g.set(n)}return i.$$set=f=>{"props"in f&&o(0,d=f.props),"parentNodeState"in f&&o(5,p=f.parentNodeState),"currentNodeState"in f&&s(o(1,g=f.currentNodeState)),"nodeExpanded"in f&&c(o(2,_=f.nodeExpanded)),"$$scope"in f&&o(6,u=f.$$scope)},[d,g,_,n,l,p,u,r,O,h]}class Q extends A{constructor(e){super();B(this,e,se,re,M,{props:0,parentNodeState:5,currentNodeState:1,nodeExpanded:2})}}function ie(i){let e;return{c(){e=S("div"),e.innerHTML='<input type="checkbox"/>'},m(o,n){N(o,e,n)},p:C,i:C,o:C,d(o){o&&b(e)}}}class w extends A{constructor(e){super();B(this,e,null,ie,M,{})}}function K(i,e,o){const n=i.slice();return n[6]=e[o],n}function ae(i){let e,o,n;return o=new Q({props:{props:i[1].props,parentNodeState:i[0],$$slots:{default:[fe,({controlChecked:t,props:s})=>({9:t,10:s}),({controlChecked:t,props:s})=>(t?512:0)|(s?1024:0)]},$$scope:{ctx:i}}}),{c(){e=S("li"),L(o.$$.fragment)},m(t,s){N(t,e,s),T(o,e,null),n=!0},p(t,s){const l={};s&2&&(l.props=t[1].props),s&1&&(l.parentNodeState=t[0]),s&3586&&(l.$$scope={dirty:s,ctx:t}),o.$set(l)},i(t){n||(k(o.$$.fragment,t),n=!0)},o(t){v(o.$$.fragment,t),n=!1},d(t){t&&b(e),j(o)}}}function ce(i){let e,o,n,t,s;o=new Q({props:{props:i[1].props,currentNodeState:i[4],parentNodeState:i[0],nodeExpanded:i[5]}});let l=i[1].children,a=[];for(let r=0;r<l.length;r+=1)a[r]=G(K(i,l,r));const c=r=>v(a[r],1,1,()=>{a[r]=null});return{c(){e=S("li"),L(o.$$.fragment),n=y(),t=S("li");for(let r=0;r<a.length;r+=1)a[r].c();m(e,"c",""),m(t,"class","expandable svelte-1jo0xzw"),z(t,"expanded",i[3])},m(r,u){N(r,e,u),T(o,e,null),N(r,n,u),N(r,t,u);for(let d=0;d<a.length;d+=1)a[d].m(t,null);s=!0},p(r,u){const d={};if(u&2&&(d.props=r[1].props),u&1&&(d.parentNodeState=r[0]),o.$set(d),u&22){l=r[1].children;let p;for(p=0;p<l.length;p+=1){const g=K(r,l,p);a[p]?(a[p].p(g,u),k(a[p],1)):(a[p]=G(g),a[p].c(),k(a[p],1),a[p].m(t,null))}for(P(),p=l.length;p<a.length;p+=1)c(p);D()}u&8&&z(t,"expanded",r[3])},i(r){if(!s){k(o.$$.fragment,r);for(let u=0;u<l.length;u+=1)k(a[u]);s=!0}},o(r){v(o.$$.fragment,r),a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)v(a[u]);s=!1},d(r){r&&b(e),j(o),r&&b(n),r&&b(t),te(a,r)}}}function fe(i){let e,o,n;var t=i[1].props.component;function s(l){return{props:{controlChecked:l[9],props:l[10]}}}return t&&(e=new t(s(i))),{c(){e&&L(e.$$.fragment),o=ne()},m(l,a){e&&T(e,l,a),N(l,o,a),n=!0},p(l,a){const c={};if(a&512&&(c.controlChecked=l[9]),a&1024&&(c.props=l[10]),t!==(t=l[1].props.component)){if(e){P();const r=e;v(r.$$.fragment,1,0,()=>{j(r,1)}),D()}t?(e=new t(s(l)),L(e.$$.fragment),k(e.$$.fragment,1),T(e,o.parentNode,o)):e=null}else t&&e.$set(c)},i(l){n||(e&&k(e.$$.fragment,l),n=!0)},o(l){e&&v(e.$$.fragment,l),n=!1},d(l){l&&b(o),e&&j(e,l)}}}function G(i){let e,o;return e=new R({props:{parent:i[1].props.id,tree:i[6],parentNodeState:i[4],level:i[2]+1}}),{c(){L(e.$$.fragment)},m(n,t){T(e,n,t),o=!0},p(n,t){const s={};t&2&&(s.parent=n[1].props.id),t&2&&(s.tree=n[6]),t&4&&(s.level=n[2]+1),e.$set(s)},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){j(e,n)}}}function ue(i){let e,o,n,t;const s=[ce,ae],l=[];function a(c,r){return c[1].children?0:1}return o=a(i),n=l[o]=s[o](i),{c(){e=S("ul"),n.c(),m(e,"class","svelte-1jo0xzw"),z(e,"root",i[2]===0)},m(c,r){N(c,e,r),l[o].m(e,null),t=!0},p(c,[r]){let u=o;o=a(c),o===u?l[o].p(c,r):(P(),v(l[u],1,1,()=>{l[u]=null}),D(),n=l[o],n?n.p(c,r):(n=l[o]=s[o](c),n.c()),k(n,1),n.m(e,null)),r&4&&z(e,"root",c[2]===0)},i(c){t||(k(n),t=!0)},o(c){v(n),t=!1},d(c){c&&b(e),l[o].d()}}}function pe(i,e,o){let n,{parentNodeState:t=q(!1)}=e,{tree:s}=e,{level:l=0}=e,a=q(!1),c=q(!0);return ee(i,c,r=>o(3,n=r)),i.$$set=r=>{"parentNodeState"in r&&o(0,t=r.parentNodeState),"tree"in r&&o(1,s=r.tree),"level"in r&&o(2,l=r.level)},[t,s,l,n,a,c]}class R extends A{constructor(e){super();B(this,e,pe,ue,M,{parentNodeState:0,tree:1,level:2})}}let de={props:{id:"root-node",label:"root",component:w},children:[{props:{id:"node1",label:"node1",component:w},children:[{props:{id:"item1-1",label:"item1.1",component:w}},{props:{id:"item1-2",label:"item1.2",component:w}},{props:{id:"node11",label:"node1",component:w},children:[{props:{id:"item11-1",label:"item11.1",component:w}},{props:{id:"item11-2",label:"item11.2",component:w}}]}]},{props:{id:"node2",label:"node2",component:w},children:[{props:{id:"item2-1",label:"item2.1",component:w}},{props:{id:"item2-2",label:"item2.2",component:w}}]}]};function _e(i){let e,o,n,t;return n=new R({props:{tree:de}}),{c(){e=S("link"),o=y(),L(n.$$.fragment),m(e,"rel","stylesheet"),m(e,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css")},m(s,l){E(document.head,e),N(s,o,l),T(n,s,l),t=!0},p:C,i(s){t||(k(n.$$.fragment,s),t=!0)},o(s){v(n.$$.fragment,s),t=!1},d(s){b(e),s&&b(o),j(n,s)}}}class me extends A{constructor(e){super();B(this,e,null,_e,M,{})}}new me({target:document.body});