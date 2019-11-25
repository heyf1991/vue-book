import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Add from '@/views/Add.vue'
import Collect from "@/views/Collect.vue";
import Detail from "@/views/Detail.vue";
import Home from "@/views/Home.vue";
import List from "@/views/List.vue";

export default new Router({
  routes: [
    { path: "/add", component: Add },
    { path: "/collect", component: Collect },
    { path: "/detail", component: Detail },
    { path: "/home", component: Home },
    { path: "/list", component: List },
    { path: "*", redirect: "/home" }
  ]
});
  