function findMind(arr) {
  let min = arr[0];
  let minIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdx = i;
    }
  }
  return minIdx;
}

function sort(arr) {
  let result = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIdx = findMind(arr);
    result.push(arr[minIdx]);
    arr.splice(minIdx, 1);
  }
  return result;
}

console.log(sort([6, 2, 4, 9]));
