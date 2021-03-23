<template>
  <div>
    <!-- <h3>当前最新的count值为:{{$store.state.count}}</h3> -->
    <!-- 使用getter 获取states -->
    <h3>{{$store.getters.showNums}}</h3>
    <button @click="HandleAdd">+1</button>
    <button @click="HandleAddN">+N</button>
    <button @click="HandleAdd3">+async</button>
    <button @click="HandleAdd4">+asyncN</button>
  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    HandleAdd() {
      this.$store.commit('add')
    },
    HandleAddN() {
      this.$store.commit('AddN', 3)
    },
    // 异步让count 自增 1
    HandleAdd3() {
      // 这里dispatch 函数 专门用来触发 actions
      this.$store.dispatch('addAsync')
    },
    HandleAdd4() {
      this.$store.dispatch('addAsyncN', 8)
    }
  }
}
</script>