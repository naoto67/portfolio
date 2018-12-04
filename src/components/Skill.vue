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
  data() {
    return {
      skills: [
        { 'title': 'Ruby on Rails', 'detail': '主な開発言語。書き始めて8ヶ月。' },
        { 'title': 'vue.js', 'detail': 'このサイトはvue.jsで書かれています。初めてです。'},
        { 'title': 'swift', 'detail': '普段vimで書いてるせいかXcodeに感動してるレベルです。'}
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100;
}
</style>
