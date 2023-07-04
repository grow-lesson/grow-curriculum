<template>
  <div class="user-list">
    <h2>ユーザー一覧</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const users = ref([]);

    const fetchUsers = () => {
      axios.get('/api/users')
        .then(response => {
          users.value = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    };

    onMounted(fetchUsers);

    return {
      users,
    };
  },
};
</script>


<style scoped>
.user-list {
  background-color: #f0f0f0;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>
