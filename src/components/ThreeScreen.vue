<template>
  <div class="item">
    <div class="item__title">
      <List :items="titles" :clickFunc="childClick"></List>
    </div>
    <div class="item__items" v-for="(item, index) in items">
      <div v-show="index==$store.state.who">
        <List :items="items"
        :mouseOverFunc="pass" 
        :mouseLeaveFunc="pass" 
        ></List>
      </div>
    </div>
    <div v-for="(item, index) in items">
      <div class="item__detail" 
        v-if="$store.state.item!=null&&$store.state.who==index">
        <span class="item__detail__content">
          {{ items[$store.state.item].detail }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'ThreeScreen',
  props: ['items', 'titles'],
  components: {
    List
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
  left: 180px;
  &__title {
    width: 120px;
    display: inline-block;
    vertical-align: top;
  }
  &__items {
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
