<template>
  <div>
    <h1>HTML・CSSコースを選ぼう</h1>
    <ul class="lesson-list">
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson1">HTML・CSS 1</a></li>
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson2">HTML・CSS 2</a></li>
      <li class="lesson-item"><a class="lesson-link" @click="goToPageLesson3">HTML・CSS 3</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goToPageLesson1() {
      this.$router.push({ name: "HtmlPage1" });
    },
    goToPageLesson2() {
      this.$router.push({ name: "HtmlPage2" });
    },
    goToPageLesson3() {
      this.$router.push({ name: "HtmlPage3" });
    },
  },
};
</script>
