<template>
  <div>
    计数器：<button @click="minus">-</button>
    <br>
    当前：{{$store.state.count}}
    <br>
    计数器：<button @click="add">+</button>
  </div>
</template>
<script>
import * as Type from '../store/mutations-type'
export default {
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {},
  methods: {
    add(){
      this.$store.commit(Type.INCREMENT,2) //因为组件是不直接操作state,所以，提交给mutation去干这个事情
    },
    minus(){
      this.$store.commit(Type.DECREMENT)
    }
  }
}
</script>
