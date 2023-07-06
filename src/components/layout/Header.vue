<template>
  <div>
    <!-- ヘッダー -->
    <header :class="{'header': true, 'is-mobile': isMobile}">
      <div class="logo-nav">
        <!-- ロゴ -->
        <a class="logo" href="/menu">GROW 学習サイト</a>
        <!-- ナビゲーションメニュー -->
        <nav class="navigation" :class="{ 'show-menu': showMenu }">
          <ul class="navigation__list">
            <li class="navigation__item"><a href="/menu">Grow学習サイトの使い方</a></li>
            <li class="navigation__item"><a href="/menu">環境構築やインストール</a></li>
            <li class="navigation__item"><a href="/menu">コース一覧</a></li>
            <li class="navigation__item"><a @click="goToUserPage">マイページ</a></li>
            <li class="navigation__item"><a href="/menu">お問い合わせ</a></li>
          </ul>
        </nav>
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
      <ul class="menu__list">
        <li class="menu__item"><a href="/menu">このサイトについて</a></li>
        <li class="menu__item"><a href="/menu">環境構築やインストール</a></li>
        <li class="menu__item"><a href="/menu">コース一覧</a></li>
        <li class="menu__item"><a href="/menu">マイページ</a></li>
        <li class="menu__item"><a href="/menu">お問い合わせ</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      showMenu: false
    };
  },
  mounted() {
    // ページロード時とウィンドウリサイズ時にモバイル画面の判定を行う
    this.checkMobileScreen();
    window.addEventListener('resize', this.checkMobileScreen);
  },
  beforeUnmount() {
    // イベントリスナーの削除
    window.removeEventListener('resize', this.checkMobileScreen);
  },
  methods: {
    // モバイル画面の判定を行うメソッド
    checkMobileScreen() {
      this.isMobile = window.innerWidth <= 648; // 648px以下だとモバイルサイズなのでtrueとなる
    },
    // メニューの表示切替を行うメソッド
    toggleMenu() {
      this.showMenu = !this.showMenu; // クリックした時のbooleanの判定を逆にする
    },
    goToUserPage() {
      this.$router.push({ name: "UserList" });
    },
  }
};
</script>

<style scoped>
/* ヘッダー */
.header {
  background-color: #fff;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.logo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.navigation {
  display: none; /* メニューは初期状態では非表示 */
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

.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
}
.menu__item :hover{
  text-decoration: underline;
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

.navigation__item:hover {
  text-decoration: underline;
}

.hamburger-button {
  position: fixed;
  top: 30px;
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

/* メディアクエリ */
@media (min-width: 648px) {
  .navigation {
    display: flex;
    justify-content: flex-end;
  }

  .navigation__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .navigation__item {
    margin-left: 10px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }

  .menu {
    display: none; /* メニューは非表示 */
  }

  .hamburger-button {
    display: none; /* ハンバーガーメニューボタンは非表示 */
  }
}
</style>
