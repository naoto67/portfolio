<template>
  <div class="item">
    <List :items="title"></List>
    <List :items="items"></List>
    <List :items="bag"></List>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Item',
  components: {
    List
  },
  props: ['item'],
  data() {
    return {
      title: [
        { 'title': '加藤純一' },
        { 'title': 'ふくろ' }
      ],
      items: [
        { 'title': 'どうのつるぎ' },
        { 'title': 'アモールの水' },
        { 'title': 'やくそう' },
        { 'title': 'MacBook Pro' },
        { 'title': 'iPhone7' }
      ],
      bag: [
        { 'title': 'ふしぎなタネ' },
        { 'title': 'せかいじゅのしずく'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 200px;
  position: absolute;
  margin: 0 10px;
  right: 0;
  top: 0;
}
</style>
