<template>
  <div class="command">
    <div class="commands">
      <List :items="commands" :clickFunc="childClick"
      :mouseOverFunc="childMouseOver"
      :mouseLeaveFunc=childMouseLeave></List>
    </div>
    <Skill v-if="1==this.$store.state.command"></Skill>
    <Item v-if="2==this.$store.state.command"></Item>
    <Strength v-if="4==this.$store.state.command"></Strength>
    <Strategy v-if="5==this.$store.state.command"></Strategy>
  </div>
</template>

<script>
import Item from './Item.vue'
import List from './List.vue'
import Skill from './Skill.vue'
import Strength from './Strength.vue'
import Strategy from './Strategy.vue'

export default {
  components: {
    Item,
    List,
    Skill,
    Strength,
    Strategy,
  },
  name: 'Command',
  computed: {
    commands() {
      return this.$store.state.commands
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
