require(["gitbook","jQuery"],(function(e,t){function o(e){var t=document.createRange();t.selectNodeContents(e);var o=window.getSelection();o.removeAllRanges(),o.addRange(t)}e.events.bind("page.change",(function(){t("pre").each((function(){t(this).css("position","relative");var e=t("<button class='copy-code-button'>Copy</button>");e.css({position:"absolute",top:"5px",right:"5px",padding:"3px","background-color":"#313E4E",color:"white","border-radius":"5px","-moz-border-radius":"5px","-webkit-border-radius":"5px",border:"2px solid #CCCCCC"}),e.click((function(){var e,n=t(this).siblings("code");if(n){o(n.get(0));var i="";1==function(e){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}}((e="",window.getSelection?e=window.getSelection():document.getSelection?e=document.getSelection():document.selection&&(e=document.selection.createRange().text),e))?(i="Copied",o(n.get(0))):(i="Unable to copy",o(n.get(0))),t(this).text(i);var c=this;setTimeout((function(){t(c).text("Copy")}),2e3)}})),t(this).append(e)}))}))}));