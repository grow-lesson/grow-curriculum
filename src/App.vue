<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
import "destyle.css";

export default {
  name: "App",
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Global Styles */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  color: #2c3e50;
}
</style>
