<template>
<div id="app">
    <h1>  
    {{ msg }}
    </h1>
    <button @click="handAddInt">Add</button>
</div>
</template>

<script>  
      // Why 使用 vue3?
      // 以往在寫 vue2 時，所有的值都會塞入data(沒給畫面使用的值，同時也會返回到畫面)
      // 拆出要渲染在畫面的資料及使用的變數(什麼資料要給Vue綁定？)
      // 且 vue3 不需要注意this指向

      // 要使用 Vue2 雙向綁定的時候，要將 ref方法 從 Vue 中解構出來
      const { ref } = Vue
      const App = {
      // 利用setup()定義data，再將之return到template
    setup(){
      // 利用 ref方法 實現資料的雙向綁定(因為vue3使用的是Proxy的方法，所以必須.value)
      const msg = ref(0)
      // 在 comptionsAPI 中需要使用 .value的方式做操作
      const handAddInt = ()=> msg.value++
      // 將 msg 返回到模板
      return {  
      // 要使用 data 或 method 皆要放入 return   
         msg
         handAddInt
      }
    }
  }

// 將App物件mount到模板#app
Vue.createApp(App).mount("#app")


export default {

}
</script>


