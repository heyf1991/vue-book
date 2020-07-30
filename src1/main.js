// document.body.innerHTML = 'Hello World'

// vuex主要用于状态（数据）管理，将数据统一起来管理
import Vue from 'vue'
import App from './App.vue'
import store from "./store";



new Vue({
  el: "#app",
  ...App,
  store //让vue管理起来，与router的用法非常像,这样所有的组件都会有一个属性-this.$store
});