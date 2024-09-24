<template>
  <div class="welcome-page">
    <Header />
    <div class="hero-section">
      <p class="hero-description">あなたのプログラミングスキルを向上させ、新たな知識を習得しましょう。</p>
      <section id="features" class="features-section">
        <div class="features-container">
          <div class="feature">
            <h2 class="feature-title">HTMLとCSS</h2>
            <p class="feature-description">基本的なウェブページの作成やスタイリングを学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/html.png" class="feature-icon" alt="html" />
              </div>
              <div class="feature-logo">
                <img src="../../assets/images/menu/css.png" class="feature-icon" alt="css" />
              </div>
            </div>
            <a class="feature-button" @click="goToHtmlMenuPage">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">コマンドライン</h2>
            <p class="feature-description">ターミナルやコマンドラインインターフェースの基本的な操作を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/command-line.jpg" class="feature-icon" alt="commandline" />
              </div>
            </div>
            <a class="feature-button" @click="goToCommandLineMenuPage">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">JavaScript</h2>
            <p class="feature-description">ウェブ開発におけるインタラクティブな要素や動的な機能を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/javascript.png" class="feature-icon" alt="javascript" style="height: 90%;"/>
              </div>
            </div>
            <a class="feature-button" @click="goToJavaScriptMenuPage">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">jQuery</h2>
            <p class="feature-description">jQueryを使った動的な操作とイベント処理を学び、<br>ユーザビリティ向上とコードの効率性を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/jquery.png" class="feature-icon" alt="SQL" />
              </div>
            </div>
            <a class="feature-button" @click="goToJqueryMenuPage">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">Git</h2>
            <p class="feature-description">バージョン管理システムのGitを使ったチーム開発の基礎を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/git.png" class="feature-icon" alt="git" />
              </div>
            </div>
            <a class="feature-button" @click="goToGitMenuPage">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">SQL</h2>
            <p class="feature-description">データベース管理言語(SQL)の基礎を学び、<br>実践的な操作スキルを身につけましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/sql.png" class="feature-icon" alt="SQL" />
              </div>
            </div>
            <a class="feature-button" @click="goToSQLMenuPage">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">Photoshop</h2>
            <p class="feature-description">Photoshopの基本的な使い方を学び、画像編集のスキルを身につけましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/photoshop.png" class="feature-icon" alt="photoshop" />
              </div>
            </div>
            <a class="feature-button" @click="goToPhotoshopMenuPage">受講する</a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { useRouter } from 'vue-router';

export default {
  name: "CourseMenu",
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();

    const goToHtmlMenuPage = () => {
      router.push({ name: "HtmlMenuPage" });
    };

    const goToCommandLineMenuPage = () => {
      router.push({ name: "CommandLineMenuPage" });
    };

    const goToGitMenuPage = () => {
      router.push({ name: "GitMenuPage" });
    };

    const goToJavaScriptMenuPage = () => {
      router.push({ name: "JavascriptMenuPage" });
    };

    const goToSQLMenuPage = () => {
      router.push({ name: "SqlMenuPage" });
    };

    const goToJqueryMenuPage = () => {
      router.push({ name: "JqueryMenuPage" });
    };

    const goToPhotoshopMenuPage = () => {
      router.push({ name: "PhotoshopMenuPage" });
    };

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      goToHtmlMenuPage,
      goToCommandLineMenuPage,
      goToGitMenuPage,
      goToJavaScriptMenuPage,
      goToSQLMenuPage,
      goToJqueryMenuPage,
      goToPhotoshopMenuPage,
    };
  },
};
</script>

<style scoped>
.welcome-page {
  text-align: center;
}

.hero-section {
  padding: 60px 30px;
  color: black;
}

.hero-description {
  font-size: 20px;
  font-weight: 600;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}

.features-section {
  padding: 80px 0;
}

.features-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.feature {
  width: 45%;
  margin: 20px;
  text-align: center;
  border: 1px solid #d4d4e46e;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #272727;
}

.feature-description {
  font-size: 18px;
  font-weight: 600;
  color: #484848;
}

.feature-image {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.feature-logo {
  width: 100px;
}
.feature-icon {
  width: 100%;
}

.feature-button {
  display: inline-block;
  text-align: center;
  width: 40%;
  margin: 30px auto;
  padding: 10px 20px;
  background-color: #6063ff;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
}

@media screen and (max-width: 834px) {
  .hero-description{
    font-size: 16px;
  }
  .features-container {
    flex-direction: column;
    align-items: center;
  }
  .feature {
    width: 90%;
  }
  .feature-title{
    font-size: 18px;
  }
  .feature-description{
    font-size: small;
  }
  .feature-button{
    width: 95%;
  }
}
</style>
