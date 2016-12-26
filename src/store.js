import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    counter: 3
  },
  mutations: {
    INCREMENT (state) {
      state.counter ++
    },
    INCREMENT_DOUBLE (state) {
      state.counter += 2
    }
  }
})

export default store