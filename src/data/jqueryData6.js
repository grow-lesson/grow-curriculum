export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function() {
// 文字数カウンターの要素を取得してください (変数名: $lestCount)
const __ = $(".lest-count");
// 入力フィールドの要素を取得してください (変数名: $input)
const __ = $(".input");


// ここから下に他の関数を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `// 入力フィールドにキーアップイベントを設定してください
__.on("keyup", function() {
    // 入力フィールドの値を取得し、改行を含まない文字数を計算してください (変数名: inputValue)
    const __ = __.__.__.__;
    // 入力フィールドの値を取得してください (変数名: inputVal)
    const __ = $(this).val();
    // 改行を削除してください
    const __ = __.__;
    // 文字数を取得してください
    const __ = __.length;

    // 残りの文字数を計算してください (変数名: countDown)
    const __ = 30 - __;

    // 残りの文字数を表示してください
    __.text(__);
    // 文字数が30文字を超えた場合の処理を追加してください
    if (__ < 0) {
        // カウンターに赤いクラスを追加してください
        __.addClass("red");
    } else {
        // カウンターから赤いクラスを削除してください
        __.removeClass("red");
    }
});
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
