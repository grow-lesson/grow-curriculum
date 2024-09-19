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
        <ul class="flow-list">
          <li class="flow-item"><a class="flow-link" @click="goToHowToPage">学習サイトの使い方</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToSetUPPage">PCの初期設定や使い方を学ぶ</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToEnvironmentPage">インストールや環境構築の手順を知る</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToProcedurePage">カリキュラムの始め方</a></li>
        </ul>
      </section>
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">初級コース</h1>
        </div>
      </div>
      <section class="course">
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
          <h2 class="course-title">コマンドライン</h2>
          <p class="course-explanation">ファイル・フォルダの作成や編集・移動・削除を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/command-line.jpg" class="course-icon" alt="commandline" />
            </div>
          </div>
          <a class="course-button" @click="goToCommandLineMenuPage">受講する</a>
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
          <h2 class="course-title">jQuery</h2>
          <p class="course-explanation">動的な操作とイベント処理、コードの効率性を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/jquery.png" class="course-icon" alt="jquery" />
            </div>
          </div>
          <a class="course-button" @click="goToJqueryMenuPage">受講する</a>
        </div>
      </section>
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">発展コース</h1>
        </div>
      </div>
      <section class="course">
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
        <div class="course-item">
          <h2 class="course-title">SQL</h2>
          <p class="course-explanation">データベース操作を学べるコース</p>
          <div class="course-image">
            <div class="course-logo">
              <img src="../assets/images/menu/sql.png" class="course-icon" alt="SQL" />
            </div>
          </div>
          <a class="course-button" @click="goToSQLMenuPage">受講する</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { computed, onMounted } from 'vue';
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

    const goToSetUPPage = () => {
      router.push({ name: "Setup" });
    };

    const goToHowToPage = () => {
      router.push({ name: "HowTo" });
    };

    const goToEnvironmentPage = () => {
      router.push({ name: "Environment" });
    };

    const goToProcedurePage = () => {
      router.push({ name: "Procedure" });
    };

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

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      login,
      user: computed(() => login.value ? login.value : ''),
      goToSetUPPage,
      goToHowToPage,
      goToEnvironmentPage,
      goToProcedurePage,
      goToHtmlMenuPage,
      goToCommandLineMenuPage,
      goToGitMenuPage,
      goToJavaScriptMenuPage,
      goToSQLMenuPage,
      goToJqueryMenuPage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}

.user-message {
  font-size: 20px;
  color: #4188b6;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 20px auto;
  width: 80%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Hero */
.hero {
  background-color: #f9f9f9;
  padding: 30px;
  text-align: center;
}

.hero-title {
  font-size: 36px;
  margin-top: 20px;
}

/* flow */
.flow {
  margin: 0 auto;
  background-color: #fff;
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
  cursor: pointer;
}
.flow-item:first-child {
  margin-top: 20px;
}
.flow-item:not(:first-child) {
  margin-top: 30px;
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

.course-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
}

.course-title {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
}

.course-explanation {
  text-align: center;
  color: #383838;
  padding: 30px 0;
  font-size: 20px;
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
  width: 200px;
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
    padding: 5px;
    font-size: small;
  }

  .flow-item:first-child {
    margin-top: 10px;
  }
  .flow-item:not(:first-child) {
    margin-top: 20px;
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
    color: #383838;
    font-size: small;
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
    width: 100%;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #4285f4;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
  }
}
</style>
