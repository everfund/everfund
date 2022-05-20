import{disableBodyScroll as e,clearAllBodyScrollLocks as o,enableBodyScroll as t}from"body-scroll-lock";import n from"element-closest";import"core-js/features/array/includes";import"core-js/features/array/fill";import"core-js/features/promise";import"core-js/features";import"element-remove";import{css as a,keyframes as s}from"goober";const r=new class{constructor(){this.donationWidgetOpen=!1,this.onSuccess=()=>{},this.onFailure=()=>{},this.onClose=()=>{},this.version=void 0,this.version="1.3.3",this.setupButtonListeners(),this.setupIframeListeners(),n(window)}modal({code:e,domain:o,closeOnSuccess:t,onSuccess:n,onFailure:a,onClose:s}){console.warn("everfund.modal is deprecated in the next update, please use everfund.donationWidget instead"),this.donationWidget({code:e,domain:o,closeOnSuccess:t,onSuccess:n,onFailure:a,onClose:s})}donationWidget({code:o,domain:t,closeOnSuccess:n,onSuccess:r,onFailure:i,onClose:d}){r&&(this.onSuccess=r),i&&(this.onFailure=i),d&&(this.onClose=d);const c=window.location.origin;let l=function(e){var o=[];for(var t in e)e[t]&&e.hasOwnProperty(t)&&o.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return o.join("&")};try{const r=document.createElement("iframe");r.src=`https://${t||"evr.fund"}/${o}/modal?${l({embed_origin:c,embeded:!0,close_on_success:n})}`,r.allowPaymentRequest=!0;const i=a({border:"none",width:"100%",margin:0,height:"100%"});r.id="ef-modal",r.className=i,r.addEventListener("load",function(){const e=document.querySelector(".ldsRing"),o=document.querySelector(".embedModal");null==e||e.remove(),o.style.transform="opacity(1)"});const d=document.createElement("div"),u=a({pointerEvents:"all",zIndex:"9999999",display:"flex",width:"100%",transform:"opacity(0)",transition:"transform 0.3s ease",overflowY:"auto","-webkit-overflow-scrolling":"touch",height:"100%"});d.className=`embedModal ${u}`,d.appendChild(r);const m=document.createElement("div");e(m);const p=document.createElement("div"),f=s({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=a({display:"inline-block",position:"absolute",left:"calc(50% - 32px)",top:"calc(50% - 32px)",width:"64px",height:"64px","& div":{boxSizing:"border-box",display:"block",position:"absolute",width:"51px",height:"51px",margin:"6px",border:"6px solid white",borderRadius:"50%",animation:`${f} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,borderColor:"white transparent transparent transparent"},"& div:nth-child(1)":{animationDelay:" -0.45s"},"& div:nth-child(2)":{animationDelay:" -0.3s"},"& div:nth-child(3)":{animationDelay:" -0.15s"}});p.className=`ldsRing ${h}`;const g=document.createElement("div");Array(4).fill(4).forEach(function(){p.appendChild(g)});const b=a({position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"rgba(0, 0, 0, 0.7)",zIndex:"9999998",display:"flex",justifyContent:"space-around",alignItems:"stretch",backdropFilter:"blur(8px)"});m.className=`embedContainer ${b}`,m.appendChild(p),m.appendChild(d),document.body.appendChild(m)}catch(e){console.log(e),window.location.replace(`https://${t||"evr.fund"}/${o}/modal?${l({return_url:c})}`)}}setupButtonListeners(){document.addEventListener("click",function(e){const t=e.target.closest("[data-ef-modal]");if(!t||r.donationWidgetOpen)return;e.preventDefault(),e.stopPropagation();let n=t.getAttribute("data-ef-modal");n?(new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(n)&&(console.warn("Everfund: url's are deprecated please use a code instead"),n=new URL(n).pathname.replace("/","")),r.donationWidgetOpen=!0,r.donationWidget({code:n,onSuccess:()=>{},onFailure:()=>{},onClose:()=>{o()}})):console.error('Everfund: data-ef-modal is required! eg <button data-ef-modal="rjww"> modal </button>')},!1)}setupIframeListeners(){window.addEventListener("message",function(e){const o=document.querySelector(".embedContainer");switch(e.data.message){case"everfund:ready":const n=document.querySelector("#ldsRing"),a=document.querySelector(".embedModal");null==n||n.remove(),a.style.transform="opacity(1)";break;case"everfund:success":r.onSuccess(e.data.content);break;case"everfund:failure":r.onFailure(e.data.content);break;case"everfund:close":o&&t(o),o&&o.remove(),r.donationWidgetOpen=!1,r.onClose()}},!1)}};export{r as default};
//# sourceMappingURL=js-sdk.modern.js.map
