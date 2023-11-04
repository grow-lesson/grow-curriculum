<template>
  <div>
    <Header />
    <Spinner :isLoading="isLoading" />
    <button class="btn_04" @click="toggleOS">{{ isWindows ? "Macをお持ちの方はこちら" : "Windowsをお持ちの方はこちら" }}</button>
    <div class="container">
      <!-- Windows版の説明 -->
      <div class="main-content" v-show="isWindows">
        <Title title="Git 1 (Windowsの方)" id="Title-w"></Title>
        <Document>
          <p>Gitのコマンド基本的な操作と考え方を学びましょう。</p>
          <p>まずはどういったものなのか図と照らし合わせながら覚えていきましょう。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. Gitについて" id="subTitle1-w"></SubTitle>
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
            ファイルを(1),(2),(3)とし、これらのファイルにプログラムを書く時Aさんだけで行うととても時間がかかってしまいますね。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.solo)" :src="imagePaths.win.solo" class="powerpoint-image" alt="solo" />
          </div><br>
          <HighlightWord word="ハードウェア"></HighlightWord>
          <p>
            パソコンの本体や周辺機器の事です。<br>
            ソフトウェアと並べて覚えておきましょう。<br>
            例 : キーボード、マウス、ディスプレイ、プリンター、スピーカーなどがあります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.hardware)" :src="imagePaths.win.hardware" class="powerpoint-image" alt="hardware" />
          </div><br>
          <HighlightWord word="OS(Operating System)"></HighlightWord>
          <p>
            基本ソフトウェアとも呼ばれ、ハードウェアの制御やすべてのソフトウェアの管理を行います。<br>
            例 : WindowsOS、macOS、Linux、UNIXなどがあります。<br>
            次にOSはどんな役割があるか覚えましょう。<br><br>
            OSの役割<br>
            (1)ファイル・ディレクトリ(フォルダ)の作成・管理・保持ができます。<br>
            →<span class="markup-word-blue">ファイル</span>…文書や音楽、動画などの形式でコンピュータにおけるデータの管理単位の一つを指します。<br>
            →<span class="markup-word-blue">ディレクトリ(フォルダ)</span>…ファイルをまとめる入れ物や置き場の事です。<br><br>
            (2)タスク管理ができます。<br>
            タスクとは、アプリケーションの処理を細分化したものです。<br>
            OSは優先度などに応じて効率的にタスクを割り当て、アプリケーションの処理をしています。<br><br>
            (3)記憶管理<br>
            プログラムにある命令やデータを記憶できます。<br><br>
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. プログラムの命令操作方法について" id="sectionTitle1-3-w"></SectionTitle>
          <p>
            ではプログラムの命令はどのように行うのか学んでいきましょう!
          </p><br>
          <HighlightWord word="GUI(Graphical User Interface)"></HighlightWord>
          <p>
            グラフィカル(絵画的)にパソコンに操作するインターフェースです。<br>
            デスクトップで見るアイコンやボタン、マウスポインターなどの事を指します。<br>
            プログラムの命令にはこのGUIを使った操作で行うことができます。<br>
            感覚的に操作が行える事がメリットです。<br>
            →<span class="markup-word-blue">インターフェース</span>…機器同士や機器と人との間でやり取りをしやすくするソフトウェアの事を指します。<br><br>
          </p><br>
          <HighlightWord word="CUI(Character User Interface)"></HighlightWord>
          <p>
            単語の通り文字でパソコンに操作するインターフェースです。<br>
            コマンドラインはこのCUIを使った操作でプログラムに命令を行うことができます。<br>
            Windowsならコマンドプロンプト、MacならターミナルがデフォルトでPCに入っています。<br><br>
            このCUIを使った命令を<span class="markup-word-blue">コマンド</span>といいます。<br><br>
            今回コマンドラインのコースではUNIXコマンドをベースに学んでいきます。<br>
            UNIXはOSの説明をしたときに例で出てきました。<br>
            OSの歴史と違いを少しだけ覚えて置きましょう。<br><br>
            <span class="markup-word-red">UNIX</span><br>
            →アメリカのベル研究所で開発された現存する中で最も古いOS(1969~)です。安全性が高く、余分な機能がないため軽くサーバ用途で用いられます。<br><br>
            <span class="markup-word-red">Linux</span><br>
            →UNIXを元にして作られたOS(1991~)。UNIXの機能が不足していると感じたリーナス・トーバルズ氏らが開発しました。無料で改変も配布も自由にできるのが特徴です。<br><br>
            <span class="markup-word-red">WindowsOS</span><br>
            →Microsoft社のビル・ゲイツ氏らによって開発されたOS(1985~)です。<br><br>
            <span class="markup-word-red">MacOS</span><br>
            →Apple社のスティーブ・ジョブズ氏らが開発したOS(1984~)です。<br><br>
            UNIX、LinuxはCUI、Windows、MacOSはGUI操作で命令を行います。<br><br>
          </p>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. コマンドとファイル構造やパスを知る" id="subTitle2-w"></SubTitle>
        <Document>
          <p>
            それではCUI操作で必要なコマンドの種類やファイル構造、パスについて知りましょう。<br>
          </p>
          <SectionTitle sectionTitle="2-1. プログラムの命令(作成・表示・移動)" id="sectionTitle2-1-w"></SectionTitle>
          <p>
            コマンドはファイルやディレクトリの作成、表示、編集、削除、移動があります。<br>
            今回そのコマンドを実行するツールは「git bash」を使いましょう。<br><br>
            ①<br>
            「環境構築やインストール」でインストールした「git bash」を開きましょう。
            開くとこのような画面になります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step1)" :src="imagePaths.win.step1" class="screen-image" alt="git-bash-1" />
          </div><br>
          <p>
            GUIでは主にマウスを使ってエクスプローラーを開いてファイルやディレクトリの作成、表示、編集、削除、移動を行います。<br>
            それらをCUIではコマンドを入れることで行うことができます。<br>
            まずはエクスプローラの構造について知りましょう。<br><br>
          </p>
          <HighlightWord word="ファイル構造"></HighlightWord>
          <p>
            ディレクトリの中にディレクトリやファイルがあるような枝分かれした構造の事です。
            作業中のフォルダやプロジェクトのことを<span class="markup-word-blue">ワーキングツリー</span>といいます。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.tree)" :src="imagePaths.win.tree" class="powerpoint-image" alt="tree" />
          </div><br>
          <p>
            コマンドラインのコースで重要なことは<span class="markup-word-red">作業しているディレクトリの位置を把握</span>する事です。<br>
            イメージで言うとディレクトリの中に自分がいると思ってください。<br>
            その自分がいるディレクトリを<span class="markup-word-blue">カレントディレクトリ</span>といいます。<br>
            また、上の画像でカレントディレクトリがBディレクトリだとし、その一番上をたどるとAディレクトリが一番上になります。<br>
            今いるディレクトリ構造の一番親のディレクトリのことを<span class="markup-word-blue">ルートディレクトリ</span>といいます。<br>
            今回コースで作業するのはCドライブディレクトリで行います。<br>
            それでは今作業しているディレクトリからCドライブディレクトリに移動しましょう。<br><br>
          </p>
          <HighlightWord word="cd ディレクトリ名"></HighlightWord>
          <p>
            ・自分が今作業しているディレクトリからさらに下のディレクトリに移動ができます。<br>
            逆に今作業しているディレクトリの上のディレクトリに戻るときは<span class="markup-word-blue">「cd ../」</span>を実行すれば戻ることができます。<br><br>
            ②<br>
            git bashに画像のように入力し、実行しましょう。<br>
            画像のように次を入力する部分に「/C」と黄色い文字で書いてあればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step2)" :src="imagePaths.win.step2" class="screen-image" alt="git-bash-2" />
          </div><br>
          <p>
            CUI操作ではこのようになりますが、GUI操作だとエクスプローラを開いてCドライブをクリックした時の画面という事になります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.folder1)" :src="imagePaths.win.folder1" class="screen-image" alt="folder-1" />
          </div><br>
          <br>
          <p>
            では次にディレクトリの作成を覚えましょう。<br>
          </p>
          <HighlightWord word="mkdir ディレクトリ名"></HighlightWord><br>
          <p>
            ・自分が今作業しているディレクトリの中に新たなディレクトリを作成します。<br>
            「Make Directory」の略称です。<br><br>
            ③<br>
            git bashに画像のように入力し、実行しましょう。<br>
            git bashでは何も出てきませんが、エクスプローラで確認すると「sample-1」というディレクトリが作成されていることがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step3)" :src="imagePaths.win.step3" class="screen-image" alt="git-bash-3" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder2)" :src="imagePaths.win.folder2" class="screen-image" alt="folder-2" />
          </div><br>
          <p>
            では次に今作ったフォルダにファイルの作成してみましょう。<br>
          </p>
          <HighlightWord word="touch ファイル名"></HighlightWord><br>
          <p>
            ・自分が今作業しているディレクトリ(カレントディレクトリ)の中に新たなファイルを作成します。<br><br>
            ④<br>
            まずはgit bashに「sample-1」ディレクトリに移動するためcdコマンドを入力しましょう。
            その後、touchコマンドを入力し、実行しましょう。<br>
            git bashでは何も出てきませんが、エクスプローラで「sample-1」ディレクトリを確認すると「memo.txt」というファイルが作成されていることがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step4)" :src="imagePaths.win.step4" class="screen-image" alt="git-bash-4" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder3)" :src="imagePaths.win.folder3" class="screen-image" alt="folder-3" />
          </div><br>
          <p>
            次に作ったファイルの中身を表示してみましょう。<br>
          </p>
          <HighlightWord word="cat ファイル名"></HighlightWord><br>
          <p>
            ・自分が今作業しているディレクトリ(カレントディレクトリ)の中にあるファイルの中身を表示します。<br><br>
            ⑤<br>
            まずは先ほど作った「memo.txt」を開きましょう。<br>
            その中に画像のように入力しましょう。
            入力したら「ctrl + s」で保存しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.memo)" :src="imagePaths.win.memo" class="screen-image" alt="memo" />
          </div><br>
          <p>
            ⑥<br>
            git bashに画像のように入力し、実行しましょう。<br>
            テキストファイルを開かなくても中身を確認する事ができます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step5)" :src="imagePaths.win.step5" class="screen-image" alt="git-bash-5" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="2-2. プログラムの命令(位置把握・確認・移動)" id="sectionTitle2-2-w"></SectionTitle>
        <Document>
          <p>
            次に自分の作業しているディレクトリ(カレントディレクトリ)までの経路(位置)を知りたい時に使うコマンドを学びましょう。
          </p>
          <HighlightWord word="pwd"></HighlightWord>
          <p>
            ・カレントディレクトリを表示をします。
            ⑦<br>
            git bashに画像のように入力し、実行しましょう。<br>
            今いる位置が表示されればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step6)" :src="imagePaths.win.step6" class="screen-image" alt="git-bash-6" />
          </div><br>
          <p>
            次に自分の作業しているディレクトリ(カレントディレクトリ)の中にあるディレクトリやファイルを確認しましょう。<br><br>
          </p>
          <HighlightWord word="ls"></HighlightWord>
          <p>
            ・カレントディレクトリの中身を表示します。<br>
            「List」の略称です。<br><br>
            ⑧<br>
            まずはディレクトリを作りましょう。
            git bashに画像のように入力し、実行しましょう。<br>
            git bash、エクスプローラで確認するとこのようになっていればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step7)" :src="imagePaths.win.step7" class="screen-image" alt="git-bash-7" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder4)" :src="imagePaths.win.folder4" class="screen-image" alt="folder-4" />
          </div><br>
          <p>
            ⑧<br>
            git bashに画像のように入力し、実行しましょう。<br>
            git bashで確認するとこのようになっていればOKです。<br>
          </p><br>
          <p>
            ⑨それでは今作ったディレクトリにテキストファイルを移動しましょう。<br><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step8)" :src="imagePaths.win.step8" class="screen-image" alt="git-bash-8" />
          </div><br>
          <HighlightWord word="mv 移動させたいファイル名 移動先のディレクトリ(フォルダ)名"></HighlightWord>
          <p>
            ・指定したファイルを指定したディレクトリに移動することができます。<br>
            「Move」の略称です。<br>
            フォルダを移動する時は<br>
            <HighlightWord word="mv 移動させたいディレクトリ名 移動先のディレクトリ名"></HighlightWord>となります。<br><br>
            ⑩<br>
            git bashに画像のように入力し、実行しましょう。<br>
            git bashでは何も表示されませんが、エクスプローラで「test」ディレクトリを確認するとこのようになっています。<br><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step9)" :src="imagePaths.win.step9" class="screen-image" alt="git-bash-9" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder5)" :src="imagePaths.win.folder5" class="screen-image" alt="folder-5" />
          </div><br>
          <p>
            mvコマンドは他にも使い方があるので覚えておきましょう。<br><br>
          </p><br>
          <HighlightWord word="mv 名前を変えたいファイル名 新しいファイル名"></HighlightWord>
          <p>
            ・ファイルの名前を変更することができます。<br><br>
            ⑪<br>
            まずは「test」ディレクトリに移動してgit bashに画像のように入力し、実行しましょう。<br>
            git bashでは何も表示されませんが、エクスプローラで「test」ディレクトリの中のテキストファイルの名前が変わっているのが分かります。<br><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step10)" :src="imagePaths.win.step10" class="screen-image" alt="git-bash-10" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder6)" :src="imagePaths.win.folder6" class="screen-image" alt="folder-6" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="2-3. プログラムの命令(複製・削除)" id="sectionTitle2-3-w"></SectionTitle>
        <Document>
          <p>
            ディレクトリやファイルの複製や削除ができるコマンドを学びましょう。<br><br>
          </p>
          <HighlightWord word="cp コピーするファイル名 新しいファイル名"></HighlightWord>
          <p>
            ・自分の作業しているディレクトリ(カレントディレクトリ)の中にあるファイルを新しい名前で中身のデータの状態をコピーできます。<br><br>
            ディレクトリをコピーしたい場合は<br>
            <HighlightWord word="cp –r コピーするディレクトリ名 新しいディレクトリ名"></HighlightWord>となります。<br><br>
            ⑫<br>
            git bashに画像のように入力し、実行しましょう。<br>
            コピーできていればコピーしたファイルを開くと同じ文章が書いてあるはずです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" class="screen-image" alt="git-bash-11" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder7)" :src="imagePaths.win.folder6" class="screen-image" alt="folder-7" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.copy)" :src="imagePaths.win.copy" class="screen-image" alt="copy" />
          </div><br>
          <HighlightWord word="rm 削除するファイル名"></HighlightWord>
          <p>
            ・自分の作業しているディレクトリ(カレントディレクトリ)の中にあるファイルを削除できます。<br><br>
            ディレクトリごと削除したい場合は<br>
            <HighlightWord word="rm –r 削除するディレクトリ名 "></HighlightWord>となります。<br><br>
            ⑫<br>
            git bashに画像のように入力し、実行しましょう。<br>
            git bashでは何も出てきませんが、エクスプローラで「test」ディレクトリを確認すると「memo.txt」というファイルが削除されていることがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.win.step12)" :src="imagePaths.win.step12" class="screen-image" alt="git-bash-12" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.win.folder8)" :src="imagePaths.win.folder8" class="screen-image" alt="folder-8" />
          </div><br>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="3. パスとホームディレクトリについて" id="subTitle3-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. パスについて" id="sectionTitle3-1-w"></SectionTitle>
          <p>
            パスについて学びましょう。<br>
          </p><br>
          <HighlightWord word="パス"></HighlightWord>
          <p>
            ・経路や道順を意味しています。<br>
            コマンドラインやWebサイト上にある特定ファイルまでの道筋を表すものです。<br>
          </p><br>
          <HighlightWord word="絶対パス(absolute path)"></HighlightWord>
          <p>
            ・ディレクトリなどの階層の一番上から特定のファイルまでの経路を階層ごとに全て記載するパスの事です。<br>
            「フルパス」と呼ばれることもあり、コマンドラインやWebサイト上にある特定ファイルまでの道筋を表すものです。<br>
            webサイトでは、「ドメイン名 / フォルダ名 / … / ファイル名」、エクスプローラーだと「ルートディレクトリ / フォルダ名 / … / ファイル名」という表記になります。<br><br>
            例：<br>
            http:www.hoge.com/test/index.html<br><br>
            /about/test/home/about.html<br><br>
            ↑最初のスラッシュはルートディレクトリを表します。
            <span class="markup-word-blue">「cd /」</span>でルートディレクトリに移動できます。
            絶対パスのメリットとデメリット<br>
            メリット<br>
            ・URLをすべて書いてファイルの場所を指定するため、リンク切れになるミスを防げます。<br>
            デメリット<br>
            ・URLが長くなってしまう。<br>
          </p><br>
          <HighlightWord word="相対パス(relative path)"></HighlightWord>
          <p>
            現在いるファイルを起点とした、目的ファイルまでの経路を記述する形式のこと。<br>
            現在の階層よりも1つ上位の階層への移動を「cd ../」で戻ることができると説明しましたが、
            相対パスは現在地から目的地までの「道順」を記述する方法です<br><br>
            例：<br><br><br>
            ../../contents/file01.png<br><br>
            絶対パスのメリットとデメリット<br>
            メリット<br>
            ・URLが短くできます。<br>
            デメリット<br>
            ・リンク切れになるミスが起こりやすいです。<br><br>
            相対パスや絶対パスはここまで学習したコマンドで使うことができるので一気に作業したいディレクトリに移動したり、指定したディレクトリに削除や複製をすることができます。<br>
          </p><br>
        </Document>
        <SectionTitle sectionTitle="3-2 ホームディレクトリについて" id="sectionTitle3-2-w"></SectionTitle>
        <Document>
            <p>
              <HighlightWord word="ホームディレクトリ"></HighlightWord><br>
              ・ユーザーが作業をするときに基準にするディレクトリの事です。<br>
              ホームディレクトリとは、コンピューター上でログインしたユーザーが作業するための個人用フォルダーと覚えるとよいでしょう。<br><br>
              Windowsだと「C:/User/(自分で設定したパソコンのログイン名)」もしくは「C:/ユーザー/(自分で設定したパソコンのログイン名)」の経路にあるディレクトリになります。<br><br>
              <span class="markup-word-blue">「cd ~」</span>でホームディレクトリに移動できます。
            </p>
          </Document>
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      </div>
      <!-- Mac版の説明 -->
      <div class="main-content" v-show="!isWindows">
        <Title title="コマンドライン 1 (Macの方)" id="Title-m"></Title>
        <Document>
          <p>ターミナルやコマンドラインインターフェースの基本的な操作を学びましょう。</p>
          <p>コマンドとファイル構造やパスを知るセクションです。</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. コマンドラインとプログラミングについて" id="subTitle1-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. コマンドラインとは?" id="sectionTitle1-1-m"></SectionTitle>
          <p>
            皆さんがこれから学ぶ「コマンドライン」について概要を理解しましょう!<br>
          </p><br>
          <HighlightWord word="コマンドライン"></HighlightWord>
          <p>
            コンピュータのシステム制御をしているソフトウェアであるOSに命令を送る機能の事です。
            マウスなどでクリックしてコンピュータを操作するのに対して文字で命令して操作します。
            <br><br>
            ではソフトウェアやOSというのは何か覚えましょう!
          </p><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. コンピュータの基本的な仕組み" id="sectionTitle1-2-m"></SectionTitle>
          <HighlightWord word="ソフトウェア"></HighlightWord>
          <p>
            コンピュータに対して命令を出すプログラム(アプリケーション)の事です。<br>
            →<span class="markup-word-blue">プログラム</span>…コンピュータを動かすのに必要な命令の流れの事を指します。<br>
            例 : Word、Edge、Google、Excelなどがあります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.software)" :src="imagePaths.mac.software" class="powerpoint-image" alt="software" />
          </div><br>
          <HighlightWord word="ハードウェア"></HighlightWord>
          <p>
            パソコンの本体や周辺機器の事です。<br>
            ソフトウェアと並べて覚えておきましょう。<br>
            例 : キーボード、マウス、ディスプレイ、プリンター、スピーカーなどがあります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.hardware)" :src="imagePaths.mac.hardware" class="powerpoint-image" alt="hardware" />
          </div><br>
          <HighlightWord word="OS(Operating System)"></HighlightWord>
          <p>
            基本ソフトウェアとも呼ばれ、ハードウェアの制御やすべてのソフトウェアの管理を行います。<br>
            例 : WindowsOS、macOS、Linux、UNIXなどがあります。<br>
            次にOSはどんな役割があるか覚えましょう。<br><br>
            OSの役割<br>
            (1)ファイル・ディレクトリ(フォルダ)の作成・管理・保持ができます。<br>
            →<span class="markup-word-blue">ファイル</span>…文書や音楽、動画などの形式でコンピュータにおけるデータの管理単位の一つを指します。<br>
            →<span class="markup-word-blue">ディレクトリ(フォルダ)</span>…ファイルをまとめる入れ物や置き場の事です。<br><br>
            (2)タスク管理ができます。<br>
            タスクとは、アプリケーションの処理を細分化したものです。<br>
            OSは優先度などに応じて効率的にタスクを割り当て、アプリケーションの処理をしています。<br><br>
            (3)記憶管理<br>
            プログラムにある命令やデータを記憶できます。<br><br>
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. プログラムの命令操作方法について" id="sectionTitle1-3-m"></SectionTitle>
          <p>
            ではプログラムの命令はどのように行うのか学んでいきましょう!
          </p><br>
          <HighlightWord word="GUI(Graphical User Interface)"></HighlightWord>
          <p>
            グラフィカル(絵画的)にパソコンに操作するインターフェースです。<br>
            デスクトップで見るアイコンやボタン、マウスポインターなどの事を指します。<br>
            プログラムの命令にはこのGUIを使った操作で行うことができます。<br>
            感覚的に操作が行える事がメリットです。<br>
            →<span class="markup-word-blue">インターフェース</span>…機器同士や機器と人との間でやり取りをしやすくするソフトウェアの事を指します。<br><br>
          </p><br>
          <HighlightWord word="CUI(Character User Interface)"></HighlightWord>
          <p>
            単語の通り文字でパソコンに操作するインターフェースです。<br>
            コマンドラインはこのCUIを使った操作でプログラムに命令を行うことができます。<br>
            Windowsならコマンドプロンプト、MacならターミナルがデフォルトでPCに入っています。<br><br>
            このCUIを使った命令を<span class="markup-word-blue">コマンド</span>といいます。<br><br>
            今回コマンドラインのコースではUNIXコマンドをベースに学んでいきます。<br>
            UNIXはOSの説明をしたときに例で出てきました。<br>
            OSの歴史と違いを少しだけ覚えて置きましょう。<br><br>
            <span class="markup-word-red">UNIX</span><br>
            →アメリカのベル研究所で開発された現存する中で最も古いOS(1969~)です。安全性が高く、余分な機能がないため軽くサーバ用途で用いられます。<br><br>
            <span class="markup-word-red">Linux</span><br>
            →UNIXを元にして作られたOS(1991~)。UNIXの機能が不足していると感じたリーナス・トーバルズ氏らが開発しました。無料で改変も配布も自由にできるのが特徴です。<br><br>
            <span class="markup-word-red">WindowsOS</span><br>
            →Microsoft社のビル・ゲイツ氏らによって開発されたOS(1985~)です。<br><br>
            <span class="markup-word-red">MacOS</span><br>
            →Apple社のスティーブ・ジョブズ氏らが開発したOS(1984~)です。<br><br>
            UNIX、LinuxはCUI、Windows、MacOSはGUI操作で命令を行います。<br><br>
          </p>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. コマンドとファイル構造やパスを知る" id="subTitle2-m"></SubTitle>
        <Document>
          <p>
            それではCUI操作で必要なコマンドの種類やファイル構造、パスについて知りましょう。<br>
          </p>
          <SectionTitle sectionTitle="2-1. プログラムの命令(作成・表示・移動)" id="sectionTitle2-1-m"></SectionTitle>
          <p>
            コマンドはファイルやディレクトリの作成、表示、編集、削除、移動があります。<br>
            今回そのコマンドを実行するツールは「ターミナル」を使いましょう。<br><br>
            ①<br>
            「launchpad」で「ターミナル」を開きましょう。
            開くとこのような画面になります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step1)" :src="imagePaths.mac.step1" class="screen-image" alt="git-bash-1" />
          </div><br>
          <p>
            GUIでは主にマウスを使ってエクスプローラーを開いてファイルやディレクトリの作成、表示、編集、削除、移動を行います。<br>
            それらをCUIではコマンドを入れることで行うことができます。<br>
            まずはエクスプローラの構造について知りましょう。<br><br>
          </p>
          <HighlightWord word="ファイル構造"></HighlightWord>
          <p>
            ディレクトリの中にディレクトリやファイルがあるような枝分かれした構造の事です。
            作業中のフォルダやプロジェクトのことを<span class="markup-word-blue">ワーキングツリー</span>といいます。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.mac.tree)" :src="imagePaths.mac.tree" class="powerpoint-image" alt="tree" />
          </div><br>
          <p>
            コマンドラインのコースで重要なことは<span class="markup-word-red">作業しているディレクトリの位置を把握</span>する事です。<br>
            イメージで言うとディレクトリの中に自分がいると思ってください。<br>
            その自分がいるディレクトリを<span class="markup-word-blue">カレントディレクトリ</span>といいます。<br>
            また、上の画像でカレントディレクトリがBディレクトリだとし、その一番上をたどるとAディレクトリが一番上になります。<br>
            今いるディレクトリ構造の一番親のディレクトリのことを<span class="markup-word-blue">ルートディレクトリ</span>といいます。<br>
            今回コースで作業するのはホームディレクトリで行います。<br>
            ターミナルを開くとデフォルトで最初にホームディレクトリの位置にいます。<br><br>
          </p>
          <p>
            では早速コマンドを覚えていきましょう!<br>
            まずはディレクトリの作成です。<br>
          </p>
          <HighlightWord word="mkdir ディレクトリ名"></HighlightWord><br>
          <p>
            ・自分が今作業しているディレクトリの中に新たなディレクトリを作成します。<br>
            「Make Directory」の略称です。<br><br>
            ②<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            ターミナルでは何も出てきませんが、finderで確認すると「sample-1」というディレクトリが作成されていることがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step2)" :src="imagePaths.mac.step2" class="screen-image" alt="git-bash-3" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder1)" :src="imagePaths.mac.folder1" class="screen-image" alt="folder-2" />
          </div><br>
          <HighlightWord word="cd ディレクトリ名"></HighlightWord>
          <p>
            ・自分が今作業しているディレクトリからさらに下のディレクトリに移動ができます。<br>
            逆に今作業しているディレクトリの上のディレクトリに戻るときは<span class="markup-word-blue">「cd ../」</span>を実行すれば戻ることができます。<br><br>
            ③<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            画像のように次を入力する部分に「/sample-1」と文字で書いてあればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step3)" :src="imagePaths.mac.step3" class="screen-image" alt="git-bash-2" />
          </div><br>
          <p>
            CUI操作ではこのようになりますが、GUI操作だとエクスプローラを開いてCドライブをクリックした時の画面という事になります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder2)" :src="imagePaths.mac.folder2" class="screen-image" alt="folder-1" />
          </div><br>
          <br>
          <p>
            では次に今作ったフォルダにファイルの作成してみましょう。<br>
          </p>
          <HighlightWord word="touch ファイル名"></HighlightWord><br>
          <p>
            ・自分が今作業しているディレクトリ(カレントディレクトリ)の中に新たなファイルを作成します。<br><br>
            ④<br>
            まずはターミナルに「sample-1」ディレクトリに移動するためcdコマンドを入力しましょう。
            その後、touchコマンドを入力し、実行しましょう。<br>
            ターミナルでは何も出てきませんが、エクスプローラで「sample-1」ディレクトリを確認すると「memo.txt」というファイルが作成されていることがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step4)" :src="imagePaths.mac.step4" class="screen-image" alt="git-bash-4" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder3)" :src="imagePaths.mac.folder3" class="screen-image" alt="folder-3" />
          </div><br>
          <p>
            次に作ったファイルの中身を表示してみましょう。<br>
          </p>
          <HighlightWord word="cat ファイル名"></HighlightWord><br>
          <p>
            ・自分が今作業しているディレクトリ(カレントディレクトリ)の中にあるファイルの中身を表示します。<br><br>
            ⑤<br>
            まずは先ほど作った「memo.txt」を開きましょう。<br>
            その中に画像のように入力しましょう。
            入力したら「command + s」で保存しましょう。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.memo)" :src="imagePaths.mac.memo" class="screen-image" alt="memo" />
          </div><br>
          <p>
            ⑥<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            テキストファイルを開かなくても中身を確認する事ができます。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step5)" :src="imagePaths.mac.step5" class="screen-image" alt="git-bash-5" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="2-2. プログラムの命令(位置把握・確認・移動)" id="sectionTitle2-2-m"></SectionTitle>
        <Document>
          <p>
            次に自分の作業しているディレクトリ(カレントディレクトリ)までの経路(位置)を知りたい時に使うコマンドを学びましょう。
          </p>
          <HighlightWord word="pwd"></HighlightWord>
          <p>
            ・カレントディレクトリを表示をします。
            ⑦<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            今いる位置が表示されればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step6)" :src="imagePaths.mac.step6" class="screen-image" alt="git-bash-6" />
          </div><br>
          <p>
            次に自分の作業しているディレクトリ(カレントディレクトリ)の中にあるディレクトリやファイルを確認しましょう。<br><br>
          </p>
          <HighlightWord word="ls"></HighlightWord>
          <p>
            ・カレントディレクトリの中身を表示します。<br>
            「List」の略称です。<br><br>
            ⑧<br>
            まずはディレクトリを作りましょう。
            ターミナルに画像のように入力し、実行しましょう。<br>
            ターミナル、エクスプローラで確認するとこのようになっていればOKです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step7)" :src="imagePaths.mac.step7" class="screen-image" alt="git-bash-7" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder4)" :src="imagePaths.mac.folder4" class="screen-image" alt="folder-4" />
          </div><br>
          <p>
            ⑧<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            ターミナルで確認するとこのようになっていればOKです。<br>
          </p><br>
          <p>
            ⑨それでは今作ったディレクトリにテキストファイルを移動しましょう。<br><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step8)" :src="imagePaths.mac.step8" class="screen-image" alt="git-bash-8" />
          </div><br>
          <HighlightWord word="mv 移動させたいファイル名 移動先のディレクトリ(フォルダ)名"></HighlightWord>
          <p>
            ・指定したファイルを指定したディレクトリに移動することができます。<br>
            「Move」の略称です。<br>
            フォルダを移動する時は<br>
            <HighlightWord word="mv 移動させたいディレクトリ名 移動先のディレクトリ名"></HighlightWord>となります。<br><br>
            ⑩<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            ターミナルでは何も表示されませんが、エクスプローラで「test」ディレクトリを確認するとこのようになっています。<br><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step9)" :src="imagePaths.mac.step9" class="screen-image" alt="git-bash-9" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder5)" :src="imagePaths.mac.folder5" class="screen-image" alt="folder-5" />
          </div><br>
          <p>
            mvコマンドは他にも使い方があるので覚えておきましょう。<br><br>
          </p><br>
          <HighlightWord word="mv 名前を変えたいファイル名 新しいファイル名"></HighlightWord>
          <p>
            ・ファイルの名前を変更することができます。<br><br>
            ⑪<br>
            まずは「test」ディレクトリに移動してターミナルに画像のように入力し、実行しましょう。<br>
            ターミナルでは何も表示されませんが、エクスプローラで「test」ディレクトリの中のテキストファイルの名前が変わっているのが分かります。<br><br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step10)" :src="imagePaths.mac.step10" class="screen-image" alt="git-bash-10" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder6)" :src="imagePaths.mac.folder6" class="screen-image" alt="folder-6" />
          </div><br>
        </Document>
        <SectionTitle sectionTitle="2-3. プログラムの命令(複製・削除)" id="sectionTitle2-3-m"></SectionTitle>
        <Document>
          <p>
            ディレクトリやファイルの複製や削除ができるコマンドを学びましょう。<br><br>
          </p>
          <HighlightWord word="cp コピーするファイル名 新しいファイル名"></HighlightWord>
          <p>
            ・自分の作業しているディレクトリ(カレントディレクトリ)の中にあるファイルを新しい名前で中身のデータの状態をコピーできます。<br><br>
            ディレクトリをコピーしたい場合は<br>
            <HighlightWord word="cp –r コピーするディレクトリ名 新しいディレクトリ名"></HighlightWord>となります。<br><br>
            ⑫<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            コピーできていればコピーしたファイルを開くと同じ文章が書いてあるはずです。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step11)" :src="imagePaths.mac.step11" class="screen-image" alt="git-bash-11" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder7)" :src="imagePaths.mac.folder6" class="screen-image" alt="folder-7" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.copy)" :src="imagePaths.mac.copy" class="screen-image" alt="copy" />
          </div><br>
          <HighlightWord word="rm 削除するファイル名"></HighlightWord>
          <p>
            ・自分の作業しているディレクトリ(カレントディレクトリ)の中にあるファイルを削除できます。<br><br>
            ディレクトリごと削除したい場合は<br>
            <HighlightWord word="rm –r 削除するディレクトリ名 "></HighlightWord>となります。<br><br>
            ⑫<br>
            ターミナルに画像のように入力し、実行しましょう。<br>
            ターミナルでは何も出てきませんが、エクスプローラで「test」ディレクトリを確認すると「memo.txt」というファイルが削除されていることがわかります。<br>
          </p><br>
          <div>
            <img @click="openModal(imagePaths.mac.step12)" :src="imagePaths.mac.step12" class="screen-image" alt="git-bash-12" />
          </div><br>
          <div>
            <img @click="openModal(imagePaths.mac.folder8)" :src="imagePaths.mac.folder8" class="screen-image" alt="folder-8" />
          </div><br>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="3. パスとホームディレクトリについて" id="subTitle3-m"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. パスについて" id="sectionTitle3-1-m"></SectionTitle>
          <p>
            パスについて学びましょう。<br>
          </p><br>
          <HighlightWord word="パス"></HighlightWord>
          <p>
            ・経路や道順を意味しています。<br>
            コマンドラインやWebサイト上にある特定ファイルまでの道筋を表すものです。<br>
          </p><br>
          <HighlightWord word="絶対パス(absolute path)"></HighlightWord>
          <p>
            ・ディレクトリなどの階層の一番上から特定のファイルまでの経路を階層ごとに全て記載するパスの事です。<br>
            「フルパス」と呼ばれることもあり、コマンドラインやWebサイト上にある特定ファイルまでの道筋を表すものです。<br>
            webサイトでは、「ドメイン名 / フォルダ名 / … / ファイル名」、エクスプローラーだと「ルートディレクトリ / フォルダ名 / … / ファイル名」という表記になります。<br><br>
            例：<br>
            http:www.hoge.com/test/index.html<br><br>
            /about/test/home/about.html<br><br>
            ↑最初のスラッシュはルートディレクトリを表します。
            <span class="markup-word-blue">「cd /」</span>でルートディレクトリに移動できます。
            絶対パスのメリットとデメリット<br>
            メリット<br>
            ・URLをすべて書いてファイルの場所を指定するため、リンク切れになるミスを防げます。<br>
            デメリット<br>
            ・URLが長くなってしまう。<br>
          </p><br>
          <HighlightWord word="相対パス(relative path)"></HighlightWord>
          <p>
            現在いるファイルを起点とした、目的ファイルまでの経路を記述する形式のこと。<br>
            現在の階層よりも1つ上位の階層への移動を「cd ../」で戻ることができると説明しましたが、
            相対パスは現在地から目的地までの「道順」を記述する方法です<br><br>
            例：<br><br><br>
            ../../contents/file01.png<br><br>
            絶対パスのメリットとデメリット<br>
            メリット<br>
            ・URLが短くできます。<br>
            デメリット<br>
            ・リンク切れになるミスが起こりやすいです。<br><br>
            相対パスや絶対パスはここまで学習したコマンドで使うことができるので一気に作業したいディレクトリに移動したり、指定したディレクトリに削除や複製をすることができます。<br>
          </p><br>
        </Document>
        <SectionTitle sectionTitle="3-2 ホームディレクトリについて" id="sectionTitle3-2-m"></SectionTitle>
        <Document>
            <p>
              <HighlightWord word="ホームディレクトリ"></HighlightWord><br>
              ・ユーザーが作業をするときに基準にするディレクトリの事です。<br>
              ホームディレクトリとは、コンピューター上でログインしたユーザーが作業するための個人用フォルダーと覚えるとよいでしょう。<br><br>
              Windowsだと「C:/User/(自分で設定したパソコンのログイン名)」もしくは「C:/ユーザー/(自分で設定したパソコンのログイン名)」の経路にあるディレクトリになります。<br><br>
              <span class="markup-word-blue">「cd ~」</span>でホームディレクトリに移動できます。
            </p>
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
      { id: "Title-w", title: "コマンドライン 1 (Windowsの方)" },
      { id: "subTitle1-w", title: "  1. コマンドラインとプログラミングについて" },
      { id: "sectionTitle1-1-w", title: "    1-1. コマンドラインとは?" },
      { id: "sectionTitle1-2-w", title: "    1-2. コンピュータの基本的な仕組み" },
      { id: "sectionTitle1-3-w", title: "    1-3. プログラムの命令操作方法について" },
      { id: "subTitle2-w", title: "  2. コマンドとファイル構造やパスを知る" },
      { id: "sectionTitle2-1-w", title: "    2-1. プログラムの命令(作成・表示・移動)②" },
      { id: "sectionTitle2-2-w", title: "    2-2. プログラムの命令(位置把握・確認・移動)" },
      { id: "sectionTitle2-3-w", title: "    2-3. プログラムの命令(複製・削除)" },
      { id: "subTitle3-w", title: "  3. パスとホームディレクトリについて" },
      { id: "sectionTitle3-1-w", title: "    3-1. パスについて" },
      { id: "sectionTitle3-2-w", title: "    3-2 ホームディレクトリについて" },
    ];

    const macSections = [
      { id: "Title-m", title: "コマンドライン 1 (Macの方)" },
      { id: "subTitle1-m", title: "  1. コマンドラインとプログラミングについて" },
      { id: "sectionTitle1-1-m", title: "    1-1. コマンドラインとは" },
      { id: "sectionTitle1-2-m", title: "    1-2. コンピュータの基本的な仕組み" },
      { id: "sectionTitle1-3-m", title: "    1-3. プログラムの命令操作方法について" },
      { id: "subTitle2-m", title: "  2. コマンドとファイル構造やパスを知る" },
      { id: "sectionTitle2-1-m", title: "    2-1. プログラムの命令(作成・表示・移動)②" },
      { id: "sectionTitle2-2-m", title: "    2-2. プログラムの命令(位置把握・確認・移動)" },
      { id: "sectionTitle2-3-m", title: "    2-3. プログラムの命令(複製・削除)" },
      { id: "subTitle3-m", title: "  3. パスとホームディレクトリについて" },
      { id: "sectionTitle3-1-m", title: "    3-1. パスについて" },
      { id: "sectionTitle3-2-m", title: "    3-2 ホームディレクトリについて" },
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
        hardware: require("../../../assets/images/course/command-line-1/hardware.png"),
        step1: require("../../../assets/images/course/command-line-1/git-bash-1.png"),
        tree: require("../../../assets/images/course/command-line-1/tree.png"),
        step2: require("../../../assets/images/course/command-line-1/git-bash-2.png"),
        folder1: require("../../../assets/images/course/command-line-1/folder-1.png"),
        step3: require("../../../assets/images/course/command-line-1/git-bash-3.png"),
        folder2: require("../../../assets/images/course/command-line-1/folder-2.png"),
        step4: require("../../../assets/images/course/command-line-1/git-bash-4.png"),
        folder3: require("../../../assets/images/course/command-line-1/folder-3.png"),
        memo: require("../../../assets/images/course/command-line-1/memo.png"),
        step5: require("../../../assets/images/course/command-line-1/git-bash-5.png"),
        step6: require("../../../assets/images/course/command-line-1/git-bash-6.png"),
        step7: require("../../../assets/images/course/command-line-1/git-bash-7.png"),
        folder4: require("../../../assets/images/course/command-line-1/folder-4.png"),
        step8: require("../../../assets/images/course/command-line-1/git-bash-8.png"),
        step9: require("../../../assets/images/course/command-line-1/git-bash-9.png"),
        folder5: require("../../../assets/images/course/command-line-1/folder-5.png"),
        step10: require("../../../assets/images/course/command-line-1/git-bash-10.png"),
        folder6: require("../../../assets/images/course/command-line-1/folder-6.png"),
        step11: require("../../../assets/images/course/command-line-1/git-bash-11.png"),
        folder7: require("../../../assets/images/course/command-line-1/folder-7.png"),
        copy: require("../../../assets/images/course/command-line-1/copy.png"),
        step12: require("../../../assets/images/course/command-line-1/git-bash-12.png"),
        folder8: require("../../../assets/images/course/command-line-1/folder-8.png"),
        root: require("../../../assets/images/course/command-line-1/root.png"),
      },
      mac: {
        software: require("../../../assets/images/course/command-line-1/software.png"),
        hardware: require("../../../assets/images/course/command-line-1/hardware.png"),
        step1: require("../../../assets/images/course/command-line-1/terminal-1.png"),
        tree: require("../../../assets/images/course/command-line-1/tree.png"),
        step2: require("../../../assets/images/course/command-line-1/terminal-2.png"),
        folder1: require("../../../assets/images/course/command-line-1/finder-1.png"),
        step3: require("../../../assets/images/course/command-line-1/terminal-3.png"),
        folder2: require("../../../assets/images/course/command-line-1/finder-2.png"),
        step4: require("../../../assets/images/course/command-line-1/terminal-4.png"),
        folder3: require("../../../assets/images/course/command-line-1/finder-3.png"),
        memo: require("../../../assets/images/course/command-line-1/memo-m.png"),
        step5: require("../../../assets/images/course/command-line-1/terminal-5.png"),
        step6: require("../../../assets/images/course/command-line-1/terminal-6.png"),
        step7: require("../../../assets/images/course/command-line-1/terminal-7.png"),
        folder4: require("../../../assets/images/course/command-line-1/finder-4.png"),
        step8: require("../../../assets/images/course/command-line-1/terminal-8.png"),
        step9: require("../../../assets/images/course/command-line-1/terminal-9.png"),
        folder5: require("../../../assets/images/course/command-line-1/finder-5.png"),
        step10: require("../../../assets/images/course/command-line-1/terminal-10.png"),
        folder6: require("../../../assets/images/course/command-line-1/finder-6.png"),
        step11: require("../../../assets/images/course/command-line-1/terminal-11.png"),
        folder7: require("../../../assets/images/course/command-line-1/finder-7.png"),
        copy: require("../../../assets/images/course/command-line-1/copy-m.png"),
        step12: require("../../../assets/images/course/command-line-1/terminal-12.png"),
        folder8: require("../../../assets/images/course/command-line-1/finder-8.png"),
        root: require("../../../assets/images/course/command-line-1/root.png"),
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
}
</style>