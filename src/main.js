// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
// import Hello from './components/Hello'
import MasterForm from './components/master/MasterForm'
import routes from './routes.js'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')
console.log(store.state.count)
store.commit('increment')
console.log(store.state.count)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
