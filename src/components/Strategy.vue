<template>
  <ul class="strategy">
    <li class="strategy__item" v-for="item in strategies">
      <span class="item_selected">▶︎</span>
      {{ item.title }}
      <span class="blank"></span>
    </li>
  </ul>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Strategy',
  components: {
    List
  },
  computed: {
    strategies() {
      return this.$store.state.strategies
    }
  }
}
</script>

<style lang="scss" scoped>
.strategy {
  position: absolute;
  top: 0px;
  left: 180px;
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 10px;
  text-align: left;
  &__item {
    color: #fff;
    &:hover {
      .item_selected {
        //visibility: visible;
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
      //visibility: hidden;
    }
    .blank {
      width: 1em;
      display: inline-block;
    }
  }
}
</style>
