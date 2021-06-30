// for loop 方法
function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      result += str[i].toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  return result
}

// map法 (每個東西的轉換)
function swap(str) {
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join("");
}

// 三元法
function swap(str) {
  return str
    .split("")
    .map((char) => {
      return char >= "a" && char <= "z"
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join("");
}

// 將 char 提出
function swap(str) {
  return str
    .split("")
    .map((char) => {
      return char[char >= "a" && char <= "z" ? "toUpperCase" : "toLowerCase"]();
    })
    .join("");
}

console.log(swap("Acdfd"));
