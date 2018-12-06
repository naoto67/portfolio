<template>
  <div id="app">
    <Status></Status>
    <Command></Command>
    <Comment></Comment>
  </div>
</template>

<script>
import Command from './components/Commandlist.vue'
import Status from './components/Status.vue'
import Comment from './components/Comment.vue'

export default {
  name: 'App',
  components: {
    Command,
    Status,
    Comment
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'PixelMplus10-Regular';
  src: './assets/fonts/PixelMplus10-Regular.ttf' format('truetype');
}
@keyframes flashing {
  0% { opacity: 1.0 }
  50% { opacity: 1.0 }
  51% { opacity: 0.0 }
  100% { opacity: 0.0 }
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
ul {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  position: relative;
  margin: 50px;
  height: 100%;
}
</style>
