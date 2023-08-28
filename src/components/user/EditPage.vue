<template>
  <div>
    <Header />
    <div class="edit">
      <div class="edit-wrap">
        <div class="edit-icon">
          <img src="../../assets/images/user/dog.jpg" alt="">
        </div>
        <div class="edit-content">
          <form action="" method="POST" enctype='multipart/form-data'>
            <div class="edit-form username">
              <label for=“username”>ユーザー名</label>
              <input type="text" name="username" value="現在のusername"><br>
            </div>
            <div class="edit-form mail">
              <label for=“mailadress”>メールアドレス</label>
              <input type="text" name="mail" value="現在のmail">
            </div>
            <div class="edit-form hobby">
              <label for=“hobby”>趣味</label>
              <input type="text" name="hobby" value="現在のhobby"><br>
            </div>
            <div class="edit-form language">
              <label for=“language”>触れたことがある言語</label>
              <input type="text" name="language" value="現在のlanguage">
            </div>
            <div class="edit-form bio">
              <label for=“Bio”>自己紹介</label>
              <textarea type="text" name="bio">現在の自己紹介文</textarea><br>
            </div>
            <!-- 現在のpassは表示するだけ -->
            <div class="edit-form password">
              <label for=“password”>パスワード</label>
              <p>現在のpass</p>
            </div>
            <!-- passwordを変更する場合のみ入力する -->
            <div class="edit-form newPassword">
              <label for=“newPassword”>新しいパスワード</label>
              <input type="text" name="newPassword" value="">
            </div>
            <div class="edit-form image">
              <label for=“image”>Icon Image</label>
              <input type="file" name="image">
            </div>
            <button class="btn edit-btn" type="submit">更新</button>
          </form>
          <p class="btn-back"><a href="/mypage">＞戻る</a></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {

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

.edit-content {}

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
  border-bottom: solid 1px #333;
}

.edit-form input,
.edit-form textarea {
  background-color: #dcdcdc;
  padding: 10px;
  border-radius: 4px 4px 0 0;
}

.bio textarea,
.image input {
  width: 330px;
  height: 150px;
}

.edit-form p {
  color: #ff4500;
}

.edit-btn {
  margin: 10px auto;
  background-color: #7b8d42;
  color: #fff;
  border-radius: 5px;
}

/* .edit-username, .edit-mail, .edit-password, .edit-newPassword, .edit-bio, .edit-image{
  display: flex;
  margin-top: 20px;
} */
</style>
