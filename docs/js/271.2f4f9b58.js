"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[271],{11593:function(o,e,n){n.d(e,{Z:function(){return d}});var a=n(66252);const l={class:"fancy-document"},t={class:"content"};function s(o,e){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",t,[(0,a.WI)(o.$slots,"default",{},void 0,!0)])])}var i=n(83744);const c={},r=(0,i.Z)(c,[["render",s],["__scopeId","data-v-0db712d1"]]);var d=r},1755:function(o,e,n){n.d(e,{Z:function(){return u}});var a=n(66252),l=n(3577);const t={class:"sub-title"},s={class:"sub-title-word"};function i(o,e,n,i,c,r){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a._)("h2",s,(0,l.zw)(n.subTitle),1)])}var c={props:{subTitle:{type:String,required:!0}}},r=n(83744);const d=(0,r.Z)(c,[["render",i],["__scopeId","data-v-8bd94480"]]);var u=d},81942:function(o,e,n){n.d(e,{Z:function(){return w}});var a=n(66252),l=n(3577);const t=o=>((0,a.dD)("data-v-b9b6cf40"),o=o(),(0,a.Cn)(),o),s={class:"sidebar"},i=t((()=>(0,a._)("div",{class:"arrow-up"},null,-1))),c=[i],r={class:"sidebar-contents"},d={class:"menu"},u=["onClick"];function g(o,e,n,t,i,g){const p=(0,a.up)("SubTitle");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("button",{class:"sidebar-button",onClick:e[0]||(e[0]=(...o)=>g.scrollToTop&&g.scrollToTop(...o))},c),(0,a._)("div",r,[(0,a.Wm)(p,{subTitle:"目次"}),(0,a._)("ul",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.sections,((o,e)=>((0,a.wg)(),(0,a.iD)("li",{class:"menu-item",key:e,onClick:e=>g.scrollToSection(o.id)},(0,l.zw)(o.title),9,u)))),128))])])])}var p=n(1755),_={components:{SubTitle:p.Z},props:{sections:{type:Array,required:!0}},methods:{scrollToSection(o){const e=document.getElementById(o);e&&e.scrollIntoView({behavior:"smooth"})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},m=n(83744);const v=(0,m.Z)(_,[["render",g],["__scopeId","data-v-b9b6cf40"]]);var w=v},44216:function(o,e,n){n.d(e,{Z:function(){return u}});var a=n(66252),l=n(3577);const t={class:"main-title"},s={class:"main-title-word"};function i(o,e,n,i,c,r){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a._)("h1",s,(0,l.zw)(n.title),1)])}var c={props:{title:{type:String,required:!0}}},r=n(83744);const d=(0,r.Z)(c,[["render",i],["__scopeId","data-v-76e3de07"]]);var u=d},14534:function(o,e,n){n.d(e,{Z:function(){return g}});var a=n(66252),l=n(3577),t=n(49963);const s=["src"];function i(o,e,n,i,c,r){return n.showModal?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"modal",onWheel:e[4]||(e[4]=(...o)=>i.handleWheel&&i.handleWheel(...o)),onClick:e[5]||(e[5]=(...o)=>i.closeModalOutside&&i.closeModalOutside(...o))},[(0,a._)("div",{class:"image-container",onMousedown:e[1]||(e[1]=(...o)=>i.startDrag&&i.startDrag(...o)),onMousemove:e[2]||(e[2]=(...o)=>i.handleDrag&&i.handleDrag(...o)),onMouseup:e[3]||(e[3]=(...o)=>i.endDrag&&i.endDrag(...o)),ref:"imageContainer"},[(0,a._)("img",{src:n.selectedImage,alt:"モーダル画像",class:"modal-image",style:(0,l.j5)(i.imageStyle),onClick:e[0]||(e[0]=(0,t.iM)((()=>{}),["stop"])),draggable:"false"},null,12,s)],544)],32)):(0,a.kq)("",!0)}var c=n(2262),r={props:{showModal:Boolean,selectedImage:String},setup(o,{emit:e}){const n=(0,c.iH)(1),l=3,t=.9,s=(0,c.iH)(0),i=(0,c.iH)(0),r=(0,c.iH)(!1),d=(0,c.iH)(0),u=(0,c.iH)(0),g=(0,c.iH)(0),p=(0,c.iH)(0),_=(0,c.iH)(null),m=(0,a.Fl)((()=>({transform:`scale(${n.value})`,transition:"transform 0.2s ease",transformOrigin:"top left"}))),v=(0,a.Fl)((()=>({width:`calc(100% / ${n.value})`,height:`calc(100% / ${n.value})`,cursor:r.value?"grabbing":"grab"}))),w=o=>{o.target.classList.contains("modal")&&b()},b=()=>{e("closeModal")},h=o=>{const e=_.value;if(!e)return;const a=e.getBoundingClientRect(),s=o.clientX-a.left,i=o.clientY-a.top,c=n.value,r=s+e.scrollLeft,d=i+e.scrollTop,u=o.deltaY>0?.9:1.1,g=c*u;n.value=Math.max(t,Math.min(l,g));const p=n.value/c;e.scrollLeft=r*p-s,e.scrollTop=d*p-i,o.preventDefault()},f=o=>{s.value=o.clientX,i.value=o.clientY},T=o=>{r.value=!0,d.value=o.clientX,u.value=o.clientY,g.value=_.value.scrollLeft,p.value=_.value.scrollTop,document.body.style.cursor="grabbing",document.addEventListener("mousemove",k),document.addEventListener("mouseup",P)},k=o=>{if(r.value){const e=o.clientX-d.value,n=o.clientY-u.value;_.value.scrollLeft=g.value-e,_.value.scrollTop=p.value-n}},P=()=>{r.value=!1,document.body.style.cursor="default",document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",P)};return{imageScale:n,imageStyle:m,imageContainerStyle:v,closeModalOutside:w,closeModal:b,handleWheel:h,handleMouseMove:f,startDrag:T,handleDrag:k,endDrag:P,imageContainer:_}}},d=n(83744);const u=(0,d.Z)(r,[["render",i],["__scopeId","data-v-b629a9b0"]]);var g=u},66187:function(o,e,n){n.d(e,{Z:function(){return g}});var a=n(66252);const l=o=>((0,a.dD)("data-v-37f373b4"),o=o(),(0,a.Cn)(),o),t={class:"footer"},s=l((()=>(0,a._)("p",{class:"footer-text"},"© 2023 GROW 学習サイト. All rights reserved.",-1))),i=[s];function c(o,e,n,l,s,c){return(0,a.wg)(),(0,a.iD)("footer",t,i)}var r={name:"Footer"},d=n(83744);const u=(0,d.Z)(r,[["render",c],["__scopeId","data-v-37f373b4"]]);var g=u},76780:function(o,e,n){n.d(e,{Z:function(){return wo}});var a=n(66252),l=n(49963),t=n(3577),s=n.p+"img/logo.de0df272.png";const i=o=>((0,a.dD)("data-v-5267632a"),o=o(),(0,a.Cn)(),o),c={class:"header"},r={class:"header-wrapper"},d={class:"logo"},u=i((()=>(0,a._)("img",{src:s,alt:"GROWロゴ",class:"logo-image"},null,-1))),g=[u],p={class:"header-title"},_={class:"navigation-wrap"},m={class:"navigation-list"},v={class:"navigation-item"},w={class:"navigation-item"},b=i((()=>(0,a._)("button",{class:"navigation-btn"},"準備と提出",-1))),h={class:"dropdown-list"},f={class:"dropdown-item"},T={class:"dropdown-item"},k={class:"dropdown-item"},P={class:"dropdown-item"},C={class:"navigation-item"},M={class:"navigation-item"},y=i((()=>(0,a._)("button",{class:"navigation-btn"},"マイページ",-1))),H={class:"dropdown-list"},F={class:"dropdown-item"},S=i((()=>(0,a._)("li",{class:"dropdown-item"},[(0,a._)("a",{href:"https://id.moneyforward.com/sign_in?client_id=8gQSNxOMhkM554G5OsbOAoesxrBbkdHfuESOGQ9uR1A&code_challenge=VbLqCHgXpFVqteT1FyLu653hpER4m_AW4KHRhpi9kiI&code_challenge_method=S256&nonce=a5c23fc9a62f11793fc481687ab3b14f&redirect_uri=https%3A%2F%2Ferp.moneyforward.com%3A443%2Fusers%2Fauth%2Fmfid%2Fcallback&response_type=code&scope=openid+email&state=182f662a45a785492f130fc5323c5a4e",target:"_blank",class:"dropdown-link"},"給与の確認")],-1))),D={class:"navigation-item"},I=i((()=>(0,a._)("button",{class:"navigation-btn"},"その他",-1))),E={class:"dropdown-list"},L={class:"dropdown-item"},O=i((()=>(0,a._)("li",{class:"dropdown-item"},[(0,a._)("a",{href:"https://grow-infotech.com",target:"_blank",class:"dropdown-link"},"会社のホームページを見る")],-1))),W=i((()=>(0,a._)("li",{class:"dropdown-item"},[(0,a._)("a",{href:"https://www.wantedly.com/companies/company_7305723",target:"_blank",class:"dropdown-link"},"Wantedllyを見る")],-1))),Z=i((()=>(0,a._)("span",null,null,-1))),A=i((()=>(0,a._)("span",null,null,-1))),R=i((()=>(0,a._)("span",null,null,-1))),q=[Z,A,R],G=i((()=>(0,a._)("span",{class:"close-button__line"},null,-1))),x=i((()=>(0,a._)("span",{class:"close-button__line"},null,-1))),X=[G,x],Y={class:"menu-list"},z={class:"menu-item"},B={class:"menu-item"},U=i((()=>(0,a._)("button",null,"準備と提出",-1))),V={class:"dropdown-list"},Q={class:"dropdown-item"},$={class:"dropdown-item"},K={class:"dropdown-item"},N={class:"dropdown-item"},j={class:"menu-item"},J={class:"menu-item"},oo=i((()=>(0,a._)("button",null,"マイページ",-1))),eo={class:"dropdown-list"},no={class:"dropdown-item"},ao=i((()=>(0,a._)("li",{class:"dropdown-item"},[(0,a._)("a",{href:"https://id.moneyforward.com/sign_in?client_id=8gQSNxOMhkM554G5OsbOAoesxrBbkdHfuESOGQ9uR1A&code_challenge=VbLqCHgXpFVqteT1FyLu653hpER4m_AW4KHRhpi9kiI&code_challenge_method=S256&nonce=a5c23fc9a62f11793fc481687ab3b14f&redirect_uri=https%3A%2F%2Ferp.moneyforward.com%3A443%2Fusers%2Fauth%2Fmfid%2Fcallback&response_type=code&scope=openid+email&state=182f662a45a785492f130fc5323c5a4e",target:"_blank",class:"dropdown-link"},"給与の確認")],-1))),lo={class:"menu-item"},to=i((()=>(0,a._)("button",null,"その他",-1))),so={class:"dropdown-list"},io={class:"dropdown-item"},co=i((()=>(0,a._)("li",{class:"dropdown-item"},[(0,a._)("a",{href:"https://grow-infotech.com",target:"_blank",class:"dropdown-link"},"会社のホームページを見る")],-1))),ro=i((()=>(0,a._)("li",{class:"dropdown-item"},[(0,a._)("a",{href:"https://www.wantedly.com/companies/company_7305723",target:"_blank",class:"dropdown-link"},"Wantedllyを見る")],-1)));function uo(o,e,n,s,i,u){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("header",c,[(0,a._)("div",r,[(0,a.wy)((0,a._)("div",d,[(0,a._)("a",{onClick:e[0]||(e[0]=(...o)=>s.goToMenuPage&&s.goToMenuPage(...o))},g)],512),[[l.F8,s.isMobile]]),(0,a.wy)((0,a._)("p",p,[(0,a._)("a",{onClick:e[1]||(e[1]=(...o)=>s.goToMenuPage&&s.goToMenuPage(...o))},"GROW Learning Website")],512),[[l.F8,!s.isMobile]]),(0,a.wy)((0,a._)("div",_,[(0,a._)("ul",m,[(0,a._)("li",v,[(0,a._)("button",{class:"navigation-btn",onClick:e[2]||(e[2]=(...o)=>s.goToIntroducePage&&s.goToIntroducePage(...o))},"サイトについて")]),(0,a._)("li",w,[b,(0,a._)("ul",h,[(0,a._)("li",f,[(0,a._)("a",{onClick:e[3]||(e[3]=(...o)=>s.goToHowToPage&&s.goToHowToPage(...o)),class:"dropdown-link"},"サイトの使い方")]),(0,a._)("li",T,[(0,a._)("a",{onClick:e[4]||(e[4]=(...o)=>s.goToSetUPPage&&s.goToSetUPPage(...o)),class:"dropdown-link"},"PCの設定・使い方")]),(0,a._)("li",k,[(0,a._)("a",{onClick:e[5]||(e[5]=(...o)=>s.goToEnvironmentPage&&s.goToEnvironmentPage(...o)),class:"dropdown-link"},"環境構築やインストール")]),(0,a._)("li",P,[(0,a._)("a",{onClick:e[6]||(e[6]=(...o)=>s.goToProcedurePage&&s.goToProcedurePage(...o)),class:"dropdown-link"},"カリキュラムの始め方")])])]),(0,a._)("li",C,[(0,a._)("button",{class:"navigation-btn",onClick:e[7]||(e[7]=(...o)=>s.goToCourseMenuPage&&s.goToCourseMenuPage(...o))},"コース一覧")]),(0,a._)("li",M,[y,(0,a._)("ul",H,[(0,a._)("li",F,[(0,a._)("a",{onClick:e[8]||(e[8]=(...o)=>s.goToMyPage&&s.goToMyPage(...o)),class:"dropdown-link"},"プロフィール")]),S])]),(0,a._)("li",D,[I,(0,a._)("ul",E,[(0,a._)("li",L,[(0,a._)("a",{onClick:e[9]||(e[9]=(...o)=>s.goToContactPage&&s.goToContactPage(...o)),class:"dropdown-link"},"お問い合わせ")]),O,W])])])],512),[[l.F8,!s.isMobile]]),(0,a.wy)((0,a._)("button",{class:"hamburger-button",onClick:e[10]||(e[10]=(...o)=>s.toggleMenu&&s.toggleMenu(...o))},q,512),[[l.F8,s.isMobile]])])]),(0,a._)("div",{class:(0,t.C_)(["menu",{"show-menu":s.showMenu}])},[(0,a._)("button",{class:"close-button",onClick:e[11]||(e[11]=(...o)=>s.toggleMenu&&s.toggleMenu(...o))},X),(0,a._)("ul",Y,[(0,a._)("li",z,[(0,a._)("button",{onClick:e[12]||(e[12]=(...o)=>s.goToIntroducePage&&s.goToIntroducePage(...o))},"サイトについて")]),(0,a._)("li",B,[U,(0,a._)("ul",V,[(0,a._)("li",Q,[(0,a._)("a",{onClick:e[13]||(e[13]=(...o)=>s.goToHowToPage&&s.goToHowToPage(...o)),class:"dropdown-link"},"サイトの使い方")]),(0,a._)("li",$,[(0,a._)("a",{onClick:e[14]||(e[14]=(...o)=>s.goToSetUPPage&&s.goToSetUPPage(...o)),class:"dropdown-link"},"PCの設定・使い方")]),(0,a._)("li",K,[(0,a._)("a",{onClick:e[15]||(e[15]=(...o)=>s.goToEnvironmentPage&&s.goToEnvironmentPage(...o)),class:"dropdown-link"},"環境構築やインストール")]),(0,a._)("li",N,[(0,a._)("a",{onClick:e[16]||(e[16]=(...o)=>s.goToProcedurePage&&s.goToProcedurePage(...o)),class:"dropdown-link"},"カリキュラムの始め方")])])]),(0,a._)("li",j,[(0,a._)("button",{onClick:e[17]||(e[17]=(...o)=>s.goToCourseMenuPage&&s.goToCourseMenuPage(...o))},"コース一覧")]),(0,a._)("li",J,[oo,(0,a._)("ul",eo,[(0,a._)("li",no,[(0,a._)("a",{onClick:e[18]||(e[18]=(...o)=>s.goToMyPage&&s.goToMyPage(...o)),class:"dropdown-link"},"プロフィール")]),ao])]),(0,a._)("li",lo,[to,(0,a._)("ul",so,[(0,a._)("li",io,[(0,a._)("a",{onClick:e[19]||(e[19]=(...o)=>s.goToContactPage&&s.goToContactPage(...o)),class:"dropdown-link"},"お問い合わせ")]),co,ro])])])],2)])}n(57658);var go=n(2262),po=n(22201),_o={setup(){const o=(0,go.iH)(!1),e=(0,go.iH)(!1),n=(0,po.tv)(),l=()=>{o.value=window.innerWidth<=834},t=()=>{e.value=!e.value},s=()=>{n.push({name:"MenuPage"})},i=()=>{n.push({name:"Setup"})},c=()=>{n.push({name:"HowTo"})},r=()=>{n.push({name:"Introduce"})},d=()=>{n.push({name:"Environment"})},u=()=>{n.push({name:"Procedure"})},g=()=>{n.push({name:"CourseMenu"})},p=()=>{n.push({name:"MyPage"})},_=()=>{n.push({name:"Progress"})},m=()=>{n.push({name:"ReservationCalendar"})},v=()=>{n.push({name:"Contact"})},w=()=>{l()};return(0,a.bv)((()=>{l(),window.addEventListener("resize",w)})),(0,a.Ah)((()=>{window.removeEventListener("resize",w)})),{isMobile:o,showMenu:e,toggleMenu:t,goToMenuPage:s,goToIntroducePage:r,goToSetUPPage:i,goToHowToPage:c,goToEnvironmentPage:d,goToProcedurePage:u,goToCourseMenuPage:g,goToMyPage:p,goToProgressPage:_,goToReservationCalendarPage:m,goToContactPage:v}}},mo=n(83744);const vo=(0,mo.Z)(_o,[["render",uo],["__scopeId","data-v-5267632a"]]);var wo=vo}}]);
//# sourceMappingURL=271.2f4f9b58.js.map