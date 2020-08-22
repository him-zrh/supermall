<template>
    <grid-view>
        <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods-item="item"></goods-list-item>
    </grid-view>
</template>

<script>
import GridView from "components/common/gridview/GridView.vue";
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem
  },
  props: {
      categoryDetail: {
          type: Array,
          default() {
              return {}
          }
      }
  }
};
</script>

<style scoped>
</style>