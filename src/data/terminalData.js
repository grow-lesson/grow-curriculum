export const terminalData = {
  file1: {
    filename: "index.html",
    code: `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>html-css-lesson-1</title>
  </head>
  <body>

  </body>
</html>
    `,
    language: "language-html",
  },
  file2: {
    filename: "ターミナル",
    code: `
cd /path/to/directory:
ls -l
npm install
    `,
    language: "language-bash",
  },
  // 他のデータを追加できます
};
