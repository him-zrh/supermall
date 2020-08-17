<template>
  <div id="list">
    <div class="item">
      <span class="icon">
        <img src="~assets/img/profile/message.svg" alt />
      </span>
      <div class="info">我的消息</div>
    </div>
    <div class="item">
      <span class="icon">
        <img src="~assets/img/profile/pointer.svg" alt />
      </span>
      <div class="info">积分商城</div>
    </div>
    <div class="item">
      <span class="icon">
        <img src="~assets/img/profile/vip.svg" alt />
      </span>
      <div class="info">会员卡</div>
    </div>
    <div class="item">
      <span class="icon">
        <img src="~assets/img/profile/cart.svg" alt />
      </span>
      <div class="info">我的购物车</div>
    </div>
    <div class="item">
      <span class="icon">
        <img src="~assets/img/profile/shopping.svg" alt />
      </span>
      <div class="info">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
};
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .item {
  height: 44px;
  line-height: 44px;
  position: relative;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
}

.icon img {
  width: 24px;
  height: 24px;
  position: relative;
  left: 13px;
  top: 7px;
}

.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}
</style>