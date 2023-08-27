<template>
  <div>
    <Header />
    <div class="profile">
      <div class="profile-header">
        <img class="profile-picture" src="../../assets/images/user/dog.jpg" alt="ssss">
        <h1>{{ user.name }}</h1>
      </div>
      <div class="profile-details">
        <p><strong>姓:</strong> {{ user.last_name_kana }}<strong>  名:</strong> {{ user.first_name_kana }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>趣味:</strong> {{ user.hobbies }}</p>
        <p><strong>触れたことがある言語:</strong> {{ user.languages }}</p>
        <p><strong>自己紹介:</strong> {{ user.bio }}</p>
        <button @click="goToEditPage">編集する</button>
        <!-- ここに別の項目を追加 -->
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

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const login = computed(() => store.state.user.loginData);

    const goToEditPage = () => {
      this.$router.push({ name: "EditPage" });
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

strong {
  font-weight: bold;
}

p {
  margin-bottom: 10px;
}
</style>
