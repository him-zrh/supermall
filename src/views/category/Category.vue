<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>

      <scroll class="Scroll" :data="[categoryDate]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <tab-control :titles="['综合', '新品', '销量']" ></tab-control>
          <!-- <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail> -->
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import TabMenu from "./childComp/TabMenu.vue";
import TabContentCategory from "./childComp/TabContentCategory.vue";
// import TabContentDetail from "./childComp/TabContentDetail.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import {getCategory, getSubcategory, getCategoryDetail} from "network/category";
// import {POP, SELL, NEW} from "common/const";
// import {tabControlMixin} from "common/mixin";

export default {
  name: "Category",
  components: {
    TabMenu,
    TabContentCategory,
    // TabContentDetail,
    NavBar,
    Scroll,
    TabControl,
  },
  // mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryDate: {},
      currentIndex: -1
    };
  },
  created() {
    // 请求分类数据
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryDate[this.currentIndex].subcategories;
    },
    // showCategoryDetail() {
    //   if (this.currentIndex === -1) return [];
    //   return this.categoryDate[this.currentIndex].categoryDetail[this.currentType]
    // },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 获取分类数据
        this.categories = res.data.category.list;
        // 初始化每一个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryDate[i] = {
            subcategories: {},
            // categoryDetail: {
            //     'pop': [],
            //     'new': [],
            //     'sell': []
            // }
          };
        }
        // 请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryDate[index].subcategories = res.data;
        this.categoryDate = { ...this.categoryDate };
        // this._getCategoryDetail(POP);
        // this._getCategoryDetail(SELL);
        // this._getCategoryDetail(NEW);
      });
    },
    _getCategoryDetail(type) {
      // 获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 发送请求，传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 将获取的数据报存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
}

.content {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 49px;
  display: flex;
  overflow: hidden;
}

.Scroll {
  /* position: relative; */
  /* width: 275px; */
  /* top: 44px; */
  /* bottom: 49px; */
  /* right: 0; */
  /* overflow: hidden; */
  height: 100%;
  flex: 1;
}
</style>