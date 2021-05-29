<script>
// vuex 中的 useStore 方法
import { useStore } from 'vuex'
import { computed } from 'vue' 

export default {
  setup() {

    // 宣告 useStore 實體
    const store = useStore()
    
    // 先利用 computed 取出 store 中 getters 的值
    // 而不是將整個 store 丟到模板
    // 單一取得 isOpen
    const isOpen = computed(() => {
      return store.getters.isOpen
    })

    const handClickMenu = () => {
     store.dispatch('handMenuOpen')
    };

    return { handClickMenu, isOpen };
  },
};
</script>
<template>
<!--  需要資料控制 open 的開和關 -->
<!-- 動態綁定 class -->
  <div :class="['menu', { open: isOpen }]">
    <a class="closeBtn" @click="handClickMenu">
      <i class="fas fa-times fa-3x"></i>
    </a>
    <ul class="nav">
      <li><a>abous</a></li>
      <li><a>content</a></li>
      <li><a>user</a></li>
      <li><a>address</a></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100%;
  z-index: 20;
  background-color: #fff;
  transition: right 0.3s;
  &.open {
    right: 0px;
  }
  > a.closeBtn {
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  > ul.nav {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50%;
    margin-top: -150px;
    padding: 0;
    > li {
      display: block;
      width: 100%;
      height: 25%;
      > a {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 100%;
        padding-left: 50px;
        line-height: 300%;
        font-size: 22px;
      }
    }
  }
}
</style>
