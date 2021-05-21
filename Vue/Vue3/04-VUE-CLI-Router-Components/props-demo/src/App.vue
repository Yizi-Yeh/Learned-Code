<script>
import { ref } from 'vue'
import { TitleBar } from '@/components/TitleBar.vue'
import { listItem } from '@/components/listItem.vue'
import { TimerBox } from '@/components/TimerBox.vue'
export default {
  components: {
     TitleBar,
     listItem,
     TimerBox

  },

  setup() {

   const HandListShouw = () => {
         isOpen.value = !isOpen.value
     }

   const isOpen = ref(true)

   const HandCallBackFn  = (num) => {
      console.log(num)
    }

    const handTimeOut  = (num) => {
      console.log('time is over',num.value)
    }

    return {
     isOpen,HandListShouw,HandCallBackFn,handTimeOut
    };
  },
};
</script>

<template>
<TitleBar :HandListShouw="HandListShouw" />
<listItem :isOpen="isOpen" />
<TimerBox @TimeOut="handTimeOut"/>
</template>

<style lang="scss">
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      html,
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: slategray;
      }
      #app {
        width: 400px;
        overflow: hidden;
        border: 1px solid #42b983;
        border-radius: 10px;
      }
</style>
