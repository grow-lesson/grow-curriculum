<template>
  <div class="signup-page">
    <div class="welcome-header">
      <a href="/" class="logo">GROW Learning Website</a>
    </div>
    <div class="signup-container">
      <div class="signup-header">
        <div>Signup</div>
      </div>
      <br>
      <div class="signup">
        <input v-model="username" type="text" placeholder="ユーザー名" name="user"><br>
        <input v-model="password" type="password" placeholder="パスワード" name="password"><br>
        <button @click="signup">新規登録</button>
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
    signup() {
      const signupData = {
        name: this.username,
        password: this.password
      };

      axios.post('/api/signup', signupData)
        .then(response => {
          // ログイン成功時の処理
          if (response.status === 200) {
            alert('登録が完了しました')
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

.signup-page {
  width: 100%;
  height: 100vh;
  background-color: #228bc8;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
}

.signup-container {
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

.signup-header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #228bc8;
  font-family: 'Exo', sans-serif;
}

.signup {
  text-align: center;
}

.signup input[type=text],
.signup input[type=password] {
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

.signup button {
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

.signup button:hover {
  opacity: 0.8;
}

.signup button:active {
  opacity: 0.6;
}

.signup input[type=text]:focus,
.signup input[type=password]:focus,
.signup button:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 648px) {
  .signup-container{
    width: 300px;
    padding: 20px 20px 100px 20px;
  }

}
</style>
