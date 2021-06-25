const api_result = {
  status: "success",
  data: [
    { name: "object_1", values: [1, 2, 3, 4, 5, 6] },
    { name: "object_2", values: [11, 12, 13, 14, 15, 16] },
    { name: "object_3", values: [21, 22, 23, 24, 25, 26] },
  ],
};

// 從 api_result 解構 data
const { data } = api_result;
console.log(data);

// 宣告空陣列，放入遍歷的data.value
const arr = [];

for (let i = 0; i < data.length; i++) {
  // 累加data.value，並直接展開整合為一個陣列
  arr.push(...data[i].values);
}
  // 累加總和 
console.log(arr.reduce((a,b)=>a+b));
