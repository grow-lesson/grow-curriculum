<template>
  <div>
    <Title title="おしゃれなタイトル"></Title>

    <Document>
      <p>ここにおしゃれな文書の内容を記述します。</p>
      <p>必要なコンテンツを追加してください。</p>
    </Document>

    <Terminal :fileName="terminalData.file1.filename" :copiedText="terminalData.file1.code" :lang="terminalData.file1.language" />
    <Terminal :fileName="terminalData.file2.filename" :copiedText="terminalData.file2.code" :lang="terminalData.file2.language" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Document from "@/components/Document.vue";
import Terminal from "@/components/Terminal.vue";
import { terminalData } from "@/data/terminalData.js";

export default {
  components: {
    Title,
    Document,
    Terminal,
  },
  data() {
    return {
      terminalData: terminalData,
    };
  },
};
</script>
