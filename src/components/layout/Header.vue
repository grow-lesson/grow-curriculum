<template>
  <div>
    <header class="header">
      <div class="logo-nav">
        <a class="logo" href="#">Grow 学習サイト</a>
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">TOP</li>
            <li class="navigation__item">ABOUT</li>
            <li class="navigation__item">CONTACT</li>
          </ul>
        </nav>
      </div>
      <button type="button" class="menu-btn" v-on:click="open = !open">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
      <div class="menu" v-bind:class="{ 'is-active': open }">
        <div class="menu__item">TOP</div>
        <div class="menu__item">ABOUT</div>
        <div class="menu__item">BLOG</div>
        <div class="menu__item">CONTACT</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      open: false,
    };
  },
  mounted() {},
  beforeUnmount() {},
  methods: {},
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

.menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.menu-btn .hamburger {
  width: 25px;
  height: 3px;
  background-color: black;
  margin-bottom: 4px;
}

/*----------------------------
* メニュー本体
*----------------------------*/
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
  transition: all 0s linear;
  transform: translateX(100vw);
}

.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

/*----------------------------
* アニメーション部分
*----------------------------*/
.menu.is-active {
  transform: translateX(0);
}

/* Media Query */
@media (min-width: 648px) {
  .menu-btn {
    display: none;
  }

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
}
</style>
