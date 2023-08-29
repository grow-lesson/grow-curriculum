// src/store/modules/user.js
const state = {
  loginData: null,
};

const mutations = {
  setUser(state, user) {
    state.loginData = user;
  },
};

const actions = {};

const getters = {
  getLoginData: state => state.loginData,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
