function test() {
  const api_result = {
    status: "success",
    data: [
      { name: "object_1", values: [1, 2, 3, 4, 5, 6] },
      { name: "object_2", values: [11, 12, 13, 14, 15, 16] },
      { name: "object_3", values: [21, 22, 23, 24, 25, 26] },
    ],
  };

  let arr = [];

  for (let i = 0; i < api_result.data.length; i++) {
    arr.push(...api_result.data[i].values);
  }

  arr.reduce((prev, curr) => prev + curr);
}
