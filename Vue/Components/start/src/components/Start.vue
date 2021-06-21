<template>
  <ul id="start-box">
    <li v-for="(i, idx) in 5" :key="i">
      <span :style="{ width: StartWidth(idx) }">
      </span>
    </li>
  </ul>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  props: {
    msg: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const starArr = reactive([])

    const StartWidth = idx => {
      const w = starArr[idx] * 100
      return `${w}%`
    }

    const initStar = () => {
      // 砍掉小數點 | 0 =>取正整數
      const Int = props.msg | 0
      // 取小數點
      const Ponit = props.msg.toFixed(1).split('.')[1]

      for (let s = 0; s < Int; s++) {
        starArr.push(1)
      }
      if (Ponit === '0') return
      starArr.push(+`0.${Ponit}`)
    }

    onMounted(() => {
      initStar()
    })

    return { props, starArr, StartWidth }
  }
}
</script>

<style lang="scss">
// 標籤+id表示
ul#start-box {
  display: flex;
  // 彈性項目對齊主軸"頭部"，如果可以換行，最後一個則對齊尾巴；剩下的塞滿並且平均分配空隙
  justify-content: space-between;
  // 置中
  margin: 0 auto;
  width: 180px;
  padding: 0;
  > li {
    display: block;
    width: 30px;
    height: 30px;
    background-image: url("../assets/star-b.png");
    // background-size: 寬度 高度;
    // background-size: 100% 100%; 表示背景圖片的尺寸要跟容器一樣大
    background-size: auto 100%;
    margin: 0 3px;
    > span {
      display: block;
      width: 0%;
      height: 100%;
      background-image: url("../assets/star-y.png");
      background-size: auto 100%;
    }
  }
}
</style>
