var cacheName="17lai-cache-20220423130101",filesToCache=["https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/favicon.png","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/matery.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/my.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/post.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/reward.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/barrager.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/valine.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/indexcover.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/css/dark.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/awesome/css/all.min.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/materialize/materialize.min.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/aos/aos.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/animate/animate.min.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/lightGallery/css/lightgallery.min.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/awesome/webfonts/fa-brands-400.woff2","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/awesome/webfonts/fa-regular-400.woff2","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/awesome/webfonts/fa-solid-900.woff2","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/js/matery.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/js/search.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/js/jquery.barrager.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/anime/anime.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/aos/aos.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/scrollprogress/scrollProgress.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/others/busuanzi.pure.mini.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/echarts/echarts.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/jqcloud/jqcloud-1.0.4.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/cryptojs/crypto-js.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/jquery/jquery-3.6.0.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/materialize/materialize.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/masonry/masonry.pkgd.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/lightGallery/js/lightgallery-all.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/fancybox/fancybox.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/justifiedGallery/justifiedGallery.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/typed/typed.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/aplayer/APlayer.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/aplayer/Meting.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/dplayer/DPlayer.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/instantpage/instantpage.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/mermaid/mermaid.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/codeBlock/codeBlockFuction.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/codeBlock/codeLang.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/codeBlock/codeCopy.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/codeBlock/codeShrink.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/valine/av-min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/valine/Valine.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/medias_webp/reward/wechat.webp","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/medias_webp/reward/alipay.webp","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/medias/logo.png","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/live2d/waifu-tips.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/live2d/waifu.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/live2d/waifu-tips.json","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/jquery/jquery-ui.min.js","https://cdn.jsdelivr.net/gh/appotry/hexo@3.11/libs/jquery/jquery-ui.min.css","https://cdn.jsdelivr.net/gh/appotry/hexo@latest/medias_webp/sea.webp","https://cdn.jsdelivr.net/gh/appotry/hexo@latest/medias_webp/sunset.webp"];self.addEventListener("install",e=>{e.waitUntil(caches.open(cacheName).then(e=>e.addAll(filesToCache).then(()=>self.skipWaiting())))}),self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==cacheName)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",s=>{s.respondWith(caches.open(cacheName).then(e=>e.match(s.request,{ignoreSearch:!0})).then(e=>e||fetch(s.request)))});