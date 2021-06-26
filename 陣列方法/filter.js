// 回傳陣列裡面所有小於 n 的數的數量

// 作法 1
function findSmallCounter(arr, n) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) counter++;
  }
  return counter;
}

// 作法 2
// arr.filter + .length 接續數量
function findSmallCounter(arr, n) {
   return arr.filter(item=>item<n).length
  }

  console.log(findSmallCounter([2, 3, 4, 5, 21], 20))