<template>
  <div>
    <Header />
    <Spinner :isLoading="isLoading" />
    <button class="change_component_button" @click="toggleOS">{{ isWindows ? "Macをお持ちの方はこちら" : "Windowsをお持ちの方はこちら" }}</button>
    <div class="container">
      <!-- Windows版の説明 -->
      <div class="main-content" v-show="isWindows">
        <Title title="Git 1 (Windowsの方)" id="Title-w"></Title>
        <Document>
          <p>Gitのコマンド基本的な操作と考え方を学びましょう。</p>
          <p>まずはどういったものなのか図と照らし合わせながら覚えていきましょう。</p>
        </Document>
        <!-- section 1 -->
        <SubTitle subTitle="1. Gitについて学ぶ" id="subTitle1-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. Gitとは?" id="sectionTitle1-1-w"></SectionTitle>
          <p>
            皆さんがこれから学ぶ「コマンドライン」について概要を理解しましょう!<br>
          </p><br>
          <HighlightWord word="Git"></HighlightWord>
          <p> 
            Gitは分散型バージョン管理システムと呼ばれます。<br>
            コンピュータ上のファイルに発生した変更を記録し、履歴を管理してくれる便利なツールになります。
            <br><br>
            ではGitというのは具体的にどの様に使うものなのか深掘りしていきましょう!
          </p><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. Gitの使い方" id="sectionTitle1-2-w"></SectionTitle>
          <p>
            例えば、この様にフォルダの中に3つのファイルがあるとしましょう。<br>
            これらのファイルの作業を行うときすべてAさんという人だけで行うとするととても時間がかかってしまいます。<br>
            そのため、BさんやCさんなどを入れて分担作業して作業する方が効率的になります。<br>
            Gitはその管理をしやすくするツールだと覚えておきましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.solo)" :src="imagePaths.win.solo" class="powerpoint-image" alt="solo" />
          </div><br>
        </Document>
        <!-- section 2 -->
        <SubTitle subTitle="2. Gitコマンドを覚える" id="subTitle2-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. GitHubに登録する" id="sectionTitle2-1-w"></SectionTitle>
          <p>
            Gitを使えるように準備をしましょう。<br>
            まずはGitHubというサイトで新規登録を行いましょう。<br><br>
          </p>
          <div class="download">
            <a class="download-link" href="https://github.com/">GitHubで新規登録を行う</a>
          </div>
          <SectionTitle sectionTitle="2-2. Gitの初期設定をする" id="sectionTitle2-2-w"></SectionTitle>
          <p>
            まずは初期設定をしましょう。<br>
            このコマンドはGitHubアカウントを変えない限り変えることはなくほとんど変えることはないのでので覚えなくても大丈夫です。<br><br>
            ①<br>
            「環境構築やインストール」でインストールした「git bash」を開きましょう。
            開くとこのような画面になります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step1)" :src="imagePaths.win.step1" class="screen-image" alt="git-bash-1" />
          </div><br>
          <p>
            ②<br>
            開いたらCドライブに移動しましょう。<br>
            移動したらユーザー名とメールアドレスを設定しましょう。<br>
            以下の画像のようにすべて入力して実行しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step2)" :src="imagePaths.win.step2" class="screen-image" alt="git-bash-2" />
          </div><br>
          <p>
            初期設定は以上で完了です。<br><br>
          </p>
          <SectionTitle sectionTitle="2-3. Gitを準備する" id="sectionTitle2-3-w"></SectionTitle>
          <p>
            <br>
            では今回Gitを学習するための練習フォルダとファイルを作成しましょう。<br><br>
            ③<br>
            Cドライブに以下のフォルダを作成してください。<br>
            作成したらそのフォルダに移動してテキストファイルを作成しましょう。<br>
            エクスプローラで作成したフォルダの「git-practice」を確認すると以下のようにテキストファイルが作成されています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step3)" :src="imagePaths.win.step3" class="screen-image" alt="git-bash-3" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder1)" :src="imagePaths.win.folder1" class="screen-image" alt="folder1" />
          </div><br>
          <p>
            作成した練習ファイルの中でGitを使えるようにしましょう。<br><br>
            <HighlightWord word="git init"></HighlightWord><br>
            ・gitを使えるようにするコマンドです。<br>
              また、ローカルリポジトリを新規に作成するという意味もあります。<br><br>
            <HighlightWord word="ローカルリポジトリ"></HighlightWord><br>
            ・そのコマンドを入力したフォルダ内のファイルやフォルダを管理できる専用の倉庫。<br>
              この倉庫は自分のパソコン上で作られます。<br><br>
            図で表すと以下のようになります。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.init)" :src="imagePaths.win.init" class="screen-image" alt="init" />
          </div><br>
          <p>
            ④<br>
            それではコマンドを入力しましょう。<br>
            以下のようになればOKです。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step4)" :src="imagePaths.win.step4" class="screen-image" alt="git-bash-4" />
          </div><br>
          <SectionTitle sectionTitle="2-4. 共有場所の準備と登録" id="sectionTitle2-4-w"></SectionTitle>
          <p>
            ではこの自分のPC上で作成したファイルを他の人に共有できるようにウェブ上に共有場所を作成しましょう。<br>
            ⑤<br>
            先ほど登録したGitHubを開きましょう。<br>
            その次に左にある「New」ボタンを押しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.github1)" :src="imagePaths.win.github1" class="screen-image" alt="github-1" />
          </div><br>
          <p>
            ⑥<br>
            次に「Repository name」に「git-practice」と入力しましょう。<br>
            「Description」は入力しなくても大丈夫です。<br>
            リポジトリのタイプは「public」を選択しましょう。<br>
            下の残りの設定はそのままで「Create repository」を押しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.github2)" :src="imagePaths.win.github2" class="screen-image" alt="github-2" />
          </div><br>
          <p>
            このような画面になれば共有場所の作成は完了です。<br>
            ではこの共有場所は何か覚えましょう。<br><br>
            <HighlightWord word="リモートリポジトリ"></HighlightWord><br>
            ・ローカルリポジトリで管理したフォルダ内のファイルやフォルダを第三者に共有したり、管理ができるWeb上の倉庫です。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.github3)" :src="imagePaths.win.github3" class="screen-image" alt="github-3" />
          </div><br>
          <p>
            まずは今の状態を確認しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.state1)" :src="imagePaths.win.state1" class="screen-image" alt="state-1" />
          </div><br>
          <p>
            画像にある問題を整理しましょう。<br>
            「git init」で作成したローカルリポジトリに管理されているフォルダはまだ自分のPC上でしか見ることができません。<br><br>
            そのため、リモートリポジトリにアップロードするためには登録が必要になります。<br>
            それでは登録のコマンドを覚えましょう。<br>
            <HighlightWord word="git remote add リモートリポジトリ名 URL"></HighlightWord><br>
            ・リモートリポジトリを登録するコマンドです。<br>
            ここで表記されている「リモートリポジトリ名」は、GitHubで作ったリモートリポジトリと通信するために必要なURLを簡単なキーワードにして指定することができます。<br>
            よくデフォルトではoriginという名前で設定することが多いです。<br>
            そのため以下のような手順を踏みましょう。<br>
            ⑦<br>
            以下をコピーして実行しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.github4)" :src="imagePaths.win.github4" class="screen-image" alt="github-4" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.step5)" :src="imagePaths.win.step5" class="screen-image" alt="git-bash-5" />
          </div><br>
          <p>
            登録が完了しました。<br>
            ではGithub(リモートリポジトリ)上にアップロードしましょう。<br>
            アップロードするためには手順が必要です。<br>
            (1) まだアップロード(共有)してない、またはアップロードしてない編集情報をフォルダやファイルを選択する。<br>
            (2) フォルダやファイルにどのような編集や追加をしたか記録をする<br>
            (3) アップロード(共有)する<br><br>
            ⑧<br>
            ではアップロードするファイルを選択しましょう。<br><br>
            <HighlightWord word="git add (フォルダ名)ファイル名"></HighlightWord><br>
            ・登録したリモートリポジトリにアップロードするファイルを選択するコマンドです。<br>
            ファイルやフォルダ名を指定できますが、複数個ファイルなどがあると何回もこのコマンドを打つため一括で選択する方法があるので覚えておきましょう。<br>
            →<HighlightWord word="git add ."></HighlightWord><br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step6)" :src="imagePaths.win.step6" class="screen-image" alt="git-bash-6" />
          </div><br>
          <p>
            ⑨<br>
            次にフォルダやファイルにどのような編集や追加をしたか記録をしましょう。<br><br>
            <HighlightWord word="git commit -m 'メッセージ'"></HighlightWord><br>
            ・ファイルをaddコマンドで選択した理由は何か記録するコマンドです。
            メッセージには「□□ファイルの○○を修正」、「△△ファイルの名前を変更」、「××ファイルの作成」などを記載しますが、今回は初めてなので「first commit」や「initialize commit」と入力しましょう。<br><br>
            GitHubにあるコミットコマンドをコピーしコマンドを入力しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.github5)" :src="imagePaths.win.github5" class="screen-image" alt="github-5" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.step7)" :src="imagePaths.win.step7" class="screen-image" alt="git-bash-7" />
          </div><br>
          <p>
            ⑩<br>
            最後にアップロードをしましょう。<br>
            <HighlightWord word="git push リモートリポジトリ名 ローカルリポジトリ名"></HighlightWord><br>
            ・ローカルリポジトリからリモートリポジトリにファイルをアップロード(共有)するコマンドです。
            先ほどリモートリポジトリ名は「origin」と設定しました。ではローカルリポジトリの名前は何かというと、「git bash」の黄色文字の右に「master」と書かれていましたが今回はローカルリポジトリの名前だと覚えましょう。<br>
            本来は別の意味があり、正確に言えば少し違いますが今はこの覚え方で大丈夫です。<br>
            しかし、この「master」という単語は2021年6月7日以降GitHubでは使われなくなったデフォルト名になりました。<br>
            現在は「main」という名前になっているため、これからgitでリモートリポジトリを作るときに「main」作られるように初期設定をしましょう。<br>
            以下を入力して下さい。この設定は一回のみで大丈夫です。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step8)" :src="imagePaths.win.step8" class="screen-image" alt="git-bash-8" />
          </div><br>
          <p>
            ⑪<br>
            それではアップロードコマンドを入力してください。<br>
            アップロードが1回目の場合、少しオプションをつける必要があるため以下を入力しましょう。
            →<HighlightWord word="git push -u origin main"></HighlightWord><br>
            2回目以降のアップロードは「-u」のオプションは必要ありません。<br>
            また以下のように省略してアップロードすることも出来ます。<br>
            →<HighlightWord word="git push"></HighlightWord><br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step9)" :src="imagePaths.win.step9" class="screen-image" alt="git-bash-9" />
          </div><br>
          <p>
            ⑫<br>
            ではGithubでアップロードできた確認してみましょう。<br>
            Githubのページを更新すると以下のようにテキストファイルがアップロードされています。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.github6)" :src="imagePaths.win.github6" class="screen-image" alt="github-6" />
          </div><br>
          <p>
            ではここまでの流れを図で覚えましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.state2)" :src="imagePaths.win.state2" class="screen-image" alt="state-2" />
          </div><br>
          <p>
            Gitの管理下に置かれた、実際に作業をしているディレクトリのことをワークツリーと呼びます。<br>
            このワークツリーで編集、追加したファイルやフォルダを「git add」コマンドを使い選択します。<br>
            この操作をステージングと呼び、選択したファイルはインデックスという箱で管理されます。<br>
            そして、このファイルがどのような理由で選択したのか記録(git commit)し、リモートリポジトリに共有します。(git push)。<br>
            この一連の流れは必ず覚えましょう。<br>
            また、この操作はファイルを編集したり追加するたびにリモートリポジトリに更新する必要があるので「git add」、「git commit」、「git push」を行いましょう。<br>
          </p>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. ファイルの状態を確認する" id="subTitle3-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. 変更したファイルの確認方法" id="sectionTitle3-1-w"></SectionTitle>
          <p>
            先ほどの一連の流れを行うと自分がadd,commitなどをしたのかわからなくなってしまうことがあります。<br>
            そのために必要なファイルの状態を確認するコマンドを学びましょう。<br>
            <HighlightWord word="git status"></HighlightWord><br>
            ・自分が変更したファイルの状況を確認できるコマンドです。<br><br>
            ⑬<br>
            では新しいファイルをtouchコマンドで作成しましょう。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step10)" :src="imagePaths.win.step10" class="screen-image" alt="git-bash-10" />
          </div><br>
          <p>
            ⑭<br>
            gitのステータスを確認してみましょう。<br>
            これは追跡できていない新しいファイルがあることを意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" class="screen-image" alt="git-bash-11" />
          </div><br>
          <p>
            ⑮<br>
            では次にエクスプローラから「sample.txt」を開きましょう。<br>
            開いたら以下のように編集し、保存(ctrl + S)ください。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.folder2)" :src="imagePaths.win.folder2" class="screen-image" alt="folder-2" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.memo1)" :src="imagePaths.win.memo1" class="screen-image" alt="memo-1" />
          </div><br>
          <p>
            ⑭<br>
            gitのステータスを確認してみましょう。<br>
            赤色で「modified」という部分が増えましたがこれは編集(修正)はされたが「git add」ができていない事を意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" class="screen-image" alt="git-bash-12" />
          </div><br>
          <p>
            ⑮<br>
            では「git add .」を行った後にgitのステータスを確認してみましょう。<br>
            すると今度は緑色で「modified」という部分が増えましたがこれは編集(修正)はされたが「git commit」ができていない事を意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" class="screen-image" alt="git-bash-13" />
          </div><br>
          <p>
            ⑯<br>
            では次に「git commit」を行った後にgitのステータスを確認してみましょう。<br>
            すると今度は白色で分が表示されましたが、「git commit」まで終わり、コミット対象が無い事を意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step14)" :src="imagePaths.win.step14" class="screen-image" alt="git-bash-14" />
          </div><br>
          <p>
            次にファイルの中身を変えた履歴を確認したいは以下のコマンド使います。<br>
            <HighlightWord word="git diff"></HighlightWord><br>
            ・自分が変更したファイルの差分が見れるコマンドです。<br><br>
            ⑰<br>
            先ほど記載した「sample.txt」を開き、以下のように内容を変更し保存しましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.memo2)" :src="imagePaths.win.memo2" class="screen-image" alt="memo-2" />
          </div><br>
          <p>
            ⑱<br>
            「git diff」コマンドを入力しましょう。<br>
            緑色で書かれている部分は今回の修正内容です。赤色は修正前の内容です。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step15)" :src="imagePaths.win.step15" class="screen-image" alt="git-bash-15" />
          </div><br>
          <p>
            ⑲<br>
            差分が見れたところで「git add」と「git commit」を行いましょう。<br>
            以下の画像のようになればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step16)" :src="imagePaths.win.step16" class="screen-image" alt="git-bash-16" />
          </div><br>
          <p>
            最後にコミット履歴を確認したいは以下のコマンド使います。<br>
            <HighlightWord word="git log"></HighlightWord><br>
            ・コミット履歴を確認できるコマンドです。<br>
            →<HighlightWord word="git log -p"></HighlightWord><br>
            「git diff」と同じようなコマンドになるのでこの書き方も覚えておきましょう。<br><br>
            ⑳<br>
            それではコマンドを入力しましょう。以下の画像のようにコミット履歴が見られればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step17)" :src="imagePaths.win.step17" class="screen-image" alt="git-bash-17" />
          </div><br>
          <p>
            ㉑<br>
            最後にファイルを追加し、ファイルの中身を編集した情報を「git push」でアップロードしてましょう。<br>
            これでlesson-1は終了です。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step18)" :src="imagePaths.win.step18" class="screen-image" alt="git-bash-18" />
          </div><br>
        </Document>
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      </div>
      <!-- Mac版の説明 -->
      <div class="main-content" v-show="!isWindows">
        <Title title="Git 1 (Macの方)" id="Title-m"></Title>
        <Document>
          <p>Gitのコマンド基本的な操作と考え方を学びましょう。</p>
          <p>まずはどういったものなのか図と照らし合わせながら覚えていきましょう。</p>
        </Document>
        <!-- section 1 -->
        <SubTitle subTitle="1. Gitについて学ぶ" id="subTitle1-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. Gitとは?" id="sectionTitle1-1-m"></SectionTitle>
          <p>
            皆さんがこれから学ぶ「コマンドライン」について概要を理解しましょう!<br>
          </p><br>
          <HighlightWord word="Git"></HighlightWord>
          <p> 
            Gitは分散型バージョン管理システムと呼ばれます。<br>
            コンピュータ上のファイルに発生した変更を記録し、履歴を管理してくれる便利なツールになります。
            <br><br>
            ではGitというのは具体的にどの様に使うものなのか深掘りしていきましょう!
          </p><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. Gitの使い方" id="sectionTitle1-2-m"></SectionTitle>
          <p>
            例えば、この様にフォルダの中に3つのファイルがあるとしましょう。<br>
            これらのファイルの作業を行うときすべてAさんという人だけで行うとするととても時間がかかってしまいます。<br>
            そのため、BさんやCさんなどを入れて分担作業して作業する方が効率的になります。<br>
            Gitはその管理をしやすくするツールだと覚えておきましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.solo)" :src="imagePaths.mac.solo" class="powerpoint-image" alt="solo" />
          </div><br>
        </Document>
        <!-- section 2 -->
        <SubTitle subTitle="2. Gitコマンドを覚える" id="subTitle2-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. GitHubに登録する" id="sectionTitle2-1-m"></SectionTitle>
          <p>
            Gitを使えるように準備をしましょう。<br>
            まずはGitHubというサイトで新規登録を行いましょう。<br><br>
          </p>
          <div class="download">
            <a class="download-link" href="https://github.com/">GitHubで新規登録を行う</a>
          </div>
          <SectionTitle sectionTitle="2-2. Gitの初期設定をする" id="sectionTitle2-2-m"></SectionTitle>
          <p>
            まずは初期設定をしましょう。<br>
            このコマンドはGitHubアカウントを変えない限り変えることはなくほとんど変えることはないのでので覚えなくても大丈夫です。<br><br>
            ①<br>
            「環境構築やインストール」でインストールした「ターミナル」を開きましょう。
            開くとこのような画面になります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step1)" :src="imagePaths.mac.step1" class="screen-image" alt="git-bash-1" />
          </div><br>
          <p>
            ②<br>
            開いたらCドライブに移動しましょう。<br>
            移動したらユーザー名とメールアドレスを設定しましょう。<br>
            以下の画像のようにすべて入力して実行しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step2)" :src="imagePaths.mac.step2" class="screen-image" alt="git-bash-2" />
          </div><br>
          <p>
            初期設定は以上で完了です。<br><br>
          </p>
          <SectionTitle sectionTitle="2-3. Gitを準備する" id="sectionTitle2-3-m"></SectionTitle>
          <p>
            <br>
            では今回Gitを学習するための練習フォルダとファイルを作成しましょう。<br><br>
            ③<br>
            Cドライブに以下のフォルダを作成してください。<br>
            作成したらそのフォルダに移動してテキストファイルを作成しましょう。<br>
            エクスプローラで作成したフォルダの「git-practice」を確認すると以下のようにテキストファイルが作成されています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step3)" :src="imagePaths.mac.step3" class="screen-image" alt="git-bash-3" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder1)" :src="imagePaths.mac.folder1" class="screen-image" alt="folder1" />
          </div><br>
          <p>
            作成した練習ファイルの中でGitを使えるようにしましょう。<br><br>
            <HighlightWord word="git init"></HighlightWord><br>
            ・gitを使えるようにするコマンドです。<br>
              また、ローカルリポジトリを新規に作成するという意味もあります。<br><br>
            <HighlightWord word="ローカルリポジトリ"></HighlightWord><br>
            ・そのコマンドを入力したフォルダ内のファイルやフォルダを管理できる専用の倉庫。<br>
              この倉庫は自分のパソコン上で作られます。<br><br>
            図で表すと以下のようになります。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.init)" :src="imagePaths.mac.init" class="screen-image" alt="init" />
          </div><br>
          <p>
            ④<br>
            それではコマンドを入力しましょう。<br>
            以下のようになればOKです。
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step4)" :src="imagePaths.mac.step4" class="screen-image" alt="git-bash-4" />
          </div><br>
          <SectionTitle sectionTitle="2-4. 共有場所の準備と登録" id="sectionTitle2-4-m"></SectionTitle>
          <p>
            ではこの自分のPC上で作成したファイルを他の人に共有できるようにウェブ上に共有場所を作成しましょう。<br>
            ⑤<br>
            先ほど登録したGitHubを開きましょう。<br>
            その次に左にある「New」ボタンを押しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.github1)" :src="imagePaths.mac.github1" class="screen-image" alt="github-1" />
          </div><br>
          <p>
            ⑥<br>
            次に「Repository name」に「git-practice」と入力しましょう。<br>
            「Description」は入力しなくても大丈夫です。<br>
            リポジトリのタイプは「public」を選択しましょう。<br>
            下の残りの設定はそのままで「Create repository」を押しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.github2)" :src="imagePaths.mac.github2" class="screen-image" alt="github-2" />
          </div><br>
          <p>
            このような画面になれば共有場所の作成は完了です。<br>
            ではこの共有場所は何か覚えましょう。<br><br>
            <HighlightWord word="リモートリポジトリ"></HighlightWord><br>
            ・ローカルリポジトリで管理したフォルダ内のファイルやフォルダを第三者に共有したり、管理ができるWeb上の倉庫です。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.github3)" :src="imagePaths.mac.github3" class="screen-image" alt="github-3" />
          </div><br>
          <p>
            まずは今の状態を確認しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.state1)" :src="imagePaths.mac.state1" class="screen-image" alt="state-1" />
          </div><br>
          <p>
            画像にある問題を整理しましょう。<br>
            「git init」で作成したローカルリポジトリに管理されているフォルダはまだ自分のPC上でしか見ることができません。<br><br>
            そのため、リモートリポジトリにアップロードするためには登録が必要になります。<br>
            それでは登録のコマンドを覚えましょう。<br>
            <HighlightWord word="git remote add リモートリポジトリ名 URL"></HighlightWord><br>
            ・リモートリポジトリを登録するコマンドです。<br>
            ここで表記されている「リモートリポジトリ名」は、GitHubで作ったリモートリポジトリと通信するために必要なURLを簡単なキーワードにして指定することができます。<br>
            よくデフォルトではoriginという名前で設定することが多いです。<br>
            そのため以下のような手順を踏みましょう。<br>
            ⑦<br>
            以下をコピーして実行しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.github4)" :src="imagePaths.mac.github4" class="screen-image" alt="github-4" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.step5)" :src="imagePaths.mac.step5" class="screen-image" alt="git-bash-5" />
          </div><br>
          <p>
            登録が完了しました。<br>
            ではGithub(リモートリポジトリ)上にアップロードしましょう。<br>
            アップロードするためには手順が必要です。<br>
            (1) まだアップロード(共有)してない、またはアップロードしてない編集情報をフォルダやファイルを選択する。<br>
            (2) フォルダやファイルにどのような編集や追加をしたか記録をする<br>
            (3) アップロード(共有)する<br><br>
            ⑧<br>
            ではアップロードするファイルを選択しましょう。<br><br>
            <HighlightWord word="git add (フォルダ名)ファイル名"></HighlightWord><br>
            ・登録したリモートリポジトリにアップロードするファイルを選択するコマンドです。<br>
            ファイルやフォルダ名を指定できますが、複数個ファイルなどがあると何回もこのコマンドを打つため一括で選択する方法があるので覚えておきましょう。<br>
            →<HighlightWord word="git add ."></HighlightWord><br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step6)" :src="imagePaths.mac.step6" class="screen-image" alt="git-bash-6" />
          </div><br>
          <p>
            ⑨<br>
            次にフォルダやファイルにどのような編集や追加をしたか記録をしましょう。<br><br>
            <HighlightWord word="git commit -m 'メッセージ'"></HighlightWord><br>
            ・ファイルをaddコマンドで選択した理由は何か記録するコマンドです。
            メッセージには「□□ファイルの○○を修正」、「△△ファイルの名前を変更」、「××ファイルの作成」などを記載しますが、今回は初めてなので「first commit」や「initialize commit」と入力しましょう。<br><br>
            GitHubにあるコミットコマンドをコピーしコマンドを入力しましょう。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.github5)" :src="imagePaths.mac.github5" class="screen-image" alt="github-5" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.step7)" :src="imagePaths.mac.step7" class="screen-image" alt="git-bash-7" />
          </div><br>
          <p>
            ⑩<br>
            最後にアップロードをしましょう。<br>
            <HighlightWord word="git push リモートリポジトリ名 ローカルリポジトリ名"></HighlightWord><br>
            ・ローカルリポジトリからリモートリポジトリにファイルをアップロード(共有)するコマンドです。
            先ほどリモートリポジトリ名は「origin」と設定しました。ではローカルリポジトリの名前は何かというと、「ターミナル」の黄色文字の右に「master」と書かれていましたが今回はローカルリポジトリの名前だと覚えましょう。<br>
            本来は別の意味があり、正確に言えば少し違いますが今はこの覚え方で大丈夫です。<br>
            しかし、この「master」という単語は2021年6月7日以降GitHubでは使われなくなったデフォルト名になりました。<br>
            現在は「main」という名前になっているため、これからgitでリモートリポジトリを作るときに「main」作られるように初期設定をしましょう。<br>
            以下を入力して下さい。この設定は一回のみで大丈夫です。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step8)" :src="imagePaths.mac.step8" class="screen-image" alt="git-bash-8" />
          </div><br>
          <p>
            ⑪<br>
            それではアップロードコマンドを入力してください。<br>
            アップロードが1回目の場合、少しオプションをつける必要があるため以下を入力しましょう。
            →<HighlightWord word="git push -u origin main"></HighlightWord><br>
            2回目以降のアップロードは「-u」のオプションは必要ありません。<br>
            また以下のように省略してアップロードすることも出来ます。<br>
            →<HighlightWord word="git push"></HighlightWord><br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step9)" :src="imagePaths.mac.step9" class="screen-image" alt="git-bash-9" />
          </div><br>
          <p>
            ⑫<br>
            ではGithubでアップロードできた確認してみましょう。<br>
            Githubのページを更新すると以下のようにテキストファイルがアップロードされています。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.github6)" :src="imagePaths.mac.github6" class="screen-image" alt="github-6" />
          </div><br>
          <p>
            ではここまでの流れを図で覚えましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.state2)" :src="imagePaths.mac.state2" class="screen-image" alt="state-2" />
          </div><br>
          <p>
            Gitの管理下に置かれた、実際に作業をしているディレクトリのことをワークツリーと呼びます。<br>
            このワークツリーで編集、追加したファイルやフォルダを「git add」コマンドを使い選択します。<br>
            この操作をステージングと呼び、選択したファイルはインデックスという箱で管理されます。<br>
            そして、このファイルがどのような理由で選択したのか記録(git commit)し、リモートリポジトリに共有します。(git push)。<br>
            この一連の流れは必ず覚えましょう。<br>
            また、この操作はファイルを編集したり追加するたびにリモートリポジトリに更新する必要があるので「git add」、「git commit」、「git push」を行いましょう。<br>
          </p>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. ファイルの状態を確認する" id="subTitle3-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. 変更したファイルの確認方法" id="sectionTitle3-1-m"></SectionTitle>
          <p>
            先ほどの一連の流れを行うと自分がadd,commitなどをしたのかわからなくなってしまうことがあります。<br>
            そのために必要なファイルの状態を確認するコマンドを学びましょう。<br>
            <HighlightWord word="git status"></HighlightWord><br>
            ・自分が変更したファイルの状況を確認できるコマンドです。<br><br>
            ⑬<br>
            では新しいファイルをtouchコマンドで作成しましょう。
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step10)" :src="imagePaths.mac.step10" class="screen-image" alt="git-bash-10" />
          </div><br>
          <p>
            ⑭<br>
            gitのステータスを確認してみましょう。<br>
            これは追跡できていない新しいファイルがあることを意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step11)" :src="imagePaths.mac.step11" class="screen-image" alt="git-bash-11" />
          </div><br>
          <p>
            ⑮<br>
            では次にエクスプローラから「sample.txt」を開きましょう。<br>
            開いたら以下のように編集し、保存(ctrl + S)ください。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder2)" :src="imagePaths.mac.folder2" class="screen-image" alt="folder-2" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.memo1)" :src="imagePaths.mac.memo1" class="screen-image" alt="memo-1" />
          </div><br>
          <p>
            ⑭<br>
            gitのステータスを確認してみましょう。<br>
            赤色で「modified」という部分が増えましたがこれは編集(修正)はされたが「git add」ができていない事を意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step11)" :src="imagePaths.mac.step11" class="screen-image" alt="git-bash-12" />
          </div><br>
          <p>
            ⑮<br>
            では「git add .」を行った後にgitのステータスを確認してみましょう。<br>
            すると今度は緑色で「modified」という部分が増えましたがこれは編集(修正)はされたが「git commit」ができていない事を意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step11)" :src="imagePaths.mac.step11" class="screen-image" alt="git-bash-13" />
          </div><br>
          <p>
            ⑯<br>
            では次に「git commit」を行った後にgitのステータスを確認してみましょう。<br>
            すると今度は白色で分が表示されましたが、「git commit」まで終わり、コミット対象が無い事を意味しています。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step14)" :src="imagePaths.mac.step14" class="screen-image" alt="git-bash-14" />
          </div><br>
          <p>
            次にファイルの中身を変えた履歴を確認したいは以下のコマンド使います。<br>
            <HighlightWord word="git diff"></HighlightWord><br>
            ・自分が変更したファイルの差分が見れるコマンドです。<br><br>
            ⑰<br>
            先ほど記載した「sample.txt」を開き、以下のように内容を変更し保存しましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.memo2)" :src="imagePaths.mac.memo2" class="screen-image" alt="memo-2" />
          </div><br>
          <p>
            ⑱<br>
            「git diff」コマンドを入力しましょう。<br>
            緑色で書かれている部分は今回の修正内容です。赤色は修正前の内容です。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step15)" :src="imagePaths.mac.step15" class="screen-image" alt="git-bash-15" />
          </div><br>
          <p>
            ⑲<br>
            差分が見れたところで「git add」と「git commit」を行いましょう。<br>
            以下の画像のようになればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step16)" :src="imagePaths.mac.step16" class="screen-image" alt="git-bash-16" />
          </div><br>
          <p>
            最後にコミット履歴を確認したいは以下のコマンド使います。<br>
            <HighlightWord word="git log"></HighlightWord><br>
            ・コミット履歴を確認できるコマンドです。<br>
            →<HighlightWord word="git log -p"></HighlightWord><br>
            「git diff」と同じようなコマンドになるのでこの書き方も覚えておきましょう。<br><br>
            ⑳<br>
            それではコマンドを入力しましょう。以下の画像のようにコミット履歴が見られればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step17)" :src="imagePaths.mac.step17" class="screen-image" alt="git-bash-17" />
          </div><br>
          <p>
            ㉑<br>
            最後にファイルを追加し、ファイルの中身を編集した情報を「git push」でアップロードしてましょう。<br>
            これでlesson-1は終了です。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.step18)" :src="imagePaths.mac.step18" class="screen-image" alt="git-bash-18" />
          </div><br>
        </Document>
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      </div>
      <div class="side-content" v-show="isWindows && !isSmallScreen">
        <TableOfContents :sections="windowsSections" />
      </div>
      <div class="side-content" v-show="!isWindows && !isSmallScreen">
        <TableOfContents :sections="macSections" />
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
import TableOfContents from "@/components/TableOfContents.vue";
import Spinner from "@/components/Spinner.vue";
import Modal from "@/components/common/Modal.vue";

