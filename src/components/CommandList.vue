<template>
  <div class="">
    <div class="commands">
      <List :items="commands" @close="sample"></List>
    </div>
    <Item :item="item"></Item>
    <Comment :message="message" v-show="message"></Comment>
  </div>
</template>

<script>
import Comment from './Comment.vue'
import Item from './Item.vue'
import List from './List.vue'

export default {
  components: {
    Comment,
    Item,
    List
  },
  name: 'list',
  data() {
    return {
      message: '',
      commands: [
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
    sample(i) {
      this.message = ""
      if(i==0 || i==3){
        this.message = this.commands[i].message
      } else if(i==3) {
        this.item = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.commands {
  width: 120px;
  display: inline-block;
  position: flex;
  margin: 10px;
}
</style>
