window.live2d_settings=Array(),live2d_settings.modelAPI="//live2dapi.17lai.site/",live2d_settings.tipsMessage="waifu-tips.json",live2d_settings.hitokotoAPI="jinrishici.com",live2d_settings.modelId=1,live2d_settings.modelTexturesId=53,live2d_settings.showToolMenu=!0,live2d_settings.canCloseLive2d=!0,live2d_settings.canSwitchModel=!0,live2d_settings.canSwitchTextures=!0,live2d_settings.canSwitchHitokoto=!0,live2d_settings.canTakeScreenshot=!0,live2d_settings.canTurnToHomePage=!0,live2d_settings.canTurnToAboutPage=!0,live2d_settings.modelStorage=!0,live2d_settings.modelRandMode="switch",live2d_settings.modelTexturesRandMode="switch",live2d_settings.showHitokoto=!0,live2d_settings.showF12Status=!0,live2d_settings.showF12Message=!1,live2d_settings.showF12OpenMsg=!0,live2d_settings.showCopyMessage=!0,live2d_settings.showWelcomeMessage=!0,live2d_settings.waifuSize="300x265",live2d_settings.waifuTipsSize="270x60",live2d_settings.waifuFontSize="14px",live2d_settings.waifuToolFont="16px",live2d_settings.waifuToolLine="25px",live2d_settings.waifuToolTop="0px",live2d_settings.waifuMinWidth="768px",live2d_settings.waifuEdgeSide="left:0",live2d_settings.waifuDraggable="axis-x",live2d_settings.waifuDraggableRevert=!0,live2d_settings.l2dVersion="1.4.2",live2d_settings.l2dVerDate="2018.11.12",live2d_settings.homePageUrl="https://blog.17lai.site",live2d_settings.aboutPageUrl="https://blog.17lai.site/posts/4a2050e2/#%E6%9B%B4%E5%BC%BA%E5%A4%A7%E7%9A%84%E7%9C%8B%E6%9D%BF%E5%A8%98",live2d_settings.screenshotCaptureName="live2d.png",String.prototype.render=function(e){return this.replace(/(\\)?\{([^\{\}\\]+)(\\)?\}/g,(function(t,i,s,o){if(i||o)return t.replace("\\","");var a,n,l=s.replace(/\s/g,"").split("."),d=e;for(a=0,n=l.length;a<n;++a)if(null==(d=d[l[a]]))return"";return d}))};var re=/x/;function empty(e){return void 0===e||null==e||""==e}function getRandText(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length+1)-1]:e}function showMessage(e,t,i){(i||""===sessionStorage.getItem("waifu-text")||null===sessionStorage.getItem("waifu-text"))&&(Array.isArray(e)&&(e=e[Math.floor(Math.random()*e.length+1)-1]),live2d_settings.showF12Message&&console.log("[Message]",e.replace(/<[^<>]+>/g,"")),i&&sessionStorage.setItem("waifu-text",e),$(".waifu-tips").stop(),$(".waifu-tips").html(e).fadeTo(200,1),void 0===t&&(t=5e3),hideMessage(t))}function hideMessage(e){$(".waifu-tips").stop().css("opacity",1),void 0===e&&(e=5e3),window.setTimeout((function(){sessionStorage.removeItem("waifu-text")}),e),$(".waifu-tips").delay(e).fadeTo(200,0)}function randomSelection(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}function initModel(waifuPath,type){eval(function(e,t,i,s,o,a){if(o=function(e){return(e<60?"":o(parseInt(e/60)))+((e%=60)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;i--;)a[o(i)]=s[i]||o(i);s=[function(e){return a[e]}],o=function(){return"\\w+"},i=1}for(;i--;)s[i]&&(e=e.replace(new RegExp("\\b"+o(i)+"\\b","g"),s[i]));return e}("8.d(\" \");8.d(\"\\U,.\\y\\5.\\1\\1\\1\\1/\\1,\\u\\2 \\H\\n\\1\\1\\1\\1\\1\\b ', !-\\r\\j-i\\1/\\1/\\g\\n\\1\\1\\1 \\1 \\a\\4\\f'\\1\\1\\1 L/\\a\\4\\5\\2\\n\\1\\1 \\1 /\\1 \\a,\\1 /|\\1 ,\\1 ,\\1\\1\\1 ',\\n\\1\\1\\1\\q \\1/ /-\\j/\\1\\h\\E \\9 \\5!\\1 i\\n\\1\\1\\1 \\3 \\6 7\\q\\4\\c\\1 \\3'\\s-\\c\\2!\\t|\\1 |\\n\\1\\1\\1\\1 !,/7 '0'\\1\\1 \\X\\w| \\1 |\\1\\1\\1\\n\\1\\1\\1\\1 |.\\x\\\"\\1\\l\\1\\1 ,,,, / |./ \\1 |\\n\\1\\1\\1\\1 \\3'| i\\z.\\2,,A\\l,.\\B / \\1.i \\1|\\n\\1\\1\\1\\1\\1 \\3'| | / C\\D/\\3'\\5,\\1\\9.\\1|\\n\\1\\1\\1\\1\\1\\1 | |/i \\m|/\\1 i\\1,.\\6 |\\F\\1|\\n\\1\\1\\1\\1\\1\\1.|/ /\\1\\h\\G \\1 \\6!\\1\\1\\b\\1|\\n\\1\\1\\1 \\1 \\1 k\\5>\\2\\9 \\1 o,.\\6\\2 \\1 /\\2!\\n\\1\\1\\1\\1\\1\\1 !'\\m//\\4\\I\\g', \\b \\4'7'\\J'\\n\\1\\1\\1\\1\\1\\1 \\3'\\K|M,p,\\O\\3|\\P\\n\\1\\1\\1\\1\\1 \\1\\1\\1\\c-,/\\1|p./\\n\\1\\1\\1\\1\\1 \\1\\1\\1'\\f'\\1\\1!o,.:\\Q \\R\\S\\T v\"+e.V+\" / W \"+e.N);8.d(\" \");",0,60,"|u3000|uff64|uff9a|uff40|u30fd|uff8d||console|uff8a|uff0f|uff3c|uff84|log|live2d_settings|uff70|u00b4|uff49||u2010||u3000_|u3008||_|___|uff72|u2500|uff67|u30cf|u30fc||u30bd|u4ece|u30d8|uff1e|__|u30a4|k_|uff17_|u3000L_|u3000i|uff1a|u3009|uff34|uff70r|u30fdL__||___i|l2dVerDate|u30f3|u30ce|nLive2D|u770b|u677f|u5a18|u304f__|l2dVersion|FGHRSH|u00b40i".split("|"),0,{})),"function"!=typeof $.ajax&&("function"==typeof jQuery.ajax?window.$=jQuery:console.log("[Error] JQuery is not defined.")),live2d_settings.waifuSize=live2d_settings.waifuSize.split("x"),live2d_settings.waifuTipsSize=live2d_settings.waifuTipsSize.split("x"),live2d_settings.waifuEdgeSide=live2d_settings.waifuEdgeSide.split(":"),$("#live2d").attr("width",live2d_settings.waifuSize[0]),$("#live2d").attr("height",live2d_settings.waifuSize[1]),$(".waifu-tips").width(live2d_settings.waifuTipsSize[0]),$(".waifu-tips").height(live2d_settings.waifuTipsSize[1]),$(".waifu-tips").css("top",live2d_settings.waifuToolTop),$(".waifu-tips").css("font-size",live2d_settings.waifuFontSize),$(".waifu-tool").css("font-size",live2d_settings.waifuToolFont),$(".waifu-tool span").css("line-height",live2d_settings.waifuToolLine),"left"==live2d_settings.waifuEdgeSide[0]?$(".waifu").css("left",live2d_settings.waifuEdgeSide[1]+"px"):"right"==live2d_settings.waifuEdgeSide[0]&&$(".waifu").css("right",live2d_settings.waifuEdgeSide[1]+"px"),window.waifuResize=function(){$(window).width()<=Number(live2d_settings.waifuMinWidth.replace("px",""))?$(".waifu").hide():$(".waifu").show()},"disable"!=live2d_settings.waifuMinWidth&&(waifuResize(),$(window).resize((function(){waifuResize()})));try{"axis-x"==live2d_settings.waifuDraggable?$(".waifu").draggable({axis:"x",revert:live2d_settings.waifuDraggableRevert}):"unlimited"==live2d_settings.waifuDraggable?$(".waifu").draggable({revert:live2d_settings.waifuDraggableRevert}):$(".waifu").css("transition","all .3s ease-in-out")}catch(e){console.log("[Error] JQuery UI is not defined.")}"auto"==live2d_settings.homePageUrl?(window.location.protocol,window.location.hostname):live2d_settings.homePageUrl,"file:"==window.location.protocol&&"//"==live2d_settings.modelAPI.substr(0,2)&&(live2d_settings.modelAPI="http:"+live2d_settings.modelAPI),$(".waifu-tool .fa-home").click((function(){window.location=live2d_settings.homePageUrl})),$(".waifu-tool .fa-info-circle").click((function(){window.open(live2d_settings.aboutPageUrl)})),"object"==typeof waifuPath?loadTipsMessage(waifuPath):$.ajax({cache:!0,url:""==waifuPath?live2d_settings.tipsMessage:"waifu-tips.json"==waifuPath.substr(waifuPath.length-15)?waifuPath:waifuPath+"waifu-tips.json",dataType:"json",success:function(e){loadTipsMessage(e)}}),live2d_settings.showToolMenu||$(".waifu-tool").hide(),live2d_settings.canCloseLive2d||$(".waifu-tool .fa-times").hide(),live2d_settings.canSwitchModel||$(".waifu-tool .fa-user-circle").hide(),live2d_settings.canSwitchTextures||$(".waifu-tool .fa-street-view").hide(),live2d_settings.canSwitchHitokoto||$(".waifu-tool .fa-comment").hide(),live2d_settings.canTakeScreenshot||$(".waifu-tool .fa-camera-retro").hide(),live2d_settings.canTurnToHomePage||$(".waifu-tool .fa-home").hide(),live2d_settings.canTurnToAboutPage||$(".waifu-tool .fa-info-circle").hide(),void 0===waifuPath&&(waifuPath="");var modelId=localStorage.getItem("modelId"),modelTexturesId=localStorage.getItem("modelTexturesId");if(!live2d_settings.modelStorage||null==modelId)var modelId=live2d_settings.modelId,modelTexturesId=live2d_settings.modelTexturesId;loadModel(modelId,modelTexturesId);let userAction=!1,userActionTimer,messageTimer,messageArray=["好久不见，日子过得好快呢……","大坏蛋！你都多久没理人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！","记得把小家加入 Adblock 白名单哦！主银不靠广告谋生，可以极大提高网页速度，并大大减少内存占用！"];window.addEventListener("mousemove",(()=>userAction=!0),!!supportsPassive&&{passive:!0}),window.addEventListener("keydown",(()=>userAction=!0),!!supportsPassive&&{passive:!0}),setInterval((()=>{userAction?(userAction=!1,clearInterval(userActionTimer),userActionTimer=null):userActionTimer||(userActionTimer=setInterval((()=>{showMessage(randomSelection(messageArray),6e3,9)}),2e4))}),1e3)}function loadModel(e,t=0){live2d_settings.modelStorage?(localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",t)):(sessionStorage.setItem("modelId",e),sessionStorage.setItem("modelTexturesId",t)),loadlive2d("live2d",live2d_settings.modelAPI+"get/?id="+e+"-"+t,live2d_settings.showF12Status?console.log("[Status]","live2d","模型",e+"-"+t,"加载完成"):null)}function loadTipsMessage(e){window.waifu_tips=e,$.each(e.mouseover,(function(e,t){$(document).on("mouseover",t.selector,(function(){var e=getRandText(t.text);showMessage(e=e.render({text:$(this).text()}),3e3)}))})),$.each(e.click,(function(e,t){$(document).on("click",t.selector,(function(){var e=getRandText(t.text);showMessage(e=e.render({text:$(this).text()}),3e3,!0)}))})),$.each(e.seasons,(function(e,t){var i=new Date,s=t.date.split("-")[0],o=t.date.split("-")[1]||s;if(s.split("/")[0]<=i.getMonth()+1&&i.getMonth()+1<=o.split("/")[0]&&s.split("/")[1]<=i.getDate()&&i.getDate()<=o.split("/")[1]){var a=getRandText(t.text);showMessage(a=a.render({year:i.getFullYear()}),6e3,!0)}})),live2d_settings.showF12OpenMsg&&(re.toString=function(){return showMessage(getRandText(e.waifu.console_open_msg),5e3,!0),""}),live2d_settings.showCopyMessage&&$(document).on("copy",(function(){showMessage(getRandText(e.waifu.copy_message),5e3,!0)})),$(".waifu-tool .fa-camera-retro").click((function(){showMessage(getRandText(e.waifu.screenshot_message),5e3,!0),window.Live2D.captureName=live2d_settings.screenshotCaptureName,window.Live2D.captureFrame=!0})),$(".waifu-tool .fa-times").click((function(){sessionStorage.setItem("waifu-dsiplay","none"),showMessage(getRandText(e.waifu.hidden_message),1300,!0),window.setTimeout((function(){$(".waifu").hide()}),1300)})),window.showWelcomeMessage=function(e){var t;if(window.location.href==live2d_settings.homePageUrl){var i=(new Date).getHours();t=getRandText(i>23||i<=5?e.waifu.hour_tips.t23-5:i>5&&i<=7?e.waifu.hour_tips.t5-7:i>7&&i<=11?e.waifu.hour_tips.t7-11:i>11&&i<=14?e.waifu.hour_tips.t11-14:i>14&&i<=17?e.waifu.hour_tips.t14-17:i>17&&i<=19?e.waifu.hour_tips.t17-19:i>19&&i<=21?e.waifu.hour_tips.t19-21:i>21&&i<=23?e.waifu.hour_tips.t21-23:e.waifu.hour_tips.default)}else{var s=e.waifu.referrer_message;if(""!==document.referrer){var o=document.createElement("a");o.href=document.referrer;var a=o.hostname.split(".")[1];window.location.hostname==o.hostname?t=s.localhost[0]+document.title.split(s.localhost[2])[0]+s.localhost[1]:"baidu"==a?t=s.baidu[0]+o.search.split("&wd=")[1].split("&")[0]+s.baidu[1]:"so"==a?t=s.so[0]+o.search.split("&q=")[1].split("&")[0]+s.so[1]:"google"==a?t=s.google[0]+document.title.split(s.google[2])[0]+s.google[1]:($.each(e.waifu.referrer_hostname,(function(e,t){e==o.hostname&&(o.hostname=getRandText(t))})),t=s.default[0]+o.hostname+s.default[1])}else t=s.none[0]+document.title.split(s.none[2])[0]+s.none[1]}showMessage(t,6e3)},live2d_settings.showWelcomeMessage&&showWelcomeMessage(e);var t=e.waifu;function i(e){return live2d_settings.modelStorage?localStorage.getItem(e):sessionStorage.getItem(e)}function s(){"visible"==$(document)[0].visibilityState&&o()}function o(){switch(live2d_settings.hitokotoAPI){case"lwl12.com":$.getJSON("https://api.lwl12.com/hitokoto/v1?encode=realjson",(function(e){if(!empty(e.source)){var i=t.hitokoto_api_message["lwl12.com"][0];empty(e.author)||(i+=t.hitokoto_api_message["lwl12.com"][1]),i=i.render({source:e.source,creator:e.author}),window.setTimeout((function(){showMessage(i+t.hitokoto_api_message["lwl12.com"][2],3e3,!0)}),5e3)}showMessage(e.text,5e3,!0)}));break;case"fghrsh.net":$.getJSON("https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335",(function(e){if(!empty(e.source)){var i=t.hitokoto_api_message["fghrsh.net"][0];i=i.render({source:e.source,date:e.date}),window.setTimeout((function(){showMessage(i,3e3,!0)}),5e3),showMessage(e.hitokoto,5e3,!0)}}));break;case"jinrishici.com":$.ajax({url:"https://v2.jinrishici.com/one.json",xhrFields:{withCredentials:!0},success:function(e,i){if(!empty(e.data.origin.title)){var s=t.hitokoto_api_message["jinrishici.com"][0];s=s.render({title:e.data.origin.title,dynasty:e.data.origin.dynasty,author:e.data.origin.author}),window.setTimeout((function(){showMessage(s,3e3,!0)}),5e3)}showMessage(e.data.content,5e3,!0)}});break;default:$.getJSON("https://v1.hitokoto.cn",(function(e){if(!empty(e.from)){var i=t.hitokoto_api_message["hitokoto.cn"][0];i=i.render({source:e.from,creator:e.creator}),window.setTimeout((function(){showMessage(i,3e3,!0)}),5e3)}showMessage(e.hitokoto,5e3,!0)}))}}live2d_settings.showHitokoto&&(window.getActed=!1,window.hitokotoTimer=0,window.hitokotoInterval=!1,$(document).mousemove((function(e){getActed=!0})).keydown((function(){getActed=!0})),setInterval((function(){getActed?(getActed=hitokotoInterval=!1,window.clearInterval(hitokotoTimer)):hitokotoInterval||(hitokotoInterval=!0,hitokotoTimer=window.setInterval(s,3e4))}),1e3)),$(".waifu-tool .fa-user-circle").click((function(){var e,s;e=i("modelId"),s=live2d_settings.modelRandMode,$.ajax({cache:"switch"==s,url:live2d_settings.modelAPI+s+"/?id="+e,dataType:"json",success:function(e){loadModel(e.model.id);var i=e.model.message;$.each(t.model_message,(function(t,s){t==e.model.id&&(i=getRandText(s))})),showMessage(i,3e3,!0)}})})),$(".waifu-tool .fa-street-view").click((function(){var e,s,o;e=i("modelId"),s=i("modelTexturesId"),o=live2d_settings.modelTexturesRandMode,$.ajax({cache:"switch"==o,url:live2d_settings.modelAPI+o+"_textures/?id="+e+"-"+s,dataType:"json",success:function(i){1!=i.textures.id||1!=s&&0!=s?showMessage(t.load_rand_textures[1],3e3,!0):showMessage(t.load_rand_textures[0],3e3,!0),loadModel(e,i.textures.id)}})})),$(".waifu-tool .fa-comment").click((function(){o()}))}console.log(re);