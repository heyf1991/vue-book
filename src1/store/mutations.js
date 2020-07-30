import * as Type from './mutations-type'
const mutations = {
  [Type.INCREMENT](state, num) {
    // state是自动放进去的，默认指的就是当前的state
    state.count += num;
  },
  [Type.DECREMENT](state) {
    state.count -= 1;
  }
};
export default mutations;