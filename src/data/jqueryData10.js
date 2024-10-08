export const jqueryData = {
  file1: {
    filename: "index.html(scriptタグの中)",
    code: `$(function() {
  // 本のリストを表示する要素を指定する変数を作成してください
  const $_____ = $("._____");

  // ページ番号を追跡するための変数を作成してください
  let _____ = 0;

  // 前回の検索ワードを保存するための変数を作成してください
  let _____ = "";

  // ここから下に他の関数を追加します
});
`,
    language: "language-javascript",
  },
  file2: {
    filename: "index.html(scriptタグの中)",
    code: `function showItems(data) {
  // 取得したデータを逆順に処理します
  data.Items._____().forEach(function(book) {
    // 本の情報をHTML形式でテンプレートに埋め込みます
    const $template = _____(複数行);
    // 作成したテンプレートをリストの最初に追加します
    $lists._____($template);
  });
};
`,
    language: "language-javascript",
  },
  file3: {
    filename: "index.html(scriptタグの中)",
    code: `function emptyMessage() {
  // 検索結果が見つからない場合のメッセージをリストの前に表示します
  $_____._____('<p class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</p>');
};
function searchWordBlankCheck() {
// 既存のメッセージを削除
  $(".message").remove();
  // 検索フォームが未入力の場合のメッセージをリストの前に表示します。
  $_____._____('<p class="message" style="color: red;">検索ワードが未入力です。</p>')
};
`,
    language: "language-javascript",
  },
  file4: {
    filename: "index.html(scriptタグの中)",
    code: `function fetchBookData() {
// 検索ワードを取得してください
const searchWord = $("#js-search-word")._____();

// ページ番号を1つ増やしてください
_____ = _____ + 1;

// 検索ワードが前回と異なる場合の処理を行ってください
if (searchWord != _____) {
  // リストを空にする処理を追加してください
  $_____._____();
  // ページ番号を1にリセットする処理を追加してください
  _____ = 1;
}

// 非同期通信前に検索ワードに文字が入力されているかのバリデーションチェックをしてください。
if (searchWord._____ == _____) {
  searchWordBlankCheck();
  // ここで処理を終わらせるようにreturnを返す。
  return;
}

// 前回の検索ワードを現在の検索ワードに更新してください
_____ = searchWord;

// AJAXリクエストを送信します
$.ajax({
  // 楽天ブックスAPIのURLを指定してください
  url: "_____",
  // リクエストのタイプを指定してください
  type: "_____",
  // データの形式を指定してください
  datatype: "_____",
  data: {
    // アプリケーションIDを指定してください
    applicationId: "_____",
    // 検索ワードを指定してください
    keyword: _____,
    // ジャンルIDを指定してください
    booksGenreId: "_____",
    // 取得する件数を指定してください
    hits: _____,
    // ページ番号を指定してください
    page: _____
  }
}).done(function(data) {
  // 以前のメッセージを削除する処理を追加してください
  $(".message")._____();
  // 検索結果が0件の場合の処理を追加してください
  if (data.hits === 0) {
    _____();
  } else {
    _____(data);
  }
  // エラーメッセージを追加してください
  })._____(function (jqXHR, textStatus, errorThrown) {
    alert("APIリクエストに失敗しました。もう一度試してください。");
  });
};
`,
    language: "language-javascript",
  },
  file5: {
    filename: "index.html(scriptタグの中)",
    code: `function clickData() {
  // 検索ボタンがクリックされたときにfetchBookData関数を実行するイベントを設定してください
  $("#js-search-button").on("_____", _____);
};

// clickData関数を呼び出してクリックイベントを設定してください
_____();
`,
    language: "language-javascript",
  },
  // 他のデータを追加できます
};
