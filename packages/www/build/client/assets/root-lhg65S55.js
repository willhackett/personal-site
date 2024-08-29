import{o as m,p as x,q as h,t as S,r as i,_ as f,n as t,O as w,M as j,L as k,S as g}from"./components-UlcBZXwz.js";/* empty css                             *//**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function _({getKey:e,...l}){let{isSpaMode:c}=m(),o=x(),u=h();S({getKey:e,storageKey:a});let y=i.useMemo(()=>{if(!e)return null;let s=e(o,u);return s!==o.key?s:null},[]);if(c)return null;let d=((s,p)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[p||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(y)})`}}))}var q="qwt30f1 qwt30f0 _1y8zk7q6x _1y8zk7q6u _1y8zk7q6j _1y8zk7q6k _1y8zk7q13";function L({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(j,{}),t.jsx(k,{})]}),t.jsxs("body",{className:q,children:[e,t.jsx(_,{}),t.jsx(g,{})]})]})}function O(){return t.jsx(w,{})}export{L as Layout,O as default};
