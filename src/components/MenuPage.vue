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
        <swiper :slides-per-view="slidesPerView" :space-between="30" loop>
          <swiper-slide v-for="course in courses" :key="course.id">
            <div class="course-card"  @click="navigateTo(course.route)">
              <img :src="require(`@/assets/images/menu/${course.image}`)" :alt="course.title" class="course-image">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-description">{{ course.description }}</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="button-container">
          <button class="view-all-button" @click="goToCourseMenuPage">全コースの一覧を見る</button>
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
import { computed, onMounted, ref } from 'vue';
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
    const slidesPerView = ref(3); // デフォルトは3つ表示

    // 画面サイズに応じたスライド数を設定
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width <= 425) {
        slidesPerView.value = 1;
      } else if (width <= 834) {
        slidesPerView.value = 2;
      } else {
        slidesPerView.value = 3;
      }
    };

    // 初期表示時とリサイズ時にスライド数を更新
    onMounted(() => {
      updateSlidesPerView();
      window.addEventListener('resize', updateSlidesPerView);
    });

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
      {
        id: 7,
        title: "Photoshop",
        description: "画像編集のスキルを学ぼう",
        image: "photoshop.png",
        route: "PhotoshopMenuPage",
      },
      {
        id: 8,
        title: "デザイン基礎",
        description: "色彩と画面構成のスキルを学ぼう",
        image: "DesignBasic.png",
        route: "DesignBasicMenuPage",
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

    return {
      courses,
      navigateTo,
      goToIntroducePage,
      goToSetUPPage,
      goToHowToPage,
      goToEnvironmentPage,
      goToProcedurePage,
      goToCourseMenuPage,
      slidesPerView,
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
  max-width: 1200px; /* セクション幅を制限して中央揃え */
  text-align: center;
}

.flow-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* リストアイテムを左揃えにする */
  margin: 0 auto;
  padding: 0;
  list-style-type: none; /* リストマーカーを消す */
}

.flow-item {
  width: 100%;
  padding: 15px 0; /* 上下の余白を確保 */
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #ddd; /* 区切り線を追加 */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.flow-item:hover {
  background-color: #f9f9f9; /* ホバー時に背景色を変更 */
}

.flow-link {
  color: #4188b6;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.flow-link:hover {
  color: #ff9800; /* ホバー時に色を変更 */
  border-bottom: 2px solid #ff9800; /* 下線もホバー時に表示 */
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
  transform: scale(1.05); /* ホバー時にカードを拡大 */
}

.course-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
}

.button-container {
  text-align: center;
  margin-top: 30px;
}

.view-all-button {
  padding: 10px 20px;
  background-color: #4188b6;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-all-button:hover {
  background-color: #2a6b93; /* ホバー時の色変更 */
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
  .hero-image {
    height: 300px;
  }
}

/* SP版用のスタイル */
@media (max-width: 425px) {
  /* Hero Section */
  .hero-title {
    font-size: 22px; /* タイトルを少し小さく */
  }

  .hero-image {
    height: 150px;
  }

  .hero-description {
    font-size: 16px; /* 説明文の文字サイズを調整 */
  }

  .cta-button {
    font-size: 16px; /* ボタンの文字サイズを小さく */
  }

  /* User Message */
  .user-message {
    font-size: 20px; /* ユーザーメッセージの文字サイズを調整 */
  }

  /* Flow Section */
  .flow-item {
    font-size: 16px; /* リストアイテムの文字を少し小さく */
  }

  .flow-link {
    font-size: 13px; /* リンクテキストを少し小さく */
  }

  /* Courses Section */
  .section-title {
    font-size: 28px; /* コースのタイトルサイズを少し小さく */
  }

  .view-all-button {
    width: 90%; /* ボタン幅を調整 */
  }
}
</style>
