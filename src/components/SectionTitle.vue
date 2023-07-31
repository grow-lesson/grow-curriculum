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
  position: relative;
  padding: 8px 0;
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  margin: 10px 0 30px;
  margin-right: auto;
  width: 100%;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -5px; /* Adjust the value to position the line */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #228bc8;
}
.section-title-word {
  /* text-align: center; */
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
