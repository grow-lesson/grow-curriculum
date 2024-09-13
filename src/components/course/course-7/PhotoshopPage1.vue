<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Photoshop 1" id="Title"></Title>
        <Document>
          <p>Photoshopの概要と画面の見方について学びましょう</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. Photoshopとは" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 概要" id="sectionTitle1-1"></SectionTitle>
          <p>
            Photoshopは、Adobe社が提供する画像編集ソフトウェアで、主に写真の加工や編集に使用されます。このソフトウェアは、プロの写真家やデザイナーだけでなく、趣味で写真編集を楽しむ多くのユーザーにとっても、不可欠なツールとなっています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="javascript-image" alt="photoshop-logo" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. Photoshopの特徴" id="sectionTitle1-2"></SectionTitle>
            <p>
              Photoshopは<span class="markup-word-blue">ラスター画像</span>を扱うのが特徴です。ラスター画像とは、ピクセル(※)単位で構成された画像のことで、写真や絵画のような細かい色合いやグラデーションを表現するのに適しています。<br><br>
              ※ピクセル：画像を構成する最小の単位であり、デジタル画像は、多数のピクセルが格子状に並んでできています。ピクセルの数（解像度）が多いほど、画像はより詳細で鮮明になります。<br><br>
              一方で、Adobe社の他の製品であるIllustratorは<span class="markup-word-blue">ベクター画像</span>を扱います。ベクター画像は、点と線を使って数学的に定義された図形で構成されており、拡大・縮小しても画質が劣化しないため、ロゴやアイコンの作成に適しています。<br><br><br>
              下の画像のように、ラスター画像は拡大し続けると荒れてしまいますが、ベクター画像はどれだけ拡大しても画質が劣化しません。
              <HighlightWord word="左がラスター画像、右がベクター画像です"></HighlightWord>
            </p>
            <div>
              <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="javascript-image" alt="ラスター画像・ベクター画像" />
            </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. Photoshopの起動" id="sectionTitle1-3"></SectionTitle>
          <p>
            まずはPhotoshopのアプリを起動しましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="javascript-image" alt="photoshop-logo" />
          </div><br>
          <p>
            新規ファイル：ドキュメントのサイズ・解像度などを指定して、新しく始めることができます。<br>
            開く：自分のPC上にあるPhotoshopデータや画像を開くことができます。
          </p><br>
          <p>
            今回は新規ファイルを選択します。<br>
            Web＞Web一般を選択し、ファイル名をつけて作成を押しましょう。
          </p>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="javascript-image" alt="photoshop-logo" />
          </div><br><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="javascript-image" alt="photoshop-logo" />
          </div><br>
          <p>
            アートボード：絵画で例えるとキャンバスにあたるものです。アートボード外のエリアにも物を配置することは可能ですが、画像データ化した際には表示されません。<br><br>
            ツールバー：画像の編集や加工を行う際に使用するさまざまなツールが集められているパネルです。アイコンを長押しすると、関連するツールが表示されます。<br><br>
            パネル：特定の機能やオプションが使用できます。初期設定で表示されていない機能もありますが、「ウィンドウ」から選択すると該当のパネルが表示されるようになります。今後、使用頻度の高いものは随時追加して、自分で作業環境を整えていきましょう。
          </p><br><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="javascript-image" alt="photoshop-logo" />
          </div>
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
      { id: "Title", title: "Photoshop 1" },
      { id: "subTitle1", title: "  1. Photoshopとは" },
      { id: "sectionTitle1-1", title: "    1-1. 概要" },
      { id: "sectionTitle1-2", title: "    1-2. Photoshopの特徴" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/photoshop-1/photoshop.png"),
      step2: require("../../../assets/images/course/photoshop-1/photoshop-1-1.png"),
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
