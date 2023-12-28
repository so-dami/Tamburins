<template>
  <div>
    <!-- 상단 -->
    <Header></Header>

    <!-- 메인 -->
    <router-view
      :perfumeHandData="perfumeHandData"
      :tubeHandData="tubeHandData"
      :sanitizerData="sanitizerData"
      :id="id"
      @click="
        console.log($event);
        id = $event;
        console.log(id);
      "
    ></router-view>

    <!-- 하단 -->
    <Footer></Footer>
  </div>
</template>

<script>
// 컴포넌트
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

// 데이터
import { perfumeHandData, tubeHandData, sanitizerData } from './assets/js/prdData/handData-2.js';

export default {
  name: 'App',
  data() {
    return {
      perfumeHandData: perfumeHandData,
      tubeHandData: tubeHandData,
      sanitizerData: sanitizerData,
      id: 0,
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
