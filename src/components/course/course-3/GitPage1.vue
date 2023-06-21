<template>
  <div>
    <Title title="Git 1"></Title>
    <!-- section 1 -->
    <SubTitle subTitle="1. HTMLとCSSについて深く知る"></SubTitle>
    <Document>
      <p>スマートフォンやタブレット、PCなどで表示されるサービスやWebサイトのデザインができる技術を学んでいくセクションになります。</p>
      <p>Webデザインの目的は、情報を正しく、わかりやすく提供することです。</p>
      <p>ユーザーが操作をしやすくほしい情報にいち早く遷移できるデザインを目指していきましょう!</p>
    </Document>
    <HighlightWord word="HTML(Hyper Text Markup Language)"></HighlightWord>
    <Document>
      <p>・Webサイトを作成する際に、コンピューターへ構成指示を出し、表示したい文章や写真などの情報を形作るマークアップ言語のこと。</p>
      <p><span class="markup-word">→マークアップ</span>…文章の構成や役割を示すこと。</p>
    </Document>

    <HighlightWord word="CSS(Cascading Style Sheets)"></HighlightWord>
    <Document>
      <p>・Webページの文字の色や大きさ、背景、配置といったスタイル（見た目）を設定する言語のこと。</p>
    </Document>

    <SubTitle subTitle="2. プログラミングとコーディングの違いは？"></SubTitle>
    <HighlightWord word="プログラミング"></HighlightWord>
    <Document>
      <p>・プログラムを作成する作業全般の事をさします。</p>
    </Document>
    <HighlightWord word="コーディング"></HighlightWord>
    <Document>
      <p>・プログラミング言語を使ってソースコードを作成する事です。</p>
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

<style scoped>
.markup-word {
  white-space: pre;
  color: rgb(37, 139, 255);
  font-weight: bold;
}
</style>
