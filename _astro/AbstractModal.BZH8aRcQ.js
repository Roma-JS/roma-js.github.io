import{d as H,s as w,w as R,g as $,x as f,b as D,m as C,a as N,i as s,e as _,c as L,r as B,t as v,A as I,D as V,l as W,h as m,S as j,f as q}from"./web.CQbmbYNS.js";import{s as h}from"./_slug_.12a8d8c0.BlnJThjq.js";function z(o,t,l){const e=o.getBoundingClientRect();return l>=e.top&&l<=e.top+e.height&&t>=e.left&&t<=e.left+e.width}var F=v("<dialog><button autofocus type=button>&times;</button><article><aside></aside><!$><!/><!$><!/>");function G(o){const[t,l]=w(o,["children","id","headingElem","heading","preHeading"]);let e;function c(){document.documentElement.classList.toggle("overflow-hidden",this.open)}const d=({target:n})=>{!(n instanceof Element)||!e||n.getAttribute("data-modal")===t.id&&!e.contains(n)&&(e.showModal(),c.call(e))},b=({currentTarget:n,clientX:a,clientY:r})=>{z(n,a,r)||n.close()};return R(()=>{window.addEventListener("click",d),e?.addEventListener("close",c),W(()=>{window.removeEventListener("click",d),e?.removeEventListener("close",c)})}),(()=>{var n=$(F),a=n.firstChild,r=a.nextSibling,g=r.firstChild,u=g.nextSibling,[p,y]=f(u.nextSibling),M=p.nextSibling,[P,A]=f(M.nextSibling),k=e;return typeof k=="function"?I(k,n):e=n,D(n,C(l,{onClick:b,get classList(){return{[h.modal]:!0}},get id(){return t.id}}),!1,!0),a.$$click=()=>{e?.close()},N(a,{"btn btn-secondary":!0}),s(g,()=>t.preHeading),s(r,_(V,{get component(){return t.headingElem??"h2"},get class(){return h.heading},get children(){return t.heading}}),p,y),s(r,()=>t.children,P,A),L(i=>{var x=h.close,E=h.article,S=h.aside;return x!==i.e&&m(a,i.e=x),E!==i.t&&m(r,i.t=E),S!==i.a&&m(g,i.a=S),i},{e:void 0,t:void 0,a:void 0}),B(),n})()}H(["click"]);var J=v('<a class=link target=_blank rel="noopener noreferrer">'),K=v("<aside><!$><!/>: <!$><!/>");function U(o){const[t,l]=w(o,["children","abstract","messages"]);return _(G,C(l,{get id(){return t.abstract.id},get heading(){return t.abstract.data.title},get preHeading(){return(()=>{var e=$(K),c=e.firstChild,[d,b]=f(c.nextSibling),n=d.nextSibling,a=n.nextSibling,[r,g]=f(a.nextSibling);return s(e,()=>t.messages.talkSpeaker,d,b),s(e,_(j,{get when(){return t.abstract.data.website},get fallback(){return t.abstract.data.author},get children(){var u=$(J);return s(u,()=>t.abstract.data.author),L(()=>q(u,"href",t.abstract.data.website)),u}}),r,g),e})()},get children(){return t.children}}))}export{U as AbstractModal};
