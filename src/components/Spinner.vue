<template>
  <div class="spinner-container" v-if="isLoading">
    <h1 class="spinner-text">Loading...</h1>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* 背景色を持ち透明度を指定 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* スピナーが最前面に表示されるようにZインデックスを設定 */
  display: flex;
  flex-direction: column;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db; /* スピナーの色を指定 */
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
