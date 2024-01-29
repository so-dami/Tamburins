<template>
  <main id="cont">
    <div class="cont">
      <div class="prd-detail-wrap">
        <!-- 왼쪽 상품 이미지 -->
        <div class="detail-prd-img-bx">
          <div v-for="(detailImg, i) in prdData[num]['img']['detailImg']" :key="i">
            <!-- 상품 이미지 -->
            <img
              class="detail-img"
              v-if="prdData[num]['img']['file'] == 'img'"
              :src="require(`../../assets/image/prd/detail/${detailImg}`)"
              :alt="`${prdData[num]['prdInfo']['name']}`"
            />
            <!-- 상품 비디오 -->
            <video
              class="detail-video"
              v-if="prdData[num]['img']['file'] == 'mp4'"
              :src="require(`../../assets/image/prd/detail/${detailImg}`)"
              :alt="`${prdData[num]['prdInfo']['name']}`"
              autoplay
              loop
              muted
            />
          </div>
        </div>

        <!-- 오른쪽 상품 정보 -->
        <div class="detail-prd-info-bx">
          <div class="detail-prd-info-inner">
            <div class="detail-ctg">{{ prdData[num]['cat']['cat2'] }}</div>
            <div class="detail-flex">
              <div class="detail-name">{{ prdData[num]['prdInfo']['name'] }}</div>
              <!-- 사이즈별 상품 가격 -->
              <div class="detail-price" v-if="sizeClick[0] == 1">{{ prdData[num]['prdInfo']['price'][0] }}원</div>
              <div class="detail-price" v-if="sizeClick[1] == 1">{{ prdData[num]['prdInfo']['price'][1] }}원</div>
            </div>
            <ul class="detail-size">
              <li v-for="(sizeImg, i) in prdData[num]['img']['sizeImg']" :key="i">
                <div
                  class="detail-size-img-bx pointer"
                  @click="
                    () => {
                      if (i == 0) {
                        sizeClick[0] = 1;
                        sizeClick[1] = 0;
                      } else {
                        sizeClick[0] = 0;
                        sizeClick[1] = 1;
                      }
                    }
                  "
                >
                  <img
                    class="detail-size-img"
                    :class="sizeClick[i] == 1 ? 'size-show' : ''"
                    :src="require(`../../assets/image/prd/size/${sizeImg}`)"
                  />
                </div>
                <div class="detail-size-txt-bx">
                  <span class="detail-size-txt">{{ prdData[num]['prdInfo']['size'][i] }}</span>
                </div>
              </li>
            </ul>
            <div class="detail-desc">{{ prdData[num]['prdDetail']['desc'] }}</div>
            <div class="detail-summary">{{ prdData[num]['prdDetail']['summary'] }}</div>

            <!-- 장바구니 담기 버튼 -->
            <div class="cart-btn-bx">
              <button class="cart-btn pointer">장바구니 담기</button>
            </div>

            <!-- 정보...? -->
            <div class="info-wrap">
              <!-- 온라인 혜택 설명 -->
              <div
                class="info-bx pointer"
                @click="
                  () => {
                    infoCount[0]++;
                    if (infoCount[0] % 2 == 1) {
                      infoClick[0] = 1;
                    } else {
                      infoClick[0] = 0;
                    }
                  }
                "
              >
                <div class="info-subject-bx">
                  <span class="info-subject"> 온라인 단독 혜택 </span>
                  <span class="info-arrow" v-if="infoClick[0] == 0">+</span>
                  <span class="info-arrow" v-if="infoClick[0] == 1">-</span>
                </div>
              </div>
              <div class="info-txt" :class="infoClick[0] == 1 ? 'info-show' : ''">
                탬버린즈는 고객님들께 빠른 배송 및 반품과 최고의 경험을 제공하기 위해 언제나 세심한 주의를 기울입니다.
                고객님을 위한 익스클루시브 서비스를 경험해보세요.
                <br />
                <br />
                * 회원가입 및 카카오톡 플러스 친구 추가 시 적립금 3,000원 지급
                <br />
                * 구매 금액의 2% 적립
                <br />
                * 생일 축하 5,000P 혜택 (1년 이내 구매 이력 있을 시)
              </div>

              <!-- 배송 & 반품 설명 -->
              <div
                class="info-bx pointer"
                @click="
                  () => {
                    infoCount[1]++;
                    if (infoCount[1] % 2 == 1) {
                      infoClick[1] = 1;
                    } else {
                      infoClick[1] = 0;
                    }
                  }
                "
              >
                <div class="info-subject-bx">
                  <span class="info-subject"> 배송 & 반품 </span>
                  <span class="info-arrow" v-if="infoClick[1] == 0">+</span>
                  <span class="info-arrow" v-if="infoClick[1] == 1">-</span>
                </div>
              </div>
              <div class="info-txt" :class="infoClick[1] == 1 ? 'info-show' : ''">
                30,000원 이상 구매하실 경우 배송비는 무료이며,
                <br />
                <span>주문일로부터 1-2 영업일 이내 출고됩니다.</span>
                <br />
                <br />
                배송은 지역 택배사 사정에 따라 약간의 지연이 생길 수 있습니다. 배송이 시작되면 구매자에게는 이메일,
                수령인에게는 카카오톡으로 배송 정보를 전송해 드립니다.
                <br />
                - 택배사: <a href="https://www.cjlogistics.com/ko/tool/parcel/tracking" target="_blank">CJ대한통운</a>
                <br />
                <br />
                * 상품 혹은 증정품의 포장을 개봉 및 훼손한 경우 반품이 불가합니다.
                <br />
                * 단순 변심 또는 주문 실수로 인한 교환이 불가합니다.
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
      num: this.$route.params.id,
      infoClick: [0, 0],
      infoCount: [0, 0],
      sizeClick: [1, 0],
    };
  },
  props: {
    prdData: Array,
  },
  methods: {
    size() {},
  },
  mounted() {
    // 스크롤 상단 고정
    window.scrollTo(0, 0);
  },
};
</script>

<style>
@import '../../assets/css/sub/detail.css';
</style>
