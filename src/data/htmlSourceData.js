export const htmlSourceData = {
  file1: {
    filename: "index.html",
    code: `<!DOCTYPE html>
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
</html>`,
    language: "language-html",
  },
  file2: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>html-css-lesson-2</title>
  </head>
  <body>

  </body>
</html>`,
    language: "language-html",
  },
  file3: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>html-css-lesson-3</title>
  </head>
  <body>

  </body>
</html>`,
    language: "language-html",
  },
  file4: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <title>html-css-lesson-4</title>
  </head>
  <body>
    <div class="block-1"></div>
    <div class="block-2"></div>
  </body>
</html>`
,
    language: "language-html",
  },
  file5: {
    filename: "style.css",
    code: `.block-1 {
  width: 200px;
  height: 200px;
  background-color: red;
}
.block-2 {
  width: 200px;
  height: 200px;
  background-color: blue;
}`,
    language: "language-css",
  },
  file6: {
    filename: "reset.css",
    code: `
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

img {
  vertical-align: middle;
}
    `,
    language: "language-css",
  },
  file7: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="assets/reset.css" />
    <title>html-css-lesson-5</title>
  </head>
  <body>
    <a class="inline"></a>
    <div class="block"></div>
  </body>
</html>`
,
    language: "language-html",
  },
  file8: {
    filename: "style.css",
    code: `.inline {
  width: 200px;
  height: 200px;
  background-color: blue;
}
.block {
  width: 200px;
  height: 200px;
  background-color: red;
}`,
    language: "language-css",
  },
  file9: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="assets/reset.css" />
    <title>html-css-lesson-6</title>
  </head>
  <body>
    <div class="parent">
      <div class="child-1"></div>
      <div class="child-2"></div>
      <div class="child-3"></div>
    </div>
  </body>
</html>`
,
    language: "language-html",
  },
  file10: {
    filename: "style.css",
    code: `.parent {
  width: 600px;
  height: 600px;
  background-color: pink;
}
.child-1 {
  width: 200px;
  height: 200px;
  background-color: red;
}
.child-2 {
  width: 200px;
  height: 200px;
  background-color: blue;
}
.child-3 {
  width: 200px;
  height: 200px;
  background-color: green;
}`,
    language: "language-css",
  },
  file11: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="assets/reset.css" />
    <title>html-css-lesson-7</title>
  </head>
  <body>
    <div class="box">
      <div class="top"></div>
      <div class="middle">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="bottom"></div>
    </div>
  </body>
</html>`
,
    language: "language-html",
  },
  file12: {
    filename: "style.css",
    code: `.box {
  width: 600px;
  height: 600px;
  background-color: rgb(64, 198, 255);
}
.top {
  width: 500px;
  height: 200px;
  background-color: red;
}
.middle {

}
.left {
  width: 250px;
  height: 100px;
  background-color: rgb(221, 0, 255);
}
.right {
  width: 250px;
  height: 100px;
  background-color: rgb(255, 255, 0);
}
.bottom {
  width: 500px;
  height: 200px;
  background-color: green;
}`,
    language: "language-css",
  },
  file13: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="assets/reset.css" />
    <title>html-css-lesson-8</title>
  </head>
  <body>
    <div class="box">
      <div class="top"></div>
      <div class="middle">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="bottom"></div>
    </div>
  </body>
