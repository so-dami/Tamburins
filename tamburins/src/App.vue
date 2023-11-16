<template>
  <div>
    <!-- 상단 -->
    <Header></Header>

    <!-- 메인 -->
    <!-- <Home></Home> -->
    <Sub></Sub>

    <!-- 하단 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
// import Home from './components/common/Home.vue';
import Sub from './components/sub/Sub.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
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
