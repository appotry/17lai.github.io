function countUp(t,e,o,i,n,r){for(var s=0,a=["webkit","moz","ms","o"],l=0;l<a.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[a[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[l]+"CancelAnimationFrame"]||window[a[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),o=Math.max(0,16-(e-s)),i=window.setTimeout(function(){t(e+o)},o);return s=e+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options=r||{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},""==this.options.separator&&(this.options.useGrouping=!1),null==this.options.prefix&&(this.options.prefix=""),null==this.options.suffix&&(this.options.suffix="");var c=this;this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(e),this.endVal=Number(o),this.countDown=this.startVal>this.endVal,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=this.startVal,this.rAF=null,this.decimals=Math.max(0,i||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*n||2e3,this.version=function(){return"1.3.1"},this.printValue=function(t){t=isNaN(t)?"--":c.formatNumber(t);"INPUT"==c.d.tagName?this.d.value=t:this.d.innerHTML=t},this.easeOutExpo=function(t,e,o,i){return 1024*o*(1-Math.pow(2,-10*t/i))/1023+e},this.count=function(t){null===c.startTime&&(c.startTime=t);var e,t=(c.timestamp=t)-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?(e=c.easeOutExpo(t,0,c.startVal-c.endVal,c.duration),c.frameVal=c.startVal-e):c.frameVal=c.easeOutExpo(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?(e=(c.startVal-c.endVal)*(t/c.duration),c.frameVal=c.startVal-e):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.frameVal=c.countDown?c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):null!=c.callback&&c.callback()},this.start=function(t){return c.callback=t,isNaN(c.endVal)||isNaN(c.startVal)?(console.log("countUp error: startVal or endVal is not a number"),c.printValue()):c.rAF=requestAnimationFrame(c.count),!1},this.stop=function(){cancelAnimationFrame(c.rAF)},this.reset=function(){c.startTime=null,c.startVal=e,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},this.resume=function(){c.stop(),c.startTime=null,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)},this.formatNumber=function(t){var e,o;if(t=t.toFixed(c.decimals),e=(t=(t+="").split("."))[0],t=1<t.length?c.options.decimal+t[1]:"",o=/(\d+)(\d{3})/,c.options.useGrouping)for(;o.test(e);)e=e.replace(o,"$1"+c.options.separator+"$2");return c.options.prefix+e+t+c.options.suffix},c.printValue(c.startVal)}!function(f){var m,t={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},w=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],g=f('<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>').data("autosize",!0)[0];(g.style.lineHeight="99px")===f(g).css("lineHeight")&&w.push("lineHeight"),g.style.lineHeight="",f.fn.autosize=function(h){return this.length?(h=f.extend({},t,h||{}),g.parentNode!==document.body&&f(document.body).append(g),this.each(function(){function i(){var o,i=!!window.getComputedStyle&&window.getComputedStyle(s,null);i?(0!==(o=s.getBoundingClientRect().width)&&"number"==typeof o||(o=parseInt(i.width,10)),f.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(t,e){o-=parseInt(i[e],10)})):o=a.width(),g.style.width=Math.max(o,0)+"px"}function e(){var t,e,o;m!==s?(o={},m=s,g.className=h.className,g.id=h.id,n=parseInt(a.css("maxHeight"),10),f.each(w,function(t,e){o[e]=a.css(e)}),f(g).css(o).attr("wrap",a.attr("wrap")),i(),window.chrome&&(e=s.style.width,s.style.width="0px",s.offsetWidth,s.style.width=e)):i(),g.value=!s.value&&h.placeholder?(a.attr("placeholder")||"")+h.append:s.value+h.append,g.style.overflowY=s.style.overflowY,t=parseInt(s.style.height,10),g.scrollTop=0,g.scrollTop=9e4,e=g.scrollTop,n&&n<e?(s.style.overflowY="scroll",e=n):(s.style.overflowY="hidden",e<r&&(e=r)),t!==(e+=l)&&(s.style.height=e+"px",c&&h.callback.call(s,s))}function t(){clearTimeout(o),o=setTimeout(function(){var t=a.width();t!==p&&(p=t,e())},parseInt(h.resizeDelay,10))}var n,r,o,s=this,a=f(s),l=0,c=f.isFunction(h.callback),u={height:s.style.height,overflow:s.style.overflow,overflowY:s.style.overflowY,wordWrap:s.style.wordWrap,resize:s.style.resize},p=a.width(),d=a.css("resize");a.data("autosize")||(a.data("autosize",!0),"border-box"!==a.css("box-sizing")&&"border-box"!==a.css("-moz-box-sizing")&&"border-box"!==a.css("-webkit-box-sizing")||(l=a.outerHeight()-a.height()),r=Math.max(parseInt(a.css("minHeight"),10)-l||0,a.height()),a.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===d?a.css("resize","none"):"both"===d&&a.css("resize","horizontal"),"onpropertychange"in s?"oninput"in s?a.on("input.autosize keyup.autosize",e):a.on("propertychange.autosize",function(){"value"===event.propertyName&&e()}):a.on("input.autosize",e),!1!==h.resizeDelay&&f(window).on("resize.autosize",t),a.on("autosize.resize",e),a.on("autosize.resizeIncludeStyle",function(){m=null,e()}),a.on("autosize.destroy",function(){m=null,clearTimeout(o),f(window).off("resize",t),a.off("autosize").off(".autosize").css(u).removeData("autosize")}),e())})):this}}(window.jQuery||window.$),function(t){var e;"undefined"!=typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?(e=require("jquery"),module.exports=t(e)):window.scrollMonitor=t(jQuery)}(function(d){function t(){return window.innerHeight||document.documentElement.clientHeight}function e(){if(f.viewportTop=c.scrollTop(),f.viewportBottom=f.viewportTop+f.viewportHeight,f.documentHeight=u.height(),f.documentHeight!==r){for(s=p.length;s--;)p[s].recalculateLocation();r=f.documentHeight}}function o(){f.viewportHeight=t(),e(),i()}function i(){for(l=p.length;l--;)p[l].update();for(l=p.length;l--;)p[l].triggerCallbacks()}function n(t,e){function n(t){if(0!==t.length)for(l=t.length;l--;)(c=t[l]).callback.call(o,h),c.isOne&&t.splice(l,1)}var o=this;this.watchItem=t,this.offsets=e?e===+e?{top:e,bottom:e}:d.extend({},k,e):k,this.callbacks={};for(var i,r,s,a,l,c,u=0,p=x.length;u<p;u++)o.callbacks[x[u]]=[];this.locked=!1,this.triggerCallbacks=function(){switch(this.isInViewport&&!i&&n(this.callbacks[w]),this.isFullyInViewport&&!r&&n(this.callbacks[g]),this.isAboveViewport!==s&&this.isBelowViewport!==a&&(n(this.callbacks[m]),r||this.isFullyInViewport||(n(this.callbacks[g]),n(this.callbacks[b])),i||this.isInViewport||(n(this.callbacks[w]),n(this.callbacks[v]))),!this.isFullyInViewport&&r&&n(this.callbacks[b]),!this.isInViewport&&i&&n(this.callbacks[v]),this.isInViewport!==i&&n(this.callbacks[m]),!0){case i!==this.isInViewport:case r!==this.isFullyInViewport:case s!==this.isAboveViewport:case a!==this.isBelowViewport:n(this.callbacks[V])}i=this.isInViewport,r=this.isFullyInViewport,s=this.isAboveViewport,a=this.isBelowViewport},this.recalculateLocation=function(){var t,e,o,i;this.locked||(t=this.top,e=this.bottom,this.watchItem.nodeName?("none"===(o=this.watchItem.style.display)&&(this.watchItem.style.display=""),i=d(this.watchItem).offset(),this.top=i.top,this.bottom=i.top+this.watchItem.offsetHeight,"none"===o&&(this.watchItem.style.display=o)):this.watchItem===+this.watchItem?0<this.watchItem?this.top=this.bottom=this.watchItem:this.top=this.bottom=f.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom),this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||n(this.callbacks[y]))},this.recalculateLocation(),this.update(),i=this.isInViewport,r=this.isFullyInViewport,s=this.isAboveViewport,a=this.isBelowViewport}var r,h,s,a,l,f={},c=d(window),u=d(document),p=[],m="visibilityChange",w="enterViewport",g="fullyEnterViewport",v="exitViewport",b="partiallyExitViewport",y="locationChange",V="stateChange",x=[m,w,g,v,b,y,V],k={top:0,bottom:0};f.viewportTop,f.viewportBottom,f.documentHeight,f.viewportHeight=t(),n.prototype={on:function(t,e,o){switch(!0){case t===m&&!this.isInViewport&&this.isAboveViewport:case t===w&&this.isInViewport:case t===g&&this.isFullyInViewport:case t===v&&this.isAboveViewport&&!this.isInViewport:case t===b&&this.isAboveViewport:if(e(),o)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+x.join(", "));this.callbacks[t].push({callback:e,isOne:o})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+x.join(", "));for(var o,i=0;o=this.callbacks[t][i];i++)if(o.callback===e){this.callbacks[t].splice(i,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<f.viewportTop,this.isBelowViewport=this.bottom>f.viewportBottom,this.isInViewport=this.top<=f.viewportBottom&&this.bottom>=f.viewportTop,this.isFullyInViewport=this.top>=f.viewportTop&&this.bottom<=f.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=p.indexOf(this);p.splice(t,1);for(var e=0,o=x.length;e<o;e++)this.callbacks[x[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var T=0,I=x.length;T<I;T++){var S=x[T];n.prototype[S]=function(o){return function(t,e){this.on.call(this,o,t,e)}}(S)}try{e()}catch(t){d(e)}return c.on("scroll",function(t){h=t,e(),i()}),c.on("resize",function(){clearTimeout(a),a=setTimeout(o,100)}),f.beget=f.create=function(t,e){e=new n(t=(t="string"==typeof t?d(t)[0]:t)instanceof d?t[0]:t,e);return p.push(e),e.update(),e},f.update=function(){h=null,e(),i()},f.recalculateLocations=function(){f.documentHeight=0,f.update()},f}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)}(function(K){"use strict";function $(t){return"string"==typeof t?parseInt(t,10):~~t}var Q={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},G=0,J="WebkitAppearance"in document.documentElement.style;K.fn.perfectScrollbar=function(R,U){return this.each(function(){function e(t){return g.minScrollbarLength&&(t=Math.max(t,g.minScrollbarLength)),t=g.maxScrollbarLength?Math.min(t,g.maxScrollbarLength):t}function w(){var t;v.removeClass("ps-active-x"),v.removeClass("ps-active-y"),y=g.includePadding?v.innerWidth():v.width(),V=g.includePadding?v.innerHeight():v.height(),x=v.prop("scrollWidth"),k=v.prop("scrollHeight"),!g.suppressScrollX&&x>y+g.scrollXMarginOffset?(l=!0,c=e($((p=y-M)*y/x)),u=$(v.scrollLeft()*(p-c)/(x-y))):(l=!1,u=c=0,v.scrollLeft(0)),!g.suppressScrollY&&k>V+g.scrollYMarginOffset?(d=!0,h=e($((m=V-O)*V/k)),f=$(v.scrollTop()*(m-h)/(k-V))):(d=!1,f=h=0,v.scrollTop(0)),p-c<=u&&(u=p-c),m-h<=f&&(f=m-h),(t={width:p}).left=S?v.scrollLeft()+y-x:v.scrollLeft(),E?t.bottom=L-v.scrollTop():t.top=F+v.scrollTop(),_.css(t),t={top:v.scrollTop(),height:m},j?t.right=S?x-v.scrollLeft()-H-Y.outerWidth():H-v.scrollLeft():t.left=S?v.scrollLeft()+2*y-x-N-Y.outerWidth():N+v.scrollLeft(),P.css(t),D.css({left:u,width:c-A}),Y.css({top:f,height:h-W}),l&&v.addClass("ps-active-x"),d&&v.addClass("ps-active-y")}function t(){function e(t){var e,o;e=i,o=t.pageX-n,e+=o,o=y-c,e=$((u=e<0?0:o<e?o:e)*(x-y)/(y-c)),v.scrollLeft(e),w(),t.stopPropagation(),t.preventDefault()}function o(){_.removeClass("in-scrolling"),K(z).unbind(C("mousemove"),e)}var i,n;D.bind(C("mousedown"),function(t){n=t.pageX,i=D.position().left,_.addClass("in-scrolling"),K(z).bind(C("mousemove"),e),K(z).one(C("mouseup"),o),t.stopPropagation(),t.preventDefault()}),i=n=null}function o(){function e(t){var e,o;e=i,o=t.pageY-n,e+=o,o=V-h,e=$((f=e<0?0:o<e?o:e)*(k-V)/(V-h)),v.scrollTop(e),w(),t.stopPropagation(),t.preventDefault()}function o(){P.removeClass("in-scrolling"),K(z).unbind(C("mousemove"),e)}var i,n;Y.bind(C("mousedown"),function(t){n=t.pageY,i=Y.position().top,P.addClass("in-scrolling"),K(z).bind(C("mousemove"),e),K(z).one(C("mouseup"),o),t.stopPropagation(),t.preventDefault()}),i=n=null}function r(t,e){var o=v.scrollTop();if(0===t){if(!d)return!1;if(0===o&&0<e||k-V<=o&&e<0)return!g.wheelPropagation}o=v.scrollLeft();if(0===e){if(!l)return!1;if(0===o&&t<0||x-y<=o&&0<t)return!g.wheelPropagation}return!0}function i(){function t(t){var e,o,i;!J&&0<v.find("select:focus").length||(o=(e=t).originalEvent.deltaX,i=-1*e.originalEvent.deltaY,void 0!==o&&void 0!==i||(o=-1*e.originalEvent.wheelDeltaX/6,i=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(o*=10,i*=10),o!=o&&i!=i&&(o=0,i=e.originalEvent.wheelDelta),i=(o=[o,i])[0],o=o[1],n=!1,g.useBothWheelAxes?d&&!l?(o?v.scrollTop(v.scrollTop()-o*g.wheelSpeed):v.scrollTop(v.scrollTop()+i*g.wheelSpeed),n=!0):l&&!d&&(i?v.scrollLeft(v.scrollLeft()+i*g.wheelSpeed):v.scrollLeft(v.scrollLeft()-o*g.wheelSpeed),n=!0):(v.scrollTop(v.scrollTop()-o*g.wheelSpeed),v.scrollLeft(v.scrollLeft()+i*g.wheelSpeed)),w(),(n=n||r(i,o))&&(t.stopPropagation(),t.preventDefault()))}var n=!1;void 0!==window.onwheel?v.bind(C("wheel"),t):void 0!==window.onmousewheel&&v.bind(C("mousewheel"),t)}function n(){function s(){a&&(clearInterval(a),a=null),_.removeClass("in-scrolling"),P.removeClass("in-scrolling")}var a=null,l={top:0,left:0},c=!1;K(z).bind(C("selectionchange"),function(){var t;K.contains(v[0],0===(t=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0}).rangeCount?null:t.getRangeAt(0).commonAncestorContainer)?c=!0:(c=!1,s())}),K(window).bind(C("mouseup"),function(){c&&(c=!1,s())}),K(window).bind(C("mousemove"),function(t){var e,o,i,n,r;c&&(e=t.pageX,o=t.pageY,i=(r=v.offset()).left,n=r.left+v.outerWidth(),t=r.top,r=r.top+v.outerHeight(),e<i+3?(l.left=-5,_.addClass("in-scrolling")):n-3<e?(l.left=5,_.addClass("in-scrolling")):l.left=0,o<t+3?(l.top=t+3-o<5?-5:-20,P.addClass("in-scrolling")):r-3<o?(l.top=o-r+3<5?5:20,P.addClass("in-scrolling")):l.top=0,0===l.top&&0===l.left?s():a=a||setInterval(function(){return b()?(v.scrollTop(v.scrollTop()+l.top),v.scrollLeft(v.scrollLeft()+l.left),void w()):void clearInterval(a)},50))})}function s(t,e){function r(t,e){v.scrollTop(v.scrollTop()-e),v.scrollLeft(v.scrollLeft()-t),w()}function o(){f=!0}function i(){f=!1}function s(t){return t.originalEvent.targetTouches?t.originalEvent.targetTouches[0]:t.originalEvent}function a(t){t=t.originalEvent;return t.targetTouches&&1===t.targetTouches.length||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function n(t){var e;a(t)&&(m=!0,e=s(t),u.pageX=e.pageX,u.pageY=e.pageY,p=(new Date).getTime(),null!==h&&clearInterval(h),t.stopPropagation())}function l(t){var e,o,i,n;!f&&m&&a(t)&&(r(e=(n={pageX:(i=s(t)).pageX,pageY:i.pageY}).pageX-u.pageX,o=n.pageY-u.pageY),u=n,0<(n=(i=(new Date).getTime())-p)&&(d.x=e/n,d.y=o/n,p=i),function(t,e){var o=v.scrollTop(),i=v.scrollLeft(),n=Math.abs(t),r=Math.abs(e);if(n<r){if(e<0&&o===k-V||0<e&&0===o)return!g.swipePropagation}else if(r<n&&(t<0&&i===x-y||0<t&&0===i))return!g.swipePropagation;return 1}(e,o)&&(t.stopPropagation(),t.preventDefault()))}function c(){!f&&m&&(m=!1,clearInterval(h),h=setInterval(function(){return!b()||Math.abs(d.x)<.01&&Math.abs(d.y)<.01?void clearInterval(h):(r(30*d.x,30*d.y),d.x*=.8,void(d.y*=.8))},10))}var u={},p=0,d={},h=null,f=!1,m=!1;t&&(K(window).bind(C("touchstart"),o),K(window).bind(C("touchend"),i),v.bind(C("touchstart"),n),v.bind(C("touchmove"),l),v.bind(C("touchend"),c)),e&&(window.PointerEvent?(K(window).bind(C("pointerdown"),o),K(window).bind(C("pointerup"),i),v.bind(C("pointerdown"),n),v.bind(C("pointermove"),l),v.bind(C("pointerup"),c)):window.MSPointerEvent&&(K(window).bind(C("MSPointerDown"),o),K(window).bind(C("MSPointerUp"),i),v.bind(C("MSPointerDown"),n),v.bind(C("MSPointerMove"),l),v.bind(C("MSPointerUp"),c)))}function a(){v.unbind(C()),K(window).unbind(C()),K(z).unbind(C()),v.data("perfect-scrollbar",null),v.data("perfect-scrollbar-update",null),v.data("perfect-scrollbar-destroy",null),D.remove(),Y.remove(),_.remove(),P.remove(),v=_=P=D=Y=l=d=y=V=x=k=c=u=L=E=F=h=f=H=j=N=S=C=null}var g=K.extend(!0,{},Q),v=K(this),b=function(){return!!v};if("object"==typeof R?K.extend(!0,g,R):U=R,"update"===U)return v.data("perfect-scrollbar-update")&&v.data("perfect-scrollbar-update")(),v;if("destroy"===U)return v.data("perfect-scrollbar-destroy")&&v.data("perfect-scrollbar-destroy")(),v;if(v.data("perfect-scrollbar"))return v.data("perfect-scrollbar");v.addClass("ps-container");var y,V,x,k,l,c,u,p,d,h,f,m,T,I,S="rtl"===v.css("direction"),C=(T=G++,function(t){var e=".perfect-scrollbar-"+T;return void 0===t?e:t+e}),z=this.ownerDocument||document,_=K("<div class='ps-scrollbar-x-rail'>").appendTo(v),D=K("<div class='ps-scrollbar-x'>").appendTo(_),L=$(_.css("bottom")),E=L==L,F=E?null:$(_.css("top")),A=$(_.css("borderLeftWidth"))+$(_.css("borderRightWidth")),M=$(_.css("marginLeft"))+$(_.css("marginRight")),P=K("<div class='ps-scrollbar-y-rail'>").appendTo(v),Y=K("<div class='ps-scrollbar-y'>").appendTo(P),H=$(P.css("right")),j=H==H,N=j?null:$(P.css("left")),W=$(P.css("borderTopWidth"))+$(P.css("borderBottomWidth")),O=$(P.css("marginTop"))+$(P.css("marginBottom")),X="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,B=null!==window.navigator.msMaxTouchPoints;return w(),v.bind(C("scroll"),function(){w()}),t(),o(),Y.bind(C("click"),q),P.bind(C("click"),function(t){var e=$(h/2),e=(t.pageY-P.offset().top-e)/(V-h);e<0?e=0:1<e&&(e=1),v.scrollTop((k-V)*e)}),D.bind(C("click"),q),_.bind(C("click"),function(t){var e=$(c/2),e=(t.pageX-_.offset().left-e)/(y-c);e<0?e=0:1<e&&(e=1),v.scrollLeft((x-y)*e)}),n(),i(),(X||B)&&s(X,B),g.useKeyboard&&(I=!1,v.bind(C("mouseenter"),function(){I=!0}),v.bind(C("mouseleave"),function(){I=!1}),K(z).bind(C("keydown"),function(t){if((!t.isDefaultPrevented||!t.isDefaultPrevented())&&I){for(var e=document.activeElement||z.activeElement;e.shadowRoot;)e=e.shadowRoot.activeElement;if(!K(e).is(":input,[contenteditable]")){var o=0,i=0;switch(t.which){case 37:o=-30;break;case 38:i=30;break;case 39:o=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=t.ctrlKey?-k:-V;break;case 36:i=t.ctrlKey?v.scrollTop():V;break;default:return}v.scrollTop(v.scrollTop()-i),v.scrollLeft(v.scrollLeft()+o),r(o,i)&&t.preventDefault()}}})),v.data("perfect-scrollbar",v),v.data("perfect-scrollbar-update",w),v.data("perfect-scrollbar-destroy",a),v;function q(t){t.stopPropagation()}})}}),function(p){p.fn.hoverIntent=function(t,e,o){var i,n,r,s,a={interval:100,sensitivity:6,timeout:0},a="object"==typeof t?p.extend(a,t):p.isFunction(e)?p.extend(a,{over:t,out:e,selector:o}):p.extend(a,{over:t,out:t,selector:e}),l=function(t){i=t.pageX,n=t.pageY},c=function(t,e){if(e.hoverIntent_t=clearTimeout(e.hoverIntent_t),Math.sqrt((r-i)*(r-i)+(s-n)*(s-n))<a.sensitivity)return p(e).off("mousemove.hoverIntent",l),e.hoverIntent_s=!0,a.over.apply(e,[t]);r=i,s=n,e.hoverIntent_t=setTimeout(function(){c(t,e)},a.interval)},u=function(t,e){return e.hoverIntent_t=clearTimeout(e.hoverIntent_t),e.hoverIntent_s=!1,a.out.apply(e,[t])},e=function(t){var e=p.extend({},t),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"===t.type?(r=e.pageX,s=e.pageY,p(o).on("mousemove.hoverIntent",l),o.hoverIntent_s||(o.hoverIntent_t=setTimeout(function(){c(e,o)},a.interval))):(p(o).off("mousemove.hoverIntent",l),o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){u(e,o)},a.timeout)))};return this.on({"mouseenter.hoverIntent":e,"mouseleave.hoverIntent":e},a.selector)}}(jQuery),function(n){"use strict";function r(t,e,o){return 1===arguments.length?r.get(t):r.set(t,e,o)}r._document=document,r._navigator=navigator,r.defaults={path:"/"},r.get=function(t){return r._cachedDocumentCookie!==r._document.cookie&&r._renewCache(),r._cache[t]},r.set=function(t,e,o){return(o=r._getExtendedOptions(o)).expires=r._getExpiresDate(e===n?-1:o.expires),r._document.cookie=r._generateCookieString(t,e,o),r},r.expire=function(t,e){return r.set(t,n,e)},r._getExtendedOptions=function(t){return{path:t&&t.path||r.defaults.path,domain:t&&t.domain||r.defaults.domain,expires:t&&t.expires||r.defaults.expires,secure:(t&&t.secure!==n?t:r.defaults).secure}},r._isValidDate=function(t){return"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t.getTime())},r._getExpiresDate=function(t,e){switch(e=e||new Date,typeof t){case"number":t=new Date(e.getTime()+1e3*t);break;case"string":t=new Date(t)}if(t&&!r._isValidDate(t))throw Error("`expires` parameter cannot be converted to a valid Date instance");return t},r._generateCookieString=function(t,e,o){return t=(t=(t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(e=(e+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent))+((o=o||{}).path?";path="+o.path:""),t+=o.domain?";domain="+o.domain:"",(t+=o.expires?";expires="+o.expires.toUTCString():"")+(o.secure?";secure":"")},r._getCookieObjectFromString=function(t){var e={};t=t?t.split("; "):[];for(var o=0;o<t.length;o++){var i=r._getKeyValuePairFromCookieString(t[o]);e[i.key]===n&&(e[i.key]=i.value)}return e},r._getKeyValuePairFromCookieString=function(t){var e=(e=t.indexOf("="))<0?t.length:e;return{key:decodeURIComponent(t.substr(0,e)),value:decodeURIComponent(t.substr(e+1))}},r._renewCache=function(){r._cache=r._getCookieObjectFromString(r._document.cookie),r._cachedDocumentCookie=r._document.cookie},r.enabled=(r._areEnabled=function(){var t="1"===r.set("cookies.js",1).get("cookies.js");return r.expire("cookies.js"),t})(),"function"==typeof define&&define.amd?define(function(){return r}):"undefined"!=typeof exports?(exports="undefined"!=typeof module&&module.exports?module.exports=r:exports).Cookies=r:window.Cookies=r}();