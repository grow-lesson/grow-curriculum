// mirage/server.js
import { Server } from "miragejs";
import configureMirage from "./config.js";

export function makeServer({ environment = "development" } = {}) {
  if (environment === "development") {
    let server = new Server({
      environment,
      routes() {
        configureMirage();
      },
    });

    return server;
  } else {
    // 本番環境ではモックサーバーを使用しないため、空のオブジェクトを返す
    return {};
  }
}

export default makeServer;
