<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="JQuery 9" id="Title"></Title>
        <Document>
          <p>神経衰弱実装について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. 神経衰弱の実装" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. カリキュラムでの考え方やヒント" id="sectionTitle2-1"></SectionTitle>
          <HighlightWord word="※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"></HighlightWord>
          <p>
            このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう<br><br>
            1: 初期設定と変数の定義、最初の関数の呼び出し<br>
            2: ゲームのカードを生成し、ランダムに配置します<br>
            3: カードがクリックされたときの処理を管理します<br>
            4: カードを開き、番号を表示します<br>
            5: カードを閉じ、元の状態に戻します<br>
            6: 1枚目と2枚目のカードを比較し、一致するかどうかを確認します<br>
            7: 一時的にカードのクリックを無効にします<br>
            <br>
            まずは、初期設定と変数の定義、最初の関数の呼び出しを行います。<br>
            (1)全カード数を定義してください (変数名: total)
            (2)最初のカード番号を格納する変数を定義してください (変数名: firstNum)
            (3)二枚目のカード番号を格納する変数を定義してください (変数名: secondNum)
            (4)カード要素を格納する変数を定義してください (変数名: $card)
            (5)カードを作成する関数を呼び出してください (関数名: createCards)
            (6)カードの順序を判定する関数を呼び出してください (関数名: judgeOrder)
          </p><br>
          <Terminal :fileName="jqueryData.file1.filename" :copiedText="jqueryData.file1.code" :lang="jqueryData.file1.language" />
          <p>
            <br>
            次に、ゲームのカードを生成し、ランダムに配置します。<br>
            (1)カードを配置するリストを取得してください (変数名: $lists)<br>
            (2)カードの配列を作成してください (変数名: cardsArray)<br>
            (3)リストアイテムの配列を作成してください (変数名: listItem)<br>
            (4)カードの番号をペアで追加してください<br>
            (5)カードをランダムに並べ替えてください<br>
            (6)カードをリストアイテムに変換して追加してください<br>
            (7)リストにアイテムを追加してください<br>
            (8)カード要素を取得してください (変数名: $card)<br>
          </p><br>
          <Terminal :fileName="jqueryData.file2.filename" :copiedText="jqueryData.file2.code" :lang="jqueryData.file2.language" />
          <p>
            <br>
            次にカードがクリックされたときの処理を管理します<br>
            (1)カードがクリックされたときのイベントを設定してください (変数名: $card)<br>
            (2)1枚目のカードを開いた場合の処理を追加してください<br>
            (3)カードを開いてください (関数名: openCard)<br>
            (4)カードにクラスを追加してください<br>
            (5)1枚目のカードの要素を取得してください (変数名: firstNum)<br>
            (6)2枚目のカードを開いてください (関数名: openCard)<br>
            (7)2枚目のカードの要素を取得してください (変数名: secondNum)<br>
            (8)1枚目のカードのクラスを削除してください<br>
            (9)カードを比較する関数を呼び出してください (関数名: compareCard)<br>
          </p><br>
          <Terminal :fileName="jqueryData.file3.filename" :copiedText="jqueryData.file3.code" :lang="jqueryData.file3.language" />
          <p>
            <br>
            次にカードを開き、番号を表示します<br>
            (1)カードを開き、番号を表示してください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file4.filename" :copiedText="jqueryData.file4.code" :lang="jqueryData.file4.language" />
          <p>
            <br>
            次に、カードを閉じ、元の状態に戻します。<br>
            (1)カードを閉じ、？を表示してください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file5.filename" :copiedText="jqueryData.file5.code" :lang="jqueryData.file5.language" />
          <p>
            <br>
            次に、1枚目と2枚目のカードを比較し、一致するかどうかを確認します。<br>
            (1)1枚目と2枚目のカードの番号を取得してください (変数名: firstDataNum, secondDataNum)<br>
            (2)カードの番号が一致する場合の処理を追加してください<br>
            (3)全てのカードが開かれた場合、ゲーム終了メッセージを表示してください<br>
            (4)カードの番号が一致しない場合、カードを閉じてください (関数名: closeCard)<br>
            (5)カードのクリックを一時的に無効にする関数を呼び出してください (関数名: lockCard)<br>
          </p><br>
          <Terminal :fileName="jqueryData.file6.filename" :copiedText="jqueryData.file6.code" :lang="jqueryData.file6.language" />
          <p>
            <br>
            最後に、一時的にカードのクリックを無効にします。<br>
            (1)カードのクリックを一時的に無効にしてください<br>
            (2)1秒後にカードのクリックを有効に戻してください<br>
            (3)開かれたカードはクリックできないようにしてください<br>
          </p><br>
          <Terminal :fileName="jqueryData.file7.filename" :copiedText="jqueryData.file7.code" :lang="jqueryData.file7.language" />
        </Document>
        <NavigationButtons
            :previousPageName="'JQueryPage8'"
            :nextPageName="'JQueryPage9'"
          />
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
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { jqueryData } from "@/data/jqueryData9.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "JqueryPage9",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    Terminal,
    TableOfContents,
    Modal,
    NavigationButtons,
  },
  setup() {
    const sections = [
      { id: "Title", title: "JQuery 1" },
      { id: "subTitle1", title: "  1. JQueryについて学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. JQueryとは?" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-1/javascript.png"),
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      jqueryData,
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