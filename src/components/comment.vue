<template>
  <div class="comment">
    <div class="comment__content">
      <p>{{ message }}</p>
    </div>
    <p class="comment__sign">▼</p>
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
  padding: 10px;
  margin: 10px;
  text-align: left;
  color: #fff;
  &__sign {
    text-align: center;
    animation: flashing 1.0s;
    animation-iteration-count: infinite; 
  }
}
</style>
