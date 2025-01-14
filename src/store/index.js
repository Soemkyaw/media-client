// import Vuex from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         isAuth : true
//     },
//     getters: {
//         getisAuth(state)
//         {
//             return state.isAuth
//         }
//     },
//     mutations: {},
//     actions: {}
// })

import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
      setIsLoggedIn(state, value) {
          state.isLoggedIn = value
    }
  },
  actions: {
    updateIsLoggedIn(context, value) {
      context.commit("setIsLoggedIn", value);
    },
  },
});

export default store;
