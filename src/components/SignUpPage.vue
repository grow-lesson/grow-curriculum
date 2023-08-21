<template>
  <div class="signup-page">
    <div class="welcome-header">
      <a href="/" class="logo">GROW Learning Website</a>
    </div>
    <div class="signup-container">
      <div class="signup-header">
        <div>Sign up</div>
      </div>
      <br>
      <div class="signup">
        <input v-model="username" type="text" placeholder="ユーザー名" name="username"><br>
        <div class="signup-name">
          <input v-model="lastName" type="text" placeholder="姓" name="lastName"><br>
          <input v-model="firstName" type="text" placeholder="名" name="firstName"><br>
        </div>
        <div class="signup-name-kana">
          <input v-model="lastNameKana" type="text" placeholder="姓(カナ)" name="lastNameKana"><br>
          <input v-model="firstNameKana" type="text" placeholder="名(カナ)" name="firstNameKana"><br>
        </div>
        <input v-model="email" type="text" placeholder="メールアドレス" name="email"><br>
        <input v-model="password" type="password" placeholder="パスワード" name="password"><br>
        <input v-model="confirmPassword" type="password" placeholder="確認用パスワード" name="confirmPassword"><br>
        <button @click="signup">新規登録</button>
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
      username: "",
      lastName: "",
      firstName: "",
      lastNameKana: "",
      firstNameKana: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    signup() {
      const signupData = {
        name: this.name,
        last_name: this.lastName,
        first_name: this.firstName,
        last_name_kana: this.lastNameKana,
        first_name_kana: this.firstNameKana,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
      };

      api.post('/auth', signupData)
        .then(response => {
          // 登録成功時の処理
          if (response.status === 200) {
            alert('登録が完了しました');
            this.$router.push({ name: 'MenuPage' }); // メニューページに遷移
          } else {
            alert('登録エラーが発生しました');
          }
        })
        .catch(error => {
          // エラーハンドリング
          console.error(error);
          alert('登録エラーが発生しました');
        });
    }
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

.signup-page {
  width: 100%;
  padding: 150px 0;
  background-color: #228bc8;
  font-size: 12px;
}

.signup-container {
  margin: 0 auto;
  width: 400px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2), 0 10px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  font-size: 16px;
}

.signup-header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #228bc8;
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
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.signup-name {
  display: flex;
}

.signup-name-kana {
  display: flex;
}

.signup-name input:first-child, .signup-name-kana input:first-child {
  margin-right: 10px;
}

.signup button {
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

.btn-back {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
  color: #228bc8;
}

@media (max-width: 648px) {
  .signup-container{
    width: 300px;
    padding: 20px 20px 100px 20px;
  }

}
</style>
