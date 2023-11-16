<template>
  <div>
    <!-- 상단 -->
    <Header></Header>

    <!-- 메인 -->
    <main id="main">
      <div class="main">
        <div class="main-bg">
          <div class="main-bg-section">
            <img class="bg-img" src="./assets/image/main_bg_left.jpg" />
          </div>
          <div class="main-bg-section">
            <img class="bg-img" src="./assets/image/main_bg_right.jpg" />
          </div>
          <div class="new-bx">
            <h1 class="new-title">TOILET FRAGRANCE</h1>
            <div class="new-btn-bx">
              <a href="#" class="new-btn">신제품 보기</a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 하단 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import './assets/css/app.css';
</style>
