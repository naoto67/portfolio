<template>
  <div class="item">
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
      <li v-for="item in bag">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Item',
  data() {
    return {
      items: [
        'どうのつるぎ',
        'アモールの水',
        'やくそう',
        'MacBook Pro',
        'iPhone7'
      ],
      bag: [
        'ふしぎなタネ',
        'せかいじゅのしずく'
      ]
    }
  }
}
</script>
