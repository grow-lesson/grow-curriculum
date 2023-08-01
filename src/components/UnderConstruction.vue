<template>
  <div>
    <Header />
    <div class="under-construction">
      <h1>準備中...</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "UnderConstruction",
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
}

h1 {
  font-size: 48px;
  margin-bottom: 16px;
}
</style>
