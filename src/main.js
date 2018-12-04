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
    who: null,
    item: null,
    message: '',
      items: [
        { belongings: [
          { 'title': 'どうのつるぎ', 'description': '銅の剣' },
          { 'title': 'アモールの水', 'description': 'HPを60回復させる' },
          { 'title': 'やくそう', 'description': 'HPを30回復させる' },
          { 'title': 'MacBook Pro', 'description': 'Apple純正MacBookPro' },
          { 'title': 'iPhone7', 'description': 'Apple純正iPhone7' }
        ]},
        { bag: [
          { 'title': 'ふしぎなタネ', 'description': 'MPを1~3あげる' },
          { 'title': 'せかいじゅのしずく', 'description': '味方全体のHPを全回復させる' }
        ]}
      ],
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
