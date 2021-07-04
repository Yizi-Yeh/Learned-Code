const reverse = function (x) {
    // 三元判斷是否為負數
    let isNagative = x < 0 ? -1 : 1;
    // 透過 +" " 將 x 轉為 string
    // 透過 Math.abs將 x 轉為正整數
    let str = Math.abs(x) + "";
    // 透過 .split("") 將 str 轉為 arr
    // 透過 - 0 方法 將 string 轉為 number
    let strArr = str.split("").reverse().join("") - 0;
    // 把最後的結果乘以isNagative
    let returnInt = strArr * isNagative;
    return returnInt;
  };
  reverse(-123);