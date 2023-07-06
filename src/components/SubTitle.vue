<template>
  <div class="sub-title">
    <h2 class="sub-title-word">{{ subTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.sub-title {
  background-color: #606060;
  color: #fff;
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  margin: 10px auto;
  width: 70%;
}
.sub-title-word {
  text-align: center;
}

@media (max-width: 648px) {
  .sub-title{
    width: 80%;
  }

  .sub-title-word {
    font-size: 10px;
  }
}
</style>
