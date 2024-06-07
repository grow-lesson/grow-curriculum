<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="JQuery 8" id="Title"></Title>
        <Document>
          <p>スワイプの実装について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. スワイプの実装" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. カリキュラムでの考え方やヒント" id="sectionTitle1-1"></SectionTitle>
          <HighlightWord word="※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"></HighlightWord>
          <p>
            このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう<br><br>
            1: 初期設定と変数の定義、タッチイベントの設定<br>
            2: タッチイベントから位置を取得する関数を定義してください<br>
            3: タッチ開始時の処理を定義してください<br>
            4: タッチ移動時の処理を定義してください<br>
            5: タッチ終了時の処理を定義してください<br>
            <br>
            まずは、初期設定と変数の定義、最初の関数の呼び出しを行います。<br>
            (1)スワイプリスト要素を取得してください (変数名: $swipeList)<br>
            (2)スワイプアイテム要素を取得してください (変数名: $swipeItem)<br>
            (3)スワイプアイテムの幅を取得してください (変数名: swipeWidth)<br>
            (4)スワイプアイテムの数を取得してください (変数名: swipeLength)<br>
            (5)スワイプエリアの幅を計算してください (変数名: swipeArea)<br>
            (6)スワイプの位置を格納する配列を作成してください (変数名: swipeArray)<br>
            (7)タッチ位置のオブジェクトを作成してください (変数名: position)<br>
            (8)その他の設定
            ボディのoverscroll-behaviorをnoneに設定してください<br>
            スワイプリストの幅を設定してください<br>
            スワイプアイテムの位置を計算して配列に格納してください<br>
            (9)スワイプエリアのタッチイベントを設定<br>
            タッチ開始イベントを設定してください (関数名: touchStart)<br>
            タッチ移動イベントを設定してください (関数名: touchMove)<br>
          </p><br>
          <Terminal :fileName="jqueryData.file1.filename" :copiedText="jqueryData.file1.code" :lang="jqueryData.file1.language" />
          <p>
            <br>
            タッチイベントから位置を取得する関数を定義してください<br>
            (1)タッチイベントから位置を取得してください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file2.filename" :copiedText="jqueryData.file2.code" :lang="jqueryData.file2.language" />
          <p>
            <br>
            タッチイベントから位置を取得する関数を定義してください<br>
            (1)タッチイベントから位置を取得してください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file3.filename" :copiedText="jqueryData.file3.code" :lang="jqueryData.file3.language" />
          <p>
            <br>
            次にタッチ移動時の処理を定義してください<br>
            (1)タッチ移動時の位置を設定してください<br>
            (2)タッチ移動範囲を計算してください<br>
            (3)スワイプリストの位置を更新してください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file4.filename" :copiedText="jqueryData.file4.code" :lang="jqueryData.file4.language" />
          <p>
            <br>
            最後にスワイプリストのアニメーションを設定してください<br>
            (1)タッチ終了時の位置を計算してください<br>
            (2)タッチ終了時の位置を計算してください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file5.filename" :copiedText="jqueryData.file5.code" :lang="jqueryData.file5.language" />
          <NavigationButtons
            :previousPageName="'JqueryPage7'"
            :nextPageName="'JqueryPage9'"
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
import { jqueryData } from "@/data/jqueryData8.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "JqueryPage8",
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
    { id: "Title", title: "JQuery 8" },
      { id: "subTitle1", title: "  1. スワイプの実装" },
      { id: "sectionTitle1-1", title: "    1-1. カリキュラムでの考え方やヒント" },
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