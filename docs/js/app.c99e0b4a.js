(function(){"use strict";var e={6565:function(e,n,t){var o=t(6154);const r=o.Z.create({baseURL:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL});n.Z=r},7555:function(e,n,t){var o=t(9963),r=t(6252);const a={id:"app"};function i(e,n,t,o,i,u){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(c)])}var u={name:"App"},c=t(3744);const s=(0,c.Z)(u,[["render",i]]);var m=s,l=t(3907);const d={loginData:null},f={setUser(e,n){e.loginData=n}},h={},p={getLoginData:e=>e.loginData};var b={state:d,mutations:f,actions:h,getters:p};const g=(0,l.MT)({modules:{user:b}});var v=g,P=t(2201),y=t(6565);const A=[{path:"/",name:"Welcome",component:()=>Promise.all([t.e(658),t.e(846)]).then(t.bind(t,846))},{path:"/signup",name:"Signup",component:()=>Promise.all([t.e(658),t.e(587),t.e(788)]).then(t.bind(t,1788))},{path:"/login",name:"Login",component:()=>Promise.all([t.e(658),t.e(587),t.e(172)]).then(t.bind(t,1172))},{path:"/introduce",name:"Introduce",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(150)]).then(t.bind(t,3952))},{path:"/setup",name:"Setup",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(692)]).then(t.bind(t,7495))},{path:"/howto",name:"HowTo",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(111)]).then(t.bind(t,3961))},{path:"/environment",name:"Environment",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(152),t.e(862)]).then(t.bind(t,6272))},{path:"/procedure",name:"Procedure",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(543)]).then(t.bind(t,9822))},{path:"/menu",name:"MenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(513),t.e(932)]).then(t.bind(t,831))},{path:"/course-menu",name:"CourseMenu",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(513),t.e(203)]).then(t.bind(t,1607))},{path:"/html-lesson-menu",name:"HtmlMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(630)]).then(t.bind(t,2281))},{path:"/html-lesson-1",name:"HtmlPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(152),t.e(221)]).then(t.bind(t,1038))},{path:"/html-lesson-2",name:"HtmlPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(152),t.e(861)]).then(t.bind(t,7341))},{path:"/html-lesson-3",name:"HtmlPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(152),t.e(65)]).then(t.bind(t,5793))},{path:"/commandline-lesson-menu",name:"CommandLineMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(813)]).then(t.bind(t,7952))},{path:"/commandline-lesson-1",name:"CommandLinePage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(860)]).then(t.bind(t,3233))},{path:"/Git-lesson-menu",name:"GitMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(44)]).then(t.bind(t,7496))},{path:"/Git-lesson-1",name:"GitPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(559),t.e(501)]).then(t.bind(t,7571))},{path:"/Git-lesson-2",name:"GitPage2",meta:{requiresAuth:!0},component:()=>t.e(954).then(t.bind(t,4954))},{path:"/Git-lesson-3",name:"GitPage3",meta:{requiresAuth:!0},component:()=>t.e(805).then(t.bind(t,6805))},{path:"/mypage",name:"MyPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(552)]).then(t.bind(t,100))},{path:"/progress",name:"Progress",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(138)]).then(t.bind(t,400))},{path:"/edit",name:"EditPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(587),t.e(926)]).then(t.bind(t,4967))},{path:"/contact",name:"Contact",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(193)]).then(t.bind(t,1860))},{path:"/chat",name:"ChatBot",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(524)]).then(t.bind(t,1717))},{path:"/underConstruction",name:"UnderConstruction",component:()=>Promise.all([t.e(658),t.e(541)]).then(t.bind(t,2777))}],q=(0,P.p7)({history:(0,P.PO)("/grow-curriculum/"),routes:A});function w(e){const n=`; ${document.cookie}`,t=n.split(`; ${e}=`);if(2===t.length)return t.pop().split(";").shift()}q.beforeEach((async(e,n,t)=>{if(e.meta.requiresAuth)try{const e=w("access-token"),n=w("client"),o=decodeURIComponent(w("uid"));if(e&&n&&o){const r=await y.Z.get("/auth/validate_token",{headers:{"access-token":e,client:n,uid:o},withCredentials:!0});200===r.status?(v.commit("setUser",r.data.data),v.state.user.loginData||t({name:"Login"}),t()):t({name:"Login"})}else t({name:"Login"})}catch(o){console.error(o),t({name:"Login"})}else t()}));var C=q;(0,o.ri)(m).use(v).use(C).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(m=0;m<e.length;m++){o=e[m][0],r=e[m][1],a=e[m][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(m--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{44:"7f437c0c",65:"cbe1cd3a",111:"f62b2d93",138:"0c4405ab",150:"ea960052",152:"a8484e43",172:"e3e1bd1a",193:"551d76e8",203:"fc2e11e9",221:"e6c35445",501:"8dd153cb",513:"fca48751",524:"f3ea44de",541:"79f606f9",543:"fca0cb5b",552:"b7df39fa",559:"55c8a376",587:"c17210e1",630:"bbaf8170",658:"ecd56158",692:"a2931aa6",788:"2c992a44",805:"1e60faeb",813:"2bec0e56",846:"10050f91",860:"06df1e30",861:"fc365353",862:"0a1d9d1b",926:"dfa93442",932:"28f0e648",954:"b258614e"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{44:"20097c99",65:"57cbc22c",111:"82b514d0",138:"121e5d6e",150:"da1a34bd",172:"78145585",193:"e957e748",203:"c3a205e7",221:"b0c78a06",501:"083f77e4",524:"f9a0d51a",541:"65813362",543:"6c7de5b1",552:"703c068f",630:"d5a6544e",692:"685ab772",788:"4acd8892",813:"51dcbd23",846:"b6f20f9c",860:"30fee49a",861:"853398d1",862:"df5e57ee",926:"7ec151ec",932:"ba797e02"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="grow-curriculum:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),m=0;m<s.length;m++){var l=s[m];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={44:1,65:1,111:1,138:1,150:1,172:1,193:1,203:1,221:1,501:1,524:1,541:1,543:1,552:1,630:1,692:1,788:1,813:1,846:1,860:1,861:1,862:1,926:1,932:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var m=c(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(m)},o=self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7555)}));o=t.O(o)})();
//# sourceMappingURL=app.c99e0b4a.js.map