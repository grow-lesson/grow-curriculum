export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function () {
// ツールチップの要素を取得してください (変数名: $tooltipBody)
const __ = $(".tooltip-body");
// ツールチップを生成し、ツールチップの要素の前に挿入してください
__.prepend("<div class='tooltip' style='display: none;'>description</div>");
// ツールチップのアイテム要素を取得してください (変数名: $tooltipItem)
const __ = $(".tooltip")

// hoverText関数を呼び出してください
__();

// ここから下に他の関数を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `// ツールチップをフェードインする関数を定義してください (関数名: fadeInDescription)
function __() {
    // ツールチップをフェードインしてください
    __.stop(true, false).fadeIn();
}
`,
    language: "language-javascript",
  },
  file3: {
    filename: "index.html(scriptタグの中)",
    code: `// ツールチップをフェードアウトする関数を定義してください (関数名: fadeOutDescription)
function __() {
    // ツールチップをフェードアウトしてください
    __.stop(true, false).fadeOut();
}
`,
    language: "language-javascript",
  },
  file4: {
    filename: "index.html(scriptタグの中)",
    code: `// マウスの動きに応じてツールチップを移動する関数を定義してください (関数名: mouseMoveDescription)
function __(e) {
    // ツールチップの位置を更新してください
    __.css({
        top: e.pageY,
        left: e.pageX
    });
}
`,
    language: "language-javascript",
  },
  file5: {
    filename: "index.html(scriptタグの中)",
    code: `// テキストにホバーしたときのイベントを設定してください (関数名: hoverText)
function __() {
    // ツールチップの要素にマウスイベントを設定してください
    __.on({
        // マウスエンター時のイベントを設定してください (関数名: fadeInDescription)
        "mouseenter": __,
        // マウスリーブ時のイベントを設定してください (関数名: fadeOutDescription)
        "mouseleave": __,
        // マウスムーブ時のイベントを設定してください (関数名: mouseMoveDescription)
        "mousemove": __
    });
}
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
