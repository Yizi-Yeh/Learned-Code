// 封裝非同步處理的狀態

import axios from 'axios'
import { ref,reactive } from 'vue'

export function Fetchs (API_URL="") {

    //狀態碼
    const isLoad = ref(false)
    const FetchData = reactive({data:[]})
    const errMsg = ref('')

    axios.get(API_URL).then(res=>{

        isLoad.value = true

        FetchData.data = res.data
        
    }).catch(error=>{

        console.dir(error)
        
        errMsg.value = error.request.statusText

    })

    return {isLoad, FetchData, errMsg }
}