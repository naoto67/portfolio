// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    command: null,
    item: null,
    message: ''
  },
  mutations: {
    changeCommand(state, n) {
      state.command = n
    },
    changeMessage(state, msg) {
      state.message = msg
    },
    changeItem(state, n) {
      state.item = n
    }
  }
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store: store,
  components: { App },
  template: '<App/>'
})

window.vm = vm
