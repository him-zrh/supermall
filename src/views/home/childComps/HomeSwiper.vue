<template>
  <swiper class="swiper-s">
    <swiper-item v-for="item in banners" :key="item.id">
      <a>
        <img :src="item.image" alt @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
      Swiper,
      SwiperItem
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
};
</script>

<style scoped> 
.swiper-s {
  touch-action: none;
}
</style>