<template>
  <main id="cont">
    <div class="cont">
      <!-- 카테고리 메뉴 -->
      <nav>
        <div class="ctg-menu">
          <ul class="list-flex">
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img class="ctg-thumbnail-img" src="../../assets/image/category/cat_hand_all.png" alt="" />
                </div>
                <span class="ctg-thumbnail-txt">All</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_hand_perfumehand.png"
                    alt="Perfume Hand"
                  />
                </div>
                <span class="ctg-thumbnail-txt">Perfume Hand</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_hand_tubehand.png"
                    alt="Tube Hand"
                  />
                </div>
                <span class="ctg-thumbnail-txt">Tube Hand</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_hand_sanitizer.png"
                    alt="Hand Sanitizer"
                  />
                </div>
                <span class="ctg-thumbnail-txt">Hand Sanitizer</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- 카테고리 제목 -->
      <div>
        <div class="ctg-title-bx">
          <div class="ctg-title">
            <span>퍼퓸 핸드</span>
            <span class="list-count">({{ perfumeHandData.length }})</span>
          </div>
        </div>

        <!-- 상품 목록 -->
        <div class="prd-list">
          <div class="prd-list-grid">
            <div class="prd-list-item" v-for="(perfumeHandData, i) in perfumeHandData" :key="i">
              <div class="prd-list-thumbnail">
                <img
                  class="prd-list-thumbnail-img"
                  :src="require(`../../assets/image/prd/hand/${perfumeHandData['prdImg']}`)"
                  :alt="`${perfumeHandData['name']}`"
                />
              </div>
              <div class="prd-list-info">
                <div class="prd-list-desc">{{ perfumeHandData['desc'] }}</div>
                <div class="prd-list-name">{{ perfumeHandData['name'] }}</div>
                <div class="prd-list-price">{{ perfumeHandData['price'][0] }}원</div>
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
