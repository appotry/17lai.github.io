var __assign=function(){__assign=Object.assign||function e(t){for(var o,i=1,s=arguments.length;i<s;i++){o=arguments[i];for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a))t[a]=o[a]}return t};return __assign.apply(this,arguments)};var zoomSettings={scale:1,zoom:true,infiniteZoom:true,actualSize:true,showZoomInOutIcons:false,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}};var lGEvents={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"};var ZOOM_TRANSITION_DURATION=500;var Zoom=function(){function e(e,t){this.core=e;this.$LG=t;this.settings=__assign(__assign({},zoomSettings),this.core.settings);return this}e.prototype.buildTemplates=function(){var e=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings["zoomIn"]+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings["zoomIn"]+'" class="lg-zoom-out lg-icon"></button>':"";if(this.settings.actualSize){e+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings["viewActualSize"]+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'}this.core.outer.addClass("lg-use-transition-for-zoom");this.core.$toolbar.first().append(e)};e.prototype.enableZoom=function(e){var t=this;var o=this.settings.enableZoomAfter+e.detail.delay;if(this.$LG("body").first().hasClass("lg-from-hash")&&e.detail.delay){o=0}else{this.$LG("body").first().removeClass("lg-from-hash")}this.zoomableTimeout=setTimeout(function(){if(!t.isImageSlide(t.core.index)){return}t.core.getSlideItem(e.detail.index).addClass("lg-zoomable");if(e.detail.index===t.core.index){t.setZoomEssentials()}},o+30)};e.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on(lGEvents.slideItemLoad+".zoom",this.enableZoom.bind(this))};e.prototype.getDragCords=function(e){return{x:e.pageX,y:e.pageY}};e.prototype.getSwipeCords=function(e){var t=e.touches[0].pageX;var o=e.touches[0].pageY;return{x:t,y:o}};e.prototype.getDragAllowedAxises=function(e,t){var o=this.core.getSlideItem(this.core.index).find(".lg-image").first().get();var i=0;var s=0;var a=o.getBoundingClientRect();if(e){i=o.offsetHeight*e;s=o.offsetWidth*e}else if(t){i=a.height+t*a.height;s=a.width+t*a.width}else{i=a.height;s=a.width}var r=i>this.containerRect.height;var n=s>this.containerRect.width;return{allowX:n,allowY:r}};e.prototype.setZoomEssentials=function(){this.containerRect=this.core.$content.get().getBoundingClientRect()};e.prototype.zoomImage=function(e,t,o,i){if(Math.abs(t)<=0)return;var s=this.containerRect.width/2+this.containerRect.left;var a=this.containerRect.height/2+this.containerRect.top+this.scrollTop;var r;var n;if(e===1){this.positionChanged=false}var l=this.getDragAllowedAxises(0,t);var g=l.allowY,c=l.allowX;if(this.positionChanged){r=this.left/(this.scale-t);n=this.top/(this.scale-t);this.pageX=s-r;this.pageY=a-n;this.positionChanged=false}var h=this.getPossibleSwipeDragCords(t);var m;var u;var f=s-this.pageX;var d=a-this.pageY;if(e-t>1){var p=(e-t)/Math.abs(t);f=(t<0?-f:f)+this.left*(p+(t<0?-1:1));d=(t<0?-d:d)+this.top*(p+(t<0?-1:1));m=f/p;u=d/p}else{var p=(e-t)*t;m=f*p;u=d*p}if(o){if(c){if(this.isBeyondPossibleLeft(m,h.minX)){m=h.minX}else if(this.isBeyondPossibleRight(m,h.maxX)){m=h.maxX}}else{if(e>1){if(m<h.minX){m=h.minX}else if(m>h.maxX){m=h.maxX}}}if(g){if(this.isBeyondPossibleTop(u,h.minY)){u=h.minY}else if(this.isBeyondPossibleBottom(u,h.maxY)){u=h.maxY}}else{if(e>1){if(u<h.minY){u=h.minY}else if(u>h.maxY){u=h.maxY}}}}this.setZoomStyles({x:m,y:u,scale:e});this.left=m;this.top=u;if(i){this.setZoomImageSize()}};e.prototype.resetImageTranslate=function(e){if(!this.isImageSlide(e)){return}var t=this.core.getSlideItem(e).find(".lg-image").first();this.imageReset=false;t.removeClass("reset-transition reset-transition-y reset-transition-x");this.core.outer.removeClass("lg-actual-size");t.css("width","auto").css("height","auto");setTimeout(function(){t.removeClass("no-transition")},10)};e.prototype.setZoomImageSize=function(){var o=this;var i=this.core.getSlideItem(this.core.index).find(".lg-image").first();setTimeout(function(){var e=o.getCurrentImageActualSizeScale();if(o.scale>=e){i.addClass("no-transition");o.imageReset=true}},ZOOM_TRANSITION_DURATION);setTimeout(function(){var e=o.getCurrentImageActualSizeScale();if(o.scale>=e){var t=o.getDragAllowedAxises(o.scale);i.css("width",i.get().naturalWidth+"px").css("height",i.get().naturalHeight+"px");o.core.outer.addClass("lg-actual-size");if(t.allowX&&t.allowY){i.addClass("reset-transition")}else if(t.allowX&&!t.allowY){i.addClass("reset-transition-x")}else if(!t.allowX&&t.allowY){i.addClass("reset-transition-y")}}},ZOOM_TRANSITION_DURATION+50)};e.prototype.setZoomStyles=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();var o=this.core.getSlideItem(this.core.index).find(".lg-image").first();var i=this.core.outer.find(".lg-current .lg-dummy-img").first();this.scale=e.scale;o.css("transform","scale3d("+e.scale+", "+e.scale+", 1)");i.css("transform","scale3d("+e.scale+", "+e.scale+", 1)");var s="translate3d("+e.x+"px, "+e.y+"px, 0)";t.css("transform",s)};e.prototype.setActualSize=function(e,o){var i=this;if(this.zoomInProgress){return}this.zoomInProgress=true;var s=this.core.galleryItems[this.core.index];this.resetImageTranslate(e);setTimeout(function(){if(!s.src||i.core.outer.hasClass("lg-first-slide-loading")){return}var e=i.getCurrentImageActualSizeScale();var t=i.scale;if(i.core.outer.hasClass("lg-zoomed")){i.scale=1}else{i.scale=i.getScale(e)}i.setPageCords(o);i.beginZoom(i.scale);i.zoomImage(i.scale,i.scale-t,true,true)},50);setTimeout(function(){i.core.outer.removeClass("lg-grabbing").addClass("lg-grab")},60);setTimeout(function(){i.zoomInProgress=false},ZOOM_TRANSITION_DURATION+110)};e.prototype.getNaturalWidth=function(e){var t=this.core.getSlideItem(e).find(".lg-image").first();var o=this.core.galleryItems[e].width;return o?parseFloat(o):t.get().naturalWidth};e.prototype.getActualSizeScale=function(e,t){var o;var i;if(e>=t){o=e/t;i=o||2}else{i=1}return i};e.prototype.getCurrentImageActualSizeScale=function(){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first();var t=e.get().offsetWidth;var o=this.getNaturalWidth(this.core.index)||t;return this.getActualSizeScale(o,t)};e.prototype.getPageCords=function(e){var t={};if(e){t.x=e.pageX||e.touches[0].pageX;t.y=e.pageY||e.touches[0].pageY}else{var o=this.core.$content.get().getBoundingClientRect();t.x=o.width/2+o.left;t.y=o.height/2+this.scrollTop+o.top}return t};e.prototype.setPageCords=function(e){var t=this.getPageCords(e);this.pageX=t.x;this.pageY=t.y};e.prototype.manageActualPixelClassNames=function(){var e=this.core.getElementById("lg-actual-size");e.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)};e.prototype.beginZoom=function(e){this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");if(e>1){this.core.outer.addClass("lg-zoomed");this.manageActualPixelClassNames()}else{this.resetZoom()}return e>1};e.prototype.getScale=function(e){var t=this.getCurrentImageActualSizeScale();if(e<1){e=1}else if(e>t){e=t}return e};e.prototype.init=function(){var o=this;if(!this.settings.zoom){return}this.buildTemplates();this.enableZoomOnSlideItemLoad();var i=null;this.core.outer.on("dblclick.lg",function(e){if(!o.$LG(e.target).hasClass("lg-image")){return}o.setActualSize(o.core.index,e)});this.core.outer.on("touchstart.lg",function(e){var t=o.$LG(e.target);if(e.touches.length===1&&t.hasClass("lg-image")){if(!i){i=setTimeout(function(){i=null},300)}else{clearTimeout(i);i=null;e.preventDefault();o.setActualSize(o.core.index,e)}}});this.core.LGel.on(lGEvents.containerResize+".zoom "+lGEvents.rotateRight+".zoom "+lGEvents.rotateLeft+".zoom "+lGEvents.flipHorizontal+".zoom "+lGEvents.flipVertical+".zoom",function(){if(!o.core.lgOpened||!o.isImageSlide(o.core.index)||o.core.touchAction){return}var e=o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first();o.top=0;o.left=0;o.setZoomEssentials();o.setZoomSwipeStyles(e,{x:0,y:0});o.positionChanged=true});this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,function(){if(!o.core.lgOpened)return;o.scrollTop=o.$LG(window).scrollTop()});this.core.getElementById("lg-zoom-out").on("click.lg",function(){if(!o.isImageSlide(o.core.index)){return}var e=0;if(o.imageReset){o.resetImageTranslate(o.core.index);e=50}setTimeout(function(){var e=o.scale-o.settings.scale;if(e<1){e=1}o.beginZoom(e);o.zoomImage(e,-o.settings.scale,true,!o.settings.infiniteZoom)},e)});this.core.getElementById("lg-zoom-in").on("click.lg",function(){o.zoomIn()});this.core.getElementById("lg-actual-size").on("click.lg",function(){o.setActualSize(o.core.index)});this.core.LGel.on(lGEvents.beforeOpen+".zoom",function(){o.core.outer.find(".lg-item").removeClass("lg-zoomable")});this.core.LGel.on(lGEvents.afterOpen+".zoom",function(){o.scrollTop=o.$LG(window).scrollTop();o.pageX=o.core.outer.width()/2;o.pageY=o.core.outer.height()/2+o.scrollTop;o.scale=1});this.core.LGel.on(lGEvents.afterSlide+".zoom",function(e){var t=e.detail.prevIndex;o.scale=1;o.positionChanged=false;o.zoomInProgress=false;o.resetZoom(t);o.resetImageTranslate(t);if(o.isImageSlide(o.core.index)){o.setZoomEssentials()}});this.zoomDrag();this.pinchZoom();this.zoomSwipe();this.zoomableTimeout=false;this.positionChanged=false;this.zoomInProgress=false};e.prototype.zoomIn=function(){if(!this.isImageSlide(this.core.index)){return}var e=this.scale+this.settings.scale;if(!this.settings.infiniteZoom){e=this.getScale(e)}this.beginZoom(e);this.zoomImage(e,Math.min(this.settings.scale,e-this.scale),true,!this.settings.infiniteZoom)};e.prototype.resetZoom=function(e){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var t=this.core.getElementById("lg-actual-size");var o=this.core.getSlideItem(e!==undefined?e:this.core.index);t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);o.find(".lg-img-wrap").first().removeAttr("style");o.find(".lg-image").first().removeAttr("style");this.scale=1;this.left=0;this.top=0;this.setPageCords()};e.prototype.getTouchDistance=function(e){return Math.sqrt((e.touches[0].pageX-e.touches[1].pageX)*(e.touches[0].pageX-e.touches[1].pageX)+(e.touches[0].pageY-e.touches[1].pageY)*(e.touches[0].pageY-e.touches[1].pageY))};e.prototype.pinchZoom=function(){var a=this;var r=0;var n=false;var l=1;var g=0;var c=this.core.getSlideItem(this.core.index);this.core.outer.on("touchstart.lg",function(e){c=a.core.getSlideItem(a.core.index);if(!a.isImageSlide(a.core.index)){return}if(e.touches.length===2){e.preventDefault();if(a.core.outer.hasClass("lg-first-slide-loading")){return}l=a.scale||1;a.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");a.setPageCords(e);a.resetImageTranslate(a.core.index);a.core.touchAction="pinch";r=a.getTouchDistance(e)}});this.core.$inner.on("touchmove.lg",function(e){if(e.touches.length===2&&a.core.touchAction==="pinch"&&(a.$LG(e.target).hasClass("lg-item")||c.get().contains(e.target))){e.preventDefault();var t=a.getTouchDistance(e);var o=r-t;if(!n&&Math.abs(o)>5){n=true}if(n){g=a.scale;var i=Math.max(1,l+-o*.02);a.scale=Math.round((i+Number.EPSILON)*100)/100;var s=a.scale-g;a.zoomImage(a.scale,Math.round((s+Number.EPSILON)*100)/100,false,false)}}});this.core.$inner.on("touchend.lg",function(e){if(a.core.touchAction==="pinch"&&(a.$LG(e.target).hasClass("lg-item")||c.get().contains(e.target))){n=false;r=0;if(a.scale<=1){a.resetZoom()}else{var t=a.getCurrentImageActualSizeScale();if(a.scale>=t){var o=t-a.scale;if(o===0){o=.01}a.zoomImage(t,o,false,true)}a.manageActualPixelClassNames();a.core.outer.addClass("lg-zoomed")}a.core.touchAction=undefined}})};e.prototype.touchendZoom=function(e,t,o,i,s){var a=t.x-e.x;var r=t.y-e.y;var n=Math.abs(a)/s+1;var l=Math.abs(r)/s+1;if(n>2){n+=1}if(l>2){l+=1}a=a*n;r=r*l;var g=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();var c={};c.x=this.left+a;c.y=this.top+r;var h=this.getPossibleSwipeDragCords();if(Math.abs(a)>15||Math.abs(r)>15){if(i){if(this.isBeyondPossibleTop(c.y,h.minY)){c.y=h.minY}else if(this.isBeyondPossibleBottom(c.y,h.maxY)){c.y=h.maxY}}if(o){if(this.isBeyondPossibleLeft(c.x,h.minX)){c.x=h.minX}else if(this.isBeyondPossibleRight(c.x,h.maxX)){c.x=h.maxX}}if(i){this.top=c.y}else{c.y=this.top}if(o){this.left=c.x}else{c.x=this.left}this.setZoomSwipeStyles(g,c);this.positionChanged=true}};e.prototype.getZoomSwipeCords=function(e,t,o,i,s){var a={};if(i){a.y=this.top+(t.y-e.y);if(this.isBeyondPossibleTop(a.y,s.minY)){var r=s.minY-a.y;a.y=s.minY-r/6}else if(this.isBeyondPossibleBottom(a.y,s.maxY)){var n=a.y-s.maxY;a.y=s.maxY+n/6}}else{a.y=this.top}if(o){a.x=this.left+(t.x-e.x);if(this.isBeyondPossibleLeft(a.x,s.minX)){var l=s.minX-a.x;a.x=s.minX-l/6}else if(this.isBeyondPossibleRight(a.x,s.maxX)){var g=a.x-s.maxX;a.x=s.maxX+g/6}}else{a.x=this.left}return a};e.prototype.isBeyondPossibleLeft=function(e,t){return e>=t};e.prototype.isBeyondPossibleRight=function(e,t){return e<=t};e.prototype.isBeyondPossibleTop=function(e,t){return e>=t};e.prototype.isBeyondPossibleBottom=function(e,t){return e<=t};e.prototype.isImageSlide=function(e){var t=this.core.galleryItems[e];return this.core.getSlideType(t)==="image"};e.prototype.getPossibleSwipeDragCords=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first();var o=this.core.mediaContainerPosition.bottom;var i=t.get().getBoundingClientRect();var s=i.height;var a=i.width;if(e){s=s+e*s;a=a+e*a}var r=(s-this.containerRect.height)/2;var n=(this.containerRect.height-s)/2+o;var l=(a-this.containerRect.width)/2;var g=(this.containerRect.width-a)/2;var c={minY:r,maxY:n,minX:l,maxX:g};return c};e.prototype.setZoomSwipeStyles=function(e,t){e.css("transform","translate3d("+t.x+"px, "+t.y+"px, 0)")};e.prototype.zoomSwipe=function(){var o=this;var i={};var s={};var a=false;var r=false;var n=false;var l=new Date;var g=new Date;var c;var h;var m=this.core.getSlideItem(this.core.index);this.core.$inner.on("touchstart.lg",function(e){if(!o.isImageSlide(o.core.index)){return}m=o.core.getSlideItem(o.core.index);if((o.$LG(e.target).hasClass("lg-item")||m.get().contains(e.target))&&e.touches.length===1&&o.core.outer.hasClass("lg-zoomed")){e.preventDefault();l=new Date;o.core.touchAction="zoomSwipe";h=o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first();var t=o.getDragAllowedAxises(0);n=t.allowY;r=t.allowX;if(r||n){i=o.getSwipeCords(e)}c=o.getPossibleSwipeDragCords();o.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")}});this.core.$inner.on("touchmove.lg",function(e){if(e.touches.length===1&&o.core.touchAction==="zoomSwipe"&&(o.$LG(e.target).hasClass("lg-item")||m.get().contains(e.target))){e.preventDefault();o.core.touchAction="zoomSwipe";s=o.getSwipeCords(e);var t=o.getZoomSwipeCords(i,s,r,n,c);if(Math.abs(s.x-i.x)>15||Math.abs(s.y-i.y)>15){a=true;o.setZoomSwipeStyles(h,t)}}});this.core.$inner.on("touchend.lg",function(e){if(o.core.touchAction==="zoomSwipe"&&(o.$LG(e.target).hasClass("lg-item")||m.get().contains(e.target))){e.preventDefault();o.core.touchAction=undefined;o.core.outer.removeClass("lg-zoom-dragging");if(!a){return}a=false;g=new Date;var t=g.valueOf()-l.valueOf();o.touchendZoom(i,s,r,n,t)}})};e.prototype.zoomDrag=function(){var i=this;var s={};var o={};var a=false;var r=false;var n=false;var l=false;var g;var c;var h;var m;this.core.outer.on("mousedown.lg.zoom",function(e){if(!i.isImageSlide(i.core.index)){return}var t=i.core.getSlideItem(i.core.index);if(i.$LG(e.target).hasClass("lg-item")||t.get().contains(e.target)){g=new Date;m=i.core.getSlideItem(i.core.index).find(".lg-img-wrap").first();var o=i.getDragAllowedAxises(0);l=o.allowY;n=o.allowX;if(i.core.outer.hasClass("lg-zoomed")){if(i.$LG(e.target).hasClass("lg-object")&&(n||l)){e.preventDefault();s=i.getDragCords(e);h=i.getPossibleSwipeDragCords();a=true;i.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging")}}}});this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,function(e){if(a){r=true;o=i.getDragCords(e);var t=i.getZoomSwipeCords(s,o,n,l,h);i.setZoomSwipeStyles(m,t)}});this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,function(e){if(a){c=new Date;a=false;i.core.outer.removeClass("lg-zoom-dragging");if(r&&(s.x!==o.x||s.y!==o.y)){o=i.getDragCords(e);var t=c.valueOf()-g.valueOf();i.touchendZoom(s,o,n,l,t)}r=false}i.core.outer.removeClass("lg-grabbing").addClass("lg-grab")})};e.prototype.closeGallery=function(){this.resetZoom();this.zoomInProgress=false};e.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId);this.core.LGel.off(".lg.zoom");this.core.LGel.off(".zoom");clearTimeout(this.zoomableTimeout);this.zoomableTimeout=false};return e}();export default Zoom;