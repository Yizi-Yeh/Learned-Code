let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 由大到小排列
// [1, 2, 3, 4, 5]


// 利用indexOf判斷數值是否存在，存在則印出該索引
// 不存在則回傳-1
function SearchIndex(arr, target) {
    if (arr.indexOf(target) !== -1) {
      return arr.indexOf(target);
    } else {
        arr.push(target)
        arr.sort((a,b)=>a-b)
        return arr.indexOf(target)
    }
  }