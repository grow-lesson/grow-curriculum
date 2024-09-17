(function(){"use strict";var e={56565:function(e,n,t){var a=t(6154);const o=a.Z.create({baseURL:"https://grow-curriculum-backend-f10ce9239245.herokuapp.com/",withCredentials:!0});console.log("API Base URL:","https://grow-curriculum-backend-f10ce9239245.herokuapp.com/"),o.interceptors.request.use((e=>(console.log("Starting Request",e),e))),o.interceptors.response.use((e=>(console.log("Response:",e),e)),(e=>(console.error("Response Error:",e),e.response?(console.error("Response data:",e.response.data),console.error("Response status:",e.response.status),console.error("Response headers:",e.response.headers)):e.request?console.error("Request data:",e.request):console.error("Error message:",e.message),Promise.reject(e)))),n.Z=o},42553:function(e,n,t){var a=t(49963),o=t(66252),r=t(2262),i={__name:"App",setup(e){const n=(0,r.iH)(null),t=()=>{const e=navigator.userAgent||navigator.vendor||window.opera;return/iphone|ipod|ipad|android/i.test(e)&&!window.MSStream},a=()=>{if(t()&&n.value){const e=navigator.userAgent||navigator.vendor||window.opera;/iPhone/i.test(e)?n.value.style.paddingTop="calc(env(safe-area-inset-top) + 30px)":/android/i.test(e)?n.value.style.paddingTop="20px":n.value.style.paddingTop="10px"}};return(0,o.bv)((()=>{a()})),(e,t)=>{const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",{id:"app",ref_key:"app",ref:n},[(0,o.Wm)(a)],512)}}};const s=i;var u=s,c=t(33907);const l={loginData:null},m={setUser(e,n){e.loginData=n}},d={},p={getLoginData:e=>e.loginData};var h={state:l,mutations:m,actions:d,getters:p};const f=(0,c.MT)({modules:{user:h}});var g=f,b=t(22201),v=t(56565),P=t(29895),q=t(58661);const y=[{path:"/",name:"Welcome",component:()=>Promise.all([t.e(2456),t.e(1267)]).then(t.bind(t,71267))},{path:"/signup",name:"Signup",component:()=>Promise.all([t.e(2456),t.e(6310),t.e(9559)]).then(t.bind(t,89559))},{path:"/login",name:"Login",component:()=>Promise.all([t.e(2456),t.e(6310),t.e(7452)]).then(t.bind(t,67452))},{path:"/introduce",name:"Introduce",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(733)]).then(t.bind(t,92491))},{path:"/setup",name:"Setup",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(557)]).then(t.bind(t,97495))},{path:"/how-to",name:"HowTo",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(1091)]).then(t.bind(t,33961))},{path:"/environment",name:"Environment",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(4903)]).then(t.bind(t,50259))},{path:"/procedure",name:"Procedure",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(5196)]).then(t.bind(t,70428))},{path:"/menu",name:"MenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9036),t.e(6165)]).then(t.bind(t,43493))},{path:"/course-menu",name:"CourseMenu",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9036),t.e(5523)]).then(t.bind(t,91909))},{path:"/html-lesson-menu",name:"HtmlMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6259),t.e(6321),t.e(268),t.e(5831)]).then(t.bind(t,12e3))},{path:"/html-lesson-1",name:"HtmlPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(7259)]).then(t.bind(t,59181))},{path:"/html-lesson-2",name:"HtmlPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(5470)]).then(t.bind(t,62513))},{path:"/html-lesson-3",name:"HtmlPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(1431)]).then(t.bind(t,13461))},{path:"/html-lesson-4",name:"HtmlPage4",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(6409)]).then(t.bind(t,86335))},{path:"/html-lesson-5",name:"HtmlPage5",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(554)]).then(t.bind(t,30225))},{path:"/commandline-lesson-menu",name:"CommandLineMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6259),t.e(2671)]).then(t.bind(t,97e3))},{path:"/commandline-lesson-1",name:"CommandLinePage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(955)]).then(t.bind(t,33233))},{path:"/git-lesson-menu",name:"GitMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6259),t.e(6321),t.e(230)]).then(t.bind(t,49437))},{path:"/git-lesson-1",name:"GitPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(8833)]).then(t.bind(t,87570))},{path:"/git-lesson-2",name:"GitPage2",meta:{requiresAuth:!0},component:()=>t.e(4954).then(t.bind(t,94954))},{path:"/git-lesson-3",name:"GitPage3",meta:{requiresAuth:!0},component:()=>t.e(6805).then(t.bind(t,86805))},{path:"/javascript-lesson-menu",name:"JavascriptMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6259),t.e(6321),t.e(268),t.e(4161),t.e(822)]).then(t.bind(t,21410))},{path:"/javascript-lesson-1",name:"JavascriptPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(2679)]).then(t.bind(t,28184))},{path:"/javascript-lesson-2",name:"JavascriptPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(3911)]).then(t.bind(t,53805))},{path:"/javascript-lesson-3",name:"JavascriptPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(1039)]).then(t.bind(t,6255))},{path:"/javascript-lesson-4",name:"JavascriptPage4",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7597)]).then(t.bind(t,20780))},{path:"/javascript-lesson-5",name:"JavascriptPage5",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(4243)]).then(t.bind(t,12077))},{path:"/javascript-lesson-6",name:"JavascriptPage6",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(8025)]).then(t.bind(t,20081))},{path:"/javascript-lesson-7",name:"JavascriptPage7",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(3635)]).then(t.bind(t,5633))},{path:"/jquery-lesson-menu",name:"JqueryMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6259),t.e(6321),t.e(268),t.e(4161),t.e(2296)]).then(t.bind(t,76539))},{path:"/jquery-lesson-1",name:"JqueryPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(9383)]).then(t.bind(t,83916))},{path:"/jquery-lesson-2",name:"JqueryPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(8662)]).then(t.bind(t,22633))},{path:"/jquery-lesson-3",name:"JqueryPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(7128)]).then(t.bind(t,40713))},{path:"/jquery-lesson-4",name:"JqueryPage4",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(8568)]).then(t.bind(t,4277))},{path:"/jquery-lesson-5",name:"JqueryPage5",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(3591)]).then(t.bind(t,26352))},{path:"/jquery-lesson-6",name:"JqueryPage6",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(7287)]).then(t.bind(t,75740))},{path:"/jquery-lesson-7",name:"JqueryPage7",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(3529)]).then(t.bind(t,21447))},{path:"/jquery-lesson-8",name:"JqueryPage8",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(6893)]).then(t.bind(t,40025))},{path:"/jquery-lesson-9",name:"JqueryPage9",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(5781)]).then(t.bind(t,82896))},{path:"/jquery-lesson-10",name:"JqueryPage10",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(9369),t.e(7653),t.e(2711)]).then(t.bind(t,29009))},{path:"/my-page",name:"MyPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6552)]).then(t.bind(t,10100))},{path:"/progress",name:"Progress",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(138)]).then(t.bind(t,40400))},{path:"/reservation",name:"ReservationCalendar",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(4279)]).then(t.bind(t,24017))},{path:"/edit",name:"EditPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(6310),t.e(2751)]).then(t.bind(t,26285))},{path:"/contact",name:"Contact",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(2456),t.e(1193)]).then(t.bind(t,91860))},{path:"/underConstruction",name:"UnderConstruction",component:()=>Promise.all([t.e(2456),t.e(2541)]).then(t.bind(t,72777))}],A=(0,b.p7)({history:(0,b.PO)("/"),routes:y}),w=async e=>{if(console.log("Inside getCookie function"),(0,q.W)()){console.log("Capacitor environment detected in getCookie function");const n=await P.Zw.getCookies({url:"https://grow-curriculum-backend-f10ce9239245.herokuapp.com"});return n[e]}{console.log("Web environment detected in getCookie function");const n=e+"=",t=document.cookie.split(";");for(let e=0;e<t.length;e++){let a=t[e];while(" "==a.charAt(0))a=a.substring(1,a.length);if(0==a.indexOf(n))return decodeURIComponent(a.substring(n.length,a.length))}return null}};A.beforeEach((async(e,n,t)=>{if(console.log("Inside navigation guard"),e.meta.requiresAuth)try{console.log("Document cookies before get:",document.cookie);const e=await w("access-token"),n=await w("client"),a=await w("uid");if(console.log("Cookies:",{accessToken:e,client:n,uid:a}),e&&n&&a){const o=await v.Z.get("/auth/validate_token",{headers:{"access-token":e,client:n,uid:a},withCredentials:!0});return 200===o.status?(g.commit("setUser",o.data.data),g.state.user.loginData?void t():void t({name:"Login"})):void t({name:"Login"})}return void t({name:"Login"})}catch(a){return console.error(a),void t({name:"Login"})}t()}));var k=A;(0,a.ri)(u).use(g).use(k).mount("#app")},58661:function(e,n,t){t.d(n,{W:function(){return o}});var a=t(29895);const o=()=>(console.log("Checking Capacitor environment"),a.dV.isNativePlatform())}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],r=e[l][2];for(var s=!0,u=0;u<a.length;u++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[u])}))?a.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{138:"9d4ce7c2",230:"114736e7",268:"f899006f",554:"b40e4236",557:"2d3a6785",733:"1690d224",822:"f451eecd",955:"94f068b3",1039:"3a287a8b",1091:"045b66c4",1193:"a5311294",1267:"65a06522",1431:"665a4213",2296:"1e0b45a6",2456:"2fffd7cb",2541:"cda1db95",2671:"15ca37ae",2679:"f0660fdb",2711:"fd731fea",2751:"e44102a7",3529:"864aa644",3591:"54e9f2a7",3635:"6b7584b7",3911:"595929eb",4161:"d7b846b6",4243:"f05d6f23",4279:"25534bb8",4903:"f843655d",4954:"b6e7eace",5196:"8afc42b3",5470:"30a7e65d",5523:"d0757c31",5781:"1bd019f8",5831:"072666e8",6165:"7a6c4473",6259:"046ff9e3",6310:"545acede",6321:"e6addd96",6409:"c5c64187",6552:"36b5536e",6805:"45dbaaec",6893:"af06d9f6",7128:"e1c8b4c5",7259:"85065e56",7287:"dc613fc1",7452:"774fcce2",7597:"98d3fc6d",7653:"a5a65d2f",8025:"112ce67e",8568:"a1638df7",8662:"c40e6748",8833:"9fa56aa5",9036:"198f6298",9369:"b5ad2777",9383:"f7a966ec",9559:"990ad363"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{138:"22a55762",230:"e4901b4c",554:"8756953b",557:"b4418c2e",733:"d63d5562",822:"d96a4af9",955:"c404132f",1039:"b5c704ac",1091:"b6bb643b",1193:"a254ed7b",1267:"17bdee96",1431:"3a13a6bc",2296:"aac86042",2541:"f2633ed9",2671:"64fe06c8",2679:"d5bdac9e",2711:"94288e51",2751:"f72784e8",3529:"1d08535e",3591:"b8de4956",3635:"d04dfc45",3911:"3cf17021",4243:"14755a23",4279:"7a10ccf8",4903:"af2b168f",5196:"cd3084d1",5470:"6c7f1810",5523:"9d65e588",5781:"31a4d4b6",5831:"b2745e34",6165:"95eb0f34",6409:"2efdf292",6552:"aaf4473a",6893:"79faee64",7128:"0da88064",7259:"69a96ddc",7287:"abac3ab0",7452:"01c67d39",7597:"1acc9cd2",8025:"aa538c62",8568:"733dd24b",8662:"9ced42bc",8833:"100b4f9a",9383:"e3e3a69c",9559:"49f21013"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="grow-curriculum:";t.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var m=c[l];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==n+r){s=m;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+r),s.src=a),e[a]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(t){if(r.onerror=r.onload=null,"load"===t.type)a();else{var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode&&r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=n,t?t.parentNode.insertBefore(r,t.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=t[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===n))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===n)return o}},a=function(a){return new Promise((function(o,r){var i=t.miniCssF(a),s=t.p+i;if(n(i,s))return o();e(a,s,null,o,r)}))},o={2143:0};t.f.miniCss=function(e,n){var t={138:1,230:1,554:1,557:1,733:1,822:1,955:1,1039:1,1091:1,1193:1,1267:1,1431:1,2296:1,2541:1,2671:1,2679:1,2711:1,2751:1,3529:1,3591:1,3635:1,3911:1,4243:1,4279:1,4903:1,5196:1,5470:1,5523:1,5781:1,5831:1,6165:1,6409:1,6552:1,6893:1,7128:1,7259:1,7287:1,7452:1,7597:1,8025:1,8568:1,8662:1,8833:1,9383:1,9559:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=a(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={2143:0};t.f.j=function(n,a){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(t,a){o=e[n]=[t,a]}));a.push(o[2]=r);var i=t.p+t.u(n),s=new Error,u=function(a){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],s=a[1],u=a[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var l=u(t)}for(n&&n(a);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},a=self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[4998],(function(){return t(42553)}));a=t.O(a)})();
//# sourceMappingURL=app.d828a84e.js.map