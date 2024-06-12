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

const applyWebViewPadding = () => {
  if (isInWebView() && app.value) {
    app.value.style.padding = 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';
  }
};

onMounted(() => {
  applyWebViewPadding();
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
    padding-top: env(safe-area-inset-top);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
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
