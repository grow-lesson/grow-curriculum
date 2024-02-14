<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Javascript 1" id="Title"></Title>
        <Document>
          <p>Javascriptとは何なのか、また基本的な算術演算子について学びましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. Javascriptについて学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. Javascriptとは?" id="sectionTitle1-1"></SectionTitle>
          <p>
            皆さんがこれから学ぶ「Javascript」について概要を理解しましょう!<br>
          </p><br>
          <HighlightWord word="Javascript"></HighlightWord>
          <p> 
            JavaScript はウェブページを動的に操作し、対話的な体験を提供するためのプログラミング言語です。<br>
            ウェブ開発において、HTML（構造）で骨組みを作り、CSS（スタイル）で装飾肉付けを行い、JavaScript（動作）でアニメーションや機能を作り出します。<br>
            JavaScript は、ウェブブラウザ内で動作するクライアントサイド言語として広く使われています。<br>
            <br>
            ではJavascript使う方法を学んでいきましょう!
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="javascript-image" alt="javascript-logo" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. Javascriptを実行するため方法とインストール" id="sectionTitle1-2"></SectionTitle>
          <p>
            Javascriptの処理を実行させるためには次の方法があります。<br><br>
            ・ブラウザ上で実行する<br>
              1つ目の方法は、HTMLファイルを用意してscriptタグに直接処理を書き、このHTMLファイルをブラウザ上で開くことで実行されます。<br>
              HTMLについてわからない場合はHTML・CSSコースから進めてみましょう。
          </p><br>
          <Terminal :fileName="javascriptData.file1.filename" :copiedText="javascriptData.file1.code" :lang="javascriptData.file1.language" />
          <br>
          <p>
            上のコードをHTMLファイルに入れ、ブラウザ上で開いた結果が以下になります。
          </p>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="screen-image" alt="sample-1" />
          </div><br>
          <p>
            次にHTMLを使わず、Javascriptの処理のみで実行させる方法を紹介します。<br><br>
            ・Node.jsを使って実行する<br>
              2つ目の方法はNode.jsを使って処理を実行させる方法になります。<br>
              まずはNode.jsがどういったものなのか学びましょう。
          </p><br>
          <HighlightWord word="Node.js"></HighlightWord>
          <p>
            Node.jsはサーバーサイドで使われるJavascriptで2009年に作成されたプラットフォームになります。<br>
            ブラウザ上で動作する JavaScriptをサーバサイドでも動作させる事ができる実行環境です。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="nodejs-logo" alt="nodejs" />
          </div><br>
          <p>
            Node.jsはインストールする必要があるため以下の手順でインストールしましょう。<br><br>
            ・Windowsの方<br>
            ①<br>
            以下からLTSバージョンをダウンロードしましょう。<br>
          </p><br>
          <div class="download">
            <a class="download-link" href="https://nodejs.org/en">Node.jsをダウンロードする</a>
          </div><br>
          <p>
            ダウンロードできたらexeファイルを開いて、すべて[Next]で進めましょう。<br><br>
            ②<br>
            Windowsであれば「GitBash」、Macであれば「ターミナル」を開きましょう。(ダウンロードする前に開いていたら反映できていないので再起動してください。)<br>
            Node.jsが使用できるか確認しましょう。<br><br>
            ③<br>
            次のコマンドを入力し実行したときにバージョンが表示されればNode.jsの設定は完了です。<br><br>
          </p>
          <Terminal :fileName="javascriptData.file2.filename" :copiedText="javascriptData.file2.code" :lang="javascriptData.file2.language" />
          <p><br>
            ・Macの方<br>
            ①<br>
            「ターミナル」を開きましょう。<br>
            ルートディレクトリに移動します。<br>
          </p>
          <Terminal :fileName="javascriptData.file3.filename" :copiedText="javascriptData.file3.code" :lang="javascriptData.file3.language" />
          <p><br>
            ②<br>
            nodebrewのインストールをしましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file4.filename" :copiedText="javascriptData.file4.code" :lang="javascriptData.file4.language" />
          <p><br>
            <span class="markup-word-red">実行結果が「/usr/local/bin/zsh」だった場合</span><br><br>
            ③-1<br>
            「.zshrc」ファイルを作成しましょう。（.zshrcファイルがない方のみ）<br>
          </p>
          <Terminal :fileName="javascriptData.file5.filename" :copiedText="javascriptData.file5.code" :lang="javascriptData.file5.language" />
          <p><br>
            ③-2<br>
            作成した設定ファイルを編集しましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file6.filename" :copiedText="javascriptData.file6.code" :lang="javascriptData.file6.language" />
          <p><br>
            ③-3<br>
            「.zshrc」ファイルを編集しましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file7.filename" :copiedText="javascriptData.file7.code" :lang="javascriptData.file7.language" />
          <p><br>
            ③-4<br>
            「.zshrc」ファイルを適応させましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file8.filename" :copiedText="javascriptData.file8.code" :lang="javascriptData.file8.language" />
          <p><br>
            <span class="markup-word-red">実行結果が「/usr/local/bin/bash」だった場合</span><br><br>
            ③-1<br>
            「.bash_profile」を作成しましょう。（.bash_profileファイルがない方のみ）<br>
          </p>
          <Terminal :fileName="javascriptData.file9.filename" :copiedText="javascriptData.file9.code" :lang="javascriptData.file9.language" />
          <p><br>
            ③-2<br>
            作成した設定ファイルを編集しましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file10.filename" :copiedText="javascriptData.file10.code" :lang="javascriptData.file10.language" />
          <p><br>
            ③-3<br>
            「.bash_profile」ファイルを編集しましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file11.filename" :copiedText="javascriptData.file11.code" :lang="javascriptData.file11.language" />
          <p><br>
            ③-4<br>
            「.bash_profile」ファイルを適応させましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file1.filename" :copiedText="javascriptData.file12.code" :lang="javascriptData.file12.language" />
          <p><br>
            <span class="markup-word-red">ここから共通です</span><br><br>
            ④<br>
            nodebrewがインストールされているか確認しましょう。バージョンが表示されればOKです。<br>
          </p>
          <Terminal :fileName="javascriptData.file13.filename" :copiedText="javascriptData.file13.code" :lang="javascriptData.file13.language" />
          <p><br>
            ⑤<br>
            Node.jsのインストールをインストールしましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file14.filename" :copiedText="javascriptData.file14.code" :lang="javascriptData.file14.language" />
          <p><br>
            ⑥<br>
            現在インストールされているNode.jsのバージョンを確認しましょう。<br>
          </p>
          <Terminal :fileName="javascriptData.file15.filename" :copiedText="javascriptData.file15.code" :lang="javascriptData.file15.language" />
          <p><br>
            ⑦<br>
            使用するNode.jsのバージョンを設定しましょう。<br>
            ⑥で表示されたバージョンを使用してください。<br>
            例えば「v12.6.0」と表示されたならuseの後は「use v12.6.0」としましょう<br>
          </p>
          <Terminal :fileName="javascriptData.file16.filename" :copiedText="javascriptData.file16.code" :lang="javascriptData.file16.language" />
          <p><br>
            ⑧<br>
            Node.jsが使用できるか確認しましょう。バージョンが表示されればOKです。<br>
          </p>
          <Terminal :fileName="javascriptData.file17.filename" :copiedText="javascriptData.file17.code" :lang="javascriptData.file17.language" />
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. JavascriptをNode.jsで実行しよう" id="sectionTitle1-3"></SectionTitle>
          <p>
            インストールできたら次は実行を行ってみましょう!<br>
          </p>
          <p class="description-red">ここからの作業はMacでは「ホームディレクトリ」で、Windowsでは「C:ドライブ」に移動している状態で作業してください。</p><br><br>
          <p>
            移動できたら、Macではターミナル、WindowsではGitBashを使い、mkdirコマンドで「javascript-lesson」ディレクトリを作成しましょう。<br>
            ディレクトリを作成したらtouchコマンドで「javascript-lesson-1.js」を作成しましょう。<br>
            作成出来たらVisual Studio Codeでディレクトリを開きましょう。<br>
            ここまでできれば以下の画像のようになっていると思います。<br>
            Visual Studio Code出の開き方がわかない場合はHTML・CSSコースを、コマンドがわからない場合はコマンドラインコースをは一旦戻って復習しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="screen-image" alt="vscode-1" />
          </div><br><br>
          <p>
            <HighlightWord word='console.log("出力したい文字")'></HighlightWord><br>
            ・javascriptを実行したときにターミナル上に指定した文字や数字などを出力することができるメソッドです。<br>
              はじめての処理は出力を行ってみましょう!<br><br>
            ①<br>
            以下の処理を入れてください。<br>
          </p>
          <Terminal :fileName="javascriptData.file18.filename" :copiedText="javascriptData.file18.code" :lang="javascriptData.file18.language" />
          <p>
            ②<br>
            それではNode.jsで実行してみましょう。<br>
            以下のコマンドをターミナル(GitBash)に入力して実行して下さい。<br><br>
          </p>
          <Terminal :fileName="javascriptData.file19.filename" :copiedText="javascriptData.file19.code" :lang="javascriptData.file19.language" />
          <p>
            <br>
            ターミナル、またGitBashでこのように出力されればOKです。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="screen-image" alt="result-1" />
          </div><br><br>
        </Document>

        <SubTitle subTitle="2. 算術演算子について学ぶ" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. 変数と定数" id="sectionTitle2-1"></SectionTitle>
          <p>
            プログラミング言語で必ず必要になる知識として変数と定数の違いについて理解できるようになりましょう!<br><br>
            <HighlightWord word='変数'></HighlightWord><br>
            ・変数はプログラム中でデータを保存・操作するための入れ物です。名前を付けてデータを保持することができ、その名前を使ってデータを呼び出すことができます。<br><br>
            JavaScript では、3つのキーワードを使用して変数を宣言することができます。<br>
            それぞれの違いについて見てみましょう。<br>
            1:<HighlightWord word='var'></HighlightWord><br>
            変数を宣言する方法で一番古い方法です。再定義・再代入が可能になります。<br><br>
            2:<HighlightWord word='let'></HighlightWord><br>
            再定義は不可となります。再代入は可能です。<br><br>
            3:<HighlightWord word='const'></HighlightWord><br>
            再定義も再代入も不可です。<br><br>
            では再定義と再代入とはどういったものなのか図で説明します。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="powerpoint-image" alt="box-1" />
          </div><br><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="screen-image" alt="result-2" />
          </div><br><br>
          <p>
            このように数の定義や再代入についてイメージしてもらえればわかりやすいかと思います。<br>
            では次に<span class="markup-word-blue">定数</span>ですが、定数はconstで定義された値をの事を指します。<br>
            理由としては再定義も再代入も不可のため、定まった値になるためです。<br>
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="2-2. データ型" id="sectionTitle2-2"></SectionTitle>
          <p>
            値には様々な種類があります。各値の種類を定義する仕組みを覚えましょう!<br><br>
            <HighlightWord word='データ型'></HighlightWord><br>
            ・データ型は、プログラム内で使用されるデータの種類を定義するための仕組みです。<br>
            各データ型は、データを保存するメモリと呼ばれる所での保存方法や操作方法に影響を与えます。<br>
            プログラムがデータを効果的に扱うためには、適切なデータ型を選択することが重要です。<br>
            JavaScript にはいくつかの基本的なデータ型があります。<br><br>
            1:<HighlightWord word='数値型(Number)'></HighlightWord><br>
            数値を表すためのデータ型です。整数や浮動小数点数を扱えます。
          </p>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" class="screen-image" alt="result-3" />
          </div><br><br>
          <p>
            2:<HighlightWord word='文字列型(String)'></HighlightWord><br>
            文字の連なりを表すためのデータ型です。
          </p>
          <div>
            <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" class="screen-image" alt="result-4" />
          </div><br><br>
          <p>
            3:<HighlightWord word='ブール型(Boolean)'></HighlightWord><br>
            真（true）または偽（false）の値を表すためのデータ型です
          </p>
          <div>
            <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" class="screen-image" alt="result-5" />
          </div><br><br>
          <p>
            4:<HighlightWord word='未定義型(Undefined)'></HighlightWord><br>
            値が存在しないことを示すためのデータ型です。
          </p>
          <div>
            <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" class="screen-image" alt="result-6" />
          </div><br><br>
          <p>
            5:<HighlightWord word='ヌル型(Null)'></HighlightWord><br>
            数値を表すためのデータ型です。整数や浮動小数点数を扱えます。
          </p>
          <div>
            <img @click="openModal(imagePaths.step12)" :src="imagePaths.step12" class="screen-image" alt="result-7" />
          </div><br><br>
          <p>
            6:<HighlightWord word='シンボル型(Symbol)'></HighlightWord><br>
            シンボルを表すためのデータ型で、一意な識別子として使用されます（ES6 以降）。
          </p>
          <div>
            <img @click="openModal(imagePaths.step13)" :src="imagePaths.step13" class="screen-image" alt="result-8" />
          </div><br><br>
          <p>
            7:<HighlightWord word='オブジェクト型'></HighlightWord><br>
            JavaScriptでは、オブジェクトも重要なデータ型です。オブジェクトは複数の値や関数をグループ化して扱うための構造です。
          </p>
          <div>
            <img @click="openModal(imagePaths.step14)" :src="imagePaths.step14" class="screen-image" alt="result-9" />
          </div><br><br>
          <p>
            8:<HighlightWord word='配列型 (Array) '></HighlightWord><br>
            配列は、複数の値を順序付けて保存するためのデータ型です。
          </p>
          <div>
            <img @click="openModal(imagePaths.step15)" :src="imagePaths.step15" class="screen-image" alt="result-10" />
          </div><br><br>
          <p>
            9:<HighlightWord word='関数型(Function)'></HighlightWord><br>
            関数は、特定のタスクを実行するための再利用可能なコードブロックです
          </p>
          <div>
            <img @click="openModal(imagePaths.step16)" :src="imagePaths.step16" class="screen-image" alt="result-11" />
          </div><br><br>
          <p>
            また、以下のようなことも出来ます。<br>
            <HighlightWord word='型変換'></HighlightWord><br>
            異なるデータ型間で変換を行うことです。
          </p>
          <div>
            <img @click="openModal(imagePaths.step17)" :src="imagePaths.step17" class="screen-image" alt="result-12" />
          </div><br><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="2-3. 算術演算子" id="sectionTitle2-3"></SectionTitle>
          <p>
            コンピュータは電卓のように計算ができます。<br>
            ではどのようにして計算を行うのか学んでいきましょう!<br><br>
            <HighlightWord word='算術演算子'></HighlightWord><br>
            ・算術演算子とは、数値の計算を行うための記号です。<br><br>
            1:<HighlightWord word='加算（+）'></HighlightWord><br>
            加算演算子は、数値を足し合わせるために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step18)" :src="imagePaths.step18" class="screen-image" alt="result-13" />
          </div><br><br>
          <p>
            2:<HighlightWord word='減算（-）'></HighlightWord><br>
            減算演算子は、数値を引き算するために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step19)" :src="imagePaths.step19" class="screen-image" alt="result-14" />
          </div><br><br>
          <p>
            3:<HighlightWord word='乗算（*）'></HighlightWord><br>
            乗算演算子は、数値を掛け合わせるために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step20)" :src="imagePaths.step20" class="screen-image" alt="result-15" />
          </div><br><br>
          <p>
            4:<HighlightWord word='除算（/）'></HighlightWord><br>
            除算演算子は、数値を割り算するために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step21)" :src="imagePaths.step21" class="screen-image" alt="result-16" />
          </div><br><br>
          <p>
            5:<HighlightWord word='剰余（%）'></HighlightWord><br>
            剰余演算子は、2 つの数値の剰余（余り）を計算するために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step22)" :src="imagePaths.step22" class="screen-image" alt="result-17" />
          </div><br><br>
          <p>
            6:<HighlightWord word='インクリメント（++）'></HighlightWord><br>
            インクリメント演算子は、変数の値を1増やすために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step23)" :src="imagePaths.step23" class="screen-image" alt="result-18" />
          </div><br><br>
          <p>
            7:<HighlightWord word='デクリメント（--）'></HighlightWord><br>
            デクリメント演算子は、変数の値を1減らすために使用されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step24)" :src="imagePaths.step24" class="screen-image" alt="result-19" />
          </div><br><br>
          <p>
            よって、数値の場合は算術演算子を使用すると数学的な計算ができることがわかります。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step26)" :src="imagePaths.step26" class="screen-image" alt="result-20" />
          </div><br><br>
          <p>
            では、文字列に対して算術演算子を使用するとどうなるか見てみましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step27)" :src="imagePaths.step27" class="screen-image" alt="result-21" />
          </div><br><br>
          <p>
            このように、文字列と文字列を「+」演算子で連結することができます。<br>
            ただし、他の算術演算子（減算など）は、文字列に対して使用すると、自動的に数値への変換が試みられます。<br><br>
            また、文字列と数値を算術演算子を使って計算するか見てみましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.step28)" :src="imagePaths.step28" class="screen-image" alt="result-22" />
          </div><br><br>
          <p>
            上記の例では、strNum は文字列ですが、num は数値です。<br>
            文字列と数値を「+」演算子で結合しようとすると、数値が文字列に変換されてから連結されます。<br>
          </p>
        </Document>
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
        </div>
      <div class="side-content">
        <TableOfContents :sections="sections" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { javascriptData } from "@/data/javascriptData.js";
