if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e9bde4b2c8215421d34f065c7d0a5895"},{url:"404/index.html",revision:"37cec087c93518afe4e8ece55fa4645c"},{url:"about/index.html",revision:"676f4269f27afe808b66c6d1352fd343"},{url:"archives/2021/03/index.html",revision:"54dc310a40463f07ee7566562fc36cff"},{url:"archives/2021/05/index.html",revision:"91b37385438f7ee256999dd97a05830c"},{url:"archives/2021/07/index.html",revision:"c195ae6d6a3c8a18386ed7a592ef9d44"},{url:"archives/2021/08/index.html",revision:"f7fe4ed18d094dca95dc9477979702bc"},{url:"archives/2021/09/index.html",revision:"add3e3831db34b140f44200ccdb9581f"},{url:"archives/2021/10/index.html",revision:"25b0a7ad8116a945df24bcda3b58fa85"},{url:"archives/2021/index.html",revision:"d0c3b6acaa14e58bd4f4d6d45ae9e611"},{url:"archives/index.html",revision:"ac282bb07ccfd87bca0fa055e4419837"},{url:"bb/index.html",revision:"2bba3e11331af458139d44533e8181e2"},{url:"categories/ai/index.html",revision:"a9fe0d6a7b10d7dceede6af6013a1a2d"},{url:"categories/blog/index.html",revision:"1060ab327a5c4f597bcd2415a31591cb"},{url:"categories/bt/index.html",revision:"0b23dd7b9ce4ec0eb8d0c111bb6f966a"},{url:"categories/docker/index.html",revision:"51c7fcefddcabc5d5197329ce932e5d5"},{url:"categories/embeded/index.html",revision:"c8e0c047e5da1db686d20016db0ed823"},{url:"categories/gitbook/index.html",revision:"3065a19c38cd1dfa7aa2923f8fc92ea6"},{url:"categories/gitlab/index.html",revision:"9061386393f9733db744586cdcfea55c"},{url:"categories/hexo/index.html",revision:"be1a7d7e58bbd7819e00d17c46b29864"},{url:"categories/ide/index.html",revision:"2f38f7809e1c7a2986a3432e93f4fb89"},{url:"categories/image/index.html",revision:"18d610c1793040cd011214334b6b3979"},{url:"categories/index.html",revision:"683562541a4e2f64b1e177cd85cf43ea"},{url:"categories/linux/index.html",revision:"52f7095206c9defe558e37763d922b24"},{url:"categories/music/index.html",revision:"e166ca8dfb90c057897beecfba2a0a6f"},{url:"categories/mysql/index.html",revision:"56d10eb61f9ae2e17d55b91212ff2753"},{url:"categories/nas/index.html",revision:"7c0633f876f2effce99b53b5e50ac9fd"},{url:"categories/note/index.html",revision:"79aa4ce0a485ca9936211fcee37b76fb"},{url:"categories/notebook/index.html",revision:"c220872912de665f4971b66a63fba9df"},{url:"categories/PMBOK/index.html",revision:"7a036d71493f2b31f60192b6d0d57e84"},{url:"categories/qnap/index.html",revision:"ff427108c8299be84976809e3a41221a"},{url:"categories/tools/index.html",revision:"8ee8e80f273d5e9bb68aa5fd3f9f3419"},{url:"categories/video/index.html",revision:"4db94bd6d503557f46c26335ad4f7e30"},{url:"categories/vps/index.html",revision:"3090d02f94d5ac8a1209a8ba971613c1"},{url:"categories/web/index.html",revision:"0057eab06568751cbe912d6c330ceca3"},{url:"contact/index.html",revision:"e980d4244ce973412e8ffaa822cda96d"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/bilicard.css",revision:"372a94e93fd8014fa583ebf2481c9fd3"},{url:"css/fonts/cascadia-webfont.woff",revision:"0aee9d910f8517a55f3382c12ef4c52e"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"cbdcc7b499b8ff1a4a99d0fca721f2bc"},{url:"dash/index.html",revision:"daac0e8c7e68d4e556219fb48107af84"},{url:"favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"favicon.webp",revision:"606eb716d067515ffe79f0294e5a78c4"},{url:"friendlink/index.html",revision:"dcfebdfd243c44e98d9fe9484c813074"},{url:"friends/index.html",revision:"98d35de7fe1a0ff4c3f82035a04bf10f"},{url:"galleries/2020/index.html",revision:"7f0e4f112b59c742345560aa3cb9fb06"},{url:"galleries/index.html",revision:"b0e0b21b04e80d07cd26ea0d9b8346d2"},{url:"github-card-lib/githubcard.js",revision:"caa86aadbe330a8ee459a4ef9a1e2bcd"},{url:"index.html",revision:"e1daa72600f9546e1a830ba864904eb5"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"a2cd3dda09a2adb2608337273bf94acb"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"js/snow.js",revision:"ecb7e27accae76aa79fbdb1817fcd032"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid/mermaid.js",revision:"f3687bf99ec4a8b6608d45d2809eab00"},{url:"libs/mermaid/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"19bccbc6843ab916383ee7503363ffb4"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/prism/prism.css",revision:"3438405b32a6ebd86a9cd1f80e92e3da"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"b1d2c9b89c70dbf0a8541bfd36afafa1"},{url:"medias_webp/avatar.webp",revision:"d2bf5ba79af2048ae6634ad4e8483a34"},{url:"medias_webp/background.webp",revision:"f321ead438626322a05d6c75a6e59c82"},{url:"medias_webp/banner/0.webp",revision:"b41efdc1301969ba3c65e72d8c72a462"},{url:"medias_webp/banner/1.webp",revision:"cbeb3ec43f71ab1d92af22dbce3faea5"},{url:"medias_webp/banner/2.webp",revision:"ca29ac3bed76a6695654cc54a5b897c4"},{url:"medias_webp/banner/3.webp",revision:"2f51edba41bf7ff64c0ab3a704b65262"},{url:"medias_webp/banner/4.webp",revision:"0fef021c300134ccb0ff54beb01b2f6a"},{url:"medias_webp/banner/5.webp",revision:"21c397c78bdf18f4ea7952601f3f1a29"},{url:"medias_webp/banner/6.webp",revision:"ce1914a265ef06cca76a04e93e2d52eb"},{url:"medias_webp/barrager/0.webp",revision:"0d0c9f844b0c92948c0a9648e6a9f010"},{url:"medias_webp/barrager/1.webp",revision:"078d2a7ff7983759c8ee639ad7dba171"},{url:"medias_webp/barrager/2.webp",revision:"cf694dccdbc63b97df9c33d471562e52"},{url:"medias_webp/barrager/close.webp",revision:"c61f042d5eb8ecab2d61b3bc43499e79"},{url:"medias_webp/comment_bg.webp",revision:"fdd2eda6dc58b0ac8a24c95596ebc698"},{url:"medias_webp/cover.webp",revision:"2f51edba41bf7ff64c0ab3a704b65262"},{url:"medias_webp/cover/3g4g.webp",revision:"57114f5475fdc77d4e97423da281101c"},{url:"medias_webp/cover/5w2h.webp",revision:"44606732aa9eb7c663ebbd351550bc88"},{url:"medias_webp/cover/baota.webp",revision:"e8095d55095cd04758949c7911e1b467"},{url:"medias_webp/cover/debian.webp",revision:"66fc3cc8adec7bccb51d8bdcacede7f7"},{url:"medias_webp/cover/DeepLearning.webp",revision:"f733e183300bf89020bd78c411dc1d12"},{url:"medias_webp/cover/docker.webp",revision:"4f15a43377c99f728c830c86549a91f0"},{url:"medias_webp/cover/docker2.webp",revision:"0213debcb5052a6e00420cf968ffe6d0"},{url:"medias_webp/cover/emby.webp",revision:"c08cc1c3111b8c967460d909aa1e57ad"},{url:"medias_webp/cover/friendlink.webp",revision:"78b135045c0f9d2dd3f222e9ae9ba193"},{url:"medias_webp/cover/gitbook.webp",revision:"f339819d2ee0e38b1f69e747bded3889"},{url:"medias_webp/cover/githubPages.webp",revision:"822c10c798414dd98a99f83269753b63"},{url:"medias_webp/cover/gitlab.webp",revision:"bebf1a66712f1786d2dd987ec7df819c"},{url:"medias_webp/cover/hexo.webp",revision:"0fd93a9729e90cea4be3ed3fb885e936"},{url:"medias_webp/cover/hisi.webp",revision:"c700762c843f79e54d4e603ba438b831"},{url:"medias_webp/cover/imgprogress.webp",revision:"92e9950cbf521b69a2c8e5e8157ae746"},{url:"medias_webp/cover/joplin.webp",revision:"33c20723bdfd943b80103c30e50721d5"},{url:"medias_webp/cover/music.webp",revision:"81ed9a2fb447c2286e3ecd99a3e6245d"},{url:"medias_webp/cover/mysql.webp",revision:"9b8f7d86fca0243333d70a37bc99741a"},{url:"medias_webp/cover/pdca.webp",revision:"0857faafb7e3bb580ae4c6157cb1c8f0"},{url:"medias_webp/cover/pt.webp",revision:"46ff22b8084abadb89947ae5e3523ec4"},{url:"medias_webp/cover/qbittorrent.webp",revision:"3c4bf98d435336e959a22dc619f6b035"},{url:"medias_webp/cover/qnap.webp",revision:"483cb9013e9141269d4634ee6286bcb6"},{url:"medias_webp/cover/thinkpad.webp",revision:"b82934a246ff0381ec2ebaac3419cb79"},{url:"medias_webp/cover/tls1.3.webp",revision:"6d197d1583cf86ab71608becbb6ae751"},{url:"medias_webp/cover/transmission.webp",revision:"6ef32db449fbb983297367e8df8545f8"},{url:"medias_webp/cover/vim.webp",revision:"7757506ef4b8562b3df4e48854fd9070"},{url:"medias_webp/cover/vscode.webp",revision:"64dbe13b2e9bfa28e9a0720ada400e00"},{url:"medias_webp/cover/web.webp",revision:"c4bc48a49c70050758071c61c144d49f"},{url:"medias_webp/cover/wiznote.webp",revision:"e6073e7e2351b120677a6f651432ec0f"},{url:"medias_webp/cover/write.webp",revision:"3e1a172a31c881db82f45c80034fa5d2"},{url:"medias_webp/favicon.webp",revision:"606eb716d067515ffe79f0294e5a78c4"},{url:"medias_webp/featureimages/0.webp",revision:"3b92251c3e11c032736f54d52bc5490c"},{url:"medias_webp/featureimages/1.webp",revision:"06eeb5827a94352cc5e4fa5208a31694"},{url:"medias_webp/featureimages/10.webp",revision:"c41d90b523e5ecd058ed284ddbcf89bc"},{url:"medias_webp/featureimages/11.webp",revision:"0f78eb64b309a7d44de3f97cc06d1e05"},{url:"medias_webp/featureimages/12.webp",revision:"f95fb3028c0e553bec5b2bfa82de97cd"},{url:"medias_webp/featureimages/13.webp",revision:"65c829c383c2346cb0f8a620561200da"},{url:"medias_webp/featureimages/14.webp",revision:"9fe0fc1349d14eeadc2498e73b18b139"},{url:"medias_webp/featureimages/15.webp",revision:"24eda0eb52f1ccef72c6adf8b5fdcbb9"},{url:"medias_webp/featureimages/16.webp",revision:"3a5e386198c6fdc7baa919a7f05832b9"},{url:"medias_webp/featureimages/17.webp",revision:"14fa69dc64708a841a34b8fa5adec79f"},{url:"medias_webp/featureimages/18.webp",revision:"ee94884981a9becf0e748b4b1b732233"},{url:"medias_webp/featureimages/19.webp",revision:"27f96021f4cbef1ef662760ac264c32b"},{url:"medias_webp/featureimages/2.webp",revision:"e30738d14d93c787c009bb1b240fd88d"},{url:"medias_webp/featureimages/20.webp",revision:"09f33082c2a02ee628c6e53e268bdfc4"},{url:"medias_webp/featureimages/21.webp",revision:"855c99332f0e4b026ea025ebe684c680"},{url:"medias_webp/featureimages/22.webp",revision:"9a5ebded38480cc05793c85324e95179"},{url:"medias_webp/featureimages/23.webp",revision:"36a26faef48ee101dbd360463372cffd"},{url:"medias_webp/featureimages/3.webp",revision:"b162e2198cb63b372de62be76d03a6ef"},{url:"medias_webp/featureimages/4.webp",revision:"5dc2bcf5bfc705c98c62c76e23199a24"},{url:"medias_webp/featureimages/5.webp",revision:"c84016cfd342d53787eb3ea92e6ef97a"},{url:"medias_webp/featureimages/6.webp",revision:"b671b4d0aa2c286b38c65ad0a668501e"},{url:"medias_webp/featureimages/7.webp",revision:"262faaa692ce42f361a2d0c40c0cfc7d"},{url:"medias_webp/featureimages/8.webp",revision:"02e1101766b0c8885d0e5d37cd66f306"},{url:"medias_webp/featureimages/9.webp",revision:"46235a2f8202c2e235b63c78e2121c20"},{url:"medias_webp/icons/android-chrome-192x192.webp",revision:"48aa21e44a344398b458e1297dc36a4a"},{url:"medias_webp/icons/android-chrome-512x512.webp",revision:"9493e3192289b6605e0c90c436bf1761"},{url:"medias_webp/icons/apple-touch-icon.webp",revision:"6cab1859a4ae5d55b2e4db4230f4dcc8"},{url:"medias_webp/icons/favicon-16x16.webp",revision:"e118ff040b4520c0f9dfd6433a86a7b1"},{url:"medias_webp/icons/favicon-32x32.webp",revision:"0b4e65da6120073bcba1eee003c05caa"},{url:"medias_webp/icons/mstile-150x150.webp",revision:"e5beac614e89805d51c5ec35e1d72c38"},{url:"medias_webp/icp.webp",revision:"c94b7d269ced9b2201d898c7e27f98a9"},{url:"medias_webp/images/01.webp",revision:"ef61807c8a451a81ef1d935cfa78ff2e"},{url:"medias_webp/images/02.webp",revision:"c83dd0c4a49167a6a8925aa166478e18"},{url:"medias_webp/images/03.webp",revision:"9a14dde789b0d749333cfe9cf84d830a"},{url:"medias_webp/loading.webp",revision:"67376513a87f787eebbdc5bb4a4b25e8"},{url:"medias_webp/logo.webp",revision:"2c375a6293e114be8d81a38915477b80"},{url:"medias_webp/reward/alipay.webp",revision:"735fe2ddaad140f02b7c25381b7b3e44"},{url:"medias_webp/reward/wechat.webp",revision:"86522934bfb5f272a2a4d8c48eac7cc5"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/background.jpg",revision:"6d8acdb3b968b251904b1a5aef54603e"},{url:"medias/background.webp",revision:"d6585bed113939c0835bd60a259999b4"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover/3g4g.jpg",revision:"bdf683ad79797d0ad8329a6db5b1fb8f"},{url:"medias/cover/5w2h.jpg",revision:"e155161f820032dd473cb32eee171597"},{url:"medias/cover/baota.jpg",revision:"ed9a12a87e09778e4baf0368c7bce3c6"},{url:"medias/cover/debian.jpg",revision:"6114687c07da605413d6ab52ea9d4aa6"},{url:"medias/cover/DeepLearning.jpg",revision:"0e80851654902070bf677015c8259ea3"},{url:"medias/cover/docker.jpg",revision:"03a662cf4b47c6af05bc2a306f0b0ca3"},{url:"medias/cover/docker2.jpg",revision:"074611aebe9a0f4adb28b8f2197cd745"},{url:"medias/cover/emby.jpg",revision:"f5acc2ffe576956132890e453af01ef4"},{url:"medias/cover/friendlink.jpg",revision:"e171f2eed32dd9efc7f5374841ac27b6"},{url:"medias/cover/gitbook.jpg",revision:"dd199b178d444b6dc9ad170ac3d6f57d"},{url:"medias/cover/gitbook.png",revision:"058edc7b6d6a80b4c4aa40a2cfb79e74"},{url:"medias/cover/githubPages.jpg",revision:"656bb40f3bbfeddbbf710767c1de38bf"},{url:"medias/cover/gitlab.jpg",revision:"51d659549a269dd6619711018d13aec9"},{url:"medias/cover/hexo.jpg",revision:"1d3b90f7bbda942000f17f6952502700"},{url:"medias/cover/imgprogress.jpg",revision:"f4d8e19492ee49dfb3a22f0c4f2fa1c5"},{url:"medias/cover/joplin.jpg",revision:"d3dbfa385ccae5816d48aff9adca3080"},{url:"medias/cover/joplin.webp",revision:"910bf5997728f6933bb7721dcbc73ba4"},{url:"medias/cover/music.jpg",revision:"30b11dc283ad869156d68594cf83e67c"},{url:"medias/cover/mysql.jpg",revision:"dfb4dfc1904d2ff1d0f352a457f42041"},{url:"medias/cover/pdca.jpg",revision:"92aca54f970b630c6bf0d935942ecfde"},{url:"medias/cover/pt.jpg",revision:"97ecf150690b9a421f97dfed32f24396"},{url:"medias/cover/qbittorrent.jpg",revision:"c8311ac03e100b406ece01e5ea28761f"},{url:"medias/cover/qnap.jpg",revision:"c846e86da96f1b10c01c113265ba6cad"},{url:"medias/cover/thinkpad.jpg",revision:"e994312c8dd4137c32f3e7cdd41eb065"},{url:"medias/cover/tls1.3.jpg",revision:"3aa974a01182987a0022d7c5fe465e71"},{url:"medias/cover/transmission.jpg",revision:"e0e8f4ed34ef5b8299b41836cbdc7d22"},{url:"medias/cover/vim.jpg",revision:"b5b610ad5499e0fb914f289c4c74986c"},{url:"medias/cover/vscode.jpg",revision:"e69f5e69420c80c94aff0d8e1396bd47"},{url:"medias/cover/web.jpg",revision:"c7fcbd903e19f1806ffeaf7ffbbeff30"},{url:"medias/cover/wiznote.jpg",revision:"dc74389b7b3b41c747a4e60ee79bbb41"},{url:"medias/cover/write.jpg",revision:"7a8b7681b800eb08933063bcd70f21e6"},{url:"medias/favicon.png",revision:"bb44feefd80d6541316f0a21cb5cb824"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icons/android-chrome-192x192.png",revision:"2684236a73d80140a38ef0fa1b9a1393"},{url:"medias/icons/android-chrome-512x512.png",revision:"5dcfb530290470e27fdf44210b7e401b"},{url:"medias/icons/apple-touch-icon.png",revision:"4a2faed8744b478a987350f75ce5ee3f"},{url:"medias/icons/favicon-16x16.png",revision:"0b4fae79293942160075a418ef5711fa"},{url:"medias/icons/favicon-32x32.png",revision:"c9752354f08725dcf548f2d15c838555"},{url:"medias/icons/mstile-150x150.png",revision:"4e78f87b52abf91423a91e3f089df505"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/01.jpg",revision:"df3a6be5078170d97b0fa7af440c00d5"},{url:"medias/images/02.jpg",revision:"e48d5fab83ae2f90e2e6f0eef22ec85c"},{url:"medias/images/03.jpg",revision:"01d3b8abfc97d822ef159033b3cec89f"},{url:"medias/loading.gif",revision:"0e8edbcaef3e22718de6334626ed6d25"},{url:"medias/logo.png",revision:"6fd306e0fb239e42ec8f82793e6ae6ee"},{url:"medias/reward/alipay.jpg",revision:"3bdaaf7a07dd4f2f0b09cfdde884695f"},{url:"medias/reward/wechat.jpg",revision:"5dce1d6ff15f817acbe12de9dbf2ea14"},{url:"myPost/index.html",revision:"75f7df29bc6799ca019439716eaa4b73"},{url:"myProject/index.html",revision:"22a2cbc4038d93a25047b524ff30090e"},{url:"myTeck/index.html",revision:"685c2f87b2074f678d1f2d73fd3976ff"},{url:"needtoread/index.html",revision:"fc14acd394d5a83848f71e3998b2edbd"},{url:"posts/10fee780/index.html",revision:"9dc292cd51b6c094817528a23ed38592"},{url:"posts/13894dce/index.html",revision:"c881766ac6a3a2919452cea3bd997a52"},{url:"posts/1802a8a7/index.html",revision:"7d805de44fd57f7794d99650b2c54399"},{url:"posts/1991789c/index.html",revision:"c8d68380e58a3fc136ff2d649c181a45"},{url:"posts/29a820b3/index.html",revision:"a398c2d89ffbddd76135a8a1b20f3dec"},{url:"posts/2b9325d0/index.html",revision:"1819abb130eeb5d40ef8bd011f5278d5"},{url:"posts/3847ad58/index.html",revision:"d17606a95fc1e9dbaa7d635314022974"},{url:"posts/40300608/index.html",revision:"5cda86e09265924467296a4682a0f679"},{url:"posts/42b6a86d/index.html",revision:"b5b7c5c1d28f6f618dd5ffcf06ee7e80"},{url:"posts/44557ab0/index.html",revision:"64aef2d5be0bae532ebe3fd046523719"},{url:"posts/448f849b/index.html",revision:"f3f106ea843e35ac697196b4d4ca1322"},{url:"posts/45f878cd/index.html",revision:"e63b650e05a76ed37da3d80b78c73597"},{url:"posts/462f1e5c/index.html",revision:"c232b90b74d930b2572ddab3ed9ccdb0"},{url:"posts/465d2738/index.html",revision:"c07fe87bb70f005f49406dcacce191f3"},{url:"posts/495db4d3/index.html",revision:"436edc983fe1ec72133cfe995a6b5762"},{url:"posts/509c7bd3/index.html",revision:"116c643fa96794c322e23c85f8db9935"},{url:"posts/5b1993ac/index.html",revision:"d489d647732156bab19f10dc92861ef0"},{url:"posts/647e6265/index.html",revision:"da7e5eeea7a25682e80368f6effd35e0"},{url:"posts/656a0abb/index.html",revision:"fc47d1c99104c5d7acbe78d3be9cb7ef"},{url:"posts/69a052c9/index.html",revision:"9812af4be100a8c0f41c41e72810c3b9"},{url:"posts/6b2ba137/index.html",revision:"050194e6b3e21c69608c689a78c09b3c"},{url:"posts/7790e989/index.html",revision:"ae994325983c587bd7c1c446122f79c4"},{url:"posts/77da2f80/index.html",revision:"10c27a6d271a22f06e63dbebb92b4809"},{url:"posts/7b4e434c/index.html",revision:"982134da1fdded6b85ad4e479f6a071b"},{url:"posts/7fe86002/index.html",revision:"d14ab06151dd1abb597a9873c0a2ed41"},{url:"posts/80906b88/index.html",revision:"f67693f6cd5b39b487da0aee14f8efd1"},{url:"posts/8f76d9dd/index.html",revision:"2c5677dc5e9bd3b7d4387e354b95427a"},{url:"posts/92d347d6/index.html",revision:"5e39bdeffd4417a196dd5a465585ef65"},{url:"posts/9912bd5d/index.html",revision:"5462a0832da173127bb3a1cc78486ac4"},{url:"posts/a0f3c838/index.html",revision:"cfa14959be28f6a244881abcc12cabbf"},{url:"posts/a8535f26/index.html",revision:"55e4f9ec1514f700b496dc47b2d3f0f7"},{url:"posts/acc13b70/index.html",revision:"bb5112bb221217155ff0cb5f3ef69f4b"},{url:"posts/b1fe1bb8/index.html",revision:"5893ac1a57afa2af786e44ea0b49610b"},{url:"posts/bb600b4b/index.html",revision:"c1456f36d609a90fac1175326ed6a046"},{url:"posts/c945eae1/index.html",revision:"c363394f650980941828deb770cbba0c"},{url:"posts/ca630feb/index.html",revision:"e12e95f5e14bbc6faa82f4b186decb2e"},{url:"posts/cb623532/index.html",revision:"a410684d8687faa9efcb5e3245b85fb6"},{url:"posts/cf0f47fd/index.html",revision:"446dc975218efdcc3e8eed7ffc750314"},{url:"posts/d08eb7b/index.html",revision:"fefc4003e071c91fe7e79a1ca1a00aa0"},{url:"posts/d5f56dd0/index.html",revision:"e6f63addc09c249a19a7cb6c3a71e31b"},{url:"posts/e3ee7f8b/index.html",revision:"353f8a9e713e55b76183f93f83c2e8cf"},{url:"posts/e6086437/index.html",revision:"85dc12d3b3f62e96bc6ef9bdb7a3a7f9"},{url:"posts/e6d40157/index.html",revision:"e5f2631ff782c79d9b76b4223611d7c4"},{url:"posts/ec2cad2/index.html",revision:"81d897505d6036fbf59f512e47ec83b5"},{url:"posts/f0b0af52/index.html",revision:"ef4ef9937d78efbdd02a763de378a109"},{url:"posts/f6b32521/index.html",revision:"b002699c4eee6ea84ac742dfe374cf3f"},{url:"tags/3531a/index.html",revision:"1f5f92d709733ff0e80308d2f0d0b9ef"},{url:"tags/3798M/index.html",revision:"9b93485184c925c251ade3e7ae92b811"},{url:"tags/3a/index.html",revision:"8f9b1649dfaac1e6bc5f6b88d3c0abb8"},{url:"tags/3G/index.html",revision:"0f935e1bbdacad11fdb2d03866642992"},{url:"tags/4G/index.html",revision:"4e120a73d98764943bf6797f35cb8e62"},{url:"tags/5W2H/index.html",revision:"c030fe89e3aa5e92c880baa482dcc709"},{url:"tags/ae/index.html",revision:"215eacc2c5f0c60ea7126c461da3441f"},{url:"tags/ai/index.html",revision:"b2b8a82567f13c6b01f2e90e00bc0cde"},{url:"tags/Apache/index.html",revision:"dd6f14eadf157f8971787ae25454718b"},{url:"tags/ATI/index.html",revision:"97667c388d6f94723fdb3601b06cc91e"},{url:"tags/blog/index.html",revision:"bc4936c87c9aa894c56c24eef6b5fc3e"},{url:"tags/bt/index.html",revision:"950cb2cd93715259d1c0f7137d4fc59d"},{url:"tags/BT/index.html",revision:"0da525ee26a61ae1cd6e402d290ea314"},{url:"tags/ccs/index.html",revision:"f84dfb50ea7f35b2f3dc3075df8888f8"},{url:"tags/cdn/index.html",revision:"69199a5820b0bdbf1321bb53b18e7520"},{url:"tags/cmake/index.html",revision:"93a78c6ac8d774f9d2d55a6140f12f7f"},{url:"tags/Crack/index.html",revision:"ce31d6d3effff5c69a3756ff931adc8c"},{url:"tags/css/index.html",revision:"1b4a8a6e2bffdab34e3248826d10e803"},{url:"tags/Debian/index.html",revision:"af1d81188e5d2fabbfbbc51c30b7cae4"},{url:"tags/develop/index.html",revision:"00e8ff8a5a6e55737007154c25ab6d87"},{url:"tags/DNSCrypt/index.html",revision:"2d45cb2be05139281765bf57ad86452c"},{url:"tags/DNSMasq/index.html",revision:"4be60c5a2d35c00288582ac94921a418"},{url:"tags/docker/index.html",revision:"0c7974be753b38191e51cc4869c03aad"},{url:"tags/Docker/index.html",revision:"56d114ac70923e394a81fbd9345b5da8"},{url:"tags/Driver/index.html",revision:"62ef9af21613a2f5cc5fe758c1270d53"},{url:"tags/ED2K/index.html",revision:"2e7cb03b561db337e551c24b38feaa44"},{url:"tags/email/index.html",revision:"b2fdeb344e5abdc6f059860cce4999fa"},{url:"tags/embeded/index.html",revision:"e6187bd40c733f745b61d2734005bd84"},{url:"tags/emby/index.html",revision:"c7b6422e99fb04990637104ac408be90"},{url:"tags/Emby/index.html",revision:"6c2f77dc63373b2bea28f103e3b5ee57"},{url:"tags/face/index.html",revision:"7d7b4adb88806fa99d5120fa5591094d"},{url:"tags/Git/index.html",revision:"8cd818bd6b3aebab73bae029662ee6e2"},{url:"tags/GitBook/index.html",revision:"8c58577fbd68d8fbe32017150c127cba"},{url:"tags/Github/index.html",revision:"bf0007b7ddfe27afb04f66c900c82f23"},{url:"tags/Gitlab/index.html",revision:"dbb66ac808fe89f49012c7aac3a8ff37"},{url:"tags/GROW/index.html",revision:"677c669e4c137265e5c3c091efc93058"},{url:"tags/hardlink/index.html",revision:"097a48a157fe59625cdf11902bc12112"},{url:"tags/HDD/index.html",revision:"63934fdae03562fa43350c2c3f187d70"},{url:"tags/hexo/index.html",revision:"12f5aac0faec8c2493eda975cfcc0360"},{url:"tags/hisilicon/index.html",revision:"1b5635071426ec30729ed52881594ff1"},{url:"tags/Hotkey/index.html",revision:"67f6a62bd36ba96ba8097ca51dd6a6a9"},{url:"tags/http/index.html",revision:"03f86079857344f915d25faa87aa822d"},{url:"tags/https/index.html",revision:"575d83b6d629efca2470954319bdf834"},{url:"tags/ide/index.html",revision:"56aded910fec6c94d3f99f4caff54a0b"},{url:"tags/image/index.html",revision:"53ecf9e76db5d00f85cc4eee54666c75"},{url:"tags/index.html",revision:"0b9d5bad0b1dc988d54e191bbf7a6b9f"},{url:"tags/ipv6/index.html",revision:"f5b30bb5fa679952263e605438dc4127"},{url:"tags/Jeckett/index.html",revision:"57339b2128e2032c58fe41f538589a8c"},{url:"tags/Jekyll/index.html",revision:"6a6db78827bb33bb6d3f346b11898873"},{url:"tags/Joplin/index.html",revision:"101ba1cf6e99a62d9a84747683db7e22"},{url:"tags/js/index.html",revision:"e2e8f83445c0250283bf483bbc1bd450"},{url:"tags/JSP/index.html",revision:"dba8ca6c7058a7f899fb5c7b1f593f7d"},{url:"tags/Kernel/index.html",revision:"1a242b667111e511a042964db8690250"},{url:"tags/LAMP/index.html",revision:"30cf02455fcbfd353d57ffd2f18633c6"},{url:"tags/Laptop/index.html",revision:"3b42ac72cdfe35ec5a05eeb16144b9d9"},{url:"tags/linux/index.html",revision:"03a7574ed257fc5c1f6e06aea6ed10e5"},{url:"tags/Linux/index.html",revision:"55234ed4aa101b9217c6fda0de53fbeb"},{url:"tags/Mariadb/index.html",revision:"09cf47afbe3d25ee2588e77b635b38f2"},{url:"tags/markdown/index.html",revision:"9baf527d69a687bec92fa9b01acd4f4c"},{url:"tags/MarkDown/index.html",revision:"4857c5a44da1c37a4658c988b0855f88"},{url:"tags/matery/index.html",revision:"be2463b2d75cb9825f8d660398c62ec6"},{url:"tags/mathjax/index.html",revision:"6fe9777416fcf90c0668c24b19f6af75"},{url:"tags/mermaid/index.html",revision:"27656a6458b49081972962b626843b19"},{url:"tags/Mermaid/index.html",revision:"cecf477127dda82dbd71f72c06dda606"},{url:"tags/mp3tag/index.html",revision:"8b10ee2d7bb27c29520e7a5f959826df"},{url:"tags/MPP/index.html",revision:"58de62c61af1d807e2ba063bd82e8787"},{url:"tags/mstream/index.html",revision:"47055a0d67fda31500c2e3092232ad00"},{url:"tags/music/index.html",revision:"079e39dd9df8a84b4732d4556c596936"},{url:"tags/MusicBrainz/index.html",revision:"397e4d3a55d1396bd33c98f492c04daa"},{url:"tags/MySql/index.html",revision:"e0aa16273f59ac8900da090f0f68f080"},{url:"tags/MySQL/index.html",revision:"5cc3e1d0b06ffcee2250bdd6a4fc850d"},{url:"tags/nas/index.html",revision:"6e54bc2ebe4330f3b89201c1d8483e98"},{url:"tags/Nas/index.html",revision:"02d1bbf07454a0dbc7e350d489e385e2"},{url:"tags/Nginx/index.html",revision:"58b284f9d2dca68684f57e08fa82fe81"},{url:"tags/note/index.html",revision:"1a3acf3e5dd8655db09d5c667de09d40"},{url:"tags/OKR/index.html",revision:"6aaf655d505734e7b7da61b2d13c8447"},{url:"tags/PDCA/index.html",revision:"ee7a513ce014f7060732bbac0a789c02"},{url:"tags/PHP/index.html",revision:"8f9b31319a02d70c0da6db6413686c57"},{url:"tags/picgo/index.html",revision:"2b6e7848739d948f57f34919ae97647e"},{url:"tags/plantuml/index.html",revision:"85f7b175c2610b4638820fa069948308"},{url:"tags/plex/index.html",revision:"eec8eccf85fc69592aba38ca3282a146"},{url:"tags/Portainer/index.html",revision:"42ea77462fdd5d28aa413c5f6482f4c0"},{url:"tags/proxy/index.html",revision:"398b41a0744745e36d0d1be0a946fddb"},{url:"tags/pt/index.html",revision:"21d8d7786f598a7791fd0635749ceb94"},{url:"tags/PT/index.html",revision:"dcf27ae2fad06c65ec6301c237108cc6"},{url:"tags/qbittorrent/index.html",revision:"eb66cd7db2a69827980ac41a6d600c65"},{url:"tags/qnap/index.html",revision:"0dfa6277fff665756c54bf5e5c7e6c48"},{url:"tags/QNAP/index.html",revision:"f1422caf27e5b7f48673b3b26c5723d7"},{url:"tags/Rigistry/index.html",revision:"f8ea62df99e5c22fb08f1d91ca9e5d6d"},{url:"tags/selfhost/index.html",revision:"001a4e0f01093c9c21d0b12b931a562e"},{url:"tags/seo/index.html",revision:"33944fbf0c9c0cc5f2358675bc3d874c"},{url:"tags/SMART/index.html",revision:"ce68ccd44c6fed9b40728a4a26f70264"},{url:"tags/Sonarr/index.html",revision:"c19606f25090691a78ad103a90793b76"},{url:"tags/sound/index.html",revision:"119025a13495f0cf344e09d6bc508c03"},{url:"tags/speaker/index.html",revision:"0d1df3885c0700aab16ef921df274fd6"},{url:"tags/SSD/index.html",revision:"44d25ae5a05fd05148dbd1c1bde2a2b4"},{url:"tags/ssl/index.html",revision:"c90bbfc2a99adda22cfaff90cdd87b1f"},{url:"tags/SSL/index.html",revision:"62cc281feea8520da1d2c8efa009df3c"},{url:"tags/swarm/index.html",revision:"532818d73fe7ac18440b4d3da2372dff"},{url:"tags/SWOT/index.html",revision:"918a7ed897888f52d3adc9ca212fdd1c"},{url:"tags/thinkpad/index.html",revision:"dabbad896366733e85c5cb728f81596e"},{url:"tags/TLS/index.html",revision:"4b741966af6bbae68e89d5d964b0e053"},{url:"tags/tmm/index.html",revision:"c0627f1639723cf8e76b187fc7e7721a"},{url:"tags/Tomcat/index.html",revision:"da36e55d4c3471ab9b7a9d0a2612f950"},{url:"tags/traefik/index.html",revision:"1552f8da1b24fa9a2569d1e1683392d4"},{url:"tags/transmission/index.html",revision:"7587ce51af9c605dfbec482d118cef43"},{url:"tags/Typora/index.html",revision:"9da910bcb124a251693453d50e84f11d"},{url:"tags/ubuntu/index.html",revision:"e492b94ae4221fc01415783275da2a54"},{url:"tags/UNF/index.html",revision:"549beacd2999ae4bec09f70081de544c"},{url:"tags/vim/index.html",revision:"da0a4ac4cb6ad9eb4f8ac291576051db"},{url:"tags/VPS/index.html",revision:"5e6ceeea7bfde5d2d00f330fdd3e3e37"},{url:"tags/vscode/index.html",revision:"f7326bfefe4001f0b210eff78e2bb2e6"},{url:"tags/Watchtower/index.html",revision:"341c7014d470ce0cfd8b6ea86f80a49d"},{url:"tags/WBS/index.html",revision:"c7fc35eb855a3869f38d14829c220dbe"},{url:"tags/web/index.html",revision:"4bf8939f399c9f8624870e654517d02a"},{url:"tags/Webdav/index.html",revision:"4a9ba66443cf60ba2a6bbcc8b4067af6"},{url:"tags/WIFI/index.html",revision:"5d29516ba5b5fc48f96557be7e5e1746"},{url:"tags/wiz/index.html",revision:"7b8bb3dd5cc3cc31983ecbb24b61c7f8"},{url:"tags/优化/index.html",revision:"0c95d0615dcd6e9b5dd6a1dbcbb1c0b5"},{url:"tags/刮削/index.html",revision:"f0334f9968572846e80086691f8aec74"},{url:"tags/启动/index.html",revision:"fd27f7cfd05066aefeff9d955d8d5a9c"},{url:"tags/字幕/index.html",revision:"e311af0ef34cd4c8f66e37856a93eb42"},{url:"tags/安全/index.html",revision:"da5726b71b5162eb13d515ce222f25d0"},{url:"tags/宝塔/index.html",revision:"958204c4c840497cfc5191663652811e"},{url:"tags/嵌入式/index.html",revision:"97ca6fc1a2348ce73732f8d11f4ac074"},{url:"tags/建站/index.html",revision:"7f6a299d40886527bbdab51644c74335"},{url:"tags/技巧/index.html",revision:"23fcbf159d66d9a5aa0f8cbb67cbad61"},{url:"tags/插件/index.html",revision:"2bf3f1549620a3518ca5ef337a566564"},{url:"tags/教程/index.html",revision:"d87bd35f92c4e191f97cf252cb1befb8"},{url:"tags/硬盘/index.html",revision:"ff83ab8ba820a1e4ee6ae4478ca9893d"},{url:"tags/移植/index.html",revision:"da6fb06b67ed1661e434528b17f0024f"},{url:"tags/管理/index.html",revision:"4dba7ee8eb36c3c42c01beba0e2d9d8e"},{url:"tags/编码/index.html",revision:"46251d65ee4797d16cf2137332accd97"},{url:"tags/群晖/index.html",revision:"9ae0b2e4d1313a62644a25595a6d690b"},{url:"tags/隐私/index.html",revision:"d58688868b0ceb125f019b1cdb86f596"},{url:"tags/韩红/index.html",revision:"716e78a24adbbaa692591ad6e5ba2524"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));