!function(){function u(t,e){t.addEventListener("click",function(){var t;t=e,navigator.clipboard?navigator.clipboard.writeText(t.getText()).then(t.success,function(){o(t)}):o(t)})}function o(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var o=document.execCommand("copy");setTimeout(function(){o?e.success():e.error()},1)}catch(t){setTimeout(function(){e.error(t)},1)}document.body.removeChild(t)}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var e=t.element,o=function(t){var e,o={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(e in o){for(var n="data-prismjs-"+e,c=t;c&&!c.hasAttribute(n);)c=c.parentElement;c&&(o[e]=c.getAttribute(n))}return o}(e),n=document.createElement("button"),c=(n.className="copy-to-clipboard-button",n.setAttribute("type","button"),document.createElement("span"));return n.appendChild(c),i("copy"),u(n,{getText:function(){return e.textContent},success:function(){i("copy-success"),r()},error:function(){i("copy-error"),setTimeout(function(){var t;t=e,window.getSelection().selectAllChildren(t)},1),r()}}),n;function r(){setTimeout(function(){i("copy")},o["copy-timeout"])}function i(t){c.textContent=o[t],n.setAttribute("data-copy-state",t)}}):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();