import Modal from "@/components/common/Modal.vue";

export default {
  name: "JavaScript1",
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
    Modal,
  },
  setup() {
    const sections = [
      { id: "Title", title: "Javascript 1" },
      { id: "subTitle1", title: "  1. Javascriptについて学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. Javascriptとは?" },
      { id: "sectionTitle1-2", title: "    1-2. Javascriptを実行するため方法とインストール" },
      { id: "sectionTitle1-3", title: "    1-3. JavascriptをNode.jsで実行しよう" },
      { id: "subTitle2", title: "  2. 算術演算子について学ぶ" },
      { id: "sectionTitle2-1", title: "    2-1. 変数と定数" },
      { id: "sectionTitle2-2", title: "    2-2. データ型" },
      { id: "sectionTitle2-3", title: "    2-3. 算術演算子" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/javascript-1/javascript.png"),
      step2: require("../../../assets/images/course/javascript-1/javascript-sample-1.png"),
      step3: require("../../../assets/images/course/javascript-1/nodejs.png"),
      step4: require("../../../assets/images/course/javascript-1/vscode-1.png"),
      step5: require("../../../assets/images/course/javascript-1/result-1.png"),
      step6: require("../../../assets/images/course/javascript-1/hennsu.png"),
      step7: require("../../../assets/images/course/javascript-1/result-2.png"),
      step8: require("../../../assets/images/course/javascript-1/result-3.png"),
      step9: require("../../../assets/images/course/javascript-1/result-4.png"),
      step10: require("../../../assets/images/course/javascript-1/result-5.png"),
      step11: require("../../../assets/images/course/javascript-1/result-6.png"),
      step12: require("../../../assets/images/course/javascript-1/result-7.png"),
      step13: require("../../../assets/images/course/javascript-1/result-8.png"),
      step14: require("../../../assets/images/course/javascript-1/result-9.png"),
      step15: require("../../../assets/images/course/javascript-1/result-10.png"),
      step16: require("../../../assets/images/course/javascript-1/result-11.png"),
      step17: require("../../../assets/images/course/javascript-1/result-12.png"),
      step18: require("../../../assets/images/course/javascript-1/result-13.png"),
      step19: require("../../../assets/images/course/javascript-1/result-14.png"),
      step20: require("../../../assets/images/course/javascript-1/result-15.png"),
      step21: require("../../../assets/images/course/javascript-1/result-16.png"),
      step22: require("../../../assets/images/course/javascript-1/result-17.png"),
      step23: require("../../../assets/images/course/javascript-1/result-18.png"),
      step24: require("../../../assets/images/course/javascript-1/result-19.png"),
      step25: require("../../../assets/images/course/javascript-1/result-20.png"),
      step26: require("../../../assets/images/course/javascript-1/result-21.png"),
      step27: require("../../../assets/images/course/javascript-1/result-22.png"),
      step28: require("../../../assets/images/course/javascript-1/result-23.png"),
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      javascriptData,
      sections,
      imagePaths,
      selectedImage,
      isModalOpen,
      openModal,
    };
  },
};
</script>


