<template>
  <div>
    <Header />
    <Spinner :isLoading="isLoading" />
    <button class="change_component_button" @click="toggleOS">{{ isWindows ? "Macをお持ちの方はこちら" : "Windowsをお持ちの方はこちら" }}</button>
    <div class="container">
      <!-- Windows版の説明 -->
      <div class="main-content" v-show="isWindows">
        <div class="attention">
          <HighlightWord word="※PCは日々アップデートされていくので若干内容が違う可能性がありますが読み替えたり、わからない事は各個人で調べましょう!"></HighlightWord>
        </div>
        <Title title="PCの基本操作 1" id="pc-1-w"></Title>
        <SubTitle subTitle="1. アプリケーションの開き方(windows11の場合)" id="app-1-w11"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 「アプリ一覧」から起動する" id="app-1-1-w11"></SectionTitle>
          <p>
            1-1,1-2はどちらかでやりやすい方法を選んでください。<br>
            ダウンロードしたアプリをアプリ一覧から開く方法<br>
            ①<br>
            「windows」マークを押します。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step1)" :src="imagePaths.win.step1" alt="setup-win-1" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            表示されたスタート画面、右上にある[すべてのアプリ] をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step2)" :src="imagePaths.win.step2" alt="setup-win-2" class="screen-image" />
          </div><br>
          <p>
            ③<br>
            開きたいアプリを開きます。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step3)" :src="imagePaths.win.step3" alt="setup-win-3" class="screen-image" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. 「検索」機能を使用して起動する" id="app-1-2-w11"></SectionTitle>
          <p>
            ダウンロードしたアプリを検索機能から開く方法<br>
            ①<br>
            タスクバーにある検索アイコンをクリックします。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step4)" :src="imagePaths.win.step4" alt="setup-win-4" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            「検索」画面が表示されるので、検索バーへ起動したいアプリ名を入力します。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step5)" :src="imagePaths.win.step5" alt="setup-win-5" class="screen-image" />
          </div><br>
        </Document>
        <SubTitle subTitle="2. アプリケーションの開き方(windows10の場合)" id="app-2-w10"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. 「アプリ一覧」から起動する" id="app-2-1-w10"></SectionTitle>
          <p>
            2-1,2-2はどちらかでやりやすい方法を選んでください。<br>
            ダウンロードしたアプリをアプリ一覧から開く方法<br>
            ①<br>
            「windows」マークを押します。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step6)" :src="imagePaths.win.step6" alt="setup-win-6" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            スタートメニューが表示されたら左のアルファベット順に並んでいるアプリから選びましょう。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step7)" :src="imagePaths.win.step7" alt="setup-win-7" class="screen-image" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="2-2. 「検索」機能を使用して起動する" id="app-2-2-w10"></SectionTitle>
          <p>
            ダウンロードしたアプリを検索機能から開く方法<br>
            ①<br>
            「windows」マークを右クリックし、「検索」を押します。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step8)" :src="imagePaths.win.step8" alt="setup-win-9" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            検索バーへ起動したいアプリ名を入力します。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step9)" :src="imagePaths.win.step9" alt="setup-win-10" class="screen-image" />
          </div><br>
        </Document>
        <Title title="PCの基本操作 2" id="pc-2-w"></Title>
        <Document>
          <p>
            「エクスプローラー」とは、Windows上に存在するフォルダを管理するプログラムです。<br>
            ダウンロードした写真や動画、音楽やアプリを保存します。<br>
            今後このエクスプローラーを学習の中で利用する機会は多いので覚えましょう。
          </p>
          <br>
        </Document>
        <SubTitle subTitle="3. エクスプローラーを知る(windows11の場合)" id="ex-3-w11"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. エクスプローラーを起動する方法" id="ex-3-1-w11"></SectionTitle>
          <p>
            タスクバー、クイックリンクメニューどちらかの操作で起動しましょう。<br>
            タスクバーからの操作<br>
            ①<br>
            タスク バーにある（エクスプローラー）をクリックします。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step10)" :src="imagePaths.win.step10" alt="setup-win-11" class="screen-image" />
          </div><br>
          <p>
            [クイックリンク] メニューからの操作<br>
            ①<br>
            「Windows」マークを右クリックし、表示された[クイック リンク] メニューから[エクスプローラー]をクリックします。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" alt="setup-win-11" class="screen-image" />
          </div><br>
        </Document>
        <SubTitle subTitle="4. エクスプローラーを知る(windows10の場合)" id="ex-4-w10"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="4-1. エクスプローラーを起動する方法" id="ex-4-1-w10"></SectionTitle>
          <p>
            タスクバー、クイックリンクメニューどちらかの操作で起動しましょう。<br>
            タスクバーからの操作<br>
            ①<br>
            タスク バーにある（エクスプローラー）をクリックします。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step12)" :src="imagePaths.win.step12" alt="setup-win-13" class="screen-image" />
          </div><br>
          <p>
            [クイックリンク] メニューからの操作<br>
            ①<br>
            「Windows」マークを右クリックし、表示された[クイック リンク] メニューから[エクスプローラー]をクリックします。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step13)" :src="imagePaths.win.step13" alt="setup-win-14" class="screen-image" />
          </div><br>
        </Document>
        <SubTitle subTitle="5. エクスプローラーの見方" id="ex-5-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="5-1. 各メニューのついて知る" id="ex-5-1-w"></SectionTitle>
          <p>
            <span class="markup-word-red">ダウンロード</span>…「Microsoft Edge」や「Google Chrome」でダウンロードしたファイル等が保存されています。<br><br>
            <span class="markup-word-red">デスクトップ</span>…デスクトップ上に表示されているファイルやフォルダが保存されています。<br><br>
            <span class="markup-word-red">ドキュメント</span>…「Outlook」のデータファイルや書類等が保存されています。<br><br>
            <span class="markup-word-red">ピクチャ</span>…画像が保存されています。<br><br>
            <span class="markup-word-red">ビデオ</span>…映像やビデオキャプチャ等が保存されています。<br><br>
            <span class="markup-word-red">ミュージック</span>…音楽が保存されています。<br><br>
            <span class="markup-word-red">Cドライブ</span>… ここには、Windowsやアプリケーションソフトなどの大事なファイルが入っています。ハードディスクの名前は自由に変更できるので、「ローカルディスク(C:)」や他の名前になっている場合もあります。
            アプリケーションをインストールするときはここにインストールしましょう。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.win.step14)" :src="imagePaths.win.step14" alt="setup-win-11" class="screen-image" />
          </div><br>
        </Document>
      </div>
      <!-- Mac版の説明 -->
      <div class="main-content" v-show="!isWindows">
        <div class="attention">
          <HighlightWord word="※PCは日々アップデートされていくので若干内容が違う可能性がありますが読み替えたり、わからない事は各個人で調べましょう!"></HighlightWord>
        </div>
        <Title title="PCの基本操作 1" id="pc-1-m"></Title>
        <SubTitle subTitle="1. アプリケーションの開き方" id="app-1-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. 「Launchpad」から起動する" id="app-1-1-m"></SectionTitle>
          <p>
            ダウンロードしたアプリをアプリ一覧から開く方法<br>
            ①<br>
            macの画面の下にカーソルを移動させるとdocが浮き上がるのでその中のメニュー「Launchpad」マークを押します。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step1)" :src="imagePaths.mac.step1" alt="setup-mac-1" class="screen-image" />
          </div><br>
          <p>
            ②<br>
            Macにアプリをインストールすると、自動的にLaunchpadに登録されます。<br>
            アプリを起動する場合は、アイコンをクリックすれば起動されます。<br>
            アプリが見当たらない場合は上部の検索窓から検索しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step2)" :src="imagePaths.mac.step2" alt="setup-mac-2" class="screen-image" />
          </div><br>
        </Document>
        <Title title="PCの基本操作 2" id="pc-2-m"></Title>
        <Document>
          <p>
            「Finder」とは、mac上に存在するフォルダを管理するプログラムです。<br>
            ダウンロードした写真や動画、音楽やアプリを保存します。<br>
            今後このエクスプローラーを学習の中で利用する機会は多いので覚えましょう。
          </p>
          <br>
        </Document>
        <SubTitle subTitle="1. Finderを知る" id="finder-1-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. Finderを起動する方法" id="finder-1-1-m"></SectionTitle>
          <p>
            Finderアイコンは青いほほ笑んでいる顔のようなアイコンで、Dockのこのアイコンをクリックすると、Finderウインドウが開きます。<br>
            ①<br>
            タスク バーにある（エクスプローラー）をクリックします。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step3)" :src="imagePaths.mac.step3" alt="setup-mac-3" class="screen-image" />
          </div><br>
        </Document>
        <SubTitle subTitle="2. Finderの見方" id="finder-2-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. 各メニューのついて知る" id="finder-2-1-m"></SectionTitle>
          <p>
            Finderを開くとこのような画面が表示されます。<br>
            macの設定で赤い枠のサイドバーは表示が変わりますが、デフォルトで表示されているものもあるので覚えましょう。<br><br>
            <span class="markup-word-red">デスクトップ</span>…デスクトップ上に表示されているファイルやフォルダが保存されています。<br><br>
            <span class="markup-word-red">アプリケーション</span>…アプリケーションをインストールするときはここにインストールされます。<br><br>
            <span class="markup-word-red">ダウンロード</span>…「Microsoft Edge」や「Google Chrome」でダウンロードしたファイル等が保存されています。<br><br>
            <span class="markup-word-red">書類</span>…動画や写真などのファイルが保存されています。<br><br>
            <span class="markup-word-red">ホームディレクトリ(家マーク)</span>… ここには、アプリケーションソフトを動かすための大事なファイルが入っています。<br>
            「ホームディレクトリ」が表示されていない場合は<span><a href="https://dtmmethod.com/mac-finder-home" class="markup-word-blue">こちら</a></span>から表示設定を行いましょう。
          </p>
          <br>
          <div>
            <img @click="openModal(imagePaths.mac.step4)" :src="imagePaths.mac.step4" alt="setup-win-4" class="screen-image" />
          </div><br>
        </Document>
      </div>
      <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      <div class="side-content" v-show="isWindows && !isSmallScreen">
        <TableOfContents :sections="windowsSections" />
      </div>
      <div class="side-content" v-show="!isWindows && !isSmallScreen">
        <TableOfContents :sections="macSections" />
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
import Spinner from "@/components/Spinner.vue";
import Modal from "@/components/common/Modal.vue";

