import{C as Ot,S as F,i as G,s as K,k as $,a as X,l as L,m as k,c as W,h as w,n as m,b as O,D as I,E as bt,F as J,G as j,H as jt,o as Z,q as ot,r as rt,I as It,u as lt,J as Ft,w as it,K as Rt,g as C,v as Gt,d as S,f as Kt,L as Nt,M as Yt,N as Bt,O as Ut,y as R,z as N,A as Y,B,P as At,Q as Zt,R as Tt,T as kt,U as Q,V as $t}from"../chunks/index.5cd0287d.js";import{w as zt}from"../chunks/singletons.fa3d86ba.js";import{p as Vt}from"../chunks/stores.ffc4bb13.js";const Xt=Symbol("DebugContext");function qt(){return Ot(Xt)}function Lt(s,t,e){const n=s.slice();return n[15]=t[e],n[17]=e,n}function Pt(s){let t,e,n=s[15].group+"",r,o,l=s[15].label+"",i,c,a,u,h;function f(){return s[10](s[17])}function y(){return s[11](s[17])}return{c(){t=$("li"),e=$("span"),r=ot(n),o=X(),i=ot(l),c=X(),this.h()},l(v){t=L(v,"LI",{role:!0,tabindex:!0,class:!0});var _=k(t);e=L(_,"SPAN",{class:!0});var T=k(e);r=rt(T,n),T.forEach(w),o=W(_),i=rt(_,l),c=W(_),_.forEach(w),this.h()},h(){m(e,"class","groupName svelte-lpb859"),m(t,"role","menuitem"),m(t,"tabindex",s[17]),m(t,"class",a=It(s[4]===s[17]?"selected":void 0)+" svelte-lpb859")},m(v,_){O(v,t,_),I(t,e),I(e,r),I(t,o),I(t,i),I(t,c),u||(h=[J(t,"focus",f),J(t,"click",y)],u=!0)},p(v,_){s=v,_&32&&n!==(n=s[15].group+"")&&lt(r,n),_&32&&l!==(l=s[15].label+"")&&lt(i,l),_&16&&a!==(a=It(s[4]===s[17]?"selected":void 0)+" svelte-lpb859")&&m(t,"class",a)},d(v){v&&w(t),u=!1,Ft(h)}}}function Jt(s){let t,e,n,r,o,l,i,c=s[5],a=[];for(let u=0;u<c.length;u+=1)a[u]=Pt(Lt(s,c,u));return{c(){t=$("div"),e=$("div"),n=$("input"),r=X(),o=$("ul");for(let u=0;u<a.length;u+=1)a[u].c();this.h()},l(u){t=L(u,"DIV",{class:!0,onclick:!0});var h=k(t);e=L(h,"DIV",{class:!0,onclick:!0});var f=k(e);n=L(f,"INPUT",{class:!0}),r=W(f),o=L(f,"UL",{class:!0});var y=k(o);for(let v=0;v<a.length;v+=1)a[v].l(y);y.forEach(w),f.forEach(w),h.forEach(w),this.h()},h(){m(n,"class","commandPaletteInput svelte-lpb859"),m(o,"class","svelte-lpb859"),m(e,"class","commandPalette svelte-lpb859"),m(e,"onclick",te),m(t,"class","commandPaletteWrapper svelte-lpb859"),m(t,"onclick",s[0])},m(u,h){O(u,t,h),I(t,e),I(e,n),s[8](n),bt(n,s[1]),I(e,r),I(e,o);for(let f=0;f<a.length;f+=1)a[f].m(o,null);s[12](o),l||(i=J(n,"input",s[9]),l=!0)},p(u,[h]){if(h&2&&n.value!==u[1]&&bt(n,u[1]),h&112){c=u[5];let f;for(f=0;f<c.length;f+=1){const y=Lt(u,c,f);a[f]?a[f].p(y,h):(a[f]=Pt(y),a[f].c(),a[f].m(o,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=c.length}h&1&&m(t,"onclick",u[0])},i:j,o:j,d(u){u&&w(t),s[8](null),jt(a,u),s[12](null),l=!1,i()}}}function Ct(s){return s.replace(/\s/g,"").toLowerCase()}function Qt(s){const t=Ct(s);return({group:e,label:n})=>Ct(`${e}${n}`).includes(t)}function xt(s,t){return s.group<t.group?-1:s.group>t.group?1:s.id<t.id?-1:1}const te=s=>s.stopPropagation();function ee(s,t,e){let n,{close:r}=t,{commands:o}=t,l,i,c="",a=0;function u(d){var E;(E=n[d])==null||E.callback(),r()}function h(d){const E=i,D=i.children[d];if(!E||!(D instanceof HTMLElement))return;const M=E.scrollTop,U=E.offsetHeight,z=D.offsetTop-E.offsetTop,tt=D.clientHeight;z<M?D.scrollIntoView(!0):z+tt>M+U&&D.scrollIntoView(!1)}function f({key:d}){if(d==="Escape")r();else if(d==="ArrowDown"){const E=(a+1)%n.length;e(4,a=E),h(E)}else if(d==="ArrowUp"){const E=(a+n.length-1)%n.length;e(4,a=E),h(E)}else d==="Enter"&&u(a)}Z(()=>l.focus()),Z(()=>(window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)));function y(d){it[d?"unshift":"push"](()=>{l=d,e(2,l)})}function v(){c=this.value,e(1,c)}const _=d=>e(4,a=d),T=d=>u(d);function A(d){it[d?"unshift":"push"](()=>{i=d,e(3,i)})}return s.$$set=d=>{"close"in d&&e(0,r=d.close),"commands"in d&&e(7,o=d.commands)},s.$$.update=()=>{s.$$.dirty&130&&e(5,n=o.sort(xt).filter(Qt(c)))},[r,c,l,i,a,n,u,o,y,v,_,T,A]}class ne extends F{constructor(t){super(),G(this,t,ee,Jt,K,{close:0,commands:7})}}function St(s){let t,e;return t=new ne({props:{close:s[4],commands:s[1]}}),{c(){R(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){Y(t,n,r),e=!0},p(n,r){const o={};r&1&&(o.close=n[4]),r&2&&(o.commands=n[1]),t.$set(o)},i(n){e||(C(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function se(s){let t,e,n=s[0]&&St(s);const r=s[3].default,o=Rt(r,s,s[2],null);return{c(){n&&n.c(),t=X(),o&&o.c()},l(l){n&&n.l(l),t=W(l),o&&o.l(l)},m(l,i){n&&n.m(l,i),O(l,t,i),o&&o.m(l,i),e=!0},p(l,[i]){l[0]?n?(n.p(l,i),i&1&&C(n,1)):(n=St(l),n.c(),C(n,1),n.m(t.parentNode,t)):n&&(Gt(),S(n,1,1,()=>{n=null}),Kt()),o&&o.p&&(!e||i&4)&&Nt(o,r,l,l[2],e?Bt(r,l[2],i,null):Yt(l[2]),null)},i(l){e||(C(n),C(o,l),e=!0)},o(l){S(n),S(o,l),e=!1},d(l){n&&n.d(l),l&&w(t),o&&o.d(l)}}}function oe(){return navigator.platform.indexOf("Mac")>-1}function re(s,t,e){let{$$slots:n={},$$scope:r}=t,o=!1;function l(a){(oe()?a.metaKey:a.ctrlKey)&&a.shiftKey&&a.code==="KeyP"&&(a.preventDefault(),e(0,o=!o))}Z(()=>(window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)));let i=[];Ut(Xt,{registerCommand:a=>(e(1,i=[...i,a]),()=>{e(1,i=i.filter(u=>u!==a))})});const c=()=>e(0,o=!1);return s.$$set=a=>{"$$scope"in a&&e(2,r=a.$$scope)},[o,i,r,n,c]}class le extends F{constructor(t){super(),G(this,t,re,se,K,{})}}function Dt(s){return Object.prototype.toString.call(s)==="[object Date]"}function at(s,t,e,n){if(typeof e=="number"||Dt(e)){const r=n-e,o=(e-t)/(s.dt||1/60),l=s.opts.stiffness*r,i=s.opts.damping*o,c=(l-i)*s.inv_mass,a=(o+c)*s.dt;return Math.abs(a)<s.opts.precision&&Math.abs(r)<s.opts.precision?n:(s.settled=!1,Dt(e)?new Date(e.getTime()+a):e+a)}else{if(Array.isArray(e))return e.map((r,o)=>at(s,t[o],e[o],n[o]));if(typeof e=="object"){const r={};for(const o in e)r[o]=at(s,t[o],e[o],n[o]);return r}else throw new Error(`Cannot spring ${typeof e} values`)}}function ct(s,t={}){const e=zt(s),{stiffness:n=.15,damping:r=.8,precision:o=.01}=t;let l,i,c,a=s,u=s,h=1,f=0,y=!1;function v(T,A={}){u=T;const d=c={};return s==null||A.hard||_.stiffness>=1&&_.damping>=1?(y=!0,l=At(),a=T,e.set(s=u),Promise.resolve()):(A.soft&&(f=1/((A.soft===!0?.5:+A.soft)*60),h=0),i||(l=At(),y=!1,i=Zt(E=>{if(y)return y=!1,i=null,!1;h=Math.min(h+f,1);const D={inv_mass:h,opts:_,settled:!0,dt:(E-l)*60/1e3},M=at(D,a,s,u);return l=E,a=s,e.set(s=M),D.settled&&(i=null),!D.settled})),new Promise(E=>{i.promise.then(()=>{d===c&&E()})}))}const _={set:v,update:(T,A)=>v(T(u,s),A),subscribe:e.subscribe,stiffness:n,damping:r,precision:o};return _}function Mt(s){const{registerCommand:t}=qt();return Z(()=>t(s))}function ut(s,t,e=1){const n=t===void 0?0:s,o=Math.ceil(((t===void 0?s:t)-n)/e)||1;return Array(o).fill(0).map((l,i)=>n+i*e)}const{cos:et,sin:nt}=Math;function ie(s,t=" "){return s?ut(s).map(()=>t).join(""):""}class p extends Float64Array{constructor(t,e,n){n?super(n):super(t*e),this.rows=t,this.columns=e}static identity(t){const e=new Float64Array(t*t),n=t+1;for(let r=0;r<t;r++)e[r*n]=1;return new p(t,t,e)}static scale(t){const n=new Float64Array(16),r=4+1;let o=0;for(;o<4-1;)n[o*r]=t,o++;return n[o*r]=1,new p(4,4,n)}static fromArray(t){return new p(t.length,t[0].length,t.reduce((e,n)=>e.concat(n)))}static rotationX(t){const e=et(t),n=nt(t);return new p(4,4,[1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1])}static rotationY(t){const e=et(t),n=nt(t);return new p(4,4,[e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1])}static rotationZ(t){const e=et(t),n=nt(t);return new p(4,4,[e,n,0,0,-n,e,0,0,0,0,1,0,0,0,0,1])}static rotation(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,l=t[0],i=t[1],c=t[2];return new p(4,4,[n+l*l*o,l*i*o-c*r,l*c*o+i*r,0,l*i*o+c*r,n+i*i*o,i*c*o-l*r,0,c*l*o-i*r,c*i*o+l*r,n+c*c*o,0,0,0,0,1])}static translationX(t){return p.identity(4).setAt(3,0,t)}static translationY(t){return p.identity(4).setAt(3,1,t)}static translationZ(t){return p.identity(4).setAt(3,2,t)}static translation(t,e,n){return p.identity(4).setAt(3,0,t).setAt(3,1,e).setAt(3,2,n)}static product(t,e){const n=t.rows,r=e.columns,o=e.rows,l=new p(n,r);for(let i=0;i<n;i++)for(let c=0;c<r;c++){let a=0;for(let u=0;u<o;u++)a+=t.getAt(i,u)*e.getAt(u,c);l.setAt(i,c,a)}return l}setAt(t,e,n){return this[t*this.columns+e]=n,this}getAt(t,e){return this[t*this.columns+e]}dot(t){return p.product(this,t)}toPrettyString(){function t(o){return Math.floor(o*100)/100}const e=Array.from(this).map(o=>t(o).toString()),n=e.reduce((o,l)=>Math.max(o,l.length),0);function r(o){return ie(n-o.length," ")+o}return e.map(r).map((o,l)=>o+(l%this.columns===this.columns-1?`
`:", ")).join("")}toArray(){return ut(this.rows).map(t=>ut(this.columns).map(e=>this[t*this.columns+e]))}}class b extends Float64Array{constructor(t){typeof t=="number"?super(t):t instanceof p?super(t):super(t)}static cross(t,e){return new b([t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]])}static dot(t,e){let n=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r];return n}static add(t,e){const n=new b(t.length);for(let r=0;r<t.length;r++)n[r]=t[r]+e[r];return n}static subtract(t,e){const n=new b(t.length);for(let r=0;r<t.length;r++)n[r]=t[r]-e[r];return n}cross(t){return b.cross(this,t)}multiplyByMatrix(t){return new b(p.product(new p(1,this.length,this),t))}dot(t){return b.dot(this,t)}add(t){return b.add(this,t)}subtract(t){return b.subtract(this,t)}rotateX(t){return this.multiplyByMatrix(p.rotationX(t))}rotateY(t){return this.multiplyByMatrix(p.rotationY(t))}rotateZ(t){return this.multiplyByMatrix(p.rotationZ(t))}rotate(t,e){return this.multiplyByMatrix(p.rotation(t,e))}norm(){return Math.sqrt(b.dot(this,this))}normalize(){const t=this.norm(),e=new b(this.length);for(let n=0;n<this.length;n++)e[n]=this[n]/t;return e}toArray(){return Array.from(this)}}function ae([s,t,e,n]){return b.cross(b.subtract(e,s),b.subtract(n,t))}const ce=new b([0,0,-1,1]);function ue(s){return b.dot(ae(s),ce)>0}function Ht(s){return Math.floor(s*4)/4}function fe(s){return s.map(([t,e],n)=>{const r=Ht(t),o=Ht(e);return n===0?`M${r},${o}`:r===s[n-1][0]?`V${o}`:o===s[n-1][1]?`H${r}`:`L${r},${o}`}).concat("Z").join("")}const x=3,he=.11,me=.27,ht=1-he,ft=ht/x*(1-me),de=(ht-ft*x)/(x-1),V=ht/2,pe=[...new Array(x)].map((s,t)=>{const e=-V+(ft+de)*t,n=e+ft;return[new b([-V,e,.5,1]),new b([V,e,.5,1]),new b([V,n,.5,1]),new b([-V,n,.5,1])]}),ge=[[-.5,0,0],[.5,0,0],[0,.5,0],[0,-.5,0],[0,0,-.5],[1,0,.5]].map(([s,t,e])=>{const n=p.rotationX(Math.PI*s).dot(p.rotationY(Math.PI*t)).dot(p.rotationZ(Math.PI*e));return pe.map(r=>r.map(o=>o.multiplyByMatrix(n)))}).reduce((s,t)=>s.concat(t));function _e(s){let t,e,n,r;return{c(){t=Tt("svg"),e=Tt("path"),this.h()},l(o){t=kt(o,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var l=k(t);e=kt(l,"path",{fill:!0,d:!0}),k(e).forEach(w),l.forEach(w),this.h()},h(){m(e,"fill","#7160b7"),m(e,"d",s[4]),m(t,"width",s[0]),m(t,"height",s[1]),m(t,"viewBox",s[5]),m(t,"class","svelte-15wkv3x")},m(o,l){O(o,t,l),I(t,e),s[15](t),n||(r=J(t,"click",s[2]),n=!0)},p(o,l){l[0]&16&&m(e,"d",o[4]),l[0]&1&&m(t,"width",o[0]),l[0]&2&&m(t,"height",o[1])},i:j,o:j,d(o){o&&w(t),s[15](null),n=!1,r()}}}const q=1;function ve(s,t,e){let n,r,o,l,i,c,a,u,h,{WIDTH:f=48}=t,{HEIGHT:y=48}=t;const v=[-f/2-4,-y/2-4,f+8,y+8].toString(),_=Math.PI/4,T=Math.PI/5;let A=0,d=0,E=0;const D=-Math.PI*2,M=ct({x:_,y:T+D,scale:q},{stiffness:.0061,damping:.094});Q(s,M,g=>e(13,a=g));const U=ct({x:0,y:0},{stiffness:.0061,damping:.094});Q(s,U,g=>e(14,u=g)),Z(()=>{M.set({x:_,y:T,scale:q})});function z(){A=A===1?0:1,M.set({x:_,y:T+Math.PI*2*A,scale:q})}function tt(){A=A===1?0:1,M.set({x:_+Math.PI*2*A,y:T,scale:q})}Mt({id:"logo-rotate",group:"Logo",label:"Revolution",callback:z}),Mt({id:"logo-rotate",group:"Logo",label:"Vertical Revolution",callback:tt});function mt([g,P]){d=g,E=P}function dt([g,P]){const H={x:g-d,y:P-E};U.set({x:H.x,y:H.y})}function pt(){U.set({x:0,y:0})}function gt(g){const{clientX:P,clientY:H}=g.touches[0];mt([P,H])}function _t(g){const{clientX:P,clientY:H}=g.touches[0];dt([P,H]),g.preventDefault()}function vt(){pt()}function wt(g){const{clientX:P,clientY:H}=g;dt([P,H])}function yt(){document.removeEventListener("mousemove",wt),document.removeEventListener("mouseup",yt),pt()}function Et(g){const{clientX:P,clientY:H}=g;mt([P,H]),document.addEventListener("mousemove",wt),document.addEventListener("mouseup",yt),g.preventDefault()}Z(()=>(h.addEventListener("mousedown",Et),h.addEventListener("touchstart",gt),h.addEventListener("touchmove",_t),h.addEventListener("touchend",vt),()=>{h.removeEventListener("mousedown",Et),h.removeEventListener("touchstart",gt),h.removeEventListener("touchmove",_t),h.removeEventListener("touchend",vt)}));function Wt(g){it[g?"unshift":"push"](()=>{h=g,e(3,h)})}return s.$$set=g=>{"WIDTH"in g&&e(0,f=g.WIDTH),"HEIGHT"in g&&e(1,y=g.HEIGHT)},s.$$.update=()=>{s.$$.dirty[0]&16384&&e(12,n=new b([u.x,u.y,0,1])),s.$$.dirty[0]&4096&&e(11,r=n.rotateZ(Math.PI/2).normalize()),s.$$.dirty[0]&4096&&e(10,o=n.norm()/100),s.$$.dirty[0]&11265&&e(9,l=p.scale(f*.6*a.scale).dot(p.rotationX(a.x)).dot(p.rotationY(a.y)).dot(p.rotation(r,o))),s.$$.dirty[0]&512&&e(8,i=ge.map(g=>g.map(P=>P.multiplyByMatrix(l))).filter(ue)),s.$$.dirty[0]&256&&e(4,c=i.map(fe).join(" "))},[f,y,z,h,c,v,M,U,i,l,o,r,n,a,u,Wt]}class we extends F{constructor(t){super(),G(this,t,ve,_e,K,{WIDTH:0,HEIGHT:1,revolution:2},null,[-1,-1])}get revolution(){return this.$$.ctx[2]}}function ye(s){let t,e,n;return{c(){t=$("a"),e=$("span"),n=ot(s[0]),this.h()},l(r){t=L(r,"A",{href:!0,"data-text":!0,class:!0});var o=k(t);e=L(o,"SPAN",{class:!0});var l=k(e);n=rt(l,s[0]),l.forEach(w),o.forEach(w),this.h()},h(){m(e,"class","svelte-1br3cik"),m(t,"href",s[1]),m(t,"data-text",s[0]),m(t,"class","svelte-1br3cik"),$t(t,"active",s[2])},m(r,o){O(r,t,o),I(t,e),I(e,n)},p(r,[o]){o&1&&lt(n,r[0]),o&2&&m(t,"href",r[1]),o&1&&m(t,"data-text",r[0]),o&4&&$t(t,"active",r[2])},i:j,o:j,d(r){r&&w(t)}}}function Ee(s,t,e){let n,r;Q(s,Vt,i=>e(3,r=i));let{text:o}=t,{path:l}=t;return s.$$set=i=>{"text"in i&&e(0,o=i.text),"path"in i&&e(1,l=i.path)},s.$$.update=()=>{s.$$.dirty&10&&e(2,n=l==="/"?r.url.pathname===l:r.url.pathname.startsWith(l))},[o,l,n,r]}class st extends F{constructor(t){super(),G(this,t,Ee,ye,K,{text:0,path:1})}}function be(s){let t,e,n,r,o,l,i,c,a,u,h;return r=new st({props:{path:"/",text:"Hello"}}),i=new st({props:{path:"/projects",text:"Projects"}}),u=new st({props:{path:"/cv",text:"CV"}}),{c(){t=$("nav"),e=$("ul"),n=$("li"),R(r.$$.fragment),o=X(),l=$("li"),R(i.$$.fragment),c=X(),a=$("li"),R(u.$$.fragment),this.h()},l(f){t=L(f,"NAV",{class:!0});var y=k(t);e=L(y,"UL",{class:!0});var v=k(e);n=L(v,"LI",{class:!0});var _=k(n);N(r.$$.fragment,_),_.forEach(w),o=W(v),l=L(v,"LI",{class:!0});var T=k(l);N(i.$$.fragment,T),T.forEach(w),c=W(v),a=L(v,"LI",{class:!0});var A=k(a);N(u.$$.fragment,A),A.forEach(w),v.forEach(w),y.forEach(w),this.h()},h(){m(n,"class","svelte-rpge6h"),m(l,"class","svelte-rpge6h"),m(a,"class","svelte-rpge6h"),m(e,"class","svelte-rpge6h"),m(t,"class","svelte-rpge6h")},m(f,y){O(f,t,y),I(t,e),I(e,n),Y(r,n,null),I(e,o),I(e,l),Y(i,l,null),I(e,c),I(e,a),Y(u,a,null),h=!0},p:j,i(f){h||(C(r.$$.fragment,f),C(i.$$.fragment,f),C(u.$$.fragment,f),h=!0)},o(f){S(r.$$.fragment,f),S(i.$$.fragment,f),S(u.$$.fragment,f),h=!1},d(f){f&&w(t),B(r),B(i),B(u)}}}class Ie extends F{constructor(t){super(),G(this,t,null,be,K,{})}}function Ae(s){let t,e,n,r,o,l;return n=new we({props:{WIDTH:s[0]}}),o=new Ie({}),{c(){t=$("header"),e=$("span"),R(n.$$.fragment),r=X(),R(o.$$.fragment),this.h()},l(i){t=L(i,"HEADER",{class:!0});var c=k(t);e=L(c,"SPAN",{class:!0});var a=k(e);N(n.$$.fragment,a),r=W(a),N(o.$$.fragment,a),a.forEach(w),c.forEach(w),this.h()},h(){m(e,"class","svelte-10coztr"),m(t,"class","svelte-10coztr")},m(i,c){O(i,t,c),I(t,e),Y(n,e,null),I(e,r),Y(o,e,null),l=!0},p(i,[c]){const a={};c&1&&(a.WIDTH=i[0]),n.$set(a)},i(i){l||(C(n.$$.fragment,i),C(o.$$.fragment,i),l=!0)},o(i){S(n.$$.fragment,i),S(o.$$.fragment,i),l=!1},d(i){i&&w(t),B(n),B(o)}}}function Te(s,t,e){let n;const r=ct(58,{stiffness:.0061,damping:.1});return Q(s,r,o=>e(0,n=o)),[n,r]}class ke extends F{constructor(t){super(),G(this,t,Te,Ae,K,{})}}function $e(s){let t,e,n,r;e=new ke({});const o=s[0].default,l=Rt(o,s,s[1],null);return{c(){t=$("div"),R(e.$$.fragment),n=X(),l&&l.c(),this.h()},l(i){t=L(i,"DIV",{class:!0});var c=k(t);N(e.$$.fragment,c),n=W(c),l&&l.l(c),c.forEach(w),this.h()},h(){m(t,"class","website-wrapper svelte-12ckasc")},m(i,c){O(i,t,c),Y(e,t,null),I(t,n),l&&l.m(t,null),r=!0},p(i,c){l&&l.p&&(!r||c&2)&&Nt(l,o,i,i[1],r?Bt(o,i[1],c,null):Yt(i[1]),null)},i(i){r||(C(e.$$.fragment,i),C(l,i),r=!0)},o(i){S(e.$$.fragment,i),S(l,i),r=!1},d(i){i&&w(t),B(e),l&&l.d(i)}}}function Le(s){let t,e;return t=new le({props:{$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){Y(t,n,r),e=!0},p(n,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){e||(C(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function Pe(s,t,e){let{$$slots:n={},$$scope:r}=t;return s.$$set=o=>{"$$scope"in o&&e(1,r=o.$$scope)},[n,r]}class Me extends F{constructor(t){super(),G(this,t,Pe,Le,K,{})}}export{Me as default};
