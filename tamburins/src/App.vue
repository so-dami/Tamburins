<template>
  <div>
    <!-- 상단 -->
    <Header></Header>

    <!-- 메인 -->
    <!-- <Home></Home> -->
    <Sub :perfumdHandData="perfumdHandData" :tubeHandData="tubeHandData" :sanitizerData="sanitizerData"></Sub>

    <!-- 하단 -->
    <Footer></Footer>
  </div>
</template>

<script>
// 컴포넌트
import Header from './components/common/Header.vue';
// import Home from './components/common/Home.vue';
import Sub from './components/sub/Sub.vue';
import Footer from './components/common/Footer.vue';

// 데이터
import { perfumdHandData, tubeHandData, sanitizerData } from './assets/js/prdData/handData.js';

export default {
  name: 'App',
  data() {
    return {
      perfumdHandData: perfumdHandData,
      tubeHandData: tubeHandData,
      sanitizerData: sanitizerData,
    };
  },
  components: {
    Header,
    // Home,
    Sub,
    Footer,
  },
};
</script>

<style>
@import './assets/css/app.css';
</style>