export default {
  name: "SetUp",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    TableOfContents,
    Spinner,
    Modal,
  },
  setup() {
    const isWindows = ref(true);
    const isSmallScreen = ref(false);
    const isLoading = ref(false);

    const windowsSections = [
      { id: "pc-1-w", title: "PCの基本操作 1" },
      { id: "app-1-w11", title: "  1. アプリケーションの開き方(windows11の場合)" },
      { id: "app-1-1-w11", title: "    1-1. 「アプリ一覧」から起動する" },
      { id: "app-1-2-w11", title: "    1-2. 「検索」機能を使用して起動する" },
      { id: "app-2-w10", title: "  2. アプリケーションの開き方(windows10の場合)" },
      { id: "app-2-1-w10", title: "    2-1. 「アプリ一覧」から起動する" },
      { id: "app-2-2-w10", title: "    2-2. 「検索」機能を使用して起動する" },
      { id: "pc-2-w", title: "PCの基本操作 2" },
      { id: "ex-3-w11", title: "  3. エクスプローラーを知る(windows11の場合)" },
      { id: "ex-3-1-w11", title: "    3-1. エクスプローラーを起動する方法" },
      { id: "ex-4-w10", title: "  4. エクスプローラーを知る(windows10の場合)" },
      { id: "ex-4-1-w10", title: "    4-1. エクスプローラーを起動する方法" },
      { id: "ex-5-w", title: "  5. エクスプローラーの見方" },
      { id: "ex-5-1-w", title: "    5-1. 各メニューのついて知る" },
    ];

    const macSections = [
      { id: "pc-1-m", title: "PCの基本操作 1" },
      { id: "app-1-m", title: "  1. アプリケーションの開き方" },
      { id: "app-1-1-m", title: "    1-1. 「Launchpad」から起動する" },
      { id: "pc-2-m", title: "PCの基本操作 2" },
      { id: "finder-1-m", title: "  1. Finderを知る" },
      { id: "finder-1-1-m", title: "    1-1. Finderを起動する方法" },
      { id: "finder-2-m", title: "  2. Finderの見方" },
      { id: "finder-2-1-m", title: "    2-1. 各メニューのついて知る" },
    ];

    const toggleOS = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        isWindows.value = !isWindows.value;
        // 画面のレイアウトを切り替えるロジックを追加
      }, 1000);
    };

    // 画像ファイルのパスをオブジェクトで格納する
    const imagePaths = {
      win: {
          step1: require('../../assets/images/setup/setup-win-1.png'),
          step2: require('../../assets/images/setup/setup-win-2.png'),
          step3: require('../../assets/images/setup/setup-win-3.png'),
          step4: require('../../assets/images/setup/setup-win-4.png'),
          step5: require('../../assets/images/setup/setup-win-5.png'),
          step6: require('../../assets/images/setup/setup-win-6.png'),
          step7: require('../../assets/images/setup/setup-win-7.png'),
          step8: require('../../assets/images/setup/setup-win-8.png'),
          step9: require('../../assets/images/setup/setup-win-9.png'),
          step10: require('../../assets/images/setup/setup-win-10.png'),
          step11: require('../../assets/images/setup/setup-win-11.png'),
          step12: require('../../assets/images/setup/setup-win-12.png'),
          step13: require('../../assets/images/setup/setup-win-13.png'),
          step14: require('../../assets/images/setup/setup-win-14.png'),
      },
      mac: {
        step1: require('../../assets/images/setup/setup-mac-1.png'),
        step2: require('../../assets/images/setup/setup-mac-2.png'),
        step3: require('../../assets/images/setup/setup-mac-3.png'),
        step4: require('../../assets/images/setup/setup-mac-4.png'),
      },
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    // イベントリスナーの追加と削除
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      isWindows,
      isSmallScreen,
      isLoading,
      windowsSections,
      macSections,
      imagePaths,
      selectedImage,
      isModalOpen,
      toggleOS,
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
  margin-top: 20px;
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

.attention {
  width: 80%;
  margin-left: 50px;
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link {
  color: rgb(72, 0, 255);
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table-header {
  background-color: #f2f2f2;
  font-weight: bold;
}

.table-cell {
  border: 1px solid #ccc;
  padding: 10px;
}

.screen-image {
  max-width: 100%;
  height: auto;
  border: 1px solid rgb(175, 175, 175);
  cursor: pointer;
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

/* スマホ版 */
@media (max-width: 648px) {
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
