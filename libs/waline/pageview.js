const v="3.2.1",$={"Content-Type":"application/json"},h=e=>`${e.replace(/\/?$/,"/")}api/`,d=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},f=({serverURL:e,lang:t,paths:n,type:r,signal:a})=>fetch(`${h(e)}article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(r.join(","))}&lang=${t}`,{signal:a}).then(e=>e.json()).then(e=>d(e,"Get counter").data),R=({serverURL:e,lang:t,path:n,type:r,action:a})=>fetch(`${h(e)}article?lang=${t}`,{method:"POST",headers:$,body:JSON.stringify({path:n,type:r,action:a})}).then(e=>e.json()).then(e=>d(e,"Update counter").data),U=({serverURL:e,lang:t,paths:n,signal:r})=>f({serverURL:e,lang:t,paths:n,type:["time"],signal:r}),w=e=>R({...e,type:"time",action:"inc"}),L=(e="")=>e.replace(/\/$/u,""),b=e=>/^(https?:)?\/\//.test(e),m=e=>{const t=L(e);return b(t)?t:`https://${t}`},j=e=>{e.name!=="AbortError"&&console.error(e.message)},u=e=>e.dataset.path??null,y=(r,e)=>{e.forEach((e,t)=>{const n=r[t].time;typeof n=="number"&&(e.innerText=n.toString())})},S=({serverURL:e,path:n=window.location.pathname,selector:t=".waline-pageview-count",update:r=!0,lang:a=navigator.language})=>{const o=new AbortController,s=Array.from(document.querySelectorAll(t)),l=e=>{const t=u(e);return t!==null&&n!==t},i=t=>U({serverURL:m(e),paths:t.map(e=>u(e)??n),lang:a,signal:o.signal}).then(e=>y(e,t)).catch(j);if(r){const p=s.filter(e=>!l(e)),c=s.filter(l);w({serverURL:m(e),path:n,lang:a}).then(e=>y(e,p)),c.length&&i(c)}else i(s);return o.abort.bind(o)};export{S as pageviewCount,v as version};