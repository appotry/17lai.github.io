var cacheName="17lai-cache-20220327175310",filesToCache=["/js/matery.js","/js/search.js","/css/matery.css","/css/my.css","/css/my-gitalk.css","/favicon.png","/medias_webp/hongmiaosi.webp","/medias_webp/icons/android-chrome-192x192.png","/medias_webp/icons/android-chrome-512x512.png","/manifest.json"];self.addEventListener("install",e=>{e.waitUntil(caches.open(cacheName).then(e=>e.addAll(filesToCache).then(()=>self.skipWaiting())))}),self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==cacheName)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",c=>{c.respondWith(caches.open(cacheName).then(e=>e.match(c.request,{ignoreSearch:!0})).then(e=>e||fetch(c.request)))});