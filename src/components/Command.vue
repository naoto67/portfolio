<template>
  <div class="command">
    <div class="commands">
      <List :items="commands" :clickFunc="childClick"></List>
    </div>
    <Skill v-if="1==command"></Skill>
    <Item v-if="2==command"></Item>
    <Strength v-if="4==command"></Strength>
    <Strategy v-if="5==command"></Strategy>
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
    },
    command(){
      return this.$store.state.command
    },
  },
  methods: {
    childClick(index) {
      this.$store.commit('changeMessage', '')
      this.$store.commit('changeCommand', index)
      if (index==0){
        var id = Math.floor(Math.random() * Math.floor(this.$store.getters.speakingCount))
        this.$store.commit('changeMessage', this.$store.getters.speakingById(id))
      } else if (index==3) {
        var name = this.$store.state.user.name
        if(this.$store.getters.seekingCount != 0) { 
          var id = Math.floor(Math.random() * Math.floor(this.$store.getters.seekingCount))
          var res = this.$store.getters.seekingById(id)
          var msg = `${name}は${res.title}を見つけた`
          this.$store.commit('changeMessage', msg)
          this.$store.commit('deleteSeekingById', id)
        } else {
          var msg = `${name}は何も見つけられなかった`
          this.$store.commit('changeMessage', msg)
        }
      }
      return 
    },
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
