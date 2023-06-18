<template>
  <div>
    <Title title="HTML・CSS 1"></Title>
    <SubTitle subTitle="1. HTMLについて深く知る"></SubTitle>
    <HighlightWord word="HTML(Hyper Text Markup Language)"></HighlightWord>
    <Document>
      <p>・Webサイトを作成する際に、コンピューターへ構成指示を出し、表示したい文章や写真などの情報を形作るマークアップ言語のこと。</p>
      <p><span class="markup-word">マークアップ</span>…文章の構成や役割を示すこと。</p>
    </Document>

    <Terminal :fileName="terminalData.file1.filename" :copiedText="terminalData.file1.code" :lang="terminalData.file1.language" />
    <Terminal :fileName="terminalData.file2.filename" :copiedText="terminalData.file2.code" :lang="terminalData.file2.language" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import Terminal from "@/components/Terminal.vue";
import { terminalData } from "@/data/terminalData.js";

export default {
  components: {
    Title,
    SubTitle,
    HighlightWord,
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
