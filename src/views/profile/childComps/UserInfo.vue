<template>
  <div class="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <div class="privateImage left">
          <img src="~assets/img/profile/avatar.svg" alt />
        </div>
      </slot>
      <div class="login-info left">
          <slot name="user-nickname">
              <div>登录/注册</div>
          </slot>
          <div class="phone">
              <span class="icon-mobile">
                  <img src="~assets/img/profile/phone.svg" alt="">
              </span>
              <slot name="user-phone">暂无绑定手机号</slot>
          </div>
      </div>
      <div class="arrow right">
          <img src="~assets/img/profile/back1.svg" alt/>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
.user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
}

.privateImage {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
}

.privateImage img {
    width: 60px;
    height: 60px;
}

.left {
    float: left;
}

.login-info {
    color: #fff;
    margin: 10px 0 0 10px;
}

.phone {
    position: relative;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
}

.icon-mobile {
    position: absolute;
    left: -20px;
    top: -5px;
}

.icon-mobile img {
    width: 22px;
    height: 25px;
}

.arrow {
    position: relative;
    top: 18px;
}
</style>