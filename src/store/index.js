// src/store/index.js

import Vuex from 'vuex';
import auth from './modules/auth';

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    message: 'Initial message',
    isAuthenticated: false, // Initial authentication state
    isShowError:false,
   },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
    setAuthenticated(state, authenticated) {
      state.isAuthenticated = authenticated
    },
    toggleShowError(state) {
      state.isShowError = !state.isShowError
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    },
  },
  getters: {
    getMessage: state => state.message,
    isAuthenticated: state => state.isAuthenticated,
    isShowError: state => state.isShowError
  }
});
