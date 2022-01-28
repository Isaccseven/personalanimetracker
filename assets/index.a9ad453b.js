import{j as p,r as o,R as b,a as u}from"./vendor.56b4b166.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}};f();const e=p.exports.jsx,l=p.exports.jsxs,g=p.exports.Fragment,y=()=>e("nav",{className:"navbar navbar-expand-lg justify-content-evenly navbar-light bg-primary",children:e("div",{className:"container-fluid",children:l("div",{className:"collapse navbar-collapse d-flex",id:"navbarSupportedContent",children:[e("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e("li",{className:"nav-item",children:e("a",{className:"nav-link active text-white","aria-current":"page",href:"#",children:e("h3",{children:"Home"})})})}),l("form",{className:"form-check",children:[e("button",{className:"btn btn-outline-primary bg-white text-primary mx-2",type:"submit",children:"Login"}),e("button",{className:"btn btn-outline-primary bg-white text-primary mx-2",type:"submit",children:"Register"})]})]})})}),N=n=>e(g,{children:n.loading?e("div",{className:"d-flex flex-wrap",children:l("div",{className:"card m-3 shadow-lg p-3 mb-5 bg-body rounded",style:{width:"16rem"},"aria-hidden":"true",children:[e("img",{src:"...",className:"card-img-top",alt:"..."}),l("div",{className:"card-body",children:[e("h5",{className:"card-title placeholder-glow",children:e("span",{className:"placeholder col-6"})}),l("p",{className:"card-text placeholder-glow",children:[e("span",{className:"placeholder col-7"}),e("span",{className:"placeholder col-4"}),e("span",{className:"placeholder col-4"}),e("span",{className:"placeholder col-6"}),e("span",{className:"placeholder col-8"})]}),e("a",{href:"#",tabIndex:"-1",className:"btn btn-primary disabled placeholder col-6"})]})]})}):e("div",{className:"d-flex flex-wrap",children:n.data.map(({id:r,name:i,description:s,cover_portrait:a},t)=>l("div",{className:"card m-3 shadow-lg p-3 mb-5 bg-body rounded",style:{width:"16rem"},children:[e("img",{src:"https://www.aniflix.cc/storage/"+a,className:"card-img-top img-fluid rounded mx-auto d-block",alt:"..."}),l("div",{className:"card-body",children:[e("h5",{className:"card-title",children:i}),e("p",{className:"card-text overflow-hidden",style:{height:"10rem"},children:s})]}),e("button",{className:"btn btn-primary",children:e("i",{className:"bi bi-star"})})]},t))})}),v=()=>e("div",{}),x=()=>{const n="https://www.aniflix.cc/api/show/search",[r,i]=o.exports.useState(" "),[s,a]=o.exports.useState(null),[t,c]=o.exports.useState(!0);async function m(d){const h=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/json, text/plain, */*"},body:JSON.stringify({search:d}),redirect:"follow"})).json();console.log(h),a(h),c(!1)}return o.exports.useEffect(async()=>{await m("Demon Slayer")},[]),l("div",{className:"container-fluid bg-white p-4",children:[l("ul",{className:"nav nav-pills nav-fill mb-3",id:"pills-tab",role:"tablist",children:[e("li",{className:"nav-item",role:"presentation",children:e("button",{className:"nav-link active",id:"pills-catalog-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-catalog","aria-selected":"true",children:"Catalog"})}),e("li",{className:"nav-item",role:"presentation",children:e("button",{className:"nav-link",id:"pills-library-tab","data-bs-toggle":"pill","data-bs-target":"#pills-library",type:"button",role:"tab","aria-controls":"pills-library","aria-selected":"false",children:"Library"})}),e("span",{className:"w-50"}),l("form",{className:"d-flex",children:[e("input",{className:"form-control me-2",type:"search",placeholder:"Search",onChange:d=>i(d.target.value),"aria-label":"Search"}),e("button",{className:"btn btn-primary text-white",onClick:async()=>await m(r),type:"button",children:"Search"})]})]}),l("div",{className:"tab-content",id:"pills-tabContent",children:[e("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-catalog-tab",children:e(N,{data:s,loading:t})}),e("div",{className:"tab-pane fade",id:"pills-library",role:"tabpanel","aria-labelledby":"pills-library-tab",children:e(v,{})})]})]})},w=()=>e("div",{children:e(x,{})});function S(){return l("div",{className:"App",children:[e(y,{}),e(w,{})]})}b.render(e(u.StrictMode,{children:e(S,{})}),document.getElementById("root"));