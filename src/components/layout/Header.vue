<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <a class="logo" href="#">Grow 学習サイト</a>
        <button class="hamburger" @click="toggleMenu" v-show="isMobile && !isMenuOpen">
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
        </button>
        <button class="close-button" @click="toggleMenu" v-show="isMobile && isMenuOpen">
          <span class="close-icon">&times;</span>
        </button>
        <div class="menu-wrapper" v-show="!isMobile || isMenuOpen">
          <ul class="nav-list">
            <li class="nav-item"><a href="#">ホーム</a></li>
            <li class="nav-item"><a href="#">カリキュラムの流れ</a></li>
            <li class="nav-item"><a href="#">コース</a></li>
            <li class="nav-item"><a href="#">お知らせ</a></li>
          </ul>
        </div>
        <div class="dropdown-menu" v-show="isMobile && isMenuOpen">
          <ul>
            <li><a href="#">ホーム</a></li>
            <li><a href="#">カリキュラムの流れ</a></li>
            <li><a href="#">コース</a></li>
            <li><a href="#">お知らせ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMobile: false,
      isMenuOpen: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 648;
      if (this.isMobile) {
        this.closeMenu();
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Header */
.header {
  background-color: #fff;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-item {
  display: inline-block;
  margin-left: 10px;
}

.nav-list {
  display: flex;
  align-items: center;
}

.nav-list li:first-child {
  margin-left: 0;
}

.nav-list a {
  text-decoration: none;
  color: #666;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.hamburger-icon {
  width: 100%;
  height: 2px;
  background-color: #333;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}

.close-icon {
  font-size: 18px;
  color: #333;
}

.menu-wrapper {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: #fff;
  padding: 10px;
  list-style-type: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 10;
}

.dropdown-menu ul {
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  margin-bottom: 10px;
}

.dropdown-menu a {
  text-decoration: none;
  color: #333;
}

/* 吹き出しスタイル */
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 15px;
  border: 10px solid transparent;
  border-bottom-color: #fff;
}

.dropdown-menu::after {
  content: "";
  position: absolute;
  top: -8px;
  right: 15px;
  border: 9px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.2);
}
</style>
