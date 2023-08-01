<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 2" id="Title"></Title>
        <Document>
          <p>要素の特徴を知ることでスタイルの当て方や構造を作成を効率よくしていきましょう！</p>
          <p>ここでは概念や、要素の違いを詳しく見ていくセクションです。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. ブロック要素とインライン要素" id="subTitle1"></SubTitle>
        <SectionTitle sectionTitle="1-1. ブロック要素とインライン要素とは？" id="sectionTitle1-1"></SectionTitle>
        <Document>
          <p>
            要素はそれぞれ種類があります。<br>
            どのようなものがあるか詳しく見ていきましょう!
          </p><br>
          <HighlightWord word="ブロック要素"></HighlightWord>
          <p>
            ページの構造やレイアウトを定義するために使用されるHTMLの要素です。<br>
            行全体のまとまりを作ります。<br>
            例 : hタグ、pタグ、divタグ、ulタグ、liタグ
          </p><br>
          <HighlightWord word="インライン要素"></HighlightWord>
          <p>
            ・文章の一部を装飾したり、特定の部分に対してスタイルを適用するために使用されるHTMLの要素です。<br>
            行の中の一部のまとまりを作ります。<br>
            例 : imgタグ、aタグ
          </p>
        </Document>
        <SectionTitle sectionTitle="1-2. ブロック要素とインライン要素の違い" id="sectionTitle1-2"></SectionTitle>
        <Document>
          <p>
            ブロック要素とインライン要素はそれぞれ違いがあります。<br>
            同じように記述しても違う特徴があるため、詳しく見ていきましょう。
          </p><br>
          <HighlightWord word="ブロック要素の特徴"></HighlightWord>
          <p>
            ・横幅は指定しないと横いっぱいに広がる。<br>
            ・次の行に別の要素を入れると勝手に改行される。<br>
            ・width,heightは設定できる。<br>
          </p><br>
          <HighlightWord word="インライン要素の特徴"></HighlightWord>
          <p>
            ・横幅は要素内容によって変わる。<br>
            ・次の行に別の要素を入れると勝手に改行されず横に表示される。<br>
            ・width,heightは設定できない。<br>
          </p><br>
          <p>
            下の画像を見てみましょう。<br>
            ブロック要素だと幅や高さの指定を指定していないとブラウザ上で横いっぱいまで広がってしまいます。<br>
            それに対して、インライン要素は文字数分しか幅がないことがわかります。<br>
            さらにブロック要素だと横いっぱいに広がっているため次の要素を入れると改行されますが、インライン要素は横並びになってしまう特徴があります。<br>
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-2/block-inline.png" class="powerpoint-image" alt="block-inline" />
          </div>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. ボックスモデルについて知る" id="subTitle2"></SubTitle>
        <SectionTitle sectionTitle="2-1. 要素とプロパティ①" id="sectionTitle2-1"></SectionTitle>
        <Document>
          <p>
            新しいCSSのプロパティを覚えましょう。<br>
            隣り合う要素に余白をつけたい時に使うプロパティを学びましょう。<br><br>
          プロパティ<br>
            <HighlightWord word="padding: [余白のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・内側の余白をつけるプロパティでpaddingプロパティと呼ばれます。<br><br>
            例：<br>
            padding: 10px; 上下左右<br>
            padding: 10px 30px; →上下10px・左右30px<br>
            padding: 0 10px 20px 30px; →上0px・下10px・左20px・右30px<br><br>
            他の指定方法<br>
            <span class="markup-word-blue">padding-left: [余白のサイズ(px,rem,%など)];</span> →左だけ<br>
            <span class="markup-word-blue">padding-right: [余白のサイズ(px,rem,%など)];</span> →右だけ<br>
            <span class="markup-word-blue">padding-top: [余白のサイズ(px,rem,%など)];</span> →上だけ<br>
            <span class="markup-word-blue">padding-bottom: [余白のサイズ(px,rem,%など)];</span> →下だけ<br><br>
            <HighlightWord word="margin: [余白のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・外側の余白をつけるプロパティでmarginプロパティと呼ばれます。<br><br>
            例：<br>
            margin: 10px; 上下左右<br>
            margin: 10px 30px; →上下10px・左右30px<br>
            margin: 0 10px 20px 30px; →上0px・下10px・左20px・右30px<br><br>
            他の指定方法<br>
            <span class="markup-word-blue">margin-left: [余白のサイズ(px,rem,%など)];</span> →左だけ<br>
            <span class="markup-word-blue">margin-right: [余白のサイズ(px,rem,%など)];</span> →右だけ<br>
            <span class="markup-word-blue">margin-top: [余白のサイズ(px,rem,%など)];</span> →上だけ<br>
            <span class="markup-word-blue">margin-bottom: [余白のサイズ(px,rem,%など)];</span> →下だけ<br><br>
            <HighlightWord word="border: [境界線の太さ(px,rem,%など)] [線の種類] [線の色];"></HighlightWord><br>
            ・境界線をつけるプロパティでborderプロパティと呼ばれます。<br><br>
            例：<br>
            border: 1px solid white;<br>
            →「1pxの一本線の白い枠線」<br><br>

            それでは一度ファイルを作って行きましょう!<br>
            ①<br>
            新しい「html-css-lesson-4」ファイルをVisual Studio Codeで作り、以下をコピーしましょう。<br>
            本来はstyle.cssはassetsのフォルダに入れる必要があるので作成してフォルダの中に入れましょう。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file4.filename" :copiedText="htmlSourceData.file4.code" :lang="htmlSourceData.file4.language" />
          <Terminal :fileName="htmlSourceData.file5.filename" :copiedText="htmlSourceData.file5.code" :lang="htmlSourceData.file5.language" />
          <br>
          <p>
            このようにファイルを作り、貼り付けたらWeb上でみればこのようになります。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-1.png" class="screen-image" alt="vscode-1" />
          </div><br>
          <p>
            ②<br>
            Web上で確認しましょう。確認すると以下のようになるかと思います。<br>
            しかし、先ほど学習した余白をpaddingやmarginを使っているわけではないのに要素の左や上の方に余白ができている事がわかります。<br>
            この理由は次のセクションで学習しましょう。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-1.png" class="screen-image" alt="web-1" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="2-2. リセットCSSについて知る" id="sectionTitle2-2"></SectionTitle>
        <Document>
          <p>
            <HighlightWord word="リセットCSS"></HighlightWord><br>
            デザインを確認するためのブラウザではデフォルトでそのブラウザ仕様のCSSが設定されてしまっています。<br>
            そのため、自分たちが設定していないにもかかわらずスタイルが適用されてしまうのでそれを一度初期化する必要があります。<br>
            その時に初期化されたスタイルを設定するCSSファイルの事です。<br>
            ではこれを設定してスタイルを初期化しましょう。<br><br>
            ①<br>
            以下のボタンを押してリセットCSSをダウンロードしましょう。<br>
            ダウンロードをしたらそのファイルをWindowsであればエクスプローラー、MacであればFinderを開いてドラックアンドドロップでVisual Studio Codeの先ほど作ったファイルに入れましょう。<br><br>
            <button @click="downloadCSS" class="download-button">リセットCSSファイルをダウンロード</button>
            <br><br>
            「index.html」の8行目に以下の画像のようにリセットCSSを適用させるようにlink要素を入れましょう。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-2.png" class="screen-image" alt="vscode-2" />
          </div><br>
          <p>
            ②<br>
            Web上で更新して確認しましょう。<br>
            すると余白がなくなりリセットされたスタイルだけになります。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-2.png" class="screen-image" alt="web-2" />
          </div><br>
          <p>
            ③<br>
            それでは今の状態から自分が設定する余白(今回はmargin)を設定しましょう。<br>
            style.cssの5行目と10行目に以下を追加しましょう。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-3.png" class="screen-image" alt="vscode-3" />
          </div><br>
          <p>
            ④<br>
            それでは今の状態から自分が設定する余白(今回はmargin)を設定しましょう。<br>
            style.cssの5行目と10行目に以下を追加しましょう。<br>
            画像のように余白が設定できればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-3.png" class="screen-image" alt="web-3" />
          </div><br>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. ブロック要素とインライン要素をさらに深堀りする" id="subTitle3"></SubTitle>
        <SectionTitle sectionTitle="3-1. ボックスモデル" id="sectionTitle3-1"></SectionTitle>
        <Document>
          <p>
            先ほど学習した余白の設定margin、paddingの違いを理解しましょう。<br><br>
            <HighlightWord word="ボックスモデル"></HighlightWord><br>
            ・すべての要素には必ず共通してpadding,border,marginがあります。<br>
            リセットCSSはそのHTMLの要素の概念のことを指し、外側の余白、内側の余白というのは境界線より外側、内側をさします。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/boxmodel.png" class="powerpoint-image" alt="boxmodel" />
          </div>
        </Document>
        <SectionTitle sectionTitle="3-2. ブロック要素とインライン要素の違いをまとめる" id="sectionTitle3-2"></SectionTitle>
        <Document>
          <p>
            それではブロック要素、インライン要素の違いをまとめましょう。<br>
            以下の表を見てみましょう。<br>
            ブロック要素やインライン要素にはこのような違いがあります。<br>
            一番右にあるのは今回初登場する<span class="markup-word-blue">インラインブロック要素</span>になります。<br>
            これはブロック要素やインライン要素の特徴を半分ずつ持っている要素になります。<br>
            しかし最初からこの性質を持つ要素名は存在しません。<br>
            次のセクションではこの要素に変換したり、ブロック要素をインライン要素にしたりその逆にするにはどうすればよいのか学んでいきます。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/difference.png" style="max-width: 100%;" class="powerpoint-image" alt="difference" />
          </div>
        </Document>
        <SectionTitle sectionTitle="3-3. 要素とプロパティ②" id="sectionTitle3-3"></SectionTitle>
        <Document>
          <p>
            新しいプロパティを覚えましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="display: [block,inline,inline-block,none];"></HighlightWord><br>
            ・要素の種類を変えるプロパティでdisplayプロパティと呼ばれます。<br><br>
            block…ブロック要素にする<br>
            inline…インライン要素にする<br>
            inline-block…インラインブロック要素にする<br>
            none…要素を非表示にする<br><br>
            では実際に使ってみましょう!
            ①<br>
            Visual Studio Codeで「html-css-lesson-4」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            そのあとは名前を「html-css-lesson-5」に変更しましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-4.png" class="screen-image" alt="vscode-4" />
          </div><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-5.png" class="screen-image" alt="vscode-5" />
          </div><br>
          <p>
          ②<br>
            以下をコピーして貼り付けてください。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file7.filename" :copiedText="htmlSourceData.file7.code" :lang="htmlSourceData.file7.language" />
          <Terminal :fileName="htmlSourceData.file8.filename" :copiedText="htmlSourceData.file8.code" :lang="htmlSourceData.file8.language" />
          <br>
          <p>
            この様になればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-6.png" class="screen-image" alt="vscode-6" />
          </div><br>
          <p>
            ③<br>
            それでは今の状態から要素の種類を設定しましょう。<br>
            style.cssの2行目と10行目に以下を追加しましょう。<br>
            画像のように設定できればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-7.png" class="screen-image" alt="vscode-7" />
          </div><br>
          <p>
            ④<br>
            Web上で確認してみましょう。<br>
            インライン要素とブロック要素の特徴が変わっていればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-4.png" class="screen-image" alt="web-4" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="3-4. 要素とプロパティ③" id="sectionTitle3-4"></SectionTitle>
        <Document>
          <p>
            ここまでの学習で要素の種類を変えることができました。<br>
            ではここでブロック要素の特徴を思い出してください。<br>
            ブロック要素では横並びになることなく、必ずインライン要素のように横並びにならず要素同士が縦に並びます。<br>
            横並びにしたいときに先ほどのdisplayで要素の種類を変えることで横並びにできますが、ブロック要素の特性を持ったまま横並びにしたい場合もあります。<br>
            その方法は要素を変える以外に2つのパターンがあります。<br>
            ではどのように横並びにするか見ていきましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="float: [left,right,none];"></HighlightWord><br>
            ・ブロック要素を横並びにするプロパティでfloatプロパティと呼ばれます。<br><br>
            left…左寄せに横に並べる<br>
            right…右寄せに横に並べる<br>
            none…特に配置を指定しない(デフォルト値)<br><br>
            <HighlightWord word="display: flex;"></HighlightWord><br>
            ・プロパティをflexにするとよこならびにできます。<br><br>
            それではfloatから確認していきましょう。<br>
            ①<br>
            では先ほどのようにVisual Studio Codeで「html-css-lesson-5」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            そのあとは名前を「html-css-lesson-6」に変更し、以下のソースを貼り付けましょう。<br>
            画像のようになればOKです。<br> 
          </p><br>
          <Terminal :fileName="htmlSourceData.file9.filename" :copiedText="htmlSourceData.file9.code" :lang="htmlSourceData.file9.language" />
          <Terminal :fileName="htmlSourceData.file10.filename" :copiedText="htmlSourceData.file10.code" :lang="htmlSourceData.file10.language" />
          <br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-8.png" class="screen-image" alt="vscode-8" />
          </div><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-5.png" class="screen-image" alt="web-5" />
          </div><br>
          <p>
            ②<br>
            では横並びにしていきましょう。<br>
            style.cssのparentの子要素に以下を追加しましょう。<br>
            画像のように設定できればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-9.png" class="screen-image" alt="vscode-9" />
          </div><br>
          <p>
            ③<br>
            Web上で確認してみましょう。<br>
            画像のように横並びになっていればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-6.png" class="screen-image" alt="web-6" />
          </div><br>
          <p>
            ①<br>
            次に先ほどのようにVisual Studio Codeで「html-css-lesson-6」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            そのあとは名前を「html-css-lesson-7」に変更し、以下のソースを貼り付けましょう。<br>
            画像のようになればOKです。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file11.filename" :copiedText="htmlSourceData.file11.code" :lang="htmlSourceData.file11.language" />
          <Terminal :fileName="htmlSourceData.file12.filename" :copiedText="htmlSourceData.file12.code" :lang="htmlSourceData.file12.language" />
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-10.png" class="screen-image" alt="vscode-10" />
          </div><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-7.png" class="screen-image" alt="web-7" />
          </div><br>
          <p>
            ②<br>
            ではmiddleの子要素left、rightを横並びにしていきましょう。<br>
            style.cssのmiddleの子要素に以下を追加しましょう。<br>
            画像のようになればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-11.png" class="screen-image" alt="vscode-10" />
          </div><br>
          <p>
            ③<br>
            Web上で確認しましょう。<br>
            leftとrightは横並びにすることができました。<br>
            しかし、緑が半分下に入り込んでいることがわかります。<br>
            なぜこのようなことになるのでしょうか？<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-8.png" class="screen-image" alt="web-8" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="3-5. floatの性質とclearfixの概念を知る" id="sectionTitle3-5"></SectionTitle>
        <Document>
          <p>
            floatの性質を理解していきましょう。<br>
            floatを指定した要素は浮き上がる性質があります。
            つまり、指定していないbottomが浮き上がったleftとrightの下に入り込んでかぶってしまうことがあります。<br>
            では浮き上がった下のスペースに入り込まないようにする為にはどうしたらいいでしょうか？<br>
            それを解決する方法がClearfixという考え方になります。<br><br>
            <HighlightWord word="Clearfix"></HighlightWord><br>
            floatプロパティを使って横並びになっている要素を回り込みの影響が出ないようにするテクニックのこと。<br>
            <br>
            ではこのテクニックを使って回り込みをしないようにしましょう。<br>
            clearfixの記述の仕方は以下のように記述が決まっています。<br>
            この記述の意味は後ほど説明しますので一旦入れてみましょう。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/clearfix.png" style="max-width: 100%;" class="powerpoint-image" alt="clearfix" />
          </div><br>
          <p>
            ①<br>
            ・以下の画像のようにmiddleにclearfixを適用させてください。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-12.png" class="screen-image" alt="vscode-12" />
          </div><br>
          <p>
            ②<br>
            Web上で確認するとbottomの要素が回り込んでいないことがわかります。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-9.png" class="screen-image" alt="web-9" />
          </div><br>
          <p>
            それでは先ほど設定したClearfixを一つ一つ説明していきます。<br><br>
            <HighlightWord word="疑似要素"></HighlightWord><br>
            セレクタに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。<br>
            疑似要素は様々な用途で使うのでおぼえましょう。以下によく使われる疑似要素を載せておきます。<br>
            <HighlightWord word="::after"></HighlightWord><br>
            要素の直後に内容を挿入したいスタイルがある時に使います。<br><br>
            <HighlightWord word="::hober"></HighlightWord><br>
            カーソルがこの擬似クラスを与えた要素に乗った時にのみ適用されるスタイルになります。<br><br>
            <HighlightWord word="::not"></HighlightWord><br>
            この擬似クラスを与えた要素以外にのみ適用されるスタイルになります。<br><br>
            <HighlightWord word="::first-child"></HighlightWord><br>
            同じ要素の集まりのliタグで使い、この擬似クラスを与えた要素の最初の要素のみ適用されるスタイルになります。<br><br>
            <HighlightWord word="::nth-child(n)"></HighlightWord><br>
            同じ要素の集まりのliタグで使い、この擬似クラスを与えた要素のn番目の要素のみ適用されるスタイルになります。<br><br>
            例 ::first-childと::not使った場合
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/firstchild.png" style="max-width: 100%;" class="powerpoint-image" alt="firstchild" />
          </div><br>
          <p>
            つまりClearfixでは疑似要素「::after」でmiddleの後にスタイルを挿入していたという事になります。<br>
            ではなにを挿入していたか見ていきましょう。<br>
          </p>
        </Document>
        <SectionTitle sectionTitle="3-6. 要素とプロパティ③" id="sectionTitle3-6"></SectionTitle>
        <Document>
          <p>
            Clearfixで使われていたプロパティをおさらいしましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="content: [挿入したい内容];"></HighlightWord><br>
            ・要素の直前または直後に文字や画像などの内容を挿入したいときに、使われるプロパティでcontentプロパティと呼ばれます。<br><br>
            挿入できるもの<br>
            ・url→URLで画像や音声等のファイルを指定します。<br>
            ・"文字列"→テキストを入れることができます<br><br>
            <HighlightWord word="clear: both;"></HighlightWord><br>
            ・floatプロパティによるボックスの回り込みを解除するプロパティでclearプロパティと呼ばれます。<br><br>
            それでは先ほどのClearfixの画像を見てみましょう。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/clearfix.png" style="max-width: 100%;" class="powerpoint-image" alt="clearfix" />
          </div><br>
          <p>
            つまり、今回だと回り込みを防ぐためにmiddleの後に「content: "";」で空欄の要素を作っています。<br>
            また、contentで追加した要素はインライン要素になるため「display: block;」でブロック要素にし、横いっぱいに空欄を与えた事になります。<br>
            これによってfloatで浮き上がった要素に下に空欄を埋め込み回り込みしないようにバリアしているためbottomが入らないというわけです。<br>
            さらにcontentで追加したの要素がmiddleの下に回り込みまないようにclearプロパティで回り込みを解除しています。<br>
            少しイメージしづらいかもしれませんが少しずつ復習して覚えられるようにしましょう。<br><br>
            しかし現在CSS3ではこのやり方は推奨されていなく、もう一つの方法「display: flex;」を使った横並びの方法を使うことが多いです。<br>
            最近追加されたプロパティのため、少し古いブラウザだと設定しても聞かない場合もあるのでデザインする環境によって使い分けられるようにしましょう。<br>
            では「display: flex;」のやり方も学びましょう。
          </p>
          <p>
            ①<br>
            次に先ほどのようにVisual Studio Codeで「html-css-lesson-7」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            そのあとは名前を「html-css-lesson-8」に変更し、以下のソースを貼り付けましょう。<br>
            画像のようになればOKです。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file13.filename" :copiedText="htmlSourceData.file11.code" :lang="htmlSourceData.file11.language" />
          <Terminal :fileName="htmlSourceData.file14.filename" :copiedText="htmlSourceData.file12.code" :lang="htmlSourceData.file12.language" />
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-13.png" class="screen-image" alt="vscode-13" />
          </div><br>
          <p>
            ②<br>
            ではmiddleの子要素left、rightを横並びにしていきましょう。<br>
            style.cssのmiddleの子要素に以下を追加しましょう。<br>
            画像のようになればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-14.png" class="screen-image" alt="vscode-14" />
          </div><br>
          <p>
            ③<br>
            Web上で確認しましょう。<br>
            leftとrightは横並びにすることができました。<br>
            Clearfixよりも簡単に横並びにすることができます。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-10.png" class="screen-image" alt="web-10" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="3-7. 要素とプロパティ④" id="sectionTitle3-7"></SectionTitle>
        <Document>
          <p>
            ここまでブロック要素とインライン要素の違いやボックスモデルの違いについて説明していきました。<br>
            ここからさらに様々な要素やプロパティについて学んでいきましょう!<br><br>
            <HighlightWord word="<input type=“フォームの種類” value=”最初から入る文字”>"></HighlightWord><br>
            ・入力フォームやボタンを作る要素でこのタグはinputタグと呼ばれます。<br><br>
            新しい属性を覚えましょう。<br><br>
            <span class="markup-word-blue">type属性</span><br>
            フォームの種類を設定できる属性です。<br><br>
            フォームの種類例<br>
            submit→指定するとボタンになります。<br>
            text→指定すると1行のみ入力できるテキストエリアになります。<br><br>
            <span class="markup-word-blue">value属性</span><br>
            フォームの中の値を決められる属性です。<br><br>
            <span class="markup-word-blue">placefolder属性</span><br>
            フォームの中に入力例を表示する属性です。<br><br>
            <HighlightWord word="<textarea></textarea>"></HighlightWord><br>
            ・2行以上の入力フォームを作る要素でこのタグはtextareaタグと呼ばれます。<br><br>
            プロパティ<br>
            <HighlightWord word="background-image: url[背景画像があるディレクトリのパス];"></HighlightWord><br>
            ・背景画像を指定できるプロパティでbackground-imageプロパティと呼ばれます。<br><br>
            <span class="markup-word-blue">【HTML要素のimgタグの何が違うの？】</span><br>
              ページ全体を覆う背景画像として使う場合はbackground-imageを使い、ページの中のロゴやアイコンの一つとして画像を作りたい時はimgタグを使いましょう。
              また、 background-imageを指定するときの要素はdivを使います。<br><br>
            <HighlightWord word="background-size: [背景画像のサイズ];"></HighlightWord><br>
            ・背景画像のサイズを指定できるプロパティでbackground-sizeプロパティと呼ばれます。<br><br>
            背景画像の指定例<br>
            <span class="markup-word-blue">auto</span>→特に指定をしません。元の画像サイズで表示されます<br>
            <span class="markup-word-blue">contain</span>→縦横比を保持したまま背景画像の全体が表示される<br>
            <span class="markup-word-blue">cover</span>→要素全体を覆うように自動的に背景画像が広がります。<br><br>
            <HighlightWord word="opacity: [0.0〜1.0];"></HighlightWord><br>
            ・要素の透明度を設定できるプロパティでopacityプロパティと呼ばれます。<br>
            0に近いほど透明度は上がります<br><br>
            <HighlightWord word="box-shadow: [水平方向の影の長さ] [垂直方向の影の長さ] [色];"></HighlightWord><br>
            ・要素の影を設定できるプロパティでbox-shadowプロパティと呼ばれます。<br><br>
            <HighlightWord word="border-radius: [丸めるサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の角の丸めるプロパティでborder-radiusプロパティと呼ばれます。<br><br>
            <HighlightWord word="list-style: [スタイルの種類];"></HighlightWord><br>
            ・リストスタイルを設定できるプロパティでlist-styleプロパティと呼ばれます。<br><br>
            リストスタイル例<br>
            <span class="markup-word-blue">none</span>→何も入れない<br>
            <span class="markup-word-blue">circle</span>→白丸<br>
            <span class="markup-word-blue">square</span>→四角<br>
            <span class="markup-word-blue">decimal</span>→数字<br><br>
            <HighlightWord word="text-align: [left,center,right] ;"></HighlightWord><br>
            ・インライン要素・インラインブロックの配置を設定できるプロパティでtext-alignプロパティと呼ばれます。<br>
            配置を変えたいインライン要素の親要素のスタイルに指定して、その親要素の横幅に対してleft、center、rightを決めることができます。<br><br>
            <HighlightWord word="line-height: [開けたい行間のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・行間の設定ができるプロパティでline-heightプロパティと呼ばれます。<br><br>
            <HighlightWord word="box-sizing: [サイズの種類];"></HighlightWord><br>
            ・要素の幅のサイズに余白を含めることができるプロパティでbox-sizingプロパティと呼ばれます。<br>
            本来は要素の余白はwidthとheightので決まったサイズのさらに外側に作られますが、このプロパティを与えた要素はpaddingとborderをwidthとheightのサイズに含むことができます。<br>
            例で考えるとwidthとheight両方500pxでpaddingを30pxで設定すると上下左右に30px分の余白が入ることになるので要素自体の大きさは少し小さくなるという事になります。<br><br>
            サイズの種類例<br>
            <span class="markup-word-blue">border-box</span>→widthの幅にpaddingとborderを含めた幅にする。<br>
            <span class="markup-word-blue">content-box</span>→widthの幅にpaddingとborderを含めた幅にしない。<br><br>
            ①<br>
            Visual Studio Codeで「html-css-lesson-8」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            そのあとは名前を「html-css-lesson-9」に変更しましょう。<br>
            以下をコピーして貼り付けてください。<br>
            画像のようになればOKです。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file15.filename" :copiedText="htmlSourceData.file15.code" :lang="htmlSourceData.file15.language" />
          <Terminal :fileName="htmlSourceData.file16.filename" :copiedText="htmlSourceData.file16.code" :lang="htmlSourceData.file16.language" />
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-15.png" class="screen-image" alt="vscode-15" />
          </div><br>
          <p>
          ②<br>
            以下を写真をダウンロードしてassets/imagesの中に入れましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/sea.jpg" class="powerpoint-image" alt="sea" style="max-width: 30%; margin: 0 auto; display: block;"/>
          </div><br>
          <p>
          ②<br>
            格納しソースコードをコピー出来たら以下のように実装しましょう。<br>
            少し多いのでスペルミスに気をつけましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-16.png" class="screen-image" alt="vscode-16" />
          </div><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-17.png" class="screen-image" alt="vscode-17" />
          </div><br>
          <p>
          ③<br>
            Web上で確認してみましょう。<br>
            この様になればOKです。<br>
            それぞれのスタイルの使い方を見て理解できるようにしましょう。<br>
            また、値などを変えて見ると理解が深まると思います。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-11.png" class="screen-image" alt="web-11" />
          </div><br>
        </Document>
      </div>
      <div class="side-content">
        <TableOfContents :sections="sections" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { htmlSourceData } from "@/data/htmlSourceData.js";


