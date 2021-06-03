<script>
import axios from 'axios'
import { onMounted, reactive } from '@vue/runtime-core';
import { useRouter } from 'vue-router'
export default {
  setup() {
    const courseList = reactive({data:{}})
    const router = useRouter()


    const gotoNewRouter = (id) => {
      // router-link 以外的做法
      router.push({path:`/course/${id}`})
    }

   // 在 DOM 載入時 get api
    onMounted(()=>{
      axios.get('https://vue-lessons-api.herokuapp.com/courses/list')
      .then(res=>{
        courseList.data = res.data
        console.log(courseList.data)
      })
    })

    return {courseList,gotoNewRouter};
  },
};
</script>
<template>
  <div id="courses">
    <a class="card" v-for="item in courseList.data" :key="item.id" @click="gotoNewRouter(item.id)">
      <img :src="item.photo" alt="" />
      <div class="content">
        <h1>{{item.name}}</h1>
        <div class="teacher-box">
          <div class="teach-img">
            <img class="teacher" :src="item.teacher.img" alt="" />
            <p>{{item.teacher.name}}</p>
          </div>
          <h2>NTD: {{item.money}}</h2>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
#courses {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
a.card {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 318px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background-color: rgb(231, 231, 231);
  &:hover {
    opacity: 1;
  }
  > img {
    margin-right: 10px;
  }
  .content {
    > h1 {
      font-size: 14px;
      text-align: left;
    }
    .teacher-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      > h2 {
        font-size: 13px;
      }
      .teach-img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > img {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
