<template>
  <div class="welcome-page">
    <Header />
    <div class="hero-section">
      <p class="hero-description">あなたのプログラミングスキルを向上させ、新たな知識を習得しましょう。</p>
      <section id="features" class="features-section">
        <div class="features-container">
          <div class="feature">
            <h2 class="feature-title">コマンドライン</h2>
            <p class="feature-description">ターミナルやコマンドラインインターフェースの基本的な操作を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/command-line.jpg" class="feature-icon" alt="commandline" />
              </div>
            </div>
            <a class="feature-button">受講する</a>
          </div>
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
            <a class="feature-button">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">Git</h2>
            <p class="feature-description">バージョン管理システムのGitを使ったチーム開発の基礎を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/git.png" class="feature-icon" alt="git" />
              </div>
            </div>
            <a class="feature-button">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">JavaScript</h2>
            <p class="feature-description">ウェブ開発におけるインタラクティブな要素や動的な機能を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/javascript.png" class="feature-icon" alt="javascript" />
              </div>
            </div>
            <a class="feature-button">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">Ruby</h2>
            <p class="feature-description">オブジェクト指向プログラミング言語Rubyの基礎を学びましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/ruby.png" class="feature-icon" alt="ruby" />
              </div>
            </div>
            <a class="feature-button">受講する</a>
          </div>
          <div class="feature">
            <h2 class="feature-title">情報工学</h2>
            <p class="feature-description">情報技術者に必要な基本的な知識を学び実務でわからない言葉をなくしましょう。</p>
            <div class="feature-image">
              <div class="feature-logo">
                <img src="../../assets/images/menu/information-technology.png" class="feature-icon" alt="ruby" />
              </div>
            </div>
            <a class="feature-button">受講する</a>
          </div>
        </div>
      </section>
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
};
</script>

<style scoped>
.welcome-page {
  text-align: center;
}

.hero-section {
  padding: 60px 0;
  color: black;
  background-image: linear-gradient(to right, #d6ffff, #aff7f7);
}

.hero-description {
  font-size: 20px;
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
}

.feature-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 16px;
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
  .features-container {
    flex-direction: column;
    align-items: center;
  }
  .feature {
    width: 90%;
  }
}
</style>
