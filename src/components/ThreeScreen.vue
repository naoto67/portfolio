<template>
  <div class="item" v-show="1==this.$store.state.command">
    <div class="item__title">
      <List :items="title" :clickFunc="childClick"></List>
    </div>
    <div class="item__items">
      <List :items="items" v-show="0==this.$store.state.who"
      :mouseOverFunc="pass" 
      :mouseLeaveFunc="pass"></List>
    </div>
    <div class="item__detail" 
      v-if="this.$store.state.item!=null">
      <h4 class="item__detail__content">
        {{ items[this.$store.state.item].detail }}
      </h4>
    </div>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'ThreeScreen',
  props: ['items'],
  components: {
    List
  },
  data() {
    return {
      title: [
        { 'title': '加藤純一' }
      ],
      skills: [
        { 'title': 'Ruby on Rails', 'detail': '主な開発言語。書き始めて8ヶ月。' },
        { 'title': 'vue.js', 'detail': 'このサイトはvue.jsで書かれています。初めてです。'},
        { 'title': 'swift', 'detail': '普段vimで書いてるせいかXcodeに感動してるレベルです。'}
      ],
    } 
  },
  computed: {
    
  },
  methods: {
    childClick(index) {
      this.$store.commit('changeWho', index)
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
