function isOwnEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}if(window.waline_settings=Array(),window.localStorage?(waline_settings.serverURL=walineStorage.getItem("serverURL"),waline_settings.pageview="true"===walineStorage.getItem("pageview"),waline_settings.comment="true"===walineStorage.getItem("comment"),console.log("[waline]使用"+waline_settings.serverURL)):(waline_settings.serverURL="https://waline.17lai.site",waline_settings.pageview=!0,waline_settings.comment=!0,console.log("[waline]使用内部默认值!")),waline_settings.pageview){function upDatePageview(){const e=Waline.pageviewCount({serverURL:waline_settings.serverURL,path:window.location.pathname});setTimeout((()=>e()),3e3),wa_csp="waline_container_site_pv";document.getElementById(wa_csp);wa_cpv="waline_container_page_pv";var t=document.getElementById(wa_cpv);t?1!=isOwnEmpty(t.style)?(t.style.display="inline",console.log("[waline]update pageview count!")):console.log("[waline]ewacpv.style null!"):console.log("[waline]home page!")}upDatePageview()}if(waline_settings.comment){function upDateComment(){const e=Waline.commentCount({serverURL:waline_settings.serverURL,path:window.location.pathname});setTimeout((()=>e()),2e3),wa_ccc="waline_container_comment_count",document.getElementById(wa_ccc).style.display="inline",console.log("[waline]update comment count!")}function delayUpDateComment(){setTimeout((function(){upDateComment()}),5e3),console.log("[waline]delay update comment count!")}var btnsubmit=document.body.getElementsByClassName("wl-btn primary");void 0!==btnsubmit[0]?(void 0!==window.addEventListener?btnsubmit[0].addEventListener("click",delayUpDateComment,!1):btnsubmit[0].attachEvent("onclick",delayUpDateComment),upDateComment()):console.log("[waline]没有开启waline!")}