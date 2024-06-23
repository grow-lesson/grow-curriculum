export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: ` // スライダーリスト要素を取得してください (変数名: $sliderList)
const __ = $(".slider-list");
// スライダーアイテム要素を取得してください (変数名: $sliderItem)
const __ = __.find("li");
// スライダーボタン要素を取得してください (変数名: $sliderButton)
const __ = $(".slider-ctrl-btn");
// スライダーアイテムの幅を取得してください (変数名: sliderWidth)
const __ = __.width();
// スライダーアイテムの数を取得してください (変数名: sliderNumber)
const __ = __.length;
// スライダーの現在の位置を初期化してください (変数名: sliderPosition)
let __ = 0;

// スライダーボタンのクリックイベントを設定してください
__.on("click", function() {
    // ボタンのデータ属性を取得してください (変数名: controlData)
    const __ = $(this).data("ctrl");
    if (__ == "next") {
        __();
    } else if (__ == "prev") {
        __();
    }
});


// ここから下に他の関数を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `// 次のスライドに移動する関数を定義してください (関数名: moveNext)
// 次のスライドに移動するために、スライダーの位置を1つ進めます
function __() {
    // スライダーの位置を1つ進めてください
    __++;
    // スライダーの位置を変更する関数を呼び出してください (関数名: sliderMotion)
    __();
};
`,
    language: "language-javascript",
  },
  file3: {
    filename: "index.html(scriptタグの中)",
    code: `// 前のスライドに移動する関数を定義してください (関数名: movePrev)
  // 前のスライドに移動するために、スライダーの位置を1つ戻します
  function __() {
      // スライダーの位置を1つ戻してください
      __--;
      // スライダーの位置を変更する関数を呼び出してください (関数名: sliderMotion)
      __();
  };
`,
    language: "language-javascript",
  },
  file4: {
    filename: "index.html(scriptタグの中)",
    code: `// スライダーの位置を変更する関数を定義してください (関数名: sliderMotion)
// スライダーの位置を変更し、アニメーションで表示します
function __() {
    // スライダーの位置が0未満の場合の処理を追加してください
    if (__ < 0) {
        __ = __ - 1;
    } 
    // スライダーの位置が最大数を超えた場合の処理を追加してください
    else if (__ > __ - 1) {
        __ = 0;
    }
    // スライダーリストの位置をアニメーションで変更してください
    __.stop().animate({
        left: __ * -__
    });
};
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
