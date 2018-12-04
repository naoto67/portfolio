<template>
  <div class="">
    <div class="commands">
      <List :items="commands" :clickFunc="childClick"
      :mouseOverFunc="childMouseOver"
      :mouseLeaveFunc=childMouseLeave></List>
    </div>
    <Skill v-if="1==this.$store.state.command"></Skill>
    <Item v-if="2==this.$store.state.command"></Item>
  </div>
</template>

<script>
import Item from './Item.vue'
import List from './List.vue'
import Skill from './Skill.vue'
import ThreeScreen from './ThreeScreen.vue'

export default {
  components: {
    Item,
    List,
    Skill,
    ThreeScreen
  },
  name: 'list',
  data() {
    return {
      commands: [
        { 'title': 'はなす', message: '話す相手がいません' },
        { 'title': 'とくぎ' },
        { 'title': 'どうぐ' },
        { 'title': 'しらべる', message: 'なにも見つからなかった' },
        { 'title': 'つよさ' },
        { 'title': 'さくせん'}
      ]
    }
  },
  methods: {
    childClick(index) {
      this.$store.commit('changeMessage', '')
      this.$store.commit('changeCommand', index)
      if(index==0 || index==3){
        this.$store.commit('changeMessage', this.commands[index].message)
      } else if(index==3) {
        
      }
    },
    childMouseOver(index) {
    },
    childMouseLeave(){
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
