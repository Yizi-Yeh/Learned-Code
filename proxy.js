const obj = {
    a:true,
    b:true
}

// 做一個obj的代理 (要操作obj時需要透過proxy)
let objProxy = new Proxy(obj,{
    // target -> obj 
    // key -> a or b
    get(target,key){
        console.log(target[key])
        // 把obj的某key值return
        return(target[key])
    },

    set(target,key,value){
        // 把obj的某一key值改為傳入的value
        target[key]=value;
    }
})