<template>
  <ul class="list">
    <li class="list__item"
      v-for="(item, index) in items"
      @click="sample(index)">
      <span class="item_selected">▶︎</span>
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default{
  name: 'List',
  props: ['items'],
  methods: {
    sample(index) {
      this.$emit('close', index)
    } 
  }
}
</script>

<style lang="scss">
.list {
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 10px;
  list-style: none;
  text-align: left;
  margin-bottom: 10px;
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
