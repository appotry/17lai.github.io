var cacheStorageKey="17lai-cache-20220814172404",cacheList=["/css/matery.css","/css/my.css","/css/post.css","/css/indexcover.css","/manifest.json","/js/matery.js"];self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheStorageKey).then((e=>e.addAll(cacheList))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!==cacheStorageKey)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)})))}))),self.clients.claim()})),self.addEventListener("fetch",(e=>{e.respondWith(caches.open(cacheStorageKey).then((c=>c.match(e.request,{ignoreSearch:!0}))).then((c=>c||fetch(e.request))))}));