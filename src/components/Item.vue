<template>
  <div class="item" v-show="2==this.$store.state.command">
    <div class="item__title">
      <List :items="titles" :clickFunc="childClick"></List>
    </div>
    <div class="item__items" v-for="(sample, index) in samples">
      <List :items="sample" v-if="index==item"
      :mouseOverFunc="pass"
      :mouseLeaveFunc="pass"></List>
    </div>
    <div class="item__detail" 
         v-if="this.$store.state.item!=null">
      <h4 class="item__detail__content">
        {{ this.items[this.$store.state.who].belongings[this.$store.state.item].description }}
      </h4>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import ThreeScreen from './ThreeScreen.vue'

export default {
  name: 'Item',
  components: {
    List,
    ThreeScreen
  },
  data() {
    return {
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
    samples() {
      return [ this.$store.state.user.property, this.$store.state.user.property ]
    },
    titles() {
      return [ { 'title': this.$store.state.user.name }, { 'title': 'ふくろ'} ]
    },
    item() {
      return this.$store.state.item
    }
  },
  methods: {
    childClick(index) {
      this.$store.commit('changeWho', index)
      this.item = ''
    },
    childMouseOver(index) {
      this.$store.commit('changeWho', index)
    },
    pass(index) {
      this.$store.commit('changeItem', index)
    },
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: block;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 200px;
  width: 40vw;
  &__title {
    width: 120px;
    display: inline-block;
    vertical-align: top;
  }
  &__items {
    min-width: 150px;
    max-width: 200px;
    width: 100%;
    display: inline-block;
  }
  &__detail {
    border: 1px #fff solid;
    border-radius: 10px;
    background-color: #000;
    padding: 10px;
    text-align: left;
    margin-bottom: 10px;
    min-width: 150px;
    max-width: 300px;
    width: 100%;
    &__content {
      color: #fff;
    }
  }
}
</style>
