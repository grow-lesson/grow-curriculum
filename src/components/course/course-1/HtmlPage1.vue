<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 1" id="Title"></Title>
        <Document>
          <p>スマートフォンやタブレット、PCなどで表示されるサービスやWebサイトのデザインができる技術を学んでいくセクションになります。</p>
          <p>Webデザインの目的は、情報を正しく、わかりやすく提供することです。</p>
          <p>ユーザーが操作をしやすくほしい情報にいち早く遷移できるデザインを目指していきましょう!</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. HTMLとCSSについて知る" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1. HTMLとCSSについて知る" id="sectionTitle1"></SectionTitle>
          <p>
            まずHTMLとCSSがの名称や意味を理解しましょう!
          言葉の意味や名称を学ぶことで専門用語やエンジニアの人との会話スムーズになるので覚えておきましょう。
          </p><br>
          <HighlightWord word="HTML(Hyper Text Markup Language)"></HighlightWord>
          <p>
            ・Webサイトを作成する際にコンピューターへ構成指示を出し、表示したい文章や写真などの情報を形作るマークアップ言語の略称。<br>
            Webサイトに表示させる為の骨組みを形作ります。<br><br>
            また、<span class="markup-word-blue">マークアップ</span>とは文章の構成や役割を示すという意味になります。<br>
            見出しや段落・表・リンクなど、文章を構成している要素がどのような役割を持っているのかを示すことで、検索エンジンがWEBページの構造を把握しやすくなります。<br><br>
            ○下の「5」と書いてあるロゴはHTMLのバージョン5、改訂第5版のことを指します。<br>
            ○1993年にHTML1が開発され、<!--1999年12月にHTML4へバージョンアップされました。-->
            2014年<!--10月28日-->に最新バージョンのHTML5になりました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" alt="html-logo" class="html-image" />
          </div>
          <HighlightWord word="CSS(Cascading Style Sheets)"></HighlightWord>
          <p>
            ・Webページの文字の色や大きさ、背景、配置といったスタイル（見た目）を設定する言語の略称。<br><br>
            ○1996年にCSS1が開発され、1998年に改良を加えたCSS2が確立、2011年にCSS2.1へとアップデートされました。<br>
            その後2011年から現在まで使われているCSS3が最新のCSSのバージョンです。
          </p>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" alt="css-logo" class="css-image" />
          </div>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. プログラミングとコーディング" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2. プログラミングとコーディング" id="sectionTitle2"></SectionTitle>
          <p>
            ではこれから学ぶHTML・CSSを記述することはなんというのでしょうか。<br>
            よく聞くプログラミングとコーディングにどのような違いあるのか理解しましょう!<br>
          </p><br>
          <HighlightWord word="プログラミング"></HighlightWord>
          <p>・プログラムを作成する作業全般のこと。</p>
          <HighlightWord word="コーディング"></HighlightWord>
          <p>・プログラミング言語を使ってソースコードを作成すること。</p><br>
          <p>
            おおまかな流れを説明した下の作業順序を見てみましょう。<br><br>
            まずはシステムやデザインを作るときには何をどうやって作るか<span class="markup-word-blue">設計</span>をする必要があります。<br>
            そしてその設計書をもとに<span class="markup-word-blue">開発</span>し、バグ(デザインのずれ)がないか<span class="markup-word-blue">試験</span>をして、バグがあればそれを<span class="markup-word-blue">改修</span>します。<br>
            その工程が終わればお客様にお渡し(<span class="markup-word-blue">リリース</span>)をする、というのが基本的な流れになります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" alt="prog-1" class="powerpoint-image"/>
          </div>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. HTMLとCSSの仕組み" id="subTitle3"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. HTMLの名称" id="sectionTitle3-1"></SectionTitle>
          <p>まずはHTMLについて学んでいきましょう!</p>
          <p><br>
            HTMLではタグと呼ばれる中にテキストを入れていきます。<br>
            最初に記述するタグを<span class="markup-word-blue">開始タグ</span>、<br>
            最後に記述するタグを<span class="markup-word-blue">終了タグ</span>といいます。<br><br>
          </p>
          <p>
            開始タグに入っている「h1」と書かれた部分を<span class="markup-word-blue">要素名</span>、
            開始タグと終了タグまでのすべてをまとめて<span class="markup-word-blue">要素</span>と呼びます。
          </p>
          <p>また、開始タグと終了タグの中身を<span class="markup-word-blue">要素内容</span>と呼びます。</p>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" alt="html-1" class="powerpoint-image" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-2. CSSの名称" id="sectionTitle3-2"></SectionTitle>
          <p>次にCSSについて学んでいきましょう!</p>
          <p><br>
            CSSでは、HTMLでは要素名と呼ばれていたところを<span class="markup-word-blue">セレクタ</span>と呼びます。<br>
            カッコの中で記述してある左側部分を<span class="markup-word-blue">プロパティ</span>、右側を<span class="markup-word-blue">値</span>と呼びます。
          </p>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" alt="css-1" class="powerpoint-image" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-3. 要素とプロパティ①" id="sectionTitle3-3"></SectionTitle>
          <p>
            まずはHTMLの要素から覚えていきましょう!<br><br>
            <HighlightWord word="<h1>・・・</h1>"></HighlightWord><br>
            ・見出しを作成する要素。hタグと呼ばれます。<br>
            主にはページの全体やセクションの大きなタイトルに使います。種類はh1〜h6まであり、数字が大きくなるほど画面に表示される文字は小さくなります。<br><br>
            <HighlightWord word="<p>・・・</p>"></HighlightWord><br>
            ・段落を作成する要素。pタグと呼ばれます。<br>
            段落を表し、タイトルの後の細かい文章に使います。<br><br>
            図であらわすとこのような感じです。<br>
            大きなタイトルの「PC カリキュラム」はh1を使い、サブタイトルの「最新の作品」、「自己紹介」などはh2を使用しましょう。<br>
            文章や細かい補足などにはpを使うようにしましょう。
          </p>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" alt="tag-1" class="powerpoint-image" />
          </div><br><br>
          <p>
            さっそくテキストエディタに書いて練習してみましょう!<br><br>
            ①<br>
            まずは環境構築の際にインストールしたVisual Studio Codeを開きましょう。<br>
            開いたら以下のような画面になります。(画像はWindows版です。)
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" alt="vscode-1" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            「フォルダーを開く」を押すと、Windowsの場合はエクスプローラーが開かれるのでCドライブ直下に作った「grow」フォルダに入りましょう。<br>
            Macの場合はFinderが開かれるのでサイドバーにある家マークのホームディレクトリを開きましょう。<br><br>
            開いたら同環境とも右クリックを押し、フォルダを作成しましょう。<br>
            名前は「カリキュラム練習用」などでOKです。<br>フォルダが作成できたら、作成したフォルダを選択した状態で「フォルダーの選択」を押してください。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" alt="vscode-2" class="screen-image" />
          </div><br>
          <p>
            ③<br>
            するとこのようにファイルの名前が出てきます。<br>
            「カリキュラム練習用」ファイルの中で作業できるようになりました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" alt="vscode-3" class="screen-image" />
          </div><br>
          <p>
            ④<br>
            次に「カリキュラム練習用」と表示されたフォルダの左の矢印「>」が下向きになっているか確認してください。<br><br>
            なっていなければそのファイルの名前をクリックしアイコンの左から2番目のフォルダマークをクリックします。<br>
            名前は画像のようにして新しいフォルダを作成してください。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" alt="vscode-4" class="screen-image" />
          </div><br>
          <p>
            ⑤<br>
            次に今作ったフォルダ「html-css-lesson-1」をクリックしましょう。<br>
            フォルダの左の矢印「>」が下向きになっているか確認してください。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" alt="vscode-5" class="screen-image" />
          </div><br>
          <p>
            ⑥<br>
            クリックしたら右側にあるアイコンの左から1番目のファイルマークをクリックします。<br>
            名前は画像のようにして新しいファイルを2つ作成してください。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step12)" :src="imagePaths.step12" alt="vscode-6" class="screen-image" />
          </div><br>
          <p>
            ⑦<br>
            開いたら2画面で見る方が見やすいので「style.css」をドラッグして2画面にしましょう。<br>
            左のファイルをドラッグし、右の大きい画面のタイトル部分に引っ張ると画面を分けることができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step13)" :src="imagePaths.step13" alt="vscode-7" class="screen-image" />
          </div><br>
          <p>
            ⑧<br>
            次に「index.html」に以下の内容をコピーして貼り付けましょう。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file1.filename" :copiedText="htmlSourceData.file1.code" :lang="htmlSourceData.file1.language" />
          <br>
          <p>
            以下のようになればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step14)" :src="imagePaths.step14" alt="vscode-8" class="screen-image" />
          </div><br>
          <p>
            ⑨<br>
            次に11行目に画像の記述を追加しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step15)" :src="imagePaths.step15" alt="vscode-9" class="screen-image"/>
          </div><br>
          <p>
            ⑩<br>
            編集し終わると「index.html」のタイトルの左側に白丸がある状態になっているので、Windowsは「Ctrl + S」、Macは「Command + S」で保存しましょう。<br>
            すると白丸が消えるので保存が完了しました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step16)" :src="imagePaths.step16" alt="vscode-10" class="screen-image" />
          </div><br>
          <p>
            ⑪<br>
            それでは今の内容をWebサイト上で見てみましょう。<br>
            左のサイドバーの「index.html」を右クリックしてください。<br>
            このようなタブが開かれるので「エクスプローラーで開く」を押しましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step17)" :src="imagePaths.step17" alt="vscode-11" class="screen-image" />
          </div><br>
          <p>
            ⑫<br>
            Windowsならエクスプローラー、MacならFinderが開かれるので、そこにある「index.html」をダブルクリックしましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step18)" :src="imagePaths.step18" alt="folder-1" class="screen-image" />
          </div><br>
          <p>
            ⑫<br>
            ブラウザ上の表示がこのようになればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step19)" :src="imagePaths.step19" alt="web-1" class="screen-image" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-4. 要素とプロパティ②" id="sectionTitle3-4"></SectionTitle>
          <p>
            次にCSSのプロパティを覚えていきましょう!<br><br>
            <HighlightWord word="color: [色の名前(rgb値・色コード)];"></HighlightWord><br>
            ・文字の色を変えるプロパティ。colorプロパティと呼ばれます。<br><br>
            <HighlightWord word="font-size: [文字のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・文字の大きさを変えるプロパティ。font-sizeプロパティと呼ばれます。<br><br>
            <HighlightWord word="font-family: [フォント名]; "></HighlightWord><br>
            ・文字の種類を変えるプロパティ。font-familyプロパティと呼ばれます。<br>
            フォント名が「serif」のような1単語でなく「Lucida Grande」の様に2単語になった時は必ず「 "Lucida Grande"」とダブルクオーテーションで囲みましょう。<br><br>
            それではCSSを適用してみましょう。<br><br>
            ①<br>
            テキストエディタの「style.css」に以下を入力しましょう<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step20)" :src="imagePaths.step20" alt="vscode-12" class="screen-image" />
          </div>
          <p><br>
            ②<br>
            ブラウザを更新してこのようなスタイルになればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step21)" :src="imagePaths.step21" alt="web-2" class="screen-image" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-5. 要素とプロパティ③" id="sectionTitle3-5"></SectionTitle>
          <p>
            ここまででHTMLとCSSの役割がわかったと思います。<br>
            さらにここから要素やプロパティを覚えましょう！<br><br>
            要素<br>
            <HighlightWord word="<a href='飛ばしたいURL'>・・・</a>"></HighlightWord><br>
            ・リンクを作成する要素。aタグと呼ばれます。<br>
            クリックしたら他のページへ飛ぶ事ができます。<br><br>
            <HighlightWord word="<img src='画像があるディレクトリのパス'>"></HighlightWord><br>
            ・画像を表示する要素。imgタグと呼ばれます。<br>
            <span class="markup-word-red">注意</span> : imgタグでは終了タグがないことに注意しましょう。<br>
            このような開始タグと終了タグの中に要素内容を記述できない要素の事を<span class="markup-word-blue">空要素</span>といいます。<br><br>
            また、aタグやimgタグの中にある「href」や「src」の事を<span class="markup-word-blue">属性</span>といいます。<br>
            <span class="markup-word-blue">href属性</span>→この属性を付与している要素をクリックすると遷移するURLを指定します。<br>
            <span class="markup-word-blue">src属性</span>→どこの画像を表示するか、参照するフォルダの場所を指定します。<br><br>
            図であらわすとこのような感じです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step22)" :src="imagePaths.step22" alt="tag-2" class="powerpoint-image" />
          </div><br><br>
          <p>
            それではaタグを使って画像を表示させてみましょう。<br><br>
            ①<br>
            まず以下の画像を右クリックでダウンロードして下さい。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step23)" :src="imagePaths.step23" alt="cat" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            次にテキストエディタでassetsフォルダを作り、さらにその中にimagesフォルダを作りましょう。<br>
            正しく作れたらこのような表示になります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step24)" :src="imagePaths.step24" alt="vscode-13" class="screen-image" />
          </div><br>
          <p>
            ③<br>
            フォルダを作ったら先ほど保存した画像をimagesフォルダにドラッグアンドドロップで保存しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step25)" :src="imagePaths.step25" alt="vscode-14" class="screen-image" />
          </div><br>
          <p>
            ④<br>
            次に「index.html」に以下の画像のように要素を追記しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step26)" :src="imagePaths.step26" alt="vscode-15" class="screen-image" />
          </div><br>
          <p>
            ⑤<br>
            ブラウザを確認すると、リンクと画像が表示されます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step27)" :src="imagePaths.step27" alt="web-3" class="screen-image" />
          </div><br>
        </Document>

        <!-- section 4 -->
        <SubTitle subTitle="4. HTMLとCSSの関係性" id="subTitle4"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="4-1. HTMLの親子関係" id="sectionTitle4-1"></SectionTitle>
          <p>
            ここからはHTMLの要素の関係について深堀りしていきましょう。<br><br>
            要素一つ一つにはそれぞれ<span class="markup-word-red">親子関係</span>や<span class="markup-word-red">兄弟関係</span>が必ず存在します。<br>
            要素の構造は入れ子構造になっており、一つの要素の事を大きな箱だと考えるとイメージがしやすいです。<br><br>
            それでは入れ子構造とは何か学びましょう!<br><br>
            <HighlightWord word="入れ子"></HighlightWord><br>
            ・開始タグと終了タグで囲むこと。<br><br>
            その入れ子の中にさらに入れ子がある構造を<span class="markup-word-blue">入れ子構造</span>と呼びます。<br>
            箱の中に箱が入る様なイメージです。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step28)" :src="imagePaths.step28" alt="tag-2" class="screen-image" />
          </div><br><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="4-2. 要素とプロパティ④" id="sectionTitle4-2"></SectionTitle>
          <p>
            HTMLの要素の入れ子関係を理解できる様に新しい要素とプロパティを覚えましょう。<br><br>
            要素<br>
            <HighlightWord word="<div>・・・</div>"></HighlightWord><br>
            ・文書に構造を付加する何も意味を持たない要素。divタグと呼ばれます。<br><br>
            属性<br>
            <span class="markup-word-blue">class属性</span>→要素に名前をつけることができる属性。
            cssで指定するときは名前の前に「.」をつけましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="background-color: [色の名前(rgb値・色コード)];"></HighlightWord><br>
            ・背景色を変えるプロパティ。background-colorプロパティと呼ばれます。<br><br>
            <HighlightWord word="width: [横幅のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の横幅を変えるプロパティ。widthプロパティと呼ばれます。<br><br>
            <HighlightWord word="height: [縦幅のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の縦幅を変えるプロパティ。heightプロパティと呼ばれます。<br><br><br>
            それでは実践してみましょう!<br><br>
            ①<br>
            以下をコピーしてください。<br>
          </p>
          <Terminal :fileName="htmlSourceData.file2.filename" :copiedText="htmlSourceData.file2.code" :lang="htmlSourceData.file2.language" />
          <br>
          <p>
            ②<br>
            「html-css-lesson-2」フォルダを作り、「index.html」と「style.css」フォルダをlesson-1と同じように作りましょう!<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step29)" :src="imagePaths.step29" alt="vscode-16" class="screen-image" />
          </div><br>
          <p>
            ③<br>
            以下の画像のようにhtmlファイルとcssファイルを編集しましょう。
          </p>
          <div><br>
            <img @click="openModal(imagePaths.step30)" :src="imagePaths.step30" alt="vscode-17" class="screen-image" />
          </div><br>
          <p>
            ④<br>
            先ほどのセクション3-3と同じように左のサイドバーの「index.html」を右クリックしてください。<br>
            タブが開かれるので「エクスプローラーで開く」を押しましょう。<br><br>
            ブラウザで、divタグで作った要素が表示されれば完了です。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step31)" :src="imagePaths.step31" alt="web-4" class="screen-image" />
          </div><br>
          <p>
            では次に以下の画像を見てください。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step32)" :src="imagePaths.step32" alt="tag-3" class="powerpoint-image" />
          </div><br><br>
          <p>
            このようにまずは大きい赤い枠で囲み、中で画像を同じ大きさで並べています。<br><br>
            まずは赤い大きなdivで囲み、青い小さな要素を入れていきます。これが親子関係になります。<br>
            この様な親子関係をdivタグだけで再現してみましょう!<br><br>
            ①<br>
            以下の画像のように先ほどのhtmlファイルとcssファイルに追記しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step33)" :src="imagePaths.step33" alt="vscode-15" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            編集ができたらWeb上で確認しましょう。画像と同じようにできていたらOKです。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step34)" :src="imagePaths.step34" alt="web-5" class="screen-image" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="4-3. 要素とプロパティ⑤" id="sectionTitle4-3"></SectionTitle>
          <p>
            HTMLの要素の入れ子関係をさらに学んでいきましょう。<br>
            以下の画像を見て下さい。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step35)" :src="imagePaths.step35" alt="tag-4" class="powerpoint-image"/>
          </div><br><br>
          <p>
            先ほどの画像が6枚並んでいる場面や他のページに遷移するメニューのように、共通要素はdivタグではなくリストと呼ばれる要素で親子関係を作ることがおすすめです。<br>
            それでは新しい要素を学んでいきましょう!<br><br>
            要素<br>
            <HighlightWord word="<ul>・・・</ul>"></HighlightWord><br>
            ・順序がない箇条書きのリストを表示する要素。ulタグと呼ばれます。<br><br>
            <HighlightWord word="<li>・・・</li>"></HighlightWord><br>
            ・リストの項目を表示するために使用する要素。liタグと呼ばれます。<br>
            ulとliタグはセットで使うという事を覚えておきましょう!<br><br>
            それではリストを使ってメニュー部分を作ってみましょう。<br><br>
            ①<br>
            「html-css-lesson-3」フォルダを作り、「index.html」と「style.css」フォルダをlesson-1と同じように作りましょう!<br>
          </p>
          <div><br>
            <img @click="openModal(imagePaths.step36)" :src="imagePaths.step36" alt="vscode-19" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            以下の画像のようにhtmlファイルとcssファイルを編集しましょう。
          </p>
          <div><br>
            <img @click="openModal(imagePaths.step37)" :src="imagePaths.step37" alt="vscode-20" class="screen-image" />
          </div><br>
          <p>
            ③<br>
            編集ができたらWeb上で確認しましょう。画像と同じようにできていたらOKです。
          </p>
          <div><br>
            <img @click="openModal(imagePaths.step38)" :src="imagePaths.step38" alt="web-6" class="screen-image" />
          </div><br>
          <p>
            ここで属性も一つ覚えておきましょう。<br><br>
            <span class="markup-word-blue">id属性</span>→要素に名前をつけることができる属性です。
            cssで指定するときは名前の前に「#」をつけましょう。<br>
            class属性との違いはidでつけた名前はそのページでは<span class="markup-word-red">1回しか</span>使えないという事です。<br><br>
            ではどのように使うのか、作りながらみていきましょう。<br><br>
            ①<br>
            以下を追記しましょう。
            </p>
            <div><br>
              <img @click="openModal(imagePaths.step39)" :src="imagePaths.step39" alt="vscode-20" class="screen-image" />
            </div><br>
            <p>
            ②<br>
            以下の画像の様にhtmlファイルとcssファイルを編集しましょう。<br>
            </p><br>
            
            <p>
            ③<br>
            編集ができたらWeb上で確認しましょう。画像と同じようにできていたらOKです。<br>
            このように一つだけ特別な意味を持たせるスタイルを適用するときに使いますが、使用頻度はclassより少ないという事を覚えておきましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step40)" :src="imagePaths.step40" alt="web-7" class="screen-image" />
          </div><br>
        </Document>

        <!-- section 5 -->
        <SubTitle subTitle="5. HTMLとCSSを深堀りする" id="subTitle5"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="5-1. HTMLの全体構造" id="sectionTitle5-1"></SectionTitle>
          <p>
            それではHTMLの全体の構造についてみていきましょう。<br>
            以下の画像を見て下さい。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step41)" :src="imagePaths.step41" alt="tag-5" class="powerpoint-image"/>
          </div><br><br>
          <p>
            このようにHTMLで画面に表示する前に設定しないといけない事がたくさんあります。<br>
            この各要素がどのような役割を示すのか学んでいきましょう。<br><br>
            <HighlightWord word="<!DOCTYPE>"></HighlightWord><br>
            ・HTML のバージョンを宣言する。<br>
            ドキュメントタイプ宣言と呼ばれ、HTML 文書ファイルの先頭に記述します。タグではないので注意しましょう。<br><br>
            <HighlightWord word="<html>・・・</html>"></HighlightWord><br>
            ・HTML文書であることを宣言する。<br>
            ここからHTMLの記述を「開始する」または「終了する」という宣言に使います。<br><br>
            <HighlightWord word="<head>・・・</head>"></HighlightWord><br>
            ・文書のヘッダ部分を指定する。<br>
            Webページの設定(文字コードの設定など)の情報を記述するため使います。<br><br>
            <HighlightWord word="<body>・・・</body>"></HighlightWord><br>
            ・文書のボディ部分を指定する。<br>
            文章や画像など、実際にブラウザの画面上に表示される内容を指定するため使います。<br><br>
            <HighlightWord word="<meta charset=“文字コード”>"></HighlightWord><br>
            ・Webサイトの情報を記載する。<br>
            検索エンジンやブラウザにWebページの情報を伝えるため使います。<br><br>
            <span class="markup-word-blue">charset属性</span>→文字コードを指定できる属性。
            例 : UTF8,unicode,shiftJisなど<br><br>
            <HighlightWord word="<title>・・・</title>"></HighlightWord><br>
            ・Webページのタブに表示する文字を指定する。<br>
            Webページのタイトルを表示するため使います。<br><br>
            <HighlightWord word="<link rel=“stylesheet” href=“読み込みたいファイルのパス”>"></HighlightWord><br>
            ・関連する文書ファイルを指定してその関係を定義する。<br>
            検索エンジンやブラウザにWebページの情報を伝えるため使います。(CSSの読み込みなど)<br><br>
            <span class="markup-word-blue">rel属性</span>→そのページ、ファイルとの関係性を指定できる属性。<br><br>
            このようにHTMLには決められた型があり、その構造を元に記述していく必要があります。<br>
            その決められた構造をHTMLの<span class="markup-word-red">雛形(ひながた)</span>といいます。
          </p><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="5-2. HTMLとCSSのコメント" id="sectionTitle5-2"></SectionTitle>
          <p>
            HTMLとCSSのコメントの入れ方について学びましょう。<br><br>
            HTMLやCSSでは画面上に出さずに文字を入れたいときにコメントを残しておく事ができます。<br>
            他の人が自分のデザインを見たときにわかりやすいようにするために残すように意識しましょう。<br><br>
            HTML<br>
            <HighlightWord word="<!-- 入れたいコメント -->"></HighlightWord><br><br>
            CSS<br>
            <HighlightWord word="*/ 入れたいコメント */"></HighlightWord><br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step42)" :src="imagePaths.step42" alt="tag-6" class="powerpoint-image" />
          </div><br><br>
          <div>
            <img @click="openModal(imagePaths.step43)" :src="imagePaths.step43" alt="tag-7" class="powerpoint-image" />
          </div><br><br>
          <NavigationButtons
            :previousPageName="'HtmlPage3'"
            :nextPageName="'HtmlPage2'"
          />
        </Document>
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      </div>
      <div class="side-content">
        <TableOfContents :sections="sections" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
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
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "HtmlPage1",
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
    Modal,
    NavigationButtons,
  },
  setup() {
    const sections = [
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
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/menu/html.png"),
      step2: require("../../../assets/images/menu/css.png"),
      step3: require("../../../assets/images/course/html-css-1/prog-1.png"),
      step4: require("../../../assets/images/course/html-css-1/html-1.png"),
      step5: require("../../../assets/images/course/html-css-1/css-1.png"),
      step6: require("../../../assets/images/course/html-css-1/tag-1.png"),
      step7: require("../../../assets/images/course/html-css-1/vscode-1.png"),
      step8: require("../../../assets/images/course/html-css-1/vscode-2.png"),
      step9: require("../../../assets/images/course/html-css-1/vscode-3.png"),
      step10: require("../../../assets/images/course/html-css-1/vscode-4.png"),
      step11: require("../../../assets/images/course/html-css-1/vscode-5.png"),
      step12: require("../../../assets/images/course/html-css-1/vscode-6.png"),
      step13: require("../../../assets/images/course/html-css-1/vscode-7.png"),
      step14: require("../../../assets/images/course/html-css-1/vscode-8.png"),
      step15: require("../../../assets/images/course/html-css-1/vscode-9.png"),
      step16: require("../../../assets/images/course/html-css-1/vscode-10.png"),
      step17: require("../../../assets/images/course/html-css-1/vscode-11.png"),
      step18: require("../../../assets/images/course/html-css-1/folder-1.png"),
      step19: require("../../../assets/images/course/html-css-1/web-1.png"),
      step20: require("../../../assets/images/course/html-css-1/vscode-12.png"),
      step21: require("../../../assets/images/course/html-css-1/web-2.png"),
      step22: require("../../../assets/images/course/html-css-1/tag-2.png"),
      step23: require("../../../assets/images/course/html-css-1/cat.jpg"),
      step24: require("../../../assets/images/course/html-css-1/vscode-13.png"),
      step25: require("../../../assets/images/course/html-css-1/vscode-14.png"),
      step26: require("../../../assets/images/course/html-css-1/vscode-15.png"),
      step27: require("../../../assets/images/course/html-css-1/web-3.png"),
      step28: require("../../../assets/images/course/html-css-1/box.jpg"),
      step29: require("../../../assets/images/course/html-css-1/vscode-16.png"),
      step30: require("../../../assets/images/course/html-css-1/vscode-17.png"),
      step31: require("../../../assets/images/course/html-css-1/web-4.png"),
      step32: require("../../../assets/images/course/html-css-1/tag-3.png"),
      step33: require("../../../assets/images/course/html-css-1/vscode-18.png"),
      step34: require("../../../assets/images/course/html-css-1/web-5.png"),
      step35: require("../../../assets/images/course/html-css-1/tag-4.png"),
      step36: require("../../../assets/images/course/html-css-1/vscode-19.png"),
      step37: require("../../../assets/images/course/html-css-1/vscode-20.png"),
      step38: require("../../../assets/images/course/html-css-1/web-6.png"),
      step39: require("../../../assets/images/course/html-css-1/vscode-21.png"),
      step40: require("../../../assets/images/course/html-css-1/web-7.png"),
      step41: require("../../../assets/images/course/html-css-1/tag-5.png"),
      step42: require("../../../assets/images/course/html-css-1/tag-6.png"),
      step43: require("../../../assets/images/course/html-css-1/tag-7.png"),
    };


    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      htmlSourceData,
      sections,
      imagePaths,
      selectedImage,
      isModalOpen,
      openModal,
    };
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
  cursor: pointer;
}
.css-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
}

.screen-image {
  max-width: 100%;
  height: auto;
  border: 1px solid rgb(175, 175, 175);
  cursor: pointer;
}
.powerpoint-image {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
  border: 1px solid rgb(175, 175, 175);
  cursor: pointer;
}

/* タブレット版 */
@media (max-width: 835px) {
  .main-content {
    width: 100%;
  }
  .side-content {
    display: none;
  }
}
</style>