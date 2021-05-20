// 案例：只有 EmitTest 中才有資料，但父層 App.vue 需要拿到資料
// 1.封裝API應用，會需要component去打api將資料抓回來
// 2.串接 socket ，資料從 socket 裡面回來
// 3.使用 setinterval/setimeout，觸發此事件
// 需要將從子組件將資料往上回傳，
<template>
  <h1>{{num}}</h1>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    // 傳遞資料上，需注意的事
    // 透過props方法，聲明要接收的參數props
    props:{},

    // 往上傳遞，一樣要聲明要把哪些 emits 往上傳出
    // 可使用陣列的方式
    emits:['CallBack'],
    // 若想先做驗證，可使用物件
    emits:{
    // 將 CallBack 作為驗證函式
    CallBack: () => {
    // 先執行驗證函式，再 callback 到父組件
        return nam.value ===  0
    }
    },


    // 2.改以透過解構方式
    setup( props,{ emit } ){
        onMounted(()=>{
           emit('CallBack',num)
        })
    },

    // setup fucntion 中的第二個參數為 context
    // context為物件，其中包含 1.attrs 2.context 3.slots
    // 而我們要使用的即為2.context 
    // context 中 emit
    setup(props,context){
        const num = ref(0)

        onMounted(()=>{
            // object { } , 1.attrs 2.emit 3.slots
            // 我們需要使用 context function 將資料回傳
            console.log(context)
            // context.emit('父層要接收事件的名稱',要回傳的內容)
            context.emit('CallBack',num)
        })

        return { num }
    }
}
</script>

<style>

</style>