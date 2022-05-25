// 使用{uniqueIdentifier}模板，稍后我们将使用hexo的事件机制，替换成ISO时间，作为每次构建的唯一标识符
var cacheStorageKey = '17lai-cache-20220525193238';
// 在这个数组里面写入您主页加载需要的资源文件
var cacheList = [
  '/favicon.png',

  '/css/matery.css',
  '/css/my.css',
  '/css/post.css',
  '/css/reward.css',
  '/css/barrager.css',
  '/css/indexcover.css',
  '/css/dark.css',
  '/libs/awesome/css/all.min.css',
  '/libs/materialize/materialize.min.css',
  '/libs/aos/aos.css',
  '/libs/animate/animate.min.css',
  '/libs/lightGallery/css/lightgallery.min.css',
  '/libs/prism/prism.min.css',

  '/libs/awesome/webfonts/fa-brands-400.woff2',
  '/libs/awesome/webfonts/fa-regular-400.woff2',
  '/libs/awesome/webfonts/fa-solid-900.woff2',

  '/js/matery.js',
  '/js/search.js',
  '/js/jquery.barrager.js',
  '/libs/anime/anime.min.js',
  
  '/libs/aos/aos.js',
  '/libs/scrollprogress/scrollProgress.min.js',
  '/libs/others/busuanzi.pure.mini.js',
  '/libs/echarts/echarts.min.js',
  '/libs/jqcloud/jqcloud-1.0.4.min.js',
  '/libs/cryptojs/crypto-js.min.js',
  "/libs/jquery/jquery-3.6.0.min.js",
  "/libs/materialize/materialize.js",
  "/libs/masonry/masonry.pkgd.min.js",
  '/libs/lightGallery/js/lightgallery-all.min.js',
  '/libs/fancybox/fancybox.js',
  '/libs/justifiedGallery/justifiedGallery.min.js',
  '/libs/typed/typed.js',
  '/libs/aplayer/APlayer.min.js',
  '/libs/aplayer/Meting.min.js',
  '/libs/dplayer/DPlayer.min.js',
  '/libs/instantpage/instantpage.js',

  '/libs/mermaid/mermaid.min.js',
  '/libs/prism/prism.min.js',
  '/libs/codeBlock/codeBlockFuction.js',
  '/libs/codeBlock/codeLang.js',
  '/libs/codeBlock/codeCopy.js',
  '/libs/codeBlock/codeShrink.js',

  '/libs/waline/waline-count.js',
  '/libs/waline/waline.min.js',

  '/medias_webp/reward/wechat.webp',
  '/medias_webp/reward/alipay.webp',
  '/medias/logo.png',
  
  '/libs/live2d/waifu.css',
  '/libs/live2d/waifu-tips.json',
  "/libs/jquery/jquery-ui.min.js",
  "/libs/jquery/jquery-ui.min.css",

  '/medias_webp/cover/book.webp',
  '/medias_webp/cover/shell.webp',
  '/medias_webp/cover/git.webp',
  '/medias_webp/cover/devops.webp',
  '/medias_webp/cover/3g4g.webp',
  '/medias_webp/cover/debian.webp',
  '/medias_webp/cover/docker.webp',
  '/medias_webp/cover/emby.webp',
  '/medias_webp/cover/gitlab.webp',
  '/medias_webp/cover/hexo.webp',
  '/medias_webp/cover/hisi.webp',
  '/medias_webp/cover/isp.webp',
  '/medias_webp/cover/joplin.webp',
  '/medias_webp/cover/music.webp',
  '/medias_webp/cover/web.webp',
  '/medias_webp/cover/winrar.webp',
  '/medias_webp/cover/write.webp',
  '/medias_webp/cover/wiznote.webp',
  '/medias_webp/cover/docker2.webp',
  '/medias_webp/cover/vscode.webp',
  '/medias_webp/cover/vim.webp',
  '/medias_webp/cover/transmission.webp',
  '/medias_webp/cover/tls1.3.webp',
  '/medias_webp/cover/thinkpad.webp',
  '/medias_webp/cover/qnap.webp',
  '/medias_webp/cover/DeepLearning.webp',
  '/medias_webp/cover/5w2h.webp',
  '/medias_webp/cover/pdca.webp',
  '/medias_webp/cover/qbittorrent.webp',
  '/medias_webp/cover/imgprogress.webp',
  '/medias_webp/cover/githubPages.webp',
  '/medias_webp/cover/gitbook.webp',
  '/medias_webp/cover/friendlink.webp',
  '/medias_webp/cover/baota.webp',
  '/medias_webp/cover/mysql.webp',

  '/medias_webp/simiao.webp',
  '/medias_webp/hongmiaosi.webp',
  '/medias_webp/sea.webp',
  '/medias_webp/sunset.webp',

];

// self.addEventListener('install', e =&gt; {
//   e.waitUntil(
//     caches.open(cacheStorageKey).then(cache =&gt; {
//       return cache.addAll(cacheList)
//         .then(() =&gt; self.skipWaiting());
//     })
//   );
// });

self.addEventListener('install', e =&gt; {
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache =&gt; cache.addAll(cacheList))
    .then(() =&gt; self.skipWaiting())
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheStorageKey) {
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

self.addEventListener('fetch', event =&gt; {
  event.respondWith(
    caches.open(cacheStorageKey)
      .then(cache =&gt; cache.match(event.request, {ignoreSearch: true}))
      .then(response =&gt; {
        // 使用缓存而不是进行网络请求，实现app秒开
        return response || fetch(event.request);
      })
  );
});
<link rel="stylesheet" href="/css/bilicard.css" type="text/css">