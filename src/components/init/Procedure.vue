<template>
  <div>
    <Title title="カリキュラムの進めるための準備をしよう!"></Title>
    <SubTitle subTitle="1. backlogにて課題を担当者に見てもらえるようにしよう!"></SubTitle>
    <Document>
      <p>
        Growではbacklogはカリキュラムをダウンロードしたり自分がカリキュラムの課題をアップロードし、それを課題をチェックする担当者とやりとりするツールとして使います。<br>
        まずは担当者とやりとりできる様に準備しましょう！
      </p>
      <br>
      <p>
        ①<br>
        まずは会社からもらった招待メールからbacklogにアクセスしましょう!<br>
        ログインすると以下のような画面が出てきます。<br>
        出てきたら「プロジェクト」の「フロントエンドカリキュラム」のアイコンをクリックしましょう。
      </p><br>
      <div>
        <img src="../../assets/images/procedure/backlog-1.png" alt="手順①" class="screen-image">
      </div>
      <br>
      <p>
        ②<br>
        ホーム画面に入ったら左のサイドバーから「課題の追加」を選択しましょう<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/backlog-2.png" alt="手順②" class="screen-image">
      </div>
      <br>
      <p>
        ③<br>
        「課題の追加」を開いたら件名を入力しましょう。件名は「【課題FB】名前」このカッコの部分をコピーして名前部分に自分の名前を入れましょう。<br>
        まず最初は課題の詳細に「@」で担当者をメンションして、あいさつを送りましょう。<br>
        入力ができたら、課題の詳細の下にある担当者を自分の担当を選択してください。
        ここまで入力できたら右上にある「追加」を押して下さい。
      </p><br>
      <div>
        <img src="../../assets/images/procedure/backlog-3.png" alt="手順③" class="screen-image">
      </div>
      <br>
    </Document>
    <SubTitle subTitle="2. カリキュラム資材を自分のPCにダウンロードしよう!"></SubTitle>
    <Document>
      <p>
        backlog上にあるカリキュラムの資材をダウンロードしよう!<br>
      </p>
      <br>
      <p>
        ①<br>
        ホーム画面にから「Git」を選択しましょう<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/backlog-1.png" alt="手順①" class="screen-image">
      </div>
      <br>
      <p>
        ②<br>
        リポジトリ一覧からフロントエンド初級カリキュラム用と記載がある部分からURLをテキストマークでコピーしましょう。<br>
      </p><br>
      <div>
        <img src="../../assets/images/procedure/backlog-1.png" alt="手順①" class="screen-image">
      </div>
      <br>
    </Document>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Document from "@/components/Document.vue";
import { environmentData } from "@/data/environmentData.js";

export default {
  name: "Procedure",
  components: {
    Title,
    SubTitle,
    Document,
  },
  data() {
    return {
      environmentData: environmentData,
    };
  },
};
</script>

<style scoped>

.screen-image{
  max-width: 100%;
  height: auto;
}

</style>