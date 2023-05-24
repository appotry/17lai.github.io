(function(window,document){function getRecord(i,c){return new Promise(function(a,o){i("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({target:c}))).then(e=>e.json()).then(({results:e,code:t,error:r})=>{if(t===401){throw r}if(e&&e.length>0){var n=e[0];a(n)}else{i("post","/classes/Counter",{target:c,time:0}).then(e=>e.json()).then((e,t)=>{if(t){throw t}a(e)}).catch(e=>{console.error("Failed to create: ",e);o(e)})}}).catch(e=>{console.error("LeanCloud Counter Error: ",e);o(e)})})}function increment(e,n){return new Promise(function(t,r){e("post","/batch",{requests:n}).then(e=>{e=e.json();if(e.error){throw e.error}t(e)}).catch(e=>{console.error("Failed to save visitor count: ",e);r(e)})})}function buildIncrement(e){return{method:"PUT",path:`/1.1/classes/Counter/${e}`,body:{time:{__op:"Increment",amount:1}}}}function validHost(){if(CONFIG.web_analytics.leancloud.ignore_local){var e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1"){return false}}return true}function validUV(){var e="LeanCloud_UV_Flag";var t=localStorage.getItem(e);if(t){if((new Date).getTime()-parseInt(t,10)<=864e5){return false}}localStorage.setItem(e,(new Date).getTime().toString());return true}function addCount(Counter){var enableIncr=CONFIG.web_analytics.enable&&!Matery.ctx.dnt&&validHost();var getterArr=[];var incrArr=[];var pvCtn=document.querySelector("#leancloud-site-pv-container");if(pvCtn){var pvGetter=getRecord(Counter,"site-pv").then(e=>{enableIncr&&incrArr.push(buildIncrement(e.objectId));var t=document.querySelector("#leancloud-site-pv");if(t){t.innerText=(e.time||0)+(enableIncr?1:0);pvCtn.style.display="inline"}});getterArr.push(pvGetter)}var uvCtn=document.querySelector("#leancloud-site-uv-container");if(uvCtn){var uvGetter=getRecord(Counter,"site-uv").then(e=>{var t=validUV()&&enableIncr;t&&incrArr.push(buildIncrement(e.objectId));var r=document.querySelector("#leancloud-site-uv");if(r){r.innerText=(e.time||0)+(t?1:0);uvCtn.style.display="inline"}});getterArr.push(uvGetter)}var viewCtn=document.querySelector("#leancloud-page-views-container");if(viewCtn){var path=eval(CONFIG.web_analytics.leancloud.path||"window.location.pathname");var target=decodeURI(path.replace(/\/*(index.html)?$/,"/"));var viewGetter=getRecord(Counter,target).then(e=>{enableIncr&&incrArr.push(buildIncrement(e.objectId));var t=document.querySelector("#leancloud-page-views");if(t){t.innerText=(e.time||0)+(enableIncr?1:0);viewCtn.style.display="inline"}});getterArr.push(viewGetter)}if(enableIncr){Promise.all(getterArr).then(()=>{incrArr.length>0&&increment(Counter,incrArr)})}}var appId=CONFIG.web_analytics.leancloud.app_id;var appKey=CONFIG.web_analytics.leancloud.app_key;var serverUrl=CONFIG.web_analytics.leancloud.server_url;if(!appId){throw new Error("LeanCloud appId is empty")}if(!appKey){throw new Error("LeanCloud appKey is empty")}function fetchData(n){var e=(e,t,r)=>{return fetch(`${n}/1.1${t}`,{method:e,headers:{"X-LC-Id":appId,"X-LC-Key":appKey,"Content-Type":"application/json"},body:JSON.stringify(r)})};addCount(e)}var apiServer=serverUrl||`https://${appId.slice(0,8).toLowerCase()}.api.lncldglobal.com`;if(apiServer){fetchData(apiServer)}else{fetch("https://app-router.leancloud.cn/2/route?appId="+appId).then(e=>e.json()).then(e=>{if(e.api_server){fetchData("https://"+e.api_server)}})}})(window,document);