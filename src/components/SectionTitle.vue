<template>
  <div class="section-title">
    <h2 class="title_word">{{ sectionTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.section-title {
  background-color: #4ed6ff;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  margin: 10px auto;
  width: 60%;
}
.title_word {
  text-align: center;
}
</style>
