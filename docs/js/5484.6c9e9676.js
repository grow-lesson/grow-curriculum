"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[5484],{20387:function(l,e,n){n.d(e,{Z:function(){return g}});var a=n(66252);const t=l=>((0,a.dD)("data-v-0f3acb8e"),l=l(),(0,a.Cn)(),l),u={class:"navigation-buttons"},o=t((()=>(0,a._)("span",{class:"arrow-left"},null,-1))),i=[o],r=t((()=>(0,a._)("span",{class:"arrow-right"},null,-1))),s=[r];function c(l,e,n,t,o,r){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("button",{onClick:e[0]||(e[0]=(...l)=>r.goToPrevious&&r.goToPrevious(...l))},i),(0,a._)("button",{onClick:e[1]||(e[1]=(...l)=>r.goToNext&&r.goToNext(...l))},s)])}n(57658);var d={props:{previousPageName:String,nextPageName:String},methods:{goToPrevious(){this.$router.push({name:this.previousPageName})},goToNext(){this.$router.push({name:this.nextPageName})}}},_=n(83744);const m=(0,_.Z)(d,[["render",c],["__scopeId","data-v-0f3acb8e"]]);var g=m},40713:function(l,e,n){n.r(e),n.d(e,{default:function(){return Y}});var a=n(66252);const t=l=>((0,a.dD)("data-v-6008b39e"),l=l(),(0,a.Cn)(),l),u={class:"container"},o={class:"main-content"},i=t((()=>(0,a._)("p",null,"モーダルの実装について学びましょう。",-1))),r=t((()=>(0,a._)("br",null,null,-1))),s=t((()=>(0,a._)("br",null,null,-1))),c=t((()=>(0,a._)("br",null,null,-1))),d=t((()=>(0,a._)("br",null,null,-1))),_=t((()=>(0,a._)("br",null,null,-1))),m=t((()=>(0,a._)("br",null,null,-1))),g=t((()=>(0,a._)("br",null,null,-1))),p=t((()=>(0,a._)("br",null,null,-1))),f=t((()=>(0,a._)("br",null,null,-1))),b=t((()=>(0,a._)("br",null,null,-1))),T=t((()=>(0,a._)("br",null,null,-1))),v=t((()=>(0,a._)("br",null,null,-1))),h=["src"],k=t((()=>(0,a._)("br",null,null,-1))),w=t((()=>(0,a._)("br",null,null,-1))),W=t((()=>(0,a._)("br",null,null,-1))),x=t((()=>(0,a._)("br",null,null,-1))),N=t((()=>(0,a._)("br",null,null,-1))),P=t((()=>(0,a._)("br",null,null,-1))),U=["src"],y=t((()=>(0,a._)("br",null,null,-1))),D=t((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" まずは、初期設定と変数の定義を行います。"),(0,a._)("br"),(0,a.Uk)(" (1)モーダル表示ボタンの要素を取得してください (変数名: $modalShow)"),(0,a._)("br"),(0,a.Uk)(" (2)モーダルの要素を取得してください (変数名: $modal)"),(0,a._)("br"),(0,a.Uk)(" (3)モーダル閉じるボタンの要素を取得してください (変数名: $modalClose)"),(0,a._)("br")],-1))),j=t((()=>(0,a._)("br",null,null,-1))),Z=t((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" ここまでできたらモーダル表示ボタンのクリックイベントを設定してください"),(0,a._)("br"),(0,a.Uk)(" (1)モーダルをフェードインしてください"),(0,a._)("br")],-1))),q=t((()=>(0,a._)("br",null,null,-1))),C=t((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" ここまでできたらモーダル閉じるボタンのクリックイベントを設定してください"),(0,a._)("br"),(0,a.Uk)(" (1)モーダルをフェードアウトしてください"),(0,a._)("br")],-1))),$=t((()=>(0,a._)("br",null,null,-1))),M={class:"side-content"};function I(l,e,n,t,I,S){const H=(0,a.up)("Header"),O=(0,a.up)("Title"),J=(0,a.up)("Document"),Q=(0,a.up)("SubTitle"),B=(0,a.up)("SectionTitle"),F=(0,a.up)("HighlightWord"),z=(0,a.up)("Terminal"),A=(0,a.up)("NavigationButtons"),E=(0,a.up)("Modal"),G=(0,a.up)("TableOfContents"),K=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(H),(0,a._)("div",u,[(0,a._)("div",o,[(0,a.Wm)(O,{title:"JQuery 3",id:"Title"}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(Q,{subTitle:"1. モーダルの実装",id:"subTitle1"}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B,{sectionTitle:"1-1. カリキュラムでの考え方やヒント",id:"sectionTitle1-1"}),(0,a.Wm)(F,{word:"※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"}),(0,a._)("p",null,[(0,a.Uk)(" このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう"),r,s,(0,a.Uk)(" 1: 初期設定と変数の定義を決める"),c,(0,a.Uk)(" 2: モーダル表示ボタンのクリックイベントを設定"),d,(0,a.Uk)(" 3: モーダル閉じるボタンのクリックイベントを設定"),_,m,(0,a.Uk)(" ふわっと表示させるようなメソッドもjQuery1で実装した「fadeOut()」メソッドと同じような記述で作ることができます。"),g,(0,a.Wm)(F,{word:"fadeIn()"}),p,(0,a.Uk)(" ふわっと指定された時間をかけて要素を表示させるには「fadeIn()」メソッドを使います。"),f,(0,a.Uk)(" ・指定された時間で要素を表示させる"),b,(0,a.Wm)(F,{word:"対象要素.fadeIn(時間)"}),T]),v,(0,a._)("img",{onClick:e[0]||(e[0]=l=>t.openModal(t.imagePaths.step1)),src:t.imagePaths.step1,alt:"tag-1",class:"powerpoint-image"},null,8,h),k,(0,a._)("p",null,[(0,a.Wm)(F,{word:"fadeTo()"}),w,(0,a.Uk)(" ふわっと指定された時間をかけて要素の透明度を変更させるには「fadeTo()」メソッドを使います。"),W,(0,a.Uk)(" ・指定された時間で要素の透明度を変更する"),x,(0,a.Wm)(F,{word:"対象要素.fadeTo(時間,透明度)"}),N]),P,(0,a._)("img",{onClick:e[1]||(e[1]=l=>t.openModal(t.imagePaths.step2)),src:t.imagePaths.step2,alt:"tag-2",class:"powerpoint-image"},null,8,U),y,D,j,(0,a.Wm)(z,{fileName:t.jqueryData.file1.filename,copiedText:t.jqueryData.file1.code,lang:t.jqueryData.file1.language},null,8,["fileName","copiedText","lang"]),Z,q,(0,a.Wm)(z,{fileName:t.jqueryData.file2.filename,copiedText:t.jqueryData.file2.code,lang:t.jqueryData.file2.language},null,8,["fileName","copiedText","lang"]),C,$,(0,a.Wm)(z,{fileName:t.jqueryData.file3.filename,copiedText:t.jqueryData.file3.code,lang:t.jqueryData.file3.language},null,8,["fileName","copiedText","lang"]),(0,a.Wm)(A,{previousPageName:"JqueryPage2",nextPageName:"JqueryPage4"})])),_:1}),(0,a.Wm)(E,{selectedImage:t.selectedImage,showModal:t.isModalOpen,onCloseModal:e[2]||(e[2]=l=>t.isModalOpen=!1)},null,8,["selectedImage","showModal"])]),(0,a._)("div",M,[(0,a.Wm)(G,{sections:t.sections},null,8,["sections"])])]),(0,a.Wm)(K)])}var S=n(2262),H=n(48755),O=n(40543),J=n(44216),Q=n(1755),B=n(18231),F=n(14332),z=n(25212),A=n(92715),E=n(4066);const G={file1:{filename:"index.html(scriptタグの中)",code:'$(function() {\n// モーダル表示ボタンの要素を取得してください (変数名: $modalShow)\nconst __ = $(".modal-show");\n// モーダルの要素を取得してください (変数名: $modal)\nconst __ = $(".modal");\n// モーダル閉じるボタンの要素を取得してください (変数名: $modalClose)\nconst __ = $(".modal-close");\n\n\n// ここから下に他の処理を追加します\n\n});\n',language:"language-javascript"},file2:{filename:"index.html(scriptタグの中)",code:' // モーダル表示ボタンのクリックイベントを設定してください\n__.on("click", function() {\n    // モーダルをフェードインしてください (600ミリ秒、透明度0.7)\n    __.__(__, __);\n});\n',language:"language-javascript"},file3:{filename:"index.html(scriptタグの中)",code:' // モーダル閉じるボタンのクリックイベントを設定してください\n__.on("click", function() {\n    // モーダルをフェードアウトしてください (600ミリ秒)\n    __.__(__);\n});\n',language:"language-javascript"}};var K=n(14534),L=n(20387),R={name:"JqueryPage3",components:{Header:H.Z,Footer:O.Z,Title:J.Z,SubTitle:Q.Z,SectionTitle:B.Z,HighlightWord:F.Z,Document:z.Z,Terminal:A.Z,TableOfContents:E.Z,Modal:K.Z,NavigationButtons:L.Z},setup(){const l=[{id:"Title",title:"JQuery 3"},{id:"subTitle1",title:"  1. モーダルの実装"},{id:"sectionTitle1-1",title:"    1-1. カリキュラムでの考え方やヒント"}];(0,a.bv)((()=>{window.scrollTo(0,0)}));const e={step1:n(48816),step2:n(76074)},t=(0,S.iH)(!1),u=(0,S.iH)(),o=l=>{t.value=!0,u.value=l};return{jqueryData:G,sections:l,imagePaths:e,selectedImage:u,isModalOpen:t,openModal:o}}},V=n(83744);const X=(0,V.Z)(R,[["render",I],["__scopeId","data-v-6008b39e"]]);var Y=X},48816:function(l,e,n){l.exports=n.p+"img/fadeIn-1.f11c8da0.png"},76074:function(l,e,n){l.exports=n.p+"img/fadeTo-1.3b7c0743.png"}}]);
//# sourceMappingURL=5484.6c9e9676.js.map