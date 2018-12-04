<template>
  <div class="status">
    <h4 class="status__name">{{ status.name }}</h4>
    <ul>
      <li class="status__item"
        v-for="(value, key) in status.status">
        <div class="item__label">{{ key }} :</div>
        <div class="item__data">{{ value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Status',
  data() {
    return {
      name: '加藤純一',
    }
  },
  computed: {
    status() {
      return { 
        name: this.$store.state.user.name,
        status: {
          HP: this.$store.state.user.hp,
          MP: this.$store.state.user.mp,
          Lv: this.$store.state.user.lv
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  display: block;
  width: 100px;
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 10px;
  margin: 0 10px;
  top: 0;
  left: 0;
  list-style: none;
  text-align: left;
  &__item {
    color: #fff;
    .item__label {
      width: 45%;
      display: inline-block;
      text-align: right;
    }
    .item__data {
      display: inline-block;
      width: 45%;
    }
  }
  &__name {
    margin: 0 5px;
    padding: 0 10px;
    position: absolute;
    min-width: 80px;
    display: block;
    color: #ddd;
    top: 0;
    transform: translateY(-50%);
    background: #000;
  }
}
</style>
