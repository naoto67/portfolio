<template>
  <div id="app">
    <Status></Status>
    <CommandList></CommandList>
  </div>
</template>

<script>
import CommandList from './components/Commandlist.vue'
import Status from './components/Status.vue'

export default {
  name: 'App',
  components: {
    CommandList,
    Status
  },
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
