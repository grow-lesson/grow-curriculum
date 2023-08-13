<template>
  <div>
    <Header />
    <div class="edit">
      <h1>編集ページです</h1>
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

  }
};
</script>

<style scoped>
.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f0f0f0;
  min-height: 100vh; /* 画面の高さいっぱいに表示 */
  padding: 20px;
}
</style>
