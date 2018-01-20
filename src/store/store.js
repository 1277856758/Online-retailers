import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = require('./state/state.js')
const mutations = require('./mutations/mutations.js')

let store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store