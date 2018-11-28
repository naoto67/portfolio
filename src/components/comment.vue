<template>
  <div class="comment">
    
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['message']
}
</script>

<style lang="scss" scoped>
.comment {
  width: 80vw;
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 0 10px;
  text-align: left;
}
</style>
