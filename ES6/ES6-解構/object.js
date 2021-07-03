const data = {
    name:'zizi',
    age:'19',
    address:'fukuoka'
}

const {name,age,address} =data
// 'zizi'
// '19'
// 'fukuoka'
console.log(name)
console.log(age)
console.log(address)
// ----------------

const userData = {
    // 快速的在物件中包物件
    // 直接放入上方data
    data,
}

// {data:{ name:'zizi',age:'19',address:'fukuoka'} }
console.log(userData)
