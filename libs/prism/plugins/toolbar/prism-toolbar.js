(function(){if(typeof Prism==="undefined"||typeof document==="undefined"){return}var o=[];var l={};var u=function(){};Prism.plugins.toolbar={};var e=Prism.plugins.toolbar.registerButton=function(e,n){var t;if(typeof n==="function"){t=n}else{t=function(e){var t;if(typeof n.onClick==="function"){t=document.createElement("button");t.type="button";t.addEventListener("click",function(){n.onClick.call(this,e)})}else if(typeof n.url==="string"){t=document.createElement("a");t.href=n.url}else{t=document.createElement("span")}if(n.className){t.classList.add(n.className)}t.textContent=n.text;return t}}if(e in l){console.warn('There is a button with the key "'+e+'" registered already.');return}o.push(l[e]=t)};function d(e){while(e){var t=e.getAttribute("data-toolbar-order");if(t!=null){t=t.trim();if(t.length){return t.split(/\s*,\s*/g)}else{return[]}}e=e.parentElement}}var t=Prism.plugins.toolbar.hook=function(r){var e=r.element.parentNode;if(!e||!/pre/i.test(e.nodeName)){return}if(e.parentNode.classList.contains("code-toolbar")){return}var t=document.createElement("div");t.classList.add("code-toolbar");e.parentNode.insertBefore(t,e);t.appendChild(e);var a=document.createElement("div");a.classList.add("toolbar");var n=o;var i=d(r.element);if(i){n=i.map(function(e){return l[e]||u})}n.forEach(function(e){var t=e(r);if(!t){return}var n=document.createElement("div");n.classList.add("toolbar-item");n.appendChild(t);a.appendChild(n)});t.appendChild(a)};e("label",function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)){return}if(!t.hasAttribute("data-label")){return}var n;var r;var a=t.getAttribute("data-label");try{r=document.querySelector("template#"+a)}catch(e){}if(r){n=r.content}else{if(t.hasAttribute("data-url")){n=document.createElement("a");n.href=t.getAttribute("data-url")}else{n=document.createElement("span")}n.textContent=a}return n});Prism.hooks.add("complete",t)})();