<template>
  <div class="wrapper">
    <ul class="list">
      <li class="list__item"
        v-for="(item, index) in items">
        <span class="item_selected">▶︎</span>
        {{ item.title }}</li>
    </ul>
    <Comment></Comment>
  </div>
</template>

<script>
import Comment from './comment.vue'

export default {
  components: {
    Comment
  },
  name: 'list',
  props: ['items'],
  data() {
    return {
      item: ''
    }
  },
  
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;
}
.list {
  width: 100px;
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 0 10px;
  list-style: none;
  text-align: left;
  &__item {
    color: #ddd;
    width: 100%;
    &:hover {
      color: #fff;
      .item_selected {
        display: inline-block;
      }
    }
    .item_selected {
      font-size: 0.6em;
      display: none;
    }
  }
}
</style>
