<template>
  <div>
    <Header />
    <div class="chat">
      <div class="chat-room">
        <div class="chat-messages">
          <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.type === 'user', 'bot-message': message.type === 'bot' }">
            <p class="message-text">{{ message.text }}</p>
          </div>
        </div>
        <div class="user-input">
          <AutoAdjustTextarea v-model="modelValue" placeholder="メッセージを送信" />
          <button @click="sendMessage">送信</button>
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
import AutoAdjustTextarea from "@/components/AutoAdjustTextarea.vue";
import api from '@/axios';

export default {
  components: {
    Header,
    Footer,
    AutoAdjustTextarea,
  },
  setup() {
    // Data using refs
    const messages = ref([]);
    const modelValue = ref("");
    
    const sendMessage = async () => {
      const userMessage = modelValue.value.trim();
      if (userMessage) {
        // ユーザーのメッセージを即座に表示
        messages.value.push({ text: userMessage, type: "user" });
        modelValue.value = "";

        // ボットの応答用のプレースホルダーメッセージを表示
        const botResponsePlaceholder = { text: '...', type: "bot" };
        messages.value.push(botResponsePlaceholder);

        // ボットの応答を非同期で取得
        try {
          // ボットの応答を取得
          const botResponse = await callChatGPT(userMessage);

          // プレースホルダーメッセージを実際のボットの応答で置き換える
          const index = messages.value.indexOf(botResponsePlaceholder);
          if (index !== -1) {
            messages.value.splice(index, 1, { text: botResponse, type: "bot" });
          }
        } catch (error) {
          messages.value.push({ text: 'エラーが起こりました。更新してください。', type: "bot" });
        }
      }
    };


    async function callChatGPT(input) {
    const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    try {
      const response = await api.post(endpoint, {
        model: 'gpt-3.5-turbo-0613',
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
      modelValue,
      sendMessage,
    };
  }
};
</script>


<style scoped>
.chat {
  height: 85vh;
  background-color: #a2a2a2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chat-room {
  width: 70%;
  height: 85%;
  max-height: 80vh;
  overflow: hidden;
  margin: 20px auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
}

/* メッセージスタイル */
.message {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.message-text {
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  max-width: 70%;
}

.user-message .message-text {
  background-color: #e1ffc7;
}

.bot-message .message-text {
  background-color: #fff;
}

.user-message {
  justify-content: flex-start;
}

.bot-message {
  justify-content: flex-end;
}

/* ユーザー入力スタイル */
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
  margin-top: 10px;
}


button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10%;
}

/* スマートフォン向けのスタイル */
@media only screen and (max-width: 600px) {
  .chat-room {
    width: 90%;
    height: 90%;
    max-height: none;
  }

  .message-text {
    max-width: 85%;
    font-size: 12px;
  }

  .user-input {
    display: flex;
    font-size: small;
  }

  .user-text {
    width: 70%;
    margin-top: 10px;
  }

  button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>

