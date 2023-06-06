<template>
  <div>
    <Header />

    <main class="main-content">
      <section class="hero">
        <div class="hero-content">
          <h1>カリキュラム一覧</h1>
        </div>
      </section>

      <section class="features">
        <div class="feature">
          <h2>ターミナル操作</h2>
          <p>ファイル・フォルダの作成や編集・移動・削除を学べるコース</p>
          <div class="feature-image">
            <div class="feature-logo">
              <img src="../assets/command-line.jpg" class="feature-icon" alt="html" />
            </div>
          </div>
          <a href="#" class="button">受講する</a>
        </div>
        <div class="feature">
          <h2>HTML・CSS</h2>
          <p>ウェブサイトの作成に必要な骨組みやデザインを学べるコース</p>
          <div class="feature-image">
            <div class="feature-logo">
              <img src="../assets/html.png" class="feature-icon" alt="html" />
            </div>
            <div class="feature-logo">
              <img src="../assets/css.png" class="feature-icon" alt="css" />
            </div>
          </div>
          <a href="#" class="button">受講する</a>
        </div>
        <div class="feature">
          <h2>Git</h2>
          <p>ソースプログラムなどを保存・共有を学べるコース</p>
          <div class="feature-image">
            <div class="feature-logo">
              <img src="../assets/git.png" class="feature-icon" alt="git" />
            </div>
          </div>
          <a href="#" class="button">受講する</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "MenuPage",
  components: {
    Header,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
}

/* Hero */
.hero {
  background-color: #f9f9f9;
  padding: 60px;
  text-align: center;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.button {
  display: inline-block;
  width: 120px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

/* Features */
.features {
  display: flex;
  justify-content: space-around;
  padding: 60px;
  background-color: #fff;
}
.feature {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
}

.feature h2 {
  font-size: 26px;
}

.feature p {
  color: #666;
}

.feature-image {
  height: 120px;
  display: flex;
  justify-content: center;
}
.feature-logo {
  width: 100px;
}
.feature-icon {
  width: 100%;
}

/* Testimonial */
.testimonial {
  background-color: #f9f9f9;
  padding: 60px;
  text-align: center;
}

.testimonial blockquote {
  font-size: 20px;
  margin-bottom: 20px;
}

.testimonial blockquote p {
  color: #666;
}

.testimonial blockquote cite {
  font-style: italic;
  color: #999;
}
</style>
