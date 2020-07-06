import Vue from "vue";
import Vuex from "vuex";
import users from "./usersStub";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false,
    error: null,
  },
  getters: {
    getUserByEmail: (state) => (email) => {
      return state.users.find((user) => user.email === email);
    },
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUser(state, user) {
      state.user = user;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    clearState(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      commit("clearError")
      try {
        const user = users.find((u) => u.email === email);
        if (!user) {
          throw Error("User not found");
        }

        if (user.password !== password) {
          throw Error("Invalid password");
        }

        commit("setUser", user);
        commit("setLoggedIn", true);
      } catch (e) {
        commit("setError", e.message);
      }
    },
    logout({ commit }) {
      commit("clearState");
    },
  },
  modules: {},
});
