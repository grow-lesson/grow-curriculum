<template>
  <div>
    <Header />
    <Spinner :isLoading="isLoading" />
    <button class="change_component_button" @click="toggleOS" @focus="buttonFocus" @blur="buttonBlur">{{ isWindows ? "Macをお持ちの方はこちら" : "Windowsをお持ちの方はこちら" }}</button>
    <div class="container">
      <!-- Windows版の説明 -->
      <div class="main-content" v-show="isWindows">
        <div class="attention">
          <HighlightWord word="※インストールしたアプリケーションは日々アップデートされていくので若干内容が違う可能性がありますが読み替えたり、わからない事は各個人で調べましょう!"></HighlightWord>
        </div>
        <Title title="インストールや環境構築をしよう！(Windows版)" id="Title-w"></Title>
        <SubTitle subTitle="1. カリキュラムに必要なツールをインストールする" id="subTitle1-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. ブラウザをインストールしよう!" id="sectionTitle1-w"></SectionTitle>
          <p>カリキュラムはブラウザ上で確認しながらにWebデザインをしていきます。</p>
          <p>今回はブラウザはGoogle ChromeとFire Foxどちらかを使いましょう。</p>
          <br>
          <div class="download">
            <a class="download-link" href="https://www.google.co.jp/chrome/">Google Chromeをダウンロードする</a>
            <a class="download-link" href="https://www.mozilla.org/ja/firefox/new/">Fire Foxをダウンロードする</a>
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. テキストエディタをインストールしよう!" id="sectionTitle2-w"></SectionTitle>
          <p>カリキュラムで制作したWebデザインをコーディングするテキストエディタをインストールしましょう!</p>
          <p>テキストエディタとは文字を入力したり、編集や保存ができるツールのことです。</p>
          <p><br>PCにデフォルトで「メモ帳」などがインストールするされていますが、何行もコードを書くと見にくくなります。</p>
          <p><br>今回インストールするVisual Studio Codeは、コードを見やすく、さらに効率よく入力する事に特化したテキストエディタになります。</p><br>
          <div class="download">
            <a class="download-link" href="https://code.visualstudio.com/">Visual Studio Codeをダウンロードする</a>
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. Visual Studio Codeの拡張機能をインストールしよう!" id="sectionTitle3-w"></SectionTitle>
          <p>
            ①<br>
            Visual Studio Codeをインストールしたら早速開いてみましょう!<br>
            開いたら画像の左側の赤丸部分をクリックしましょう。<br>
            開いた部分はVisual Studio Codeの拡張機能と呼ばれ、VS Codeというコンピューターのプログラムをもっと便利にするための追加機能です。<br>
            クリックしたら以下の表にある名前を検索窓で検索しインストールしましょう!
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step1)" :src="imagePaths.win.step1" alt="手順①" class="screen-image" />
          </div>
          <br>
          <table class="table">
            <thead>
              <tr class="table-header">
                <th class="table-cell">検索する拡張機能の名前</th>
                <th class="table-cell">用途</th>
              </tr>
            </thead>
            <tbody>
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
              <tr>
                <td class="table-cell">Japanese Language Pack for VS Code</td>
                <td class="table-cell">VS Codeのメニューの日本語化ツールです。</td>
              </tr>
            </tbody>
          </table>
          <br>
          <p>
            ②<br>
            次にユーザー設定変更をしましょう!<br>
            ユーザー設定は、エディタの動作や外観、拡張機能の設定などをカスタマイズするための機能です。<br>
            画面上部のメニューバーから「ファイル」をクリックし、「基本設定」→「設定」を選択します。または、キーボードで「Ctrl」を押しながら「,」を押しましょう。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step2)" :src="imagePaths.win.step2" alt="手順②" class="screen-image" />
          </div>
          <br>
          ③<br>
          <p>ショートカットキーを押した後は画像部分をクリックしましょう。</p>
          <div>
            <img @click="openModal(imagePaths.win.step3)" :src="imagePaths.win.step3" alt="手順③" class="screen-image" />
          </div>
          <br>
          ④<br>
          <p>以下の記述をsetting.jsonに加えてください。</p>
          <br>
          <Terminal :fileName="environmentData.file1.filename" :copiedText="environmentData.file1.code" :lang="environmentData.file1.language" /><br>
          <p>このようになればOKです。</p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step4)" :src="imagePaths.win.step4" alt="手順④" class="screen-image" />
          </div>
          <br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-4. Sourcetreeの拡張機能をインストールしよう!" id="sectionTitle4-w"></SectionTitle>
          <p>
            次にカリキュラムの課題をbacklog上にアップロードするためのツールをインストールしましょう!<br><br>
            今回使うSource treeと呼ばれるツールは本来はコンピュータ上でソフトウェアの開発をするためのツールです。<br>
            また、プログラムのバージョン管理システムであるGitを使いやすくするためのツールでもあります。<br>
            <!-- ソフトウェアの開発では、複数の人が同じプログラムを一緒に作業したり、プログラムのバージョン管理を行ったりします。<br>
            Gitはプログラムの変更履歴を管理したり、複数の人が同じプログラムを一緒に作業する際の協力を支援したりするためのシステムです。<br><br> -->
            <br>Gitに関しての詳しい説明は講座を通して学べるので今は課題をbacklog上にアップロードするためのツールとして考えておきましょう。
          </p>
          <br>
          <div class="download">
            <a class="download-link" href="https://www.sourcetreeapp.com/">Source treeをダウンロードする</a>
          </div>
          <br>
          <p>Source treeの初期設定をしよう!<br></p>
          <br>
          <p>
            ①<br>
            インストールしたSourceを開きましょう。<br>
            ここBitbucketアカウントとの紐づけを行いますがカリキュラムでは不要なのでスキップし「次へ」を押して下さい。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step5)" :src="imagePaths.win.step5" alt="手順①" class="screen-image" />
          </div>
          <br>
          <p>
            ②<br>
            ツールのインストール画面が表示されます。ツールは特に使用しないので「Mercurial」のチェックを外しても問題ないです。<br>必要であればチェックは残して「次へ」を押して下さい。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step6)" :src="imagePaths.win.step6" alt="手順②" class="screen-image" />
          </div>
          <br>
          <p>
            ③<br>
            ツール（Mercurial）のインストールを選択した場合は上のような画面が表示されるので、「次へ」をクリックして進みます。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step7)" :src="imagePaths.win.step7" alt="手順③" class="screen-image" />
          </div>
          <br>
          <p>
            ④<br>
            環境設定画面が表示されたら、任意のユーザー名とメールアドレスを入力し、「次へ」をクリックして進みます。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step8)" :src="imagePaths.win.step8" alt="手順④" class="screen-image" />
          </div>
          <br>
          <p>
            ⑤<br>
            SSHキーを読み込むかどうかのポップアップが表示されます。「いいえ」を押してスキップします。<br>
            ここまで出来たら完了です。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step9)" :src="imagePaths.win.step9" alt="手順⑤" class="screen-image" />
          </div>
          <br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-5. GitBashをインストールしよう!" id="sectionTitle5-w"></SectionTitle>
          <p>
            次にコマンドラインと、Gitと呼ばれるコースを受講するときに使用するためのツールをインストールしましょう!<br><br>
            今回使うGitBashと呼ばれるツールはバージョン管理ソフトと呼ばれ、ファイルの状態を記録したり過去の状態に差し替えたりするソフトです。<br>
            Source treeではボタン操作などでシンプルに管理できますが、それらを文字入力で管理したり、ファイルやフォルダを作成することができます。
          </p>
          <p><br>
            ①<br>
            以下からGitBashをダウンロードしましょう!<br>
            ダウンロードというボタンを押してください。<br>
          </p>
          <br>
          <div class="download">
            <a class="download-link" href="https://gitforwindows.org/">GitBashをダウンロードする</a>
          </div>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step10)" :src="imagePaths.win.step10" alt="手順⑥" class="screen-image" />
          </div>
          <br>
          <p>
            ②<br>
            ダウンロードしたらエクスプローラーから次のようなファイルがあるのでダブルクリックしてインストールを開始します<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" alt="手順⑦" class="screen-image" />
          </div>
          <br>
          <p>
            ③<br>
            起動すると次のようなウインドウが表示されます。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step12)" :src="imagePaths.win.step12" alt="手順⑧" class="screen-image" />
          </div>
          <br>
          <p>
            ④<br>
            Nextを押します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step13)" :src="imagePaths.win.step13" alt="手順⑨" class="screen-image" />
          </div>
          <br>
          <p>
            ⑤<br>
            この画面ではGitBashHereにチェックが付いていることを確認してNextを押します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step14)" :src="imagePaths.win.step14" alt="手順⑩" class="screen-image" />
          </div>
          <br>
          <p>
            ⑥<br>
            Nextを押します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step15)" :src="imagePaths.win.step15" alt="手順⑪" class="screen-image" />
          </div>
          <br>
          <p>
            ⑦<br>
            2番目を選択した状態でNextを選択。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step16)" :src="imagePaths.win.step16" alt="手順⑫" class="screen-image" />
          </div>
          <br>
          <p>
            ⑧<br>
            ここもNextを選択します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step17)" :src="imagePaths.win.step17" alt="手順⑬" class="screen-image" />
          </div>
          <br>
          <p>
            ⑨<br>
            この画面もNextを選択します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step18)" :src="imagePaths.win.step18" alt="手順⑭" class="screen-image" />
          </div>
          <br>
          <p>
            ⑩<br>
            同じくNextを選択します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step19)" :src="imagePaths.win.step19" alt="手順⑮" class="screen-image" />
          </div>
          <br>
          <p>
            ⑪<br>
            Nextを押します。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step20)" :src="imagePaths.win.step20" alt="手順⑯" class="screen-image" />
          </div>
          <br>
          <p>
            ⑫<br>
            installを押せば完了です。<br>
          </p>
          <div><br>
            <img @click="openModal(imagePaths.win.step21)" :src="imagePaths.win.step21" alt="手順⑰" class="screen-image" style="max-width: 60%;"/>
          </div>
          <br>
          <p>
            ⑬<br>
            チェックを全て外してNextを押せば完了です。<br>
          </p>
          <div><br>
            <img @click="openModal(imagePaths.win.step22)" :src="imagePaths.win.step22" alt="手順⑱" class="screen-image" style="max-width: 60%;"/>
          </div>
          <br>
        </Document>
      </div>
      <!-- Mac版の説明 -->
      <div class="main-content" v-show="!isWindows">
        <div class="attention">
          <HighlightWord word="※インストールしたアプリケーションは日々アップデートされていくので若干内容が違う可能性がありますが読み替えたり、わからない事は各個人で調べましょう!"></HighlightWord>
        </div>
        <Title title="インストールや環境構築をしよう！(Mac版)" id="Title-m"></Title>
        <SubTitle subTitle="1. カリキュラムに必要なツールをインストールする" id="subTitle1-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. ブラウザをインストールしよう!" id="sectionTitle1-m"></SectionTitle>
          <p>カリキュラムはブラウザ上で確認しながらにWebデザインをしていきます。</p>
          <p>今回はブラウザはGoogle ChromeとFire Foxどちらかを使いましょう。</p>
          <br>
          <div class="download">
            <a class="download-link" href="https://www.google.co.jp/chrome/">Google Chromeをダウンロードする</a>
            <a class="download-link" href="https://www.mozilla.org/ja/firefox/new/">Fire Foxをダウンロードする</a>
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. テキストエディタをインストールしよう!" id="sectionTitle2-m"></SectionTitle>
          <p>カリキュラムで制作したWebデザインをコーディングするテキストエディタをインストールしましょう!</p>
          <p>テキストエディタとは文字を入力したり、編集や保存ができるツールのことです。</p>
          <p><br>PCにデフォルトで「メモ帳」などがインストールするされていますが、何行もコードを書くと見にくくなります。</p>
          <p><br>今回インストールするVisual Studio Codeはそのコードを見やすく、さらに効率よく入力する事に特化したテキストエディタになります。</p><br>
          <div class="download">
            <a class="download-link" href="https://code.visualstudio.com/">Visual Studio Codeをダウンロードする</a>
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. Visual Studio Codeの拡張機能をインストールしよう!" id="sectionTitle3-m"></SectionTitle>
          ①<br>
          <p>
            Visual Studio Codeをインストールしたら早速開いてみましょう!<br>
            開いたら画像の赤丸部分をクリックしましょう。<br>
            その開いた部分はVisual Studio Codeの拡張機能と呼ばれ、VS Codeというコンピューターのプログラムをもっと便利にするための追加機能です。<br>
            クリックしたら以下の表にある名前を検索窓で検索しインストールしましょう!
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step1)" :src="imagePaths.mac.step1" alt="手順①" class="screen-image" />
          </div>
          <br>
          <table class="table">
            <thead>
              <tr class="table-header">
                <th class="table-cell">検索する拡張機能の名前</th>
                <th class="table-cell">用途</th>
              </tr>
            </thead>
            <tbody>
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
              <tr>
                <td class="table-cell">Japanese Language Pack for VS Code</td>
                <td class="table-cell">VS Codeのメニューの日本語化ツールです。</td>
              </tr>
            </tbody>
          </table>
          <br>
          ②<br>
          <p>
            次にユーザー設定変更をしましょう!<br>
            ユーザー設定は、エディタの動作や外観、拡張機能の設定などをカスタマイズするための機能です。<br>
            画面上部のメニューバーから「ファイル」をクリックし、「基本設定」→「設定」を選択します。または、キーボードで「Command」を押しながら「,」を押しましょう。 すると設定画面が開きます。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step2)" :src="imagePaths.mac.step2" alt="手順②" class="screen-image" />
          </div>
          <br>
          ③<br>
          <p>ショートカットキーを押した後は画像部分をクリックしましょう。</p>
          <div>
            <img @click="openModal(imagePaths.mac.step3)" :src="imagePaths.mac.step3" alt="手順③" class="screen-image" />
          </div>
          <br>
          ④<br>
          <p>以下の記述をsetting.jsonに加えてください。</p>
          <br>
          <Terminal :fileName="environmentData.file1.filename" :copiedText="environmentData.file1.code" :lang="environmentData.file1.language" /><br>
          <p>このようになればOKです。</p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step4)" :src="imagePaths.mac.step4" alt="手順④" class="screen-image" />
          </div>
          <br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-4. Sourcetreeの拡張機能をインストールしよう!" id="sectionTitle4-m"></SectionTitle>
          <p>
            次にカリキュラムの課題をbacklog上にアップロードするためのツールをインストールしましょう!<br><br>
            今回使うSource treeと呼ばれるツールは本来はコンピュータ上でソフトウェアの開発をするためのツールです。<br>
            <!-- ソフトウェアの開発では、複数の人が同じプログラムを一緒に作業したり、プログラムのバージョン管理を行ったりします。<br> -->
            また、プログラムのバージョン管理システムであるGitを使いやすくするためのツールでもあります。<br>
            <!-- Gitはプログラムの変更履歴を管理したり、複数の人が同じプログラムを一緒に作業する際の協力を支援したりするためのシステムです。<br> -->
            <br>Gitに関しての詳しい説明は講座を通して学べるので今は課題をbacklog上にアップロードするためのツールとして考えておきましょう。
          </p>
          <br>
          <div class="download">
            <a class="download-link" href="https://www.sourcetreeapp.com/">Source treeをダウンロードする</a>
          </div>
          <br>
          <p>Source treeの初期設定をしよう!<br></p>
          <br>
          <p>
            ①<br>
            インストールしたSourceを開きましょう。<br>
            ここBitbucketアカウントとの紐づけを行いますがカリキュラムでは不要なのでスキップし「続行」をクリックして進みます。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step5)" :src="imagePaths.mac.step5" alt="手順①" class="screen-image" />
          </div>
          <br>
          <p>
            ②<br>
            任意のユーザー名とメールアドレスを入力し、「完了」をクリックして進みます。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step6)" :src="imagePaths.mac.step6" alt="手順②" class="screen-image" />
          </div>
          <br>
          <p>
            ③<br>
            この画面が出れば完了です。<br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step7)" :src="imagePaths.mac.step7" alt="手順③" class="screen-image" />
          </div>
          <br>
        </Document>
      </div>
      <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      <div class="side-content" v-show="isWindows && !isSmallScreen">
        <TableOfContents :sections="windowsSections" />
      </div>
      <div class="side-content" v-show="!isWindows && !isSmallScreen">
        <TableOfContents :sections="macSections" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { environmentData } from "@/data/environmentData.js";
