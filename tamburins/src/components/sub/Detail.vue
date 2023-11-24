<template>
  <main id="cont">
    <div class="cont">
      <div class="prd-detail-wrap">
        <!-- 왼쪽 상품 이미지 -->
        <div class="detail-prd-img-bx">
          <img
            class="detail-img"
            src="../../assets/image/prd/hand/detail/prd_hand_perfumehand_detail_0_0.jpg"
            :alt="`${perfumeHandData['name']}`"
          />
          <img
            class="detail-img"
            src="../../assets/image/prd/hand/detail/prd_hand_perfumehand_detail_0_1.jpg"
            :alt="`${perfumeHandData['name']}`"
          />
          <img
            class="detail-img"
            src="../../assets/image/prd/hand/detail/prd_hand_perfumehand_detail_0_2.jpg"
            :alt="`${perfumeHandData['name']}`"
          />
        </div>

        <!-- 오른쪽 상품 정보 -->
        <div class="detail-prd-info-bx">
          <div class="detail-prd-info-inner">
            <div class="detail-ctg">퍼퓸 핸드</div>
            <div class="detail-flex">
              <div class="detail-name">퍼퓸 쉘 엑스 카모</div>
              <div class="detail-price">32,000원</div>
            </div>
            <ul class="detail-size">
              <li>
                <div class="detail-size-img-bx">
                  <img class="detail-size-img" src="../../assets/image/prd/hand/size/prd_hand_perfumehand_size_0.jpg" />
                  <span class="detail-size-txt">30ml</span>
                </div>
              </li>
            </ul>
            <div class="detail-desc">진득한 카모마일 | 부드러운 나무결 | 머스크</div>
            <div class="detail-summary">
              꿀처럼 진득하고 달콤한 카모마일과 씁쓸한 클라리세이지의 허브 향이 오묘한 조화를 이루어 중독성 있는 향을
              선사합니다. 자칫 차갑게 느껴질 수 있는 촉촉한 이끼의 느낌을 우아하고 부드러운 나무결의 블론드 우드와
              따뜻한 머스크로 감싸주어 당신의 지친 마음에 특별하고 작은 위안을 선물합니다.
            </div>

            <!-- 장바구니 담기 버튼 -->
            <div class="cart-btn-bx">
              <button class="cart-btn">장바구니 담기</button>
            </div>

            <!-- 정보...? -->
            <div class="info-wrap">
              <!-- 온라인 혜택 설명 -->
              <div class="info-bx">
                <div class="info-subject-bx">
                  <span class="info-subject"> 온라인 단독 혜택 </span>
                  <span class="info-arrow">+</span>
                </div>
              </div>
              <div class="info-txt">어쩌고저쩌고</div>

              <!-- 배송 & 반품 설명 -->
              <div class="info-bx mbt bdbt">
                <div class="info-subject-bx">
                  <span class="info-subject"> 배송 & 반품 </span>
                  <span class="info-arrow">+</span>
                </div>
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
  methods: {},
};
</script>

<style>
@import '../../assets/css/sub/detail.css';
</style>
