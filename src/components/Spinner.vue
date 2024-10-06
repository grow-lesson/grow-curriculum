<template>
  <div class="spinner-container" v-if="isLoading">
    <h1 class="spinner-text">Loading...</h1>
    <div class="spectrum-bars">
      <div class="bar" v-for="n in 5" :key="n"></div>
    </div>
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

<style scoped>
.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.spinner-text {
  font-size: 2vw;
  color: #3498db;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in-out infinite;
}

@keyframes fadeIn {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
}

.spectrum-bars {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bar {
  width: 10px;
  height: 30px;
  background-color: #3498db;
  margin: 0 5px;
  animation: growShrink 1.5s ease-in-out infinite;
  animation-delay: calc(0.2s * var(--i));
}

.bar:nth-child(1) { animation-delay: 0s; }
.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.4s; }
.bar:nth-child(4) { animation-delay: 0.6s; }
.bar:nth-child(5) { animation-delay: 0.8s; }

@keyframes growShrink {
  0%, 100% {
    height: 30px;
  }
  50% {
    height: 80px;
  }
}

/* Media query to adjust font size and layout based on screen width */
@media (max-width: 600px) {
  .spinner-text {
    font-size: 4vw;
  }

  .bar {
    width: 6px;
    margin: 0 3px;
  }
}

@media (min-width: 1200px) {
  .spinner-text {
    font-size: 1.5vw;
  }

  .bar {
    width: 15px;
    height: 40px;
  }
}
</style>
