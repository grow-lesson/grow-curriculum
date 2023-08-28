// mirage/config.js
import { createServer, Model } from "miragejs";

export default function configureMirage() {
  // サーバーの作成
  createServer({
    models: {
      // モデルの定義
      user: Model,
    },

    routes() {
      // サインアップ情報送信API
      this.post("/auth", (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        if (username !== 'error' && password  !== 'grow-error') {
          return { status: 201, message: "サインアップに成功しました" };
        } else {
          return { status: 401, message: "入力フォームの内容が不正です" };
        }
      });

      // ログイン情報送信API
      this.post("/auth/sign_in", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        if (email === "example@gmail.com" && password === "grow-admin") {
          return { status: 201, message: "ログインに成功しました" };
        } else {
          return { status: 401, message: "ユーザー名またはパスワードが一致しません" };
        }
      });

      this.get("/auth/validate_token", () => {
        let tokenData = {
          accessToken: 'testtest',
          client: 'testtest',
          uid: 'test@com'
        };
        if (tokenData.accessToken && tokenData.client && tokenData.uid) {
          return { status: 200, data: {
            id: 5,
            provider: "email",
            uid: "test2@sample.com",
            allow_password_change: false,
            name: "grow company",
            last_name_kana: "グロウ",
            first_name_kana: "カンパニー",
            email: "test2@sample.com",
            hobbies: "旅行、音楽鑑賞",
            languages: "HTML",
            bio: "よろしくお願いします。",
            image: null,
            created_at: "2023-08-25T06:17:04.576Z",
            updated_at: "2023-08-25T07:35:39.724Z",
            // 他のユーザー属性
          }};
        } else {
          return { status: 401, message: "認証されていません" };
        }
      });
    },
  });
}
