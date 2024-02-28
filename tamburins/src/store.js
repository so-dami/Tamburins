import { createStore } from 'vuex';

const store = createStore({
  // state 보관하는 곳
  state() {
    return {
      // quantity: [0, 0],
    };
  },

  // state 수정 방법 정의하는 곳
  mutations: {
    // Detail.vue에서 장바구니 담기 버튼 클릭 시 상품 수량 변경
    // quantitySet(state, data) {
    //   state.quantity[data]++;
    // },
  },

  // ajax 하는 곳
  actions: {},
});

export default store;
