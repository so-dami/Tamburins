<template>
  <main id="cont">
    <div class="cont">
      <!-- 카테고리 메뉴 -->
      <nav>
        <div class="ctg-menu">
          <ul class="list-flex">
            <li class="ctg-list-item" v-for="(categoryData, i) in categoryData" :key="i">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    :src="require(`../../assets/image/category/${categoryData['img']}`)"
                    :alt="`${categoryData['name']}`"
                  />
                </div>
                <span class="ctg-thumbnail-txt">{{ categoryData['name'] }}</span>
              </div>
            </li>
            <!-- <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_hand_perfumehand.png"
                    alt="퍼퓸 핸드"
                  />
                </div>
                <span class="ctg-thumbnail-txt">퍼퓸 핸드</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_hand_tubehand.png"
                    alt="튜브 핸드"
                  />
                </div>
                <span class="ctg-thumbnail-txt">튜브 핸드</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_hand_sanitizer.png"
                    alt="손 소독제"
                  />
                </div>
                <span class="ctg-thumbnail-txt">손 소독제</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_body_shwry.png"
                    alt="샤워리바디"
                  />
                </div>
                <span class="ctg-thumbnail-txt">샤워리바디</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_body_handnbody.png"
                    alt="핸드 앤 바디"
                  />
                </div>
                <span class="ctg-thumbnail-txt">핸드 앤 바디</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_candle_perfumecandle.png"
                    alt="퍼퓸 캔들"
                  />
                </div>
                <span class="ctg-thumbnail-txt">퍼퓸 캔들</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_candle_object.png"
                    alt="오브젝트"
                  />
                </div>
                <span class="ctg-thumbnail-txt">향 오브젝트</span>
              </div>
            </li>
            <li class="ctg-list-item">
              <div class="ctg-thumbnail">
                <div>
                  <img
                    class="ctg-thumbnail-img"
                    src="../../assets/image/category/cat_toilet_fragrance.png"
                    alt="토일렛 프래그런스"
                  />
                </div>
                <span class="ctg-thumbnail-txt">토일렛 프래그런스</span>
              </div>
            </li> -->
          </ul>
        </div>
      </nav>

      <!-- 카테고리 제목 -->
      <div>
        <div class="ctg-title-bx">
          <div class="ctg-title">
            <span>퍼퓸 핸드</span>
            <span class="list-count">(10)</span>
          </div>
        </div>

        <!-- <router-link :to="`/detail/${perfumeHandData['id']}`"> -->
        <!-- :src="require(`../../assets/image/prd/hand/${perfumeHandData['prdImg']}`)" -->
        <!-- v-for="(perfumeHandData, i) in perfumeHandData" :key="i" -->

        <!-- 상품 목록 -->
        <div class="prd-list">
          <div class="prd-list-grid">
            <div class="prd-list-item">
              <div class="prd-list-thumbnail">
                <img
                  class="prd-list-thumbnail-img"
                  src="../../assets/image/prd/hand/prd_hand_perfumehand_0.jpg"
                  alt="퍼퓸 쉘 엑스 카모"
                  @click="filter()"
                />
              </div>
              <div class="prd-list-info">
                <div class="prd-list-desc">진득한 카모마일 | 부드러운 나무결 | 머스크</div>
                <div class="prd-list-name">퍼퓸 쉘 엑스 카모</div>
                <div class="prd-list-price">32,000원</div>
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
    return {
      catNum: 0,
      result: [],
    };
  },
  components: {},
  props: {
    handData: Array,
    categoryData: Array,
  },
  methods: {
    filter() {
      this.result = this.handData.filter((a) => {
        return a['catNum'] == this.catNum;
      });
      console.log(this.result);
    },
  },
};
</script>

<style>
@import '../../assets/css/sub/sub.css';
</style>
