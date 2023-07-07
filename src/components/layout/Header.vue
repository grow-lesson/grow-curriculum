<template>
  <div>
    <!-- ヘッダー -->
    <header class="header">
      <div class="header-wrapper">
        <div class="logo" v-show="isMobile">
          <img src="../../assets/logo.png" alt="GROWロゴ" class="logo-image">
        </div>
        <p class="header-title" v-show="!isMobile">GROW 学習サイト</p>
        <!-- ナビゲーションメニュー -->
        <div class="gnavi__wrap" v-show="!isMobile">
            <ul class="gnavi__lists">
                <li class="gnavi__list">
                  <a href="#">サイトについて</a>
                  <ul class="dropdown__lists">
                    <li class="dropdown__list"><a href="#" class="dropdown__link">ご挨拶</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">サイトで学べる事</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">サイトの利用方法</a></li>
                  </ul>
                </li>
                <li class="gnavi__list">
                  <a href="#">準備と提出</a>
                  <ul class="dropdown__lists">
                    <li class="dropdown__list"><a href="#" class="dropdown__link">PCの初期設定</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">環境構築やインストール</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">カリキュラムの始め方</a></li>
                  </ul>
                </li>
                <li class="gnavi__list">
                  <a href="#">コース一覧</a>
                  <ul class="dropdown__lists">
                    <li class="dropdown__list"><a href="#" class="dropdown__link">コマンドライン</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">HTML・CSS</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">Git</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">Javascript</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">情報工学</a></li>
                  </ul>
                </li>
                <li class="gnavi__list">
                  <a href="#">マイページ</a>
                  <ul class="dropdown__lists">
                    <li class="dropdown__list"><a href="#" class="dropdown__link">プロフィール</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">進捗管理</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">給与の確認</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">勤怠表を提出する</a></li>
                  </ul>
                </li>
                <li class="gnavi__list">
                  <a href="#">その他</a>
                  <ul class="dropdown__lists">
                    <li class="dropdown__list"><a href="#" class="dropdown__link">お問い合わせ</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">会社のホームページを見る</a></li>
                    <li class="dropdown__list"><a href="#" class="dropdown__link">Wantedllyを見る</a></li>
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
      <ul class="menu__list">
        <li class="menu__item">
          <a href="/menu">サイトについて</a>
          <ul class="dropdown__lists is-menu">
            <li class="dropdown__list"><a href="#" class="dropdown__link">ご挨拶</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">サイトで学べる事</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">サイトの利用方法</a></li>
          </ul>
        </li>
        <li class="menu__item">
          <a href="/menu">準備と提出</a>
          <ul class="dropdown__lists is-menu">
            <li class="dropdown__list"><a href="#" class="dropdown__link">PCの初期設定</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">環境構築やインストール</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">カリキュラムの始め方</a></li>
          </ul>
        </li>
        <li class="menu__item">
          <a href="/menu">コース一覧</a>
          <ul class="dropdown__lists is-menu">
            <li class="dropdown__list"><a href="#" class="dropdown__link">コマンドライン</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">HTML・CSS</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">Git</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">Javascript</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">情報工学</a></li>
          </ul>        
        </li>
        <li class="menu__item">
          <a href="/menu">マイページ</a>
          <ul class="dropdown__lists is-menu">
            <li class="dropdown__list"><a href="#" class="dropdown__link">プロフィール</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">進捗管理</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">給与の確認</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">勤怠表を提出する</a></li>
          </ul>
        </li>
        <li class="menu__item">
          <a href="/menu">その他</a>
          <ul class="dropdown__lists is-menu">
            <li class="dropdown__list"><a href="#" class="dropdown__link">お問い合わせ</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">会社のホームページを見る</a></li>
            <li class="dropdown__list"><a href="#" class="dropdown__link">Wantedllyを見る</a></li>
          </ul>
        </li>
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
      this.isMobile = window.innerWidth <= 834; // 834px以下だとモバイルサイズなのでtrueとなる
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
  width: 50px;
  height: 50px;
}

.logo-image {
  display: block;
  width: 100%;
}

.header-title{
  font-size: large;
  font-weight: bold;
}

.gnavi__wrap {
    width: 80%;
    margin-left: auto;
}
.gnavi__lists {
    display: flex;
}
.gnavi__list {
    width: 20%;
    height: 60px;
    background-color: #E5F0F8;
    position: relative;
    transition: all .3s;
}
.gnavi__list:hover {
    background-color: #0071BB;
}
.gnavi__list:not(:first-child)::before {
    content: "";
    width: 1px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .3s;
}
.gnavi__list:hover::before {
    background-color: #0071BB;
}
.gnavi__list a {
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
    transition: all .3s;
}
.gnavi__list:hover a {
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

.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
}

.menu__item:hover .dropdown__lists {
  text-decoration: underline;
  display: block;  /* ナビメニューにホバーしたら表示 */
}

.dropdown__lists {
  display: none;/*デフォルトでは非表示の状態にしておく*/
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
}

.gnavi__list:hover .dropdown__lists {
  display: block;/* ナビメニューにホバーしたら表示 */
}

.dropdown__list {
    background-color: #004d80;
    height: 60px;
    transition: all .3s;
    position: relative;
}

.dropdown__list:not(:first-child)::before{
    content: "";
    width: 100%;
    height: 1px;
    background-color: #3492d1;
    position: absolute;
    top: 0;
    left: 0;
}

.dropdown__list:hover {
    background-color: #003558;
}

.dropdown__link {
  color: #fff;
  text-decoration: none;
}

.dropdown__link::before {  /* ドロップダウンの矢印部分 */
  content: '';
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

.is-menu {
  width: 90%;
  top: 65%; /* スマホ版ように位置を上書き */
  left: 25px;
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


/* PC版 */
@media (min-width: 834px) {
  .menu {
    display: none; /* メニューは非表示 */
  }

  .hamburger-button {
    display: none; /* ハンバーガーメニューボタンは非表示 */
  }
}

/* タブレット版 */
@media (max-width: 834px) {
  .dropdown__link{
    font-size: small;
  }
}
</style>
