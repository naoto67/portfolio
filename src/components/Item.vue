<template>
  <div class="item" v-show="2==this.$store.state.command">
    <div class="item__title">
      <List
      :items="title" :click-func="childClick"
      :mouseOverFunc="childMouseOver"
      :mouseLeaveFunc="childMouseLeave"></List>
    </div>
    <div class="item__items">
      <List :items="items[0].belongings" v-show="0==this.$store.state.who"
      :mouseOverFunc="pass"
      :mouseLeaveFunc="pass"
      :clickFunc="pass"></List>
      <List :items="items[1].belongings" v-show="1==this.$store.state.who"
      :mouseOverFunc="pass"
      :mouseLeaveFunc="pass"
      :clickFunc="pass"></List>
    </div>
    <div class="item__detail" 
      v-if="item">
      <h4 class="item__detail__content">
        {{ this.items[this.$store.state.who].belongings[this.$store.state.item].description }}
      </h4>
    </div>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Item',
  components: {
    List
  },
  data() {
    return {
      title: [
        { 'title': '加藤純一' },
        { 'title': 'ふくろ' }
      ],
      item: false,
      items: [
        { belongings: [
          { 'title': 'どうのつるぎ', 'description': '銅の剣' },
          { 'title': 'アモールの水', 'description': 'HPを60回復させる' },
          { 'title': 'やくそう', 'description': 'HPを30回復させる' },
          { 'title': 'MacBook Pro', 'description': 'Apple純正MacBookPro' },
          { 'title': 'iPhone7', 'description': 'Apple純正iPhone7' }
        ]},
        { belongings: [
          { 'title': 'ふしぎなタネ', 'description': 'MPを1~3あげる' },
          { 'title': 'せかいじゅのしずく', 'description': '味方全体のHPを全回復させる' }
        ]}
      ],
    } 
  },
  computed: {
    
  },
  methods: {
    childClick(index) {
    },
    childMouseOver(index) {
      this.$store.commit('changeWho', index)
      this.item = ''
    },
    childMouseLeave() {
      // this.$store.commit('changeItem', null)
    },
    pass(index) {
      if( index == null ){ return }
      this.$store.commit('changeItem', index)
      this.item = true
    },
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: block;
  position: absolute;
  top: 50px;
  bottom: 0px;
  left: 200px;
  width: 500px;
  height: 300px;
  &__title {
    width: 120px;
    display: inline-block;
    vertical-align: top;
  }
  &__items {
    width: 360px;
    display: inline-block;
  }
  &__detail {
    border: 1px #fff solid;
    border-radius: 10px;
    background-color: #000;
    padding: 10px;
    text-align: left;
    margin-bottom: 10px;
    &__content {
      color: #fff;
    }
  }
}
</style>
