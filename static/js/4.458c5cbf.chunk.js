(this["webpackJsonpplus-un-radis"]=this["webpackJsonpplus-un-radis"]||[]).push([[4],{56:function(t,e,n){"use strict";n.r(e);var o=n(44),r=n(1),c=n.n(r),a=function(){var t,e=Object(r.useState)(),n=Object(o.a)(e,2),c=n[0],a=n[1];return t=a,Object(r.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){t([e.coords.latitude,e.coords.longitude])})):console.warn("Geolocation is not supported")}),[t]),c},i=function(t,e){var n=function(t,e){var n=window.localStorage.getItem(t);if(!n)return e;try{return JSON.parse(n)}catch(o){return console.warn(o),e}}(t,e),c=Object(r.useState)(n),a=Object(o.a)(c,2),i=a[0],u=a[1];return[i,Object(r.useCallback)((function(e){u(e),function(t,e){window.localStorage.setItem(t,JSON.stringify(e))}(t,e)}),[t,u])]},u=function(t){return fetch(t).then((function(t){if(t.status>=200&&t.status<400)return t.json();throw new Error(t.statusText)}))},s=n(54),l=n(57),f=n(58),p=n(39),b=(n(50),Object(p.a)((function(){return{root:{position:"fixed",top:0,right:0,bottom:0,left:0}}}))),g=function(t){var e=t.children,n=t.onChangePosition,a=t.position,i=b(),u=Object(r.useState)(13),p=Object(o.a)(u,2),g=p[0],d=p[1],j=Object(r.useCallback)((function(t){var e=t.target.getCenter();n([e.lat,e.lng])}),[n]),O=Object(r.useCallback)((function(t){return d(t.target.getZoom())}),[d]),m=Object(s.a)(j,250),h=Object(s.a)(O,250);return c.a.createElement(l.a,{className:i.root,center:a,onMoveEnd:m,onZoomEnd:h,zoom:g},c.a.createElement(f.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e)},d=n(43),j=n.n(d),O=n(55),m=new j.a.Icon({iconAnchor:[0,0],iconSize:[32,32],iconUrl:"image/040-farmer.svg"}),h=function(t){return c.a.createElement(O.a,{icon:m,position:t.producer.position})},v=new j.a.Icon({iconAnchor:[0,0],iconSize:[32,32],iconUrl:"image/033-stall.svg"}),w=function(t){return c.a.createElement(O.a,{icon:v,position:t.seller.position})};e.default=function(){var t=function(){var t=Object(r.useState)(),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){u("api/producers/list.json").then(c).catch(console.warn)}),[c]),n}(),e=function(){var t=Object(r.useState)(),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){u("api/sellers/list.json").then(c).catch(console.warn)}),[c]),n}(),n=i("position"),s=Object(o.a)(n,2),l=s[0],f=s[1],p=a(),b=l||p||[51.505,-.09];return c.a.createElement(g,{position:b,onChangePosition:f},null===e||void 0===e?void 0:e.map((function(t){return c.a.createElement(w,{key:t.id,seller:t})})),null===t||void 0===t?void 0:t.map((function(t){return c.a.createElement(h,{key:t.id,producer:t})})))}}}]);
//# sourceMappingURL=4.458c5cbf.chunk.js.map