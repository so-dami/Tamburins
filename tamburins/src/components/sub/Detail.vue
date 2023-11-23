<template>
  <main id="cont">
    <div class="cont">
      <div class="prd-detail-wrap">
        <!-- 왼쪽 상품 이미지 -->
        <div class="detail-img">
          <img src="" alt="" />
        </div>

        <!-- 오른쪽 상품 정보 -->
        <div class="prd-detail">
          <div class="detail-inner">
            <div class="detail-ctg">카테고리</div>
            <div class="detail-flex">
              <div class="detail-name">이름</div>
              <div class="detail-price">가격</div>
            </div>
            <ul class="detail-size">
              <li>
                <div>
                  <img class="detail-size-img" src="" />
                  <span>사이즈ml</span>
                </div>
              </li>
            </ul>
            <div class="detail-desc">향 설명</div>
            <div class="detail-summary">향 요약</div>
          </div>

          <!-- 장바구니 담기 버튼 -->
          <div class="cart-btn-bx">
            <button class="cart-btn">장바구니 담기</button>
          </div>

          <!-- 정보...? -->
          <div class="info-wrap">
            <!-- 온라인 혜택 설명 -->
            <div class="info-benefit">
              <div>
                <button class="info-subject">
                  온라인 혜택
                  <span class="info-arrow">+</span>
                </button>
              </div>
              <div class="info-txt">어쩌고저쩌고</div>
            </div>

            <!-- 배송 & 반품 설명 -->
            <div class="info-delivery">
              <div>
                <button class="info-subject">
                  배송, 반품
                  <span class="info-arrow">+</span>
                </button>
              </div>
              <div class="info-txt">어쩌고저쩌고</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      perfumeHandData: Array,
      tubeHandData: Array,
      sanitizerData: Array,
    };
  },
};
</script>

<style>
@import '../../assets/css/sub/detail.css';
</style>