<style scoped>
.container {
  display: flex;
  width: 100%;
}

.change_component_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  position: relative;
  background: #228bc8;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  padding: 0 25px 0 40px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: left;
  text-decoration: none;
  transition-duration: 0.3s;
  margin: 20px 0 0 50px;
}

.change_component_button:before {
  content: "";
  width: 8px;
  height: 8px;
  border: 0;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 25px;
  margin-top: -6px;
}

.change_component_button:hover {
  background: #fff;
  color: #228bc8;
}

.change_component_button:hover:before {
  border-top: 2px solid #228bc8;
  border-right: 2px solid #228bc8;
}

.main-content{
  width: 75%;
}
.side-content{
  margin-left: 1%;
  margin-top: 5vh;
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

.description-red {
  color: rgb(255, 37, 37);
  font-weight: bold;
}

.javascript-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
}

.nodejs-logo {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link {
  color: rgb(72, 0, 255);
}

.screen-image {
  max-width: 100%;
  height: auto;
  border: 1px solid rgb(175, 175, 175);
  cursor: pointer;
}
.powerpoint-image {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
  border: 1px solid rgb(175, 175, 175);
  cursor: pointer;
}

.download-button {
  background-color: #4caf50; /* ボタンの背景色 */
  color: white; /* ボタンのテキストカラー */
  border: none; /* ボーダーなし */
  padding: 10px 20px; /* 上下左右のパディング */
  text-align: center; /* テキストを中央に配置 */
  text-decoration: none; /* テキスト装飾なし */
  display: inline-block; /* インラインブロック要素にする */
  font-size: 16px; /* フォントサイズ */
  border-radius: 5px; /* 角丸 */
  cursor: pointer; /* カーソルをポインターに変更 */
  transition: background-color 0.3s; /* ホバー時の背景色変化にトランジションを追加 */
}

.download-button:hover {
  background-color: #45a049; /* ホバー時の背景色 */
}

.siteImages{
  display: flex;
  flex-wrap: wrap;
}

.siteImage {
  width: 30%;
  margin-left: 10px;
}

.siteImage:nth-child(n+4) {
  margin-top: 10px;
}

/* タブレット版 */
@media (max-width: 835px) {
  .main-content {
    width: 100%;
  }
  .side-content {
    display: none;
  }

  .change_component_button {
    width: auto; /* 幅を自動調整 */
    text-align: center; /* テキストを中央揃え */
    margin: 20px auto; /* 上下のマージンを調整 */
  }

  .change_component_button:before {
    display: none; /* トライアングルアイコンを非表示 */
  }
}
</style>