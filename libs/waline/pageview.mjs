const e="2.14.9",t={"Content-Type":"application/json"},n=({serverURL:e,lang:t,paths:n,signal:a})=>(({serverURL:e,lang:t,paths:n,type:a,signal:r})=>fetch(`${e}/article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(a.join(","))}&lang=${t}`,{signal:r}).then((e=>e.json())))({serverURL:e,lang:t,paths:n,type:["time"],signal:a}).then((e=>Array.isArray(e)?e:[e])),a=e=>(({serverURL:e,lang:n,path:a,type:r,action:o})=>fetch(`${e}/article?lang=${n}`,{method:"POST",headers:t,body:JSON.stringify({path:a,type:r,action:o})}).then((e=>e.json())))({...e,type:"time",action:"inc"}),r=e=>{const t=((e="")=>e.replace(/\/$/u,""))(e);return/^(https?:)?\/\//.test(t)?t:`https://${t}`},o=e=>{"AbortError"!==e.name&&console.error(e.message)},l=e=>e.dataset.path||e.getAttribute("id"),s=(e,t)=>{t.forEach(((t,n)=>{t.innerText=e[n].toString()}))},i=({serverURL:e,path:t=window.location.pathname,selector:i=".waline-pageview-count",update:p=!0,lang:c=navigator.language})=>{const h=new AbortController,g=Array.from(document.querySelectorAll(i)),y=e=>{const n=l(e);return null!==n&&t!==n},d=a=>n({serverURL:r(e),paths:a.map((e=>l(e)||t)),lang:c,signal:h.signal}).then((e=>s(e,a))).catch(o);if(p){const n=g.filter((e=>!y(e))),o=g.filter(y);a({serverURL:r(e),path:t,lang:c}).then((e=>s(new Array(n.length).fill(e),n))),o.length&&d(o)}else d(g);return h.abort.bind(h)};export{i as pageviewCount,e as version};
//# sourceMappingURL=pageview.mjs.map
