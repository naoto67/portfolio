<template>
  <div class="wrapper">
    <ul class="list">
      <li class="list__item"
        v-for="(item, index) in command_items"
        v-on:click="sample(index)">
        <span class="item_selected">▶︎</span>
        {{ item.title }}</li>
    </ul>
    <div v-show="message">
      <Comment :message="message"></Comment>
    </div>
    <div v-show="item">
      <Item></Item>
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue'
import Item from './Item.vue'

export default {
  components: {
    Comment,
    Item
  },
  name: 'list',
  data() {
    return {
      message: '',
      command_items: [
        { 'title': 'はなす', message: '話す相手がいません' },
        { 'title': 'とくぎ' },
        { 'title': 'どうぐ' },
        { 'title': 'しらべる', message: 'なにも見つからなかった' },
        { 'title': 'つよさ' },
        { 'title': 'さくせん'}
      ],
      item: false
    }
  },
  methods: {
    sample(e) {
      if( e == 0 || e == 3 ){
        this.message = this.command_items[e].message
      } else {
        this.message = ""
      }
      if( e == 2 ) {
        this.item = true
      } else {
        this.item = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.list {
  width: 100px;
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 10px;
  margin: 10px;
  list-style: none;
  text-align: left;
  &__item {
    color: #fff;
    width: 100%;
    &:hover {
      .item_selected {
        display: inline-block;
        animation: flashing 1.0s;
        animation-iteration-count: infinite; 
      }
    }
    .item_selected {
      font-size: 0.6em;
      display: none;
    }
  }
}
</style>
