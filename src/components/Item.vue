<template>
  <div class="item">
    <div class="item__title">
      <List v-show="2==this.$store.state.command"
      :items="title" :click-func="childClick"
      :mouseOverFunc="childMouseOver"
      :mouseLeaveFunc="childMouseLeave"></List>
    </div>
    <div class="item__items">
      <List :items="items" v-show="0==this.$store.state.item"
      :mouseOverFunc="pass"
      :mouseLeaveFunc="pass"
      :clickFunc="pass"></List>
      <List :items="bag" v-show="1==this.$store.state.item"
      :mouseOverFunc="pass"
      :mouseLeaveFunc="pass"
      :clickFunc="pass"></List>
    </div>
    <div class="item__detail">
      <h4 class="item__detail__content">sample</h4>
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
      items: [
        { 'title': 'どうのつるぎ' },
        { 'title': 'アモールの水' },
        { 'title': 'やくそう' },
        { 'title': 'MacBook Pro' },
        { 'title': 'iPhone7' }
      ],
      bag: [
        { 'title': 'ふしぎなタネ' },
        { 'title': 'せかいじゅのしずく'}
      ],
    } 
  },
  methods: {
    childClick(index) {
    },
    childMouseOver(index) {
      this.$store.commit('changeItem', index)
    },
    childMouseLeave() {
      // this.$store.commit('changeItem', null)
    },
    pass(index) {
      
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
