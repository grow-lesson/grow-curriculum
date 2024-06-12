<template>
  <div class="welcome">
    <div class="welcome-header">
      <p class="welcome-title">GROW Learning Website</p>
    </div>
    <div class="background-image-wrapper">
      <div :class="['background-image', { 'fade-in': isFloating }]" :style="backgroundStyle"></div>
      <div class="welcome-container">
        <div class="box">
          <h1 class="title">カリキュラムを<span>受講しよう！</span></h1>
          <button class="change_component_button" @click="goToSignUP">新規登録</button>
          <button class="change_component_button" @click="goToLogin">ログイン</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const backgroundImages = [
  require("../assets/images/welcome/welcome-1.jpg"),
  require("../assets/images/welcome/welcome-2.jpg"),
  require("../assets/images/welcome/welcome-3.jpg"),
  require("../assets/images/welcome/welcome-4.jpg"),
  require("../assets/images/welcome/welcome-5.jpg"),
  require("../assets/images/welcome/welcome-6.jpg"),
];
const currentImageIndex = ref(0);
const isFloating = ref(true);

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundImages[currentImageIndex.value]})`,
}));

const goToSignUP = () => {
  router.push({ name: "Signup" });
};

const goToLogin = () => {
  router.push({ name: "Login" });
};

const changeBackgroundImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.length;
};

onMounted(() => {
  setInterval(() => {
    isFloating.value = false;
    setTimeout(() => {
      changeBackgroundImage();
      isFloating.value = true;
    }, 2000); // Shorten this value for a faster fade-out time
  }, 8000); // Adjust this value for the interval between images
});
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.welcome-header {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  padding: 30px 30px 20px 30px;
}

.welcome-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  padding-left: 20px;
}

.background-image-wrapper {
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 2s ease-in-out; /* Opacity transition duration */
}

.background-image.fade-in {
  opacity: 1;
}

.welcome-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.box {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.change_component_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  background: #228bc8;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  margin-bottom: 10px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
}

.change_component_button:before {
  content: '';
  width: 8px;
  height: 8px;
  border: 0;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 25px;
  margin-top: -6px;
}

.change_component_button:hover {
  background: #fff;
  color: #228bc8;
}

.change_component_button:hover:before {
  border-top: 2px solid #228bc8;
  border-right: 2px solid #228bc8;
}

@media (max-width: 648px) {
  .welcome-title {
    padding: 0 10px;
  }

  .box {
    width: 100%;
    padding: 10px;
  }

  .title {
    color: #8f84f7;
  }

  .change_component_button {
    width: 100%;
  }
}
</style>
