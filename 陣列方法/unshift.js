
  const sortArray = (n) =>{
      let arr = []
    n.forEach(item=>{
      // 使用 arr.unshift(item) ，將偶數排在陣列前位
       item%2 === 0 ? arr.unshift(item) : arr.push(item)
    })
    return arr
  }

  sortArray([1,2,3,4])