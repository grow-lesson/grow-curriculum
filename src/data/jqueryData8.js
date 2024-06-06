export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function() {
  // スワイプリスト要素を取得してください (変数名: $swipeList)
  let __ = $(".swipe-photo-container"),
    // スワイプアイテム要素を取得してください (変数名: $swipeItem)
    __ = $(".swipe-photo-item"),
    // スワイプアイテムの幅を取得してください (変数名: swipeWidth)
    __ = __.width(),
    // スワイプアイテムの数を取得してください (変数名: swipeLength)
    __ = __.length, 
    // スワイプエリアの幅を計算してください (変数名: swipeArea)
    __ = __ * __,
    // スワイプの位置を格納する配列を作成してください (変数名: swipeArray)
    __ = [],
    // タッチ位置のオブジェクトを作成してください (変数名: position)
    __ = {
      touchStartX: "", touchMoveX: "", touchEndX: ""
    };

  // ボディのoverscroll-behaviorをnoneに設定してください
  $("body").css("overscroll-behavior", "none");

  // スワイプリストの幅を設定してください
  __.css("width", __);

  // スワイプアイテムの位置を計算して配列に格納してください
  for (let i = 0; i < __; i++) {
    __[i] = i * -__;
  };

  // スワイプエリアにタッチイベントを設定してください
  $(".swipe-photo").on({
    "touchstart": __,
    "touchmove": __,
    "touchend": __
  });

  // ここから下に他の関数を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `// タッチイベントから位置を取得する関数を定義してください (関数名: getPosition)
function __(e) {
  return e.originalEvent.changedTouches[0].pageX;
};
`,
    language: "language-javascript",
  },
  file3: {
    filename: "index.html(scriptタグの中)",
    code: `// タッチ開始時の処理を定義してください (関数名: touchStart)
function __(e) {
  __.touchStartX = __(e) - ($swipeList.position().left);
};
`,
    language: "language-javascript",
  },
  file4: {
    filename: "index.html(scriptタグの中)",
    code: `// タッチ移動時の処理を定義してください (関数名: touchMove)
function __(e) {
  __.touchEndX = __(e);
  if (__.touchEndX - __.touchStartX >= 0) {
    __.touchMoveX = 0;
  } else if (__.touchEndX - __.touchStartX <= __[swipeLength - 1]) {
    __.touchMoveX = __[swipeLength - 1];
  } else {
    __.touchMoveX = __.touchEndX - __.touchStartX;
  };
  $swipeList.css({
    left: __.touchMoveX
  });
};
`,
    language: "language-javascript",
  },
  file5: {
    filename: "index.html(scriptタグの中)",
    code: `// タッチ終了時の処理を定義してください (関数名: touchEnd)
function __(e) {
  var lastPosition = "";
  for (var i = 0; i < __; i++) {
    if (__[i] + (__ / 2) > __.touchMoveX) {
      lastPosition = i;
    };
  };
  $swipeList.animate({
    left: __[lastPosition]
  }, 400);
};
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
