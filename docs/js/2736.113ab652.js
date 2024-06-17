"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[2736],{20387:function(e,n,l){l.d(n,{Z:function(){return m}});var a=l(66252);const _=e=>((0,a.dD)("data-v-0f3acb8e"),e=e(),(0,a.Cn)(),e),t={class:"navigation-buttons"},i=_((()=>(0,a._)("span",{class:"arrow-left"},null,-1))),u=[i],r=_((()=>(0,a._)("span",{class:"arrow-right"},null,-1))),o=[r];function s(e,n,l,_,i,r){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a._)("button",{onClick:n[0]||(n[0]=(...e)=>r.goToPrevious&&r.goToPrevious(...e))},u),(0,a._)("button",{onClick:n[1]||(n[1]=(...e)=>r.goToNext&&r.goToNext(...e))},o)])}l(57658);var c={props:{previousPageName:String,nextPageName:String},methods:{goToPrevious(){this.$router.push({name:this.previousPageName})},goToNext(){this.$router.push({name:this.nextPageName})}}},d=l(83744);const g=(0,d.Z)(c,[["render",s],["__scopeId","data-v-0f3acb8e"]]);var m=g},6873:function(e,n,l){l.r(n),l.d(n,{default:function(){return ie}});var a=l(66252);const _=e=>((0,a.dD)("data-v-cf76f024"),e=e(),(0,a.Cn)(),e),t={class:"container"},i={class:"main-content"},u=_((()=>(0,a._)("p",null,"API実装について学びましょう。",-1))),r=_((()=>(0,a._)("br",null,null,-1))),o=_((()=>(0,a._)("br",null,null,-1))),s=_((()=>(0,a._)("br",null,null,-1))),c=_((()=>(0,a._)("br",null,null,-1))),d=_((()=>(0,a._)("br",null,null,-1))),g=_((()=>(0,a._)("br",null,null,-1))),m=_((()=>(0,a._)("br",null,null,-1))),p=_((()=>(0,a._)("br",null,null,-1))),b=_((()=>(0,a._)("br",null,null,-1))),f=_((()=>(0,a._)("br",null,null,-1))),k=_((()=>(0,a._)("br",null,null,-1))),T=_((()=>(0,a._)("br",null,null,-1))),h=_((()=>(0,a._)("br",null,null,-1))),U=_((()=>(0,a._)("br",null,null,-1))),v=_((()=>(0,a._)("br",null,null,-1))),D=_((()=>(0,a._)("br",null,null,-1))),P=_((()=>(0,a._)("br",null,null,-1))),A=_((()=>(0,a._)("br",null,null,-1))),I=_((()=>(0,a._)("br",null,null,-1))),j=_((()=>(0,a._)("br",null,null,-1))),x=_((()=>(0,a._)("br",null,null,-1))),y=_((()=>(0,a._)("br",null,null,-1))),W=["src"],w=_((()=>(0,a._)("br",null,null,-1))),N=_((()=>(0,a._)("p",null,[(0,a.Uk)(" まずは、ページが読み込まれたときに実行される関数と変数の定義を行います。"),(0,a._)("br"),(0,a.Uk)(" (1)ページが読み込まれたときに実行される関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (2)本のリストを表示する要素を指定する変数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (3)ページ番号を追跡するための変数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (4)前回の検索ワードを保存するための変数を作成します。"),(0,a._)("br")],-1))),q=_((()=>(0,a._)("br",null,null,-1))),$=_((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" 次に、取得した本のデータを使ってHTMLのリストアイテムを作成し、それを表示する関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (1)showItemsという名前の関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (2)取得したデータを逆順に処理します。"),(0,a._)("br"),(0,a.Uk)(" (3)本の情報をHTML形式でテンプレートに埋め込みます。"),(0,a._)("br"),(0,a.Uk)(" (4)作成したテンプレートをリストの最初に追加します。"),(0,a._)("br")],-1))),M=_((()=>(0,a._)("br",null,null,-1))),Z=_((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" 検索結果が見つからない場合に表示されるメッセージを追加する関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (1)emptyMessageという名前の関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (2)リストの前にメッセージを表示します。"),(0,a._)("br")],-1))),J=_((()=>(0,a._)("br",null,null,-1))),C=_((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" AJAXを使って、楽天ブックスAPIからデータを取得する関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (1)fetchBookDataという名前の関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (2)検索ワードを取得します。"),(0,a._)("br"),(0,a.Uk)(" (3)ページ番号を1つ増やします。"),(0,a._)("br"),(0,a.Uk)(" (4)検索ワードが前回と異なる場合の処理を行います。"),(0,a._)("br"),(0,a.Uk)(" (5)AJAXリクエストを送信します。"),(0,a._)("br")],-1))),H=_((()=>(0,a._)("br",null,null,-1))),B=_((()=>(0,a._)("p",null,[(0,a._)("br"),(0,a.Uk)(" 最後に、検索ボタンがクリックされたときにfetchBookData関数が実行されるように設定します。"),(0,a._)("br"),(0,a.Uk)(" (1)clickDataという名前の関数を作成します。"),(0,a._)("br"),(0,a.Uk)(" (2)検索ボタンがクリックされたときにfetchBookData関数を実行します。"),(0,a._)("br"),(0,a.Uk)(" (3)clickData関数を呼び出してクリックイベントを設定します。"),(0,a._)("br")],-1))),X=_((()=>(0,a._)("br",null,null,-1))),S={class:"side-content"};function O(e,n,l,_,O,L){const Q=(0,a.up)("Header"),F=(0,a.up)("Title"),E=(0,a.up)("Document"),G=(0,a.up)("SubTitle"),R=(0,a.up)("SectionTitle"),z=(0,a.up)("HighlightWord"),K=(0,a.up)("Terminal"),V=(0,a.up)("NavigationButtons"),Y=(0,a.up)("Modal"),ee=(0,a.up)("TableOfContents"),ne=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(Q),(0,a._)("div",t,[(0,a._)("div",i,[(0,a.Wm)(F,{title:"JQuery 10",id:"Title"}),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(G,{subTitle:"1. API連携における前提知識",id:"subTitle1"}),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{sectionTitle:"1-1. APIとは?",id:"sectionTitle1-1"}),(0,a._)("p",null,[(0,a.Uk)(" まずはAPIがどういったものか理解しましょう!"),r,o,(0,a.Wm)(z,{word:"API"}),s,(0,a.Uk)(" ・APIとはコンピューターやアプリケーションが他のコンピューターやアプリケーションとやり取りするための取り決めやルールの事を言います。"),c,(0,a.Uk)(" プログラム同士がうまく連携できるようにするための「決まりごと」を定めています。"),d,g,(0,a.Uk)(" 具体的な例を挙げると、天気予報のアプリがAPIを使う場合を考えてみましょう。このアプリが、インターネット上にある天気情報を提供するサービス（例えば、気象庁のサイト）から情報を取得したいとき、APIを使います。 このAPIが「今日の天気を教えてください」という決まった形式でリクエストを送ると、気象庁のサイトは「今日は晴れです」とレスポンスをするのです。 つまり、APIを使うと、異なるプログラムやサービスが簡単に情報をやり取りできるようになるのです。 ")]),m])),_:1}),(0,a.Wm)(G,{subTitle:"2. 楽天ブックスAPIを使ったデータ取得の実装",id:"subTitle2"}),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{sectionTitle:"2-1. カリキュラムでの考え方やヒント",id:"sectionTitle2-1"}),(0,a.Wm)(z,{word:"※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"}),(0,a._)("p",null,[(0,a.Uk)(" このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう"),p,b,(0,a.Uk)(" 1: 初期設定と変数の定義"),f,(0,a.Uk)(" 2: ボタンをクリックしたときのイベント設定"),k,(0,a.Uk)(" 3: 楽天ブックスAPIからデータを取得する"),T,(0,a.Uk)(" 4: 検索結果が見つからない場合のメッセージを表示"),h,(0,a.Uk)(" 5: 検索結果がヒットしたときに本の情報を表示"),U,v,(0,a.Uk)(" それでは初めに今回データのやり取りを行うAJAXについて説明します。"),D,(0,a.Wm)(z,{word:"AJAX"}),P,(0,a.Uk)(" AJAXとはウェブページを再読み込みせずに、サーバーと非同期にデータをやり取りする技術です。"),A,(0,a.Uk)(" 今回はjQueryライブラリに簡単にAJAXでリクエストができる「$.ajax()」メソッドがあるのでそれを使います。"),I,(0,a.Wm)(z,{word:"$.ajax()"}),j,(0,a.Uk)(" 「$.ajax()」のそれぞれのパラメータはこのような形で記述します。"),x]),y,(0,a._)("img",{onClick:n[0]||(n[0]=e=>_.openModal(_.imagePaths.step1)),src:_.imagePaths.step1,alt:"tag-1",class:"powerpoint-image"},null,8,W),w,N,q,(0,a.Wm)(K,{fileName:_.jqueryData.file1.filename,copiedText:_.jqueryData.file1.code,lang:_.jqueryData.file1.language},null,8,["fileName","copiedText","lang"]),$,M,(0,a.Wm)(K,{fileName:_.jqueryData.file2.filename,copiedText:_.jqueryData.file2.code,lang:_.jqueryData.file2.language},null,8,["fileName","copiedText","lang"]),Z,J,(0,a.Wm)(K,{fileName:_.jqueryData.file3.filename,copiedText:_.jqueryData.file3.code,lang:_.jqueryData.file3.language},null,8,["fileName","copiedText","lang"]),C,H,(0,a.Wm)(K,{fileName:_.jqueryData.file4.filename,copiedText:_.jqueryData.file4.code,lang:_.jqueryData.file4.language},null,8,["fileName","copiedText","lang"]),B,X,(0,a.Wm)(K,{fileName:_.jqueryData.file5.filename,copiedText:_.jqueryData.file5.code,lang:_.jqueryData.file5.language},null,8,["fileName","copiedText","lang"]),(0,a.Wm)(V,{previousPageName:"JqueryPage9",nextPageName:"JqueryPage1"})])),_:1}),(0,a.Wm)(Y,{selectedImage:_.selectedImage,showModal:_.isModalOpen,onCloseModal:n[1]||(n[1]=e=>_.isModalOpen=!1)},null,8,["selectedImage","showModal"])]),(0,a._)("div",S,[(0,a.Wm)(ee,{sections:_.sections},null,8,["sections"])])]),(0,a.Wm)(ne)])}var L=l(2262),Q=l(76780),F=l(66187),E=l(44216),G=l(1755),R=l(67775),z=l(14332),K=l(11593),V=l(56479),Y=l(81942);const ee={file1:{filename:"index.html(scriptタグの中)",code:'$(function() {\n  // 本のリストを表示する要素を指定する変数を作成してください\n  const $_____ = $("._____");\n\n  // ページ番号を追跡するための変数を作成してください\n  let _____ = 0;\n\n  // 前回の検索ワードを保存するための変数を作成してください\n  let _____ = "";\n\n  // ここから下に他の関数を追加します\n});\n',language:"language-javascript"},file2:{filename:"index.html(scriptタグの中)",code:"\nfunction showItems(data) {\n  // 取得したデータを逆順に処理します\n  data.Items._____().forEach(function(book) {\n    // 本の情報をHTML形式でテンプレートに埋め込みます\n    const $template = _____(複数行);\n    // 作成したテンプレートをリストの最初に追加します\n    $lists._____($template);\n  });\n};\n",language:"language-javascript"},file3:{filename:"index.html(scriptタグの中)",code:"function emptyMessage() {\n  // 検索結果が見つからない場合のメッセージをリストの前に表示します\n  $_____._____('<p class=\"message\">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</p>');\n};\n",language:"language-javascript"},file4:{filename:"index.html(scriptタグの中)",code:'function fetchBookData() {\n// 検索ワードを取得してください\nconst searchWord = $("#js-search-word")._____();\n\n// ページ番号を1つ増やしてください\n_____ = _____ + 1;\n\n// 検索ワードが前回と異なる場合の処理を行ってください\nif (searchWord != _____) {\n  // リストを空にする処理を追加してください\n  $_____._____();\n  // ページ番号を1にリセットする処理を追加してください\n  _____ = 1;\n}\n\n// 前回の検索ワードを現在の検索ワードに更新してください\n_____ = searchWord;\n\n// AJAXリクエストを送信します\n$.ajax({\n  // 楽天ブックスAPIのURLを指定してください\n  url: "_____",\n  // リクエストのタイプを指定してください\n  type: "_____",\n  // データの形式を指定してください\n  datatype: "_____",\n  data: {\n    // アプリケーションIDを指定してください\n    applicationId: "_____",\n    // 検索ワードを指定してください\n    keyword: _____,\n    // ジャンルIDを指定してください\n    booksGenreId: "_____",\n    // 取得する件数を指定してください\n    hits: _____,\n    // ページ番号を指定してください\n    page: _____\n  }\n}).done(function(data) {\n  // 以前のメッセージを削除する処理を追加してください\n  $(".message")._____();\n  // 検索結果が0件の場合の処理を追加してください\n  if (data.hits === 0) {\n    _____();\n  } else {\n    _____(data);\n  }\n});\n};\n',language:"language-javascript"},file5:{filename:"index.html(scriptタグの中)",code:'function clickData() {\n  // 検索ボタンがクリックされたときにfetchBookData関数を実行するイベントを設定してください\n  $("#js-search-button").on("_____", _____);\n};\n\n// clickData関数を呼び出してクリックイベントを設定してください\n_____();\n',language:"language-javascript"}};var ne=l(14534),le=l(20387),ae={name:"JqueryPage10",components:{Header:Q.Z,Footer:F.Z,Title:E.Z,SubTitle:G.Z,SectionTitle:R.Z,HighlightWord:z.Z,Document:K.Z,Terminal:V.Z,TableOfContents:Y.Z,Modal:ne.Z,NavigationButtons:le.Z},setup(){const e=[{id:"Title",title:"JQuery 10"},{id:"subTitle1",title:"1. API連携における前提知識"},{id:"sectionTitle1-1",title:"    1-1. APIとは?"},{id:"subTitle2",title:"2. 楽天ブックスAPIを使ったデータ取得の実装"},{id:"sectionTitle2-1",title:"    2-1. カリキュラムでの考え方やヒント"}];(0,a.bv)((()=>{window.scrollTo(0,0)}));const n={step1:l(28524)},_=(0,L.iH)(!1),t=(0,L.iH)(),i=e=>{_.value=!0,t.value=e};return{jqueryData:ee,sections:e,imagePaths:n,selectedImage:t,isModalOpen:_,openModal:i}}},_e=l(83744);const te=(0,_e.Z)(ae,[["render",O],["__scopeId","data-v-cf76f024"]]);var ie=te},28524:function(e,n,l){e.exports=l.p+"img/ajax-1.5cd39c1d.png"}}]);
//# sourceMappingURL=2736.113ab652.js.map