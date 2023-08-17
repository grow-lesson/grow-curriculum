<template>
  <div>
    <div class="welcome-header">
      <p class="welcome-title">GROW Learning Website</p>
    </div>
    <div class="welcome-container">
      <div class="box">
        <!-- フェードトランジションの名前を指定 -->
        <transition name="fade">
          <div class="background-image" :style="backgroundStyle"></div>
        </transition>
        <h1 class="title" :class="{ floating: isFloating }">カリキュラムを<span>受講しよう！</span></h1>
        <button class="btn_04" @click="goToSignUP" @focus="buttonFocus" @blur="buttonBlur">新規登録</button>
        <button class="btn_04" @click="goToLogin" @focus="buttonFocus" @blur="buttonBlur">ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImages: [
        require("../assets/images/welcome/welcome-1.jpg"),
        require("../assets/images/welcome/welcome-2.jpg"),
        require("../assets/images/welcome/welcome-3.jpg"),
        require("../assets/images/welcome/welcome-4.jpg"),
        require("../assets/images/welcome/welcome-5.jpg"),
        require("../assets/images/welcome/welcome-6.jpg"),
      ],
      currentImageIndex: 0,
      isFloating: true,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        // 現在の背景画像をスタイルに反映
        backgroundImage: `url(${this.backgroundImages[this.currentImageIndex]})`,
        // フローティング状態の場合は不透明度を1に、そうでない場合は0に設定
        opacity: this.isFloating ? 1 : 0,
      };
    },
  },
  methods: {
    goToSignUP() {
      this.$router.push({ name: "Signup" });
    },
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    changeBackgroundImage() {
      // 背景画像を次のインデックスに変更
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.backgroundImages.length;
    },
    buttonFocus() {
      // ボタンにフォーカスが当たったときにフローティング状態に設定
      this.isFloating = true;
    },
    buttonBlur() {
      // ボタンからフォーカスが外れたときにフローティング状態を解除
      this.isFloating = false;
    },
  },
  mounted() {
    setInterval(() => {
      // フローティング状態を解除
      this.isFloating = false;

      // 1秒後に背景画像を切り替え
      setTimeout(() => {
        this.changeBackgroundImage();
        // フローティング状態を設定
        this.isFloating = true;
      }, 500);

      // 2.5秒後にフローティング状態を解除
      setTimeout(() => {
        this.isFloating = false;
      }, 4500);
    }, 5000); // Changed the interval to 5000ms (5 seconds)
  },
};
</script>

<style>
.welcome-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  padding: 25px 30px;
}

.welcome-title {
  font-size: large;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.box {
  margin-left: auto;
  width: 40%;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* フェードトランジションのクラス */
.fade-enter-active,
.fade-leave-active {
  /* opacityプロパティの変化を1.5秒かけて行う */
  transition: opacity 1.5s ease;
}

.fade-enter,
.fade-leave-to {
  /* 初期状態と終了状態のopacityを0に設定し、フェードイン・フェードアウトの効果を実現 */
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
  /* フローティング状態の場合、タイトルを上に浮かせるアニメーション */
  transform: translateY(-5px);
}

.btn_04 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  position: relative;
  background: #228bc8;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  margin-bottom: auto;
  padding: 0 25px 0 40px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: left;
  text-decoration: none;
  transition-duration: 0.3s;
}

.btn_04:before {
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

.btn_04:hover {
  background: #fff;
  color: #228bc8;
}

.btn_04:hover:before {
  border-top: 2px solid #228bc8;
  border-right: 2px solid #228bc8;
}

/* TODO: ログイン機能ができたら削除 */
.dummy{
  margin-top: 40px;
}

.production:hover {
  color: #fff;
  background-color: gray;
}

.production:hover:before {
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}

/* TODO: ここまで */

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: opacity 0.5s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 60%;
}

@media (max-width: 648px) {
  .welcome-header {
    padding: 10px;
  }

  .welcome-title {
    padding: 0 10px;
  }

  .background-image {
    width: 100%;
    filter: brightness(0.6);
  }

  .box {
    width: 100%;
  }

  .title {
    color: #8f84f7;
  }

  .btn_04 {
    width: 250px;
    color: #fff;
  }
}
</style>
