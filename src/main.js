import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { makeServer } from "../mirage/server"; // Mirageサーバーのインポート

if (process.env.VUE_APP_STAGE_NAME === "development") {
  makeServer(); // 開発モード時にMirageサーバーを起動

  // Vue DevTools を起動
  const app = createApp(App).use(store).use(router);
  app.config.devtools = true;
  app.mount("#app");
} else {
  createApp(App).use(store).use(router).mount("#app");
}
