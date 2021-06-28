function test() {
  const api_result = {
    status: "success",
    data: [
      { name: "jimmy", value: 333 },
      { name: "m0", value: 222 },
      { name: "ann", value: 888 },
      { name: "qmole", value: 111 },
      { name: "tod", value: 555 },
      { name: "zizi", value: 666 },
    ],
  };

  const { data } = api_result;

  let arr = [];
  let max = data[0].value;

  for (let i = 0; i < data.length; i++) {
    
    console.log(i);
   
    if (data[i].value > max) {
      max = data[i].value;
      arr.splice(0,0,data[i]);
    } else {
      arr.push(data[i]);
    }
  }
  console.log(max)
  console.log(arr.sort((a,b)=>(b.value)-(a.value)));
}
test();