</html>`
,
    language: "language-html",
  },
  file14: {
    filename: "style.css",
    code: `.box {
  width: 600px;
  height: 600px;
  background-color: rgb(64, 198, 255);
}
.top {
  width: 500px;
  height: 200px;
  background-color: red;
}
.middle {

}
.left {
  width: 250px;
  height: 100px;
  background-color: rgb(221, 0, 255);
}
.right {
  width: 250px;
  height: 100px;
  background-color: rgb(255, 255, 0);
}
.bottom {
  width: 500px;
  height: 200px;
  background-color: green;
}`,
    language: "language-css",
  },
  file15: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="assets/reset.css" />
    <title>html-css-lesson-9</title>
  </head>
  <body>
    <div class="box">

    </div>
  </body>
</html>`
,
    language: "language-html",
  },
  file16: {
    filename: "style.css",
    code: `.box {
  width: 600px;
  height: 600px;
  background-color: rgb(64, 198, 255);
}`,
    language: "language-css",
  },
  file17: {
    filename: "index.html",
    code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="assets/reset.css" />
    <title>html-css-lesson-10</title>
  </head>
  <body>
    <div class="wrap">
      <header class="header">
        <div class="header-logo">
          <img src="assets/images/logo.png" alt="" class="header-picture">
        </div>
        <ul class="header-list">
          <li class="header-item">
            <a href="#" class="header-link">home</a>
          </li>
          <li class="header-item">
            <a href="#" class="header-link">about</a>
          </li>
          <li class="header-item">
            <a href="#" class="header-link">company</a>
          </li>
          <li class="header-item">
            <a href="#" class="header-link">contact</a>
          </li>
        </ul>
      </header>
      <main class="main">
        <div class="shape">
          <h2 class="shape-title">Sample Site</h2>
          <div class="shapes-container">
            <div class="shape-circle"></div>
            <p class="shape-text">
              The sunsets over the horizon,
              painting the sky with shades of orange and pink,
              as the day gives way to the calm of the night.
            </p>
          </div>
        </div>
        <ul class="image-list">
          <li class="image-item">
            <img src="assets/images/bag.png" alt="bag" class="image-picture">
          </li>
          <li class="image-item new-parent">
            <img src="assets/images/book.png" alt="book" class="image-picture">
            <p class="new-child">new!</p>
          </li>
          <li class="image-item">
            <img src="assets/images/pen.png" alt="pen" class="image-picture">
          </li>
          <li class="image-item">
            <img src="assets/images/phone.png" alt="phone" class="image-picture">
          </li>
          <li class="image-item">
            <img src="assets/images/note.png" alt="note" class="image-picture">
          </li>
          <li class="image-item">
            <img src="assets/images/movie.png" alt="movie" class="image-picture">
          </li>
        </ul>
      </main>
      <footer class="footer">
        <p class="footer-title">&copy; 2023 Grow. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>`
,
    language: "language-html",
  },
  file18: {
    filename: "style.css",
    code: `/* .boxのスタイル */
.wrap {
  height: 100vh;
}

/* .headerのスタイル */
.header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
}

.header-logo {
  margin-left: 10px;
  width: 70px;
  height: 70px;
}

.header-picture {
  width: 100%;
}

.header-list {
  list-style: none;
  display: flex;
  padding-right: 20px;
}

.header-item:not(:first-child) {
  margin-left: 20px;
}

.header-link {
  color: white;
  text-decoration: none;
}

/* .main-contentのスタイル */
.main {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

/* .sectionのスタイル */
.shape {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

.shape-title {
  font-size: 26px;
  color: #3498db;
}

.shapes-container {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.shape-circle {
  width: 200px;
  height: 200px;
  background-color: #e74c3c;
  border-radius: 50%;
}

.shape-text {
  margin-left: 10px;
  width: 300px;
  font-size: 18px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
}

/* .image-listのスタイル */
.image-list {
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
}

.image-item {
  width: 150px;
  height: 150px;
  margin: 30px;
}

.image-picture {
  width: 100%;
  height: 100%;
}

.new-parent {
  position: relative;
}

.new-child {
  position: absolute;
  top: 70px;
  left: 50px;
  padding: 5px 0;
  width: 50px;
  border-radius: 25%;
  background-color: #ff4a36;
  text-align: center;
  font-weight: bold;
}

/* .footerのスタイル */
.footer {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
}

.footer-title {
  color: white;
}

@media screen and (min-width: 649px) {
  /* 画面サイズが649px以上はここを読み込む */
  .shape-text { 
    margin-left: 30px;
  }
}

@media screen and (max-width: 648px) {
  /* 画面サイズが648px以下はここを読み込む */
  .shapes-container {
    flex-direction: column;
  }

  .shape-text { 
    margin-top: 30px;
  }
}`,
    language: "language-css",
  },
  // 他のデータを追加できます
};
