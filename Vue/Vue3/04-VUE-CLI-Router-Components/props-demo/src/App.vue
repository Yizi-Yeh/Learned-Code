<script>
import propsTest2 from "@/components/propsTest2.vue";

import { reactive, ref } from "vue";
// 放到畫面上
export default {
  components: {
    propsTest2,
  },
  // 父層要傳資料給子組件
  setup() {
  const str = ref('hello world')

  const bool = ref(true)

  const num = ref(0)

  const arr = reactive([])

  const obj = reactive({})

  const handclickfn = () => {}
   
    return {
      str,
      bool,
      num,
      arr,
      handclickfn,

    };
  },
};
</script>

<template>
<propsTest2 
:str="str"
:bool="bool"
:num="num"
:arr="arr"
:handclickfn="handclickfn"

/>

</template>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

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

/* #box {
  width: 100px;
  height: 100px;
  background-color: red;
} */
</style>
