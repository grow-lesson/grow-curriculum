// mirage/server.js
import { Server } from "miragejs";
import configureMirage from "./config.js";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,
    routes() {
      configureMirage();
    },
  });

  return server;
}

makeServer();