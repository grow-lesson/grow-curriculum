<template>
  <div class="word-wrapper">
    <span class="highlighted-word">{{ word }}</span>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.word-wrapper {
  display: inline-block;
  margin-left: 40px;
  padding: 5px;
}
.highlighted-word {
  color: red;
  font-size: large;
  font-weight: bold;
  margin: 0 auto;
}
</style>
