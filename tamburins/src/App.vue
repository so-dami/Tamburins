<template>
  <div>
    <!-- 장바구니 -->
    <Cart
      :cartClick="cartClick"
      :cartLocal="cartLocal"
      :total="total"
      @closeCart="cartClick = false"
      @cartPlus="cartQuantity++, (total = total + $event)"
      @cartMinus="cartQuantity--, (total = total - $event)"
      @itemDelete1="cartLocal = $event"
      @itemDelete2="total = total - $event"
      @itemDelete3="cartQuantity = cartQuantity - $event"
    ></Cart>

    <!-- 상단 -->
    <Header
      :cartQuantity="cartQuantity"
      :cartLocal="cartLocal"
      :isLogin="isLogin"
      @openCart="cartClick = true"
      @logout="isLogin = false"
    ></Header>

    <!-- 메인 -->
    <router-view
      :prdData="prdData"
      :categoryData="categoryData"
      :storeData="storeData"
      :cartLocal="cartLocal"
      @cartQuantity="cartQuantity = $event"
      @cartLocal="cartLocal = $event"
      @openCart="cartClick = true"
      @total="total = $event"
      @login="isLogin = true"
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
      total: 0,
      isLogin: false,
    };
  },
  components: {
    Header,
    Footer,
    Cart,
  },
  mounted() {
    // 새로고침 후에도 Header의 장바구니(수량) 및 장바구니 내용 유지
    this.cartLocal = JSON.parse(localStorage.getItem('cart'));
    if (localStorage.getItem('cart') == null || localStorage.getItem('cart') == '[]') {
      this.cartQuantity = 0;
      this.total = 0;
    } else {
      for (let i = 0; i < this.cartLocal.length; i++) {
        this.cartQuantity = this.cartQuantity += this.cartLocal[i]['quantity'];
        this.total = this.total += this.cartLocal[i]['price'] * this.cartLocal[i]['quantity'];
      }
    }

    // 로그인 상태값 저장
    console.log('cookie value:', document.cookie.split('=')[1]);
    if (document.cookie.split('=')[1] == 'true') {
      this.isLogin = true;
      console.log('login:', this.isLogin);
    } else {
      this.isLogin = false;
      console.log('login:', this.isLogin);
    }
  },
};
</script>

<style>
@import './assets/css/app.css';
</style>
