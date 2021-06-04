const routerArr = ['/','/course','/home']
routerArr.forEach((item,index,arr)=>{
   arr[index] = item.substr(1)
   return routerArr
})
// output: ["", "course", "home"]