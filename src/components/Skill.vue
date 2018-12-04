<template>
  <div class="skill">
    <ThreeScreen :items="skills[0]" :titles="titles"></ThreeScreen>
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
      return [this.$store.state.user.skills]
    },
    titles() {
      return [{ 'title': this.$store.state.user.name }]
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
}
</style>
