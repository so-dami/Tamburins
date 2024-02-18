<template>
  <main id="main">
    <div class="main">
      <div class="main-bg">
        <div class="main-bg-section">
          <img class="bg-img" src="../../assets/image/main_bg_left.jpg" />
        </div>
        <div class="main-bg-section">
          <!-- <img class="bg-img" src="../../assets/image/main_bg_right.jpg" /> -->
          <video class="bg-img" src="../../assets/image/main_bg_right.mp4" autoplay muted loop />
        </div>
        <div class="new-bx">
          <h1 class="new-title">PERFUME 14ML</h1>
          <div class="new-btn-bx">
            <a href="#" class="new-btn">신제품 보기</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {},
  mounted() {
    // 스크롤 상단 고정
    window.scrollTo(0, 0);
  },
};
</script>

<style>
@import '../../assets/css/common/home.css';
</style>
