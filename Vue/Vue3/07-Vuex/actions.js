// Actions commit (提交) 的是 mutations ，而不是直接變更 state
// Actions 操作異步行為


const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state){
            state.count++
        }
    },
    actions: {
        increment(context){
        context.commit('increment')
        }
    },
  });

//  組合 actions
// 在確定 actions 結束後執行下一步操作
// 此時，若 actions 返回一個 promise 時， store.dispatch 則可以處理返回的 (return) promise

actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}

store.dispatch('actionA').then(() => {
})