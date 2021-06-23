const number = "1-23-4598 798 0399933322000991";

// 先用正則將 '-' 取代為空白，再刪除空白
// 利用split分割，轉為陣列
// 轉型Number
const newarr = number
  .replace(/-/g, " ")
  .replace(/\s*/g, "")
  .split("")
  .map(Number);

let ans = "";
newarr.forEach((item, idx) => {
  // 判別型別，非數字 return
  if (isNaN(item)) return;
  // 判別idx (注意0處)
  if (idx != 0 && idx % 3 === 0) {
    ans += "-";
  }
  ans += item;
});

console.log(ans);
