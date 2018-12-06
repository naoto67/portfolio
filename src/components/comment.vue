<template>
  <div class="comment" v-if="comment">
    <div class="comment__content">
      <vue-typer v-bind:text="comment"
        :repeat='0'
        eraseStyle='clear'
        ></vue-typer>
    </div>
    <p class="comment__sign">▼</p>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'Comment',
  components: {
    VueTyper
  },
  computed: {
    comment() {
      return this.$store.state.comment
    }
  }
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

<style>
.vue-typer .custom.char {
  color: #fff;
}
</style>
