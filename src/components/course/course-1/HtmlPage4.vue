<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 4" id="Title"></Title>
        <Document>
          <p>Lesson 2ではdisplay:flexにて要素を横並びにしました。</p>
          <p>今はdisplay:flex;などをつかって横並びにするのが主流ですが、少し前はfloatというプロパティでも横に並べる方法が主流でした。</p>
          <p>まだ使っているWebサイトもあるので知識を深めるためにも覚えておきましょう！</p>
        </Document>

        <SubTitle subTitle="1. 番外編(floatと疑似要素について)" id="subTitle1"></SubTitle>

        <Document>
          <SectionTitle sectionTitle="1-1. 要素とプロパティ③" id="sectionTitle1-1"></SectionTitle>
          <p>
            プロパティ<br>
            <HighlightWord word="float: [left,right,none];"></HighlightWord><br>
            ・ブロック要素を横並びにするプロパティ。floatプロパティと呼ばれます。<br><br>
            left…左寄せに横に並べる<br>
            right…右寄せに横に並べる<br>
            none…特に配置を指定しない(デフォルト値)<br><br>
            それではどのように確認していきましょう。<br><br>
            ①<br>
            先ほどのようにVisual Studio Codeで「html-css-lesson-5」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            名前を「html-css-lesson-6」に変更し、以下のソースを貼り付けましょう。<br><br>
            画像のようになればOKです。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file9.filename" :copiedText="htmlSourceData.file9.code" :lang="htmlSourceData.file9.language" />
          <Terminal :fileName="htmlSourceData.file10.filename" :copiedText="htmlSourceData.file10.code" :lang="htmlSourceData.file10.language" />
          <br>
          <div>
            <img @click="openModal(imagePaths.step15)" :src="imagePaths.step15" class="screen-image" alt="vscode-8" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.step16)" :src="imagePaths.step16" class="screen-image" alt="web-5" />
          </div><br>
          <p>
            ②<br>
            では横並びにしていきましょう。<br>
            style.cssのparentの子要素に以下を追加しましょう。<br><br>
            画像のように設定できればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step17)" :src="imagePaths.step17" class="screen-image" alt="vscode-9" />
          </div><br>
          <p>
            ③<br>
            Web上で確認してみましょう。<br>
            画像のように横並びになっていればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step18)" :src="imagePaths.step18" class="screen-image" alt="web-6" />
          </div><br>
          <p>
            ①<br>
            次に先ほどのようにVisual Studio Codeで「html-css-lesson-6」を選択して「ctrl(command) + C」でコピーして「ctrl(command) + V」で作りましょう。<br>
            そのあとは名前を「html-css-lesson-7」に変更し、以下のソースを貼り付けましょう。<br><br>
            画像のようになればOKです。<br>
          </p><br>
          <Terminal :fileName="htmlSourceData.file11.filename" :copiedText="htmlSourceData.file11.code" :lang="htmlSourceData.file11.language" />
          <Terminal :fileName="htmlSourceData.file12.filename" :copiedText="htmlSourceData.file12.code" :lang="htmlSourceData.file12.language" />
          <div>
            <img @click="openModal(imagePaths.step19)" :src="imagePaths.step19" class="screen-image" alt="vscode-10" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.step20)" :src="imagePaths.step20" class="screen-image" alt="web-7" />
          </div><br>
          <p>
            ②<br>
            ではmiddleの子要素left、rightを横並びにしていきましょう。<br>
            style.cssのmiddleの子要素に以下を追加しましょう。<br><br>
            画像のようになればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step21)" :src="imagePaths.step21" class="screen-image" alt="vscode-10" />
          </div><br>
          <p>
            ③<br>
            Web上で確認しましょう。<br>
            leftとrightは横並びにすることができました。<br><br>
            しかし、緑が半分下に入り込んでいます。<br>
            なぜこのようなことになるのでしょうか？<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step22)" :src="imagePaths.step22" class="screen-image" alt="web-8" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. floatの性質とclearfixの概念を知る" id="sectionTitle1-2"></SectionTitle>
          <p>
            floatの性質を理解していきましょう。<br>
            floatを指定した要素は浮き上がる性質があるため、浮き上がったleftとrightの下にbottomが入り込んでかぶってしまうことがあります。<br>
            この入り込みを解決する方法がClearfixという考え方です。<br><br>
            <HighlightWord word="Clearfix"></HighlightWord><br>
            floatプロパティを使って横並びになっている要素を回り込みの影響が出ないようにするテクニックのこと。<br>
            <br>
            ではこのテクニックを使って回り込みをしないようにしましょう。<br>
            clearfixの記述の仕方は以下のように記述が決まっています。<br><br>
            この記述の意味は後ほど説明しますので一旦入れてみましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step23)" :src="imagePaths.step23" class="powerpoint-image" alt="clearfix" />
          </div><br>
          <p>
            ①<br>
            以下の画像のようにmiddleにclearfixを適用させます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step24)" :src="imagePaths.step24" class="screen-image" alt="vscode-12" />
          </div><br>
          <p>
            ②<br>
            Web上で確認するとbottomの要素が回り込んでいないことがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step25)" :src="imagePaths.step25" class="screen-image" alt="web-9" />
          </div><br>
          <p>
            それではClearfixで使われていた::afterについて学びましょう。<br><br>
            <HighlightWord word="疑似要素"></HighlightWord><br>
            ::afterは疑似要素と呼ばれるセレクタに付加するキーワード。選択された要素の特定の部分にスタイルをつけることができます。<br><br>
            以下はよく使われる疑似要素のため覚えておきましょう。<br>
            <span class="markup-word-blue">::after</span><br>
            要素の直後に挿入したい内容のスタイルがある時に使います。<br><br>
            <span class="markup-word-blue">::before</span><br>
            要素の直前に挿入したい内容のスタイルがある時に使います。<br><br>
          </p><br>
          <p>
            つまりClearfixでは疑似要素「::after」でmiddleの後にスタイルを挿入していたという事になります。<br>
            では挿入したスタイルの内容を見ていきましょう。<br>
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. 要素とプロパティ③" id="sectionTitle1-3"></SectionTitle>
          <p>
            Clearfixで使われていたプロパティをおさらいしましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="content: [挿入したい内容];"></HighlightWord><br>
            ・要素の直前または直後に文字や画像などの内容を挿入したいときに使われるプロパティ。contentプロパティと呼ばれます。<br><br>
            挿入できるもの<br>
            ・url→URLで画像や音声等のファイルを指定します。<br>
            ・"文字列"→テキストを入れることができます。<br><br>
            <HighlightWord word="clear: both;"></HighlightWord><br>
            ・floatプロパティによるボックスの回り込みを解除するプロパティ。clearプロパティと呼ばれます。<br><br>
            それでは先ほどのClearfixの画像を見てみましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step23)" :src="imagePaths.step23" class="powerpoint-image" alt="clearfix" />
          </div><br>
          <p>
            今回だと回り込みを防ぐためにmiddleの後に「content: "";」で空欄の要素を作りました。<br><br>
            contentで追加した要素はインライン要素になるため「display: block;」でブロック要素にし、横いっぱいに空欄を与えています。<br>
            これによってfloatで浮き上がった要素の下に空欄を埋め込み、回り込みしないようにバリアしているためbottomが入らないというわけです。<br><br>
            さらにcontentで追加したの要素がmiddleの下に回り込みまないようにclearプロパティで回り込みを解除しています。<br><br>
            少しイメージしづらいかもしれませんが少しずつ復習して覚えていきましょう。<br><br>
            しかし現在CSS3ではこのやり方は推奨されておらず、もう一つの方法「display: flex;」を使った横並びの方法を使うことが多いです。<br>
            最近追加されたプロパティのため、少し古いブラウザだと設定しても効かない場合もあるのでデザインする環境によって使い分けられるようにしましょう。<br><br>
            カリキュラムではflexを利用しましょう。
          </p>
          <NavigationButtons
            :previousPageName="'HtmlPage3'"
            :nextPageName="'HtmlPage5'"
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
import Terminal from "@/components/Terminal.vue";
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
    Terminal,
    TableOfContents,
    Modal,
    NavigationButtons,
  },
  setup() {
    const sections =  [
      { id: "Title", title: "HTML・CSS 4" },
      { id: "subTitle", title: "1. 番外編(floatと疑似要素について)" },
      { id: "sectionTitle1-1", title: "    1-1. 要素とプロパティ①" },
      { id: "sectionTitle1-2", title: "    1-2. floatの性質とclearfixの概念を知る" },
      { id: "sectionTitle1-3", title: "    1-3. 要素とプロパティ②" },
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step15: require("../../../assets/images/course/html-css-4/vscode-8.png"),
      step16: require("../../../assets/images/course/html-css-4/web-5.png"),
      step17: require("../../../assets/images/course/html-css-4/vscode-9.png"),
      step18: require("../../../assets/images/course/html-css-4/web-6.png"),
      step19: require("../../../assets/images/course/html-css-4/vscode-10.png"),
      step20: require("../../../assets/images/course/html-css-4/web-7.png"),
      step21: require("../../../assets/images/course/html-css-4/vscode-11.png"),
      step22: require("../../../assets/images/course/html-css-4/web-8.png"),
      step23: require("../../../assets/images/course/html-css-4/clearfix.png"),
      step24: require("../../../assets/images/course/html-css-4/vscode-12.png"),
      step25: require("../../../assets/images/course/html-css-4/web-9.png"),
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