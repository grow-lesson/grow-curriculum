<template>
  <div class="navigation-buttons">
    <button @click="goToPrevious"><span class="arrow-left"></span></button>
    <button @click="goToNext"><span class="arrow-right"></span></button>
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
  width: 70px;
  height: 40px;
  background-color: #3fa0fa;
  color: #ffffff;
  border: none;
  border-radius: 7px; /* 四角いボタン */
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
}

.navigation-buttons button:hover {
  background-color: #ff9900;
}

.arrow-left, .arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-left {
  border-width: 10px 20px 10px 0;
  border-color: transparent #ffffff transparent transparent;
  left: 20px; /* 矢印の位置 */
}

.arrow-right {
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #ffffff;
  right: 20px; /* 矢印の位置 */
}
</style>
