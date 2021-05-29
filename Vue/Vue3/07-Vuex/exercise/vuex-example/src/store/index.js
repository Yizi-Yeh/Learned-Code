// 拉出 createStore 方法
import { createStore } from "vuex";
import Auth from './Auth'
// export 到 main.js
export default createStore({
  state: {
    isOpen: false,
  },
  // 利用 actions 觸發 mutation 
  actions: {
  // context 擁有 store的所有屬性和方法
  // context 代理了store 一部分方法、屬性
  // 因為context不需要store那麼多額外的方法  
    handMenuOpen(context) {
      const bool = !context.state.isOpen
  // 使用 commit 方法，發送事件到 mutation中，觸發 state.isOen = true
      context.commit('handOpenState',bool)
    } 
  },
  // 利用 mutations修改 state 的狀態
  mutations: {
    handOpenState(state, bool) {
      state.isOpen = bool
    }
  },
  // 改由 getters 取得 state
  // 類似 computed，先重組資料後，再丟入 component
  // 把處理資料的邏輯放在vuex，component單純取出資料
  // 讓資料流統一從getters取得，再從getters丟到畫面
  getters: {
  // 一個 function 回傳 state 的內容 
    isOpen(state) {
      return state.isOpen
    }
  },
  modules:{
    // App.vue 會依此名稱作為modules的判斷
    Auth
  }
});
