<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" :key="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default: {}
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  }
};
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}

.goods-item img {
    width: 100%;
    border-radius: 5px;
}

.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
    /* padding-top: 15px; */

}

.goods-info .collect {
    position: relative;
    /* padding-top: 13px; */
}

.goods-info .collect::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -14px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>