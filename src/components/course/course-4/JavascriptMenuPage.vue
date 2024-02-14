<template>
  <div>
    <Header />
    <div class="lesson-container">
      <div class="lesson-title">
        <div class="breadcrumb">
          <a href="/menu">中級コース</a> > Javascriptコースを選ぼう
        </div>
        <h1 class="lesson-heading">Javascriptコースを選ぼう</h1>
      </div>
      <div class="lesson-sidebar"></div>
      <div class="lesson-main">
        <ul class="lesson-list">
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemTitle">LESSON 1</div>
              <p class="lesson-itemText">Javascriptの概要と算術演算子について学びます</p>
              <div class="lesson-btn btn">
                <a class="lesson-link btn" @click="goToPageLesson1"></a>
              </div>
            </div>
          </li>
          <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON 2</div>
                <p class="lesson-itemText">Javascriptの条件式について学びます。</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson2"></a>
                </div>
              </div>
            </li>
            <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON 3</div>
                <p class="lesson-itemText">Javascriptの配列について学びます。</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson3"></a>
                </div>
              </div>
            </li>
            <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON 4</div>
                <p class="lesson-itemText">Javascriptの繰り返し文について学びます。</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson4"></a>
                </div>
              </div>
            </li>
            <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON 5</div>
                <p class="lesson-itemText">Javascriptのオブジェクトについて学びます。</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson5"></a>
                </div>
              </div>
            </li>
            <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON 6</div>
                <p class="lesson-itemText">Javascriptの関数について学びます。</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson6"></a>
                </div>
              </div>
            </li>
            <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/images/menu/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON 7</div>
                <p class="lesson-itemText">JavascriptのDOM操作について学びます。</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson7"></a>
                </div>
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
      this.$router.push({ name: "JavascriptPage1" });
    },
    goToPageLesson2() {
      this.$router.push({ name: "JavascriptPage2" });
    },
    goToPageLesson3() {
      this.$router.push({ name: "JavascriptPage3" });
    },
    goToPageLesson4() {
      this.$router.push({ name: "JavascriptPage4" });
    },
    goToPageLesson5() {
      this.$router.push({ name: "JavascriptPage5" });
    },
    goToPageLesson6() {
      this.$router.push({ name: "JavascriptPage6" });
    },
    goToPageLesson7() {
      this.$router.push({ name: "JavascriptPage7" });
    },
  },
};
</script>

<style scoped>
.lesson-container {
  margin: 0 auto;
  /* max-width: 600px; */
}

.breadcrumb{
  margin-left: 10%;
}

.lesson-title{
  width: 100%;
  padding: 30px 0;
  margin: 1rem 0;
  background-color: #E5F0F8;
}

.lesson-heading {
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em;
}

.lesson-list {
  /* display: grid; */
  justify-content: center;
  list-style: none;
  /* padding-left: 0; */
  padding: 50px 0px;
}

.lesson-item {
  width: 675px;
  height: 170px;
  margin: 0 auto 25px auto;
  display: flex;
}

.lesson-itemImg{
  width: 25%;
  height: 100%;
  background-color: #FFFFFF;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.lesson-itemImg img{
  widows: 100%;
  height: 100%;
}

.lesson-itemWrap{
  width: 75%;
  height: 100%;
  padding: 20px 50px;
  background-color: #1C4977;
  position: relative;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.lesson-itemTitle{
  color: #E6EFF7;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.lesson-itemText{
  width: 80%;
  color: #E6EFF7;
}

.lesson-btn{
  width:60px;
  height:60px;
  line-height:90px;
  position: absolute;
  bottom: 25px;
  right: 50px;
}
.lesson-btn a{
  display:block;
  width:100%;
  height:100%;
  text-decoration: none;
  background:#1C4977;
  text-align:center;
  border:4px solid #E6EFF7;
  color:#FFFFFF;
  font-size:20px;
  font-weight:bold;
  border-radius:50px;
  -webkit-border-radius:50px;
  -moz-border-radius:50px;
}
.lesson-btn a:hover{
  background:#2F69A9;
  color:#FFFFFF;
  margin-left:0px;
  margin-top:5px;
  border:4px solid #E6EFF7;
  box-shadow:none;
}

.lesson-btn a::before{
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-top: 4px solid #fff;
  border-left: 4px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  right: calc(50% - 5px);
  top: calc(50% - 10px);
}

.lesson-btn:hover a::before {
  margin-left: 0;
  margin-top: 5px;
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
  .lesson-btn a::before{
    width: 15px;
    height: 15px;
    top: calc(50% - 7px);
  }
}

</style>
