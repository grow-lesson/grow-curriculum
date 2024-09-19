<template>
  <div>
    <Header />
    <Spinner :isLoading="isLoading" />
    <button class="change_component_button" @click="toggleOS">{{ isWindows ? "Macをお持ちの方はこちら" : "Windowsをお持ちの方はこちら" }}</button>
    <div class="container">
      <!-- Windows版の説明 -->
      <div class="main-content" v-show="isWindows">
        <Title title="SQL 1 (Windowsの方)" id="Title-w"></Title>
        <Document>
          <p>SQLの基本的なクエリ操作と考え方を学びましょう。</p>
        </Document>
        <!-- section 1 -->
        <SubTitle subTitle="1. SQLについて学ぶ" id="subTitle1-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. SQLとは?" id="sectionTitle1-1-w"></SectionTitle>
          <p>
            皆さんがこれから学ぶ「SQL」について概要を理解しましょう!<br>
          </p><br>
          <HighlightWord word="SQL（Structured Query Language)"></HighlightWord>
          <p> 
            ・SQLとはデータベースを操作するための言語です。<br>
            SQLを使うことで、データベースに対して次のような操作が可能になります。<br><br>
            1.<span class="markup-word-blue">テーブルの作成と管理</span><br>
            2.<span class="markup-word-blue">データの取得</span><br>
            3.<span class="markup-word-blue">データの追加</span><br>
            4.<span class="markup-word-blue">データの更新</span><br>
            5.<span class="markup-word-blue">データの削除</span><br>
            <br>
            ではSQLのこの操作を行うために必要な手順や単語について深掘りしていきましょう!
          </p><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. データベースの概要と種類" id="sectionTitle1-2-w"></SectionTitle>
          <p>
            まずは一般的なデータベースの概要について説明します。<br><br>
            <HighlightWord word="データベース（Database）"></HighlightWord>
            <br>
            ・データベースとはデータの集まりを組織的に保存・管理するためのシステムの事を指します。<br>
            すべてのデータベースはテーブルと呼ばれる集合で構成されています。<br><br>
            <HighlightWord word="テーブル（Table）"></HighlightWord>
            <br>
            ・テーブルとはデータを行と列の形式で保存する構造です。テーブルは、データベース内の特定の種類の情報を保持します。<br><br>
            <HighlightWord word="レコード（Record）"></HighlightWord>
            <br>
            ・テーブルの一つの行を指し、1つのデータセットを表します。レコードは各列に対応するデータを持っています。<br><br>
            <HighlightWord word="カラム（Column）"></HighlightWord>
            <br>
            ・テーブル内の列で、データの属性（フィールド）を表します。各カラムは特定のデータ型を持ち、テーブルのレコードに共通の項目を持ちます。<br><br>
            図で表すと以下のようになります。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.database)" :src="imagePaths.win.database" class="powerpoint-image" alt="database" />
          </div><br>
          <p>
            このようなテーブル形式で管理し、各テーブルが行と列で構成されているデータベースを<span class="markup-word-red">リレーショナルデータベース（RDB: Relational Database）</span>といいます。<br>
            リレーショナルデータベースの代表的な例を紹介します。<br><br>
            <HighlightWord word="MySQL"></HighlightWord>
            <br>
            オープンソースのリレーショナルデータベースで、広く普及しているデータベースの一つです。<br>
            高速なパフォーマンスと使いやすさで知られ、特にWebアプリケーションに多く使用されています。<br>
            現在はOracle Corporationが所有しています。<br><br>
            主な特徴<br>
            1.高速な読み取り性能<br>
            2.シンプルで使いやすい<br>
            3.多くのWebアプリケーションで利用される。<br>
            4.オープンソースで無料で使え、どのOSにも対応。<br><br>
            どういうときに使う？
            →Webサイト、オンラインストア、コンテンツ管理システムなど、さまざまな用途に使用されます。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.mysql)" :src="imagePaths.win.mysql" class="logo-image" alt="mysql" />
          </div><br>
          <p>
            <HighlightWord word="PostgreSQL"></HighlightWord>
            <br>
            オープンソースのオブジェクトリレーショナルデータベースシステム（ORDBMS）で、高度な機能と堅牢性を持つことで知られています。<br>
            データの整合性と拡張性に優れています。<br>
            主な特徴<br>
            1.高い拡張性と標準SQLに対する強い準拠<br>
            2.トリガー、ストアドプロシージャ、カスタムデータ型などの高度な機能<br>
            3.データベースのパフォーマンスチューニングが可能<br>
            4.マルチバイト文字や国際化に対応<br>
            5.JSONやXMLなどの拡張子のサポートがあり、NoSQL的な使い方も可能<br>
            6.オープンソースで無料<br><br>
            どういうときに使う？
            →大規模なデータ処理や分析システムなどで広く使用されます。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.postgres)" :src="imagePaths.win.postgres" class="logo-image" alt="postgres" />
          </div><br>
          <p>
            <HighlightWord word="Oracle Database"></HighlightWord>
            <br>
            Oracle Corporationによって開発された商用のリレーショナルデータベースです。<br>
            エンタープライズ環境で広く使われ、非常に高い信頼性、セキュリティ、スケーラビリティを提供します。<br>
            主な特徴<br>
            1.強力なセキュリティ機能とアクセス制御<br>
            2.高いパフォーマンスと可用性のための機能<br>
            3.データベース管理のためのツールが豊富<br>
            4.大規模なエンタープライズシステムでの使用に最適<br>
            5.ライセンス費用が高額だが、サポートが充実<br>
            どういうときに使う？
            →金融、医療、政府機関など、企業・組織の存続に欠かせない重大なシステムや大規模なエンタープライズシステムに広く利用されています。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.oracle)" :src="imagePaths.win.oracle" class="logo-image" alt="oracle" />
          </div><br>
          <p>
            リレーショナルデータベースの他にも<span class="markup-word-red">NoSQLデータベース</span>や、
            <span class="markup-word-red">オブジェクト指向データベース</span>、<span class="markup-word-red">時系列データベース</span>など様々なデータベースが存在します。<br>
            今回はSQLについて学んでいくため省略しますが興味があれば調べてみましょう!<br>
            それではSQLを使ってデータベースを操作する手順を説明していきます。<br>
            データベースはシンプルで使いやすい「MySQL」を利用していきます。<br>
          </p>
        </Document>
        <!-- section 2 -->
        <SubTitle subTitle="2. MySQLのインストールや環境構築" id="subTitle2-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. MySQLをインストール" id="sectionTitle2-1-w"></SectionTitle>
          <p>
            MySQLを使えるように準備をしましょう。<br>
            まずはMySQLの公式サイトでダウンロードを行いましょう。<br><br>
          </p>
          <div class="download">
            <a class="download-link" href="https://www.mysql.com/jp/downloads/">MySQLをダウンロードする</a><br><br><br><br>
          </div>
          <p>
            開くと以下のような画面が表示されます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step1)" :src="imagePaths.win.step1" class="screen-image" alt="step-1" />
          </div><br>
          <p>
            画面の一番下にある「MySQL Community (GPL) Downloads」を押下します。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step2)" :src="imagePaths.win.step2" class="screen-image" alt="step-2" />
          </div><br>
          <p>
            「MySQL Installer for Windows」を押下します。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step3)" :src="imagePaths.win.step3" class="screen-image" alt="step-3" />
          </div><br>
          <p>
            「Select Operating System」で「Microsoft Windows」を選択しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step4)" :src="imagePaths.win.step4" class="screen-image" alt="step-4" />
          </div><br>
          <p>
            「Windows (x86, 64-bit), MSI Installer」のサイズが大きい方を選び「Download」を選択しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step5)" :src="imagePaths.win.step5" class="screen-image" alt="step-5" />
          </div><br>
          <p>
            「No thanks, just start my download.」を押下しダウンロードしましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step6)" :src="imagePaths.win.step6" class="screen-image" alt="step-6" />
          </div><br>
          <SectionTitle sectionTitle="2-2. SQLの環境構築をする" id="sectionTitle2-2-w"></SectionTitle>
          <p>
            ダウンロードしたインストーラーを起動してください。<br>
            「このアプリがデバイスに変更を加えることを許可しますか？」とでは、すべて「はい」を選択してください。<br>
            すると以下の画面が起動するので「Choosing a Setup Type」の画面で「Full」を選択し、「Next」をクリックします。
            「Full」を選択することですべてのパッケージをダウンロードできます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step7)" :src="imagePaths.win.step7" class="screen-image" alt="step-7" />
          </div><br>
          <p>
            「Check Requirements」の画面で、「Execute」をクリックし、ポップアップ画面の同意にチェックを入れて「インストール」をクリックしてください。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step8)" :src="imagePaths.win.step8" class="screen-image" alt="step-8" />
          </div><br>
          <p>
            「Installation」の画面で、「Execute」をクリックし、インストールを開始します。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step9)" :src="imagePaths.win.step9" class="screen-image" alt="step-9" />
          </div><br>
          <p>
            インストールが終了したら「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step10)" :src="imagePaths.win.step10" class="screen-image" alt="step-10" />
          </div><br>
          <p>
            「Product Configuration」の画面は、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step11)" :src="imagePaths.win.step11" class="screen-image" alt="step-11" />
          </div><br>
          <p>
            「Type and Networking」の画面は、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step12)" :src="imagePaths.win.step12" class="screen-image" alt="step-12" />
          </div><br>
          <p>
            「Authentication Method」の画面は、「RECOMMENDED」（推奨）の方を選択し、「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step13)" :src="imagePaths.win.step13" class="screen-image" alt="step-13" />
          </div><br>
          <p>
            「Accunts and Roles」の画面は、管理者用パスワードを設定してから「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step14)" :src="imagePaths.win.step14" class="screen-image" alt="step-14" />
          </div><br>
          <p>
            「Windows Service」の画面は、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step15)" :src="imagePaths.win.step15" class="screen-image" alt="step-15" />
          </div><br>
          <p>
            「Server File Permissions」の画面は、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step16)" :src="imagePaths.win.step16" class="screen-image" alt="step-16" />
          </div><br>
          <p>
            「Apply Configuration」の画面は、「Execute」をクリックし一度今までの設定を反映させます。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step17)" :src="imagePaths.win.step17" class="screen-image" alt="step-17" />
          </div><br>
          <p>
            設定の反映が完了したら「Finish」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step18)" :src="imagePaths.win.step18" class="screen-image" alt="step-18" />
          </div><br>
          <p>
            「Product Configuration」の画面は、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step19)" :src="imagePaths.win.step19" class="screen-image" alt="step-19" />
          </div><br>
          <p>
            「MySQL Router Configuration」の画面は、そのまま「Finish」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step20)" :src="imagePaths.win.step20" class="screen-image" alt="step-20" />
          </div><br>
          <p>
            「Product Configuration」の画面が再度表示されたら、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step21)" :src="imagePaths.win.step21" class="screen-image" alt="step-21" />
          </div><br>
          <p>
            「Connect To Server」の画面は、Password欄に「管理者用パスワード」と同じものを入力し、「Check」をクリックします。
            Statusに緑色の応答が確認できれば「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step22)" :src="imagePaths.win.step22" class="screen-image" alt="step-22" />
          </div><br>
          <p>
            「Apply Configuration」の画面が再度表示されたら、「Execute」をクリックし今までの設定を反映します。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step23)" :src="imagePaths.win.step23" class="screen-image" alt="step-23" />
          </div><br>
          <p>
            設定が反映出来たら「Finish」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step24)" :src="imagePaths.win.step24" class="screen-image" alt="step-24" />
          </div><br>
          <p>
            「Product Configuration」の画面が再度表示されたら、そのまま「Next」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step25)" :src="imagePaths.win.step25" class="screen-image" alt="step-25" />
          </div><br>
          <p>
            「Installation Complete」の画面は、「Finish」をクリックします。
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step26)" :src="imagePaths.win.step26" class="screen-image" alt="step-26" />
          </div><br>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. MySQLに接続する" id="subTitle3-w"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. SQLの起動" id="sectionTitle3-1-w"></SectionTitle>
          <p>
            PCの下にあるWindowsマークを押して「MySQL Command Line Client」を探す、または検索しクリックして起動します。<br>
            パスワードを入力するように出るので、インストール時に設定したPasswordを入力して接続しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step27)" :src="imagePaths.win.step27" class="screen-image" alt="step-27" />
          </div><br>
          <p>
            <br>
            接続に成功すると「mysql > 」となります。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step28)" :src="imagePaths.win.step28" class="screen-image" alt="step-28" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-2. SQLのクエリ実行(データベース・テーブルの作成)" id="sectionTitle3-2-w"></SectionTitle>
          <p>
            SQLの実行はどのように行うのか学んでいきましょう。<br>
            <HighlightWord word="クエリ"></HighlightWord><br>
            ・データベースに送る命令の事です。<br>
            「MySQL Command Line Client」を使ってコマンドを入力していきます。<br><br>
            それではMySQLに接続できたら、以下のクエリでデータベースを作成しましょう。<br>
            <HighlightWord word="CREATE DATABASE データベース名;"></HighlightWord><br>
            新しいデータベースを作成出来るクエリです。<br>
          </p>
          <br><Terminal :fileName="sqlData.file1.filename" :copiedText="sqlData.file1.code" :lang="sqlData.file1.language" /><br>
          <p>
            それでは作ったデータベースをGUIの「MySQL Workbench」で確認してみましょう。<br><br>
            画面下にあるWindowsマークを押して「MySQL Workbench」を探す、または検索しクリックして起動します。<br><br>
            画面が開いたら「MySQL Connection」の右にある「+」ボタンを押しましょう。<br>

          </p>
          <div>
            <img @click="openModal(imagePaths.win.step29)" :src="imagePaths.win.step29" class="screen-image" alt="step-29" />
          </div><br>
          <p>
            Connection Nameに好きな名前入れ、残りの設定は触らず「OK」を押下してください。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step30)" :src="imagePaths.win.step30" class="screen-image" alt="step-30" />
          </div><br>
          <p>
            パスワードを入れて「OK」を押下しましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step31)" :src="imagePaths.win.step31" class="screen-image" alt="step-31" />
          </div><br>
          <p>
            <br>
            表示された画面の左の「Navigator」に自信が作成したテーブルが確認できればOKです。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step32)" :src="imagePaths.win.step32" class="screen-image" alt="step-32" />
          </div><br>
          <p>
            <br>
            MySQL Workbenchで確認できたら、以下のクエリでデータベースに接続しましょう。<br>
            <HighlightWord word="USE データベース名;"></HighlightWord><br>
            データベースに接続出来るクエリです。<br><br>
          </p>
          <Terminal :fileName="sqlData.file2.filename" :copiedText="sqlData.file2.code" :lang="sqlData.file2.language" />
          <div>
            <img @click="openModal(imagePaths.win.step33)" :src="imagePaths.win.step33" class="screen-image" alt="step-33" />
          </div><br>
          <p>
            <br>
            MySQL Workbenchで確認できたら、以下のクエリで次はテーブルを作成しましょう。<br>
            <HighlightWord word="CREATE TABLE テーブル名(カラム名 データ型) 制約;"></HighlightWord><br>
            テーブルを作成しカラム情報を追加出来るクエリです。<br><br>
          </p>
          <Terminal :fileName="sqlData.file3.filename" :copiedText="sqlData.file3.code" :lang="sqlData.file3.language" />
          <p>
            クエリの解説をしていきます。<br>
            <br>
            データ型について<br>
            <HighlightWord word="INT"></HighlightWord><br>
            カラムに格納されるデータの種類を整数にします。<br><br>
            <HighlightWord word="VARCHAR(長さ)"></HighlightWord><br>
            カラムに格納されるデータの種類を可変長の文字列にします。<br>
            可変長とは(長さ)に設定した文字より少ない値を入れてもその文字分しか格納しません。<br><br>
            <HighlightWord word="CHAR(長さ)"></HighlightWord><br>
            カラムに格納されるデータの種類を固定長の文字列にします。<br>
            固定長とは(長さ)に指定された範囲内で不足している分はスペース（空白）で埋められます。<br><br>
            <HighlightWord word="DATE"></HighlightWord><br>
            カラムに格納されるデータの種類を日付にします。<br><br>
            <HighlightWord word="TIMESTAMP"></HighlightWord><br>
            カラムに格納されるデータの種類を日付と時間にします。<br><br>
            <HighlightWord word="BOOLEAN"></HighlightWord><br>
            カラムに格納されるデータの種類を真偽値（TRUE または FALSE）にします。<br><br>
            <br>
            制約について<br>
            <HighlightWord word="PRIMARY KEY"></HighlightWord><br>
            テーブル内でランダムな識別子を示すカラムを定義します。<br><br>
            <HighlightWord word="FOREIGN KEY"></HighlightWord><br>
            他のテーブルのカラムとのリレーション（関係）を定義します。<br><br>
            <HighlightWord word="NOT NULL"></HighlightWord><br>
            カラムがNULL値（空値）を持たないようにします。<br><br>
            <HighlightWord word="UNIQUE"></HighlightWord><br>
            カラム内の値がすべて異なることを保証します。<br><br>
            <HighlightWord word="DEFAULT"></HighlightWord><br>
            カラムのデフォルト値を設定します。<br><br>
            <HighlightWord word="AUTO_INCREMENT"></HighlightWord><br>
            自動的に連番を割り当てる際に使用します（主にIDなどのカラム）。<br><br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step34)" :src="imagePaths.win.step34" class="screen-image" alt="step-34" />
          </div><br>
          <p>
            <br>
            CLI上で作ったテーブル確認する事が出来ます。<br>
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-3. SQLのクエリ実行(データベース・テーブルの確認とデータの挿入)" id="sectionTitle3-3-w"></SectionTitle>
          <p> 
            <br>
            <HighlightWord word="SHOW TABLES;"></HighlightWord><br>
            接続したデータベースにあるテーブルの一覧を表示できるクエリです。<br>
          </p>
          <Terminal :fileName="sqlData.file4.filename" :copiedText="sqlData.file4.code" :lang="sqlData.file4.language" />
          <div>
            <img @click="openModal(imagePaths.win.step35)" :src="imagePaths.win.step35" class="screen-image" alt="step-35" />
          </div><br>
          <p>
            <br>
            また、さらに詳しくテーブルの詳細を確認する事が出来ます。<br>
            <HighlightWord word="DESCRIBE テーブル名;"></HighlightWord><br>
            接続したデータベースにあるテーブルのカラムの詳細を表示できるクエリです。<br>
          </p>
          <Terminal :fileName="sqlData.file5.filename" :copiedText="sqlData.file5.code" :lang="sqlData.file5.language" />
          <div>
            <img @click="openModal(imagePaths.win.step36)" :src="imagePaths.win.step36" class="screen-image" alt="step-36" />
          </div><br>
          <p>
            <br>
            テーブルが作成され、カラムが追加されたか確認しましょう。<br>
            作成したデータベースを選択し、Tableを右クリックし「Refresh All」を選択しましょう。<br>
            usersテーブルが表示されるのでクリックしてみましょう。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step37)" :src="imagePaths.win.step37" class="screen-image" alt="step-37" />
          </div><br>
          <p>
            <br>
            usersテーブルの詳細が開かれることを確認し、カーソルをusersに合わせると3つのアイコンが出てくるので一番右のマークを押してください。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step38)" :src="imagePaths.win.step38" class="screen-image" alt="step-38" />
          </div><br>
          <p>
            <br>
            テーブル情報が表示され、カラムが追加されていることが確認できればOKです。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step39)" :src="imagePaths.win.step39" class="screen-image" alt="step-39" />
          </div><br>
          <p>
            <br>
            では追加したカラムにデータを挿入してみましょう。<br>
            <HighlightWord word="INSERT INTO テーブル名 (カラム名1, カラム名2, ...) VALUES (値1, 値2, ...);"></HighlightWord><br>
            接続したデータベースにあるテーブルにデータを挿入できるクエリです。<br>
            NOW()関数は現在の日時を取得し値として挿入できます。<br>
          </p>
          <Terminal :fileName="sqlData.file6.filename" :copiedText="sqlData.file6.code" :lang="sqlData.file6.language" />
          <div>
            <img @click="openModal(imagePaths.win.step40)" :src="imagePaths.win.step40" class="screen-image" alt="step-40" />
          </div><br>
          <p>
            <br>
            カラム情報が作成され、データが追加されたか確認しましょう。<br>
            先ほど表示したテーブル情報の上部にある更新ボタンを押下しましょう。<br>
            データが挿入されていることが確認できます。<br>
          </p>
          <div>
            <img @click="openModal(imagePaths.win.step41)" :src="imagePaths.win.step41" class="screen-image" alt="step-41" />
          </div><br>
          <p>
            <br>
            CLI(MySQL Command Line Client)でもデータを確認できます。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-4. SQLのクエリ実行(データの確認と検索)" id="sectionTitle3-4-w"></SectionTitle>
          <p>
            <br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名;"></HighlightWord><br>
            接続したデータベースにあるテーブルのデータの詳細を表示できるクエリです。<br>
            カラム名の所に「*(アスタリスク)」を入れると全カラムのデータを取得できます。カラム名は「,」で複数指定することも出来ます。<br>
          </p>
          <Terminal :fileName="sqlData.file7.filename" :copiedText="sqlData.file7.code" :lang="sqlData.file7.language" />
          <div>
            <img @click="openModal(imagePaths.win.step42)" :src="imagePaths.win.step42" class="screen-image" alt="step-42" />
          </div><br>
          <p>
            <br>
            より詳しく検索することも可能です<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE 条件;"></HighlightWord><br>
            接続したデータベースにあるテーブルのデータの詳細をデータをフィルタリング表示できるクエリです。<br>
            カラム名の所に「*(アスタリスク)」を入れると全カラムのデータを取得できます。カラム名は「,」で複数指定することも出来ます。<br>
            それでは以下のクエリを実行して複数行のデータを挿入して、フィルタリングを行ってみましょう。<br>
          </p>
          <Terminal :fileName="sqlData.file8.filename" :copiedText="sqlData.file8.code" :lang="sqlData.file8.language" />
          <div>
            <img @click="openModal(imagePaths.win.step43)" :src="imagePaths.win.step43" class="screen-image" alt="step-43" />
          </div><br>
          <p>
            <br>
            それではusersテーブルから特定のユーザー取り出してみましょう。<br>
          </p>
          <Terminal :fileName="sqlData.file9.filename" :copiedText="sqlData.file9.code" :lang="sqlData.file9.language" />
          <div>
            <img @click="openModal(imagePaths.win.step44)" :src="imagePaths.win.step44" class="screen-image" alt="step-44" />
          </div><br>
          <p>
            <br>
            複数条件を使用する際に使える句もあります。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE 条件1 AND 条件2;"></HighlightWord><br>
            条件1かつ条件2のカラムを取り出すことができます。<br>
          </p>
          <Terminal :fileName="sqlData.file10.filename" :copiedText="sqlData.file10.code" :lang="sqlData.file10.language" />
          <div>
            <img @click="openModal(imagePaths.win.step45)" :src="imagePaths.win.step45" class="screen-image" alt="step-45" />
          </div><br>
          <p>
            <br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE 条件1 OR 条件2;"></HighlightWord><br>
            条件1または条件2のカラムを取り出すことができます。<br>
          </p>
          <Terminal :fileName="sqlData.file11.filename" :copiedText="sqlData.file11.code" :lang="sqlData.file11.language" />
          <div>
            <img @click="openModal(imagePaths.win.step46)" :src="imagePaths.win.step46" class="screen-image" alt="step-46" />
          </div><br>
          <p>
            <br>
            部分一致の検索も可能です。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE 条件 LIKE = 'キーワード';"></HighlightWord><br>
            部分的に一致しているカラムを取り出すことが可能です。<br>
          </p>
          <Terminal :fileName="sqlData.file12.filename" :copiedText="sqlData.file12.code" :lang="sqlData.file12.language" />
          <div>
            <img @click="openModal(imagePaths.win.step47)" :src="imagePaths.win.step47" class="screen-image" alt="step-47" />
          </div><br>
          <p>
            <br>
            LIKEで使われた「%」は<span class="markup-word-blue">ワイルドカード</span>と呼ばれどんな文字にも必ず一致する事さす記号になります。<br><br>
            つまりここでは「examlpe」を含むデータすべてを取得できるという事です。<br>
            「examlpe」の前に「%」を付けると前方一致、後ろにつけると後方一致で検索もできます。<br>
            また、日付や数字をWHERE句で使う時は比較演算子(javascriptコースのレッスン2を参考)も使えるので覚えておきましょう。<br><br>
            <br>
            idが2のユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file13.filename" :copiedText="sqlData.file13.code" :lang="sqlData.file13.language" />
          <p>
            <br>
            idが2でないユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file14.filename" :copiedText="sqlData.file14.code" :lang="sqlData.file14.language" />
          <p>
            <br>
            または、
          </p>
          <Terminal :fileName="sqlData.file15.filename" :copiedText="sqlData.file15.code" :lang="sqlData.file15.language" />
          <p>
            <br>
            idが2より大きいユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file16.filename" :copiedText="sqlData.file16.code" :lang="sqlData.file16.language" />
          <p>
            <br>
            idが2より小さいユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file17.filename" :copiedText="sqlData.file17.code" :lang="sqlData.file17.language" />
          <p>
            <br>
            idが2以上のユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file18.filename" :copiedText="sqlData.file18.code" :lang="sqlData.file18.language" />
          <p>
            <br>
            idが2以下のユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file19.filename" :copiedText="sqlData.file19.code" :lang="sqlData.file19.language" />
          <p>
            <br>
            idが2から4のユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file20.filename" :copiedText="sqlData.file20.code" :lang="sqlData.file20.language" />
          <p>
            <br>
            idが1, 3, 4のいずれかであるユーザーを検索します。<br>
          </p>
          <Terminal :fileName="sqlData.file21.filename" :copiedText="sqlData.file21.code" :lang="sqlData.file21.language" />
          <p>
            <br>
            否定の条件でデータを取得もできます。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE NOT 条件;"></HighlightWord><br>
            特定の条件が成立しない場合に一致するデータを取り出すことが可能です。<br>
          </p>
          <Terminal :fileName="sqlData.file22.filename" :copiedText="sqlData.file22.code" :lang="sqlData.file22.language" />
          <div>
            <img @click="openModal(imagePaths.win.step48)" :src="imagePaths.win.step48" class="screen-image" alt="step-48" />
          </div><br>
          <p>
            <br>
            他にもNULLのでデータを取得もできます。<br>
            NULLとはデータが入っていない状態を指します。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE 条件 IS NULL;"></HighlightWord><br>
            特定の条件が成立しない場合に一致するデータを取り出すことが可能です。<br><br>
            <br>
            また、逆にNULLでないデータを取得するときは以下のようになります。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 WHERE 条件 IS NOT NULL;"></HighlightWord><br>
          </p>
          <Terminal :fileName="sqlData.file23.filename" :copiedText="sqlData.file23.code" :lang="sqlData.file23.language" />
          <p>
            <br>
            次に取得したデータを並び替えてみましょう。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 ORDER BY カラム名 [ASC|DESC];"></HighlightWord><br>
            取得したデータを昇順(ASC)、または降順(DESC)に並び替えることができるクエリです。<br>
            昇順の際は設定しなくてもデフォルトで設定されます。<br>
            昇順<br>
          </p>
          <Terminal :fileName="sqlData.file24.filename" :copiedText="sqlData.file24.code" :lang="sqlData.file24.language" />
          <div>
            <img @click="openModal(imagePaths.win.step49)" :src="imagePaths.win.step49" class="screen-image" alt="step-49" />
          </div><br>
          <p>
            <br>
            降順<br>
          </p>
          <Terminal :fileName="sqlData.file25.filename" :copiedText="sqlData.file25.code" :lang="sqlData.file25.language" />
          <div>
            <img @click="openModal(imagePaths.win.step50)" :src="imagePaths.win.step50" class="screen-image" alt="step-50" />
          </div><br>
          <p>
            <br>
            次にデータを取得する行数を制限しましょう。<br>
            <HighlightWord word="SELECT カラム名 FROM テーブル名 LIMIT 行数;"></HighlightWord><br>
            行数を制限できる句です。<br>
            行数に数字を2つ入れ、間にカンマを入れると〇行目～〇行目まで取得することも出来ます。<br>
          </p>
          <Terminal :fileName="sqlData.file26.filename" :copiedText="sqlData.file26.code" :lang="sqlData.file26.language" />
          <div>
            <img @click="openModal(imagePaths.win.step51)" :src="imagePaths.win.step51" class="screen-image" alt="step-51" />
          </div><br>
        </Document>
        <Document>
          <SectionTitle sectionTitle="3-5. SQLのクエリ実行(データの更新と削除)" id="sectionTitle3-5-w"></SectionTitle>
          <p>
            <br>
            次にデータを更新してみましょう。<br>
            <HighlightWord word="UPDATE テーブル名 SET カラム名1 = 値1, カラム名2 = 値2, ... WHERE 条件;"></HighlightWord><br>
            すでに作ったデータを更新することができるクエリです。<br>
            SET: 更新するカラムとその新しい値を指定します。<br>
            UPDATEはデータをもとに戻すことはできないので注意して操作しましょう。<br>
          </p>
          <Terminal :fileName="sqlData.file27.filename" :copiedText="sqlData.file27.code" :lang="sqlData.file27.language" />
          <div>
            <img @click="openModal(imagePaths.win.step52)" :src="imagePaths.win.step52" class="screen-image" alt="step-52" />
          </div><br>
          <p>
            <br>
            最後にデータを削除してみましょう。<br>
            <HighlightWord word="DELETE FROM テーブル名 WHERE 条件;"></HighlightWord><br>
            すでに作ったデータを削除することができるクエリです。<br>
            DELETEはデータをもとに戻すことはできないので注意して操作しましょう。<br>
          </p>
          <Terminal :fileName="sqlData.file28.filename" :copiedText="sqlData.file28.code" :lang="sqlData.file28.language" />
          <div>
            <img @click="openModal(imagePaths.win.step53)" :src="imagePaths.win.step53" class="screen-image" alt="step-53" />
          </div><br>
        </Document>

        
        <Modal :selectedImage="selectedImage" :showModal="isModalOpen" @closeModal="isModalOpen = false" />
      </div>
      <!-- Mac版の説明 -->
      <div class="main-content" v-show="!isWindows">
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
import Terminal from "@/components/Terminal.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { sqlData } from "@/data/sqlData.js";
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
    Terminal,
    TableOfContents,
    Spinner,
    Modal,
  },
  setup() {
    const isWindows = ref(true);
    const isSmallScreen = ref(false);
    const isLoading = ref(false);

    const windowsSections = [
      { id: "Title-w", title: "SQL 1 (Windowsの方)" },
      { id: "subTitle1-w", title: "  1. SQLについて学ぶ" },
      { id: "sectionTitle1-1-w", title: "    1-1. SQLとは?" },
      { id: "sectionTitle1-2-w", title: "    1-2. データベースの概要と種類" },
      { id: "subTitle2-w", title: "  2. MySQLのインストールや環境構築" },
      { id: "sectionTitle2-1-w", title: "    2-1. MySQLをインストール" },
      { id: "sectionTitle2-2-w", title: "    2-2. SQLの環境構築をする" },
      { id: "subTitle3-w", title: "  3. MySQLに接続する" },
      { id: "sectionTitle3-1-w", title: "    3-1. SQLの起動" },
      { id: "sectionTitle3-2-w", title: "    3-2. SQLのクエリ実行(データベース・テーブルの作成)" },
      { id: "sectionTitle3-3-w", title: "    3-3. SQLのクエリ実行(データベース・テーブルの確認とデータの挿入))" },
      { id: "sectionTitle3-4-w", title: "    3-4. SQLのクエリ実行(データの確認と検索)" },
      { id: "sectionTitle3-5-w", title: "    3-5. SQLのクエリ実行(データの更新と削除))" },
    ];

    const macSections = [
      { id: "Title-m", title: "Git 1 (Macの方)" },
      { id: "subTitle1-m", title: "  1. Gitについて学ぶ" },
      { id: "sectionTitle1-1-m", title: "    1-1. Gitとは?" },
      { id: "sectionTitle1-2-m", title: "    1-2. Gitの使い方" },
      { id: "subTitle2-m", title: "  2. Gitクエリを覚える" },
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
        database: require("../../../assets/images/course/sql-1/database.png"),
        mysql: require("../../../assets/images/course/sql-1/mysql.png"),
        postgres: require("../../../assets/images/course/sql-1/postgres.png"),
        oracle: require("../../../assets/images/course/sql-1/oracle.png"),
        step1: require("../../../assets/images/course/sql-1/sql-1.png"),
        step2: require("../../../assets/images/course/sql-1/sql-2.png"),
        step3: require("../../../assets/images/course/sql-1/sql-3.png"),
        step4: require("../../../assets/images/course/sql-1/sql-4.png"),
        step5: require("../../../assets/images/course/sql-1/sql-5.png"),
        step6: require("../../../assets/images/course/sql-1/sql-6.png"),
        step7: require("../../../assets/images/course/sql-1/sql-7.png"),
        step8: require("../../../assets/images/course/sql-1/sql-8.png"),
        step9: require("../../../assets/images/course/sql-1/sql-9.png"),
        step10: require("../../../assets/images/course/sql-1/sql-10.png"),
        step11: require("../../../assets/images/course/sql-1/sql-11.png"),
        step12: require("../../../assets/images/course/sql-1/sql-12.png"),
        step13: require("../../../assets/images/course/sql-1/sql-13.png"),
        step14: require("../../../assets/images/course/sql-1/sql-14.png"),
        step15: require("../../../assets/images/course/sql-1/sql-15.png"),
        step16: require("../../../assets/images/course/sql-1/sql-16.png"),
        step17: require("../../../assets/images/course/sql-1/sql-17.png"),
        step18: require("../../../assets/images/course/sql-1/sql-18.png"),
        step19: require("../../../assets/images/course/sql-1/sql-19.png"),
        step20: require("../../../assets/images/course/sql-1/sql-20.png"),
        step21: require("../../../assets/images/course/sql-1/sql-21.png"),
        step22: require("../../../assets/images/course/sql-1/sql-22.png"),
        step23: require("../../../assets/images/course/sql-1/sql-23.png"),
        step24: require("../../../assets/images/course/sql-1/sql-24.png"),
        step25: require("../../../assets/images/course/sql-1/sql-25.png"),
        step26: require("../../../assets/images/course/sql-1/sql-26.png"),
        step27: require("../../../assets/images/course/sql-1/sql-27.png"),
        step28: require("../../../assets/images/course/sql-1/sql-28.png"),
        step29: require("../../../assets/images/course/sql-1/sql-29.png"),
        step30: require("../../../assets/images/course/sql-1/sql-30.png"),
        step31: require("../../../assets/images/course/sql-1/sql-31.png"),
        step32: require("../../../assets/images/course/sql-1/sql-32.png"),
        step33: require("../../../assets/images/course/sql-1/sql-33.png"),
        step34: require("../../../assets/images/course/sql-1/sql-34.png"),
        step35: require("../../../assets/images/course/sql-1/sql-35.png"),
        step36: require("../../../assets/images/course/sql-1/sql-36.png"),
        step37: require("../../../assets/images/course/sql-1/sql-37.png"),
        step38: require("../../../assets/images/course/sql-1/sql-38.png"),
        step39: require("../../../assets/images/course/sql-1/sql-39.png"),
        step40: require("../../../assets/images/course/sql-1/sql-40.png"),
        step41: require("../../../assets/images/course/sql-1/sql-41.png"),
        step42: require("../../../assets/images/course/sql-1/sql-42.png"),
        step43: require("../../../assets/images/course/sql-1/sql-43.png"),
        step44: require("../../../assets/images/course/sql-1/sql-44.png"),
        step45: require("../../../assets/images/course/sql-1/sql-45.png"),
        step46: require("../../../assets/images/course/sql-1/sql-46.png"),
        step47: require("../../../assets/images/course/sql-1/sql-47.png"),
        step48: require("../../../assets/images/course/sql-1/sql-48.png"),
        step49: require("../../../assets/images/course/sql-1/sql-49.png"),
        step50: require("../../../assets/images/course/sql-1/sql-50.png"),
        step51: require("../../../assets/images/course/sql-1/sql-51.png"),
        step52: require("../../../assets/images/course/sql-1/sql-52.png"),
        step53: require("../../../assets/images/course/sql-1/sql-53.png"),
      },
      mac: {
        solo: require("../../../assets/images/course/git-1/solo.png"),
        step1: require("../../../assets/images/course/git-1/terminal-1.png"),
        step2: require("../../../assets/images/course/git-1/terminal-2.png"),
        step3: require("../../../assets/images/course/git-1/terminal-3.png"),
        folder1: require("../../../assets/images/course/git-1/finder-1.png"),
        init: require("../../../assets/images/course/git-1/git-init.png"),
        step4: require("../../../assets/images/course/git-1/terminal-4.png"),
        github1: require("../../../assets/images/course/git-1/github-1.png"),
        github2: require("../../../assets/images/course/git-1/github-2.png"),
        github3: require("../../../assets/images/course/git-1/github-3.png"),
        state1: require("../../../assets/images/course/git-1/state-1.png"),
        github4: require("../../../assets/images/course/git-1/github-4.png"),
        step5: require("../../../assets/images/course/git-1/terminal-5.png"),
        step6: require("../../../assets/images/course/git-1/terminal-6.png"),
        github5: require("../../../assets/images/course/git-1/github-5.png"),
        step7: require("../../../assets/images/course/git-1/terminal-7.png"),
        step8: require("../../../assets/images/course/git-1/terminal-8.png"),
        step9: require("../../../assets/images/course/git-1/terminal-9.png"),
        github6: require("../../../assets/images/course/git-1/github-6.png"),
        state2: require("../../../assets/images/course/git-1/state-2.png"),
        step10: require("../../../assets/images/course/git-1/terminal-10.png"),
        step11: require("../../../assets/images/course/git-1/terminal-11.png"),
        folder2: require("../../../assets/images/course/git-1/finder-2.png"),
        memo1: require("../../../assets/images/course/git-1/memo-1-m.png"),
        step12: require("../../../assets/images/course/git-1/terminal-12.png"),
        step13: require("../../../assets/images/course/git-1/terminal-13.png"),
        step14: require("../../../assets/images/course/git-1/terminal-14.png"),
        memo2: require("../../../assets/images/course/git-1/memo-2-m.png"),
        step15: require("../../../assets/images/course/git-1/terminal-15.png"),
        step16: require("../../../assets/images/course/git-1/terminal-16.png"),
        step17: require("../../../assets/images/course/git-1/terminal-17.png"),
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
      sqlData,
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

.logo-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
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