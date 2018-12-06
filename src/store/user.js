import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = new Vuex.Store({
  state: {
    name: '加藤純一',
    hp: '999',
    mp: '999',
    lv: '99',
    at: '999',
    df: '999',
    sp: '999',
    it: '999',
    property: [
      { 'title': 'どうのつるぎ', 'detail': '銅の剣' },
      { 'title': 'アモールの水', 'detail': 'HPを60回復させる' },
      { 'title': 'やくそう', 'detail': 'HPを30回復させる' },
      { 'title': 'MacBook Pro', 'detail': 'Apple純正MacBookPro' },
      { 'title': 'iPhone7', 'detail': 'Apple純正iPhone7' }
    ],
    skills: [
      { 'title': 'Ruby on Rails', 'detail': '主な開発言語。書き始めて8ヶ月。' },
      { 'title': 'vue.js', 'detail': 'このサイトはvue.jsで書かれています。初めてです。'},
      { 'title': 'swift', 'detail': '普段vimで書いてるせいかXcodeに感動してるレベルです。'}
    ],
  },
})

export default user
