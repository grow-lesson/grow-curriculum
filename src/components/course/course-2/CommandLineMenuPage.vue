<template>
  <div class="wrap">
    <Header />
    <div class="lesson-container">
      <div class="lesson-title">
        <div class="breadcrumb">
          <a href="/course-menu">初級コース</a> > コマンドライン
        </div>
        <h1 class="lesson-heading">コマンドライン</h1>
      </div>
      <div class="lesson-sidebar"></div>
      <div class="lesson-main">
        <ul class="lesson-list">
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson1.png" alt="lesson1" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson1-sp.png" alt="lesson1" />
              </div>
              <div class="lesson-itemText">
                <p>ターミナルの基本的な操作とコマンドの使用方法を学びます。</p>
              </div>
              <!-- lesson-btn の div 全体をクリック可能に -->
              <div class="lesson-btn btn" @click="goToPageLesson1"></div>
            </div>
          </li>
        </ul>
      </div>
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
  methods: {
    goToPageLesson1() {
      this.$router.push({ name: "CommandLinePage1" });
    },
  },
};
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
  cursor: pointer; /* ボタン全体がクリック可能になる */
}

.lesson-btn::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-top: 4px solid #a8dadc;
  border-left: 4px solid #a8dadc;
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
