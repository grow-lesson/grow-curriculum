<template>
  <div>
    <Header />
    <Title title="インストールや環境構築をしよう！"></Title>
    <SubTitle subTitle="1. カリキュラムに必要なツールをインストールする"></SubTitle>
    <SectionTitle sectionTitle="1-1. ブラウザをインストールしよう!"></SectionTitle>
    <Document>
      <p>カリキュラムはブラウザ上で確認しながらにWebデザインをしていきます。</p>
      <p>今回はブラウザはGoogle ChromeとFire Foxどちらかを使いましょう。</p>
      <br>
      <div class="download">
        <a class="download-link" href="https://www.google.co.jp/chrome/">Google Chromeをダウンロードする</a>
        <a class="download-link" href="https://www.mozilla.org/ja/firefox/new/">Fire Foxをダウンロードする</a>
      </div>
    </Document>
    <SectionTitle sectionTitle="1-2. テキストエディタをインストールしよう!"></SectionTitle>
    <Document>
      <p>カリキュラムで制作したWebデザインをコーディングするテキストエディタをインストールしましょう!</p>
      <p>テキストエディタとは文字を入力したり、編集や保存ができるツールのことです。</p>
      <p>PCにデフォルトで「メモ帳」などがインストールするされていますがプログラムを組んだり、デザインを作ったりすると何行もコードを書くので見にくくなります。</p>
      <p>今回インストールするVisual Studio Codeはそのコードを見やすく、さらに効率よく入力する事に特化したテキストエディタになります。</p>
      <div class="download">
        <a class="download-link" href="https://code.visualstudio.com/">Visual Studio Codeをダウンロードする</a>
      </div>
    </Document>
    <SectionTitle sectionTitle="1-3. Visual Studio Codeの拡張機能をインストールしよう!"></SectionTitle>
    <Document>
      <p>
        Visual Studio Codeをインストールしたら早速開いてみましょう!<br>
        開いたら画像の赤丸部分をクリックしましょう。<br>
        その開いた部分はVisual Studio Codeの拡張機能と呼ばれ、VS Codeというコンピューターのプログラムをもっと便利にするための追加機能です。<br>
        クリックしたら以下の表にある名前を検索窓で検索しインストールしましょう!
      </p>
      <!-- <img src="" alt="拡張機能のインストール手順画像①"> --><br>
      <table class="table">
        <thead>
          <tr class="table-header">
            <th class="table-cell">検索する拡張機能の名前</th>
            <th class="table-cell">用途</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-cell">.ejs</td>
            <td class="table-cell">テンプレート内のJavaScriptコードのシンタックスハイライト（色付け）や、コードの補完（自動入力）、エラーチェックなどの便利な機能を利用することができます。これにより、テンプレートの作成や編集が簡単になり、間違いを見つけやすくなります。</td>
          </tr>
          <tr>
            <td class="table-cell">Editor Config for VS Code</td>
            <td class="table-cell">複数の開発者やエディタ間でコードの書式設定を統一するためのツールです。異なる開発環境やエディタを使用している場合でも、コードの書式が一貫していることを確保することができます。</td>
          </tr>
          <tr>
            <td class="table-cell">ESLint</td>
            <td class="table-cell">プログラミングコードの品質を向上させるためのツールです。コードの潜在的な問題やエラーを検出し、開発者に指摘や警告を出してくれます。</td>
          </tr>
          <tr>
            <td class="table-cell">Prettier</td>
            <td class="table-cell">プログラミングコードの書式を自動的に整えるためのツールです。コードをきれいに整形することで、可読性が向上し、コードの見た目が統一されます。</td>
          </tr>
        </tbody>
      </table><br>
      <p>
        次にユーザー設定変更をしましょう!<br>
        ユーザー設定は、エディタの動作や外観、拡張機能の設定などをカスタマイズするための機能です。<br>
        画面上部のメニューバーから「ファイル」をクリックし、「基本設定」→「設定」を選択します。または、キーボードで「Command」を押しながら「,」を押しましょう。(Windowsは「Ctrl」を押しながら「,」)
      </p><br>
      <!-- <img src="" alt="ユーザー設定変更画像①"> --><br>
      <p>ショートカットキーを押した後は画像部分をクリックしましょう。そして開いたファイルに以下の記述で書き換えてください。</p>
      <!-- <img src="" alt="ユーザー設定変更画像②"> --><br>
      <Terminal :fileName="environmentData.file1.filename" :copiedText="environmentData.file1.code" :lang="environmentData.file1.language" />
    </Document>
    <SectionTitle sectionTitle="1-4. Sourcetreeの拡張機能をインストールしよう!"></SectionTitle>
    <Document>
      <p>
        次にカリキュラムの課題をbacklog上にアップロードするためのツールをインストールしましょう!<br>
        今回使うSource treeと呼ばれるツールは本来はコンピュータ上でソフトウェアの開発をするためのツールです。<br>
        ソフトウェアの開発では、複数の人が同じプログラムを一緒に作業したり、プログラムのバージョン管理を行ったりします。<br>
        また、プログラムのバージョン管理システムであるGitを使いやすくするためのツールです。<br>
        Gitはプログラムの変更履歴を管理したり、複数の人が同じプログラムを一緒に作業する際の協力を支援したりするためのシステムです。<br>
        Gitに関しての詳しい説明は講座を通して学べるので今は課題をbacklog上にアップロードするためのツールとして考えておきましょう。
      </p><br>
      <div class="download">
        <a class="download-link" href="https://www.sourcetreeapp.com/">Source treeをダウンロードする</a>
      </div>
      <br>
      <p>
        Source treeの初期設定をしよう!(Windows版ですがMacもほとんど一緒です)<br>
      </p>
      <br>
      <p>
        ①<br>
        ここBitbucketアカウントとの紐づけを行いますがカリキュラムでは不要なのでスキップしましょう。<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/SourceTree-win-1.png" alt="手順①" class="screen-image">
      </div>
      <br>
      <p>
        ②<br>
        ツールのインストール画面が表示されます。ツールは特に使用しないので「Mercurial」のチェックを外しも問題ないです。必要であればチェックは残して「次へ」を押して下さい。<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/SourceTree-win-2.png" alt="手順②" class="screen-image">
      </div>
      <br>
      <p>
        ③<br>
        ツール（Mercurial）のインストールを選択した場合は上のような画面が表示されるので、「次へ」をクリックして進みます。<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/SourceTree-win-3.png" alt="手順③" class="screen-image">
      </div>
      <br>
      <p>
        ④<br>
        環境設定画面が表示されたら、任意のユーザー名とメールアドレスを入力し、「次へ」をクリックして進みます。
      </p><br>
      <div>
        <img src="../../assets/images/procedure/SourceTree-win-4.png" alt="手順④" class="screen-image">
      </div>
      <br>
      <p>
        ⑤<br>
        SSHキーを読み込むかどうかのポップアップが表示されます。「いいえ」を押してスキップします。<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/SourceTree-win-5.png" alt="手順⑤" class="screen-image">
      </div>
      <br>
    </Document>
    <HighlightWord word=""></HighlightWord>
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
import { environmentData } from "@/data/environmentData.js";

export default {
  name: "Environment",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    Terminal,
  },
  data() {
    return {
      environmentData: environmentData,
    };
  },
};
</script>

<style scoped>
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

.download{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link{
  color: rgb(72, 0, 255);
}
.table {
  border-collapse: collapse;
  width: 100%;
}
.table-header {
  background-color: #f2f2f2;
  font-weight: bold;
}
.table-cell {
  border: 1px solid #ccc;
  padding: 10px;
}
.screen-image{
  max-width: 100%;
  height: auto;
}
</style>