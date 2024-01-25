<template>
  <main id="cont">
    <div class="cont">
      <!-- 메뉴 -->
      <nav>
        <div class="store-menu">
          <ul class="store-menu-flex" @click="menuChange()">
            <li
              class="store-menu-item pointer"
              :class="menuClick == 0 ? 'on' : ''"
              @click="
                () => {
                  menuClick = 0;
                }
              "
            >
              대한민국
            </li>
            <li
              class="store-menu-item pointer"
              :class="menuClick == 1 ? 'on' : ''"
              @click="
                () => {
                  menuClick = 1;
                }
              "
            >
              중국
            </li>
            <li
              class="store-menu-item pointer"
              :class="menuClick == 2 ? 'on' : ''"
              @click="
                () => {
                  menuClick = 2;
                }
              "
            >
              전시
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
            <div class="store-img-bx">
              <!-- 이미지 -->
              <img
                class="pointer"
                v-if="newStoreData['file'] == 'jpg'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
              />
              <!-- 비디오 -->
              <video
                class="pointer"
                v-if="newStoreData['file'] == 'mp4'"
                :src="require(`../../assets/image/store/${newStoreData['img']}`)"
                :alt="`${newStoreData['name']}`"
                autoplay
                loop
                muted
              />
              <div class="summary-bg">
                <div>
                  <p class="summary-txt">
                    {{ newStoreData['summary'] }}
                  </p>
                </div>
              </div>
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
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Store',
  data() {
    return {
      menuClick: 0,
      storeCat: '',
      summaryShow: false,
      newStoreData: [],
    };
  },
  components: {},
  props: {
    storeData: Array,
  },
  methods: {
    menuChange() {
      this.storeCat = event.target.innerText;
      this.newStoreData = this.storeData.filter((a) => {
        return a['storeCat'] == this.storeCat;
      });
    },
  },
  mounted() {
    this.newStoreData = this.storeData.filter((a) => {
      return a['storeCat'] == '대한민국';
    });
  },
};
</script>
<style>
@import '../../assets/css/sub/store.css';
</style>
