<template>
  <main id="cont">
    <div class="cont">
      <!-- 카테고리 메뉴 -->
      <nav>
        <div class="cat-wrap">
          <ul class="cat-list list-flex">
            <li class="cat-list-item">
              <div class="cat-thumbnail-wrap">
                <div>
                  <img class="cat-thumbnail-img" src="../../assets/image/category/cat_hand_all.png" alt="" />
                </div>
                <span class="cat-thumbnail-txt">All</span>
              </div>
            </li>
            <li class="cat-list-item">
              <div class="cat-thumbnail-wrap">
                <div>
                  <img
                    class="cat-thumbnail-img"
                    src="../../assets/image/category/cat_hand_perfumehand.png"
                    alt="Perfume Hand"
                  />
                </div>
                <span class="cat-thumbnail-txt">Perfume Hand</span>
              </div>
            </li>
            <li class="cat-list-item">
              <div class="cat-thumbnail-wrap">
                <div>
                  <img
                    class="cat-thumbnail-img"
                    src="../../assets/image/category/cat_hand_tubehand.png"
                    alt="Tube Hand"
                  />
                </div>
                <span class="cat-thumbnail-txt">Tube Hand</span>
              </div>
            </li>
            <li class="cat-list-item">
              <div class="cat-thumbnail-wrap">
                <div>
                  <img
                    class="cat-thumbnail-img"
                    src="../../assets/image/category/cat_hand_sanitizer.png"
                    alt="Hand Sanitizer"
                  />
                </div>
                <span class="cat-thumbnail-txt">Hand Sanitizer</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- 상품 목록 -->
      <div class="prd-wrap">
        <div class="prd-top">
          <div class="list-title">
            <span>퍼퓸 핸드</span>
            <span class="list-count">({{ perfumeHandData.length }})</span>
          </div>
        </div>

        <div class="prd-list">
          <div class="prd-list-inner prd-grid">
            <div class="prd-box" v-for="(perfumeHandData, i) in perfumeHandData" :key="i">
              <div class="prd-thumbnail">
                <img
                  class="prd-thumbnail-img"
                  :src="require(`../../assets/image/prd/hand/${perfumeHandData['prdImg']}`)"
                  :alt="`${perfumeHandData['name']}`"
                />
              </div>
              <div class="prd-info">
                <div class="prd-desc">{{ perfumeHandData['desc'] }}</div>
                <div class="prd-name">{{ perfumeHandData['name'] }}</div>
                <div class="prd-price">{{ perfumeHandData['price'][0] }}원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Sub',
  data() {
    return {};
  },
  components: {},
  props: {
    perfumeHandData: Array,
    tubeHandData: Array,
    sanitizerData: Array,
  },
};
</script>

<style>
@import '../../assets/css/sub/sub.css';
</style>
