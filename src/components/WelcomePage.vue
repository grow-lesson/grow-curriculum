<template>
  <transition name="fade">
    <div class="welcome">
      <div class="welcome-header">
        <p class="welcome-title">GROW Learning Website</p>
      </div>
      <div class="background-image" :style="backgroundStyle">
        <div class="welcome-container">
          <div class="box">
            <h1 class="title" :class="{ floating: isFloating }">カリキュラムを<span>受講しよう！</span></h1>
            <button class="change_component_button" @click="goToSignUP" @focus="buttonFocus" @blur="buttonBlur">新規登録</button>
            <button class="change_component_button" @click="goToLogin" @focus="buttonFocus" @blur="buttonBlur">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
  opacity: isFloating.value ? 1 : 0,
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

const buttonFocus = () => {
  isFloating.value = true;
};

const buttonBlur = () => {
  isFloating.value = false;
};

onMounted(() => {
  setInterval(() => {
    isFloating.value = false;
    setTimeout(() => {
      changeBackgroundImage();
      isFloating.value = true;
    }, 500);
    setTimeout(() => {
      isFloating.value = false;
    }, 4500);
  }, 5000);
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
  padding: 30px;
}

.welcome-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  padding-left: 20px;
}

.background-image {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease;
}

.welcome-container {
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

/* フェードトランジションのクラス */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  transition: transform 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.title.floating {
  transform: translateY(-5px);
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
