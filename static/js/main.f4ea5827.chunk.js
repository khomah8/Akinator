(this["webpackJsonpakinator-int20h"]=this["webpackJsonpakinator-int20h"]||[]).push([[0],{155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=(a(99),a(63)),l=a(18),s=a(32),u=a(157),m=a(67),p=a(33),f=a.n(p);var v=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(l.f)();return r.a.createElement("div",{className:f.a.mainScreenContainer},r.a.createElement("div",{className:f.a.title},"Welcome to Akinator "),r.a.createElement("div",{className:f.a.inputContainer},r.a.createElement(u.a,{value:a,placeholder:"Write your name please",onChange:function(e){return function(e){var t=e.target.value;c(t)}(e)},size:"large"})),r.a.createElement("div",{className:f.a.buttonContainer},r.a.createElement(m.a,{onClick:function(){localStorage.setItem("gameUserName",a),o.push("/Akinator_Int20h/game")},type:"primary",block:!0},"Play :)")))},_=a(45),d=a.n(_),g=a(35),h=a.n(g);var b=function(){var e=u.a.TextArea,t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),p=l[0],f=l[1];Object(n.useEffect)((function(){var e=localStorage.getItem("gameUserName");f(e)}),[]);var v=Object(n.useCallback)((function(e){var t=e.target.value;o(t)}),[]),_=Object(n.useCallback)((function(){var e,t,a,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=JSON.stringify({q:c,api_token:"e127522705599e4de12fd2695a72dc2b"}),r.next=4,d.a.awrap(fetch("https://api.audd.io/findLyrics/?jsonp=?",{method:"POST",body:e}));case 4:return t=r.sent,r.next=7,d.a.awrap(t.text());case 7:a=r.sent,n=JSON.parse(a.slice(2,a.length-1)),console.log("cutResponse"),console.log(n),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.error(r.t0);case 16:case"end":return r.stop()}}),null,null,[[0,13]])}),[c]);return r.a.createElement("div",{className:h.a.gameContainer},r.a.createElement("div",{className:h.a.contentContainer},r.a.createElement("div",{className:h.a.title},"Hello ".concat(p,", let's play ")),r.a.createElement("div",{className:h.a.textArea},r.a.createElement(e,{onChange:function(e){return v(e)}})),r.a.createElement(m.a,{type:"primary",onClick:_},"Guess")))};a(155);var E=function(){return r.a.createElement(i.a,{basename:"/Akinator_Int20h"},r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(l.a,{path:"/game",render:function(){return r.a.createElement(b,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){e.exports={mainScreenContainer:"MainScreen_mainScreenContainer__2uyNN",title:"MainScreen_title__3LO4P",inputContainer:"MainScreen_inputContainer__3rP2V",buttonContainer:"MainScreen_buttonContainer__2F_0V"}},35:function(e,t,a){e.exports={gameContainer:"GameScreen_gameContainer__32wTU",contentContainer:"GameScreen_contentContainer__Okgxf",title:"GameScreen_title__1I08y",textArea:"GameScreen_textArea__3IkWl"}},94:function(e,t,a){e.exports=a(156)},99:function(e,t,a){}},[[94,1,2]]]);