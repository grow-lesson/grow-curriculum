<template>
  <div>
    <Header />
    <div class="container">
      <h1 class="header">Command Lineを選ぼう</h1>
      <ul class="lesson-list">
        <li class="lesson-item">
          <a class="lesson-link btn" @click="goToPageLesson1">Command Line 1</a>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    goToPageLesson1() {
      this.$router.push({ name: "CommadLinePage1" });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 1em;
  max-width: 600px;
}

.header {
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em; /* This will make the header bigger */
}

.lesson-list {
  display: grid;
  justify-content: center;
  list-style: none;
  padding-left: 0;
}

.lesson-item {
  margin-bottom: 1em;
}

.lesson-link {
  text-decoration: none;
  color: #3498db;
  padding: 0.8em 2em;
  background-color: #f8f9fa;
  border: 1px solid #3498db;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s;
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

.lesson-link:hover {
  background-color: #3498db;
  color: #fff;
}
</style>
