<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-content">
        <Title title="Photoshop 2" id="Title"></Title>
        <Document>
          <p>Photoshopのツールについて学びましょう</p>
        </Document>

        <!-- section 1 -->
        <SubTitle subTitle="1. レイヤーについて学ぶ" id="subTitle1"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="1-1. レイヤーとは" id="sectionTitle1-1"></SectionTitle>
          <p>
            レイヤーとは画像に透明なシートを何枚も重ねるように、各要素を個別に管理・編集できる機能です。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step1)" :src="imagePaths.step1" class="photoshop-image" alt="＋ボタン、ゴミ箱ボタン" />
          </div><br>
          <p>
            レイヤーパネルの＋ボタンを押して新規レイヤーを作成しましょう。<br>
            レイヤー名をダブルクリックするとレイヤー名の編集ができます。<br>
            作成したレイヤーはゴミ箱ボタンで削除できます。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-2. アップロード" id="sectionTitle1-2"></SectionTitle>
          <p>
            ファイル＞埋め込みを配置で好きな画像を選んで配置してみましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step2)" :src="imagePaths.step2" class="photoshop-image" alt="埋め込みを配置、リンクを配置" />
          </div><br>
          <p>
            レイヤーパネルに、配置した画像のレイヤーが追加されました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step3)" :src="imagePaths.step3" class="photoshop-image" alt="レイヤーを追加" />
          </div><br>
          <p>
            ※リンクを配置：リンク配置の画像を編集して保存すると、元のデータに編集が反映されます。元のデータを残しておきたい場合は埋め込み配置を選択しましょう。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-3. レイヤーの複製" id="sectionTitle1-3"></SectionTitle>
          <p>
            複製したいレイヤーを右クリックして、レイヤーを複製を選択します。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step4)" :src="imagePaths.step4" class="photoshop-image" alt="レイヤーを複製" />
          </div><br>
          <p>
            レイヤーパネルに、複製したレイヤーが追加されました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step5)" :src="imagePaths.step5" class="photoshop-image" alt="レイヤーコピー" />
          </div>
        </Document>
        <Document>
          <SectionTitle sectionTitle="1-4. レイヤーの並び順を入れ替える" id="sectionTitle1-4"></SectionTitle>
          <p>
            レイヤーパネルで上に配置されたレイヤーは、アートボード上では手前に表示されます。<br>
            現在、上から海→りんごの並び順になっています。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step6)" :src="imagePaths.step6" class="photoshop-image" alt="海→りんご" />
          </div><br>
          <p>
            りんごのレイヤーをドラッグ＆ドロップで海のレイヤーの上に移動します。<br>
            アートボード上でもりんごのレイヤーが手前に表示されました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step7)" :src="imagePaths.step7" class="photoshop-image" alt="りんご→海" />
          </div>
        </Document>

        <!-- section 2 -->
        <SubTitle subTitle="2. 画像編集について学ぶ" id="subTitle2"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="2-1. トリミング" id="sectionTitle2-1"></SectionTitle>
          <p>
            トリミングとは、画像を切り抜く機能のことです。まずは好きな画像を開きましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step8)" :src="imagePaths.step8" class="photoshop-image" alt="棚の画像" />
          </div><br>
          <p>
            プロパティパネルを見ると、開いた画像が横5292 px、縦3528 pxのサイズであることがわかります。<br>
            Webサイトで使用することを想定して、一般的なモニターのサイズである1366×768pxにトリミングしてみましょう。<br><br>
            ツールバーの上から５つ目「切り抜きツール」を選択します。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step9)" :src="imagePaths.step9" class="photoshop-image" alt="切り抜きツール" />
          </div>
          <p>
            画像の上に縦横のガイドが表示され、ドラッグで自由に切り抜きサイズを変更することができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step10)" :src="imagePaths.step10" class="photoshop-image" alt="トリミング前" />
            <img @click="openModal(imagePaths.step11)" :src="imagePaths.step11" class="photoshop-image" alt="トリミング範囲選択" />
          </div><br>
          <p>
            今回はトリミングサイズが決まっているため、プリセットされている「1366×768px」を選択します。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step12)" :src="imagePaths.step12" class="photoshop-image" alt="元の縦横比" />
            <img @click="openModal(imagePaths.step13)" :src="imagePaths.step13" class="photoshop-image" alt="1366×768px" />
          </div><br>
          <p>
            ガイドを切り抜きたい場所に合わせて、完了またはエンターキーを押します。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="2-2. 色調補正" id="sectionTitle2-2"></SectionTitle>
          <div>
            <img @click="openModal(imagePaths.step14)" :src="imagePaths.step14" class="photoshop-image" alt="色調補正" />
          </div><br>
          <p>
            画像の色味や明るさを編集することができます。色調補正パネルの個々の調整から項目を選択すると、レイヤーが作成されます。一時的に非表示にしたい場合はレイヤー名横の目のアイコンをクリックします。削除したい場合はレイヤーを削除しましょう。<br>
            よく使われる項目は以下です。<br><br>
            色相・彩度：色相（色味）、彩度（鮮やかさ）、明度（明暗）を調整できます。<br>
            明るさ・コントラスト：明るさ・コントラストを調整できます。<br>
            レベル補正：コントラストを自由に調整できます。最初のうちは自動補正を使いましょう。似た機能で「トーンカーブ」がありますが、レベル補正では中間色の調整も可能です。<br>
            特定色域の選択：特定の色１つを指定して、色味を調整できます。
          </p>
        </Document>

        <!-- section 3 -->
        <SubTitle subTitle="3. 選択ツールについて学ぶ" id="subTitle3"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="3-1. 画像の一部を切り抜く" id="sectionTitle3-1"></SectionTitle>
          <p>
            画像全体ではなく画像の一部のみに編集を適用させたい場合、選択ツールを使用します。<br><br>
            まず、元の画像レイヤーをコピーします。レイヤーにロックをかけて非表示にしましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step15)" :src="imagePaths.step15" class="photoshop-image" alt="鍵アイコン" />
          </div><br>
          <p>
            ツールバーの上から３つ目「なげなわツール」を選択します。<br>
            なげなわツールはドラッグで囲った範囲を選択することができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step16)" :src="imagePaths.step16" class="photoshop-image" alt="範囲選択中" />
          </div>
          <p>
            ※選択範囲を修正したい場合は、shiftキーを押したままドラッグで追加、optionキーを押したままドラッグで削除できます。<br>
            選択した状態でdeleteキーを押してみましょう。選択範囲のみ削除されました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step17)" :src="imagePaths.step17" class="photoshop-image" alt="範囲削除" />
          </div><br>
          <p>
            囲った範囲以外を編集したい場合は、「選択範囲を反転」を選択しましょう。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step18)" :src="imagePaths.step18" class="photoshop-image" alt="反転アイコン" />
          </div><br><br><br>
          <p>
            ツールバーのなげなわツールアイコンを長押しすると、関連したツールが表示されます。
          </p>
          <div>
            <img @click="openModal(imagePaths.step19)" :src="imagePaths.step19" class="photoshop-image" alt="関連ツール" />
          </div><br>
          <p>
            多角形選択ツール：クリックした箇所が角になり、多角形で範囲を選択することができます。<br>
            マグネット選択ツール：最初にクリックした箇所が始点となり、マウスを動かして範囲を選択することができます。
          </p><br><br>
          <p>
            ツールバー上から４つ目「オブジェクト選択ツール」はクリックした場所の近似色を自動で選択することができます。
          </p>
          <div>
            <img @click="openModal(imagePaths.step20)" :src="imagePaths.step20" class="photoshop-image" alt="マグカップを選択" />
          </div><br>
          <p>
            なげなわツールが細かい範囲の選択に、オブジェクト選択ツールはざっくりした範囲の選択に向いています。
          </p>
        </Document>

        <!-- section 4 -->
        <SubTitle subTitle="4. マスクについて学ぶ" id="subTitle4"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="4-1. レイヤーマスク" id="sectionTitle4-1"></SectionTitle>
          <p>
            マスクとは、画像の一部を隠したり表示したりするためのツールです。選択ツールで一部を切り取ってしまうと後から修正することはできませんが、マスクを使用すると元の画像に影響を与えずに編集ができます。<br>
            マスクにはいくつか種類がありますが、まずはレイヤーマスクとクリッピングマスクを覚えましょう。
          </p><br>
          <p>
            画像内の残したいオブジェクトを選択します。<br>
            「選択範囲からマスクを作成」を選択すると、画像内の他のオブジェクトが非表示になります。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step21)" :src="imagePaths.step21" class="photoshop-image" alt="マスクアイコン" />
            <img @click="openModal(imagePaths.step22)" :src="imagePaths.step22" class="photoshop-image" alt="マグカップ以外が非表示" />
          </div><br>
          <p>
            レイヤーパネルのプレビュー箇所で黒くなっている所が非表示になっています。<br>
            ※あくまで隠しているだけなので、削除されたわけではありません。<br><br>
            背景用に別の画像を読み込んで、レイヤーを一番下に移動させます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step23)" :src="imagePaths.step23" class="photoshop-image" alt="背景合成" />
          </div>
          <p>
            ２つの画像が合成できました。
          </p>
        </Document>
        <Document>
          <SectionTitle sectionTitle="4-2. クリッピングマスク" id="sectionTitle4-2"></SectionTitle>
          <p>
            Photoshop内のツールで作成したテキストや図形でマスクを作成します。今回はテキストで背景を切り抜いてみましょう。<br>
            ツールバーのテキストツールを選択してアートボード内をクリックすると、テキストレイヤーが作成されます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step24)" :src="imagePaths.step24" class="photoshop-image" alt="テキストツール" />
          </div><br>
          <p>
            入力したテキストはフォント・文字サイズ・色などを編集することができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step25)" :src="imagePaths.step25" class="photoshop-image" alt="SWEETのテキスト" />
          </div><br>
          <p>
            クリッピングマスクでは下にあるレイヤーの形に合わせて、上にあるレイヤーが切り抜かれるため今回の場合は背景レイヤーが上、テキストレイヤーを下に配置します。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step26)" :src="imagePaths.step26" class="photoshop-image" alt="背景レイヤー、テキストレイヤー" />
          </div><br>
          <p>
            背景レイヤーを選択した状態で右クリックをして、「クリッピングマスクを作成」をクリックします。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step27)" :src="imagePaths.step27" class="photoshop-image" alt="クリッピングマスクを作成" />
          </div><br>
          <p>
            背景画像がテキストの形に切り抜かれました。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step28)" :src="imagePaths.step28" class="photoshop-image" alt="クリッピングマスク適用" />
          </div><br>
          <p>
            ※また、マスクした状態はそのままに、背景を動かすことも可能です。
          </p>
          <div>
            <img @click="openModal(imagePaths.step29)" :src="imagePaths.step29" class="photoshop-image" alt="SWEETの背景がズレる" />
          </div><br>
          <p>
            背景レイヤーを選択した状態で右クリックをして、「クリッピングマスクを作成」をクリックします。
          </p><br>
        </Document>

        <!-- section 5 -->
        <SubTitle subTitle="5. フォントについて学ぶ" id="subTitle5"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="5-1. フォント" id="sectionTitle5-1"></SectionTitle>
          <p>
            テキストレイヤーを選択した状態でプロパティパネルを開くと、フォントやフォントスタイル（太さ）、フォントサイズ（大きさ）などの設定ができます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step30)" :src="imagePaths.step30" class="photoshop-image" alt="テキストパネル" />
          </div><br>
          <p>
            フォントの書体は大きく分けて「ゴシック体」と「明朝体」があります。<br>
            ゴシック体：線の太さが均一でカジュアルな印象を受けます。<br>
            明朝体：縦線が太く、横線が細いため上品な印象を受けます。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step31)" :src="imagePaths.step31" class="photoshop-image" alt="ゴシック体・明朝体" />
          </div><br>
          <p>
            今回のクリッピングマスクのように、視認性が求められる場合は線が太く読みやすいゴシック体が向いています。
          </p>
        </Document>

        <!-- section 6 -->
        <SubTitle subTitle="6. 保存データ形式について学ぶ" id="subTitle6"></SubTitle>
        <Document>
          <SectionTitle sectionTitle="6-1. 拡張子" id="sectionTitle6-1"></SectionTitle>
          <p>
            マスクで作成したデータを自分のPCに保存しましょう。
          </p><br>
          <p>
            保存方法がいくつかありますが、通常の「保存」では現在開いている画像ファイルに上書き保存します。ファイル名や拡張子を変更することはできません。<br><br>
            「別名で保存」と「コピーを保存」はどちらも開いたデータとは別のデータとして保存ができますが、「別名で保存」は保存後に開かれているデータが「保存後のデータ」になります。<br>
            「コピーを保存」は保存後に開かれているデータが「開いたデータ」になります。<br>
            また、「別名で保存」と「コピーを保存」では使用できる拡張子も異なります。
          </p><br>
          <p>
            今回は「コピーを保存」を選択しましょう。<br>
            まず、option＋command＋Sを押して名前と保存場所を設定します。
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step32)" :src="imagePaths.step32" class="photoshop-image" alt="保存、別名で保存、コピーを保存" />
          </div><br>
          <p>
            次に、拡張子を設定しましょう。よく使われる拡張子は以下です。<br>
            .psd：Photoshopのネイティブデータ（ソフトで作成されたそのままのデータ）で、作業中のすべての編集内容をそのまま保存できます。画像化されていないため、基本的に 他のソフトでは使用できません。<br>
            .jpg：ファイルサイズを小さくできるため、ウェブや写真の共有に適しています。ただし、保存時に画像品質が劣化することがあります。レイヤーは保持されません。ネット上にある画像の多くがJPEGです。<br>
            .png：背景が透明なまま画像の保存ができますが、ファイルサイズが大きくなることがあります。レイヤーは保持されません。<br>
            .pdf：画像を一つのファイルにまとめて保存できます。レイヤーを保持することができ、再編集が可能です。印刷・ウェブどちらにも適しています。<br>
            .gif：ウェブ上の簡単なアニメーションに向いています。レイヤーは保持されません。<br>
            .tif, .tiff：高画質の画像を保存できます。レイヤー情報を保持することも可能で、印刷業界でよく使われます。ファイルサイズは大きくなる傾向があります。<br><br><br>
            今回保存するデータは文字以外が透明になっているため、PNGを選択しましょう。（白とグレーのチェックになっている場所が透明です。）
          </p><br>
          <div>
            <img @click="openModal(imagePaths.step33)" :src="imagePaths.step33" class="photoshop-image" alt="複製を保存" />
          </div><br>
          <p>
            全て設定ができたら「保存」を押して、保存完了です。
          </p>
          <NavigationButtons
            :previousPageName="'PhotoshopPage1'"
            :nextPageName="'PhotoshopPage3'"
          />
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
// import HighlightWord from "@/components/HighlightWord.vue";
import Document from "@/components/Document.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import { javascriptData } from "@/data/javascriptData.js";
import Modal from "@/components/common/Modal.vue";
import NavigationButtons from "@/components/NavigationButtons.vue";

