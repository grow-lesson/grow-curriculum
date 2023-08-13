// mirage/config.js
import { createServer, Model } from "miragejs";

export default function configureMirage() {
  createServer({
    models: {
      // モデルの定義
      user: Model,
    },

    routes() {
      this.namespace = "/api";

      // サインアップ情報送信API
      this.post("/signup", (schema, request) => {
        const { username, password, confirmPassword } = JSON.parse(request.requestBody);
        if (username && password && confirmPassword ) {
          return { status: 201, message: "サインアップに成功しました" };
        } else {
          return { status: 401, message: "入力フォームの内容が不正です" };
        }
      });

      // ログイン情報送信API
      this.post("/login", (schema, request) => {
        const { name, password } = JSON.parse(request.requestBody);
        if (name === "grow" && password === "admin") {
          return { status: 201, message: "ログインに成功しました" };
        } else {
          return { status: 401, message: "ユーザー名またはパスワードが一致しません" };
        }
      });

      // ログイン情報の取得API
      this.get("/users/show", () => {
        return { 
          id: 1,
          username: "grow太郎",
          email: "test@sample.com",
          hobbies: ["html","css"],
          languages: ["旅行","読書"],
          bio: "よろしくお願いします"
        }; 
      });

      // マイページの取得API
      this.get("/users/:id", () => {
        return { 
          id: 1,
          picture: "src/assets/images/user/dog.jpg",
          username: "grow太郎",
          email: "test@sample.com",
          hobbies: ["html","css"],
          languages: ["旅行","読書"],
          bio: "よろしくお願いします"
        };
      });
    },
  });
}
