<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="デザイン基礎 3" id="Title"></Title>
        <Document>
          <p>最終課題</p>
        </Document>

        <!-- section 1 -->
        <Document>
          <p>
            デザイン基礎でのレッスンの内容を踏まえて、ポスターを制作してください。<br><br>
            デザインソフト：任意<br>
            サイズ：A4（横210 縦297）
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="DesignBasic-image" alt="女性の画像" />
          </div><br>
          <p>
            条件：<br>
            ・上の画像のようなレイアウトになるよう、グレーのエリアにオブジェクトを配置してください。<br><br><br>
            ・上段に素材①女性の写真を配置し、写真上に下記の文言を入れてください。<br><br>
            夏の合同就職説明会<br><br>
            様々な優秀な会社を見つけるチャンス<br><br><br>
            ・中段左に素材②の写真と下記の文言を配置してください。<br><br>
            50社以上の企業が参加する合同就職説明会開催決定!<br><br>
            この夏、キャリアの扉を開く絶好のチャンスが到来します。多様な業界から一流の企業が集結し、あなたの夢を実現するための機会を提供します。ここでは、キャリアアドバイス、履歴書の書き方、面接テクニックのワークショップなど、就職活動を成功に導くための貴重な情報を得ることができます。<br><br>
            ・中段右に下記の情報を記載してください。<br><br>
            日時    2024年8月1日（木）<br><br>
            場所    サイバーアドベンチャーズ株式会社<br>
            参加資格    就職を希望する高校生以上の方<br>
            参加費用    無料<br>
            申し込み方法    弊社サイトからお申込みください<br>
            イベント内容    50社以上の企業ブース<br>
                            キャリアアドバイス<br>
                            履歴書の書き方／面接テクニック  など<br>
            主催者    サイバーアドベンチャーズ株式会社<br><br>
            ・下段に素材③会社ロゴを配置してください。<br><br><br><br>
            素材①：女性の写真<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="DesignBasic-image" alt="女性の写真" />
          </div><br>
          <p>
            素材②：オフィスの写真
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="DesignBasic-image" alt="オフィスの写真" />
          </div><br>
          <p>
            素材③：会社ロゴ
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="DesignBasic-image" alt="会社ロゴ" />
          </div>
          <NavigationButtons
            :previousPageName="'DesignBasicPage2'"
            :nextPageName="'DesignBasicPage1'"
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
  name: "DesignBasicPage3",
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
      { id: "Title", title: "デザイン基礎 3" },
      { id: "subTitle1", title: "  最終課題" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/DesignBasic-3/DesignBasic-3-1.png"),
      step2: require("../../../assets/images/course/DesignBasic-3/DesignBasic-3-2.png"),
      step3: require("../../../assets/images/course/DesignBasic-3/DesignBasic-3-3.png"),
      step4: require("../../../assets/images/course/DesignBasic-3/DesignBasic-3-4.png"),
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

.DesignBasic-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
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
  border: 1px solid rgb(175, 175, 175);
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link {
  color: rgb(72, 0, 255);
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
