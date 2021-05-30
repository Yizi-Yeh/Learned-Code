import { createStore } from "vuex";
import { apiGetPhotoRequest } from '../api'
import axios from 'axios'
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    // 封裝 api 的寫法
    hanInit2( {commit} ) {
      const res = apiGetPhotoRequest()
      return res.then((response) =>{
        commit('init',response.data)
        return response.data
      })
    },

    // 改以 async await
    // 並以 trycatch抓取錯誤
   async  hanInit2( {commit} ) {
     try {
      const res = await apiGetPhotoRequest()
      commit('init',res.data)
      return res.data
     } catch (error) {
        console.error(error)
     }
    },
    handInit( {commit} ){
      // axios 本身是 promise 的回傳
     return axios.get('https://vue-lessons-api.herokuapp.com/photo/list').then(res=>{
        commit('init',res.data)
        // 成功後 return
        return res.data
      })
    },


    handLoadState( { commit } ,bool) {
      commit('loadState',bool)
    },
    handAdd( {commit} ) {
      commit('Add')
    },
    handRemove( {commit} ) {
      commit('Remove')
    },
  },
  mutations: {
    init(state,payload) {
      state.photoArr = payload
    },
    loadState(state,bool) {
      state.isLoad = bool
    },
    Add(state) {
      state.idx++
      if(state.idx > state.photoArr.length -1) {
        state.idx = 0
      }
    },
    Remove(state) {
      state.idx--
      if(state.idx < 0) {
        state.idx = state.photoArr.length -1
      }
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
