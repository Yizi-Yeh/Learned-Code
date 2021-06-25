// find()會將陣列中的「每一個」元素帶入指定的函式內做判斷，並會回傳第一個符合判斷條件的元素，如果沒有元素符合則會回傳 undefined。
const arr = [
    {
      type: 'Feature',
      properties: {
        id: '5931112921',
        name: '明恩藥局'
      },
      geometry: {
        type: 'Point',
        coordinates: [121, 25]
      }
    }
  ]
  
  const data = arr.find((d) => d.type === 'Feature')?.geometry || []
  console.log(data)