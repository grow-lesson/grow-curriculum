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
        <form @submit="onSubmit">
          <input v-model="username" type="text" placeholder="ユーザー名" name="username"><br>
          <p class="signup-errorMessage">{{ errors['form.username'] }}</p>
          <div class="signup-name">
            <input v-model="lastName" type="text" placeholder="姓" name="lastName"><br>
            <input v-model="firstName" type="text" placeholder="名" name="firstName"><br>
          </div>
          <p class="signup-errorMessage">{{ errors['form.lastName'] }}</p>
          <p class="signup-errorMessage">{{ errors['form.firstName'] }}</p>
          <div class="signup-name-kana">
            <input v-model="lastNameKana" type="text" placeholder="姓(カナ)" name="lastNameKana"><br>
            <input v-model="firstNameKana" type="text" placeholder="名(カナ)" name="firstNameKana"><br>
          </div>
          <p class="signup-errorMessage">{{ errors['form.lastNameKana'] }}</p>
          <p class="signup-errorMessage">{{ errors['form.firstNameKana'] }}</p>
          <input v-model="email" type="text" placeholder="メールアドレス" name="email"><br>
          <p class="signup-errorMessage">{{ errors['form.email'] }}</p>
          <input v-model="password" type="password" placeholder="パスワード" name="password"><br>
          <p class="signup-errorMessage">{{ errors['form.password'] }}</p>
          <input v-model="confirmedPassword" type="password" placeholder="確認用パスワード" name="confirmedPassword"><br>
          <p class="signup-errorMessage">{{ errors['form.confirmedPassword'] }}</p>
          <button type="submit">新規登録</button>
        </form>
        <p class="btn-back"><a href="/">＞戻る</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineRule, useField, useForm } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { object, string, setLocale } from 'yup';
import * as yup from "yup";
import api from '@/axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    setLocale({
      mixed: {
        defalut: '不正な値です。',
        required:  ({ label }) => `${label}は必須の項目です`,
        oneOf:  ({ label }) => `${label}はパスワードと一致しません`,
      },
      string: {
        email: ({ label }) => `${label}の形式ではありません`,
        matches: ({ label }) => `${label}はカタカナのみで入力して下さい`,
        max: ({ label }) => `${label}は30文字以下で入力してください`,
        min: ({ label }) => `${label}は7文字以上で入力してください`,
      },
    });

    Object.keys(AllRules).forEach((rule) => {
      defineRule(rule, AllRules[rule]);
    });

    const kanaPattern = /^[\u30A1-\u30FA\u30FCｦ-ﾝ]+$/u
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+$/;

    const schema = object({
      form: object({
        username: string().required().label('ユーザーネーム'),
        lastName: string().required().label('苗字'),
        firstName: string().required().label('名前'),
        lastNameKana: string().required().matches(kanaPattern).label('苗字(カナ)'),
        firstNameKana: string().required().matches(kanaPattern).label('名前(カナ)'),
        email: string().required().email().label('メールアドレス'),
        password: string().required().label('パスワード').max(30).min(7)
          .test('matches-pattern', '記号を含む半角英数、数字のみ使用可能です', (value) => {
            if (value === null || value === undefined || value.length === 0) {
              return true; // バリデーションをスキップ
            }
            return passwordPattern.test(value);
          }),
        confirmedPassword: string().required().oneOf([yup.ref("password"),undefined]).label('確認用パスワード'),
      }),
    });

    const { errors, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {
        form: {
          username: '',
          lastName: '',
          firstName: '',
          lastNameKana: '',
          firstNameKana: '',
          email: '',
          password: '',
          confirmedPassword: '',
        },
      },
    });

    const { value: username, } = useField('form.username');
    const { value: lastName, } = useField('form.lastName');
    const { value: firstName, } = useField('form.firstName');
    const { value: lastNameKana, } = useField('form.lastNameKana');
    const { value: firstNameKana, } = useField('form.firstNameKana');
    const { value: email, } = useField('form.email');
    const { value: password, } = useField('form.password');
    const { value: confirmedPassword, } = useField('form.confirmedPassword');

    const router = useRouter();

    const onSubmit = handleSubmit(async (values) => {
      const loginData = {
        username: values.form.username,
        name: values.form.lastNameKana + values.form.firstName,
        last_name_kana: values.form.lastNameKana,
        first_name_kana: values.form.firstNameKana,
        email: values.form.email,
        password: values.form.password,
      }

      api.post('/auth', loginData, { withCredentials: true })
        .then(response => {
          if (response.data.status === 201) {
            alert('新規登録が完了しました');
            router.push({ name: 'Login' });
          } else {
            throw new Error('登録エラーが発生しました');
          }
        })
        .catch(error => {
          console.error(error);
          alert('登録エラーが発生しました');
        }
      );
    });

    return {
      username,
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      email,
      password,
      confirmedPassword,
      errors,
      onSubmit,
    };
  }
}
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
}

@media (max-width: 648px) {
  .signup-container{
    width: 300px;
    padding: 20px 20px 100px 20px;
  }

}
</style>
