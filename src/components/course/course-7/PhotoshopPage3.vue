<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Photoshop 3" id="Title"></Title>
        <Document>
          <p>最終課題</p>
        </Document>

        <!-- section 1 -->
        <Document>
          <p>
            Photoshopを使ってバナーをトレースしましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.arrayImage)" :src="imagePaths.arrayImage" class="photoshop-image" alt="バナー見本" />
          </div><br>
          <p>
            ・制作時のポイント<br>
            アートボードは1200×1000pxに設定してください。<br>
            画面左の青い背景と「詳しくはこちら」ボタンはグラデーションツールを使用しましょう。<br>
            背景のビルの写真を暗くし、女性の写真は明るくしましょう。
          </p><br><br>
          <p>
            素材は以下の画像をダウンロードして使用してください。
          </p>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="photoshop-image" alt="女性の画像" />
            <br>
            <br>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="photoshop-image" alt="会社ロゴ" />
            <br>
            <br>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="photoshop-image" alt="チェック" />
            <br>
            <br>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="photoshop-image" alt="ビルの画像" />
            <br>
            <br>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="photoshop-image" alt="グラデーション画像" />
          </div>
          <NavigationButtons
            :previousPageName="'PhotoshopPage2'"
            :nextPageName="'PhotoshopPage1'"
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
// import SubTitle from "@/components/SubTitle.vue";
// import SectionTitle from "@/components/SectionTitle.vue";
// import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { javascriptData } from "@/data/javascriptData.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "PhotoshopPage3",
  components: {
    Header,
    Footer,
    Title,
    // SubTitle,
    // SectionTitle,
    // HighlightWord,
    Document,
    TableOfContents,
    Modal,
    NavigationButtons,
  },
  setup() {
    const sections = [
      { id: "Title", title: "Photoshop 3" },
      { id: "subTitle1", title: "  最終課題" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      arrayImage: require("../../../assets/images/course/photoshop-3/eJdu8BFMaki9ngigXkfwwydPP1rBtRqMtcf29C22.jpg"),
      step1: require("../../../assets/images/course/photoshop-3/8mMgfcB2XVuMXQJerCMm87hzQZAB6mEO0nO2gPGG.jpg"),
      step2: require("../../../assets/images/course/photoshop-3/Fe1xT6L7YAzxzTOyXBMa0drOQ3XbzOWQjBksQ2eH.png"),
      step3: require("../../../assets/images/course/photoshop-3/NsBG6bs7C37QtyIeouS0km8FQfY07PQ6iKDYfyvm.png"),
      step4: require("../../../assets/images/course/photoshop-3/oQUmMzoEyEdMf6nY0UbiYpa6ERmnxqMoj4GeuW3L.jpg"),
      step5: require("../../../assets/images/course/photoshop-3/XhwVWzF2mOn2C6WhP9DuaoYTYwtir1mO7JPCgnf8.jpg"),
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      javascriptData,
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

.photoshop-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
  border: 1px solid rgb(175, 175, 175);
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

.photoshop-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  height: auto;
  cursor: pointer;
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
