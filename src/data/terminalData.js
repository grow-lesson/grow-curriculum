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
    <link rel="stylesheet" href="../../tools/style/reset.css" />
    <link rel="stylesheet" href="./assets/stylesheets/style.css" />
    <title>pc-site</title>
  </head>
  <body>
    <div class="l-wrap">

      <header class="l-header">
        <div class="l-header__logo">
          <img src="./assets/images/logo.png" alt="grow-logo">
        </div>
        <nav>
          <ul class="l-header__list">
            <li class="l-header__item"><a href="#" class="l-header__link">home</a></li>
            <li class="l-header__item"><a href="#" class="l-header__link">about</a></li>
            <li class="l-header__item"><a href="#" class="l-header__link">access</a></li>
            <li class="l-header__item"><a href="#" class="l-header__link">contact</a></li>
          </ul>
        </nav>
      </header>

      <div class="l-hero"></div>

      <main class="l-main">
        <h1 class="l-main__title">Git lesson2</h1>
        <div class="l-main__contents">
          <section class="p-production">
            <h2 class="c-title">最新の作品</h2>
            <ul class="p-production_list">
              <li><img src="./assets/images/production_01.jpg" alt="opus-1"></li>
              <li><img src="./assets/images/production_02.jpg" alt="opus-2"></li>
              <li><img src="./assets/images/production_03.jpg" alt="opus-3"></li>
              <li><img src="./assets/images/production_04.jpg" alt="opus-4"></li>
              <li><img src="./assets/images/production_05.jpg" alt="opus-5"></li>
              <li><img src="./assets/images/production_06.jpg" alt="opus-6"></li>
            </ul>
          </section>
          <section class="p-introduce">
            <h2 class="c-title">自己紹介</h2>
              <p class="p-introduce__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
          </section>
        </div>
      </main>

      <footer class="l-footer">
        <div class="l-footer__box">
          <div class="l-footer__inner">
          <p class="l-footer__text"><small>&copy; 2024 example.inc</small></p>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
    `,
    language: "language-html",
  },
  // 他のデータを追加できます
};
