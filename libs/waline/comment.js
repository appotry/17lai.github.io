const h=e=>`${e.replace(/\/?$/,"/")}api/`,i=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},g=({serverURL:e,lang:t,paths:n,signal:r})=>fetch(`${h(e)}comment?type=count&url=${encodeURIComponent(n.join(","))}&lang=${t}`,{signal:r}).then(e=>e.json()).then(e=>i(e,"Get comment count").data),p=e=>{try{e=decodeURI(e)}catch{}return e},m=(e="")=>e.replace(/\/$/u,""),u=e=>/^(https?:)?\/\//.test(e),d=e=>{const t=m(e);return u(t)?t:`https://${t}`},$=e=>{e.name!=="AbortError"&&console.error(e.message)},f=e=>{const{path:t}=e.dataset;return t!=null&&t.length?t:null},v=({serverURL:e,path:t=window.location.pathname,selector:n=".waline-comment-count",lang:r=navigator.language})=>{const o=new AbortController,a=document.querySelectorAll(n);return a.length&&g({serverURL:d(e),paths:Array.from(a).map(e=>p(f(e)??t)),lang:r,signal:o.signal}).then(n=>{a.forEach((e,t)=>{e.innerText=n[t].toString()})}).catch($),o.abort.bind(o)},w="3.2.7";export{v as commentCount,w as version};