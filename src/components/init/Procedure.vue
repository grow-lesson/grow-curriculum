<template>
  <div>
    <Header />
    <Spinner :isLoading="isLoading" />
    <button class="btn_04" @click="toggleOS" @focus="buttonFocus" @blur="buttonBlur">{{ isWindows ? "Macをお持ちの方はこちら" : "Windowsをお持ちの方はこちら" }}</button>
    <div class="container">
      <!-- Windows版の説明 -->
      <div class="main-content" v-show="isWindows">
        <Title title="カリキュラムの進めるための準備をしよう!(Windows版)" id="Title-w"></Title>
        <SubTitle subTitle="1. backlogにて課題を担当者に見てもらえるようにしよう!" id="subTitle1-w"></SubTitle>
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
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-1.png" alt="手順①" class="screen-image" />
          </div>
          <br>
          <p>
            ②<br>
            ホーム画面に入ったら左のサイドバーから「課題の追加」を選択しましょう<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-2.png" alt="手順②" class="screen-image" />
          </div>
          <br>
          <p>
            ③<br>
            「課題の追加」を開いたら件名を入力しましょう。件名は「【課題FB】名前」このカッコの部分をコピーして名前部分に自分の名前を入れましょう。<br>
            まず最初は課題の詳細に「@」で担当者をメンションして、あいさつを送りましょう。<br>
            入力ができたら、課題の詳細の下にある担当者を自分の担当を選択してください。 ここまで入力できたら右上にある「追加」を押して下さい。
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-3.png" alt="手順③" class="screen-image" />
          </div>
          <br>
        </Document>
        <SubTitle subTitle="2. カリキュラム資材を自分のPCにダウンロードしよう!" id="subTitle2-w"></SubTitle>
        <Document>
          <p>backlog上にあるカリキュラムの資材をダウンロードしよう!<br></p>
          <br>
          <p>
            ④<br>
            ホーム画面にから「Git」を選択しましょう<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-4.png" alt="手順④" class="screen-image" />
          </div>
          <br>
          <p>
            ⑤<br>
            リポジトリ一覧からフロントエンド初級カリキュラム用と記載がある部分からURLを右のアイコンマークからコピーしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-5.png" alt="手順⑤" class="screen-image" />
          </div>
          <br>
          <p>
            ⑥<br>
            環境構築とインストールからダウンロードしたSourceTreeを開きましょう。開いたら上部にあるクローンを押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-6.png" alt="手順⑥" class="screen-image" />
          </div>
          <br>
          <p>
            ⑦<br>
            次に画面のテキストフィールドの一番上に先ほどコピーしたURLをペーストして下さい。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-7.png" alt="手順⑦" class="screen-image" />
          </div>
          <br>
          <p>
            ⑧<br>
            するとこのようなタブが開かれるのでbacklogで設定したUsernameにメールアドレスを入れパスワードを入力して「Continue」を押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-8.png" alt="手順⑧" class="screen-image" />
          </div>
          <br>
          <p>
            ⑨<br>
            二番目にあるテキストフィールドはカリキュラム資材をクローン場所を決める場所です。<br>
            格納先はCドライブ直下に「grow」フォルダを右クリックで作成しそのフォルダを参照しましょう。<br>
            作れれば画像のようなフォルダパスになっています。<br>
            三番目のテキストフィールドはそのカリキュラム資材をどういうフォルダで格納するかを指定するので初級カリキュラムであればそのまま「grow-frontend-beginner」としておきましょう。<br>
            中級以降でも同じ操作をするので中級ではその名前にしてください。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-9.png" alt="手順⑨" class="screen-image" />
          </div>
          <br>
          <p>
            ⑩<br>
            クローンに成功すればこのような画面が表示されます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-10.png" alt="手順⑩" class="screen-image" />
          </div>
          <br>
          <p>
            ⑪<br>
            次に自分専用のブランチを作ります。画面上部のブランチを押しましょう。<br>
            新規ブランチの部分に自分の名前をローマ字で入れましょう。<br>
            その後にブランチの作成を押して準備は完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-11.png" alt="手順⑪" class="screen-image" />
          </div>
          <br>
          <p>
            ⑫<br>
            画面左のブランチに自分が作成したブランチ名が作成され、〇がついていることを確認しましょう。ついていなければダブルクリックで切り替えて下さい。<br>
            ここまでできればカリキュラムのダウンロードと提出までの準備は完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-12.png" alt="手順⑫" class="screen-image" />
          </div>
          <br>
        </Document>
        <SubTitle subTitle="3. カリキュラムを進めて提出しよう!" id="subTitle3-w"></SubTitle>
        <Document>
          <p>
            ⑭<br>
            カリキュラムを進めるためにVisual Studio Codeを開きましょう<br>
            開くとこのような画面が出てきます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-1.png" alt="手順⑮" class="screen-image" />
          </div>
          <br>
          <p>
            ⑮<br>
            次にファイルを選択しましょう。<br>
            「フォルダーを開く」を選択してください。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-2.png" alt="手順⑮" class="screen-image" />
          </div>
          <br>
          <p>
            ⑯<br>
            画面から「Windows(C:)」をクリックしCドライブを開きます。<br>
            クローンした時の「grow」ファルダができているのでそこを開くとダウンロードしたカリキュラムの資材がありますのでそのフォルダをワンクリックし選択状態にしたら右下の「フォルダーの選択」を押してください。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-3.png" alt="手順⑯" class="screen-image" />
          </div>
          <br>
          <p>
            ⑰<br>
            するとそのフォルダの中身がVisual Studio Codeに表示されます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-4.png" alt="手順⑰" class="screen-image" />
          </div>
          <br>
          <p>
            ⑱<br>
            「answer」は答えが入っています。<br>
            「tool」のちに説明しますが、デザインをする上で必要なスタイルなどが格納されています。<br>
            「tool」は特に編集する必要はないので触らないようにしましょう。<br>
            今回使うのは「work」と書かれた所にある課題を開きましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-5.png" alt="手順⑱" class="screen-image" />
          </div>
          <br>
          <p>
            ⑲<br>
            「div-puzzule-pc」の「lesson-1」にある「index.html」と「style.css」を開きましょう。<br>
            画面のようにに画面にするときは左の2つのファイルをドラッグアンドドロップで引っ張ると分けることができます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-6.png" alt="手順⑲" class="screen-image" />
          </div>
          <br>
          <p>
            ⑳<br>
            「index.html」はbodyと呼ばれる部分の中に書きましょう。「style.css」は「ここから書く」と書かれた下から書いてください。4行目にある「.clearfix::after」の部分は消さないようにしましょう。<br>
            画面のようにに画面にするときは左の2つのファイルをドラッグアンドドロップで引っ張ると分けることができます。<br>
            今記述している事はあくまでも例になるのでbacklogの完成図を見て作りましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-7.png" alt="手順⑳" class="screen-image" />
          </div>
          <br>
          <p>
            ㉑<br>
            課題の説明はbacklogの「Wiki」に記載があるのでやりたい課題のページリンクをクリックしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-6.png" alt="手順㉑" class="screen-image" />
          </div>
          <br>
          <p>
            ㉒<br>
            課題のデザインなどが完成したら、そのファイルの部分で「Ctrl」キーを押しながら「s」を押して保存しましょう。<br>
            手順⑳の時にはついていたファイル名の隣にある白い丸がなくなれば保存完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-win-8.png" alt="手順㉒" class="screen-image" />
          </div>
          <br>
          <p>
            ㉓<br>
            次にSourceTreeを開き、「コミット」と書いてあるボタンを押しましょう。<br>
            すると以下のような画面になります。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-13.png" alt="手順㉓" class="screen-image" />
          </div>
          <br>
          <p>
            ㉔<br>
            画面下の「作業ツリーのファイル」にある二つのファイルの隣にあるプラスボタンを押すとファイルが二つが「Indexにステージしたファイル」に表示されます。<br>
            すると以下のような画面になります。ファイルをクリックすると画面右部分に差分を見ることができます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-14.png" alt="手順㉔" class="screen-image" />
          </div>
          <br>
          <p>
            ㉕<br>
            次に画面下のテキストフィールドにコミットメッセージを書きましょう。<br>
            基本的には何をどう変えたか詳細に書きますが、デザインの修正はこの後なので初回のコミットは「○○の実装」と入力しましょう。<br>
            入力できたら右下の「コミット」ボタンを押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-15.png" alt="手順㉕" class="screen-image" />
          </div>
          <br>
          <p>
            ㉕<br>
            次に画面下のテキストフィールドにコミットメッセージを書きましょう。<br>
            基本的には何をどう変えたか詳細に書きますが、デザインの修正はこの後なので初回のコミットは「○○の実装」と入力しましょう。<br>
            入力できたら右下の「コミット」ボタンを押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-15.png" alt="手順㉕" class="screen-image" />
          </div>
          <br>
          <p>
            ㉖<br>
            入力できたら右下の「プッシュ」ボタンを押しましょう。<br>
            すると以下のような表示が出てきます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-16.png" alt="手順㉖" class="screen-image" />
          </div>
          <br>
          <p>
            ㉗<br>
            自分が作ったブランチのみにチェックを入れましょう。<br>
            <HighlightWord word="絶対にmasterの方にチェックを入れないようにしましょう!"></HighlightWord><br>
            問題ないことを確認して「プッシュ」を押せばbacklog上にアップロード完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-win-17.png" alt="手順㉗" class="screen-image" />
          </div>
          <br>
          <p>
            ㉘<br>
            backlogを開き「Git」をクリックしましょう。<br>
            右上にプッシュされたことが書かれていれば問題ないので「課題」をクリックしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-7.png" alt="手順㉘" class="screen-image" />
          </div>
          <br>
          <p>
            ㉙<br>
            自分の名前の課題をクリックしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-8.png" alt="手順㉙" class="screen-image" />
          </div>
          <br>
          <p>
            ㉚<br>
            下にある「コメントの詳細」フィールドを押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-9.png" alt="手順㉚" class="screen-image" />
          </div>
          <br>
          <p>
            ㉛<br>
            FBをしてくれる先輩エンジニアの方の名前をメンションと、テンプレートとしては画像の例に沿って内容を入力してください。<br>
            状態を「処理済み」に変更し、担当者はFBをしてくれる先輩エンジニアの方の名前を選択しましょう。<br>
            文章に問題がなければ「登録」ボタンを押して完了です。
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-10.png" alt="手順㉛" class="screen-image" />
          </div>
          <br>
        </Document>
      </div>
      <!-- Mac版の説明 -->
      <div class="main-content" v-show="!isWindows">
        <Title title="カリキュラムの進めるための準備をしよう!(Mac版)" id="Title-m"></Title>
        <SubTitle subTitle="1. backlogにて課題を担当者に見てもらえるようにしよう!" id="subTitle1-m"></SubTitle>
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
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-1.png" alt="手順①" class="screen-image" />
          </div>
          <br>
          <p>
            ②<br>
            ホーム画面に入ったら左のサイドバーから「課題の追加」を選択しましょう<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-2.png" alt="手順②" class="screen-image" />
          </div>
          <br>
          <p>
            ③<br>
            「課題の追加」を開いたら件名を入力しましょう。件名は「【課題FB】名前」このカッコの部分をコピーして名前部分に自分の名前を入れましょう。<br>
            まず最初は課題の詳細に「@」で担当者をメンションして、あいさつを送りましょう。<br>
            入力ができたら、課題の詳細の下にある担当者を自分の担当を選択してください。 ここまで入力できたら右上にある「追加」を押して下さい。
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-3.png" alt="手順③" class="screen-image" />
          </div>
          <br>
        </Document>
        <SubTitle subTitle="2. カリキュラム資材を自分のPCにダウンロードしよう!" id="subTitle2-m"></SubTitle>
        <Document>
          <p>backlog上にあるカリキュラムの資材をダウンロードしよう!<br></p>
          <br>
          <p>
            ④<br>
            ホーム画面にから「Git」を選択しましょう<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-4.png" alt="手順④" class="screen-image" />
          </div>
          <br>
          <p>
            ⑤<br>
            リポジトリ一覧からフロントエンド初級カリキュラム用と記載がある部分からURLを右のアイコンマークからコピーしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-5.png" alt="手順⑤" class="screen-image" />
          </div>
          <br>
          <p>
            ⑥<br>
            環境構築とインストールからダウンロードしたSourceTreeを開きましょう。開いたら上部にある「新規」をクリックし「URLからクローン」を押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-6.png" alt="手順⑥" class="screen-image" />
          </div>
          <br>
          <p>
            ⑦<br>
            次に画面のテキストフィールドの一番上に先ほどコピーしたURLをペーストして下さい。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-7.png" alt="手順⑦" class="screen-image" />
          </div>
          <br>
          <p>
            ⑧<br>
            するとこのようなタブが開かれるのでbacklogで設定したUsernameにメールアドレスを入れパスワードを入力して「OK」を押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-8.png" alt="手順⑧" class="screen-image" />
          </div>
          <br>
          <p>
            ⑨<br>
            ⑦でURLをいれればフォーカスを外すと自動的にパスとフォルダが記載されます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-9.png" alt="手順⑨" class="screen-image" />
          </div>
          <br>
          <p>
            ⑩<br>
            クローンに成功すればこのような画面が表示されます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-10.png" alt="手順⑩" class="screen-image" />
          </div>
          <br>
          <p>
            ⑪<br>
            次に自分専用のブランチを作ります。画面上部のブランチを押しましょう。<br>
            新規ブランチの部分に自分の名前をローマ字で入れましょう。<br>
            その後にブランチの作成を押して準備は完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-11.png" alt="手順⑪" class="screen-image" />
          </div>
          <br>
          <p>
            ⑫<br>
            画面左のブランチに自分が作成したブランチ名が作成され、〇がついていることを確認しましょう。ついていなければダブルクリックで切り替えて下さい。<br>
            ここまでできればカリキュラムのダウンロードと提出までの準備は完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-12.png" alt="手順⑫" class="screen-image" />
          </div>
          <br>
        </Document>
        <SubTitle subTitle="3. カリキュラムを進めて提出しよう!" id="subTitle3-m"></SubTitle>
        <Document>
          <p>
            ⑭<br>
            カリキュラムを進めるためにVisual Studio Codeを開きましょう<br>
            開くとこのような画面が出てきます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-1.png" alt="手順⑮" class="screen-image" />
          </div>
          <br>
          <p>
            ⑮<br>
            次にファイルを選択しましょう。<br>
            「フォルダーを開く」を選択してください。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-2.png" alt="手順⑮" class="screen-image" />
          </div>
          <br>
          <p>
            ⑯<br>
            ファイル選択画面から家マークの「ホームディレクトリ」をクリックします。<br>
            「ホームディレクトリ」がない場合は<span><a href="https://dtmmethod.com/mac-finder-home" class="markup-word-red">こちら</a></span
            >をクリックして下さい。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/home-1.png" alt="手順⑯" class="screen-image" />
          </div>
          <br>
          <p>クローンした時の「grow-frontend-beginner」ファルダができているのでのフォルダをワンクリックし選択状態にしたら右下の「フォルダーの選択」を押してください。<br></p>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-3.png" alt="手順⑯" class="screen-image" />
          </div>
          <br>
          <p>
            ⑰<br>
            するとそのフォルダの中身がVisual Studio Codeに表示されます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-4.png" alt="手順⑰" class="screen-image" />
          </div>
          <br>
          <p>
            ⑱<br>
            「answer」は答えが入っています。<br>
            「tool」のちに説明しますが、デザインをする上で必要なスタイルなどが格納されています。<br>
            「tool」は特に編集する必要はないので触らないようにしましょう。<br>
            今回使うのは「work」と書かれた所にある課題を開きましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-5.png" alt="手順⑱" class="screen-image" />
          </div>
          <br>
          <p>
            ⑲<br>
            「div-puzzule-pc」の「lesson-1」にある「index.html」と「style.css」を開きましょう。<br>
            画面のようにに画面にするときは左の2つのファイルをドラッグアンドドロップで引っ張ると分けることができます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-5.png" alt="手順⑲" class="screen-image" />
          </div>
          <br>
          <p>
            ⑳<br>
            「index.html」はbodyと呼ばれる部分の中に書きましょう。「style.css」は「ここから書く」と書かれた下から書いてください。4行目にある「.clearfix::after」の部分は消さないようにしましょう。<br>
            画面のようにに画面にするときは左の2つのファイルをドラッグアンドドロップで引っ張ると分けることができます。<br>
            今記述している事はあくまでも例になるのでbacklogの完成図を見て作りましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-5.png" alt="手順⑳" class="screen-image" />
          </div>
          <br>
          <p>
            ㉑<br>
            課題の説明はbacklogの「Wiki」に記載があるのでやりたい課題のページリンクをクリックしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-6.png" alt="手順㉑" class="screen-image" />
          </div>
          <br>
          <p>
            ㉒<br>
            課題のデザインなどが完成したら、そのファイルの部分で「Ctrl」キーを押しながら「s」を押して保存しましょう。<br>
            手順⑳の時にはついていたファイル名の隣にある白い丸がなくなれば保存完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/vscode-mac-5.png" alt="手順㉒" class="screen-image" />
          </div>
          <br>
          <p>
            ㉓<br>
            次にSourceTreeを開き、「コミット」と書いてあるボタンを押しましょう。<br>
            すると以下のような画面になります。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-13.png" alt="手順㉓" class="screen-image" />
          </div>
          <br>
          <p>
            ㉔<br>
            画面下の「作業ツリーのファイル」にある二つのファイルの隣にあるプラスボタンを押すとファイルが二つが「Indexにステージしたファイル」に表示されます。<br>
            すると以下のような画面になります。ファイルをクリックすると画面右部分に差分を見ることができます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-14.png" alt="手順㉔" class="screen-image" />
          </div>
          <br>
          <p>
            ㉕<br>
            次に画面下のテキストフィールドにコミットメッセージを書きましょう。<br>
            基本的には何をどう変えたか詳細に書きますが、デザインの修正はこの後なので初回のコミットは「○○の実装」と入力しましょう。<br>
            入力できたら右下の「コミット」ボタンを押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-15.png" alt="手順㉕" class="screen-image" />
          </div>
          <br>
          <p>
            ㉖<br>
            入力できたら右下の「プッシュ」ボタンを押しましょう。<br>
            すると以下のような表示が出てきます。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-16.png" alt="手順㉖" class="screen-image" />
          </div>
          <br>
          <p>
            ㉗<br>
            自分が作ったブランチのみにチェックを入れましょう。<br>
            <HighlightWord word="絶対にmasterの方にチェックを入れないようにしましょう!"></HighlightWord><br>
            問題ないことを確認して「プッシュ」を押せばbacklog上にアップロード完了です。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/SourceTree-mac-17.png" alt="手順㉗" class="screen-image" />
          </div>
          <br>
          <p>
            ㉘<br>
            backlogを開き「Git」をクリックしましょう。<br>
            右上にプッシュされたことが書かれていれば問題ないので「課題」をクリックしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-7.png" alt="手順㉘" class="screen-image" />
          </div>
          <br>
          <p>
            ㉙<br>
            自分の名前の課題をクリックしましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-8.png" alt="手順㉙" class="screen-image" />
          </div>
          <br>
          <p>
            ㉚<br>
            下にある「コメントの詳細」フィールドを押しましょう。<br>
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-9.png" alt="手順㉚" class="screen-image" />
          </div>
          <br>
          <p>
            ㉛<br>
            FBをしてくれる先輩エンジニアの方の名前をメンションと、テンプレートとしては画像の例に沿って内容を入力してください。<br>
            状態を「処理済み」に変更し、担当者はFBをしてくれる先輩エンジニアの方の名前を選択しましょう。<br>
            文章に問題がなければ「登録」ボタンを押して完了です。
          </p>
          <br>
          <div>
            <img src="../../assets/images/procedure/backlog-10.png" alt="手順㉛" class="screen-image" />
          </div>
          <br>
        </Document>
      </div>
      <!-- Windows版の目次 -->
      <div class="side-content" v-show="isWindows && !isSmallScreen">
        <TableOfContents :sections="windowsSections" />
      </div>
      <!-- Mac版の目次 -->
      <div class="side-content" v-show="!isWindows && !isSmallScreen">
        <TableOfContents :sections="macSections" />
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
import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Procedure",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    HighlightWord,
    Document,
    TableOfContents,
    Spinner,
  },
  data() {
    return {
      isWindows: true,
      isSmallScreen: false,
      isLoading: false,
      windowsSections: [
        { id: "Title-w", title: "カリキュラムの進めるための準備をしよう!(Windows版)" },
        { id: "subTitle1-w", title: "  1. backlogにて課題を担当者に見てもらえるようにしよう!" },
        { id: "subTitle2-w", title: "  2. カリキュラム資材を自分のPCにダウンロードしよう!" },
        { id: "subTitle3-w", title: "  3. カリキュラムを進めて提出しよう!" },
      ],
      macSections: [
        { id: "Title-m", title: "カリキュラムの進めるための準備をしよう!(Mac版)" },
        { id: "subTitle1-m", title: "  1. backlogにて課題を担当者に見てもらえるようにしよう!" },
        { id: "subTitle1-m", title: "  2. カリキュラム資材を自分のPCにダウンロードしよう!" },
        { id: "subTitle1-m", title: "  3. カリキュラムを進めて提出しよう" },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 648;
    },
    buttonFocus() {
      // ボタンにフォーカスが当たったときにフローティング状態に設定
      this.isFloating = true;
    },
    buttonBlur() {
      // ボタンからフォーカスが外れたときにフローティング状態を解除
      this.isFloating = false;
    },
    toggleOS() {
      this.isLoading = true;
      // 2秒の遅延処理を行う（setTimeoutを使う）
      setTimeout(() => {
        // ロジックの完了後、isLoadingをfalseに設定してスピナーを非表示に
        this.isLoading = false;

        // 画面のレイアウトを切り替えるロジックをここに追加する
        this.isWindows = !this.isWindows;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.btn_04 {
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

.btn_04:before {
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

.btn_04:hover {
  background: #fff;
  color: #228bc8;
}

.btn_04:hover:before {
  border-top: 2px solid #228bc8;
  border-right: 2px solid #228bc8;
}

.main-content {
  width: 75%;
}

.side-content {
  margin-left: 1%;
  margin-top: 20px;
  width: 24%;
}

.screen-image {
  max-width: 100%;
  height: auto;
}
.markup-word-red {
  white-space: pre;
  color: rgb(255, 37, 37);
  font-weight: bold;
}

/* タブレット版 */
@media (max-width: 834px) {
  .main-content {
    width: 100%;
  }
  .side-content {
    display: none;
  }
}

/* スマホ版 */
@media (max-width: 648px) {
  .btn_04 {
    width: 70%;
    font-size: small;
  }
}
</style>
