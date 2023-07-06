<template>
  <div class="highlighted">
    <p class="highlighted-word">{{ word }}</p>
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
.highlighted {
  display: inline-block;
  padding: 5px;
}
.highlighted-word {
  color: red;
  font-size: large;
  font-weight: bold;
  margin: 0 auto;
}

@media (max-width: 648px) {
  .highlighted-word {
    font-size: small;
  }
}
</style>
