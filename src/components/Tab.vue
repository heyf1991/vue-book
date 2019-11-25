<template>
  <div class="footer">
    <router-link to="/home">
    <i class="iconfont icon-shouye"></i>
    首页</router-link>
    <router-link to="/list">
    <i class="iconfont icon-dingdan"></i>
    列表页</router-link>
    <router-link to="/collect">
    <i class="iconfont icon-xihuan"></i>
    收藏</router-link>
    <router-link to="/add">
    <i class="iconfont icon-jiahao"></i>
    添加</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang="less">
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top:1px solid #ccc;
    a{
      display: flex;
      color:yellowgreen;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
    a.router-link-active{
      color: red;
    }
  }
</style>
