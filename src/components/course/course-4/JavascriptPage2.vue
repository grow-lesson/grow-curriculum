<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Javascript 2" id="Title"></Title>
        <Document>
          <p>if文について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. if文について学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 比較演算子" id="sectionTitle1-1"></SectionTitle>
          <p>
            皆さんがこれから学ぶif文ではレッスン1で学んだ算術演算子とは違う比較演算子というものを使用します。<br>
            まずは比較演算子について理解しましょう!<br><br>
            <HighlightWord word="比較演算子"></HighlightWord><br>
            比較演算子は、2つの値を比較して、その関係が真（true）か偽（false）かを評価するために使用される演算子です。<br>
            <br>
            では比較演算子の使い方を学んでいきましょう!<br><br>
            1:<HighlightWord word='等しい（==）'></HighlightWord><br>
            この演算子は、2つの値が等しいかどうかを比較します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="screen-image" alt="result-1" />
          </div><br><br>
          <p> 
            2:<HighlightWord word='厳密に等しい（===）'></HighlightWord><br>
            この演算子は、値と型が両方とも等しいかどうかを比較します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="result-2" />
          </div><br><br>
          <p> 
            3:<HighlightWord word='等しくない（!=）'></HighlightWord><br>
            この演算子は、2つの値が等しくないかどうかを比較します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="screen-image" alt="result-3" />
          </div><br><br>
          <p> 
            4:<HighlightWord word='厳密に等しくない（!==）'></HighlightWord><br>
            この演算子は、値または型が異なる場合に真を返します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="result-4" />
          </div><br><br>
          <p> 
            5:<HighlightWord word='大なり（>）、小なり（<）、大なりイコール（>=）、小なりイコール（<=）'></HighlightWord><br>
            これらの演算子は、数値間の大小関係を比較します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="screen-image" alt="result-5" />
          </div><br><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. if文" id="sectionTitle1-2"></SectionTitle>
          <p> 
            <HighlightWord word="if文"></HighlightWord><br>
            if文は、特定の条件が満たされた場合に、あるコードブロックを実行するための制御構造です。<br>
            <br>
            では比較演算子の使い方を学んでいきましょう!<br><br>
            <HighlightWord word='if文の基本構造'></HighlightWord><br>
            if文は以下のような基本構造を持ちます。<br>
            以下の画像のようにある「条件式」といわれる部分に比較演算子を使い、その結果がtrueになれば実行されます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="screen-image" alt="result-6" />
          </div><br><br>
          <p> 
            if文の例<br>
            以下は、if文を使用した例です<br>
            ageの値が18以上である場合、trueになるためかっこの中の処理を行われ、"成人です" というメッセージが表示されます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="screen-image" alt="result-7" />
          </div><br><br>
          <p> 
            <HighlightWord word='if-else文'></HighlightWord><br>
            単純な条件だけでなく、条件が満たされない場合の処理も実行したい場合、if文と組み合わせてelse文を使用できます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step9" class="screen-image" alt="result-9" />
          </div><br><br>
          <p> 
            <HighlightWord word='if-else if文'></HighlightWord><br>
            複数の条件に対して異なる処理を行いたい場合、else if文を追加できます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" class="screen-image" alt="result-9" />
          </div><br><br>
          <p> 
            <HighlightWord word='ネストされたif文'></HighlightWord><br>
            if 文は、他の if 文の中にネストして使用することもできます。<br>
            ネストとはかっこの処理の中にかっこの処理を入れる事です。<br>
            これにより、より複雑な条件分岐を実現できます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" class="screen-image" alt="result-10" />
          </div><br><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. 論理式" id="sectionTitle1-3"></SectionTitle>
          <p>
            <HighlightWord word="比較演算子"></HighlightWord><br>
            論理式（または論理演算式）は、論理演算子を使用して複数の条件を組み合わせることで、真（true）または偽（false）の結果を得る式です。<br>
            では比較演算子の使い方を学んでいきましょう!<br><br>
            1:<HighlightWord word='論理積（&&）'></HighlightWord><br>
            論理積演算子は、複数の条件(かっこの中の条件)がすべて真である場合に結果が真になります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" class="screen-image" alt="result-11" />
          </div><br><br>
          <p> 
            2:<HighlightWord word='論理和（||）'></HighlightWord><br>
            論理和演算子は、いずれかの条件が真である場合に結果が真になります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step12)" :src="imagePaths.step12" class="screen-image" alt="result-12" />
          </div><br><br>
          <p> 
            3:<HighlightWord word='論理否定（!）'></HighlightWord><br>
            論理否定演算子は、条件の真偽を反転させます。<br>
            以下の画像だとisSunnyがtrueですが、条件式ではfalseに代わりelseの処理に入ります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step13)" :src="imagePaths.step13" class="screen-image" alt="result-13" />
          </div><br><br>
          <p> 
            また、これらの論理演算子を組み合わせて、複雑な論理式を作成できます。<br>
            カッコ () を使用して論理式の優先順位をつけることもできます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step14)" :src="imagePaths.step14" class="screen-image" alt="result-14" />
          </div><br><br>
        </Document>

        <SubTitle subTitle="2. switch文について学ぶ" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. switch文" id="sectionTitle2-1"></SectionTitle>
          <p> 
            <HighlightWord word="switch文"></HighlightWord><br>
            switch文は、特定の式の値に基づいて、複数の可能な実行パスの中から1つを選択して実行するための制御構造です。<br>
            複数のif文を使うよりもコードを簡潔に保ちたい場合や、特定の値に応じて処理を分岐する必要がある場合に使用されます。<br>
            以下にswitch文の詳細な説明を提供します。<br>
            <br>
            ではswitch文の使い方を学んでいきましょう!<br><br>
            <HighlightWord word='switch文の基本構造'></HighlightWord><br>
            switch文は以下のような基本構造を持ちます。<br>
            以下の画像のようにある「式」といわれる部分にcaseの値が当てはまれば、その下のコメント部分の処理が行われます。<br>
            break文は、一致した caseブロックの実行を終了し、switch文全体から抜け出るために使用されます。<br>
            defaultはcaseのどれにも該当しない場合に実行されます。<br>
            caseの下はかっこが無いのでインデントを必ず入れて可読性のあるコードにしましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step15)" :src="imagePaths.step15" class="screen-image" alt="result-15" />
          </div><br><br>
          <p> 
            switch 文の例<br>
            以下は、switch文の基本的な例です。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step16)" :src="imagePaths.step16" class="screen-image" alt="result-16" />
          </div><br><br>
          <NavigationButtons
            :previousPageName="'JavascriptPage1'"
            :nextPageName="'JavascriptPage3'"
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
import TableOfContents from "@/components/TableOfContents.vue";
import { javascriptData } from "@/data/javascriptData.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "JavaScript2",
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
    NavigationButtons,
  },
  setup() {
    const sections = [
      { id: "Title", title: "Javascript 2" },
      { id: "subTitle1", title: "  1. if文について学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. 比較演算子" },
      { id: "sectionTitle1-2", title: "    1-2. if文" },
      { id: "sectionTitle1-3", title: "    1-3. 論理式" },
      { id: "subTitle2", title: "  2. switch文について学ぶ" },
      { id: "sectionTitle2-1", title: "    2-1. switch文" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-2/result-1.png"),
      step2: require("../../../assets/images/course/javascript-2/result-2.png"),
      step3: require("../../../assets/images/course/javascript-2/result-3.png"),
      step4: require("../../../assets/images/course/javascript-2/result-4.png"),
      step5: require("../../../assets/images/course/javascript-2/result-5.png"),
      step6: require("../../../assets/images/course/javascript-2/result-6.png"),
      step7: require("../../../assets/images/course/javascript-2/result-7.png"),
      step8: require("../../../assets/images/course/javascript-2/result-8.png"),
      step9: require("../../../assets/images/course/javascript-2/result-9.png"),
      step10: require("../../../assets/images/course/javascript-2/result-10.png"),
      step11: require("../../../assets/images/course/javascript-2/result-11.png"),
      step12: require("../../../assets/images/course/javascript-2/result-12.png"),
      step13: require("../../../assets/images/course/javascript-2/result-13.png"),
      step14: require("../../../assets/images/course/javascript-2/result-14.png"),
      step15: require("../../../assets/images/course/javascript-2/result-15.png"),
      step16: require("../../../assets/images/course/javascript-2/result-16.png"),
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