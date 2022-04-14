import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
  state: {
    userLoggedIn: {
      loggedIn: false,
      user: {}
    }
  },
  getters: {
  },
  mutations: {
    setLoggedInState(state, user) {
      if (user) {
        console.log('loginState: ', user);
        state.userLoggedIn.loggedIn = true;
        state.userLoggedIn.user = user;

      } else {
        state.userLoggedIn.loggedIn = false;
        state.userLoggedIn.user = {};
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
