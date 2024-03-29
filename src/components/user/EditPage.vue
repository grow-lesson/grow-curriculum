<template>
  <div>
    <Header />
    <div class="edit">
      <div class="edit-wrap">
        <div class="edit-icon">
          <img src="../../assets/images/user/dog.jpg" alt="">
        </div>
        <div class="edit-content">
          <form action="" @submit="onSubmit">
            <div class="edit-form username">
              <label for=“username”>ユーザー名</label>
              <input type="text" name="username" v-model="username"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.username'] }}</p>
            <div class="edit-form name">
              <label for=“username”>名前</label>
              <input type="text" name="name" v-model="name"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.name'] }}</p>
            <div class="edit-form lastName-kana">
              <label for=“username”>苗字(カナ)</label>
              <input type="text" name="lastName-kana" v-model="lastNameKana"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.lastNameKana'] }}</p>
            <div class="edit-form firstName-kana">
              <label for=“username”>名前(カナ)</label>
              <input type="text" name="firstName-kana" v-model="firstNameKana"><br>
            </div>
            <p class="edit-errorMessage">{{ errors['form.firstNameKana'] }}</p>
            <div class="edit-form mail">
              <label for=“mailadress”>メールアドレス</label>
              <input type="text" name="mail" v-model="email">
            </div>
            <p class="edit-errorMessage">{{ errors['form.email'] }}</p>
            <div class="edit-form hobby">
              <label for=“hobby”>趣味</label>
              <input type="text" name="hobby" v-model="login.hobbies"><br>
            </div>
            <div class="edit-form language">
              <label for=“language”>触れたことがある言語</label>
              <input type="text" name="language" v-model="login.languages">
            </div>
            <div class="edit-form bio">
              <label for=“Bio”>自己紹介</label>
              <textarea type="text" v-model="login.bio" name="bio"></textarea><br>
            </div>
            <!-- 現在のpassは表示するだけ -->
            <div class="edit-form password">
              <label for=“password”>パスワード</label>
              <p>現在のpass</p>
            </div>
            <!-- passwordを変更する場合のみ入力する -->
            <div class="edit-form newPassword">
              <label for=“newPassword”>新しいパスワード</label>
              <input type="password" name="newPassword" v-model="password">
            </div>
            <p class="edit-errorMessage">{{ errors['form.password'] }}</p>
            <div class="edit-form newConfirmedPassword">
              <label for=“newConfirmedPassword”>確認用パスワード</label>
              <input type="password" name="newConfirmedPassword" v-model="confirmedPassword">
            </div>
            <p class="edit-errorMessage">{{ errors['form.confirmedPassword'] }}</p>
            <div class="edit-form image">
              <label for=“image”>Icon Image</label>
              <input type="file" name="image">
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
  /* 画面の高さいっぱいに表示 */
  padding: 20px;
}

/* .edit-wrap{
  widows: 300px;
  display: flex;
  margin: 20px 50px;
} */
.edit-icon img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  ;
}

.edit-content label {
  width: 200px;
  margin: auto 0;
  font-weight: normal;
}

.edit-form {
  margin-top: 20px;
  display: flex;
}

.edit-form input {
  display: flex;
  border-bottom: solid 1px #1C4977;
}

.edit-form input,
.edit-form textarea {
  background-color: #e5f0f8;
  padding: 10px;
  border-radius: 4px 4px 0 0;
}

.bio textarea,
.image input {
  width: 330px;
  height: 150px;
}

.edit-btn {
  padding: 5px 10px;
  margin: 10px auto;
  background-color: #1C4977;
  color: #fff;
  border-radius: 5px;
}

.edit-errorMessage {
  color: red;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 425px) {
  .edit-content{
    width: 330px;
    margin: auto;
  }

  .edit-form{
    display: block;
  }
}
</style>
