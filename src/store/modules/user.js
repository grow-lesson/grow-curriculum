// src/store/modules/user.js
const state = {
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {};

const getters = {
  getUser: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
