<template>
  <div class="main-title">
    <h1 class="main-title-word">{{ title }}</h1>
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
.main-title {
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

@media (max-width: 648px) {
  .main-title{
    width: 90%;
  }

  .main-title-word {
    font-size: 12px;
  }
}
</style>
