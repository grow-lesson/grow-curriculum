<template>
  <div>
    <Header />
    <div class="chat">
      <div class="chat-room">
        <div class="chat-messages">
          <div class="message" v-for="(message, index) in messages" :key="index">
            <p class="message-text" :class="{ 'user-message': message.type === 'user', 'bot-message': message.type === 'bot' }">{{ message.text }}</p>
          </div>
        </div>
        <div class="user-input">
          <textarea class="user-text" v-model="userInput" @keyup.enter="sendMessage" placeholder="メッセージを送信" />
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import api from '@/axios';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    // Data using refs
    const messages = ref([]);
    const userInput = ref("");

    // Function to send a message
    const sendMessage = async () => {
      const userMessage = userInput.value.trim();
      if (userMessage) {
        messages.value.push({ text: userMessage, type: "user" });
        userInput.value = "";

        try {
          const botResponse = await callChatGPT(userMessage);
          messages.value.push({ text: botResponse, type: "bot" });
        } catch (error) {
          console.error('ChatGPT API Error:', error);
          messages.value.push({ text: 'エラーが起こりました。更新してください。', type: "bot" });
        }
      }
    };

    async function callChatGPT(input) {
      const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
      const endpoint = 'https://api.openai.com/v1/chat/completions';

      try {
        const response = await api.post(endpoint, {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'You are a chatbot.' }, { role: 'user', content: input }],
        }, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });

        return response.data.choices[0].message.content;
      } catch (error) {
        console.error('ChatGPT API Error:', error);
        return 'エラーが起こりました。更新してください。';
      }
    }

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      messages,
      userInput,
      sendMessage,
    };
  }
};
</script>


<style scoped>
.chat {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.chat-room {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(83, 87, 88);
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-messages {
  padding: 20px;
  flex-grow: 1;
  overflow-y: scroll;
}

.message {
  margin-bottom: 20px;
  display: flex;
}

.message-text {
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: rgb(144, 226, 246);
}

.user-message .message-text {
  align-self: flex-end;
  background-color: #e1ffc7;
}

.bot-message .message-text {
  align-self: flex-start;
  background-color: #fff;
}

.user-input {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #030303ca;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%; /* テキストフィールドの幅を100%に設定 */
}

.user-text{
  width: 60%;
  height: 1.7rem;
  padding: 0;
  border: 1px solid #afafafca;

}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>