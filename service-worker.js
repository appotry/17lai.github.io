if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2fe6d2d0d4797e6221747ae5dffe67ec"},{url:"404/index.html",revision:"d05f0e7972b8f22b8414af31c80db298"},{url:"about/index.html",revision:"c28908f8b50cccbd0338d8012f59e2f0"},{url:"archives/2021/03/index.html",revision:"5d6d9b2bbd8f804ebd407b7a88cea9a9"},{url:"archives/2021/05/index.html",revision:"ca14cfb1bf2ba0fa09bc59b676aa80c9"},{url:"archives/2021/07/index.html",revision:"6fce35c4b482ce1c253d148b0868da82"},{url:"archives/2021/08/index.html",revision:"3853174ce84a29708beae7bb7e89f1c9"},{url:"archives/2021/09/index.html",revision:"990ddad5334680742cc0800d9e3601ed"},{url:"archives/2021/10/index.html",revision:"3d3d8d3e20ee09c2740efa42f1be8cb3"},{url:"archives/2021/index.html",revision:"7fe754bdd2c4466dfcead98b01f4c328"},{url:"archives/index.html",revision:"adf3e4c4ddb1e1051e2264996037f48c"},{url:"bb/index.html",revision:"e9d851e1406c45b616ebb9e35451d64f"},{url:"categories/ai/index.html",revision:"594ce15c925a9f525792a47fac7a93b5"},{url:"categories/blog/index.html",revision:"a170b785e76880da2fa2bdfe7ec3913e"},{url:"categories/bt/index.html",revision:"039eeae8a3d0af059120a4d7ca470d87"},{url:"categories/docker/index.html",revision:"3da6892e5b692bf5ac51766a43c67d9c"},{url:"categories/embeded/index.html",revision:"e391933bb1b10719940d3bdff1590173"},{url:"categories/gitbook/index.html",revision:"b89c21444cffff9e536ace4ce58310fa"},{url:"categories/gitlab/index.html",revision:"b30362d47b5b36ed055b47244c84ad35"},{url:"categories/hexo/index.html",revision:"8d8a84b5af18dd78c889ee0c5cbfc0fd"},{url:"categories/ide/index.html",revision:"d4c0674d4ce92609889c9bb6f914d4a1"},{url:"categories/image/index.html",revision:"fa85574079444f16e85ba68aaaf37ccb"},{url:"categories/index.html",revision:"361a07d5753b4a071ad1e4716c1b55b5"},{url:"categories/linux/index.html",revision:"bc135a5d2978f89e7a7941d50f30712c"},{url:"categories/music/index.html",revision:"73f3a41ec5b07dd1de39669665e37b4c"},{url:"categories/mysql/index.html",revision:"d14c661d7971fff156ed9031ca19534c"},{url:"categories/nas/index.html",revision:"7fcb0d89dbe73969553b0c2dcc6fb55d"},{url:"categories/note/index.html",revision:"0b98c64ec7fe24469b7c19e8c2421675"},{url:"categories/notebook/index.html",revision:"d12243b34f01ecd2e7b21d97cc4492ce"},{url:"categories/PMBOK/index.html",revision:"6c03a312acbe44f811b92277c2109f2f"},{url:"categories/qnap/index.html",revision:"a6a008136753e8d682ab75818710adea"},{url:"categories/tools/index.html",revision:"5ce828ec769ad1057544178d096b8af2"},{url:"categories/video/index.html",revision:"3ba375373e23e872edfeb427214a7851"},{url:"categories/vps/index.html",revision:"21634812a4c16204c62525cd791c605a"},{url:"categories/web/index.html",revision:"3ea9b0e00e0f0e59c4e319d2efac9b49"},{url:"contact/index.html",revision:"a580e3d1883c3911cd7c67534a73c3fc"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"4d4c2a31a80db8fb590a6f733a761d37"},{url:"dash/index.html",revision:"9d7e78d21c0852acdc7765090dcb58a6"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friendlink/index.html",revision:"7d1835a305710ee98dc2adb96c201e0e"},{url:"friends/index.html",revision:"02e0fd4a2f60c629daefb2cbb111eab3"},{url:"galleries/2020/index.html",revision:"a3a017bbc932810a5029f518e919214f"},{url:"galleries/index.html",revision:"c5bb5ed195e9b04edf32b87b182a1252"},{url:"github-card-lib/githubcard.js",revision:"caa86aadbe330a8ee459a4ef9a1e2bcd"},{url:"index.html",revision:"dc2fa69b913611ebfe1c3287f284b5f3"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"a2cd3dda09a2adb2608337273bf94acb"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"js/snow.js",revision:"ecb7e27accae76aa79fbdb1817fcd032"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid.js",revision:"f3687bf99ec4a8b6608d45d2809eab00"},{url:"libs/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/prism/prism.css",revision:"3438405b32a6ebd86a9cd1f80e92e3da"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"myPost/index.html",revision:"bceaffd6e71eb87cea57fd3069db6b11"},{url:"myProject/index.html",revision:"b4a61cff1ac26d9b1ad6bad436c3acc4"},{url:"myTeck/index.html",revision:"7e98427e14fdf417373ac5784a40590d"},{url:"needtoread/index.html",revision:"ccbef9ea9034bba70394620bc18dc84c"},{url:"posts/10fee780/index.html",revision:"792d363798ad8b13820b874b5af11df4"},{url:"posts/13894dce/index.html",revision:"549030e5300cb96c5640fbf5cf0072a6"},{url:"posts/1802a8a7/index.html",revision:"4979505c7d86e2082b81d3135f521acc"},{url:"posts/1991789c/index.html",revision:"86bc07dc42f256b270c3c50705d802c6"},{url:"posts/29a820b3/index.html",revision:"caf972cde1ce94c6d0e24c173e0a7abf"},{url:"posts/2b9325d0/index.html",revision:"10ecfaba4edb064e8c8bc6d55feb6942"},{url:"posts/3847ad58/index.html",revision:"3048f7c89737dce1765d6fe13e12f3e2"},{url:"posts/40300608/index.html",revision:"498015b2f6f07065b646bed8463ca914"},{url:"posts/42b6a86d/index.html",revision:"8d4906e9935adf8f09c2649ae0194268"},{url:"posts/44557ab0/index.html",revision:"e8682d483a386e6c145bfbcd93f982eb"},{url:"posts/448f849b/index.html",revision:"26ca9a255e43cb40e8f97c515aa8ff44"},{url:"posts/45f878cd/index.html",revision:"b90cf859c3252cd76defefa0101eb88a"},{url:"posts/462f1e5c/index.html",revision:"f0ddc3f2b63766d1d2a349664758e118"},{url:"posts/465d2738/index.html",revision:"19ef197c85b309e85ba5aad94c9485f6"},{url:"posts/495db4d3/index.html",revision:"476c3a276e985a5e210b3700760ada8a"},{url:"posts/509c7bd3/index.html",revision:"6e736c984feb824ccccbff17ab8dc6a6"},{url:"posts/5b1993ac/index.html",revision:"cc1550c8ee120ec71de105831649041a"},{url:"posts/647e6265/index.html",revision:"0ffd4cde15542a9e12e7e7e773075611"},{url:"posts/656a0abb/index.html",revision:"3a52cc34b155a4d3334c0818155e4ba2"},{url:"posts/69a052c9/index.html",revision:"fd4d87416d1601d98d35b5355d61ccfa"},{url:"posts/6b2ba137/index.html",revision:"62167a926d33d916f778d78ad89cbcfe"},{url:"posts/7790e989/index.html",revision:"99200a35b1d4288482f2c3d766e32e6d"},{url:"posts/77da2f80/index.html",revision:"9906a5e1c2e4d5eac0095fe961ec7997"},{url:"posts/7b4e434c/index.html",revision:"5047e3bcbdf986b38eba8491b82623f6"},{url:"posts/7fe86002/index.html",revision:"d2f2765527056ac53884888a46f8a050"},{url:"posts/80906b88/index.html",revision:"dc4304e868632a92ad78f7cb4bff861d"},{url:"posts/8f76d9dd/index.html",revision:"539cb49a81134b426cda2bb725d9d4e7"},{url:"posts/92d347d6/index.html",revision:"15b560687ced377ee1de7df4b52320f4"},{url:"posts/9912bd5d/index.html",revision:"8656b4d029ab6e8a00741e095a8e73f8"},{url:"posts/a0f3c838/index.html",revision:"760b8af551d4854c6c992a9f500850b4"},{url:"posts/a8535f26/index.html",revision:"ffb53b7f8520842d2c8df6689a582319"},{url:"posts/acc13b70/index.html",revision:"65bd50235643460ee80f9996bd2f14de"},{url:"posts/b1fe1bb8/index.html",revision:"e830e93390482c790fb6150177da7057"},{url:"posts/bb600b4b/index.html",revision:"5dc650a3741ae2722c932a7799b9b729"},{url:"posts/c945eae1/index.html",revision:"7021575d200255c2afd0eb9730c9221d"},{url:"posts/ca630feb/index.html",revision:"e2653646cd107011dd36b8057645f67a"},{url:"posts/cb623532/index.html",revision:"74a75296a91eb034b1b2768f3c2f7bba"},{url:"posts/cf0f47fd/index.html",revision:"37638a890ab07bd2829c9edbdd1a494b"},{url:"posts/d08eb7b/index.html",revision:"541234735493747acfca48aa8a08917b"},{url:"posts/d5f56dd0/index.html",revision:"48ed2f671518f563033c7354ba2b0830"},{url:"posts/e3ee7f8b/index.html",revision:"a706ef8354e66a3a1bfd1a8d8948baa1"},{url:"posts/e6086437/index.html",revision:"f0ae43b62806451d8d029ccb7a4639a0"},{url:"posts/e6d40157/index.html",revision:"3ee4344d3e800761cbe8571d5395ab1c"},{url:"posts/ec2cad2/index.html",revision:"2dc3682ccf192274b99fe59b23be6d1e"},{url:"posts/f0b0af52/index.html",revision:"08c9eee6f66dca1010376e0320912fd8"},{url:"posts/f6b32521/index.html",revision:"455dffad656a539e08d213c3d274f2be"},{url:"tags/3531a/index.html",revision:"3b5c7619ec6157e9fcffdf1eb31bdc09"},{url:"tags/3798M/index.html",revision:"d283baa69be6a0e02d84dad6fe670e0e"},{url:"tags/3a/index.html",revision:"f07a44ac3d03c4136ba0f2e1535f8f52"},{url:"tags/3G/index.html",revision:"290304019def5c0063f6766f938d48e0"},{url:"tags/4G/index.html",revision:"f7af0133ebc40087ae46de7ee18f9cea"},{url:"tags/5W2H/index.html",revision:"04331e7c8d2ca7ac5d19cec3b038e4d2"},{url:"tags/ae/index.html",revision:"5fe61864ea20e3acaa764587da48b0ba"},{url:"tags/ai/index.html",revision:"b6fda1af7cb6728420754ade75494d04"},{url:"tags/Apache/index.html",revision:"8223a433437c0346ac293c7ea0493419"},{url:"tags/ATI/index.html",revision:"a1566266a27e9e4b9353f4aa5a155965"},{url:"tags/blog/index.html",revision:"b6b71710698cc1a86dfe0aa7664a37d2"},{url:"tags/bt/index.html",revision:"6ddb69bcdb12798b5be47e4d671c7200"},{url:"tags/BT/index.html",revision:"5413674f122f242db36a2e0a279cee2f"},{url:"tags/ccs/index.html",revision:"45353dbde40de23bc05300c7cdf6f7cf"},{url:"tags/cdn/index.html",revision:"f48ea27457959c691842eeccd9913998"},{url:"tags/cmake/index.html",revision:"0d70b503b55e1c28899fc7b3f19a33b7"},{url:"tags/Crack/index.html",revision:"dd84831886f7045531c5a997b5f1d628"},{url:"tags/css/index.html",revision:"60b7dddc69739076abd75fd168b0ca73"},{url:"tags/Debian/index.html",revision:"da88e2b2836877668e9d0bb0bb1883b7"},{url:"tags/develop/index.html",revision:"eb8b2f350dae841d08144d612a0e608f"},{url:"tags/DNSCrypt/index.html",revision:"b5ebdc195eea7fb303a7b31f4ac000c8"},{url:"tags/DNSMasq/index.html",revision:"af3956f3bd4df83005e528e618a5fff4"},{url:"tags/docker/index.html",revision:"7013fe70648115039423c4285e11a698"},{url:"tags/Docker/index.html",revision:"84fe72ffad4bfbd45b1c9cdcbe993899"},{url:"tags/Driver/index.html",revision:"b9820ca244f82c117896486178ac9480"},{url:"tags/ED2K/index.html",revision:"9cb4c4bd3e3007547d4c43d759fc33ea"},{url:"tags/email/index.html",revision:"db9b648da48a05e272ec22f35181c67a"},{url:"tags/embeded/index.html",revision:"dfeb5d61ee37aad429ee41baa4053d3d"},{url:"tags/emby/index.html",revision:"6f5b184bf61084bceaedbc17891f3d36"},{url:"tags/Emby/index.html",revision:"4286c4170462c5859b70046bcf1d91fd"},{url:"tags/face/index.html",revision:"d28e5de2055d67b381f3f00432fa994c"},{url:"tags/Git/index.html",revision:"ff744d442e7fe9ec424427888364bdb0"},{url:"tags/GitBook/index.html",revision:"18bb47023b81412bfc369569d06fec3d"},{url:"tags/Github/index.html",revision:"c79d4cc036f3266da0e57d02b05267ee"},{url:"tags/Gitlab/index.html",revision:"22ca969bcdbb6271ff4f789644a030af"},{url:"tags/GROW/index.html",revision:"951118aee9122a6ac339162f415a08c6"},{url:"tags/hardlink/index.html",revision:"f967d327fd84228ddc63d6c9d69b4e3a"},{url:"tags/HDD/index.html",revision:"48f2dbfd96e6b5b51dee34aea9c646d6"},{url:"tags/hexo/index.html",revision:"1ec74df85bd4b5fcff3f5fee05303dda"},{url:"tags/hisilicon/index.html",revision:"c838504e8128407efb48ce8da5983dc6"},{url:"tags/Hotkey/index.html",revision:"8a7790796a7bd5c141dc3321a8fd1051"},{url:"tags/http/index.html",revision:"f063148a59672adb30cfdc6c948e8cdd"},{url:"tags/https/index.html",revision:"814115b5366d9eead2b11222257e922a"},{url:"tags/ide/index.html",revision:"77b217c4e8eae2c13f0fff472683dab7"},{url:"tags/image/index.html",revision:"f7c0881f50feb5a9d01d8fb6aa021449"},{url:"tags/index.html",revision:"a2047ed1484bc912565c055975c60626"},{url:"tags/ipv6/index.html",revision:"fdc6c3bb65044d57af49fc3cfcebfa9e"},{url:"tags/Jeckett/index.html",revision:"3b39f7d50d9439684b901eaeef3cd520"},{url:"tags/Jekyll/index.html",revision:"578f54e2e202f680e7f857272f875010"},{url:"tags/Joplin/index.html",revision:"0e76a37c2201a142a9ff092b4dc75996"},{url:"tags/js/index.html",revision:"37e8fc85c67760aa5d6369e609b1fb66"},{url:"tags/JSP/index.html",revision:"27d82004c072c849f4cb784d3f4756b9"},{url:"tags/Kernel/index.html",revision:"2e7821521576260fa92903fa64bc3d3b"},{url:"tags/LAMP/index.html",revision:"e76048a29bce2e5f370ab6edf4db3100"},{url:"tags/Laptop/index.html",revision:"14275a60a7564cf86a7eec60bbe51ba7"},{url:"tags/linux/index.html",revision:"1802960b42672bada194c146e481c0dc"},{url:"tags/Linux/index.html",revision:"9bf5ffda39ed207b5287874024009583"},{url:"tags/Mariadb/index.html",revision:"2282436aa978b17849e50dad90de87a9"},{url:"tags/markdown/index.html",revision:"2921a0c52a8b7db3c3538f634acc690e"},{url:"tags/MarkDown/index.html",revision:"bea1f477570b9f6494704939f5ade74b"},{url:"tags/matery/index.html",revision:"8bbd0cca28ee9b0683c3c1777f1d4a9b"},{url:"tags/mathjax/index.html",revision:"8b13b42549327544a975300081c90f87"},{url:"tags/mermaid/index.html",revision:"45adba5c1b5c65107c9b407b9b847f79"},{url:"tags/Mermaid/index.html",revision:"78761d47e8ce31f83af9f262595b80f3"},{url:"tags/mp3tag/index.html",revision:"e7493ea87ef37aedd5ffbe9afaad8680"},{url:"tags/MPP/index.html",revision:"2e64129e49e5259a7eb8a7a25d0f0b7a"},{url:"tags/mstream/index.html",revision:"34a44d8b2cc789ec02a60b2b34b40c9f"},{url:"tags/music/index.html",revision:"9f941db57cbd528be555d74246518579"},{url:"tags/MusicBrainz/index.html",revision:"dcfa53940858ab1f6b500c751335189c"},{url:"tags/MySql/index.html",revision:"c3116649e150b6be9403f4c13f885a45"},{url:"tags/MySQL/index.html",revision:"65f624fab9f24a91ae604dd92906d1bb"},{url:"tags/nas/index.html",revision:"c038973ad75dbf07515b348e705c07a9"},{url:"tags/Nas/index.html",revision:"21c79ebdcc241681e8d962177d0450d9"},{url:"tags/Nginx/index.html",revision:"f96ebd82a6247c3f4bcc4e17498ef367"},{url:"tags/note/index.html",revision:"85499eff4e7ac3719d16c7df7526a268"},{url:"tags/OKR/index.html",revision:"9aa64fae46a92ee2ce09753946bf6189"},{url:"tags/PDCA/index.html",revision:"99080f835e34d87353147bd1eb90f497"},{url:"tags/PHP/index.html",revision:"7a1a11da98512ecabb6c38de2b892577"},{url:"tags/picgo/index.html",revision:"d2b77ca3a8ae439c7e0df698d71043ae"},{url:"tags/plantuml/index.html",revision:"c8a8f16364d3ec30c26a1c8bb361188b"},{url:"tags/plex/index.html",revision:"a5618d67df2c39edb6ed17e218a44278"},{url:"tags/Portainer/index.html",revision:"c23154d08f9e0d9a54a7c0a3f929cdf5"},{url:"tags/proxy/index.html",revision:"fbcf621ea36edb73790536ed152237b8"},{url:"tags/pt/index.html",revision:"6f39c5ffe10e1c75daadad0fdd649777"},{url:"tags/PT/index.html",revision:"b6633aadec8baa038084ba0b33c8115d"},{url:"tags/qbittorrent/index.html",revision:"77145d50268bcfc9185a182bd56e623a"},{url:"tags/qnap/index.html",revision:"0a175af3d2115c155edb4b7354026afa"},{url:"tags/QNAP/index.html",revision:"049014f039702397606bed4bd779ec10"},{url:"tags/Rigistry/index.html",revision:"c490a482341ad07d5f65e0cb7c4885f4"},{url:"tags/selfhost/index.html",revision:"20b6e219c7a85ffa4b86ad78dec77326"},{url:"tags/seo/index.html",revision:"3dfc8393194bd961f3bd0fa862489c72"},{url:"tags/SMART/index.html",revision:"ef18e3fa9390ddd607cb512dc73038c5"},{url:"tags/Sonarr/index.html",revision:"327a0d928a40985faff4a2ac0bda0408"},{url:"tags/sound/index.html",revision:"887debeca763c621ae74c664aac159eb"},{url:"tags/speaker/index.html",revision:"ecf1e2013426572fee8d4746058dbfdc"},{url:"tags/SSD/index.html",revision:"bd5e69867a4d962d49b9117c8240c364"},{url:"tags/ssl/index.html",revision:"10fc40434f6794aacfc2946ad15bea14"},{url:"tags/SSL/index.html",revision:"6e728297eae0d94d282c7a87fe19d8d2"},{url:"tags/swarm/index.html",revision:"b6f279606b4cb5e98d65acfd77c7ff73"},{url:"tags/SWOT/index.html",revision:"c6b65b883df85055ee7a996ce1a9b75a"},{url:"tags/thinkpad/index.html",revision:"6dcfde39221314c39a182e89a84760a5"},{url:"tags/TLS/index.html",revision:"6c06a61d1bb0b929444f479d1b449856"},{url:"tags/tmm/index.html",revision:"4f37e0f38d3a0492d9197d64ce973216"},{url:"tags/Tomcat/index.html",revision:"c52e7eadd8b767dbadc16577cae0141b"},{url:"tags/traefik/index.html",revision:"72ca94af4306b28f2334e43ff1850d0e"},{url:"tags/transmission/index.html",revision:"04632d46f51dc0af1195c8adde9a6f57"},{url:"tags/Typora/index.html",revision:"2ac6a268bbabdf3a5453699f8c4ec1ba"},{url:"tags/ubuntu/index.html",revision:"3b176a181d0cdea8df8cb94f334dbaf8"},{url:"tags/UNF/index.html",revision:"118c1cf0a7517cf7e027a6c5ebdf617f"},{url:"tags/vim/index.html",revision:"b8f78867dfdc10d5363c2d59de477ecd"},{url:"tags/VPS/index.html",revision:"ff028471a26bf730919a57d32808052f"},{url:"tags/vscode/index.html",revision:"4c19cd38099a4f58ad98333117688a28"},{url:"tags/Watchtower/index.html",revision:"82dc65d154f89a22431c25a62f9e6c70"},{url:"tags/WBS/index.html",revision:"350b824f02878d71e9effecbcea00aa8"},{url:"tags/web/index.html",revision:"a6f0c191fac4ccf6202360d18eb8481e"},{url:"tags/Webdav/index.html",revision:"ca8dc7cfb3c5ba0f93118bec6093a0c1"},{url:"tags/WIFI/index.html",revision:"5bcfe5c8b4083391068367e5616d923a"},{url:"tags/wiz/index.html",revision:"944a6a4730c561b139e419c32fdad047"},{url:"tags/优化/index.html",revision:"f3bfca2a44a34eb1ab5346e01c382893"},{url:"tags/刮削/index.html",revision:"29ca435ced3869354824fc41ede1447c"},{url:"tags/启动/index.html",revision:"7347aef3bc9e841138b840f6fb816e4c"},{url:"tags/字幕/index.html",revision:"b3af242d659b72942a6981492dbc3c95"},{url:"tags/安全/index.html",revision:"68920742a0c85031d570312cc8f320a7"},{url:"tags/宝塔/index.html",revision:"5b795f801d67fb1fa5fd20a1994a59c5"},{url:"tags/嵌入式/index.html",revision:"257af505f07224c7fe6d9acf2053c42d"},{url:"tags/建站/index.html",revision:"82c25368960938fb0eab43cfa2cb21c2"},{url:"tags/技巧/index.html",revision:"ca7c4f7c16aa9254506082149b27d733"},{url:"tags/插件/index.html",revision:"ba25bde87ae47b9408cfde3118da66da"},{url:"tags/教程/index.html",revision:"3fb517c1d082699f61d43fe87df4da97"},{url:"tags/硬盘/index.html",revision:"2898eff87128068c994181826afeec4b"},{url:"tags/移植/index.html",revision:"a40825d529e4b5e26fc7ed64f5528c4c"},{url:"tags/管理/index.html",revision:"9cb82ca6548513f4c784a6f004ebdfc4"},{url:"tags/编码/index.html",revision:"650db4f6dcbd980eab391ce05dc48f4e"},{url:"tags/群晖/index.html",revision:"9a14dee1c6f398a9710d68ba6bdc97e4"},{url:"tags/隐私/index.html",revision:"531713d255424a6e92ace2ccad6c4645"},{url:"tags/韩红/index.html",revision:"ec67aa90591819f1b8e1e818cfdc0201"},{url:"webpushr-sw.js",revision:"05503cca9cd51d761a2fe70d0c79a396"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
