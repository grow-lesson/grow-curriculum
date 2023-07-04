<template>
  <div class="loginPage">
    <div class="welcome-header">
      <a href="/" class="logo">Grow 学習サイト</a>
    </div>
    <div class="login-container">
      <div class="login-header">
        <div>Login</div>
      </div>
      <br>
      <div class="login">
        <input v-model="username" type="text" placeholder="ユーザー名" name="user"><br>
        <input v-model="password" type="password" placeholder="パスワード" name="password"><br>
        <button @click="login">ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const loginData = {
        name: this.username,
        password: this.password
      };

      axios.post('/api/login', loginData)
        .then(response => {
          // ログイン成功時の処理
          if (response.status === 200) {
            this.$router.push({ name: 'MenuPage' }); // メニューページに遷移
          } else {
            alert('ログインエラー: ユーザー名またはパスワードが一致しません');
          }
        })
        .catch(error => {
          // エラーハンドリング
          console.error(error);
          alert('ログインエラーが発生しました');
        });
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@100;200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700;400;300&display=swap');

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
  height: 100vh;
  background-color: #228bc8;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px 40px 100px 40px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2), 0 10px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 10px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #228bc8;
  font-family: 'Exo', sans-serif;
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
  border: 1px solid black;
  border-radius: 4px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.login button {
  width: 100%;
  padding: 10px;
  background-color: #228bc8;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: 'Exo', sans-serif;
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

@media (max-width: 648px) {
  .login-container{
    width: 300px;
    padding: 20px 20px 100px 20px;
  }

}
</style>
