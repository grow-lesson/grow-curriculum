<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="JQuery 1" id="Title"></Title>
        <Document>
          <p>JQueryについて学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. JQueryについて学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. JQueryとは?" id="sectionTitle1-1"></SectionTitle>
          <p>
            皆さんがこれから学ぶ「JQuery」について概要を理解しましょう!<br>
          </p><br>
          <HighlightWord word="JQuery"></HighlightWord>
          <p>
            jQueryは、JavaScriptを簡単に操作するためのライブラリで、DOM操作、イベント処理、AJAXリクエスト、アニメーションなどを簡便に実行できます。ライブラリとは、特定の機能を簡単に使えるようにまとめた再利用可能なコードの集まりです。
          </p>
        </Document>
        <SubTitle subTitle="2. JQueryの概要と基本的なDOM操作を学びましょう" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. カリキュラムでの考え方やヒント" id="sectionTitle2-1"></SectionTitle>
          <HighlightWord word="※このコードはあくまでも一つの参考としてのコードになるので効率の良い書き方やわからない所をうまく抜粋して使いましょう！"></HighlightWord>
          <p>
            このカリキュラムを行うときに必要になる工程を順にピックアップしていきましょう<br><br>
            第1問<br>
            ・jQueryでid="q1"の要素の文字色を赤色にせよ。<br>
            ・要素の文字色を変更してください (color: red)<br>
            <HighlightWord word="css()"></HighlightWord><br>
            こういったcssに記述していたようなスタイルを追加する場合は「css()」メソッドを使います。<br>
            「css()」メソッドでは以下のことができます。<br><br>
            ・スタイルを追加する<br>
            <HighlightWord word='対象要素.css("設定したいcssのプロパティ名","プロパティに適した値");'></HighlightWord><br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" alt="tag-1" class="powerpoint-image" />
          </div>
          <br>
          <p>
            ・スタイルを変更する<br>
            <HighlightWord word='対象要素.css("変更したいcssのプロパティ名","プロパティに適した値");'></HighlightWord><br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" alt="tag-2" class="powerpoint-image" />
          </div>
          <br>
          <p>
            ・スタイルを取得する<br>
            <HighlightWord word='対象要素.css("値を取得したいcssのプロパティ名")'></HighlightWord><br>
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" alt="tag-3" class="powerpoint-image" />
          </div>
          <br><br>
          <p>
            第2問<br>
            ・id="q2"の要素をクリックしたら背景色をピンクにせよ。<br>
            ・クリックされた要素の背景色を変更してください (background-color: pink)<br>
            <HighlightWord word="on()"></HighlightWord><br>
            こういった「クリックをした」、「マウスを動かした」、「キーボード入力した」等のアクション(イベント)をした場合の処理は、「on()」メソッドを使います。<br>
            例として下記のようなイベントがあります。<br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" alt="tag-4" class="powerpoint-image" />
          <br>
          <p>
            ・今回はクリックしたときの処理なので、「click」イベントを使います<br>
            <HighlightWord word='対象要素.on("click",関数)'></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" alt="tag-5" class="powerpoint-image" />
          <br>
          <p>
            第3問<br>
            ・id="q3"の要素をクリックしたら2秒かけてフェードアウトさせよ。<br>
            ・クリックされた要素を2秒かけてフェードアウトさせてください<br>
            <HighlightWord word="fadeOut()"></HighlightWord><br>
            ・フェードアウトさせるときは「fadeOut()」イベントを使います。<br>
            <HighlightWord word='対象要素.fadeOut(時間)'></HighlightWord><br>
            ※関数を利用するときは 対象要素.fadeOut(時間,関数) で記載できます。
          </p>
          <br>
          <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" alt="tag-6" class="powerpoint-image" />
          <br>
          <p>
            第4問<br>
            ・id="q4"の要素をクリックしたらこの要素の前後とこの要素内の前後にテキストを挿入せよ。<br>
            ・要素の前にテキストを挿入してください (DOMの前)<br>
            ・要素の後にテキストを挿入してください (DOMの後)<br>
            ・要素の内部の前にテキストを挿入してください (前)<br>
            ・要素の内部の後にテキストを挿入してください (後)<br>
            <HighlightWord word="before()"></HighlightWord><br>
            任意の要素の前にテキストやコンテンツを入れたい場合は「before()」メソッドを使います。<br>
            ・同じ階層の要素の前に新しい内容を挿入する<br>
            <HighlightWord word="対象要素.before(入れたい内容)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" alt="tag-7" class="powerpoint-image" />
          <br>
          <p>
            <HighlightWord word="after()"></HighlightWord><br>
            任意の要素の後にテキストやコンテンツを入れたい場合は「after()」メソッドを使います。<br>
            ・同じ階層の要素の後に新しい内容を挿入する<br>
            <HighlightWord word="対象要素.after(入れたい内容)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" alt="tag-8" class="powerpoint-image" />
          <br>
          <p>
            <HighlightWord word="prepend()"></HighlightWord><br>
            任意の要素内の先頭にテキストやコンテンツを入れたい場合は「prepend()」メソッドを使います。<br>
            ・要素内の先頭に新しい内容を挿入する<br>
            <HighlightWord word="対象要素.prepend(入れたい内容)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" alt="tag-9" class="powerpoint-image" />
          <br>
          <p>
            <HighlightWord word="append()"></HighlightWord><br>
            任意の要素内の末尾にテキストやコンテンツを入れたい場合は「append()」メソッドを使います。<br>
            ・要素内の末尾に新しい内容を挿入する<br>
            <HighlightWord word="対象要素.append(入れたい内容)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" alt="tag-10" class="powerpoint-image" />
          <br>
          <p>
            第5問<br>
            ・id="q5"の要素をクリックしたらこの要素にbigというクラスを付与せよ。<br>
            ・クリックされた要素にクラスを追加してください (big)<br>
            <HighlightWord word="addClass()"></HighlightWord><br>
            任意の要素にクラスを追加するには、「addClass()」メソッドを使います。<br>
            ・要素に新しいクラスを追加する<br>
            <HighlightWord word="対象要素.addClass(クラス名)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" alt="tag-11" class="powerpoint-image" />
          <br>
          <p>
            第6問<br>
            ・id="q6"の要素をクリックしたらこの要素を2秒かけてmargin-topとmargin-leftを100pxの位置に移動させよ。<br>
            ・クリックされた要素を2秒かけて位置を変更してください (marginTop: 100, marginLeft: 100)<br>
            <HighlightWord word="animate()"></HighlightWord><br>
            〇秒かけて移動や変化させる場合は、「animate()」メソッドを使用しましょう。<br>
            ・要素のcssプロパティを〇秒かけて追加(変更)する<br>
            <HighlightWord word="対象要素.animate(cssプロパティ,時間)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step12)" :src="imagePaths.step12" alt="tag-12" class="powerpoint-image" />
          <br>
          <p>
            第7問<br>
            ・id="q7"の子要素をクリックしたら、その要素のインデックス（何番目か）をconsole.log()とalert()を用いて表示させよ。<br>
            ・クリックされた要素のインデックスを取得してください (変数名: targetNum)<br>
            ・インデックスをコンソールに表示してください<br>
            ・インデックスをアラートに表示してください<br>
            <HighlightWord word="index()"></HighlightWord><br>
            このように要素が何番目の要素か取得するときは「index()」メソッドを使います。<br>
            ※配列と同様0から数え始めます<br>
            ・任意の要素が何番目の要素か取得する<br>
            <HighlightWord word="対象要素.index()"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step13)" :src="imagePaths.step13" alt="tag-13" class="powerpoint-image" />
          <br>
          <p>
            <HighlightWord word="alert()"></HighlightWord><br>
            下の画像のような画面にアラートを表示させたい場合は「alert()」メソッドを使います。<br>
            ・任意の文言でアラートを表示させる<br>
            <HighlightWord word="alert(表示させたい文言)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" alt="tag-5" class="powerpoint-image" />
          <br>
          <p>
            第8問<br>
            ・id="q8"の要素をhoverしたらbigというクラスを付与し、hoverが外れたら、クラスを削除せよ。<br>
            ・hover時にクラスを追加してください (big)<br>
            ・hoverが外れたときにクラスを削除してください<br>
            <HighlightWord word="hover()"></HighlightWord><br>
            マウスカーソルが重なっている時、外れたときの処理は「hover()」メソッドを使います。<br>
            ・任意の要素にマウスカーソルが重なっている時、外れたとき<br>
            <HighlightWord word="対象要素.hover(重なっている時の関数,離れた時の関数)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step14)" :src="imagePaths.step14" alt="tag-14" class="powerpoint-image" />
          <br>
          <p>
            第9問<br>
            ・id="q9"の要素をクリックしたらこの要素に設定してあるdata属性をconsoleに表示せよ。<br>
            ・要素のdata属性を取得してください (変数名: text)<br>
            ・data属性の値をコンソールに表示してください<br>
            <HighlightWord word="data()"></HighlightWord><br>
            このように要素のdata属性を取得したい場合は「data()」メソッドを使います。<br>
            ・任意の要素のdata属性を取得<br>
            <HighlightWord word="対象要素.data(取得したい属性名)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step15)" :src="imagePaths.step15" alt="tag-15" class="powerpoint-image" />
          <br>
          <p>
            第10問<br>
            ・id="q10"の子要素をクリックしたら、その要素のインデックスと等しいid="q11"の子要素にbigというクラスを追加せよ。<br>
            ・クリックされた要素のインデックスを取得してください (変数名: num)<br>
            ・インデックスと同じid="q11"の子要素にクラスを追加してください (big)<br>
            <HighlightWord word="children()"></HighlightWord><br>
            子要素の取得、指定のときは「children()」メソッドを使います。<br>
            ・任意の要素の全ての子要素を取得<br>
            <HighlightWord word="対象要素.children()"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step16)" :src="imagePaths.step16" alt="tag-16" class="powerpoint-image" />
          <br>
          <p>
            ・任意の要素の子要素から対象の子要素を取得<br>
            <HighlightWord word="対象要素.children('取得したい要素')"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step17)" :src="imagePaths.step17" alt="tag-17" class="powerpoint-image" />
          <br>
          <p>
            <HighlightWord word="eq()"></HighlightWord><br>
            任意のインデックス番号から要素を取得する場合は「eq()」メソッドを使います。<br>
            ・任意の要素から対象のインデックス番号の要素を取得<br>
            <HighlightWord word="対象要素.eq(インデックス番号)"></HighlightWord><br>
          </p>
          <br>
          <img @click="openModal(imagePaths.step18)" :src="imagePaths.step18" alt="tag-18" class="powerpoint-image" />
          <br>
          <Terminal :fileName="jqueryData.file1.filename" :copiedText="jqueryData.file1.code"
            :lang="jqueryData.file1.language" />
          <NavigationButtons :previousPageName="'JqueryPage10'" :nextPageName="'JqueryPage2'" />
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
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { jqueryData } from "@/data/jqueryData1.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "JqueryPage1",
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
      { id: "subTitle2", title: "  2. JQueryの概要と基本的なDOM操作を学びましょう" },
      { id: "sectionTitle2-1", title: "    2-1. カリキュラムでの考え方やヒント" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/jQuery-1/css-1.png"),
      step2: require("../../../assets/images/course/jQuery-1/css-2.png"),
      step3: require("../../../assets/images/course/jQuery-1/css-3.png"),
      step4: require("../../../assets/images/course/jQuery-1/on-1.png"),
      step5: require("../../../assets/images/course/jQuery-1/on-2.png"),
      step6: require("../../../assets/images/course/jQuery-1/fadeout-1.png"),
      step7: require("../../../assets/images/course/jQuery-1/before-1.png"),
      step8: require("../../../assets/images/course/jQuery-1/after-1.png"),
      step9: require("../../../assets/images/course/jQuery-1/prepend-1.png"),
      step10: require("../../../assets/images/course/jQuery-1/append-1.png"),
      step11: require("../../../assets/images/course/jQuery-1/addClass-1.png"),
      step12: require("../../../assets/images/course/jQuery-1/animate-1.png"),
      step13: require("../../../assets/images/course/jQuery-1/index-1.png"),
      step14: require("../../../assets/images/course/jQuery-1/hover-1.png"),
      step15: require("../../../assets/images/course/jQuery-1/data-1.png"),
      step16: require("../../../assets/images/course/jQuery-1/children-1.png"),
      step17: require("../../../assets/images/course/jQuery-1/children-2.png"),
      step18: require("../../../assets/images/course/jQuery-1/eq-1.png"),
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

.main-content {
  width: 75%;
}

.side-content {
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
  background-color: #4caf50;
  /* ボタンの背景色 */
  color: white;
  /* ボタンのテキストカラー */
  border: none;
  /* ボーダーなし */
  padding: 10px 20px;
  /* 上下左右のパディング */
  text-align: center;
  /* テキストを中央に配置 */
  text-decoration: none;
  /* テキスト装飾なし */
  display: inline-block;
  /* インラインブロック要素にする */
  font-size: 16px;
  /* フォントサイズ */
  border-radius: 5px;
  /* 角丸 */
  cursor: pointer;
  /* カーソルをポインターに変更 */
  transition: background-color 0.3s;
  /* ホバー時の背景色変化にトランジションを追加 */
}

.download-button:hover {
  background-color: #45a049;
  /* ホバー時の背景色 */
}

.siteImages {
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
    width: auto;
    /* 幅を自動調整 */
    text-align: center;
    /* テキストを中央揃え */
    margin: 20px auto;
    /* 上下のマージンを調整 */
  }

  .change_component_button:before {
    display: none;
    /* トライアングルアイコンを非表示 */
  }
}
</style>