<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Javascript 4" id="Title"></Title>
        <Document>
          <p>for文について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. for文について学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. for文" id="sectionTitle1-1"></SectionTitle>
          <p>
            <HighlightWord word="for文"></HighlightWord><br>
            for文は、特定の条件が満たされる間、あるいは特定の回数だけコードブロックを繰り返し実行するための制御構造です。<br>
            <br>
            ではfor文の使い方を学んでいきましょう!<br><br>
            <HighlightWord word='for文の基本構造'></HighlightWord><br>
            for文は以下のような基本構造を持ちます。<br>
            以下の画像のようにある中かっこ部分が指定された回数だけ実行されます。<br>
            <HighlightWord word='①初期化式'></HighlightWord><br>
            ループ変数を初期化するための式です。通常、ループ変数の初期値を設定します。<br>
            <HighlightWord word='②条件式'></HighlightWord><br>
            ループが継続するかどうかを判断するための式です。条件式が真（true）の間、ループは続きます。<br>
            <HighlightWord word='③更新式'></HighlightWord><br>
            各ループの終了時に実行される式です。通常、ループ変数の更新を行います。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="screen-image" alt="result-1" />
          </div><br><br>
          <p> 
            forループの例<br>
            以下は、forループの基本的な例です。<br>
            この例では、iはループ変数です。初期値は0から始まり、条件式がiが5より小さい間、ループが繰り返されます。<br>
            各ループでiが更新されて1ずつ増加し、結果として0から4までの数字がコンソールに表示されます。<br>
            "成人です" というメッセージが表示されます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="result-2" />
          </div><br><br>
          <p>
            forループの処理配下の画像のような方法があります。<br>
            ※オブジェクトループのみ別のレッスンで紹介しているので今は以下の処理だけ覚えていればOKです。<br>
            <HighlightWord word='特定の回数だけ繰り返す(基本形)'></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="screen-image" alt="result-3" />
          </div><br><br>
          <p>
            <HighlightWord word='逆順で繰り返す'></HighlightWord><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="result-4" />
          </div><br><br>
          <p>
            <HighlightWord word='配列の繰り返し処理(基本形)'></HighlightWord><br>
            以下のような配列があります。<br>
            添え字の部分にiを入れることで値を取得することができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="screen-image" alt="result-5" />
          </div><br><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="screen-image" alt="result-6" />
          </div><br><br>
          <p>
            <HighlightWord word='配列の繰り返し処理(for...of ループ)'></HighlightWord><br>
            for ofループはJavascriptのバージョン(ES6)以降で使用可能になったループです。<br>
            例ではnumにnumbersの配列の0番目に入っている値を代入して要素の最後まで繰り返すループです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="screen-image" alt="result-7" />
          </div><br><br>
          <p>
            <HighlightWord word='配列の繰り返し処理(forEach ループ)'></HighlightWord><br>
            forEachループはfruitにfruitsの配列の0番目に入っている値を代入して要素の最後まで繰り返すループです。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="screen-image" alt="result-5" />
          </div><br><br>
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
      { id: "Title", title: "Javascript 4" },
      { id: "subTitle1", title: "  1. for文について学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. for文" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-4/result-1.png"),
      step2: require("../../../assets/images/course/javascript-4/result-2.png"),
      step3: require("../../../assets/images/course/javascript-4/result-3.png"),
      step4: require("../../../assets/images/course/javascript-4/result-4.png"),
      step5: require("../../../assets/images/course/javascript-4/result-5.png"),
      step6: require("../../../assets/images/course/javascript-4/result-6.png"),
      step7: require("../../../assets/images/course/javascript-4/result-7.png"),
      step8: require("../../../assets/images/course/javascript-4/result-8.png"),
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