import Spinner from "@/components/Spinner.vue";
import Modal from "@/components/common/Modal.vue";

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
    TableOfContents,
    Spinner,
    Modal,
  },
  setup() {
    const isWindows = ref(true);
    const isSmallScreen = ref(false);
    const isLoading = ref(false);

    const toggleOS = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        isWindows.value = !isWindows.value;
      }, 1200);
    };

    const windowsSections = computed(() => [
      { id: "Title-w", title: "インストールや環境構築をしよう！(Windows版)" },
      { id: "subTitle1-w", title: "  1. カリキュラムに必要なツールをインストールする" },
      { id: "sectionTitle1-w", title: "    1-1. ブラウザをインストールしよう!" },
      { id: "sectionTitle2-w", title: "    1-2. テキストエディタをインストールしよう!" },
      { id: "sectionTitle3-w", title: "    1-3. Visual Studio Codeの拡張機能をインストールしよう!" },
      { id: "sectionTitle4-w", title: "    1-4. Sourcetreeの拡張機能をインストールしよう!" },
      { id: "sectionTitle5-w", title: "    1-5. GitBashをインストールしよう!" },
    ]);

    const macSections = computed(() => [
      { id: "Title-m", title: "インストールや環境構築をしよう！(Mac版)" },
      { id: "subTitle1-m", title: "  1. カリキュラムに必要なツールをインストールする" },
      { id: "sectionTitle1-m", title: "    1-1. ブラウザをインストールしよう!" },
      { id: "sectionTitle2-m", title: "    1-2. テキストエディタをインストールしよう!" },
      { id: "sectionTitle3-m", title: "    1-3. Visual Studio Codeの拡張機能をインストールしよう!" },
      { id: "sectionTitle4-m", title: "    1-4. Sourcetreeの拡張機能をインストールしよう!" },
    ]);

    const imagePaths = {
      win: {
        step1: require("../../assets/images/environment/vscode-win-1.png"),
        step2: require("../../assets/images/environment/vscode-win-2.png"),
        step3: require("../../assets/images/environment/vscode-win-mac-1.png"),
        step4: require("../../assets/images/environment/vscode-win-mac-2.png"),
        step5: require("../../assets/images/environment/SourceTree-win-1.png"),
        step6: require("../../assets/images/environment/SourceTree-win-2.png"),
        step7: require("../../assets/images/environment/SourceTree-win-3.png"),
        step8: require("../../assets/images/environment/SourceTree-win-4.png"),
        step9: require("../../assets/images/environment/SourceTree-win-5.png"),
        step10: require("../../assets/images/environment/gitbash-1.png"),
        step11: require("../../assets/images/environment/gitbash-2.png"),
        step12: require("../../assets/images/environment/gitbash-3.png"),
        step13: require("../../assets/images/environment/gitbash-4.png"),
        step14: require("../../assets/images/environment/gitbash-5.png"),
        step15: require("../../assets/images/environment/gitbash-6.png"),
        step16: require("../../assets/images/environment/gitbash-7.png"),
        step17: require("../../assets/images/environment/gitbash-8.png"),
        step18: require("../../assets/images/environment/gitbash-9.png"),
        step19: require("../../assets/images/environment/gitbash-10.png"),
        step20: require("../../assets/images/environment/gitbash-11.png"),
        step21: require("../../assets/images/environment/gitbash-12.png"),
        step22: require("../../assets/images/environment/gitbash-13.png"),
      },
      mac: {
        step1: require("../../assets/images/environment/vscode-mac-1.png"),
        step2: require("../../assets/images/environment/vscode-mac-2.png"),
        step3: require("../../assets/images/environment/vscode-win-mac-1.png"),
        step4: require("../../assets/images/environment/vscode-win-mac-2.png"),
        step5: require("../../assets/images/environment/SourceTree-mac-1.png"),
        step6: require("../../assets/images/environment/SourceTree-mac-2.png"),
        step7: require("../../assets/images/environment/SourceTree-mac-3.png"),
      },
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };    

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      isWindows,
      isSmallScreen,
      isLoading,
      environmentData,
      windowsSections,
      macSections,
      imagePaths,
      selectedImage,
      isModalOpen,
      toggleOS,
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
.change_component_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  position: relative;
  background: #228bc8;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  padding: 0 25px 0 40px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: left;
  text-decoration: none;
  transition-duration: 0.3s;
  margin: 20px 0 0 50px;
}

.change_component_button:before {
  content: "";
  width: 8px;
  height: 8px;
  border: 0;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 25px;
  margin-top: -6px;
}

.change_component_button:hover {
  background: #fff;
  color: #228bc8;
}

.change_component_button:hover:before {
  border-top: 2px solid #228bc8;
  border-right: 2px solid #228bc8;
}

.main-content {
  width: 75%;
}

.side-content {
  margin-left: 1%;
  margin-top: 20px;
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

.attention {
  width: 80%;
  margin-left: 50px;
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link {
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

.screen-image {
  max-width: 100%;
  height: auto;
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

/* スマホ版 */
@media (max-width: 648px) {
  .change_component_button {
    width: auto; /* 幅を自動調整 */
    text-align: center; /* テキストを中央揃え */
    margin: 20px auto; /* 上下のマージンを調整 */
  }

  .change_component_button:before {
    display: none; /* トライアングルアイコンを非表示 */
  }
}
</style>
