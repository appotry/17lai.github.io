!function(){var r,i,l,e,t;"undefined"!=typeof Prism&&"undefined"!=typeof document&&(r=[],i={},l=function(){},Prism.plugins.toolbar={},e=Prism.plugins.toolbar.registerButton=function(e,n){var t="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t};e in i?console.warn('There is a button with the key "'+e+'" registered already.'):r.push(i[e]=t)},t=Prism.plugins.toolbar.hook=function(n){var e,a,t,o=n.element.parentNode;o&&/pre/i.test(o.nodeName)&&(o.parentNode.classList.contains("code-toolbar")||((e=document.createElement("div")).classList.add("code-toolbar"),o.parentNode.insertBefore(e,o),e.appendChild(o),(a=document.createElement("div")).classList.add("toolbar"),o=r,(o=(t=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(n.element))?t.map(function(e){return i[e]||l}):o).forEach(function(e){var t,e=e(n);e&&((t=document.createElement("div")).classList.add("toolbar-item"),t.appendChild(e),a.appendChild(t))}),e.appendChild(a)))},e("label",function(e){e=e.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-label")){var t,n,a=e.getAttribute("data-label");try{n=document.querySelector("template#"+a)}catch(e){}return n?t=n.content:(e.hasAttribute("data-url")?(t=document.createElement("a")).href=e.getAttribute("data-url"):t=document.createElement("span"),t.textContent=a),t}}),Prism.hooks.add("complete",t))}();