<template>
  <main id="cont">
    <div class="cont">
      <div class="cart-black-bg">
        <div class="cart-wrap cart-white-bg">
          <div class="cart-heading-wrap">
            <h2 class="cart-heading-txt">장바구니</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>상품</th>
                <th>금액</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="cart-item-img-box">
                    <img class="cart-item-img" src="" alt="" />
                  </div>
                  <div class="cart-item-name">퍼퓸 밤 버가샌달</div>
                </td>
                <td class="cart-item-price">46,500</td>
                <td class="cart-item-count-box">
                  <button class="cart-item-btn-minus">-</button>
                  <p class="cart-item-quantity">1</p>
                  <button class="cart-item-btn-plus">+</button>
                </td>
              </tr>
            </tbody>
          </table>
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
