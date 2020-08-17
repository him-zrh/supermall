<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-botton-bar></cart-botton-bar>
  </div>
</template>

<script>
import CartList from './childComps/CartList.vue'
import CartBottonBar from './childComps/CartBottonBar.vue'

import NavBar from "components/common/navbar/NavBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartList,
    CartBottonBar,
    NavBar
  },
  computed: {
    //两种语法
    //1
    // ...mapGetters(['cartLength', 'cartList']),
    //2
    ...mapGetters({ length: "cartLength"}),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  position: fixed;
  left: 0;
  right: 0;
}
</style>