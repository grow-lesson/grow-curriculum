export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function() {
// モーダル表示ボタンの要素を取得してください (変数名: $modalShow)
const __ = $(".modal-show");
// モーダルの要素を取得してください (変数名: $modal)
const __ = $(".modal");
// モーダル閉じるボタンの要素を取得してください (変数名: $modalClose)
const __ = $(".modal-close");


// ここから下に他の処理を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: ` // モーダル表示ボタンのクリックイベントを設定してください
__.on("click", function() {
    // モーダルをフェードインしてください (600ミリ秒、透明度0.7)
    __.__(__, __);
});
`,
    language: "language-javascript",
  },
  file3: {
    filename: "index.html(scriptタグの中)",
    code: ` // モーダル閉じるボタンのクリックイベントを設定してください
__.on("click", function() {
    // モーダルをフェードアウトしてください (600ミリ秒)
    __.__(__);
});
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
