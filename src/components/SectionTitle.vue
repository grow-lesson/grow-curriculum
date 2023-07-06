<template>
  <div class="section-title">
    <h2 class="section-title-word">{{ sectionTitle }}</h2>
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
  background-color: #34dc47;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  margin: 10px auto;
  width: 60%;
}
.section-title-word {
  text-align: center;
}

@media (max-width: 648px) {
  .section-title{
    width: 70%;
  }

  .section-title-word {
    font-size: 10px;
  }
}
</style>
