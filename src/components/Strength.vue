<template>
  <div class="strength">
    <div class="strength__person">
      <List :items="status.name" :clickFunc="click"></List>
    </div>
    <div class="strength__overview" v-if="0==this.$store.state.who">
      <p class="overview_name">{{ status.name[0].title }}</p>
      <p>職業:姫</p>
      <p>レベル:{{ status.status.Lv }}</p>
      <p class="overview_strategy">{{ status.strategy }}</p>
    </div>
    <ul class="strength__status strength__overview" v-if="0==this.$store.state.who">
      <li v-for="(value, key) in status.status">
        <span>{{ key }} : </span>
        <span class="status_value">{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Strength',
  components: {
    List
  },
  computed: {
    status() {
      return {
        name: [{ title: this.$store.state.user.name }],
        status: {
          HP: this.$store.state.user.hp,
          MP: this.$store.state.user.mp,
          Lv: this.$store.state.user.lv,
          '攻撃力': this.$store.state.user.at,
          '守備力': this.$store.state.user.df,
          'すばやさ': this.$store.state.user.sp,
          'かしこさ': this.$store.state.user.it
        },
        strategy: this.$store.state.strategy
      }
    }
  },
  methods: {
    click(index) {
      this.$store.commit('changeWho', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.strength {
  display: block;
  position: absolute;
  left: 180px;
  right: 0px;
  top: 0px;
  &__overview {
    display: inline-block;
    vertical-align: top;
    border: 1px #fff solid;
    border-radius: 10px;
    background-color: #000;
    padding: 10px 0;
    text-align: center;
    color: #fff;
    .overview_name {
      box-sizing: border-box;
      border-bottom: 1px #fff solid;
      margin-bottom: 5px;
    }
    .overview_strategy {
      margin: 0 10px;
    }
    .label {
      display: inline-block;
      width: 50%;
      text-align: right;
    }
    .separate {
    }
  }
  &__status {
    text-align: right;
    padding:  10px;
    width: auto;
    .status_value {
      display: inline-block;
      width: 30px;
    }
  }
  &__person {
    width: 120px;
  }
}
</style>
