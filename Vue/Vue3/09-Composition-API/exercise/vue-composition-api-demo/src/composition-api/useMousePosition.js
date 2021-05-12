import { ref,onMounted,onUnmounted } from 'vue'
export function MousePosition() {

    const x = ref(0)
    const y = ref(0)

    // 抓取滑鼠位置
    const posUpdate = (e) =>{
        x.value = e.pageX
        y.value = e.pageY
    }
    
    // 做什麼？ -> 監聽 mousemove
    // 何時監聽？ -> DOM 元素 render 後監聽
   onMounted(()=>{
    window.addEventListener('mousemove',posUpdate)
   }) 

    // 何時不做？
   onUnmounted(()=>{
    window.removeEventListener('mousemove',posUpdate)
   }) 

   // mousemove 監聽值，最後將它 return 出去
   return  { x,y }
}