<template>
  <div>
    <Header />
    <h1 class="mainTitle">ようこそ、プログラミング学習サイトへ！</h1>
    <ul class="introduce">
      <li class="introduce-contents is-odd">
        <div class="introduce-text">
          <h2 class="introduce-subTitle">学習サイトって？</h2>
          <p class="introduce-description">
            当サイトは、プログラミング初学者や経験者のための学習プラットフォームです。<br>
            プログラミングのスキルを向上させ、新しい技術や知識を習得するための最適な環境を提供しています。
          </p>
        </div>
        <!-- <div class="introduce-video" :class="{ 'slide-in': isLoaded }">
          <video autoplay muted loop @loadeddata="handleVideoLoad">
            <source src="../../assets/videos/typing-1.mp4" type="video/mp4" />
          </video>
        </div> -->
        <div class="introduce-text">
          <h2 class="introduce-subTitle">学習サイトで学べる事</h2>
          <p class="introduce-description">ここでは、HTMLとCSS、JavaScript、Git、コマンドライン、Rubyの学習に特化しており、 これらの言語やツールを使ってウェブ開発のスキルを身につけることができます。</p>
        </div>
      </li>
      <li class="introduce-contents is-even">
        <div class="introduce-image">
          <img src="../../assets/images/info/info-1.jpg" alt="info-1" class="introduce-picture" />
        </div>
        <div class="introduce-text">
          <h2 class="introduce-subTitle">学習サイトで学べる事</h2>
          <p class="introduce-description">ここでは、HTMLとCSS、JavaScript、Git、コマンドライン、Rubyの学習に特化しており、 これらの言語やツールを使ってウェブ開発のスキルを身につけることができます。</p>
        </div>
      </li>
      <li class="introduce-contents is-odd">
        <div class="introduce-text">
          <h2 class="introduce-subTitle">充実した学習コンテンツ</h2>
          <p class="introduce-description">初心者の方にも分かりやすい学習モジュールを提供し、実践的な演習やプロジェクトを通じて 習得した知識を実践で活用できるようサポートします。</p>
        </div>
        <!-- <div class="introduce-video" :class="{ 'slide-in': isLoaded }">
          <video autoplay muted loop @loadeddata="handleVideoLoad">
            <source src="../../assets/videos/typing-2.mp4" type="video/mp4" />
          </video>
        </div> -->
        <div class="introduce-text">
          <h2 class="introduce-subTitle">アットホームで聞きやすい環境</h2>
          <p class="introduce-description">先輩エンジニアと交流するコミュニティやフォーラムも提供しています。 また他の学習者との情報交換や質問、プロジェクトの共同開発などを通じて、より成長していきましょう。</p>
        </div>
      </li>
      <li class="introduce-contents is-even">
        <div class="introduce-image">
          <img src="../../assets/images/info/info-2.jpg" alt="info-2" class="introduce-picture" />
        </div>
        <div class="introduce-text">
          <h2 class="introduce-subTitle">アットホームで聞きやすい環境</h2>
          <p class="introduce-description">先輩エンジニアと交流するコミュニティやフォーラムも提供しています。 また他の学習者との情報交換や質問、プロジェクトの共同開発などを通じて、より成長していきましょう。</p>
        </div>
      </li>
    </ul>
    <p class="introduce-startText">是非、このプログラミング学習サイトを活用して、あなたのプログラミングのスキルを飛躍的に向上させましょう！</p>
    <button class="startButton" @click="goToEnvironmentPage">学習を始める</button>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Introduce",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleVideoLoad() {
      this.isLoaded = true;
    },
    goToEnvironmentPage() {
      this.$router.push({ name: "Environment" }).then(() => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>

<style scoped>
.mainTitle {
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}

.introduce {
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
  overflow: hidden;
}

.introduce-contents {
  width: 100%;
  margin-top: 40px;
  display: flex;
}

.is-odd {
  animation: slideFromRight 1s forwards;
}

.is-even {
  animation: slideFromLeft 1s forwards;
}

.introduce-subTitle {
  color: #5681f5;
  font-size: 18px;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.introduce-description {
  margin-top: 40px;
  color: #666;
  line-height: 1.6;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.introduce-video video {
  width: 100%;
  object-fit: cover;
}

.slide-in {
  opacity: 1;
}

@keyframes slideFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.introduce-picture {
  width: 100%;
}

.introduce-startText {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  color: #5681f5;
  line-height: 1.6;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 30px;
}

.startButton {
  background-color: #ff4885;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  margin: 40px auto;
}

.startButton:hover {
  background-color: #e91e63;
}

.startButton:focus {
  outline: none;
}

/* PC版 */
@media (min-width: 834px) {
  .mainTitle {
    font-size: 36px;
  }

  .introduce-contents {
    justify-content: space-around;
  }
  .introduce-text {
    width: 40%;
  }
  .introduce-description {
    text-align: left;
    font-size: 18px;
  }
  .introduce-video {
    width: 40%;
  }
  .introduce-image {
    width: 40%;
  }
  .introduce-picture {
    max-height: 370px;
    height: 100%;
    object-fit: cover;
  }
  .introduce-startText {
    font-size: 24px;
  }
}

/* タブレット版 */
@media (max-width: 834px) {
  .mainTitle {
    font-size: 34px;
  }
  .introduce-contents {
    align-items: center;
    flex-direction: column;
  }
  .is-even {
    flex-direction: column-reverse;
  }

  .introduce-description {
    font-size: 18px;
    padding-bottom: 20px;
  }
}

/* スマホ版 */
@media (max-width: 648px) {
  .mainTitle {
    font-size: 19px;
  }
  .introduce-description {
    font-size: small;
    padding-bottom: 20px;
  }
}
</style>
