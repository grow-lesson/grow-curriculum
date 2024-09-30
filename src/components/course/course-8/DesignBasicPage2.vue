<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="DesignBasic 2" id="Title"></Title>
        <Document>
          <p>テキストや画像・オブジェクトを組み合わせる際、適切に配置・構成をすることで視認性や読みやすさが向上します。これにより、バランスの取れた美しいデザインを作成し、情報がより効果的に伝わるデザインが可能になります。
          </p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. 画面構成について学びましょう" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 文字組み" id="sectionTitle1-1"></SectionTitle>
          <p>
            文字組みとは、文章やテキストの文字や行を整えて、読みやすさやデザインの一体感を与えるための配置方法のことです。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="DesignBasic-image" alt="文字組み" />
          </div><br>
          <p>
            左の文章では字間（全体の文字間の幅）や行送り（行と行の間隔）が広いため、長い文章での表示に適していません。<br>
            行送りについては一般的にフォントサイズの150％〜175％の値が適用されることが多いです。<br>
            例）フォントサイズが12pxの場合、行送りは18px〜21px
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. ブロック分け" id="sectionTitle1-2"></SectionTitle>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="DesignBasic-image" alt="ブロック分け" />
          </div><br>
          <p>
            例えば、このように文章と画像が交互になっているレイアウトの場合<br><br>
            左のように縦・横の間隔を均等にした配置だと、どの文章がどの画像に付属しているのかがわかりません。<br>
            右では同じコンテンツの文章・画像の間隔を縮めて、上下の間隔を広げました。これによって同じコンテンツは１つのブロックとして認識され、別のコンテンツと混同することが防げます。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. 揃える" id="sectionTitle1-3"></SectionTitle>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="DesignBasic-image" alt="揃える" />
          </div><br>
          <p>
            左のように画像とテキストの幅が異なっていると不揃いな印象を受けたり、商品と金額が一続きに配置されていることで金額の情報が読み取りづらくなってしまいます。<br>
            右ではまず、画像サイズを大きくしてテキスト幅と揃えることで、まとまりのある印象になりました。<br>
            次に商品と金額を別のブロックに分け、金額を縦に揃えました。今回右揃えにしたのは、「1,000円」のみ桁数が多く左揃えにすると「円」の文字が右に飛び出てしまうのを防ぐためです。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-4. コントラスト" id="sectionTitle1-4"></SectionTitle>
          <p>
            伝えたい情報の優劣を色や大きさのコントラストで表現し、重要な部分が強調され、視認性や視覚的な興味を引き出すことができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="DesignBasic-image" alt="コントラスト" />
          </div><br>
          <p>
            左のように全て同じ大きさ・色ではメリハリのないデザインになってしまいます。<br>
            このコンテンツをパーツで分けると「SUMMER」「SALE」「Max」「50」「%」「OFF」となります。このうち最も重要な情報である「SALE」「50」のサイズを大きくし、その他の情報より目立つように色を赤にして強調しました。
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
import SubTitle from "@/components/SubTitle.vue";
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
    SubTitle,
    SectionTitle,
    // HighlightWord,
    Document,
    TableOfContents,
    Modal,
  },
  setup() {
    const sections = [
      { id: "Title", title: "DesignBasic 2" },
      { id: "subTitle1", title: "  1. レイヤーについて学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. レイヤーとは" },
      { id: "sectionTitle1-2", title: "    1-2. アップロード" },
      { id: "sectionTitle1-3", title: "    1-3. レイヤーの複製" },
      { id: "sectionTitle1-4", title: "    1-4. コントラスト" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/DesignBasic-2/DesignBasic-2-1.png"),
      step2: require("../../../assets/images/course/DesignBasic-2/DesignBasic-2-2.png"),
      step3: require("../../../assets/images/course/DesignBasic-2/DesignBasic-2-3.png"),
      step4: require("../../../assets/images/course/DesignBasic-2/DesignBasic-2-4.png"),
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

.DesignBasic-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  height: auto;
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
