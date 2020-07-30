import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger"; // 日志插件
import mutations from "./mutations";
Vue.use(Vuex);

// state给store管理的，相当于平常组件里面的data
const state = { count: 0 };
// 与router的用法非常像,容器仅仅是一个
let store = new Vuex.Store({
  state,
  mutations,
  plugins: [logger()],
  strict: true //只能通过mutation（管理员）来更改状态，不支持异步，要用action来操作
});

export default store;
