<template>
<!-- 計時器數字 -->
  <h1>{{ num }}</h1>
</template>

<script>
import { ref,reactive, onMounted } from 'vue'
export default {
    emits:{
    TimeOut: (num) => {
        if(num.value === 0){
            return true
        } else {
            return false
        }
    }
    },
    setup(props,{ emit }){
        const num = ref(5)
        let timer = null

            // DOM 元素 render 後 
        onMounted(()=>{
            // 每秒--
           timer = setInterval(()=>{
                // 每秒遞減
                num.value--
                if(num.value === 0){
                    clearInterval(timer)
                    // 時間到之後，回傳事件
                    // emit('事件名稱',回傳值)
                    emit('TimeOut',num)
                }
            },1000)
        })

        return{
            num 
        }
    }
}
</script>

<style scoped>
h1{
    color: antiquewhite;
    font-size: 39px;
    position: fixed;
    top:50px;
    left: 50px;

}
</style>