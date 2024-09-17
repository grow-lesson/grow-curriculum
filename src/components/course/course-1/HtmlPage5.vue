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
            <HighlightWord word="BEM"></HighlightWord><br>
            BEMとはclass名を命名する時にCSSを整理してわかりやすくするためのルールの事です。特徴的なフロントエンド設計方法の一つで、Block、Element、Modifierの略語です。<br><br>
          </p><br>
          <p>
            ・BEMの基本形<br>
            BEMでクラス名を命名する時の基本的形は以下のようになっています。<br>
            <HighlightWord word="Block（ブロック）"></HighlightWord><br>
            ブロックはページの中で独立している大きな部分のことです。たとえば、ナビゲーションバーやボタン、カードなどがブロックになります。<br>
            名前の例: header, menu, button など。<br>
            <HighlightWord word="Element（エレメント）"></HighlightWord><br>
            エレメントはブロックの中の部品のことです。ブロックが親で、エレメントはその子どもという感じです。<br>
            名前の例: menu__item, button__icon など。エレメントは「__」でブロック名とつなげます。<br>
            <HighlightWord word="Modifier（モディファイア）"></HighlightWord><br>
            モディファイアは、ブロックやエレメントの見た目や状態を変えるためのものです。例えば、ボタンの色や大きさが変わるときに使います。<br>
            名前の例: button--large, menu__item--active など。モディファイアは「--」でつなげます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.bem)" :src="imagePaths.bem" class="screen-image" alt="BEM" />
          </div><br>

          <SectionTitle sectionTitle="1-2. BEM設計の使い方" id="sectionTitle1-2"></SectionTitle>
          <p>
            BEM設計を使う目的としては、保守性が高くなり命名を規則化することができます。<br>
            Block要素が一つになり、各要素ごとに追加・編集ができるようになります。<br>
            例えばヘッダーの中にナビゲーションを入れたい時Block要素を「header」とし、Element要素で「__navigation」を繋げます。<br>
            また、Modifier要素はデザインに急に修正が入る時やその特定の部分だけ見た目を変えたい時に利用します。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="screen-image" alt="vscode-1" />
          </div><br>
          <br>
          <p>
            注意しなければならないのは、headerタグのBlock要素が今回のように「header」としている時にその子要素のBlock要素に「header」以外でつなげるのはNGです。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="vscode-2" />
          </div><br>
        </Document>

        <SubTitle subTitle="2. 接頭辞とは？" id="subTitle2"></SubTitle>

        <Document>
          <SectionTitle sectionTitle="2-1. 接頭辞について" id="sectionTitle2-1"></SectionTitle>
          <p>
            <HighlightWord word="接頭辞"></HighlightWord><br>
            接頭辞は、名前の先頭につける文字や記号のことで、特定のルールに従ってグループ分けしたり、他の名前と混ざらないようにするために使います。<br>
            このカリキュラムではFLOCSSに基づいたルールを使ってコーディングをするため、FLOCSSについても触れながら解説していきます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.settouji)" :src="imagePaths.settouji" class="screen-image" alt="接頭辞" />
          </div><br>
          <p>
            <HighlightWord word="FLOCSS"></HighlightWord><br>
            FLOCSSはWebサイトやWebアプリケーションのスタイルを効率的に構築・管理するためのCSS設計手法です。<br>
            接頭辞のアルファベットはこのFLOCSSのルールに基づいて設定し、「Foundation」「Layout」「Object」「Component」「Utility」の5つのカテゴリに分類します。<br>
            接頭辞は各カテゴリのクラス名に一貫性を持たせるために用いるもので、接頭辞を使用することで、そのクラスがどの機能や役割を持つかが一目で分かるようになります。<br><br>
          </p><br>
          <p>
            接頭辞の中でもよく使う5つを解説します。<br>
            <HighlightWord word="Foundation"></HighlightWord><br>
            Foundationは、ページ全体に影響を与える基本的なスタイルを定義します。<br>
            このカテゴリには接頭辞で「f-」をつけるスタイルを与えるのではなく、以下の例にあるセレクタに直接付与するスタイルを表します。<br>
            html-cssコースのlesson1で紹介したリセットCSSに設定したものがFoundationのスタイルになります。<br>
            例：GoogleChromeやMicrosoft Edgeで最初からデフォルトでセレクタ(html,body,h1,pなど)についているスタイルやリセットCSSに設定したスタイル<br><br>
          </p>
          <p>
            <HighlightWord word="Layout"></HighlightWord><br>
            レイアウトに関連するクラスには、「l-」という接頭辞が付けられます。
            Layoutクラスは主にページのグリッドやコンテナなどの大きな構造要素に使用されます。<br>
            例：主にはl-header,l-main,l-footer,l-hero,l-sidebar<br><br>
          </p>
          <p>
            <HighlightWord word="Project"></HighlightWord><br>
            Projectは、コンポーネントの集まりや固有のパターンのスタイルを設定し、「p-」という接頭辞が付けられます。<br>
            メインビジュアルや記事一覧、スライダーなどのコンテンツ全般を定義するので一番利用するものとなっています。<br>
            例：p-mv,p-contact,p-introduceなどセクションで区切りたい時にpを利用し、そのセクションの特徴をBlockの名前とする。<br><br>
          </p>
          <p>
            <HighlightWord word="Component"></HighlightWord><br>
            Componentは、独立したUIパーツに使われます。ボタンやカード、フォーム等に「c-」という接頭辞をつけます。<br>
            ただ、ボタンやカード、フォームすべてに使うのではなく、<span class="markup-word-blue">他のページでも繰り返し使いたいパーツとして区分したい時のみ</span>利用しましょう。<br>
            また、BEM設計の時に解説した親Block要素につなげる必要はなく、独立したBlock要素にすることができます。
            例：c-button,c-card<br><br>
          </p>
          <p>
            <HighlightWord word="Utility"></HighlightWord><br>
            Utilityは、簡単なスタイル変更や調整を行うために使用されます。u-という接頭辞がつけられ、一時的な修正に使われます。<br>
            特定のスタイルを素早く適用することができ、コンポーネントやオブジェクトに対して小規模な修正や補助を行えます。<br>
            緊急でスタイルを直す必要がある場合などで利用されるので使用頻度は低いです。<br>
            例：u-red,u-margin<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.flocss)" :src="imagePaths.flocss" class="screen-image" alt="settouji" />
          </div><br>
          <SectionTitle sectionTitle="2-2. 接頭辞の使い方" id="sectionTitle2-2"></SectionTitle>
          <p>
            接頭辞を使ったクラス名の命名の例を以下に掲載するので参考にしましょう。<br><br>
            Layout(l-○○)<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="screen-image" alt="vscode-3" />
          </div><br>
          <p>
            Ploject(p-○○)とComponent(c-○○)<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="vscode-4" />
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
      { id: "sectionTitle1-2", title: "    1-2. BEM設計の使い方" },
      { id: "subTitle", title: "2. 接頭辞とは？" },
      { id: "sectionTitle2-1", title: "    2-1. 接頭辞について" },
      { id: "sectionTitle2-1", title: "    2-2. 接頭辞の使い方" },
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      bem: require("../../../assets/images/course/html-css-5/BEM.jpg"),
      step1: require("../../../assets/images/course/html-css-5/vscode-1.png"),
      step2: require("../../../assets/images/course/html-css-5/vscode-2.png"),
      settouji: require("../../../assets/images/course/html-css-5/settouji.jpg"),
      flocss: require("../../../assets/images/course/html-css-5/FLOCSS.jpg"),
      step3: require("../../../assets/images/course/html-css-5/vscode-3.png"),
      step4: require("../../../assets/images/course/html-css-5/vscode-4.png"),
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