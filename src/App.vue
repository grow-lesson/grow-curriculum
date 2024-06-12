<template>
  <div id="app" :class="{ 'app-with-padding': isWebView }">
    <router-view />
  </div>
</template>

<script setup>
import "normalize.css";
import "destyle.css";
import { ref, onMounted } from 'vue';

const isWebView = ref(false);

const isInWebView = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return (/iphone|ipod|ipad|android/i.test(userAgent) && !window.MSStream);
};

onMounted(() => {
  isWebView.value = isInWebView();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ノッチ対応のスタイルはスマホアプリでのみ適用 */
.app-with-padding {
  padding-top: 50px; /* ここで必要な上部の隙間を調整 */
}

/* Global Styles */
body {
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  color: #2c3e50;
}
</style>
