<template>
  <div class="fancy-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.fancy-title {
  background-color: #5ebff0;
  color: #fff;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  width: 80%;
  margin: 30px auto 0;
}
</style>
