(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(4),r=t.n(c),u=(t(15),t(16),t(1)),i=t(2),l=t(5);function f(e){var n=e.onVideo,t=e.constraints,c=Object(i.a)(e,["onVideo","constraints"]),r=Object(a.useState)(null),l=Object(u.a)(r,2),f=l[0],d=l[1],s=Object(a.useMemo)(function(){return navigator.mediaDevices.getUserMedia(t||{video:{facingMode:"environment"},audio:!1})},[t]);return Object(a.useMemo)(function(){s.catch(function(e){return console.error("failed to get user media:",e)})},[s]),Object(a.useEffect)(function(){return s.then(function(e){f&&(f.srcObject=e,f.onloadedmetadata=function(){f.play(),n(f)})}),function(){}},[f,s,n]),Object(a.useEffect)(function(){return function(){s.then(function(e){e.getVideoTracks().forEach(function(n){return e.removeTrack(n)})})}},[s]),o.a.createElement("video",Object.assign({},c,{ref:d}))}function d(e){var n=e.video,t=e.onQrCode;return Object(a.useEffect)(function(){var e=new l.a(n,t);return e.start(),function(){e.stop()}},[n,t]),o.a.createElement(o.a.Fragment,null)}function s(e){var n=e.onQrCode,t=Object(i.a)(e,["onQrCode"]),c=Object(a.useState)(null),r=Object(u.a)(c,2),l=r[0],s=r[1];return console.log("..."),o.a.createElement(o.a.Fragment,null,o.a.createElement(f,Object.assign({onVideo:s},t)),l&&o.a.createElement(d,{video:l,onQrCode:n}))}function m(e){var n=e.onQrCode,t=Object(i.a)(e,["onQrCode"]),c=Object(a.useState)(!1),r=Object(u.a)(c,2),l=r[0],f=r[1];return l?o.a.createElement(o.a.Fragment,null):o.a.createElement(s,Object.assign({onQrCode:function(e){console.log("qrCode=",e),n(e),f(!0)}},t))}var b=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),l=i[0],f=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"QR Code: ",o.a.createElement("code",null,t)),l?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){f(!1)}},"Stop Scanning"),o.a.createElement(m,{onQrCode:function(e){c(e),f(!1)},hidden:!1})):o.a.createElement("button",{onClick:function(){f(!0)}},"Scan QR Code"))};var E=function(){return o.a.createElement("div",null,o.a.createElement(b,null))},g=function(e){e&&e instanceof Function&&t.e(4).then(t.bind(null,19)).then(function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null))),g()},6:function(e,n,t){e.exports=t(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.89550dd0.chunk.js.map