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

<style scoped>
/* Footer */
.footer {
  width: 100%;
  background: linear-gradient(135deg, #1e3c72, #2a5298); /* モダンな青系グラデーション */
  padding: 20px 0;
  text-align: center;
  color: #fff;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  position: relative;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3); /* 少しのシャドウで立体感を追加 */
}

.footer-text {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #f0f0f0;
  margin: 0;
  text-transform: uppercase; /* テキストをすべて大文字にしてスタイリッシュに */
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: #f39c12; /* トップに細いラインを追加してアクセントをつける */
  border-radius: 2px;
}

/* スマホ版 */
@media (max-width: 648px) {
  .footer {
    padding: 15px 0;
  }

  .footer-text {
    font-size: 14px;
  }
}
</style>
