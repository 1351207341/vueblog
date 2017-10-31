import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    showFooter: false
  },
  actions: {
    show_footer_to_true: function ({ commit }) {
      commit('set_show_footer', true)
    }
  },
  mutations: {
    // 更新state方法
    set_show_footer: (state, data) => {
      state.showFooter = data
      // console.log(data)
    }
  },
  getters: {

  }
})
export default store
