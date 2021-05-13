<script>
import { useFetchs } from '../composition-api'
export default {
  setup() {
    const { isLoad, FetchData, errMsg } = useFetchs('https://vue-lessons-api.herokuapp.com/photo/list')

    return { isLoad, FetchData, errMsg };

  },
};
</script>

<template>
  <div>
    <!-- 非同步會有的三個狀態 -->
    <!-- 1.載入圖案 -->
    <img v-if="!isLoad" class="loading" src="../assets/load.gif" alt="" />
    <!-- 2.錯誤 -->
    <h1 v-if="errMsg">ERROR:{{errMsg}}</h1>
    <!-- 3.資料 -->
    <div v-if="isLoad" class="imgBlock">
      <img v-for="item in FetchData.data" :key="item.url" :src="item.url" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
