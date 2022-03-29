// 使用{uniqueIdentifier}模板，稍后我们将使用hexo的事件机制，替换成ISO时间，作为每次构建的唯一标识符
var cacheName = '17lai-cache-20220329130821';
// 在这个数组里面写入您主页加载需要的资源文件
var filesToCache = [
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/js/matery.js',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/js/search.js',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/css/matery.css',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/css/my.css',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/css/dark.css',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/css/my-gitalk.css',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/favicon.png',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/awesome/css/all.min.css',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/search.xml',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/valine/av-min.js',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/valine/Valine.min.js',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/cryptojs/crypto-js.min.js',
  "https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/jquery/jquery-3.6.0.min.js",
  "https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/materialize/materialize.min.js",
  "https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/masonry/masonry.pkgd.min.js",
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/libs/lightGallery/js/lightgallery-all.min.js',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/reward/wechat.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/reward/alipay.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias/logo.png',

  '/medias_webp/icons/android-chrome-192x192.png',
  '/medias_webp/icons/android-chrome-512x512.png',
  '/manifest.json',
  '/css/bilicard.css',
  '/libs/awesome/webfonts/fa-solid-900.woff2',
  '/libs/awesome/webfonts/fa-brands-400.woff2',
  '/libs/awesome/webfonts/fa-regular-400.woff2',

  'https://cdn.jsdelivr.net/gh/appotry/hexo@latest/medias_webp/hongmiaosi.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@latest/medias_webp/sea.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@latest/medias_webp/simiao.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@latest/medias_webp/sunset.webp',
  
  'https://live2d.17lai.site/autoload.js',
  'https://live2d.17lai.site/live2d.min.js',
  'https://live2d.17lai.site/waifu-tips.js',
  'https://live2d.17lai.site/waifu.css',


  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/3g4g.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/debian.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/docker.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/emby.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/gitlab.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/hexo.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/hisi.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/isp.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/joplin.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/music.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/web.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/winrar.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/write.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/wiznote.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/docker2.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/vscode.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/vim.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/transmission.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/tls1.3.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/thinkpad.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/qnap.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/DeepLearning.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/5w2h.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/pdca.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/qbittorrent.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/imgprogress.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/githubPages.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/gitbook.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/friendlink.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/baota.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/cover/mysql.webp',

  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/0.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/1.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/2.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/3.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/4.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/5.webp',
  'https://cdn.jsdelivr.net/gh/appotry/hexo@2.51/medias_webp/banner/6.webp',

];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache)
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          // 清理旧版本
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // 更新客户端
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
        // 使用缓存而不是进行网络请求，实现app秒开
        return response || fetch(event.request);
      })
  );
});