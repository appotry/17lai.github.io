!function(){for(var n=navigator.userAgent,e=["iPad","iPhone","Android","SymbianOS","Windows Phone","iPod","webOS","BlackBerry","IEMobile"],t=0;t<e.length;t++)if(0<n.indexOf(e[t]))return;function i(n,e,t){return n.getAttribute(e)||t}function o(n){return document.getElementsByTagName(n)}function a(){u=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,l=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function d(){w.clearRect(0,0,u,l);var e,t,i,o,a,c=[f].concat(h);h.forEach(function(n){for(n.x+=n.xa,n.y+=n.ya,n.xa*=n.x>u||n.x<0?-1:1,n.ya*=n.y>l||n.y<0?-1:1,w.fillRect(n.x-.5,n.y-.5,1,1),t=0;t<c.length;t++)n!==(e=c[t])&&null!==e.x&&null!==e.y&&(i=n.x-e.x,o=n.y-e.y,(a=i*i+o*o)<e.max&&(e===f&&a>=e.max/2&&(n.x-=.03*i,n.y-=.03*o),a=(e.max-a)/e.max,w.beginPath(),w.lineWidth=a/2,w.strokeStyle="rgba("+r.c+","+(.2+a)+")",w.moveTo(n.x,n.y),w.lineTo(e.x,e.y),w.stroke()));c.splice(c.indexOf(n),1)}),y(d)}var u,l,c,m=document.createElement("canvas"),r={l:c=(x=o("script")).length,z:i(x=x[c-1],"zIndex",-1),o:i(x,"opacity",.5),c:i(x,"color","0,0,0"),n:i(x,"count",99)},x="c_n"+r.l,w=m.getContext("2d"),y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/45)},s=Math.random,f={x:null,y:null,max:2e4};m.id=x,m.style.cssText="position:fixed;top:0;left:0;z-index:"+r.z+";opacity:"+r.o,o("body")[0].appendChild(m),a(),window.onresize=a,window.onmousemove=function(n){n=n||window.event,f.x=n.clientX,f.y=n.clientY},window.onmouseout=function(){f.x=null,f.y=null};for(var h=[],g=0;g<r.n;g++){var b=s()*u,v=s()*l,p=2*s()-1,A=2*s()-1;h.push({x:b,y:v,xa:p,ya:A,max:6e3})}setTimeout(function(){d()},100)}();