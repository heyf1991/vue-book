// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入bootstrap
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

// 引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

// 引入lazy-load
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576151274125&di=e4147e44763c54a3f572c7ff5a52742c&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F18%2F46%2F16pic_1846253_b.jpg",
  loading:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576151398108&di=ff569d286a4917cd9fda213769fc2e0e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F458412ef0894476c376deb206e089b27160f46ba4452-nMT6Xd_fw658",
  attempt: 1
});

// 路由全局钩子，在进入路由之前 都会进入此方法
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})