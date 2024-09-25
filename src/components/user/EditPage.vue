<template>
  <div>
    <Header />
    <div class="edit">
      <div class="edit-wrap">
        <div class="edit-icon">
          <img src="../../assets/images/user/dog.jpg" alt="ユーザー画像">
        </div>
        <div class="edit-content">
          <form @submit.prevent="onSubmit">
            <div class="edit-form username">
              <label for="username">ユーザー名</label>
              <input type="text" id="username" name="username" v-model="username"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.username'] }}</p>

            <div class="edit-form name">
              <label for="name">名前</label>
              <input type="text" id="name" name="name" v-model="name"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.name'] }}</p>

            <div class="edit-form lastName-kana">
              <label for="lastName-kana">苗字(カナ)</label>
              <input type="text" id="lastName-kana" name="lastName-kana" v-model="lastNameKana"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.lastNameKana'] }}</p>

            <div class="edit-form firstName-kana">
              <label for="firstName-kana">名前(カナ)</label>
              <input type="text" id="firstName-kana" name="firstName-kana" v-model="firstNameKana"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.firstNameKana'] }}</p>

            <div class="edit-form mail">
              <label for="mail">メールアドレス</label>
              <input type="text" id="mail" name="mail" v-model="email">
            </div>
            <p class="edit-errorMessage">{{ errors['form.email'] }}</p>

            <div class="edit-form hobby">
              <label for="hobby">趣味</label>
              <input type="text" id="hobby" name="hobby" v-model="login.hobbies"><br>
            </div>

            <div class="edit-form language">
              <label for="language">触れたことがある言語</label>
              <input type="text" id="language" name="language" v-model="login.languages">
            </div>

            <div class="edit-form bio">
              <label for="bio">自己紹介</label>
              <textarea id="bio" v-model="login.bio" name="bio"></textarea><br>
            </div>

            <div class="edit-form password">
              <label for="password">パスワード</label>
              <p>現在のパスワード</p>
            </div>

            <div class="edit-form newPassword">
              <label for="newPassword">新しいパスワード</label>
              <input type="password" id="newPassword" name="newPassword" v-model="password">
            </div>
            <p class="edit-errorMessage">{{ errors['form.password'] }}</p>

            <div class="edit-form newConfirmedPassword">
              <label for="newConfirmedPassword">確認用パスワード</label>
              <input type="password" id="newConfirmedPassword" name="newConfirmedPassword" v-model="confirmedPassword">
            </div>
            <p class="edit-errorMessage">{{ errors['form.confirmedPassword'] }}</p>

            <div class="edit-form image">
              <label for="image">アイコン画像</label>
              <input type="file" id="image" name="image">
            </div>

            <button class="btn edit-btn" type="submit">更新</button>
          </form>
          <p class="btn-back"><a @click="goToMyPage">＞戻る</a></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';
