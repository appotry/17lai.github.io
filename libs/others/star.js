"use strict";!function(){var i=["#D61C59","#E7D84B","#1B8798"],e=window.innerWidth,n=(window.innerHeight,{x:e/2,y:e/2}),s=[];function t(t){e=window.innerWidth,window.innerHeight}function o(t){if(0<t.touches.length)for(var e=0;e<t.touches.length;e++)a(t.touches[e].clientX,t.touches[e].clientY,i[Math.floor(Math.random()*i.length)])}function h(t){n.x=t.clientX,n.y=t.clientY,a(n.x,n.y,i[Math.floor(Math.random()*i.length)])}function a(t,e,i){var n=new r;n.init(t,e,i),s.push(n)}function l(){requestAnimationFrame(l);for(var t=0;t<s.length;t++)s[t].update();for(t=s.length-1;0<=t;t--)s[t].lifeSpan<0&&(s[t].die(),s.splice(t,1))}function r(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,e,i){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:e-20},this.initialStyles.color=i,console.log(i),this.element=document.createElement("span"),this.element.innerHTML=this.character;var n,s=this.element,o=this.initialStyles;for(n in o)s.style[n]=o[n];this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}document.addEventListener("mousemove",h,!!supportsPassive&&{passive:!0}),document.addEventListener("touchmove",o,!!supportsPassive&&{passive:!0}),document.addEventListener("touchstart",o,!!supportsPassive&&{passive:!0}),window.addEventListener("resize",t),l()}();