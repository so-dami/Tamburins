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
            <thead>
              <tr>
                <th>상품</th>
                <th>금액</th>
                <th>수량</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="cart-item-img-box pointer">
                    <img
                      class="cart-item-img"
                      src="../../assets/image/prd/thumbnail/prd_candle_perfumecandle_1.jpg
                    "
                      alt="퍼퓸 캔들 홀리메탈"
                    />
                  </div>
                  <div class="cart-item-name">퍼퓸 캔들 홀리메탈</div>
                </td>
                <td class="cart-item-price">83,000</td>
                <td class="cart-item-count-box">
                  <div>
                    <button type="button" class="cart-item-btn pointer">-</button>
                    <p class="cart-item-quantity">1</p>
                    <button type="button" class="cart-item-btn pointer">+</button>
                  </div>
                </td>
                <td>
                  <button type="button" class="cart-item-del-btn pointer">×</button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- 쇼핑백 추가 -->
          <div class="shoppingbag-ask">
            <div class="shoppingbag-ask-box">
              <span class="shoppingbag-ask-txt">쇼핑백 추가하기</span>
              <span class="shoppingbag-ask-help pointer">?</span>
            </div>
            <div>
              <button type="button" class="shoppingbag-plus-btn pointer">+</button>
            </div>
          </div>

          <!-- 결제 정보 -->
          <div>
            <div>
              <div>주문금액</div>
              <div>33,000</div>
            </div>
            <div>
              <div>배송비</div>
              <div>0</div>
            </div>
            <div>
              <div>총 주문금액</div>
              <div>33,000</div>
            </div>
          </div>

          <!-- 결제하기 -->
          <div>
            <button type="button" class="payment-btn pointer">결제하기</button>
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