export default {
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    Terminal,
    TableOfContents,
  },
  data() {
    return {
      htmlSourceData: htmlSourceData,
      sections: [
        { id: "Title", title: "HTML・CSS 2" },
        { id: "subTitle1", title: "  1. ブロック要素とインライン要素" },
        { id: "sectionTitle1-1", title: "    1-1. ブロック要素とインライン要素とは？" },
        { id: "sectionTitle1-2", title: "    1-2. ブロック要素とインライン要素の違い" },
        { id: "subTitle2", title: "  2. ボックスモデルについて知る" },
        { id: "sectionTitle2-1", title: "    2-1. 要素とプロパティ①" },
        { id: "sectionTitle2-2", title: "    2-2. リセットCSSについて知る" },
        { id: "subTitle3", title: "  3. ブロック要素とインライン要素をさらに深堀りする" },
        { id: "sectionTitle3-1", title: "    3-1. ボックスモデル" },
        { id: "sectionTitle3-2", title: "    3-2. ブロック要素とインライン要素の違いをまとめる" },
        { id: "sectionTitle3-3", title: "    3-3. 要素とプロパティ②" },
        { id: "sectionTitle3-4", title: "    3-4. 要素とプロパティ③" },
        { id: "sectionTitle3-5", title: "    3-5. floatの性質とclearfixの概念を知る" },
        { id: "sectionTitle3-6", title: "    3-5. 要素とプロパティ③" },
        { id: "sectionTitle3-7", title: "    3-5. 要素とプロパティ④" },
      ],
    };
  },
  methods: {
    // CSSファイルをダウンロードする処理
    downloadCSS() {
      // CSSファイルの内容を定義
      const cssContent = htmlSourceData.file6.code;

      // Blobオブジェクトを作成してダウンロードリンクを生成
      const blob = new Blob([cssContent], { type: "text/css" });
      const url = URL.createObjectURL(blob);

      // ダウンロードリンクを生成
      const link = document.createElement("a");
      link.href = url;
      link.download = "reset.css"; // ダウンロード時のファイル名を指定

      // ダウンロードリンクをクリックしてダウンロードをトリガー
      link.click();

      // 不要になったURLオブジェクトを解放
      URL.revokeObjectURL(url);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
.main-content{
  width: 75%;
}
.side-content{
  margin-left: 1%;
  margin-top: 5vh;
  width: 24%;
}
.markup-word-blue {
  white-space: pre;
  color: rgb(37, 139, 255);
  font-weight: bold;
}
.markup-word-red {
  white-space: pre;
  color: rgb(255, 37, 37);
  font-weight: bold;
}

.screen-image {
  max-width: 100%;
  height: auto;
  border: 1px solid rgb(175, 175, 175);
}
.powerpoint-image {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
  border: 1px solid rgb(175, 175, 175);
}

.download-button {
  background-color: #4caf50; /* ボタンの背景色 */
  color: white; /* ボタンのテキストカラー */
  border: none; /* ボーダーなし */
  padding: 10px 20px; /* 上下左右のパディング */
  text-align: center; /* テキストを中央に配置 */
  text-decoration: none; /* テキスト装飾なし */
  display: inline-block; /* インラインブロック要素にする */
  font-size: 16px; /* フォントサイズ */
  border-radius: 5px; /* 角丸 */
  cursor: pointer; /* カーソルをポインターに変更 */
  transition: background-color 0.3s; /* ホバー時の背景色変化にトランジションを追加 */
}

.download-button:hover {
  background-color: #45a049; /* ホバー時の背景色 */
}

/* タブレット版 */
@media (max-width: 834px) {
  .main-content {
    width: 100%;
  }
  .side-content {
    display: none;
  }
}
</style>