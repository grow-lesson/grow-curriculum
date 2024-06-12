<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>

<script setup>
import "normalize.css";
import "destyle.css";
import { ref, onMounted } from 'vue';

const app = ref(null);

const isInWebView = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return (/iphone|ipod|ipad|android/i.test(userAgent) && !window.MSStream);
};

const applyWebViewMargin = () => {
  if (isInWebView() && app.value) {
    // ノッチやカメラの位置を避けるための上部マージンを設定
    app.value.style.marginTop = 'calc(env(safe-area-inset-top) + 44px)';
  }
};

onMounted(() => {
  applyWebViewMargin();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ノッチ対応 */
@supports(padding: env(safe-area-inset-top)) {
  #app {
    margin-top: env(safe-area-inset-top);
  }
}

/* Global Styles */
body {
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  color: #2c3e50;
}
</style>
