import Vuex from 'vuex'

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
  }
})
