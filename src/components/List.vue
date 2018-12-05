<template>
  <ul class="list">
    <li class="list__item"
      v-for="(item, index) in items"
      @click="click(index)"
      @mouseover="mouseover(index)"
      @mouseleave="mouseleave(index)">
      <span class="item_selected">▶︎</span>
      {{ item.title }}
      <span class="blank">▷</span>
    </li>
  </ul>
</template>

<script>
export default{
  name: 'List',
  props: [
    'items',
    'clickFunc',
    'mouseOverFunc',
    'mouseLeaveFunc'
  ],
  methods: {
    click(index) {
      if(this.clickFunc == null) { return }
      this.clickFunc(index)
    },
    mouseover(index) {
      if(this.mouseOverFunc == null) { return }
      this.mouseOverFunc(index)
    },
    mouseleave() {
      if(this.mouseLeaveFunc == null) { return }
      this.mouseLeaveFunc(null)
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
    &:hover {
      .item_selected {
        display: inline-block;
        animation: flashing 1.0s;
        animation-iteration-count: infinite; 
      }
      .blank {
        display: none;
      }
    }
    .item_selected {
      font-size: 0.6em;
      display: none;
    }
    .blank {
      visibility: hidden;
      display: inline-block;
    }
  }
}
</style>
