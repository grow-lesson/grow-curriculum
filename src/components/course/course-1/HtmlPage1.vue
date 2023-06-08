<template>
  <div>
    <h1>HTML・CSSコース1</h1>
    <div class="terminal">
      <textarea ref="textarea" class="terminal-textarea" v-model="copiedText" wrap="off"></textarea>
      <button @click="copyText" class="terminal-button">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copiedText: "コピー対象の文言",
    };
  },
  methods: {
    copyText() {
      const textarea = this.$refs.textarea;
      textarea.select();
      textarea.setSelectionRange(0, 99999); // テキストを選択するために必要な範囲を設定します
      navigator.clipboard
        .writeText(textarea.value)
        .then(() => {
          // コピーが完了したら適宜フィードバックを表示するなどの処理を追加できます
        })
        .catch((error) => {
          console.error("コピーに失敗しました:", error);
        });
    },
  },
};
</script>

<style scoped>
.terminal {
  background-color: #000;
  padding: 10px;
  display: flex;
  align-items: center;
}

.terminal-textarea {
  width: 400px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  resize: none;
  font-family: monospace;
  overflow-x: scroll;
}

.terminal-button {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 8px 16px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
