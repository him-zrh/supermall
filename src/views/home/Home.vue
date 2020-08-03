<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>

    <ul>
      <li>1</li>
      <li>0</li>
      <li>2</li>
      <li>5</li>
      <li>5</li>
      <li>7</li>
      <li>6</li>
      <li>4</li>
      <li>2</li>
      <li>7</li>
      <li>1</li>
      <li>0</li>
      <li>2</li>
      <li>5</li>
      <li>5</li>
      <li>7</li>
      <li>6</li>
      <li>4</li>
      <li>2</li>
      <li>7</li>
      <li>1</li>
      <li>0</li>
      <li>2</li>
      <li>5</li>
      <li>5</li>
      <li>7</li>
      <li>6</li>
      <li>4</li>
      <li>2</li>
      <li>7</li>
      <li>1</li>
      <li>0</li>
      <li>2</li>
      <li>5</li>
      <li>5</li>
      <li>7</li>
      <li>6</li>
      <li>4</li>
      <li>2</li>
      <li>7</li>
      <li>1</li>
      <li>0</li>
      <li>2</li>
      <li>5</li>
      <li>5</li>
      <li>7</li>
      <li>6</li>
      <li>4</li>
      <li>2</li>
      <li>7</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue"

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>