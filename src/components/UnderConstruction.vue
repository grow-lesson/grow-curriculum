<template>
  <div>
    <Header />
    <div class="under-construction">
      <h1>Under Construction...</h1>
      <BackButton />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "UnderConstruction",
  components: {
    Header,
    Footer,
    BackButton,
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
