export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function() {
// ナビゲーションリストの要素を取得してください (変数名: $navList)
const __ = $(".nav");
// ナビゲーションアイテムの要素を取得してください (変数名: $navItem)
const __ = __.__("__");
// コンテンツリストの要素を取得してください (変数名: $contentsList)
const __ = $(".contents");
// コンテンツアイテムの要素を取得してください (変数名: $contentsItem)
const __ = __.__("__");

// ここから下に他の関数を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `// ナビゲーションアイテムのクリックイベントを設定してください
__.on("click", function () {
    // クリックされたアイテムのインデックスを取得してください (変数名: item)
    const __ = $(this).__;
    // 全てのコンテンツアイテムにクラスを追加して非表示にし、クリックされたアイテムに対応するコンテンツアイテムからクラスを削除して表示してください (クラス名: is-hidden)
    __.addClass("is-hidden").__(__).__("is-hidden");
});
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
