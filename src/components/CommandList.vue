<template>
  <div class="wrapper">
    <ul class="list">
      <li class="list__item"
        v-for="item in items"
        v-on:click="sample(item)">
        <span class="item_selected">▶︎</span>
        {{ item.title }}</li>
    </ul>
    <div v-show="message">
      <Comment :message="message"></Comment>
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue'

export default {
  components: {
    Comment
  },
  name: 'list',
  props: ['items'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sample(e) {
      this.message = e.message
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  position: sticky;
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
    color: #ddd;
    width: 100%;
    &:hover {
      color: #fff;
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
