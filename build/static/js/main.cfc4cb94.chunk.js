(this["webpackJsonpsneaker-shop"]=this["webpackJsonpsneaker-shop"]||[]).push([[0],{45:function(e,a,t){e.exports=t(57)},50:function(e,a,t){},51:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),i=t.n(c),o=(t(50),t(29)),s=t(34),l=t(15),m=(t(51),t(3)),d=t(88);var p=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("https://graphqlservice.herokuapp.com/graphql",{method:"POST",body:"query { Products { id name brand quantity image price} }",headers:{"Content-Type":"application/graphql"}}).then((function(e){return e.json()})).then((function(e){c(e.data.Products)}))}),[]),r.a.createElement(r.a.Fragment,null,t&&t.length>0?r.a.createElement("div",{class:"wrapper"},r.a.createElement(d.a,{container:!0,spacing:2,className:"App-section img1"},r.a.createElement(d.a,{container:!0,item:!0,className:"product",direction:"row",xs:12},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("img",{className:"sideImage",src:t[0].image,alt:"Nike Air Jordan"})),r.a.createElement(d.a,{container:!0,item:!0,xs:5,direction:"row",class:"prod1 img11"},r.a.createElement(d.a,{item:!0,xs:12},"".concat(t[0].brand," - ").concat(t[0].name)),r.a.createElement(d.a,{item:!0,xs:12},t[0].price," ")))),r.a.createElement(d.a,{container:!0,spacing:2,className:"side-section"},r.a.createElement(d.a,{container:!0,item:!0,className:"product img2",direction:"row",xs:6},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("img",{className:"sideImage1",src:t[1].image,alt:"GeeksforGeeks logo"})),r.a.createElement(d.a,{container:!0,item:!0,xs:12,direction:"row",class:"prod2 img21"},r.a.createElement(d.a,{item:!0,xs:12},"".concat(t[1].brand," - ").concat(t[1].name)),r.a.createElement(d.a,{item:!0,xs:12},t[1].price," "))),r.a.createElement(d.a,{container:!0,item:!0,className:"product img3",direction:"row",xs:6},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("img",{className:"sideImage1",src:t[2].image,alt:"GeeksforGeeks logo"})),r.a.createElement(d.a,{container:!0,item:!0,xs:12,direction:"row",class:"prod3 img31"},r.a.createElement(d.a,{item:!0,xs:12},"".concat(t[2].brand," - ").concat(t[2].name)),r.a.createElement(d.a,{item:!0,xs:12},t[2].price," "))),r.a.createElement(d.a,{container:!0,item:!0,className:"product img4",direction:"row",xs:6},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("img",{className:"sideImage1",src:t[3].image,alt:"GeeksforGeeks logo"})),r.a.createElement(d.a,{container:!0,item:!0,xs:12,direction:"row",class:"prod2 img41"},r.a.createElement(d.a,{item:!0,xs:12},"".concat(t[3].brand," - ").concat(t[3].name)),r.a.createElement(d.a,{item:!0,xs:12},t[3].price," "))),r.a.createElement(d.a,{container:!0,item:!0,className:"product img5",direction:"row",xs:6},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("img",{className:"sideImage1",src:t[4].image,alt:"GeeksforGeeks logo"})),r.a.createElement(d.a,{container:!0,item:!0,xs:12,direction:"row",class:"prod3 img51"},r.a.createElement(d.a,{item:!0,xs:12},"".concat(t[4].brand," - ").concat(t[4].name)),r.a.createElement(d.a,{item:!0,xs:12},t[4].price," "))))):null)},u=t(93),E=t(95),g=t(37),h=t.n(g),f=t(38),w=t.n(f),b=t(97),x=t(91),y=t(92),k=t(39),S=t.n(k),j=t(41),O=t.n(j),v=t(94),N=t(96),C=t(36),G=t.n(C),I=t(40),z=t.n(I),A=Object(x.a)((function(e){return{drawer:{width:"50%",flexShrink:0,whiteSpace:"nowrap",color:"white !important"},drawerOpen:{width:"50%",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),backgroundImage:"url('https://sneakerize.gr/wp-content/uploads/2018/12/Sneaker-Feature-.jpg')"},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}}));var q=function(){var e,a,t=A(),n=r.a.useState(!1),c=Object(o.a)(n,2),i=c[0],s=c[1],d={display:"flex",justifyContent:"center"},g={color:"white"};return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},"Shoe Store"),r.a.createElement(E.a,{variant:"permanent",className:Object(m.a)(t.drawer,(e={},Object(l.a)(e,t.drawerOpen,i),Object(l.a)(e,t.drawerClose,!i),e)),classes:{paper:Object(m.a)((a={},Object(l.a)(a,t.drawerOpen,i),Object(l.a)(a,t.drawerClose,!i),a))}},r.a.createElement("div",{className:t.toolbar},r.a.createElement(y.a,{onClick:i?function(){s(!1)}:function(){s(!0)}},i?r.a.createElement(G.a,{color:"secondary",fontSize:"large"}):r.a.createElement(h.a,{color:"inherit",fontSize:"default"}))),r.a.createElement(u.a,null,r.a.createElement(b.a,{button:!0,key:"About"},r.a.createElement(v.a,{style:d}," ",r.a.createElement(w.a,{color:i?"secondary":"inherit",fontSize:"default"})," "),r.a.createElement(N.a,{style:g,primary:"About"})),r.a.createElement(b.a,{button:!0,key:"Accessories"},r.a.createElement(v.a,{style:d}," ",r.a.createElement(S.a,{color:i?"secondary":"inherit",fontSize:"default"})," "),r.a.createElement(N.a,{style:g,primary:"Accessories"})),r.a.createElement(b.a,{button:!0,key:"Store"},r.a.createElement(v.a,{style:d}," ",r.a.createElement(z.a,{color:i?"secondary":"inherit",fontSize:"default"})," "),r.a.createElement(N.a,{style:g,primary:"Store"})),r.a.createElement(b.a,{button:!0,key:"Contact Us"},r.a.createElement(v.a,{style:d}," ",r.a.createElement(O.a,{color:i?"secondary":"inherit",fontSize:"default"})," "),r.a.createElement(N.a,{style:g,primary:"Contact Us"})))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.cfc4cb94.chunk.js.map