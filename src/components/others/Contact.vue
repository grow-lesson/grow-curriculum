<template>
  <div>
    <Header />
    <div class="contact-form">
      <h1>お問い合わせ</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">お名前:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">メールアドレス:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">メッセージ:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit">送信</button>
        </div>
      </form>
      <div v-if="submitted" class="success-message">
        <p>お問い合わせありがとうございます。ご連絡をお待ちください。</p>
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
      name: "",
      email: "",
      message: "",
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      // ここでお問い合わせフォームのデータを送信する処理を行います
      // 例えば、APIリクエストを実行したり、データベースに保存したりします
      console.log("お名前:", this.name);
      console.log("メールアドレス:", this.email);
      console.log("メッセージ:", this.message);

      // フォームの送信後、submittedフラグをtrueに設定して、送信完了メッセージを表示します
      this.submitted = true;

      // フォームをリセットします
      this.resetForm();
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  height: 100vh;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin: 40px 0;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #dff0d8;
  border: 1px solid #d0e9c6;
  border-radius: 4px;
  color: #3c763d;
}
</style>
