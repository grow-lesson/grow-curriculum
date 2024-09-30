<template>
  <div>
    <!-- ヘッダー -->
    <header class="header">
      <div class="header-wrapper">
        <!-- ロゴ（モバイル版） -->
        <div class="logo" v-show="isMobile">
          <a @click="goToMenuPage">
            <img src="../../assets/images/header/logo.png" alt="GROWロゴ" class="logo-image" />
          </a>
        </div>
        <!-- タイトル（PC版） -->
        <p class="header-title" v-show="!isMobile">
          <a @click="goToMenuPage">GROW Learning Website</a>
        </p>
        <!-- ナビゲーションメニュー（PC版） -->
        <nav class="navigation-wrap" v-show="!isMobile">
          <ul class="navigation-list">
            <li class="navigation-item">
              <button class="navigation-btn" @click="goToIntroducePage">サイトについて</button>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn" @click="toggleDropdown('preparation')">準備と提出</button>
              <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'preparation' }">
                <li class="dropdown-item" @click="goToHowToPage">
                  <a class="dropdown-link">サイトの使い方</a>
                </li>
                <li class="dropdown-item" @click="goToSetUPPage">
                  <a class="dropdown-link">PCの設定・使い方</a>
                </li>
                <li class="dropdown-item" @click="goToEnvironmentPage">
                  <a class="dropdown-link">環境構築やインストール</a>
                </li>
                <li class="dropdown-item" @click="goToProcedurePage">
                  <a class="dropdown-link">カリキュラムの始め方</a>
                </li>
              </ul>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn" @click="toggleDropdown('course')">コース</button>
              <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'course' }">
                <li class="dropdown-item" @click="goToHtmlMenuPage">
                  <a class="dropdown-link">HTML・CSS</a>
                </li>
                <li class="dropdown-item" @click="goToCommandLineMenuPage">
                  <a class="dropdown-link">コマンドライン</a>
                </li>
                <li class="dropdown-item" @click="goToJavaScriptMenuPage">
                  <a class="dropdown-link">Javascript</a>
                </li>
                <li class="dropdown-item" @click="goToJqueryMenuPage">
                  <a class="dropdown-link">Jquery</a>
                </li>
                <li class="dropdown-item" @click="goToGitMenuPage">
                  <a class="dropdown-link">Git</a>
                </li>
                <li class="dropdown-item" @click="goToSQLMenuPage">
                  <a class="dropdown-link">SQL</a>
                </li>
                <li class="dropdown-item" @click="goToPhotoshopMenuPage">
                  <a class="dropdown-link">Photoshop</a>
                </li>
                <li class="dropdown-item" @click="goToDesignBasicMenuPage">
                  <a class="dropdown-link">デザイン基礎</a>
                </li>
              </ul>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn" @click="toggleDropdown('mypage')">マイページ</button>
              <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'mypage' }">
                <li class="dropdown-item" @click="goToMyPage">
                  <a class="dropdown-link">プロフィール</a>
                </li>
              </ul>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn" @click="toggleDropdown('others')">その他</button>
              <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'others' }">
                <li class="dropdown-item">
                  <a href="https://grow-infotech.com" target="_blank" class="dropdown-link">会社HP</a>
                </li>
                <li class="dropdown-item">
                  <a href="https://www.wantedly.com/companies/company_7305723" target="_blank" class="dropdown-link">Wantedly</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- ハンバーガーメニューボタン（SP版） -->
        <button :class="{ 'active': showMenu }" class="hamburger-button" v-show="isMobile" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <!-- メニューコンテンツ（SP版） -->
    <div class="menu" :class="{ 'show-menu': showMenu }">
      <!-- メニューアイテム -->
      <ul class="menu-list">
        <li class="menu-item" @click="goToIntroducePage">
          <button class="menu-btn">サイトについて</button>
        </li>
        <li class="menu-item">
          <button class="menu-btn" @click="toggleDropdown('preparation')">準備と提出</button>
          <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'preparation' }">
            <li class="dropdown-item" @click="goToHowToPage">
              <a class="dropdown-link">サイトの使い方</a>
            </li>
            <li class="dropdown-item" @click="goToSetUPPage">
              <a class="dropdown-link">PCの設定・使い方</a>
            </li>
            <li class="dropdown-item" @click="goToEnvironmentPage">
              <a class="dropdown-link">環境構築やインストール</a>
            </li>
            <li class="dropdown-item" @click="goToProcedurePage">
              <a class="dropdown-link">カリキュラムの始め方</a>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <button class="menu-btn" @click="toggleDropdown('course')">コース</button>
          <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'course' }">
            <li class="dropdown-item" @click="goToCourseMenuPage">
              <a class="dropdown-link">コース一覧</a>
            </li>
            <li class="dropdown-item" @click="goToHtmlMenuPage">
              <a class="dropdown-link">HTML・CSS</a>
            </li>
            <li class="dropdown-item" @click="goToCommandLineMenuPage">
              <a class="dropdown-link">コマンドライン</a>
            </li>
            <li class="dropdown-item" @click="goToJavaScriptMenuPage">
              <a class="dropdown-link">Javascript</a>
            </li>
            <li class="dropdown-item" @click="goToJqueryMenuPage">
              <a class="dropdown-link">Jquery</a>
            </li>
            <li class="dropdown-item" @click="goToGitMenuPage">
              <a class="dropdown-link">Git</a>
            </li>
            <li class="dropdown-item" @click="goToSQLMenuPage">
              <a class="dropdown-link">SQL</a>
            </li>
            <li class="dropdown-item" @click="goToPhotoshopMenuPage">
              <a class="dropdown-link">Photoshop</a>
            </li>
            <li class="dropdown-item" @click="goToDesignBasicMenuPage">
              <a class="dropdown-link">デザイン基礎</a>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <button class="menu-btn" @click="toggleDropdown('mypage')">マイページ</button>
          <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'mypage' }">
            <li class="dropdown-item" @click="goToMyPage">
              <a class="dropdown-link">プロフィール</a>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <button class="menu-btn" @click="toggleDropdown('others')">その他</button>
          <ul class="dropdown-list" :class="{ 'slide-down': activeDropdown === 'others' }">
            <li class="dropdown-item">
              <a href="https://grow-infotech.com" target="_blank" class="dropdown-link">会社HP</a>
            </li>
            <li class="dropdown-item">
              <a href="https://www.wantedly.com/companies/company_7305723" target="_blank" class="dropdown-link">Wantedly</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const isMobile = ref(false);
    const showMenu = ref(false);
    const activeDropdown = ref(null); // ドロップダウンの状態を管理する

    const router = useRouter();

    // モバイル画面の判定を行うメソッド
    const checkMobileScreen = () => {
      isMobile.value = window.innerWidth <= 834;
    };

    // メニューの表示切替を行うメソッド
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      if (!showMenu.value) {
        activeDropdown.value = null; // メニューを閉じる際にドロップダウンも閉じる
      }
    };

    // ドロップダウンの表示切替を行うメソッド
    const toggleDropdown = (menuName) => {
      if (activeDropdown.value === menuName) {
        activeDropdown.value = null;
      } else {
        activeDropdown.value = menuName;
      }
    };

    // ページ遷移メソッド
    const goToMenuPage = () => {
      router.push({ name: "MenuPage" });
    };

    const goToSetUPPage = () => {
      router.push({ name: "Setup" });
    };

    const goToHowToPage = () => {
      router.push({ name: "HowTo" });
    };

    const goToIntroducePage = () => {
      router.push({ name: "Introduce" });
    };

    const goToEnvironmentPage = () => {
      router.push({ name: "Environment" });
    };

    const goToProcedurePage = () => {
      router.push({ name: "Procedure" });
    };

    const goToMyPage = () => {
      router.push({ name: "MyPage" });
    };

    const goToContactPage = () => {
      router.push({ name: "Contact" });
    };

    const goToHtmlMenuPage = () => {
      router.push({ name: "HtmlMenuPage" });
    };

    const goToCommandLineMenuPage = () => {
      router.push({ name: "CommandLineMenuPage" });
    };

    const goToJavaScriptMenuPage = () => {
      router.push({ name: "JavascriptMenuPage" });
    };

    const goToJqueryMenuPage = () => {
      router.push({ name: "JqueryMenuPage" });
    };

    const goToGitMenuPage = () => {
      router.push({ name: "GitMenuPage" });
    };


    const goToSQLMenuPage = () => {
      router.push({ name: "SqlMenuPage" });
    };

    const goToPhotoshopMenuPage = () => {
      router.push({ name: "PhotoshopMenuPage" });
    };

    const goToDesignBasicMenuPage = () => {
      router.push({ name: "DesignBasicMenuPage" });
    };

    // ドロップダウン以外をクリックしたときに閉じる処理
    const handleClickOutside = (event) => {
      const isClickInsideMenu = event.target.closest('.menu') || event.target.closest('.hamburger-button');
      const isClickInsideNavigation = event.target.closest('.navigation-wrap');
      if (!isClickInsideMenu && !isClickInsideNavigation) {
        activeDropdown.value = null;
        showMenu.value = false;
      }
    };

    // ウィンドウリサイズ時にモバイル画面の判定を行う
    const handleResize = () => {
      checkMobileScreen();
      if (!isMobile.value) {
        showMenu.value = false; // PCサイズに戻ったらメニューを閉じる
        activeDropdown.value = null;
      }
    };

    // イベントリスナーの追加と削除
    onMounted(() => {
      checkMobileScreen();
      window.addEventListener("resize", handleResize);
      document.addEventListener("click", handleClickOutside); // クリックイベントのリスナーを追加
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside); // クリックイベントのリスナーを削除
    });

    return {
      isMobile,
      showMenu,
      activeDropdown,
      toggleMenu,
      toggleDropdown,
      goToMenuPage,
      goToIntroducePage,
      goToSetUPPage,
      goToHowToPage,
      goToEnvironmentPage,
      goToProcedurePage,
      goToMyPage,
      goToContactPage,
      goToHtmlMenuPage,
      goToCommandLineMenuPage,
      goToGitMenuPage,
      goToJavaScriptMenuPage,
      goToSQLMenuPage,
      goToJqueryMenuPage,
      goToPhotoshopMenuPage,
      goToDesignBasicMenuPage,
    };
  },
};
</script>

