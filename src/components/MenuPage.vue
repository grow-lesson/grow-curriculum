<template>
  <div>
    <Header />

    <main class="main-content">
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">カリキュラムの流れ</h1>
        </div>
      </div>
      <section class="flow">
        <h2>フロントエンドの基礎を学ぼう！</h2>
        <ul class="flow-list">
          <li class="flow-item"><a href="#">インストールや環境構築の手順を知る</a></li>
          <li class="flow-item"><a href="#">Growカリキュラムの始め方</a></li>
          <li class="flow-item"><a href="#">Grow学習サイトの使い方</a></li>
        </ul>
      </section>
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">コース</h1>
        </div>
      </div>
      <section class="course">
        <div class="course-item">
          <h2 class="course-title">ターミナル操作</h2>
          <p class="course-explanation">ファイル・フォルダの作成や編集・移動・削除を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/command-line.jpg" class="course-icon" alt="html" />
            </div>
          </div>
          <a href="#" class="course-button">受講する</a>
        </div>
        <div class="course-item">
          <h2 class="course-title">HTML・CSS</h2>
          <p class="course-explanation">ウェブサイトの作成に必要な骨組みやデザインを学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/html.png" class="course-icon" alt="html" />
            </div>
            <div class="course-logo">
              <img src="../assets/css.png" class="course-icon" alt="css" />
            </div>
          </div>
          <a href="#" class="course-button">受講する</a>
        </div>
        <div class="course-item">
          <h2 class="course-title">Git</h2>
          <p class="course-explanation">ソースプログラムなどを保存・共有を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/git.png" class="course-icon" alt="git" />
            </div>
          </div>
          <a href="#" class="course-button">受講する</a>
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

.hero-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}
/* flow */
.flow {
  margin: 0 auto;
  width: 500px;
  height: 300px;
}

.flow-list {
  display: flex;
  flex-direction: column;
  border: 1px solid #4285f4;
}

/* course */
.course {
  display: flex;
  justify-content: space-around;
  padding: 60px;
  background-color: #fff;
}
.course-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
}

.course-title {
  font-size: 26px;
}

.course-explanation {
  color: #666;
}

.course-image {
  height: 120px;
  display: flex;
  justify-content: center;
}
.course-logo {
  width: 100px;
}
.course-icon {
  width: 100%;
}
.course-button {
  display: inline-block;
  width: 120px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
</style>
