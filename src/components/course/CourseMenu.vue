<template>
  <div class="welcome-page">
    <Header />
    <div class="hero-section">
      <h1 class="hero-title">プログラミング学習サイトへようこそ</h1>
      <p class="hero-description">あなたのプログラミングスキルを向上させ、新たな知識を習得しましょう。</p>
      <section id="features" class="features-section">
        <div class="feature">
          <i class="icon fas fa-code"></i>
          <h2 class="feature-title">HTMLとCSS</h2>
          <p class="feature-description">基本的なウェブページの作成やスタイリングを学びましょう。</p>
        </div>
        <div class="feature">
          <i class="icon fab fa-js"></i>
          <h2 class="feature-title">JavaScript</h2>
          <p class="feature-description">ウェブ開発におけるインタラクティブな要素や動的な機能を学びましょう。</p>
        </div>
        <div class="feature">
          <i class="icon fab fa-git-alt"></i>
          <h2 class="feature-title">Git</h2>
          <p class="feature-description">バージョン管理システムのGitを使ったチーム開発の基礎を学びましょう。</p>
        </div>
        <div class="feature">
          <i class="icon fas fa-terminal"></i>
          <h2 class="feature-title">コマンドライン</h2>
          <p class="feature-description">ターミナルやコマンドラインインターフェースの基本的な操作を学びましょう。</p>
        </div>
        <div class="feature">
          <i class="icon fas fa-gem"></i>
          <h2 class="feature-title">Ruby</h2>
          <p class="feature-description">オブジェクト指向プログラミング言語Rubyの基礎を学びましょう。</p>
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
  background-image: linear-gradient(to right, #62aeff, #00c6ff);
  color: #fff;
}

.hero-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 18px;
  margin-bottom: 30px;
}

.features-section {
  padding: 80px 0;
  background-image: linear-gradient(to right, #62aeff, #00c6ff);
}

.feature {
  margin-bottom: 40px;
  text-align: center;
}

.icon {
  font-size: 48px;
  margin-bottom: 20px;
  color: #007bff;
}

.feature-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 16px;
  color: #484848;
}
</style>
