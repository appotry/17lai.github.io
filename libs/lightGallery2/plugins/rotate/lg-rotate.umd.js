(function(t,e){typeof exports==="object"&&typeof module!=="undefined"?module.exports=e():typeof define==="function"&&define.amd?define(e):(t=typeof globalThis!=="undefined"?globalThis:t||self,t.lgRotate=e())})(this,function(){"use strict";var i=function(){i=Object.assign||function t(e){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l))e[l]=i[l]}return e};return i.apply(this,arguments)};var r={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"};var o={rotate:true,rotateSpeed:400,rotateLeft:true,rotateRight:true,flipHorizontal:true,flipVertical:true,rotatePluginStrings:{flipVertical:"Flip vertical",flipHorizontal:"Flip horizontal",rotateLeft:"Rotate left",rotateRight:"Rotate right"}};var t=function(){function t(t,e){this.core=t;this.$LG=e;this.settings=i(i({},o),this.core.settings);return this}t.prototype.buildTemplates=function(){var t="";if(this.settings.flipVertical){t+='<button type="button" id="lg-flip-ver" aria-label="'+this.settings.rotatePluginStrings["flipVertical"]+'" class="lg-flip-ver lg-icon"></button>'}if(this.settings.flipHorizontal){t+='<button type="button" id="lg-flip-hor" aria-label="'+this.settings.rotatePluginStrings["flipHorizontal"]+'" class="lg-flip-hor lg-icon"></button>'}if(this.settings.rotateLeft){t+='<button type="button" id="lg-rotate-left" aria-label="'+this.settings.rotatePluginStrings["rotateLeft"]+'" class="lg-rotate-left lg-icon"></button>'}if(this.settings.rotateRight){t+='<button type="button" id="lg-rotate-right" aria-label="'+this.settings.rotatePluginStrings["rotateRight"]+'" class="lg-rotate-right lg-icon"></button>'}this.core.$toolbar.append(t)};t.prototype.init=function(){var o=this;if(!this.settings.rotate){return}this.buildTemplates();this.rotateValuesList={};this.core.LGel.on(r.slideItemLoad+".rotate",function(t){var e=t.detail.index;var i=o.core.getSlideItem(e).find(".lg-img-rotate").get();if(!i){var r=o.core.getSlideItem(e).find(".lg-object").first();r.wrap("lg-img-rotate");o.core.getSlideItem(o.core.index).find(".lg-img-rotate").css("transition-duration",o.settings.rotateSpeed+"ms")}});this.core.outer.find("#lg-rotate-left").first().on("click.lg",this.rotateLeft.bind(this));this.core.outer.find("#lg-rotate-right").first().on("click.lg",this.rotateRight.bind(this));this.core.outer.find("#lg-flip-hor").first().on("click.lg",this.flipHorizontal.bind(this));this.core.outer.find("#lg-flip-ver").first().on("click.lg",this.flipVertical.bind(this));this.core.LGel.on(r.beforeSlide+".rotate",function(t){if(!o.rotateValuesList[t.detail.index]){o.rotateValuesList[t.detail.index]={rotate:0,flipHorizontal:1,flipVertical:1}}})};t.prototype.applyStyles=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first();t.css("transform","rotate("+this.rotateValuesList[this.core.index].rotate+"deg)"+" scale3d("+this.rotateValuesList[this.core.index].flipHorizontal+", "+this.rotateValuesList[this.core.index].flipVertical+", 1)")};t.prototype.rotateLeft=function(){this.rotateValuesList[this.core.index].rotate-=90;this.applyStyles();this.triggerEvents(r.rotateLeft,{rotate:this.rotateValuesList[this.core.index].rotate})};t.prototype.rotateRight=function(){this.rotateValuesList[this.core.index].rotate+=90;this.applyStyles();this.triggerEvents(r.rotateRight,{rotate:this.rotateValuesList[this.core.index].rotate})};t.prototype.getCurrentRotation=function(t){if(!t){return 0}var e=this.$LG(t).style();var i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"none";if(i!=="none"){var r=i.split("(")[1].split(")")[0].split(",");if(r){var o=Math.round(Math.atan2(r[1],r[0])*(180/Math.PI));return o<0?o+360:o}}return 0};t.prototype.flipHorizontal=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get();var e=this.getCurrentRotation(t);var i="flipHorizontal";if(e===90||e===270){i="flipVertical"}this.rotateValuesList[this.core.index][i]*=-1;this.applyStyles();this.triggerEvents(r.flipHorizontal,{flipHorizontal:this.rotateValuesList[this.core.index][i]})};t.prototype.flipVertical=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get();var e=this.getCurrentRotation(t);var i="flipVertical";if(e===90||e===270){i="flipHorizontal"}this.rotateValuesList[this.core.index][i]*=-1;this.applyStyles();this.triggerEvents(r.flipVertical,{flipVertical:this.rotateValuesList[this.core.index][i]})};t.prototype.triggerEvents=function(t,e){var i=this;setTimeout(function(){i.core.LGel.trigger(t,e)},this.settings.rotateSpeed+10)};t.prototype.isImageOrientationChanged=function(){var t=this.rotateValuesList[this.core.index];var e=Math.abs(t.rotate)%360!==0;var i=t.flipHorizontal<0;var r=t.flipVertical<0;return e||i||r};t.prototype.closeGallery=function(){if(this.isImageOrientationChanged()){this.core.getSlideItem(this.core.index).css("opacity",0)}this.rotateValuesList={}};t.prototype.destroy=function(){this.core.LGel.off(".lg.rotate");this.core.LGel.off(".rotate")};return t}();return t});