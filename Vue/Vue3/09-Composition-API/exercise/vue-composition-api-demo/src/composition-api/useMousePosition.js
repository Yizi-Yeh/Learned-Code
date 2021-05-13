import { ref,reactive, toRefs,onMounted,onUnmounted } from 'vue'
export function MousePosition() {

    // 改以 reactive 做此功能
    const pos = reactive({
        x:0,
        y:0
    })

    const name = ref('yizi')

    const posUpdate = (e) =>{
        pos.x = e.pageX
        pos.y = e.pageY
    }
    
   onMounted(()=>{
    window.addEventListener('mousemove',posUpdate)
   }) 

   onUnmounted(()=>{
    window.removeEventListener('mousemove',posUpdate)
   }) 

    // return reactive pos
    // 利用 toRefs 包裝 reactive 物件後，父元件便可以以解構方式取得該元素
   return  {...toRefs(pos),name}
}