<template>
  <div>
    <h1>Gitコースを選ぼう</h1>
    <ul class="lesson-list">
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson1">Git 1</a></li>
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson2">Git 2</a></li>
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson3">Git 3</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goToPageLesson1() {
      this.$router.push({ name: "GitPage1" });
    },
    goToPageLesson2() {
      this.$router.push({ name: "GitPage2" });
    },
    goToPageLesson3() {
      this.$router.push({ name: "GitPage3" });
    },
  },
};
</script>
