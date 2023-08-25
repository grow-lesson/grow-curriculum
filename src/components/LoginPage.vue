<template>
  <div class="loginPage">
    <div class="welcome-header">
      <a href="/" class="logo">GROW Learning Website</a>
    </div>
    <div class="login-container">
      <div class="login-header">
        <div>Login</div>
      </div>
      <br>
      <div class="login">
        <input v-model="email" type="text" placeholder="メールアドレス" name="email"><br>
        <input v-model="password" type="password" placeholder="パスワード" name="password"><br>
        <button @click="login">ログイン</button>
        <p class="btn-back"><a href="/">＞戻る</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/axios';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const loginData = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await api.post('/auth/sign_in', loginData, { withCredentials: true });
        
        // クッキーにアクセストークンなどを保存
        this.setCookie('access-token', response.headers['access-token']);
        this.setCookie('client', response.headers['client']);
        this.setCookie('uid', response.headers['uid']);

        this.$router.push({ name: 'MenuPage' });
      } catch (error) {
        console.error(error);
        alert('ログインエラーが発生しました');
      }
    },
    setCookie(name, value) {
      const days = 7;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      const cookieValue = encodeURIComponent(value);
      document.cookie = `${name}=${cookieValue};${expires};path=/;secure;SameSite=strict`;
    },
  },
};


</script>

<style>

.welcome-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  padding: 20px;
}

.welcome-header .logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  padding-left: 20px;
}

.loginPage {
  width: 100%;
  padding: 150px 0;
  background-color: #228bc8;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
}

.login-container {
  margin: 0 auto;
  width: 400px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2), 0 10px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  font-size: 16px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #228bc8;
}

.login {
  text-align: center;
}

.login input[type=text],
.login input[type=password] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: rgb(0 0 0 / 30%);
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.login button {
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background-color: #228bc8;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.login button:hover {
  opacity: 0.8;
}

.login button:active {
  opacity: 0.6;
}

.login input[type=text]:focus,
.login input[type=password]:focus,
.login button:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.btn-back {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
  color: #228bc8;
}

@media (max-width: 648px) {
  .login-container{
    width: 300px;
    padding: 20px 20px 100px 20px;
  }

}
</style>
