<template>
  <div>
    <h1>Welcome to My Website</h1>
    <button @click="goToLogin">Log in</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
