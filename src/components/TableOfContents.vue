<template>
  <div class="sidebar">
    <SubTitle subTitle="目次" />
    <ul class="menu">
      <li class="menu-item" v-for="(section, index) in sections" :key="index" @click="scrollToSection(section.id)">{{ section.title }}</li>
    </ul>
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
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  grid-column: 2 / span 1;
  padding-right: 40px;
}

.menu {
  list-style: none;
  padding-left: 0;
}

.menu-item {
  margin-bottom: 0.5em;
  cursor: pointer;
  white-space: pre-wrap;
}
</style>
