<template>
  <div>
    <Header />
    <div class="profile">
      <div class="profile-header">
        <img class="profile-picture" src="../../assets/images/user/dog.jpg" alt="ssss">
        <h1>{{ user.name }}</h1>
      </div>
      <ul class="profile-details">
        <li class="profile-item">
          <p class="profile-label">名前</p>
          <p class="profile-text">{{ user.last_name_kana }} {{ user.first_name_kana }}</p>
        </li>
        <li class="profile-item">
          <p class="profile-label">カナ</p>
          <p class="profile-text">{{ user.last_name_kana }} {{ user.first_name_kana }}</p>
          </li>
        <li class="profile-item">
          <p class="profile-label">メールアドレス</p>
          <p class="profile-text">{{ user.email }}</p>
        </li>
        <li class="profile-item">
          <p class="profile-label">趣味</p>
          <p class="profile-text">{{ user.hobbies }}</p>
        </li>
        <li class="profile-item">
          <p class="profile-label">触れたことがある言語</p>
          <p class="profile-text">{{ user.languages }}</p>
        </li>
        <li class="profile-item">
          <p class="profile-label">自己紹介</p>
          <p class="profile-text">{{ user.bio }}</p>
        </li>
        <li class="profile-item">
          <p class="profile-label">パスワード</p>
          <p class="profile-text">{{ user.bio }}</p>
        </li>
        <button class="profile-btn" @click="goToEditPage">編集する</button>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';
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
    const goToEditPage = () => {
      router.push({ name: "EditPage" });
    };

    return {
      login,
      user: computed(() => login.value ? login.value : ''),
      goToEditPage,
    };

  }
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f0f0f0;
  min-height: 100vh; /* 画面の高さいっぱいに表示 */
  padding: 20px;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

h1 {
  font-size: 28px;
}

.profile-details {
  font-size: 16px;
}

.profile-item{
  display: flex;
  margin-top: 20px;
}

.profile-label{
  width: 200px;
  margin: auto 0;
  font-weight: normal;
}

.profile-text{
  border-bottom: solid 1px #1C4977;
  padding: 10px;
}

.profile-btn {
  padding: 5px 10px;
  margin: 50px 0;
  background-color: #1C4977;
  color: #fff;
  border-radius: 5px;
}

@media (max-width: 425px) {

}
</style>
