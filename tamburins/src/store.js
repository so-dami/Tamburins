import { createStore } from 'vuex';

const store = createStore({
  // state 보관
  state() {
    return {
      catNum: '',
    };
  },

  // state 수정 방법 정의
  mutations: {},
});

export default store;
