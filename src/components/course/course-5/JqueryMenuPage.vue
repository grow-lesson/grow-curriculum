<template>
  <div class="wrap">
    <Header />
    <div class="lesson-container">
      <div class="lesson-title">
        <div class="breadcrumb">
          <a href="/course-menu">中級コース</a> > JQuery
        </div>
        <h1 class="lesson-heading">JQuery</h1>
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
                <p>JQueryの概要と基本的なDOM操作を学びます。</p>
              </div>
              <!-- lesson-btn の div 全体をクリック可能に -->
              <div class="lesson-btn btn" @click="goToPageLesson1"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson2.png" alt="lesson2" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson2-sp.png" alt="lesson2" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのテンプレートリテラルと条件式・if文・for文、URLと日付の出力やアラートについて学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson2"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson3.png" alt="lesson3" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson3-sp.png" alt="lesson3" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのモーダルの作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson3"></div>
            </div>
          </li>
          <!-- 以降のボタンも同様に修正 -->
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson4.png" alt="lesson4" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson4-sp.png" alt="lesson4" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのタブメニューの作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson4"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson5.png" alt="lesson5" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson5-sp.png" alt="lesson5" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのツールチップの作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson5"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson6.png" alt="lesson6" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson6-sp.png" alt="lesson6" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryの文字チェッカーの作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson6"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson7.png" alt="lesson7" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson7-sp.png" alt="lesson7" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのスライドショーの作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson7"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson8.png" alt="lesson8" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson8-sp.png" alt="lesson8" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのフリックの作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson8"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson9.png" alt="lesson9" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson9-sp.png" alt="lesson9" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryの神経衰弱の作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson9"></div>
            </div>
          </li>
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson10.png" alt="lesson10" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemImg-sp">
                <img src="../../../assets/images/menu/lesson10-sp.png" alt="lesson10" />
              </div>
              <div class="lesson-itemText">
                <p>JQueryのAPI実装の作り方について学びます。</p>
              </div>
              <div class="lesson-btn btn" @click="goToPageLesson10"></div>
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
      this.$router.push({ name: "JqueryPage1" });
    },
    goToPageLesson2() {
      this.$router.push({ name: "JqueryPage2" });
    },
    goToPageLesson3() {
      this.$router.push({ name: "JqueryPage3" });
    },
    goToPageLesson4() {
      this.$router.push({ name: "JqueryPage4" });
    },
    goToPageLesson5() {
      this.$router.push({ name: "JqueryPage5" });
    },
    goToPageLesson6() {
      this.$router.push({ name: "JqueryPage6" });
    },
    goToPageLesson7() {
      this.$router.push({ name: "JqueryPage7" });
    },
    goToPageLesson8() {
      this.$router.push({ name: "JqueryPage8" });
    },
    goToPageLesson9() {
      this.$router.push({ name: "JqueryPage9" });
    },
    goToPageLesson10() {
      this.$router.push({ name: "JqueryPage10" });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.wrap{
  min-height: 100vh;
}

.lesson-container {
  margin: 0 auto;
  color: #101010;
}

.breadcrumb{
  margin-left: 10%;
}

.lesson-title{
  width: 100%;
  padding: 30px 0;
  margin: 1rem 0;
  background-color: #FFF;
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

.lesson-itemImg{
  height: 100%;
  padding: 30px;
  background-color: #FFFFFF;
  margin-right: 10px;
}

.lesson-itemImg img{
  widows: 100%;
  height: 100%;
}

.lesson-itemWrap{
  width: 75%;
  padding: 30px 50px;
  background-color: #fff;
  position: relative;
}

.lesson-itemText{
  width: 80%;
  height: 52px;
  color: #101010;
}

.lesson-btn{
  width:60px;
  height:60px;
  line-height:90px;
  position: absolute;
  bottom: 25px;
  right: 50px;
  cursor: pointer; /* クリック可能にするためのスタイル */
}

.lesson-btn::before{
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-top: 4px solid #A8DADC;
  border-left: 4px solid #A8DADC;
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
  .lesson-itemImg-sp{
    display: none;
  }
}

@media (max-width: 648px) {
  .lesson-heading{
    font-size: 1.5rem;
  }

  .lesson-list {
    padding: 0; /* Remove padding to ensure the list takes full width */
    display: flex; /* Use flexbox to center the lesson items */
    flex-direction: column; /* Stack the items vertically */
    align-items: center; /* Center items horizontally */
  }

  .lesson-item {
    width: 90%; /* Make the items take full width */
    height: 150px;
    max-width: 400px; /* Set a maximum width for the items */
    margin: 0 auto 25px auto;
  }

  .lesson-itemWrap {
    width: 100%; /* Make the wrapping div take full width */
    border-radius: 5px;
    padding: 20px 20px;
  }

  .lesson-itemImg {
    display: none;
  }
  .lesson-itemImg-sp{
    margin-bottom: 10px;
  }
  .lesson-itemImg-sp img{
    width: 118px;
    height: 29px;
  }
  .lesson-itemTitle{
    font-size: 1.0rem;
  }
  .lesson-itemText{
    font-size: small;
  }
  /* Adjust button positioning */
  .lesson-btn {
    width: 40px;
    height: 40px;
    right: 10px;
    left: auto;
  }
  .lesson-btn::before{
    width: 15px;
    height: 15px;
    top: calc(50% - 7px);
  }
}
</style>
