if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const i=document.createElement("script");i.src=a,document.head.appendChild(i),i.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},b=(e,i)=>{Promise.all(e.map(a)).then(e=>i(1===e.length?e[0]:e))},c={require:Promise.resolve(b)};self.define=(e,r,s)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+e.slice(1)};return Promise.all(r.map(e=>{switch(e){case"exports":return i;case"module":return d;default:return a(e)}})).then(e=>{e=s(...e);return i.default||(i.default=e),i})}))}}define("./service-worker.js",["./workbox-65969207"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7796cf09029d027d66de8eff17f094a2"},{url:"404/index.html",revision:"fc2df96ed75c0adfb84b0d2fe2d1bb35"},{url:"about/index.html",revision:"34c6be9a3990376a55fb3d3a547a11be"},{url:"aboutme/friendlink/index.html",revision:"b7c47f7103f2319d189805f1f43ba2f5"},{url:"aboutme/mypost/index.html",revision:"c05a226cf819c5a5f2343dfa2f942c01"},{url:"aboutme/myproject/index.html",revision:"4ce765efb04cdeb9d56a62b9d07350c1"},{url:"aboutme/mytech/index.html",revision:"202dcc5b9d82303d267499f887f35ffe"},{url:"aboutme/needtoread/index.html",revision:"fd30380a8539e245788ace5e54db6244"},{url:"ai/2021-09-14-deep-learning-of-face-recognition/index.html",revision:"4faaac750c6154d23196860c42cfb07d"},{url:"archives/2021/03/index.html",revision:"63a302f25a0fa815c28c4b6aeaf35d5b"},{url:"archives/2021/05/index.html",revision:"ea8cf49063e5656bb2e0c6ed737c537a"},{url:"archives/2021/06/index.html",revision:"17756bcf2e1df6da50a65a043654dd36"},{url:"archives/2021/07/index.html",revision:"4d861e016ced12b7feea1b2ac74c22da"},{url:"archives/2021/08/index.html",revision:"cb01f0d5d71480fd4bc2dcfd0e402bb5"},{url:"archives/2021/09/index.html",revision:"482f2a38e5ddd6d34e22cb4fdbe49e6d"},{url:"archives/2021/10/index.html",revision:"8fd2260864f9ee59404a2c2a9e0649e4"},{url:"archives/2021/index.html",revision:"e69e89288cb4f49ed5ca2fbf41626ae0"},{url:"archives/index.html",revision:"05cda460b6f9974c63623a0b6393fe1c"},{url:"bb/index.html",revision:"2092071acddf1b8b79583d832cd088a9"},{url:"blog/2021-03-03-use-githubpages-jekyll-to-make-a-personal-blog/index.html",revision:"d5b7bfc44e44c2afb8d63c3a50416a0c"},{url:"bt/2021-08-18-qbittorrent-parameter-reference-configuration/index.html",revision:"67293844a07a51cd364948d7491670ca"},{url:"bt/2021-08-18-transmission-parameter-reference-configuration/index.html",revision:"9d1bb2f2d8c4acef089dadb228a28721"},{url:"categories/aboutme/index.html",revision:"ef080f5adb1757d973b89c4860b443e2"},{url:"categories/ai/index.html",revision:"32020e91fc4da3fb0e24e275686be347"},{url:"categories/blog/index.html",revision:"9fb337c4794ed7a3de64f232d37cd6cb"},{url:"categories/bt/index.html",revision:"298b841b55a5495ad923e88ead7af353"},{url:"categories/docker/index.html",revision:"4c1662ad3d2a45d84972bbb2085b7610"},{url:"categories/embeded/index.html",revision:"31d0cb6abc6367714f5a6b89c3e6a4ca"},{url:"categories/gitbook/index.html",revision:"dfbce6ed0fbf7683956ebc53d279598e"},{url:"categories/gitlab/index.html",revision:"9165f2156def88a8510bc5b176c1df18"},{url:"categories/hexo/index.html",revision:"860ddc3bc7a12faaf1534b73a4767d8e"},{url:"categories/ide/index.html",revision:"0c7e309144f70bbf9ca475c4d83d4d87"},{url:"categories/image/index.html",revision:"0de0e5bc4ef383bb7aa2f473f67f50c1"},{url:"categories/index.html",revision:"8d6b7f3edb7893fc3b1a25572fbb1b73"},{url:"categories/linux/index.html",revision:"d1e1b89e548eea74d2fbfe9dec4b8754"},{url:"categories/music/index.html",revision:"8d892006dd12adbef0bc9bdc435d0c1e"},{url:"categories/mysql/index.html",revision:"9728b745f2930ed4d10416f7a14f5c1b"},{url:"categories/nas/index.html",revision:"e3abf20f42ec165dc25ffe55ef3deb0c"},{url:"categories/note/index.html",revision:"2782786a2dce4737a228b33c8adb4d89"},{url:"categories/notebook/index.html",revision:"87c20443427b9619be37b60fad0ccb30"},{url:"categories/PMBOK/index.html",revision:"5986452fad40a3e57a4cfb54d174ea94"},{url:"categories/qnap/index.html",revision:"c817d9db9b729f223f4db4db8cba14f3"},{url:"categories/tools/index.html",revision:"b6c43d60fc7d1bb52a84636b1cc2abf8"},{url:"categories/video/index.html",revision:"e5222e20795612453173f500114c1136"},{url:"categories/vps/index.html",revision:"8981b38019c6a43dabfacc9fa624680c"},{url:"categories/web/index.html",revision:"dc0b5456887a59b91883d2283b668c12"},{url:"contact/index.html",revision:"957a43db60f4570550cd053f2337dbca"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"fc9a460a4ae3bbcb82e4ebdc097b9e60"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"2fd57a6e0d7491d1ef63cff5a1c4a87d"},{url:"dash/index.html",revision:"56674ed650f143fd54de359c114eca84"},{url:"docker/2021-07-09-use-jeckett-sonarr-iyuu-qt-emby-building-automatic-movie-anime-process/index.html",revision:"efd64f22afd430d7c3bfdee297ca1bbb"},{url:"docker/2021-08-01-docker-use-brief-tutorial/index.html",revision:"19a106cce2410da364ac05abdf535072"},{url:"embeded/2021-07-30-3g-4g-iot-module-embedded-transplantation/index.html",revision:"46e16661227b5987669c209cf5a3e2e3"},{url:"embeded/2021-07-30-hisilicon-mpp-unf-architecture-source-code-level-analysis/index.html",revision:"776d34ef0c253061aaee3385b34f32c2"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"df8799d48e2a78e8913706bf50f506be"},{url:"galleries/2020/index.html",revision:"63c7f5cb0d5c310b0f7c51bc21a3798f"},{url:"galleries/index.html",revision:"63c00618523f626364a43e71ac05568d"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documentation-part2-gitlab/index.html",revision:"fc6dcb249f684d08e3d15e2ff53cdb2b"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documents-part1-gitbook-chapter/index.html",revision:"3fd9f20fb6bd1a40987def06dd0cafe9"},{url:"gitlab/2021-07-09-carck-gitlabee/index.html",revision:"ba00c4d3ecffa544f2dfe0e049d49022"},{url:"gitlab/2021-07-09-gitlab-install-and-usage/index.html",revision:"37ee30de38a414e4f23ff71c925d47ce"},{url:"gitlab/2021-08-02-gitlab-installation-and-use-tutorial-complete-version/index.html",revision:"83055b2618171956849f8b5865479cc0"},{url:"hexo/2021-09-10-use-hexo-and-matery-to-make-a-perfect-blog/index.html",revision:"98ecf6acd245c4b183dd50dce105f9a8"},{url:"ide/2021-09-15-vim-checklist/index.html",revision:"49d44cf7f248307664e1c8607153231a"},{url:"image/2021-09-14-auto-expose-theory/index.html",revision:"1db04f53d39da8f9da9de9d81bba4187"},{url:"index.html",revision:"d97215d908a3136d3bb5f38012b88ceb"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"4cf7d0890238750cf9fd18878fea096f"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/prism/prism.css",revision:"dfec465c4f7bf64f5092834f7878281b"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"linux/2021-07-09-linux-pt-hard-link-tools/index.html",revision:"10bc3f1841f07cfc5354db2552edb478"},{url:"linux/2021-08-18-debian-lenny-laptop-installation-records/index.html",revision:"a21b17365ce0a8c0cbdcc9d2a26cd62c"},{url:"linux/2021-10-12-cmake-quick-start-tutorial/index.html",revision:"56442d95af1bd8f83bedfc359cb86a8c"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"music/2021-10-03-music-analysis-for-hanhong-tianliangle/index.html",revision:"cf48862da4c435423c4d604406fc5138"},{url:"music/2021-10-06-private-music-service/index.html",revision:"899a2d0beab9f3b6411acc73bd73e639"},{url:"music/2021-10-11-how-to-scrape-music-idtag/index.html",revision:"29b7ecf04ab8c14a13e9af9bdc219086"},{url:"mysql/2021-09-06-simple-tuning-of-mysql-performance-through-the-pagoda-panel/index.html",revision:"ff4a1327af461ab493cd07127ca20577"},{url:"mysql/2021-09-08-mariadb-and-mysql-command/index.html",revision:"ac55cea01de5d9904c2498a22dcef477"},{url:"nas/2021-10-12-access-the-docker-service-in-qnap-nas-through-ipv6/index.html",revision:"e15536f7d09517fa252ef22b6a20e14e"},{url:"note/2021-07-25-how-to-make-perfect-note/index.html",revision:"6d9106340ee5e35259a3fa8513ca24cc"},{url:"note/2021-09-09-deploy-wiznote-docker-on-nas/index.html",revision:"37938d009f0febf032d14ede69da967b"},{url:"note/2021-09-09-play-with-joplin/index.html",revision:"a4d4c80c3d155e1988399c398f1864af"},{url:"note/2021-09-09-start-to-use-joplin/index.html",revision:"03b5fb126c21fe8c02c99c1f0afef7c7"},{url:"note/2021-09-09-the-joplin-plugin-and-its-markdown-syntax./index.html",revision:"3f644727e4582eb9dc3df24d35c72676"},{url:"note/2021-09-10-the-joplin-plugin-recommend/index.html",revision:"dd61617e62dccdf1b47d80f65c8da184"},{url:"notebook/2021-10-05-repair-thinkpad-cracking-voice/index.html",revision:"521e322766b886b95a995d07397eb988"},{url:"pmbok/2021-08-18-several-common-management-models-and-methods/index.html",revision:"784af046272e12590fbaadbfce8a0622"},{url:"qnap/2021-07-25-qnap-move-hard-disk-position/index.html",revision:"2dd5401dd916a02a74da8ed891d48401"},{url:"qnap/2021-08-18-io-error-correct/index.html",revision:"592209f6c3143bafd23f9093fef9c276"},{url:"qnap/2021-09-01-qnap-change-app-start-sequence/index.html",revision:"a84e2d17dfcafa5574df8375dd23b3fc"},{url:"tags/3531a/index.html",revision:"f9e25095d0d9f53b5704c32e3218d5a6"},{url:"tags/3798M/index.html",revision:"7a57124a693b2e8bfacc6c859882da74"},{url:"tags/3a/index.html",revision:"14f12c908ed389cadbdfcda463d80dc5"},{url:"tags/3G/index.html",revision:"5b9a91f63b89df5b3a808b0ea8d7d0b6"},{url:"tags/4G/index.html",revision:"41e3a6b460dc47608cfd35ae90600b2f"},{url:"tags/5W2H/index.html",revision:"38d3824e1065a38abf3fa2a34c7ffc14"},{url:"tags/aboutme，blog/index.html",revision:"4fdbd41c66d832690c02397d18789dec"},{url:"tags/aboutme/index.html",revision:"93e847401dd4f45644762c3f59aaf9f5"},{url:"tags/ae/index.html",revision:"fc383c1b9e9867dd1323cafcae66b65f"},{url:"tags/ai/index.html",revision:"97cb68568ee56227c0845b432e54b476"},{url:"tags/Apache/index.html",revision:"1ef0305eff81564440d3d416a3bd7bf1"},{url:"tags/ATI/index.html",revision:"2dd55b7440f20e3a95a7477bef3ac844"},{url:"tags/blog/index.html",revision:"a8066403c14dd613548fdbd71bf4a964"},{url:"tags/bt/index.html",revision:"08cc055fd19c05821d04a36a365c772d"},{url:"tags/BT/index.html",revision:"44407a0b5c6364e294467a479285238a"},{url:"tags/ccs/index.html",revision:"d13f9d538052ffbab9827325d839c912"},{url:"tags/cdn/index.html",revision:"48f44c489996ad640b29fe34a0110c32"},{url:"tags/cmake/index.html",revision:"1fc7b74e2abf6010392ea8e7c92ad40e"},{url:"tags/Crack/index.html",revision:"5fab166f0e48a2041701a6c07d8861c2"},{url:"tags/css/index.html",revision:"db7452b2219cb1254808b2fddf6ddd78"},{url:"tags/Debian/index.html",revision:"cc6834d1ddff5104d9c1753221df0a7f"},{url:"tags/develop/index.html",revision:"afa107c316601af17ea2d0a7dd429e8f"},{url:"tags/DNSCrypt/index.html",revision:"12f08bae8203ef545e4eb8dd12d485d4"},{url:"tags/DNSMasq/index.html",revision:"78fad20a17771c81c53a7b3f15b6f664"},{url:"tags/docker/index.html",revision:"74aaf67f54eea54cce9b00f143f69915"},{url:"tags/Docker/index.html",revision:"f58decac171050fe753d538ddcd868d9"},{url:"tags/Driver/index.html",revision:"5f63f17eba84d66435586116e347f089"},{url:"tags/ED2K/index.html",revision:"6bfd5c2dd778d731499c965894284a71"},{url:"tags/email/index.html",revision:"b28ef3c5c402bec1a9b4bdfb767a950c"},{url:"tags/embeded/index.html",revision:"b3bc36c291aa490bb64e4c51cb33803b"},{url:"tags/emby/index.html",revision:"7437f2dfcc0609656d342978a2528515"},{url:"tags/Emby/index.html",revision:"dbc224ea34ea5fb724c8a297a6eb0ee7"},{url:"tags/face/index.html",revision:"067c797e6722d5aac2a334e64f46d83d"},{url:"tags/Git/index.html",revision:"84e54ab3e1827e3822a4cffdb1f16e66"},{url:"tags/GitBook/index.html",revision:"d07c53429400375e9b9229c780ce9e8e"},{url:"tags/Github/index.html",revision:"f7b86f9e379761f270ca3b2123903f65"},{url:"tags/Gitlab/index.html",revision:"81d40fc624de9d58b11d6303337ec1cc"},{url:"tags/GROW/index.html",revision:"50bc3d7e3ce736b40fa92b73c87d9e70"},{url:"tags/hardlink/index.html",revision:"c2f1099076a4813eb5eee6d347b88cc2"},{url:"tags/HDD/index.html",revision:"46d2353cbea8754b22b7ae25e6e19ee7"},{url:"tags/hexo/index.html",revision:"6d1c76ee3210bd2b2212be0cf4672f7c"},{url:"tags/hisilicon/index.html",revision:"ced9c0edb12e6263e4c866c662e822e8"},{url:"tags/Hotkey/index.html",revision:"ecbbef4b6e615f9e4ac88e952e8314da"},{url:"tags/http/index.html",revision:"8aee130dd230a3f9ad60131119d46108"},{url:"tags/https/index.html",revision:"35eace1ba393a453f573ded9aa25c643"},{url:"tags/ide/index.html",revision:"33a819917d92f82ac3814257bd8ded17"},{url:"tags/image/index.html",revision:"18d25118af956e8bc02656a66a6abcd8"},{url:"tags/index.html",revision:"54c975b7a9cd3d23eb4ae3c7ddf3f91f"},{url:"tags/ipv6/index.html",revision:"94e44eb5926634389e7771973ec5cbdf"},{url:"tags/Jeckett/index.html",revision:"e0381e864685874ff81e1c444c7d9e87"},{url:"tags/Jekyll/index.html",revision:"131ccec1791b9dc3a03496ceae4445d5"},{url:"tags/Joplin/index.html",revision:"1d4a75450525692a021d6a562978d43a"},{url:"tags/js/index.html",revision:"59e1b797ab8922af5ea0f236e7ecfd0b"},{url:"tags/JSP/index.html",revision:"a886712204dd4e61631abdc0abd7fd77"},{url:"tags/Kernel/index.html",revision:"f0d9885c75548a116243f2bbd1d88952"},{url:"tags/LAMP/index.html",revision:"2915a08c23d1ce7de31dea14daa6ce13"},{url:"tags/Laptop/index.html",revision:"8fc7744a13cbd66b6f81e09d3fe2b8d4"},{url:"tags/linux/index.html",revision:"9747822d12ee15eaf4759eae62a84d8d"},{url:"tags/Linux/index.html",revision:"93727eef0f57bf5cb376453620cf29ea"},{url:"tags/Mariadb/index.html",revision:"6f0d43743f4c060240fd61e4360ad35d"},{url:"tags/markdown/index.html",revision:"5df22324ec79e4dd3852022b248ecee0"},{url:"tags/MarkDown/index.html",revision:"bd79e8acae038831a990a3b9734b2ef5"},{url:"tags/matery/index.html",revision:"1552933772a83b86fa32603c08b0dccc"},{url:"tags/Mermaid/index.html",revision:"c828797c4fee0bfd8256fa1805c446cb"},{url:"tags/mp3tag/index.html",revision:"083a3d15fc58d594ca2267ff26999047"},{url:"tags/MPP/index.html",revision:"b2f9b4388fd077aea0a11ec33bfb276e"},{url:"tags/mstream/index.html",revision:"ba1f96a1e8367f7eb320e712048aadeb"},{url:"tags/music/index.html",revision:"806f45ad374c29875f28916913b1e235"},{url:"tags/MusicBrainz/index.html",revision:"a54fe14c874a9e869d08295e53a4b33d"},{url:"tags/MySql/index.html",revision:"1761c07655a6bee63eeb826df7d0feaf"},{url:"tags/MySQL/index.html",revision:"17503e65201194b7f503d50b1d964bc6"},{url:"tags/nas/index.html",revision:"df6f1aa178a71312b980dde38228edfe"},{url:"tags/Nas/index.html",revision:"ee24c20564de8cf3bacdebd676a2e362"},{url:"tags/Nginx/index.html",revision:"8ea623371ceb8bc22f96364413a6cb3d"},{url:"tags/note/index.html",revision:"bbe97549d7e14c4457d094b87824f361"},{url:"tags/OKR/index.html",revision:"c9a7895b11c9ee261941604a8b5ea74e"},{url:"tags/PDCA/index.html",revision:"7c447a3e1c47e3d751e1b0475b5a0fc9"},{url:"tags/PHP/index.html",revision:"4f4cc3d2cf490e18d09f54a12c084658"},{url:"tags/picgo/index.html",revision:"119d8a228c31198d926f87002827499a"},{url:"tags/plex/index.html",revision:"c540752a1a85fab1fdb7eed12b307a29"},{url:"tags/Portainer/index.html",revision:"201f450497f2527a4da0c1f3911f4e08"},{url:"tags/proxy/index.html",revision:"b4113a2f9eda80626b3f71a90980bcca"},{url:"tags/pt/index.html",revision:"743501d7a6bc3629255bc70557dbe04b"},{url:"tags/PT/index.html",revision:"a1ed43d2cca946c56c7c8d8deeca0b92"},{url:"tags/qbittorrent/index.html",revision:"200b6fe28dece3c4ee26d5f78427fe9e"},{url:"tags/qnap/index.html",revision:"2da2da10cc2623ec9e773488b46c5002"},{url:"tags/QNAP/index.html",revision:"14774eca35c1a05a227583b78fa5181e"},{url:"tags/Rigistry/index.html",revision:"e5345facc5453c865c0150c9d5662a58"},{url:"tags/selfhost/index.html",revision:"c24fba186efa3fb84b9b846ce4955e9c"},{url:"tags/seo/index.html",revision:"dbda6e3f5265042506002fc11fab9af5"},{url:"tags/SMART/index.html",revision:"48bb0fb58cb535a30406fbf33f8df521"},{url:"tags/Sonarr/index.html",revision:"208b426c21f9431e86c73cc29482d11e"},{url:"tags/sound/index.html",revision:"9aa958ef48338e6f58124b042adeae5b"},{url:"tags/speaker/index.html",revision:"c44df17f88d82ed329b0ffa540fd4e29"},{url:"tags/SSD/index.html",revision:"e7dff9d839cc056e5ca87e197f2c4a78"},{url:"tags/ssl/index.html",revision:"764d05be2cf38d00abc93f461a59491c"},{url:"tags/SSL/index.html",revision:"4fef666d2eac6e6fe17f45e5b9ee4c99"},{url:"tags/swarm/index.html",revision:"54e9ed059b32758ef3b41beb72d77d96"},{url:"tags/SWOT/index.html",revision:"0d1f447d74bc6ffa0d3173d88176d7c0"},{url:"tags/thinkpad/index.html",revision:"651ea9f85d03e327cebf6596d62a80b6"},{url:"tags/TLS/index.html",revision:"f4871d8ca1a01154bfe0ed25128af553"},{url:"tags/tmm/index.html",revision:"be34ad763b5df21e7f853d0b35fd9885"},{url:"tags/Tomcat/index.html",revision:"856d2403510de6824c05f8fb736c7f34"},{url:"tags/traefik/index.html",revision:"67e5df960ccad4ebd1aade5f2aa44a93"},{url:"tags/transmission/index.html",revision:"ec597b716f9626ce91d34f28b2db634e"},{url:"tags/Typora/index.html",revision:"6d066814062a2ff67d6aa6e0fc9ba8fd"},{url:"tags/ubuntu/index.html",revision:"24fac3ef1377a48fc912c4c815843c86"},{url:"tags/UNF/index.html",revision:"30b022409c66ca01d1cf309e4198153c"},{url:"tags/vim/index.html",revision:"19c3c39e6e9fa3a5d055d0ef7c22536d"},{url:"tags/VPS/index.html",revision:"413f939f6c40e6cc3295f5ba03b09097"},{url:"tags/vscode/index.html",revision:"c0bf1caf205f479e0f8c81bf2e5751c1"},{url:"tags/Watchtower/index.html",revision:"71e796903418bb13eaaf4cff5df4054f"},{url:"tags/WBS/index.html",revision:"6115bfdc8e1839e0006876082448ebdf"},{url:"tags/web/index.html",revision:"16591b68cea47873e6ff8530718610fd"},{url:"tags/Webdav/index.html",revision:"6e3b55d3bbbf9e866d51a5a2ea5d7e68"},{url:"tags/WIFI/index.html",revision:"e09699b5249b538b7269ebb47c043086"},{url:"tags/wiz/index.html",revision:"17b75511cf2e245e55f37090a1b93649"},{url:"tags/优化/index.html",revision:"9e44e1bf506590231b1ea0004759ad0c"},{url:"tags/刮削/index.html",revision:"0e24a4a5085c8b3fda0c69df66ea5d5c"},{url:"tags/启动/index.html",revision:"9828f23689e5a4b653755b9853f36f83"},{url:"tags/字幕/index.html",revision:"da4906ca6342201c49e08ace3057736f"},{url:"tags/安全/index.html",revision:"0214e4235bfdccdea18d2ef92b601fa0"},{url:"tags/宝塔/index.html",revision:"1ae5c8359fa80f6d232e83396d162113"},{url:"tags/嵌入式/index.html",revision:"dac9675c3c2695b4b8706a3b48ccd909"},{url:"tags/建站/index.html",revision:"d5d936f26bea21b595e1e9e6b6916ac4"},{url:"tags/技巧/index.html",revision:"5b08e91271f41ed718551feaedd24900"},{url:"tags/插件/index.html",revision:"4c73a4361fb20a102d042439bc51150b"},{url:"tags/教程/index.html",revision:"42c5b446ea3c253c17b588c6ec9c67f9"},{url:"tags/物联网/index.html",revision:"1f3e466d4dac2a6f8c289a3b92c2e0e3"},{url:"tags/硬盘/index.html",revision:"a2e65598e9e72d7b15e1cdf222d2e807"},{url:"tags/移植/index.html",revision:"2b41d303ffefe83eee76172777b3c070"},{url:"tags/管理/index.html",revision:"81456d9be467751d3d68b748cdadba4f"},{url:"tags/编码/index.html",revision:"0704528a18283b85b1fcaa60d4911e40"},{url:"tags/群晖/index.html",revision:"7e78ba9ecc32e7272c609c8e3dd55dc0"},{url:"tags/隐私/index.html",revision:"0d277581a2d3b7fdbcbfc43391ac804b"},{url:"tags/韩红/index.html",revision:"1d9a2dfc4bd94ea01798e2396cb052b5"},{url:"tools/2021-10-18-how-to-use-vs-code/index.html",revision:"4e38d6d2ccbacf89415d56bd942d9045"},{url:"video/2021-10-11-how-to-scrape-video-whit-tinymediamanager/index.html",revision:"3568c8b1d69d2f6baf99c9665f757e33"},{url:"vps/2021-07-31-how-to-use-baota-with-vps/index.html",revision:"99c58dc6e429e5a30f0af142f170c2c1"},{url:"web/2021-09-06-encrypted-sni-anti-censorship/index.html",revision:"32ed9a4db0c6c78552b93dce3388a46c"},{url:"web/2021-09-13-the-browser-rendering-process/index.html",revision:"04f0b64404b7b2010538a57f702b29c8"},{url:"web/2021-09-13-what-happened-when-you-click-http/index.html",revision:"5210a1e74abf8d0a9056d3c299704dfe"},{url:"web/2021-09-15-ccs-basec-knowledge/index.html",revision:"6821a9530215625d0ca25541c4621285"},{url:"web/2021-10-06-http-error-code-table/index.html",revision:"d243c0da506da3a7ab992ffd8bd9b547"},{url:"web/2021-10-14-how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04/index.html",revision:"5e950c7af60d3845b7f4c12566c3a385"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")});