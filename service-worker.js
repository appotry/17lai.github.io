if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const i=document.createElement("script");i.src=a,document.head.appendChild(i),i.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},b=(e,i)=>{Promise.all(e.map(a)).then(e=>i(1===e.length?e[0]:e))},c={require:Promise.resolve(b)};self.define=(e,r,s)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+e.slice(1)};return Promise.all(r.map(e=>{switch(e){case"exports":return i;case"module":return d;default:return a(e)}})).then(e=>{e=s(...e);return i.default||(i.default=e),i})}))}}define("./service-worker.js",["./workbox-65969207"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9fe2720e004654f68ee9f47479060294"},{url:"404/index.html",revision:"b2ee048ab26b09b5400c1b03b421cff0"},{url:"about/index.html",revision:"4cdd42f43b52ae56a550cd45842c2425"},{url:"aboutme/friendlink/index.html",revision:"13eb703dce745a1005e73b129d12faee"},{url:"aboutme/mypost/index.html",revision:"ad8aa6e36d234a23e5ba18451f3dfb9b"},{url:"aboutme/myproject/index.html",revision:"662ab52b9167478212a5cea80e3475cb"},{url:"aboutme/mytech/index.html",revision:"97855f11b5d1d33f3a9ff1ed2dc6046b"},{url:"aboutme/needtoread/index.html",revision:"831511ec9423b7cec7409b8d3e152a9b"},{url:"ai/2021-09-14-deep-learning-of-face-recognition/index.html",revision:"926ee2368f4591c347facee0ed4cadda"},{url:"archives/2021/03/index.html",revision:"d280174b8c5cc76ef23700cd417aac1d"},{url:"archives/2021/05/index.html",revision:"b78e1c4a276300443f67f9dd8a9d5781"},{url:"archives/2021/06/index.html",revision:"32aaba5eeb33a4e33e5fdb6a99a69bb6"},{url:"archives/2021/07/index.html",revision:"82cb27a2863cd084f46a13aa62e9b95e"},{url:"archives/2021/08/index.html",revision:"ed5b8f64bbc18e1750adbcb1f9b330c3"},{url:"archives/2021/09/index.html",revision:"573f2842d6883cd3f051fd62662f9e49"},{url:"archives/2021/10/index.html",revision:"d3fa9d8985d4da024605dcf5f7a6c919"},{url:"archives/2021/index.html",revision:"b1c12da5d3b36a5af0e4de97a763f4c5"},{url:"archives/index.html",revision:"33f49c67ed634cca9b74e164c5c95652"},{url:"bb/index.html",revision:"f4f5b7ed029750a66a6fc5448f65d9c6"},{url:"blog/2021-03-03-use-githubpages-jekyll-to-make-a-personal-blog/index.html",revision:"a218732454b5937e1b47763edd579a81"},{url:"bt/2021-08-18-qbittorrent-parameter-reference-configuration/index.html",revision:"296b0306d16e1dc51abf090d835aa4df"},{url:"bt/2021-08-18-transmission-parameter-reference-configuration/index.html",revision:"f04856ff5b35cfd13e78b6c0b693c55d"},{url:"categories/aboutme/index.html",revision:"87f35ffd0eeb600a0a4de6b6f34b3fbd"},{url:"categories/ai/index.html",revision:"b44367e00ec916137cc97d79d6a2fe97"},{url:"categories/blog/index.html",revision:"6154256f4fb9a5fe1d1909b258c8b768"},{url:"categories/bt/index.html",revision:"b818a98f981e8bb26422b81c06ae06a0"},{url:"categories/docker/index.html",revision:"f49035e95ac521a94e4db6eeccc76e3b"},{url:"categories/embeded/index.html",revision:"4ff5eb691340e6dafdcfda810ee215bd"},{url:"categories/gitbook/index.html",revision:"bd42e530abd281e0d598262d3872f3be"},{url:"categories/gitlab/index.html",revision:"c4a998151d5ebb7675170bfd6b01f14f"},{url:"categories/hexo/index.html",revision:"8950d05315fb9d214d4cfea465c6e5a4"},{url:"categories/ide/index.html",revision:"290264bc3d5970c90056242218ed54fe"},{url:"categories/image/index.html",revision:"17f96745c9f4eb1c2757d456b24db5d6"},{url:"categories/index.html",revision:"1ab18b20490e9af83fa953d2bf38b08b"},{url:"categories/linux/index.html",revision:"66eb73ff3483c24dcf784d485b0b6842"},{url:"categories/music/index.html",revision:"6c58ce0582cc12779552837b7542d336"},{url:"categories/mysql/index.html",revision:"44ae93f03c5bb9ebdf5dbf3d53366b93"},{url:"categories/nas/index.html",revision:"1eece728adb972d2d23034f8fd39ce21"},{url:"categories/note/index.html",revision:"2603ae44649ac7ad10939d45727070df"},{url:"categories/notebook/index.html",revision:"96a3f2cdf07e1e879d16b692e0328359"},{url:"categories/PMBOK/index.html",revision:"ac782c3ddb1fd52b00e63e5268acd137"},{url:"categories/qnap/index.html",revision:"836d1045a7977a7680407189edb4ce9f"},{url:"categories/tools/index.html",revision:"04fa21e314cf9dd1d282e8ebeb51741b"},{url:"categories/video/index.html",revision:"8a8608568a37cbbdd1230160b26f7a4a"},{url:"categories/vps/index.html",revision:"cd6dec819be31cf2f8b04cd365b9b6e0"},{url:"categories/web/index.html",revision:"fb57b7ac56ce6023c7efe187839c0e02"},{url:"contact/index.html",revision:"19ec7ac584b2459fa9f9c35a68ece338"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"fc9a460a4ae3bbcb82e4ebdc097b9e60"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"2fd57a6e0d7491d1ef63cff5a1c4a87d"},{url:"dash/index.html",revision:"b0fde44015b2f77753856174c5606de8"},{url:"docker/2021-07-09-use-jeckett-sonarr-iyuu-qt-emby-building-automatic-movie-anime-process/index.html",revision:"23ba2e7dfe3f99f6baed88fb635f6c12"},{url:"docker/2021-08-01-docker-use-brief-tutorial/index.html",revision:"4084f6f72bdddf70f2ca3085988b2289"},{url:"embeded/2021-07-30-3g-4g-iot-module-embedded-transplantation/index.html",revision:"26c8a3c63bf0bd7b31955044bb75329a"},{url:"embeded/2021-07-30-hisilicon-mpp-unf-architecture-source-code-level-analysis/index.html",revision:"e5e67bd4acfe8118cb2f7706793b9152"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"8b6518f07cf684a0d971165b4292a8a0"},{url:"galleries/2020/index.html",revision:"49b8dd1415cb5eae4a32d5e6d484b818"},{url:"galleries/index.html",revision:"0bc9b72f44e6b8cabb2ddec2fcda8b17"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documentation-part2-gitlab/index.html",revision:"b2929aca9a87cfb4ca7f52429e36e246"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documents-part1-gitbook-chapter/index.html",revision:"424c114ee274752695dd1824c6649d7f"},{url:"gitlab/2021-07-09-carck-gitlabee/index.html",revision:"8c770fb8f8c50207cc80592bdaac8386"},{url:"gitlab/2021-07-09-gitlab-install-and-usage/index.html",revision:"63a5c8f358e5d4bea9bc04c69ccf15b2"},{url:"gitlab/2021-08-02-gitlab-installation-and-use-tutorial-complete-version/index.html",revision:"0159a290124a1ba1ae92baeb0ed6201d"},{url:"hexo/2021-09-10-use-hexo-and-matery-to-make-a-perfect-blog/index.html",revision:"75ed6858f211c05c37569169131fb8e8"},{url:"ide/2021-09-15-vim-checklist/index.html",revision:"781fdc182d7c1dcbeb9f470c56afa5fa"},{url:"image/2021-09-14-auto-expose-theory/index.html",revision:"c735469c6a1cda21b2029c30190c5936"},{url:"index.html",revision:"2f09bf934dda2ab4fd3995a3073e9adf"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"4cf7d0890238750cf9fd18878fea096f"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/prism/prism.css",revision:"dfec465c4f7bf64f5092834f7878281b"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"linux/2021-07-09-linux-pt-hard-link-tools/index.html",revision:"66d1ef7e061bdb2a114a2ab86ba26f90"},{url:"linux/2021-08-18-debian-lenny-laptop-installation-records/index.html",revision:"69f9e15a476ae04ff717ff5bc2b7c655"},{url:"linux/2021-10-12-cmake-quick-start-tutorial/index.html",revision:"5d3871126ded8e9711f04558b969595c"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"music/2021-10-03-music-analysis-for-hanhong-tianliangle/index.html",revision:"735d27774cb03372a1e561f4b6a5b374"},{url:"music/2021-10-06-private-music-service/index.html",revision:"c908ab9192813615d83f2ff9183ef908"},{url:"music/2021-10-11-how-to-scrape-music-idtag/index.html",revision:"2a40aac149ac5d5df3289c15cd2a7eeb"},{url:"mysql/2021-09-06-simple-tuning-of-mysql-performance-through-the-pagoda-panel/index.html",revision:"c2b4adc317049836f2bb998949c39a74"},{url:"mysql/2021-09-08-mariadb-and-mysql-command/index.html",revision:"4ce8ef0ed0f5bc732ac67fbf173d5b34"},{url:"nas/2021-10-12-access-the-docker-service-in-qnap-nas-through-ipv6/index.html",revision:"832987a0175028d6a25592e14099ee72"},{url:"note/2021-07-25-how-to-make-perfect-note/index.html",revision:"b0941d6592993945ec7c8e53ef4a710d"},{url:"note/2021-09-09-deploy-wiznote-docker-on-nas/index.html",revision:"b0cfe7edc30567a26771c80bf94fa332"},{url:"note/2021-09-09-play-with-joplin/index.html",revision:"cdb9165520821e489e92c2b771f0a13f"},{url:"note/2021-09-09-start-to-use-joplin/index.html",revision:"df00ac3bfdbd5151cec30c31f9753b10"},{url:"note/2021-09-09-the-joplin-plugin-and-its-markdown-syntax./index.html",revision:"bed05f95c0f3a26a6694a7a1c8adee28"},{url:"note/2021-09-10-the-joplin-plugin-recommend/index.html",revision:"b6ed7f2601c028c19bfeb49be66e269f"},{url:"notebook/2021-10-05-repair-thinkpad-cracking-voice/index.html",revision:"099d6b38f05c7b1282d6b226409bcacb"},{url:"pmbok/2021-08-18-several-common-management-models-and-methods/index.html",revision:"f2994e7ffd651c5054ea51acf3514425"},{url:"qnap/2021-07-25-qnap-move-hard-disk-position/index.html",revision:"074289d035ddf944320a05704491d945"},{url:"qnap/2021-08-18-io-error-correct/index.html",revision:"f00e6b767aee70c42832a04d3582f1d8"},{url:"qnap/2021-09-01-qnap-change-app-start-sequence/index.html",revision:"920fdb3dd09a27e6be8421b9ac94c207"},{url:"tags/3531a/index.html",revision:"62b850a56092d7bda3f50fe7f587b534"},{url:"tags/3798M/index.html",revision:"b741aced01693c9ce2df7ec2accc0dbd"},{url:"tags/3a/index.html",revision:"b8615da9a685109fc5302ccfddce600d"},{url:"tags/3G/index.html",revision:"75bb4c2ad1952ba3ff82ebf4aa65c4a1"},{url:"tags/4G/index.html",revision:"9d66c0a2a1fa38280af5194c5f4532f5"},{url:"tags/5W2H/index.html",revision:"0f3b0198034a3f5ff1c9c624643f7051"},{url:"tags/aboutme，blog/index.html",revision:"8e95772ba135d99dd0e565da45dfd5af"},{url:"tags/aboutme/index.html",revision:"a0612a776a5384380f1b585a9e55e0be"},{url:"tags/ae/index.html",revision:"de4a238d1ce565ba8985074fa6315233"},{url:"tags/ai/index.html",revision:"8a0ff42cc78cf3da357f149cb1f22e15"},{url:"tags/Apache/index.html",revision:"8ebef110e571539d2f58e36ff6cbd02d"},{url:"tags/ATI/index.html",revision:"52ff92ecf2d99b9fc5a3e1bbfc2680fe"},{url:"tags/blog/index.html",revision:"67731e0b29b52391c1e488be67fed027"},{url:"tags/bt/index.html",revision:"0fa424fa675f2bd22fa5be3c2960ce98"},{url:"tags/BT/index.html",revision:"7cb17c34bf93d1f60c7532c4253ab9b3"},{url:"tags/ccs/index.html",revision:"72e3d1b40353605dd3f483598d6ce340"},{url:"tags/cdn/index.html",revision:"d86c47adebe8ff2b2770609cd83e2756"},{url:"tags/cmake/index.html",revision:"414bb283af3741c8cd45aa7e40a6718d"},{url:"tags/Crack/index.html",revision:"d8d1feeb68075a2adfff025bb83ff6e1"},{url:"tags/css/index.html",revision:"ed7ddad56d8670e5f5c34a89c92184bc"},{url:"tags/Debian/index.html",revision:"214b19070f85596b90b51f9cbd8b28e9"},{url:"tags/develop/index.html",revision:"15bac24d6ebebccf3ef182996860d276"},{url:"tags/DNSCrypt/index.html",revision:"5a5e4452671b387e5537f45a593c5275"},{url:"tags/DNSMasq/index.html",revision:"e71fc12ebb5bfeb16779c3bf32ed204d"},{url:"tags/docker/index.html",revision:"044bed54af8fe23b1ee93168e67b593c"},{url:"tags/Docker/index.html",revision:"ee92b02db95a495bb2c7c9f1fd730c51"},{url:"tags/Driver/index.html",revision:"9435869c0ce265fa85b4b28a2f0f4377"},{url:"tags/ED2K/index.html",revision:"9bb484b29432a77e793ac0035062ef01"},{url:"tags/email/index.html",revision:"1631f0649d6940a2b18c2ba7792c94be"},{url:"tags/embeded/index.html",revision:"ec66947c4bf8a4d73d1e4f9f37200460"},{url:"tags/emby/index.html",revision:"05598649058a8e1e7307bac79ff7277d"},{url:"tags/Emby/index.html",revision:"6d20f8da02a066f5e3e4d79efade531b"},{url:"tags/face/index.html",revision:"f773fe40ba8e535a166004be133b3bf4"},{url:"tags/Git/index.html",revision:"ac8f20bb8be8e239caa6337b6824eb54"},{url:"tags/GitBook/index.html",revision:"80b8f2afe1fe38454dc6dffa8c93f9b4"},{url:"tags/Github/index.html",revision:"1fdf1156e47d2b3245ad3e50acc8b6ab"},{url:"tags/Gitlab/index.html",revision:"4c29feed2c0da267a19ce0f60c8deaf7"},{url:"tags/GROW/index.html",revision:"751994df792d81df64e6d2eaf5141b7a"},{url:"tags/hardlink/index.html",revision:"f3e8fbb96f695f741a9a87fdfaca1351"},{url:"tags/HDD/index.html",revision:"ee492bc482f36e1dc2a73701f08d25f2"},{url:"tags/hexo/index.html",revision:"b08be37fc9f68fd9dd807750cc0c2ed1"},{url:"tags/hisilicon/index.html",revision:"ffb5490aba56ac6bcddc69b9383f09fa"},{url:"tags/Hotkey/index.html",revision:"f3a285d650b12c31a0a9942e66d1fc5f"},{url:"tags/http/index.html",revision:"9a10d62fa05c4b62ddf302a9174311ee"},{url:"tags/https/index.html",revision:"4dc3c272a1bd2ba7322254f06861abf5"},{url:"tags/ide/index.html",revision:"a6f5ed0b679c04a2aac90fd171003428"},{url:"tags/image/index.html",revision:"3d940b1fad62aab1229f13113c36a7c7"},{url:"tags/index.html",revision:"941d80c70d9550cefb387d6788f3e284"},{url:"tags/ipv6/index.html",revision:"f882cecd5f3186807ce8fbfa0063a134"},{url:"tags/Jeckett/index.html",revision:"76840904e0f73631b7019946115b6b07"},{url:"tags/Jekyll/index.html",revision:"64dc37bec51eca75a9b2eace0ade680d"},{url:"tags/Joplin/index.html",revision:"04c9a089db60074aea5d83c2f4946209"},{url:"tags/js/index.html",revision:"82c92e2f4f180528513b2a88eb879063"},{url:"tags/JSP/index.html",revision:"8d59971ff2b242a9e3b5bcb6c63b7f5d"},{url:"tags/Kernel/index.html",revision:"82b2e37349ad8479224cc5b7fca9ec21"},{url:"tags/LAMP/index.html",revision:"de6edf702cb58307e4b3b870b770f80d"},{url:"tags/Laptop/index.html",revision:"ea59eca4e56ab9f70c7770e49c460505"},{url:"tags/linux/index.html",revision:"64e918f24392a1e7ad17f8aefd767bcb"},{url:"tags/Linux/index.html",revision:"f37df4053954e583337e2ef415bb55e5"},{url:"tags/Mariadb/index.html",revision:"5c2fead20e997f76cff8a2170b33f5b7"},{url:"tags/markdown/index.html",revision:"fae8af1854c8fe30dd776f21035e3a99"},{url:"tags/MarkDown/index.html",revision:"b3216134fe76184904965fd03430f8c7"},{url:"tags/matery/index.html",revision:"651f0af39faced1047cc7edeb0361c4b"},{url:"tags/Mermaid/index.html",revision:"4b93cef03ca51e9a60b3475953a16438"},{url:"tags/mp3tag/index.html",revision:"c12d47eb66290eb5224a622cf2f4c00e"},{url:"tags/MPP/index.html",revision:"2d3e0d2b8c6284fd6f005bceee8f0b01"},{url:"tags/mstream/index.html",revision:"fcef04ef62ca7081fe82a5001dba5ba4"},{url:"tags/music/index.html",revision:"332516bd2baecff38d5a0aadf8e70356"},{url:"tags/MusicBrainz/index.html",revision:"aa175612de973b0fcc6bb50753dcec78"},{url:"tags/MySql/index.html",revision:"29a4fd947803df807885757ff0a7c9d8"},{url:"tags/MySQL/index.html",revision:"b5f4ac49fd58c68fc8ea224aa922bda8"},{url:"tags/nas/index.html",revision:"346c9fe8e56d9303dea05fe2b4e58731"},{url:"tags/Nas/index.html",revision:"2f62dcdeb93f04456f1f1cf5f84e08f7"},{url:"tags/Nginx/index.html",revision:"8f9b0fe6cd8badc3c8bbb03e35ead603"},{url:"tags/note/index.html",revision:"caeec14a872f4bdf6268501e6a689dc8"},{url:"tags/OKR/index.html",revision:"d64de20c7de1e5d3483ff71df1099970"},{url:"tags/PDCA/index.html",revision:"cb8b87fc835766b22eb2078f09ea7ad1"},{url:"tags/PHP/index.html",revision:"811d364be4ac902120c4ed882c1fa6aa"},{url:"tags/picgo/index.html",revision:"3288f9072fb6bfcc76f2b928ffde775e"},{url:"tags/plex/index.html",revision:"c78e129f3d2ed231e5cb637e9a4368cc"},{url:"tags/Portainer/index.html",revision:"ce48505d66d86d02665b547a341cd5ad"},{url:"tags/proxy/index.html",revision:"e2ca4a047a57fb18408d699929e44d2d"},{url:"tags/pt/index.html",revision:"d37f4282ae9e85a4ef5c61fc2df59b43"},{url:"tags/PT/index.html",revision:"63c5e8b7cf0f6aaecc2335f5806a86a9"},{url:"tags/qbittorrent/index.html",revision:"f56fa1bb01a5edfc36f5cbad5a948b9e"},{url:"tags/qnap/index.html",revision:"b08852bbdf81ea2f2245a082e321abd1"},{url:"tags/QNAP/index.html",revision:"bd1c3a21b2ebea8e87f9a80b4d918c5d"},{url:"tags/Rigistry/index.html",revision:"c5aed94098d5b14172c071cb9bab9aba"},{url:"tags/selfhost/index.html",revision:"692d059f2a4153255a815f89998aff88"},{url:"tags/seo/index.html",revision:"dbe8cba21ccb84eaa2f67efbefd96bc1"},{url:"tags/SMART/index.html",revision:"9398534c5978b32e9cd3ca182893f98d"},{url:"tags/Sonarr/index.html",revision:"a65da7807e75091d0599c8327a426cf7"},{url:"tags/sound/index.html",revision:"50a29eb212337aaec279211b5d5e4402"},{url:"tags/speaker/index.html",revision:"6a41fac233a4104e69ed2a23782e579a"},{url:"tags/SSD/index.html",revision:"9b4aadf72bf4d39cdc02052afd4f6592"},{url:"tags/ssl/index.html",revision:"9f73e6e5303aa9a6ca143deb0e539152"},{url:"tags/SSL/index.html",revision:"a716490413afe5dcec16f6ed2a53f893"},{url:"tags/swarm/index.html",revision:"eab4bfc52c4842a84cbff9cc31a93b49"},{url:"tags/SWOT/index.html",revision:"a5ed9a9f9ea9bc02e547f6df0aa976cd"},{url:"tags/thinkpad/index.html",revision:"37530b899831562899a98efed49aa37f"},{url:"tags/TLS/index.html",revision:"6a830e3e17d02c7d0de98832feb50a2f"},{url:"tags/tmm/index.html",revision:"df05b303c25725cf81c3220c0040b413"},{url:"tags/Tomcat/index.html",revision:"3055c6c3fd4a8605c795566cc0d28efb"},{url:"tags/traefik/index.html",revision:"0d9d353ef7e122e92c6a2c00911015a7"},{url:"tags/transmission/index.html",revision:"1d9401a45fe6ff112d3dc01a58d36e12"},{url:"tags/Typora/index.html",revision:"291a412da26dfeb1b8219d8c12ffe5c6"},{url:"tags/ubuntu/index.html",revision:"7205c914096b062cdc3e5f2fadcf7421"},{url:"tags/UNF/index.html",revision:"09402fe34ad383ed67a577e661730573"},{url:"tags/vim/index.html",revision:"b9066e419b11bdcea60a6f6fd305a3f8"},{url:"tags/VPS/index.html",revision:"07bf77c6019e6c8b758ac9217d1782ad"},{url:"tags/vscode/index.html",revision:"44e23e13b2ccbfd822b6eb3f3dd5307d"},{url:"tags/Watchtower/index.html",revision:"3389504cbd48bfcdf2771f0fe4354cfe"},{url:"tags/WBS/index.html",revision:"4c618e2c176cbef4708484d0ad6622dd"},{url:"tags/web/index.html",revision:"fce56f011a207d7f447af2366ed73e0c"},{url:"tags/Webdav/index.html",revision:"771f1a5d937fe95aa52835fb6a6a0822"},{url:"tags/WIFI/index.html",revision:"f66b080cf7d30f2c91245539022d1ff2"},{url:"tags/wiz/index.html",revision:"8be5e5e61af5302f80c79e2835d1528c"},{url:"tags/优化/index.html",revision:"3e6396be6460305669aa59d65ce4f8ae"},{url:"tags/刮削/index.html",revision:"aba7c899fba2b1c10dc8b0ca0b38c6d0"},{url:"tags/启动/index.html",revision:"ba8bc8c756dd3dd346faf789d34e69a9"},{url:"tags/字幕/index.html",revision:"081924b4e3a335ccd0271b1cb7925acd"},{url:"tags/安全/index.html",revision:"b38c498b7ed24db1c5a891e3f5e383ff"},{url:"tags/宝塔/index.html",revision:"0a409951ce0b6051ad9fd76cd09493a1"},{url:"tags/嵌入式/index.html",revision:"7e90cf4c625c86f626f637a32b28a704"},{url:"tags/建站/index.html",revision:"53f48daafda2612731e3cd655cafbe52"},{url:"tags/技巧/index.html",revision:"2028bac532784d137ded9e6cd6e722f9"},{url:"tags/插件/index.html",revision:"ac61d296b95ae146ecbede46b5a23dab"},{url:"tags/教程/index.html",revision:"7708db5d75ee63fed531e62c5fd94831"},{url:"tags/物联网/index.html",revision:"13a8525a91030c2aa0d04a663f685534"},{url:"tags/硬盘/index.html",revision:"05dee43b88b03e67941ed16897dfd35b"},{url:"tags/移植/index.html",revision:"09ecf63837c157881263ac029711b543"},{url:"tags/管理/index.html",revision:"b0321b82fb0bfc9d465284a36a80aec6"},{url:"tags/编码/index.html",revision:"f2389879931f94e5f05315516799ccec"},{url:"tags/群晖/index.html",revision:"c889b01c29f67798b40c9f45faf24fb4"},{url:"tags/隐私/index.html",revision:"79d147642bd187e723d5426583dd1f89"},{url:"tags/韩红/index.html",revision:"291ae42740d28109ec54d1ccdf70d06f"},{url:"tools/2021-10-18-how-to-use-vs-code/index.html",revision:"6fea114ff72de7ab019f2033b7c98aa3"},{url:"video/2021-10-11-how-to-scrape-video-whit-tinymediamanager/index.html",revision:"7499564dfb86cfe801e7ef3408e9d971"},{url:"vps/2021-07-31-how-to-use-baota-with-vps/index.html",revision:"dab9341a09bf9fb94f65c54fea7b0a06"},{url:"web/2021-09-06-encrypted-sni-anti-censorship/index.html",revision:"656224ff61dff190bce1d4063665360a"},{url:"web/2021-09-13-the-browser-rendering-process/index.html",revision:"3e7936332660c44d25348ea289a4458e"},{url:"web/2021-09-13-what-happened-when-you-click-http/index.html",revision:"0e2f9f6f9ddaed305681b7db85ade4da"},{url:"web/2021-09-15-ccs-basec-knowledge/index.html",revision:"410fa8de12b926034b1ab4bdf77c1b04"},{url:"web/2021-10-06-http-error-code-table/index.html",revision:"1c0e024cc5d5de631b61ae421dc0c77b"},{url:"web/2021-10-14-how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04/index.html",revision:"d3b133dd465e44c8549292e40f40aaad"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")});