
// async 使用 promise 作為基底
// 不需要再自己寫 promise，已幫我們包裝完成
async function run () {
    return 'hello'
}

// run().then(result=>{
//     console.log(result)
// })

// await 的方法需要放在 async 中

(async function(){

})()


// 錯誤情況
async function failed () {
    throw 'error'
}

(async () =>{
    // await 用意：取代 then && catch
    // let 變數 = await 非同步函式
    // 等待非同步函式函式執行完成後，結果才放入變數中
    // run()會被 promise的方式做處理

    // 等待 a 的結果，結束之後再往下執行 try catch 的部分
    // await:因為後面接續的是非同步的程式，所以意思為：等待他（await）執行完 
    let a = await run()

    // 若要處理同步的錯誤可以使用 try catch
    try {
        // 等待 failed 結果
        let c = await failed()
    } catch(e) {
        console.log(e)
    }

})()

// 在ＪＳ中，只要發生 error 且未做處理 ，程式就無法執行
// 所以使用 try catch ，接住錯誤，就不會中斷