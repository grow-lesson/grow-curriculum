<template>
  <div>
    <Header />
    <div class="progress">
      <div class="progress-wrap">
        <div class="progress-header">
          <h1>進捗管理</h1>
          <p>各コースの完了したLESSON数を入力して下さい</p>
        </div>

        <!-- 初級 -->
        <div class="progress-title"><h1>初級コース</h1></div>
        <ul class="progress-bar">
          <li>
            <label for="file">コマンド</label>
            <div class="progress-sp">
              <!-- valueにセッションストレージから取得した値を設定 -->
              <progress :value="commandLineProgress / 1 * 100" max="100">{{ commandLineProgress }}%</progress>
              <input type="number" min="0" max="1" v-model="commandLineProgress" @input="updateProgress">
              <p class="ber-text">/ 1ページ</p>
            </div>
          </li>
          <li>
            <label for="file">HTMLとCSS</label>
            <div class="progress-sp">
              <progress :value="htmlProgress / 3 * 100" max="100">{{ commandLineProgress }}%</progress>
              <input type="number" min="0" max="3" v-model="htmlProgress" @input="updateProgress">
              <p class="ber-text">/ 3ページ</p>
            </div>
          </li>
          <li>
            <label for="file">Git</label>
            <div class="progress-sp">
              <progress :value="gitProgress / 5 * 100" max="100">{{ gitProgress }}%</progress>
              <input type="number" min="0" max="5" v-model="gitProgress" @input="updateProgress">
              <p class="ber-text">/ 5ページ</p>
            </div>
          </li>
        </ul>

        <!-- 中級 -->
        <div class="progress-title"><h1>中級コース</h1></div>
          <ul class="progress-bar">
            <li>
              <label for="file">JavaScript</label>
              <div class="progress-sp">
                <!-- valueにセッションストレージから取得した値を設定 -->
                <progress :value="javaScriptProgress / 1 * 100" max="100">{{ javaScriptProgress }}%</progress>
                <input type="number" min="0" max="1" v-model="javaScriptProgress" @input="updateProgress">
                <p class="ber-text">/ 1ページ</p>
              </div>
            </li>
            <li>
              <label for="file">Ruby</label>
              <div class="progress-sp">
                <progress :value="rubyProgress / 3 * 100" max="100">{{ rubyProgress }}%</progress>
                <input type="number" min="0" max="3" v-model="rubyProgress" @input="updateProgress">
                <p class="ber-text">/ 3ページ</p>
              </div>
            </li>
            <li>
              <label for="file">情報工学</label>
              <div class="progress-sp">
                <progress :value="engineeringProgress / 5 * 100" max="100">{{ engineeringProgress }}%</progress>
                <input type="number" min="0" max="5" v-model="engineeringProgress" @input="updateProgress">
                <p class="ber-text">/ 5ページ</p>
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
  data() {
    return {
      // セッションストレージから取得した値を初期値とする
      commandLineProgress: sessionStorage.getItem('commandLineProgress') || 0,
      htmlProgress: sessionStorage.getItem('htmlProgress') || 0,
      gitProgress: sessionStorage.getItem('gitProgress') || 0,
      javaScriptProgress: sessionStorage.getItem('javaScriptProgress') || 0,
      rubyProgress: sessionStorage.getItem('rubyProgress') || 0,
      engineeringProgress: sessionStorage.getItem('engineeringProgress') || 0,
    };
  },
  methods: {
    updateProgress() {
      // inputで入力された値が変更されたとき、max値を超えないように制限
      if (this.commandLineProgress < 0) {
        this.commandLineProgress = 0;
      } else if (this.commandLineProgress > 3) {
        this.commandLineProgress = 3;
      }

      // セッションストレージに値を保存
      sessionStorage.setItem('commandLineProgress', this.commandLineProgress);
      sessionStorage.setItem('htmlProgress', this.htmlProgress);
      sessionStorage.setItem('gitProgress', this.gitProgress);
      sessionStorage.setItem('javaScriptProgress', this.javaScriptProgress);
      sessionStorage.setItem('rubyProgress', this.rubyProgress);
      sessionStorage.setItem('engineeringProgress', this.engineeringProgress);
    },
  },
};
</script>

<style scoped>
.progress-wrap{
  padding: 20px 20px 60px 20px;
}

.progress-header {
  text-align: center;
}

h1, label {
  font-size: 20px;
}

p{
  font-size: 16px;
}

.progress-title{
  width: 720px;
  margin: auto;
  margin-top: 100px;
  position: relative;
  left: -30px;
}

/* プログレスバー */
.progress-bar{
  width: 720px;
  margin: 0 auto;
}

.progress-sp{
  display: flex;
}

.progress-bar li{
  display: flex;
  margin-top: 30px;
}

.progress-bar label {
  display: block;
  width: 180px;
  margin-right: 20px;
  vertical-align: middle;
}

.progress-bar input{
  width: 60px;
  padding: 4px 8px;
  margin-right: 10px;
  border: 0.5px solid #1C4977;
  border-radius: 5px;
  background-color: #e5f0f8;
  align-items: center;
}

.ber-text{
  margin: auto 0;
}

progress {
  width: 300px;
  height: 30px;
  margin: auto 20px auto 0;
  border-radius: 15px;
  background-color: #e5f0f8;
  vertical-align: middle;
}

progress::-webkit-progress-bar {
  border-radius: 15px;
  background-color: #e5f0f8;
}

progress::-webkit-progress-value {
  border-radius: 15px;
  background-color: #1C4977;
}

progress::-moz-progress-bar {
  border-radius: 15px;
  background-color: #1C4977;
}

progress::-ms-fill {
  border-radius: 15px;
  background-color: #1C4977;
}

@media (max-width: 834px) {
  .progress-bar, .progress-title{
    width: auto;
  }

  .progress-title{
    left: 0;
    margin-top: 50px;
  }

  .progress-bar{
    width: 90%;
  }

  .progress-bar li{
    display: block;
  }

  .progress-sp{
    margin: 10px auto 0 auto;
  }

  progress{
    width: calc(100% - 157px);
  }
}

@media (max-width: 425px) {
  .progress-bar{
    width: 100%;
    margin: 0;
  }
}
</style>
