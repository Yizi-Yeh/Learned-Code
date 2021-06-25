// 當有機會存在參照不存在的時候，可選串連可以提供更簡短的表述式來進行串連性的屬性存取。這有助於在無法保證物件屬性為必要存在的狀況下，進行物件內容的探索。


// 傳統情況下如果要判斷物件裡面有沒有某個屬性的話，通常可以寫成 if( adventurer.name ) {...}
// 但是如果多層判斷的話，要是寫成 if(adventurer.cat.name) 乍看之下好像 ok，但是要是物件裡面沒有 cat 的話，就會出現錯誤
// 傳統做法會寫成 if(adventurer.cat && adventurer.cat.name)
// 但物件越深就要寫越多層...
// 新的 ES ?. 寫法可以直接寫成 if(adventurer?.cat?.name)

//  所以在存取某值時，安全起見需要層層檢查  if (adventurer && adventurer.cat && adventurer.cat.name) 但如果使用 ES ?. 語法，就可以省略寫成 if(adventurer?.cat?.name)

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };


  if(adventurer?.cat?.name){
      console.log(adventurer?.cat?.name)
  }