if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"24b02178e502e89b7b1fe2ec18dc1bd1"},{url:"404/index.html",revision:"db4d52b820565b7476334144374e99af"},{url:"about/index.html",revision:"8f74abd7ca70d257be3f3796040b21b4"},{url:"archives/2021/03/index.html",revision:"99443af16e0a5b7927dd437f40423bd2"},{url:"archives/2021/05/index.html",revision:"382bf7e84d569094d49ed04dad4adef7"},{url:"archives/2021/07/index.html",revision:"ad58e6f101ed9b9a643aa0d3a69b7ede"},{url:"archives/2021/08/index.html",revision:"960f74da81b54ccf6460dbd6a7f5bb0d"},{url:"archives/2021/09/index.html",revision:"d36d1d6601de4e88e5216b0a58cc737b"},{url:"archives/2021/10/index.html",revision:"2d86bf4289670abb182a6a80b282d008"},{url:"archives/2021/index.html",revision:"6919a96fff629c0a2e32fbeeeda397dd"},{url:"archives/index.html",revision:"2b596aa43fb86fa753bd014df2e16f77"},{url:"bb/index.html",revision:"0a7e2149197544244aa200296d6aae99"},{url:"categories/ai/index.html",revision:"cc01f5be840515089d26ffe87f134e9f"},{url:"categories/blog/index.html",revision:"68e54d092c4fadb98ff8b2a74847773a"},{url:"categories/bt/index.html",revision:"672db1553d1559d6e6dd37d8ef19f4e7"},{url:"categories/docker/index.html",revision:"b3f80490e1b3bf7eb911d55facca9fc6"},{url:"categories/embeded/index.html",revision:"141debdd3d336661ee0051694c801320"},{url:"categories/gitbook/index.html",revision:"bf65e870c5c1e589cba200be8f6c9015"},{url:"categories/gitlab/index.html",revision:"ff7f430e809272667aa7842cb2f3c1d7"},{url:"categories/hexo/index.html",revision:"6c13284abf049e19a25738ca3e21aa6d"},{url:"categories/ide/index.html",revision:"7d158592853420bd303e62d15eea7d7a"},{url:"categories/image/index.html",revision:"b979383d3bfa31bfa39acc45d4cde246"},{url:"categories/index.html",revision:"13bb1c3dc1cb97d79c558ffc9875219a"},{url:"categories/linux/index.html",revision:"f2b2b5f3ac5eb94706527f02290ac0d9"},{url:"categories/music/index.html",revision:"b4a7d6984eb093ddaeb90fce8e7be3a7"},{url:"categories/mysql/index.html",revision:"97686bfd1a474c28545aba1acb93849b"},{url:"categories/nas/index.html",revision:"dd6c5e03ab0a36effaf045bcb5244fc6"},{url:"categories/note/index.html",revision:"cdc7b784e8304b97634fdd98a0bd40fa"},{url:"categories/notebook/index.html",revision:"49c1557b94b2826e33d5893d8da44a7e"},{url:"categories/PMBOK/index.html",revision:"726abb4c453df07954e995f16066a514"},{url:"categories/qnap/index.html",revision:"eb3b78fb3d0e2e23daa8eea249a9a7c9"},{url:"categories/tools/index.html",revision:"277b7ec17d120a63a4333a36b8a13695"},{url:"categories/video/index.html",revision:"c94294476a9ad5d2c6ec0b0ddcaeb126"},{url:"categories/vps/index.html",revision:"a3049684f41df05c6f3b7be2968985fe"},{url:"categories/web/index.html",revision:"fd20a04c9706eafc05d4a0fe3588edc1"},{url:"contact/index.html",revision:"406f0fbe2eea82a0a99e18fbc89ca1e5"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"c3fdb18797326da50d917a0ea63e45a2"},{url:"dash/index.html",revision:"ff28242cd80dda3562b497c0c4d5ea4c"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"frendlink/index.html",revision:"85c0913dc3e03ec2e4f94b0afd6fb5ff"},{url:"friends/index.html",revision:"d63dbc8ff269b1cf15e579818783c3f1"},{url:"galleries/2020/index.html",revision:"1c5d9550fe30be8aa245a3a97f572b5a"},{url:"galleries/index.html",revision:"8720939be1c82672a505f80f9e0c8753"},{url:"index.html",revision:"a1e1727b7ebbd48c14cf72842cf8d861"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"a2cd3dda09a2adb2608337273bf94acb"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"js/snow.js",revision:"ecb7e27accae76aa79fbdb1817fcd032"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid.js",revision:"f3687bf99ec4a8b6608d45d2809eab00"},{url:"libs/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/prism/prism.css",revision:"3438405b32a6ebd86a9cd1f80e92e3da"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"myPost/index.html",revision:"1c7086c167b00cc098912516d4e7d3cf"},{url:"myProject/index.html",revision:"49798ae1477f710067b2cb65c1e87591"},{url:"myTeck/index.html",revision:"5f2157073592ee284def0fdf92ea36f2"},{url:"needtoread/index.html",revision:"461f423eaa20d8a10984d34249e3d435"},{url:"posts/10fee780/index.html",revision:"161e08cfb2dd99a789a698f0009e004b"},{url:"posts/13894dce/index.html",revision:"59aaccbae8c85968d276323afc6c3629"},{url:"posts/1802a8a7/index.html",revision:"a24c07d5fba7346e7569702928e97228"},{url:"posts/1991789c/index.html",revision:"8c968b1517f5dbceed0f02ff1e91c087"},{url:"posts/29a820b3/index.html",revision:"de57b9bd92af3e09a9c01cc4c00e29bd"},{url:"posts/2b9325d0/index.html",revision:"fbe7b566851a911302723a6c20f07a2c"},{url:"posts/3847ad58/index.html",revision:"ecaff91fdd9261c9c4baf8c74446d2d6"},{url:"posts/40300608/index.html",revision:"63f9cbcc79478fc65cf3bc44976f2d43"},{url:"posts/42b6a86d/index.html",revision:"da24d8e0c209a4386df832907d6d962d"},{url:"posts/44557ab0/index.html",revision:"89cc350aae5fc6ce263f0fb5100c5283"},{url:"posts/448f849b/index.html",revision:"5da81b1654c8f0c7543dd5fb50536e25"},{url:"posts/45f878cd/index.html",revision:"34eb99fef0923c897543380e508bb02a"},{url:"posts/462f1e5c/index.html",revision:"ab59e8bebeb6039c9a8fb5a487c8e331"},{url:"posts/465d2738/index.html",revision:"3ffc493f594dbe53f099d50f7d7fc22e"},{url:"posts/495db4d3/index.html",revision:"88d21a93eed48f57dbfcae7eac623012"},{url:"posts/509c7bd3/index.html",revision:"eb2841e82d202c6cf99c7c252a694055"},{url:"posts/5b1993ac/index.html",revision:"94050197671d24ff51219dc5f4479753"},{url:"posts/647e6265/index.html",revision:"173e2731f15c70d468e7e396c63dc611"},{url:"posts/656a0abb/index.html",revision:"beb328f8c5afe7d4484db2223f99d3cf"},{url:"posts/69a052c9/index.html",revision:"aa6b19a970bd5b42f99c5ff551918fbf"},{url:"posts/6b2ba137/index.html",revision:"7b7e53abdbdf730947ad9eddee0a8a82"},{url:"posts/7790e989/index.html",revision:"07b0d789713f13ff89b6813ecfe526ad"},{url:"posts/77da2f80/index.html",revision:"b6ae03b462b738087edbe4019666d0c7"},{url:"posts/7b4e434c/index.html",revision:"cc73902fb79b03f72d1a44a0172b0eda"},{url:"posts/7fe86002/index.html",revision:"9f56b5d5f9402a5cfd2fa201a58744e4"},{url:"posts/80906b88/index.html",revision:"f83d6c9eb3bf235916a82f5ebc7506fb"},{url:"posts/8f76d9dd/index.html",revision:"aed4c89e5c3e6805cc89fc8cffdfd553"},{url:"posts/92d347d6/index.html",revision:"a6c8c8af064ae569a56d31bbaa597ccb"},{url:"posts/9912bd5d/index.html",revision:"3cc9891d8f3bae14e9f4dafbca48dbe1"},{url:"posts/a0f3c838/index.html",revision:"4801b6f6e2864dbbaab8cb0755ef27f8"},{url:"posts/a8535f26/index.html",revision:"f78bf9f57d628c8bfd108ed2ff69d0f6"},{url:"posts/acc13b70/index.html",revision:"c9e6c9ee2c9e8e4ec073ccf1262a9e81"},{url:"posts/b1fe1bb8/index.html",revision:"29844255f05a87f1259505f3a68a242a"},{url:"posts/bb600b4b/index.html",revision:"526a1ffff59614175fd905d3397493f5"},{url:"posts/c945eae1/index.html",revision:"fe5da258cacc4644ab648874a81ccd4e"},{url:"posts/ca630feb/index.html",revision:"654733121f8c5590843576df91028dc3"},{url:"posts/cb623532/index.html",revision:"651fd80441ebc6d23a5cc0d318297ec1"},{url:"posts/cf0f47fd/index.html",revision:"99560da7562435891aaf5bbc5adc3224"},{url:"posts/d08eb7b/index.html",revision:"047e6a74a6c808459e19a4461a8ba3f7"},{url:"posts/d5f56dd0/index.html",revision:"7b1f195e5bad56f29a4ce7290140ef36"},{url:"posts/e3ee7f8b/index.html",revision:"a4ebdbd00d2f3f8955dddea4463236bb"},{url:"posts/e6086437/index.html",revision:"e459c0085692615b3361a6e7632d1684"},{url:"posts/e6d40157/index.html",revision:"dc3b0b767d4acbcac4b7c8c1782b688b"},{url:"posts/ec2cad2/index.html",revision:"528da47d2a49618523d111eebf67c50d"},{url:"posts/f0b0af52/index.html",revision:"415871bf3abc58f7ba12a404e9416742"},{url:"posts/f6b32521/index.html",revision:"91aa9f68ffb871fae8abdf89d3a72f1b"},{url:"tags/3531a/index.html",revision:"3ddcf5c3e8a5452faf1646b1b3bf55f3"},{url:"tags/3798M/index.html",revision:"9e7f226896d38d5a1eaa90f2e5b251da"},{url:"tags/3a/index.html",revision:"21c3ce1fce6f89082f83f192039888ba"},{url:"tags/3G/index.html",revision:"71e3e9cced8cd41424cddb2f10a61466"},{url:"tags/4G/index.html",revision:"1023dcd8a4c910badbcfe8639271cd01"},{url:"tags/5W2H/index.html",revision:"f3ae4146c5d40281da8cbcf13613edfe"},{url:"tags/ae/index.html",revision:"f78fb693cb1792c0909ab18f681430c9"},{url:"tags/ai/index.html",revision:"c00fce98fcc17a64f37e0d99e64d286c"},{url:"tags/Apache/index.html",revision:"1b163acf2be94d33ca5b8cefddd552c0"},{url:"tags/ATI/index.html",revision:"5a4ea14e21c43d57df49cc49ba1eaf19"},{url:"tags/blog/index.html",revision:"a6c96bd714e92ee81cafc5df38d00fb1"},{url:"tags/bt/index.html",revision:"53f1c2a0bf76eeff3bc7147ebcd7e3a6"},{url:"tags/BT/index.html",revision:"9addf8a3b0fa78c47e74937c2f210699"},{url:"tags/ccs/index.html",revision:"cb1ba1126701d75f3d5b117671599c2e"},{url:"tags/cdn/index.html",revision:"ed6487ecf3a84abcf25d797ab9e66ded"},{url:"tags/cmake/index.html",revision:"519a09cfa701b76c24580843214c79f6"},{url:"tags/Crack/index.html",revision:"0b7bc63fb98c62c79c6a8ab3a98c7293"},{url:"tags/css/index.html",revision:"d9740d52805845c90e4561f46157e761"},{url:"tags/Debian/index.html",revision:"4a7140f3bf4a111b4e28d6ab538ef33e"},{url:"tags/develop/index.html",revision:"dc0e460fb88168f003e1860e9a98e34a"},{url:"tags/DNSCrypt/index.html",revision:"9d640b5ed7de8e73b30573fd3f4481f9"},{url:"tags/DNSMasq/index.html",revision:"70a87670dac09809d6aba3c433222611"},{url:"tags/docker/index.html",revision:"6d87446993e5860defe54e8fd49705f9"},{url:"tags/Docker/index.html",revision:"10058e817dae03fb82fd0b3d68f54718"},{url:"tags/Driver/index.html",revision:"41f6aa2d70b194bdf5348b83f4088d59"},{url:"tags/ED2K/index.html",revision:"03a25d5edc22071f796cb62b464bc4e5"},{url:"tags/email/index.html",revision:"965b08e4d74511e56c3933fd471e0529"},{url:"tags/embeded/index.html",revision:"2d6e902bbf798dc88d8824dbd5c5f29b"},{url:"tags/emby/index.html",revision:"5cad40b833d0672fedd92d8b3061c01a"},{url:"tags/Emby/index.html",revision:"ca549df3096585cd655d84f9c92dcf6d"},{url:"tags/face/index.html",revision:"05630bf5e829779c7bb4a24209258c95"},{url:"tags/Git/index.html",revision:"677f35776f83b88b1b5d697592b96c95"},{url:"tags/GitBook/index.html",revision:"8574c390ec8689f0a0cc7ddde0c16f4a"},{url:"tags/Github/index.html",revision:"a0d1ed49f33d977de64f0f689cc9bf5a"},{url:"tags/Gitlab/index.html",revision:"41477525d185751169e3efaa235780ae"},{url:"tags/GROW/index.html",revision:"e4885440d24da210ae7b556b23bd4f22"},{url:"tags/hardlink/index.html",revision:"126af198546fa33817b76228d9f9b66b"},{url:"tags/HDD/index.html",revision:"a12b14cd8abfb99fee399b22254ed083"},{url:"tags/hexo/index.html",revision:"04e99726ed857df96bd46229166e7290"},{url:"tags/hisilicon/index.html",revision:"70236bbac6737d56dc65ecaa4980f034"},{url:"tags/Hotkey/index.html",revision:"4e2f5765f50dcd7eacac7974f9469ba2"},{url:"tags/http/index.html",revision:"e1b11db88ff613b3134cb9a818803f12"},{url:"tags/https/index.html",revision:"e05a51cfe67c9042f0fd5ccadd10a0f6"},{url:"tags/ide/index.html",revision:"c6fa1a42b69241a85c36988affc0ea4a"},{url:"tags/image/index.html",revision:"21c377e0f04e3413814b3cbbc6fa1ce4"},{url:"tags/index.html",revision:"6aee56dc49daf603c6bd040ade708a8a"},{url:"tags/ipv6/index.html",revision:"08d67ef2351b56fe7707ba32d8ad1978"},{url:"tags/Jeckett/index.html",revision:"9e437ef7f64599cd3086037d34640b94"},{url:"tags/Jekyll/index.html",revision:"60d4df0a1c69657d6069514bf34182f9"},{url:"tags/Joplin/index.html",revision:"d8630d9b5984a38c6f28d8087392b72d"},{url:"tags/js/index.html",revision:"ee69f993e86e0dda373b500fdb7bcfa5"},{url:"tags/JSP/index.html",revision:"231c8c606005ea140a05bd953cf51e3a"},{url:"tags/Kernel/index.html",revision:"fe508739df5efbe950ef6831e9b0085f"},{url:"tags/LAMP/index.html",revision:"f70012246565464c0495a46a0c2c24da"},{url:"tags/Laptop/index.html",revision:"3d3145c1627d7a1f445de0f9f90c3c93"},{url:"tags/linux/index.html",revision:"e510a84f9b8ff2c12ce87f552d16fce5"},{url:"tags/Linux/index.html",revision:"7e4224528225201b0fec00fbd29100f8"},{url:"tags/Mariadb/index.html",revision:"5d7ffe890ec4483cffcbab385608c888"},{url:"tags/markdown/index.html",revision:"e94a54c772e3d974f57dea0c31649864"},{url:"tags/MarkDown/index.html",revision:"34882d3984325e161b431c79cf5927d9"},{url:"tags/matery/index.html",revision:"62a6906012d2af34ea4a456d1434f0a2"},{url:"tags/Mermaid/index.html",revision:"32107100ce6e5391676fb3be5d4c4320"},{url:"tags/mp3tag/index.html",revision:"bcb55a2540b301d693fb69f8e649d4a2"},{url:"tags/MPP/index.html",revision:"89d074e9a4974dd6ae7854341babe15e"},{url:"tags/mstream/index.html",revision:"27966b2decee7363c14d40bc76757f9d"},{url:"tags/music/index.html",revision:"a311f022b8e5f0ed45e682390cdfd87b"},{url:"tags/MusicBrainz/index.html",revision:"47962c36e38861cbfc211f75e0993d05"},{url:"tags/MySql/index.html",revision:"99114b400cf744e6c690831a5ec7b0a4"},{url:"tags/MySQL/index.html",revision:"907fedddbe2ef8865521cc4e1c09c9f5"},{url:"tags/nas/index.html",revision:"cee1fd174ae4887f6b23edb3d229d568"},{url:"tags/Nas/index.html",revision:"e6196a8327c971ef8008f08d6dc5e7d1"},{url:"tags/Nginx/index.html",revision:"eebaca2eabcfb3ff8e84a28381f75a53"},{url:"tags/note/index.html",revision:"2ec96ab8340c66fb496d85ee603b1c30"},{url:"tags/OKR/index.html",revision:"9ca1e1c4809ab97c95d83d14d2bd0111"},{url:"tags/PDCA/index.html",revision:"ace1261902d7c85da8fb677390fe4aeb"},{url:"tags/PHP/index.html",revision:"55a83c4386f8d05f37e012c280daa4f1"},{url:"tags/picgo/index.html",revision:"b83edfaec26f02474d55ec2f526178dd"},{url:"tags/plex/index.html",revision:"60f6a850d39c7fe4e61851b9c489254d"},{url:"tags/Portainer/index.html",revision:"2de44d06f7ecb585f9570248b70776d3"},{url:"tags/proxy/index.html",revision:"631a61b6822e4ba59832e4c71261fa08"},{url:"tags/pt/index.html",revision:"9beeb4b78865ca929123958ee80c1bf0"},{url:"tags/PT/index.html",revision:"0e1e8ea8bc4f6c66974f8fe9a1f9cb44"},{url:"tags/qbittorrent/index.html",revision:"b04ae95e9e9dd5f251c1e78619226733"},{url:"tags/qnap/index.html",revision:"eaedc0c362f4f01a7dda89a38e0ae53f"},{url:"tags/QNAP/index.html",revision:"48964c23e57dfa92c2d06777fbb49d78"},{url:"tags/Rigistry/index.html",revision:"d88a6461474c3749a0d7ee7b1a2eaf7a"},{url:"tags/selfhost/index.html",revision:"6d7e1c388f9bafca0333716810ce69ba"},{url:"tags/seo/index.html",revision:"edb4992937e84b90d0f4cf43f706dd06"},{url:"tags/SMART/index.html",revision:"c33d382f94bba353d3e6b65520d39dbd"},{url:"tags/Sonarr/index.html",revision:"cc2610c0bc8eb88b7dd78e72779013ab"},{url:"tags/sound/index.html",revision:"9e3fa7a9df7539c7d02508258c6e5f6b"},{url:"tags/speaker/index.html",revision:"1e2be527055bec71453d8c74a23cb1d3"},{url:"tags/SSD/index.html",revision:"d3ba11172db7395b7e02b2b93fa673d3"},{url:"tags/ssl/index.html",revision:"a3013c4e1fde907c0350ab1724f02ba9"},{url:"tags/SSL/index.html",revision:"bddfe63b90b529bbab3f69ba06704c24"},{url:"tags/swarm/index.html",revision:"fc656ed31673fe8f73f423b4bb72dadb"},{url:"tags/SWOT/index.html",revision:"e347df5c23f1baa2f1d185be3fa2841c"},{url:"tags/thinkpad/index.html",revision:"84c3e8b2b68c6a0e29b128000ba9d820"},{url:"tags/TLS/index.html",revision:"8d69c470cf1359f4dec51b10004bf568"},{url:"tags/tmm/index.html",revision:"fd5b2b515956707bc1dd4383d9bc3e3b"},{url:"tags/Tomcat/index.html",revision:"0cf686c8f77f3d8dd472d3d99df31f92"},{url:"tags/traefik/index.html",revision:"5144671291c784dd75e16e0081a1a6e6"},{url:"tags/transmission/index.html",revision:"144ead3dc2d122b05585137963701548"},{url:"tags/Typora/index.html",revision:"38361b9ce82297a43d8899e8b3ed7309"},{url:"tags/ubuntu/index.html",revision:"79a74ecfc36214fe169235a52a8cb7ba"},{url:"tags/UNF/index.html",revision:"411740ff3e4e1129d7f0c99b64cdc51f"},{url:"tags/vim/index.html",revision:"ef3f8794218a43f39ed0e7a7079512c1"},{url:"tags/VPS/index.html",revision:"102227db0fc7c339b91c327b92589136"},{url:"tags/vscode/index.html",revision:"507a0679dc52e27c9850cfc08af80ebb"},{url:"tags/Watchtower/index.html",revision:"e52caa654f1e70506031ff2c65d939ef"},{url:"tags/WBS/index.html",revision:"e89978013a66c054c5aef6540e8b8566"},{url:"tags/web/index.html",revision:"bab8d66dd725c7b20b8d2e36932e3100"},{url:"tags/Webdav/index.html",revision:"32f2169cce4c859393683238b997c080"},{url:"tags/WIFI/index.html",revision:"90008ce4f6ca04a8eb2bb3ad4c09dc18"},{url:"tags/wiz/index.html",revision:"3af9aa0e92fe6b645499226ad951c198"},{url:"tags/优化/index.html",revision:"e690b230dcade0471e6fe91936657086"},{url:"tags/刮削/index.html",revision:"1d22202b248046bc80d78e5a421aeb85"},{url:"tags/启动/index.html",revision:"b1c2384251b0d01581be6c5dce4e613d"},{url:"tags/字幕/index.html",revision:"18e30f70fb73a9c59d3d0409a5a5e19d"},{url:"tags/安全/index.html",revision:"892b27df7c4f8918eac2a60a8cd10911"},{url:"tags/宝塔/index.html",revision:"4dc3191befec731a7579aa795d5ea3db"},{url:"tags/嵌入式/index.html",revision:"00d29d60952b05c2bf654e7ad080a63d"},{url:"tags/建站/index.html",revision:"b5f1d23d3d68e47dd587753116ca88a2"},{url:"tags/技巧/index.html",revision:"46ec8f9e98fa981ceebf14b5fd27c8c9"},{url:"tags/插件/index.html",revision:"f55060432b322fba66bb503e0ecb9efd"},{url:"tags/教程/index.html",revision:"cdb524adba8e177b061a71f1e7b2ab4f"},{url:"tags/硬盘/index.html",revision:"0482cd787d0add691bfb01e783972c8c"},{url:"tags/移植/index.html",revision:"42614330d72b2eb133fc72312f18ecb0"},{url:"tags/管理/index.html",revision:"bb374fc92affd0c87412adee47602f87"},{url:"tags/编码/index.html",revision:"513dd5addca55f548ebe6e7ab7761776"},{url:"tags/群晖/index.html",revision:"d5f635f3b5e5cc322d15de276a9b4410"},{url:"tags/隐私/index.html",revision:"c40b7233ef5da066b8fd85bd49c56553"},{url:"tags/韩红/index.html",revision:"8f0a332b38ac4f85f629721811104ce2"},{url:"webpushr-sw.js",revision:"05503cca9cd51d761a2fe70d0c79a396"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
