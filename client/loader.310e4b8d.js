import{S as t,i as e,s as n,e as s,a as r,f as i,g as a,d as o,b as c,k as A,l,m as h,F as u,t as f,h as d,D as m,J as g,o as v,p as w,K as p,L as R,M as y,N as B,O as x,c as b,j as z,n as M,r as k,u as Q,P as C,Q as $,R as E,T as I,z as U,U as G,v as T,V as O}from"./client.bebd26e5.js";
/*! @gera2ld/jsx-dom v1.2.1 | ISC License */var F=["innerHTML","innerText","textContent",{key:"value",tag:"textarea"}],L={name:"Fragment"};function Y(t,e){var n,s;if(t===L)n=document.createDocumentFragment();else{if("string"!=typeof t)throw new Error("Invalid element type: "+t);var r=Y.createElement(t);n=r,e&&Object.keys(e).forEach((function(n){var i=e[n];null!=i&&(n.startsWith("on")?r.addEventListener(n.slice(2).toLowerCase(),i):"children"===n?Z(r,i):"style"===n&&"object"==typeof i?H(r,i):"dangerouslySetInnerHTML"===n&&i?r.innerHTML=i.__html||"":"ref"===n&&"function"==typeof i?s=i:"boolean"==typeof i?i?r.setAttribute(n,n):r.removeAttribute(n):j(t,n)?r[n]=i:("className"===n?n="class":"labelFor"===n&&(n="for"),r.setAttribute(n,""+i)))}))}for(var i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];return Z(n,a),s&&s(n),n}function j(t,e){var n={tag:t,key:e};return F.some((function(t){return"string"==typeof t?e===t:Object.keys(t).every((function(e){return t[e]===n[e]}))}))}function Z(t,e){e.forEach((function(e){null!=e&&!1!==e&&(Array.isArray(e)?Z(t,e):"object"!=typeof e?t.appendChild(document.createTextNode(""+e)):t.appendChild(e))}))}function H(t,e){Object.keys(e).forEach((function(n){var s=e[n];t.style[n]="number"==typeof s?s+"px":s}))}
/*! markmap-toolbar v0.1.4 | MIT License */function D({title:t,content:e,onClick:n}){return Y("div",{className:"mm-toolbar-item",title:t,innerHTML:e,onClick:n})}let P;Y.createElement=function(t){return document.createElement(t)};class V{static create(t){const e=new V;return e.attach(t),e.render()}static icon(t){return`<svg width="20" height="20" viewBox="0 0 20 20" on:click={onZoomIn}><path fill="none" stroke-width="2" stroke="currentColor" d="${t}"/></svg>`}constructor(){this.showBrand=!0,this.registry={},this.markmap=null,this.items=["zoomIn","zoomOut","fit"],this.register({id:"zoomIn",title:"Zoom in",content:V.icon("M10 6 v8 M6 10 h8"),onClick:this.getHandler((t=>t.rescale(1.25)))}),this.register({id:"zoomOut",title:"Zoom out",content:V.icon("M6 10 h8"),onClick:this.getHandler((t=>t.rescale(.8)))}),this.register({id:"fit",title:"Fit window size",content:V.icon("M4 8 h3 v-3 M4 12 h3 v3 M16 8 h-3 v-3 M16 12 h-3 v3"),onClick:this.getHandler((t=>t.fit()))})}setBrand(t){this.showBrand=t}register(t){this.registry[t.id]=t}getHandler(t){var e;return e=t,t=async(...t)=>{if(!P){P=e(...t);try{await P}finally{P=null}}},e=>{this.markmap&&t(this.markmap)}}setItems(t){this.items=[...t]}attach(t){this.markmap=t}render(){const t=this.items.map((t=>{if("string"==typeof t){const e=this.registry[t];return e||console.warn(`[markmap-toolbar] ${t} not found`),e}return t})).filter(Boolean);return Y("div",{className:"mm-toolbar"},this.showBrand&&Y("div",{className:"mm-toolbar-brand"},Y("img",{alt:"markmap",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACoFBMVEUAAAAAAAD//wAAAACAgAD//wAAAABVVQCqqgBAQACAQACAgABmZgBtbQAAAABgQABgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFQAAAAAAAAAAAAAAAAAHAAARBQIdGAIYEwI/OgJYUQUfHQI+OgJDPgJJRARBPQRJQgRRSwRRTQRIQQRUTgRUUARZUgRSTQRPSQRjWgZORQRfWQZsZAhTTQRNRwRWUAZkXAZOSARUTgZPRwRRSQRoYwZWUQZWTgRbUwZmXQZoXghmXwdqYwdsYwdfVwVmXQdqYgdiWgVpYAl3bgl6cgl4cAqLggw8OAOWjA2Uig1OSAR2bQihlg55cAh5cAh6cQmMgwyOhAyUjA2QhQ2Uiw2Viw2soBCflA+voxGwpRGhlg+hlg+snxGroBGjmBCpnBC0pxKyphKxpRG2qhK0qBK5rBK5rBP/7h3/8B7/8R3/8h3/8R7/8h786x397B3+7R3EtxT66Rz66hz76hz86xz96xz97Bz+7Rz45xz56Bz76hz97Bz97B3MvRX15Rv25Rv45xz66Rz76hz97B3+7R3IuxX05Bv15Bv25Rz56Bz66Ry/sxPAsxPCtRTCthTNvxbZyxfczxfi0xjl1Rnn2Bnr2xrr3Brs3Rru3Rru3xrv3hrw3xrx4Bvx4Rvy4hvz4hvz4xv04xv05Bv14xv15Bv15Rv25Bv25Rv25Rz25hv35hv35xv45xv45xz55xz56Bv56Bz66Rv66Rz76Rv76Rz76hz86hv86xz+7h3/7R3/7h3/7x3/8B3/8B7/8R3/8R4Yqhj5AAAAq3RSTlMAAQECAgIDAwMEBAQFBwgICAwQERITFRYXGBkbHB0eHyQlJyguNTg8RUZISU5PV2FiY2RlZmdqa2xubnJzc3R2d3d3eXl5eXp7fH1+gIGCgoKDg4SEhIWGh4eHiYmJjIyMjZSUlJ+sra+zt7i4uru8ztHV1tbW2d7g4OHi4uPk5ufp7Ozv9fX29/f3+Pj6+vr7+/v7+/v7+/z8/Pz8/f39/f39/f3+/v7+/v7K6J1dAAACHklEQVQ4y2NgwAoYWdi5uLm5GXHIcrLCmMzYpDmAhKCKjoGtp40MFhVsDAwSxmmVEzZu2XvqSLkchjw3g0h445Ybd24vmTN1Usd5X3R5DgaNqgN35sycP2/GxMkTMRVwMOivvtO3YsWUm3duX790EcMKdgbNNXdnnJh1+9T6ipzU+FB0RzIyiFYB5WdfaElUF8TmTQ6GwH39J2bvypMHcpg4MAKKkUGo5s6KWRfyGRh4WJClGEGBCgS8DLobliy/3abMwM8NBYwQjXDgf3ryxOspyKYyg+RFTFwdnYDAzbrw+oLFm9Ot3J3AwNHFTBykQrhg++GDh48cOXzk4P6VZy8s230MyAGCwwcP7iyRBJpiur1n8hQIWHX27NkLi6bAwOSuow5ABeY7OydOhoCFIAULe6E8YFCf8QAqEC86evniZTA4tfLsuRXHr0E4ly9ePF0uC3KnpH1MZBQQxPoVgxyZ5RMdBQaRMc6yIEcihWbQGaA3k9G8CfQoN0pAtSoxCMACihk9qGtBQZ2LHtRIkRUMiqwd2TJADiswsrjQlAGju/o+MLrPNkWo8mFN1ewMWmvBCebQ0rKMJG87QzF0FRwMRuvugpLcrXu3rp7Zs61UCtMZ2nVHbk+fMX/+jMmTp3Sf9MLiULG45q237txaPG3yxPYrYQzYMo60RWbD3E27Ll68Uq+AK+uJqOlZBiSEKGLNnMA0iDfzwrI/NKgBOivk9piPdtUAAAAASUVORK5CYII="}),Y("a",{href:"https://markmap.js.org/"},"markmap")),t.map(D))}}function N(t){let e,n,f,d,m,p,R,y,B,b=t[1]&&K(t);const z=t[4].default,M=x(z,t,t[3],null);return{c(){e=s("div"),n=s("div"),f=r(),d=s("div"),b&&b.c(),m=r(),p=s("div"),M&&M.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=a(e);n=i(s,"DIV",{class:!0}),a(n).forEach(o),f=c(s),d=i(s,"DIV",{class:!0});var r=a(d);b&&b.l(r),m=c(r),p=i(r,"DIV",{class:!0});var A=a(p);M&&M.l(A),A.forEach(o),r.forEach(o),s.forEach(o),this.h()},h(){A(n,"class","modal-backdrop"),A(p,"class","text-sm"),A(d,"class","modal-content"),A(e,"class","modal")},m(s,r){l(s,e,r),h(e,n),h(e,f),h(e,d),b&&b.m(d,null),h(d,m),h(d,p),M&&M.m(p,null),R=!0,y||(B=u(n,"click",t[2]),y=!0)},p(t,e){t[1]?b?b.p(t,e):(b=K(t),b.c(),b.m(d,m)):b&&(b.d(1),b=null),M&&M.p&&8&e&&g(M,z,t,t[3],e,null,null)},i(t){R||(v(M,t),R=!0)},o(t){w(M,t),R=!1},d(t){t&&o(e),b&&b.d(),M&&M.d(t),y=!1,B()}}}function K(t){let e,n;return{c(){e=s("div"),n=f(t[1]),this.h()},l(s){e=i(s,"DIV",{class:!0});var r=a(e);n=d(r,t[1]),r.forEach(o),this.h()},h(){A(e,"class","text-center text-lg font-semibold mb-2")},m(t,s){l(t,e,s),h(e,n)},p(t,e){2&e&&m(n,t[1])},d(t){t&&o(e)}}}function S(t){let e,n,s=t[0]&&N(t);return{c(){s&&s.c(),e=p()},l(t){s&&s.l(t),e=p()},m(t,r){s&&s.m(t,r),l(t,e,r),n=!0},p(t,[n]){t[0]?s?(s.p(t,n),1&n&&v(s,1)):(s=N(t),s.c(),v(s,1),s.m(e.parentNode,e)):s&&(R(),w(s,1,1,(()=>{s=null})),y())},i(t){n||(v(s),n=!0)},o(t){w(s),n=!1},d(t){s&&s.d(t),t&&o(e)}}}function X(t,e,n){let{$$slots:s={},$$scope:r}=e,{show:i=!1}=e,{title:a}=e;const o=B();return t.$$set=t=>{"show"in t&&n(0,i=t.show),"title"in t&&n(1,a=t.title),"$$scope"in t&&n(3,r=t.$$scope)},[i,a,function(){o("close")},r,s]}class W extends t{constructor(t){super(),e(this,t,X,S,n,{show:0,title:1})}}function J(t){let e,n,m,g,v,w,p,R,y,B,x;return{c(){e=s("p"),n=f("You should save them in Gist or other file services. Do you still want to continue?"),m=r(),g=s("div"),v=s("a"),w=f("Cancel"),p=r(),R=s("a"),y=f("OK"),this.h()},l(t){e=i(t,"P",{});var s=a(e);n=d(s,"You should save them in Gist or other file services. Do you still want to continue?"),s.forEach(o),m=c(t),g=i(t,"DIV",{class:!0});var r=a(g);v=i(r,"A",{});var A=a(v);w=d(A,"Cancel"),A.forEach(o),p=c(r),R=i(r,"A",{class:!0});var l=a(R);y=d(l,"OK"),l.forEach(o),r.forEach(o),this.h()},h(){A(R,"class","text-gray-500"),A(g,"class","modal-footer")},m(s,r){l(s,e,r),h(e,n),l(s,m,r),l(s,g,r),h(g,v),h(v,w),h(g,p),h(g,R),h(R,y),B||(x=[u(v,"click",I(t[2])),u(R,"click",I(t[3]))],B=!0)},p:U,d(t){t&&o(e),t&&o(m),t&&o(g),B=!1,G(x)}}}function q(t){let e,n,h,u,f;return u=new W({props:{show:t[1],title:"Your changes will be lost!",$$slots:{default:[J]},$$scope:{ctx:t}}}),u.$on("close",t[2]),{c(){e=s("div"),h=r(),b(u.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0}),a(e).forEach(o),h=c(t),z(u.$$.fragment,t),this.h()},h(){A(e,"class",n=t[4].class)},m(n,s){l(n,e,s),t[9](e),l(n,h,s),M(u,n,s),f=!0},p(t,[s]){(!f||16&s&&n!==(n=t[4].class))&&A(e,"class",n);const r={};2&s&&(r.show=t[1]),8192&s&&(r.$$scope={dirty:s,ctx:t}),u.$set(r)},i(t){f||(v(u.$$.fragment,t),f=!0)},o(t){w(u.$$.fragment,t),f=!1},d(n){n&&o(e),t[9](null),n&&o(h),k(u,n)}}}function _(t,e,n){let s,{mm:r}=e,{dirty:i}=e,{showBrand:a=!1}=e,{isFull:o=!1}=e,c=!1;const A=new V;function l(){C("/full"+window.location.hash)}return A.setBrand(a),A.register({id:"repl",title:"Open in REPL",content:V.icon("M5 6 v8 h10 v-8 h-10 z m5 0 v8"),onClick:function(){C("/repl"+window.location.hash)}}),A.register({id:"full",title:"Full page view",content:V.icon("M5 9 v-3 h3 M5 11 v3 h3 M15 9 v-3 h-3 M15 11 v3 h-3"),onClick:function(){i?n(1,c=!0):l()}}),A.setItems(["zoomIn","zoomOut","fit",o?"repl":"full"]),Q((()=>{s.append(A.render())})),t.$$set=t=>{n(4,e=$($({},e),E(t))),"mm"in t&&n(5,r=t.mm),"dirty"in t&&n(6,i=t.dirty),"showBrand"in t&&n(7,a=t.showBrand),"isFull"in t&&n(8,o=t.isFull)},t.$$.update=()=>{32&t.$$.dirty&&A.attach(r)},e=E(e),[s,c,function(){n(1,c=!1)},l,e,r,i,a,o,function(t){T[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class tt extends t{constructor(t){super(),e(this,t,_,q,n,{mm:5,dirty:6,showBrand:7,isFull:8})}}function et(t){return t.replace(/[<&]/g,(t=>({"<":"&lt;","&":"&amp;"}[t])))}function nt(t){if(t.status>300)throw new TypeError(`Failed to fetch, got response "${t.status} ${t.statusText}"`);return t}function st(t){const[,e,n,s]=t.match(/^(?:(\w+):)?(\w+)(?:\/(.*))?$|/);if(!n)return;const r=s||"markmap.md";return"gitee"===e?async function(t,e){const n=await fetch("https://gitee.com/api/v5/gists/"+t);nt(n);const s=(await n.json()).files[e];if(!s)return;let{content:r}=s;if(s.truncated){const t=await fetch(s.raw_url);r=await t.text()}return r}(n,r):"gist"===e?async function(t,e){const n=await fetch("https://api.github.com/gists/"+t,{headers:{Accept:"application/vnd.github.v3+json"}});nt(n);const s=(await n.json()).files[e];if(!s)return;let{content:r}=s;if(s.truncated){const t=await fetch(s.raw_url);r=await t.text()}return r}(n,r):void 0}const rt=function(t){let e;return function(...n){const s=n.join("\n");return e&&e.key===s||(e={key:s,value:t(...n)}),e.value}}((async function(t){return await st(t)||await async function(t){const e=await fetch(t);return nt(e),e.text()}(t)}));function it(t){const e=function(t){let e;return async function(){const n={};e=n;const s=new URLSearchParams(window.location.hash.slice(1));let r=s.get("gist");const i=s.get("d");if(r&&!i){r.includes(":")||(r="gist:"+r);const t="#?d="+r;return await Promise.resolve(),void(window.location.hash=t)}let a,o;try{o=await rt(i||"https://gist.githubusercontent.com/gera2ld/af76a4c245b302206b16aec503dbe07b/raw/0526a14d700236e614ad3e8a1f131e5bca02ee7b/markmap.md")}catch(t){a=t}if(n===e&&(o&&t(o),a)){if("TypeError"!==a.name||!/failed to fetch/i.test(a.message))throw a;O({title:"Failed to fetch",html:['<div class="mt-1">Please check your network and resource</div>',i&&`<div class="mt-1 text-xs text-gray-600">${et(i)}</div>`].filter(Boolean).join("")})}}}(t);return window.addEventListener("hashchange",e),e(t),()=>window.removeEventListener("hashchange",e)}const at=[function(t){if("https://gist.github.com"!==t.origin)return;const e=t.pathname.match(/^\/[^/]+\/(\w+)$/);if(!e)return;const n=t.hash?"/"+t.hash.slice(1):"";return{type:"GitHub Gist",d:`gist:${e[1]}${n}`}},function(t){if("https://gitee.com"!==t.origin)return;const e=t.pathname.match(/^\/[^/]+\/codes\/(\w+)$/);if(!e)return;const n=t.hash?"/"+t.hash.slice(1):"";return{type:"Gitee Gist",d:`gitee:${e[1]}${n}`}},function(t){return{type:"URL",d:encodeURIComponent(t)}}];function ot(t){try{t=new URL(t);for(const e of at){const n=e(t);if(n)return n}}catch(t){console.error(t)}}export{W as M,tt as T,rt as l,ot as p,it as s};
