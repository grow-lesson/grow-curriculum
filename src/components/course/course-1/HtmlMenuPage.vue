<template>
  <div>
    <Header />
    <div class="lesson-container">
      <div class="lesson-title">
        <div class="breadcrumb">
          <a href="">初級コース</a> > HTML・CSSコースを選ぼう
        </div>
        <h1 class="lesson-heading">HTML・CSSコースを選ぼう</h1>
      </div>
      <div class="lesson-sidebar"></div>
      <div class="lesson-main">
        <ul class="lesson-list">
          <li class="lesson-item">
            <div class="lesson-itemImg">
              <img src="../../../assets/lesson-menu.png" alt="SAMPLE" />
            </div>
            <div class="lesson-itemWrap">
              <div class="lesson-itemTitle">LESSON１</div>
              <p class="lesson-itemText">全角６０字までサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテ</p>
              <div class="lesson-btn btn">
                <a class="lesson-link btn" @click="goToPageLesson1"></a>
              </div>
            </div>
          </li>
          <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON２</div>
                <p class="lesson-itemText">全角６０字までサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテ</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson2"></a>
                </div>
              </div>
            </li>
            <li class="lesson-item">
              <div class="lesson-itemImg">
                <img src="../../../assets/lesson-menu.png" alt="SAMPLE" />
              </div>
              <div class="lesson-itemWrap">
                <div class="lesson-itemTitle">LESSON３</div>
                <p class="lesson-itemText">全角６０字までサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテ</p>
                <div class="lesson-btn btn">
                  <a class="lesson-link btn" @click="goToPageLesson3"></a>
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
      this.$router.push({ name: "HtmlPage1" });
    },
    goToPageLesson2() {
      this.$router.push({ name: "HtmlPage2" });
    },
    goToPageLesson3() {
      this.$router.push({ name: "HtmlPage3" });
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
  margin-left: 100px;
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
  padding: 50px 100px;
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

</style>
