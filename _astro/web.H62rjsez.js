const a={context:void 0,registry:void 0};function L(e){a.context=e}function Ae(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const Ce=(e,t)=>e===t,B=Symbol("solid-proxy"),Ee=Symbol("solid-track"),U={equals:Ce};let fe=ye;const E=1,H=2,ue={owned:null,cleanups:null,context:null,owner:null};var g=null;let c=null,Oe=null,w=null,m=null,p=null,X=0;function D(e,t){const n=w,s=g,i=e.length===0,r=t===void 0?s:t,o=i?ue:{owned:null,cleanups:null,context:r?r.context:null,owner:r},l=i?e:()=>e(()=>$(()=>j(o)));g=o,w=null;try{return P(l,!0)}finally{w=n,g=s}}function q(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(c&&c.running&&c.sources.has(n)?i=i(n.tValue):i=i(n.value)),ge(n,i));return[he.bind(n),s]}function dt(e,t,n){const s=G(e,t,!0,E);I(s)}function V(e,t,n){const s=G(e,t,!1,E);I(s)}function $e(e,t,n){fe=ve;const s=G(e,t,!1,E),i=F&&de(F);i&&(s.suspense=i),s.user=!0,p?p.push(s):I(s)}function k(e,t,n){n=n?Object.assign({},U,n):U;const s=G(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),he.bind(s)}function ht(e){return P(e,!1)}function $(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function gt(e){$e(()=>$(e))}function ce(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function yt(){return w}function Te(){return g}function ke(e){if(c&&c.running)return e(),c.done;const t=w,n=g;return Promise.resolve().then(()=>{w=t,g=n;let s;return F&&(s=c||(c={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),P(e,!1),w=g=null,s?s.done:void 0})}const[Pe,ee]=q(!1);function wt(){return[Pe,ke]}function Ne(e){p.push.apply(p,e),e.length=0}function ae(e,t){const n=Symbol("context");return{id:n,Provider:Ie(n),defaultValue:e}}function de(e){return g&&g.context&&g.context[e.id]!==void 0?g.context[e.id]:e.defaultValue}function je(e){const t=k(e),n=k(()=>Q(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let F;function Le(){return F||(F=ae())}function he(){const e=c&&c.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===E)I(this);else{const t=m;m=null,P(()=>R(this),!1),m=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return e&&c.sources.has(this)?this.tValue:this.value}function ge(e,t,n){let s=c&&c.running&&c.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(c){const i=c.running;(i||!n&&c.sources.has(e))&&(c.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&P(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=c&&c.running;o&&c.disposed.has(r)||((o?!r.tState:!r.state)&&(r.pure?m.push(r):p.push(r),r.observers&&we(r)),o?r.tState=E:r.state=E)}if(m.length>1e6)throw m=[],new Error},!1)}return t}function I(e){if(!e.fn)return;j(e);const t=X;te(e,c&&c.running&&c.sources.has(e)?e.tValue:e.value,t),c&&!c.running&&c.sources.has(e)&&queueMicrotask(()=>{P(()=>{c&&(c.running=!0),w=g=e,te(e,e.tValue,t),w=g=null},!1)})}function te(e,t,n){let s;const i=g,r=w;w=g=e;try{s=e.fn(t)}catch(o){return e.pure&&(c&&c.running?(e.tState=E,e.tOwned&&e.tOwned.forEach(j),e.tOwned=void 0):(e.state=E,e.owned&&e.owned.forEach(j),e.owned=null)),e.updatedAt=n+1,pe(o)}finally{w=r,g=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ge(e,s,!0):c&&c.running&&e.pure?(c.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function G(e,t,n,s=E,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return c&&c.running&&(r.state=0,r.tState=s),g===null||g!==ue&&(c&&c.running&&g.pure?g.tOwned?g.tOwned.push(r):g.tOwned=[r]:g.owned?g.owned.push(r):g.owned=[r]),r}function K(e){const t=c&&c.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===H)return R(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);){if(t&&c.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(c.disposed.has(i))return}if((t?e.tState:e.state)===E)I(e);else if((t?e.tState:e.state)===H){const i=m;m=null,P(()=>R(e,n[0]),!1),m=i}}}function P(e,t){if(m)return e();let n=!1;t||(m=[]),p?n=!0:p=[],X++;try{const s=e();return Me(n),s}catch(s){n||(p=null),m=null,pe(s)}}function Me(e){if(m&&(ye(m),m=null),e)return;let t;if(c){if(!c.promises.size&&!c.queue.size){const s=c.sources,i=c.disposed;p.push.apply(p,c.effects),t=c.resolve;for(const r of p)"tState"in r&&(r.state=r.tState),delete r.tState;c=null,P(()=>{for(const r of i)j(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let o=0,l=r.owned.length;o<l;o++)j(r.owned[o]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}ee(!1)},!1)}else if(c.running){c.running=!1,c.effects.push.apply(c.effects,p),p=null,ee(!0);return}}const n=p;p=null,n.length&&P(()=>fe(n),!1),t&&t()}function ye(e){for(let t=0;t<e.length;t++)K(e[t])}function ve(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:K(s)}if(a.context){if(a.count){a.effects||(a.effects=[]),a.effects.push(...e.slice(0,n));return}else a.effects&&(e=[...a.effects,...e],n+=a.effects.length,delete a.effects);L()}for(t=0;t<n;t++)K(e[t])}function R(e,t){const n=c&&c.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===E?i!==t&&(!i.updatedAt||i.updatedAt<X)&&K(i):r===H&&R(i,t)}}}function we(e){const t=c&&c.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=H:s.state=H,s.pure?m.push(s):p.push(s),s.observers&&we(s))}}function j(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(c&&c.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)j(e.tOwned[t]);delete e.tOwned}be(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)j(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}c&&c.running?e.tState=0:e.state=0}function be(e,t){if(t||(e.tState=0,c.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)be(e.owned[n])}function Ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t=g){throw Ve(e)}function Q(e){if(typeof e=="function"&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ie(e,t){return function(s){let i;return V(()=>i=$(()=>(g.context={...g.context,[e]:s.value},je(()=>s.children))),void 0),i}}const De=Symbol("fallback");function ne(e){for(let t=0;t<e.length;t++)e[t]()}function He(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return ce(()=>ne(r)),()=>{let u=e()||[],d,f;return u[Ee],$(()=>{let y=u.length,b,S,A,N,O,x,C,T,M;if(y===0)o!==0&&(ne(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[De],i[0]=D(Se=>(r[0]=Se,n.fallback())),o=1);else if(o===0){for(i=new Array(y),f=0;f<y;f++)s[f]=u[f],i[f]=D(h);o=y}else{for(A=new Array(y),N=new Array(y),l&&(O=new Array(y)),x=0,C=Math.min(o,y);x<C&&s[x]===u[x];x++);for(C=o-1,T=y-1;C>=x&&T>=x&&s[C]===u[T];C--,T--)A[T]=i[C],N[T]=r[C],l&&(O[T]=l[C]);for(b=new Map,S=new Array(T+1),f=T;f>=x;f--)M=u[f],d=b.get(M),S[f]=d===void 0?-1:d,b.set(M,f);for(d=x;d<=C;d++)M=s[d],f=b.get(M),f!==void 0&&f!==-1?(A[f]=i[d],N[f]=r[d],l&&(O[f]=l[d]),f=S[f],b.set(M,f)):r[d]();for(f=x;f<y;f++)f in A?(i[f]=A[f],r[f]=N[f],l&&(l[f]=O[f],l[f](f))):i[f]=D(h);i=i.slice(0,o=y),s=u.slice(0)}return i});function h(y){if(r[f]=y,l){const[b,S]=q(f);return l[f]=S,t(u[f],b)}return t(u[f])}}}let me=!1;function Fe(){me=!0}function _e(e,t){if(me&&a.context){const n=a.context;L(Ae());const s=$(()=>e(t||{}));return L(n),s}return $(()=>e(t||{}))}function _(){return!0}const J={get(e,t,n){return t===B?n:e.get(t)},has(e,t){return t===B?!0:e.has(t)},set:_,deleteProperty:_,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:_,deleteProperty:_}},ownKeys(e){return e.keys()}};function W(e){return(e=typeof e=="function"?e():e)?e:{}}function Be(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function bt(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&B in l,e[o]=typeof l=="function"?(t=!0,k(l)):l}if(t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const u=W(e[l])[o];if(u!==void 0)return u}},has(o){for(let l=e.length-1;l>=0;l--)if(o in W(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(W(e[l])));return[...new Set(o)]}},J);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const u=Object.getOwnPropertyNames(l);for(let d=u.length-1;d>=0;d--){const f=u[d];if(f==="__proto__"||f==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,f);if(!s[f])s[f]=h.get?{enumerable:!0,configurable:!0,get:Be.bind(n[f]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const y=n[f];y&&(h.get?y.push(h.get.bind(l)):h.value!==void 0&&y.push(()=>h.value))}}}const i={},r=Object.keys(s);for(let o=r.length-1;o>=0;o--){const l=r[o],u=s[l];u&&u.get?Object.defineProperty(i,l,u):i[l]=u?u.value:void 0}return i}function pt(e,...t){if(B in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},J));return r.push(new Proxy({get(o){return i.has(o)?void 0:e[o]},has(o){return i.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!i.has(o))}},J)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),o=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let l=!1,u=0;for(const d of t)d.includes(i)&&(l=!0,o?s[u][i]=r.value:Object.defineProperty(s[u],i,r)),++u;l||(o?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}const Ue=e=>`Stale read from <${e}>.`;function mt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(He(()=>e.each,e.children,t||void 0))}function xt(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return k(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?$(()=>i(t?s:()=>{if(!$(n))throw Ue("Show");return e.when})):i}return e.fallback},void 0,void 0)}const qe=ae();function St(e){let t=0,n,s,i,r,o;const[l,u]=q(!1),d=Le(),f={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:l,effects:[],resolved:!1},h=Te();if(a.context&&a.load){const S=a.context.id+a.context.count;let A=a.load(S);if(A&&(typeof A!="object"||A.status!=="success"?i=A:a.gather(S)),i&&i!=="$$f"){const[N,O]=q(void 0,{equals:!1});r=N,i.then(()=>{if(a.done)return O();a.gather(S),L(s),O(),L()},x=>{o=x,O()})}}const y=de(qe);y&&(n=y.register(f.inFallback));let b;return ce(()=>b&&b()),_e(d.Provider,{value:f,get children(){return k(()=>{if(o)throw o;if(s=a.context,r)return r(),r=void 0;s&&i==="$$f"&&L();const S=k(()=>e.children);return k(A=>{const N=f.inFallback(),{showContent:O=!0,showFallback:x=!0}=n?n():{};if((!N||i&&i!=="$$f")&&O)return f.resolved=!0,b&&b(),b=s=i=void 0,Ne(f.effects),S();if(x)return b?A:D(C=>(b=C,s&&(L({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const Ke=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Re=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ke]),Ye=new Set(["innerHTML","textContent","innerText","children"]),Xe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ge=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function We(e,t){const n=Ge[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Qe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Je={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ze(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,u=t[i-1].nextSibling,d=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:u;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!d){d=new Map;let h=l;for(;h<r;)d.set(n[h],h++)}const f=d.get(t[o]);if(f!=null)if(l<f&&f<r){let h=o,y=1,b;for(;++h<i&&h<r&&!((b=d.get(t[h]))==null||b!==f+y);)y++;if(y>f-l){const S=t[o];for(;l<f;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const se="_$DX_DELEGATE";function ze(e,t,n,s={}){let i;return D(r=>{i=r,t===document?e():ot(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function At(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function et(e,t=window.document){const n=t[se]||(t[se]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,xe))}}function Z(e,t,n){a.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function tt(e,t,n,s){a.context&&e.isConnected||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function nt(e,t){a.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function st(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function it(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(ie(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(ie(e,l,!0),n[l]=u)}return n}function rt(e,t,n){if(!t)return n?Z(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Ct(e,t={},n,s){const i={};return V(()=>typeof t.ref=="function"?lt(t.ref,e):t.ref=e),V(()=>ft(e,t,n,!0,i,!0)),i}function lt(e,t,n){return $(()=>e(t,n))}function ot(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);V(i=>Y(e,t(),i,n),s)}function ft(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=re(e,o,null,i[o],n,r)}for(const o in t){if(o==="children")continue;const l=t[o];i[o]=re(e,o,l,i[o],n,r)}}function ut(e,t,n={}){a.completed=globalThis._$HY.completed,a.events=globalThis._$HY.events,a.load=i=>globalThis._$HY.r[i],a.has=i=>i in globalThis._$HY.r,a.gather=i=>oe(t,i),a.registry=new Map,a.context={id:n.renderId||"",count:0},oe(t,n.renderId);const s=ze(e,t,[...t.childNodes],n);return a.context=null,s}function Et(e){let t,n;return!a.context||!(t=a.registry.get(n=at()))?e():(a.completed&&a.completed.add(t),a.registry.delete(n),t)}function Ot(e){let t=e,n=0,s=[];if(a.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function $t(){a.events&&!a.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=a;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;xe(s),t.shift()}}),a.events.queued=!0)}function ct(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ie(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function re(e,t,n,s,i,r){let o,l,u,d,f;if(t==="style")return rt(e,n,s);if(t==="classList")return it(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),y=Qe.has(h);if(!y&&s){const b=Array.isArray(s)?s[0]:s;e.removeEventListener(h,b)}(y||n)&&(st(e,h,n,y),y&&et([h]))}else if(t.slice(0,5)==="attr:")Z(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(u=Ye.has(t))||!i&&((d=We(t,e.tagName))||(l=Re.has(t)))||(o=e.nodeName.includes("-"))){if(f)t=t.slice(5),l=!0;else if(a.context&&e.isConnected)return n;t==="class"||t==="className"?nt(e,n):o&&!l&&!u?e[ct(t)]=n:e[d||t]=n}else{const h=i&&t.indexOf(":")>-1&&Je[t.split(":")[0]];h?tt(e,h,t,n):Z(e,Xe[t]||t,n)}return n}function xe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),a.registry&&!a.done&&(a.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,s,i){const r=!!a.context&&e.isConnected;if(r){!n&&(n=[...e.childNodes]);let u=[];for(let d=0;d<n.length;d++){const f=n[d];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():u.push(f)}n=u}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(r||o==="number"&&(t=t.toString(),t===n))return n;if(l){let u=n[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),n=v(e,n,s,u)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(r)return n;n=v(e,n,s)}else{if(o==="function")return V(()=>{let u=t();for(;typeof u=="function";)u=u();n=Y(e,u,n,s)}),()=>n;if(Array.isArray(t)){const u=[],d=n&&Array.isArray(n);if(z(u,t,n,i))return V(()=>n=Y(e,u,n,s,!0)),()=>n;if(r){if(!u.length)return n;if(s===void 0)return[...e.childNodes];let f=u[0],h=[f];for(;(f=f.nextSibling)!==s;)h.push(f);return n=h}if(u.length===0){if(n=v(e,n,s),l)return n}else d?n.length===0?le(e,u,s):Ze(e,n,u):(n&&v(e),le(e,u));n=u}else if(t.nodeType){if(r&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=v(e,n,s,t);v(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function z(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],u=n&&n[e.length],d;if(!(l==null||l===!0||l===!1))if((d=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=z(e,l,u)||i;else if(d==="function")if(s){for(;typeof l=="function";)l=l();i=z(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const f=String(l);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return i}function le(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function v(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const u=l.parentNode===e;!r&&!o?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function oe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!a.registry.has(r)&&a.registry.set(r,i)}}function at(){const e=a.context;return`${e.id}${e.count++}`}const Tt=(...e)=>(Fe(),ut(...e));export{gt as A,yt as B,D as C,Te as D,xt as E,mt as F,St as S,it as a,Ot as b,V as c,et as d,_e as e,nt as f,Et as g,Tt as h,ot as i,ze as j,pt as k,Ct as l,bt as m,$e as n,st as o,ce as p,q,$t as r,Z as s,At as t,$ as u,dt as v,ht as w,wt as x,k as y,a as z};
