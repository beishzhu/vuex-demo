<template>
  <div>
    <!-- <h3>当前最新的count值为:{{count}}</h3> -->
    <!-- 使用mapGetters 获取states 数据 -->
    <h3>{{showNums}}</h3>
    <button @click="sub">-1</button>
    <button @click="subN(5)">-N</button>
    <button @click="subAsync">-1 subAsync1</button>
    <button @click="subAsyncN(3)">-N subAsyncN</button>
  </div>

</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNums'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subAsyncN']),

    // sub1() {
    //   this.sub()
    // },
    // sub2() {
    //   this.subN(5)
    // },
    // subAsync1() {
    //   this.subAsync()
    // },
    // subAsync2() {
    //   this.subAsyncN(3)
    // }
  }
}
</script>