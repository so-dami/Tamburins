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
              <div class="info-txt">
                탬버린즈는 고객님들께 빠른 배송 및 반품과 최고의 경험을 제공하기 위해 언제나 세심한 주의를 기울입니다.
                고객님을 위한 익스클루시브 서비스를 경험해보세요.
                <br />
                <br />
                * 회원가입 및 카카오톡 플러스 친구 추가 시 적립금 3,000원 지급
                <br />
                * 구매 금액의 2% 적립
                <br />
                * 생일 축하 5,000 포인트 혜택 (1년 이내 구매 이력 있을 시)
              </div>

              <!-- 배송 & 반품 설명 -->
              <div class="info-bx">
                <div class="info-subject-bx">
                  <span class="info-subject"> 배송 & 반품 </span>
                  <span class="info-arrow">+</span>
                </div>
              </div>
              <div class="info-txt">
                3만원 이상 구매하실 경우 배송비는 무료입니다.
                <br />
                <br />
                <span>주문일로부터 1-2 영업일 이내 출고됩니다.</span>
                <br />
                <br />
                배송은 지역 택배사 사정에 따라 약간의 지연이 생길 수 있습니다. 배송이 시작되면 구매자에게는 이메일,
                수령인에게는 카카오톡으로 배송 정보를 전송해 드립니다.
                <br />
                - CJ대한통운(<a href="https://www.cjlogistics.com" target="_blank">https://www.cjlogistics.com</a>)
                <br />
                <br />
                * 상품 혹은 증정품의 포장(랩핑)을 개봉 및 훼손한 경우 반품이 불가합니다.
                <br />
                * 단순 변심 또는 주문 실수로 인한 교환이 불가합니다. 신중한 구매 부탁드립니다.
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
