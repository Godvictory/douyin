import{E as u,m as n,x as l,al as f,aC as r,aD as c,M as o,H as p,I as m,X as v}from"./index-483b83c5.js";import{u as _}from"./positionBox-37075afa.js";/* empty css                   */import"./_commonjsHelpers-de833af9.js";const C=u({__name:"index",setup(d){const t=n("userInfo"),i=l([]),s=l([]),a=n("loginDialog");return f(()=>{t!=null&&t.value?(r.video.publish().then(e=>{e.status_code==0&&(s.value=e.video_list)}),r.video.favorite().then(e=>{e.status_code==0&&(i.value=e.video_list)})):(c.error("请先登录"),a&&(a.value=!0))}),(e,h)=>o(t)?(p(),m(_,{key:0,info:o(t),"favorite-list":o(i),"publish-list":o(s)},null,8,["info","favorite-list","publish-list"])):v("",!0)}});export{C as default};