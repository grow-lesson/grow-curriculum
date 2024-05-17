<template>
  <div class="sidebar">
    <button class="sidebar-button" @click="scrollToTop">
      <div class="arrow-up"></div>
    </button>
    <div class="sidebar-contents">
      <SubTitle subTitle="目次" />
      <ul class="menu">
        <li class="menu-item" v-for="(section, index) in sections" :key="index" @click="scrollToSection(section.id)">{{ section.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubTitle from "@/components/SubTitle.vue";

export default {
  components: {
    SubTitle,
  },
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.sidebar-contents {
  position: fixed;
  width: 23%;
  height: 40%;
  grid-column: 2 / span 1;
  margin-right: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  overflow: scroll;
  background: rgba(194, 193, 255, 0.432);
  overflow-x: hidden;
}

.menu {
  list-style: none;
  padding-left: 0;
}

.menu-item {
  margin-left: 5px;
  margin-bottom: 0.5em;
  cursor: pointer;
  white-space: pre-wrap;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.sidebar-button {
  position: fixed;
  bottom: 80px;
  right: 40px;
  width: 60px;
  height: 60px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #3fa0fa;
  color: white;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-button:hover {
  background-color: #ff9900;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 18px solid white;
}
</style>
