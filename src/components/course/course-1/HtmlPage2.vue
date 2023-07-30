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

            それでは今学んだプロパティを使ってみましょう!<br>
            ①<br>
            新しい「html-css-4」ファイルをVisual Studio Codeで作り、以下をコピーしましょう。<br>
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
            ①
            以下のボタンを押してリセットCSSをダウンロードしましょう。<br>
            ダウンロードをしたらそのファイルをWindowsであればエクスプローラー、MacであればFinderを開いてドラックアンドドロップでVisual Studio Codeの先ほど作ったファイルに入れましょう。<br><br>
            <button @click="downloadCSS" class="download-button">リセットCSSファイルをダウンロード</button>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-2/vscode-2.png" class="screen-image" alt="vscode-2" />
          </div><br>
          <p>
            Web上で更新して確認しましょう。<br>
            すると余白がなくなりリセットされたスタイルだけになります。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-2/web-2.png" class="screen-image" alt="web-2" />
          </div><br>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. HTMLとCSSの仕組み" id="subTitle3"></SubTitle>
        <SectionTitle sectionTitle="3-1. HTMLの名称" id="sectionTitle3-1"></SectionTitle>
        <Document>
          <p>まずはHTMLについて学んでいきましょう!</p>
          <p>
            HTMLではタグと呼ばれる中にテキストを入れていきます。最初に記述するタグを<span class="markup-word-blue">開始タグ</span>、
            最後に記述するタグを<span class="markup-word-blue">終了タグ</span>といいます。
          </p>
          <p>
            開始タグに入っている「h1」と書かれた部分を<span class="markup-word-blue">要素名</span>、
            開始タグと終了タグまでのすべてをまとめて<span class="markup-word-blue">要素</span>といいます。
          </p>
          <p>また、開始タグと終了タグの中身を<span class="markup-word-blue">要素内容</span>と呼ばれます。</p>
          <div>
            <img src="../../../assets/images/course/html-css-1/html-1.png" class="powerpoint-image" alt="html-1" />
          </div>
        </Document>
        <SectionTitle sectionTitle="3-2. CSSの名称" id="sectionTitle3-2"></SectionTitle>
        <Document>
          <p>次にCSSについて学んでいきましょう!</p>
          <p>
            CSSではhtmlでは要素名と呼ばれていたところが<span class="markup-word-blue">セレクタ</span>と呼ばれます。<br>
            その次にそのカッコの中で記述してある左側部分を<span class="markup-word-blue">プロパティ</span>、右側を<span class="markup-word-blue">値</span>と呼びます。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/css-1.png" class="powerpoint-image" alt="css-1" />
          </div>
        </Document>
        <SectionTitle sectionTitle="3-3. 要素とプロパティ①" id="sectionTitle3-3"></SectionTitle>
        <Document>
          <p>
            まずはHTMLの要素から覚えていきましょう!<br>
            <HighlightWord word="<h1>・・・</h1>"></HighlightWord><br>
            ・見出しを作成する要素でこのタグはhタグと呼ばれます。<br>
            主にはページの全体やセクションの大きなタイトルに使い、h1〜h6まであり、大きくなれば画面に表示される文字は小さくなります。<br><br>
            <HighlightWord word="<p>・・・</p>"></HighlightWord><br>
            ・段落を作成する要素でこのタグはpタグと呼ばれます。<br>
            段落を表し、タイトルの後の細かい文章に使います。<br><br>
            図であらわすとこのような感じです。<br>
            大きなタイトルの「PC カリキュラム」はh1を使い、サブタイトルの「最新の作品」、「自己紹介」などはh2を使用しましょう。<br>
            文章や細かい補足などにはpを使うようにしましょう。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-1.png" class="powerpoint-image" alt="tag-1" />
          </div><br><br>
          <p>
            さっそくテキストエディタに書いて練習してみましょう!<br><br>
            ①<br>
            まずは環境構築の際にインストールしたVisual Studio Codeを開きましょう。<br>
            開いたら以下のような画面になります。(Windows版ですが環境構築までは表示をMac版と対応させているのでボタンの位置や表記が若干違いますがここからはほとんど一緒なので読み替えて考えてください。)
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-1.png" class="screen-image" alt="vscode-1" />
          </div><br>
          <p>
            ②<br>
            そしたら「フォルダを開く」を押し、Windowsならエクスプローラーが開かれるのでCドライブ直下に作った「grow」フォルダに入りましょう。<br>
            MacであればFinderが開かれるのでサイドバーにある家のマークのホームディレクトリを開きましょう。<br>
            開きたら同環境とも右クリックを押し、フォルダを作成しましょう。<br>
            名前は「カリキュラム練習用」などでOKです。フォルダが作成出来たらそれを選択した状態で「フォルダの選択」を押してください。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-2.png" class="screen-image" alt="vscode-2" />
          </div><br>
          <p>
            ③<br>
            するとこのように左に作ったファイルの名前が出てきます。<br>
            このファイルの中で作業できるようになりました。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-3.png" class="screen-image" alt="vscode-3" />
          </div><br>
          <p>
            ④<br>
            次に「カリキュラム練習用」と表示されたフォルダの左の矢印「>」が下向きになっているか確認してください。<br>
            されていなければそのファイルの名前をクリックしアイコンの左から2番目のフォルダマークをクリックします。<br>
            名前は画像のようにして新しいフォルダを作成してください。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-4.png" class="screen-image" alt="vscode-4" />
          </div><br>
          <p>
            ⑤<br>
            次に今作ったフォルダ「html-css-lesson-1」をクリックしましょう。<br>
            フォルダの左の矢印「>」が下向きになっているか確認してください。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-5.png" class="screen-image" alt="vscode-5" />
          </div><br>
          <p>
            ⑥<br>
            クリックしたら右側にあるアイコンの左から1番目のファイルマークをクリックします。<br>
            名前は画像のようにして新しいファイルを2つ作成してください。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-6.png" class="screen-image" alt="vscode-6" />
          </div><br>
          <p>
            ⑦<br>
            開けたら2画面で見る方が見やすいので「style.css」をドラッグし2画面にしましょう<br>
            左のファイルをドラッグし、右の大きい画面のタイトル部分に引っ張ると画面を分けることができます。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-7.png" class="screen-image" alt="vscode-7" />
          </div><br>
          <p>
            ⑧<br>
            次に「index.html」に以下の内容をコピーして貼り付けましょう<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file1.filename" :copiedText="htmlSourceData.file1.code" :lang="htmlSourceData.file1.language" />
          <br>
          <p>
            以下のようになればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-8.png" class="screen-image" alt="vscode-8" />
          </div><br>
          <p>
            ⑨<br>
            そしたら11行目に画像の記述を追加しましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-9.png" class="screen-image" alt="vscode-9" />
          </div><br>
          <p>
            ⑩<br>
            編集し終わると「index.html」のタイトルの左側に白丸がある状態になっているので「Ctrl + S」で保存しましょう。Macは「Command + S」です。<br>
            すると白丸が消えるので保存が完了しました。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-10.png" class="screen-image" alt="vscode-10" />
          </div><br>
          <p>
            ⑪<br>
            それでは今の内容をWebサイト上で見てみましょう。<br>
            左のサイドバーの「index.html」を右クリックしてください。<br>
            このようなタブが開かれるので「エクスプローラーで開く」を押しましょう。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-11.png" class="screen-image" alt="vscode-11" />
          </div><br>
          <p>
            ⑫<br>
            Windowsならエクスプローラー、MacならFinderが開かれるのでそこにある「index.html」をダブルクリックしましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/folder-1.png" class="screen-image" alt="folder-1" />
          </div><br>
          <p>
            ⑫<br>
            ブラウザ上の表示がこのようになればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-1.png" class="screen-image" alt="web-1" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="3-4. 要素とプロパティ②" id="sectionTitle3-4"></SectionTitle>
        <Document>
          <p>
            次にCSSのプロパティを覚えていきましょう!<br><br>
            プロパティ<br><br>
            <HighlightWord word="color: [色の名前(rgb値・色コード)];"></HighlightWord><br>
            ・文字の色を変えるプロパティでcolorプロパティと呼ばれます。<br><br>
            <HighlightWord word="font-size: [文字のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・文字の大きさを変えるプロパティでfont-sizeプロパティと呼ばれます。<br><br>
            <HighlightWord word="font-family: [フォント名]; "></HighlightWord><br>
            ・文字の種類を変えるプロパティでfont-familyプロパティと呼ばれます。
            フォント名が「serif」のような1単語でなく「Lucida Grande」の様に2単語になった時は必ず「 "Lucida Grande"」とダブルクオーテーションで囲みましょう。<br><br>
            それではCSSを適用してみましょう。<br>
            ①<br>
            テキストエディタの「style.css」に以下を入力しましょう<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-12.png" class="screen-image" alt="vscode-12" />
          </div>
          <p>
            ②<br>
            ブラウザを更新してこのようなスタイルになればOKです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-2.png" class="screen-image" alt="web-2" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="3-5. 要素とプロパティ③" id="sectionTitle3-5"></SectionTitle>
        <Document>
          <p>
            ここまででHTMLとCSSの役割がわかったと思います。<br>
            さらにここから要素やプロパティを覚えましょう。<br><br>
            要素<br>
            <HighlightWord word="<a href='飛ばしたいURL'>・・・</a>"></HighlightWord><br>
            ・リンクを作成する要素でこのタグはaタグと呼ばれます。<br>
            クリックしたら他のページへ飛ぶ事ができます。<br><br>
            <HighlightWord word="<img src='画像があるディレクトリのパス''>"></HighlightWord><br>
            ・画像を表示する要素でこのタグはimgタグと呼ばれます。<br>
            <span class="markup-word-red">注意</span> : imgタグでは終了タグがないことに注意しましょう。<br>
            このような開始タグと終了タグの中に要素内容を記述できない要素の事を<span class="markup-word-blue">空要素</span>といいます。<br><br>
            また、aタグやimgタグの中にある「href」や「src」の事を<span class="markup-word-blue">属性</span>といいます。<br><br>
            では今出てきた属性について覚えましょう!<br>
            <span class="markup-word-blue">href属性</span>→この属性を付与している属性をクリックすると遷移するURLを指定します。<br>
            <span class="markup-word-blue">src属性</span>→どこの画像を表示するか、参照するフォルダの場所を指定します。<br><br>
            以下の画像はイメージです。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-2.png" class="powerpoint-image" alt="tag-2" />
          </div><br><br>
          <p>
            それではaタグで画面遷移と画像を使って表示させてみましょう。<br>
            ①<br>
            ・以下の画像を右クリックでダウンロードして下さい。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/cat.jpg" class="screen-image" alt="cat" />
          </div><br>
          <p>
            ②<br>
            テキストエディタでassetsフォルダを作り、さらにその中にimagesフォルダを作りましょう。<br>
            正しく作られたらこのような表示になります。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-13.png" class="screen-image" alt="vscode-13" />
          </div><br>
          <p>
            ③<br>
            フォルダを作ったら先ほど保存した画像をimagesフォルダにドラッグアンドドロップで保存しましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-14.png" class="screen-image" alt="vscode-14" />
          </div><br>
          <p>
            ④<br>
            次に「index.html」に以下の画像のように要素を追記しましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-15.png" class="screen-image" alt="vscode-15" />
          </div><br>
          <p>
            ⑤<br>
            ブラウザを確認すると、リンクと画像が表示されます。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-3.png" class="screen-image" alt="web-3" />
          </div><br>
        </Document>

        <!-- section 4 -->
        <SubTitle subTitle="4. HTMLとCSSの関係性" id="subTitle4"></SubTitle>
        <SectionTitle sectionTitle="4-1. HTMLの親子関係" id="sectionTitle4-1"></SectionTitle>
        <Document>
          <p>
            ここからHTMLの要素の関係に深堀りしていきましょう。<br>
            要素一つ一つにはそれぞれ<span class="markup-word-red">親子関係</span>や<span class="markup-word-red">兄弟関係</span>が必ず存在します。<br>
            要素の構造は入れ子構造になっており、一つの要素の事を大きな箱だと考えるとイメージがしやすいです。<br>
            それでは入れ子構造とは何か学びましょう!<br><br>
            <HighlightWord word="入れ子"></HighlightWord><br>
            ・開始タグと終了タグで囲むことを入れ子といいます。<br><br>
            
            その入れ子の中にさらに入れ子がある構造を<span class="markup-word-blue">入れ子構造</span>と呼びます。<br>
            箱の中に箱が入る様なイメージです<br><br>
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/box.jpg" class="screen-image" alt="tag-2" />
          </div><br><br>
        </Document>
        <SectionTitle sectionTitle="4-2. 要素とプロパティ④" id="sectionTitle4-2"></SectionTitle>
        <Document>
          <p>
            それではここからHTMLの要素の入れ子関係を理解できる様に新しい要素を覚えましょう。<br><br>
            要素<br>
            <HighlightWord word="<div>・・・</div>"></HighlightWord><br>
            ・文書に構造を付加する何も意味を持たない要素でこのタグはdivタグと呼ばれます。<br><br>
            新しい属性を覚えましょう。<br>
            <span class="markup-word-blue">class属性</span>→要素に名前をつけることができる属性です。
            cssで指定するときは名前の前に「.」をつけましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="background-color: [色の名前(rgb値・色コード)];"></HighlightWord><br>
            ・背景色を変えるプロパティでbackground-colorプロパティと呼ばれます。<br><br>
            <HighlightWord word="width: [横幅のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の横幅を変えるプロパティでwidthプロパティと呼ばれます。<br><br>
            <HighlightWord word="height: [縦幅のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の縦幅を変えるプロパティでheightプロパティと呼ばれます。<br><br>
            それでは実践して試してみましょう!<br>
            ①<br>
            以下をコピーしてください。<br>
          </p>
          <Terminal :fileName="htmlSourceData.file2.filename" :copiedText="htmlSourceData.file2.code" :lang="htmlSourceData.file2.language" />
          <br>
          <p>
            ②<br>
            「html-css-lesson-2」フォルダを作り、「index.html」と「style.css」フォルダをlesson-1の時の様に作りましょう!<br>
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-16.png" class="screen-image" alt="vscode-16" />
          </div><br>
          <p>
            ③<br>
            以下の画像の様にhtmlファイルとcssファイルを編集しましょう。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-17.png" class="screen-image" alt="vscode-17" />
          </div><br>
          <p>
            ④<br>
            先ほどのセクション3-3と同じように左のサイドバーの「index.html」を右クリックしてください。<br>
            タブが開かれるので「エクスプローラーで開く」を押しましょう。<br>
            ブラウザを確認すると、divタグで作った要素が表示されれば完了です。<br><br>
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-4.png" class="screen-image" alt="web-4" />
          </div><br>
          <p>
            では次に以下の画像を見てください。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-3.png" class="powerpoint-image" alt="tag-3" />
          </div><br><br>
          <p>
            このようにまずは大きい赤い枠で囲み、中で画像を同じ大きさで並べています。<br>
            まずは赤い大きなdivで囲み、青い小さな要素を入れていきます。これが親子関係になります。<br>
            この様な親子関係をdivタグだけで再現してみましょう!<br><br>
            ①<br>
            以下の画像の様に先ほどのhtmlファイルとcssファイルに追記しましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-18.png" class="screen-image" alt="vscode-15" />
          </div><br>
          <p>
            ②<br>
            編集ができたらWeb上で確認しましょう。画像と同じようにできていたらOKです。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-5.png" class="screen-image" alt="web-5" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="4-3. 要素とプロパティ⑤" id="sectionTitle4-3"></SectionTitle>
        <Document>
          <p>
            HTMLの要素の入れ子関係をさらに学んでいきましょう。<br>
            以下の画像を見て下さい。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-4.png" class="powerpoint-image" alt="tag-4" />
          </div><br><br>
          <p>
            先ほどの画像が6枚並んでいる場面や他のページに遷移するメニューのように、共通要素はdivタグではなくリストと呼ばれる要素で親子関係を作ることがおすすめです。<br>
            それでは新しい要素を学んでいきましょう!<br><br>
            要素<br>
            <HighlightWord word="<ul>・・・</ul>"></HighlightWord><br>
            ・順序がない箇条書きのリストを表示する要素でこのタグはulタグと呼ばれます。<br><br>
            <HighlightWord word="<li>・・・</li>"></HighlightWord><br>
            ・リストの項目を表示するために使用する要素でこのタグはliタグと呼ばれます。<br>
            ulとliタグはセットで使うという事を覚えておきましょう。<br><br>
            それではリストを使ってメニュー部分を作ってみましょう!<br>
            ①<br>
            「html-css-lesson-3」フォルダを作り、「index.html」と「style.css」フォルダをlesson-1の時の様に作りましょう!<br>
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-19.png" class="screen-image" alt="vscode-19" />
          </div><br>
          <p>
            ②<br>
            以下の画像の様にhtmlファイルとcssファイルを編集しましょう。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/vscode-20.png" class="screen-image" alt="vscode-20" />
          </div><br>
          <p>
            ③<br>
            編集ができたらWeb上で確認しましょう。画像と同じようにできていたらOKです。
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-6.png" class="screen-image" alt="web-6" />
          </div><br>
          <p>
            ここで属性も一つ覚えておきましょう。<br>
            <span class="markup-word-blue">id属性</span>→要素に名前をつけることができる属性です。
            cssで指定するときは名前の前に「#」をつけましょう。<br>
            class属性との違いはidでつけた名前はそのページでは<span class="markup-word-red">1回しか</span>使えないという事です。<br><br>
            ではどのように使うか作りながら考えていきましょう。<br>
            ①<br> 
            以下を追記しましょう。
            </p>
            <div>
              <img src="../../../assets/images/course/html-css-1/vscode-21.png" class="screen-image" alt="vscode-20" />
            </div><br>
            <p>
            ①<br>
            以下の画像の様にhtmlファイルとcssファイルを編集しましょう。<br>
            </p><br>
            
            <p>
            ②<br>
            編集ができたらWeb上で確認しましょう。画像と同じようにできていたらOKです。<br>
            この様に一つだけ特別な意味を持たせたりするスタイルを適用するときに使ったりしますが使用頻度はclassより使う機会が少ないという事を覚えておきましょう。<br>
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/web-7.png" class="screen-image" alt="web-7" />
          </div><br>
        </Document>

        <!-- section 5 -->
        <SubTitle subTitle="5. HTMLとCSSを深堀りする" id="subTitle5"></SubTitle>
        <SectionTitle sectionTitle="5-1. HTMLの全体構造" id="sectionTitle5-1"></SectionTitle>
        <Document>
          <p>
            HTMLとCSSについて少しだけ理解が深まったと思います。<br>
            それではHTMLの全体の構造についてみていきましょう。<br>
            以下の画像を見て下さい。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-5.png" class="powerpoint-image" alt="tag-5" />
          </div><br><br>
          <p>
            このようにHTMLで画面に表示する前に設定しないといけない事がたくさんあります。<br>
            この各要素がどのような役割を示すのか学んでいきましょう。<br><br>
            <HighlightWord word="<!DOCTYPE>"></HighlightWord><br>
            ・HTML のバージョンを宣言をします。<br>
            ドキュメントタイプ宣言と呼ばれ、HTML 文書ファイルの先頭に記述します。タグではないので注意しましょう。<br><br>
            <HighlightWord word="<html>・・・</html>"></HighlightWord><br>
            ・HTML文書であることを宣言します。<br>
            ここからHTMLの記述を「開始する」または「終了する」という宣言に使います。<br><br>
            <HighlightWord word="<head>・・・</head>"></HighlightWord><br>
            ・文書のヘッダ部分を指定します。<br>
            Webページの設定(文字コードの設定など)の情報を記述するため使います。<br><br>
            <HighlightWord word="<body>・・・</body>"></HighlightWord><br>
            ・文書のボディ部分を指定します。<br>
            文章や画像など、実際にブラウザの画面上に表示される内容を指定するため使います。<br><br>
            <HighlightWord word="<meta charset=“文字コード”>"></HighlightWord><br>
            ・Webサイトの情報を記載します。<br>
            検索エンジンやブラウザにWebページの情報を伝えるため使います。<br><br>
            <span class="markup-word-blue">charset属性</span>→文字コードを指定できる属性です。
            例 : UTF8,unicode,shiftJisなど<br><br>
            <HighlightWord word="<title>・・・</title>"></HighlightWord><br>
            ・Webページのタブに表示する文字を指定します。<br>
            Webページのタイトルを表示するため使います。<br><br>
            <HighlightWord word="<link rel=“stylesheet” href=“読み込みたいファイルのパス”>"></HighlightWord><br>
            ・関連する文書ファイルを指定してその関係を定義します。<br>
            検索エンジンやブラウザにWebページの情報を伝えるため使います。(CSSの読み込みなど)<br><br>
            <span class="markup-word-blue">rel属性</span>→そのページ、ファイルとの関係性を指定できる属性です。<br><br>
            このようにHTMLには決められた型があり、その構造を元に記述していく必要があります。<br>
            その決められた構造をHTMLの<span class="markup-word-red">雛形(ひながた)</span>といいます。
          </p><br>
        </Document>
        <SectionTitle sectionTitle="5-2. HTMLとCSSのコメント" id="sectionTitle5-2"></SectionTitle>
        <Document>
          <p>
            HTMLとCSSのコメントの入れ方について学びましょう!<br>
            HTMLやCSSでは画面上に出さずに文字を入れたいときにコメントを残しておく事ができます。<br>
            他の人が自分のデザインを見たときにわかりやすいようにするために残すように意識しましょう。<br>
            HTML<br>
            <HighlightWord word="<!-- 入れたいコメント -->"></HighlightWord><br>
            CSS<br>
            <HighlightWord word="*/ 入れたいコメント */"></HighlightWord><br><br>
          </p>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-6.png" class="powerpoint-image" alt="tag-6" />
          </div><br><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/tag-7.png" class="powerpoint-image" alt="tag-7" />
          </div><br><br>
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
        { id: "Title", title: "HTML・CSS 1" },
        { id: "subTitle1", title: "  1. HTMLとCSSについて知る" },
        { id: "subTitle2", title: "  2. プログラミングとコーディング" },
        { id: "subTitle3", title: "  3. HTMLとCSSの仕組み" },
        { id: "sectionTitle3-1", title: "    3-1. HTMLの名称" },
        { id: "sectionTitle3-2", title: "    3-2. CSSの名称" },
        { id: "sectionTitle3-3", title: "    3-3. 要素とプロパティ①" },
        { id: "sectionTitle3-4", title: "    3-4. 要素とプロパティ②" },
        { id: "sectionTitle3-5", title: "    3-5. 要素とプロパティ③" },
        { id: "subTitle4", title: "  4. HTMLとCSSの関係性" },
        { id: "sectionTitle4-1", title: "    4-1. HTMLの親子関係" },
        { id: "sectionTitle4-2", title: "    4-2. 要素とプロパティ④" },
        { id: "sectionTitle4-3", title: "    4-3. 要素とプロパティ⑤" },
        { id: "subTitle5", title: "  5. HTMLとCSSを深堀りする" },
        { id: "sectionTitle5-1", title: "    5-1. HTMLの全体構造" },
        { id: "sectionTitle5-2", title: "    5-2. HTMLとCSSのコメント" },
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
.html-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
}
.css-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
}

.screen-image {
  max-width: 100%;
  height: auto;
}
.powerpoint-image {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
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