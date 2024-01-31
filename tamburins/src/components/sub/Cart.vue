<template>
  <main id="cont">
    <div class="cont">
      <div class="cart-black-bg">
        <div class="cart-wrap cart-white-bg">
          <div class="cart-heading-wrap">
            <h2 class="cart-heading-txt">장바구니</h2>
          </div>

          <!-- 장바구니 정보 -->
          <table>
            <colgroup>
              <col class="col-name" />
              <col class="col-price" />
              <col class="col-quantity" />
              <col class="col-delete" />
            </colgroup>

            <thead>
              <tr>
                <th>상품</th>
                <th>상품 금액</th>
                <th>수량</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div class="cart-img-flex">
                    <div class="cart-item-img-box">
                      <img
                        class="cart-item-img pointer"
                        src="../../assets/image/prd/thumbnail/prd_candle_perfumecandle_1.jpg
                      "
                        alt="퍼퓸 캔들 홀리메탈"
                      />
                    </div>
                    <div>퍼퓸 캔들 홀리메탈</div>
                  </div>
                </td>
                <td>208,000원</td>
                <td>
                  <div class="cart-quantity-flex">
                    <button type="button" class="cart-item-btn pointer">-</button>
                    <div>1</div>
                    <button type="button" class="cart-item-btn pointer">+</button>
                  </div>
                </td>
                <td>
                  <button type="button" class="cart-item-del-btn pointer">
                    <font-awesome-icon icon="fa-regular fa-trash-can" style="color: #535353" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="cart-img-flex">
                    <div class="cart-item-img-box">
                      <img
                        class="cart-item-img pointer"
                        src="../../assets/image/prd/thumbnail/prd_candle_perfumecandle_4.jpg
                      "
                        alt="퍼퓸 캔들 홀리메탈"
                      />
                    </div>
                    <div>퍼퓸 캔들 네 가지 향 세트</div>
                  </div>
                </td>
                <td>1,000,000원</td>
                <td>
                  <div class="cart-quantity-flex">
                    <button type="button" class="cart-item-btn pointer">-</button>
                    <div>1</div>
                    <button type="button" class="cart-item-btn pointer">+</button>
                  </div>
                </td>
                <td>
                  <button type="button" class="cart-item-del-btn pointer">
                    <font-awesome-icon icon="fa-regular fa-trash-can" style="color: #535353" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="cart-payment-wrap">
            <!-- 쇼핑백 추가 -->
            <div class="shoppingbag-ask payment-flex">
              <div class="shoppingbag-ask-box">
                <span class="shoppingbag-ask-txt">쇼핑백 추가하기</span>
                <button type="button" class="shoppingbag-ask-help pointer">
                  <font-awesome-icon icon="fa-solid fa-circle-question" style="color: #535353" />
                </button>
              </div>
              <div>
                <button type="button" class="shoppingbag-plus-btn pointer">+</button>
              </div>
            </div>
            <!-- 결제 정보 -->
            <div>
              <div class="payment-flex">
                <div>주문금액</div>
                <div>1,208,000원</div>
              </div>
              <div class="payment-flex">
                <div>배송비</div>
                <div>0원</div>
              </div>
              <div class="payment-total payment-flex payment-flex">
                <div>총 주문금액</div>
                <div>1,208,000원</div>
              </div>
            </div>
            <!-- 결제하기 -->
            <div class="payment-btn-box">
              <button type="button" class="payment-btn pointer">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Cart',
  data() {
    return {};
  },
  props: {
    prdData: Array,
  },
  methods: {},
};
</script>
<style>
@import '../../assets/css/sub/cart.css';
</style>
