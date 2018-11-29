<template>
  <div class="comment" v-show="this.$store.state.message">
    <div class="comment__content">
      <p>{{ this.$store.state.message }}</p>
    </div>
    <p class="comment__sign">▼</p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
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
