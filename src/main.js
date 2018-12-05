// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import user from './store/user.js'

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {
    user: user,
  },
  state: {
    command: null,
    who: null,
    item: null,
    message: '',
    strategies: [
      { title: 'ガンガンいこうぜ' },
      { title: 'いろいろやろうぜ' },
      { title: 'いのちをだいじに' },
      { title: 'じゅもんつかうな' },
      { title: 'めいれいさせろ' },
    ]
  },
  mutations: {
    changeCommand(state, n) {
      state.who = null
      state.item = null
      state.command = n
    },
    changeMessage(state, msg) {
      state.message = msg
    },
    changeItem(state, n) {
      state.item = n
    },
    changeWho(state, n) {
      state.who = n
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
