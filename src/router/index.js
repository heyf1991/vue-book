import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/add",
      component: () => import("@/views/Add.vue"),
      meta: { title: "添加" }
    },
    {
      path: "/cart",
      component: () => import("@/views/Cart.vue"),
      meta: { title: "购物车" }
    },
    {
      path: "/detail/:bid",
      component: () => import("@/views/Detail.vue"),
      name: "detail",
      meta: { title: "详情" }
    },
    {
      path: "/home",
      component: () => import("@/views/Home.vue"),
      meta: { keepActive: true, title: "首页" }
    },
    {
      path: "/list",
      component: () => import("@/views/List.vue"),
      meta: { title: "列表" }
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
