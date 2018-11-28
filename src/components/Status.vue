<template>
  <div class="status">
    <h4 class="status__name">{{ name }}</h4>
    <ul>
      <li class="status__item"
        v-for="(value, key) in status">
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
      status: {
        HP: '999',
        MP: '999',
        Lv: '99'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  position: relative;
  width: 100px;
  border: 1px #fff solid;
  border-radius: 10px;
  background-color: #000;
  padding: 10px;
  margin: 10px;
  list-style: none;
  text-align: left;
  &__item {
    color: #ddd;
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
    color: #ddd;
    top: 0;
    transform: translateY(-50%);
    background: #000;
  }
}
</style>
