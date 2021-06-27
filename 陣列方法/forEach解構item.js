const api_result = {
  data: [
    { name: "object_1", values: [1, 2, 3, 4, 5, 6] },
    { name: "object_2", values: [11, 12, 13, 14, 15, 16] },
    { name: "object_3", values: [21, 22, 23, 24, 25, 26] },
  ],
};
const { data } = api_result;
console.log(data);

let arr = [];
let newArr = [];

  // 也可以寫成data.forEach(({ values }, idx) => {});
data.forEach((item) => {
  // 將 values 從item中解構
  let { values } = item;

  console.log(values);

  arr.push(...values);
});
console.log(arr);

const ouput = arr.reduce((a, b) => a + b);

console.log(ouput);
