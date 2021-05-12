<script>
import { useMousePosition } from '../composition-api'
export default {
  setup() {

    // 把 x , y 從 MousePosition()解構出來
    const { x,y } = useMousePosition()
    // 丟到模板上
    return { x,y };
  },
};
</script>

<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x:{{ x }} ,y:{{ y }}</h2>
  </div>
</template>

<style lang="scss"></style>
