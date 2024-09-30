<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="DesignBasic 1" id="Title"></Title>
        <Document>
          <p>色彩について学びましょう</p>
        </Document>

        <!-- section 1 -->
        <Document>
          <SectionTitle sectionTitle="1-1. カラーモード" id="sectionTitle1-1"></SectionTitle>
          <p>
            カラーモードとは色を表現するためのシステムで、主に使用されるメディアや目的に応じて使い分けられます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="DesignBasic-image" alt="CMYKとRGB" />
          </div><br>
          <p>
            CMYK（Cyan、Magenta、Yellow、Key）：シアン、マゼンタ、イエロー、キー（ブラック）の４つのインクを組み合わせて色を表現するカラーモードで、主に印刷物に使用されます。<br><br>
            RGB（Red、Green、Blue）：赤、緑、青の３つの光の原色を組み合わせて色を表現するカラーモードで、主にデジタルデバイスに使用されます。<br><br><br>
            CMYKからRGBへ、またはRGBからCMYKへカラーモードを変更すると一部の色が異なって見えることがあります。そのためデザイン制作を始める際には、適切なカラーモードを選択するようにしましょう。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. 彩度と明度" id="sectionTitle1-2"></SectionTitle>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="DesignBasic-image" alt="スウォッチ表" />
          </div><br>
          <p>
            彩度：色の鮮やかさや強さを表す指標です。彩度が高ければ鮮やかで濃い色になり、彩度が低ければくすんだ色や灰色に近い色になります。
          </p>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="DesignBasic-image" alt="高彩度トーン〜低彩度トーン" />
          </div>
          <p>
            明度：色の明るさを表す指標です。明度が高ければ明るい色（白に近い）になり、明度が低ければ暗い色（黒に近い）になります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="DesignBasic-image" alt="高明度トーン〜低明度トーン" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. 色相環" id="sectionTitle1-3"></SectionTitle>
          <p>
            色相環とは色相（赤、黄、緑…など）を円形に配置したもので、色の関係性を視覚的に表しています。<br>
            色相環の反対側に位置する色同士は「補色」と呼ばれ、組み合わせると強いコントラストが生まれます。（黄と青、赤と緑…など）
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="DesignBasic-image" alt="補色" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-4. 識別しづらい色の組み合わせ" id="sectionTitle1-4"></SectionTitle>
          <p>
            特定の色を認識しづらい、区別が難しいという状態を色覚異常といいます。色相環で黄色を上に配置して同じ高さにある色（オレンジと黄緑、赤と緑、紫と青…など）は、色覚異常を持っている人にとって同じ色に見えます。<br><br>
            例えば背景と文字の色の組み合わせを考える場合は、背景に明度・彩度の低い色を使用し 文字を明度の高い色にするなど、コントラストを意識して全ての人に見やすいデザインになるよう注意しましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="DesignBasic-image" alt="識別しづらい色の組み合わせ" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-5. 色のイメージ" id="sectionTitle1-5"></SectionTitle>
          <p>
            各色には特有のイメージがあり、見る人に対して心理的な影響を与えます。デザインを制作する際には、与えたい印象や感情に基づいて色を選ぶことが求められます。<br>
            求められているデザインのイメージに合うように適切な配色を選び、伝えたいメッセージやブランドイメージをより効果的に表現しましょう。<br><br>
            赤：情熱、エネルギー、興奮、危険、愛、勇気、注意、怒り、温かい<br>
            青：冷静、信頼、誠実、安らぎ、知性、清潔感、爽やか<br>
            緑：自然、癒し、調和、健康、安全、成長、新鮮<br>
            黄色：明るさ、喜び、幸福、希望、注意、エネルギー<br>
            オレンジ：活力、親しみ、創造性、暖かさ、楽しさ、にぎやか<br>
            紫：高貴、神秘、芸術、創造性、優雅さ、高級、上品<br>
            ピンク：優しさ、愛情、甘さ、女性らしさ、ロマンチック、かわいい<br>
            茶色：安定感、落ち着き、自然、素朴さ、安心感、ぬくもり<br>
            黒：高級、重厚さ、洗練、神秘、恐怖、都会<br>
            白：純粋、清潔、無垢、シンプル、クリーン<br>
          </p>
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
import SectionTitle from "@/components/SectionTitle.vue";
// import HighlightWord from "@/components/HighlightWord.vue";
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
    // SubTitle,
    SectionTitle,
    // HighlightWord,
    Document,
    TableOfContents,
    Modal,
  },
  setup() {
    const sections = [
      { id: "Title", title: "DesignBasic 1" },
      // { id: "subTitle1", title: "  1.とは" },
      { id: "sectionTitle1-1", title: "    1-1. カラーモード" },
      { id: "sectionTitle1-2", title: "    1-2. 彩度と明度" },
      { id: "sectionTitle1-3", title: "    1-3. 色相環" },
      { id: "sectionTitle1-4", title: "    1-4. 識別しづらい色の組み合わせ" },
      { id: "sectionTitle1-5", title: "    1-5. 色のイメージ" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/DesignBasic-1/DesignBasic-1-1.jpg"),
      step2: require("../../../assets/images/course/DesignBasic-1/DesignBasic-1-2.png"),
      step3: require("../../../assets/images/course/DesignBasic-1/DesignBasic-1-3.png"),
      step4: require("../../../assets/images/course/DesignBasic-1/DesignBasic-1-4.png"),
      step5: require("../../../assets/images/course/DesignBasic-1/DesignBasic-1-5.png"),
      step6: require("../../../assets/images/course/DesignBasic-1/DesignBasic-1-6.png"),
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
}

.DesignBasic-icon{
  display: block;
  margin: 0 auto;
  max-width: 30%;
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
