<template>
  <div class="terminal">
    <div class="clipboard">
      <div class="terminal-title">{{ fileName }}</div>
      <div class="terminal-content">
        <div class="terminal-textarea-wrapper">
          <pre class="terminal-textarea" ref="textarea" @click="deselectText">
            <code :class="lang">{{ copiedText }}</code>
          </pre>
        </div>
      </div>
    </div>
    <button @click="copyText" class="terminal-button">コピー</button>
    <div v-if="copySuccess" class="copy-feedback">コピーしました</div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";

export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
    copiedText: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: "ruby",
    },
  },
  data() {
    return {
      copySuccess: false, // コピー成功フラグ
    };
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(this.copiedText, Prism.languages[this.lang], this.lang);
    },
  },
  methods: {
    copyText() {
      const text = this.copiedText;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.$emit("copied");
          this.copySuccess = true; // コピー成功フラグを設定

          // 2秒後にコピー成功フラグをリセット
          setTimeout(() => {
            this.copySuccess = false;
          }, 2000);
        })
        .catch((error) => {
          console.error("クリップボードへのコピーに失敗しました:", error);
        });
    },
    deselectText() {
      window.getSelection().removeAllRanges();
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style scoped>
.terminal {
  padding: 10px;
  display: flex;
  align-items: center;
}

.clipboard {
  width: max-content;
  margin-right: 10px;
  overflow-x: auto;
}

.terminal-title {
  background-color: #282c34;
  color: #fff;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.terminal-content {
  background-color: #282c34;
  border-top: none;
  padding: 10px;
}

.terminal-textarea-wrapper {
  position: relative;
}

.terminal-textarea {
  width: 100%;
  background-color: rgba(33, 33, 33, 0.7);
  color: #fff;
  border: none;
  font-family: monospace;
  resize: none;
  outline: none;
  padding: 5px;
  height: auto;
  font-size: 16px;
  white-space: pre-wrap;
  overflow-x: scroll;
  scrollbar-width: thin;
  user-select: text;
}

.terminal-textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border-radius: 4px;
}

.terminal-textarea::-webkit-scrollbar-track {
  background-color: rgba(99, 95, 95, 0.3);
}

.terminal-textarea::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 4px;
}

.terminal-textarea::-webkit-scrollbar-thumb:hover {
  background-color: white;
}

.terminal-button {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
.copy-feedback {
  margin-top: 10px;
  color: green;
}

pre code {
  text-shadow: none;
}

.terminal-textarea code {
  color: #fff;
}
@media (max-width: 648px) {
  .clipboard {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
