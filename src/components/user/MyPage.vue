<template>
  <div>
    <Header />
    <div class="profile">
      <div class="profile-header">
        <img class="profile-picture" src="../../assets/images/user/dog.jpg" alt="ssss">
        <!-- <img class="profile-picture" :src="userProfile.picture" alt="プロフィール画像" /> -->
        <h1>{{ userProfile.username }}</h1>
      </div>
      <div class="profile-details">
        <p><strong>Email:</strong> {{ userProfile.email }}</p>
        <p><strong>趣味:</strong> {{ userProfile.hobbies }}</p>
        <p><strong>触れたことがある言語:</strong> {{ userProfile.languages }}</p>
        <p><strong>自己紹介:</strong> {{ userProfile.bio }}</p>
        <!-- ここに別の項目を追加 -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const userProfile = ref({
      picture: "",
      username: "",
      email: "",
      hobbies: [],
      languages: [],
      bio: "",
    });

    const fetchUserProfile = () => {
      axios.get('/api/users/:id') // 実際のAPIエンドポイントに変更
        .then(response => {
          userProfile.value = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    };

    onMounted(fetchUserProfile);

    return {
      userProfile,
    };
  },
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
