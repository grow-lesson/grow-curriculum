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
        const { email, password } = JSON.parse(request.requestBody);
        if (email === "grow" && password === "admin") {
          return { status: 201, message: "ログインに成功しました" };
        } else {
          return { status: 401, message: "ユーザー名またはパスワードが一致しません" };
        }
      });

      this.post("/validate_token", (schema, request) => {
        const { headers } = request;
        const accessToken = headers['access-token'];
        const client = headers['client'];
        const uid = headers['uid'];

        if (accessToken && client && uid) {
          // ユーザーモデルが定義されていると仮定し、ユーザーを作成して返す
          const user = schema.create('user', {
            id: 5,
            provider: "email",
            uid: "test2@sample.com",
            allow_password_change: false,
            name: "grow company",
            nickname: null,
            image: null,
            email: "test2@sample.com",
            created_at: "2023-08-25T06:17:04.576Z",
            updated_at: "2023-08-25T07:35:39.724Z",
            username: "grow",
            last_name_kana: "グロウ",
            first_name_kana: "カンパニー"
            // 他のユーザー属性
          });

          return { status: 200, data: { user } };
        } else {
          return { status: 401, message: "認証されていません" };
        }
      });

      // マイページの取得API、ログイン後のページ制約
      // this.get("/users/:id", () => {
      //   return { 
      //     id: 1,
      //     picture: "../../assets/images/user/dog.jpg",
      //     name: "grow",
      //     email: "test@sample.com",
      //     hobbies: ["html","css"],
      //     languages: ["旅行","読書"],
      //     bio: "よろしくお願いします"
      //   };
      // });
    },
  });
}
