<template>
  <div class="aside-menu">
      <div class="wraps">
         <label>
           <i class="fas fa-search-location"></i> 關鍵字搜尋
           <input type="text" placeholder="請輸入古蹟關鍵字" v-model="keywords">
         </label>
         <br>
          <label>
          古蹟名稱: <select v-model="currHistoric">
            <option v-for="historicName in HistoricList" :key="historicName">{{ historicName }}</option>
              </select>
         </label>
      </div>
       <ul class="Historic-lists">
      <li class="Historic-info wraps"
        v-for="item in filteredHistoric" :key="item">
        <h1 v-html="keywordHighlight(item.古蹟名稱)"></h1>

        <div class="mask-info">
          <i class="fas fa-landmark"></i>
          <span>古蹟名稱: {{ item.古蹟名稱 }}</span>
        </div>

        <div class="mask-info">
         <i class="fas fa-map-marked-alt"></i>
          <span>地址: {{ item.地址 }}</span>
        </div>

        <div class="mask-info">
          <i class="far fa-calendar-alt"></i>
          公告日期: {{ item.公告日期 }}
        </div>

        <button class="btn-Historic-detail" @click="openImg()">
          <i class="far fa-image"></i>
        </button>

      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'asideMenu',
  computed: {
    // 當更新select，v-model可透過set/get commit回Vuex的store
    currHistoric: {
      get () {
        return this.$store.state.currHistoric
      },
      set (value) {
        this.$store.commit('setcurrHistoric', value)
      }
    },
    keywords: {
      get () {
        return this.$store.state.keywords
      },
      set (value) {
        this.$store.commit('setKeywords', value)
      }
    },
    showModal: {
      get () {
        return this.$store.state.showModal
      },
      set (value) {
        this.$store.commit('setshowModal', value)
      }
    },
    ...mapGetters(['HistoricList', 'filteredHistoric']),
    ...mapState(['Historic'])
  },
  watch: {
  },
  methods: {
    keywordHighlight (val) {
      return val.replace(new RegExp(this.keywords, 'g'), `<span class="highlight">${this.keywords}</span>`)
    },
    openImg () {
      this.showModal = true
    }
  }
}
</script>
<style>
.highlight {
  color: #cea774;
}
</style>
