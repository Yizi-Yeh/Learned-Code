<script>
import { onMounted, reactive } from '@vue/runtime-core';
// useRoute方法：包含所有網址上的參數資料，都會在此
// 利用 useRoute方法取出 id
import { useRoute } from "vue-router"
import axios from 'axios'
export default {

  setup() {

      // const router 使用 useRoute()的方法
      const route = useRoute()

      const courses = reactive({data:{}})

      onMounted(()=>{
        // 包含所有跟 route 相關的資料
        console.log(route.params.id)

        axios.get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`).then(res=>{console.log(res)
        courses.data = res.data.data[0]
        console.log(res.data.data[0])
        })
      })
    
    return {courses};
  },
};
</script>
<template>
  <div>
    <div>
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
    <h1></h1>
  </div>
</template>

<style></style>
