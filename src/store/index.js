import { createStore } from "vuex";
import userModule from './modules/user'; // ユーザーモジュールのインポート

const store = createStore({
  modules: {
    user: userModule, // ユーザーモジュールを追加
    // 他のモジュールも同様に追加可能
  },
});

export default store;
