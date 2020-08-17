<template>
  <div class="botton-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" 
                    class="check-button" 
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="check-price">合计:{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">
        去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartBottonBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return "￥" + this.cartList.filter((item) => {
          return item.checked
      }).reduce((preValue, item) => {
          return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
        return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
        //全选功能
        if(this.cartList.length === 0) return false
        //1.使用filter
        // return !(this.cartList.filter(item => !item.checked).length)

        //2.使用find
        // return !this.cartList.find(item => !item.checked)

        //3.普通遍历
        for(let item of this.cartList) {
            if(!item.checked) {
                return false
            }
        }
        return true
    }
  },
  methods: {
      checkClick() {
          if(this.isSelectAll) {
              this.cartList.forEach(item => item.checked = false)
          } else {
              this.cartList.forEach(item => item.checked = true)
          }
      },
      calcClick() {
        if(!this.isSelectAll && !this.checkLength) {
          this.$toast.show('请选择购买的商品', 2000)
        } 
      }
  }
};
</script>

<style scoped>
.botton-bar {
  height: 40px;
  background-color: rgb(219, 219, 219);
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  line-height: 40px;
  display: flex;
  font-size: 15px;
  font-weight: 500;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 55px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 3px;
}

.check-price {
  margin-left: 15px;
  font-weight: 600;
  flex: 1;
}

.calculate {
    background-color: red;
    width: 100px;
    color:#fff;
    text-align: center;
}

</style>