<style scoped>
/* ヘッダー */
.header {
  background-color: #fff;
  padding: 10px;
  color: #647D91;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  cursor: pointer;
}

.logo-image {
  width: auto;
  height: 30px; /* SP版のロゴ高さを固定 */
}

.header-title {
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

.navigation-wrap {
  width: 70%;
  margin-left: auto;
}

.navigation-list {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.navigation-item {
  position: relative;
  flex-grow: 1; /* 各アイテムが利用可能なスペースを自動的に占有 */
}

.navigation-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px; /* PC版のボタンパディング */
  text-decoration: none;
  color: #1b4059;
  font-size: 14px; /* PC版のフォントサイズを調整 */
  letter-spacing: 0.05em;
  font-weight: 600;
  transition: color 0.3s;
  cursor: pointer;
  background-color: #eef5f9;
  white-space: nowrap; /* テキストの折り返しを防止 */
  width: 100%;
  box-sizing: border-box;
}

.navigation-item:hover .navigation-btn {
  color: #fff;
  background-color: #404141;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #838d8d;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  width: 100%; /* ドロップダウンの幅を親要素に合わせる */
  z-index: 1000;
}

.navigation-item .dropdown-list.slide-down {
  max-height: 500px; /* 必要に応じて調整 */
  opacity: 1;
}

.dropdown-item {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
}

.dropdown-item:not(:first-child)::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #404141;
  position: absolute;
  top: 0;
  left: 0;
}