export default {
  name: "PhotoshopPage2",
  components: {
    Header,
    Footer,
    Title,
    SubTitle,
    SectionTitle,
    // HighlightWord,
    Document,
    TableOfContents,
    Modal,
    NavigationButtons,
  },
  setup() {
    const sections = [
      { id: "Title", title: "Photoshop 2" },
      { id: "subTitle1", title: "  1. レイヤーについて学ぶ" },
      { id: "sectionTitle1-1", title: "    1-1. レイヤーとは" },
      { id: "sectionTitle1-2", title: "    1-2. アップロード" },
      { id: "sectionTitle1-3", title: "    1-3. レイヤーの複製" },
      { id: "sectionTitle1-4", title: "    1-4. レイヤーの並びを入れ替える" },
      { id: "subTitle2", title: "  2. 画像編集について学ぶ" },
      { id: "sectionTitle2-1", title: "    2-1. トリミング" },
      { id: "sectionTitle2-2", title: "    2-2. 色調補正" },
      { id: "subTitle3", title: "  3. 選択ツールについて学ぶ" },
      { id: "sectionTitle2-1", title: "    3-1. 画像の一部を切り抜く" },
      { id: "subTitle4", title: "  4. 選択ツールについて学ぶ" },
      { id: "sectionTitle4-1", title: "    4-1. レイヤーマスク" },
      { id: "sectionTitle4-2", title: "    4-2. クリッピングマスク" },
      { id: "sectionTitle4-3", title: "    4-3. フォント" },
      { id: "subTitle5", title: "  5. フォントについて学ぶ" },
      { id: "sectionTitle5-1", title: "    5-1. フォント" },
      { id: "subTitle6", title: "  6. 保存データ形式について学ぶ" },
      { id: "sectionTitle6-1", title: "    6-1. 拡張子" },
    ];

    onMounted(() => {
      // 画面表示時に一番上にスクロールする
      window.scrollTo(0, 0);
    });

    const imagePaths = {
      step1: require("../../../assets/images/course/photoshop-2/photoshop-2-1.png"),
      step2: require("../../../assets/images/course/photoshop-2/photoshop-2-2.png"),
      step3: require("../../../assets/images/course/photoshop-2/photoshop-2-3.png"),
      step4: require("../../../assets/images/course/photoshop-2/photoshop-2-4.png"),
      step5: require("../../../assets/images/course/photoshop-2/photoshop-2-5.png"),
      step6: require("../../../assets/images/course/photoshop-2/photoshop-2-6.png"),
      step7: require("../../../assets/images/course/photoshop-2/photoshop-2-7.png"),
      step8: require("../../../assets/images/course/photoshop-2/photoshop-2-8.png"),
      step9: require("../../../assets/images/course/photoshop-2/photoshop-2-9.png"),
      step10: require("../../../assets/images/course/photoshop-2/photoshop-2-10.png"),
      step11: require("../../../assets/images/course/photoshop-2/photoshop-2-11.png"),
      step12: require("../../../assets/images/course/photoshop-2/photoshop-2-12.png"),
      step13: require("../../../assets/images/course/photoshop-2/photoshop-2-13.png"),
      step14: require("../../../assets/images/course/photoshop-2/photoshop-2-14.png"),
      step15: require("../../../assets/images/course/photoshop-2/photoshop-2-15.png"),
      step16: require("../../../assets/images/course/photoshop-2/photoshop-2-16.png"),
      step17: require("../../../assets/images/course/photoshop-2/photoshop-2-17.png"),
      step18: require("../../../assets/images/course/photoshop-2/photoshop-2-18.png"),
      step19: require("../../../assets/images/course/photoshop-2/photoshop-2-19.png"),
      step20: require("../../../assets/images/course/photoshop-2/photoshop-2-20.png"),
      step21: require("../../../assets/images/course/photoshop-2/photoshop-2-21.png"),
      step22: require("../../../assets/images/course/photoshop-2/photoshop-2-22.png"),
      step23: require("../../../assets/images/course/photoshop-2/photoshop-2-23.png"),
      step24: require("../../../assets/images/course/photoshop-2/photoshop-2-24.png"),
      step25: require("../../../assets/images/course/photoshop-2/photoshop-2-25.png"),
      step26: require("../../../assets/images/course/photoshop-2/photoshop-2-26.png"),
      step27: require("../../../assets/images/course/photoshop-2/photoshop-2-27.png"),
      step28: require("../../../assets/images/course/photoshop-2/photoshop-2-28.png"),
      step29: require("../../../assets/images/course/photoshop-2/photoshop-2-29.png"),
      step30: require("../../../assets/images/course/photoshop-2/photoshop-2-30.png"),
      step31: require("../../../assets/images/course/photoshop-2/photoshop-2-31.png"),
      step32: require("../../../assets/images/course/photoshop-2/photoshop-2-32.png"),
      step33: require("../../../assets/images/course/photoshop-2/photoshop-2-33.png"),
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

.photoshop-image {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
  border: 1px solid rgb(175, 175, 175);
}

.nodejs-logo {
  display: block;
  margin: 0 auto;
  max-width: 20%;
  height: auto;
  cursor: pointer;
  border: 1px solid rgb(175, 175, 175);
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-link {
  color: rgb(72, 0, 255);
}

.photoshop-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  height: auto;
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
