const website_id=CONFIG.statistics.umami.data_website_id;const request_url=CONFIG.statistics.umami.api_server+"/api/websites/"+website_id+"/stats";const start_time=new Date(CONFIG.statistics.umami.start_time).getTime();const end_time=(new Date).getTime();const token=CONFIG.statistics.umami.token;if(!website_id){throw new Error("Umami website_id is empty")}if(!request_url){throw new Error("Umami request_url is empty")}if(!start_time){throw new Error("Umami start_time is empty")}if(!token){throw new Error("Umami token is empty")}const params=new URLSearchParams({startAt:start_time,endAt:end_time});const request_header={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+token}};async function siteStats(){try{const e=await fetch(`${request_url}?${params}`,request_header);const s=await e.json();const a=s.uniques.value;const n=s.pageviews.value;let t=document.querySelector("#busuanzi_container_site_pv");if(t){let e=document.querySelector("#busuanzi_value_site_pv");if(e){e.textContent=n;t.style.display="inline"}}let i=document.querySelector("#busuanzi_container_site_uv");if(i){let e=document.querySelector("#busuanzi_value_site_uv");if(e){e.textContent=a;i.style.display="inline"}}}catch(e){console.error(e);return"-1"}}async function pageStats(e){console.log(e);try{const i=await fetch(`${request_url}?${params}&url=${e}`,request_header);const s=await i.json();const a=s.pageviews.value;let t=document.querySelector("#umami-page-views-container");if(t){let e=document.querySelector("#umami-page-views");if(e){e.textContent=a;t.style.display="inline"}}}catch(e){console.error(e);return"-1"}}siteStats();let viewCtn=document.querySelector("#umami-page-views-container");if(viewCtn){let e=window.location.pathname;let t=decodeURI(e.replace(/\/*(index.html)?$/,"/"));pageStats(t)}