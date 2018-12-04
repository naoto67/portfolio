<template>
  <div class="skill">
    <ThreeScreen :items="skills"></ThreeScreen>
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
      return this.$store.state.user.skills
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100;
}
</style>
