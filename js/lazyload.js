!function(){var e=function(e){var n=arguments.length<=1||void 0===arguments[1]?100:arguments[1],t=null;return function(){for(var r=this,o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];null===t&&(t=setTimeout((function(){e.apply(r,i),t=null}),n))}}(n,200);function n(){var n=document.querySelectorAll("[data-lazy-src]");n.forEach((function(e){if(function(e,n){n=n||0;var t=e.getBoundingClientRect();return t.top>=-n&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n}(e,500)){var n=e.dataset.lazySrc;e.removeAttribute("data-lazy-src");var t=new Image;t.onload=function(){e.classList.add("is-loaded"),e.style.backgroundImage="url("+n+")"},t.src=n}}));var t=[].slice.call(document.querySelectorAll(".lazy-background"));if("IntersectionObserver"in window){let e=new IntersectionObserver((function(n,t){n.forEach((function(n){n.isIntersecting&&(n.target.classList.add("visible"),e.unobserve(n.target))}))}));t.forEach((function(n){e.observe(n)}))}0!=n.length||0!=t.length||window.removeEventListener("scroll",e)}window.addEventListener("scroll",e),n()}();