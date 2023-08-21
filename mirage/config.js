// mirage/config.js
import { createServer, Model } from "miragejs";

export default function configureMirage() {
  createServer({
    models: {
      // モデルの定義
      user: Model,
    },

    routes() {
      this.namespace = "/auth";

      // サインアップ情報送信API
      this.post("/", (schema, request) => {
        const { name, password, confirmPassword } = JSON.parse(request.requestBody);
        if (name == '' && password  == '' && confirmPassword == '' ) {
          return { status: 201, message: "サインアップに成功しました" };
        } else {
          return { status: 401, message: "入力フォームの内容が不正です" };
        }
      });

      // ログイン情報送信API
      this.post("/sign_in", (schema, request) => {
        const { name, password } = JSON.parse(request.requestBody);
        if (name === "grow" && password === "admin") {
          return { status: 201, message: "ログインに成功しました" };
        } else {
          return { status: 401, message: "ユーザー名またはパスワードが一致しません" };
        }
      });

      // マイページの取得API、ログイン後のページ制約
      this.get("/users/:id", () => {
        return { 
          id: 1,
          picture: "../../assets/images/user/dog.jpg",
          name: "grow",
          email: "test@sample.com",
          hobbies: ["html","css"],
          languages: ["旅行","読書"],
          bio: "よろしくお願いします"
        };
      });
    },
  });
}
