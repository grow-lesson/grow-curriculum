<template>
  <div>
    <h1>Command Lineを選ぼう</h1>
    <ul class="lesson-list">
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson1">Command Line 1</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goToPageLesson1() {
      this.$router.push({ name: "CommadLinePage1" });
    },
  },
};
</script>
