<template>
  <div id="app">
    <router-view/>
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
  *{margin: 0; padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{-webkit-appearance: none}
  .content{
    position: fixed;
    top: 40px;
    bottom: 50px;
    width: 100%;
  }
</style>
