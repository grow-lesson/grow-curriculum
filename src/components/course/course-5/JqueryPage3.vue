<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="JQuery 3" id="Title"></Title>
        <Document>
          <p>モーダルの実装について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. モーダルの実装" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. カリキュラムでの考え方やヒント" id="sectionTitle1-1"></SectionTitle>
          <HighlightWord word="※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"></HighlightWord>
          <p>
            このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう<br><br>
            1: 初期設定と変数の定義を決める<br>
            2: モーダル表示ボタンのクリックイベントを設定<br>
            3: モーダル閉じるボタンのクリックイベントを設定<br>
            <br>
            まずは、初期設定と変数の定義を行います。<br>
            (1)モーダル表示ボタンの要素を取得してください (変数名: $modalShow)<br>
            (2)モーダルの要素を取得してください (変数名: $modal)<br>
            (3)モーダル閉じるボタンの要素を取得してください (変数名: $modalClose)<br>
          </p><br>
          <Terminal :fileName="jqueryData.file1.filename" :copiedText="jqueryData.file1.code" :lang="jqueryData.file1.language" />
          <p>
            <br>
            ここまでできたらモーダル表示ボタンのクリックイベントを設定してください<br>
            (1)モーダルをフェードインしてください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file2.filename" :copiedText="jqueryData.file2.code" :lang="jqueryData.file2.language" />
          <p>
            <br>
            ここまでできたらモーダル閉じるボタンのクリックイベントを設定してください<br>
            (1)モーダルをフェードアウトしてください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file3.filename" :copiedText="jqueryData.file3.code" :lang="jqueryData.file3.language" />
          <NavigationButtons
            :previousPageName="'JqueryPage2'"
            :nextPageName="'JqueryPage4'"
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
import { jqueryData } from "@/data/jqueryData3.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "JqueryPage3",
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
      { id: "Title", title: "JQuery 3" },
      { id: "subTitle1", title: "  1. モーダルの実装" },
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