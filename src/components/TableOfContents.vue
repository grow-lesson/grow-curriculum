<template>
  <div class="sidebar">
    <button class="sidebar-button" @click="scrollToTop" @blur="onBlur">
      <div class="arrow-up"></div>
    </button>
    <div class="sidebar-contents">
      <SubTitle subTitle="目次" />
      <ul class="menu">
        <li
          class="menu-item"
          v-for="(section, index) in sections"
          :key="index"
          @click="scrollToSection(section.id)"
          @blur="onBlur"
        >
          {{ section.title }}
        </li>
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
  setup() {
    const scrollToSection = (sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onBlur = (event) => {
      event.target.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
      event.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    };

    return {
      scrollToSection,
      scrollToTop,
      onBlur
    };
  }
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
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-weight: 600;
}

.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

/* ボタンのスタイル */
.sidebar-button {
  position: fixed;
  bottom: 80px;
  right: 40px;
  width: 60px;
  height: 60px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* グラデーション */
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 立体感のある影 */
  transition: all 0.3s ease;
}

.sidebar-button:hover {
  background: linear-gradient(135deg, #a8d0fa, #706bff); /* ホバー時に柔らかいグラデーション */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* ホバー時の影を強化 */
  transform: translateY(-3px); /* ホバー時に少し浮く効果 */
}

/* フォーカスが外れた（ブラー）時のスタイル */
.sidebar-button:focus, .sidebar-button:active {
  background: linear-gradient(135deg, #ff758c, #ff7eb3); /* フォーカスが外れたときの色 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* フォーカス外れ時の影 */
  outline: none; /* デフォルトのアウトラインを消す */
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid white;
}
</style>
