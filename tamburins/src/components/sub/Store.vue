<template>
  <main id="cont">
    <div class="cont">
      <!-- 메뉴 -->
      <nav>
        <div class="store-menu">
          <ul class="store-menu-flex">
            <li class="store-menu-item pointer on">대한민국</li>
            <li class="store-menu-item pointer">중국</li>
            <li class="store-menu-item pointer">전시</li>
          </ul>
        </div>
      </nav>
      <!-- 매장 안내 -->
      <div class="store-list">
        <div class="store-list-grid">
          <div class="store-list-item" v-for="(storeData, i) in storeData" :key="i">
            <div class="store-img">
              <!-- 이미지 -->
              <img
                v-if="storeData['file'] == 'img'"
                :src="require(`../../assets/image/store/${storeData['img']}`)"
                :alt="`${storeData['name']}`"
              />
              <!-- 비디오 -->
              <video
                v-if="storeData['file'] == 'mp4'"
                :src="require(`../../assets/image/store/${storeData['img']}`)"
                :alt="`${storeData['name']}`"
                autoplay
                loop
                muted
              />
            </div>
            <div class="store-info-wrap">
              <h3 class="store-name">
                {{ storeData['name'] }}
                <span class="store-map">
                  <a
                    :href="`${storeData['map']}`"
                    target="_blank"
                  >
                    <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #535353" />
                  </a>
                </span>
              </h3>
              <p class="store-addr">{{ storeData['addr'] }}</p>
              <p class="store-phone">{{ storeData['phone'] }}</p>
              <p class="store-hours">{{ storeData['hours'] }}</p>
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
  props: {
    storeData: Array,
  },
  methods: {},
};
</script>
<style>
@import '../../assets/css/sub/store.css';
</style>
