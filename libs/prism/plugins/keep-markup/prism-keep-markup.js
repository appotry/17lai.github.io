(function(){if(typeof Prism==="undefined"||typeof document==="undefined"||!document.createRange){return}Prism.plugins.KeepMarkup=true;Prism.hooks.add("before-highlight",function(e){if(!e.element.children.length){return}if(!Prism.util.isActive(e.element,"keep-markup",true)){return}var n=Prism.util.isActive(e.element,"drop-tokens",false);function t(e){if(n&&e.nodeName.toLowerCase()==="span"&&e.classList.contains("token")){return false}return true}var r=0;var o=[];function d(e){if(!t(e)){i(e);return}var n={element:e,posOpen:r};o.push(n);i(e);n.posClose=r}function i(e){for(var n=0,t=e.childNodes.length;n<t;n++){var o=e.childNodes[n];if(o.nodeType===1){d(o)}else if(o.nodeType===3){r+=o.data.length}}}i(e.element);if(o.length){e.keepMarkup=o}});Prism.hooks.add("after-highlight",function(n){if(n.keepMarkup&&n.keepMarkup.length){var i=function(e,n){for(var t=0,o=e.childNodes.length;t<o;t++){var r=e.childNodes[t];if(r.nodeType===1){if(!i(r,n)){return false}}else if(r.nodeType===3){if(!n.nodeStart&&n.pos+r.data.length>n.node.posOpen){n.nodeStart=r;n.nodeStartPos=n.node.posOpen-n.pos}if(n.nodeStart&&n.pos+r.data.length>=n.node.posClose){n.nodeEnd=r;n.nodeEndPos=n.node.posClose-n.pos}n.pos+=r.data.length}if(n.nodeStart&&n.nodeEnd){var d=document.createRange();d.setStart(n.nodeStart,n.nodeStartPos);d.setEnd(n.nodeEnd,n.nodeEndPos);n.node.element.innerHTML="";n.node.element.appendChild(d.extractContents());d.insertNode(n.node.element);d.detach();return false}}return true};n.keepMarkup.forEach(function(e){i(n.element,{node:e,pos:0})});n.highlightedCode=n.element.innerHTML}})})();