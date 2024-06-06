export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function() {
  // 全カード数を定義してください (変数名: total)
  const __ = __;
  // 最初のカード番号を格納する変数を定義してください (変数名: firstNum)
  let __ = "";
  // 二枚目のカード番号を格納する変数を定義してください (変数名: secondNum)
  let __ = "";
  // カード要素を格納する変数を定義してください (変数名: $card)
  let __ = "";

  // カードを作成する関数を呼び出してください (関数名: createCards)
  __();
  // カードの順序を判定する関数を呼び出してください (関数名: judgeOrder)
  __();

  // ここから下に他の関数を追加します

});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `// カードを作成する関数です (関数名: createCards)
// ゲームのカードを生成し、ランダムに配置します
function __() {
  // 1. カードを配置するリストを取得してください (変数名: $lists)
  const __ = $(".lists");
  // 2. カードの配列を作成してください (変数名: cardsArray)
  const __ = [];
  // 3. リストアイテムの配列を作成してください (変数名: listItem)
  const __ = [];

  // 4. カードの番号をペアで追加してください
  for (let i = 1; i <= total / 2; i++) {
    __.push(i, i);
  };

  // 5. カードをランダムに並べ替えてください
  __.sort(function() {
    return Math.random() - __;
  });

  // 6. カードをリストアイテムに変換して追加してください
  __.forEach(function(num) {
    __.push("<li data-num='" + num + "'>?</li>");
  });
  // 7. リストにアイテムを追加してください
  __.append(__);
  // 8. カード要素を取得してください (変数名: $card)
  __ = __.__("li");
};
`,
    language: "language-javascript",
  },
  file3: {
    filename: "index.html(scriptタグの中)",
    code: `// カードのクリックイベントを設定する関数です (関数名: judgeOrder)
// カードがクリックされたときの処理を管理します
function __() {
  // 1. カードがクリックされたときのイベントを設定してください (変数名: $card)
  __.on("click", function() {
    const __ = $(this);

    // 2. 1枚目のカードを開いた場合の処理を追加してください
    if (!$(".firstOpen").length) {
      // 3. カードを開いてください (関数名: openCard)
      __(__);
      // 4. カードにクラスを追加してください
      __.__("firstOpen");
      // 5. 1枚目のカードの要素を取得してください (変数名: firstNum)
      __ = $(".firstOpen");
    } else {
      // 6. 2枚目のカードを開いてください (関数名: openCard)
      __(__);
      // 7. 2枚目のカードの要素を取得してください (変数名: secondNum)
      __ = __;
      // 8. 1枚目のカードのクラスを削除してください
      __.__("firstOpen");
      // 9. カードを比較する関数を呼び出してください (関数名: compareCard)
      __();
    };
  });
};
`,
    language: "language-javascript",
  },
  file4: {
    filename: "index.html(scriptタグの中)",
    code: `// カードを開く関数です (関数名: openCard)
// カードを開き、番号を表示します
function __(__) {
  // 1. カードを開き、番号を表示してください
  __.css("pointer-events", "none").__("opened").__("text")(__.data("num"));
};
`,
    language: "language-javascript",
  },
  file5: {
    filename: "index.html(scriptタグの中)",
    code: `function __(__) {
  // 1. カードを閉じ、？を表示してください
  __.removeClass("opened").__("text")("?");
};
`,
    language: "language-javascript",
  },
  file6: {
    filename: "index.html(scriptタグの中)",
    code: `// カードを比較する関数です (関数名: compareCard)
// 1枚目と2枚目のカードを比較し、一致するかどうかを確認します
function __() {
  // 1. 1枚目と2枚目のカードの番号を取得してください (変数名: firstDataNum, secondDataNum)
  const __ = __.data("num");
  const __ = __.data("num");

  // 2. カードの番号が一致する場合の処理を追加してください
  if (__ === __) {
    // 3. 全てのカードが開かれた場合、ゲーム終了メッセージを表示してください
    if ($(".opened").length === __) {
      alert("Game Over");
    }
  } else {
    // 4. カードの番号が一致しない場合、カードを閉じてください (関数名: closeCard)
    setTimeout(function() {
      __(__);
      __(__);
    }, 1000);
    // 5. カードのクリックを一時的に無効にする関数を呼び出してください (関数名: lockCard)
    __();
  }
};
`,
    language: "language-javascript",
  },
  file7: {
    filename: "index.html(scriptタグの中)",
    code: `// カードのクリックを一時的に無効にする関数です (関数名: lockCard)
// 一時的にカードのクリックを無効にします
function __() {
  // 1. カードのクリックを一時的に無効にしてください
  __.css("pointer-events", "none");
  // 2. 1秒後にカードのクリックを有効に戻してください
  setTimeout(function() {
    __.css("pointer-events", "auto");
    // 3. 開かれたカードはクリックできないようにしてください
    $(".opened").css("pointer-events", "none");
  }, __);
};
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
