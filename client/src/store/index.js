import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'



Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  user: {}
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
