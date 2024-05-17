<template>
  <div class="navigation-buttons">
    <button @click="goToPrevious">←</button>
    <button @click="goToNext">→</button>
  </div>
</template>

<script>
export default {
  props: {
    previousPageName: String,
    nextPageName: String
  },
  methods: {
    goToPrevious() {
      this.$router.push({ name: this.previousPageName });
    },
    goToNext() {
      this.$router.push({ name: this.nextPageName });
    }
  }
};
</script>

<style scoped>
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
}

.navigation-buttons button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3fa0fa;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.navigation-buttons button:hover {
  background-color: #ff9900;
}
</style>

