<template>
  <div class="item">
    <ThreeScreen :items="items[0]" :titles="titles"></ThreeScreen>
  </div>
</template>

<script>
import List from './List.vue'
import ThreeScreen from './ThreeScreen.vue'

export default {
  name: 'Item',
  components: {
    List,
    ThreeScreen
  },
  computed: {
    items() {
      return [this.$store.state.user.property]
    },
    titles() {
      return [{ title: this.$store.state.user.name }]
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
