// 將模組丟出
// 一個 module 裡，只會有一個 default
const Add = (a,b)=>{
    return a+b
}

// export
// 選擇性是否丟出
export const Name = 'yizi'
export const age = 12

// export function 
export const Remove = () =>{
    return a -b 
}

// export default 
// 當載入 module 時，就會預設丟出
export default Add