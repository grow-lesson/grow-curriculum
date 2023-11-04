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
                <li class="dropdown-item"><a @click="goToProgressPage" class="dropdown-link">進捗管理</a></li >
                <li class="dropdown-item"><a href="#" class="dropdown-link">給与の確認</a></li>
                <li class="dropdown-item"><a href="#" target="_blank" class="dropdown-link">勤怠表を提出する</a></li>
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
            <li class="dropdown-item"><a @click="goToProgressPage" class="dropdown-link">進捗管理</a></li >
            <li class="dropdown-item"><a href="#" class="dropdown-link">給与の確認</a></li>
            <li class="dropdown-item"><a href="#" class="dropdown-link">勤怠表を提出する</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <button>その他</button>
          <ul class="dropdown-list">
            <li class="dropdown-item"><a @click="goToContactPage" class="dropdown-link">お問い合わせ</a></li>
            <li class="dropdown-item"><a href="https://grow-infotech.com" class="dropdown-link">会社のホームページを見る</a></li>
            <li class="dropdown-item"><a href="https://www.wantedly.com/companies/company_7305723" class="dropdown-link">Wantedllyを見る</a></li>
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
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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
.navigation-item:not(:first-child)::before {
  content: "";
  width: 1px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.navigation-item:hover::before {
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
  background: #5ac3d3;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%); /* 初期状態ではメニューは画面外に移動 */
  opacity: 0; /* 初期状態ではメニューは透明 */
  pointer-events: none; /* 初期状態ではメニューはクリックイベントを受け付けない */
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

.menu-item:hover .dropdown-list {
  display: block; /* ナビメニューにホバーしたら表示 */
}

.dropdown-list {
  display: none; /*デフォルトでは非表示の状態にしておく*/
  width: 160%;
  position: absolute;
  top: 60px;
  left: -60%;
  z-index: 1;
}

.navigation-item:hover .dropdown-list {
  display: block; /* ナビメニューにホバーしたら表示 */
}

.dropdown-item {
  background-color: #004d80;
  height: 60px;
  transition: all 0.3s;
  position: relative;
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

.dropdown-link::before {
  /* ドロップダウンの矢印部分 */
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  right: 15px;
  top: calc(50% - 5px);
}
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.close-button__line {
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #fff;
  transform: rotate(45deg);
}

.close-button__line:before,
.close-button__line:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #fff;
}

.close-button__line:before {
  transform: rotate(90deg);
}

.close-button__line:after {
  transform: rotate(180deg);
}

.is-mobile .menu,
.show-menu {
  transform: translateX(0%); /* メニューが表示されるときは画面内に移動 */
  opacity: 1; /* メニューが表示されるときは不透明になる */
  pointer-events: auto; /* メニューが表示されるときはクリックイベントを受け付ける */
}

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
  padding: 0;
  margin: 0;
}

.hamburger-button span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
}

.hamburger-button span:nth-child(1) {
  transform-origin: top left;
  transform: rotate(0);
  transition: transform 0.3s ease-in-out;
}

.hamburger-button span:nth-child(2) {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.hamburger-button span:nth-child(3) {
  transform-origin: bottom left;
  transform: rotate(0);
  transition: transform 0.3s ease-in-out;
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

.show-menu .close-button__line {
  transform: rotate(-45deg);
}

.show-menu .close-button__line:before {
  transform: rotate(-90deg);
}

.show-menu .close-button__line:after {
  transform: rotate(0);
}

/* PC版 */
@media (min-width: 835px) {
  .menu {
    display: none; /* メニューは非表示 */
  }

  .hamburger-button {
    top: 25px;
    display: none; /* ハンバーガーメニューボタンは非表示 */
  }
}

/* タブレット版 */
@media (max-width: 835px) {
  .logo{
    width: 30px;
    height: 30px;
  }
  .dropdown-list {
    position: absolute;
    width: 200px;
    top: 30px; /* スマホ版用に位置を上書き */
    left: -50%;
  }
  .dropdown-link {
    font-size: small;
  }
  .hamburger-button {
    top: 15px;
  }
}
</style>
