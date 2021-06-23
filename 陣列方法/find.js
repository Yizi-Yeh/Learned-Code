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