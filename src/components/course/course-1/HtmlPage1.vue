<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="HTML・CSS 1"></Title>
        <Document>
          <p>スマートフォンやタブレット、PCなどで表示されるサービスやWebサイトのデザインができる技術を学んでいくセクションになります。</p>
          <p>Webデザインの目的は、情報を正しく、わかりやすく提供することです。</p>
          <p>ユーザーが操作をしやすくほしい情報にいち早く遷移できるデザインを目指していきましょう!</p>
        </Document><br>
        <!-- section 1 -->
        <SubTitle subTitle="1. HTMLとCSSについて知る"></SubTitle>
        <Document>
          <HighlightWord word="HTML(Hyper Text Markup Language)"></HighlightWord>
          <p>・Webサイトを作成する際に、コンピューターへ構成指示を出し、表示したい文章や写真などの情報を形作るマークアップ言語のこと。</p>
          <p><span class="markup-word-blue">→マークアップ</span>…文章の構成や役割を示すこと。</p><br>
          <HighlightWord word="CSS(Cascading Style Sheets)"></HighlightWord>
          <p>・Webページの文字の色や大きさ、背景、配置といったスタイル（見た目）を設定する言語のこと。</p>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. プログラミングとコーディング"></SubTitle>
        <Document>
          <p>プログラミングとコーディングにどのような違いあるのか理解しましょう!</p>
        </Document>
        <Document>
          <HighlightWord word="プログラミング"></HighlightWord>
          <p>・プログラムを作成する作業全般の事をさします。</p>
          <HighlightWord word="コーディング"></HighlightWord>
          <p>・プログラミング言語を使ってソースコードを作成する事です。</p>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="2. HTMLの仕組み"></SubTitle>
        <SectionTitle sectionTitle="2-1. HTMLの名称"></SectionTitle>
        <Document>
          <p>まずはHTMLについて学んでいきましょう!</p>
          <p>
            HTMLではタグと呼ばれる中にテキストを入れていきます。最初に記述するタグを<span class="markup-word-blue">開始タグ</span>、
            最後に記述するタグを<span class="markup-word-blue">終了タグ</span>といいます。
          </p>
          <p>
            開始タグに入っている「h1」と書かれた部分を<span class="markup-word-blue">要素名</span>、
            開始タグと終了タグで囲まれた全体を<span class="markup-word-blue">要素</span>といいます。
          </p>
          <p>また、開始タグと終了タグの中身を<span class="markup-word-blue">要素内容</span>と呼ばれます。</p>
        </Document>
        <!-- <img src="" alt="要素の写真" > -->
        <SectionTitle sectionTitle="2-2. HTMLの要素" id="section3"></SectionTitle>
        <Document>
          <p>
            ・<span class="markup-word-blue">hタグ</span>…見出しをつける<br>
            ページの全体やセクションの大きなタイトルに使う。<br><br>
            ・<span class="markup-word-blue">pタグ</span>…段落を作成する<br>
            段落を表し、タイトルの後の細かい文章に使う。
          </p>
        </Document>
        <Document>
          <p>
            さっそくテキストエディタに書いてみよう!<br>

          </p>
          
        </Document>

        <Terminal :fileName="terminalData.file1.filename" :copiedText="terminalData.file1.code" :lang="terminalData.file1.language" />
        <Terminal :fileName="terminalData.file2.filename" :copiedText="terminalData.file2.code" :lang="terminalData.file2.language" />
      </div>
      <div class="side-content">
        <TableOfContents :sections="sections" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { terminalData } from "@/data/terminalData.js";


export default {
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    Terminal,
    TableOfContents,
  },
  data() {
    return {
      terminalData: terminalData,
      sections: [
        { id: "Title", title: "HTML・CSS 1" },
        { id: "subTitle1", title: "  1. HTMLとCSSについて知る" },
        { id: "subTitle2", title: "  2. プログラミングとコーディング" },
        { id: "subTitle3", title: "  3. HTMLの仕組み" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
.main-content{
  width: 75%;
}
.side-content{
  margin-left: 1%;
  margin-top: 40px;
  width: 24%;
}
.markup-word-blue {
  white-space: pre;
  color: rgb(37, 139, 255);
  font-weight: bold;
}
.markup-word-red {
  white-space: pre;
  color: rgb(255, 37, 37);
  font-weight: bold;
}
</style>