<template>
  <div>
    <header :class="{'header': true, 'is-mobile': isMobile}">
      <div class="logo-nav">
        <a class="logo" href="/menu">Grow 学習サイト</a>
        <nav class="navigation" v-show="!isMobile">
          <ul class="navigation__list">
            <li class="navigation__item">サイトについて</li>
            <li class="navigation__item">環境構築やインストール</li>
            <li class="navigation__item">コース一覧</li>
            <li class="navigation__item">マイページ</li>
            <li class="navigation__item">お問い合わせ</li>
          </ul>
        </nav>
      </div>
      <div class="menu" v-show="isMobile">
        <div class="menu__item">このサイトについて</div>
        <div class="menu__item">環境構築やインストール</div>
        <div class="menu__item">コース一覧</div>
        <div class="menu__item">マイページ</div>
        <div class="menu__item">お問い合わせ</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false
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

.is-mobile .menu {
  opacity: 1;
  pointer-events: auto;
}

.navigation__item:hover {
  text-decoration: underline;
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
}
</style>
