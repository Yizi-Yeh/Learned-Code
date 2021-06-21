<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Start :msg="data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Start from '@/components/Start.vue'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
    Start
  },
  setup () {
    const data = ref(1.5)
    return {
      data
    }
  }
}
</script>
