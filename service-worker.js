if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cbf7f549e093201b718e6efadb4ca411"},{url:"404/index.html",revision:"38015ebd0c8ecc612b564496e9ed27a1"},{url:"about/index.html",revision:"1f14ca0687f97d293c4b58db0cd8a169"},{url:"aboutme/friendlink/index.html",revision:"61dd3e3ad560d11e7621fae9f7aa4287"},{url:"aboutme/mypost/index.html",revision:"17073bf02a6fa1674a174592a51a98fe"},{url:"aboutme/myproject/index.html",revision:"46480f520bcd3dffb40e448678a2d081"},{url:"aboutme/mytech/index.html",revision:"ac5c8aa068b6982190deb3309e6f4627"},{url:"aboutme/needtoread/index.html",revision:"785a825a88c96e13a169c860b80c3a33"},{url:"ai/2021-09-14-deep-learning-of-face-recognition/index.html",revision:"c87ce3b82b5140be61e6a94c6393c138"},{url:"archives/2021/03/index.html",revision:"601e3225beab0fc95caeca9c78ccd17d"},{url:"archives/2021/05/index.html",revision:"d4f798b04106cc93016079fb78d17a5a"},{url:"archives/2021/06/index.html",revision:"4d9292e26d07f836ee1175f3850e1e04"},{url:"archives/2021/07/index.html",revision:"246b1d2add30b1559f5445a7c22ccd64"},{url:"archives/2021/08/index.html",revision:"b73a63aa0976b857b130349771e2c85f"},{url:"archives/2021/09/index.html",revision:"7fc3acf671e4268c62a7cf74edde70de"},{url:"archives/2021/10/index.html",revision:"dad8b43a2b54688001ad062b567c510f"},{url:"archives/2021/index.html",revision:"9f28abafc134a221152032732960937d"},{url:"archives/index.html",revision:"9b7840d553e67ca74566325ddbc2cce0"},{url:"bb/index.html",revision:"b0cad05e66a1c43bc8d0c9f7bc5a64a3"},{url:"blog/2021-03-03-use-githubpages-jekyll-to-make-a-personal-blog/index.html",revision:"ce2211ed061cc310e639177e6f5c0b7a"},{url:"bt/2021-08-18-qbittorrent-parameter-reference-configuration/index.html",revision:"0fbe07b0b1a93345601b0f0f9aa41dd4"},{url:"bt/2021-08-18-transmission-parameter-reference-configuration/index.html",revision:"06c7e4822cafe21813cee2e410300a6e"},{url:"categories/aboutme/index.html",revision:"d819fa8a99fd2965318d9d04a6f468f6"},{url:"categories/ai/index.html",revision:"a470d4787c319b6bbdd2bf1c269bb0db"},{url:"categories/blog/index.html",revision:"56c2a7bd50923d1ae2a65e6d5569a65d"},{url:"categories/bt/index.html",revision:"ab228a3d71808e5a6d3d355993e863a6"},{url:"categories/docker/index.html",revision:"390e7c79cbb4d1baa756f79fc1e4aa75"},{url:"categories/embeded/index.html",revision:"fdab0aaf8b019bbabfeedd67204fad32"},{url:"categories/gitbook/index.html",revision:"25628d7c1f2ff5578309a421fb54ec5f"},{url:"categories/gitlab/index.html",revision:"85ce77e94ca894306d1e89af1afa0aec"},{url:"categories/hexo/index.html",revision:"4d8a62657f344857e7eb49ea19a2a62b"},{url:"categories/ide/index.html",revision:"92843309093b839bc1f6def02472b2da"},{url:"categories/image/index.html",revision:"4e310f66674d20324cbdd8aee6b67045"},{url:"categories/index.html",revision:"ca651d3718a284ede60504926f495a35"},{url:"categories/linux/index.html",revision:"93e32ca7e5ec4be394cca470c1cea2cf"},{url:"categories/music/index.html",revision:"fad7a7bbe664629ebf6156ed8cb3ac43"},{url:"categories/mysql/index.html",revision:"6017db713fdc5774ffd5e033f0f5526c"},{url:"categories/nas/index.html",revision:"a84494cc23231163de42674fe603430a"},{url:"categories/note/index.html",revision:"56d62c9e6d8cc43ae65844e9658f2149"},{url:"categories/notebook/index.html",revision:"32c2ab1048b8c55b7d7bbfe802d90f81"},{url:"categories/PMBOK/index.html",revision:"bcb0996e517eefb7b0508cde8e84be8f"},{url:"categories/qnap/index.html",revision:"e9c11935b5dd9057f58bc2508e5d1441"},{url:"categories/video/index.html",revision:"5c0ab78afb902f5996710a28fc37d0fd"},{url:"categories/vps/index.html",revision:"d3297aadff70356ca1cf55e93fb6d44f"},{url:"categories/web/index.html",revision:"4c2e046935c5515d56bdff320d08d75f"},{url:"contact/index.html",revision:"63238634009c43c07a36807b2307cc2c"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"fc9a460a4ae3bbcb82e4ebdc097b9e60"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"baa559f5471a9d78d867a91c60c69aec"},{url:"dash/index.html",revision:"8439d8ae80cb50e44aeccf39237b99f0"},{url:"docker/2021-07-09-use-jeckett-sonarr-iyuu-qt-emby-building-automatic-movie-anime-process/index.html",revision:"798250467fc019095bfdf7db5a05f6e9"},{url:"docker/2021-08-01-docker-use-brief-tutorial/index.html",revision:"8906e73549ea6041ab3d9ea7c78d7e46"},{url:"embeded/2021-07-30-3g-4g-iot-module-embedded-transplantation/index.html",revision:"8f05f6ab81e3409498c2eb832e77bae5"},{url:"embeded/2021-07-30-hisilicon-mpp-unf-architecture-source-code-level-analysis/index.html",revision:"f4e570988d9d9eadcbd1a732a06e21bc"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"c53fb01dc7599538ca7c6cf5731e7492"},{url:"galleries/2020/index.html",revision:"84b9d23e04ec8580fe71f3381cfb7363"},{url:"galleries/index.html",revision:"8e07e23792e26ef5407a3d597c18b991"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documentation-part2-gitlab/index.html",revision:"2f7ce393bd4ac2479c95242b36939bd9"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documents-part1-gitbook-chapter/index.html",revision:"681f9bfadba0d3d765735d869743643d"},{url:"gitlab/2021-07-09-carck-gitlabee/index.html",revision:"21ce95b90ca03658d92cd8558c56459b"},{url:"gitlab/2021-07-09-gitlab-install-and-usage/index.html",revision:"87ecf6b89ae430498c1ff81eb0791040"},{url:"gitlab/2021-08-02-gitlab-installation-and-use-tutorial-complete-version/index.html",revision:"6390e7bbb5ca2da6d6d3a0de2b0759d5"},{url:"hexo/2021-09-10-use-hexo-and-matery-to-make-a-perfect-blog/index.html",revision:"af1cf832c328aa3ab126010795c26fe5"},{url:"ide/2021-09-15-vim-checklist/index.html",revision:"80e5ac9294c25117aad5ac39bab7ecbc"},{url:"image/2021-09-14-auto-expose-theory/index.html",revision:"d1be2cc0e901cddef5beadede33f8ec0"},{url:"index.html",revision:"be2683599734bbf5cfb7de067b6c6d69"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"4cf7d0890238750cf9fd18878fea096f"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/prism/prism.css",revision:"dfec465c4f7bf64f5092834f7878281b"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"linux/2021-07-09-linux-pt-hard-link-tools/index.html",revision:"d2afa1f7dce30e369a620cf6f4babc0c"},{url:"linux/2021-08-18-debian-lenny-laptop-installation-records/index.html",revision:"b3871ee610522e9ee52fff343db7f739"},{url:"linux/2021-10-12-cmake-quick-start-tutorial/index.html",revision:"a63b4f228b2af0ff1ade03085ad5b038"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"music/2021-10-03-music-analysis-for-hanhong-tianliangle/index.html",revision:"949474037b369e6c5e5566bc3c10eb02"},{url:"music/2021-10-06-private-music-service/index.html",revision:"90b5a8b836af3295c6a69631c2175423"},{url:"music/2021-10-11-how-to-scrape-music-idtag/index.html",revision:"b8aa9acb37c38f5bee36946a0d0f5501"},{url:"mysql/2021-09-06-simple-tuning-of-mysql-performance-through-the-pagoda-panel/index.html",revision:"693ca7bc702bc413ade50b3a6868a52b"},{url:"mysql/2021-09-08-mariadb-and-mysql-command/index.html",revision:"2cbeda3e975a662d0fdd954e08d2d1a3"},{url:"nas/2021-10-12-access-the-docker-service-in-qnap-nas-through-ipv6/index.html",revision:"bcd31a89e46a27cdce32b09261279416"},{url:"note/2021-07-25-how-to-make-perfect-note/index.html",revision:"575f800c1a41027f9d7def1b7a72a76c"},{url:"note/2021-09-09-deploy-wiznote-docker-on-nas/index.html",revision:"a1a7b4d7f9ff24b07d56a7ea5e985a89"},{url:"note/2021-09-09-play-with-joplin/index.html",revision:"2f822f6a6daaf942cddec7158b92153b"},{url:"note/2021-09-09-start-to-use-joplin/index.html",revision:"27430ea3cdb5e490e4a49f836172b14f"},{url:"note/2021-09-09-the-joplin-plugin-and-its-markdown-syntax./index.html",revision:"a31e732db093c6d91491511d0fb4e8b2"},{url:"note/2021-09-10-the-joplin-plugin-recommend/index.html",revision:"e900180b5e1d419e61e740e8b29067e9"},{url:"notebook/2021-10-05-repair-thinkpad-cracking-voice/index.html",revision:"335302fdd573638d63218a523554d22e"},{url:"pmbok/2021-08-18-several-common-management-models-and-methods/index.html",revision:"e17c56d72438d84cb2506dc688f5f7c6"},{url:"qnap/2021-07-25-qnap-move-hard-disk-position/index.html",revision:"7a9f87b76dddf8c0252e9bba52a9ed6e"},{url:"qnap/2021-08-18-io-error-correct/index.html",revision:"190b147ed77e303cd3f5277ef502ff5d"},{url:"qnap/2021-09-01-qnap-change-app-start-sequence/index.html",revision:"371da4522bb4bcde7e1d610bc1f9fb6f"},{url:"tags/3531a/index.html",revision:"3d9ad0486c8c9362b3b5bc4924c72af9"},{url:"tags/3798M/index.html",revision:"543a6eb346a033eee429641cc908bbc6"},{url:"tags/3a/index.html",revision:"3db1e28437b88985941977eb598484f7"},{url:"tags/3G/index.html",revision:"ad780f3f3ac94aec1c42836e9b8c226a"},{url:"tags/4G/index.html",revision:"1b97388d20311f623e973e8b02c2232f"},{url:"tags/5W2H/index.html",revision:"1ad5d8d81ba1fa5a7403f9e94f2b98fa"},{url:"tags/aboutme，blog/index.html",revision:"eb8dd266d3892a8aaa8545b735582d1f"},{url:"tags/aboutme/index.html",revision:"59bb6805cb2d901a7528c88c73a45bf7"},{url:"tags/ae/index.html",revision:"119093a3dc97b92512f4e1fb9407cc5b"},{url:"tags/ai/index.html",revision:"7c8d20dfa2ae4b8f6ee2d6b7adca51c6"},{url:"tags/Apache/index.html",revision:"9ab5369735bfc42940d8b68122ab7748"},{url:"tags/ATI/index.html",revision:"3dbe1cd0081416bb905586e8e56aa168"},{url:"tags/blog/index.html",revision:"faaab78f959d334c157ea76016221ec9"},{url:"tags/bt/index.html",revision:"c47c3d16f28cdc83ea120bc2c39bc295"},{url:"tags/BT/index.html",revision:"d13b3c79e89ca67b2fd80719244b787a"},{url:"tags/ccs/index.html",revision:"afaded1d2b98b954d9fdc85bedf0961c"},{url:"tags/cdn/index.html",revision:"e227431b40fa785617af512943ad6da7"},{url:"tags/cmake/index.html",revision:"3220e2ce35ba96636b91cd66a9a26554"},{url:"tags/Crack/index.html",revision:"c525eed3988f03e1e6651fd22def6b36"},{url:"tags/css/index.html",revision:"971525da4d3d9fbdf200031161ecd475"},{url:"tags/Debian/index.html",revision:"0f053402d58988c4175d13ed90e84b07"},{url:"tags/develop/index.html",revision:"c83ef4c585d720b18710ccc4c30924f4"},{url:"tags/DNSCrypt/index.html",revision:"2d5ef7d854dd248ec1f5a0c2513147fc"},{url:"tags/DNSMasq/index.html",revision:"d1433c80dee284e75b17217fd7cdb8cd"},{url:"tags/docker/index.html",revision:"1c2139195e87c4f7403c730a85a20680"},{url:"tags/Docker/index.html",revision:"fa6d97d7d91d054df08b3b13a31f61e3"},{url:"tags/Driver/index.html",revision:"f084e7d79235173d8c387a8873e6a35b"},{url:"tags/ED2K/index.html",revision:"4a263385b6b123733d48f7e70d3e0d91"},{url:"tags/email/index.html",revision:"0169f2d17d4c82c5505cecbd75c85eab"},{url:"tags/embeded/index.html",revision:"9218ccf13cfa82c6a551740a838b524d"},{url:"tags/emby/index.html",revision:"49c1a2246031af54bc81501445b7c460"},{url:"tags/Emby/index.html",revision:"0f3c173d578b33021f707d1483649cf9"},{url:"tags/face/index.html",revision:"5e860df01743c2a1b04b23e4b1cd1cb7"},{url:"tags/Git/index.html",revision:"6f77be41cf53106c73f3ba81a7be3b86"},{url:"tags/GitBook/index.html",revision:"2240fc07eea3ebd9e2a0801af26bf33e"},{url:"tags/Github/index.html",revision:"3543300f9dfcda2dadbca0ed8912e9c2"},{url:"tags/Gitlab/index.html",revision:"c6b5ac7c3b249317d4e576a2fe90cc72"},{url:"tags/GROW/index.html",revision:"d210b9096540d7d4822ca89fde4c729c"},{url:"tags/hardlink/index.html",revision:"2dd37d64eb5d194266c2201f2380ebf8"},{url:"tags/HDD/index.html",revision:"f9c851221f0f6cead632fe687678ba68"},{url:"tags/hexo/index.html",revision:"0c586c857927bbee96dd23c18c088fe5"},{url:"tags/hisilicon/index.html",revision:"a43503990cfad1557c7baf25a45dddde"},{url:"tags/Hotkey/index.html",revision:"e49c47873f1066750e088f62fcdfced4"},{url:"tags/http/index.html",revision:"b1cfd67df47165419d4601e97173d969"},{url:"tags/https/index.html",revision:"9b9bfa0f5244e1207566c12202a58e90"},{url:"tags/ide/index.html",revision:"f617e02f852ca9a3ea9200a8e1308392"},{url:"tags/image/index.html",revision:"4e54901b9d7d91e649e9dd329b266ddb"},{url:"tags/index.html",revision:"23dfc4619debc7e3e4e5d111c36b5f8d"},{url:"tags/ipv6/index.html",revision:"8f7dbb9d3a2f66ed3cd887a3c8334ada"},{url:"tags/Jeckett/index.html",revision:"2d80d9e2b2ede02585732cbdd80c4b76"},{url:"tags/Jekyll/index.html",revision:"61415140f671aac5789078f40a93a179"},{url:"tags/Joplin/index.html",revision:"890cd2381f265cda87152dffbb3a1dfc"},{url:"tags/js/index.html",revision:"346691775a5d78c5724f9e37d44449e1"},{url:"tags/JSP/index.html",revision:"3022b8fd7133da7e5e032e7ce4c76b4b"},{url:"tags/Kernel/index.html",revision:"4b896b43c51f5e744d6d016d4cd9b69b"},{url:"tags/LAMP/index.html",revision:"e36fa1f0ee088be06e889a0ec7a45669"},{url:"tags/Laptop/index.html",revision:"59e8dec596fe3d4636280ffe3b5f9ae6"},{url:"tags/linux/index.html",revision:"4742a9d47a82afb9200f1f12f41c3794"},{url:"tags/Linux/index.html",revision:"0148d0830ef30f0cec9594e15d2a2a12"},{url:"tags/Mariadb/index.html",revision:"9b47d293d4f11f8a7da53f4a3c4cfeec"},{url:"tags/markdown/index.html",revision:"34cfb63ea9fb1db33a479cd266ce94f9"},{url:"tags/MarkDown/index.html",revision:"6b560b80cf6df69011384e1c13dcf284"},{url:"tags/matery/index.html",revision:"1ebfe3021edf06980aab3c2e79668e12"},{url:"tags/Mermaid/index.html",revision:"4be6bf79f4deb1353a913162c82283e5"},{url:"tags/mp3tag/index.html",revision:"693bd7fba14ea299c1766b130e69d369"},{url:"tags/MPP/index.html",revision:"362d0d30a254de6e9a82424e4d1b472a"},{url:"tags/mstream/index.html",revision:"ddbda7f217124dbaa0360094377c62fb"},{url:"tags/music/index.html",revision:"d77d3abc2e4e88e9064d996144dae5aa"},{url:"tags/MusicBrainz/index.html",revision:"0bafccd9914ad5fb4a3455cc21163119"},{url:"tags/MySql/index.html",revision:"d44ca0b4a7451ebfa268f08c93afcd36"},{url:"tags/MySQL/index.html",revision:"01305a5ecbdcc073236e04a09b4437c1"},{url:"tags/nas/index.html",revision:"bf60bce527b3c8f384355bfdc44900e9"},{url:"tags/Nas/index.html",revision:"1640852e03ab56a7613be85c80b3e744"},{url:"tags/Nginx/index.html",revision:"acdc706d29fe5f9d713be9ab0a2b9988"},{url:"tags/note/index.html",revision:"4d8e679f811170a24e940fd5c5a9f1b1"},{url:"tags/OKR/index.html",revision:"04002dba785f79625bb008e1bb801921"},{url:"tags/PDCA/index.html",revision:"788938b550f60fc6f865a682fc1354b3"},{url:"tags/PHP/index.html",revision:"10ba9f6ff081206c833d243ce3dae181"},{url:"tags/picgo/index.html",revision:"7991cc7e8ae7ec97935849e5945f68c1"},{url:"tags/plex/index.html",revision:"2f569176bc671f4ee89e312431e1d9a3"},{url:"tags/Portainer/index.html",revision:"0b8a84005083a6d91761dc3db9074151"},{url:"tags/proxy/index.html",revision:"97d609a1c34d989898c79b850ce6f50c"},{url:"tags/pt/index.html",revision:"bddac2130de1168b5a9ccb6e7059f690"},{url:"tags/PT/index.html",revision:"a4d0088c05e3e149b7f38fc4d258da3e"},{url:"tags/qbittorrent/index.html",revision:"d4442ab89fff07d7de32bca0e5d4cc3b"},{url:"tags/qnap/index.html",revision:"6d8dd50ffc71ae80deeb5c3edda14302"},{url:"tags/QNAP/index.html",revision:"665cc2bb67f688bfa3b67312ec98f813"},{url:"tags/Rigistry/index.html",revision:"c6369f21d37270bbb6abd32c9c0bfb62"},{url:"tags/selfhost/index.html",revision:"53782b987b69bae5b9a8b31150ddd619"},{url:"tags/seo/index.html",revision:"4f1e5a380faafce01d75154861fc0a96"},{url:"tags/SMART/index.html",revision:"ec63bd585053699747d00ae912cc6de6"},{url:"tags/Sonarr/index.html",revision:"f4c9dca12a637afb6a3b4b879faf3929"},{url:"tags/sound/index.html",revision:"7d2f0730263009ec4b1337adb331447c"},{url:"tags/speaker/index.html",revision:"4784a8409b3b0be742b2b9c2bd769922"},{url:"tags/SSD/index.html",revision:"5d5a5e54b5df3400a21be4ebfaaaba2d"},{url:"tags/ssl/index.html",revision:"a0eb4661a8557157ce729a4f31a2275e"},{url:"tags/SSL/index.html",revision:"67a381d5a97b447415ef0d4c26d8c209"},{url:"tags/swarm/index.html",revision:"cbeddb9d2089f1ab357a34aa134a2b6e"},{url:"tags/SWOT/index.html",revision:"616e5028982027ab64d5e9d8dc2e7b67"},{url:"tags/thinkpad/index.html",revision:"cccf097cd33ca02fa56940a4f75907fc"},{url:"tags/TLS/index.html",revision:"188dd4eae481eabb4ea525d88d5941a9"},{url:"tags/tmm/index.html",revision:"09ff531352e9ac5d5c903ba53b827f07"},{url:"tags/Tomcat/index.html",revision:"5103d59e8ab85e7d742edd440d9ef288"},{url:"tags/traefik/index.html",revision:"b87e8fbcf10b297ed032792b930ef5cb"},{url:"tags/transmission/index.html",revision:"83b3c023c8a9a5e759e21ab301f95b7b"},{url:"tags/Typora/index.html",revision:"d3648e03e07d297ac6417b43ae597b84"},{url:"tags/ubuntu/index.html",revision:"38378f8c541b570f2e5713c7d7d244a2"},{url:"tags/UNF/index.html",revision:"77459938d89e9ed9dd74441e2546282f"},{url:"tags/vim/index.html",revision:"8f19f89bf0ec685fab971ba61157b3ac"},{url:"tags/VPS/index.html",revision:"e54edfe51e06c11d87be757b08210ab9"},{url:"tags/Watchtower/index.html",revision:"46a55050f5dce45ebb8e3a0d5870f016"},{url:"tags/WBS/index.html",revision:"452da00d9ef5ae5fbb3a97975c958049"},{url:"tags/web/index.html",revision:"2aab7becbb99ae5142ec8a86bc546218"},{url:"tags/Webdav/index.html",revision:"8b0251436f5f9ae6173bd15176378755"},{url:"tags/WIFI/index.html",revision:"6dcccb90ee23fa6141d0ce6658492707"},{url:"tags/wiz/index.html",revision:"e33c8edd22c9a8cf6d32e13df1c82eac"},{url:"tags/优化/index.html",revision:"9dbec36827af25bcf7db80d55b78b8dd"},{url:"tags/刮削/index.html",revision:"974fff941726091548185373e6fbd9ce"},{url:"tags/启动/index.html",revision:"ecb21c27f4f1b462e37cfc496102405c"},{url:"tags/字幕/index.html",revision:"02062210b8428da796db8fd2782ad92c"},{url:"tags/安全/index.html",revision:"d6b995002875e3f951ccd5e84f6de74a"},{url:"tags/宝塔/index.html",revision:"4d886729907318ec5b0fdde7dd859429"},{url:"tags/嵌入式/index.html",revision:"a8ddcc25ad666b610037017cc218c1e4"},{url:"tags/建站/index.html",revision:"8fbf0ffbc8e568d6c696078ca6954e88"},{url:"tags/技巧/index.html",revision:"dba5e053a9190948833d0a4e6e595ecb"},{url:"tags/教程/index.html",revision:"f52795d723c22d2970cf15b03820afe3"},{url:"tags/物联网/index.html",revision:"faddc04e88f8086d0db3d1f8e451fee4"},{url:"tags/硬盘/index.html",revision:"2cd9a00fdb1fa993ed110427d8d6db80"},{url:"tags/移植/index.html",revision:"b962ce7561f75438e2dfd1e8b632a488"},{url:"tags/管理/index.html",revision:"f14038698cbe7455efd58fc65b46c94f"},{url:"tags/群晖/index.html",revision:"7c896c240254fd7e0d097fc6c3e9f944"},{url:"tags/隐私/index.html",revision:"06131d32e0bd79e7c79ae5279c155af0"},{url:"tags/韩红/index.html",revision:"baf7992e81ba420f89d5f8e61cd488f3"},{url:"video/2021-10-11-how-to-scrape-video-whit-tinymediamanager/index.html",revision:"4c64391e852d73ddfb63e2a975cce841"},{url:"vps/2021-07-31-how-to-use-baota-with-vps/index.html",revision:"41d8cebdf30f677cc88a26b8919a2be6"},{url:"web/2021-09-06-encrypted-sni-anti-censorship/index.html",revision:"23e0b406f013f9accf1d27b208278ceb"},{url:"web/2021-09-13-the-browser-rendering-process/index.html",revision:"3d0f1aa96a0d90a803f80024eb1a61ae"},{url:"web/2021-09-13-what-happened-when-you-click-http/index.html",revision:"59231abde2ea404c7a15ad9a7c63fe6a"},{url:"web/2021-09-15-ccs-basec-knowledge/index.html",revision:"5c2d7d59766205fc6e2e310dfa082122"},{url:"web/2021-10-06-http-error-code-table/index.html",revision:"cfb8fc67f2a0e113565835a184a8efd4"},{url:"web/2021-10-14-how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04/index.html",revision:"c35aaf01c4b5863083c216cb8e4e6b7b"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
