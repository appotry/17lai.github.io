if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"aaba622aba872fc6621f95937299b2c9"},{url:"404/index.html",revision:"2d65cacfb1a86e4e117964e04ab96b84"},{url:"about/index.html",revision:"2ab898788be5b74a4973207377a11475"},{url:"archives/2021/03/index.html",revision:"4d2e78a572382aed86cb60a39e363709"},{url:"archives/2021/05/index.html",revision:"206a0761cd57da2dc9127cbfa66a4b9f"},{url:"archives/2021/07/index.html",revision:"e496f5992c272af7829b6cf02b56c26c"},{url:"archives/2021/08/index.html",revision:"c19a3c50c6466ba1de4f2586b8f025d4"},{url:"archives/2021/09/index.html",revision:"17335a964802f1b0564f84867a0963d3"},{url:"archives/2021/10/index.html",revision:"a1f32b2af6fdf5e5fefca9b71fb347ce"},{url:"archives/2021/index.html",revision:"b9997a4f9dba3b0e467b1f7372a4ba3a"},{url:"archives/index.html",revision:"7597ce848b156195ef16d7717e424e39"},{url:"bb/index.html",revision:"f5867a6c9357f450b4ff9b2f010a41bc"},{url:"categories/ai/index.html",revision:"e92a960405c086240868234ac0581056"},{url:"categories/blog/index.html",revision:"bd1b3034b8374e123bcd3732dad88e3d"},{url:"categories/bt/index.html",revision:"b7143d043677af02507b2f915a452ac5"},{url:"categories/docker/index.html",revision:"bd330fc9ec33f7612fffcc99f18371c6"},{url:"categories/embeded/index.html",revision:"f3971f10fd11e0446b4a29d55b7c02cc"},{url:"categories/gitbook/index.html",revision:"643eecc024b1e4cdd821d04b880511fa"},{url:"categories/gitlab/index.html",revision:"356c43dc24f678d5f2caf2c788104354"},{url:"categories/hexo/index.html",revision:"985a930adf61c9156c488a83a0116640"},{url:"categories/ide/index.html",revision:"30e9e80fdeacb8f099b4c67ac93a35d4"},{url:"categories/image/index.html",revision:"86d373ce108ef4cb8e563c4d89de7234"},{url:"categories/index.html",revision:"ad250e204e7b795884d23061ddfff921"},{url:"categories/linux/index.html",revision:"2e6fc29bf7b0ab64a1c66e8222ec86f2"},{url:"categories/music/index.html",revision:"b56ccc4b71c11ce081092c8e3a34234b"},{url:"categories/mysql/index.html",revision:"d16ef054987d3c98ffbcde4765ded577"},{url:"categories/nas/index.html",revision:"d218c794dd22b7768fd28ba80ceb25ff"},{url:"categories/note/index.html",revision:"a3ca2de166aa48b83407dbe92fb20b06"},{url:"categories/notebook/index.html",revision:"bd625c59d1e292ec6beab9383c5e5ad6"},{url:"categories/PMBOK/index.html",revision:"b434bc532f5a2b73caa10e00556867e1"},{url:"categories/qnap/index.html",revision:"7a941effcf0a211c1b79c4f9d95a2001"},{url:"categories/tools/index.html",revision:"5ce45f5629b7cd6bcae817693261bdfa"},{url:"categories/video/index.html",revision:"dde3afe632fe7d4cacc9d6e7e0c2a334"},{url:"categories/vps/index.html",revision:"e55deb7487dca5e5a7d1dc42b2a98bc9"},{url:"categories/web/index.html",revision:"3d1d922dfb7b557b390bb5f601903f4e"},{url:"contact/index.html",revision:"635b54d3c21c4ace630af04ff2ea3269"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"4d4c2a31a80db8fb590a6f733a761d37"},{url:"dash/index.html",revision:"669c017b01ad3afe209609f34a4b570b"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friendlink/index.html",revision:"3fc2eca0d5d7358e2941e78f93a83873"},{url:"friends/index.html",revision:"beb2ab1dc16b6ea8e116413d483cb535"},{url:"galleries/2020/index.html",revision:"db154adb7db427b308d358ff36579ebf"},{url:"galleries/index.html",revision:"c798e202f4a5f11ec5ca3e158d570787"},{url:"index.html",revision:"e5edf22258cd35c0cf06662e648477d3"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"a2cd3dda09a2adb2608337273bf94acb"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"js/snow.js",revision:"ecb7e27accae76aa79fbdb1817fcd032"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid.js",revision:"f3687bf99ec4a8b6608d45d2809eab00"},{url:"libs/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/prism/prism.css",revision:"3438405b32a6ebd86a9cd1f80e92e3da"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"myPost/index.html",revision:"de9303b447693b68156e7d94bc84cde1"},{url:"myProject/index.html",revision:"9ca9c8d6c8d0a36526fc179edcd8f53b"},{url:"myTeck/index.html",revision:"44433c8c3605d68d23559ee5e22b4725"},{url:"needtoread/index.html",revision:"1659b37f281f2616b797ef13ab84bb75"},{url:"posts/10fee780/index.html",revision:"978d915915f383e981a94e71d227e76c"},{url:"posts/13894dce/index.html",revision:"7b7523b9a37f3a5fe50dfebd9496f633"},{url:"posts/1802a8a7/index.html",revision:"475b26e52a096c14f8e1175dc43eb7d0"},{url:"posts/1991789c/index.html",revision:"56985ccdf40f7509647a3b3c6e3de8da"},{url:"posts/29a820b3/index.html",revision:"e0b5c049c3ab60b9bd8e31ae29330a83"},{url:"posts/2b9325d0/index.html",revision:"e3253dc71ea68f20b4d416bd2cbd360d"},{url:"posts/3847ad58/index.html",revision:"55bfe7dca5b2a468b8743c134ab8bdc2"},{url:"posts/40300608/index.html",revision:"a4328ad0496bb1a24601ddbbcb8eed95"},{url:"posts/42b6a86d/index.html",revision:"0dda43a944f66f6a0ac94aa21f575f0b"},{url:"posts/44557ab0/index.html",revision:"3f3d8355d87fade430664033d9ce531d"},{url:"posts/448f849b/index.html",revision:"5a5ae674ee6b885032945b791b6aa54d"},{url:"posts/45f878cd/index.html",revision:"544fb1f1a2f0fba5a9cda6719a097f64"},{url:"posts/462f1e5c/index.html",revision:"8342db2b5d11e6382d447e1416a7923d"},{url:"posts/465d2738/index.html",revision:"67dd1a71ddd9ff4656ef4c57f0a27e55"},{url:"posts/495db4d3/index.html",revision:"489d50c197a003642c1fb9a2d4b9eb79"},{url:"posts/509c7bd3/index.html",revision:"e2a25e87559285d4442a38d190314329"},{url:"posts/5b1993ac/index.html",revision:"26851e62f4905dcf9047c7018ae60a00"},{url:"posts/647e6265/index.html",revision:"b97ec4db7262c8b7e1fb105e2ff98987"},{url:"posts/656a0abb/index.html",revision:"082a1feb5069da7964504a57b43a3664"},{url:"posts/69a052c9/index.html",revision:"c7c63e5a72c23ba099ffe9346da1d090"},{url:"posts/6b2ba137/index.html",revision:"5158828f90feecf9dd81ed804e4475b8"},{url:"posts/7790e989/index.html",revision:"3a25a8b06a94a6eac66f1c6ce9280373"},{url:"posts/77da2f80/index.html",revision:"e84742fb1e1fef82d5f4c172b2c4d5b9"},{url:"posts/7b4e434c/index.html",revision:"45566fffb3786ad151035d761a67117f"},{url:"posts/7fe86002/index.html",revision:"91cbe33b840bd4d461bfab725b1371ab"},{url:"posts/80906b88/index.html",revision:"8f3dc518f30adac76abfdd57c46ef8df"},{url:"posts/8f76d9dd/index.html",revision:"c0840e07941054644ab11b1eec0c2b7e"},{url:"posts/92d347d6/index.html",revision:"5e529ccb485c2043aee436ba38426d26"},{url:"posts/9912bd5d/index.html",revision:"8bea4e4835a0a84336a8524981ca151d"},{url:"posts/a0f3c838/index.html",revision:"1a132e789e04b8878c8603e6a8d54cc0"},{url:"posts/a8535f26/index.html",revision:"305cdf9715f96889e8d5652577f55940"},{url:"posts/acc13b70/index.html",revision:"9fceea798758477018d3e1232cc8ab44"},{url:"posts/b1fe1bb8/index.html",revision:"58cd965cd5bbd480840f96455c19c5e2"},{url:"posts/bb600b4b/index.html",revision:"d96e55df76d4fa39503f9d72fe3103a9"},{url:"posts/c945eae1/index.html",revision:"ee3a62d10ed9116af9b0ce5f6325dc37"},{url:"posts/ca630feb/index.html",revision:"4848bdfe2913e5df7d0bf610e2adc5de"},{url:"posts/cb623532/index.html",revision:"caf10f4c83b868a33615658fcd8593e7"},{url:"posts/cf0f47fd/index.html",revision:"a36da254a00f14d9f20186ae4330685e"},{url:"posts/d08eb7b/index.html",revision:"7c27782e1b6b2b0163163d51a53228e0"},{url:"posts/d5f56dd0/index.html",revision:"3bc624270eae16ec3dec03636482c3bc"},{url:"posts/e3ee7f8b/index.html",revision:"dbd365a6ec202608e01da33530a3f69f"},{url:"posts/e6086437/index.html",revision:"eb7c7492196b5e462686ffd7284019bd"},{url:"posts/e6d40157/index.html",revision:"38f14205442b8a8b7ddb610f8128f7f3"},{url:"posts/ec2cad2/index.html",revision:"56ef30b9bd59d44ebf12bcaca142d984"},{url:"posts/f0b0af52/index.html",revision:"199d0d7e215560230ab9d3e6645e8122"},{url:"posts/f6b32521/index.html",revision:"47f320321add96542f9485a0e2f905cc"},{url:"tags/3531a/index.html",revision:"9108412e37356fd62f5302bc692c3e52"},{url:"tags/3798M/index.html",revision:"e518801238b86e4b881be62386b22436"},{url:"tags/3a/index.html",revision:"ec9cf78283c9c63b9a463b86bb1784bb"},{url:"tags/3G/index.html",revision:"691ae466ab3ffd1588d06087dd891d34"},{url:"tags/4G/index.html",revision:"2c7746d8a3d33d75f014c75d9cb108fb"},{url:"tags/5W2H/index.html",revision:"d2b1d3e0b53a9edcec0d83b3842be939"},{url:"tags/ae/index.html",revision:"e51b4fe344bf00f6c67a237472dac693"},{url:"tags/ai/index.html",revision:"cc2b623d48ce647868eaad1f1ba59954"},{url:"tags/Apache/index.html",revision:"513abd84c755f33d0e8505b719d6d561"},{url:"tags/ATI/index.html",revision:"9ee518ce59c962efea130d241411ed2a"},{url:"tags/blog/index.html",revision:"158352f80c6cb9da9a9b13a2c0aa046e"},{url:"tags/bt/index.html",revision:"1d0144a4b4cdb16807d868f6273f3a93"},{url:"tags/BT/index.html",revision:"6b3bd938ace655e5f358c6160e7bfd9f"},{url:"tags/ccs/index.html",revision:"e3a3d1790bad309da957efbdcbdf4f22"},{url:"tags/cdn/index.html",revision:"8a2b54eb5719d59b92d8cbe1510b75d0"},{url:"tags/cmake/index.html",revision:"1b665bb298093d85af66c3b99c555ca3"},{url:"tags/Crack/index.html",revision:"5be709b86ee9331ae7df11180f86d470"},{url:"tags/css/index.html",revision:"0fd43fd8f33f71c6d078d4a7fe4f21d4"},{url:"tags/Debian/index.html",revision:"30f30653ff454c56b5d7f76ce040b58c"},{url:"tags/develop/index.html",revision:"ae3b768ba1b5d45d3e2b614e9cd9fc4d"},{url:"tags/DNSCrypt/index.html",revision:"92c5125faae172e61912d3793021ddbf"},{url:"tags/DNSMasq/index.html",revision:"743ace63e09cda547a2443397002ea13"},{url:"tags/docker/index.html",revision:"30977e70cb56f9debf2470fe49c82bc6"},{url:"tags/Docker/index.html",revision:"85c690f3f33a57a38c3b445164003279"},{url:"tags/Driver/index.html",revision:"4ac0ed0ee46693ae553b1b73d8fddf69"},{url:"tags/ED2K/index.html",revision:"349626906ef54b51799a9994daebaf3e"},{url:"tags/email/index.html",revision:"100ef30cab9f43472a374b61b80ca8af"},{url:"tags/embeded/index.html",revision:"8b6a21f4e9e58485c531714c8342495d"},{url:"tags/emby/index.html",revision:"a57a4391f61c117e1f3d1df28c7e1ec0"},{url:"tags/Emby/index.html",revision:"59b4d1fa87ee6b399cf6cec32a002b48"},{url:"tags/face/index.html",revision:"dab8fb45646b5764903276660ec9a534"},{url:"tags/Git/index.html",revision:"eda88f4d07dc3d3a459f0ad7f6d0c55a"},{url:"tags/GitBook/index.html",revision:"602c3a41e4e0fcf57d4f3cd5e644f52d"},{url:"tags/Github/index.html",revision:"b0b94f41b52b9132b3c31b26703a6087"},{url:"tags/Gitlab/index.html",revision:"40ecedd66005f072645c0223f20dadfd"},{url:"tags/GROW/index.html",revision:"9ea4bdce1e18417d09435adfdb39c1bc"},{url:"tags/hardlink/index.html",revision:"08a8452b1fcb6b64cd4995a518c3f1af"},{url:"tags/HDD/index.html",revision:"ee3436a24c55b1bc8a7a258488bfcd2e"},{url:"tags/hexo/index.html",revision:"603c7f8531aec022aaf48afd6b42cda7"},{url:"tags/hisilicon/index.html",revision:"8831b3528892a4ade6613b91b84e67ef"},{url:"tags/Hotkey/index.html",revision:"82d8cd2a5f9a6b916fa17ceb5ef26de0"},{url:"tags/http/index.html",revision:"8ad4be5f03eb12a8f07101b3113ddafc"},{url:"tags/https/index.html",revision:"bbccef98c0448729c98c421213c23dbd"},{url:"tags/ide/index.html",revision:"c9c8c7ff5cf81161eee518537e5d5acb"},{url:"tags/image/index.html",revision:"dd32e3f2a97f2d773afc06e8b2047f31"},{url:"tags/index.html",revision:"83d00fa3f1ae5a8f118bb0997e1396af"},{url:"tags/ipv6/index.html",revision:"c9b68e22bebadef4d8ddfb99af6452d4"},{url:"tags/Jeckett/index.html",revision:"2a96212e39e7cd129780a10885427ca5"},{url:"tags/Jekyll/index.html",revision:"7125a318fe62640b1a4ec213f9519768"},{url:"tags/Joplin/index.html",revision:"c9c1889cb060c6f3c462ec847d1b92f6"},{url:"tags/js/index.html",revision:"b66a1bfce1cd3878b0078b7875da7731"},{url:"tags/JSP/index.html",revision:"29a92ad5526215b09a46d4ffd069b8ec"},{url:"tags/Kernel/index.html",revision:"9f0b655a0bcc67d17f7aefafde5717b5"},{url:"tags/LAMP/index.html",revision:"7b918177c77a4fe741b5f35beec03885"},{url:"tags/Laptop/index.html",revision:"5f38458d0fd81021a2ed6e3bb100c0f4"},{url:"tags/linux/index.html",revision:"0c1dbdd1a11007c1b2e6fd1b9cc57231"},{url:"tags/Linux/index.html",revision:"ebdc1e70044a2dd4912623e18ce69f2d"},{url:"tags/Mariadb/index.html",revision:"c85f3ff78b914680d9ceea04d17767c5"},{url:"tags/markdown/index.html",revision:"13d590cef33ade116a0ad11de307ddc4"},{url:"tags/MarkDown/index.html",revision:"e1dc15ccfb719fd73db43339101a4fbf"},{url:"tags/matery/index.html",revision:"efa5fb3e8f39a3e9805b8e896d0394e9"},{url:"tags/mathjax/index.html",revision:"46055ada93339b6db4c3573ab19647ce"},{url:"tags/mermaid/index.html",revision:"ab44b535bc04ba3d3200c8effc0c66db"},{url:"tags/Mermaid/index.html",revision:"8d7801083a6790894c5c7645bec361d1"},{url:"tags/mp3tag/index.html",revision:"ef929184623a295790ad9c2c58a88f8b"},{url:"tags/MPP/index.html",revision:"227c06dd148175bc1c3cdbd8fd70f712"},{url:"tags/mstream/index.html",revision:"6072e154ad63e290b3ceb8892347e440"},{url:"tags/music/index.html",revision:"e817702f3d04a62c37b5326288956626"},{url:"tags/MusicBrainz/index.html",revision:"3283684d04682fd851f4cf2c4ee426ad"},{url:"tags/MySql/index.html",revision:"31363aeddcafd7b781372cd467f15a07"},{url:"tags/MySQL/index.html",revision:"84ade547cf5d9503362b8d9e9b53e087"},{url:"tags/nas/index.html",revision:"20a3128cf6a114f1e4934810bd960fab"},{url:"tags/Nas/index.html",revision:"b1aadd62e3dd0f46e9c1e38136565101"},{url:"tags/Nginx/index.html",revision:"d14052dc0c0b614b16e369e6150ac9a7"},{url:"tags/note/index.html",revision:"6a87e3619d6b7d2811b2a2d2c583f7ea"},{url:"tags/OKR/index.html",revision:"5f3364890cb5995bcbcc9ff545f02d26"},{url:"tags/PDCA/index.html",revision:"ac16e81ad6b3a86118c37b21b39ab1f4"},{url:"tags/PHP/index.html",revision:"fcbbdb02b58901b6af8ca91edfffc599"},{url:"tags/picgo/index.html",revision:"4e43865d8132b63e2f3c0df22902906b"},{url:"tags/plantuml/index.html",revision:"3d9a0061560fc61e5e224533b3da143f"},{url:"tags/plex/index.html",revision:"9bb377b1ba08a1af23aa690797079a8b"},{url:"tags/Portainer/index.html",revision:"98a39f1ef69007c0db95ad0e8a340c1b"},{url:"tags/proxy/index.html",revision:"dd74721b9ca199d60843ba951de5072a"},{url:"tags/pt/index.html",revision:"de2bd6137b00c11a858fa0bc28f727e1"},{url:"tags/PT/index.html",revision:"03c6e72eae69983738243543d72340b7"},{url:"tags/qbittorrent/index.html",revision:"4f7a7312ad52b2c6af9fbd6841b6750c"},{url:"tags/qnap/index.html",revision:"67adc0aec035f70628a4891e76362e8a"},{url:"tags/QNAP/index.html",revision:"5402982afa09bb702312786108cc9126"},{url:"tags/Rigistry/index.html",revision:"d310c04eecb758cb78d8e54be50ceafc"},{url:"tags/selfhost/index.html",revision:"4e1d95470b2c05ec44e0ade6272385c2"},{url:"tags/seo/index.html",revision:"5ae0b251217136ccf455a12a4bcfd3ea"},{url:"tags/SMART/index.html",revision:"b032148e553f8dc3c7e39a43793ac5cb"},{url:"tags/Sonarr/index.html",revision:"28318a4539dedf697bf3456418093fae"},{url:"tags/sound/index.html",revision:"268444a7fb885aca7f109649d0bad363"},{url:"tags/speaker/index.html",revision:"3c8cfa134dcbd633ed51196095e24631"},{url:"tags/SSD/index.html",revision:"8909d7096f4e0b9991eaca5846dd2fb2"},{url:"tags/ssl/index.html",revision:"c071ffcb200a9555d7e2bddbe345fd54"},{url:"tags/SSL/index.html",revision:"5c4e1e9ee7982d7b2211c1adc1df9fc7"},{url:"tags/swarm/index.html",revision:"ef84c4cf4ad3696ab23469266a11ce13"},{url:"tags/SWOT/index.html",revision:"154e576e8ac5cf6d0f191f54b5dcc3b4"},{url:"tags/thinkpad/index.html",revision:"0aec56cac17fec39bd346578be55e978"},{url:"tags/TLS/index.html",revision:"1c0b8694343b462b9cb9a96e43162da5"},{url:"tags/tmm/index.html",revision:"c56a467d2accf96335be0f5bd08b1aac"},{url:"tags/Tomcat/index.html",revision:"a42736dad767191667eaaf31ae0912e5"},{url:"tags/traefik/index.html",revision:"45cc2012d1151ee6ce336465475726ca"},{url:"tags/transmission/index.html",revision:"f1ba0288a9ed25e3a7c2280ce88bd41a"},{url:"tags/Typora/index.html",revision:"1e900d780a9061b9f9243e6c141b4051"},{url:"tags/ubuntu/index.html",revision:"6bc9d02e56d96c75a5103e78946a1d21"},{url:"tags/UNF/index.html",revision:"e35610b5adea656ac4ebb6ddb9435b53"},{url:"tags/vim/index.html",revision:"d3916cfafbc12fc09c865c2934b9c5bf"},{url:"tags/VPS/index.html",revision:"79af7c7a32c1cf3c42505b6a055339ac"},{url:"tags/vscode/index.html",revision:"4c844506a308b9b8b35549e83e1810cc"},{url:"tags/Watchtower/index.html",revision:"4f2f0ab39d6b77e5c57d1ab07bd33e2a"},{url:"tags/WBS/index.html",revision:"df600033e887afcba69fc4c496f08160"},{url:"tags/web/index.html",revision:"34a278b5014d6ee1d6a8309239acbcd2"},{url:"tags/Webdav/index.html",revision:"7696b2f0902430fdc85308e325da1a93"},{url:"tags/WIFI/index.html",revision:"93e454c3fac4688ddb6473142ab0a693"},{url:"tags/wiz/index.html",revision:"04a182a8bbc2d8e87e4ef62f3ed9b0d0"},{url:"tags/优化/index.html",revision:"6d05b0ce35740c7c8e9107986583c005"},{url:"tags/刮削/index.html",revision:"758e277547ff4a204fb941de510a251d"},{url:"tags/启动/index.html",revision:"204fe29cdef3a4cde0a4868ea13de28b"},{url:"tags/字幕/index.html",revision:"f90d2dd18ff73ed8d97a65072fd7eed4"},{url:"tags/安全/index.html",revision:"1564be99f51f993498f5fa360e0ad4a5"},{url:"tags/宝塔/index.html",revision:"dd17e5edf646472dc66a1ae9e88711c1"},{url:"tags/嵌入式/index.html",revision:"3f0ef8c33535baae19a7adfb7cfb095e"},{url:"tags/建站/index.html",revision:"db3b3707c513b401d998aad6c6b9a767"},{url:"tags/技巧/index.html",revision:"8b7acfa96a51da4b8cb01b5aec352be8"},{url:"tags/插件/index.html",revision:"40e5ca27d9f47b6dd6634804b299de2b"},{url:"tags/教程/index.html",revision:"ff65b4553a5ec1d96a85c1ee15aee795"},{url:"tags/硬盘/index.html",revision:"7ad7dabc65aac055373932bb5744aa1d"},{url:"tags/移植/index.html",revision:"b02ec73e699976cecd6feeb25f91bf99"},{url:"tags/管理/index.html",revision:"92b62b19327208792688f6a81c37d54d"},{url:"tags/编码/index.html",revision:"62413da253f08772efb3552bbf101a58"},{url:"tags/群晖/index.html",revision:"921c9d51d18fce9e0f6d7a75d321aa81"},{url:"tags/隐私/index.html",revision:"694708b527441576c5b2565eb973c691"},{url:"tags/韩红/index.html",revision:"da3a58d5c7050acd4edb1dbcae1db7a4"},{url:"webpushr-sw.js",revision:"05503cca9cd51d761a2fe70d0c79a396"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
