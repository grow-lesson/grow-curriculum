"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[7452],{36382:function(e,l,n){n.d(l,{G:function(){return a}});const a={file1:{filename:"index.html",code:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <link rel="stylesheet" href="style.css" />\n    <title>Javascript-sample</title>\n  </head>\n  <body>\n    <script>\n        // JavaScriptコードをscriptタグの中記述します↓\n        // alertはポップアップでアラートを表示する処理です\n        alert(\'Hello, World!\');\n    <\/script>\n  </body>\n</html>',language:"language-html"},file2:{filename:"ターミナル(GitBash)",code:"node -v",language:"language-bash"},file3:{filename:"ターミナル(GitBash)",code:"cd ~",language:"language-bash"},file4:{filename:"ターミナル(GitBash)",code:"curl -L git.io/nodebrew | perl - setup",language:"language-bash"},file5:{filename:"ターミナル(GitBash)",code:"echo $SHELL",language:"language-bash"},file6:{filename:"ターミナル(GitBash)",code:"touch .zshrc",language:"language-bash"},file7:{filename:"ターミナル(GitBash)",code:"open ~/.zshrc~",language:"language-bash"},file8:{filename:"ターミナル(GitBash)",code:"export PATH=$HOME/.nodebrew/current/bin:$PATH;",language:"language-bash"},file9:{filename:"ターミナル(GitBash)",code:"source ~/.zshrc",language:"language-bash"},file10:{filename:"ターミナル(GitBash)",code:"touch .bash_profile~",language:"language-bash"},file11:{filename:"ターミナル(GitBash)",code:"open ~/.bash_profile",language:"language-bash"},file12:{filename:"ターミナル(GitBash)",code:"export PATH=$HOME/.nodebrew/current/bin:$PATH;",language:"language-bash"},file13:{filename:"ターミナル(GitBash)",code:"source ~/.bash_profile",language:"language-bash"},file14:{filename:"ターミナル(GitBash)",code:"nodebrew install-binary stable",language:"language-bash"},file15:{filename:"ターミナル(GitBash)",code:"nodebrew ls",language:"language-bash"},file16:{filename:"ターミナル(GitBash)",code:"nodebrew use v12.6.0",language:"language-bash"},file17:{filename:"ターミナル(GitBash)",code:"node -v",language:"language-bash"},file18:{filename:"javascript-lesson-1.js",code:'console.log("Hello Javascript!!");',language:"language-javascript"},file19:{filename:"ターミナル(GitBash)",code:"node javascript-lesson-1.js",language:"language-bash"}}},14332:function(e,l,n){n.d(l,{Z:function(){return g}});var a=n(66252),t=n(3577);const s={class:"highlighted"},i={class:"highlighted-word"};function u(e,l,n,u,r,o){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("p",i,(0,t.zw)(n.word),1)])}var r={props:{word:{type:String,required:!0}}},o=n(83744);const c=(0,o.Z)(r,[["render",u],["__scopeId","data-v-5f382e4a"]]);var g=c},20387:function(e,l,n){n.d(l,{Z:function(){return m}});var a=n(66252);const t=e=>((0,a.dD)("data-v-0f3acb8e"),e=e(),(0,a.Cn)(),e),s={class:"navigation-buttons"},i=t((()=>(0,a._)("span",{class:"arrow-left"},null,-1))),u=[i],r=t((()=>(0,a._)("span",{class:"arrow-right"},null,-1))),o=[r];function c(e,l,n,t,i,r){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("button",{onClick:l[0]||(l[0]=(...e)=>r.goToPrevious&&r.goToPrevious(...e))},u),(0,a._)("button",{onClick:l[1]||(l[1]=(...e)=>r.goToNext&&r.goToNext(...e))},o)])}n(57658);var g={props:{previousPageName:String,nextPageName:String},methods:{goToPrevious(){this.$router.push({name:this.previousPageName})},goToNext(){this.$router.push({name:this.nextPageName})}}},p=n(83744);const d=(0,p.Z)(g,[["render",c],["__scopeId","data-v-0f3acb8e"]]);var m=d},67775:function(e,l,n){n.d(l,{Z:function(){return g}});var a=n(66252),t=n(3577);const s={class:"section-title"},i={class:"section-title-word"};function u(e,l,n,u,r,o){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("h2",i,(0,t.zw)(n.sectionTitle),1)])}var r={props:{sectionTitle:{type:String,required:!0}}},o=n(83744);const c=(0,o.Z)(r,[["render",u],["__scopeId","data-v-e464688c"]]);var g=c},6255:function(e,l,n){n.r(l),n.d(l,{default:function(){return de}});var a=n(66252);const t=e=>((0,a.dD)("data-v-66120895"),e=e(),(0,a.Cn)(),e),s={class:"container"},i={class:"main-content"},u=t((()=>(0,a._)("p",null,"配列について学びましょう。",-1))),r=t((()=>(0,a._)("br",null,null,-1))),o=t((()=>(0,a._)("br",null,null,-1))),c=t((()=>(0,a._)("br",null,null,-1))),g=t((()=>(0,a._)("br",null,null,-1))),p=t((()=>(0,a._)("br",null,null,-1))),d=["src"],m=t((()=>(0,a._)("br",null,null,-1))),h=t((()=>(0,a._)("br",null,null,-1))),b=t((()=>(0,a._)("p",null,[(0,a.Uk)(" 配列の作成方法を覚えましょう。"),(0,a._)("br"),(0,a.Uk)(" JavaScriptの配列は、[]内にカンマで区切られた要素を記述して作成します。"),(0,a._)("br")],-1))),_=t((()=>(0,a._)("br",null,null,-1))),f=["src"],v=t((()=>(0,a._)("br",null,null,-1))),w=t((()=>(0,a._)("br",null,null,-1))),P=t((()=>(0,a._)("p",null,[(0,a.Uk)(" 配列の要素へのアクセス方法を覚えましょう。"),(0,a._)("br"),(0,a.Uk)(" 配列の要素には、インデックスを使用してアクセスします。 ")],-1))),k=t((()=>(0,a._)("br",null,null,-1))),T=["src"],B=t((()=>(0,a._)("br",null,null,-1))),C=t((()=>(0,a._)("br",null,null,-1))),G=t((()=>(0,a._)("p",null,[(0,a.Uk)(" 配列の要素の数を取得する方法を覚えましょう。"),(0,a._)("br"),(0,a.Uk)(" 配列の要素数は"),(0,a._)("span",{class:"markup-word-blue"},"length"),(0,a.Uk)("プロパティで取得できます ")],-1))),M=t((()=>(0,a._)("br",null,null,-1))),x=["src"],U=t((()=>(0,a._)("br",null,null,-1))),Z=t((()=>(0,a._)("br",null,null,-1))),H=t((()=>(0,a._)("p",null,[(0,a.Uk)(" 配列の要素の追加・変更・削除する方法を覚えましょう。"),(0,a._)("br"),(0,a.Uk)(" 配列の要素は、インデックスを指定して追加・変更・削除できます。"),(0,a._)("br")],-1))),W=t((()=>(0,a._)("br",null,null,-1))),S=["src"],y=t((()=>(0,a._)("br",null,null,-1))),I=t((()=>(0,a._)("br",null,null,-1))),N=t((()=>(0,a._)("br",null,null,-1))),D=t((()=>(0,a._)("br",null,null,-1))),J=t((()=>(0,a._)("br",null,null,-1))),j=["src"],O=t((()=>(0,a._)("br",null,null,-1))),$=t((()=>(0,a._)("br",null,null,-1))),z=t((()=>(0,a._)("p",null,[(0,a.Uk)(" JavaScriptの配列は多くの組み込みメソッドを持っており、これらを使用して配列を操作できます。"),(0,a._)("br"),(0,a.Uk)(" 代表的なメソッドには"),(0,a._)("span",{class:"markup-word-blue"},"push、pop、shift、unshift、splice、concat、join、slice"),(0,a.Uk)("などがあります。 ")],-1))),A=t((()=>(0,a._)("br",null,null,-1))),E=["src"],q=t((()=>(0,a._)("br",null,null,-1))),F=t((()=>(0,a._)("br",null,null,-1))),L=["src"],X=t((()=>(0,a._)("br",null,null,-1))),Y=t((()=>(0,a._)("br",null,null,-1))),K={class:"side-content"};function Q(e,l,n,t,Q,R){const V=(0,a.up)("Header"),ee=(0,a.up)("Title"),le=(0,a.up)("Document"),ne=(0,a.up)("SubTitle"),ae=(0,a.up)("SectionTitle"),te=(0,a.up)("HighlightWord"),se=(0,a.up)("NavigationButtons"),ie=(0,a.up)("Modal"),ue=(0,a.up)("TableOfContents"),re=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(V),(0,a._)("div",s,[(0,a._)("div",i,[(0,a.Wm)(ee,{title:"Javascript 3",id:"Title"}),(0,a.Wm)(le,null,{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(ne,{subTitle:"1. 配列について学ぶ",id:"subTitle1"}),(0,a.Wm)(le,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ae,{sectionTitle:"1-1. 配列",id:"sectionTitle1-1"}),(0,a._)("p",null,[(0,a.Wm)(te,{word:"配列"}),r,(0,a.Uk)(" 配列は、複数の値を一つの変数に格納するデータ構造で、それぞれの値には0から始まる番号（インデックス）が割り当てられます。"),o,c,(0,a.Uk)(" では配列がどういったものか以下の画像で学びましょう。"),g]),p,(0,a._)("div",null,[(0,a._)("img",{onClick:l[0]||(l[0]=e=>t.openModal(t.imagePaths.arrayImage)),src:t.imagePaths.arrayImage,class:"powerpoint-image",alt:"array"},null,8,d)]),m,h,b,_,(0,a._)("div",null,[(0,a._)("img",{onClick:l[1]||(l[1]=e=>t.openModal(t.imagePaths.step1)),src:t.imagePaths.step1,class:"screen-image",alt:"result-1"},null,8,f)]),v,w,P,k,(0,a._)("div",null,[(0,a._)("img",{onClick:l[2]||(l[2]=e=>t.openModal(t.imagePaths.step2)),src:t.imagePaths.step2,class:"screen-image",alt:"result-2"},null,8,T)]),B,C,G,M,(0,a._)("div",null,[(0,a._)("img",{onClick:l[3]||(l[3]=e=>t.openModal(t.imagePaths.step3)),src:t.imagePaths.step3,class:"screen-image",alt:"result-3"},null,8,x)]),U,Z,H,W,(0,a._)("div",null,[(0,a._)("img",{onClick:l[4]||(l[4]=e=>t.openModal(t.imagePaths.step4)),src:t.imagePaths.step4,class:"screen-image",alt:"result-4"},null,8,S)]),y,I,(0,a._)("p",null,[(0,a.Wm)(te,{word:"多次元配列 "}),N,(0,a.Uk)(" 配列の中に別の配列を要素として持つことで、多次元配列を作成できます。"),D]),J,(0,a._)("div",null,[(0,a._)("img",{onClick:l[5]||(l[5]=e=>t.openModal(t.imagePaths.step5)),src:t.imagePaths.step5,class:"screen-image",alt:"result-5"},null,8,j)]),O,$,z,A,(0,a._)("div",null,[(0,a._)("img",{onClick:l[6]||(l[6]=e=>t.openModal(t.imagePaths.step6)),src:t.imagePaths.step6,class:"screen-image",alt:"result-6"},null,8,E)]),q,F,(0,a._)("div",null,[(0,a._)("img",{onClick:l[7]||(l[7]=e=>t.openModal(t.imagePaths.step7)),src:t.imagePaths.step7,class:"screen-image",alt:"result-7"},null,8,L)]),X,Y,(0,a.Wm)(se,{previousPageName:"JavascriptPage2",nextPageName:"JavascriptPage4"})])),_:1}),(0,a.Wm)(ie,{selectedImage:t.selectedImage,showModal:t.isModalOpen,onCloseModal:l[8]||(l[8]=e=>t.isModalOpen=!1)},null,8,["selectedImage","showModal"])]),(0,a._)("div",K,[(0,a.Wm)(ue,{sections:t.sections},null,8,["sections"])])]),(0,a.Wm)(re)])}var R=n(2262),V=n(76780),ee=n(66187),le=n(44216),ne=n(1755),ae=n(67775),te=n(14332),se=n(11593),ie=n(81942),ue=n(36382),re=n(14534),oe=n(20387),ce={name:"JavaScript3",components:{Header:V.Z,Footer:ee.Z,Title:le.Z,SubTitle:ne.Z,SectionTitle:ae.Z,HighlightWord:te.Z,Document:se.Z,TableOfContents:ie.Z,Modal:re.Z,NavigationButtons:oe.Z},setup(){const e=[{id:"Title",title:"Javascript 3"},{id:"subTitle1",title:"  1. 配列について学ぶ"},{id:"sectionTitle1-1",title:"    1-1. 配列"}];(0,a.bv)((()=>{window.scrollTo(0,0)}));const l={arrayImage:n(78838),step1:n(60296),step2:n(39496),step3:n(85477),step4:n(17729),step5:n(72543),step6:n(1668),step7:n(48198)},t=(0,R.iH)(!1),s=(0,R.iH)(),i=e=>{t.value=!0,s.value=e};return{javascriptData:ue.G,sections:e,imagePaths:l,selectedImage:s,isModalOpen:t,openModal:i}}},ge=n(83744);const pe=(0,ge.Z)(ce,[["render",Q],["__scopeId","data-v-66120895"]]);var de=pe},78838:function(e,l,n){e.exports=n.p+"img/array.53d6b568.png"},60296:function(e,l,n){e.exports=n.p+"img/result-1.808260cf.png"},39496:function(e,l,n){e.exports=n.p+"img/result-2.62cb3819.png"},85477:function(e,l,n){e.exports=n.p+"img/result-3.ba8c90ba.png"},17729:function(e,l,n){e.exports=n.p+"img/result-4.c631385e.png"},72543:function(e,l,n){e.exports=n.p+"img/result-5.3b5eed62.png"},1668:function(e,l,n){e.exports=n.p+"img/result-6.b0bcf67e.png"},48198:function(e,l,n){e.exports=n.p+"img/result-7.20b0d510.png"}}]);
//# sourceMappingURL=7452.ec5faa1a.js.map