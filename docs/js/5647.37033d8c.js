"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[5647],{20387:function(e,n,a){a.d(n,{Z:function(){return f}});var l=a(66252);const t=e=>((0,l.dD)("data-v-0f3acb8e"),e=e(),(0,l.Cn)(),e),i={class:"navigation-buttons"},r=t((()=>(0,l._)("span",{class:"arrow-left"},null,-1))),_=[r],o=t((()=>(0,l._)("span",{class:"arrow-right"},null,-1))),u=[o];function s(e,n,a,t,r,o){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("button",{onClick:n[0]||(n[0]=(...e)=>o.goToPrevious&&o.goToPrevious(...e))},_),(0,l._)("button",{onClick:n[1]||(n[1]=(...e)=>o.goToNext&&o.goToNext(...e))},u)])}a(57658);var c={props:{previousPageName:String,nextPageName:String},methods:{goToPrevious(){this.$router.push({name:this.previousPageName})},goToNext(){this.$router.push({name:this.nextPageName})}}},d=a(83744);const m=(0,d.Z)(c,[["render",s],["__scopeId","data-v-0f3acb8e"]]);var f=m},82896:function(e,n,a){a.r(n),a.d(n,{default:function(){return J}});var l=a(66252);const t=e=>((0,l.dD)("data-v-442c1c03"),e=e(),(0,l.Cn)(),e),i={class:"container"},r={class:"main-content"},_=t((()=>(0,l._)("p",null,"神経衰弱実装について学びましょう。",-1))),o=t((()=>(0,l._)("p",null,[(0,l.Uk)(" このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう"),(0,l._)("br"),(0,l._)("br"),(0,l.Uk)(" 1: 初期設定と変数の定義、最初の関数の呼び出し"),(0,l._)("br"),(0,l.Uk)(" 2: ゲームのカードを生成し、ランダムに配置します"),(0,l._)("br"),(0,l.Uk)(" 3: カードがクリックされたときの処理を管理します"),(0,l._)("br"),(0,l.Uk)(" 4: カードを開き、番号を表示します"),(0,l._)("br"),(0,l.Uk)(" 5: カードを閉じ、元の状態に戻します"),(0,l._)("br"),(0,l.Uk)(" 6: 1枚目と2枚目のカードを比較し、一致するかどうかを確認します"),(0,l._)("br"),(0,l.Uk)(" 7: 一時的にカードのクリックを無効にします"),(0,l._)("br"),(0,l._)("br"),(0,l.Uk)(" まずは、初期設定と変数の定義、最初の関数の呼び出しを行います。"),(0,l._)("br"),(0,l.Uk)(" (1)全カード数を定義してください (変数名: total) (2)最初のカード番号を格納する変数を定義してください (変数名: firstNum) (3)二枚目のカード番号を格納する変数を定義してください (変数名: secondNum) (4)カード要素を格納する変数を定義してください (変数名: $card) (5)カードを作成する関数を呼び出してください (関数名: createCards) (6)カードの順序を判定する関数を呼び出してください (関数名: judgeOrder) ")],-1))),u=t((()=>(0,l._)("br",null,null,-1))),s=t((()=>(0,l._)("p",null,[(0,l._)("br"),(0,l.Uk)(" 次に、ゲームのカードを生成し、ランダムに配置します。"),(0,l._)("br"),(0,l.Uk)(" (1)カードを配置するリストを取得してください (変数名: $lists)"),(0,l._)("br"),(0,l.Uk)(" (2)カードの配列を作成してください (変数名: cardsArray)"),(0,l._)("br"),(0,l.Uk)(" (3)リストアイテムの配列を作成してください (変数名: listItem)"),(0,l._)("br"),(0,l.Uk)(" (4)カードの番号をペアで追加してください"),(0,l._)("br"),(0,l.Uk)(" (5)カードをランダムに並べ替えてください"),(0,l._)("br"),(0,l.Uk)(" (6)カードをリストアイテムに変換して追加してください"),(0,l._)("br"),(0,l.Uk)(" (7)リストにアイテムを追加してください"),(0,l._)("br"),(0,l.Uk)(" (8)カード要素を取得してください (変数名: $card)"),(0,l._)("br")],-1))),c=t((()=>(0,l._)("br",null,null,-1))),d=t((()=>(0,l._)("p",null,[(0,l._)("br"),(0,l.Uk)(" 次にカードがクリックされたときの処理を管理します"),(0,l._)("br"),(0,l.Uk)(" (1)カードがクリックされたときのイベントを設定してください (変数名: $card)"),(0,l._)("br"),(0,l.Uk)(" (2)1枚目のカードを開いた場合の処理を追加してください"),(0,l._)("br"),(0,l.Uk)(" (3)カードを開いてください (関数名: openCard)"),(0,l._)("br"),(0,l.Uk)(" (4)カードにクラスを追加してください"),(0,l._)("br"),(0,l.Uk)(" (5)1枚目のカードの要素を取得してください (変数名: firstNum)"),(0,l._)("br"),(0,l.Uk)(" (6)2枚目のカードを開いてください (関数名: openCard)"),(0,l._)("br"),(0,l.Uk)(" (7)2枚目のカードの要素を取得してください (変数名: secondNum)"),(0,l._)("br"),(0,l.Uk)(" (8)1枚目のカードのクラスを削除してください"),(0,l._)("br"),(0,l.Uk)(" (9)カードを比較する関数を呼び出してください (関数名: compareCard)"),(0,l._)("br")],-1))),m=t((()=>(0,l._)("br",null,null,-1))),f=t((()=>(0,l._)("p",null,[(0,l._)("br"),(0,l.Uk)(" 次にカードを開き、番号を表示します"),(0,l._)("br"),(0,l.Uk)(" (1)カードを開き、番号を表示してください"),(0,l._)("br")],-1))),g=t((()=>(0,l._)("br",null,null,-1))),p=t((()=>(0,l._)("p",null,[(0,l._)("br"),(0,l.Uk)(" 次に、カードを閉じ、元の状態に戻します。"),(0,l._)("br"),(0,l.Uk)(" (1)カードを閉じ、？を表示してください"),(0,l._)("br")],-1))),b=t((()=>(0,l._)("br",null,null,-1))),k=t((()=>(0,l._)("p",null,[(0,l._)("br"),(0,l.Uk)(" 次に、1枚目と2枚目のカードを比較し、一致するかどうかを確認します。"),(0,l._)("br"),(0,l.Uk)(" (1)1枚目と2枚目のカードの番号を取得してください (変数名: firstDataNum, secondDataNum)"),(0,l._)("br"),(0,l.Uk)(" (2)カードの番号が一致する場合の処理を追加してください"),(0,l._)("br"),(0,l.Uk)(" (3)全てのカードが開かれた場合、ゲーム終了メッセージを表示してください"),(0,l._)("br"),(0,l.Uk)(" (4)カードの番号が一致しない場合、カードを閉じてください (関数名: closeCard)"),(0,l._)("br"),(0,l.Uk)(" (5)カードのクリックを一時的に無効にする関数を呼び出してください (関数名: lockCard)"),(0,l._)("br")],-1))),U=t((()=>(0,l._)("br",null,null,-1))),v=t((()=>(0,l._)("p",null,[(0,l._)("br"),(0,l.Uk)(" 最後に、一時的にカードのクリックを無効にします。"),(0,l._)("br"),(0,l.Uk)(" (1)カードのクリックを一時的に無効にしてください"),(0,l._)("br"),(0,l.Uk)(" (2)1秒後にカードのクリックを有効に戻してください"),(0,l._)("br"),(0,l.Uk)(" (3)開かれたカードはクリックできないようにしてください"),(0,l._)("br")],-1))),T=t((()=>(0,l._)("br",null,null,-1))),N={class:"side-content"};function j(e,n,a,t,j,h){const D=(0,l.up)("Header"),x=(0,l.up)("Title"),y=(0,l.up)("Document"),C=(0,l.up)("SubTitle"),q=(0,l.up)("SectionTitle"),W=(0,l.up)("HighlightWord"),$=(0,l.up)("Terminal"),w=(0,l.up)("NavigationButtons"),Z=(0,l.up)("Modal"),O=(0,l.up)("TableOfContents"),P=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(D),(0,l._)("div",i,[(0,l._)("div",r,[(0,l.Wm)(x,{title:"JQuery 9",id:"Title"}),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)(C,{subTitle:"1. 神経衰弱の実装",id:"subTitle1"}),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,{sectionTitle:"1-1. カリキュラムでの考え方やヒント",id:"sectionTitle1-1"}),(0,l.Wm)(W,{word:"※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"}),o,u,(0,l.Wm)($,{fileName:t.jqueryData.file1.filename,copiedText:t.jqueryData.file1.code,lang:t.jqueryData.file1.language},null,8,["fileName","copiedText","lang"]),s,c,(0,l.Wm)($,{fileName:t.jqueryData.file2.filename,copiedText:t.jqueryData.file2.code,lang:t.jqueryData.file2.language},null,8,["fileName","copiedText","lang"]),d,m,(0,l.Wm)($,{fileName:t.jqueryData.file3.filename,copiedText:t.jqueryData.file3.code,lang:t.jqueryData.file3.language},null,8,["fileName","copiedText","lang"]),f,g,(0,l.Wm)($,{fileName:t.jqueryData.file4.filename,copiedText:t.jqueryData.file4.code,lang:t.jqueryData.file4.language},null,8,["fileName","copiedText","lang"]),p,b,(0,l.Wm)($,{fileName:t.jqueryData.file5.filename,copiedText:t.jqueryData.file5.code,lang:t.jqueryData.file5.language},null,8,["fileName","copiedText","lang"]),k,U,(0,l.Wm)($,{fileName:t.jqueryData.file6.filename,copiedText:t.jqueryData.file6.code,lang:t.jqueryData.file6.language},null,8,["fileName","copiedText","lang"]),v,T,(0,l.Wm)($,{fileName:t.jqueryData.file7.filename,copiedText:t.jqueryData.file7.code,lang:t.jqueryData.file7.language},null,8,["fileName","copiedText","lang"]),(0,l.Wm)(w,{previousPageName:"JqueryPage8",nextPageName:"JqueryPage10"})])),_:1}),(0,l.Wm)(Z,{selectedImage:t.selectedImage,showModal:t.isModalOpen,onCloseModal:n[0]||(n[0]=e=>t.isModalOpen=!1)},null,8,["selectedImage","showModal"])]),(0,l._)("div",N,[(0,l.Wm)(O,{sections:t.sections},null,8,["sections"])])]),(0,l.Wm)(P)])}var h=a(2262),D=a(37118),x=a(66187),y=a(44216),C=a(1755),q=a(67775),W=a(14332),$=a(11593),w=a(25061),Z=a(81942);const O={file1:{filename:"index.html(scriptタグの中)",code:'$(function() {\n  // 全カード数を定義してください (変数名: total)\n  const __ = __;\n  // 最初のカード番号を格納する変数を定義してください (変数名: firstNum)\n  let __ = "";\n  // 二枚目のカード番号を格納する変数を定義してください (変数名: secondNum)\n  let __ = "";\n  // カード要素を格納する変数を定義してください (変数名: $card)\n  let __ = "";\n\n  // カードを作成する関数を呼び出してください (関数名: createCards)\n  __();\n  // カードの順序を判定する関数を呼び出してください (関数名: judgeOrder)\n  __();\n\n  // ここから下に他の関数を追加します\n\n});\n',language:"language-javascript"},file2:{filename:"index.html(scriptタグの中)",code:'// カードを作成する関数です (関数名: createCards)\n// ゲームのカードを生成し、ランダムに配置します\nfunction __() {\n  // 1. カードを配置するリストを取得してください (変数名: $lists)\n  const __ = $(".lists");\n  // 2. カードの配列を作成してください (変数名: cardsArray)\n  const __ = [];\n  // 3. リストアイテムの配列を作成してください (変数名: listItem)\n  const __ = [];\n\n  // 4. カードの番号をペアで追加してください\n  for (let i = 1; i <= total / 2; i++) {\n    __.push(i, i);\n  };\n\n  // 5. カードをランダムに並べ替えてください\n  __.sort(function() {\n    return Math.random() - __;\n  });\n\n  // 6. カードをリストアイテムに変換して追加してください\n  __.forEach(function(num) {\n    __.push("<li data-num=\'" + num + "\'>?</li>");\n  });\n  // 7. リストにアイテムを追加してください\n  __.append(__);\n  // 8. カード要素を取得してください (変数名: $card)\n  __ = __.__("li");\n};\n',language:"language-javascript"},file3:{filename:"index.html(scriptタグの中)",code:'// カードのクリックイベントを設定する関数です (関数名: judgeOrder)\n// カードがクリックされたときの処理を管理します\nfunction __() {\n  // 1. カードがクリックされたときのイベントを設定してください (変数名: $card)\n  __.on("click", function() {\n    const __ = $(this);\n\n    // 2. 1枚目のカードを開いた場合の処理を追加してください\n    if (!$(".firstOpen").length) {\n      // 3. カードを開いてください (関数名: openCard)\n      __(__);\n      // 4. カードにクラスを追加してください\n      __.__("firstOpen");\n      // 5. 1枚目のカードの要素を取得してください (変数名: firstNum)\n      __ = $(".firstOpen");\n    } else {\n      // 6. 2枚目のカードを開いてください (関数名: openCard)\n      __(__);\n      // 7. 2枚目のカードの要素を取得してください (変数名: secondNum)\n      __ = __;\n      // 8. 1枚目のカードのクラスを削除してください\n      __.__("firstOpen");\n      // 9. カードを比較する関数を呼び出してください (関数名: compareCard)\n      __();\n    };\n  });\n};\n',language:"language-javascript"},file4:{filename:"index.html(scriptタグの中)",code:'// カードを開く関数です (関数名: openCard)\n// カードを開き、番号を表示します\nfunction __(__) {\n  // 1. カードを開き、番号を表示してください\n  __.css("pointer-events", "none").__("opened").__("text")(__.data("num"));\n};\n',language:"language-javascript"},file5:{filename:"index.html(scriptタグの中)",code:'function __(__) {\n  // 1. カードを閉じ、？を表示してください\n  __.removeClass("opened").__("text")("?");\n};\n',language:"language-javascript"},file6:{filename:"index.html(scriptタグの中)",code:'// カードを比較する関数です (関数名: compareCard)\n// 1枚目と2枚目のカードを比較し、一致するかどうかを確認します\nfunction __() {\n  // 1. 1枚目と2枚目のカードの番号を取得してください (変数名: firstDataNum, secondDataNum)\n  const __ = __.data("num");\n  const __ = __.data("num");\n\n  // 2. カードの番号が一致する場合の処理を追加してください\n  if (__ === __) {\n    // 3. 全てのカードが開かれた場合、ゲーム終了メッセージを表示してください\n    if ($(".opened").length === __) {\n      alert("Game Over");\n    }\n  } else {\n    // 4. カードの番号が一致しない場合、カードを閉じてください (関数名: closeCard)\n    setTimeout(function() {\n      __(__);\n      __(__);\n    }, 1000);\n    // 5. カードのクリックを一時的に無効にする関数を呼び出してください (関数名: lockCard)\n    __();\n  }\n};\n',language:"language-javascript"},file7:{filename:"index.html(scriptタグの中)",code:'// カードのクリックを一時的に無効にする関数です (関数名: lockCard)\n// 一時的にカードのクリックを無効にします\nfunction __() {\n  // 1. カードのクリックを一時的に無効にしてください\n  __.css("pointer-events", "none");\n  // 2. 1秒後にカードのクリックを有効に戻してください\n  setTimeout(function() {\n    __.css("pointer-events", "auto");\n    // 3. 開かれたカードはクリックできないようにしてください\n    $(".opened").css("pointer-events", "none");\n  }, __);\n};\n',language:"language-javascript"}};var P=a(14534),M=a(20387),I={name:"JqueryPage9",components:{Header:D.Z,Footer:x.Z,Title:y.Z,SubTitle:C.Z,SectionTitle:q.Z,HighlightWord:W.Z,Document:$.Z,Terminal:w.Z,TableOfContents:Z.Z,Modal:P.Z,NavigationButtons:M.Z},setup(){const e=[{id:"Title",title:"JQuery 9"},{id:"subTitle1",title:"  1. 神経衰弱の実装"},{id:"sectionTitle1-1",title:"    1-1. カリキュラムでの考え方やヒント"}];(0,l.bv)((()=>{window.scrollTo(0,0)}));const n={step1:a(8123)},t=(0,h.iH)(!1),i=(0,h.iH)(),r=e=>{t.value=!0,i.value=e};return{jqueryData:O,sections:e,imagePaths:n,selectedImage:i,isModalOpen:t,openModal:r}}},H=a(83744);const S=(0,H.Z)(I,[["render",j],["__scopeId","data-v-442c1c03"]]);var J=S},8123:function(e,n,a){e.exports=a.p+"img/javascript.2493a5ae.png"}}]);
//# sourceMappingURL=5647.37033d8c.js.map