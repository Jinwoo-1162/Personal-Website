(this["webpackJsonpjinwoo-park-website"]=this["webpackJsonpjinwoo-park-website"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t){},46:function(e,t,c){},47:function(e,t,c){},53:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},82:function(e,t){},83:function(e,t){},84:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(35),a=c.n(i),r=(c(46),c(47),c(10)),o=c(13),l=(c(24),c(0)),j=function(e){return Object(l.jsx)("li",{className:"nav-item",id:e.item,children:Object(l.jsx)(o.b,{to:e.tolink,onClick:function(){return e.activec(e.item)},children:e.item})})},u=function(e){var t=Object(n.useState)("Home"),c=Object(r.a)(t,2),s=c[0],i=c[1];Object(n.useEffect)((function(){s.length>0&&document.getElementById(s).classList.add("active")}),[s]);var a=function(e){i(e),s!==e&&s.length>0&&document.getElementById(s).classList.remove("active")};return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(j,{item:"Home",tolink:"/",activec:a}),Object(l.jsx)(j,{item:"About",tolink:"/about",activec:a}),Object(l.jsx)(j,{item:"Projects",tolink:"/projects",activec:a}),Object(l.jsx)(j,{item:"Skills",tolink:"/skills",activec:a}),Object(l.jsx)(j,{item:"Resume",tolink:"/resume",activec:a}),Object(l.jsx)(j,{item:"Contact",tolink:"/contact",activec:a}),Object(l.jsx)(j,{item:"???",tolink:"/mystery",activec:a,className:"nav-mystery"})]})})},b=c.p+"static/media/IMG_6147.53130b74.jpg",m=c(37),d=c.n(m),h=(c(53),function(e){return Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("a",{href:"https://github.gatech.edu/jpark955",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{class:"fab fa-github"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/jinwoo-park-gt/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{class:"fab fa-linkedin"})})]})}),x=c(38),O=c.n(x),f=c(39),p=c(40);c(73);var g=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(""),j=Object(r.a)(a,2),u=j[0],b=j[1],m=Object(n.useRef)("X"),d=Object(n.useRef)("---------"),h=Object(n.useState)(),x=Object(r.a)(h,2),g=x[0],k=x[1],v=Object(n.useState)(!1),N=Object(r.a)(v,2),y=N[0],w=N[1];function C(){if(d.current.includes("-")){var e={method:"GET",url:"https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/".concat(d.current,"/").concat(m.current),headers:{"x-rapidapi-host":"stujo-tic-tac-toe-stujo-v1.p.rapidapi.com","x-rapidapi-key":"1225ff6c1dmsh23adefec29b568cp1a760djsnec74fb9c5271"}};O.a.request(e).then((function(e){console.log(e.data);var t=e.data.recommendation;return d.current=d.current.substring(0,t)+"X"+d.current.substring(t+1),m.current="O",document.getElementById(t+1).innerText="X",e.data.strength>=6e3?(b("I Win!"),void w(!0)):d.current.includes("-")?(console.log(d.current),b("Your Turn"),void k(!0)):(b("Draw!"),void w(!0))})).catch((function(e){console.error(e)}))}else b("Draw!")}function S(e,t){if(!d.current.includes("-"))return b("Draw!"),void w(!0);if(e&&"-"===d.current.charAt(t).toString()){if(d.current=d.current.substring(0,t)+"O"+d.current.substring(t+1),m.current="X",document.getElementById(t+1).innerText="O",!d.current.includes("-"))return b("Draw!"),void w(!0);console.log(d.current),b("My Turn"),k(!1),setTimeout(C,3e3)}else e&&"-"!==d.current.charAt(t).toString()&&(b("Pick a Different Spot"),setTimeout((function(){b("Your Turn")}),3e3))}return Object(n.useEffect)((function(){s&&(w(!1),Math.random()<=.5?(m.current="O",b("Your Turn"),d.current="---------",k(!0)):(m.current="X",b("My Turn"),d.current="---------",k(!1),setTimeout(C,3e3)))}),[s]),Object(l.jsx)("div",{children:s?Object(l.jsxs)("div",{className:"game-container",children:[Object(l.jsxs)("h3",{className:"turn",children:[u,Object(l.jsx)(f.a,{icon:p.a,style:g||y?{display:"none"}:{display:""},className:"spinner"})]}),Object(l.jsxs)("div",{className:"board",children:[Object(l.jsx)("button",{id:"1",className:"game-space",onClick:function(){return y?function(){}:S(g,0)}}),Object(l.jsx)("button",{id:"2",className:"game-space",onClick:function(){return y?function(){}:S(g,1)}}),Object(l.jsx)("button",{id:"3",className:"game-space",onClick:function(){return y?function(){}:S(g,2)}}),Object(l.jsx)("button",{id:"4",className:"game-space",onClick:function(){return y?function(){}:S(g,3)}}),Object(l.jsx)("button",{id:"5",className:"game-space",onClick:function(){return y?function(){}:S(g,4)}}),Object(l.jsx)("button",{id:"6",className:"game-space",onClick:function(){return y?function(){}:S(g,5)}}),Object(l.jsx)("button",{id:"7",className:"game-space",onClick:function(){return y?function(){}:S(g,6)}}),Object(l.jsx)("button",{id:"8",className:"game-space",onClick:function(){return y?function(){}:S(g,7)}}),Object(l.jsx)("button",{id:"9",className:"game-space",onClick:function(){return y?function(){}:S(g,8)}})]}),y?Object(l.jsx)(o.b,{to:"/resume",children:Object(l.jsx)("button",{className:"start-quit-button",children:"View my Resume!"})}):Object(l.jsx)("button",{className:"start-quit-button",onClick:function(){return i(!s)},children:"Quit"})]}):Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"start-quit-button start-button",onClick:function(){return i(!s)},children:"Start Game"})})})},k=(c(74),function(e){return Object(l.jsxs)("div",{className:"condiv home",children:[Object(l.jsx)("img",{src:b,title:"Hello there!",className:"profilepic",alt:"Hello!"}),Object(l.jsx)("p",{}),Object(l.jsx)(d.a,{className:"typingeffect",text:["Hi! My name is Jinwoo Park!"],speed:100,eraseDelay:5e3}),Object(l.jsxs)("p",{className:"deal",children:["Lets make a deal",Object(l.jsx)("br",{}),"If I win or draw with you in a game of tic tac toe, you have to read my resume!"]}),Object(l.jsx)(g,{}),Object(l.jsx)(h,{})]})}),v=function(e){return Object(l.jsxs)("div",{className:"condiv",children:[Object(l.jsx)("h1",{className:"subtopic",children:"About Me"}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Welcome to my website! My name is Jinwoo Park, an undergraduate computer science student at Georgia Tech interested in expanding his programming horizons through various personal projects. Whether it be through developing an Alexa skill at HackGT to recite dining hall menus or building a smart tutoring website to teach students how to code in Javascript, I am excited to jump into new tasks and am determined to follow through on my aspirations.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"You are currently viewing my personal website, an ongoing project where I will be documenting all the exciting developments of my software engineering journey. Here you will find links to all my project repositories, my resume, my contact information, and some fun minigames to pass the time. Thanks for stopping by!"]})]})},N=(c(75),function(e){return Object(l.jsxs)("div",{className:"widecard",onClick:function(){console.log("meme")},children:[Object(l.jsxs)("div",{className:"compdet",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsx)("h4",{className:"secondtext",children:e.lang}),Object(l.jsxs)("h4",{className:"secondtext",children:[e.from," - ",e.to]})]}),Object(l.jsx)("a",{className:"projectlink",href:e.link,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{class:"fab fa-github"})})]})}),y=function(e){return Object(l.jsxs)("div",{className:"condiv",children:[Object(l.jsx)("h1",{className:"subtopic",children:"Check out some of my various projects:"}),Object(l.jsx)(N,{title:"My Website",lang:"Javascript",from:"October 2019",to:"Present",link:"https://github.gatech.edu/jpark955/Jinwoo-Park-Website"}),Object(l.jsx)(N,{title:"Zen",lang:"Python",from:"October 2021",to:"October 2021",link:"https://github.com/Akash-Harapanahalli/the-modern-hourglass"}),Object(l.jsx)(N,{title:"March On",lang:"Javascript, HTML, CSS",from:"September 2020",to:"September 2020",link:"https://github.com/Jinwoo-1162/Jinwoo-1162.github.io"}),Object(l.jsx)(N,{title:"Trash Talker",lang:"Java",from:"February 2020",to:"February 2020",link:"https://github.gatech.edu/jpark955/TrashTalker"}),Object(l.jsx)(N,{title:"Dine Today",lang:"Python",from:"October 2019",to:"October 2019",link:"https://github.gatech.edu/jpark955/Dine-Today"}),Object(l.jsx)("h5",{children:"Note: due to transferrance of ownership of some private enterprise repositories, some projects may not have a complete commit history"})]})},w=(c(76),function(e){return Object(l.jsxs)("div",{className:"condiv",children:[Object(l.jsx)("h1",{className:"subtopic",children:"My skills"}),Object(l.jsxs)("div",{className:"skill-grid",children:[Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://cdn-icons-png.flaticon.com/512/121/121152.png",alt:"a skill"}),"Java"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",alt:"a skill"}),"Javascript"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png",alt:"a skill"}),"Python"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",alt:"a skill"}),"C"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png",alt:"a skill"}),"SQL"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",alt:"a skill"}),"React"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",style:{},src:"https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png",alt:"a skill"}),"Node.js"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://www.logolynx.com/images/logolynx/bb/bbdcfbb07f04e76ab33e94462b9a1122.png",alt:"a skill"}),"MongoDB"]}),Object(l.jsxs)("div",{className:"skill-box",children:[Object(l.jsx)("img",{className:"skill-image",src:"https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_no_text_.png",alt:"a skill"}),"OpenCV"]})]})]})}),C=(c(77),function(e){return Object(l.jsxs)("div",{className:"condiv",children:[Object(l.jsx)("h1",{className:"subtopic",children:"Contact me"}),Object(l.jsx)("p",{children:"If you notice any bugs on the website, or you just want to chat, feel free to reach out!"}),Object(l.jsxs)("h3",{children:["Email: \xa0",Object(l.jsx)("a",{className:"emaillink",href:"mailto: jpark955@gatech.edu",children:"jpark955@gatech.edu"})]}),Object(l.jsxs)("h3",{children:["Phone: (714) 713-8826",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]}),Object(l.jsx)(h,{})]})}),S=c(15),T=c.p+"static/media/ResumeJinParkOct2021.4dbfa6a2.pdf",P=(c(87),function(e){return S.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(S.c.version,"/pdf.worker.js"),Object(l.jsx)("div",{className:"condiv resumeBox",children:Object(l.jsx)(S.a,{className:"resume-pdf",file:T,children:Object(l.jsx)(S.b,{pageNumber:1})})})});c(88);var I=function(e){var t=Object(n.useState)("Enter Pin"),c=Object(r.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(!1),o=Object(r.a)(a,2),j=o[0],u=o[1];function b(e){u(!1);var t=s;"Enter Pin"!==s&&"Incorrect Pin"!==s&&"Success"!==s||(t=""),e>=0?t=t.concat(e):-1===e?t=t.substring(0,t.length-1):-2===e&&"Success"===(t=t===sessionStorage.getItem("pin").toString()?"Success":"Incorrect Pin")&&u(!0),i(t)}return Object(n.useEffect)((function(){sessionStorage.setItem("pin",Math.trunc(1e5*Math.random()))}),[]),Object(l.jsxs)("div",{className:"condiv",children:[Object(l.jsx)("h1",{children:"???"}),Object(l.jsxs)("div",{className:"game-holder",children:[Object(l.jsx)("h3",{className:"pin-value",children:s}),Object(l.jsxs)("div",{className:"numpad",children:[Object(l.jsx)("button",{className:"number",onClick:function(){return b(1)},children:"1"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(2)},children:"2"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(3)},children:"3"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(4)},children:"4"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(5)},children:"5"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(6)},children:"6"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(7)},children:"7"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(8)},children:"8"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(9)},children:"9"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(-1)},children:"Del"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(0)},children:"0"}),Object(l.jsx)("button",{className:"number",onClick:function(){return b(-2)},children:"Enter"})]}),Object(l.jsxs)("div",{className:"secret",style:j?{display:""}:{display:"none"},children:[Object(l.jsx)("label",{children:"Secret Art Porfolio"}),Object(l.jsx)("a",{className:"album-link",href:"https://imgur.com/a/ojFzh8j",target:"-blank",children:"Album Link"})]})]})]})};c(89);var J=function(){return Object(l.jsx)("div",{className:"banner",children:Object(l.jsx)("label",{className:"words",children:"Under Construction!"})})},M=c(4);var _=function(){return Object(l.jsxs)(o.a,{basename:"/Personal-Website",children:[Object(l.jsx)(J,{}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(M.a,{exact:!0,path:"/",children:Object(l.jsx)(k,{})}),Object(l.jsx)(M.a,{exact:!0,path:"/about",children:Object(l.jsx)(v,{})}),Object(l.jsx)(M.a,{exact:!0,path:"/projects",children:Object(l.jsx)(y,{})}),Object(l.jsx)(M.a,{exact:!0,path:"/skills",children:Object(l.jsx)(w,{})}),Object(l.jsx)(M.a,{exact:!0,path:"/resume",children:Object(l.jsx)(P,{})}),Object(l.jsx)(M.a,{exact:!0,path:"/contact",children:Object(l.jsx)(C,{})}),Object(l.jsx)(M.a,{exact:!0,path:"/mystery",children:Object(l.jsx)(I,{})})]})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),E()}},[[90,1,2]]]);
//# sourceMappingURL=main.8ad2e7cf.chunk.js.map