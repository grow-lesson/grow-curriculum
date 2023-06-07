<template>
  <div>
    <input v-model="username" type="text" placeholder="ユーザー名" />
    <input v-model="password" type="password" placeholder="パスワード" />
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import PASS from "./const/const.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const validUsername = PASS[0].user_name; // 有効なユーザー名
      const validPassword = PASS[0].user_password; // 有効なパスワード
      console.log(validUsername, validPassword);
      if (this.username === validUsername && this.password === validPassword) {
        // ログイン成功時の処理
        this.$router.push({ name: "MenuPage" }); // メニューページに遷移
      } else {
        // ログインエラー時の処理
        alert("ログインエラー: ユーザー名またはパスワードが一致しません");
      }
    },
  },
};
</script>
