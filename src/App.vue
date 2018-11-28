<template>
  <div id="app">
    <img src="./assets/logo.png">
    <List :items="command_items"></List>
  </div>
</template>

<script>
import List from './components/list.vue'
import Comment from './components/comment.vue'

export default {
  name: 'App',
  components: {
    List,
    Comment
  },
  data() {
    return {
      command_items: [
        { 'title': 'はなす' },
        { 'title': 'とくぎ' },
        { 'title': 'どうぐ' },
        { 'title': 'しらべる' },
        { 'title': 'つよさ' },
        { 'title': 'さくせん'}
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'PixelMplus10-Regular';
  src: './assets/fonts/PixelMplus10-Regular.ttf' format('truetype');
}
body{
  font-family: 'PixelMplus10-Regular';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #000;
  font-size: 1.0em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
