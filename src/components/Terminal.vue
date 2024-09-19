<template>
  <div class="terminal">
    <div class="clipboard">
      <div class="terminal-header">
        <h2 class="terminal-title">{{ fileName }}</h2>
      </div>
      <div class="terminal-content">
        <div class="terminal-textarea-wrapper">
          <pre class="terminal-textarea" ref="textarea" @click="deselectText">
            <code :class="lang">{{ copiedText }}</code>
          </pre>
          <button @click="copyText" class="terminal-button">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, toRefs, onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sql';

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
      default: 'ruby',
    },
  },
  setup(props, { emit }) {
    // props を toRefs で展開しつつ、別名を付ける
    const { fileName: file, copiedText: text, lang: language } = toRefs(props);

    const buttonText = ref('copy');

    const highlightedCode = computed(() => {
      return Prism.highlight(text.value, Prism.languages[language.value], language.value);
    });

    const copyText = () => {
      navigator.clipboard.writeText(text.value)
        .then(() => {
          emit('copied');
          buttonText.value = 'copied';
          setTimeout(() => {
            buttonText.value = 'copy';
          }, 2000);
        })
        .catch((error) => {
          console.error('copy failed:', error);
        });
    };

    const deselectText = () => {
      window.getSelection().removeAllRanges();
    };

    onMounted(() => {
      Prism.highlightAll();
      nextTick(() => {
        const operatorElements = document.querySelectorAll('.token.operator');
        operatorElements.forEach((element) => {
          element.style.background = 'none';
        });
      });
    });

    return {
      buttonText,
      copyText,
      deselectText,
      highlightedCode,
      file,       // fileName を file として利用
      text,       // copiedText を text として利用
      language,   // lang を language として利用
    };
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

.terminal-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.terminal-title {
  font-weight: bold;
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
  white-space: wrap;
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
  border: solid 2px rgb(46, 46, 46);
  margin-top: 2px;
  padding: 3px 14px;
  border-radius: 4px;
  cursor: pointer;
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
  .terminal-textarea{
    font-size: 11px;
  }
}
</style>
