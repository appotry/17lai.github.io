const v="3.4.2",$={"Content-Type":"application/json"},h=e=>`${e.replace(/\/?$/,"/")}api/`,u=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},f=({serverURL:e,lang:t,paths:n,type:r,signal:a})=>fetch(`${h(e)}article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(r.join(","))}&lang=${t}`,{signal:a}).then(e=>e.json()).then(e=>u(e,"Get counter").data),U=({serverURL:e,lang:t,path:n,type:r,action:a})=>fetch(`${h(e)}article?lang=${t}`,{method:"POST",headers:$,body:JSON.stringify({path:n,type:r,action:a})}).then(e=>e.json()).then(e=>u(e,"Update counter").data),R=({serverURL:e,lang:t,paths:n,signal:r})=>f({serverURL:e,lang:t,paths:n,type:["time"],signal:r}),w=e=>U({...e,type:"time",action:"inc"}),L=(e="")=>e.replace(/\/$/u,""),b=e=>/^(https?:)?\/\//.test(e),d=e=>{const t=L(e);return b(t)?t:`https://${t}`},j=e=>{e.name!=="AbortError"&&console.error(e.message)},m=e=>{const{path:t}=e.dataset;return t!=null&&t.length?t:null},y=(r,e)=>{e.forEach((e,t)=>{const n=r[t].time;typeof n=="number"&&(e.innerText=n.toString())})},S=({serverURL:e,path:n=window.location.pathname,selector:t=".waline-pageview-count",update:r=!0,lang:a=navigator.language})=>{const o=new AbortController,l=Array.from(document.querySelectorAll(t)),s=e=>{const t=m(e);return t!==null&&n!==t},i=t=>R({serverURL:d(e),paths:t.map(e=>m(e)??n),lang:a,signal:o.signal}).then(e=>y(e,t)).catch(j);if(r){const p=l.filter(e=>!s(e)),c=l.filter(s);w({serverURL:d(e),path:n,lang:a}).then(e=>y(e,p)),c.length&&i(c)}else i(l);return o.abort.bind(o)};export{S as pageviewCount,v as version};