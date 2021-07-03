import { createStore } from 'vuex'

export default createStore({
  state: {
    // 使用者所選古蹟種類，預設為國定古蹟
    currHistoric: '新竹火車站',
    // 存放API回傳的古蹟列表資訊
    Historic: [],
    keywords: '',
    showModal: false
  },
  getters: {
    //  古蹟列表
    HistoricList (state) {
      return state.Historic.map((d) => d.古蹟名稱)
    },
    // 篩選符合古蹟
    filteredHistoric (state) {
      const { Historic } = state
      return state.keywords ? Historic.filter((d) => d.古蹟名稱.includes(state.keywords))
        : Historic.filter((d) => d.古蹟名稱 === state.currHistoric)
    },
    currHistoricInfo (state) {
      // 目前所選古蹟
      const { Historic } = state
      return Historic.filter((d) => d.古蹟名稱 === state.currHistoric)
    }
  },
  mutations: {
    setcurrHistoric (state, payload) {
      state.currHistoric = payload
    },
    setHistoric (state, payload) {
      state.Historic = payload
    },
    setKeywords (state, payload) {
      state.keywords = payload
    },
    setshowModal (state, payload) {
      state.showModal = payload
    }
  },
  actions: {
    // 取得古蹟資料
    async fetchHistoric ({ commit }) {
      const json = await fetch('/api/001/Upload/25/OpenData/9059/113/6db91d62-458d-4fad-9e59-55bdb6f26365.json')
        .then((res) => res.json())
      commit('setHistoric', json)
    }
  },
  modules: {
  }
})
