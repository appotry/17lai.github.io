var cacheStorageKey="17lai-cache-20220815154124",cacheList=["https://cdn.jsdelivr.net/gh/appotry/hexo@3.123/css/matery.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.123/css/my.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.123/css/post.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.123/css/indexcover.css","https://cdn.jsdelivr.net/gh/appotry/hexo@3.123/manifest.json","https://cdn.jsdelivr.net/gh/appotry/hexo@3.123/js/lazyload.js"];self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheStorageKey).then((e=>e.addAll(cacheList))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!==cacheStorageKey)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)})))}))),self.clients.claim()})),self.addEventListener("fetch",(e=>{e.respondWith(caches.open(cacheStorageKey).then((t=>t.match(e.request,{ignoreSearch:!0}))).then((t=>t||fetch(e.request))))}));