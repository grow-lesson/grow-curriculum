<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 1"></Title>
        <Document>
          <p>スマートフォンやタブレット、PCなどで表示されるサービスやWebサイトのデザインができる技術を学んでいくセクションになります。</p>
          <p>Webデザインの目的は、情報を正しく、わかりやすく提供することです。</p>
          <p>ユーザーが操作をしやすくほしい情報にいち早く遷移できるデザインを目指していきましょう!</p>
        </Document><br>

        <!-- section 1 -->
        <SubTitle subTitle="1. HTMLとCSSについて知る"></SubTitle>
        <Document>
          <p>
            まずHTMLとCSSがの名称や意味を理解しましょう!
          言葉の意味や名称を学ぶことで専門用語やエンジニアの人との会話スムーズになるので覚えておきましょう。
          </p><br>
          <HighlightWord word="HTML(Hyper Text Markup Language)"></HighlightWord>
          <p>
            ・HTMLとはWebサイトを作成する際に、コンピューターへ構成指示を出し、表示したい文章や写真などの情報を形作るマークアップ言語の略称です。<br>
            ・Webサイトに表示させる為の骨組みを形作ります。<br><br>
            ・また、<span class="markup-word-blue">マークアップ</span>とは文章の構成や役割を示すという意味になります。<br>
            例えると、見出しや段落・表・リンクなど、文章が構成されている要素がどのような役割を持っているかを指示することができます。<br>
            HTMLの記述によって、検索エンジンがWEBページの構造を把握しやすくなります。<br><br>
            ・下のロゴに「5」と書いてあるのはHTMLのバージョン5、改訂第5版のことです。<br>
            1993年初めてHTML1が開発され、1999年12月にバージョンアップされたHTML4が開発されました。<br>
            そして2014年10月28日から現在までHTML5が使われ最新のHTMLのバージョンになります。
          </p><br>
          <div>
            <img src="../../../assets/images/menu/html.png" class="html-image" alt="html-logo" />
          </div>
          <HighlightWord word="CSS(Cascading Style Sheets)"></HighlightWord>
          <p>
            ・CSSとはWebページの文字の色や大きさ、背景、配置といったスタイル（見た目）を設定する言語の略称です。
            ・CSS1のバージョンは1996年に初めて開発され、仕様に改良を加えたCSS2が1998年に確率し、さらにCSS2.1が2011年にアップデートされました。
            そこから2011年から現在まで使われているCSS3が最新のCSS3のバージョンです。
          </p>
          <div>
            <img src="../../../assets/images/menu/css.png" class="css-image" alt="css-logo" />
          </div>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. プログラミングとコーディング"></SubTitle>
        <Document>
          <p>
            ではこれから学ぶHTML・CSSを記述することはなんというのでしょうか。<br>
            よく聞くプログラミングとコーディングにどのような違いあるのか理解しましょう!<br>
          </p><br>
          <HighlightWord word="プログラミング"></HighlightWord>
          <p>・プログラムを作成する作業全般の事をさします。</p>
          <HighlightWord word="コーディング"></HighlightWord>
          <p>・プログラミング言語を使ってソースコードを作成する事です。</p><br>
          <p>
            おおまかな流れを説明した下の作業の順序を見てみましょう。<br>
            まずはシステムやデザインを作るときには何をどうやって作るか<span class="markup-word-blue">設計</span>をする必要があります。<br>
            そしてその設計書をもとに<span class="markup-word-blue">開発</span>し、バグ(デザインがずれていないか)がないか<span class="markup-word-blue">試験</span>をしてあればそれを<span class="markup-word-blue">改修</span>します。<br>
            その工程が終わればお客様にお渡し(<span class="markup-word-blue">リリース</span>)をするのが基本的な流れになります。
          </p><br>
          <div>
            <img src="../../../assets/images/course/html-css-1/prog-1.png" class="powerpoint-image" alt="prog-1" />
          </div>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. HTMLとCSSの仕組み"></SubTitle>
        <SectionTitle sectionTitle="3-1. HTMLの名称"></SectionTitle>
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
        <SectionTitle sectionTitle="3-2. CSSの名称"></SectionTitle>
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
        <SectionTitle sectionTitle="3-3. 要素とプロパティ①" id="section3"></SectionTitle>
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
        <SectionTitle sectionTitle="3-4. 要素とプロパティ②" id="section3"></SectionTitle>
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
        <SectionTitle sectionTitle="3-5. 要素とプロパティ③" id="section3"></SectionTitle>
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
        <SubTitle subTitle="4. HTMLとCSSの関係性"></SubTitle>
        <SectionTitle sectionTitle="4-1. HTMLの親子関係"></SectionTitle>
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
        <Document>
          <SectionTitle sectionTitle="4-2. 要素とプロパティ④"></SectionTitle>
          <p>
            それではここからHTMLの要素の入れ子関係を理解できる様に新しい要素を覚えましょう。<br><br>
            要素<br><br>
            <HighlightWord word="<div>・・・</div>"></HighlightWord><br>
            ・文書に構造を付加する何も意味を持たない要素でこのタグはdivタグと呼ばれます。<br><br>
            ここで新しい属性を覚えましょう。<br>
            <span class="markup-word-blue">class属性</span>→要素に名前をつけることができる属性です。
            ほとんどの要素に付与できます。<br><br>
            プロパティ<br><br>
            <HighlightWord word="background-color: [色の名前(rgb値・色コード)];"></HighlightWord><br>
            ・背景色を変えるプロパティでbackground-colorプロパティと呼ばれます。<br><br>
            <HighlightWord word="width: [横幅のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の横幅を変えるプロパティでwidthプロパティと呼ばれます。<br><br>
            <HighlightWord word="height: [縦幅のサイズ(px,rem,%など)];"></HighlightWord><br>
            ・要素の縦幅を変えるプロパティでheightプロパティと呼ばれます。<br><br>
            それでは実践して試してみましょう!<br>
            ①以下をコピーしてください。<br>
            <Terminal :fileName="htmlSourceData.file1.filename" :copiedText="htmlSourceData.file1.code" :lang="htmlSourceData.file1.language" />
            <br>
            ②「html-css-lesson-2」フォルダを作り、「index.html」と「style.css」フォルダをlesson-1の時の様に作りましょう!<br>
            <!-- img -->
            <br>
            ③以下の画像の様にhtmlファイルとcssファイルを編集しましょう。
            <!-- img -->
            <br>
            ④以下の様な

          </p>
        </Document>

        <Terminal :fileName="htmlSourceData.file2.filename" :copiedText="htmlSourceData.file2.code" :lang="htmlSourceData.file2.language" />
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
        { id: "subTitle3", title: "  3. HTMLの仕組み" },
      ],
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
  margin-top: 40px;
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
</style>