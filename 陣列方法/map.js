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
  
  const data = arr.map((d) => ({
    // 解構properties變數
    ...d.properties,
    latitude: d.geometry.coordinates[0],
    longitude: d.geometry.coordinates[1]
  }))
  console.log(data)
  