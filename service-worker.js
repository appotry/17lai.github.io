if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const i=document.createElement("script");i.src=a,document.head.appendChild(i),i.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},b=(e,i)=>{Promise.all(e.map(a)).then(e=>i(1===e.length?e[0]:e))},c={require:Promise.resolve(b)};self.define=(e,r,s)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+e.slice(1)};return Promise.all(r.map(e=>{switch(e){case"exports":return i;case"module":return d;default:return a(e)}})).then(e=>{e=s(...e);return i.default||(i.default=e),i})}))}}define("./service-worker.js",["./workbox-65969207"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"893c738a5ea6653a90be7bc6fce49849"},{url:"404/index.html",revision:"b1b13de8110ac0adc52b7eabebd421eb"},{url:"about/index.html",revision:"dbffe8a1ed766b8130648d861dc0be71"},{url:"aboutme/friendlink/index.html",revision:"02850132ecd95c594ea35f770fda6554"},{url:"aboutme/mypost/index.html",revision:"64af1f96b6b1e1c7bb4c3fddce1dcb3d"},{url:"aboutme/myproject/index.html",revision:"450069bee6cfb3303238c03303518590"},{url:"aboutme/mytech/index.html",revision:"50137aa0b30af09ea16e102748b6e33e"},{url:"aboutme/needtoread/index.html",revision:"e426212d0b124a942e1326df59784b32"},{url:"ai/2021-09-14-deep-learning-of-face-recognition/index.html",revision:"75c7efb5c61964170a48c79c9857cd0a"},{url:"archives/2021/03/index.html",revision:"1a7fe289525e8b8a37c6d760a3c05e05"},{url:"archives/2021/05/index.html",revision:"6e68312c1538a4c6182ce65014e4c0fa"},{url:"archives/2021/06/index.html",revision:"6737cb2193659f97765bee6231dbad64"},{url:"archives/2021/07/index.html",revision:"cc5ccaf32d778a18e81954634e471399"},{url:"archives/2021/08/index.html",revision:"29dac7840a25f3008026494620b113f6"},{url:"archives/2021/09/index.html",revision:"e1a0b4470e1dee619d343d7eceda17de"},{url:"archives/2021/10/index.html",revision:"a809bd4f8f049135b67c76cac53857de"},{url:"archives/2021/index.html",revision:"e9baf2c0336b68d0ae36fba83086d197"},{url:"archives/index.html",revision:"27023ecf00e8453f2a0eea658dc38f50"},{url:"bb/index.html",revision:"974680b832007da8efba801500a0ce6e"},{url:"blog/2021-03-03-use-githubpages-jekyll-to-make-a-personal-blog/index.html",revision:"abd4bbcc21a574b86b67a4ca81d68021"},{url:"bt/2021-08-18-qbittorrent-parameter-reference-configuration/index.html",revision:"a59ff1b8f4e6dcd6e3edd4670e67491f"},{url:"bt/2021-08-18-transmission-parameter-reference-configuration/index.html",revision:"9528f75620915257a280460145d6550d"},{url:"categories/aboutme/index.html",revision:"d79018653576d831d03011c904fdc52e"},{url:"categories/ai/index.html",revision:"925294db7899a462f04833963bb24464"},{url:"categories/blog/index.html",revision:"973f87b9b65b6a44a18a53f0bc0b2125"},{url:"categories/bt/index.html",revision:"5c9b84d4842d20dabde7d455a3873365"},{url:"categories/docker/index.html",revision:"041b341767e0ed74b151c93a36c0f004"},{url:"categories/embeded/index.html",revision:"5f2317e153018578496c8d945b0414fd"},{url:"categories/gitbook/index.html",revision:"c3572f2ef97a19f1e53947c253f84964"},{url:"categories/gitlab/index.html",revision:"017931a28e2fd1cffea696b8052f2c07"},{url:"categories/hexo/index.html",revision:"d1fe79384aced2951e67c6d9c122edad"},{url:"categories/ide/index.html",revision:"274171e0ff6b44dd566c3c59fe8d24e8"},{url:"categories/image/index.html",revision:"09808875b082b23cef41adec0c4d4ff1"},{url:"categories/index.html",revision:"10ffdc607ce31a665db038774290f0e3"},{url:"categories/linux/index.html",revision:"2bc4aa820b98a8d952c009aa3a929b3b"},{url:"categories/music/index.html",revision:"b2b4a771ef918819da47ee758afe6f55"},{url:"categories/mysql/index.html",revision:"6785d1fffd4218323dcbb7a261dd4d04"},{url:"categories/nas/index.html",revision:"40bc50a8bb3908d92bfb4ca1f9322134"},{url:"categories/note/index.html",revision:"9c7d4a6588c9ff8158e24c11c96006f3"},{url:"categories/notebook/index.html",revision:"269e191df6c5b4ee404156f9125b3b1c"},{url:"categories/PMBOK/index.html",revision:"d628770442434ef875bdd0e7a60e3af6"},{url:"categories/qnap/index.html",revision:"716841e46e9868c6d38f102ffcdec0fb"},{url:"categories/tools/index.html",revision:"0d04cd81271166bc4388d173d35f96a7"},{url:"categories/video/index.html",revision:"a490b2249fa97a44bcd8d8ab5af50809"},{url:"categories/vps/index.html",revision:"312139b5532a1f6c4c54876a5a793044"},{url:"categories/web/index.html",revision:"3cacc334152ece32a4c9f9c1e8b924f0"},{url:"contact/index.html",revision:"e3a2ab6e602e5baa0a6386c3b160a28c"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"fc9a460a4ae3bbcb82e4ebdc097b9e60"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"768ba9e96334de4247a02fa344e7fd3a"},{url:"dash/index.html",revision:"d4cf9975db048a6c0cf40753776ac137"},{url:"docker/2021-07-09-use-jeckett-sonarr-iyuu-qt-emby-building-automatic-movie-anime-process/index.html",revision:"9ef24f2b5845cf57900acb1ca38fd47e"},{url:"docker/2021-08-01-docker-use-brief-tutorial/index.html",revision:"6f6f5c40817eca16687e62e430dd635b"},{url:"embeded/2021-07-30-3g-4g-iot-module-embedded-transplantation/index.html",revision:"67f1ec46610bdb5e78353ed7e42059c1"},{url:"embeded/2021-07-30-hisilicon-mpp-unf-architecture-source-code-level-analysis/index.html",revision:"c3735042a16b7dd93693f8c46e2a2722"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"42949cb921c42f1f30a590fc8af30735"},{url:"galleries/2020/index.html",revision:"f3440ab69bcb669f22a245de01ba64a7"},{url:"galleries/index.html",revision:"1ac5814bef5f8c0fd2bfdf6c2ba5a30d"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documentation-part2-gitlab/index.html",revision:"d198ec09b3dca69b559b3db3a6997ce3"},{url:"gitbook/2021-09-07-gitbook-gitlab-write-and-publish-technical-documents-part1-gitbook-chapter/index.html",revision:"8bfe0d4951c55ccbd3bcf07bfc1c4104"},{url:"gitlab/2021-07-09-carck-gitlabee/index.html",revision:"105b3cb62a20737a6b2e19a44228de42"},{url:"gitlab/2021-07-09-gitlab-install-and-usage/index.html",revision:"6a928620446ce933b319e01dd4d31e82"},{url:"gitlab/2021-08-02-gitlab-installation-and-use-tutorial-complete-version/index.html",revision:"c5fca953e1345a1e1f0c1e4a8973027c"},{url:"hexo/2021-09-10-use-hexo-and-matery-to-make-a-perfect-blog/index.html",revision:"7b8915d6966251ed681c8af49c702809"},{url:"ide/2021-09-15-vim-checklist/index.html",revision:"776f86c5dea2b3ebfcee33b2532f3157"},{url:"image/2021-09-14-auto-expose-theory/index.html",revision:"1947d93f3748985956a9e02475fe16c0"},{url:"index.html",revision:"15cad60c8b9b71b2523f0e959ac8020b"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"4cf7d0890238750cf9fd18878fea096f"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/prism/prism.css",revision:"dfec465c4f7bf64f5092834f7878281b"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"linux/2021-07-09-linux-pt-hard-link-tools/index.html",revision:"41652d8a2f36f250557d32bcb9281971"},{url:"linux/2021-08-18-debian-lenny-laptop-installation-records/index.html",revision:"927bfada372618cba7319b967c074d7e"},{url:"linux/2021-10-12-cmake-quick-start-tutorial/index.html",revision:"748d2eeef884d08f0a1405d656f9657a"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"music/2021-10-03-music-analysis-for-hanhong-tianliangle/index.html",revision:"3240fc83603335d0663d33539ca244af"},{url:"music/2021-10-06-private-music-service/index.html",revision:"5a176e6e8ddfc886a1a8f5f5f37c3987"},{url:"music/2021-10-11-how-to-scrape-music-idtag/index.html",revision:"ed3765e2f727322b3954d51c61c0fc28"},{url:"mysql/2021-09-06-simple-tuning-of-mysql-performance-through-the-pagoda-panel/index.html",revision:"e0b60473a8f73ba582b3d3910779a0e8"},{url:"mysql/2021-09-08-mariadb-and-mysql-command/index.html",revision:"241d7df8d183f198e82334c9bc0f3b62"},{url:"nas/2021-10-12-access-the-docker-service-in-qnap-nas-through-ipv6/index.html",revision:"af30b87dee4f84a39f76c6f559c27fff"},{url:"note/2021-07-25-how-to-make-perfect-note/index.html",revision:"0fbe78e4d64916204e76759dc563660b"},{url:"note/2021-09-09-deploy-wiznote-docker-on-nas/index.html",revision:"8b4eea08505650490f6d8e7dbb626555"},{url:"note/2021-09-09-play-with-joplin/index.html",revision:"dc8a75cc2abb01c7123b257462dae537"},{url:"note/2021-09-09-start-to-use-joplin/index.html",revision:"7e270c66dcfc05777080abd653fd71e2"},{url:"note/2021-09-09-the-joplin-plugin-and-its-markdown-syntax./index.html",revision:"bbb0b93de6c44901ea47e5a3647f7fdf"},{url:"note/2021-09-10-the-joplin-plugin-recommend/index.html",revision:"6d0d9e9fc0cd33761b2e6c6d41dfdd5d"},{url:"notebook/2021-10-05-repair-thinkpad-cracking-voice/index.html",revision:"6692e82bc5d1c531aca97004d5e8f817"},{url:"pmbok/2021-08-18-several-common-management-models-and-methods/index.html",revision:"a7000da79b3334a9cd6f4c989223b9a1"},{url:"qnap/2021-07-25-qnap-move-hard-disk-position/index.html",revision:"e022979fc766ce9b67b4bbb34753e353"},{url:"qnap/2021-08-18-io-error-correct/index.html",revision:"d3962d4c549da55538f60ba74ec7e41b"},{url:"qnap/2021-09-01-qnap-change-app-start-sequence/index.html",revision:"c2be8fd9857c6f6d0da67c19092d465c"},{url:"tags/3531a/index.html",revision:"1469bcb19bb61d96035fe67a97ae9700"},{url:"tags/3798M/index.html",revision:"42668e6656d6007203f3b5df0d635825"},{url:"tags/3a/index.html",revision:"9d27dc54992734102fb04c97412e7cee"},{url:"tags/3G/index.html",revision:"520531f4a45d84daf115245b9646bed0"},{url:"tags/4G/index.html",revision:"55890fab2a9f37bd8f80aa9d28792456"},{url:"tags/5W2H/index.html",revision:"810b6a3f64ec488a54b7e28cc0d98508"},{url:"tags/aboutme，blog/index.html",revision:"89d73939de04e0f13f9dc064b1754c59"},{url:"tags/aboutme/index.html",revision:"d635e156e5b271425b5f00e4b354d3fe"},{url:"tags/ae/index.html",revision:"98577f14eb0a2936b4eb23e41fe429b2"},{url:"tags/ai/index.html",revision:"e5446a8943b3fd867fa0103f96dac2c5"},{url:"tags/Apache/index.html",revision:"cc3306e12eea3582abf1d1a612768072"},{url:"tags/ATI/index.html",revision:"814e00b6946bde1df5a968f4f7e21ff1"},{url:"tags/blog/index.html",revision:"2de20f2e37e6f3d2aba42a0b5839fae0"},{url:"tags/bt/index.html",revision:"62cbcf7309c44608d9b364d019df186f"},{url:"tags/BT/index.html",revision:"408ed280593a5ef42b582f1bfc1127ff"},{url:"tags/ccs/index.html",revision:"ce1dceeee43757c7a9d4e42f41d8943e"},{url:"tags/cdn/index.html",revision:"7dd613dd7f5c963f9f0f593eeae6c898"},{url:"tags/cmake/index.html",revision:"71f76590577aaa4f42198c3c1330cfdd"},{url:"tags/Crack/index.html",revision:"dabf63ebcfe45dfd92a7c3c7da3313f3"},{url:"tags/css/index.html",revision:"9c7864de2fb1e1df43d77071564f7bf8"},{url:"tags/Debian/index.html",revision:"9606b2e9519d760bf37432fd096d83e9"},{url:"tags/develop/index.html",revision:"0e0abf987ae6f68707c2308a4814c8a4"},{url:"tags/DNSCrypt/index.html",revision:"de6d8f8afd33235996c9ce7268fb2beb"},{url:"tags/DNSMasq/index.html",revision:"3c6c588c84b872d86526ecd3f81302f0"},{url:"tags/docker/index.html",revision:"752e15cc495d160c870bd00ca7785dfd"},{url:"tags/Docker/index.html",revision:"ebd9af5b5c3145a386b2565430633ff8"},{url:"tags/Driver/index.html",revision:"6019429df376df6d54fad465a3eb5b0b"},{url:"tags/ED2K/index.html",revision:"2e6fb532f86b90281ac9299ef0c4b827"},{url:"tags/email/index.html",revision:"10c804108676ee5e91b5bb9b0286ba97"},{url:"tags/embeded/index.html",revision:"d3d5af15cae8453aff40b74c834fbd84"},{url:"tags/emby/index.html",revision:"1f289972ca07f9eb13f408434463a32d"},{url:"tags/Emby/index.html",revision:"283a5a6e2ba0e7df7e18689858d72e81"},{url:"tags/face/index.html",revision:"d1493f190b78a9619470bc8c6f9b93be"},{url:"tags/Git/index.html",revision:"20989a2693c0c0d673f8c28c986142f4"},{url:"tags/GitBook/index.html",revision:"34f7f58b1c826e09392b487ea1b8fbda"},{url:"tags/Github/index.html",revision:"047bacdf50c2da5039f7e3f51036aa86"},{url:"tags/Gitlab/index.html",revision:"925ed927adca10621d52606223f8a194"},{url:"tags/GROW/index.html",revision:"9503c7439b3e7e089debb7fab30b8191"},{url:"tags/hardlink/index.html",revision:"8679a7805556a68dbfb4998bea041d3b"},{url:"tags/HDD/index.html",revision:"f3ecd8ec5ea93f776b3514c4ac4a32be"},{url:"tags/hexo/index.html",revision:"23dda43d2cd56293d84f7fa2af67a51e"},{url:"tags/hisilicon/index.html",revision:"6379a3dccf27fbcfa38b58b9f8c6efca"},{url:"tags/Hotkey/index.html",revision:"1def6454a52e708deea40540e83bdc87"},{url:"tags/http/index.html",revision:"3ab1525a6151b114b31f722379811e49"},{url:"tags/https/index.html",revision:"d52af907ecae380ed16e964deb2601e9"},{url:"tags/ide/index.html",revision:"785e8b68404e33bddf5929ae119f85b4"},{url:"tags/image/index.html",revision:"427019f41948fb47de4e7bb0360dce85"},{url:"tags/index.html",revision:"7fc870ca7de7aaef379d1d08539bca1b"},{url:"tags/ipv6/index.html",revision:"52894f050c8bd235a3d452e8701b7d98"},{url:"tags/Jeckett/index.html",revision:"a95543b8e1b9077ffcaa9c30b3ddffa3"},{url:"tags/Jekyll/index.html",revision:"e7c8daa3ad8159e7c1d0b6823e311fbf"},{url:"tags/Joplin/index.html",revision:"2e43b529ee1f2af62028744edce69875"},{url:"tags/js/index.html",revision:"b2006eaac69493de401b4baf7c61562d"},{url:"tags/JSP/index.html",revision:"ee44f10863f0d93e4a7e43dfc54ef51d"},{url:"tags/Kernel/index.html",revision:"e208feb2c29a4f078e88a3bab4a1660b"},{url:"tags/LAMP/index.html",revision:"af7d662879b246d02a0e0b5bd2c81c69"},{url:"tags/Laptop/index.html",revision:"0d72bd6ab34e1e90c4a53e929f124ccc"},{url:"tags/linux/index.html",revision:"e0cd26ce89bf2e222f6eaf2980719cf6"},{url:"tags/Linux/index.html",revision:"57dd5b6b93e17bf67d4af65a9c5cb10a"},{url:"tags/Mariadb/index.html",revision:"1dc176e081c04117ba78ba7daff808d5"},{url:"tags/markdown/index.html",revision:"993566ea4c3b01387d2a74f1ef0a6e19"},{url:"tags/MarkDown/index.html",revision:"ef56026f666cf9e0c13a26778417a88a"},{url:"tags/matery/index.html",revision:"f9b37bb64429e5d351626bfef1767a11"},{url:"tags/Mermaid/index.html",revision:"9009d1c0f8b9fe02d99e11ed3426d09e"},{url:"tags/mp3tag/index.html",revision:"1aaf4beb52b565c42473e4899b0e6c68"},{url:"tags/MPP/index.html",revision:"feb8811f1040085f5f79cafeec751a15"},{url:"tags/mstream/index.html",revision:"b3cc2fc3a83dda5510e2c875b93e37af"},{url:"tags/music/index.html",revision:"f7a16f249db6fc280be7a209e903d6e3"},{url:"tags/MusicBrainz/index.html",revision:"86cc1d6a3ab2376aecc2496f1f5522ac"},{url:"tags/MySql/index.html",revision:"eb25277f212fd9e15cff504128f4bd1b"},{url:"tags/MySQL/index.html",revision:"00ee4326eacdccfe41626eac98444fbf"},{url:"tags/nas/index.html",revision:"2c552e57c65f8fb0731bb0f10b0cee2b"},{url:"tags/Nas/index.html",revision:"c95623c8926e8c35fbf88f7510216748"},{url:"tags/Nginx/index.html",revision:"c293d6a1a714e8fb1eb123fca033c178"},{url:"tags/note/index.html",revision:"c78535060d3bb7bf14498134482c8844"},{url:"tags/OKR/index.html",revision:"8f4aaa3f128184c1c49afef766223d58"},{url:"tags/PDCA/index.html",revision:"cbed41861d877e5920021f9c1e5f8ed8"},{url:"tags/PHP/index.html",revision:"89878834eeea3b1dc2fced6dfe187528"},{url:"tags/picgo/index.html",revision:"6af6826139f1cf25fe586c3e50b39b0c"},{url:"tags/plex/index.html",revision:"f6ccff355a479727a1dfa2d25c70b861"},{url:"tags/Portainer/index.html",revision:"ef4745d5dee77f3bdea4bf70c4cd2707"},{url:"tags/proxy/index.html",revision:"67e5c426f6683ed478f3340781128283"},{url:"tags/pt/index.html",revision:"63420b4b9929ef2e41b1aa49f6ba6c25"},{url:"tags/PT/index.html",revision:"6e25f847c0a89f012a193f064ff35d31"},{url:"tags/qbittorrent/index.html",revision:"e6dba84eeb6d8358b910f18b98d61d20"},{url:"tags/qnap/index.html",revision:"7bc0ba5ae3f1298426100f6d51192f1a"},{url:"tags/QNAP/index.html",revision:"e611927258c686432f291b9a53d48350"},{url:"tags/Rigistry/index.html",revision:"2e9cf1c28b0282d1328dc8816efd00d2"},{url:"tags/selfhost/index.html",revision:"1a77f80f270316a5ddda1aeb90d4c980"},{url:"tags/seo/index.html",revision:"bf0048e314fdb0149563c78b8ae28cff"},{url:"tags/SMART/index.html",revision:"335140bfebc2100bfb06f4079cae9557"},{url:"tags/Sonarr/index.html",revision:"3ef8c483a7312891afbae264e4d21a6e"},{url:"tags/sound/index.html",revision:"a724338e6458aaafb854e71b58dd96c8"},{url:"tags/speaker/index.html",revision:"34cf24823e5cacd206c5eeeae25ee8aa"},{url:"tags/SSD/index.html",revision:"c65e66cc9f25a42c1d9269b28a6faec6"},{url:"tags/ssl/index.html",revision:"de6456825aade64abb1ae0836e594410"},{url:"tags/SSL/index.html",revision:"2422175dbd2801af8798e9d553665ee7"},{url:"tags/swarm/index.html",revision:"4c33a4baec6849dae30eca613e486c87"},{url:"tags/SWOT/index.html",revision:"1c1e8566d3d283b3a0e61ce44b3b7cf4"},{url:"tags/thinkpad/index.html",revision:"24ef035dd3740fc1c2234ec159183a4f"},{url:"tags/TLS/index.html",revision:"ff13550ea0d96a0deb15774a30efd59f"},{url:"tags/tmm/index.html",revision:"a5996ab59a9fb15a6ccb6d52b5770ba1"},{url:"tags/Tomcat/index.html",revision:"99d7cf827f276f6868c949092c277c54"},{url:"tags/traefik/index.html",revision:"96240107a7f31e0fca00d1d06a9850d1"},{url:"tags/transmission/index.html",revision:"cc65a421ab7693917c30361fa2f10e81"},{url:"tags/Typora/index.html",revision:"022464727b5aa9320055cf91ec425f9c"},{url:"tags/ubuntu/index.html",revision:"005456551c4a5068b2656e78ce1ffba9"},{url:"tags/UNF/index.html",revision:"6d3be30616803acfdcb7c6b0e80f344c"},{url:"tags/vim/index.html",revision:"6247e2172216f69e0ded529921eeed0e"},{url:"tags/VPS/index.html",revision:"627ac4243f109a78266efb07cf5587a0"},{url:"tags/vscode/index.html",revision:"e7188f7e6cce0f836ddb68c67a2f1d10"},{url:"tags/Watchtower/index.html",revision:"ab8c561820eec9064dd0c9c34ded93b8"},{url:"tags/WBS/index.html",revision:"c3da52ef30471af01dcd0c250e2a076a"},{url:"tags/web/index.html",revision:"dd7ce79c9d4eb70a9752e840099d8af5"},{url:"tags/Webdav/index.html",revision:"e1b74bd41f122621e3d5cb7badff96f5"},{url:"tags/WIFI/index.html",revision:"024c23e3d07505ee84bbcfe356f85a9b"},{url:"tags/wiz/index.html",revision:"3f0db5698f15effd7aa94e084b038210"},{url:"tags/优化/index.html",revision:"9ef8d8755b3782d546088eefdabf9d49"},{url:"tags/刮削/index.html",revision:"44cdde17dad0982b6c32b6b5ea95f4e9"},{url:"tags/启动/index.html",revision:"b89fb69c34d766bb43f496c57f7f9d5b"},{url:"tags/字幕/index.html",revision:"43f14d47345994c1fd4560757aadfced"},{url:"tags/安全/index.html",revision:"2732fd87f997938b0ab7e610daf20af2"},{url:"tags/宝塔/index.html",revision:"fea330acc25fc3abe4d872e717ab9961"},{url:"tags/嵌入式/index.html",revision:"b658cc43481a263907f6471f7cfb7fa7"},{url:"tags/建站/index.html",revision:"dadfe592cb2ea003e6c4ba23551a1bf3"},{url:"tags/技巧/index.html",revision:"c17d923295f7ea302e9565c2b7733691"},{url:"tags/插件/index.html",revision:"2609b05a1a2b0c83931b217d31061c2b"},{url:"tags/教程/index.html",revision:"f60d966ddc6571ede0f17da9c16f0cbf"},{url:"tags/物联网/index.html",revision:"2ee2112b469340fda32005eaf27d7e0f"},{url:"tags/硬盘/index.html",revision:"b4d3a870f03d7da3801a9c738152d036"},{url:"tags/移植/index.html",revision:"3a490aa6de2eb7446991e2987ee1cf41"},{url:"tags/管理/index.html",revision:"0fcb434f72bcbe2a6a56cac2332be7c8"},{url:"tags/编码/index.html",revision:"4fc2085c2de5507281a93cdc2333376a"},{url:"tags/群晖/index.html",revision:"e5180ffc385aa2810fb76bfa34faebbc"},{url:"tags/隐私/index.html",revision:"9c519f08539004ca19051fefaf0438d8"},{url:"tags/韩红/index.html",revision:"c040594db90c06f0bf32d80def7e39ed"},{url:"tools/2021-10-18-how-to-use-vs-code/index.html",revision:"0c173cd8ee896f5c2dbc2684decc0ea0"},{url:"video/2021-10-11-how-to-scrape-video-whit-tinymediamanager/index.html",revision:"633a51ddc7110984010510332d7f4f46"},{url:"vps/2021-07-31-how-to-use-baota-with-vps/index.html",revision:"a28281510f309fd80075aafa80ade049"},{url:"web/2021-09-06-encrypted-sni-anti-censorship/index.html",revision:"684fa4ae23c4b1ee888c2e988710cb18"},{url:"web/2021-09-13-the-browser-rendering-process/index.html",revision:"b59ba84e1ff14270f5b05d6d3e849c3f"},{url:"web/2021-09-13-what-happened-when-you-click-http/index.html",revision:"fef67c8325a2ee7a6c5fd639160fa75f"},{url:"web/2021-09-15-ccs-basec-knowledge/index.html",revision:"fff99eac6272824ee891594b6bc7be5e"},{url:"web/2021-10-06-http-error-code-table/index.html",revision:"c91663f25234fa5336ab844801c0ca99"},{url:"web/2021-10-14-how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04/index.html",revision:"c5cf862ff7cd734d87ce14192a99632b"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")});