import{y as u,z as h,A as y,c as b}from"./chunks/web.4f801851.js";var w=r=>(n,s,o,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=a==="only"?h:y;let t={};if(Object.keys(o).length>0)if(u.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,f]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=f;const{default:l,...c}=t,i=r.dataset.solidRenderId;d(()=>b(n,{...s,...c,children:l}),r,{renderId:i})};export{w as default};
