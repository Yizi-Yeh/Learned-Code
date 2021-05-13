// 如何 set composioion-api中的值
import { ref } from 'vue'

export function StateAdd () {
    const idx = ref(0)

    const addState = () => {
        idx.value++
    }



    return { idx,addState }

}