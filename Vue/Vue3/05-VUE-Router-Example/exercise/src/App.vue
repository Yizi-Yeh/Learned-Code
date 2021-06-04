
<script>
import { ref,watch } from 'vue'
import { useRoute } from 'vue-router'
export default {

  setup() {
    const routerArr = ['/','/about','/course']
    const route = useRoute()
    const idx = ref(0)

    // 監控路由改變的時候
    // 使用 useRoute方法，抓出網址相關參數 => route.path
    // 監控網址變化，執行某事
    watch(()=>route.path,()=>{
      routerArr.forEach((item,index)=>{
        // .substr => 拿掉第一個字串 /
        // .split => 去除斜線，將斜線前後重組為arr
        // /courses/286 => substr() => courses/286 => split() => ['courses','286']
        const rp = route.path.substr(1).split('/')[0]
        console.log(rp)
        if(rp === item){
          idx.value = index
          console.log(index)
        }
      })
    })

    return { routerArr,idx };
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/" :class="{active : idx === 0}"> Home </router-link>
    |
    <router-link to="/about" :class="{active : idx === 1}"> About </router-link>
    |
    <router-link to="/course" :class="{active : idx === 2}"> Course </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
}
// 可透過 router-link-active 改變路由顏色
.router-link-active{
  color: #42b983;
}
</style>
