<template>
  <div>
    <!-- 장바구니 -->
    <Cart :cartClick="cartClick" :cartLocal="cartLocal" @closeCart="cartClick = false"></Cart>

    <!-- 상단 -->
    <Header :cartQuantity="cartQuantity" :cartLocal="cartLocal" @openCart="cartClick = true"></Header>

    <!-- 메인 -->
    <router-view
      :prdData="prdData"
      :categoryData="categoryData"
      :storeData="storeData"
      :cartQuantity="cartQuantity"
      :cartLocal="cartLocal"
      @cartQuantity="cartQuantity = $event"
      @cartLocal="cartLocal = $event"
    ></router-view>

    <!-- 하단 -->
    <Footer></Footer>
  </div>
</template>

<script>
// 컴포넌트
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import Cart from './components/sub/Cart.vue';

// 데이터
import prdData from './assets/js/prdData.js';
import categoryData from './assets/js/categoryData.js';
import storeData from './assets/js/storeData.js';

export default {
  name: 'App',
  data() {
    return {
      prdData: prdData,
      categoryData: categoryData,
      storeData: storeData,
      cartClick: false,
      cartQuantity: 0,
      cartLocal: [],
    };
  },
  components: {
    Header,
    Footer,
    Cart,
  },
  mounted() {},
};
</script>

<style>
@import './assets/css/app.css';
</style>