.dropdown-item:hover {
  background-color: #c6c6c6;
}

.dropdown-link {
  color: #fff;
  text-decoration: none;
  display: block;
}

/* メニュー（SP版） */
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  width: 75vw; /* メニュー幅を少し狭める */
  max-width: 250px; /* 最大幅を調整 */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: #404141;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
}

.menu.show-menu {
  transform: translateX(0%);
  opacity: 1;
  pointer-events: auto;
}

/* メニューアイテム（SP版） */
.menu-list {
  list-style: none;
  padding: 40px 0 0 0; /* アイテム上部に余白を追加 */
  margin: 0;
  width: 100%;
}

.menu-item {
  position: relative;
  width: 100%;
  padding: 15px 0; /* アイテム間に十分なスペースを確保 */
  text-align: left;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
}

.menu-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  text-align: left;
  padding: 10px 0;
  cursor: pointer;
}

.menu-item button:hover {
  color: #c6c6c6;
}

/* ドロップダウンメニュー（SP版） */
.menu .dropdown-list {
  position: static; /* メニュー内では絶対位置にしない */
  background-color: #838d8d;
  width: 100%;
  padding-left: 15px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.menu .dropdown-list.slide-down {
  max-height: 500px; /* 必要に応じて調整 */
  opacity: 1;
}

.menu .dropdown-item {
  padding: 10px 10px;
  background-color: #838d8d;
  height: auto;
}

.menu .dropdown-item:not(:first-child)::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #404141;
  position: absolute;
  top: 0;
  left: 0;
}

.menu .dropdown-item:hover {
  background-color: #c6c6c6;
}

.menu .dropdown-link {
  color: #fff;
  text-decoration: none;
  display: block;
}

.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 31px;
  height: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 1002;
  position: fixed;
  top: 35px; /* デフォルトはPCやブラウザ上での表示 */
  right: 15px;
}

.hamburger-button span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-button span + span {
  margin-top: 5px;
}

.hamburger-button.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-button.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-button.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* スマホサイズでの表示設定（isInWebViewでデバイス判定） */
.mobile-view .hamburger-button {
  top: 25px; /* 実際のスマホ使用時にはtopを25pxに変更 */
}

/* PC版 */
@media (min-width: 835px) {
  .menu {
    display: none;
  }

  .hamburger-button {
    display: none;
  }

  /* ドロップダウンメニューをホバーで開く */
  .navigation-item:hover .dropdown-list {
    max-height: 500px;
    opacity: 1;
  }
}

/* タブレット・スマホ用スタイル */
@media (max-width: 834px) {
  .logo {
    width: 30px;
    height: 30px;
  }

  .logo-image {
    width: 100%;
    height: auto;
  }

  .navigation-wrap {
    display: none; /* スマホ版ではメニューを非表示にする */
  }

  .hamburger-button {
    display: flex; /* スマホ版ではハンバーガーボタンを表示する */
  }

  .menu {
    width: 80vw;
    max-width: 255px; /* メニューの幅を調整 */
  }

  .dropdown-list {
    width: 100%;
  }
}
</style>
