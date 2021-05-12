<script>
import { useMousePosition } from '../composition-api'
export default {
  setup() {

    // 當透過解構取出 reactive 中的值時，會變成單純的變數
    // 不具備資料綁定的功能
    // 等同於任意變數 
    // 改為 pos

    // 透過 toRefs 方法，讓解構後的值具備綁定資料的效果
    const { x,y,name } = useMousePosition()

    return { x,y,name } 
  },
};
</script>

<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x:{{ x }} ,y:{{ y }} {{ name }}</h2>
  </div>
</template>

<style lang="scss"></style>
