if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"ca7e0a38239db2b0861148984a70ccb4"},{url:"404/index.html",revision:"7839c0dd18baff27396a26a39f0ed587"},{url:"about/index.html",revision:"c99489ee96f0d1c0f0276e9332518039"},{url:"archives/2021/03/index.html",revision:"bef93d3112404594f0f93766072d81c1"},{url:"archives/2021/05/index.html",revision:"7016d57e8b2da32d92eb07337dd2474e"},{url:"archives/2021/07/index.html",revision:"1ddc60a13c445d42f993bde43060e1ea"},{url:"archives/2021/08/index.html",revision:"39f87182aa4822a5e256d62d89db61ef"},{url:"archives/2021/09/index.html",revision:"d46547b437d098aec3877d438588427f"},{url:"archives/2021/10/index.html",revision:"af8d9c72be9a2f37ae210f3d2eee189b"},{url:"archives/2021/index.html",revision:"97a01da79b61b81b0fc6e07989351ac7"},{url:"archives/index.html",revision:"d5d2346bbc95093b097d4ca2d93e6d80"},{url:"bb/index.html",revision:"beeb5e691641bdd2110d02cd6ff9d6de"},{url:"categories/ai/index.html",revision:"1e8b6f079f5fe28c32825f0c1b7a8bba"},{url:"categories/blog/index.html",revision:"7a3ecf316f0b4637b9b9a4d7e2b263e0"},{url:"categories/bt/index.html",revision:"8dd93aa0a77d2fffebcc2ef27925215c"},{url:"categories/docker/index.html",revision:"f7a838a136b75a9bca48996dd3403f83"},{url:"categories/embeded/index.html",revision:"47f42c6a4d9e8487ea46bb874a7c9529"},{url:"categories/gitbook/index.html",revision:"cabfc66d38b81fd813cdc4ae1d8efd1b"},{url:"categories/gitlab/index.html",revision:"58252ac434f6ae7dbceb02f648673d15"},{url:"categories/hexo/index.html",revision:"866ee76008a890b43961f9d420dd9dfd"},{url:"categories/ide/index.html",revision:"2a45ac37e3e0403e7607612b8d0669f3"},{url:"categories/image/index.html",revision:"e7432938dce13316dbe55be23dece52f"},{url:"categories/index.html",revision:"9dbd86a6666fae7245a348a4b6793a37"},{url:"categories/linux/index.html",revision:"dcf8b45c194beb3f8eca3c6e0dae73fc"},{url:"categories/music/index.html",revision:"138e9be0e6e3a9b0517a29283ad8c8d5"},{url:"categories/mysql/index.html",revision:"338d6088ac3a93135d4978510b3b5183"},{url:"categories/nas/index.html",revision:"a6ef94e4d9a199080d77c1e1b0a1761f"},{url:"categories/note/index.html",revision:"33b15b4308d7d79c1beb72be56f71fc6"},{url:"categories/notebook/index.html",revision:"9884a10501d3e584e25793b956f0f9a0"},{url:"categories/PMBOK/index.html",revision:"197cfc25ce5551ce06770d6dbf59f0ba"},{url:"categories/qnap/index.html",revision:"7e3a9611e3b6eee2c60bb558488ba815"},{url:"categories/tools/index.html",revision:"9b6e607714d1d6061857f5469a05553e"},{url:"categories/video/index.html",revision:"55fc576d3441c5ece41f52ded31ebf30"},{url:"categories/vps/index.html",revision:"45f36d22741d8b2e67f88a61e3212389"},{url:"categories/web/index.html",revision:"e473a02263d2a3ea78f797ead7993534"},{url:"contact/index.html",revision:"c21bb76bcda7f1f7e02deb85a488c0de"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"4d4c2a31a80db8fb590a6f733a761d37"},{url:"dash/index.html",revision:"217ac9ef8682bfef87536fef8040b3af"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friendlink/index.html",revision:"c1cedabad7b9d3eaed1f8eda8b8eb6c7"},{url:"friends/index.html",revision:"afe63688d34dd67a552b43ec4ad36c1f"},{url:"galleries/2020/index.html",revision:"b32cc40950d43d0f95c289c8d5fd3e0e"},{url:"galleries/index.html",revision:"5c0fd7e3003359ea40e91cd4d7462715"},{url:"index.html",revision:"7f451d4fbb7e15389ecc21280e53ea0d"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"a2cd3dda09a2adb2608337273bf94acb"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"js/snow.js",revision:"ecb7e27accae76aa79fbdb1817fcd032"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid.js",revision:"f3687bf99ec4a8b6608d45d2809eab00"},{url:"libs/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/prism/prism.css",revision:"3438405b32a6ebd86a9cd1f80e92e3da"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"myPost/index.html",revision:"d17ad17668289984bd20a2125ecff06b"},{url:"myProject/index.html",revision:"e8a630ba4941b27c6012bc4e44d803cc"},{url:"myTeck/index.html",revision:"5f53ad5a9716bab2117897298e035fb7"},{url:"needtoread/index.html",revision:"b4c4f6e4dc5dac07769258fdac259ada"},{url:"posts/10fee780/index.html",revision:"3ad163be33d513e7f095728ddd4bbf54"},{url:"posts/13894dce/index.html",revision:"b2ad8a0bbe641e08ef6207b8ecd32c30"},{url:"posts/1802a8a7/index.html",revision:"f6665525e0a95b601ad39ece810d692a"},{url:"posts/1991789c/index.html",revision:"21afa3abdb429f1110ca3f6388765660"},{url:"posts/29a820b3/index.html",revision:"78cb398ce03ba0504bcf19bf450c2040"},{url:"posts/2b9325d0/index.html",revision:"3d17c4345bfd0958c3bedf1ecbbbe403"},{url:"posts/3847ad58/index.html",revision:"3d02b804715e1b9cc2af5122b12b2137"},{url:"posts/40300608/index.html",revision:"52e7bf2c6a8981f28fc323e69f0a33be"},{url:"posts/42b6a86d/index.html",revision:"2c5eaa015bbaa0d04d464aa45dfbbadc"},{url:"posts/44557ab0/index.html",revision:"5d565fbccd06959536f852c6136121b3"},{url:"posts/448f849b/index.html",revision:"ab439cc7ea17bc932e4246a062638db0"},{url:"posts/45f878cd/index.html",revision:"e5eb501529940a7356c43b4757f30e09"},{url:"posts/462f1e5c/index.html",revision:"5e617e1191470e12bfd3e4c328cc1474"},{url:"posts/465d2738/index.html",revision:"a6fdcfd989d0fd3e91d61b2b205f14e1"},{url:"posts/495db4d3/index.html",revision:"ab239cd4dde6e6310170929902557b40"},{url:"posts/509c7bd3/index.html",revision:"fd1fd54c17e1758a6117fd4da7e945d3"},{url:"posts/5b1993ac/index.html",revision:"8eae130ef38807c99159baf53e0a378f"},{url:"posts/647e6265/index.html",revision:"e46aa8b33655e3fedb91e103e9131aa1"},{url:"posts/656a0abb/index.html",revision:"a66514f75a763818b0dcc0d9e1215752"},{url:"posts/69a052c9/index.html",revision:"b35eaec52c06406ca905ee9da4bd68f0"},{url:"posts/6b2ba137/index.html",revision:"c8b293a7ed533958830988cfbfade165"},{url:"posts/7790e989/index.html",revision:"3926fba7f9211ea9deed54dbfcb6efc4"},{url:"posts/77da2f80/index.html",revision:"227ecfc092a6e8ee595b1f663e284052"},{url:"posts/7b4e434c/index.html",revision:"f88b24a65d229726857f9f99664d2c1d"},{url:"posts/7fe86002/index.html",revision:"d4f902fe378935e1deb9d9bdc78cd32b"},{url:"posts/80906b88/index.html",revision:"4a7f1c6118a4b0c96f40caa6f1202de7"},{url:"posts/8f76d9dd/index.html",revision:"113248be0fa843367bc8d4b8010088d1"},{url:"posts/92d347d6/index.html",revision:"bbe9b3aab8d40303b053515acdacfd16"},{url:"posts/9912bd5d/index.html",revision:"f6d9122d6e269415ab2b71ebc5811be2"},{url:"posts/a0f3c838/index.html",revision:"4caa7375ffac359278459cc78804dbbe"},{url:"posts/a8535f26/index.html",revision:"e21e245795150d20513dc2cb9b0db52a"},{url:"posts/acc13b70/index.html",revision:"28c80cdf80564dbc9905f6626cc61cb4"},{url:"posts/b1fe1bb8/index.html",revision:"07d93d150ec2bc7c03b94e7997730df0"},{url:"posts/bb600b4b/index.html",revision:"5b2501f46a5f7170f1748289a2706a3e"},{url:"posts/c945eae1/index.html",revision:"26467514178723ecb9411490a4ecc694"},{url:"posts/ca630feb/index.html",revision:"2b63242954cfa0fd2c473a2f4ad6a185"},{url:"posts/cb623532/index.html",revision:"ae6f45d6baea1276010c468b725fe1c9"},{url:"posts/cf0f47fd/index.html",revision:"bab4d4c123e6834951ac1dcea4526d9e"},{url:"posts/d08eb7b/index.html",revision:"e1ce217f94cc84766466da21137a2ed3"},{url:"posts/d5f56dd0/index.html",revision:"226796520dede3d861766d05b17c25a5"},{url:"posts/e3ee7f8b/index.html",revision:"6103db98cc0afc31d2682d5c7e6007f4"},{url:"posts/e6086437/index.html",revision:"90124c0fc7ea3cffadc103d5de6a30d5"},{url:"posts/e6d40157/index.html",revision:"286b48e3fc613318df1910e0693666a4"},{url:"posts/ec2cad2/index.html",revision:"409feab58f25f08c1c6c1da3c112f4a9"},{url:"posts/f0b0af52/index.html",revision:"bcd5300825be775fd7f7b351407f930e"},{url:"posts/f6b32521/index.html",revision:"b9b67888796dc498ce994ae6c4105821"},{url:"tags/3531a/index.html",revision:"367f92a0763bebc5d2a868585742044a"},{url:"tags/3798M/index.html",revision:"dc1d8fbae0c3543a97641a12e35d5354"},{url:"tags/3a/index.html",revision:"ca2d929e530efcf98f2be3941d256dc1"},{url:"tags/3G/index.html",revision:"3d3745fb38925950c228f87d04ecfe8f"},{url:"tags/4G/index.html",revision:"87232451fd97a5edb0a633c31f97c301"},{url:"tags/5W2H/index.html",revision:"f7126ac629268c0b7ac8a919b6088ade"},{url:"tags/ae/index.html",revision:"07e44f8dcf454257212dac179fc83118"},{url:"tags/ai/index.html",revision:"1b2d581c0bbcdcbad3e31ac5a472108f"},{url:"tags/Apache/index.html",revision:"1344a23e0790f479dcbb9a949054ad0e"},{url:"tags/ATI/index.html",revision:"ddd31a1c95b334494b133eaef6535bee"},{url:"tags/blog/index.html",revision:"234b7cbd8d1a51194814741c42ea973d"},{url:"tags/bt/index.html",revision:"591a19e2f026b552a33d8aeae586de43"},{url:"tags/BT/index.html",revision:"0c98c03f9eb509385e7bc2864ef97e41"},{url:"tags/ccs/index.html",revision:"54b78917680ffccaeb8060edbee303a4"},{url:"tags/cdn/index.html",revision:"990bae198ee1bca1ce2ff897e404174b"},{url:"tags/cmake/index.html",revision:"4dcbcd5b5854ab988fa8d45fe9a0ef86"},{url:"tags/Crack/index.html",revision:"b5ff09b5e820418da5c8a0caff779091"},{url:"tags/css/index.html",revision:"1312054ccf8e87c2329e61fe45050db8"},{url:"tags/Debian/index.html",revision:"0ca20bda0b7856a4c90f1c907c4e3003"},{url:"tags/develop/index.html",revision:"1ee5e774f52745e17a6649fecbf2b801"},{url:"tags/DNSCrypt/index.html",revision:"3cf6476f524bbe4d239d6f547e987afc"},{url:"tags/DNSMasq/index.html",revision:"40116793f70c4d0fc9985decf16dd7e5"},{url:"tags/docker/index.html",revision:"134ae4b3464c4173408a5f81f47bed44"},{url:"tags/Docker/index.html",revision:"7296e20a560cdc53d533930a0ecf5ebd"},{url:"tags/Driver/index.html",revision:"7f9c421f71ed512baf2c8259e6fd89e5"},{url:"tags/ED2K/index.html",revision:"57f7c7add87c9b839707f958e2e5590f"},{url:"tags/email/index.html",revision:"8073be5c21a3b5fec9f12bd5354e824f"},{url:"tags/embeded/index.html",revision:"d763b6b253262ff5515c9e9de5a05222"},{url:"tags/emby/index.html",revision:"ab31e91ac631c81313c551890f109b54"},{url:"tags/Emby/index.html",revision:"bdfe0d736561ea3b558a0a87dd9bb79e"},{url:"tags/face/index.html",revision:"388e5fd6c9465d1aa7101328ba9a6a4d"},{url:"tags/Git/index.html",revision:"d1754fb8dcbcac9c7ce9cfacc3283678"},{url:"tags/GitBook/index.html",revision:"b1a3ffa517ce21ce3119e06aa7beef15"},{url:"tags/Github/index.html",revision:"31b6a94553f1b817fe080bc40ce62a0e"},{url:"tags/Gitlab/index.html",revision:"0f26904df51bd84505fcaae64b539e54"},{url:"tags/GROW/index.html",revision:"c3074032bcd05aa05ea5f9a0a24c373b"},{url:"tags/hardlink/index.html",revision:"b16ee8f4af34984d2a51297eb67a0cb0"},{url:"tags/HDD/index.html",revision:"4c96c309c5dd7529f3fa490d2d1bda14"},{url:"tags/hexo/index.html",revision:"167c5d54a4c68655a9d824b068d6ad23"},{url:"tags/hisilicon/index.html",revision:"8b997ceb3b7b48a1e7b694a364e202fd"},{url:"tags/Hotkey/index.html",revision:"2db3aeb657261f65ae48619efa6029d1"},{url:"tags/http/index.html",revision:"cc36932a7339dfc8e678b46c075fecfc"},{url:"tags/https/index.html",revision:"de8d34be6f28d049bddbe867f4d125fd"},{url:"tags/ide/index.html",revision:"2c13279583c1c48382c75fc40681b348"},{url:"tags/image/index.html",revision:"323df2c3b1fd537f4420c0834f850a00"},{url:"tags/index.html",revision:"0104b3a83cbb1745e5c1b05190681ec3"},{url:"tags/ipv6/index.html",revision:"fd51d461411f78bc1779e2518bc06ddb"},{url:"tags/Jeckett/index.html",revision:"595ce2ab2d4ce28a697179200c67d2c9"},{url:"tags/Jekyll/index.html",revision:"e02627d8ed23dc57e91557e6f90d3660"},{url:"tags/Joplin/index.html",revision:"0dbec0d929cf4f42127c0ffe11a41049"},{url:"tags/js/index.html",revision:"67e5f20485c127f0bb4bc42b7f7aff5a"},{url:"tags/JSP/index.html",revision:"25fb74ef310be672ba8ac83352e23139"},{url:"tags/Kernel/index.html",revision:"38721900dc06a1f545d7d9c3da37db12"},{url:"tags/LAMP/index.html",revision:"fad350bb5c4b8f833be3eb4b7b7d8f3c"},{url:"tags/Laptop/index.html",revision:"741a4500a1c788d5834193ace89f5982"},{url:"tags/linux/index.html",revision:"55449cfb12420bcb510d2a9947b41200"},{url:"tags/Linux/index.html",revision:"cb7b79eb653464f46eaa70f0c2b61ec4"},{url:"tags/Mariadb/index.html",revision:"3c7e885b065c59ddf682f03ebb538843"},{url:"tags/markdown/index.html",revision:"9b9c9656f7ad9728268ae3a709e7fa7b"},{url:"tags/MarkDown/index.html",revision:"403840988e3e043b3a9ce523f00241f5"},{url:"tags/matery/index.html",revision:"0440b2623dd732c6fdc6ae829b1fca3a"},{url:"tags/mathjax/index.html",revision:"7f2da3477181f972d2acda98347a5370"},{url:"tags/mermaid/index.html",revision:"6425fc4107de39fb3afbf660c3cf8a14"},{url:"tags/Mermaid/index.html",revision:"cb1a20e5de822d2a6c8c9ea1fd23adce"},{url:"tags/mp3tag/index.html",revision:"8e17c806f492e3b8c76a052991ed2210"},{url:"tags/MPP/index.html",revision:"a312abc1768d81b058ca3fd005402f04"},{url:"tags/mstream/index.html",revision:"97846c27075057070789ae784b3aabd7"},{url:"tags/music/index.html",revision:"b3b88f4cf6ce568a4dc66a5b14c39d92"},{url:"tags/MusicBrainz/index.html",revision:"68e4ff30a6cac59e76544f5922b1900d"},{url:"tags/MySql/index.html",revision:"e7cfffb01e20de9f9fcf10f0157e9db8"},{url:"tags/MySQL/index.html",revision:"c893c3854f5ea5ad7293f7b291e92117"},{url:"tags/nas/index.html",revision:"12e67d660c78f7d7e33d71d1175c96dc"},{url:"tags/Nas/index.html",revision:"66ff4bb06c939162982dd89fde4f8f39"},{url:"tags/Nginx/index.html",revision:"d6779d65ae1326a4bdaa89ad00d86167"},{url:"tags/note/index.html",revision:"4e012b619873a5801e7452e4ae6ff521"},{url:"tags/OKR/index.html",revision:"b35ad4a1465fa069b890197a1a260bd8"},{url:"tags/PDCA/index.html",revision:"76ccff7f0f0522c362ef340969d64678"},{url:"tags/PHP/index.html",revision:"5a1983643e108785d9c349f9a017bad5"},{url:"tags/picgo/index.html",revision:"4ec39a812d31a78dd7e7be87768e80c3"},{url:"tags/plantuml/index.html",revision:"9da70d713c6fff4afed97c16fc29271d"},{url:"tags/plex/index.html",revision:"6d095c2e67acab99d3ec21c6e9de7370"},{url:"tags/Portainer/index.html",revision:"0fafdc4ca5a4dcc995f331b7754702a1"},{url:"tags/proxy/index.html",revision:"06f6f25e4d49056d27eea6bdc81f81c3"},{url:"tags/pt/index.html",revision:"a1f535fb88ad129f358bef4b41393f39"},{url:"tags/PT/index.html",revision:"94db494e99b449834b24bb26c023be4d"},{url:"tags/qbittorrent/index.html",revision:"630304070a6705ffcd61d05d7be2d3d7"},{url:"tags/qnap/index.html",revision:"5b166053bc618fc3cc4aaea66bdb8fd1"},{url:"tags/QNAP/index.html",revision:"c580444fcf24feefd5ade33da550d747"},{url:"tags/Rigistry/index.html",revision:"5ea868749404f9aa52c67d9cbc8a5680"},{url:"tags/selfhost/index.html",revision:"f721b0289ba0f4a50bace7895dfa0bba"},{url:"tags/seo/index.html",revision:"f027913df4eddef48f73b66fdc535302"},{url:"tags/SMART/index.html",revision:"96c2821466d27b67c024c16ca6d74e08"},{url:"tags/Sonarr/index.html",revision:"f61476005f535406b570f4cc48a36a4e"},{url:"tags/sound/index.html",revision:"28ea276d0eb731442d039cf612616961"},{url:"tags/speaker/index.html",revision:"d716bf6a9c5e6d2dc261f749b7f34491"},{url:"tags/SSD/index.html",revision:"0e56bb1edbd6ebdf410c7c0ca87f7e1a"},{url:"tags/ssl/index.html",revision:"9cbabca81d2778c4cacce35e15a1c96b"},{url:"tags/SSL/index.html",revision:"6eec9590fc52b3807110f74cc187735f"},{url:"tags/swarm/index.html",revision:"32dca172745f153b97d45764faf7a4de"},{url:"tags/SWOT/index.html",revision:"a573903448e1e2f61d3a8d21821d36ed"},{url:"tags/thinkpad/index.html",revision:"7ee356e759eb4d529be7ab24069f0dde"},{url:"tags/TLS/index.html",revision:"cf228dbf9833cb79b2957b4c4c66912e"},{url:"tags/tmm/index.html",revision:"6157893c22cf36be87c12d70426582d7"},{url:"tags/Tomcat/index.html",revision:"1836e71c8742d4af5d91f7af116e3156"},{url:"tags/traefik/index.html",revision:"8f8bbf18245ea219c39496106b51a2de"},{url:"tags/transmission/index.html",revision:"2650c16be3040c08475208cb3c4886dc"},{url:"tags/Typora/index.html",revision:"146225952db2523df5d526e06cb12cdb"},{url:"tags/ubuntu/index.html",revision:"0061621fdd17b03991068d13574fbe4b"},{url:"tags/UNF/index.html",revision:"c2c223dc9e32fb8d091295c309b829d0"},{url:"tags/vim/index.html",revision:"9a147108f8198eeefe1cfee5f15e4f7d"},{url:"tags/VPS/index.html",revision:"b7712bf9f2d0b532571c6419f1e606ca"},{url:"tags/vscode/index.html",revision:"d5c88be681bf5222e82e8fda1f6565f5"},{url:"tags/Watchtower/index.html",revision:"6dcca6bf27fe8ce69812de46a6f6de97"},{url:"tags/WBS/index.html",revision:"d39099c8b15984e3db7bcda507cc2081"},{url:"tags/web/index.html",revision:"8d7169f04b762c9d4cdbbfdba41d3f79"},{url:"tags/Webdav/index.html",revision:"5819b67b6c64333d4a95ac8f9c658a2c"},{url:"tags/WIFI/index.html",revision:"7a73e81526fe8988c3ea014b8606de52"},{url:"tags/wiz/index.html",revision:"167da2ccd2bea762316209f78500d80c"},{url:"tags/优化/index.html",revision:"eda0ee630ebaeee5e8d8d0b3a2652762"},{url:"tags/刮削/index.html",revision:"f70ace8772920614af30bf32a96fc11c"},{url:"tags/启动/index.html",revision:"bd629b6cd761a0555e28131abaef946e"},{url:"tags/字幕/index.html",revision:"cd9bcbb555a012495422c15ad8a18c69"},{url:"tags/安全/index.html",revision:"f68d7f243a34ac43a2555067dccb0ee8"},{url:"tags/宝塔/index.html",revision:"06df02ba6e1b2fb60a24788a989076b4"},{url:"tags/嵌入式/index.html",revision:"32b8ce625814e03ec6ce0b0050e3c8f4"},{url:"tags/建站/index.html",revision:"d371a732f9015f8fb25aa410971cfec5"},{url:"tags/技巧/index.html",revision:"b66ddb045a60db9e6971884e96294e33"},{url:"tags/插件/index.html",revision:"be9ebe60ca821fbb300d6cfcc1224b3b"},{url:"tags/教程/index.html",revision:"7d9cdac7dfd7e635242418a0d1b2fa92"},{url:"tags/硬盘/index.html",revision:"4d7b5102e72bbcd044a07b7d16cb168a"},{url:"tags/移植/index.html",revision:"2dc061a123ceb12843e131b29387cdb3"},{url:"tags/管理/index.html",revision:"fdd0532e1199a48b44a073aa5ca67860"},{url:"tags/编码/index.html",revision:"598309c2d3ea0c8c0e1a5ec4afd72b8e"},{url:"tags/群晖/index.html",revision:"e132885ae875d823eba9a2ed5a7ed8c6"},{url:"tags/隐私/index.html",revision:"0776d34a4aa264c5f3ed35c8fe6ca2ae"},{url:"tags/韩红/index.html",revision:"df6fe51e77e753771db5a84cafed169b"},{url:"webpushr-sw.js",revision:"05503cca9cd51d761a2fe70d0c79a396"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
