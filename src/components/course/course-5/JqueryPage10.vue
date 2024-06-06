<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="JQuery 10" id="Title"></Title>
        <Document>
          <p>API実装について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. API連携における前提知識" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. APIとは?" id="sectionTitle1-1"></SectionTitle>
          <p>
            まずはAPIがどういったものか理解しましょう!<br><br>
            <HighlightWord word="API"></HighlightWord>
            <br>
            ・APIとはコンピューターやアプリケーションが他のコンピューターやアプリケーションとやり取りするための取り決めやルールの事を言います。<br>
            プログラム同士がうまく連携できるようにするための「決まりごと」を定めています。<br><br>
            具体的な例を挙げると、天気予報のアプリがAPIを使う場合を考えてみましょう。このアプリが、インターネット上にある天気情報を提供するサービス（例えば、気象庁のサイト）から情報を取得したいとき、APIを使います。
            このAPIが「今日の天気を教えてください」という決まった形式でリクエストを送ると、気象庁のサイトは「今日は晴れです」とレスポンスをするのです。
            つまり、APIを使うと、異なるプログラムやサービスが簡単に情報をやり取りできるようになるのです。
        </p><br>
        </Document>
        <SubTitle subTitle="2. 楽天ブックスAPIを使ったデータ取得の実装" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. カリキュラムでの考え方やヒント" id="sectionTitle2-1"></SectionTitle>
          <HighlightWord word="※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"></HighlightWord>
          <p>
            このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう<br><br>
            1: 初期設定と変数の定義<br>
            2: ボタンをクリックしたときのイベント設定<br>
            3: 楽天ブックスAPIからデータを取得する<br>
            4: 検索結果が見つからない場合のメッセージを表示<br>
            5: 検索結果がヒットしたときに本の情報を表示<br>
            <br>
            まずは、ページが読み込まれたときに実行される関数と変数の定義を行います。<br>
            (1)ページが読み込まれたときに実行される関数を作成します。<br>
            (2)本のリストを表示する要素を指定する変数を作成します。<br>
            (3)ページ番号を追跡するための変数を作成します。<br>
            (4)前回の検索ワードを保存するための変数を作成します。<br>
          </p><br>
          <Terminal :fileName="jqueryData.file1.filename" :copiedText="jqueryData.file1.code" :lang="jqueryData.file1.language" />
          <p>
            <br>
            次に、取得した本のデータを使ってHTMLのリストアイテムを作成し、それを表示する関数を作成します。<br>
            (1)showItemsという名前の関数を作成します。<br>
            (2)取得したデータを逆順に処理します。<br>
            (3)本の情報をHTML形式でテンプレートに埋め込みます。<br>
            (4)作成したテンプレートをリストの最初に追加します。<br>
          </p><br>
          <Terminal :fileName="jqueryData.file2.filename" :copiedText="jqueryData.file2.code" :lang="jqueryData.file2.language" />
          <p>
            <br>
            検索結果が見つからない場合に表示されるメッセージを追加する関数を作成します。<br>
            (1)emptyMessageという名前の関数を作成します。<br>
            (2)リストの前にメッセージを表示します。<br>
          </p><br>
          <Terminal :fileName="jqueryData.file3.filename" :copiedText="jqueryData.file3.code" :lang="jqueryData.file3.language" />
          <p>
            <br>
            AJAXを使って、楽天ブックスAPIからデータを取得する関数を作成します。<br>
            (1)fetchBookDataという名前の関数を作成します。<br>
            (2)検索ワードを取得します。<br>
            (3)ページ番号を1つ増やします。<br>
            (4)検索ワードが前回と異なる場合の処理を行います。<br>
            (5)AJAXリクエストを送信します。<br>
          </p><br>
          <Terminal :fileName="jqueryData.file4.filename" :copiedText="jqueryData.file4.code" :lang="jqueryData.file4.language" />
          <p>
            <br>
            最後に、検索ボタンがクリックされたときにfetchBookData関数が実行されるように設定します。<br>
            (1)clickDataという名前の関数を作成します。<br>
            (2)検索ボタンがクリックされたときにfetchBookData関数を実行します。<br>
            (3)clickData関数を呼び出してクリックイベントを設定します。<br>
          </p><br>
          <Terminal :fileName="jqueryData.file5.filename" :copiedText="jqueryData.file5.code" :lang="jqueryData.file5.language" />
        </Document>
        <NavigationButtons
            :previousPageName="'JQueryPage9'"
            :nextPageName="'JQueryPage1'"
          />
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
import { jqueryData } from "@/data/jqueryData10.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "JqueryPage10",
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
      { id: "Title", title: "1. API連携における前提知識" },
      { id: "subTitle1", title: "  1. JQueryについて学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. JQueryとは?" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-1/javascript.png"),
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      jqueryData,
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

.description-red {
  color: rgb(255, 37, 37);
  font-weight: bold;
}

.javascript-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
}

.nodejs-logo {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link {
  color: rgb(72, 0, 255);
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

.siteImages{
  display: flex;
  flex-wrap: wrap;
}

.siteImage {
  width: 30%;
  margin-left: 10px;
}

.siteImage:nth-child(n+4) {
  margin-top: 10px;
}

/* タブレット版 */
@media (max-width: 835px) {
  .main-content {
    width: 100%;
  }
  .side-content {
    display: none;
  }

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