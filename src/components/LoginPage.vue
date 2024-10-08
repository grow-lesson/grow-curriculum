<template>
  <div class="login-page">
    <div class="login-header">
      <p class="login-title">GROW Learning Website</p>
    </div>
    <div class="login-container">
      <div class="login-text">
        <div>Login</div>
      </div>
      <br>
      <div class="login">
        <form @submit.prevent="onSubmit">
          <input type="text" v-model="form.email" @input="validateField('email')" placeholder="メールアドレス" name="email" />
          <p class="login-errorMessage">{{ errors.email }}</p>
          <input type="password" v-model="form.password" @input="validateField('password')" placeholder="パスワード" name="password" />
          <p class="login-errorMessage">{{ errors.password }}</p>
          <button type="submit" :disabled="isLoading">{{ isLoading ? 'ログイン中...' : 'ログイン' }}</button> <!-- ローディング時にボタン表示を変更 -->
        </form>
        <p class="btn-back"><a @click="goToWelcomePage">＞戻る</a></p>
      </div>
    </div>
    <Spinner :isLoading="isLoading" /> <!-- スピナーを追加 -->
  </div>
</template>

<script>
import { ref } from 'vue';
import * as yup from 'yup';
import api from '@/axios';
import { useRouter } from 'vue-router';
import { isCapacitor } from '@/utils';
import { CapacitorCookies } from '@capacitor/core';
import Spinner from '@/components/Spinner.vue'; // スピナーコンポーネントをインポート

export default {
  components: {
    Spinner, // スピナーをコンポーネントに追加
  },
  setup() {
    const router = useRouter();
    
    const form = ref({
      email: '',
      password: '',
    });

    const errors = ref({
      email: '',
      password: '',
    });

    const isLoading = ref(false); // ローディング状態を管理

    const schema = yup.object({
      email: yup.string().required('メールアドレスは必須の項目です。').email('メールアドレスの形式ではありません。'),
      password: yup.string().required('パスワードは必須の項目です。'),
    });

    const validateField = async (field) => {
      try {
        await yup.reach(schema, field).validate(form.value[field]);
        errors.value[field] = '';
      } catch (e) {
        errors.value[field] = e.message;
      }
    };

    const goToWelcomePage = () => {
      router.push({ name: "Welcome" });
    };

    const onSubmit = async () => {
      isLoading.value = true; // ローディング開始
      try {
        await schema.validate(form.value, { abortEarly: false });
        const loginData = {
          email: form.value.email,
          password: form.value.password,
        };

        const response = await api.post('/auth/sign_in', loginData, { withCredentials: true });

        if (response.status === 201 || response.status === 200) {
          await setCookie('access-token', response.headers['access-token']);
          await setCookie('client', response.headers['client']);
          await setCookie('uid', response.headers['uid']);

          router.push({ name: 'MenuPage' });
        } else {
          throw new Error('ログインエラーが発生しました');
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message || 'ログインエラーが発生しました');
        } else if (error.request) {
          alert('サーバーから応答がありません。ネットワークを確認してください。');
        } else {
          alert(error.message);
        }
      } 
    };

    const setCookie = async (name, value, days = 7) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();

      if (isCapacitor()) {
        await CapacitorCookies.setCookie({
          url: 'https://grow-curriculum-backend-f10ce9239245.herokuapp.com',
          key: name,
          value: value,
          expires: expires,
          path: '/', // ルートパスに設定
          secure: true,
          sameSite: 'None',
        });
      } else {
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=None; Secure";
      }
    };

    return {
      form,
      errors,
      isLoading, // ローディング状態を返す
      onSubmit,
      goToWelcomePage,
      validateField,
    };
  },
};
</script>

<style>
.login-page {
  width: 100%;
  background: linear-gradient(135deg, #1d1d1d, #4188b6);
  font-size: 12px;
  height: 100vh;
  padding-bottom: 40px;
}

.login-header {
  width: 100%;
  background-color: rgba(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 30px 30px 10px 30px;
  margin-bottom: 50px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  padding-left: 20px;
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

.login-text {
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

.login-errorMessage {
  color: red;
  font-size: 16px;
  font-weight: bold;
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
  cursor: pointer;
}

@media (max-width: 648px) {
  .login-container {
    width: 300px;
    padding: 20px 20px 100px 20px;
  }
}
</style>
