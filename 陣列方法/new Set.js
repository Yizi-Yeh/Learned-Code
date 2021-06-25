arr = [
  { name: "yizi", number: 0 },
  { name: "ann", number: 1 },
  { name: "sam", number: 2 },
  { name: "ruru", number: 2 },
  { name: "ruru", number: 2 },
  { name: "yang", number: 2 },
];

const newarr = arr.map((item) => item.name)

const result = [...(new Set(newarr))];

console.log(result)