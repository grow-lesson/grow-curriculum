<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="このサイトの使い方" id="howto-1"></Title>
        <SubTitle subTitle="1. 学習の順番と方法" id="florw-1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 学習サイトの見る順番" id="flow-1-1"></SectionTitle>
          <p>
            この学習サイトの閲覧する順番は以下になります。<br /><br />
            1<br />
            PCの使うのが初めての方は上部のメニュー部分「準備と提出」から「PCの設定・使い方」を選択しましょう。<br /><br />
          </p>
          <div>
            <img
              :src="imagePaths.headerMenu1"
              alt="setup-mac-1"
              class="screen-image"
              @click="openModal(imagePaths.headerMenu1)"
            />
          </div>
          <br />
          <p>
            2<br />
            学習サイトやカリキュラムで必要なアプリのインストールや環境構築が必要なので上部のメニュー部分「準備と提出」から「環境構築やインストール」を選択しましょう。<br />
            学習サイトを進めるだけならここまでの設定で学習することはできます。<br /><br />
          </p>
          <div>
            <img
              :src="imagePaths.headerMenu2"
              alt="setup-mac-2"
              class="screen-image"
              @click="openModal(imagePaths.headerMenu2)"
            />
          </div>
          <br />
          <p>
            3<br />
            上部のメニュー部分「コース一覧」から進めたい学習を始めましょう。基本的にはすべて受講する必要があります。<br /><br />
          </p>
          <div>
            <img
              :src="imagePaths.headerMenu3"
              alt="setup-mac-3"
              class="screen-image"
              @click="openModal(imagePaths.headerMenu3)"
            />
          </div>
          <br />
          <p>
            4<br />
            学習サイトで学んだことが理解できたらカリキュラムに取り組みましょう。<br /><br />
            学習する順番が決まっていない場合は以下のロードマップを参考に学習しましょう。<br /><br />
          </p>
          <div>
            <img
              :src="imagePaths.roadmap"
              alt="roadmap"
              class="screen-image"
              @click="openModal(imagePaths.roadmap)"
            />
          </div>
          <br />
          <p>
            5<br />
            カリキュラムが終わったら提出をしましょう。<br />
            手順については上部のメニュー部分「準備と提出」から「カリキュラムの始め方」を選択しましょう。<br /><br />
          </p>
          <div>
            <img
              :src="imagePaths.headerMenu4"
              alt="setup-mac-3"
              class="screen-image"
              @click="openModal(imagePaths.headerMenu4)"
            />
          </div>
        </Document>
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      </div>
      <div class="side-content">
        <TableOfContents :sections="howToSections" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Document from "@/components/Document.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import Modal from "@/components/common/Modal.vue";

export default {
  name: "HowTo",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    Document,
    SectionTitle,
    TableOfContents,
    Modal,
  },
  setup() {
    const howToSections = [
      { id: "howto-1", title: "このサイトの使い方" },
      { id: "flow-1", title: "  1. 学習の順番と方法" },
      { id: "flow-1-1", title: "    1-1. 学習サイトの見る順番" },
    ]
    // 画像パスの設定
    const imagePaths = {
      headerMenu1: require("../../assets/images/howto/header-menu-1.png"),
      headerMenu2: require("../../assets/images/howto/header-menu-2.png"),
      headerMenu3: require("../../assets/images/howto/header-menu-3.png"),
      headerMenu4: require("../../assets/images/howto/header-menu-4.png"),
      roadmap: require("../../assets/images/howto/roadmap.png"),
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      howToSections,
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

.image-float {
  transition: transform 0.3s ease;
}

/* クリック時のスタイル */
.image-float-clicked {
  transform: translateY(-10px);
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
  .btn_04 {
    width: 70%;
    font-size: small;
  }
}
</style>
