<template>
  <main id="cont">
    <div class="category">
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
            <strong>퍼퓸 핸드</strong>
            <span class="list-count">(30)</span>
          </div>
        </div>

        <div class="prd-list">
          <div class="prd-list-inner">
            <div class="prd-box">
              <div class="prd-thumbnail">
                <img
                  class="prd-thumbnail-img"
                  src="../../assets/image/prd/hand/prd_hand_perfumehand_0.jpg"
                  alt="퍼퓸 쉘 엑스 카모"
                />
              </div>
              <div class="prd-desc">진득한 카모마일 | 부드러운 나무결 | 머스크</div>
              <div class="prd-name">퍼퓸 쉘 엑스 카모</div>
              <div class="prd-price">32,000원</div>
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
    perfumdHandData: Array,
    tubeHandData: Array,
    sanitizerData: Array,
  },
};
</script>

<style>
@import '../../assets/css/sub/sub.css';
</style>
