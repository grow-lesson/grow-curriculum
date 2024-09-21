export const javascriptData = {
  file1: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Javascript-sample</title>
  </head>
  <body>
    <script>
        // JavaScriptコードをscriptタグの中記述します↓
        // alertはポップアップでアラートを表示する処理です
        alert('Hello, World!');
    </script>
  </body>
</html>`,
    language: "language-html",
  },
  file2: {
    filename: "ターミナル(GitBash)",
    code: `node -v`,
    language: "language-bash",
  },
  file3: {
    filename: "ターミナル(GitBash)",
    code: `cd ~`,
    language: "language-bash",
  },
  file4: {
    filename: "ターミナル(GitBash)",
    code: `curl -L git.io/nodebrew | perl - setup`,
    language: "language-bash",
  },
  file5: {
    filename: "ターミナル(GitBash)",
    code: `echo $SHELL`,
    language: "language-bash",
  },
  file6: {
    filename: "ターミナル(GitBash)",
    code: `touch .zshrc`,
    language: "language-bash",
  },
  file7: {
    filename: "ターミナル(GitBash)",
    code: `open ~/.zshrc~`,
    language: "language-bash",
  },
  file8: {
    filename: "開いた「.zshrcファイル」に書いてください",
    code: `export PATH=$HOME/.nodebrew/current/bin:$PATH;`,
    language: "language-bash",
  },
  file9: {
    filename: "ターミナル(GitBash)",
    code: `source ~/.zshrc`,
    language: "language-bash",
  },
  file10: {
    filename: "ターミナル(GitBash)",
    code: `touch .bash_profile~`,
    language: "language-bash",
  },
  file11: {
    filename: "ターミナル(GitBash)",
    code: `open ~/.bash_profile`,
    language: "language-bash",
  },
  file12: {
    filename: "開いた「.bash_profileファイル」に書いてください",
    code: `export PATH=$HOME/.nodebrew/current/bin:$PATH;`,
    language: "language-bash",
  },
  file13: {
    filename: "ターミナル(GitBash)",
    code: `source ~/.bash_profile`,
    language: "language-bash",
  },
  file14: {
    filename: "ターミナル(GitBash)",
    code: `nodebrew install-binary stable`,
    language: "language-bash",
  },
  file15: {
    filename: "ターミナル(GitBash)",
    code: `nodebrew ls`,
    language: "language-bash",
  },
  file16: {
    filename: "ターミナル(GitBash)",
    code: `nodebrew use v12.6.0`,
    language: "language-bash",
  },
  file17: {
    filename: "ターミナル(GitBash)",
    code: `node -v`,
    language: "language-bash",
  },
  file18: {
    filename: "javascript-lesson-1.js",
    code: `console.log("Hello Javascript!!");`,
    language: "language-javascript",
  },
  file19: {
    filename: "ターミナル(GitBash)",
    code: `node javascript-lesson-1.js`,
    language: "language-bash",
  },

  // 他のデータを追加できます
};
