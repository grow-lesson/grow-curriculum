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
        const { username } = JSON.parse(request.requestBody);
        if (username !== 'error') {
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

      // ログインユーザー情報取得API
      this.get("/auth/validate_token", () => {
        let tokenData = {
          accessToken: 'testtest',
          client: 'testtest',
          uid: 'test@com'
        };
        if (tokenData.accessToken && tokenData.client && tokenData.uid) {
          return { status: 200, data: {
            allow_password_change: false,
            bio: "よろしくお願いします。",
            created_at: "2023-08-27T17:36:46.611Z",
            email: "example@gmail.com",
            first_name_kana: "カンパニー",
            hobbies: "Soccer",
            id: 6,
            image: null,
            languages: "Ruby",
            last_name_kana: "グロウ",
            name: "grow company",
            nickname: null,
            provider: "email",
            uid: "example@gmail.com",
            updated_at: "2023-08-29T01:49:54.898Z",
            username: 'ぐろうさん'
          }};
        } else {
          return { status: 401, message: "認証されていません" };
        }
      });

      // マイページの情報更新API
      this.put("/auth", (schema, request) => {
        const { username } = JSON.parse(request.requestBody);
        if (username !== 'error') {
          return { status: 200, message: "プロフィール更新に成功しました" };
        } else {
          return { status: 422, message: "入力フォームの内容が不正です" };
        }
      });
    },
  });
}
