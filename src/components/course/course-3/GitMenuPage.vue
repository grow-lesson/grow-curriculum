<template>
  <div class="container">
    <h1 class="header">Gitコースを選ぼう</h1>
    <ul class="lesson-list">
      <li class="lesson-item"><a class="lesson-link btn_22" @click="goToPageLesson1">GitLesson1</a></li>
      <li class="lesson-item"><a class="lesson-link btn_22" @click="goToPageLesson2">GitLesson2</a></li>
      <li class="lesson-item"><a class="lesson-link btn_22" @click="goToPageLesson3">GitLesson3</a></li>
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

<style scoped>
.container {
  margin: 0 auto;
  padding: 1em;
  max-width: 600px;
}

.header {
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em;
}

.lesson-list {
  list-style: none;
  padding-left: 0;
}

.lesson-item {
  margin-bottom: 30px;
}

.lesson-link {
  position: relative;
}

.lesson-link:after {
  content: "";
  width: 7px;
  height: 7px;
  display: inline-block;
  border-top: 1px solid;
  border-right: 1px solid;
  right: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

a.btn_22 {
  display: block;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  width: 160px;
  margin: auto;
  padding: 0.8rem 0;
  font-weight: bold;
  border: 2px solid #27acd9;
  background: #27acd9;
  color: #fff;
  border-radius: 5px;
  transition: 0.5s;
  animation: move_d 2s infinite;
  box-shadow: 0 5px 0 rgb(6, 134, 178, 1);
  position: relative;
}

@keyframes move_d {
  0% {
    box-shadow: 0 5px 0 rgb(6, 134, 178, 1);
    top: 0px;
  }
  10% {
    box-shadow: 0 0 0 rgb(6, 134, 178, 1);
    top: 5px;
  }
  20% {
    box-shadow: 0 5px 0 rgb(6, 134, 178, 1);
    top: 0px;
  }
  30% {
    box-shadow: 0 0 0 rgb(6, 134, 178, 1);
    top: 5px;
  }
  40% {
    box-shadow: 0 5px 0 rgb(6, 134, 178, 1);
    top: 0px;
  }
}

a.btn_22:hover {
  color: #27acd9;
  background: #fff;
  border: 2px solid #0686b2;
}
</style>
