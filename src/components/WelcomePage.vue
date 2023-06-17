<template>
  <div class="container">
    <div class="background-image" :style="backgroundStyle"></div>
    <h1 class="title" :class="{ floating: isFloating }">カリキュラムを受講しよう！</h1>
    <button class="button" @click="goToLogin" @focus="buttonFocus" @blur="buttonBlur">Log in</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImages: [
        require("../assets/welcome1.jpg"),
        require("../assets/welcome2.jpg"),
        require("../assets/welcome3.jpg"),
      ],
      currentImageIndex: 0,
      isFloating: false,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImages[this.currentImageIndex]})`,
      };
    },
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    changeBackgroundImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.backgroundImages.length;
    },
    buttonFocus() {
      this.isFloating = true;
    },
    buttonBlur() {
      this.isFloating = false;
    },
  },
  mounted() {
    setInterval(this.changeBackgroundImage, 5000); // 5秒ごとに背景画像を変更
  },
};
</script>

<style>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.title.floating {
  transform: translateY(-5px);
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

.button:focus {
  opacity: 0.8;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
