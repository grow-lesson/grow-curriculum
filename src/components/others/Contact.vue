<template>
  <div>
    <Header />
    <div class="contact-form">
      <h1 class="contact-title">お問い合わせ</h1>
      <form class="contact-form">
        <div class="contact-group">
          <label for="email" class="contact-label">メールアドレス:</label>
          <input type="email" id="email" class="contact-input" />
        </div>
        <div class="contact-group">
          <label for="title" class="contact-label">タイトル:</label>
          <input type="text" id="title" class="contact-input" />
        </div>
        <div class="contact-group">
          <label for="message" class="contact-label">お問い合わせ内容:</label>
          <textarea id="message" class="contact-textarea"></textarea>
        </div>
        <div class="contact-group">
          <button type="submit" class="contact-button">送信</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    return {
    };
  },
};
</script>


<style scoped>
.contact-form {
  max-width: 400px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin: 20px 0;
}

.contact-group {
  margin-bottom: 20px;
}

.contact-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.contact-input,
.contact-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.contact-button {
  padding: 10px 20px;
  background-color: #0071bb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.contact-success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #dff0d8;
  border: 1px solid #d0e9c6;
  border-radius: 4px;
  color: #3c763d;
  font-size: 16px;
}
</style>
