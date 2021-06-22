
  const sortArray = (n) =>{
      let arr = []
    n.forEach(item=>{
       item%2 === 0 ? arr.unshift(item) : arr.push(item)
    })
    return arr
  }

  sortArray([1,2.])