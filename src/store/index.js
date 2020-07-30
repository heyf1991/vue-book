import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
Vue.use(Vuex);

const state = { car: [] };
let store = new Vuex.Store({
  state,
  mutations,
  strict: true
});

export default store;
