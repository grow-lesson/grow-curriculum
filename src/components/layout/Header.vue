<template>
  <div>
    <!-- ヘッダー -->
    <header class="header">
      <div class="header-wrapper">
        <div class="logo" v-show="isMobile">
          <a @click="goToMenuPage"><img src="../../assets/images/header/logo.png" alt="GROWロゴ" class="logo-image" /></a>
        </div>
        <p class="header-title" v-show="!isMobile"><a @click="goToMenuPage">GROW Learning Website</a></p>
        <!-- ナビゲーションメニュー -->
        <div class="navigation-wrap" v-show="!isMobile">
          <ul class="navigation-list">
            <li class="navigation-item">
              <button class="navigation-btn" @click="goToIntroducePage">サイトについて</button>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn">準備と提出</button>
              <ul class="dropdown-list">
                <li class="dropdown-item"><a @click="goToHowToPage" class="dropdown-link">サイトの使い方</a></li>
                <li class="dropdown-item"><a @click="goToSetUPPage" class="dropdown-link">PCの設定・使い方</a></li>
                <li class="dropdown-item"><a @click="goToEnvironmentPage" class="dropdown-link">環境構築やインストール</a></li>
                <li class="dropdown-item"><a @click="goToProcedurePage" class="dropdown-link">カリキュラムの始め方</a></li>
              </ul>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn" @click="goToCourseMenuPage">コース一覧</button>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn">マイページ</button>
              <ul class="dropdown-list">
                <li class="dropdown-item"><a @click="goToMyPage" class="dropdown-link">プロフィール</a></li>
              </ul>
            </li>
            <li class="navigation-item">
              <button class="navigation-btn">その他</button>
              <ul class="dropdown-list">
                <li class="dropdown-item"><a @click="goToContactPage" class="dropdown-link">お問い合わせ</a></li>
                <li class="dropdown-item"><a href="https://grow-infotech.com" target="_blank" class="dropdown-link">会社のホームページを見る</a></li>
                <li class="dropdown-item"><a href="https://www.wantedly.com/companies/company_7305723" target="_blank" class="dropdown-link">Wantedllyを見る</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- ハンバーガーメニューボタン -->
        <button class="hamburger-button" v-show="isMobile" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <!-- メニューコンテンツ -->
    <div class="menu" :class="{ 'show-menu': showMenu }">
      <!-- 閉じるボタン -->
      <button class="close-button" @click="toggleMenu">
        <span class="close-button__line"></span>
        <span class="close-button__line"></span>
      </button>
      <!-- メニューアイテム -->
      <ul class="menu-list">
        <li class="menu-item">
          <button @click="goToIntroducePage">サイトについて</button>
        </li>
        <li class="menu-item">
          <button>準備と提出</button>
          <ul class="dropdown-list">
            <li class="dropdown-item"><a @click="goToHowToPage" class="dropdown-link">サイトの使い方</a></li>
            <li class="dropdown-item"><a @click="goToSetUPPage" class="dropdown-link">PCの設定・使い方</a></li>
            <li class="dropdown-item"><a @click="goToEnvironmentPage" class="dropdown-link">環境構築やインストール</a></li>
            <li class="dropdown-item"><a @click="goToProcedurePage" class="dropdown-link">カリキュラムの始め方</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <button @click="goToCourseMenuPage">コース一覧</button>
        </li>
        <li class="menu-item">
          <button>マイページ</button>
          <ul class="dropdown-list">
            <li class="dropdown-item"><a @click="goToMyPage" class="dropdown-link">プロフィール</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <button>その他</button>
          <ul class="dropdown-list">
            <li class="dropdown-item"><a @click="goToContactPage" class="dropdown-link">お問い合わせ</a></li>
            <li class="dropdown-item"><a href="https://grow-infotech.com" target="_blank" class="dropdown-link">会社のホームページを見る</a></li>
            <li class="dropdown-item"><a href="https://www.wantedly.com/companies/company_7305723" target="_blank" class="dropdown-link">Wantedllyを見る</a></li>
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
    const router = useRouter();

    // モバイル画面の判定を行うメソッド
    const checkMobileScreen = () => {
      isMobile.value = window.innerWidth <= 834;
    };

    // メニューの表示切替を行うメソッド
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    // Vue Routerを使用してページ間の遷移を行うメソッド
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

    const goToCourseMenuPage = () => {
      router.push({ name: "CourseMenu" });
    };

    const goToMyPage = () => {
      router.push({ name: "MyPage" });
    };

    const goToProgressPage = () => {
      router.push({ name: "Progress" });
    };

    const goToReservationCalendarPage = () => {
      router.push({ name: "ReservationCalendar" });
    };

    const goToContactPage = () => {
      router.push({ name: "Contact" });
    };

    // ウィンドウリサイズ時にモバイル画面の判定を行う
    const handleResize = () => {
      checkMobileScreen();
    };

    // イベントリスナーの追加と削除
    onMounted(() => {
      checkMobileScreen();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      isMobile,
      showMenu,
      toggleMenu,
      goToMenuPage,
      goToIntroducePage,
      goToSetUPPage,
      goToHowToPage,
      goToEnvironmentPage,
      goToProcedurePage,
      goToCourseMenuPage,
      goToMyPage,
      goToProgressPage,
      goToReservationCalendarPage,
      goToContactPage,
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
  height: 100%;
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
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.navigation-item {
  width: 35%;
  height: 60px;
  background-color: #e5f0f8;
  position: relative;
  transition: all 0.3s;
}

.navigation-item:hover {
  background-color: #0071bb;
}

.navigation-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #1b4059;
  font-size: 15px;
  letter-spacing: 0.05em;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
}

.navigation-btn:hover {
  color: #fff;
}

/* メニュー */
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: #404141;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
}

.menu-item {
  position: relative;
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
}

/* ドロップダウンメニュー */
.dropdown-list {
  display: none;
  width: 160%;
  position: absolute;
  top: 60px;
  left: -60%;
  z-index: 1;
}

.navigation-item:hover .dropdown-list {
  display: block;
}

.dropdown-item {
  background-color: #004d80;
  height: 60px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-item:not(:first-child)::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #3492d1;
  position: absolute;
  top: 0;
  left: 0;
}

.dropdown-item:hover {
  background-color: #003558;
}

.dropdown-link {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

/* 閉じるボタン */
.close-button {
  position: absolute;
  top: 30px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
}

.close-button__line {
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #fff;
  transition: transform 0.3s ease;
}

.close-button__line:first-child {
  transform: rotate(45deg);
}

.close-button__line:last-child {
  transform: rotate(-45deg);
}

/* メニューを開いた時のスタイル */
.is-mobile .menu,
.show-menu {
  transform: translateX(0%);
  opacity: 1;
  pointer-events: auto;
}

/* ハンバーガーメニューボタン */
.hamburger-button {
  position: fixed;
  left: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.hamburger-button span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
}

.show-menu .hamburger-button span:nth-child(1) {
  transform: rotate(45deg);
}

.show-menu .hamburger-button span:nth-child(2) {
  opacity: 0;
}

.show-menu .hamburger-button span:nth-child(3) {
  transform: rotate(-45deg);
}

/* PC版 */
@media (min-width: 835px) {
  .menu {
    display: none;
  }

  .hamburger-button {
    display: none;
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
}
</style>
