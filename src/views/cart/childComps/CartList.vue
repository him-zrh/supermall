<template>
  <div class="cart-list">
    <div>
    <scroll class="content" v-if="cartList.length">
      <cart-list-item v-for="(item, index) in cartList"
                      :key="index"
                      :item-info="item"
                      @delCart="delCart(index)">
      </cart-list-item>
    </scroll>
    <div class="empty" v-else>购物车竟然是空的</div>
    </div>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    delCart(index) {
      this.cartList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.cart-list {
  height: 100%;
  background-color: rgba(248, 248, 248, 0.479);
}

.content {
  position: absolute;
  top: 43px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.empty {  
  position: absolute;
  top: 240px;
  left: 120px;
  color: rgba(133, 133, 133, 0.76);
}
</style>