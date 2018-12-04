import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = new Vuex.Store({
  state: {
    name: '加藤純一',
    hp: '999',
    mp: '999',
    lv: '99',
    property: [
      { 'title': 'どうのつるぎ', 'description': '銅の剣' },
      { 'title': 'アモールの水', 'description': 'HPを60回復させる' },
      { 'title': 'やくそう', 'description': 'HPを30回復させる' },
      { 'title': 'MacBook Pro', 'description': 'Apple純正MacBookPro' },
      { 'title': 'iPhone7', 'description': 'Apple純正iPhone7' }
    ],
    skills: [
      { 'title': 'Ruby on Rails', 'detail': '主な開発言語。書き始めて8ヶ月。' },
      { 'title': 'vue.js', 'detail': 'このサイトはvue.jsで書かれています。初めてです。'},
      { 'title': 'swift', 'detail': '普段vimで書いてるせいかXcodeに感動してるレベルです。'}
    ],
  }
})

export default user
