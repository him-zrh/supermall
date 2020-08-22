<template>
  <div class="goods">
    <!-- <grid-view> -->
      <goods-list-item v-for="(item, index) in goods" :goods-item="item" :key="index"></goods-list-item>
    <!-- </grid-view> -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
// import GridView from "components/common/gridview/GridView.vue"

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
    // GridView
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>