import { defineRule, useField, useForm } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { object, string, setLocale } from 'yup';
import * as yup from "yup";
import api from '@/axios';
import { useRouter } from 'vue-router';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const login = computed(() => store.state.user.loginData);
    const router = useRouter();
    const goToMyPage = () => {
      router.push({ name: "MyPage" });
    };
    setLocale({
      mixed: {
        defalut: '不正な値です。',
        required:  ({ label }) => `${label}は必須の項目です`,
        oneOf:  ({ label }) => `${label}はパスワードと一致しません`,
      },
      string: {
        email: ({ label }) => `${label}の形式ではありません`,
        matches: ({ label }) => `${label}はカタカナのみで入力して下さい`,
        max: ({ label }) => `${label}を更新する場合は30文字以下で入力してください`,
        min: ({ label }) => `${label}を更新する場合は7文字以上で入力してください`,
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
        name: string().required().label('名前'),
        lastNameKana: string().required().matches(kanaPattern).label('苗字(カナ)'),
        firstNameKana: string().required().matches(kanaPattern).label('名前(カナ)'),
        email: string().required().email().label('メールアドレス'),
        password: string()
          .label('パスワード')
          .test('is-valid-length', '7文字以上30文字以下で入力してください', (value) => {
            if (value === null || value === undefined || value.length === 0) {
              return true; // バリデーションをスキップ
            }
            return value.length >= 7 && value.length <= 30;
          })
          .test('matches-pattern', '記号を含む半角英数、数字のみ使用可能です', (value) => {
            if (value === null || value === undefined || value.length === 0) {
              return true; // バリデーションをスキップ
            }
            return passwordPattern.test(value);
          }),
        confirmedPassword: string().oneOf([yup.ref("password"),undefined]).label('確認用パスワード'),
      }),
    });

    const { errors, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {
        form: {
          username: login.value.username,
          name: login.value.name,
          lastNameKana: login.value.last_name_kana,
          firstNameKana: login.value.first_name_kana,
          email: login.value.email,
          password: '',
          confirmedPassword: '',
        },
      },
    });

    const { value: username, } = useField('form.username');
    const { value: name, } = useField('form.name');
    const { value: lastNameKana, } = useField('form.lastNameKana');
    const { value: firstNameKana, } = useField('form.firstNameKana');
    const { value: email, } = useField('form.email');
    const { value: password, } = useField('form.password');
    const { value: confirmedPassword, } = useField('form.confirmedPassword');

    const onSubmit = handleSubmit(async (values) => {
      const loginData = {
        username: values.form.username,
        name: values.form.name,
        last_name_kana: values.form.lastNameKana,
        first_name_kana: values.form.firstNameKana,
        email: values.form.email,
        hobbies: values.form.hobbies,
        language: values.form.language,
        bio: values.form.bio,
      }

      if(values.form.password != ''){
        loginData.password = values.form.password
        loginData.password_confirmation = values.form.confirmedPassword
      }

      // トークン情報を取得
      const accessToken = getCookie('access-token');
      const client = getCookie('client');
      const uid = decodeURIComponent(getCookie('uid'));

      // リクエストのヘッダーにトークン情報を含めて送信
      api.put(`/auth`, loginData, {
        headers: {
          'access-token': accessToken,
          'client': client,
          'uid': uid
        },
        withCredentials: true
      })
      .then(response => {
        if (response.data.status === 200) {
          alert('マイページの更新が完了しました');
          return goToMyPage();
        } else {
          throw new Error('マイページの更新エラーが発生しました');
        }
      })
      .catch(error => {
        console.error(error);
        alert('マイページの更新エラーが発生しました');
      });

      // クッキーを読み取る関数
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
          return parts.pop().split(';').shift();
        }
      }
    });

    return {
      login,
      username,
      name,
      lastNameKana,
      firstNameKana,
      email,
      password,
      confirmedPassword,
      errors,
      onSubmit,
      goToMyPage,
    };
  }
};
</script>

<style scoped>
.btn-back {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
  color: #228bc8;
  font-family: 'Exo', sans-serif;
  cursor: pointer;
}

.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f0f0f0;
  min-height: 100vh;
  padding: 20px;
}

.edit-wrap {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(244, 245, 255);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.edit-icon img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.edit-content label {
  font-weight: normal;
  margin-right: 10px;
}

.edit-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.edit-form input,
.edit-form textarea {
  background-color: #e5f0f8;
  padding: 10px;
  border: solid 1px #1C4977;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
}

.bio textarea {
  height: 150px;
}

.edit-btn {
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #1C4977;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.edit-errorMessage {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.btn-back {
  text-align: right;
  font-weight: bold;
  color: #228bc8;
  cursor: pointer;
}

@media (max-width: 425px) {
  .edit-wrap {
    padding: 10px;
  }

  .edit-form input,
  .edit-form textarea {
    padding: 8px;
  }

  .edit-btn {
    padding: 8px 16px;
  }
}

</style>
