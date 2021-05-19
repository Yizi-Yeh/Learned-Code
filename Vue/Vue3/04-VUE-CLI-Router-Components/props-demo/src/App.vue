<script>
import { ref } from 'vue'
import { TitleBar } from '@/components/TitleBar.vue'
import { listItem } from '@/components/listItem.vue'
import { EmitTest } from '@/components/EmitTest.vue'
export default {
  components: {
     TitleBar,
     listItem,
     EmitTest
  },

  setup() {

   const HandListShouw = () => {
         isOpen.value = !isOpen.value
     }

   const isOpen = ref(true)

   const HandCallBackFn  = (num) => {
      console.log(num)
    }

    return {
     isOpen,HandListShouw,HandCallBackFn
    };
  },
};
</script>

<template>
<TitleBar :HandListShouw="HandListShouw" />
<listItem :isOpen="isOpen" />
<EmitTest @CallBack="HandCallBackFn"/>
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
