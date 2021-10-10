// 拋出錯誤,建立自己的Error物件
// throw new Error('message')

const width = 12;
const height = "test";

function calculateArea(width, height) {
  try {
    const area = width * height;
    if (!isNaN(area)) {
      return area;
    } else {
      // 給開發人員參考
      throw new Error("calculateArea() received invalid number");
    }
  } catch (e) {
    //   給使用者參考
    console.log(e.name + "" + e.message);
    return "無法計算面積";
  }
}
