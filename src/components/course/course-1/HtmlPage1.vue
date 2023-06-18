<template>
  <div>
    <Terminal :fileName="terminalData.file1.filename" :copiedText="terminalData.file1.code" :lang="terminalData.file1.language" />
    <!-- 必要なだけTerminalコンポーネントを追加 -->
    <div class="sample-article">
      <!-- 記事の内容がここに入ります -->
    </div>
  </div>
</template>

<script>
import Terminal from "@/components/Terminal.vue";
import { terminalData } from "@/data/terminalData.js";

export default {
  components: {
    Terminal,
  },
  data() {
    return {
      terminalData: terminalData,
    };
  },
};
</script>
