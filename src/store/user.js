import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const user = {
  state: {
    name: '伊藤直人',
    hp: '999',
    mp: '999',
    lv: '99',
    at: '999',
    df: '999',
    sp: '999',
    it: '999',
    property: [
      { title: 'どうのつるぎ', 'detail': '銅の剣' },
      { title: 'アモールの水', 'detail': 'HPを60回復させる' },
      { title: 'やくそう', 'detail': 'HPを30回復させる' },
      { title: 'MacBook Pro', 'detail': 'Apple純正MacBookPro' },
      { title: 'iPhone7', 'detail': 'Apple純正iPhone7' }
    ],
    skills: [
      { title: 'Ruby on Rails', 'detail': '主な開発言語。書き始めて8ヶ月。' },
      { title: 'vue.js', 'detail': 'このサイトはvue.jsで書かれています。初めてです。'},
      { title: 'swift', 'detail': '普段vimで書いてるせいかXcodeに感動してるレベルです。'},
    ],
    comments: {
      speakings: [
        '何ですか？',
        'お金をください',
        'しかし誰もいなかった',
        '今日はプログラムを書いてます(きっと)'
      ],
      seekings: [
        { title: '海苔', detail: 'コスモスで買えそうな味のり' },
        { title: '1万円', detail: 'よく見たら偽物の1万円' },
        { title: 'モンスター', detail: '飲んだら3日3晩眠れぬ伝説の飲料' }
      ]
    }
  },
  getters: {
    randomSpeaking: (state, getters) => {
      var id = Math.floor(Math.random() * Math.floor(getters.speakingCount))
      return state.comments.speakings[id]
    },
    speakingCount: (state) => {
      return state.comments.speakings.length
    }
  }
}

export default user
