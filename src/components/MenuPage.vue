<template>
  <div>
    <Header />
    <main class="main-content">
      <!-- ヒーローセクション -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">ITエンジニアへの第一歩を踏み出そう</h1>
          <p class="hero-description">私たちのカリキュラムを通じて、最先端の技術を学び、スキルを磨こう！</p>
          <div class="hero-image-wrap">
            <img class="hero-image" :src="require('@/assets/images/menu/hero.jpg')" alt="hero image">
          </div>
          <a class="cta-button" @click="goToIntroducePage">カリキュラムの始め方を知る</a>
        </div>
      </section>

      <!-- ユーザーのメッセージセクション -->
      <div class="user">
        <h1 class="user-message">ようこそ{{ user.name }}さん!</h1>
      </div>

      <!-- カリキュラム案内セクション（手順セクション） -->
      <section class="flow">
        <h2 class="section-title">カリキュラムを進めるためのステップ</h2>
        <ul class="flow-list">
          <li class="flow-item"><a class="flow-link" @click="goToHowToPage">学習サイトの使い方を知ろう！</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToSetUPPage">パソコンの初期設定や使い方を学ぼう！</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToEnvironmentPage">必要なアプリのインストールや環境構築を学ぼう！</a></li>
          <li class="flow-item"><a class="flow-link" @click="goToProcedurePage">カリキュラムの始め方や提出方法を知ろう！</a></li>
        </ul>
      </section>

      <!-- コース案内セクション (Swiperスライド) -->
      <section class="courses">
        <h2 class="section-title">学べるコース</h2>
        <swiper :slides-per-view="3" :space-between="30" loop>
          <swiper-slide v-for="course in courses" :key="course.id" @click="navigateTo(course.route)">
            <div class="course-card">
              <img :src="require(`@/assets/images/menu/${course.image}`)" :alt="course.title" class="course-image">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-description">{{ course.description }}</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="course-button-container">
          <button class="course-button" @click="goToCourseMenuPage">全コースの一覧を見る</button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Swiperのスタイル
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: "MenuPage",
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const courses = [
      {
        id: 1,
        title: "HTML & CSS",
        description: "ウェブサイトの基礎を学ぼう",
        image: "html.png",
        route: "HtmlMenuPage",
      },
      {
        id: 2,
        title: "コマンドライン",
        description: "効率的にPCを操作しよう",
        image: "command-line.jpg",
        route: "CommandLineMenuPage",
      },
      {
        id: 3,
        title: "JavaScript",
        description: "動的なウェブサイトを作成しよう",
        image: "javascript.png",
        route: "JavascriptMenuPage",
      },
      {
        id: 4,
        title: "Jquery",
        description: "効率的にJavaScriptを活用しよう",
        image: "jquery.png",
        route: "JqueryMenuPage",
      },
      {
        id: 5,
        title: "Git",
        description: "バージョン管理システムを学ぼう",
        image: "git.png",
        route: "GitMenuPage",
      },
      {
        id: 6,
        title: "SQL",
        description: "データベースの操作を学ぼう",
        image: "sql.png",
        route: "SqlMenuPage",
      },
    ];

    const goToIntroducePage = () => {
      router.push({ name: "Introduce" });
    };

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

    const goToCourseMenuPage = () => {
      router.push({ name: "CourseMenu" });
    };

    const navigateTo = (route) => {
      router.push({ name: route });
    };

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    return {
      courses,
      navigateTo,
      goToIntroducePage,
      goToSetUPPage,
      goToHowToPage,
      goToEnvironmentPage,
      goToProcedurePage,
      goToCourseMenuPage,
      user: computed(() => store.state.user.loginData ? store.state.user.loginData : ''),
    };
  },
};
</script>

<style scoped>
/* Main layout */
.main-content {
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #f5f5f5;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1d1d1d, #4188b6);
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}

.hero-title {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 20px;
  margin-bottom: 30px;
}

.hero-image-wrap {
  text-align: center;
}

.hero-image {
  object-fit: cover;
  object-position: 50% 20%;
  height: 400px;
  width: 80%;
  margin: 0 auto 40px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff9800;
  color: white;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e57c00;
}

/* User Message */
.user-message {
  font-size: 24px;
  color: #4188b6;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Flow Section */
.flow {
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
}

.flow-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.flow-item {
  list-style-type: decimal;
  height: 50px;
  cursor: pointer;
}

.flow-link {
  color: #4188b6;
  font-size: 18px;
  text-decoration: none;
  border-bottom: 2px solid #4188b6;
}

.flow-link:hover {
  color: #ff9800;
  border-bottom: 2px solid #ff9800;
}

/* Courses Section */
.courses {
  padding: 60px 20px;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
}

.course-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 10px;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: scale(1.05);
}

.course-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
}

.course-button-container {
  text-align: center;
  margin-top: 30px;
}

.course-button {
  padding: 15px 40px;
  background-color: #4188b6;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.course-button:hover {
  background-color: #305f85;
}

/* Swiper Carousel Style */
.swiper-container {
  padding: 30px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

/* Media Queries */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .cta-button {
    font-size: 16px;
  }

  .course-card {
    width: 100%;
  }
}
</style>
