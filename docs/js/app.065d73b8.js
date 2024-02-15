(function(){"use strict";var e={56565:function(e,n,t){var a=t(6154);const r=a.Z.create({baseURL:"https://grow-curriculum-backend-f10ce9239245.herokuapp.com/"});n.Z=r},7555:function(e,n,t){var a=t(49963),r=t(66252);const o={id:"app"};function i(e,n,t,a,i,u){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(c)])}var u={name:"App"},c=t(83744);const s=(0,c.Z)(u,[["render",i]]);var m=s,l=t(33907);const d={loginData:null},h={setUser(e,n){e.loginData=n}},p={},f={getLoginData:e=>e.loginData};var b={state:d,mutations:h,actions:p,getters:f};const g=(0,l.MT)({modules:{user:b}});var v=g,P=t(22201),A=t(56565);const y=[{path:"/",name:"Welcome",component:()=>Promise.all([t.e(658),t.e(846)]).then(t.bind(t,60846))},{path:"/signup",name:"Signup",component:()=>Promise.all([t.e(658),t.e(587),t.e(788)]).then(t.bind(t,81788))},{path:"/login",name:"Login",component:()=>Promise.all([t.e(658),t.e(587),t.e(172)]).then(t.bind(t,11172))},{path:"/introduce",name:"Introduce",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(150)]).then(t.bind(t,13952))},{path:"/setup",name:"Setup",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(379)]).then(t.bind(t,97495))},{path:"/howto",name:"HowTo",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(907)]).then(t.bind(t,33961))},{path:"/environment",name:"Environment",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(544),t.e(854)]).then(t.bind(t,46272))},{path:"/procedure",name:"Procedure",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(434)]).then(t.bind(t,99822))},{path:"/menu",name:"MenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(704),t.e(770)]).then(t.bind(t,59359))},{path:"/course-menu",name:"CourseMenu",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(704),t.e(966)]).then(t.bind(t,28630))},{path:"/html-lesson-menu",name:"HtmlMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(630)]).then(t.bind(t,32281))},{path:"/html-lesson-1",name:"HtmlPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(544),t.e(272)]).then(t.bind(t,51038))},{path:"/html-lesson-2",name:"HtmlPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(544),t.e(545)]).then(t.bind(t,37341))},{path:"/html-lesson-3",name:"HtmlPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(544),t.e(809)]).then(t.bind(t,95793))},{path:"/commandline-lesson-menu",name:"CommandLineMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(240)]).then(t.bind(t,73357))},{path:"/commandline-lesson-1",name:"CommandLinePage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(224)]).then(t.bind(t,33233))},{path:"/git-lesson-menu",name:"GitMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(44)]).then(t.bind(t,11400))},{path:"/git-lesson-1",name:"GitPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(387)]).then(t.bind(t,97571))},{path:"/git-lesson-2",name:"GitPage2",meta:{requiresAuth:!0},component:()=>t.e(954).then(t.bind(t,94954))},{path:"/git-lesson-3",name:"GitPage3",meta:{requiresAuth:!0},component:()=>t.e(805).then(t.bind(t,86805))},{path:"/javascript-lesson-menu",name:"JavascriptMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(787)]).then(t.bind(t,3017))},{path:"/javascript-lesson-1",name:"JavascriptPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(544),t.e(331)]).then(t.bind(t,72323))},{path:"/javascript-lesson-2",name:"JavascriptPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(740)]).then(t.bind(t,97385))},{path:"/javascript-lesson-3",name:"JavascriptPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(381)]).then(t.bind(t,19098))},{path:"/javascript-lesson-4",name:"JavascriptPage4",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(955)]).then(t.bind(t,34284))},{path:"/javascript-lesson-5",name:"JavascriptPage5",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(142)]).then(t.bind(t,7570))},{path:"/javascript-lesson-6",name:"JavascriptPage6",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(73)]).then(t.bind(t,32222))},{path:"/javascript-lesson-7",name:"JavascriptPage7",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(674),t.e(233)]).then(t.bind(t,91958))},{path:"/mypage",name:"MyPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(552)]).then(t.bind(t,10100))},{path:"/progress",name:"Progress",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(138)]).then(t.bind(t,40400))},{path:"/edit",name:"EditPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(587),t.e(926)]).then(t.bind(t,24967))},{path:"/contact",name:"Contact",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(193)]).then(t.bind(t,91860))},{path:"/chat",name:"ChatBot",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(524)]).then(t.bind(t,91717))},{path:"/underConstruction",name:"UnderConstruction",component:()=>Promise.all([t.e(658),t.e(541)]).then(t.bind(t,72777))}],q=(0,P.p7)({history:(0,P.PO)("/grow-curriculum/"),routes:y});function w(e){const n=`; ${document.cookie}`,t=n.split(`; ${e}=`);if(2===t.length)return t.pop().split(";").shift()}q.beforeEach((async(e,n,t)=>{if(e.meta.requiresAuth)try{const e=w("access-token"),n=w("client"),a=decodeURIComponent(w("uid"));if(e&&n&&a){const r=await A.Z.get("/auth/validate_token",{headers:{"access-token":e,client:n,uid:a},withCredentials:!0});200===r.status?(v.commit("setUser",r.data.data),v.state.user.loginData||t({name:"Login"}),t()):t({name:"Login"})}else t({name:"Login"})}catch(a){console.error(a),t({name:"Login"})}else t()}));var C=q;(0,a.ri)(m).use(v).use(C).mount("#app")}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,a,r,o){if(!a){var i=1/0;for(m=0;m<e.length;m++){a=e[m][0],r=e[m][1],o=e[m][2];for(var u=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(m--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{44:"8362e40b",73:"47429b58",138:"ecb28572",142:"98a67f9a",150:"fdec7ccc",172:"7a4552bc",193:"28105772",224:"16a31a7a",233:"fee666f6",240:"fbf1d247",272:"4c605711",331:"d1ca7154",379:"56b51672",381:"caa4f111",387:"96234cdf",434:"d12d3e1f",524:"a89fc83e",541:"84087467",544:"aee39965",545:"60d5d1cc",552:"899c300d",587:"8bdb9987",630:"47b0cbc0",658:"e8ff7c6d",674:"90486ce2",704:"dd8841ba",740:"0674957e",770:"ca3bb0a6",787:"a2634e48",788:"32a53c78",805:"d797e632",809:"0752538d",846:"ea28bd3d",854:"ac2f0073",907:"4851f364",926:"21921b62",954:"f156acf7",955:"eb0b3f0f",966:"3dcbc5c6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{44:"efb66fb9",73:"6216c4d9",138:"49ed4311",142:"7e713875",150:"6d5eae37",172:"78145585",193:"d2d0656f",224:"c89e56cd",233:"f9d25f6a",240:"d91c98a8",272:"42a1cb1b",331:"14326616",379:"b74f10f2",381:"02a1c3e5",387:"2bd795e2",434:"f2d28631",524:"38b88882",541:"afc59e52",545:"244f70fc",552:"9bd0286e",630:"af8f3acf",740:"e36ea174",770:"a0681b8f",787:"ee37ffb5",788:"4acd8892",809:"30c237ec",846:"b6f20f9c",854:"3db5b06f",907:"75f64da4",926:"4e900360",955:"3f9fdb72",966:"9ad94b5d"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="grow-curriculum:";t.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),m=0;m<s.length;m++){var l=s[m];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==n+o){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+o),u.src=a),e[a]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(t){if(o.onerror=o.onload=null,"load"===t.type)a();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode&&o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,t?t.parentNode.insertBefore(o,t.nextSibling):document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var r=t[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===n))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===n)return r}},a=function(a){return new Promise((function(r,o){var i=t.miniCssF(a),u=t.p+i;if(n(i,u))return r();e(a,u,null,r,o)}))},r={143:0};t.f.miniCss=function(e,n){var t={44:1,73:1,138:1,142:1,150:1,172:1,193:1,224:1,233:1,240:1,272:1,331:1,379:1,381:1,387:1,434:1,524:1,541:1,545:1,552:1,630:1,740:1,770:1,787:1,788:1,809:1,846:1,854:1,907:1,926:1,955:1,966:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=a(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,a){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(t,a){r=e[n]=[t,a]}));a.push(r[2]=o);var i=t.p+t.u(n),u=new Error,c=function(a){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var r,o,i=a[0],u=a[1],c=a[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var m=c(t)}for(n&&n(a);s<i.length;s++)o=i[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(m)},a=self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(7555)}));a=t.O(a)})();
//# sourceMappingURL=app.065d73b8.js.map