<template>
  <div id="app">
    <!-- 需要缓存的走这里 -->
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepActive"/>
      </keep-alive>
    </transition>
    <!-- 正常的走这里 -->
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepActive"/>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '@/components/Tab.vue'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
  *,p{margin: 0; padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  /* input,button{-webkit-appearance: none} */
  .content{
    position: fixed;
    top: 40px;
    bottom: 50px;
    width: 100%;
    overflow: auto;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.2s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.2s linear;
    opacity: 0;
  }
</style>
