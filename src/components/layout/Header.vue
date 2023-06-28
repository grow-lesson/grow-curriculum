<template>
  <div>
    <header :class="{'header': true, 'is-mobile': isMobile}">
      <div class="logo-nav">
        <a class="logo" href="/menu">Grow 学習サイト</a>
        <nav class="navigation" v-show="!isMobile || showMenu">
          <ul class="navigation__list">
            <li class="navigation__item">サイトについて</li>
            <li class="navigation__item">環境構築やインストール</li>
            <li class="navigation__item">コース一覧</li>
            <li class="navigation__item">マイページ</li>
            <li class="navigation__item">お問い合わせ</li>
          </ul>
        </nav>
        <div class="menu" v-show="isMobile && showMenu">
          <div class="menu__item">このサイトについて</div>
          <div class="menu__item">環境構築やインストール</div>
          <div class="menu__item">コース一覧</div>
          <div class="menu__item">マイページ</div>
          <div class="menu__item">お問い合わせ</div>
        </div>
        <button class="hamburger-button" v-show="isMobile" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
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
    this.checkMobileScreen();
    window.addEventListener('resize', this.checkMobileScreen);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileScreen);
  },
  methods: {
    checkMobileScreen() {
      this.isMobile = window.innerWidth <= 648;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
/* Header */
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
  display: none;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;
}

.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

.is-mobile .menu,
.show-menu {
  opacity: 1;
  pointer-events: auto;
}

.navigation__item:hover {
  text-decoration: underline;
}

.hamburger-button {
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

/* Media Query */
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
    display: none;
  }

  .hamburger-button {
    display: none;
  }
}
</style>
