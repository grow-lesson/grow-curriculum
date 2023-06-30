<template>
  <div>
    <div class="container">
      <div class="main-content">
        <Title title="カリキュラムの進めるための準備をしよう!" id="Title"></Title>
        <SubTitle subTitle="1. backlogにて課題を担当者に見てもらえるようにしよう!" id="subTitle1"></SubTitle>
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
        <SubTitle subTitle="2. カリキュラム資材を自分のPCにダウンロードしよう!" id="subTitle2"></SubTitle>
        <Document>
          <p>
            backlog上にあるカリキュラムの資材をダウンロードしよう!<br>
          </p>
          <br>
          <p>
            ④<br>
            ホーム画面にから「Git」を選択しましょう<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/backlog-4.png" alt="手順④" class="screen-image">
          </div>
          <br>
          <p>
            ⑤<br>
            リポジトリ一覧からフロントエンド初級カリキュラム用と記載がある部分からURLを右のアイコンマークからコピーしましょう。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/backlog-5.png" alt="手順⑤" class="screen-image">
          </div>
          <br>
          <p>
            ⑥<br>
            環境構築とインストールからダウンロードしたSourceTreeを開きましょう。開いたら上部にあるクローンを押しましょう。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-6.png" alt="手順⑥" class="screen-image">
          </div>
          <br>
          <p>
            ⑦<br>
            次に画面のテキストフィールドの一番上に先ほどコピーしたURLをペーストして下さい。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-7.png" alt="手順⑦" class="screen-image">
          </div>
          <br>
          <p>
            ⑧<br>
            するとこのようなタブが開かれるのでbacklogで設定したUsernameにメールアドレスを入れパスワードを入力して「Continue」を押しましょう。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-8.png" alt="手順⑧" class="screen-image">
          </div>
          <br>
          <p>
            ⑨<br>
            二番目にあるテキストフィールドはカリキュラム資材をクローン場所を決める場所です。<br>
            格納先はCドライブ直下に「grow」フォルダを右クリックで作成しそのフォルダを参照しましょう。<br>
            作れれば画像のようなフォルダパスになっています。<br>
            三番目のテキストフィールドはそのカリキュラム資材をどういうフォルダで格納するかを指定するので初級カリキュラムであればそのまま「grow-frontend-beginner」としておきましょう。<br>
            中級以降でも同じ操作をするので中級ではその名前にしてください。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-9.png" alt="手順⑨" class="screen-image">
          </div>
          <br>
          <p>
            ⑩<br>
            クローンに成功すればこのような画面が表示されます。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-10.png" alt="手順⑩" class="screen-image">
          </div>
          <br>
          <p>
            ⑪<br>
            次に自分専用のブランチを作ります。画面上部のブランチを押しましょう。<br>
            新規ブランチの部分に自分の名前をローマ字で入れましょう。<br>
            その後にブランチの作成を押して準備は完了です。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-11.png" alt="手順⑪" class="screen-image">
          </div>
          <br>
          <p>
            ⑫<br>
            画面左のブランチに自分が作成したブランチ名が作成され、〇がついていることを確認しましょう。ついていなければダブルクリックで切り替えて下さい。<br>
            ここまでできればカリキュラムのダウンロードと提出までの準備は完了です。<br>
          </p><br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-12.png" alt="手順⑫" class="screen-image">
          </div>
          <br>
        </Document>
      </div>
      <div class="side-content">
        <TableOfContents :sections="sections" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Document from "@/components/Document.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { environmentData } from "@/data/environmentData.js";

export default {
  name: "Procedure",
  components: {
    Title,
    SubTitle,
    Document,
    TableOfContents,
  },
  data() {
    return {
      environmentData: environmentData,
      sections: [
        { id: "Title", title: "カリキュラムの進めるための準備をしよう!" },
        { id: "subTitle1", title: "1. backlogにて課題を担当者に見てもらえるようにしよう!" },
        { id: "subTitle2", title: "2. カリキュラム資材を自分のPCにダウンロードしよう!" },
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

.screen-image{
  max-width: 100%;
  height: auto;
}

</style>