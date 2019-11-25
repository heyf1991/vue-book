<template>
  <header class="header">
    <slot></slot>
    <i class="iconfont icon-shangyiye" v-if="back" @click="goBack"></i>
  </header>
</template>
<script>
export default {
  props:{
    back:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {},
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
  .header{
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    background:yellowgreen;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    i{
      position: absolute;
      left: 10px;
    }
  }
</style>
