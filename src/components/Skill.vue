<template>
  <div class="skill">
    <ThreeScreen :items="skills[0].skills" :titles="titles"></ThreeScreen>
  </div>
</template>

<script>
import ThreeScreen from './ThreeScreen.vue'

export default {
  name: 'skill',
  components: {
    ThreeScreen
  },
  computed: {
    skills() {
      return [{ title: this.$store.state.user.name, skills: this.$store.state.user.skills}]
    },
    titles() {
      return [{ 'title': this.$store.state.user.name }]
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100;
}
</style>
