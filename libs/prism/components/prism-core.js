var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(s){var e,t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},C={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof N?new N(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},C.util.type(e)){case"Object":if(n=C.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return(n=C.util.objId(e),r[n])?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack)||[])[1];if(n){var t,r=document.getElementsByTagName("script");for(t in r)if(r[t].src==n)return r[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t,r=C.util.clone(C.languages[e]);for(t in n)r[t]=n[t];return r},insertBefore:function(t,e,n,r){var a,i=(r=r||C.languages)[t],l={};for(a in i)if(i.hasOwnProperty(a)){if(a==e)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(a)||(l[a]=i[a])}var s=r[t];return r[t]=l,C.languages.DFS(C.languages,function(e,n){n===s&&e!=t&&(this[e]=l)}),l},DFS:function e(n,t,r,a){a=a||{};var i,l,o,s=C.util.objId;for(i in n)n.hasOwnProperty(i)&&(t.call(n,i,n[i],r||i),l=n[i],"Object"!==(o=C.util.type(l))||a[s(l)]?"Array"!==o||a[s(l)]||(a[s(l)]=!0,e(l,t,i,a)):(a[s(l)]=!0,e(l,t,null,a)))}},plugins:{},highlightAll:function(e,n){C.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),C.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)C.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=C.util.getLanguage(e),a=C.languages[r],i=(C.util.setLanguage(e,r),e.parentElement);i&&"pre"===i.nodeName.toLowerCase()&&C.util.setLanguage(i,r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,C.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,C.hooks.run("after-highlight",l),C.hooks.run("complete",l),t&&t.call(l.element)}C.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),l.code?(C.hooks.run("before-highlight",l),l.grammar?n&&s.Worker?((r=new Worker(C.filename)).onmessage=function(e){o(e.data)},r.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))):o(C.highlight(l.code,l.grammar,l.language)):o(C.util.encode(l.code))):(C.hooks.run("complete",l),t&&t.call(l.element))},highlight:function(e,n,t){e={code:e,grammar:n,language:t};if(C.hooks.run("before-tokenize",e),e.grammar)return e.tokens=C.tokenize(e.code,e.grammar),C.hooks.run("after-tokenize",e),N.stringify(C.util.encode(e.tokens),e.language);throw new Error('The language "'+e.language+'" has no grammar.')},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}for(var a=new u,i=(M(a,a.head,e),!function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;for(var c,g=s[u],h=g.inside,f=!!g.lookbehind,d=!!g.greedy,p=g.alias,m=(d&&!g.pattern.global&&(c=g.pattern.toString().match(/[imsuy]*$/)[0],g.pattern=RegExp(g.pattern.source,c+"g")),g.pattern||g),v=a.next,y=i;v!==t.tail&&!(l&&y>=l.reach);y+=v.value.length,v=v.next){var k=v.value;if(t.length>n.length)return;if(!(k instanceof N)){var x,b=1;if(d){if(!(x=_(m,y,n,f))||x.index>=n.length)break;var w=x.index,A=x.index+x[0].length,E=y;for(E+=v.value.length;E<=w;)v=v.next,E+=v.value.length;if(E-=v.value.length,y=E,v.value instanceof N)continue;for(var P=v;P!==t.tail&&(E<A||"string"==typeof P.value);P=P.next)b++,E+=P.value.length;b--,k=n.slice(y,E),x.index-=y}else if(!(x=_(m,0,k,f)))continue;var w=x.index,L=x[0],S=k.slice(0,w),O=k.slice(w+L.length),k=y+k.length,j=(l&&k>l.reach&&(l.reach=k),v.prev),S=(S&&(j=M(t,j,S),y+=S.length),W(t,j,b),new N(o,h?C.tokenize(L,h):L,p,L));v=M(t,j,S),O&&M(t,v,O),1<b&&(L={cause:o+","+u,reach:k},e(n,t,r,v.prev,y,L),l)&&L.reach>l.reach&&(l.reach=L.reach)}}}}}(e,a,n,a.head,0),a),l=[],o=i.head.next;o!==i.tail;)l.push(o.value),o=o.next;return l},hooks:{all:{},add:function(e,n){var t=C.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=C.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:N};function N(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function _(e,n,t,r){e.lastIndex=n;n=e.exec(t);return n&&r&&n[1]&&(e=n[1].length,n.index+=e,n[0]=n[0].slice(e)),n}function u(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function M(e,n,t){var r=n.next,t={value:t,prev:n,next:r};return n.next=t,r.prev=t,e.length++,t}function W(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}return s.Prism=C,N.stringify=function n(e,t){if("string"==typeof e)return e;var r;if(Array.isArray(e))return r="",e.forEach(function(e){r+=n(e,t)}),r;var a,i={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},e=e.alias,l=(e&&(Array.isArray(e)?Array.prototype.push.apply(i.classes,e):i.classes.push(e)),C.hooks.run("wrap",i),"");for(a in i.attributes)l+=" "+a+'="'+(i.attributes[a]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},s.document?((r=C.util.currentScript())&&(C.filename=r.src,r.hasAttribute("data-manual"))&&(C.manual=!0),C.manual||("loading"===(e=document.readyState)||"interactive"===e&&r&&r.defer?document.addEventListener("DOMContentLoaded",a):window.requestAnimationFrame?window.requestAnimationFrame(a):window.setTimeout(a,16))):s.addEventListener&&!C.disableWorkerMessageHandler&&s.addEventListener("message",function(e){var e=JSON.parse(e.data),n=e.language,t=e.code,e=e.immediateClose;s.postMessage(C.highlight(t,C.languages[n],n)),e&&s.close()},!1),C;function a(){C.manual||C.highlightAll()}}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);