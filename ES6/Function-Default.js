// 直接在參數上指定預設值
// 也可以 (arr = [0,0,0]) => function 可直接執行預設值
const ArrToStr = (arr = [0, 0, 0]) => {
  // 以往的做法
  // if (!arr) arr = [];
  const mapStr = arr.map((item) => {
    return item + "";
  });
  return mapStr;
};

console.log(ArrToStr());
