<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>

    <UserInfo></UserInfo>

    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item border">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <list-view class="order-list"></list-view>
  </div>
</template>

<script>
import UserInfo from "./childComps/UserInfo.vue";
import ListView from "./childComps/ListView.vue";

import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Profile",
  components: {
    UserInfo,
    ListView,
    NavBar,
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  box-shadow: 0 1px 1px rgba(150, 150, 150, 0.192);
  position: relative;
  z-index: 9;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  text-align: center;
}

.border {
  border-left: 1px solid rgba(207, 207, 207, 0.548);
  border-right: 1px solid rgb(207, 207, 207, 0.548);
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

.order-list{
  margin-top: 12px;
}
</style>