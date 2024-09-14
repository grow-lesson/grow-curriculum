<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 5" id="Title"></Title>
        <Document>
          <p>クラスの命名規則のBEM設計と接頭辞について学んでいきましょう！</p>
        </Document>

        <SubTitle subTitle="1. BEM設計とは？" id="subTitle1"></SubTitle>

        <Document>
          <SectionTitle sectionTitle="1-1. BEM設計について" id="sectionTitle1-1"></SectionTitle>
          <p>
            <HighlightWord word="BEMとは"></HighlightWord><br>
            BEMとはBlock、Element、Modifierの略語です。class名の命名ルールが特徴的なフロントエンド設計方法の一つです。<br><br>
          </p><br>
          <p>
            <HighlightWord word="BEMの基本形"></HighlightWord><br>
            基本的なBEMの形は以下のようになっています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="BEM" />
          </div><br>

          <SectionTitle sectionTitle="1-2. BEM設計を使う目的" id="sectionTitle1-2"></SectionTitle>
          <p>
            BEM設計を使うと保守性が高くなります。命名を規則化することによりBlock要素が一つになり、各要素ごとに追加・編集ができるようになります。<br>
            sassやscssを使ったことがある方であればわかると思いますが、下の画像のように"header"の中の"content"に装飾をつけたいときにはこのように記述することができます。<br>
            特にcontentやtextやtitleなどは一つのページで複数クラス名に使いたい場面もあるので、そういったときに装飾しやすくなります。<br><br>
            また、BEM設計は一つ一つのBlockを起点としているので同じページ内でコンテンツを移動したときや、同じコンテンツ(例えば同じデザインのボタンや矢印アイコンなど)を追加したときに影響を受けにくくなります。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="screen-image" alt="vscode-1" />
          </div><br>
          <p>
            この画像のl-についてはこの次のセクションで解説します。
          </p>          
        </Document>

        <SubTitle subTitle="2. 接頭辞とは？" id="subTitle2"></SubTitle>

        <Document>
          <SectionTitle sectionTitle="2-1. 接頭辞について" id="sectionTitle2-1"></SectionTitle>
          <p>
            <HighlightWord word="接頭辞とは"></HighlightWord><br>
            接頭辞とは簡単に言えばクラス名の一番最初につけるもので、おおまかな構造のどれに属するものなのかを定義することができます。<br>
            このカリキュラムではFLOCSSを使ってコーディングをするため、FLOCSSについても触れながら解説していきます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="settouji" />
          </div><br>
          <p>
            <HighlightWord word="接頭辞・FLOCSSについて"></HighlightWord><br>
            FLOCSSはWebサイトやWebアプリケーションのスタイルを効率的に構築・管理するためのCSS設計手法です。<br>
            FLOCSSでは、CSSのクラスを役割に応じて「Foundation」「Layout」「Object」「Component」「Utility」の5つのカテゴリに分類します。<br>
            接頭辞は各カテゴリのクラス名に貫性を持たせるために用いるもので、接頭辞を使用することで、そのクラスがどの機能や役割を持つかが一目で分かるようになります。<br><br>
          </p><br>

          <SectionTitle sectionTitle="2-2. 接頭辞の使い方" id="sectionTitle2-2"></SectionTitle>
          <p>
            接頭辞の中でもよく使う5つを解説します。<br>
            <HighlightWord word="Foundation"></HighlightWord><br>
            Foundationは、ページ全体に影響を与える基本的なスタイルを定義します。このカテゴリのスタイルには通常、接頭辞をつけません。<br>
            例：html,body,h1,pなどのサイト全体のデフォルトの要素<br><br>
          </p>
          <p>
            <HighlightWord word="Layout"></HighlightWord><br>
            レイアウトに関連するクラスには、l-という接頭辞が付けられます。Layoutクラスは主にページのグリッドやコンテナなどの大きな構造要素に使用されます。<br>
            例：l-header,l-main,l-hooter <br>
            主にページ全体の構造や大枠のレイアウトにつける<br><br>
          </p>
          <p>
            <HighlightWord word="Component"></HighlightWord><br>
            Componentは、独立したUIパーツに使われます。ボタンやカード、フォーム等にc-という接頭辞をつけます。<br>
            例：c-button,c-card<br>
            UIコンポーネントのデザインを定義し、独立で機能するUI要素を作成するためのスタイル。<br><br>
          </p>
          <p>
            <HighlightWord word="Project"></HighlightWord><br>
            Projectは、コンポーネントの集まりや固有のパターンのスタイルを設定します。<br>
            例：p-mv,p-contact<br>
            固有のパターンという言葉では想像しづらいですがメインビジュアルや記事一覧、スライダーなどのコンテンツ全般を定義するので一番利用するものとなっています。<br><br>
          </p>
          <p>
            <HighlightWord word="Utility"></HighlightWord><br>
            Utilitynは、簡単なスタイル変更や調整を行うために使用されます。u-等言う接頭辞がつけられ、一時的な修正に使われます。<br>
            例：u-text-center,u-margin<br>
            特定のスタイルを素早く適用することができ、コンポーネントやオブジェクトに対して小規模な修正や補助を行えるもの。<br><br>
          </p>
          <br><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="screen-image" alt="FLOCSS" />
          </div><br>
        </Document>


        <Document>
          <SectionTitle sectionTitle="BEM設計・FLOCSS・接頭辞についてまとめ" id="sectionTitle3"></SectionTitle>
          <p>
            BEM設計・FLOCSS・接頭辞についての解説でしたが、これらを組み合わせてクラス命名をすることで、よりコードが読みやすく、cssを操作するときに拡張及び保守がしやすくなります。<br>
            チームでの開発をする際にもこういった命名規則は使われるので、普段から使うように心がけていきましょう。
          </p>
          
          <br><br>

          <NavigationButtons
            :previousPageName="'HtmlPage4'"
            :nextPageName="'HtmlPage1'"
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
// import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { htmlSourceData } from "@/data/htmlSourceData.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "HtmlPageFloat",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    // Terminal,
    TableOfContents,
    Modal,
    NavigationButtons,
  },
  setup() {
    const sections =  [
      { id: "Title", title: "HTML・CSS 5" },
      { id: "subTitle", title: "1. BEM設計とは？" },
      { id: "sectionTitle1-1", title: "    1-1. BEM設計について" },
      { id: "sectionTitle1-2", title: "    1-2. BEM設計を使う目的" },
      { id: "subTitle", title: "2. 接頭辞とは？" },
      { id: "sectionTitle2-1", title: "    2-1. 接頭辞について" },
      { id: "sectionTitle2-1", title: "    2-2. 接頭辞の使い方" },
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/html-css-5/vscode-1.png"),
      step2: require("../../../assets/images/course/html-css-5/BEM.jpg"),
      step3: require("../../../assets/images/course/html-css-5/FLOCSS.jpg"),
      step4: require("../../../assets/images/course/html-css-5/settouji.jpg"),
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };


    return {
      htmlSourceData,
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

/* タブレット版 */
@media (max-width: 835px) {
  .main-content {
    width: 100%;
  }
  .side-content {
    display: none;
  }
}
</style>