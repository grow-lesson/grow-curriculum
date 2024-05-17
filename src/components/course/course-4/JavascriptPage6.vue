<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Javascript 6" id="Title"></Title>
        <Document>
          <p>関数について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. 関数について学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 関数" id="sectionTitle1-1"></SectionTitle>
          <p>
            <HighlightWord word="関数"></HighlightWord><br>
            特定の処理や計算を実行するためにまとめられたコードのブロックです。<br>
            関数はプログラム内で再利用可能なコードを作成するための重要なツールであり、コードの可読性と保守性を向上させるのに役立ちます。<br>
            <br>
            では関数の作成方法を覚えましょう。<br>
            JavaScriptの関数は、functionキーワードを使用して作成します。<br>
            関数には名前があり、関数名の後にかっこ()が続きます。関数の処理は中かっこ{}内に記述します。<br>
            greet という名前の関数が定義されています。<br>
            この関数は name というパラメータを受け取り、その値を用いて挨拶を表示します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="screen-image" alt="result-1" />
          </div><br><br>
          <p>
            関数の呼び出し方法を覚えましょう。<br>
            関数を呼び出すことで、関数内のコードが実行されます。<br>
            関数を呼び出す際には、関数名の後ろにかっこ()を付けて、必要な引数（関数に渡す値）を指定します。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="result-2" />
          </div><br><br>
          <p>
            関数の戻り値について覚えましょう。<br>
            関数は、処理の結果として値を返すことができます。関数内で return 文を使用して戻り値を指定します。<br>
            関数が2つの引数を受け取り、それらの値を足して戻り値として返しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="screen-image" alt="result-3" />
          </div><br><br>
          <p>
            関数のパラメータと引数について覚えましょう。<br>
            関数のパラメータは、関数定義内で宣言される変数のようなものです。引数は、関数を呼び出す際に渡される値です。<br>
            例では、add 関数が呼び出されると、パラメータに引数の値が割り当てられます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="result-4" />
          </div><br><br>
          <p>
            関数の無名関数と即時関数について覚えましょう。<br>
            JavaScript では、無名関数（名前のない関数）を定義して使用することもできます。<br>
            無名関数は通常、変数に代入して使用されることが多いです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="screen-image" alt="result-5" />
          </div><br><br>
          <p>
            また、無名関数を定義して即座に呼び出す場合、即時関数として知られています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="screen-image" alt="result-6" />
          </div><br><br>
          <p>
            関数の高階関数について覚えましょう。<br>
            JavaScript では、関数を引数として受け取る関数や、関数を戻り値として返す関数を作成できます。<br>
            これを高階関数と呼びます。高階関数は、コールバック関数や関数型プログラミングの実現に用いられます。<br>
            コールバック関数に関しては難しいのでこちらでは取り扱いません。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="screen-image" alt="result-7" />
          </div><br><br>
          <p>
            アロー関数について覚えましょう。<br><br>
            <HighlightWord word="アロー関数"></HighlightWord><br>
            アロー関数は、JavaScriptで導入された新しい関数の書き方の一つです。アロー関数は、通常の関数式よりも簡潔で、主に無名関数として使われます。<br>
            アロー関数は次のような基本構文を持ちます。<br>
            通常の関数と異なり、アロー関数では {} と return キーワードを省略できる場合があります。また、引数が1つの場合は()も省略できます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" class="screen-image" alt="result-8" />
          </div><br><br>
          <p>
            アロー関数の例は以下になります。<br>
            以下は、通常の関数定義とアロー関数の比較例です。<br><br>
            通常の関数定義：<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" class="screen-image" alt="result-9" />
          </div><br><br>
          <p>
            アロー関数：<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" class="screen-image" alt="result-10" />
          </div><br><br>
          <p>
            また、引数が1つの場合は()を省略できます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" class="screen-image" alt="result-11" />
          </div><br><br>
          <NavigationButtons
            :previousPageName="'JavascriptPage5'"
            :nextPageName="'JavascriptPage7'"
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
  name: "JavaScript6",
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
      { id: "Title", title: "Javascript 6" },
      { id: "subTitle1", title: "  1. 関数について学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. 関数" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-6/result-1.png"),
      step2: require("../../../assets/images/course/javascript-6/result-2.png"),
      step3: require("../../../assets/images/course/javascript-6/result-3.png"),
      step4: require("../../../assets/images/course/javascript-6/result-4.png"),
      step5: require("../../../assets/images/course/javascript-6/result-5.png"),
      step6: require("../../../assets/images/course/javascript-6/result-6.png"),
      step7: require("../../../assets/images/course/javascript-6/result-7.png"),
      step8: require("../../../assets/images/course/javascript-6/result-8.png"),
      step9: require("../../../assets/images/course/javascript-6/result-9.png"),
      step10: require("../../../assets/images/course/javascript-6/result-10.png"),
      step11: require("../../../assets/images/course/javascript-6/result-11.png"),
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