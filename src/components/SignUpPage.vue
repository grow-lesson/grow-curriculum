<template>
  <div class="signup-page">
    <div class="signup-header">
      <p class="signup-title">GROW Learning Website</p>
    </div>
    <div class="signup-container">
      <div class="signup-text">
        <div>Sign up</div>
      </div>
      <br>
      <div class="signup">
        <form @submit.prevent="onSubmit">
          <input v-model="form.username" @input="validateField('username')" type="text" placeholder="ユーザー名" name="username"><br>
          <p class="signup-errorMessage">{{ errors.username }}</p>
          <div class="signup-name">
            <input v-model="form.lastName" @input="validateField('lastName')" type="text" placeholder="姓" name="lastName"><br>
            <input v-model="form.firstName" @input="validateField('firstName')" type="text" placeholder="名" name="firstName"><br>
          </div>
          <p class="signup-errorMessage">{{ errors.lastName }}</p>
          <p class="signup-errorMessage">{{ errors.firstName }}</p>
          <div class="signup-name-kana">
            <input v-model="form.lastNameKana" @input="validateField('lastNameKana')" type="text" placeholder="姓(カナ)" name="lastNameKana"><br>
            <input v-model="form.firstNameKana" @input="validateField('firstNameKana')" type="text" placeholder="名(カナ)" name="firstNameKana"><br>
          </div>
          <p class="signup-errorMessage">{{ errors.lastNameKana }}</p>
          <p class="signup-errorMessage">{{ errors.firstNameKana }}</p>
          <input v-model="form.email" @input="validateField('email')" type="text" placeholder="メールアドレス" name="email"><br>
          <p class="signup-errorMessage">{{ errors.email }}</p>
          <input v-model="form.password" @input="validateField('password')" type="password" placeholder="パスワード" name="password"><br>
          <p class="signup-errorMessage">{{ errors.password }}</p>
          <input v-model="form.confirmedPassword" @input="validateField('confirmedPassword')" type="password" placeholder="確認用パスワード" name="confirmedPassword"><br>
          <p class="signup-errorMessage">{{ errors.confirmedPassword }}</p>
          <button type="submit" :disabled="isLoading">{{ isLoading ? '登録中...' : '新規登録' }}</button> <!-- ローディング中にボタンを変更 -->
        </form>
        <p class="btn-back"><a @click="goToWelcomePage">＞戻る</a></p>
      </div>
    </div>
    <Spinner :isLoading="isLoading" /> <!-- スピナーを追加 -->
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import * as yup from 'yup';
import api from '@/axios';
import { useRouter } from 'vue-router';
import Spinner from '@/components/Spinner.vue'; 

export default {
  components: {
    Spinner,
  },
  setup() {
    const router = useRouter();
    
    const form = ref({
      username: '',
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      email: '',
      password: '',
      confirmedPassword: '',
    });

    const errors = ref({
      username: '',
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      email: '',
      password: '',
      confirmedPassword: '',
    });

    const isLoading = ref(false); 

    const kanaPattern = /^[\u30A1-\u30FA\u30FCｦ-ﾝ]+$/u;
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+$/;

    const schema = yup.object({
      username: yup.string().required('ユーザーネームは必須の項目です'),
      lastName: yup.string().required('苗字は必須の項目です'),
      firstName: yup.string().required('名前は必須の項目です'),
      lastNameKana: yup.string().required('苗字(カナ)は必須の項目です').matches(kanaPattern, '苗字(カナ)はカタカナのみで入力して下さい'),
      firstNameKana: yup.string().required('名前(カナ)は必須の項目です').matches(kanaPattern, '名前(カナ)はカタカナのみで入力して下さい'),
      email: yup.string().required('メールアドレスは必須の項目です').email('メールアドレスの形式ではありません'),
      password: yup.string().required('パスワードは必須の項目です').min(7, 'パスワードは7文字以上で入力してください').max(30, 'パスワードは30文字以下で入力してください')
        .matches(passwordPattern, '記号を含む半角英数、数字のみ使用可能です'),
      confirmedPassword: yup.string().required('確認用パスワードは必須の項目です').oneOf([yup.ref('password'), null], '確認用パスワードはパスワードと一致しません'),
    });

    // 各フィールドごとのバリデーション
    const validateField = async (field) => {
      try {
        await yup.reach(schema, field).validate(form.value[field]);
        errors.value[field] = '';  // 問題なしであればエラーをクリア
      } catch (e) {
        errors.value[field] = e.message;  // エラーメッセージを設定
      }

      // パスワードと確認用パスワードが変更された場合にリアルタイムで一致チェック
      if (field === 'password' || field === 'confirmedPassword') {
        if (form.value.password === form.value.confirmedPassword) {
          errors.value.confirmedPassword = ''; // 一致していればエラーメッセージを消す
        } else {
          errors.value.confirmedPassword = '確認用パスワードはパスワードと一致しません';
        }
      }
    };

    // フォーム全体のリアルタイムチェック
    watch(
      [() => form.value.password, () => form.value.confirmedPassword],
      () => {
        if (form.value.password === form.value.confirmedPassword) {
          errors.value.confirmedPassword = ''; // 一致している場合はエラーメッセージをクリア
        } else {
          errors.value.confirmedPassword = '確認用パスワードはパスワードと一致しません'; // 一致していない場合はエラーメッセージを表示
        }
      },
      { immediate: true } // 初回も即座にチェック
    );


    // フォーム全体のバリデーションと送信処理
    const onSubmit = async () => {
      isLoading.value = true;
      try {
        await schema.validate(form.value, { abortEarly: false });
        
        const loginData = {
          username: form.value.username,
          name: form.value.lastName + form.value.firstName,
          last_name_kana: form.value.lastNameKana,
          first_name_kana: form.value.firstNameKana,
          email: form.value.email,
          password: form.value.password,
        };

        const response = await api.post('/auth', loginData, { withCredentials: true });

        if (response.data.status === 201) {
          alert('新規登録が完了しました');
          router.push({ name: 'Login' });
        } else {
          throw new Error('登録エラーが発生しました');
        }
      } catch (err) {
        if (err.inner) {
          err.inner.forEach(e => {
            errors.value[e.path] = e.message;
          });
        }
      } finally {
        isLoading.value = false;
      }
    };

    const goToWelcomePage = () => {
      router.push({ name: "Welcome" });
    };

    return {
      form,
      errors,
      isLoading,
      onSubmit,
      goToWelcomePage,
      validateField,
    };
  },
};
</script>

<style>
.signup-page {
  width: 100%;
  background: linear-gradient(135deg, #1d1d1d, #4188b6);
  font-size: 12px;
  padding-bottom: 40px;
}

.signup-header {
  width: 100%;
  background-color: rgba(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 30px 30px 10px 30px;
  margin-bottom: 20px;
}

.signup-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  padding-left: 20px;
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

.signup-text {
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

.signup-errorMessage {
  color: red;
  font-size: 16px;
  font-weight: bold;
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
  cursor: pointer;
}

@media (max-width: 648px) {
  .signup-container {
    width: 300px;
    padding: 20px 20px 100px 20px;
  }
}
</style>
