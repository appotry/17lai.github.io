"use strict";!function(h){for(var o,m,b,f,w="//lab.lepture.com/github-cards/",p=0,e=h.getElementsByTagName("meta"),i=0;i<e.length;i++){var t=e[i].getAttribute("name"),r=e[i].getAttribute("content");"gc:url"===t?o=r:"gc:base"===t?w=r:"gc:client-id"===t?m=r:"gc:client-secret"===t?b=r:"gc:theme"===t&&(f=r)}function A(e,t){return e.getAttribute("data-"+t)}function n(e,t){(t=t||o)||(u=A(e,"theme")||f||"default",t=w+"cards/"+u+".html");var r,i,n,a,c,d,l,u=A(e,"user"),g=A(e,"repo"),s=A(e,"github");if(s&&(s=s.split("/")).length&&!u&&(u=s[0],g=g||s[1]),u)return p+=1,s=A(e,"width"),r=A(e,"height"),i=A(e,"target"),n=A(e,"client-id")||m,a=A(e,"client-secret")||b,c="ghcard-"+u+"-"+p,d=h.createElement("iframe"),d.setAttribute("id",c),d.setAttribute("frameborder",0),d.setAttribute("scrolling",0),d.setAttribute("allowtransparency",!0),t=t+"?user="+u+"&identity="+c,g&&(t+="&repo="+g),i&&(t+="&target="+i),n&&a&&(t+="&client_id="+n+"&client_secret="+a),d.src=t,d.width=s||Math.min(e.parentNode.clientWidth||400,400),r&&(d.height=r),l=d,window.addEventListener&&window.addEventListener("message",function(e){l.id===e.data.sender&&(l.height=e.data.height)},!1),e.parentNode.replaceChild(d,e),d}var a=function(e){if(h.querySelectorAll)return h.querySelectorAll("."+e);var t=h.getElementsByTagName("div"),r=[];for(i=0;i<t.length;i++)~t[i].className.split(" ").indexOf(e)&&r.push(t[i]);return r}("github-card");for(i=0;i<a.length;i++)n(a[i]);window.githubCard&&(window.githubCard.render=n)}(document);