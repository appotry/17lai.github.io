var cacheStorageKey="17lai-cache-20220813074110",cacheList=["/css/matery.css","/css/my.css","/css/post.css","/css/indexcover.css","/manifest.json","/js/matery.js","/libs/typed/typed.js","/libs/others/buble.js","/libs/instantpage/instantpage.js"];self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheStorageKey).then((e=>e.addAll(cacheList))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!==cacheStorageKey)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)})))}))),self.clients.claim()})),self.addEventListener("fetch",(e=>{e.respondWith(caches.open(cacheStorageKey).then((s=>s.match(e.request,{ignoreSearch:!0}))).then((s=>s||fetch(e.request))))}));