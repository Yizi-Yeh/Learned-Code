<script>
import { onMounted, onUnmounted, reactive,ref } from '@vue/runtime-core';
// useRoute方法：包含所有網址上的參數資料，都會在此
// 利用 useRoute方法取出 id
// useRouter方法：包含操作網址用的函式
import { useRoute,useRouter  } from "vue-router"
import axios from 'axios'
export default {

  setup() {

      // const router 使用 useRoute()的方法
      const route = useRoute()
      const router = useRouter()

      const isError = ref(false)

      const courses = reactive({data:{}})

      // 因為之後會改變變數值，所以使用 let
      let timer = null

      onMounted(()=>{
        // 包含所有跟 route 相關的資料
        console.log(route.params.id)

        axios
        .get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
        .then(res=>{console.log(res)
        courses.data = res.data.data[0]
        console.log(res.data.data[0])
        })
        .catch(error=>{
          isError.value = true
          courses.data['error_message'] = error.response.data.error_message
          console.log(error.response)
           // 離開頁面時需要清除倒數計時器，不然開啟其他分頁依然會倒數&轉導頁面
         timer = setTimeout(()=>{
            // 利用程式轉導頁面
            router.push('/course')
            // 物件形式寫法：比較精確的寫法，後面可帶其他參數
            router.push({ path:'/course' })
            // 回上一頁
            // router.go(-1) => 往上一頁去執行
            router.go(-1)
          },3000)
        })
      })
    
    // 當離開當頁component時，執行消除計時器
    // 當有使用計時器時，必須要在生命週期 onUnmounted 時清除計時器
    // 組件毀損時，消除計時器
    // onUnmounted, Vue 實體物件被銷毀完畢
    onUnmounted(()=>{
      clearInterval(timer) 
    })

    return {courses,isError,router };
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{courses.data.name}}</h1>
      <h2>NTD:{{courses.data.money}}</h2>
      <img :src="courses.data.photo" alt="" />
      <!-- 先把courses轉為 array，計算它的長度 -->
      <!-- 若要將 Object 的所有 Key 轉成 Array，可使用 Object.keys() -->
      <div v-if="Object.keys(courses.data).length !== 0">
        <!-- 初始化階段時 data 為空，所以無法抓取 -->
        <!-- 在初始化階段隱藏起來，有資料實在假釋，有資料時再顯示 -->
        <img :src="courses.data.teacher.img" alt="" />
        <p>{{courses.data.teacher.name}}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{courses.data['error_message']}}</h1>
  </div>
</template>

<style></style>
