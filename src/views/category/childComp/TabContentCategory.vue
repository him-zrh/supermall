<template>
  <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a href="#">
        <img :src="item.image" class="item-img" alt />
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridview/GridView.vue";

export default {
  name: "TabContentCategory",
  components: {
    GridView,
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>