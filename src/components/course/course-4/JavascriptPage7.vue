<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Javascript 7" id="Title"></Title>
        <Document>
          <p>DOM操作について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. DOM操作について学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. DOM操作" id="sectionTitle1-1"></SectionTitle>
          <p>
            <HighlightWord word="DOM操作"></HighlightWord><br>
            DOM（Document Object Model）は、HTML や XML 文書のためのプログラミングインターフェースであり、これを使用して文書の構造や内容にアクセスし、変更することができます。<br>
            JavaScript を使用して DOM と連携し、ページの動的な操作やユーザーとの対話を実現できます。<br>
            <br>
            以下はどんな操作があるのか例をまとめています。<br>
            それぞれの具体的な使い方は処理名を検索して調べましょう。<br>
            1:<HighlightWord word="要素の取得 "></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="screen-image" alt="result-1" />
          </div><br><br>
          <p>
            2:<HighlightWord word="要素の作成・追加・削除 "></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="result-2" />
          </div><br><br>
          <p>
            3:<HighlightWord word="テキストと属性の操作"></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="screen-image" alt="result-3" />
          </div><br><br>
          <p>
            4:<HighlightWord word="クラスの追加・削除・切り替え"></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="result-4" />
          </div><br><br>
          <p>
            5:<HighlightWord word="要素のスタイルの変更"></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="screen-image" alt="result-5" />
          </div><br><br>
          <p>
            6:<HighlightWord word="イベントリスナーの設定"></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="screen-image" alt="result-6" />
          </div><br><br>
          <p>
            7:<HighlightWord word="要素の位置の取得"></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="screen-image" alt="result-7" />
          </div><br><br>
          <p>
            8:<HighlightWord word="要素の非表示・表示"></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" class="screen-image" alt="result-8" />
          </div><br><br>
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
import TableOfContents from "@/components/TableOfContents.vue";
import { javascriptData } from "@/data/javascriptData.js";
import Modal from "@/components/common/Modal.vue";

export default {
  name: "JavaScript1",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    TableOfContents,
    Modal,
  },
  setup() {
    const sections = [
      { id: "Title", title: "Javascript 7" },
      { id: "subTitle1", title: "  1. DOM操作について学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. DOM操作" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-7/result-1.png"),
      step2: require("../../../assets/images/course/javascript-7/result-2.png"),
      step3: require("../../../assets/images/course/javascript-7/result-3.png"),
      step4: require("../../../assets/images/course/javascript-7/result-4.png"),
      step5: require("../../../assets/images/course/javascript-7/result-5.png"),
      step6: require("../../../assets/images/course/javascript-7/result-6.png"),
      step7: require("../../../assets/images/course/javascript-7/result-7.png"),
      step8: require("../../../assets/images/course/javascript-7/result-8.png"),
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