(function(){"use strict";var e={6565:function(e,n,t){var r=t(6154);const o=r.Z.create({baseURL:"https://grow-curriculum-backend-f10ce9239245.herokuapp.com/"});n.Z=o},7555:function(e,n,t){var r=t(9963),o=t(6252);const a={id:"app"};function i(e,n,t,r,i,u){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(c)])}var u={name:"App"},c=t(3744);const s=(0,c.Z)(u,[["render",i]]);var m=s,l=t(3907);const d={loginData:null},f={setUser(e,n){e.loginData=n}},h={},p={getLoginData:e=>e.loginData};var b={state:d,mutations:f,actions:h,getters:p};const g=(0,l.MT)({modules:{user:b}});var v=g,P=t(2201),y=t(6565);const A=[{path:"/",name:"Welcome",component:()=>Promise.all([t.e(658),t.e(807)]).then(t.bind(t,5807))},{path:"/signup",name:"Signup",component:()=>Promise.all([t.e(658),t.e(587),t.e(198)]).then(t.bind(t,6198))},{path:"/login",name:"Login",component:()=>Promise.all([t.e(658),t.e(587),t.e(698)]).then(t.bind(t,6698))},{path:"/introduce",name:"Introduce",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(270)]).then(t.bind(t,3943))},{path:"/environment",name:"Environment",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(930),t.e(801),t.e(235)]).then(t.bind(t,7108))},{path:"/procedure",name:"Procedure",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(801),t.e(272)]).then(t.bind(t,4221))},{path:"/menu",name:"MenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(191)]).then(t.bind(t,3098))},{path:"/course-menu",name:"CourseMenu",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(231)]).then(t.bind(t,4804))},{path:"/html-lesson-menu",name:"HtmlMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(630)]).then(t.bind(t,2281))},{path:"/html-lesson-1",name:"HtmlPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(930),t.e(801),t.e(333)]).then(t.bind(t,9356))},{path:"/html-lesson-2",name:"HtmlPage2",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(930),t.e(801),t.e(742)]).then(t.bind(t,594))},{path:"/html-lesson-3",name:"HtmlPage3",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(930),t.e(801),t.e(378)]).then(t.bind(t,6519))},{path:"/commandline-lesson-menu",name:"CommandLineMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(426)]).then(t.bind(t,7920))},{path:"/commandline-lesson-1",name:"CommandLinePage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(930),t.e(115)]).then(t.bind(t,7077))},{path:"/Git-lesson-menu",name:"GitMenuPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(44)]).then(t.bind(t,7496))},{path:"/Git-lesson-1",name:"GitPage1",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(930),t.e(184)]).then(t.bind(t,8792))},{path:"/Git-lesson-2",name:"GitPage2",meta:{requiresAuth:!0},component:()=>t.e(954).then(t.bind(t,4954))},{path:"/Git-lesson-3",name:"GitPage3",meta:{requiresAuth:!0},component:()=>t.e(805).then(t.bind(t,6805))},{path:"/mypage",name:"MyPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(186)]).then(t.bind(t,9746))},{path:"/edit",name:"EditPage",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(587),t.e(427)]).then(t.bind(t,7695))},{path:"/contact",name:"Contact",meta:{requiresAuth:!0},component:()=>Promise.all([t.e(658),t.e(382)]).then(t.bind(t,2512))},{path:"/underConstruction",name:"UnderConstruction",component:()=>Promise.all([t.e(658),t.e(93)]).then(t.bind(t,1351))}],w=(0,P.p7)({history:(0,P.PO)("/grow-curriculum/"),routes:A});function k(e){const n=`; ${document.cookie}`,t=n.split(`; ${e}=`);if(2===t.length)return t.pop().split(";").shift()}w.beforeEach((async(e,n,t)=>{if(e.meta.requiresAuth)try{const e=k("access-token"),n=k("client"),r=decodeURIComponent(k("uid"));if(e&&n&&r){const o=await y.Z.get("/auth/validate_token",{headers:{"access-token":e,client:n,uid:r}});200===o.status?(v.commit("setUser",o.data.data),v.state.user.loginData||t({name:"Login"}),t()):t({name:"Login"})}else t({name:"Login"})}catch(r){console.error(r),t({name:"Login"})}else t()}));var q=w;(0,r.ri)(m).use(v).use(q).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(m=0;m<e.length;m++){r=e[m][0],o=e[m][1],a=e[m][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(m--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{44:"c1d36820",93:"f30b0de5",115:"c21746eb",184:"9016c815",186:"60bf138c",191:"5a369886",198:"d19b30ad",231:"78ac2e2e",235:"8fcb6555",270:"c770cf71",272:"0d38758c",333:"8fb43509",378:"ade8ce70",382:"f4302476",426:"d4190787",427:"85b13f11",587:"9d6303fb",630:"0648c6fe",658:"ecd56158",698:"4967bebb",742:"3d85e1e8",801:"a3a2aaa1",805:"03c7bb0f",807:"67eb56cd",930:"2cd5b4a1",954:"fd3e330f"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{44:"9e919c5d",93:"6e5b3259",115:"1240ff94",184:"50925824",186:"8d3bcd04",191:"fba87873",198:"f223522b",231:"5e92bcda",235:"f633b2c5",270:"ff896f2f",272:"b5359a7f",333:"637bda5a",378:"4684a21d",382:"0a3bef84",426:"4ab2c8be",427:"48dd0303",630:"be62c54f",698:"c81fa83f",742:"b1cd3b23",807:"e6cc530a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="grow-curriculum:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),m=0;m<s.length;m++){var l=s[m];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={44:1,93:1,115:1,184:1,186:1,191:1,198:1,231:1,235:1,270:1,272:1,333:1,378:1,382:1,426:1,427:1,630:1,698:1,742:1,807:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var m=c(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(m)},r=self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7555)}));r=t.O(r)})();
//# sourceMappingURL=app.3964413c.js.map