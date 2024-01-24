<template>
  <main id="cont">
    <div class="cont">
      <!-- 메뉴 -->
      <nav>
        <div class="store-menu">
          <ul class="list-flex">
            <li class="store-list-item pointer">대한민국</li>
            <li class="store-list-item pointer">중국</li>
            <li class="store-list-item pointer">전시</li>
          </ul>
        </div>
      </nav>
      <!-- 매장 안내 -->
      <div class="store-list">
        <div class="store-list-grid">
          <div class="store-list-item">
            <div class="store-img">
              <img src="../../assets/image/store/store_seongsu.jpg" alt="매장 사진" />
            </div>
            <div class="store-info-wrap">
              <h3 class="store-name">
                플래그십 스토어 성수
                <span class="store-map pointer"><font-awesome-icon :icon="['fas', 'location-dot']" style="color: #535353;" /></span>
              </h3>
              <p class="store-addr">서울 성동구 연무장5길 8</p>
              <p class="store-phone">+82 70 4266 6142</p>
              <p class="store-hours">월-일 11:00am-9:00pm</p>
            </div>
          </div>
          <div class="store-list-item">
            <div class="store-img">
              <img src="../../assets/image/store/store_seongsu.jpg" alt="매장 사진" />
            </div>
            <div class="store-info-wrap">
              <h3 class="store-name">
                플래그십 스토어 성수
                <span class="store-map pointer">지도</span>
              </h3>
              <p class="store-addr">서울 성동구 연무장5길 8</p>
              <p class="store-phone">+82 70 4266 6142</p>
              <p class="store-hours">월-일 11:00am-9:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Store',
  data() {
    return {};
  },
  components: {},
  props: {},
  methods: {},
};
</script>
<style>
@import '../../assets/css/sub/store.css';
</style>
