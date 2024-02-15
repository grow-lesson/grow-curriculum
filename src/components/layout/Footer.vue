<template>
  <footer class="footer">
    <p class="footer-text">&copy; 2023 GROW 学習サイト. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Footer */
.footer {
  width: 100%;
  background-color: #333;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 100vh;
}

.footer-text {
  color: #fff;
}

/* スマホ版 */
@media (max-width: 648px) {
  .footer-text {
    font-size: small;
  }
}
</style>
