if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"bf1ca9384f04661798a1c1953762ab40"},{url:"404/index.html",revision:"d11eb801f31fb576c07529327652e500"},{url:"about/index.html",revision:"bc62a263b9bec3d085f930b3ab43ef62"},{url:"archives/2021/03/index.html",revision:"60c2c255a7c6d8c85e97878f98b04066"},{url:"archives/2021/05/index.html",revision:"6c916e9245af78c0c3acd57535ac0501"},{url:"archives/2021/07/index.html",revision:"9fcad1f32daeeaed59fd7b2cbc0889b5"},{url:"archives/2021/08/index.html",revision:"1f1379834d8be1199959ddb3356506d4"},{url:"archives/2021/09/index.html",revision:"c6c80e309d183428027350845a001004"},{url:"archives/2021/10/index.html",revision:"cb04a7ce4632c7ee61557ecddbd4799e"},{url:"archives/2021/index.html",revision:"c7254b13768c6731e195a3e819091d01"},{url:"archives/index.html",revision:"d9d140ce6fc5f26c93ffb235389a173b"},{url:"bb/index.html",revision:"f2640b1b7a68a2d074a1969659a6a5f9"},{url:"categories/ai/index.html",revision:"b102140fc6de7729dd2683dfbfc10526"},{url:"categories/blog/index.html",revision:"5f08cc963720690413ff7f89830f727b"},{url:"categories/bt/index.html",revision:"e42b85ff6b469a13dd024ba177207965"},{url:"categories/docker/index.html",revision:"19c22566fbc95e9ba631e4f9fb1418c1"},{url:"categories/embeded/index.html",revision:"028876e410a5915a4ce57c688f2a9db1"},{url:"categories/gitbook/index.html",revision:"08127fed2b31ba8a223adee22f85886b"},{url:"categories/gitlab/index.html",revision:"f67313b543f91413d840c2aa4a65ff71"},{url:"categories/hexo/index.html",revision:"843e1e2c6b18c5873cc6ca195ebe08fd"},{url:"categories/ide/index.html",revision:"3624a8e76a0a6b5390be30b4dd106465"},{url:"categories/image/index.html",revision:"13f8daddc22de14a31b8cb6f61706774"},{url:"categories/index.html",revision:"c0830a6624c8be5f89dd94c15b422f90"},{url:"categories/linux/index.html",revision:"dedd8603be9b8c6bd1269cf4b77d27a6"},{url:"categories/music/index.html",revision:"a392f89548215e0b18b7e80cc7634811"},{url:"categories/mysql/index.html",revision:"054bf6f964ef7833236e3ce64d4d6f99"},{url:"categories/nas/index.html",revision:"31e131369efb36dbdab13b7e80d0eb93"},{url:"categories/note/index.html",revision:"6e2f1830c71ed21a635dace59d683c00"},{url:"categories/notebook/index.html",revision:"8c54c993c58bb3564e237f4562beff54"},{url:"categories/PMBOK/index.html",revision:"2f03cfee81568241707a71d85a6eafbe"},{url:"categories/qnap/index.html",revision:"4d9994e6f4237d1127935ec98f7fcb85"},{url:"categories/tools/index.html",revision:"d9fcaf67cd34bfbcb8552f581efbd966"},{url:"categories/video/index.html",revision:"baf5b4a32224217292038911a202f9c4"},{url:"categories/vps/index.html",revision:"7b230bcd72b370519e2c514b220c619f"},{url:"categories/web/index.html",revision:"5c80b2951b61e8aefd3eee2230fb19fa"},{url:"contact/index.html",revision:"b31f14994b94e2511fab862bd5ea2b8e"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"4d4c2a31a80db8fb590a6f733a761d37"},{url:"dash/index.html",revision:"3a5d686b71705bd5485512edeec58592"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friendlink/index.html",revision:"8ed8d61f70f325d5cf7b1dfb8c4183bc"},{url:"friends/index.html",revision:"f8e08010593debf511cb5b467f81832e"},{url:"galleries/2020/index.html",revision:"62ca3acb3d1f6eaf6c379c4071dfbbe4"},{url:"galleries/index.html",revision:"123552694654a2d486501d66c596fd32"},{url:"github-card-lib/githubcard.js",revision:"caa86aadbe330a8ee459a4ef9a1e2bcd"},{url:"index.html",revision:"23919f7efa741131502b40b82ff9d67b"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"a2cd3dda09a2adb2608337273bf94acb"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"js/snow.js",revision:"ecb7e27accae76aa79fbdb1817fcd032"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid.js",revision:"f3687bf99ec4a8b6608d45d2809eab00"},{url:"libs/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/prism/prism.css",revision:"3438405b32a6ebd86a9cd1f80e92e3da"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"myPost/index.html",revision:"d8bddb506af9cc210392a5a4aee6eafe"},{url:"myProject/index.html",revision:"4195626065dd99c760f7535448dbdc04"},{url:"myTeck/index.html",revision:"81115cdc5343f95400709e31b8175a6c"},{url:"needtoread/index.html",revision:"087d089e079ba78d7a10bf4497915438"},{url:"posts/10fee780/index.html",revision:"6d34689520b36cc6d9dfee0e863ab9c8"},{url:"posts/13894dce/index.html",revision:"6837141192a7dba9ab5b704f52da4b32"},{url:"posts/1802a8a7/index.html",revision:"31a11ed741d6bbdab960ff72914fffaa"},{url:"posts/1991789c/index.html",revision:"9cdf347a82a9ca04023e111e40af5611"},{url:"posts/29a820b3/index.html",revision:"770be78b27b4c5fc92e34fbb6178f54e"},{url:"posts/2b9325d0/index.html",revision:"649aa89432133a5e2e210e99cfbee2b6"},{url:"posts/3847ad58/index.html",revision:"2be53129c33f9ac7b8d4fd5922d1784e"},{url:"posts/40300608/index.html",revision:"4dca56a2df0d2f3ac9fc6609b56674e3"},{url:"posts/42b6a86d/index.html",revision:"cf5dd7246bfca207dae077269d9af5e5"},{url:"posts/44557ab0/index.html",revision:"02407ecf674b201c5d33e25f86d32073"},{url:"posts/448f849b/index.html",revision:"afd315906a30cbc28f7bf8000e78a67e"},{url:"posts/45f878cd/index.html",revision:"b42bc61a2caf424c039e11da74bd2028"},{url:"posts/462f1e5c/index.html",revision:"c1e7b3035ab3855696f9722ffb1e6674"},{url:"posts/465d2738/index.html",revision:"59a7e951f499d8dc051bbec3747b939d"},{url:"posts/495db4d3/index.html",revision:"b0bf0025838bae8fd877eb8c96f64f28"},{url:"posts/509c7bd3/index.html",revision:"e855c131ea2ac9be95d51112d710a435"},{url:"posts/5b1993ac/index.html",revision:"892d944fd493fe1d1f99e1d85b07fa3c"},{url:"posts/647e6265/index.html",revision:"31a619d858335d2531a56116c659ab9e"},{url:"posts/656a0abb/index.html",revision:"104cd752572973ef4a831e9670235a25"},{url:"posts/69a052c9/index.html",revision:"4110dfd27f9ef8a2ef31aa9ec0b5c121"},{url:"posts/6b2ba137/index.html",revision:"04643d8026f94222853146ff2f51e8e5"},{url:"posts/7790e989/index.html",revision:"a363ebb59045743f56f7c0cc4040bd8f"},{url:"posts/77da2f80/index.html",revision:"60083cd83d78ceba289ecd631fedd3fd"},{url:"posts/7b4e434c/index.html",revision:"213b78fbd559da611d863999755a1c40"},{url:"posts/7fe86002/index.html",revision:"82bc92744ac6cbb25bd186c600824b75"},{url:"posts/80906b88/index.html",revision:"e7fdc5916024d2e726d102a14b06c58d"},{url:"posts/8f76d9dd/index.html",revision:"f9a1b62b15d03011187be67bae6fe0c7"},{url:"posts/92d347d6/index.html",revision:"ee89e71aaf39acb2cb9b638fd3a33a47"},{url:"posts/9912bd5d/index.html",revision:"ccdd1d866f43c4f37d333d2130234634"},{url:"posts/a0f3c838/index.html",revision:"ea4219a12048c656275e487d65cdb0e7"},{url:"posts/a8535f26/index.html",revision:"197b165cf06dbb183dddc2c735c425de"},{url:"posts/acc13b70/index.html",revision:"9ec483d2b273019689bf42454a360db1"},{url:"posts/b1fe1bb8/index.html",revision:"ee86ae532ce682b9874e1a2058f4fe05"},{url:"posts/bb600b4b/index.html",revision:"05106c2fcc9fe4cb0e5f03b7eef1c86a"},{url:"posts/c945eae1/index.html",revision:"0d3c70e1fa12474f9ab346ada10c7306"},{url:"posts/ca630feb/index.html",revision:"22a0e70820423c04b279bc4649980b13"},{url:"posts/cb623532/index.html",revision:"62688b90115c315ea950cf91118b2498"},{url:"posts/cf0f47fd/index.html",revision:"d584de59830c8daf1bd85edefddd689f"},{url:"posts/d08eb7b/index.html",revision:"82ac9d3bf1b01b58b4606a957d667a7d"},{url:"posts/d5f56dd0/index.html",revision:"dcd1e330f4e1de8621baa5c454514f08"},{url:"posts/e3ee7f8b/index.html",revision:"31d8be7d1d54734c853ee6e24778c07a"},{url:"posts/e6086437/index.html",revision:"3013e1657c84d4b05b23e655a21d5c14"},{url:"posts/e6d40157/index.html",revision:"44627facfc966afa5f12b2919fbca797"},{url:"posts/ec2cad2/index.html",revision:"1f820aa62831c0219b6dc71ad945a571"},{url:"posts/f0b0af52/index.html",revision:"931547e4b25e44399b55998c0aad5678"},{url:"posts/f6b32521/index.html",revision:"7f917b3adc17d84748b4300e1c38e745"},{url:"tags/3531a/index.html",revision:"ff57e6a17517c140d1eedb5cc56f6df1"},{url:"tags/3798M/index.html",revision:"7861e4b523f87247c68a8096a48f04d6"},{url:"tags/3a/index.html",revision:"4f550a6804385edaf3ff92d446ca9e74"},{url:"tags/3G/index.html",revision:"cc536e3f12a25e24050abe2191099e6b"},{url:"tags/4G/index.html",revision:"c3ad7175ff3bf460991f44f550a00575"},{url:"tags/5W2H/index.html",revision:"70511cb482791dfbc9670f6a0227d683"},{url:"tags/ae/index.html",revision:"bc3d30ec22331a659da8dbc28b5a0e98"},{url:"tags/ai/index.html",revision:"b2f779830ca73714abbc23b1641c9876"},{url:"tags/Apache/index.html",revision:"081deff7a7fc89a55e05ac1db67b43e5"},{url:"tags/ATI/index.html",revision:"751667202c632fed9931840e9d74b891"},{url:"tags/blog/index.html",revision:"856faa1f4a43c907d8ba17e14c13aaba"},{url:"tags/bt/index.html",revision:"484cd5c9a4a81507ffbaba0a239e0627"},{url:"tags/BT/index.html",revision:"160ceea1a025cb56b8f42b0897dd199f"},{url:"tags/ccs/index.html",revision:"36a9b83140d320e9a0ef7a545485dcc4"},{url:"tags/cdn/index.html",revision:"19f027df4b168a0330d5558e6805fdeb"},{url:"tags/cmake/index.html",revision:"8bf2df6081c4fce0c36a5ebc904454c5"},{url:"tags/Crack/index.html",revision:"926f3fd6eb3e33bb9dd0785366862177"},{url:"tags/css/index.html",revision:"91708bae39b71a79ee453a02e8d9164a"},{url:"tags/Debian/index.html",revision:"9230a12eadba65758d8291b26ed61cbb"},{url:"tags/develop/index.html",revision:"8feace4e401483f892cbc2b024e36056"},{url:"tags/DNSCrypt/index.html",revision:"948a48d2ded04cb41155e36fc06059fb"},{url:"tags/DNSMasq/index.html",revision:"5945a48c5741d0982d0956e8999d54b9"},{url:"tags/docker/index.html",revision:"600258dbaea20088676e492eff01b065"},{url:"tags/Docker/index.html",revision:"c773e91959c3ede89635bccc4c9756c1"},{url:"tags/Driver/index.html",revision:"12bc7f4c2794926cfc6e59d51f0e933c"},{url:"tags/ED2K/index.html",revision:"e087372c39f3b45b47dad8bfc597141c"},{url:"tags/email/index.html",revision:"5f2ebdc0f29bf1c95148f68ecfe44dae"},{url:"tags/embeded/index.html",revision:"255c4e66161258a4d335770a789b8c5d"},{url:"tags/emby/index.html",revision:"308910b7ed86be592fcfd637d482647a"},{url:"tags/Emby/index.html",revision:"0ec18a1fab892b1fbc3944aae6cf2b37"},{url:"tags/face/index.html",revision:"30b7a67c384ce29492cccf9fbba0771e"},{url:"tags/Git/index.html",revision:"fdf96770037e49e149a6155652b518f5"},{url:"tags/GitBook/index.html",revision:"54c73a4100c73613fbdd2c74ac8628ac"},{url:"tags/Github/index.html",revision:"a8da8efa659c54eb78d8dcd6e7e5dda4"},{url:"tags/Gitlab/index.html",revision:"ac6908c8801e74cb31c5872d9e189995"},{url:"tags/GROW/index.html",revision:"30afcc0b8c645801371263223187a183"},{url:"tags/hardlink/index.html",revision:"129ebf9b0e08594cd6eff3f82ebee3e9"},{url:"tags/HDD/index.html",revision:"97a34f9389aaacde57e33fd325a2edd5"},{url:"tags/hexo/index.html",revision:"89dd7c2bf98dc76fe1b1be98db342bfe"},{url:"tags/hisilicon/index.html",revision:"2e48b2e4197f9b40baeb757c4134ec67"},{url:"tags/Hotkey/index.html",revision:"18d2324cbc7b55ff27a89010324fee3f"},{url:"tags/http/index.html",revision:"25a41147506920f850b89c30942adcb0"},{url:"tags/https/index.html",revision:"d001702abdf45021ffec798089bf40eb"},{url:"tags/ide/index.html",revision:"092fc4603722d55372d5d4fd952c318d"},{url:"tags/image/index.html",revision:"3a8d5495f777c4e5b123182f6bd2895f"},{url:"tags/index.html",revision:"c11593b36b2f23d3665e95229d4876de"},{url:"tags/ipv6/index.html",revision:"94b2eceff9c683e9236cfcae31cb4518"},{url:"tags/Jeckett/index.html",revision:"9ea7ccf38e12aae59f0bc829fdc98910"},{url:"tags/Jekyll/index.html",revision:"687a8f5d4a697e248b3ecfe8dad8b506"},{url:"tags/Joplin/index.html",revision:"b18223b504f22adb0253affd39dd05bf"},{url:"tags/js/index.html",revision:"17d95b0d7eee49514f3f34f0e2151229"},{url:"tags/JSP/index.html",revision:"79a3c1e6e1baa312e08acceeb74aed8d"},{url:"tags/Kernel/index.html",revision:"eaa7c2b883b13225a9273474b0ca2251"},{url:"tags/LAMP/index.html",revision:"dfa0ba7fbd4c759c708e15f4677b9691"},{url:"tags/Laptop/index.html",revision:"20833cb755d69c475d6a5032cda41ff5"},{url:"tags/linux/index.html",revision:"e3dd307d2ecf04c171e3c5017a403847"},{url:"tags/Linux/index.html",revision:"ae8c5d883dab6cf575210b2efbcc1b5a"},{url:"tags/Mariadb/index.html",revision:"0f6ed2996e68db879b38f0d504bef39d"},{url:"tags/markdown/index.html",revision:"ef016bdbc9f8507ca3583ce9210df865"},{url:"tags/MarkDown/index.html",revision:"56cd6c65ed747be27b7ceac656d85b3a"},{url:"tags/matery/index.html",revision:"099c3ee10107d7712de711b19c94d44f"},{url:"tags/mathjax/index.html",revision:"bb813c6a97d0082f59ab0276c12296d2"},{url:"tags/mermaid/index.html",revision:"941da6e3e45c57b6a74e869488ddac61"},{url:"tags/Mermaid/index.html",revision:"ba340920f4ff497708748954d98f2617"},{url:"tags/mp3tag/index.html",revision:"8268926819f8d9ff87037aac710b7ba7"},{url:"tags/MPP/index.html",revision:"bcf31acf0f7d2cc42dec3e9959260a4d"},{url:"tags/mstream/index.html",revision:"e3cb55757b74b1f8303e0eaaec477671"},{url:"tags/music/index.html",revision:"42adc2d8fa1821d01b159432c43e3712"},{url:"tags/MusicBrainz/index.html",revision:"95b26d07c45ec37e6dbf2b259a49b934"},{url:"tags/MySql/index.html",revision:"f241b0b15cf3835910a8de7d78b06897"},{url:"tags/MySQL/index.html",revision:"c497545fa23636a15cf49fe380b0aedb"},{url:"tags/nas/index.html",revision:"c5861ca6166282edd77ee37407839ff0"},{url:"tags/Nas/index.html",revision:"4122b5061c0fc2f5ef1016a0b91af1cb"},{url:"tags/Nginx/index.html",revision:"4690106c1c7adc21e8821c2b21e20e9b"},{url:"tags/note/index.html",revision:"a9a49589e9d54677a84d2503008fe6bb"},{url:"tags/OKR/index.html",revision:"815b6f9758a413b816a8310f5ec6299b"},{url:"tags/PDCA/index.html",revision:"e39a394d50b8208ed47dd526d939384c"},{url:"tags/PHP/index.html",revision:"10ae6a38d94c419e871f53280446a799"},{url:"tags/picgo/index.html",revision:"cc2839799cf211d141bdb5aae8d3b5b8"},{url:"tags/plantuml/index.html",revision:"ac88e2308d3a643c646d2a4410588243"},{url:"tags/plex/index.html",revision:"acd7f2c3dfe18152a80b81b29a952687"},{url:"tags/Portainer/index.html",revision:"c0df44050ef2d25f89f25774a0e6251c"},{url:"tags/proxy/index.html",revision:"1d5d13da09d977f90b7a058a3a6f8968"},{url:"tags/pt/index.html",revision:"dabea422b74c8debf9425f4da69a32d1"},{url:"tags/PT/index.html",revision:"bc401683b6d0890d2c02b1cde2301f67"},{url:"tags/qbittorrent/index.html",revision:"bb2dc693ffa7a6d833e7ad59f309aa73"},{url:"tags/qnap/index.html",revision:"f7ddd5f1f276e9de4437512e0ec34209"},{url:"tags/QNAP/index.html",revision:"36bc477f00fdda21ae63479cfeb62186"},{url:"tags/Rigistry/index.html",revision:"451fd8489a70f469856166e9c455cf9b"},{url:"tags/selfhost/index.html",revision:"799f223bcf73b492883a8d4c1003773c"},{url:"tags/seo/index.html",revision:"21715b4e4be16bce3b905241d422159e"},{url:"tags/SMART/index.html",revision:"8ffeed4732b2b6751f870cf6afe3597d"},{url:"tags/Sonarr/index.html",revision:"a8d8d8ad242237ca7be506a6994f48f0"},{url:"tags/sound/index.html",revision:"1935fbb1072d914800cbde28127a7e7c"},{url:"tags/speaker/index.html",revision:"c6142a8eb6fbbb4c5907752445f9964a"},{url:"tags/SSD/index.html",revision:"5d98608a44dab837606d1fec13642cee"},{url:"tags/ssl/index.html",revision:"a9c2413cc8599e468f2b6b21822729a7"},{url:"tags/SSL/index.html",revision:"9304a9d01f8a4306a8c0645cb9a9a3ea"},{url:"tags/swarm/index.html",revision:"59e72fcf40ec8b000b862a5681cc2364"},{url:"tags/SWOT/index.html",revision:"661437376d0fc6be47cbaff86eb567d8"},{url:"tags/thinkpad/index.html",revision:"0f7ef9a289100bfc4d21651a4bdbb521"},{url:"tags/TLS/index.html",revision:"905a5878da22c5d01c183216a9ebda63"},{url:"tags/tmm/index.html",revision:"4015a1ad55e7403d2c789eaecfa15804"},{url:"tags/Tomcat/index.html",revision:"0c4503c29120b0baa9554b496e7b8855"},{url:"tags/traefik/index.html",revision:"add3c9e09bae83427d41247a2145f55f"},{url:"tags/transmission/index.html",revision:"94016d9d952707b77b36fcf96ab0b305"},{url:"tags/Typora/index.html",revision:"03f7531fd4a4a264905d316f3fece471"},{url:"tags/ubuntu/index.html",revision:"1983e676cc8d3acb2cfd8f4b91ec7c88"},{url:"tags/UNF/index.html",revision:"327eb5c15503a2c888ecff8376a63f17"},{url:"tags/vim/index.html",revision:"a8d3b0913e3d3a00c0a50f8d5f781995"},{url:"tags/VPS/index.html",revision:"039f6d5e0d9b5e43eca7e1c58a556a36"},{url:"tags/vscode/index.html",revision:"2527372d68055b544825f80a41c861e5"},{url:"tags/Watchtower/index.html",revision:"40ae3a99da288f1faf3cfdc2a74c51d7"},{url:"tags/WBS/index.html",revision:"4e2932fe9e7227dc6b5ccde6d0835073"},{url:"tags/web/index.html",revision:"cea59976ebe63942e0bf110785bde96b"},{url:"tags/Webdav/index.html",revision:"c3166fb0bec9a339719e04d0723f4b7b"},{url:"tags/WIFI/index.html",revision:"59a505c92fcf4ea5e8bb73b10b5336a0"},{url:"tags/wiz/index.html",revision:"cd97eeff9341def4e81b8d82a21e0119"},{url:"tags/优化/index.html",revision:"24cdd1c572c0060d444f5871b02043e6"},{url:"tags/刮削/index.html",revision:"bde89a1eef29384fe5ef08be28ade33f"},{url:"tags/启动/index.html",revision:"ec8b65e6ca0b3f3480aebc1324b7b41d"},{url:"tags/字幕/index.html",revision:"3da8d983a31f5c6f343416dcf15ac702"},{url:"tags/安全/index.html",revision:"04d54d16b88e9a6ea77ef0a355c74777"},{url:"tags/宝塔/index.html",revision:"850b470a00af707a4bce5239cea0582f"},{url:"tags/嵌入式/index.html",revision:"da3606ac83a4ea9e7d5392f41865cb92"},{url:"tags/建站/index.html",revision:"5fb375048b9165d935e062b7bd9358ec"},{url:"tags/技巧/index.html",revision:"e4ccae7cb0b017712127824891952415"},{url:"tags/插件/index.html",revision:"d8d71c61a6fd3fb5f96fa47462d01ce4"},{url:"tags/教程/index.html",revision:"14a066febb445287d5ceb1474d8562c0"},{url:"tags/硬盘/index.html",revision:"3c341e00c993e172881689e391081add"},{url:"tags/移植/index.html",revision:"7c85c1dceb9b78bb20ad33cd81a40a9f"},{url:"tags/管理/index.html",revision:"676f0e13e3312880e64ed3bc9d58ccc5"},{url:"tags/编码/index.html",revision:"c53eccaf18f430322edb6d98b7921bd8"},{url:"tags/群晖/index.html",revision:"011f14614568e6398b214c3b69160758"},{url:"tags/隐私/index.html",revision:"8244559dfbb0fa5d5b7bb13db0079e60"},{url:"tags/韩红/index.html",revision:"8335c9935dc98c2aead0fa1730d3b5bb"},{url:"webpushr-sw.js",revision:"05503cca9cd51d761a2fe70d0c79a396"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