export default {
  name: "CommandLine1",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    HighlightWord,
    Document,
    TableOfContents,
    Spinner,
    Modal,
  },
  setup() {
    const isWindows = ref(true);
    const isSmallScreen = ref(false);
    const isLoading = ref(false);

    const windowsSections = [
      { id: "Title-w", title: "Git 1 (Windowsの方)" },
      { id: "subTitle1-w", title: "  1. Gitについて学ぶ" },
      { id: "sectionTitle1-1-w", title: "    1-1. Gitとは?" },
      { id: "sectionTitle1-2-w", title: "    1-2. Gitの使い方" },
      { id: "subTitle2-w", title: "  2. Gitコマンドを覚える" },
      { id: "sectionTitle2-1-w", title: "    2-1. GitHubに登録する" },
      { id: "sectionTitle2-2-w", title: "    2-2. Gitの初期設定をする" },
      { id: "sectionTitle2-3-w", title: "    2-3. Gitを準備する" },
      { id: "sectionTitle2-4-w", title: "    2-4. 共有場所の準備と登録" },
      { id: "subTitle3-w", title: "  3. ファイルの状態を確認する" },
      { id: "sectionTitle3-1-w", title: "    3-1. 変更したファイルの確認方法" },
    ];

    const macSections = [
      { id: "Title-m", title: "Git 1 (Macの方)" },
      { id: "subTitle1-m", title: "  1. Gitについて学ぶ" },
      { id: "sectionTitle1-1-m", title: "    1-1. Gitとは?" },
      { id: "sectionTitle1-2-m", title: "    1-2. Gitの使い方" },
      { id: "subTitle2-m", title: "  2. Gitコマンドを覚える" },
      { id: "sectionTitle2-1-m", title: "    2-1. GitHubに登録する" },
      { id: "sectionTitle2-2-m", title: "    2-2. Gitの初期設定をする" },
      { id: "sectionTitle2-3-m", title: "    2-3. Gitを準備する" },
      { id: "sectionTitle2-4-m", title: "    2-4. 共有場所の準備と登録" },
      { id: "subTitle3-m", title: "  3. ファイルの状態を確認する" },
      { id: "sectionTitle3-1-m", title: "    3-1. 変更したファイルの確認方法" },
    ];

    const toggleOS = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        isWindows.value = !isWindows.value;
        // 画面のレイアウトを切り替えるロジックを追加
      }, 1000);
    };

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      win: {
        solo: require("../../../assets/images/course/git-1/solo.png"),
        step1: require("../../../assets/images/course/git-1/git-bash-1.png"),
        step2: require("../../../assets/images/course/git-1/git-bash-2.png"),
        step3: require("../../../assets/images/course/git-1/git-bash-3.png"),
        folder1: require("../../../assets/images/course/git-1/folder-1.png"),
        init: require("../../../assets/images/course/git-1/git-init.png"),
        step4: require("../../../assets/images/course/git-1/git-bash-4.png"),
        github1: require("../../../assets/images/course/git-1/github-1.png"),
        github2: require("../../../assets/images/course/git-1/github-2.png"),
        github3: require("../../../assets/images/course/git-1/github-3.png"),
        state1: require("../../../assets/images/course/git-1/state-1.png"),
        github4: require("../../../assets/images/course/git-1/github-4.png"),
        step5: require("../../../assets/images/course/git-1/git-bash-5.png"),
        step6: require("../../../assets/images/course/git-1/git-bash-6.png"),
        github5: require("../../../assets/images/course/git-1/github-5.png"),
        step7: require("../../../assets/images/course/git-1/git-bash-7.png"),
        step8: require("../../../assets/images/course/git-1/git-bash-8.png"),
        step9: require("../../../assets/images/course/git-1/git-bash-9.png"),
        github6: require("../../../assets/images/course/git-1/github-6.png"),
        state2: require("../../../assets/images/course/git-1/state-2.png"),
        step10: require("../../../assets/images/course/git-1/git-bash-10.png"),
        step11: require("../../../assets/images/course/git-1/git-bash-11.png"),
        folder2: require("../../../assets/images/course/git-1/folder-2.png"),
        memo1: require("../../../assets/images/course/git-1/memo-1-w.png"),
        step12: require("../../../assets/images/course/git-1/git-bash-12.png"),
        step13: require("../../../assets/images/course/git-1/git-bash-13.png"),
        step14: require("../../../assets/images/course/git-1/git-bash-14.png"),
        memo2: require("../../../assets/images/course/git-1/memo-1-w.png"),
        step15: require("../../../assets/images/course/git-1/git-bash-15.png"),
        step16: require("../../../assets/images/course/git-1/git-bash-16.png"),
        step17: require("../../../assets/images/course/git-1/git-bash-17.png"),
        step18: require("../../../assets/images/course/git-1/git-bash-18.png"),
      },
      mac: {
        solo: require("../../../assets/images/course/git-1/solo.png"),
        step1: require("../../../assets/images/course/git-1/git-bash-1.png"),
        step2: require("../../../assets/images/course/git-1/git-bash-2.png"),
        step3: require("../../../assets/images/course/git-1/git-bash-3.png"),
        folder1: require("../../../assets/images/course/git-1/folder-1.png"),
        init: require("../../../assets/images/course/git-1/git-init.png"),
        step4: require("../../../assets/images/course/git-1/git-bash-4.png"),
        github1: require("../../../assets/images/course/git-1/github-1.png"),
        github2: require("../../../assets/images/course/git-1/github-2.png"),
        github3: require("../../../assets/images/course/git-1/github-3.png"),
        state1: require("../../../assets/images/course/git-1/state-1.png"),
        github4: require("../../../assets/images/course/git-1/github-4.png"),
        step5: require("../../../assets/images/course/git-1/git-bash-5.png"),
        step6: require("../../../assets/images/course/git-1/git-bash-6.png"),
        github5: require("../../../assets/images/course/git-1/github-5.png"),
        step7: require("../../../assets/images/course/git-1/git-bash-7.png"),
        step8: require("../../../assets/images/course/git-1/git-bash-8.png"),
        step9: require("../../../assets/images/course/git-1/git-bash-9.png"),
        github6: require("../../../assets/images/course/git-1/github-6.png"),
        state2: require("../../../assets/images/course/git-1/state-2.png"),
        step10: require("../../../assets/images/course/git-1/git-bash-10.png"),
        step11: require("../../../assets/images/course/git-1/git-bash-11.png"),
        folder2: require("../../../assets/images/course/git-1/folder-2.png"),
        memo1: require("../../../assets/images/course/git-1/memo-1-w.png"),
        step12: require("../../../assets/images/course/git-1/git-bash-12.png"),
        step13: require("../../../assets/images/course/git-1/git-bash-13.png"),
        step14: require("../../../assets/images/course/git-1/git-bash-14.png"),
        memo2: require("../../../assets/images/course/git-1/memo-1-w.png"),
        step15: require("../../../assets/images/course/git-1/git-bash-15.png"),
        step16: require("../../../assets/images/course/git-1/git-bash-16.png"),
        step17: require("../../../assets/images/course/git-1/git-bash-17.png"),
        step18: require("../../../assets/images/course/git-1/git-bash-18.png"),
      },
    };

    // モーダル関連のデータ
    const isModalOpen = ref(false);
    const selectedImage = ref();

    const openModal = (imagePath) => {
      isModalOpen.value = true;
      selectedImage.value = imagePath;
    };

    return {
      isWindows,
      isSmallScreen,
      isLoading,
      windowsSections,
      macSections,
      imagePaths,
      selectedImage,
      isModalOpen,
      toggleOS,
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