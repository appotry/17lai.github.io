if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const i=document.createElement("script");i.src=a,document.head.appendChild(i),i.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},b=(e,i)=>{Promise.all(e.map(a)).then(e=>i(1===e.length?e[0]:e))},c={require:Promise.resolve(b)};self.define=(e,r,s)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+e.slice(1)};return Promise.all(r.map(e=>{switch(e){case"exports":return i;case"module":return d;default:return a(e)}})).then(e=>{e=s(...e);return i.default||(i.default=e),i})}))}}define("./service-worker.js",["./workbox-65969207"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7796cf09029d027d66de8eff17f094a2"},{url:"404/index.html",revision:"fc2df96ed75c0adfb84b0d2fe2d1bb35"},{url:"about/index.html",revision:"3c33564e624537c2e58f3977fea3f7af"},{url:"aboutme/friendlink/index.html",revision:"b7c47f7103f2319d189805f1f43ba2f5"},{url:"aboutme/mypost/index.html",revision:"ee9e5b1e670f2a590580def47f8758d7"},{url:"aboutme/myproject/index.html",revision:"4ce765efb04cdeb9d56a62b9d07350c1"},{url:"aboutme/mytech/index.html",revision:"202dcc5b9d82303d267499f887f35ffe"},{url:"aboutme/needtoread/index.html",revision:"f4a4efe1ca9f2b6f2b1c6c86eaaee2c2"},{url:"ai/2021-09-14-deep-learning-of-face-recognition/index.html",revision:"4faaac750c6154d23196860c42cfb07d"},{url:"archives/2021/03/index.html",revision:"63a302f25a0fa815c28c4b6aeaf35d5b"},{url:"archives/2021/05/index.html",revision:"ea8cf49063e5656bb2e0c6ed737c537a"},{url:"archives/2021/06/index.html",revision:"1d4b962010f9869949e0decf8e599131"},{url:"archives/2021/07/index.html",revision:"4d861e016ced12b7feea1b2ac74c22da"},{url:"archives/2021/08/index.html",revision:"cb01f0d5d71480fd4bc2dcfd0e402bb5"},{url:"archives/2021/09/index.html",revision:"482f2a38e5ddd6d34e22cb4fdbe49e6d"},{url:"archives/2021/10/index.html",revision:"8fd2260864f9ee59404a2c2a9e0649e4"},{url:"archives/2021/index.html",revision:"12519875a117206d254db4bf1bc28934"},{url:"archives/index.html",revision:"5fb3594caee7c12755f6de03183e5f5e"},{url:"bb/index.html",revision:"2092071acddf1b8b79583d832cd088a9"},{url:"blog/2021-03-03-use-githubpages-jekyll-to-make-a-personal-blog/index.html",revision:"d5b7bfc44e44c2afb8d63c3a50416a0c"},{url:"bt/2021-08-18-qbittorrent-parameter-reference-configuration/index.html",revision:"67293844a07a51cd364948d7491670ca"},{url:"bt/2021-08-18-transmission-parameter-reference-configuration/index.html",revision:"9d1bb2f2d8c4acef089dadb228a28721"},{url:"categories/aboutme/index.html",revision:"a224b1a8a50e3c408fdd5ca7f9210f52"},{url:"categories/ai/index.html",revision:"2d8d4042d1a3083c17fe356eba3b9586"},{url:"categories/blog/index.html",revision:"fe4499af60c40b23fac50f25590f43c6"},{url:"categories/bt/index.html",revision:"ea7110daea1ff7d5700775c82fbe1ef8"},{url:"categories/docker/index.html",revision:"3c41a61c9df477e5089d47844d682b40"},{url:"categories/embeded/index.html",revision:"a6790784d6a026ca3b55c7161510a7e0"},{url:"categories/gitbook/index.html",revision:"66170bc71de9f6b2f7e04d942750e791"},{url:"categories/gitlab/index.html",revision:"85bb51786199492498f6e2a595f89f4f"},{url:"categories/hexo/index.html",revision:"e9f3a37813650d4975a3a9b21ada5677"},{url:"categories/ide/index.html",revision:"5bf8629b7bc98a66de266b0035aef48e"},{url:"categories/image/index.html",revision:"1defd2ab0125c0febe1b57f012797de9"},{url:"categories/index.html",revision:"26f3bd216c07c3e684a63efecd0124cf"},{url:"categories/linux/index.html",revision:"9f544d21a14a1de9af99256be05c24f8"},{url:"categories/music/index.html",revision:"93123a800698143e241841d9bde2f09c"},{url:"categories/mysql/index.html",revision:"94cae87ad3f9f23c4c254a4a6fe0a8b7"},{url:"categories/nas/index.html",revision:"6f6a8ea5ddc62ebcc8c5a36a4517cbff"},{url:"categories/note/index.html",revision:"53bd207251cc2f1598e636bf8286b4c1"},{url:"categories/notebook/index.html",revision:"0829058265f2659c81f9b8328ac87428"},{url:"categories/PMBOK/index.html",revision:"3fe4ae712ca1b361fab7dbf8b856fbb8"},{url:"categories/qnap/index.html",revision:"dda9ca947cf6f38a0d6d9d5619b6f324"},{url:"categories/tools/index.html",revision:"3b179d9d34e8e997096779cc9728ecb2"},{url:"categories/video/index.html",revision:"3ed5d64f64c258d567263039d4d20994"},{url:"categories/vps/index.html",revision:"af6372651618e3d036c1df8701ee974e"},{url:"categories/web/index.html",revision:"96016d9298b14884a3ac5d79d0a160cc"},{url:"contact/index.html",revision:"957a43db60f4570550cd053f2337dbca"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"fc9a460a4ae3bbcb82e4ebdc097b9e60"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"2fd57a6e0d7491d1ef63cff5a1c4a87d"},{url:"dash/index.html",revision:"56674ed650f143fd54de359c114eca84"},{url:"docker/2021-07-09-use-jeckett-sonarr-iyuu-qt-emby-building-automatic-movie-anime-process/index.html",revision:"efd64f22afd430d7c3bfdee297ca1bbb"},{url:"docker/2021-08-01-docker-use-brief-tutorial/index.html",revision:"19a106cce2410da364ac05abdf535072"},{url:"embeded/2021-07-30-3g-4g-iot-module-embedded-transplantation/index.html",revision:"46e16661227b5987669c209cf5a3e2e3"},{url:"embeded/2021-07-30-hisilicon-mpp-unf-architecture-source-code-level-analysis/index.html",revision:"ce6d9f3ea3570de114cf5408e8c2872d"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"df8799d48e2a78e8913706bf50f506be"},{url:"galleries/2020/index.html",revision:"63c7f5cb0d5c310b0f7c51bc21a3798f"},{url:"galleries/index.html",revision:"63c00618523f626364a43e71ac05568d"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documentation-part2-gitlab/index.html",revision:"fc6dcb249f684d08e3d15e2ff53cdb2b"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documents-part1-gitbook-chapter/index.html",revision:"3fd9f20fb6bd1a40987def06dd0cafe9"},{url:"gitlab/2021-07-09-carck-gitlabee/index.html",revision:"ba00c4d3ecffa544f2dfe0e049d49022"},{url:"gitlab/2021-07-09-gitlab-install-and-usage/index.html",revision:"37ee30de38a414e4f23ff71c925d47ce"},{url:"gitlab/2021-08-02-gitlab-installation-and-use-tutorial-complete-version/index.html",revision:"83055b2618171956849f8b5865479cc0"},{url:"hexo/2021-09-10-use-hexo-and-matery-to-make-a-perfect-blog/index.html",revision:"98ecf6acd245c4b183dd50dce105f9a8"},{url:"ide/2021-09-15-vim-checklist/index.html",revision:"49d44cf7f248307664e1c8607153231a"},{url:"image/2021-09-14-auto-expose-theory/index.html",revision:"1db04f53d39da8f9da9de9d81bba4187"},{url:"index.html",revision:"d97215d908a3136d3bb5f38012b88ceb"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"4cf7d0890238750cf9fd18878fea096f"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/prism/prism.css",revision:"dfec465c4f7bf64f5092834f7878281b"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"linux/2021-07-09-linux-pt-hard-link-tools/index.html",revision:"10bc3f1841f07cfc5354db2552edb478"},{url:"linux/2021-08-18-debian-lenny-laptop-installation-records/index.html",revision:"a21b17365ce0a8c0cbdcc9d2a26cd62c"},{url:"linux/2021-10-12-cmake-quick-start-tutorial/index.html",revision:"56442d95af1bd8f83bedfc359cb86a8c"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"music/2021-10-03-music-analysis-for-hanhong-tianliangle/index.html",revision:"cf48862da4c435423c4d604406fc5138"},{url:"music/2021-10-06-private-music-service/index.html",revision:"899a2d0beab9f3b6411acc73bd73e639"},{url:"music/2021-10-11-how-to-scrape-music-idtag/index.html",revision:"29b7ecf04ab8c14a13e9af9bdc219086"},{url:"mysql/2021-09-06-simple-tuning-of-mysql-performance-through-the-pagoda-panel/index.html",revision:"ff4a1327af461ab493cd07127ca20577"},{url:"mysql/2021-09-08-mariadb-and-mysql-command/index.html",revision:"ac55cea01de5d9904c2498a22dcef477"},{url:"nas/2021-10-12-access-the-docker-service-in-qnap-nas-through-ipv6/index.html",revision:"e15536f7d09517fa252ef22b6a20e14e"},{url:"note/2021-07-25-how-to-make-perfect-note/index.html",revision:"6d9106340ee5e35259a3fa8513ca24cc"},{url:"note/2021-09-09-deploy-wiznote-docker-on-nas/index.html",revision:"37938d009f0febf032d14ede69da967b"},{url:"note/2021-09-09-play-with-joplin/index.html",revision:"a4d4c80c3d155e1988399c398f1864af"},{url:"note/2021-09-09-start-to-use-joplin/index.html",revision:"03b5fb126c21fe8c02c99c1f0afef7c7"},{url:"note/2021-09-09-the-joplin-plugin-and-its-markdown-syntax./index.html",revision:"3f644727e4582eb9dc3df24d35c72676"},{url:"note/2021-09-10-the-joplin-plugin-recommend/index.html",revision:"dd61617e62dccdf1b47d80f65c8da184"},{url:"notebook/2021-10-05-repair-thinkpad-cracking-voice/index.html",revision:"521e322766b886b95a995d07397eb988"},{url:"pmbok/2021-08-18-several-common-management-models-and-methods/index.html",revision:"784af046272e12590fbaadbfce8a0622"},{url:"qnap/2021-07-25-qnap-move-hard-disk-position/index.html",revision:"2dd5401dd916a02a74da8ed891d48401"},{url:"qnap/2021-08-18-io-error-correct/index.html",revision:"592209f6c3143bafd23f9093fef9c276"},{url:"qnap/2021-09-01-qnap-change-app-start-sequence/index.html",revision:"a84e2d17dfcafa5574df8375dd23b3fc"},{url:"tags/3531a/index.html",revision:"80a1005a65b2d23854a6a43d9d20ba3c"},{url:"tags/3798M/index.html",revision:"5b04c0f4ab6aee6a4cd9f9edb13a0587"},{url:"tags/3a/index.html",revision:"5fafa4dd5aac80d6f11d64123b052779"},{url:"tags/3G/index.html",revision:"818bd9ccd1ff1c91ec6d4b06cc63aada"},{url:"tags/4G/index.html",revision:"65ca5c53646b0b7cb1fd3db7ed7eaeec"},{url:"tags/5W2H/index.html",revision:"af9b4df895d03be5b0a165383d9a8c1b"},{url:"tags/aboutme，blog/index.html",revision:"21482e22a27ef38607a206d883b38cf4"},{url:"tags/aboutme/index.html",revision:"e3c0c248b3fa2e209d7f8d72ed6aba00"},{url:"tags/ae/index.html",revision:"09b3aa39a70e8339bb12fcd5bd5a35ad"},{url:"tags/ai/index.html",revision:"8ddc15eb52518afba1a90cb458b5c31f"},{url:"tags/Apache/index.html",revision:"0acce8f09bc1d70fa40cbe7252d0c181"},{url:"tags/ATI/index.html",revision:"77116dfaf85cf997ca4cc540ac206e6d"},{url:"tags/blog/index.html",revision:"01c4429c33c3de7fe08759711c48f1b4"},{url:"tags/bt/index.html",revision:"0aff5b074c46f5ea7d2bbc5cc5ed488a"},{url:"tags/BT/index.html",revision:"9494f8ce9956f33d7943cbda2c37015c"},{url:"tags/ccs/index.html",revision:"7e0fd798571c016de7d2471bde59bdda"},{url:"tags/cdn/index.html",revision:"248d4e5f1a6c7fc6068a59d84232a40c"},{url:"tags/cmake/index.html",revision:"9b0ed4e258eb376f15539cbb19988b87"},{url:"tags/Crack/index.html",revision:"6698536763734f822b3b4103ca74a56f"},{url:"tags/css/index.html",revision:"0f895e554918aa25cbfeb44705d84d14"},{url:"tags/Debian/index.html",revision:"107533d06d425fa9d04114620d80acc8"},{url:"tags/develop/index.html",revision:"e36ddd8b9d2a80ccee973801550d5e30"},{url:"tags/DNSCrypt/index.html",revision:"abbe430c7b9455f7bd60b65c06aa9cbb"},{url:"tags/DNSMasq/index.html",revision:"90ab0f5b9a44c3ffc2fff1fe75a15ec7"},{url:"tags/docker/index.html",revision:"b9a33a22c800c83b1faf6d8a2a1d9557"},{url:"tags/Docker/index.html",revision:"d1587012482f6f066ec6cc751ff23cef"},{url:"tags/Driver/index.html",revision:"44e77d969d375ca0e7573ab1234ec7b3"},{url:"tags/ED2K/index.html",revision:"713c2d3a5a840b2898a8437296657067"},{url:"tags/email/index.html",revision:"99888076701bc402398b83f2af41135d"},{url:"tags/embeded/index.html",revision:"fd4df504b426147a6853b62a3119afb3"},{url:"tags/emby/index.html",revision:"15881d3970f8a088cb2c9b16b8f01ddd"},{url:"tags/Emby/index.html",revision:"9c998462820e4e25f02837efe1781874"},{url:"tags/face/index.html",revision:"707faef0dd44069d272ede0b6f8ef7f2"},{url:"tags/Git/index.html",revision:"0a9a4170c32d41619fa626a105a65cb4"},{url:"tags/GitBook/index.html",revision:"63e426268a43a0e63899c82b4b98d420"},{url:"tags/Github/index.html",revision:"29aecb89a32be7b47731cb9bd7bbab99"},{url:"tags/Gitlab/index.html",revision:"66cdad9c4cabfbb19e614e326c823257"},{url:"tags/GROW/index.html",revision:"b486b54dcc0d7bba7d7cd6cc7a923974"},{url:"tags/hardlink/index.html",revision:"836d639d625f763fb168aeb80714b140"},{url:"tags/HDD/index.html",revision:"b36ab6a91eb99591df846c5945460754"},{url:"tags/hexo/index.html",revision:"35c8205ca4c991bd32a010539b4c032e"},{url:"tags/hisilicon/index.html",revision:"8ee2ddca139ca96c00835be4720f00fa"},{url:"tags/Hotkey/index.html",revision:"796abaf9ad880bfdefc4e8eb064c1a66"},{url:"tags/http/index.html",revision:"a527d3112e92cbe28dad81bc0c4622d0"},{url:"tags/https/index.html",revision:"7221a119452648121b7f92e87ca696f3"},{url:"tags/ide/index.html",revision:"29e83bb2ab8cba0cda6cad465c18bb82"},{url:"tags/image/index.html",revision:"59cb6941cd6490ce029a099b4bd914d3"},{url:"tags/index.html",revision:"85206f4528f0a3da7ed6e6220b93e362"},{url:"tags/ipv6/index.html",revision:"a98c3c1cad7e64e2e52deaa28addf75c"},{url:"tags/Jeckett/index.html",revision:"026cc3e91ec744dce4775d390ccb3a28"},{url:"tags/Jekyll/index.html",revision:"beffa9d7f8f1c09e1723be68fc79fffe"},{url:"tags/Joplin/index.html",revision:"9ba18da9f9a3a64bedc98c615a07c043"},{url:"tags/js/index.html",revision:"fae63b1889ecd773e3e30a3e6e1f6246"},{url:"tags/JSP/index.html",revision:"4c18028a79586e79fb675eb95fc389e1"},{url:"tags/Kernel/index.html",revision:"6e63aae243d101ea6bf5402fd013bae3"},{url:"tags/LAMP/index.html",revision:"ceba923f5f4e16880d88970f8adf671f"},{url:"tags/Laptop/index.html",revision:"96c9c51d229fabde4aec83a2a0b9866f"},{url:"tags/linux/index.html",revision:"4d5dcb93c3465fdce427057da880bf6d"},{url:"tags/Linux/index.html",revision:"0b9fcefc82da751ebc1544fb039ae2a4"},{url:"tags/Mariadb/index.html",revision:"c021f4c407462158c00a5e316b0cc70b"},{url:"tags/markdown/index.html",revision:"efbd505403c9d7b9ee3710a432f5e9a1"},{url:"tags/MarkDown/index.html",revision:"49cc79e909e78c1d65c983ffd1a502ce"},{url:"tags/matery/index.html",revision:"7d5f4e87b78369907389115f19febe1e"},{url:"tags/Mermaid/index.html",revision:"0840d3cf80528a5881e676e2dfd028dc"},{url:"tags/mp3tag/index.html",revision:"3f67228c0396585eff4433c8fe22089f"},{url:"tags/MPP/index.html",revision:"15db0dadff1ba039060ceeb58cb30b1f"},{url:"tags/mstream/index.html",revision:"38bf520df82740b0c587f6b07f983fe5"},{url:"tags/music/index.html",revision:"fb1dff70fdfced1bcb769e66a553c41b"},{url:"tags/MusicBrainz/index.html",revision:"05f04ccd0f2e142bfecaf7ac1fde837d"},{url:"tags/MySql/index.html",revision:"16e8d0fb913db32ba72fca651c92eed2"},{url:"tags/MySQL/index.html",revision:"71ed37c8ab5b8785961583f37bcc8ca6"},{url:"tags/nas/index.html",revision:"928f0e18094ecb6c82bc747b4516f2e9"},{url:"tags/Nas/index.html",revision:"6231cf9937bb190d7de515ac4f5f92df"},{url:"tags/Nginx/index.html",revision:"11f468a6435e11fb47534418967aa2e3"},{url:"tags/note/index.html",revision:"a0f0ca82314240e108ad504253e1ffa9"},{url:"tags/OKR/index.html",revision:"1ab2294b523e9ce8fd62bbfcab699451"},{url:"tags/PDCA/index.html",revision:"d19191c36c46b00689bf6127bf2a47b4"},{url:"tags/PHP/index.html",revision:"5f19fa889ceb07898f076cbf17c75cb6"},{url:"tags/picgo/index.html",revision:"2383652de953feb8f4f91cc7ef5f7b40"},{url:"tags/plex/index.html",revision:"43b0bde8fa6828050122d0bcbd6e248c"},{url:"tags/Portainer/index.html",revision:"467e02c9be87880c5c9662f6c91ba9fd"},{url:"tags/proxy/index.html",revision:"0a90a4032418a722e99ce5e11ecf3429"},{url:"tags/pt/index.html",revision:"366c274e9e8652dcf28377baaccb7bbf"},{url:"tags/PT/index.html",revision:"8e71c58decd8deffe0cdf6cd0cc9a1c0"},{url:"tags/qbittorrent/index.html",revision:"ddd1d777ac6e15c9c69ed8e853568908"},{url:"tags/qnap/index.html",revision:"4f305d1d692ed4386e670060bc008765"},{url:"tags/QNAP/index.html",revision:"37d5ee20a27bf6b8f8f6b03373c10651"},{url:"tags/Rigistry/index.html",revision:"d5360bf49b34963e972ca884173b3e0f"},{url:"tags/selfhost/index.html",revision:"8806f838413cc209de520401f29cdf47"},{url:"tags/seo/index.html",revision:"f77cf8ac1431e3498dd0cbd7db87a0ca"},{url:"tags/SMART/index.html",revision:"3cd86438b45fa1c104955c34261af6f9"},{url:"tags/Sonarr/index.html",revision:"61abff7ef4a9f1abf3c770885b385a23"},{url:"tags/sound/index.html",revision:"65d2fcf9ceded863825612caeef60cd5"},{url:"tags/speaker/index.html",revision:"a56b8ea65249e6e8c9c7a23764ac777b"},{url:"tags/SSD/index.html",revision:"c737bce5ac9680aa6c388ba7bc1ec07e"},{url:"tags/ssl/index.html",revision:"5ff56f9e4869662101392c6455fb1eb7"},{url:"tags/SSL/index.html",revision:"8fce54ce725e854fde5974bd42da8faf"},{url:"tags/swarm/index.html",revision:"5a6a2c1b0c5a8b46732b418db923f948"},{url:"tags/SWOT/index.html",revision:"0525f949bbdb56435b3464e2ad6343e3"},{url:"tags/thinkpad/index.html",revision:"82506057772c43242ac235b34ded35bd"},{url:"tags/TLS/index.html",revision:"180dfad3352a92fd67bab69e3ab71839"},{url:"tags/tmm/index.html",revision:"ac8bc436dc6f1c3f50927ce8cc453a91"},{url:"tags/Tomcat/index.html",revision:"b57ef0bea62183f8227a46725b6145d8"},{url:"tags/traefik/index.html",revision:"fe17f5bcf9f55c15d1722ad5c81488ae"},{url:"tags/transmission/index.html",revision:"b46a1d32009db81aa7bd3ce0b701a440"},{url:"tags/Typora/index.html",revision:"1d46d5c6f19f1e568d20740494e61e46"},{url:"tags/ubuntu/index.html",revision:"002cde430004ace7adde9e2fa676aaf4"},{url:"tags/UNF/index.html",revision:"96fc87ba0c89b938fb1a9cfde6649aa1"},{url:"tags/vim/index.html",revision:"75deb1625315c466491aaf3900cac109"},{url:"tags/VPS/index.html",revision:"4bf0150725b8d60454df787d0888b4b8"},{url:"tags/vscode/index.html",revision:"fc0e0a0c8fab558b405a66be7a08462d"},{url:"tags/Watchtower/index.html",revision:"1d5407c9922dfb11c5377b2d1375911b"},{url:"tags/WBS/index.html",revision:"d0852b68c486a0a1efe4745fe745721a"},{url:"tags/web/index.html",revision:"749df2f4782e58e3e07abb0c3c238cbf"},{url:"tags/Webdav/index.html",revision:"9cf1581131607a570bc4fc2dbc6534ab"},{url:"tags/WIFI/index.html",revision:"b66944b419913ce0645e6adf88ec1556"},{url:"tags/wiz/index.html",revision:"d5cef88b5f1b5c87f0141868bed21735"},{url:"tags/优化/index.html",revision:"e731c82f0941d64848909f8c3dd1ab7b"},{url:"tags/刮削/index.html",revision:"7295e5a3da2d4523e73b6791fe8384e0"},{url:"tags/启动/index.html",revision:"6d18cfd0ebcb76ade941863d9a50f136"},{url:"tags/字幕/index.html",revision:"662c2887efa33555138baab461e62c1e"},{url:"tags/安全/index.html",revision:"8ef3365da05b9e447b645e2d60a2fa00"},{url:"tags/宝塔/index.html",revision:"a725759158ce3cc2960f25c29154ab89"},{url:"tags/嵌入式/index.html",revision:"fbd19088aeba43e65ed1c7e5f68417a4"},{url:"tags/建站/index.html",revision:"5019d9560f4ad9a3b0cbd330f3f13e7f"},{url:"tags/技巧/index.html",revision:"259ff53c1afb275319cede472c02dc39"},{url:"tags/插件/index.html",revision:"86fffffcc313f91f8330ae0750c7377c"},{url:"tags/教程/index.html",revision:"a15eae1b71d2d4c114982841165fb335"},{url:"tags/物联网/index.html",revision:"cac55ec69cb92e61681ec6ffddc260aa"},{url:"tags/硬盘/index.html",revision:"0298a86f4b7f724687705755a4713b73"},{url:"tags/移植/index.html",revision:"93706ff58917eac603436c2e3828b9ca"},{url:"tags/管理/index.html",revision:"7c6c64562c951fc23a72d0b1a88296b9"},{url:"tags/编码/index.html",revision:"86eaaeee9a5e490a0e330dc8785472c8"},{url:"tags/群晖/index.html",revision:"c1e560ec7f7dd27e16ac1f5628899904"},{url:"tags/隐私/index.html",revision:"5864c2614910818e4aa4e30e70a654db"},{url:"tags/韩红/index.html",revision:"5830fecf280497a0f9c5d2d4c7643c2d"},{url:"tools/2021-10-18-how-to-use-vs-code/index.html",revision:"4e38d6d2ccbacf89415d56bd942d9045"},{url:"video/2021-10-11-how-to-scrape-video-whit-tinymediamanager/index.html",revision:"3568c8b1d69d2f6baf99c9665f757e33"},{url:"vps/2021-07-31-how-to-use-baota-with-vps/index.html",revision:"99c58dc6e429e5a30f0af142f170c2c1"},{url:"web/2021-09-06-encrypted-sni-anti-censorship/index.html",revision:"32ed9a4db0c6c78552b93dce3388a46c"},{url:"web/2021-09-13-the-browser-rendering-process/index.html",revision:"04f0b64404b7b2010538a57f702b29c8"},{url:"web/2021-09-13-what-happened-when-you-click-http/index.html",revision:"5210a1e74abf8d0a9056d3c299704dfe"},{url:"web/2021-09-15-ccs-basec-knowledge/index.html",revision:"6821a9530215625d0ca25541c4621285"},{url:"web/2021-10-06-http-error-code-table/index.html",revision:"d243c0da506da3a7ab992ffd8bd9b547"},{url:"web/2021-10-14-how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04/index.html",revision:"5e950c7af60d3845b7f4c12566c3a385"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")});