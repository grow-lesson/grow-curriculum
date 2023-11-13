<!-- AutoAdjustTextarea.vue -->
<template>
  <textarea 
    v-model="modelValue"
    placeholder="メッセージを入力"
    ref="msgTextArea"
    class="user-text"
  />
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const modelValue = ref('')
const msgTextArea = ref(null);
  
watchEffect(()=>{
  // デフォルトのテキストエリアの大きさを指定する。
  msgTextArea.value?.style.setProperty('height', `30px`)
  
  if(modelValue.value !== ''){
    //
    msgTextArea.value?.style.setProperty('height', `${msgTextArea.value?.scrollHeight}px`)
  }
  
})
</script>

<style scoped>
.user-text {
  width: 60%;
  height: 1.7rem;
  padding: 0;
  border: 1px solid #afafafca;
  resize: none;
  overflow: hidden;
}
/* スマートフォン向けのスタイル */
@media only screen and (max-width: 600px) {
  .user-text {
    width: 70%;
    margin-top: 10px;
  }
}
</style>
