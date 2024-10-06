<template>
  <div class="wrap">
    <Header />
    <div class="lesson-container">
      <div class="lesson-title">
        <div class="breadcrumb">
          <a href="/course-menu">デザインコース</a> > デザイン基礎
        </div>
        <h1 class="lesson-heading">デザイン基礎</h1>
      </div>
      <div class="lesson-sidebar"></div>
      <div class="lesson-main">
        <ul class="lesson-list">
          <li class="lesson-item" v-for="(lesson, index) in lessons" :key="index">
            <div class="lesson-itemImg">
              <img :src="getImageUrl(lesson.img)" :alt="lesson.alt" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img :src="getImageUrl(lesson.imgSp)" :alt="lesson.alt" />
              </div>
              <div class="lesson-itemText">
                <p>{{ lesson.text }}</p>
              </div>
              <div class="lesson-btn btn" @click="goToPage(lesson.pageName)"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
    <Spinner :isLoading="isLoading" /> <!-- スピナーを isLoading フラグで制御 -->
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Spinner from "@/components/Spinner.vue"; // スピナーをインポート

export default defineComponent({
  components: {
    Header,
    Footer,
    Spinner,  // スピナーをコンポーネントとして追加
  },
  setup() {
    const router = useRouter();

    const lessons = [
      { img: require("@/assets/images/menu/lesson1.png"), imgSp: require("@/assets/images/menu/lesson1-sp.png"), alt: "lesson1", text: "色彩について学びます。", pageName: "DesignBasicPage1" },
      { img: require("@/assets/images/menu/lesson2.png"), imgSp: require("@/assets/images/menu/lesson2-sp.png"), alt: "lesson2", text: "画面構成ついて学びます。", pageName: "DesignBasicPage2" },
      { img: require("@/assets/images/menu/lesson3.png"), imgSp: require("@/assets/images/menu/lesson3-sp.png"), alt: "lesson3", text: "最終課題", pageName: "DesignBasicPage3" },
    ];

    const getImageUrl = (img) => {
      return img;
    };

    const isLoading = ref(false);  // ローディング状態のフラグ

    const toggleOS = () => {
      isLoading.value = true;  // スピナーを表示
    };

    const goToPage = (pageName) => {
      toggleOS();  // スピナーを表示
      router.push({ name: pageName });  // ページ遷移
    };

    return {
      lessons,
      getImageUrl,
      goToPage,
      isLoading
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
});
</script>

<style scoped>
.wrap {
  min-height: 100vh;
  color: #101010;
}

.lesson-container {
  margin: 0 auto;
}

.breadcrumb {
  margin-left: 10%;
}

.lesson-title {
  width: 100%;
  padding: 30px 0;
  margin: 1rem 0;
  background-color: #fff;
}

.lesson-heading {
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
}

.lesson-list {
  justify-content: center;
  list-style: none;
  padding: 50px 0;
}

.lesson-item {
  width: 675px;
  height: 150px;
  margin: 0 auto 25px auto;
  display: flex;
}

.lesson-itemImg {
  height: 100%;
  padding: 30px;
  background-color: #ffffff;
  margin-right: 10px;
}

.lesson-itemImg img {
  width: 100%;
  height: 100%;
}

.lesson-itemWrap {
  width: 75%;
  padding: 30px 50px;
  background-color: #fff;
  position: relative;
}

.lesson-itemText {
  width: 80%;
  height: 52px;
  color: #101010;
}

.lesson-btn {
  width: 60px;
  height: 60px;
  line-height: 90px;
  position: absolute;
  bottom: 25px;
  right: 50px;
  cursor: pointer;
  background: linear-gradient(135deg, #3498db, #2ecc71); /* モダンな青緑のグラデーション */
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lesson-btn:hover {
  background: linear-gradient(135deg, #a8d0fa, #8ef9c7); /* ホバー時に洗練された赤系のグラデーションに変更 */
  transform: scale(1.1);
}

.lesson-btn:active {
  transform: scale(0.95);
}

.lesson-btn::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-top: 4px solid #ffffff;
  border-left: 4px solid #ffffff;
  transform: rotate(135deg);
  position: absolute;
  right: calc(50% - 5px);
  top: calc(50% - 10px);
}

.lesson-btn:hover::before {
  margin-left: 0;
  margin-top: 5px;
}

@media (min-width: 649px) {
  .lesson-itemImg-sp {
    display: none;
  }
}

@media (max-width: 648px) {
  .lesson-heading {
    font-size: 1.5rem;
  }

  .lesson-list {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lesson-item {
    width: 90%;
    height: 150px;
    max-width: 400px;
    margin: 0 auto 25px auto;
  }

  .lesson-itemWrap {
    width: 100%;
    border-radius: 5px;
    padding: 20px 20px;
  }

  .lesson-itemImg {
    display: none;
  }

  .lesson-itemImg-sp {
    margin-bottom: 10px;
  }

  .lesson-itemImg-sp img {
    width: 118px;
    height: 29px;
  }

  .lesson-itemText {
    font-size: small;
  }

  .lesson-btn {
    width: 40px;
    height: 40px;
    right: 10px;
    left: auto;
  }

  .lesson-btn::before {
    width: 15px;
    height: 15px;
    top: calc(50% - 7px);
  }
}
</style>
