<template>
  <div>
    <!-- 상단 -->
    <Header></Header>

    <!-- 메인 -->
    <router-view :handData="handData" :categoryData="categoryData"></router-view>

    <!-- 하단 -->
    <Footer></Footer>
  </div>
</template>

<script>
// 컴포넌트
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

// 데이터
import handData from './assets/js/prdData/handData-3.js';
import categoryData from './assets/js/categoryData.js';

export default {
  name: 'App',
  data() {
    return {
      handData: handData,
      categoryData: categoryData,
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import './assets/css/app.css';
</style>
