import{D as pe,S as Y,i as W,s as G,e as T,t as F,k as H,c as L,a as w,g as z,d as _,n as A,b as d,E as ge,f as M,F as E,G as x,h as ve,H as Se,I as $e,J as ee,K as De,A as K,L as se,j as N,m as R,o as O,x as P,u as y,v as V,M as le,r as He,w as Ae,N as oe,O as re,P as ae,y as Ne,V as D,Q as j,R as be,T as Ee,U as Re,W as Ie,X as te}from"../chunks/vendor-c43c4c9f.js";const we=Symbol("DebugContext");function Oe(){return pe(we)}function Te(s,e,t){const n=s.slice();return n[15]=e[t],n[17]=t,n}function Le(s){let e,t,n=s[15].group+"",a,l,o=s[15].label+"",r,u,i,f,v,c;function h(){return s[10](s[17])}function $(){return s[11](s[17])}return{c(){e=T("li"),t=T("span"),a=F(n),l=H(),r=F(o),u=H(),this.h()},l(g){e=L(g,"LI",{role:!0,tabindex:!0,class:!0});var b=w(e);t=L(b,"SPAN",{class:!0});var C=w(t);a=z(C,n),C.forEach(_),l=A(b),r=z(b,o),u=A(b),b.forEach(_),this.h()},h(){d(t,"class","groupName svelte-swdnsu"),d(e,"role","menuitem"),d(e,"tabindex",i=s[17]),d(e,"class",f=""+(ge(s[4]===s[17]?"selected":void 0)+" svelte-swdnsu"))},m(g,b){M(g,e,b),E(e,t),E(t,a),E(e,l),E(e,r),E(e,u),v||(c=[x(e,"focus",h),x(e,"click",$)],v=!0)},p(g,b){s=g,b&32&&n!==(n=s[15].group+"")&&ve(a,n),b&32&&o!==(o=s[15].label+"")&&ve(r,o),b&16&&f!==(f=""+(ge(s[4]===s[17]?"selected":void 0)+" svelte-swdnsu"))&&d(e,"class",f)},d(g){g&&_(e),v=!1,Se(c)}}}function Ve(s){let e,t,n,a,l,o,r,u=s[5],i=[];for(let f=0;f<u.length;f+=1)i[f]=Le(Te(s,u,f));return{c(){e=T("div"),t=T("div"),n=T("input"),a=H(),l=T("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=L(f,"DIV",{class:!0,onclick:!0});var v=w(e);t=L(v,"DIV",{class:!0,onclick:!0});var c=w(t);n=L(c,"INPUT",{class:!0}),a=A(c),l=L(c,"UL",{class:!0});var h=w(l);for(let $=0;$<i.length;$+=1)i[$].l(h);h.forEach(_),c.forEach(_),v.forEach(_),this.h()},h(){d(n,"class","commandPaletteInput svelte-swdnsu"),d(l,"class","svelte-swdnsu"),d(t,"class","commandPalette svelte-swdnsu"),d(t,"onclick",We),d(e,"class","commandPaletteWrapper svelte-swdnsu"),d(e,"onclick",s[0])},m(f,v){M(f,e,v),E(e,t),E(t,n),s[8](n),$e(n,s[1]),E(t,a),E(t,l);for(let c=0;c<i.length;c+=1)i[c].m(l,null);s[12](l),o||(r=x(n,"input",s[9]),o=!0)},p(f,[v]){if(v&2&&n.value!==f[1]&&$e(n,f[1]),v&112){u=f[5];let c;for(c=0;c<u.length;c+=1){const h=Te(f,u,c);i[c]?i[c].p(h,v):(i[c]=Le(h),i[c].c(),i[c].m(l,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=u.length}v&1&&d(e,"onclick",f[0])},i:ee,o:ee,d(f){f&&_(e),s[8](null),De(i,f),s[12](null),o=!1,r()}}}function Pe(s){return s.replace(/\s/g,"").toLowerCase()}function Xe(s){const e=Pe(s);return({group:t,label:n})=>Pe(`${t}${n}`).includes(e)}function Ye(s,e){return s.group<e.group?-1:s.group>e.group?1:s.id<e.id?-1:1}const We=s=>s.stopPropagation();function Ge(s,e,t){let n,{close:a}=e,{commands:l}=e,o,r,u="",i=0;function f(m){var I;(I=n[m])==null||I.callback(),a()}function v(m){const I=r,X=r.children[m];if(!I||!(X instanceof HTMLElement))return;const B=I.scrollTop,J=I.offsetHeight,U=X.offsetTop-I.offsetTop,Q=X.clientHeight;U<B?X.scrollIntoView(!0):U+Q>B+J&&X.scrollIntoView(!1)}function c({key:m}){if(m==="Escape")a();else if(m==="ArrowDown"){const I=(i+1)%n.length;t(4,i=I),v(I)}else if(m==="ArrowUp"){const I=(i+n.length-1)%n.length;t(4,i=I),v(I)}else m==="Enter"&&f(i)}K(()=>o.focus()),K(()=>(window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)));function h(m){se[m?"unshift":"push"](()=>{o=m,t(2,o)})}function $(){u=this.value,t(1,u)}const g=m=>t(4,i=m),b=m=>f(m);function C(m){se[m?"unshift":"push"](()=>{r=m,t(3,r)})}return s.$$set=m=>{"close"in m&&t(0,a=m.close),"commands"in m&&t(7,l=m.commands)},s.$$.update=()=>{s.$$.dirty&130&&t(5,n=l.sort(Ye).filter(Xe(u)))},[a,u,o,r,i,n,f,l,h,$,g,b,C]}class Ke extends Y{constructor(e){super();W(this,e,Ge,Ve,G,{close:0,commands:7})}}function ke(s){let e,t;return e=new Ke({props:{close:s[4],commands:s[1]}}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,a){O(e,n,a),t=!0},p(n,a){const l={};a&1&&(l.close=n[4]),a&2&&(l.commands=n[1]),e.$set(l)},i(n){t||(P(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){V(e,n)}}}function je(s){let e,t,n=s[0]&&ke(s);const a=s[3].default,l=le(a,s,s[2],null);return{c(){n&&n.c(),e=H(),l&&l.c()},l(o){n&&n.l(o),e=A(o),l&&l.l(o)},m(o,r){n&&n.m(o,r),M(o,e,r),l&&l.m(o,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&P(n,1)):(n=ke(o),n.c(),P(n,1),n.m(e.parentNode,e)):n&&(He(),y(n,1,1,()=>{n=null}),Ae()),l&&l.p&&(!t||r&4)&&oe(l,a,o,o[2],t?ae(a,o[2],r,null):re(o[2]),null)},i(o){t||(P(n),P(l,o),t=!0)},o(o){y(n),y(l,o),t=!1},d(o){n&&n.d(o),o&&_(e),l&&l.d(o)}}}function Be(){return navigator.platform.indexOf("Mac")>-1}function Ue(s,e,t){let{$$slots:n={},$$scope:a}=e,l=!1;function o(i){(Be()?i.metaKey:i.ctrlKey)&&i.shiftKey&&i.code==="KeyP"&&(i.preventDefault(),t(0,l=!l))}K(()=>(window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)));let r=[];Ne(we,{registerCommand:i=>(t(1,r=[...r,i]),()=>{t(1,r=r.filter(f=>f!==i))})});const u=()=>t(0,l=!1);return s.$$set=i=>{"$$scope"in i&&t(2,a=i.$$scope)},[l,r,a,n,u]}class Fe extends Y{constructor(e){super();W(this,e,Ue,je,G,{})}}function ye(s){const{registerCommand:e}=Oe();return K(()=>e(s))}function ze([s,e,t,n]){return D.cross(D.subtract(t,s),D.subtract(n,e))}const Ze=new D([0,0,-1,1]);function qe(s){return D.dot(ze(s),Ze)>0}function Me(s){return Math.floor(s*4)/4}function Je(s){return s.map(([e,t],n)=>{const a=Me(e),l=Me(t);return n===0?`M${a},${l}`:a===s[n-1][0]?`V${l}`:l===s[n-1][1]?`H${a}`:`L${a},${l}`}).concat("Z").join("")}const ne=3,Qe=.11,xe=.27,ie=1-Qe,ce=ie/ne*(1-xe),et=(ie-ce*ne)/(ne-1),Z=ie/2,tt=[...new Array(ne)].map((s,e)=>{const t=-Z+(ce+et)*e,n=t+ce;return[new D([-Z,t,.5,1]),new D([Z,t,.5,1]),new D([Z,n,.5,1]),new D([-Z,n,.5,1])]}),nt=[[-.5,0,0],[.5,0,0],[0,.5,0],[0,-.5,0],[0,0,-.5],[1,0,.5]].map(([s,e,t])=>{const n=j.rotationX(Math.PI*s).dot(j.rotationY(Math.PI*e)).dot(j.rotationZ(Math.PI*t));return tt.map(a=>a.map(l=>l.multiplyByMatrix(n)))}).reduce((s,e)=>s.concat(e));function st(s){let e,t,n,a;return{c(){e=be("svg"),t=be("path"),this.h()},l(l){e=Ee(l,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var o=w(e);t=Ee(o,"path",{fill:!0,d:!0}),w(t).forEach(_),o.forEach(_),this.h()},h(){d(t,"fill","#7160b7"),d(t,"d",s[3]),d(e,"width",s[0]),d(e,"height",s[1]),d(e,"viewBox",s[4]),d(e,"class","svelte-15wkv3x")},m(l,o){M(l,e,o),E(e,t),s[10](e),n||(a=x(e,"click",s[6]),n=!0)},p(l,[o]){o&8&&d(t,"d",l[3]),o&1&&d(e,"width",l[0]),o&2&&d(e,"height",l[1])},i:ee,o:ee,d(l){l&&_(e),s[10](null),n=!1,a()}}}const lt=.1,q=1;function ot(s,e,t){let n,a,l,o,r,{WIDTH:u=58}=e,{HEIGHT:i=58}=e;const f=[-u/2,-i/2,u,i].toString(),v=-Math.PI,c=-Math.PI,h=Math.PI/4,$=Math.PI/5;let g=0,b=0,C=0;const m=Re({x:v,y:c,scale:lt},{stiffness:.0061,damping:.094});Ie(s,m,p=>t(9,o=p));function I(){g=g===1?0:1,m.set({x:h,y:$+Math.PI*2*g,scale:q})}function X(){g=g===1?0:1,m.set({x:h+Math.PI*2*g,y:$,scale:q})}ye({id:"logo-rotate",group:"Logo",label:"Revolution",callback:I}),ye({id:"logo-rotate",group:"Logo",label:"Vertical Revolution",callback:X}),K(()=>{m.set({x:h,y:$,scale:q})});function B([p,k]){b=p,C=k}function J([p,k]){const S={x:(p-b)/100,y:(k-C)/100};m.set({x:h-S.y,y:$+Math.PI*2*g+S.x,scale:q})}function U(){m.set({x:h,y:$+Math.PI*2*g,scale:q})}function Q(p){const{clientX:k,clientY:S}=p.touches[0];B([k,S])}function fe(p){const{clientX:k,clientY:S}=p.touches[0];J([k,S]),p.preventDefault()}function de(){U()}function me(p){const{clientX:k,clientY:S}=p;J([k,S])}function he(){document.removeEventListener("mousemove",me),document.removeEventListener("mouseup",he),U()}function _e(p){const{clientX:k,clientY:S}=p;B([k,S]),document.addEventListener("mousemove",me),document.addEventListener("mouseup",he),p.preventDefault()}K(()=>(r.addEventListener("mousedown",_e),r.addEventListener("touchstart",Q),r.addEventListener("touchmove",fe),r.addEventListener("touchend",de),()=>{r.removeEventListener("mousedown",_e),r.removeEventListener("touchstart",Q),r.removeEventListener("touchmove",fe),r.removeEventListener("touchend",de)}));function Ce(p){se[p?"unshift":"push"](()=>{r=p,t(2,r)})}return s.$$set=p=>{"WIDTH"in p&&t(0,u=p.WIDTH),"HEIGHT"in p&&t(1,i=p.HEIGHT)},s.$$.update=()=>{s.$$.dirty&513&&t(8,n=j.scale(u*.6*o.scale).dot(j.rotationX(o.x)).dot(j.rotationY(o.y))),s.$$.dirty&256&&t(7,a=nt.map(p=>p.map(k=>k.multiplyByMatrix(n))).filter(qe)),s.$$.dirty&128&&t(3,l=a.map(Je).join(" "))},[u,i,r,l,f,m,I,a,n,o,Ce]}class rt extends Y{constructor(e){super();W(this,e,ot,st,G,{WIDTH:0,HEIGHT:1})}}const at=()=>{const s=pe("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},it={subscribe(s){return at().page.subscribe(s)}};function ct(s){let e,t;const n=s[3].default,a=le(n,s,s[2],null);return{c(){e=T("a"),a&&a.c(),this.h()},l(l){e=L(l,"A",{href:!0,class:!0});var o=w(e);a&&a.l(o),o.forEach(_),this.h()},h(){d(e,"href",s[0]),d(e,"class","svelte-1k7c9lj"),te(e,"active",s[1].path===s[0])},m(l,o){M(l,e,o),a&&a.m(e,null),t=!0},p(l,[o]){a&&a.p&&(!t||o&4)&&oe(a,n,l,l[2],t?ae(n,l[2],o,null):re(l[2]),null),(!t||o&1)&&d(e,"href",l[0]),o&3&&te(e,"active",l[1].path===l[0])},i(l){t||(P(a,l),t=!0)},o(l){y(a,l),t=!1},d(l){l&&_(e),a&&a.d(l)}}}function ut(s,e,t){let n;Ie(s,it,r=>t(1,n=r));let{$$slots:a={},$$scope:l}=e,{path:o}=e;return s.$$set=r=>{"path"in r&&t(0,o=r.path),"$$scope"in r&&t(2,l=r.$$scope)},[o,n,l,a]}class ue extends Y{constructor(e){super();W(this,e,ut,ct,G,{path:0})}}function ft(s){let e;return{c(){e=F("Hello")},l(t){e=z(t,"Hello")},m(t,n){M(t,e,n)},d(t){t&&_(e)}}}function dt(s){let e;return{c(){e=F("Projects")},l(t){e=z(t,"Projects")},m(t,n){M(t,e,n)},d(t){t&&_(e)}}}function mt(s){let e;return{c(){e=F("CV")},l(t){e=z(t,"CV")},m(t,n){M(t,e,n)},d(t){t&&_(e)}}}function ht(s){let e,t,n,a,l,o,r,u,i,f,v;return a=new ue({props:{path:"/",$$slots:{default:[ft]},$$scope:{ctx:s}}}),r=new ue({props:{path:"/projects",$$slots:{default:[dt]},$$scope:{ctx:s}}}),f=new ue({props:{path:"/cv",$$slots:{default:[mt]},$$scope:{ctx:s}}}),{c(){e=T("nav"),t=T("ul"),n=T("li"),N(a.$$.fragment),l=H(),o=T("li"),N(r.$$.fragment),u=H(),i=T("li"),N(f.$$.fragment),this.h()},l(c){e=L(c,"NAV",{class:!0});var h=w(e);t=L(h,"UL",{class:!0});var $=w(t);n=L($,"LI",{class:!0});var g=w(n);R(a.$$.fragment,g),g.forEach(_),l=A($),o=L($,"LI",{class:!0});var b=w(o);R(r.$$.fragment,b),b.forEach(_),u=A($),i=L($,"LI",{class:!0});var C=w(i);R(f.$$.fragment,C),C.forEach(_),$.forEach(_),h.forEach(_),this.h()},h(){d(n,"class","svelte-1bh4f4f"),d(o,"class","svelte-1bh4f4f"),d(i,"class","svelte-1bh4f4f"),d(t,"class","svelte-1bh4f4f"),d(e,"class","svelte-1bh4f4f")},m(c,h){M(c,e,h),E(e,t),E(t,n),O(a,n,null),E(t,l),E(t,o),O(r,o,null),E(t,u),E(t,i),O(f,i,null),v=!0},p(c,[h]){const $={};h&1&&($.$$scope={dirty:h,ctx:c}),a.$set($);const g={};h&1&&(g.$$scope={dirty:h,ctx:c}),r.$set(g);const b={};h&1&&(b.$$scope={dirty:h,ctx:c}),f.$set(b)},i(c){v||(P(a.$$.fragment,c),P(r.$$.fragment,c),P(f.$$.fragment,c),v=!0)},o(c){y(a.$$.fragment,c),y(r.$$.fragment,c),y(f.$$.fragment,c),v=!1},d(c){c&&_(e),V(a),V(r),V(f)}}}class _t extends Y{constructor(e){super();W(this,e,null,ht,G,{})}}function pt(s){let e,t,n,a,l,o;return n=new rt({props:{WIDTH:s[0]?38:58}}),l=new _t({}),{c(){e=T("header"),t=T("span"),N(n.$$.fragment),a=H(),N(l.$$.fragment),this.h()},l(r){e=L(r,"HEADER",{class:!0});var u=w(e);t=L(u,"SPAN",{class:!0});var i=w(t);R(n.$$.fragment,i),a=A(i),R(l.$$.fragment,i),i.forEach(_),u.forEach(_),this.h()},h(){d(t,"class","svelte-11581zo"),d(e,"class","svelte-11581zo"),te(e,"scrolled",s[0])},m(r,u){M(r,e,u),E(e,t),O(n,t,null),E(t,a),O(l,t,null),o=!0},p(r,[u]){const i={};u&1&&(i.WIDTH=r[0]?38:58),n.$set(i),u&1&&te(e,"scrolled",r[0])},i(r){o||(P(n.$$.fragment,r),P(l.$$.fragment,r),o=!0)},o(r){y(n.$$.fragment,r),y(l.$$.fragment,r),o=!1},d(r){r&&_(e),V(n),V(l)}}}function gt(s,e,t){let n=!1;return K(()=>{function a(l){t(0,n=document.body.scrollTop>0)}return document.addEventListener("scroll",a),()=>document.removeEventListener("scroll",a)}),[n]}class vt extends Y{constructor(e){super();W(this,e,gt,pt,G,{})}}function $t(s){let e,t,n,a;t=new vt({});const l=s[0].default,o=le(l,s,s[1],null);return{c(){e=T("div"),N(t.$$.fragment),n=H(),o&&o.c(),this.h()},l(r){e=L(r,"DIV",{class:!0});var u=w(e);R(t.$$.fragment,u),n=A(u),o&&o.l(u),u.forEach(_),this.h()},h(){d(e,"class","website-wrapper svelte-ll8wre")},m(r,u){M(r,e,u),O(t,e,null),E(e,n),o&&o.m(e,null),a=!0},p(r,u){o&&o.p&&(!a||u&2)&&oe(o,l,r,r[1],a?ae(l,r[1],u,null):re(r[1]),null)},i(r){a||(P(t.$$.fragment,r),P(o,r),a=!0)},o(r){y(t.$$.fragment,r),y(o,r),a=!1},d(r){r&&_(e),V(t),o&&o.d(r)}}}function bt(s){let e,t;return e=new Fe({props:{$$slots:{default:[$t]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,a){O(e,n,a),t=!0},p(n,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:n}),e.$set(l)},i(n){t||(P(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){V(e,n)}}}function Et(s,e,t){let{$$slots:n={},$$scope:a}=e;return s.$$set=l=>{"$$scope"in l&&t(1,a=l.$$scope)},[n,a]}class wt extends Y{constructor(e){super();W(this,e,Et,bt,G,{})}}export{wt as default};
