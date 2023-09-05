<template>
  <div>
    <Header />
    <main class="main-content">
      <div class="user">
        <h1 class="user-message">ようこそ{{ user.name }}さん!</h1>
      </div>
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">カリキュラムの流れ</h1>
        </div>
      </div>
      <section class="flow">
        <h2 class="flow-title">フロントエンドの基礎を学ぼう！</h2>
        <ul class="flow-list">
          <li class="flow-item"><a href="#" class="flow-link">Grow学習サイトの使い方</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToEnvironmentPage">インストールや環境構築の手順を知る</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToProcedurePage">Growカリキュラムの始め方</a></li>
        </ul>
      </section>
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">初級コース</h1>
        </div>
      </div>
      <section class="course">
        <div class="course-item">
          <h2 class="course-title">コマンドライン</h2>
          <p class="course-explanation">ファイル・フォルダの作成や編集・移動・削除を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/command-line.jpg" class="course-icon" alt="commandline" />
            </div>
          </div>
          <a class="course-button" @click="goToCommandLineMenuPage">受講する</a>
        </div>
        <div class="course-item">
          <h2 class="course-title">HTML・CSS</h2>
          <p class="course-explanation">ウェブサイトの作成に必要な骨組みやデザインを学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/html.png" class="course-icon" alt="html" />
            </div>
            <div class="course-logo">
              <img src="../assets/images/menu/css.png" class="course-icon" alt="css" />
            </div>
          </div>
          <a class="course-button" @click="goToHtmlMenuPage">受講する</a>
        </div>
        <div class="course-item">
          <h2 class="course-title">Git</h2>
          <p class="course-explanation">ソースプログラムなどを保存・共有を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/git.png" class="course-icon" alt="git" />
            </div>
          </div>
          <a class="course-button" @click="goToGitMenuPage">受講する</a>
        </div>
      </section>
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">中級コース</h1>
        </div>
      </div>
      <section class="course">
        <div class="course-item">
          <h2 class="course-title">Javascript</h2>
          <p class="course-explanation">Webサイトの動的な仕組みを作るのに必要な知識が学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/javascript.png" class="course-icon" alt="javascript" />
            </div>
          </div>
          <a class="course-button" @click="goToJavaScriptMenuPage">受講する</a>
        </div>
        <div class="course-item">
          <h2 class="course-title">Ruby</h2>
          <p class="course-explanation">オブジェクト指向を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/ruby.png" class="course-icon" alt="ruby" />
            </div>
          </div>
          <a class="course-button" @click="goToRubyMenuPage">受講する</a>
        </div>
        <div class="course-item">
          <h2 class="course-title">情報工学</h2>
          <p class="course-explanation">情報技術者に必要な基本的な知識を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/information-technology.png" class="course-icon" alt="information-technology" />
            </div>
          </div>
          <a class="course-button" @click="goToITMenuPage">受講する</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: "MenuPage",
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const login = computed(() => store.state.user.loginData);
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
      router.push({ name: "UnderConstruction" });
    };
    const goToRubyMenuPage = () => {
      router.push({ name: "UnderConstruction" });
    };
    const goToITMenuPage = () => {
      router.push({ name: "UnderConstruction" });
    };
    const goToEnvironmentPage = () => {
      router.push({ name: "Environment" });
    };
    const goToProcedurePage = () => {
      router.push({ name: "Procedure" });
    };

    return {
      login,
      user: computed(() => login.value ? login.value : ''),
      goToHtmlMenuPage,
      goToCommandLineMenuPage,
      goToGitMenuPage,
      goToJavaScriptMenuPage,
      goToRubyMenuPage,
      goToITMenuPage,
      goToEnvironmentPage,
      goToProcedurePage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.user-message {
  font-size: 18px;
  color: #3498db;
  text-align: left;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 20px auto;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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

/* flow */
.flow {
  margin: 0 auto;
  height: 300px;
  background-color: #fff;
}
.flow-title {
  font-size: 26px;
  text-align: center;
}

.flow-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border: 1px solid #5492f5;
}
.flow-item {
  list-style-type: decimal;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
}
.flow-link {
  color: #666;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 3px solid #5492f5;
}
/* course */
.course {
  display: flex;
  justify-content: space-around;
  padding: 60px;
  background-color: #fff;
}
.course-title {
  text-align: center;
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
  text-align: center;
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
  text-align: center;
  width: 120px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
}
@media (max-width: 648px) {
  /* Hero */
  .hero {
    padding: 10px;
  }

  .hero-title {
    font-size: 24px;
    margin: auto;
  }

  /* flow */
  .flow {
    margin: 0 auto;
    height: auto;
    background-color: #fff;
    padding: 20px;
  }

  .flow-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }

  .flow-list {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: 1px solid #5492f5;
    padding: 10px;
  }

  .flow-item {
    list-style-type: decimal;
    height: auto;
    margin-top: 10px;
    padding: 5px;
    font-size: small;
  }

  .flow-link {
    color: #666;
    font-size: small;
    text-decoration: none;
    border-bottom: 2px solid #5492f5;
  }

  /* course */
  .course {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    background-color: #fff;
  }

  .course-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }

  .course-title {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  .course-explanation {
    text-align: center;
    color: #666;
    margin-bottom: 10px;
  }

  .course-image {
    height: 120px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .course-logo {
    width: 80px;
    margin: 0 5px;
  }

  .course-icon {
    width: 100%;
  }

  .course-button {
    display: inline-block;
    text-align: center;
    width: 120px;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #4285f4;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
  }
}
</style>
