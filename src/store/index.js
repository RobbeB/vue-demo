import Vue from "vue";
import Vuex from "vuex";
import jwtService from "../services/jwt.service";
import { USER_LOGIN, SET_AUTH } from "./actions.type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: !!jwtService.getToken()
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
    [SET_AUTH](state, value) {
      state.isAuthenticated = value;
    }
  },
  actions: {
    [USER_LOGIN](context) {
      return new Promise(res => {
        context.commit(SET_AUTH, true);
        jwtService.saveToken("logged in");
        res();
      });
    }
  }
});
