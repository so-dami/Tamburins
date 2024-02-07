<template>
  <div class="cart-black-bg" :class="cartClick == true ? 'black-bg-on' : ''">
    <div class="cart-wrap cart-white-bg" :class="cartClick == true ? 'white-bg-on' : ''">
      <!-- 장바구니 닫기 버튼 -->
      <button type="button" class="cart-close-btn btn-style pointer" @click="$emit('closeCart')">
        <font-awesome-icon icon="fa-solid fa-xmark" size="lg" style="color: #000000" />
      </button>
      <div class="cart-heading-wrap">
        <h2 class="cart-heading-txt">장바구니</h2>
      </div>

      <!-- 장바구니 정보 -->
      <div class="table-container">
        <div class="table-box">
          <table>
            <colgroup>
              <col class="col-name" />
              <col class="col-price" />
              <col class="col-quantity" />
              <col class="col-delete" />
            </colgroup>
            <!-- <thead>
              <tr>
                <th>상품</th>
                <th>상품 금액</th>
                <th>수량</th>
                <th></th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="(cartLocal, i) in cartLocal" :key="i">
                <td>
                  <div class="cart-img-flex">
                    <div class="cart-item-img-box">
                      <img
                        class="cart-item-img pointer"
                        :src="require(`../../assets/image/prd/thumbnail/${cartLocal['img']}`)"
                        :alt="`${cartLocal['name']}`"
                      />
                    </div>
                    <div>{{ cartLocal['name'] }}</div>
                  </div>
                </td>
                <td>
                  {{
                    Number(cartLocal['price'])
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </td>
                <td>
                  <div class="cart-quantity-flex">
                    <button
                      type="button"
                      class="cart-item-btn pointer"
                      @click="
                        () => {
                          if (cartLocal['quantity'] > 1) {
                            cartLocal['quantity']--;
                            $emit('cartMinus', Number(cartLocal['price']));
                          }
                          quantityClick(i);
                        }
                      "
                    >
                      -
                    </button>
                    <div>{{ cartLocal['quantity'] }}</div>
                    <button
                      type="button"
                      class="cart-item-btn pointer"
                      @click="
                        () => {
                          cartLocal['quantity']++;
                          quantityClick(i);
                          $emit('cartPlus', Number(cartLocal['price']));
                        }
                      "
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button type="button" class="cart-item-del-btn btn-style pointer" @click="itemDelete(i)">
                    <font-awesome-icon icon="fa-regular fa-trash-can" style="color: #535353" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="cart-payment-wrap">
        <!-- 쇼핑백 추가 -->
        <div class="shoppingbag-ask payment-flex">
          <div class="shoppingbag-ask-box">
            <div>
              <span class="shoppingbag-ask-txt">쇼핑백 추가하기</span>
              <button type="button" class="shoppingbag-ask-help btn-style pointer">
                <font-awesome-icon icon="fa-solid fa-circle-question" style="color: #535353" />
              </button>
            </div>
            <div class="shoppingbag-tip">
              <p>유료 쇼핑백은 구매한 제품의 개수만큼 구매 가능합니다.</p>
              <p>추천 쇼핑백 사이즈는 제품 상세페이지에서 확인하실 수 있습니다.</p>
            </div>
          </div>
          <div>
            <button type="button" class="shoppingbag-plus-btn btn-style pointer">+</button>
          </div>
        </div>
        <!-- 결제 정보 -->
        <div class="payment-mt">
          <div class="payment-flex">
            <div>주문금액</div>
            <div>
              {{
                Number(total)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}원
            </div>
          </div>
          <div class="payment-flex payment-mt">
            <div class="shipping-wrap">
              <div>배송비</div>
              <div class="shipping-free">3만원 이상 구매 시 무료배송</div>
            </div>
            <div v-if="total < 30000 && total != 0">
              {{ shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}원
            </div>
            <div v-if="total >= 30000 || total == 0">0원</div>
          </div>
          <div class="payment-total payment-flex payment-mt">
            <div>총 주문금액</div>
            <div v-if="total < 30000 && total != 0">
              {{
                Number(total + shippingFee)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}원
            </div>
            <div v-if="total >= 30000 || total == 0">
              {{
                Number(total)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}원
            </div>
          </div>
        </div>
        <!-- 결제하기 -->
        <div class="payment-btn-box payment-mt">
          <button type="button" class="payment-btn pointer">결제하기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cart',
  data() {
    return {
      shippingFee: 3000,
    };
  },
  props: {
    prdData: Array,
    cartLocal: Array,
    cartClick: Boolean,
    total: Number,
  },
  methods: {
    quantityClick(a) {
      let newVal = JSON.parse(localStorage.getItem('cart'));
      newVal[a]['quantity'] = this.cartLocal[a]['quantity'];
      localStorage.setItem('cart', JSON.stringify(newVal));
    },
    itemDelete(a) {
      let delVal = JSON.parse(localStorage.getItem('cart')).filter((value) => {
        return value['id'] != this.cartLocal[a]['id'];
      });
      localStorage.setItem('cart', JSON.stringify(delVal));

      // 한 번에 데이터를 전송할 수 있는 방법이 없나...
      this.$emit('itemDelete1', JSON.parse(localStorage.getItem('cart')));
      this.$emit('itemDelete2', this.cartLocal[a]['quantity'] * this.cartLocal[a]['price']);
      this.$emit('itemDelete3', (this.cartLocal[a]['quantity']));
    },
  },
};
</script>
<style>
@import '../../assets/css/sub/cart.css';
</style>
