if(!self.define){let f,b={};const c=(i,e)=>(i=new URL(i+".js",e).href,b[i]||new Promise(e=>{if("document"in self){const f=document.createElement("script");f.src=i,f.onload=e,document.head.appendChild(f)}else f=i,importScripts(i),e()}).then(()=>{var e=b[i];if(e)return e;throw new Error(`Module ${i} didn’t register its module`)}));self.define=(e,a)=>{const d=f||("document"in self?document.currentScript.src:"")||location.href;if(!b[d]){let i={};const s=e=>c(e,d),r={module:{uri:d},exports:i,require:s};b[d]=Promise.all(e.map(e=>r[e]||s(e))).then(e=>(a(...e),i))}}}define(["./workbox-181670da"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"822d6065705dc03b92a1f4b425cadc2c"},{url:"404/index.html",revision:"f0b9001c533a680a2c9df9d44ac128ab"},{url:"about/index.html",revision:"47ad12d5ec387d2042b3209d12c56092"},{url:"archives/2021/03/index.html",revision:"6c06f9c9e9cc748f02906c1ac9feeb1a"},{url:"archives/2021/05/index.html",revision:"920e709dcdd27f4de676f73cd9c0db99"},{url:"archives/2021/07/index.html",revision:"1da71ca8c07dc8088c34fc1df101b19a"},{url:"archives/2021/08/index.html",revision:"f37dbc8df9b0aa0c269720fba62f9aee"},{url:"archives/2021/09/index.html",revision:"89f11618c5a8369a82ac3fbfc352aa87"},{url:"archives/2021/10/index.html",revision:"b37e459d436af54c18655b26ab548a18"},{url:"archives/2021/11/index.html",revision:"a2fc679081e0d38eb53dbf5eeb377bad"},{url:"archives/2021/index.html",revision:"98fe98cb8b29a709af1f1d78be404ace"},{url:"archives/2022/03/index.html",revision:"d7c96c215973f6d076fb68af625b2b50"},{url:"archives/2022/index.html",revision:"99d107c597cf6443e2349e019823817c"},{url:"archives/index.html",revision:"59fcbdc6b0de2b04e8943ff7ce9c38c2"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"bb/index.html",revision:"6fada0cfb19676a8a218fbd07ad3d28b"},{url:"categories/ai/index.html",revision:"ebec545db1fa3a182727861bf47b0f6c"},{url:"categories/blog/index.html",revision:"d1e92b2fb04aee5e01bbc2ae41eaf379"},{url:"categories/bt/index.html",revision:"0b83355b4733b93ec9d4ba7a5c5d7996"},{url:"categories/docker/index.html",revision:"da4d6c55fc4715c2463ec31e873501b3"},{url:"categories/Docker/index.html",revision:"46738aa6f3d5b57e8a70320b3fb80500"},{url:"categories/embeded/index.html",revision:"f397f04ba2391814a4d6bd242bbf605a"},{url:"categories/gitbook/index.html",revision:"4a89fcba3593a30938387415f3186f4e"},{url:"categories/gitlab/index.html",revision:"20e5593fe5525a6d5e48f81f544ecdd9"},{url:"categories/Gitlab/index.html",revision:"c5c69f33a19281ba4303bd7bd3d33518"},{url:"categories/hexo/index.html",revision:"4abbbaab4ad8668ba8b62a85469bb788"},{url:"categories/ide/index.html",revision:"f4abba0acdaff6f9b3ae1d945a8f3311"},{url:"categories/image/index.html",revision:"85acacaa638b02f02c15226be06bcc5f"},{url:"categories/index.html",revision:"fc8cc9657c5299eecc6b01b8b9b6edb3"},{url:"categories/linux/index.html",revision:"aeb21a2ae06428618811aa0c6403a898"},{url:"categories/music/index.html",revision:"1172dba6b173cfb45d0375a61050db41"},{url:"categories/mysql/index.html",revision:"ad12933626749de7140d5953238a07a1"},{url:"categories/nas/index.html",revision:"fbc22957094aa71a33f2d3c951bb936a"},{url:"categories/note/index.html",revision:"2c6d12874347bf1cd8f26e61d2290046"},{url:"categories/notebook/index.html",revision:"5a503a9fddd6a51a648d3ba2a2140f47"},{url:"categories/PMBOK/index.html",revision:"4c719e317784cc7a0f7d8417a29c7da7"},{url:"categories/qnap/index.html",revision:"77b37bdd29c68d2651dbf3003d369296"},{url:"categories/tools/index.html",revision:"f6f3b605f142f749a5d7a6548d56140d"},{url:"categories/video/index.html",revision:"196b7096a7d7c54e9ff6c5cadd090374"},{url:"categories/vps/index.html",revision:"92bc2466675d037d77f5f584f1c703cf"},{url:"categories/web/index.html",revision:"14f7c0a0a8eae0ecef87685fbf7dffb6"},{url:"contact/index.html",revision:"65daedef20d78e2d261df0fa20ed52b1"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"c8ff857949bb12472556f12372c6b075"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"4ceae04a57c0020f8e2768c7efb5f3c8"},{url:"dash/index.html",revision:"493f049333712672ee9f62e3bb1edc6c"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"friends/index.html",revision:"5e1650e08d95f4626e766384053f186c"},{url:"galleries/2020/index.html",revision:"b81da147019627f7504badbbab3f9326"},{url:"galleries/index.html",revision:"26c812c054914d6c7a87ba5a3ddf3ee3"},{url:"github-card-lib/githubcard.js",revision:"caa86aadbe330a8ee459a4ef9a1e2bcd"},{url:"index.html",revision:"dfd133cbde1c812320b086e48083430f"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"28f6c09a949de6a5f05ebb465d70174f"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/anime/anime.min.js",revision:"572d66e85091711b6ee76609573a8364"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/aplayer/Meting.min.js",revision:"c0e989e618a2c6f90f59fa1822941d75"},{url:"libs/awesome/css/all.css",revision:"fe11a3a32db7284d920063f21e7d3777"},{url:"libs/awesome/css/all.min.css",revision:"dfb8fc36e102730fddf78b5494eb0035"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"0fbfc862056bad982c93ba51460e31d9"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"35307505c129ab1f9173f7917b50756f"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"ffc89d3ea2e2c3ba295689305f91ca78"},{url:"libs/awesome/webfonts/fa-v4compatibility.ttf",revision:"4bde6a62454b669bb0ce0448491a71d7"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"472552604f19815d0a634bd3d953171e"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery-3.6.0.min.js",revision:"8fb8fee4fcc3cc86ff6c724154c49c42"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"0ecaf59cd1b7e19f2a7b34683d32068c"},{url:"libs/lightGallery/fonts/lg.svg",revision:"2ec2cb2199d4d881e6a6ad86690f6add"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"f4292655f93dd12d9b8e4fc067ef2489"},{url:"libs/lightGallery/fonts/lg.woff",revision:"1fbfd4bcffccb94e8e8a5ea70616b296"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"b4705ab663a9555d29fa69a3cf6bec0b"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid/mermaid.js",revision:"95bd3cffcfa871d159d5a58feb241caf"},{url:"libs/mermaid/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/mermaid/mermaid.min.js",revision:"cb58961821ec1396e5c283dc07331efd"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"4c9a89414b97bb2053ccc7cb83c83b6e"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/fireworks.js",revision:"c0eaadab50247cd23effcdf99d7cb0d6"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/others/TencentCaptcha.js",revision:"628af9af35fd7579c1b5f481f7a77aa0"},{url:"libs/prism/prism.css",revision:"32b98c935f97106089a2510975293524"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"e8f0173e7c5216e5359587a88a570b77"},{url:"libs/tocbot/tocbot.min.js",revision:"4d7b1dfb31f74b6d0701cf3120933597"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"1e176a89ded579da26b5060eaad8440d"},{url:"libs/valine/Valine.min.js",revision:"587587088e2bd61496c55d5e8dda16d1"},{url:"libs/waline/Waline.min.js",revision:"ed6cbbe9d1e40233030635398ed386aa"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/hongmiaosi.gif",revision:"99a51a49a97311f2a5ed32a20de56356"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"medias/simiao.gif",revision:"edbef3c618959fe5db26dffc83690bc6"},{url:"movies/index.html",revision:"8e9598afdd14046220b41f03524efe3f"},{url:"musics/index.html",revision:"ca3d717e8086afded1ad0e2d2676c71f"},{url:"myPost/index.html",revision:"55803553e96fcf00cfa782f18d481d4e"},{url:"myProject/index.html",revision:"adfcd9ae9612b862473e3fa066bc82d4"},{url:"myTeck/index.html",revision:"8d906b523a4da430d65ee3128f9aa1d0"},{url:"needtoread/index.html",revision:"3851bda338ffae887f664da8a9850633"},{url:"posts/10fee780/index.html",revision:"e405bc5ebb718da1aefc6fb6066b4030"},{url:"posts/13894dce/index.html",revision:"8fb6477254b51f9a0a5630737cf5e799"},{url:"posts/1802a8a7/index.html",revision:"d21823af0bd345741a01c048a7c13c31"},{url:"posts/1879721e/index.html",revision:"b09c8a45cad0e56f2fb5362bf0891664"},{url:"posts/1991789c/index.html",revision:"b100cd29391251b9f6924bc01889c5b9"},{url:"posts/29a820b3/index.html",revision:"0c33782f9e8f2bb0d723a21e2b0f9712"},{url:"posts/2b9325d0/index.html",revision:"c573e976a36de59d7224be8fbc55fd0f"},{url:"posts/3847ad58/index.html",revision:"eb83d90016619ce5c9d9701a5b4b1609"},{url:"posts/3b296307/index.html",revision:"3240b76aa6d1027fc356295724d0d138"},{url:"posts/40300608/index.html",revision:"5eb45e0b7acae49b35bf67a3e527095f"},{url:"posts/42b6a86d/index.html",revision:"a0dd25f5cb9905dc8502fb1cd27ce199"},{url:"posts/44557ab0/index.html",revision:"2cef1f83b0a63bc3fdfc6d09c24bd743"},{url:"posts/448f849b/index.html",revision:"1ad05f987757919f664f9845e9a8bd37"},{url:"posts/45f878cd/index.html",revision:"3e64d53c2f8edc88e0bb9dd6443b34f4"},{url:"posts/462f1e5c/index.html",revision:"ee67aeaa13a00fce50d770a65a05bb9c"},{url:"posts/465d2738/index.html",revision:"657680c2766d89dad010a5fc7571ce36"},{url:"posts/495db4d3/index.html",revision:"fe8913f347b147f4fa9c3a62945a17e2"},{url:"posts/509c7bd3/index.html",revision:"0016b824e0fef4e53b6b0db7348bb5b0"},{url:"posts/593cc323/index.html",revision:"5ec14fce4f0d0cc21e25ebc39c1c2a9d"},{url:"posts/5b1993ac/index.html",revision:"ddc6887429a55fc5df02440ec4438b5f"},{url:"posts/647e6265/index.html",revision:"1e9e860d1ba5f8bcc2bc1416caf2cac5"},{url:"posts/656a0abb/index.html",revision:"b4f49c2f0ff26ea6610867146436a755"},{url:"posts/68d3867d/index.html",revision:"733dce7a1832af43b985f4f88e03a4f3"},{url:"posts/69a052c9/index.html",revision:"a83d4f4c6a4f3933dd442e639cb7a41e"},{url:"posts/6b2ba137/index.html",revision:"345deabf307258ca3f9445c46abc430a"},{url:"posts/7790e989/index.html",revision:"341ae8d34f0f91e5a9f3388aceb6852c"},{url:"posts/77da2f80/index.html",revision:"cf0c4e292b711300bb0abe06978c8ad9"},{url:"posts/7b4e434c/index.html",revision:"f87af64ae42862b87106604abd750bdd"},{url:"posts/7fe86002/index.html",revision:"991c24c3dd9c84e7433d322b76a14da4"},{url:"posts/80906b88/index.html",revision:"73d4768aa607bfb45d27362a6e2d3852"},{url:"posts/8b7d3a9a/index.html",revision:"ece63f5dc4adf37d95e23475399d5265"},{url:"posts/8f76d9dd/index.html",revision:"4d195003787b55225404155fbc17b82e"},{url:"posts/90e60aac/index.html",revision:"bf06af36ea227d60f947e4fa985978e6"},{url:"posts/92d347d6/index.html",revision:"9f7d0b6fa5d6f62672d6b5600b98077a"},{url:"posts/9912bd5d/index.html",revision:"63641055924894c8183137f51dea4fe7"},{url:"posts/a0f3c838/index.html",revision:"608c592a3d5bca5d294f84d657ab42f2"},{url:"posts/a8535f26/index.html",revision:"8384e044b442dbf73ad649de5b68fcb1"},{url:"posts/acc13b70/index.html",revision:"2ae0a730f54e251c1cb70135b4f5bef4"},{url:"posts/b1fe1bb8/index.html",revision:"282f3ee91471cea0513222ba5d1a0d57"},{url:"posts/bb600b4b/index.html",revision:"2aeb1efcb22b846a69531634303ae0a6"},{url:"posts/c945eae1/index.html",revision:"8fcf98d0e151a98ef3b53d05113ba8d3"},{url:"posts/ca630feb/index.html",revision:"21907f42ff95589939dda963206942c8"},{url:"posts/cb623532/index.html",revision:"a342028f2152e9beb164185b6712b520"},{url:"posts/cf0f47fd/index.html",revision:"ae23a6db6abfbb0f8c596a5c91d4d5dd"},{url:"posts/d08eb7b/index.html",revision:"926fc3075d677b6788b09a78f78a2aab"},{url:"posts/d5f56dd0/index.html",revision:"fff1889f1d1e2769b95326db953d1f8b"},{url:"posts/d6bad1e5/index.html",revision:"e8d313f2c67941fc11c60d1d5d460a30"},{url:"posts/e3ee7f8b/index.html",revision:"7c3837bd0952adb56019db861709a553"},{url:"posts/e6086437/index.html",revision:"9a01c5a33e8e2e70a0e6c819e91a947d"},{url:"posts/e6d40157/index.html",revision:"580a53aafea96043a5e6dfdbb9300ece"},{url:"posts/ec2cad2/index.html",revision:"ef1b2f6e41e31a436b3dcc0728ff1de9"},{url:"posts/f0b0af52/index.html",revision:"7786ea8606c7c12e6740eec21671e57d"},{url:"posts/f6b32521/index.html",revision:"9a8ebc2703315bad420f7aac9e445903"},{url:"tags/3531a/index.html",revision:"bed0e871d1c7a37853b7952ca7215c04"},{url:"tags/3798M/index.html",revision:"9c106c573438d279d157e61b29321705"},{url:"tags/3a/index.html",revision:"acad396fb4f463c40709b2d11272f1cc"},{url:"tags/3G/index.html",revision:"c92077a5be8330ba849dc2a0f8e55616"},{url:"tags/4G/index.html",revision:"f42cbf06f55e302d235c7b585a584048"},{url:"tags/5W2H/index.html",revision:"4f8a47a0f16104ad52e35c20faceacc2"},{url:"tags/ae/index.html",revision:"0c8de273ab02e24481ea0becd3dc887d"},{url:"tags/ai/index.html",revision:"6fccd2d10ddda4c8ea9145cbcb918b2f"},{url:"tags/Apache/index.html",revision:"08617338275b2288a82a2e337b9ea718"},{url:"tags/ATI/index.html",revision:"eacaeb9b26462a1df0a8684ec843dd1a"},{url:"tags/blog/index.html",revision:"27702609ebd11631ed5086f2bed83785"},{url:"tags/bt/index.html",revision:"692a6fe76326ce9f351ddb61be5c15f2"},{url:"tags/BT/index.html",revision:"ac1ef8b51c8235f94183ab878d2ef8d2"},{url:"tags/ccs/index.html",revision:"79ab610f849200a143ed9cecd6974fd3"},{url:"tags/cdn/index.html",revision:"9f30ea5dd78fa3ac31b07b6866a4ce22"},{url:"tags/CI-CD/index.html",revision:"812ec2ae1ad4e2b6e29073145129e1c3"},{url:"tags/cmake/index.html",revision:"6650a3c823150f706d8e3c7e0e312f8b"},{url:"tags/crack/index.html",revision:"4b64ca005104ac3f8a28a0ac9a29cda7"},{url:"tags/Crack/index.html",revision:"f5f3f333551fc373e8bfd52030cd221e"},{url:"tags/css/index.html",revision:"32c5a4c379beaef7e8589f249285646d"},{url:"tags/Debian/index.html",revision:"a2cad296853535e4fa183fc12913f703"},{url:"tags/develop/index.html",revision:"a8785e7e74d43d645614e2b997229f41"},{url:"tags/DNSCrypt/index.html",revision:"2b78b0784c754cce60ff3391735211b0"},{url:"tags/DNSMasq/index.html",revision:"448247bec3964c6a680539192f74c48a"},{url:"tags/docker/index.html",revision:"d7879ddea07287add4b65ced478e2f9b"},{url:"tags/Docker/index.html",revision:"410f29c249da6a90f3ac6e95da03100c"},{url:"tags/Driver/index.html",revision:"1a6458efd62e73dcfffb7e1f0a174d2f"},{url:"tags/Earthly/index.html",revision:"4a41bfcbc2b20fd9b5b86d6d398b82c2"},{url:"tags/ED2K/index.html",revision:"045a36c89f27a707efb2fa65a9c344f4"},{url:"tags/email/index.html",revision:"6d2930452694c734352b7a82ad0b26ee"},{url:"tags/embeded/index.html",revision:"66d397b429223589615782400aa4293c"},{url:"tags/emby/index.html",revision:"0c44b33a58eb33e99e597decd25ecb29"},{url:"tags/Emby/index.html",revision:"4dc3380f9986add8e3a3fe0996fee330"},{url:"tags/face/index.html",revision:"8ecedbd44d18585bd99ff9593f8eefa3"},{url:"tags/git/index.html",revision:"0d7274e7156c7eb376cc5769446b861d"},{url:"tags/Git/index.html",revision:"ba77c42b183aa07f39be1d73e501526b"},{url:"tags/gitbook/index.html",revision:"76a0189ef2a0fed886e7a9b8d0cf4850"},{url:"tags/GitBook/index.html",revision:"3c1b85eba1f134790a72a613f873632b"},{url:"tags/Github/index.html",revision:"06dd9a07657b5047187d051e4e165d8e"},{url:"tags/Gitlab/index.html",revision:"327de550d57d8ca1f13b043fbafcab15"},{url:"tags/GROW/index.html",revision:"bfd5fc0b6a8cea9e5964f287971dfb74"},{url:"tags/hardlink/index.html",revision:"56f4ccfd4f64ad89a6ffedb4daa8d536"},{url:"tags/HDD/index.html",revision:"224a128ffc21175989953e67567f4123"},{url:"tags/hexo/index.html",revision:"5af1eca5cdf160a085e9b4692f025fbb"},{url:"tags/hisilicon/index.html",revision:"be15c91d0357ae3e4a7c429b32282c3c"},{url:"tags/Hotkey/index.html",revision:"077aa1c328e227f62953d9153136d6fe"},{url:"tags/http/index.html",revision:"c541ade0e723985e3195a38203ac7241"},{url:"tags/https/index.html",revision:"7f8ec404218577d32fcc6661b9690f71"},{url:"tags/ide/index.html",revision:"21bd58e4a977e63a6d146dad5765a030"},{url:"tags/image/index.html",revision:"eb9943cd6c5449d227d9ab6cee491ceb"},{url:"tags/index.html",revision:"d88bb1851e18a2ed7fab96e34841703c"},{url:"tags/ipv6/index.html",revision:"19ce89a0054acc9573a6b6d11e508efb"},{url:"tags/Jeckett/index.html",revision:"6b9010477868fc482162af5385d15257"},{url:"tags/Jekyll/index.html",revision:"41966a598a3f77b42207f479b9b6012c"},{url:"tags/jenkins/index.html",revision:"6692d4bbcaee2f60d89c75845345453a"},{url:"tags/Joplin/index.html",revision:"07fcc9d605dc1fe48acc029f42fb2ec6"},{url:"tags/js/index.html",revision:"eb5eba5629bb321193ff328aac455974"},{url:"tags/JSP/index.html",revision:"808ed4a5c7cc66ca5b9e36493a0d1dd2"},{url:"tags/Kernel/index.html",revision:"1a0da09d543635c077a4e07fb04e4873"},{url:"tags/LAMP/index.html",revision:"c95c5417fab2b5c1c5758d362acd7172"},{url:"tags/Laptop/index.html",revision:"2845ba4c8139b22f002c2a5908a95192"},{url:"tags/linux/index.html",revision:"fe313ab11b0f661d31a5d24ec03dc802"},{url:"tags/Linux/index.html",revision:"a98383abc9333a1e858b6107a2274646"},{url:"tags/Mariadb/index.html",revision:"957f5098546fa5400a0eae4db333058f"},{url:"tags/markdown/index.html",revision:"7e1aec05a1532d5ae3b06b32891fc49f"},{url:"tags/MarkDown/index.html",revision:"423dcc4f0c1a861510f0a6cacd77a492"},{url:"tags/matery/index.html",revision:"f0e2bac282f02f634924763a97aa42dc"},{url:"tags/mathjax/index.html",revision:"9568e0647c691f23c1047d1979031205"},{url:"tags/mermaid/index.html",revision:"f57e1e437790ff6774c02d1ed2ec3093"},{url:"tags/Mermaid/index.html",revision:"72428cda4e8c6f080a158f4763aa8b12"},{url:"tags/mp3tag/index.html",revision:"aa895bca2b042091f9d3fd011210d5a6"},{url:"tags/MPP/index.html",revision:"c7263fa251f210582d894a2864219cb2"},{url:"tags/mstream/index.html",revision:"c721eb6a2c61b4251da4b31d8135cefb"},{url:"tags/music/index.html",revision:"642e792a14e7a2f206ee1170f69b9dbd"},{url:"tags/MusicBrainz/index.html",revision:"9e3830c009592ab3486bacdf8e22cf9c"},{url:"tags/MySql/index.html",revision:"f3c925feab16ff6eff4db886f86c9f96"},{url:"tags/MySQL/index.html",revision:"dc5ca8425f4d7ac9c44d1a4cc434bff3"},{url:"tags/nas/index.html",revision:"2dde9647651929586621d4ed7fc47743"},{url:"tags/Nas/index.html",revision:"00c26703f1b92e06832c20dd6dbbd3e8"},{url:"tags/Nginx/index.html",revision:"c05f536a0c8bc5bbee08a9315975b9af"},{url:"tags/node/index.html",revision:"3a8a713843aaae4000a3372c64a31af9"},{url:"tags/note/index.html",revision:"873337b70c545884a5ef64c6cfcf3635"},{url:"tags/OKR/index.html",revision:"addd29ff0e2992ae355054814404c9c3"},{url:"tags/PDCA/index.html",revision:"143ad602ad5c67f8cf71d25f0b658798"},{url:"tags/PHP/index.html",revision:"b824b5cda96623697d46ac6652cb7640"},{url:"tags/picgo/index.html",revision:"682c15275cb587dd695a470ee52c9dc0"},{url:"tags/plantuml/index.html",revision:"17cde4723ed0ec037a0dd48705695e4c"},{url:"tags/plex/index.html",revision:"40664dde5984570c21bdc33933697951"},{url:"tags/Portainer/index.html",revision:"77319edf7e8e18e60b960e3457fb956e"},{url:"tags/proxy/index.html",revision:"0c6dbe4676df005675a8242d6d905d17"},{url:"tags/pt/index.html",revision:"7b8cb208f70ea5b581f63dd541279ce1"},{url:"tags/PT/index.html",revision:"4c6b3c93df00884b179ddbf6ecfb5ed0"},{url:"tags/qbittorrent/index.html",revision:"77f71d1ab28d7bda2d8b5be259540a51"},{url:"tags/qnap/index.html",revision:"727c827f6ebf57cdc0e1a803424d3e96"},{url:"tags/QNAP/index.html",revision:"3cc2bc4208e35370982a102c7891e759"},{url:"tags/Rigistry/index.html",revision:"5b537c9a4b27869ccafb2873484b9019"},{url:"tags/selfhost/index.html",revision:"16f0e505a0ccf9373e8ae1ad8be2d69f"},{url:"tags/seo/index.html",revision:"a2e3df0fab64a32df1ff3a70889fef93"},{url:"tags/shell/index.html",revision:"9795c5bd59a18c57c57ed3ed74aca382"},{url:"tags/SMART/index.html",revision:"c9dc497aa3cb2e8739c93549408c8d83"},{url:"tags/Sonarr/index.html",revision:"59fabd15370d8ac0f20f63d03f432cfb"},{url:"tags/sound/index.html",revision:"08e20aa3e6825b141c541ba8ac9d3e47"},{url:"tags/speaker/index.html",revision:"08538edd0ba394e88a67574902a6156f"},{url:"tags/SSD/index.html",revision:"823008743123dcba3106edde26f28362"},{url:"tags/ssl/index.html",revision:"72bd44ad0e16f3c4f168953be3c25bb7"},{url:"tags/SSL/index.html",revision:"831842b1505c2a1cc4de4135e7955a39"},{url:"tags/swarm/index.html",revision:"33e06873df672e0360a5c9fe79e40251"},{url:"tags/SWOT/index.html",revision:"c65f992ea6bae541c8d838fca2f2c80a"},{url:"tags/thinkpad/index.html",revision:"e3ebb4f4a07fe2aa28d77052c1809996"},{url:"tags/TLS/index.html",revision:"82dff87a2c441da8f5ca1c9d9c1ee9c5"},{url:"tags/tmm/index.html",revision:"394e75eea14c4b0e9116429741ce07d8"},{url:"tags/Tomcat/index.html",revision:"74a2f7dfaf2174530ac65f1e35dbea51"},{url:"tags/tools/index.html",revision:"ebcbe14f55d841885126233df3fa75ef"},{url:"tags/traefik/index.html",revision:"7d99aa31a1ecfcb6d7247bf2f9d51bac"},{url:"tags/transmission/index.html",revision:"c70bce6f8ce25db32be8efe47d6f3e41"},{url:"tags/Typora/index.html",revision:"adeb07a1b2edcc9ae857ec17f64a3fc9"},{url:"tags/ubuntu/index.html",revision:"f03d843552c51d8fe4914efa03523c71"},{url:"tags/UNF/index.html",revision:"8e7e5e4ee05048318b91c638213ec865"},{url:"tags/vim/index.html",revision:"d4d58edbf1c2f4ef511411ef5fbd2ac3"},{url:"tags/VPS/index.html",revision:"00e241ab7147aa26f3c3e283a8643ccc"},{url:"tags/vscode/index.html",revision:"472a4beaeaa343eabf3bf544490d431d"},{url:"tags/Watchtower/index.html",revision:"c913cf9d93e47025c6dc49b1f3e1e175"},{url:"tags/WBS/index.html",revision:"d9ae183db3080efa0542f129f489be76"},{url:"tags/web/index.html",revision:"94b3c612e1c3593fc2a464faf931a921"},{url:"tags/Webdav/index.html",revision:"681b5709c1bb021bfeba8574f95cf8f4"},{url:"tags/WIFI/index.html",revision:"6d89013f4ed9344bd7417ea242015a12"},{url:"tags/winrar/index.html",revision:"daffb2c7a5c7efc0e964d8e1a8c50bd9"},{url:"tags/wiz/index.html",revision:"e48ca377059b581dd3e3c9f636f5c7b2"},{url:"tags/中岛美嘉/index.html",revision:"b9435adad8d76136a2674ae5d0bfc19b"},{url:"tags/优化/index.html",revision:"69b315a0a9a8bb14241619b23e9ceb99"},{url:"tags/刮削/index.html",revision:"be15714b143f5d4041dc4b8cde316b20"},{url:"tags/启动/index.html",revision:"674dd2bc96d64b1bc0f330e59591d076"},{url:"tags/字幕/index.html",revision:"3a4553ff8ce92aeef5668a288a32396b"},{url:"tags/安全/index.html",revision:"40610e0e905e84b4f4587ee6f04cfe48"},{url:"tags/宝塔/index.html",revision:"8263177d3bc703eb3d5cb2b21cb8da9a"},{url:"tags/嵌入式/index.html",revision:"3bcc1a2913fd60ac62839b2b1b687892"},{url:"tags/建站/index.html",revision:"910d3535ac28ab167d208280e34fb9ee"},{url:"tags/技巧/index.html",revision:"4d5747aee2d3611b8f089e659a7adeb2"},{url:"tags/插件/index.html",revision:"c0c6db72a6f40cec7f2ad033df0f9d1e"},{url:"tags/教程/index.html",revision:"20229fb34f23caf4c466bedb2670604e"},{url:"tags/硬盘/index.html",revision:"125af8fd7c5d3642b5b16421f6056cf7"},{url:"tags/移植/index.html",revision:"d08be7936d6042c49863b67a49f8df90"},{url:"tags/管理/index.html",revision:"66ef95c45677fac30062843bfe853d5a"},{url:"tags/编码/index.html",revision:"f071cfd1080c5e49102cf72f7cb10aaf"},{url:"tags/群晖/index.html",revision:"5e2d17104cbf860f88c9bb7c66226899"},{url:"tags/隐私/index.html",revision:"124a1a4315fb62c7e3de305877ecf8a7"},{url:"tags/韩红/index.html",revision:"a4febec1f06cfc02f6eb732881282eef"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")});