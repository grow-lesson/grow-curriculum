// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/user'; // ユーザーモジュールのインポート

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule, // ユーザーモジュールを追加
    // 他のモジュールも同様に追加可能
  },
});
