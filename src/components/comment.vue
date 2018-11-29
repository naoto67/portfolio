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
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  text-align: left;
  margin: 10px;
  color: #fff;
  &__sign {
    text-align: center;
    animation: flashing 1.0s;
    animation-iteration-count: infinite; 
  }
  &__content {
    padding: 10px;
  }
}
</style>
