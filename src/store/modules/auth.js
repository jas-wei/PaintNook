// auth.js (Vuex module)
const state = {
    email: null,
    password: null,
    security: null
  };
  
  const mutations = {
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setSecurity(state, security) {
      state.security = security;
    }
  };
  
  const actions = {
    // Actions to set email and password can go here if needed
  };
  
  const getters = {
    getEmail: state => state.email,
    getPassword: state => state.password,
    getSecurity: state => state.security
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  