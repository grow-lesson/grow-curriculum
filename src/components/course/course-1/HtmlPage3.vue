<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 3" id="Title"></Title>
        <Document>
          <p>実際に作られているWebサイトのような見た目を作れるようになりましょう!</p>
          <p>ここではWebサイトの構成やFlexbox、メディアクエリセクションについて学びます。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. 全体のレイアウトを知る" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. Webサイトの構成" id="sectionTitle1-1"></SectionTitle>
          <p>
            皆さんがいつも見ているWebサイトの構成は主に3つに分けることができます。<br>
            どのようなものがあるか見ていきましょう!
          </p><br>
          <HighlightWord word="ヘッダー"></HighlightWord>
          <p>
            ページの上部にあります。
            他のページに遷移するナビゲーションや、そのサイトのロゴなどがある領域になります。
          </p><br>
          <HighlightWord word="メイン"></HighlightWord>
          <p>
            ページの中央部全体を指します。
            そのページの情報やコンテンツがある領域になります。
          </p><br>
          <HighlightWord word="フッター"></HighlightWord>
          <p>
            ページの下部にあります。
            コピーライトやクレジット、補足情報などがある領域になります。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="powerpoint-image" alt="site" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. 要素とプロパティ①" id="sectionTitle1-2"></SectionTitle>
          <p>
            それではHTMLの要素で何を記述するか学びましょう!<br><br>
            要素<br>
            <HighlightWord word="<header>・・・</header>"></HighlightWord><br>
            ・ヘッダー部分を作る要素。headerタグと呼ばれます。<br>
            <br>
            <HighlightWord word="<main>・・・</main>"></HighlightWord><br>
            ・メイン部分を作る要素。mainタグと呼ばれます。<br>
            <br>
            <HighlightWord word="<footer>・・・</footer>"></HighlightWord><br>
            ・フッター部分を作る要素。footerタグと呼ばれます。<br>
          </p>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. 要素の配置を学ぶ" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. 要素とプロパティ②" id="sectionTitle2-1"></SectionTitle>
          <p>Webサイトのヘッダーやメイン、フッターにいろいろな要素を配置するにはどうすればよいか学んでいきましょう!</p>
          <p>
            新しいCSSのプロパティを覚えましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="position: [配置基準];"></HighlightWord><br>
            ・要素の配置の基準を設定するプロパティ。positionプロパティと呼ばれます。<br><br>
            例：<br>
            position : fixed; →画面のきまった位置に固定<br>
            position : relative;  →現在の位置を基準に相対的な位置を決める<br>
            position : absolute;  →親要素を基準に絶対的な位置を決める<br>
            <br><br>
            <HighlightWord word="top: [位置(px,rem,%など)];"></HighlightWord><br>
            <HighlightWord word="right: [位置(px,rem,%など)];"></HighlightWord><br>
            <HighlightWord word="bottom: [位置(px,rem,%など)];"></HighlightWord><br>
            <HighlightWord word="left: [位置(px,rem,%など)];"></HighlightWord><br>
            ・要素の配置を設定するプロパティ。top,right,bottom,leftプロパティと呼ばれます。<br><br>
            <br>
            それではこの基準と位置を配置するプロパティの使い方を説明していきます。<br><br>
            まずはposition: fixed;はスクロールしても表示される様に固定したい時に使います。<br>
            ヘッダーのようなナビゲーションエリアなどの要素にこのプロパティを指定し、スクロールしても画面上に固定したい場合などに使用します。<br><br>
            次にposition: relative;はデフォルトの位置から要素を動かしたい時に使います。<br>
            次の画像を見てください。
          </p><br>
          <br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="powerpoint-image" alt="relative" />
          </div><br>
          <p>
            このように元々デフォルトでは左上にある要素にposition: relative;で基準を設定し、そこからtop,leftで位置をずらしています。<br><br>
            最後にposition: absolute;は親要素内で自由に動かしたい時に使います。<br>
            次の画像を見てください。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="powerpoint-image" alt="absolute" />
          </div><br>
          <br>
          <p>
            position: absolute;はrelativeを指定した要素の子要素に設定します。<br>
            親要素内で位置の基準をとるので必ずセットで使いましょう。<br>
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="2-2. Flexboxについて知る" id="sectionTitle2-2"></SectionTitle>
          <p>
            ではもう少し規則性のある柔軟に配置を行う方法を覚えていきましょう。<br><br>
            <HighlightWord word="Flexbox"></HighlightWord><br>
            webサイトなどの装飾を行うCSSにおいて、短く柔軟なコードで配置を行うためのレイアウトモードのことを指します。<br>
            HTML・CSSのコースで学習したfloatプロパティで横並びにしましたが、少し不便だと感じたかもしれません。<br><br>
            しかし、このFlexboxのレイアウトモードを使うことで簡単に横並びにすることができます。<br>
            Flexboxを適用(横並び)する方法と例は以下のようになります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="powerpoint-image" alt="flex" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="powerpoint-image" alt="flexbox" />
          </div><br>
          <br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="2-3. 要素とプロパティ③" id="sectionTitle2-3"></SectionTitle>
          <p>
            それではFlexboxを適用(横並び)した各要素の配置をさらに細かく設定していきましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="justify-content: [位置];"></HighlightWord><br>
            ・子要素の水平方向の位置を設定するプロパティ。justify-contentプロパティと呼ばれます。<br><br>
            例：<br>
            flex-start : 左寄せ（初期値）に指定します。<br>
            flex-end : 右寄せに指定します。<br>
            center : 中央寄せに指定します。<br>
            space-between : flexアイテムの両端揃えに指定します。<br>
            space-around : flexアイテムの両側の余白を均等に指定します。<br>
            space-evenly : flexアイテム間のすべての余白を均等に指定します。<br><br>
            設定する要素はdisplay: flex;を適用した所の下に続けて書くことで水平方向の位置を変えることができます。<br>
            実際にどのように変わるか以下の画像を見てみましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="powerpoint-image" alt="justify-1" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="powerpoint-image" alt="justify-2" />
          </div><br>
          <p>
            <HighlightWord word="align-items: [位置];"></HighlightWord><br>
            ・子要素の水平方向の位置を設定するプロパティ。align-itemsプロパティと呼ばれます。<br><br>
            例：<br>
            flex-start : 上寄せ（初期値）に指定します。<br>
            flex-end : 下寄せに指定します。<br>
            center : 中央寄せに指定します。<br>
            space-between : flexアイテムの両端揃えに指定します。<br>
            space-around : flexアイテムの両側の余白を均等に指定します。<br>
            space-evenly : flexアイテム間のすべての余白を均等に指定します。<br><br>
            設定する要素はdisplay: flex;を適用した所の下に続けて書くことで垂直方向の位置を変えることができます。<br>
            flex-start、flex-end、centerは以下の画像を見てみましょう。<br>
            space-between、space-around、space-evenlyはjustify-contentを垂直にしたものなので、そちらを参考にして下さい。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" class="powerpoint-image" alt="align-1" />
          </div><br>
          <p>
            <HighlightWord word="flex-direction: [位置];"></HighlightWord><br>
            ・子要素の主軸の位置を設定するプロパティ。flex-directionプロパティと呼ばれます。<br><br>
            例：<br>
            column : flexboxアイテム(子要素)を<span class="markup-word-blue">上から下</span>に指定します。<br>
            column-reverse : flexboxアイテム(子要素)を<span class="markup-word-blue">下から上</span>に指定します。<br><br>
            設定する要素はdisplay: flex;を適用した所の下に続けて書くことで要素の順番を変えることができます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" class="powerpoint-image" alt="direction-1" />
          </div><br>
          <p>
            <HighlightWord word="flex-wrap: [折り返しのオプション];"></HighlightWord><br>
            ・子要素の折り返しを設定するプロパティ。flex-directionプロパティと呼ばれます。<br><br>
            例：<br>
            no-wrap : flexboxアイテム(子要素)を折り返さないように指定します。<br>
            wrap : flexboxアイテム(子要素)を折り返すように指定します。<br><br>
            設定する要素はdisplay: flex;を適用した所の下に続けて書くことで子要素が親要素の幅を超えた時に折り返すようにする事ができます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" class="powerpoint-image" alt="wrap-1" />
          </div><br>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. デバイスごとのスタイルを作る" id="subTitle3"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. デバイスごとのスタイル設定" id="sectionTitle3-1"></SectionTitle>
          <p>
            Webサイトは見る人の環境によってはPC、タブレット、スマートフォンなど画面幅が違います。<br>
            そのため、自分が制作している画面を基準にスタイルを適用すると別デバイスで閲覧する時にスタイル崩れが起きてしまいます。<br>
            どの画面で見ても違和感がないようにスタイルを作れるようになりましょう!<br><br>
          </p>
          <p>
            デバイス間でスタイルを変える方法をなんと言うのでしょうか。<br><br>
            <HighlightWord word="メディアクエリ"></HighlightWord><br>
            ・ブラウザの画面サイズに応じてCSSのスタイルを設定できる手法。<br>
            Webページのスタイル（見栄え）を記述するCSSの仕様の一つで、デバイスごとにスタイルをわけることができます。<br><br>
            適用方法は画像のとおりです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" class="powerpoint-image" alt="media" />
          </div><br>
          <p>
            <HighlightWord word="レスポンシブデザイン"></HighlightWord><br>
            メディアクエリを利用をすることでユーザーが使うデバイスやWebブラウザに合わせ、レイアウトを「Responsive（機敏に反応）」に最適化できるWebデザインのこと。<br><br>
          </p><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-2. 要素とプロパティ④" id="sectionTitle3-2"></SectionTitle>
          <p>
            それでは先ほどのメディアクエリの設定に記述されていた「CSSを適用したい最大幅、最小幅」とある部分に新しいプロパティを設定しましょう。<br><br>
            プロパティ<br>
            <HighlightWord word="max-width: [最大幅(px,rem,%など)];"></HighlightWord><br>
            ・最大幅を設定するプロパティ。max-widthプロパティと呼ばれます。<br>
            メディアクエリとしてではなく要素に指定するとこれ以上は大きくならないように制限をかけることができます。<br><br>
            <HighlightWord word="min-width: [最大幅(px,rem,%など)];"></HighlightWord><br>
            ・最小幅を設定するプロパティ。min-widthプロパティと呼ばれます。<br>
            メディアクエリとしてではなく要素に指定するとこれ以上は小さくならないように制限をかけることができます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step12)" :src="imagePaths.step12" class="powerpoint-image" alt="breakpoint" />
          </div><br>
          <p>
            このようなメディアクエリの条件を<span class="markup-word-blue">ブレイクポイント</span>といいます。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-3. Webサイトを実際に作ってみる" id="sectionTitle3-3"></SectionTitle>
          <p>
            それではここまで学習した内容を使って実際のWebサイトに近いサンプルを作ってみましょう!<br>
            以下のようなデザインを作っていきます。<br><br>
            PC版<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step13)" :src="imagePaths.step13" class="screen-image" alt="sample-pc" />
          </div><br>
          <p>
            スマートフォン版<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step14)" :src="imagePaths.step14" class="screen-image" alt="sample-sp" style="width: 35%; display: block; margin: 0 auto;" />
          </div><br>
          <p>
            ①<br>
            以下の画像をすべて右クリックでダウンロードしましょう。<br>
          </p><br>
          <ul class="siteImages">
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/img1.png" class="screen-image" alt="bag" />
            </li>
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/img2.png" class="screen-image" alt="book" />
            </li>
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/img3.png" class="screen-image" alt="logo" />
            </li>
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/img4.png" class="screen-image" alt="movie" />
            </li>
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/img5.png" class="screen-image" alt="note" />
            </li>
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/img6.png" class="screen-image" alt="pen" />
            </li>
            <li class="siteImage">
              <img src="../../../assets/images/course/sample-site/logo.png" class="screen-image" alt="phone" />
            </li>
          </ul>
          <br>
          <p>
          ②<br>
            Visual Studio Codeで「html-css-lesson-10」をプロジェクトを以下の画像のように作成しましょう。<br>
            フォルダやリセットCSSも以前作ったフォルダをコピーするなどして作りましょう。<br>
            それができたらhtml、cssファイルに以下をコピーして貼り付けてください。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step22)" :src="imagePaths.step22" class="screen-image" alt="vscode-4" />
          </div><br>
          <Terminal :fileName="htmlSourceData.file17.filename" :copiedText="htmlSourceData.file17.code" :lang="htmlSourceData.file17.language" />
          <Terminal :fileName="htmlSourceData.file18.filename" :copiedText="htmlSourceData.file18.code" :lang="htmlSourceData.file18.language" />
          <br>
          <NavigationButtons
            :previousPageName="'HtmlPage2'"
            :nextPageName="'HtmlPageFloat'"
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
  name: "HtmlPage3",
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
      { id: "Title", title: "HTML・CSS 3" },
      { id: "subTitle1", title: "  1. 全体のレイアウトを知る" },
      { id: "sectionTitle1-1", title: "    1-1. Webサイトの構成" },
      { id: "sectionTitle1-2", title: "    1-2. 要素とプロパティ①" },
      { id: "subTitle2", title: "  2. 要素の配置を学ぶ" },
      { id: "sectionTitle2-1", title: "    2-1. 要素とプロパティ②" },
      { id: "sectionTitle2-2", title: "    2-2. Flexboxについて知る" },
      { id: "sectionTitle2-3", title: "    2-3. 要素とプロパティ③" },
      { id: "subTitle3", title: "  3. デバイスごとのスタイルを作る" },
      { id: "sectionTitle3-1", title: "    3-1. デバイスごとのスタイル設定" },
      { id: "sectionTitle3-2", title: "    3-2. 要素とプロパティ④" },
      { id: "sectionTitle3-3", title: "    3-3. Webサイトを実際に作ってみる" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/html-css-3/site.png"),
      step2: require("../../../assets/images/course/html-css-3/relative.png"),
      step3: require("../../../assets/images/course/html-css-3/absolute.png"),
      step4: require("../../../assets/images/course/html-css-3/flex.png"),
      step5: require("../../../assets/images/course/html-css-3/flexbox.png"),
      step6: require("../../../assets/images/course/html-css-3/justify-1.png"),
      step7: require("../../../assets/images/course/html-css-3/justify-2.png"),
      step8: require("../../../assets/images/course/html-css-3/align-1.png"),
      step9: require("../../../assets/images/course/html-css-3/direction-1.png"),
      step10: require("../../../assets/images/course/html-css-3/wrap-1.png"),
      step11: require("../../../assets/images/course/html-css-3/media.png"),
      step12: require("../../../assets/images/course/html-css-3/breakpoint.png"),
      step13: require("../../../assets/images/course/html-css-3/sample-pc.png"),
      step14: require("../../../assets/images/course/html-css-3/sample-sp.png"),
      step15: require("../../../assets/images/course/sample-site/bag.png"),
      step16: require("../../../assets/images/course/sample-site/book.png"),
      step17: require("../../../assets/images/course/sample-site/logo.png"),
      step18: require("../../../assets/images/course/sample-site/movie.png"),
      step19: require("../../../assets/images/course/sample-site/note.png"),
      step20: require("../../../assets/images/course/sample-site/pen.png"),
      step21: require("../../../assets/images/course/sample-site/phone.png"),
      step22: require("../../../assets/images/course/html-css-3/vscode-1.png"),
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
}
</style>
