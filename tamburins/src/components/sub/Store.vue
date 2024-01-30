<template>
  <main id="cont">
    <div class="cont">
      <!-- 메뉴 -->
      <nav>
        <div class="store-menu">
          <ul class="store-menu-flex">
            <li
              v-for="(menu, i) in menu"
              :key="i"
              class="store-menu-item pointer"
              :class="menuClick == i ? 'menu-on' : ''"
              @click="
                () => {
                  menuClick = i;
                  menuChange();
                }
              "
            >
              {{ menu }}
            </li>
          </ul>
        </div>
      </nav>

      <!-- 매장 안내 -->
      <div class="store-list">
        <!-- 대한민국 -->
        <div class="store-list-grid" v-if="menuClick == 0">
          <div class="store-list-item" v-for="(newStoreData, i) in newStoreData" :key="i">
            <div class="store-img-bx">
              <!-- 이미지 -->
              <img
                v-if="newStoreData['file'] == 'jpg'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
              />
              <!-- 비디오 -->
              <video
                v-if="newStoreData['file'] == 'mp4'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
                autoplay
                loop
                muted
              />
            </div>
            <div class="store-info-wrap">
              <h3 class="store-name">
                {{ newStoreData['name'] }}
                <span class="store-map" v-if="newStoreData['map'] != ''">
                  <a :href="`${newStoreData['map']}`" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #535353" />
                  </a>
                </span>
              </h3>
              <p class="store-addr">{{ newStoreData['addr'] }}</p>
              <p class="store-phone">{{ newStoreData['phone'] }}</p>
              <p class="store-hours">{{ newStoreData['hours'] }}</p>
            </div>
          </div>
        </div>

        <!-- 중국 -->
        <div class="store-list-grid" v-if="menuClick == 1">
          <div class="store-list-item" v-for="(newStoreData, i) in newStoreData" :key="i">
            <div class="store-img-bx">
              <!-- 이미지 -->
              <img
                v-if="newStoreData['file'] == 'jpg'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
              />
              <!-- 비디오 -->
              <video
                v-if="newStoreData['file'] == 'mp4'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
                autoplay
                loop
                muted
              />
            </div>
            <div class="store-info-wrap">
              <h3 class="store-name">
                {{ newStoreData['name'] }}
                <span class="store-map" v-if="newStoreData['map'] != ''">
                  <a :href="`${newStoreData['map']}`" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #535353" />
                  </a>
                </span>
              </h3>
              <p class="store-addr">{{ newStoreData['addr'] }}</p>
              <p class="store-phone">{{ newStoreData['phone'] }}</p>
              <p class="store-hours">{{ newStoreData['hours'] }}</p>
            </div>
          </div>
        </div>

        <!-- 전시 -->
        <div class="store-list-grid" v-if="menuClick == 2">
          <div class="store-list-item" v-for="(newStoreData, i) in newStoreData" :key="i">
            <div
              class="store-img-bx"
              @mouseover="summaryShow(i)"
              @mouseout="
                () => {
                  summary[i] = 0;
                }
              "
            >
              <!-- 이미지 -->
              <img
                v-if="newStoreData['file'] == 'jpg'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
              />
              <!-- 비디오 -->
              <video
                v-if="newStoreData['file'] == 'mp4'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
                autoplay
                loop
                muted
              />
              <!-- 전시 설명 요약 -->
              <div class="summary-bg pointer" :class="summary[i] == 1 ? 'summary-show' : ''">
                <div>
                  <p class="summary-txt">
                    {{ newStoreData['summary'] }}
                  </p>
                </div>
              </div>
            </div>
            <!-- 전시 정보 -->
            <div class="store-info-wrap">
              <h3 class="store-name">
                {{ newStoreData['name'] }}
                <span class="store-map" v-if="newStoreData['map'] != ''">
                  <a :href="`${newStoreData['map']}`" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #535353" />
                  </a>
                </span>
              </h3>
              <p class="store-addr">{{ newStoreData['addr'] }}</p>
              <p class="store-phone">{{ newStoreData['phone'] }}</p>
              <p class="store-hours">{{ newStoreData['hours'] }}</p>
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
    return {
      menu: ['대한민국', '중국', '전시'],
      menuClick: '',
      summary: [],
      newStoreData: [],
    };
  },
  props: {
    storeData: Array,
  },
  methods: {
    menuChange() {
      let storeCat = event.target.innerText;
      this.newStoreData = this.storeData.filter((a) => {
        return a['storeCat'] == storeCat;
      });
    },
    summaryShow(a) {
      for (let i = 0; i < this.newStoreData.length; i++) {
        this.summary.push(0);
      }
      this.summary[a] = 1;
    },
  },
  mounted() {
    this.menuClick = 0;
    this.newStoreData = this.storeData.filter((a) => {
      return a['storeCat'] == '대한민국';
    });
  },
};
</script>
<style>
@import '../../assets/css/sub/store.css';
</style>
