if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"17f1ea99ca8eeb1f9e26ac959724e400"},{url:"404/index.html",revision:"6245f2eb0ce01a6f75a29327d7833fba"},{url:"about/index.html",revision:"0dec59e8709159824b4827215ab31b6d"},{url:"aboutme/friendlink/index.html",revision:"2fad7230a7d12f6c8e6e8d4cd318e760"},{url:"aboutme/mypost/index.html",revision:"5138edd09bb495630f125b501f3809b2"},{url:"aboutme/myproject/index.html",revision:"93ef7994a9222347dfc5019d40e9281a"},{url:"aboutme/mytech/index.html",revision:"c1db5fa6fcfd5c6d76ef9171186f432b"},{url:"aboutme/needtoread/index.html",revision:"25629653fa6c14eaee95ce8f71bda36d"},{url:"ai/2021-09-14-deep-learning-of-face-recognition/index.html",revision:"1de75b951b55ba9242e08274ad45b038"},{url:"archives/2021/03/index.html",revision:"415a8c08039dbcaa69d4f260a995fbc1"},{url:"archives/2021/05/index.html",revision:"e0a298006b4e92ec5f3a5d3f67886e4c"},{url:"archives/2021/06/index.html",revision:"48a05cdc1d51f102de762c7e2b9a5828"},{url:"archives/2021/07/index.html",revision:"552eaa75c34565d5794bdbf41dcb9ce3"},{url:"archives/2021/08/index.html",revision:"fb38b5b4c810dc061adf3a11a12dd988"},{url:"archives/2021/09/index.html",revision:"7722aa5af34a298771250fd300f63eda"},{url:"archives/2021/10/index.html",revision:"a0bd2e70cf024ca775e18e576c56d13c"},{url:"archives/2021/index.html",revision:"e0654a2ae425e9b9883ad0d579134804"},{url:"archives/index.html",revision:"b0d7acd8ce59ca58c431a6736927c14e"},{url:"bb/index.html",revision:"377738d62f886abbbec8f6867dd36352"},{url:"blog/2021-03-03-use-githubpages-jekyll-to-make-a-personal-blog/index.html",revision:"19e203741e4cb6ec29e6bc6888e44873"},{url:"bt/2021-08-18-qbittorrent-parameter-reference-configuration/index.html",revision:"0d9162f4ed9c5f335bfaed0b935303d5"},{url:"bt/2021-08-18-transmission-parameter-reference-configuration/index.html",revision:"05b1daddbc504924784d91a5b3008e78"},{url:"categories/aboutme/index.html",revision:"46de5951d4ca03baa128ccaaa87047c5"},{url:"categories/ai/index.html",revision:"8672834bd953a9745170f5468ca4dca4"},{url:"categories/blog/index.html",revision:"05989d5319f8d8aa89cd3f359f9ec1f1"},{url:"categories/bt/index.html",revision:"74c3b103ff9891ae142afb741487d434"},{url:"categories/docker/index.html",revision:"952c435258071b681a922ebc7f27cf87"},{url:"categories/embeded/index.html",revision:"d24461ec035a6d81ad2aa97cfec9cf89"},{url:"categories/gitbook/index.html",revision:"54bbd312cd9cbfef0d368fe7ce88bae0"},{url:"categories/gitlab/index.html",revision:"6681f9a5e873ff98bdca6ae1e1d198cb"},{url:"categories/hexo/index.html",revision:"f2d7477f17760232b95e34605c56d860"},{url:"categories/ide/index.html",revision:"3fa93cca01e3e447275460c222b49d9b"},{url:"categories/image/index.html",revision:"0e96f78b5920f6fa8480f8b73339ffb9"},{url:"categories/index.html",revision:"892bedbf21d92efacc628435e85d4751"},{url:"categories/linux/index.html",revision:"ef2cf31dab3a3b2a108601fa512af8c5"},{url:"categories/music/index.html",revision:"faf09b07fb452aa3c5446efe5e212630"},{url:"categories/mysql/index.html",revision:"8fafa34c3098b4bdd1076c6a91129048"},{url:"categories/nas/index.html",revision:"61a1a1710c74f83b895033d48e574f71"},{url:"categories/note/index.html",revision:"2a3781f2df924e94b528412bc9386c7b"},{url:"categories/notebook/index.html",revision:"e52805da0ef888ac518653ae7bedbfc9"},{url:"categories/PMBOK/index.html",revision:"1c59052a492ee12322930ae9ca2739cf"},{url:"categories/qnap/index.html",revision:"d8f98993f2aabfa55ffea1f12b916cfd"},{url:"categories/video/index.html",revision:"480e5a3ee3cceb0890f1c11cdc7d3b39"},{url:"categories/vps/index.html",revision:"49fb7360d4e8ae935f494978bbe4d494"},{url:"categories/web/index.html",revision:"18af29f229101ddd56b3fb7439283f38"},{url:"contact/index.html",revision:"2e4671271852f16a22f7c02290f353cf"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"fc9a460a4ae3bbcb82e4ebdc097b9e60"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"baa559f5471a9d78d867a91c60c69aec"},{url:"dash/index.html",revision:"fad4fa8de497ae2a9e72953d4aecab1e"},{url:"docker/2021-07-09-use-jeckett-sonarr-iyuu-qt-emby-building-automatic-movie-anime-process/index.html",revision:"5867aee7fcb56f61ca8be0518d7c20f9"},{url:"docker/2021-08-01-docker-use-brief-tutorial/index.html",revision:"a5fd32d882a7fd6e14f62d19be373c50"},{url:"embeded/2021-07-30-3g-4g-iot-module-embedded-transplantation/index.html",revision:"32d4c45989c35fed7b701e477ffdc223"},{url:"embeded/2021-07-30-hisilicon-mpp-unf-architecture-source-code-level-analysis/index.html",revision:"138c99163c0e689f193c28362842d80c"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"182c1402d8a89bb94f9b3bebef66b014"},{url:"galleries/2020/index.html",revision:"d507fb4ea0f025f4ab6298dfb3385d7d"},{url:"galleries/index.html",revision:"7e5325dcd671b7f813c06122e74f6f2a"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documentation-part2-gitlab/index.html",revision:"faf1a25f4e932ef16016286aeaa296dc"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documents-part1-gitbook-chapter/index.html",revision:"0e1391ce3faedcd0b924dc40f2a8c70d"},{url:"gitlab/2021-07-09-carck-gitlabee/index.html",revision:"909aa80d54b7cc69f951d8d40bcbb1cd"},{url:"gitlab/2021-07-09-gitlab-install-and-usage/index.html",revision:"9710c7f59ab78ddb0cc2c2ceab06c639"},{url:"gitlab/2021-08-02-gitlab-installation-and-use-tutorial-complete-version/index.html",revision:"a2fd227d28ca503a500f74779fb54f94"},{url:"hexo/2021-09-10-use-hexo-and-matery-to-make-a-perfect-blog/index.html",revision:"66070de6e9edbe4ece02fdf3beeb8662"},{url:"ide/2021-09-15-vim-checklist/index.html",revision:"15996c339add6b345accb4c747cf695c"},{url:"image/2021-09-14-auto-expose-theory/index.html",revision:"8f55d650039d91388337b4fd76feae63"},{url:"index.html",revision:"92c07aed401d5600feaefb5ce2c84ef2"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"4cf7d0890238750cf9fd18878fea096f"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/prism/prism.css",revision:"9de440b6e18b43a39139958655391e18"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"linux/2021-07-09-linux-pt-hard-link-tools/index.html",revision:"cde75b38b5e320b82bc4c88cf8dbbcf2"},{url:"linux/2021-08-18-debian-lenny-laptop-installation-records/index.html",revision:"71f366aa5817a9acdb5a4796b1d59e88"},{url:"linux/2021-10-12-cmake-quick-start-tutorial/index.html",revision:"32918c2b5b974ca00ef9893eef94a474"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"music/2021-10-03-music-analysis-for-hanhong-tianliangle/index.html",revision:"efa4f7b02aeb3f073b752a05f6a08904"},{url:"music/2021-10-06-private-music-service/index.html",revision:"f5e06e59399943788659369e379e349a"},{url:"music/2021-10-11-how-to-scrape-music-idtag/index.html",revision:"3e0793f0cef80c3b3944c412cbdb4f9a"},{url:"mysql/2021-09-06-simple-tuning-of-mysql-performance-through-the-pagoda-panel/index.html",revision:"44b7e389eddd4caeac50e838bbda684b"},{url:"mysql/2021-09-08-mariadb-and-mysql-command/index.html",revision:"26a5ceacfbcda106bd77d6cd77815e51"},{url:"nas/2021-10-12-access-the-docker-service-in-qnap-nas-through-ipv6/index.html",revision:"68e43e5b3091da220dbbf9a11a546408"},{url:"note/2021-07-25-how-to-make-perfect-note/index.html",revision:"088d2f89bd7f2544f9b7dc8dc1870f8d"},{url:"note/2021-09-09-deploy-wiznote-docker-on-nas/index.html",revision:"a7f4e46cca843617fb2cdb14c5082cc7"},{url:"note/2021-09-09-play-with-joplin/index.html",revision:"adbe23ce9cb3db35aa77ba997e13e0c9"},{url:"note/2021-09-09-start-to-use-joplin/index.html",revision:"79bddb2a05744d3d175c1a24644f194e"},{url:"note/2021-09-09-the-joplin-plugin-and-its-markdown-syntax./index.html",revision:"bd9ac97e903241e335b7e651ae651019"},{url:"note/2021-09-10-the-joplin-plugin-recommend/index.html",revision:"88042369a54379917f9160544bc0a274"},{url:"notebook/2021-10-05-repair-thinkpad-cracking-voice/index.html",revision:"e7f39058c1f66e99be273988f644c013"},{url:"pmbok/2021-08-18-several-common-management-models-and-methods/index.html",revision:"767e5706e5fd5cfeaf114fa9f20e0b69"},{url:"qnap/2021-07-25-qnap-move-hard-disk-position/index.html",revision:"c46bbb8474cd0cdab5d65b86411fa109"},{url:"qnap/2021-08-18-io-error-correct/index.html",revision:"f0ac653b83696f0cd436ee140d136d8a"},{url:"qnap/2021-09-01-qnap-change-app-start-sequence/index.html",revision:"6e1925bac44579955f4f6df1b0c15ad8"},{url:"tags/3531a/index.html",revision:"210120553c90e2c9dd4e804b92f7a31e"},{url:"tags/3798M/index.html",revision:"2bbab5892f95e00396db7f9732e090a6"},{url:"tags/3a/index.html",revision:"4c84ad099830583ae39f35756f401df0"},{url:"tags/3G/index.html",revision:"05b6e94cf1fc6a9ba60ee65241456c4f"},{url:"tags/4G/index.html",revision:"e637381ed1b1bbbfc92ce25b2452106f"},{url:"tags/5W2H/index.html",revision:"1c49dac74cd19f72f34fe6588d333294"},{url:"tags/aboutme，blog/index.html",revision:"dcc8f46934f611bfec5ab1990daeb006"},{url:"tags/aboutme/index.html",revision:"45246863e9492cfbd97c2ce10fd9639d"},{url:"tags/ae/index.html",revision:"89f50dbfc32ae61f2ff909287cb93b5e"},{url:"tags/ai/index.html",revision:"80e57f74d641593dc74dec962de86c66"},{url:"tags/Apache/index.html",revision:"d6f5b0ac525e25278f0feff52d723be1"},{url:"tags/ATI/index.html",revision:"4b8ef014b799890f8f726cf465664e04"},{url:"tags/blog/index.html",revision:"8257de7eb1981e028e38ff1b8eebd7c6"},{url:"tags/bt/index.html",revision:"a7257fd72b48b99fd9c0828d868d54ee"},{url:"tags/BT/index.html",revision:"ff195c7b181ab4b86a1ae1c9aa96a786"},{url:"tags/ccs/index.html",revision:"56ec97b6d34c82009ce6a73caa628fbd"},{url:"tags/cdn/index.html",revision:"f9d3d84051ca4b2138d53a8104c7fb5c"},{url:"tags/cmake/index.html",revision:"ed3ad7ba19d7988fda5d440cec8f0a68"},{url:"tags/Crack/index.html",revision:"2f2a47d334ba01672fbd3d409d36fb58"},{url:"tags/css/index.html",revision:"77f645851c307fd004556ef1890b0424"},{url:"tags/Debian/index.html",revision:"db76bf172011b4a0098375c526d01eeb"},{url:"tags/develop/index.html",revision:"999feb4ea0694fb5348fe450ce4ab7b4"},{url:"tags/DNSCrypt/index.html",revision:"58d2c28f1c99bc3cfa0f2b4eabf12e18"},{url:"tags/DNSMasq/index.html",revision:"20c4cbfb8294e68838dfee6a441a477c"},{url:"tags/docker/index.html",revision:"9973cfbd4f2597a37537896f5564fb7f"},{url:"tags/Docker/index.html",revision:"88a23fecbf59fa87de19511dcfa886e0"},{url:"tags/Driver/index.html",revision:"6b0c01248f897a1f246669f2e346c536"},{url:"tags/ED2K/index.html",revision:"429a198a53a03bbb1028590964955495"},{url:"tags/email/index.html",revision:"85baa584ab0de5a137b89468c765ea23"},{url:"tags/embeded/index.html",revision:"893d1b63dc3a49420fe440e4d191ff46"},{url:"tags/emby/index.html",revision:"ef7214740b8f7a5ad5583ed8c53a680a"},{url:"tags/Emby/index.html",revision:"7f7b97fdb02f9e8a61a57f7d6ea8a3df"},{url:"tags/face/index.html",revision:"851baef97e5f25acca029f3ea72bd1f5"},{url:"tags/Git/index.html",revision:"3486b5ff7d1855d3090de5f8aef08aa7"},{url:"tags/GitBook/index.html",revision:"514d992b20f1c5177bd07a44d48a63ee"},{url:"tags/Github/index.html",revision:"96383fc12194f339cd5ddb5b594e540c"},{url:"tags/Gitlab/index.html",revision:"28a3b593a05d19aa19dca13474587996"},{url:"tags/GROW/index.html",revision:"4d53471b232ff5e0cd03f31f367d8a45"},{url:"tags/hardlink/index.html",revision:"4bb12e461da8201614f6ca14d3187328"},{url:"tags/HDD/index.html",revision:"33328830d44a10752615a77e9bfbdf09"},{url:"tags/hexo/index.html",revision:"32a3a1ae20f2ca888df93a3b49eca787"},{url:"tags/hisilicon/index.html",revision:"772927470fc60d8dfa63d76bf03625ae"},{url:"tags/Hotkey/index.html",revision:"337eb9041994f19a5458c7ca745ba289"},{url:"tags/http/index.html",revision:"ac81052f3c190e3ce60f574b5995645e"},{url:"tags/https/index.html",revision:"a9745130e5595cf27a9c2c916a4da099"},{url:"tags/ide/index.html",revision:"a01e9fe45821a2d4e3b80140c63c2687"},{url:"tags/image/index.html",revision:"0dc00fa34e5a74831794748aebee5f2a"},{url:"tags/index.html",revision:"2b1cf54ccba8864ee8aaec091f8f389b"},{url:"tags/ipv6/index.html",revision:"998df1dc4159f8845675ff0aa3479152"},{url:"tags/Jeckett/index.html",revision:"e4e8631964854180ff8491421a1f20db"},{url:"tags/Jekyll/index.html",revision:"d48f25464eb5048fd8ec6c772c37cca9"},{url:"tags/Joplin/index.html",revision:"f7599abeee5a25a482e8c195d9edcf78"},{url:"tags/js/index.html",revision:"9529446bd5ef0381ecf3f3636a6b9849"},{url:"tags/JSP/index.html",revision:"ab8099b0bfe3300d077fcad402f4fb66"},{url:"tags/Kernel/index.html",revision:"383e89459d5174913f55d2cd872e4792"},{url:"tags/LAMP/index.html",revision:"4b668de88d0cb388adf371a84859606a"},{url:"tags/Laptop/index.html",revision:"411e6a0a4ff0d4caab4f70a9582fce67"},{url:"tags/linux/index.html",revision:"6aa7c30033f03b9a4540cb9cb628b0ed"},{url:"tags/Linux/index.html",revision:"6566a756a3996b1d079442a6d3ad7689"},{url:"tags/Mariadb/index.html",revision:"9af283b665643e3175a66a89785f0f71"},{url:"tags/markdown/index.html",revision:"f5226b3a8c2e7b35d00575f9c8ac6629"},{url:"tags/MarkDown/index.html",revision:"bd60a3ab25995efd0040eb7556e9ac34"},{url:"tags/matery/index.html",revision:"5770e1e548a6372f6fe5d35edc86ee01"},{url:"tags/Mermaid/index.html",revision:"3fdab53f4b70d671ad977eead2452bcd"},{url:"tags/mp3tag/index.html",revision:"5cdc639b5df68ec4fdb181da5444562f"},{url:"tags/MPP/index.html",revision:"8793bfd2c748ac8159193416761e2ee7"},{url:"tags/mstream/index.html",revision:"d9af5e25c0469077d3b8e10f52b65e8e"},{url:"tags/music/index.html",revision:"a5ba606a4b6adf58defc2ee764f0b144"},{url:"tags/MusicBrainz/index.html",revision:"50228c7a27a5d52842fe9eee58f04dcb"},{url:"tags/MySql/index.html",revision:"08263645c2573bd4f592c307da0a914c"},{url:"tags/MySQL/index.html",revision:"3d0fafb1ee08a0fe5ce46ffd6ca4fb85"},{url:"tags/nas/index.html",revision:"3cdbcfa50cf13fcf28bc0ddd2df3331e"},{url:"tags/Nas/index.html",revision:"8595a6f5ede8bddb4a95c2360460dfbc"},{url:"tags/Nginx/index.html",revision:"449da75498f8e72beaf585dda52cea70"},{url:"tags/note/index.html",revision:"a6be20bbaae5066d6413d8273f251bb3"},{url:"tags/OKR/index.html",revision:"bc6f75bbb0aa136d814d1f62057d2120"},{url:"tags/PDCA/index.html",revision:"ddab0534687a95ed0750b0e123c16095"},{url:"tags/PHP/index.html",revision:"55e68c1bd57c2ee8b8abd9ca68b3413e"},{url:"tags/picgo/index.html",revision:"9926fe66f6ed80e8fb41f73559b776f5"},{url:"tags/plex/index.html",revision:"f715b51e841e6808af0da43e41d610dc"},{url:"tags/Portainer/index.html",revision:"b60de5edb6cd475c4f902181777b04d9"},{url:"tags/proxy/index.html",revision:"e23e8c64a9f067280dbb15897341b583"},{url:"tags/pt/index.html",revision:"460f2b9cb54b4500bd7122618648e7a3"},{url:"tags/PT/index.html",revision:"1995b5841ad60323bda7e538d7677f98"},{url:"tags/qbittorrent/index.html",revision:"bc0dc0f29030aaa1fe5fcf44921d9002"},{url:"tags/qnap/index.html",revision:"aee516237c606e8f0035821bb0f4e762"},{url:"tags/QNAP/index.html",revision:"dfd77d20a3e9575c5a80961a18b3610d"},{url:"tags/Rigistry/index.html",revision:"c9d080a472c7a53d475cabc7d1af2e0e"},{url:"tags/selfhost/index.html",revision:"d3a31f76741a73605b5c3d5ff9feaaa4"},{url:"tags/seo/index.html",revision:"9768c5a3f2b6a957757b28bb7bfaef24"},{url:"tags/SMART/index.html",revision:"aa0d1100137cd340a2ec86cf27d2615f"},{url:"tags/Sonarr/index.html",revision:"499a17ddafbcafddb679fd0c7b5910cd"},{url:"tags/sound/index.html",revision:"5526f2549fd39656ac851650e2fe98e0"},{url:"tags/speaker/index.html",revision:"df6cf81c65eff18c99f9653aaf330b18"},{url:"tags/SSD/index.html",revision:"59e4a1c770b05f39953209dd9bb33af4"},{url:"tags/ssl/index.html",revision:"eab627b00c9ac1b2b3a277131a749761"},{url:"tags/SSL/index.html",revision:"abd5707cb6ce5db46197dbab4b98fed1"},{url:"tags/swarm/index.html",revision:"f76f7ff64263027e940a9dbfed6fc5e8"},{url:"tags/SWOT/index.html",revision:"fdb77150d8b69318bf801514d697f32c"},{url:"tags/thinkpad/index.html",revision:"7e5bbf88f1d7218917ce3f271330edc4"},{url:"tags/TLS/index.html",revision:"62e94777cc29feaab18793b0e4b52736"},{url:"tags/tmm/index.html",revision:"36bd94a0eba973e29a67aa592d3fa964"},{url:"tags/Tomcat/index.html",revision:"fa1bd4c5a1132205e9d6469660161e44"},{url:"tags/traefik/index.html",revision:"8cc9f8aeee0abdc8439449a93acc96bd"},{url:"tags/transmission/index.html",revision:"2fc551ed1f72653efeab68d8fb2d47f4"},{url:"tags/Typora/index.html",revision:"fcefe17e971d6d7809e3dc15a8118419"},{url:"tags/ubuntu/index.html",revision:"95e9025cda2b662f66fdbf2c7b0c3595"},{url:"tags/UNF/index.html",revision:"abcddbf18fef0118d4384f680a15dbbe"},{url:"tags/vim/index.html",revision:"c447ca8e7948e54863f831a0ce816564"},{url:"tags/VPS/index.html",revision:"cdcddcf02872dc83437dead8d4cd0a06"},{url:"tags/Watchtower/index.html",revision:"464b1f831223908a95f2b64a36aa5961"},{url:"tags/WBS/index.html",revision:"f08a56fd4ea890b94593074e15dd2d0b"},{url:"tags/web/index.html",revision:"c5b0d2f8023a6132b562632b1e8358cb"},{url:"tags/Webdav/index.html",revision:"280216a153ac9d957f714eb7b37e98dc"},{url:"tags/WIFI/index.html",revision:"8b735bee95dda29bdb43431cfa862965"},{url:"tags/wiz/index.html",revision:"89c8b6197dc9f53a3fc240c06b91ace2"},{url:"tags/优化/index.html",revision:"e74869b00dbb6a5e1fb6ec12ac97b72d"},{url:"tags/刮削/index.html",revision:"22f3cdba52c5394449c8a9ca61e01410"},{url:"tags/启动/index.html",revision:"3bce44d5fe571c8efca180232a37f147"},{url:"tags/字幕/index.html",revision:"f3e488937741c7cbb6b9918c5e70ea1d"},{url:"tags/安全/index.html",revision:"d607e8afc7edc6b3de7d7dd7a4c305d7"},{url:"tags/宝塔/index.html",revision:"f213f223f25680d621e38858c6690143"},{url:"tags/嵌入式/index.html",revision:"cd1c67542adea95571a31bb134dad0e6"},{url:"tags/建站/index.html",revision:"ee6688589ca8ab5f1350a6a5a49e5d81"},{url:"tags/技巧/index.html",revision:"250b5cc2583fd568426ad661e01ccc89"},{url:"tags/教程/index.html",revision:"7999cdf44a4e4a1b13d2e54398efe6b3"},{url:"tags/物联网/index.html",revision:"605fe98844c96d1c4eeac08fe443fd8b"},{url:"tags/硬盘/index.html",revision:"f001dcc17f751a125494e68863256cd5"},{url:"tags/移植/index.html",revision:"92b60927b77f4f487dd383f195f68810"},{url:"tags/管理/index.html",revision:"0da7348faff68249e1714af80de47957"},{url:"tags/群晖/index.html",revision:"e78407cca865a6ddb8a4f2e346b65fae"},{url:"tags/隐私/index.html",revision:"c1e061d9a3d3b8135ae13e9543c0740a"},{url:"tags/韩红/index.html",revision:"b085252879d8a995eb5799907db70a08"},{url:"video/2021-10-11-how-to-scrape-video-whit-tinymediamanager/index.html",revision:"ccbea6686a551faa7f836e8817a408a0"},{url:"vps/2021-07-31-how-to-use-baota-with-vps/index.html",revision:"c26c0cd0d5c08539875cd074a051090f"},{url:"web/2021-09-06-encrypted-sni-anti-censorship/index.html",revision:"16940214e8d67984f136a1614d61d5e6"},{url:"web/2021-09-13-the-browser-rendering-process/index.html",revision:"fac9e3c2ae0c76f590b06899e80ba1e6"},{url:"web/2021-09-13-what-happened-when-you-click-http/index.html",revision:"213ce850dae7dbce18b89845d78c9d11"},{url:"web/2021-09-15-ccs-basec-knowledge/index.html",revision:"4b5d79f161a7619bd210dfa81fc40567"},{url:"web/2021-10-06-http-error-code-table/index.html",revision:"269ce38c66a64f957222034a1e14c5ca"},{url:"web/2021-10-14-how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04/index.html",revision:"7535dfbdf71c2ce0c657fb76439be868"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
